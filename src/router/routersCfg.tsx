import { lazy, LazyExoticComponent } from "react";
import Home from "@/pages/home";

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
    component: lazy(() => import("@/pages/blog")),
  },
  {
    path: `${BlogDetailUrl}/:id`,
    component: lazy(() => import("@/pages/blogDetail")),
  },
  {
    path: `${ClockUrl}/:id`,
    component: lazy(() => import("@/pages/clock")),
  },
  {
    path: GameUrl,
    component: lazy(() => import("@/pages/game")),
  },
];

export default routers;
