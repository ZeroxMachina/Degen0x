import { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Portfolio Analytics Dashboard — Track Your Crypto PnL | ${SITE_NAME}`,
  description:
    "Advanced portfolio analytics with PnL tracking, risk metrics, allocation charts, and rebalance suggestions for crypto investors.",
  alternates: { canonical: `${SITE_URL}/tools/portfolio-analytics` },
  openGraph: {
    title: `Portfolio Analytics Dashboard | ${SITE_NAME}`,
    description:
      "Advanced portfolio analytics with PnL tracking, risk metrics, and rebalance suggestions.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Portfolio+Analytics&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Portfolio Analytics Dashboard on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
