import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DEX Screener — Scan New Token Launches in Real-Time | ${SITE_NAME}`,
  description:
    "Real-time DEX token screener with honeypot detection, rug score analysis, and multi-chain filtering for Ethereum, Solana, Base, and more.",
  alternates: { canonical: `${SITE_URL}/tools/dex-screener` },
  openGraph: {
    title: `DEX Screener | ${SITE_NAME}`,
    description:
      "Scan new token launches with honeypot detection and rug score analysis across Ethereum, Solana, Base, Arbitrum, and BSC.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=DEX+Screener&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "DEX Screener on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
