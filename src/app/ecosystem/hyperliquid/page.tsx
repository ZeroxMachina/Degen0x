import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import HyperliquidClient from "./HyperliquidClient";

export const metadata: Metadata = {
  title: "Hyperliquid: The #1 Perp DEX Guide 2026 — $2.9T Volume, 70%",
  description: "Complete guide to Hyperliquid — the dominant perpetual futures DEX with $2.9T cumulative volume, 1.4M users, and 70%+ perp DEX market share. HYPE tokenomics,",
  keywords: [
    "hyperliquid",
    "hyperliquid guide",
    "perp dex",
    "perpetual futures dex",
    "HYPE token",
    "hyperliquid review",
    "decentralized perpetuals",
    "hyperliquid fees",
    "hyperliquid l1",
    "best perp dex 2026",
  ],
  openGraph: {
    title: "Hyperliquid: The #1 Perp DEX Guide 2026",
    description:
      "Complete guide to Hyperliquid — the dominant perpetual futures DEX. $2.9T cumulative volume, 1.4M users, 70%+ market share.",
    type: "article",
    url: "https://degen0x.com/ecosystem/hyperliquid",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Hyperliquid:+The+%231+Perp+DEX+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Hyperliquid Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperliquid: The #1 Perp DEX Guide 2026 | degen0x",
    description:
      "$2.9T volume, 1.4M users, 70% perp DEX market share. Zero VC funding. Complete guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Hyperliquid:+The+%231+Perp+DEX+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/hyperliquid" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Hyperliquid', },
  ],
};

export default function HyperliquidPage() {
  return (
    <>
      <HyperliquidClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Hyperliquid: The #1 Perp DEX Guide 2026 — $2.9T Volume, 70%", "description": "Complete guide to Hyperliquid — the dominant perpetual futures DEX with $2.9T cumulative volume, 1.4M users, and 70%+ perp DEX market share. HYPE tokenomics,", "url": "https://degen0x.com/ecosystem/hyperliquid", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/ecosystem/1inch" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>1Inch</a>
  <a href="/ecosystem/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/ecosystem/aave" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave</a>
  <a href="/ecosystem/across" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Across</a>
  <a href="/ecosystem/aerodrome" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aerodrome</a>
  <a href="/ecosystem/axelar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Axelar</a>
  <a href="/ecosystem/babylon-protocol" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Babylon Protocol</a>
  <a href="/ecosystem/balancer" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Balancer</a>
</nav>
      </>
  );
}
