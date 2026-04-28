import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Portfolio Performance Dashboard — Track Your Gains | ${SITE_NAME}`,
  description:
    "Free crypto portfolio performance dashboard. Track your holdings, analyze PnL, measure risk, and optimize your crypto portfolio allocation in real-time.",
  alternates: { canonical: `${SITE_URL}/tools/performance-dashboard` },
  openGraph: {
    title: `Performance Dashboard | ${SITE_NAME}`,
    description:
      "Track your crypto holdings, analyze PnL, measure risk, and optimize your portfolio allocation in real-time.",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/api/og?title=Performance+Dashboard&category=Tools&type=tool`,
        width: 1200,
        height: 630,
        alt: "Performance Dashboard on degen0x",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
