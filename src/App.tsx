import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Main from "@/components/layouts";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <AppWrapper>
          <Main />
        </AppWrapper>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;

const AppWrapper = styled.div`
  &:before {
    top: 0;
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
