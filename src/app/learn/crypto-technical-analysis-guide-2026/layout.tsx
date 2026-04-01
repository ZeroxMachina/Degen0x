import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Crypto Technical Analysis Guide 2026: RSI, MACD, Chart Patterns | degen0x",
  description:
    "Master crypto technical analysis in 2026. Learn RSI, MACD, Bollinger Bands, chart patterns, candlestick patterns, and multi-indicator strategies for Bitcoin and altcoin trading.",
  keywords: [
    "crypto technical analysis",
    "RSI crypto",
    "MACD trading",
    "Bitcoin chart patterns",
    "crypto trading indicators",
    "Bollinger Bands crypto",
    "candlestick patterns",
    "Fibonacci crypto",
    "crypto TA guide 2026",
  ],
  openGraph: {
    title: "Crypto Technical Analysis Guide 2026: RSI, MACD, Chart Patterns",
    description:
      "Master crypto technical analysis. Learn the 6 essential indicators, chart patterns with 70-85% success rates, and how to combine TA with on-chain data.",
    url: `${SITE_URL}/learn/crypto-technical-analysis-guide-2026`,
    type: "article",
    publishedTime: "2026-03-29T00:00:00Z",
    modifiedTime: "2026-03-29T00:00:00Z",
    authors: ["degen0x"],
    images: [{ url: `${SITE_URL}/og-crypto-technical-analysis-guide-2026.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Technical Analysis Guide 2026: RSI, MACD, Chart Patterns",
    description:
      "Master crypto TA: RSI, MACD, Bollinger Bands, chart patterns, Fibonacci, and multi-indicator strategies for Bitcoin and altcoin trading.",
    images: [`${SITE_URL}/og-crypto-technical-analysis-guide-2026.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/crypto-technical-analysis-guide-2026`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
