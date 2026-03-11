import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chromezy — From Concept to Reality",
    template: "%s | Chromezy",
  },

  description:
    "Chromezy engineers your software success and digital transformation. " +
    "We specialise in MVP development, SaaS platforms, AI solutions, and " +
    "B2B & B2C e-commerce — delivering market-ready products fast.",

  metadataBase: new URL("https://chromezy.com"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://chromezy.com",
    title: "Chromezy — From Concept to Reality",
    description:
      "We engineer software success and digital transformation. " +
      "MVP, SaaS, AI, and e-commerce solutions built fast and precisely.",
    siteName: "Chromezy",
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
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sora antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
