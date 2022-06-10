import { useState, FC } from "react";
import {
  HomeOutlined,
  ReadOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HEADER_HEIGHT } from "@/components/layouts/layoutsConfigs";

const HOME_KEY = "/";

const items: MenuProps["items"] = [
  {
    label: "首页",
    key: HOME_KEY,
    icon: <HomeOutlined />,
  },
  {
    label: "文章",
    key: "/blog",
    icon: <ReadOutlined />,
  },
  {
    label: "时钟鉴赏",
    key: "/clock",
    icon: <DashboardOutlined />,
    children: [
      {
        label: "罗马时钟",
        key: "/clock/romanClock",
      },
    ],
  },
  {
    label: "小游戏",
    key: "/game",
    icon: <DashboardOutlined />,
  },
];

const MiddleMenus: FC = () => {
  const [current, setCurrent] = useState(HOME_KEY);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    navigate(e.key ?? HOME_KEY);
    setCurrent(e.key);
  };

  return (
    <MenuWrapper
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default MiddleMenus;

const MenuWrapper = styled(Menu)`
  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
  width: 60%;
  min-width: max-content;
  display: flex;
  justify-content: space-evenly;
  &:before,
  &:after {
    display: none;
  }
`;
