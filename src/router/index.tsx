// import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import { KeepAlive } from "react-activation";
import routers from "./routersCfg";

export default function Main() {
  return (
    <Routes>
      {routers.map((item, i) => (
        <Route
          key={item.path}
          path={item.path}
          element={
            <>
              {/* <Suspense fallback={<div>loading...</div>}>*/}
              {/* <KeepAlive id={String(i)}> */}
              <item.component />
              {/* </KeepAlive> */}
              {/* </Suspense>*/}
            </>
          }
        />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
