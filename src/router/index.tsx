import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import routers from "./routersCfg";

export default function Main() {
  return (
    <Routes>
      {routers.map((item, i) => (
        <Route
          key={i}
          path={item.path}
          element={
            <Suspense fallback={<div>loading...</div>}>
              <item.component />
            </Suspense>
          }
        />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
