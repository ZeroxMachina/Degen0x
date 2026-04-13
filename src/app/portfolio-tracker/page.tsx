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
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/about" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>About</a>
  <a href="/achievements" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Achievements</a>
  <a href="/airdrops" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Airdrops</a>
  <a href="/alerts" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alerts</a>
  <a href="/ar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ar</a>
  <a href="/badges" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Badges</a>
  <a href="/blog" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blog</a>
  <a href="/community" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Community</a>
</nav>
      </>
  );
}
