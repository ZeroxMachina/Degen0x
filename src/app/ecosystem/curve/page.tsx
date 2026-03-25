import { Metadata } from "next";
import CurveGuidePage from "./CurveClient";

export const metadata: Metadata = {
  title: "Curve Finance Guide 2026: Stablecoin DEX & Liquidity | degen0x",
  description:
    "Complete guide to Curve Finance — the leading stablecoin DEX and liquidity protocol. Learn about veCRV, crvUSD, Curve pools, and yield strategies in 2026.",
  keywords: [
    "curve finance",
    "curve defi",
    "curve dex",
    "veCRV",
    "crvUSD",
    "stablecoin dex",
    "curve liquidity",
    "curve pools",
    "curve guide 2026",
  ],
  openGraph: {
    title: "Curve Finance Guide 2026: Stablecoin DEX & Liquidity",
    description:
      "Complete guide to Curve Finance — the leading stablecoin DEX. Learn about veCRV, crvUSD, pools, and yield strategies.",
    type: "article",
    url: "https://degen0x.com/ecosystem/curve",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Curve+Finance:+Stablecoin+DEX+Guide&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Curve Finance Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curve Finance Guide 2026 | degen0x",
    description:
      "Stablecoin DEX & liquidity protocol. veCRV, crvUSD, pools, and yield strategies.",
    images: [
      "https://degen0x.com/api/og?title=Curve+Finance:+Stablecoin+DEX+Guide&category=Ecosystem&type=page",
    ],
  },
};

export default function CurvePage() {
  return <CurveGuidePage />;
}
