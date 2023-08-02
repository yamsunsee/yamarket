"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Theme;
