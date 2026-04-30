import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";
const PAGE_URL = `${SITE_URL}/tools/funding-rates`;

export const metadata: Metadata = {
  title: "Funding Rate Tracker | Perpetual Futures Rates Across Exchanges | degen0x",
  description:
    "Compare perpetual futures funding rates across Binance, Bybit, OKX, dYdX, and Hyperliquid. Track arbitrage opportunities, open interest, and market sentiment for 20+ coins.",
  keywords:
    "funding rates, perpetual futures, funding rate tracker, crypto arbitrage, open interest, perp funding, funding rate comparison",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Funding Rate Tracker | Perpetual Futures Rates Across Exchanges | degen0x",
    description:
      "Compare perpetual futures funding rates across 5 exchanges. Track arbitrage opportunities and market sentiment.",
    type: "website",
    url: PAGE_URL,
    images: [
      {
        url: `${SITE_URL}/api/og?title=Funding+Rate+Tracker&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Funding Rate Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funding Rate Tracker | degen0x",
    description:
      "Compare perpetual futures funding rates across Binance, Bybit, OKX, dYdX, and Hyperliquid.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
