import type { Metadata } from "next";

import MarketRecapClient from "./MarketRecapClient";

export const metadata: Metadata = {
  title: "Daily Market Recap | degen0x AI",
  description:
    "AI-powered daily crypto market analysis, sentiment tracking, and on-chain signals",
  keywords: [
    "crypto market recap",
    "Bitcoin",
    "Ethereum",
    "market sentiment",
    "trading signals",
  ],
  openGraph: {
    title: "AI Market Recap | degen0x",
    description: "AI-powered daily crypto market analysis — sentiment, gainers/losers, whale activity & on-chain signals.",
    type: "website",
    url: "https://degen0x.com/news/market-recap",
    images: [{ url: "https://degen0x.com/og-market-recap.png", width: 1200, height: 630, alt: "AI Market Recap — degen0x" }],
  },
  twitter: { card: "summary_large_image", title: "AI Market Recap | degen0x", images: ["https://degen0x.com/og-market-recap.png"] },
};

export default function MarketRecapPage() {
  return <MarketRecapClient />;
}
