import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import EigenLayerClient from "./EigenLayerClient";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "EigenLayer: Restaking & AVS Guide 2026 — $15B ETH Restaked",
  description: "Complete guide to EigenLayer — the Ethereum restaking protocol with $15B+ ETH restaked, 30+ Active Validated Services (AVS), and 500+ operators. How restaking",
  keywords: [
    "eigenlayer",
    "eigenlayer guide",
    "ethereum restaking",
    "AVS",
    "EIGEN token",
    "restaking protocol",
    "eigenlayer review 2026",
    "liquid restaking",
    "actively validated services",
  ],
  openGraph: {
    title: "EigenLayer: Restaking & AVS Guide 2026",
    description:
      "$15B+ ETH restaked. 30+ AVSs. Complete guide to Ethereum's restaking protocol.",
    type: "article",
    url: "https://degen0x.com/ecosystem/eigenlayer",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=EigenLayer:+Restaking+%26+AVS+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "EigenLayer Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EigenLayer: Restaking & AVS Guide 2026 | degen0x",
    description:
      "$15B+ ETH restaked. 30+ AVSs. 500+ operators. Complete restaking guide inside.",
    images: [
      "https://degen0x.com/api/og?title=EigenLayer:+Restaking+%26+AVS+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/eigenlayer" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Eigenlayer', },
  ],
};

export default function EigenLayerPage() {
  return (
    <>
      <ArticleSchema
        headline="EigenLayer: Restaking & AVS Guide 2026 — $15B ETH Restaked"
        description="Complete guide to EigenLayer — the Ethereum restaking protocol with $15B+ ETH restaked, 30+ Active Validated Services (AVS), and 500+ operators. How restaking"
        url="/ecosystem/eigenlayer"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/eigenlayer" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/eigenlayer" />
      <EigenLayerClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "EigenLayer: Restaking & AVS Guide 2026 — $15B ETH Restaked", "description": "Complete guide to EigenLayer — the Ethereum restaking protocol with $15B+ ETH restaked, 30+ Active Validated Services (AVS), and 500+ operators. How restaking", "url": "https://degen0x.com/ecosystem/eigenlayer", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
