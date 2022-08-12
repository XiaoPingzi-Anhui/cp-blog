import React from "react";
import { Skeleton } from "antd";
import styled from "styled-components";
import { useCtx } from "../../context";
import Filter from "./filter";

export default function RightCard() {
  const {
    state: { loading },
  } = useCtx();

  return (
    <RightCardWrapper>
      {loading ? (
        <Skeleton active paragraph={{ rows: 10 }} />
      ) : (
        <>
          <Filter />
        </>
      )}
    </RightCardWrapper>
  );
}

const RightCardWrapper = styled.div`
  height: 400px;
  width: 440px;
  background: #fff;
  margin-top: 80px;
  margin-left: 10px;
  padding: 16px 10px;
`;
