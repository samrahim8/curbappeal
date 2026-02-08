import type { Metadata } from "next";
import { Instrument_Serif, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curb Appeal — Is Google Helping or Hurting Your Business?",
  description:
    "Get your free Google Business Profile score in 30 seconds. Find out what's broken and how to fix it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${sourceSerif.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
