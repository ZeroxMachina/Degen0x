import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import TokenRadarClient from './TokenRadarClient';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: 'Token Launch Radar | degen0x',
  description:
    'Track upcoming and recently launched tokens across multiple blockchains. Real-time token launch radar with risk analysis, social metrics, and audit status.',
  keywords: [
    'token launches',
    'crypto radar',
    'blockchain tokens',
    'DeFi',
    'token analysis',
  ],
  openGraph: {
    title: 'Token Launch Radar | degen0x',
    description: 'Track upcoming and recently launched tokens across Ethereum, Solana, Base, Arbitrum & BNB with risk scores and audit status.',
    type: 'website',
    url: 'https://degen0x.com/tools/token-radar',
    images: [{ url: 'https://degen0x.com/og-token-radar.svg', width: 1200, height: 630, alt: 'Token Launch Radar — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Token Launch Radar | degen0x', description: 'Track upcoming and recently launched tokens with risk scores and social metrics.', images: ['https://degen0x.com/og-token-radar.svg'] },

  alternates: { canonical: "/tools/token-radar" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Token Radar', },
  ],
};

export default function TokenRadarPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <ArticleSchema
        headline="Token Launch Radar | degen0x"
        description="Track upcoming and recently launched tokens across multiple blockchains. Real-time token launch radar with risk analysis, social metrics, and audit status."
        url="/tools/token-radar"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/token-radar" />
        <ReadingTime />
      </div>
<AuthoritySources url="/tools/token-radar" />
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/token-radar"
        name="Token Launch Radar"
        description="Track upcoming and recently launched tokens across multiple blockchains. Real-time token launch radar with risk analysis, social metrics, and audit status."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="tools"
      />      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Token Radar" },
          ]}
        />
        <TokenRadarClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Token Radar",
              "url": "https://degen0x.com/tools/token-radar",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" , "datePublished": "2026-04-13", "dateModified": "2026-04-13"}
            })
          }}
        />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
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
            All Tools
          </Link>
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
            Learning Guides
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
            Compare Tools
          </Link>
        </div>
      </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Token Launch Radar | degen0x", "description": "Track upcoming and recently launched tokens across multiple blockchains. Real-time token launch radar with risk analysis, social metrics, and audit status.", "url": "https://degen0x.com/tools/token-radar", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="tools" currentSlug="/tools/token-radar" />
</div>
  );
}
