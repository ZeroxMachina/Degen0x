import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import PortfolioTracker from '@/components/PortfolioTracker';

export const metadata: Metadata = {
  title: 'Crypto Portfolio Tracker — Track Your PnL | degen0x',
  description:
    'Track your crypto portfolio performance in real-time. See PnL across BTC, ETH, SOL and more. Free portfolio tracker with no signup required.',
  openGraph: {
    title: 'Portfolio Tracker | degen0x',
    description: 'Track your crypto holdings and PnL. Free, fast, no signup required.',
  },

  alternates: { canonical: "/portfolio" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioTracker />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
