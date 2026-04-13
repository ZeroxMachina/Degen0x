import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import OdosClient from "./OdosClient";

export const metadata: Metadata = {
  title: "Odos: Multi-Input DEX Aggregator Guide 2026 — $30B+ Volume",
  description: "Complete guide to Odos — the first multi-input DEX aggregator with $30B+ volume across 16 chains, zero fees, and 1000+ routing paths per trade. How Odos works,",
  keywords: [
    "odos",
    "odos dex aggregator",
    "multi-input swap",
    "dex aggregator",
    "smart order router",
    "odos review 2026",
    "token swap aggregator",
    "portfolio rebalancing",
    "multi-chain dex",
  ],
  openGraph: {
    title: "Odos: Multi-Input DEX Aggregator Guide 2026",
    description:
      "$30B+ volume. 16 chains. Zero fees. Complete guide to the multi-input DEX aggregator.",
    type: "article",
    url: "https://degen0x.com/ecosystem/odos",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Odos:+Multi-Input+DEX+Aggregator+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Odos Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Odos: Multi-Input DEX Aggregator Guide 2026 | degen0x",
    description:
      "$30B+ volume. 16 chains. 1000+ routes per trade. Complete DEX aggregator guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Odos:+Multi-Input+DEX+Aggregator+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/odos" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Odos', },
  ],
};

export default function OdosPage() {
  return (
    <>
      <OdosClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Odos: Multi-Input DEX Aggregator Guide 2026 — $30B+ Volume", "description": "Complete guide to Odos — the first multi-input DEX aggregator with $30B+ volume across 16 chains, zero fees, and 1000+ routing paths per trade. How Odos works,", "url": "https://degen0x.com/ecosystem/odos", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
