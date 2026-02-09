import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Johan Agouni | Full-Stack Developer",
  description:
    "Full-Stack developer specialized in React, Next.js, Node.js and TypeScript. I build modern, high-performance and secure web applications.",
  keywords: [
    "web developer",
    "full-stack",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "portugal",
  ],
  authors: [{ name: "Johan Agouni" }],
  creator: "Johan Agouni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johan-agouni.dev",
    title: "Johan Agouni | Full-Stack Developer",
    description:
      "Full-Stack developer specialized in React, Next.js, Node.js and TypeScript.",
    siteName: "Johan Agouni Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johan Agouni | Full-Stack Developer",
    description:
      "Full-Stack developer specialized in React, Next.js, Node.js and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)]`}
      >
        {children}
      </body>
    </html>
  );
}
