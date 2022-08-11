import { useState } from "react";
import { useRequest } from "ahooks";
import { Article } from "@/api";
import { getArticleLists } from "@/api/article";

type articleListsType = Record<string, Article[]>;
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

  const { error, loading } = useRequest(getArticleLists, {
    onSuccess: (data) => {
      if (data?.data) {
        let allLables: string[] = [];
        const articleLists = data.data.reduce((pre, cur) => {
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
    },
  });

  return { articleInfos, loading, error };
}
