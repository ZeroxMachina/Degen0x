import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";

export const metadata: Metadata = {
  title: "Stablecoin Yield Tracker 2026: Compare Rates Across DeFi | degen0x",
  description: "Compare yield-bearing stablecoin rates in real-time. Track sDAI, USDY, sUSDe, USDM and 15+ stablecoin yield sources across chains. Filter by risk, APY, and protocol.",
  keywords: "stablecoin yield comparison, yield bearing stablecoins 2026, sDAI rate, USDY APY, sUSDe yield, stablecoin interest rates, DeFi stablecoin yields, best stablecoin yield",
  openGraph: {
    title: "Stablecoin Yield Tracker 2026: Compare Rates Across DeFi | degen0x",
    description: "Compare yield-bearing stablecoin rates in real-time. Track sDAI, USDY, sUSDe, USDM and 15+ stablecoin yield sources across chains.",
    type: "website",
    images: [{
      url: `${SITE_URL}/og-stablecoin-yield-tracker.svg`,
      width: 1200,
      height: 630,
      alt: "Stablecoin Yield Tracker — Compare DeFi stablecoin yields across chains",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stablecoin Yield Tracker 2026: Compare Rates Across DeFi | degen0x",
    description: "Compare yield-bearing stablecoin rates in real-time. Track sDAI, USDY, sUSDe, USDM and 15+ stablecoin yield sources.",
    images: [`${SITE_URL}/og-stablecoin-yield-tracker.svg`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
