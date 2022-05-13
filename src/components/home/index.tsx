import { useRef } from "react";
import styled from "styled-components";
import BackToTop from "@/components/backTop";
import { HEADER_HEIGHT } from "../layouts/layoutsConfigs";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HomeWrapper ref={scrollRef}>
        <div
          style={{ height: 1500 }}
        >hello</div>
      </HomeWrapper>
      <BackToTop target={() => scrollRef.current || window} />
    </>
  );
}

const HomeWrapper = styled.div`
  height: calc(100vh - ${HEADER_HEIGHT}px);
  overflow-y: visible;
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
