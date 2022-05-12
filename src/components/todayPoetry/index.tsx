import { useState } from "react";
import { useMount } from "ahooks";

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

  return <div>{poem}</div>;
}
