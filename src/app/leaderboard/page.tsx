import type { Metadata } from 'next';
import XPLeaderboard from '@/components/XPLeaderboard';

export const metadata: Metadata = {
  title: 'XP Leaderboard — Top Degens on degen0x',
  description:
    'See who is crushing it on degen0x. The global XP leaderboard tracks the most active crypto learners. Earn XP through courses, quizzes, and daily challenges to climb the ranks.',
  openGraph: {
    title: 'XP Leaderboard | degen0x',
    description:
      'Top degens ranked by XP. Complete courses, quizzes and daily challenges to earn XP and appear on the global leaderboard.',
  },
};

export default function LeaderboardPage() {
  return <XPLeaderboard />;
}
