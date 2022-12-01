import { Skeleton } from "antd";
import styled from "styled-components";
import {
  PAGE_MARGIN_MIN,
  PAGE_MARGIN_MAX,
} from "@/components/layouts/commonPageWrap";
import { useCtx } from "../../context";
import Filter from "./filter";

export const RIGHT_CARD_WIDTH = 440;

export default function RightCard() {
  const {
    state: { loading },
  } = useCtx();

  return (
    <RightCardWrapper>
      {loading ? <Skeleton active paragraph={{ rows: 10 }} /> : <Filter />}
    </RightCardWrapper>
  );
}

const RightCardWrapper = styled.div`
  height: 400px;
  width: ${RIGHT_CARD_WIDTH}px;
  background: #fff;
  margin-left: 10px;
  padding: 16px 10px;
  position: fixed;
  right: ${PAGE_MARGIN_MIN}px;
  @media (min-width: 1366px) {
    right: ${PAGE_MARGIN_MAX}px;
  }
  @media (max-width: 1280px) {
    left: 810px;
  }
`;
