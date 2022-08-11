import React from "react";
import { Collapse, Badge, Card, Tag, Col, Divider, Row } from "antd";
import dayjs from "dayjs";
import { EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useCtx } from "../../context";
import { colorLists, tagColors } from "@/assets/styles/colors";

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
                    <Col span={8}>
                      发布时间：{dayjs(createdAt).format("YYYY-MM-DD")}
                    </Col>
                    <Col span={14}>
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
