import { Skeleton } from "antd";
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
          <Skeleton active paragraph={{ rows: 20 }} />
        ) : (
          <ShowMarkDown markDownText={articleInfo?.content ?? ""} />
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
