import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Distributed Validator Technology (DVT) Guide 2026: SSV Network vs Obol | degen0x",
  description:
    "Complete guide to Distributed Validator Technology. Compare SSV Network (4M+ ETH) vs Obol ($2B staked). How DVT eliminates single points of failure in Ethereum staking.",
  keywords: [
    "distributed validator technology",
    "DVT",
    "SSV Network",
    "Obol Network",
    "Ethereum staking",
    "validator security",
    "threshold cryptography",
    "DVT-Lite",
    "Lido Simple DVT",
    "staking decentralization",
    "validator key splitting",
    "distributed validators 2026",
  ],
  openGraph: {
    title: "Distributed Validator Technology (DVT) Guide 2026: SSV Network vs Obol",
    description:
      "How DVT is securing Ethereum staking by splitting validator keys across multiple nodes. Compare SSV Network vs Obol, learn DVT-Lite, and understand the future of decentralized validation.",
    url: "https://degen0x.com/learn/distributed-validator-technology-dvt-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-distributed-validator-technology-dvt-guide-2026.svg", width: 1200, height: 630, alt: "Distributed Validator Technology (DVT) Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DVT Guide 2026: SSV Network vs Obol | degen0x",
    description:
      "How distributed validators eliminate single points of failure in Ethereum staking. SSV Network vs Obol compared.",
    images: ["https://degen0x.com/og-distributed-validator-technology-dvt-guide-2026.svg"],
  },
};

export default function DVTGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
