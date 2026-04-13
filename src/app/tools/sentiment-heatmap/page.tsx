import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import SentimentHeatmapClient from './SentimentHeatmapClient';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Crypto Sentiment Heatmap | degen0x',
  description: "Real-time market sentiment analysis across top 50 cryptocurrency tokens. Visualize fear and greed with an interactive heatmap, fear & greed gauge, and advanced",
  keywords: [
    'crypto sentiment',
    'market sentiment',
    'cryptocurrency heatmap',
    'fear and greed',
    'crypto analysis',
  ],
  openGraph: {
    title: 'Crypto Sentiment Heatmap | degen0x',
    description: 'Visualize fear & greed across 50+ tokens with interactive heatmap and chain/category filtering.',
    type: 'website',
    url: 'https://degen0x.com/tools/sentiment-heatmap',
    images: [{ url: 'https://degen0x.com/og-sentiment-heatmap.svg', width: 1200, height: 630, alt: 'Crypto Sentiment Heatmap — degen0x' }],
  },
  twitter: { card: 'summary_large_image', title: 'Crypto Sentiment Heatmap | degen0x', images: ['https://degen0x.com/og-sentiment-heatmap.svg'] },

  alternates: { canonical: "/tools/sentiment-heatmap" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Sentiment Heatmap', },
  ],
};

export default function SentimentHeatmapPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
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
            { label: "Sentiment Heatmap" },
          ]}
        />
        <SentimentHeatmapClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Sentiment Heatmap",
              "url": "https://degen0x.com/tools/sentiment-heatmap",
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
    </div>
  );
}
