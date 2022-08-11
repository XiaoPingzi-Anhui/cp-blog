import { useEffect } from "react";
import styled from "styled-components";
import CommonPageWrap from "@/components/layouts/commonPageWrap";
import useArticleLists from "./hooks/useArticleLists";
import MainContent from "./modules/mainContent/mainContent";
import RightCard from "./modules/rightCard/rightCard";
import { useCtx, Provider } from "./context";

const Inner = () => {
  const { articleInfos, loading } = useArticleLists();

  const { update } = useCtx();

  useEffect(() => {
    const { articleLists, allCategories, allLables } = articleInfos;
    console.log("articleInfos:", articleInfos);
    update(() => ({
      allArticles: articleLists,
      filterArticles: articleLists,
      allCategories,
      allLables,
      loading,
    }));
  }, [articleInfos, loading, update]);

  return (
    <CommonPageWrap>
      <ContentWrapper>
        <MainContent />
        <RightCard />
      </ContentWrapper>
    </CommonPageWrap>
  );
};

export default function Clock() {
  return (
    <Provider>
      <Inner />
    </Provider>
  );
}

const ContentWrapper = styled.div`
  display: flex;
  background-color: #f6f6f6;
  justify-content: space-between;
`;
