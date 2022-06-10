import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/home";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/?:id" element={<Blog />} />
        <Route path="/clock/:id" element={<Clock />} />
        <Route path="/game" element={<Game />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

function Clock() {
  return <div>时钟</div>;
}
function Blog() {
  return <div>博客</div>;
}
function Game() {
  return <div>游戏</div>;
}
