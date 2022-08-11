import { Skeleton } from "antd";
import styled from "styled-components";
import { useCtx } from "../../context";
import {
  PageMarginTop,
  PageMarginBottom,
} from "@/components/layouts/commonPageWrap";
import ArticleLists from "./articleLists";

export default function MainContent() {
  const {
    state: { loading },
  } = useCtx();

  return (
    <ContentWrapper>
      {loading ? (
        <Skeleton active paragraph={{ rows: 20 }} />
      ) : (
        <ArticleLists />
      )}
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 40px 50px 20px;
  width: 100%;
  min-height: calc(100vh - ${PageMarginTop + PageMarginBottom}px);
`;
