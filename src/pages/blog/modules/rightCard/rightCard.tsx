import React from "react";
import { Skeleton } from "antd";
import styled from "styled-components";
import { useCtx } from "../../context";

export default function RightCard() {
  const {
    state: { allCategories, allLables, loading },
  } = useCtx();

  return (
    <RightCardWrapper>
      {loading ? <Skeleton active /> : "rightCard"}
    </RightCardWrapper>
  );
}

const RightCardWrapper = styled.div`
  height: 400px;
  width: 400px;
  background: #fff;
  margin-top: 80px;
  margin-left: 10px;
`;
