import type { Metadata } from "next";
import GamificationSystem from "@/components/GamificationSystem";

export const metadata: Metadata = {
  title: "Gamification & Rewards | degen0x — XP, Badges, Leaderboard",
  description:
    "Earn XP, unlock rare badges, maintain daily streaks, and climb the global leaderboard. Level up your degen status on degen0x.",
  openGraph: {
    title: "Gamification & Rewards | degen0x",
    description: "Earn XP, unlock badges, and climb the leaderboard.",
  },
};

export default function GamificationPage() {
  return <GamificationSystem />;
}
