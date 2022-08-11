import CommonPageWrap from "@/components/layouts/commonPageWrap";
import RomanClock from "@/components/clock/romanClock";

export default function Clock() {
  return (
    <CommonPageWrap>
      <RomanClock size={700} />
    </CommonPageWrap>
  );
}
