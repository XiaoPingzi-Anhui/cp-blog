import { ReactNode } from "react";
import styled from "styled-components";

/** 外层页面的marginTop */
export const PAGE_MARGIN_TOP = 60;
/** 外层页面的marginBottom */
export const PAGE_MARGIN_BOTTOM = 20;
/** 外层页面左右两边的小margin */
export const PAGE_MARGIN_MIN = 20;
/** 外层页面左右两边的大margin */
export const PAGE_MARGIN_MAX = 60;

export default function CommonPageWrap({ children }: { children: ReactNode }) {
  return (
    <PageWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #f6f6f6;
  @media (max-width: 1279px) {
    min-width: 1226px;
  }
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  min-height: calc(100vh - ${PAGE_MARGIN_TOP + PAGE_MARGIN_BOTTOM}px);
  margin: ${PAGE_MARGIN_TOP}px ${PAGE_MARGIN_MIN}px ${PAGE_MARGIN_BOTTOM}px;
  @media (min-width: 1366px) {
    margin: ${PAGE_MARGIN_TOP}px ${PAGE_MARGIN_MAX}px ${PAGE_MARGIN_BOTTOM}px;
  }
`;
