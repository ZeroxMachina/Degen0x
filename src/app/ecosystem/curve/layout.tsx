import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curve Finance: Stablecoin & LST AMM Guide 2026 | degen0x",
  description:
    "Curve Finance is a DEX optimized for stablecoin and liquid staking token swaps. Learn about the StableSwap invariant, veCRV tokenomics, crvUSD, and the Curve Wars in this complete 2026 guide.",
  keywords: [
    "Curve Finance",
    "Curve DeFi",
    "CRV token",
    "veCRV",
    "Curve Wars",
    "stablecoin DEX",
    "crvUSD",
    "Curve guide 2026",
    "AMM stablecoins",
  ],
  openGraph: {
    title: "Curve Finance: Stablecoin & LST AMM Guide 2026",
    description:
      "The deepest stablecoin liquidity in DeFi. veCRV tokenomics, crvUSD, Curve Wars, and how to LP.",
    type: "article",
    url: "https://degen0x.com/ecosystem/curve",
    publishedTime: "2026-03-16T00:00:00Z",
    modifiedTime: "2026-03-16T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Curve+Finance:+Stablecoin+%26+LST+AMM+Guide+2026&category=Ecosystem&type=exchange",
        width: 1200,
        height: 630,
        alt: "Curve Finance Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curve Finance: Stablecoin & LST AMM Guide 2026",
    description:
      "The deepest stablecoin liquidity in DeFi. veCRV, crvUSD, and the Curve Wars.",
    images: ["https://degen0x.com/api/og?title=Curve+Finance:+Stablecoin+%26+LST+AMM+Guide+2026&category=Ecosystem&type=exchange"],
  },
};

export default function CurveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
