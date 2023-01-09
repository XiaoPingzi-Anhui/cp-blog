import { useUpdateEffect } from "ahooks";
import { Article } from "@/api";
import { FilterWay } from "../modules/rightCard/filter";
import { useCtx } from "../context";
import { articleListsType } from "./useArticleLists";

interface Props {
  /** 选中的分类 */
  checkedCategory: string[];
  /** 选中的标签 */
  checkedLabel: string[];
  /** 标题搜索关键字 */
  titleKey: string;
  /** 筛选的分类 */
  type: FilterWay;
}

export default function useFilter({
  checkedCategory,
  checkedLabel,
  titleKey,
  type,
}: Props) {
  const {
    state: { allArticles },
    update,
  } = useCtx();

  useUpdateEffect(() => {
    const getCategory = (lists: Article[]) =>
      lists.reduce((pre, cur) => {
        const curCategory = cur.category ? cur.category : "其他";
        if (pre[curCategory]) pre[curCategory].push(cur);
        else pre[curCategory] = [cur];
        return pre;
      }, {} as articleListsType);

    update((draft) => {
      const articles = Object.values(allArticles).flat();
      switch (type) {
        case FilterWay.Category:
          draft.filterArticles = getCategory(
            articles.filter((item) => checkedCategory.includes(item.category))
          );
          break;
        case FilterWay.Label:
          draft.filterArticles = getCategory(
            articles.filter((item) =>
              item.labels
                ? item.labels
                    .split(",")
                    .some((label) => checkedLabel.includes(label))
                : false
            )
          );
          break;
        case FilterWay.Title:
          draft.searchArticles = getCategory(
            titleKey
              ? articles.filter((item) => item.title.includes(titleKey))
              : []
          );
          break;
        default:
          break;
      }
    });
  }, [type, checkedCategory, checkedLabel, titleKey, update]);
}
