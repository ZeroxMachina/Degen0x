import { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MarketHeatmap from '@/components/MarketHeatmap';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Live Crypto Market Heatmap — Real-Time Sector Analysis",
  description: 'Visualize the entire crypto market at a glance with our interactive heatmap. Filter by sector, time range, and sort by market cap, volume, or performance.',
  keywords: ['crypto heatmap', 'market heatmap', 'crypto sectors', 'market visualization', 'treemap crypto'],
  alternates: { canonical: "/heatmap" }};

export default function HeatmapPage() {
  return (
    <main className="min-h-screen bg-gray-950">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="heatmap"
      />      <div className="max-w-7xl mx-auto px-4 py-8">
        <MarketHeatmap />
      </div>
      <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Live Crypto Market Heatmap \u2014 Real-Time Sector Analysis", "description": "Visualize the entire crypto market at a glance with our interactive heatmap. Filter by sector, time range, and sort by market cap, volume, or performance.", "url": "https://degen0x.com/heatmap"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
