import { useState, useEffect } from "react";
import { useRequest } from "ahooks";
import dayjs from "dayjs";
import { Article } from "@/api";
import { getArticleLists } from "@/api/article";
import { staleTime, CacheKey } from "@/api";

export type articleListsType = Record<string, Article[]>;
type ArticleInfosType = {
  articleLists: articleListsType;
  allCategories: string[];
  allLables: string[];
};

export default function useArticleLists() {
  const [articleInfos, setArticleInfos] = useState<ArticleInfosType>({
    articleLists: {},
    allCategories: [],
    allLables: [],
  });

  const { error, loading, data } = useRequest(getArticleLists, {
    retryCount: 3,
    cacheKey: CacheKey.Article,
    staleTime,
  });

  useEffect(() => {
    if (data?.data) {
      let allLables: string[] = [];
      const articleLists = data.data
        /* 按发布时间倒序排列 */
        .sort((a, b) =>
          dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1
        )
        .reduce((pre, cur) => {
          if (cur.lables) allLables = allLables.concat(cur.lables.split(","));
          const curCategory = cur.category ? cur.category : "其他";
          if (pre[curCategory]) pre[curCategory].push(cur);
          else pre[curCategory] = [cur];
          return pre;
        }, {} as articleListsType);

      setArticleInfos({
        articleLists,
        allCategories: Object.keys(articleLists),
        allLables: Array.from(new Set(allLables)),
      });
    }
  }, [data?.data]);

  return { articleInfos, loading, error };
}
