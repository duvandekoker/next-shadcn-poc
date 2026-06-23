export const THEME_MODE_OPTIONS = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
] as const;

export const THEME_MODE_VALUES = THEME_MODE_OPTIONS.map((o) => o.value);
export type ThemeMode = (typeof THEME_MODE_VALUES)[number];
export type ResolvedThemeMode = "light" | "dark";

// --- generated:themePresets:start ---

export const THEME_PRESET_OPTIONS = [
  {
    label: "Default",
    value: "default",
    primary: {
      light: "oklch(0.5934 0.2006 240.6)",
      dark: "oklch(0.5497 0.1948 245)",
    },
  },
  {
    label: "Theme MBOS V1",
    value: "theme-mbos-v1",
    primary: {
      light: "oklch(0 0 0)",
      dark: "oklch(0.5497 0.1948 245)",
    },
  },
  {
    label: "Theme MBOS V2",
    value: "theme-mbos-v2",
    primary: {
      light: "oklch(0 0 0)",
      dark: "oklch(0.5497 0.1948 245)",
    },
  },
  {
    label: "Theme Test",
    value: "theme-test",
    primary: {
      light: "oklch(0.8348 0.1302 160.908)",
      dark: "oklch(0.4365 0.1044 156.7556)",
    },
  },
] as const;

export const THEME_PRESET_VALUES = THEME_PRESET_OPTIONS.map((p) => p.value);

export type ThemePreset = (typeof THEME_PRESET_OPTIONS)[number]["value"];

// --- generated:themePresets:end ---
