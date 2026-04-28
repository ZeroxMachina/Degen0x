import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Layer 3 Chains Guide 2026: App-Specific L3s Explained | degen0x",
  description:
    "Complete guide to Layer 3 blockchains in 2026. Covering Xai, Degen Chain, app-specific L3 architecture, how L3s settle on L2s, and the future of modular blockchain scaling.",
  keywords: [
    "Layer 3 blockchain",
    "L3 chains",
    "Xai L3",
    "Degen Chain",
    "app-specific chains",
    "blockchain scaling",
    "Arbitrum L3",
    "modular blockchain 2026",
  ],
  openGraph: {
    title: "Layer 3 Chains Guide 2026: App-Specific L3s Explained",
    description:
      "Everything you need to know about Layer 3 blockchains — app-specific chains, L3 architecture, major projects like Xai and Degen Chain, and modular scaling.",
    url: `${SITE_URL}/learn/layer-3-chains-guide-2026`,
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
    modifiedTime: "2026-04-01T00:00:00Z",
    authors: ["degen0x"],
    images: [{ url: `${SITE_URL}/og-layer-3-chains-guide-2026.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layer 3 Chains Guide 2026: App-Specific L3s Explained",
    description:
      "Layer 3 blockchain guide — Xai, Degen Chain, app-specific architecture, modular scaling, and the future of L3s building on Arbitrum, Optimism, and Base.",
    images: [`${SITE_URL}/og-layer-3-chains-guide-2026.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/layer-3-chains-guide-2026`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
