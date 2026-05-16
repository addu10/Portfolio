import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adnan Sameer — AI Engineer & Developer",
  description:
    "Portfolio of Adnan Sameer — AI Automation Specialist and Full-Stack Developer building intelligent AI-powered solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="XhJdj/c2xPq2/Vcf+GEyrA"
          async
        ></script>
        <meta
          name="ahrefs-site-verification"
          content="f8544d4fe41ffd3116099a28298871ceafb007003556a6686f6d18fcf09796cf"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}