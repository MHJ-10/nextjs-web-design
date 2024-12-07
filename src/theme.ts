"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

const alibabaFont = localFont({
  src: [
    {
      path: "../public/fonts/Alibaba-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Alibaba-Black.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Alibaba-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Alibaba-Light.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#fdb813",
    },
    secondary: {
      main: "#f7941d",
    },
    text: {
      primary: "#4e5254",
      secondary: "#000000",
    },
    info: {
      main: "#236ead",
    },
  },
  typography: {
    fontFamily: alibabaFont.style.fontFamily,
  },

  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
