import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MultiChainPortfolio from "@/components/MultiChainPortfolio";

export const metadata: Metadata = {
  title: "Multi-Chain Portfolio — ETH, SOL, Arbitrum, Optimism, Base",
  description:
    "Track your entire crypto portfolio across Ethereum, Solana, Arbitrum, Optimism, and Base in one unified dashboard. Tokens, staked positions, and LP tracking.",
  openGraph: {
    title: "Multi-Chain Portfolio | degen0x",
    description: "Unified multi-chain portfolio tracker for DeFi degens.",
  },

  alternates: { canonical: "/portfolio/multi-chain" }};

export default function MultiChainPortfolioPage() {
  return <MultiChainPortfolio />;
}
