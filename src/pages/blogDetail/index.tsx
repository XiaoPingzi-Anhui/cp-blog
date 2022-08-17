import { Skeleton, Divider } from "antd";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CommonPageWrap from "@/components/layouts/commonPageWrap";
import useArticleDetail from "./hooks/useArticleDetail";
import ShowMarkDown from "@/components/markdown/showMarkDown";

export default function Index() {
  const { id } = useParams();
  const { articleInfo, loading } = useArticleDetail(id);

  return (
    <CommonPageWrap>
      <ArticleWrapper>
        {loading ? (
          <>
            <Skeleton active paragraph={{ rows: 2 }} />
            <Skeleton active paragraph={{ rows: 10 }} />
          </>
        ) : (
          <>
            <ArticleHeader>
              <h1>{articleInfo?.title}</h1>
              <span>
                发布于：
                {dayjs(articleInfo?.createdAt).format("YYYY-MM-DD HH:mm")}
              </span>
              <span>归类：《{articleInfo?.category}》</span>
              <span>阅读量：{articleInfo?.readCount}</span>
              <Divider dashed className="divider" />
            </ArticleHeader>
            <ShowMarkDown markDownText={articleInfo?.content ?? ""} />
          </>
        )}
      </ArticleWrapper>
    </CommonPageWrap>
  );
}

const ArticleWrapper = styled.div`
  padding: 32px;
  pre {
    div {
      border-radius: 6px;
    }
  }
`;

const ArticleHeader = styled.header`
  span {
    color: #888;
    margin-right: 30px;
  }
  .divider {
    border-top: 1px dashed #ccc;
    margin: 16px 0;
  }
`;
