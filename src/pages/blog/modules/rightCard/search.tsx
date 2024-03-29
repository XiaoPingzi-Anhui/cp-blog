import { useMemo } from "react";
import styled from "styled-components";
import { useMemoizedFn } from "ahooks";
import { AutoComplete, Input, Empty } from "antd";
import { useCtx } from "../../context";
import searchPng from "@/assets/images/search.png";

export default function Search({
  onChange,
  searchKey,
}: {
  onChange: (value: string) => void;
  searchKey: string;
}) {
  const {
    state: { searchArticles },
    update,
  } = useCtx();

  const options = useMemo(() => {
    const articleAry = Object.entries(searchArticles);
    const articleCount = articleAry.reduce(
      (pre, cur) => pre + cur[1].length,
      0
    );
    return searchKey
      ? [
          {
            value: "查看所有结果",
            key: "allOrEmpty",
            checkedArticle: searchArticles,
            label:
              articleAry.length === 0 ? (
                <Empty />
              ) : (
                <ListItem>
                  <p>
                    共<span className="count-text">{articleCount}</span>条结果
                  </p>
                </ListItem>
              ),
          },
        ].concat(
          articleAry.map(([category, lists]) => ({
            value: `查看${category}分类中的结果`,
            key: category,
            checkedArticle: { [category]: lists },
            label: (
              <ListItem>
                <p>
                  在<span className="highlight-text">{category}</span>中有
                  <span className="count-text">{lists.length}</span>条结果
                </p>
              </ListItem>
            ),
          }))
        )
      : [];
  }, [searchArticles, searchKey]);

  const onSelect = useMemoizedFn((value, option) =>
    update((draft) => {
      draft.filterArticles = option.checkedArticle;
    })
  );

  return (
    <AutoComplete
      style={{ width: "100%" }}
      options={options}
      onSelect={onSelect}
      onSearch={onChange}
      autoFocus
    >
      <MyInput
        placeholder="请输入关键字并点击下拉结果查看"
        prefix={<img src={searchPng} alt="" />}
        autoFocus
        allowClear
        bordered
      />
    </AutoComplete>
  );
}

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  .count-text {
    color: #0171f6;
  }
  .highlight-text {
    color: #fe3a2f;
  }
  p {
    margin-bottom: 0;
    line-height: 24px;
  }
`;

const MyInput = styled(Input)`
  box-shadow: none !important;
`;
