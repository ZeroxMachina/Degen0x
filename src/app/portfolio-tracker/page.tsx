import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import PortfolioTrackerClient from './PortfolioTrackerClient';

export const metadata: Metadata = {
  title: 'Portfolio Tracker — Multi-Chain Crypto Portfolio | degen0x',
  description: "Track your entire crypto portfolio across Ethereum, Solana, and Base in one place. Real-time prices, LP positions, staking rewards, chain breakdown, and 30-day",
  openGraph: {
    title: 'Portfolio Tracker | degen0x',
    description:
      'Track your multi-chain crypto portfolio — tokens, LP positions, staking rewards, and performance charts.',
    images: [
      {
        url: 'https://degen0x.com/og-portfolio-tracker.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Tracker on degen0x',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Tracker | degen0x',
    description:
      'Track your multi-chain crypto portfolio — tokens, LP positions, staking rewards, and performance charts.',
    images: ['https://degen0x.com/og-portfolio-tracker.png'],
  },

  alternates: { canonical: "/portfolio-tracker" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio Tracker', },
  ],
};

export default function PortfolioTrackerPage() {
  return (
    <>
      <PortfolioTrackerClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Portfolio Tracker — Multi-Chain Crypto Portfolio | degen0x", "description": "Track your multi-chain crypto portfolio — tokens, LP positions, staking rewards, and performance charts.", "url": "https://degen0x.com/portfolio-tracker", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
