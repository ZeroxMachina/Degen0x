import type { Metadata } from "next";

const SITE_URL = "https://degen0x.com";
const PAGE_URL = `${SITE_URL}/tools/staking-rewards-calculator`;

export const metadata: Metadata = {
  title: "Staking Rewards Calculator | APY & Compound Calculator | degen0x",
  description:
    "Calculate crypto staking rewards with our APY calculator. Compare yields across ETH, SOL, DOT, ATOM, and other assets. Calculate compound interest.",
  keywords:
    "staking rewards calculator, APY calculator, crypto staking yields, compound calculator, staking APY, crypto staking",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Staking Rewards Calculator | APY & Compound Calculator | degen0x",
    description:
      "Calculate crypto staking rewards and compound interest across major blockchain assets.",
    type: "website",
    url: PAGE_URL,
    images: [
      {
        url: `${SITE_URL}/api/og?title=Staking+Rewards+Calculator&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Staking Rewards Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Staking Rewards Calculator | degen0x",
    description:
      "Real-time crypto staking yields and APY calculations for all major assets.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
