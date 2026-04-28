import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import UsualClient from "./UsualClient";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Usual Money: USD0 Revenue-Sharing Stablecoin Guide 2026 —",
  description: "Complete guide to Usual Money — the RWA-backed stablecoin protocol with $1.4B USD0 supply, ~12% APY on USD0++, and 100% revenue sharing to $USUAL holders. How",
  keywords: [
    "usual money",
    "USD0 stablecoin",
    "usual protocol",
    "USUAL token",
    "RWA stablecoin",
    "revenue sharing stablecoin",
    "USD0++ bond",
    "usual review 2026",
    "treasury bill yield",
  ],
  openGraph: {
    title: "Usual Money: USD0 Revenue-Sharing Stablecoin Guide 2026",
    description:
      "$1.4B supply. ~12% APY. 100% revenue sharing. Complete guide to USD0.",
    type: "article",
    url: "https://degen0x.com/ecosystem/usual",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Usual+Money:+USD0+Stablecoin+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Usual Money Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usual Money: USD0 Stablecoin Guide 2026 | degen0x",
    description:
      "$1.4B supply. ~12% APY. RWA-backed with 100% revenue sharing. Complete stablecoin guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Usual+Money:+USD0+Stablecoin+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/usual" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Usual', },
  ],
};

export default function UsualPage() {
  return (
    <>
      <ArticleSchema
        headline="Usual Money: USD0 Revenue-Sharing Stablecoin Guide 2026 —"
        description="Complete guide to Usual Money — the RWA-backed stablecoin protocol with $1.4B USD0 supply, ~12% APY on USD0++, and 100% revenue sharing to $USUAL holders. How"
        url="/ecosystem/usual"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/usual" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/usual" />
      <UsualClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Usual Money: USD0 Revenue-Sharing Stablecoin Guide 2026 —", "description": "Complete guide to Usual Money — the RWA-backed stablecoin protocol with $1.4B USD0 supply, ~12% APY on USD0++, and 100% revenue sharing to $USUAL holders. How", "url": "https://degen0x.com/ecosystem/usual", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
