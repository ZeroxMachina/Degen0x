import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onchain Privacy Infrastructure Guide 2026: Railgun, Aztec & Privacy Pools | degen0x",
  description: "Complete guide to onchain privacy protocols. Compare Railgun, Aztec Network, and Privacy Pools — the pragmatic privacy layer for DeFi in 2026.",
  keywords: ["onchain privacy", "privacy DeFi", "Railgun", "Aztec Network", "Privacy Pools", "blockchain privacy", "ZK privacy", "proof of innocence", "encrypted smart contracts", "privacy infrastructure 2026"],
  openGraph: {
    title: "Onchain Privacy Infrastructure Guide 2026 | degen0x",
    description: "Compare Railgun, Aztec Network, and Privacy Pools — the pragmatic privacy layer for DeFi.",
    url: "https://degen0x.com/learn/onchain-privacy-infrastructure-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    images: [{ url: "https://degen0x.com/og-onchain-privacy-infrastructure.svg", width: 1200, height: 630, alt: "Onchain Privacy Infrastructure Guide 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onchain Privacy Infrastructure Guide 2026 | degen0x",
    description: "Railgun, Aztec & Privacy Pools — the pragmatic privacy layer for DeFi.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
