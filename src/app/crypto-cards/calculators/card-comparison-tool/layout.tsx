import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Comparison Tool (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Compare crypto cards side by side. Select 2-3 cards and see how they stack up on cashback, fees, staking, availability, and more in a dynamic comparison table.",
  openGraph: {
    title: `Crypto Card Comparison Tool | ${SITE_NAME}`,
    description:
      "Side-by-side comparison of 10+ crypto debit cards — cashback, fees, and features.",
    images: [
      {
        url: "/og-card-comparison-tool.png",
        width: 1200,
        height: 630,
        alt: "Crypto Card Comparison Tool on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Crypto Card Comparison Tool | ${SITE_NAME}`,
    description:
      "Side-by-side comparison of 10+ crypto debit cards — cashback, fees, and features.",
    images: ["/og-card-comparison-tool.png"],
  },
};

export default function CardComparisonToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
