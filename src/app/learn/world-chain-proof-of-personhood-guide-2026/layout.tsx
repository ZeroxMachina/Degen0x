import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Chain & Proof of Personhood Guide 2026: World ID, AgentKit & WLD | degen0x",
  description: "Complete guide to World Chain, proof of personhood, and World ID. Learn how the OP Stack L2 verifies humans, enables AI agent identity with AgentKit, and powers sybil-resistant DeFi.",
  keywords: ["World Chain", "proof of personhood", "World ID", "Worldcoin", "WLD", "AgentKit", "biometric verification", "sybil resistance", "OP Stack", "human verification 2026"],
  openGraph: {
    title: "World Chain & Proof of Personhood Guide 2026 | degen0x",
    description: "World ID, AgentKit & the L2 built for humans — complete guide to proof of personhood in 2026.",
    url: "https://degen0x.com/learn/world-chain-proof-of-personhood-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    images: [{ url: "https://degen0x.com/og-world-chain-proof-of-personhood.svg", width: 1200, height: 630, alt: "World Chain & Proof of Personhood Guide 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "World Chain & Proof of Personhood Guide 2026 | degen0x",
    description: "World ID, AgentKit & the OP Stack L2 built for humans.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
