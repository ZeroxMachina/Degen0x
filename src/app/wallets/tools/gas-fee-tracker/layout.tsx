import type { Metadata } from "next";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Gas Fee Tracker - Live Network Fees (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Track gas fees across Ethereum, Polygon, Arbitrum, Solana, and more. Compare transaction costs across networks and find the cheapest time to transact.`,
};

export default function GasFeeTrackerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
