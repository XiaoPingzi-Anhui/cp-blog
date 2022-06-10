import React from "react";
import styled from "styled-components";
import MiddleMenus from "@/components/layouts/header/middleMenus";
import { HEADER_HEIGHT } from "../layoutsConfigs";

export default function Header() {
  return (
    <HeaderWrapper>
      <div>haha</div>
      <MiddleMenus />
      <div>22</div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  height: ${HEADER_HEIGHT}px;
  background-color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
