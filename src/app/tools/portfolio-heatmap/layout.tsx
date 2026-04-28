import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Portfolio Heatmap — Visualize Your Holdings | ${SITE_NAME}`,
  description:
    "Interactive crypto portfolio heatmap. Visualize your holdings by allocation, performance, and sector with color-coded P&L and real-time updates.",
  alternates: { canonical: `${SITE_URL}/tools/portfolio-heatmap` },
  openGraph: {
    title: `Portfolio Heatmap | ${SITE_NAME}`,
    description:
      "Visualize your crypto holdings by allocation, performance, and sector with an interactive heatmap.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Portfolio+Heatmap&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Portfolio Heatmap on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
