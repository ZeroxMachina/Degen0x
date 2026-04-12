import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from '@/components/Breadcrumb';
import WhaleWatchClient from '@/components/WhaleWatchClient';

export const metadata: Metadata = {
  title: "Whale Watch — Real-time Crypto Transaction Tracking",
  description: 'Monitor large whale transactions across ETH, SOL, BTC, and ARB in real-time. Track accumulation zones and top whale activity with advanced filtering.',
  keywords: 'whale watching, crypto transactions, blockchain, ethereum, solana, bitcoin, arbitrum, trading signals',
  openGraph: {
    title: 'Whale Watch — Real-time Crypto Tracking | degen0x',
    description: 'Real-time monitoring of large crypto transactions across major chains.',
    images: [{ url: '/og-whale-watch.png', width: 1200, height: 630, alt: 'degen0x Whale Watch — Real-time Transaction Monitoring' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whale Watch — Real-time Crypto Tracking | degen0x',
    description: 'Real-time monitoring of large crypto transactions across major chains.',
    images: ['/og-whale-watch.png'],
  },

  alternates: { canonical: "/whale-watch" }};

export default function WhaleWatchPage() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="whale-watch"
      />      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0.5rem 1rem 0' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Whale Watch' },
        ]} />
      </div>
      <WhaleWatchClient />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Whale Watch \u2014 Real-time Crypto Transaction Tracking", "description": "Monitor large whale transactions across ETH, SOL, BTC, and ARB in real-time. Track accumulation zones and top whale activity with advanced filtering.", "url": "https://degen0x.com/whale-watch"}) }} />
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
    </div>
  );
}
