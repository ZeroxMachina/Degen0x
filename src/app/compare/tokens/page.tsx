import { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import TokenComparison from '@/components/TokenComparison';
import Footer from '@/components/Footer';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: "Token Comparison Tool — Side-by-Side Crypto Analysis",
  description: 'Compare any two cryptocurrencies side-by-side. Analyze price, fundamentals, performance, social metrics, and more with our radar chart visualization.',
  keywords: ['crypto comparison', 'token comparison', 'BTC vs ETH', 'cryptocurrency analysis', 'coin comparison tool'],
  alternates: { canonical: "/compare/tokens" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://degen0x.com/compare' },
    { '@type': 'ListItem', position: 3, name: 'Tokens', },
  ],
};

export default function TokenComparisonPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="compare"
      />      <div className="max-w-7xl mx-auto px-4 py-8">
        <TokenComparison />
      </div>
      <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Token Comparison Tool \u2014 Side-by-Side Crypto Analysis", "description": "Compare any two cryptocurrencies side-by-side. Analyze price, fundamentals, performance, social metrics, and more with our radar chart visualization.", "url": "https://degen0x.com/compare/tokens", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
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
            All Comparisons
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
        </div>
      </div>
      <RelatedContent category="compare" currentSlug="/compare/tokens" />
    </main>
  );
}
