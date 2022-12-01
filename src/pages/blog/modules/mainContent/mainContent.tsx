import { Skeleton } from "antd";
import styled from "styled-components";
import { useCtx } from "../../context";
import {
  PAGE_MARGIN_TOP,
  PAGE_MARGIN_BOTTOM,
  PAGE_MARGIN_MIN,
} from "@/components/layouts/commonPageWrap";
import ArticleLists from "./articleLists";
import { RIGHT_CARD_WIDTH } from "../rightCard/rightCard";

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
  width: calc(100% - ${PAGE_MARGIN_MIN * 2 + RIGHT_CARD_WIDTH}px);
  min-height: calc(100vh - ${PAGE_MARGIN_TOP + PAGE_MARGIN_BOTTOM}px);
`;
