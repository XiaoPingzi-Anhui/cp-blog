import { /* lazy, */ LazyExoticComponent } from "react";
import Home from "@/pages/home";
import BlogList from "@/pages/blog";
import BlogDetail from "@/pages/blogDetail";
import Clock from "@/pages/clock";
import Game from "@/pages/game";

interface RouterCfg {
  path: string;
  component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  children?: RouterCfg[];
}

/** 首页 */
export const HomeUrl = "/";
/** 博客列表 */
export const BlogListsUrl = "/blogLists";
/** 博客详情页 */
export const BlogDetailUrl = "/blogDetail";
/** 时钟鉴赏 */
export const ClockUrl = "/clock";
/** 游戏 */
export const GameUrl = "/game";

const routers: RouterCfg[] = [
  {
    path: HomeUrl,
    component: Home,
  },
  {
    path: BlogListsUrl,
    // component: lazy(() => import("@/pages/blog")),
    component: BlogList,
  },
  {
    path: `${BlogDetailUrl}/:id`,
    component: BlogDetail,
  },
  {
    path: `${ClockUrl}/:id`,
    component: Clock,
  },
  {
    path: GameUrl,
    component: Game,
  },
];

export default routers;
