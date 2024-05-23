"use client";

import { ConfigProvider, theme } from "antd";
import React from "react";

const ConfigProviderWrapper = ({
  children,
}: {
  readonly children: React.ReactNode;
}) => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ConfigProviderWrapper;
