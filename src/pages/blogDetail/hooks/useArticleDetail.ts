import { useEffect } from "react";
import { useRequest } from "ahooks";
import { isUndefined } from "lodash";
import { Article } from "@/api";
import { getArticleDetailById } from "@/api/article";

export default function useArticleDetail(id?: string) {
  const { run, error, loading, data } = useRequest(getArticleDetailById, {
    manual: true,
    retryCount: 3,
  });
  console.log("data：", data);
  console.log("loading:", loading);
  useEffect(() => {
    !isUndefined(id) && run(id);
  }, [id, run]);

  return { articleInfo: (data as any)?.data as Article, loading, error };
}
