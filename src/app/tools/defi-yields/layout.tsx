import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "DeFi Yield Aggregator — Best APY Rates | degen0x",
  description: "Compare DeFi yields across 50+ protocols. Find the best staking, lending, and liquidity pool APYs.",
  openGraph: {
    title: "DeFi Yield Aggregator — Best APY Rates | degen0x",
    description: "Compare DeFi yields across 50+ protocols. Find the best staking, lending, and liquidity pool APYs.",
    type: "website",
    images: [{
      url: `${SITE_URL}/api/og?title=DeFi+Yield+Aggregator&category=Tools&type=tool`,
      width: 1200,
      height: 630,
      alt: "DeFi Yield Aggregator",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi Yield Aggregator — Best APY Rates | degen0x",
    description: "Compare DeFi yields across 50+ protocols. Find the best staking, lending, and liquidity pool APYs.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
