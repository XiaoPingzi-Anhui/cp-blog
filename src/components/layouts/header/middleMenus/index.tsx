import { FC } from "react";
import {
  HomeOutlined,
  ReadOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HEADER_HEIGHT } from "@/components/layouts/layoutsConfigs";

const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章",
    key: "/blog",
    icon: <ReadOutlined />,
  },
  {
    label: "时钟鉴赏",
    key: "/clock/romanClock",
    icon: <DashboardOutlined />,
  },
  {
    label: "小游戏",
    key: "/game",
    icon: (
      <span
        role="img"
        aria-label="dashboard"
        className="anticon anticon-dashboard"
      >
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3711"
          width="16"
          height="16"
        >
          <path
            d="M725.333333 149.333333c141.376 0 256 114.624 256 256v298.666667a170.666667 170.666667 0 1 1-341.333333 0v-42.666667H383.978667L384 704a170.666667 170.666667 0 1 1-341.333333 0V405.333333C42.666667 263.957333 157.290667 149.333333 298.666667 149.333333h426.666666z m-21.333333 64H320c-115.84 0-210.090667 92.309333-213.248 207.36L106.666667 426.666667v277.333333a106.666667 106.666667 0 0 0 213.226666 4.629333L320 704v-85.333333a21.333333 21.333333 0 0 1 21.333333-21.333334h341.333334a21.333333 21.333333 0 0 1 21.333333 21.333334v85.333333a106.666667 106.666667 0 0 0 213.226667 4.629333L917.333333 704V426.666667c0-117.824-95.509333-213.333333-213.333333-213.333334z m10.666667 256a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m-405.333334-128a32 32 0 0 1 32 32V405.333333h32a32 32 0 0 1 0 64H341.333333v32a32 32 0 0 1-64 0V469.333333h-32a32 32 0 0 1 0-64H277.333333v-32a32 32 0 0 1 32-32z m469.333334 64a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m-128 0a32 32 0 1 1 0 64 32 32 0 0 1 0-64z m64-64a32 32 0 1 1 0 64 32 32 0 0 1 0-64z"
            fill="black"
            p-id="3712"
          ></path>
        </svg>
      </span>
    ),
  },
];

const MiddleMenus: FC = () => {
  return (
    <MenuWrapper>
      {items.map((item, i) => (
        <li key={i} className={""}>
          <NavLink
            to={item.key}
            className={({ isActive }) =>
              isActive ? "li-item li-item-active" : "li-item"
            }
          >
            {item.icon}
            <span className={"header-menu-text"}>{item.label}</span>
          </NavLink>
        </li>
      ))}
    </MenuWrapper>
  );
};

export default MiddleMenus;

const MenuWrapper = styled.ul`
  min-width: max-content;
  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
  margin-bottom: 0;
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none; // 这个属性可以去掉li前面默认的黑点
  .li-item {
    height: 100%;
    display: inline-block;
    color: #4d5164;
    font-size: 16px;
    font-weight: 600;
  }
  .li-item-active {
    color: #0171f6;
    svg {
      path {
        fill: #0171f6;
      }
    }
  }
  .header-menu-text {
    padding-left: 6px;
  }
`;
