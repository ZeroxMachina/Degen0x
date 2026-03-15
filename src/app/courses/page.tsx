import type { Metadata } from 'next';
import CoursesHub from '@/components/CoursesHub';

export const metadata: Metadata = {
  title: 'Free Crypto Courses — Earn XP & Badges | degen0x',
  description:
    'The most comprehensive free crypto curriculum. Learn Bitcoin, DeFi, Solana, Layer 2s, security, and more. Earn XP and badges as you progress. No signup required.',
  openGraph: {
    title: 'Free Crypto Courses | degen0x',
    description:
      'Learn crypto for free. Earn XP, unlock badges, track your progress across Bitcoin, DeFi, Solana, L2s and security courses.',
  },
};

export default function CoursesPage() {
  return <CoursesHub />;
}
