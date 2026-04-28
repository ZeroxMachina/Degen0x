import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solver Networks & Order Flow Auctions Guide 2026: CoW Protocol, UniswapX & 1inch Fusion | degen0x",
  description: "Complete guide to solver networks and order flow auctions. Compare CoW Protocol ($87B volume), UniswapX, and 1inch Fusion. How solvers protect you from MEV and find better prices.",
  keywords: [
    "solver networks",
    "order flow auctions",
    "CoW Protocol",
    "UniswapX",
    "1inch Fusion",
    "intent-based trading",
    "MEV protection",
    "batch auctions",
    "DEX aggregator",
    "crypto solvers 2026",
    "DeFi execution quality",
    "sandwich attack protection",
  ],
  openGraph: {
    title: "Solver Networks & Order Flow Auctions Guide 2026: CoW Protocol, UniswapX & 1inch Fusion",
    description: "How solver networks are replacing traditional DEX routing. Compare CoW Protocol, UniswapX, and 1inch Fusion execution models.",
    url: "https://degen0x.com/learn/solver-networks-order-flow-auctions-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-solver-networks-order-flow-auctions-guide-2026.svg", width: 1200, height: 630, alt: "Solver Networks & Order Flow Auctions Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solver Networks & Order Flow Auctions Guide 2026 | degen0x",
    description: "Compare CoW Protocol, UniswapX & 1inch Fusion solver models. How OFAs protect you from MEV.",
    images: ["https://degen0x.com/og-solver-networks-order-flow-auctions-guide-2026.svg"],
  },
};

export default function SolverNetworksGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
