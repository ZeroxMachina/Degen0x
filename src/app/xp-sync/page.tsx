import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import WalletXPSync from '@/components/WalletXPSync';

export const metadata: Metadata = {
  title: 'Wallet XP Sync — On-Chain Identity | degen0x',
  description: 'Sync your degen0x XP with your Solana wallet. On-chain proof of your crypto learning journey.',
  openGraph: {
    title: 'degen0x Wallet XP Sync',
    description: 'Link your wallet, sync your XP on-chain, prove your crypto knowledge.',
  },

  alternates: { canonical: "/xp-sync" }};

export default function XPSyncPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#0d1117', padding: '24px' }}>

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="xp-sync"
      />      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <WalletXPSync />
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Wallet XP Sync \u2014 On-Chain Identity | degen0x", "description": "Sync your degen0x XP with your Solana wallet. On-chain proof of your crypto learning journey.", "url": "https://degen0x.com/xp-sync"}) }} />
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
