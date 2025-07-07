import { Globe } from "@/components/magicui/globe";
import { useTheme } from "@/components/theme-provider";
import { type COBEOptions } from "cobe";
import { useState, useEffect } from "react";

export function GlobeDemo() {
  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else if (theme === "system") {
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };

    updateTheme();

    // Listen for system theme changes when in system mode
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => updateTheme();
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  // Create theme-aware globe config
  const themeConfig: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: isDark ? 1 : 0, // 0 for light mode, 1 for dark mode
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: isDark ? 2.5 : 1.2,
    baseColor: isDark ? [0.2, 0.2, 0.2] : [1, 1, 1], // Dark grey for dark mode, white for light mode
    markerColor: [251 / 255, 100 / 255, 21 / 255], // Keep orange marker
    glowColor: isDark ? [0.2, 0.2, 0.2] : [1, 1, 1], // Match base color
    markers: [
      { location: [45.4201, -75.7003], size: 0.15 }, // Ottawa, Canada
    ],
  };

  return (
    <div className="relative flex w-full h-96 max-w-2xl items-center justify-center">
      <Globe config={themeConfig} />
    </div>
  );
}
