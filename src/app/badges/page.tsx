import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from '@/components/Breadcrumb';
import NFTBadgeSystem from '@/components/NFTBadgeSystem';

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: 'Achievement Badges — Mint Soulbound NFTs | degen0x',
  description: 'Earn crypto achievement badges and mint them as soulbound NFTs on Solana. Prove your Web3 knowledge on-chain with degen0x.',
  openGraph: {
    title: 'degen0x Badges — On-Chain Proof of Knowledge',
    description: 'Earn badges, mint soulbound NFTs, prove your crypto mastery.',
    images: [{ url: '/og-badges.png', width: 1200, height: 630, alt: 'degen0x Achievement Badges — Mint Soulbound NFTs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'degen0x Badges — On-Chain Proof of Knowledge',
    description: 'Earn badges, mint soulbound NFTs, prove your crypto mastery.',
    images: ['/og-badges.png'],
  },

  alternates: { canonical: "/badges" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Badges', },
  ],
};

export default function BadgesPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-bg)', padding: '24px' }}>
      <ArticleSchema
        headline="Achievement Badges — Mint Soulbound NFTs | degen0x"
        description="Earn crypto achievement badges and mint them as soulbound NFTs on Solana. Prove your Web3 knowledge on-chain with degen0x."
        url="/badges"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/badges" />
        <ReadingTime />
      </div>
<AuthoritySources url="/badges" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="badges"
      />      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Badges' },
        ]} />
        <NFTBadgeSystem userXP={1500} walletConnected={true} />
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Achievement Badges \u2014 Mint Soulbound NFTs | degen0x", "description": "Earn crypto achievement badges and mint them as soulbound NFTs on Solana. Prove your Web3 knowledge on-chain with degen0x.", "url": "https://degen0x.com/badges", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
