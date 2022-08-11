import React from "react";
import { Collapse, Badge, Card, Tag, Col, Row } from "antd";
import dayjs from "dayjs";
import { EyeOutlined } from "@ant-design/icons";
import { useCtx } from "../../context";
//import { colorLists, tagColors } from "@/assets/styles/colors";
export const colorLists = [
  "#3986fe", // blue
  "#f26279", // pink
  "#f9d237", // yellow
  "#35caca", // seagreen
  "#73e6bf", // lightgreen
  "#4cca72", // green
  "#f57f50", // orange
  "#db80d1", // purpose
  "#9d8aee", // lightpurpose
  "#529ceb", // lightblue
  "#965ee3", // darkpurpose
  "#f08882", // lightorange
  "#60c3d2", // lightseageen
  "#edb965", // lightyellow
  "#7d90db", // slateblue
  "#9cd88a", // grassgreen
];

export const tagColors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const { Panel } = Collapse;

export default function ArticleLists() {
  const {
    state: { filterArticles },
  } = useCtx();

  const articleAry = Object.entries(filterArticles);
  return (
    <Collapse defaultActiveKey={articleAry?.[0]?.[0] ?? ""}>
      {articleAry.map(([category, articles], i) => (
        <Panel header={category} key={category}>
          {articles.map(
            ({ title, category, _id, readCount, lables, createdAt }) => (
              <Badge.Ribbon text={category} key={_id} color={colorLists[i]}>
                <Card hoverable title={title} size="small">
                  <Row>
                    <Col span={9}>
                      发布时间：{dayjs(createdAt).format("YYYY-MM-DD")}
                    </Col>
                    <Col span={13}>
                      {lables ? (
                        <>
                          标签：
                          {lables?.split(",")?.map((item, i) => (
                            <Tag
                              key={i}
                              color={
                                tagColors[
                                  Math.floor(Math.random() * tagColors.length)
                                ]
                              }
                            >
                              {item}
                            </Tag>
                          ))}
                        </>
                      ) : null}
                    </Col>
                    <Col span={1}>
                      <EyeOutlined />
                      {readCount}
                    </Col>
                  </Row>
                </Card>
              </Badge.Ribbon>
            )
          )}
        </Panel>
      ))}
    </Collapse>
  );
}
