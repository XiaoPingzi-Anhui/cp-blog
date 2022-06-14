import { useRef } from "react";
import styled from "styled-components";
import BackToTop from "@/components/backTop";
import Header from "@/components/layouts/header";
import PageRoutes from "@/router";

export default function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <PageRoutes />
      <BackToTop target={() => scrollRef.current || window} />
    </>
  );
}
