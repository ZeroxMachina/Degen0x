import type { Metadata } from 'next';
import CoursesHub from '@/components/CoursesHub';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Free Crypto Courses — Earn XP & Badges | degen0x',
  description:
    'The most comprehensive free crypto curriculum. Learn Bitcoin, DeFi, Solana, Layer 2s, security, and more. Earn XP and badges as you progress. No signup required.',
  openGraph: {
    title: 'Free Crypto Courses | degen0x',
    description:
      'Learn crypto for free. Earn XP, unlock badges, track your progress across Bitcoin, DeFi, Solana, L2s and security courses.',
    images: [{ url: 'https://degen0x.com/og-courses.png', width: 1200, height: 630, alt: 'Free Crypto Courses on degen0x' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Crypto Courses | degen0x',
    description:
      'Learn crypto for free. Earn XP, unlock badges, track your progress across Bitcoin, DeFi, Solana, L2s and security courses.',
    images: ['https://degen0x.com/og-courses.png'],
  },
};

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Courses" },
        ]}
      />
      <CoursesHub />
    </div>
  );
}
