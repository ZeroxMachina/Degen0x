import { Metadata } from "next";
import CopyTradingLeaderboard from "@/components/CopyTradingLeaderboard";
import SocialTradingFeed from "@/components/SocialTradingFeed";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Copy Trading Leaderboard — ${SITE_NAME}`,
  description: "Follow and copy the best crypto traders. Real-time PnL rankings, strategy analysis, risk scores, and one-click copy trading across Solana, Ethereum, and L2s.",
  keywords: ["copy trading", "crypto traders", "social trading", "trading leaderboard", "mirror trading"],
};

export default function CopyTradingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <CopyTradingLeaderboard />
      <hr className="border-[var(--color-border)]" />
      <SocialTradingFeed />
    </div>
  );
}
