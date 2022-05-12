import Home from "@/pages/home";
import Header from "@/components/layouts/header";
import S from "./styles.module.less";

function App() {
  return (
    <div className={S.appWrapper}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
