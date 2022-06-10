import { useRef } from "react";
import styled from "styled-components";
import BackToTop from "@/components/backTop";
import { HEADER_HEIGHT } from "@/components/layouts/layoutsConfigs";
import Header from "@/components/layouts/header";
import PageRoutes from "@/router";

export default function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <MainWrapper ref={scrollRef}>
        <PageRoutes />
      </MainWrapper>
      <BackToTop target={() => scrollRef.current || window} />
    </>
  );
}

const MainWrapper = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  overflow-y: overlay;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #68739080;
    border: 2px solid transparent;
    border-radius: 6px;
    &:hover {
      background-color: #7886aa99;
    }
  }
`;
