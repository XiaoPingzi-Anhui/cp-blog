import styled from "styled-components";
import { useThrottleEffect, useSafeState, useBoolean } from "ahooks";
import MiddleMenus from "@/components/layouts/header/middleMenus";
import { HEADER_HEIGHT } from "../layoutsConfigs";
import useDocumentScroll from "@/utils/useDucumentScroll";
import logoSvg from "@/assets/images/logo.svg";

export default function Header() {
  const scrollPosition = useDocumentScroll();
  const [throttleTop, setThrottleTop] = useSafeState(0);
  const [showHeader, { set }] = useBoolean(true);

  useThrottleEffect(
    () => {
      if (scrollPosition?.top) {
        set(scrollPosition?.top < throttleTop);
        setThrottleTop(scrollPosition?.top);
      }
    },
    [scrollPosition?.top, set, setThrottleTop],
    { wait: 300 }
  );

  return (
    <HeaderWrapper showHeader={showHeader}>
      <div className={"left-wrapper"}>
        <img src={logoSvg} alt={""}></img>
        <div className={"left-title"}>菜狗搬砖小站</div>
      </div>

      <MiddleMenus />

      {/*<div>我是右边的内容</div>*/}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div<{ showHeader: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 1280px;
  height: ${HEADER_HEIGHT}px;
  background: #f3f9f1;
  ${({ showHeader }) => (showHeader ? "opacity:1;" : "opacity:0;height:0")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.5s;
  box-shadow: 0 3px 4px -2px #f0fcff;
  .left-wrapper {
    display: flex;
    padding-left: 5%;
    .left-title {
      color: #312520;
      font-size: 24px;
      font-family: "Open Sans", sans-serif;
      font-weight: bold;
      margin: auto;
      padding-left: 5px;
    }
  }
`;
