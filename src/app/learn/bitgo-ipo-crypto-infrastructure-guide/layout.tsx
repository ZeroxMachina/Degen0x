import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "BitGo IPO Guide: Crypto Custody Infrastructure Goes Public | degen0x",
  description:
    "Complete guide to BitGo's IPO on NYSE (BTGO). Covering institutional crypto custody, $2.08B valuation, financials, custody market competition, and what it means for crypto infrastructure adoption.",
  keywords: [
    "BitGo IPO",
    "BTGO stock",
    "crypto custody",
    "institutional crypto",
    "crypto infrastructure",
    "BitGo NYSE",
    "crypto IPO 2026",
    "digital asset custody",
  ],
  openGraph: {
    title: "BitGo IPO Guide: Crypto Custody Infrastructure Goes Public",
    description:
      "Complete guide to BitGo's IPO — the first major crypto custody firm to go public. $2.08B valuation, institutional adoption signals, and custody market analysis.",
    url: `${SITE_URL}/learn/bitgo-ipo-crypto-infrastructure-guide`,
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-04-01T00:00:00Z",
    authors: ["degen0x"],
    images: [{ url: `${SITE_URL}/og-bitgo-ipo-crypto-infrastructure-guide.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BitGo IPO Guide: Crypto Custody Infrastructure Goes Public",
    description:
      "BitGo IPO deep dive — $212.8M raised, $2.08B valuation, institutional custody market competition, and what it signals for crypto infrastructure.",
    images: [`${SITE_URL}/og-bitgo-ipo-crypto-infrastructure-guide.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/bitgo-ipo-crypto-infrastructure-guide`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
