import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";
const PAGE_URL = `${SITE_URL}/tools/impermanent-loss-calculator`;

export const metadata: Metadata = {
  title: "Impermanent Loss Calculator | IL & LP Profit Tool | degen0x",
  description:
    "Calculate impermanent loss on liquidity pools. Understand IL formula, fee breakeven analysis, and strategies to minimize losses on DEX farming.",
  keywords:
    "impermanent loss calculator, liquidity pool, DEX farming, IL formula, LP farming, impermanent loss, uniswap v3 IL",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Impermanent Loss Calculator | IL & LP Profit Tool | degen0x",
    description:
      "Calculate IL impact on your LP positions and liquidity pool farming profits with our interactive IL calculator.",
    type: "website",
    url: PAGE_URL,
    images: [
      {
        url: `${SITE_URL}/api/og?title=Impermanent+Loss+Calculator&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Impermanent Loss Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impermanent Loss Calculator | degen0x",
    description:
      "Calculate IL impact on your LP positions and liquidity pool farming profits.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
