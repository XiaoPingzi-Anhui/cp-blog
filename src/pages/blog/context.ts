import { Article } from "@/api";
import createContext from "@/utils/createContext";

interface State {
  /** 所有的文章列表 */
  allArticles: Record<string, Article[]>;
  /** 经过筛选之后的,展示出来的文章列表 */
  filterArticles: Record<string, Article[]>;
  /** 搜索关键字匹配的文章列表 */
  searchArticles: Record<string, Article[]>;
  /** 所有的标签 */
  alllabels: string[];
  /** 所有的分类 */
  allCategories: string[];
  /** 加载状态 */
  loading: boolean;
}

const defaultContext: State = {
  allArticles: {},
  filterArticles: {},
  searchArticles: {},
  loading: true,
  alllabels: [],
  allCategories: [],
};

export const [useCtx, Provider] = createContext<State>(defaultContext);
