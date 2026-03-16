import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Comparison Tool (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Compare crypto cards side by side. Select 2-3 cards and see how they stack up on cashback, fees, staking, availability, and more in a dynamic comparison table.",
};

export default function CardComparisonToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
