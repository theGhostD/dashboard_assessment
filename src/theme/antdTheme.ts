"use client";
import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    controlHeightLG: 45,
    controlHeight: 45,
  },
  components: {
    Input: {
      paddingInline: 16,
      fontFamily: "OpenSauceSans, sans-serif",
    },

    Table: {
      borderColor: "#E9EAEB",
      headerBg: "transparent",
      headerBorderRadius: 0,
      cellPaddingBlock: 16,
      cellPaddingInline: 16,
      headerSplitColor: "transparent",
    },
  },
};
