import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yield-Bearing Stablecoins Guide 2026: Earn 3-13% APY | degen0x",
  description:
    "Compare yield-bearing stablecoins like Ethena sUSDe, Sky sUSDS, Ondo USDY, and Usual USD0++. Earn 3-13% APY on your stablecoins. Risks, strategies, and step-by-step guide.",
  keywords: [
    "yield bearing stablecoins",
    "yield bearing stablecoins 2026",
    "stablecoin yield",
    "susde apy",
    "ethena usde yield",
    "sky usds savings rate",
    "ondo usdy",
    "usual usd0",
    "stablecoin passive income",
    "best stablecoin yield 2026",
    "defi stablecoin returns",
    "mountain protocol usdm",
    "frax sfrxusd",
  ],
  openGraph: {
    title: "Yield-Bearing Stablecoins: Earn 3-13% APY on Your Stables (2026)",
    description:
      "The complete guide to earning yield on stablecoins. Compare Ethena, Sky, Ondo, Mountain, Usual & Frax protocols side by side.",
    url: "https://degen0x.com/learn/yield-bearing-stablecoins",
    type: "article",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    authors: ["degen0x Team"],
    images: [{ url: "https://degen0x.com/api/og?title=Yield-Bearing+Stablecoins:+Earn+3-13%25+APY&category=Learn&type=learn", width: 1200, height: 630, alt: "Yield-Bearing Stablecoins Guide 2026 — degen0x" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yield-Bearing Stablecoins Guide 2026 | degen0x",
    description:
      "Compare sUSDe, sUSDS, USDY, USDM & USD0++. Earn 3-13% APY. Full risk breakdown included.",
    images: ["https://degen0x.com/api/og?title=Yield-Bearing+Stablecoins:+Earn+3-13%25+APY&category=Learn&type=learn"],
  },
};

export default function YieldBearingStablecoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
