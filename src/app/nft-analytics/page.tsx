import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import NFTRarityAnalytics from '@/components/NFTRarityAnalytics';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'NFT Collection Analytics & Rarity Tools | degen0x',
  description: 'Analyze NFT rarity scores, trait distributions, and estimated prices for top collections including CryptoPunks, BAYC, Azuki, DeGods, and more.',
  keywords: ['NFT analytics', 'rarity tools', 'NFT rarity score', 'trait analysis', 'floor price tracker', 'NFT valuation'],
  openGraph: {
    title: 'NFT Collection Analytics & Rarity Tools | degen0x',
    description: 'Deep-dive into NFT collections with rarity scoring, trait analysis, and price estimation.',
    type: 'website',
  },

  alternates: { canonical: "/nft-analytics" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Nft Analytics', },
  ],
};

export default function NFTAnalyticsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Header />
      <main className="min-h-screen bg-[#0d1117]">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="nft-analytics"
      />        <NFTRarityAnalytics />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "NFT Collection Analytics & Rarity Tools | degen0x", "description": "Analyze NFT rarity scores, trait distributions, and estimated prices for top collections including CryptoPunks, BAYC, Azuki, DeGods, and more.", "url": "https://degen0x.com/nft-analytics"}) }} />
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
      <Footer />
    </>
  );
}
