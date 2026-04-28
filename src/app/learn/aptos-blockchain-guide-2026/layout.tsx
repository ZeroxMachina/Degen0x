import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aptos Blockchain Guide 2026: Move Language, DeFi Ecosystem & RWAs | degen0x",
  description: "Complete guide to the Aptos blockchain in 2026. $1B+ TVL, Move programming language, 10M daily transactions at $0.00007. Top DeFi protocols: Thala, Aries, Amnis Finance.",
  keywords: [
    "Aptos blockchain",
    "APT token",
    "Move language",
    "Aptos DeFi",
    "Thala Labs",
    "Aries Markets",
    "Amnis Finance",
    "Aptos TVL",
    "Aptos RWA",
    "Aptos vs Sui",
    "Layer 1 blockchain 2026",
    "parallel execution blockchain",
  ],
  openGraph: {
    title: "Aptos Blockchain Guide 2026: Move Language, DeFi Ecosystem & RWAs",
    description: "Everything about Aptos in 2026: $1B+ TVL, Move language, 10M daily txns, RWA growth. Complete ecosystem breakdown.",
    url: "https://degen0x.com/learn/aptos-blockchain-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-aptos-blockchain-guide-2026.svg", width: 1200, height: 630, alt: "Aptos Blockchain Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptos Blockchain Guide 2026 | degen0x",
    description: "Complete Aptos guide: Move language, $1B TVL, DeFi ecosystem (Thala, Aries, Amnis), and RWA growth.",
    images: ["https://degen0x.com/og-aptos-blockchain-guide-2026.svg"],
  },
};

export default function AptosBlockchainGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
