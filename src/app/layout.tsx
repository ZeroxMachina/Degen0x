import type { Metadata } from "next";

import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "degen0x — Crypto Tools, Research & Guides",
    template: "%s | degen0x",
  },
  description: "Free crypto tools, in-depth guides, exchange comparisons, wallet reviews, and DeFi research. Built for degens, by degens.",
  metadataBase: new URL("https://degen0x.com"),
  openGraph: {
    type: "website",
    siteName: "degen0x",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@degen0x",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0d1117", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
