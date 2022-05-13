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

const showList = ["qq", "wechart"];

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
                  记得添加备注，说明是通过《菜狗搬砖》小站途径添加！
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
    <div className={S.backtop_wrapper}>
      <div className={S.qq_wechart}>{showDom}</div>
      <BackTop {...restProps} className={S.backtop}>
        <VerticalAlignTopOutlined className={S.backtop_icon} />
      </BackTop>
    </div>
  );
};

export default BackToTop;
