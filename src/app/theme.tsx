"use client";

import { createTheme, ThemeProvider } from "@fluentui/react";
import { ReactNode, useEffect, useState } from "react";

const myTheme = createTheme({
  palette: {
    themePrimary: "#000000",
    themeLighterAlt: "#898989",
    themeLighter: "#737373",
    themeLight: "#595959",
    themeTertiary: "#373737",
    themeSecondary: "#2f2f2f",
    themeDarkAlt: "#252525",
    themeDark: "#151515",
    themeDarker: "#0b0b0b",
    neutralLighterAlt: "#f8f8f8",
    neutralLighter: "#f4f4f4",
    neutralLight: "#eaeaea",
    neutralQuaternaryAlt: "#dadada",
    neutralQuaternary: "#d0d0d0",
    neutralTertiaryAlt: "#c8c8c8",
    neutralTertiary: "#595959",
    neutralSecondary: "#373737",
    neutralSecondaryAlt: "#373737",
    neutralPrimaryAlt: "#2f2f2f",
    neutralPrimary: "#000000",
    neutralDark: "#151515",
    black: "#0b0b0b",
    white: "#ffffff",
  },
});

const Theme = ({ children }: { children: ReactNode }) => {
  const [isHidrated, setIsHidrated] = useState(false);

  useEffect(() => {
    setIsHidrated(true);
  }, []);

  if (!isHidrated) {
    return null;
  }

  return (
    <ThemeProvider applyTo="body" theme={myTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
