import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import BabylonClient from "./BabylonClient";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Babylon Protocol: Bitcoin Staking Guide 2026 — $4.2B TVL",
  description: "Complete guide to Babylon Protocol — the first native Bitcoin staking solution with $4.2B TVL, 180K+ BTC staked, and 5-9% APR. How Bitcoin staking works, BABY",
  keywords: [
    "babylon protocol",
    "bitcoin staking",
    "babylon staking guide",
    "BABY token",
    "BTC yield",
    "bitcoin defi",
    "pos security",
    "babylon review 2026",
    "native bitcoin staking",
  ],
  openGraph: {
    title: "Babylon Protocol: Bitcoin Staking Guide 2026",
    description:
      "$4.2B TVL. 180K+ BTC staked. Complete guide to native Bitcoin staking.",
    type: "article",
    url: "https://degen0x.com/ecosystem/babylon-protocol",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Babylon+Protocol:+Bitcoin+Staking+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Babylon Protocol Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babylon Protocol: Bitcoin Staking Guide 2026 | degen0x",
    description:
      "$4.2B TVL. 180K+ BTC staked. 5-9% APR. Complete Bitcoin staking guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Babylon+Protocol:+Bitcoin+Staking+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/babylon-protocol" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Babylon Protocol', },
  ],
};

export default function BabylonProtocolPage() {
  return (
    <>
      <ArticleSchema
        headline="Babylon Protocol: Bitcoin Staking Guide 2026 — $4.2B TVL"
        description="Complete guide to Babylon Protocol — the first native Bitcoin staking solution with $4.2B TVL, 180K+ BTC staked, and 5-9% APR. How Bitcoin staking works, BABY"
        url="/ecosystem/babylon-protocol"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/babylon-protocol" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/babylon-protocol" />
      <BabylonClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Babylon Protocol: Bitcoin Staking Guide 2026 — $4.2B TVL", "description": "Complete guide to Babylon Protocol — the first native Bitcoin staking solution with $4.2B TVL, 180K+ BTC staked, and 5-9% APR. How Bitcoin staking works, BABY", "url": "https://degen0x.com/ecosystem/babylon-protocol", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/ecosystem/1inch" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>1Inch</a>
  <a href="/ecosystem/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/ecosystem/aave" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave</a>
  <a href="/ecosystem/across" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Across</a>
  <a href="/ecosystem/aerodrome" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aerodrome</a>
  <a href="/ecosystem/axelar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Axelar</a>
  <a href="/ecosystem/balancer" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Balancer</a>
  <a href="/ecosystem/balancer-v3" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Balancer V3</a>
</nav>
      </>
  );
}
