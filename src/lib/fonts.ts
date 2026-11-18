import { Inter } from "next/font/google";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
  fallback: ["-apple-system", "SF Pro Display", "system-ui", "sans-serif"],
});
