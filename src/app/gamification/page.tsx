import type { Metadata } from "next";
import GamificationSystem from "@/components/GamificationSystem";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Gamification & Rewards | degen0x — XP, Badges, Leaderboard",
  description:
    "Earn XP, unlock rare badges, maintain daily streaks, and climb the global leaderboard. Level up your degen status on degen0x.",
  openGraph: {
    title: "Gamification & Rewards | degen0x",
    description: "Earn XP, unlock badges, and climb the leaderboard.",
    images: [{ url: 'https://degen0x.com/og-gamification.png', width: 1200, height: 630, alt: 'Gamification and Rewards on degen0x' }],
  },
};

export default function GamificationPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Gamification" },
        ]}
      />
      <GamificationSystem />
    </div>
  );
}
