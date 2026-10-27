import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Ram | Full Stack Developer & AI Entrepreneur",
  description: "Portfolio of Sri Ram — Full Stack Developer, AI Entrepreneur, and President of E-Cell REC. Building Avataq.ai and PromptCraft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
