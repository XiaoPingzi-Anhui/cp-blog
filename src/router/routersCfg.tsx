import { lazy, LazyExoticComponent } from "react";

interface RouterCfg {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
  children?: RouterCfg[];
}

const routers = [
  {
    path: "/",
    component: lazy(() => import("@/pages/home")),
  },
  {
    path: "/blog/:id",
    component: lazy(() => import("@/pages/blog")),
  },
  {
    path: "/clock/:id",
    component: lazy(() => import("@/pages/clock")),
  },
  {
    path: "/game",
    component: lazy(() => import("@/pages/game")),
  },
];

export default routers;
