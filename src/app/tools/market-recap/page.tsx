import { Metadata } from "next";
import MarketRecapClient from "./MarketRecapClient";

export const metadata: Metadata = {
  title: "Daily Crypto Market Recap — Today's Movers & Events | degen0x",
  description:
    "Get a daily snapshot of what moved the crypto market — top gainers, losers, sector performance, and key events. Updated live with market data from CoinGecko and on-chain analytics.",
  keywords: [
    "crypto market recap",
    "daily crypto news",
    "crypto market today",
    "top crypto gainers",
    "top crypto losers",
    "crypto sector performance",
    "bitcoin market recap",
    "crypto market events",
  ],
  openGraph: {
    title: "Daily Crypto Market Recap — Today's Movers & Events | degen0x",
    description:
      "Get a daily snapshot of what moved the crypto market — top gainers, losers, sector performance, and key events.",
    type: "website",
    url: "https://degen0x.com/tools/market-recap",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Daily+Crypto+Market+Recap&category=Tools&type=tool",
        width: 1200,
        height: 630,
        alt: "Daily Crypto Market Recap on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Crypto Market Recap | degen0x",
    description:
      "Top gainers, losers, sector performance, and key market events — updated live.",
    images: [
      "https://degen0x.com/api/og?title=Daily+Crypto+Market+Recap&category=Tools&type=tool",
    ],
  },
};

export default function MarketRecapPage() {
  return <MarketRecapClient />;
}
