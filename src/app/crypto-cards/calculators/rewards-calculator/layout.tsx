import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Rewards Calculator (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Calculate your estimated crypto card rewards based on monthly spending, cashback rate, and preferred cryptocurrency. See monthly and yearly projections in USD and crypto.",
  openGraph: {
    title: `Crypto Rewards Calculator | ${SITE_NAME}`,
    description:
      "Estimate your annual crypto card rewards by spending category and card type.",
    images: [
      {
        url: "/og-rewards-calculator.png",
        width: 1200,
        height: 630,
        alt: "Crypto Rewards Calculator on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Crypto Rewards Calculator | ${SITE_NAME}`,
    description:
      "Estimate your annual crypto card rewards by spending category and card type.",
    images: ["/og-rewards-calculator.png"],
  },
};

export default function RewardsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
