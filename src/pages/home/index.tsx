import Poem from "@/components/todayPoetry";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <TopBackground />
      {/* <div style={{ height: 1500 }}> */}
      <Poem />
      {/* </div> */}
    </>
  );
}

const TopBackground = styled.div`
  background: url(https://picsum.photos/1920/1280) center/cover;
  height: 100vh;
`;
