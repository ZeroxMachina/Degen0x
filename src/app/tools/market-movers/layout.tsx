import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Market Movers - Top Gainers, Losers & Volume | Crypto Price Tracker",
  description:
    "Track cryptocurrency market movers in real-time. View top 10 gainers, top 10 losers, and top 10 tokens by trading volume. Updated live with 24h price changes and market caps.",
  keywords:
    "market movers, crypto gainers, crypto losers, trading volume, cryptocurrency price tracker, top gainers losers, 24h change, market cap",
  openGraph: {
    title: "Market Movers - Crypto Gainers & Losers Tracker",
    description:
      "Real-time tracking of top 10 gainers, losers, and volume leaders in crypto markets.",
    url: "https://degen0x.com/tools/market-movers",
    type: "website",
    images: [
      {
        url: "https://degen0x.com/og-market-movers.png",
        width: 1200,
        height: 630,
        alt: "Market Movers Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Market Movers - Top Crypto Gainers & Losers",
    description: "Track real-time market movements across top cryptocurrencies.",
  },
};

export default function MarketMoversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
