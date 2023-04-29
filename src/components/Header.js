import React from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
