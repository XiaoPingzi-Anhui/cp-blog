import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styled from "styled-components";
import Home from "@/components/home";
import Header from "@/components/layouts/header";
import { HEADER_HEIGHT } from "@/components/layouts/layoutsConfigs";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <AppWrapper>
        <Header />
        <Home />
      </AppWrapper>
    </ConfigProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  &:before {
    top: ${HEADER_HEIGHT}px;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    z-index: -1;
    content: "";
    position: fixed;
    background: url(https:\//api.paugram.com/wallpaper/) center/cover;
  }
`;
