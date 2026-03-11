import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Cashback Calculator (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Compare cashback earnings across crypto cards based on your spending categories. Enter your grocery, dining, gas, travel, and other spending to find the best card for you.",
};

export default function CashbackCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
