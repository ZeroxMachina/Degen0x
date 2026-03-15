import type { Metadata } from 'next';
import DailyChallenge from '@/components/DailyChallenge';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Daily Crypto Challenge — Earn XP Every Day | degen0x',
  description:
    'One crypto question every day. Answer correctly to earn XP, build your streak, and unlock badges. The fastest way to level up your crypto knowledge.',
  openGraph: {
    title: 'Daily Crypto Challenge | degen0x',
    description:
      'Answer today\'s crypto question and earn XP. Build a daily streak for bonus rewards. Free, no signup required.',
  },
};

export default function DailyChallengePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Daily Challenge" },
        ]}
      />
      <DailyChallenge />
    </div>
  );
}
