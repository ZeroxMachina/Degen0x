import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import EcosystemStore from '@/components/EcosystemStore';

export const metadata: Metadata = {
  title: 'dApp Ecosystem — Every Protocol on Every Chain | degen0x',
  description: "Discover and explore every dApp across Ethereum, Solana, Base, Arbitrum, Polygon, Avalanche and more. Filter by chain, category, and ratings. The most",
  openGraph: {
    title: 'dApp Ecosystem Directory | degen0x',
    description:
      'Every dApp across every chain. Filter, compare, and learn about protocols — DeFi, NFTs, gaming, bridges, wallets and more.',
    images: [{ url: 'https://degen0x.com/og-ecosystem-store.png', width: 1200, height: 630, alt: 'degen0x dApp Ecosystem Directory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'dApp Ecosystem Directory | degen0x',
    description: 'Every dApp across every chain. Filter, compare, and learn about protocols.',
    images: ['https://degen0x.com/og-ecosystem-store.png'],
  },

  alternates: { canonical: "/ecosystem" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', },
  ],
};

export default function EcosystemPage() {
  return (
    <>
      <EcosystemStore />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "dApp Ecosystem — Every Protocol on Every Chain | degen0x", "description": "Every dApp across every chain. Filter, compare, and learn about protocols — DeFi, NFTs, gaming, bridges, wallets and more.", "url": "https://degen0x.com/ecosystem", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/about" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>About</a>
  <a href="/achievements" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Achievements</a>
  <a href="/airdrops" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Airdrops</a>
  <a href="/alerts" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alerts</a>
  <a href="/ar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ar</a>
  <a href="/badges" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Badges</a>
  <a href="/blog" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blog</a>
  <a href="/community" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Community</a>
</nav>
      </>
  );
}
