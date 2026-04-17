import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import PortfolioLiveDashboard from '@/components/PortfolioLiveDashboard';

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

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
      <ArticleSchema
        headline="Live Portfolio Dashboard — Real-Time P&L | degen0x"
        description="Track your crypto portfolio with live prices via WebSocket. See real-time P&L, 24h changes, allocation breakdown, and sparkline charts for BTC, ETH, SOL and"
        url="/portfolio-live"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/portfolio-live" />
        <ReadingTime />
      </div>
<AuthoritySources url="/portfolio-live" />
      <PortfolioLiveDashboard />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Live Portfolio Dashboard — Real-Time P&L | degen0x", "description": "Real-time crypto portfolio tracker with WebSocket live prices.", "url": "https://degen0x.com/portfolio-live", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
