import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import { BrowserRouter } from "react-router-dom";
// import { AliveScope } from "react-activation";
import Main from "@/components/layouts";

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        {/* <AliveScope> */}
        <Main />
        {/* </AliveScope> */}
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
