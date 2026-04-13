import OnChainPortfolioAnalytics from '@/components/OnChainPortfolioAnalytics';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'On-Chain Portfolio Analytics — Multi-Chain, DeFi & NFT Tracker | degen0x',
  description: 'Track your crypto portfolio across Ethereum, Arbitrum, Base, Polygon & more. See DeFi positions, P&L history, risk scores, and on-chain data in real time.',
  openGraph: {
    title: 'On-Chain Portfolio Analytics — Multi-Chain DeFi & NFT Tracker',
    description: 'Real-time crypto portfolio tracking across Ethereum, Arbitrum, Base, Polygon. See DeFi positions, P&L history, risk scores, and on-chain metrics.',
    type: 'website',
    url: 'https://degen0x.com/portfolio-onchain',
    images: [
      {
        url: 'https://degen0x.com/api/og?title=Portfolio+Analytics&category=Tools&type=page',
        width: 1200,
        height: 630,
        alt: 'On-Chain Portfolio Analytics Tracker',
      },
    ],
  },
  alternates: { canonical: "/portfolio-onchain" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio Onchain', },
  ],
};

export default function OnChainPortfolioPage() {
  return (
    <main style={{ backgroundColor: "#0d1117", color: "#e6edf3", minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="portfolio-onchain"
      />      <div style={{ borderBottom: "1px solid #30363d", padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: "#8b949e" }}>
        <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <span style={{ color: "#e6edf3" }}>On-Chain Portfolio</span>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>On-Chain Portfolio Analytics</h1>
          <p style={{ color: "#8b949e", fontSize: 15 }}>Real-time multi-chain portfolio tracking with DeFi positions, P&L history, and risk scoring.</p>
        </div>
        <OnChainPortfolioAnalytics />
      </div>
      <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "On-Chain Portfolio Analytics \u2014 Multi-Chain, DeFi & NFT Tracker | degen0x", "description": "Track your crypto portfolio across Ethereum, Arbitrum, Base, Polygon & more. See DeFi positions, P&L history, risk scores, and on-chain data in real time.", "url": "https://degen0x.com/portfolio-onchain", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
