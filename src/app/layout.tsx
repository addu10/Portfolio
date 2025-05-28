import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adnan Sameer | Python Developer",
  description: "Portfolio website of Adnan Sameer, a BTech IT student and aspiring Python developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="XhJdj/c2xPq2/Vcf+GEyrA" async></script>
        <meta name="ahrefs-site-verification" content="f8544d4fe41ffd3116099a28298871ceafb007003556a6686f6d18fcf09796cf"></meta>
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 