import { Metadata } from "next";
import TradingSignals from "@/components/TradingSignals";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Trading Signals — ${SITE_NAME}`,
  description: "AI-powered crypto trading signals combining technical analysis, on-chain data, and social sentiment. Entry points, targets, stop losses, and risk/reward ratios.",
  keywords: ["trading signals", "crypto signals", "technical analysis", "on-chain analysis", "trading alerts"],
};

export default function SignalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <TradingSignals />
    </div>
  );
}
