import React, { useState } from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  FolderOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Layout, Menu, Drawer } from "antd";
import FolderTree from "../utils/FolderTree";

const { Sider } = Layout;

const menuItems = [
  { icon: FolderOutlined, label: "Files" },
  { icon: VideoCameraOutlined, label: "Videos" },
  { icon: UploadOutlined, label: "Uploads" },
  { icon: BarChartOutlined, label: "Statistics" },
  { icon: CloudOutlined, label: "Cloud" },
  { icon: AppstoreOutlined, label: "Applications" },
  { icon: TeamOutlined, label: "Teams" },
  { icon: ShopOutlined, label: "Shop" },
];

const items: MenuProps["items"] = menuItems.map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: item.label,
}));

const drawerContents: Record<string, React.ReactNode> = {
  "1": <FolderTree />,
  "2": <div>Content for Option 2</div>,
  "3": <div>Content for Option 3</div>,
  "4": <div>Content for Option 4</div>,
  "5": <div>Content for Option 5</div>,
  "6": <div>Content for Option 6</div>,
  "7": <div>Content for Option 7</div>,
  "8": <div>Content for Option 8</div>,
};

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [visibleModal, setVisibleModal] = useState<string | null>(null);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setVisibleModal(e.key);
  };

  const handleCloseModal = () => {
    setVisibleModal(null);
  };

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>

      {Object.keys(drawerContents).map((key) => (
        <Drawer
          key={key}
          title={`Option ${key}`}
          placement="right"
          onClose={handleCloseModal}
          visible={visibleModal === key}
        >
          {drawerContents[key]}
        </Drawer>
      ))}
    </Layout>
  );
};

export default Sidebar;
