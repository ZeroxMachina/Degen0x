import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import ClientContent from './ClientContent';

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `DeFi Yield Aggregator | Compare APY & Yields | degen0x`,
  description: `Compare DeFi yields across Ethereum, Solana, Arbitrum and more. Find the best APY for lending, staking, LPs and yield vaults. Analyze TVL, risk levels, and earn with confidence.`,
  alternates: { canonical: `${SITE_URL}/defi-yields` },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Yields', },
  ],
};

export default function DeFiYieldsPage() {
  return (
    <>
      <ArticleSchema
        headline="DeFi"
        description="DeFi"
        url="https://degen0x.com/defi-yields"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="DeFi"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/defi-yields" />
        <ReadingTime />
      </div>
<AuthoritySources url="/defi-yields" />
      <ClientContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "DeFi Yield Aggregator | Compare APY & Yields | degen0x", "description": "Compare DeFi yields across Ethereum, Solana, Arbitrum and more. Find the best APY for lending, staking, LPs and yield vaults. Analyze TVL, risk levels, and earn with confidence.", "url": "https://degen0x.com/defi-yields", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
