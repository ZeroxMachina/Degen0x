import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocol Revenue Dashboard — Compare DeFi Protocol Earnings | degen0x",
  description: "Track and compare on-chain revenue across 16+ DeFi protocols. View 24h, 7d, and 30d earnings, TVL, P/E ratios, and revenue growth for Uniswap, Aave, Lido, Hyperliquid, Jupiter and more.",
  keywords: ["defi revenue", "protocol earnings", "defi fees", "protocol comparison", "crypto revenue tracker", "uniswap revenue", "aave revenue", "lido revenue"],
  openGraph: {
    title: "Protocol Revenue Dashboard — degen0x",
    description: "Compare on-chain revenue across top DeFi protocols. Discover the most profitable protocols by actual earnings.",
    type: "website",
  },
};

export default function ProtocolRevenueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
