import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import AaveClient from "./AaveClient";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Aave: DeFi Lending & Borrowing Guide 2026 | degen0x",
  description: "Complete guide to Aave — the largest DeFi lending protocol. Multi-chain lending, flash loans, GHO stablecoin, safety module staking, and how to earn yield on",
  keywords: [
    "aave",
    "aave guide",
    "defi lending",
    "crypto borrowing",
    "aave v3",
    "GHO stablecoin",
    "flash loans",
    "aave review 2026",
    "defi yield",
  ],
  openGraph: {
    title: "Aave: DeFi Lending & Borrowing Guide 2026",
    description:
      "The largest DeFi lending protocol. Multi-chain lending, flash loans, GHO stablecoin. Complete guide.",
    type: "article",
    url: "https://degen0x.com/ecosystem/aave",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Aave:+DeFi+Lending+%26+Borrowing+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Aave Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aave: DeFi Lending & Borrowing Guide 2026 | degen0x",
    description:
      "The #1 DeFi lending protocol. Multi-chain, flash loans, GHO. Complete guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Aave:+DeFi+Lending+%26+Borrowing+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/aave" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Aave', },
  ],
};

export default function AavePage() {
  return (
    <>
      <ArticleSchema
        headline="Aave: DeFi Lending & Borrowing Guide 2026 | degen0x"
        description="Complete guide to Aave — the largest DeFi lending protocol. Multi-chain lending, flash loans, GHO stablecoin, safety module staking, and how to earn yield on"
        url="/ecosystem/aave"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/aave" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/aave" />
      <AaveClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Aave: DeFi Lending & Borrowing Guide 2026 | degen0x", "description": "Complete guide to Aave — the largest DeFi lending protocol. Multi-chain lending, flash loans, GHO stablecoin, safety module staking, and how to earn yield on", "url": "https://degen0x.com/ecosystem/aave", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/ecosystem/1inch" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>1Inch</a>
  <a href="/ecosystem/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/ecosystem/across" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Across</a>
  <a href="/ecosystem/aerodrome" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aerodrome</a>
  <a href="/ecosystem/axelar" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Axelar</a>
  <a href="/ecosystem/babylon-protocol" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Babylon Protocol</a>
  <a href="/ecosystem/balancer" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Balancer</a>
  <a href="/ecosystem/balancer-v3" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Balancer V3</a>
</nav>
      </>
  );
}
