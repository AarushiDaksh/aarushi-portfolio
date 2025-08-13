"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { FaCircleHalfStroke } from "react-icons/fa6";

const themes = ["light", "dark", "dracula"] as const;
type ThemeName = (typeof themes)[number];

const LABELS: Record<ThemeName, string> = {
  light: "Light",
  dark: "Dark",
  dracula: "Dracula",
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={themes as unknown as string[]} // next-themes expects string[]
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export const ThemeSwitch: React.FC = () => {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const currentTheme = (theme ?? resolvedTheme ?? "light") as ThemeName;
  const safeIndex = Math.max(0, themes.indexOf(currentTheme));
  const cycleTheme = () => {
    const nextTheme = themes[(safeIndex + 1) % themes.length];
    setTheme(nextTheme);
  };

  if (!mounted) {
    return <FaCircleHalfStroke className="h-[14px] w-[14px]" aria-hidden="true" />;
  }

  return (
    <button
      id="theme-toggle"
      aria-label={`Switch theme (current: ${LABELS[currentTheme]})`}
      onClick={cycleTheme}
      className="flex items-center justify-center px-2 py-1 rounded hover:opacity-80 transition"
      type="button"
    >
      <FaCircleHalfStroke className="h-[14px] w-[14px]" />
      <span className="ml-2">{LABELS[currentTheme]}</span>
    </button>
  );
};
