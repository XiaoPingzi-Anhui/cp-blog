import { useState } from "react";
import { useMount } from "ahooks";
import styled from "styled-components";

const getPoem = require("jinrishici");

export default function TodayPoetry() {
  const [poem, setPoem] = useState("");

  useMount(() => {
    getPoem.load(
      (res: {
        data: {
          content: string;
        };
      }) => setPoem(res.data.content)
    );
  });

  return (
    <PoemWrapper text={poem}>{poem.substring(0, poem.length - 1)}</PoemWrapper>
  );
}

const PoemWrapper = styled.div<{ text: string }>`
  font-size: 40px;
  position: relative;
  text-align: center;
  background-image: -webkit-linear-gradient(right, #355c7d, #6c5b7b, #c06c84);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
