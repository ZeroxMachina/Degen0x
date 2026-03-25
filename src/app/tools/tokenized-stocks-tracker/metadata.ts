import { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tokenized Stocks Tracker — Live On-Chain Equity Data | degen0x",
  description:
    "Track tokenized stocks on-chain. Compare Ondo Finance, Backed, and Dinari — market caps, 24h price moves, dividend APYs, and chains. Free live data.",
  openGraph: {
    title: "Tokenized Stocks Tracker — Live On-Chain Equity Data",
    description:
      "The first $1B milestone in on-chain equities. Track all tokenized stocks and ETFs across protocols — live prices, dividend yields, and protocol comparison.",
    url: `${SITE_URL}/tools/tokenized-stocks-tracker`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-tokenized-stocks-tracker.png`,
        width: 1200,
        height: 630,
        alt: "Tokenized Stocks Tracker — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokenized Stocks Tracker — Live On-Chain Equity Data",
    description:
      "Track Apple, Tesla, SPY and 10+ other tokenized stocks on-chain. Live prices, dividend APYs, and protocol comparison.",
    images: [`${SITE_URL}/og-tokenized-stocks-tracker.png`],
  },
};
