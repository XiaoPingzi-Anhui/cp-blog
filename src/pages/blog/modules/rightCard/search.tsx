import { useEffect, useMemo } from "react";
import { AutoComplete, Input } from "antd";
import { useCtx } from "../../context";

export default function Search({
  onChange,
}: {
  onChange: (value: string) => void;
}) {
  const {
    state: { searchArticles },
  } = useCtx();

  const options = useMemo(() => {
    const articleAry = Object.entries(searchArticles);
    console.log("articleAry:", articleAry);
    return [
      {
        value: "",
        label:
          articleAry.length === 0 ? (
            <div></div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>共100条结果</span>
            </div>
          ),
      },
    ].concat(
      articleAry.map(([category, lists]) => ({
        value: "",
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>共100条结果</span>
          </div>
        ),
      }))
    );
  }, [searchArticles]);

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={() => {}}
      onSearch={onChange}
    >
      <Input.Search
        size="large"
        placeholder="请输入关键字并点击下拉结果查看"
        enterButton
      />
    </AutoComplete>
  );
}
