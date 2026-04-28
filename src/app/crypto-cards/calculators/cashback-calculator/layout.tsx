import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Cashback Calculator (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Compare cashback earnings across crypto cards based on your spending categories. Enter your grocery, dining, gas, travel, and other spending to find the best card for you.",
  openGraph: {
    title: `Crypto Cashback Calculator | ${SITE_NAME}`,
    description:
      "Compare cashback rewards across 10+ crypto debit cards based on your spending.",
    images: [
      {
        url: "/og-cashback-calculator.png",
        width: 1200,
        height: 630,
        alt: "Crypto Cashback Calculator on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Crypto Cashback Calculator | ${SITE_NAME}`,
    description:
      "Compare cashback rewards across 10+ crypto debit cards based on your spending.",
    images: ["/og-cashback-calculator.png"],
  },
};

export default function CashbackCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
