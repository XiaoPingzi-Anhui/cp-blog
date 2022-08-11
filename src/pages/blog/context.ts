import { Article } from "@/api";
import createContext from "@/utils/createContext";

interface State {
  /** 所有的文章列表 */
  allArticles: Record<string, Article[]>;
  /** 经过筛选之后的文章列表 */
  filterArticles: Record<string, Article[]>;
  /** 所有的标签 */
  allLables: string[];
  /** 所有的分类 */
  allCategories: string[];
  /** 加载状态 */
  loading: boolean;
}

const defaultContext: State = {
  allArticles: {},
  filterArticles: {},
  loading: true,
  allLables: [],
  allCategories: [],
};

export const [useCtx, Provider] = createContext<State>(defaultContext);
