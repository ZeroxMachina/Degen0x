import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Katana Perps & IDEX Acquisition Guide: Perpetual Futures DEX on L2 | degen0x",
  description:
    "Complete guide to Katana Perps — the perpetual futures DEX built on Katana L2 after acquiring IDEX. Covering Vault Bridge structural yield, order book infrastructure, and how it competes with dYdX and GMX.",
  keywords: [
    "Katana Perps",
    "IDEX acquisition",
    "perpetual futures DEX",
    "Katana chain",
    "Polygon L2",
    "Vault Bridge yield",
    "decentralized perps",
    "crypto derivatives 2026",
  ],
  openGraph: {
    title: "Katana Perps & IDEX Acquisition Guide: Perpetual Futures DEX on L2",
    description:
      "Deep dive into Katana Perps — structural yield model, IDEX acquisition, and how this L2 perps DEX competes with dYdX, GMX, and Hyperliquid.",
    url: `${SITE_URL}/learn/katana-perps-idex-acquisition-guide`,
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
    modifiedTime: "2026-04-01T00:00:00Z",
    authors: ["degen0x"],
    images: [{ url: `${SITE_URL}/og-katana-perps-idex-acquisition-guide.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Katana Perps & IDEX Acquisition Guide",
    description:
      "Katana Perps deep dive — Vault Bridge structural yield, IDEX acquisition, L2 perpetual futures trading, and competition with dYdX/GMX.",
    images: [`${SITE_URL}/og-katana-perps-idex-acquisition-guide.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/katana-perps-idex-acquisition-guide`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
