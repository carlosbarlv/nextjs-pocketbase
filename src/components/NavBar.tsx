"use client";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Link from "next/link";
import React from "react";

const NavBar: React.FunctionComponent = () => {
  return (
    <Header
      style={{
        alignItems: "center",
        display: "flex",
      }}
    >
      <Title level={4} style={{ color: "#fff", width: 300 }}>
        NextJS - Pocket-eCommerce
      </Title>
      <Link href={"/"}>
        Products
      </Link>
    </Header>
  );
};

export default NavBar;
