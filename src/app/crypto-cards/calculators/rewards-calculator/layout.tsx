import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Rewards Calculator (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Calculate your estimated crypto card rewards based on monthly spending, cashback rate, and preferred cryptocurrency. See monthly and yearly projections in USD and crypto.",
};

export default function RewardsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
