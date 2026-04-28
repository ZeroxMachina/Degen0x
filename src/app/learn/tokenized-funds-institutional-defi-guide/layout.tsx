import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tokenized Funds Guide 2026: Institutional DeFi & On-Chain Finance | degen0x",
  description:
    "Complete guide to tokenized funds in 2026. Covering Amundi SAFO, BlackRock BUIDL, on-chain money market funds, tokenized bonds, and how institutional finance is merging with DeFi.",
  keywords: [
    "tokenized funds",
    "institutional DeFi",
    "Amundi SAFO",
    "BlackRock BUIDL",
    "on-chain money market",
    "tokenized bonds",
    "RWA crypto",
    "institutional crypto 2026",
  ],
  openGraph: {
    title: "Tokenized Funds Guide 2026: Institutional DeFi & On-Chain Finance",
    description:
      "Deep dive into tokenized funds — Amundi SAFO, BlackRock BUIDL, on-chain money markets, and the convergence of institutional finance and DeFi.",
    url: `${SITE_URL}/learn/tokenized-funds-institutional-defi-guide`,
    type: "article",
    publishedTime: "2026-03-28T00:00:00Z",
    modifiedTime: "2026-04-01T00:00:00Z",
    authors: ["degen0x"],
    images: [{ url: `${SITE_URL}/og-tokenized-funds-institutional-defi-guide.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tokenized Funds Guide 2026: Institutional DeFi",
    description:
      "Tokenized funds deep dive — Amundi SAFO, BlackRock BUIDL, tokenized money markets, and how institutional finance is going on-chain.",
    images: [`${SITE_URL}/og-tokenized-funds-institutional-defi-guide.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/tokenized-funds-institutional-defi-guide`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
