import type { Metadata } from "next";
import "./globals.css";
import { display, body, myanmar } from "./fonts";

export const metadata: Metadata = {
  title: "Luxury Auto | Premium Car Showroom Myanmar",
  description: "Experience the pinnacle of automotive luxury. Book a test drive today.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${myanmar.variable}`}>
      <body className="grain bg-[var(--bg)] text-[var(--text)]">{children}</body>
    </html>
  );
}
