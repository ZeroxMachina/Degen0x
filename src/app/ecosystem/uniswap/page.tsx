import { Metadata } from "next";
import UniswapClient from "./UniswapClient";

export const metadata: Metadata = {
  title: "Uniswap: The Original DEX Guide 2026 — Multi-Chain AMM | degen0x",
  description:
    "Complete guide to Uniswap — the pioneering decentralized exchange. Concentrated liquidity (v3), Uniswap v4 hooks, UNI governance, multi-chain deployment, and how to swap and provide liquidity.",
  keywords: [
    "uniswap",
    "uniswap guide",
    "decentralized exchange",
    "AMM",
    "uniswap v3",
    "uniswap v4",
    "UNI token",
    "concentrated liquidity",
    "uniswap review 2026",
  ],
  openGraph: {
    title: "Uniswap: The Original DEX Guide 2026",
    description:
      "The pioneering DEX. Concentrated liquidity, v4 hooks, multi-chain. Complete guide.",
    type: "article",
    url: "https://degen0x.com/ecosystem/uniswap",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Uniswap:+The+Original+DEX+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Uniswap Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniswap: The Original DEX Guide 2026 | degen0x",
    description:
      "The OG DEX. Concentrated liquidity, v4 hooks, multi-chain AMM. Complete guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Uniswap:+The+Original+DEX+Guide+2026&category=Ecosystem&type=page",
    ],
  },
};

export default function UniswapPage() {
  return <UniswapClient />;
}
