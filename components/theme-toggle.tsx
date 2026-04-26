"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch — next-themes can't know the theme on the server
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="text-sm font-normal opacity-0">dark</button>;
  }

  return (
    <button
      id="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors duration-150 ease-in-out cursor-pointer"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}
