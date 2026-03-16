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
};

export default function MarketRecapPage() {
  return <MarketRecapClient />;
}
