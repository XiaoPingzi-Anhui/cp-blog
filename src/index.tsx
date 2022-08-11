import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import performanceReport from "@/utils/performanceReport";

/* 18推荐通过createRoot生成的root进行render，还用旧的ReactDOM.render就没法用并发渲染的新特性 */
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/* 
  root.render没有callback入参了，可通过以下两种方法实现callback
  1.在app的外层div加上ref，    Ref会在应用添加到dom之后同步的执行
    root.render(<App callback={() => console.log("renderered")} />)

    function App({ callback }) {
      return (
        <div ref={callback}>
          <h1>Hello World</h1>
        </div>
      );
    }
  2.在app加上useEffect，在里面执行callback    Effects由于本身的实现是异步的，会有一个小的延迟
    function App() {
      useEffect(() => {
        console.log("renderered")}
      }, []);
      return (
        <div>
          <h1>Hello World</h1>
        </div>
      );
    }
*/

root.render(
  /* StrictMode
    识别不安全的生命周期组件
    有关旧式字符串ref用法的警告
    关于使用废弃的 findDOMNode 方法的警告
    检测意外的副作用
    检测过时的 context API
    但是用了之后开发环境的组件会重复调用！！！！所以还不不用了
  */
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* 性能监测 */
reportWebVitals(performanceReport);
