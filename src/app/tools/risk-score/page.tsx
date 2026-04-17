import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RiskScoreClient from './RiskScoreClient';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: 'Portfolio Risk Scoring Engine | degen0x',
  description: 'Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations.',
  keywords: 'crypto portfolio, risk analysis, scoring, volatility, diversification',
  openGraph: {
    title: 'Portfolio Risk Scoring Engine | degen0x',
    description: 'Analyze crypto portfolio risk with volatility, concentration, correlation & liquidity metrics.',
    type: 'website',
    url: 'https://degen0x.com/tools/risk-score',
    images: [{ url: 'https://degen0x.com/og-risk-score.svg', width: 1200, height: 630, alt: 'Portfolio Risk Scorer — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Portfolio Risk Scoring Engine | degen0x', images: ['https://degen0x.com/og-risk-score.svg'] },

  alternates: { canonical: "/tools/risk-score" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Risk Score', },
  ],
};

export default function RiskScorePage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <ArticleSchema
        headline="Portfolio Risk Scoring Engine | degen0x"
        description="Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations."
        url="/tools/risk-score"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/risk-score" />
        <ReadingTime />
      </div>
<AuthoritySources url="/tools/risk-score" />
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/risk-score"
        name="Portfolio Risk Scoring Engine"
        description="Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations."
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
            { label: "Risk Score" },
          ]}
        />
        <RiskScoreClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Risk Score",
              "url": "https://degen0x.com/tools/risk-score",
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Portfolio Risk Scoring Engine | degen0x", "description": "Analyze cryptocurrency portfolio risk with our advanced scoring engine. Get comprehensive risk metrics and recommendations.", "url": "https://degen0x.com/tools/risk-score", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="tools" currentSlug="/tools/risk-score" />
</div>
  );
}
