import styled from "styled-components";
import CommonPageWrap from "@/components/layouts/commonPageWrap";
import RomanClock from "@/components/clock/romanClock";

export default function Clock() {
  return (
    <CommonPageWrap>
      <ClockWrapper>
        <RomanClock size={800} />
      </ClockWrapper>
    </CommonPageWrap>
  );
}

const ClockWrapper = styled.div``;
