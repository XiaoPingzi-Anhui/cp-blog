import React from "react";
import styled from "styled-components";
import S from "./styles.module.less";
import { HEADER_HEIGHT } from "../layoutsConfigs";

export default function Header() {
  return <HeaderWrapper></HeaderWrapper>;
}

const HeaderWrapper = styled.div`
  height: ${HEADER_HEIGHT}px;
  background-color: red;
`;
