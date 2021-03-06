import { FC, useMemo } from "react";
import { BackTop, BackTopProps, Popover, Image } from "antd";
import {
  QqOutlined,
  WechatOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import S from "./styles.module.less";
import qqImg from "@/assets/images/qq.png";
import weChartImg from "@/assets/images/wechart.png";

const showList = ["qq", "weChart"];

const BackToTop: FC<BackTopProps> = ({ ...restProps }) => {
  const showDom = useMemo(
    () =>
      showList.map((item, i) => (
        <Popover
          key={i}
          content={
            <div>
              <Image width={100} src={item === "qq" ? qqImg : weChartImg} />
              <p>
                {`扫码添加作者${item === "qq" ? "QQ" : "微信"}，一起交流学习，`}
                <strong>
                  请添加备注，说明是通过《菜狗搬砖》小站途径添加！否则作者可能不会通过验证！
                </strong>
              </p>
            </div>
          }
          trigger="hover"
          placement="leftBottom"
          overlayClassName={S.popOverlay}
        >
          {item === "qq" ? <QqOutlined /> : <WechatOutlined />}
        </Popover>
      )),
    []
  );

  return (
    <div className={S.backTop_wrapper}>
      <div className={S.qq_weChart}>{showDom}</div>
      <BackTop {...restProps} className={S.backTop}>
        <VerticalAlignTopOutlined className={S.backTop_icon} />
      </BackTop>
    </div>
  );
};

export default BackToTop;
