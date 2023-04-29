import React from "react";
import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      Henry Navntoft ©{new Date().getFullYear()} Built with Next.js, Ant Design,
      and Supabase
    </AntFooter>
  );
};

export default Footer;
