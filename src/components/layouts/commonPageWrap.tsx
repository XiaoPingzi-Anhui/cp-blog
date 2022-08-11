import { ReactNode } from "react";
import styled from "styled-components";

/** 外层页面的marginTop */
export const PageMarginTop = 60;
/** 外层页面的marginBottom */
export const PageMarginBottom = 20;

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
  margin: ${PageMarginTop}px 20px ${PageMarginBottom}px;
  @media (min-width: 1366px) {
    margin: ${PageMarginTop}px 60px ${PageMarginBottom}px;
  }
`;
