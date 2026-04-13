import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import XPLeaderboard from '@/components/XPLeaderboard';

export const metadata: Metadata = {
  title: 'XP Leaderboard — Top Degens on degen0x',
  description: "See who is crushing it on degen0x. The global XP leaderboard tracks the most active crypto learners. Earn XP through courses, quizzes, and daily challenges to",
  openGraph: {
    title: 'XP Leaderboard | degen0x',
    description:
      'Top degens ranked by XP. Complete courses, quizzes and daily challenges to earn XP and appear on the global leaderboard.',
  },

  alternates: { canonical: "/leaderboard" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Leaderboard', },
  ],
};

export default function LeaderboardPage() {
  return (
    <>
      <XPLeaderboard />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
