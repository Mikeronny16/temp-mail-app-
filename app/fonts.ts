import { Fraunces, Hanken_Grotesk, Noto_Sans_Myanmar } from "next/font/google";

export const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

export const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const myanmar = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500", "700"],
  variable: "--font-myanmar",
  display: "swap",
});
