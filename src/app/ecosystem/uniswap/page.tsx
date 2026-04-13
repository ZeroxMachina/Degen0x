import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import UniswapClient from "./UniswapClient";

export const metadata: Metadata = {
  title: "Uniswap: The Original DEX Guide 2026 — Multi-Chain AMM",
  description: "Complete guide to Uniswap — the pioneering decentralized exchange. Concentrated liquidity (v3), Uniswap v4 hooks, UNI governance, multi-chain deployment, and",
  keywords: [
    "uniswap",
    "uniswap guide",
    "decentralized exchange",
    "AMM",
    "uniswap v3",
    "uniswap v4",
    "UNI token",
    "concentrated liquidity",
    "uniswap review 2026",
  ],
  openGraph: {
    title: "Uniswap: The Original DEX Guide 2026",
    description:
      "The pioneering DEX. Concentrated liquidity, v4 hooks, multi-chain. Complete guide.",
    type: "article",
    url: "https://degen0x.com/ecosystem/uniswap",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Uniswap:+The+Original+DEX+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Uniswap Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniswap: The Original DEX Guide 2026 | degen0x",
    description:
      "The OG DEX. Concentrated liquidity, v4 hooks, multi-chain AMM. Complete guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Uniswap:+The+Original+DEX+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/uniswap" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Uniswap', },
  ],
};

export default function UniswapPage() {
  return (
    <>
      <UniswapClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Uniswap: The Original DEX Guide 2026 — Multi-Chain AMM", "description": "Complete guide to Uniswap — the pioneering decentralized exchange. Concentrated liquidity (v3), Uniswap v4 hooks, UNI governance, multi-chain deployment, and", "url": "https://degen0x.com/ecosystem/uniswap", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
