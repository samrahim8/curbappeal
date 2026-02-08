import type { Metadata } from "next";
import { Source_Serif_4, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Curb Appeal — Is Google Helping or Hurting Your Business?",
  description:
    "Get your free Google Business Profile score in 30 seconds. Find out what's broken and how to fix it — in plain English.",
  keywords: [
    "Google Business Profile",
    "GBP audit",
    "local SEO",
    "business listing",
    "Google Maps",
    "local business",
  ],
  openGraph: {
    title: "Curb Appeal — Is Google Helping or Hurting Your Business?",
    description:
      "Get your free Google Business Profile score in 30 seconds. Find out what's broken and how to fix it.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curb Appeal — Is Google Helping or Hurting Your Business?",
    description:
      "Get your free Google Business Profile score in 30 seconds. Find out what's broken and how to fix it.",
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
    <html lang="en" className={`${sourceSerif.variable} ${cormorant.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-[100dvh] antialiased">
        {children}
      </body>
    </html>
  );
}
