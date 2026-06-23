import { DM_Sans, Geist, Inter, Outfit, Roboto } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const corpoS = localFont({
  src: [
    {
      path: "../../../public/fonts/corpo_s.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/corpo_s.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-corpo-s",
});

export const fontRegistry = {
  inter: {
    label: "Inter",
    font: inter,
  },
  roboto: {
    label: "Roboto",
    font: roboto,
  },
  geist: {
    label: "Geist",
    font: geist,
  },
  outfit: {
    label: "Outfit",
    font: outfit,
  },
  dmSans: {
    label: "DM Sans",
    font: dmSans,
  },
  corpoS: {
    label: "Corpo S",
    font: corpoS,
  },
} as const;

export type FontKey = keyof typeof fontRegistry;

export const fontVars = (Object.values(fontRegistry) as Array<(typeof fontRegistry)[FontKey]>)
  .map((f) => f.font.variable)
  .join(" ");

export const fontOptions = (Object.entries(fontRegistry) as Array<[FontKey, (typeof fontRegistry)[FontKey]]>).map(
  ([key, f]) => ({
    key,
    label: f.label,
    variable: f.font.variable,
  }),
);
