"use client";

import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { TravelTabProvider } from "./context/TravelTabContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <TravelTabProvider>
          <CssBaseline />
          {children}
        </TravelTabProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Providers;
