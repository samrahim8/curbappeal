import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curb Appeal — Is Google Helping or Hurting Your Business?",
  description:
    "Get your free Google Business Profile score in 30 seconds. Find out what's broken and how to fix it — in plain English.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
