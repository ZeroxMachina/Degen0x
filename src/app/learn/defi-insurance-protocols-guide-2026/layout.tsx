import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeFi Insurance Protocols Guide 2026: Nexus Mutual, InsurAce & More | degen0x",
  description:
    "Complete guide to DeFi insurance protocols. Compare Nexus Mutual ($425M TVL), InsurAce, Unslashed & Neptune Mutual. Coverage types, claims process, and how to protect your crypto from hacks.",
  keywords: [
    "DeFi insurance",
    "Nexus Mutual",
    "InsurAce",
    "Unslashed",
    "Neptune Mutual",
    "smart contract insurance",
    "protocol cover",
    "DeFi hacks protection",
    "crypto insurance 2026",
    "stablecoin depeg cover",
    "slashing insurance",
    "DeFi risk management",
  ],
  openGraph: {
    title: "DeFi Insurance Protocols Guide 2026: Nexus Mutual, InsurAce & More",
    description:
      "Protect your DeFi assets from hacks and exploits. Compare top insurance protocols, coverage types, and costs. $3.8B+ lost to exploits since 2020.",
    url: "https://degen0x.com/learn/defi-insurance-protocols-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/og-defi-insurance-protocols-guide-2026.svg", width: 1200, height: 630, alt: "DeFi Insurance Protocols Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeFi Insurance Protocols Guide 2026 | degen0x",
    description:
      "Compare Nexus Mutual, InsurAce, Unslashed & more. How to protect your DeFi positions from smart contract exploits.",
    images: ["https://degen0x.com/og-defi-insurance-protocols-guide-2026.svg"],
  },
};

export default function DeFiInsuranceGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
