import { Metadata } from "next";
import MarketRecapClient from "./MarketRecapClient";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

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
        url: "https://degen0x.com/og-market-recap.svg",
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
      "https://degen0x.com/og-market-recap.svg",
    ],
  },
};

export default function MarketRecapPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Market Recap" },
          ]}
        />
        <MarketRecapClient />
      </div>
      <RelatedContent category="tools" currentSlug="/tools/market-recap" />
    </div>
  );
}
