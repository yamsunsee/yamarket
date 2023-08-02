"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Icon } from ".";

const ThemeSwitch = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return <button onClick={handleToggleTheme}>{theme === "dark" ? <Icon name="sunny" /> : <Icon name="moon" />}</button>;
};

export default ThemeSwitch;
