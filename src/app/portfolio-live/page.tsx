import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import PortfolioLiveDashboard from '@/components/PortfolioLiveDashboard';

export const metadata: Metadata = {
  title: 'Live Portfolio Dashboard — Real-Time P&L | degen0x',
  description: "Track your crypto portfolio with live prices via WebSocket. See real-time P&L, 24h changes, allocation breakdown, and sparkline charts for BTC, ETH, SOL and",
  openGraph: {
    title: 'Live Portfolio Dashboard | degen0x',
    description: 'Real-time crypto portfolio tracker with WebSocket live prices.',
  },

  alternates: { canonical: "/portfolio-live" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio Live', },
  ],
};

export default function PortfolioLivePage() {
  return (
    <>
      <PortfolioLiveDashboard />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Live Portfolio Dashboard — Real-Time P&L | degen0x", "description": "Real-time crypto portfolio tracker with WebSocket live prices.", "url": "https://degen0x.com/portfolio-live", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
