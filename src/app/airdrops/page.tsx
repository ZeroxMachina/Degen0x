import ClientContent from './ClientContent';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata = {
  title: 'Airdrop Calendar & Tracker | degen0x - Never Miss Free Crypto',
  description:
    'Track upcoming cryptocurrency airdrops with real-time countdowns, eligibility requirements, and strategy guides. Never miss free crypto again.',
  keywords: 'crypto airdrops, airdrop tracker, free crypto, ethereum airdrops, defi airdrops, blockchain',
  openGraph: {
    title: 'Airdrop Calendar & Tracker | degen0x',
    description: 'Never miss free crypto again. Track and maximize your airdrop eligibility.',
    images: [{ url: 'https://degen0x.com/og-airdrops.png', width: 1200, height: 630, alt: 'Airdrop Calendar and Tracker on degen0x' }],
  },

  alternates: { canonical: "/airdrops" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Airdrops', },
  ],
};

export default function AirdropsPage() {
  return (
    <>
      <ArticleSchema
        headline="Airdrop Calendar & Tracker | degen0x - Never Miss Free Crypto"
        description="Track upcoming cryptocurrency airdrops with real-time countdowns, eligibility requirements, and strategy guides. Never miss free crypto again."
        url="/airdrops"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/airdrops" />
        <ReadingTime />
      </div>
<AuthoritySources url="/airdrops" />
      <ClientContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Airdrop Calendar & Tracker | degen0x - Never Miss Free Crypto", "description": "Track upcoming cryptocurrency airdrops with real-time countdowns, eligibility requirements, and strategy guides. Never miss free crypto again.", "url": "https://degen0x.com/airdrops", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/about" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>About</a>
  <a href="/achievements" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Achievements</a>
  <a href="/alerts" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alerts</a>
  <a href="/ar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ar</a>
  <a href="/badges" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Badges</a>
  <a href="/blog" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blog</a>
  <a href="/community" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Community</a>
  <a href="/compare" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Compare</a>
</nav>
      </>
  );
}
