import Poem from "@/components/todayPoetry";
import RomanClock from "@/components/clock/romanClock";

export default function Home() {
  return (
    <>
      <div style={{ height: 1500 }}>
        <Poem />
      </div>
      <RomanClock size={700} />
    </>
  );
}
