import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import InitiaClient from "./InitiaClient";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Initia: Cosmos-based L1 for Modular Rollups",
  description: "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).",
  openGraph: {
    title: "Initia: Cosmos-based L1 for Modular Rollups",
    description: "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).",
    images: [{ url: "https://degen0x.com/og-initia-ecosystem.svg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initia: Cosmos-based L1 for Modular Rollups",
    description: "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).",
    images: ["https://degen0x.com/og-initia-ecosystem.svg"],
  },

  alternates: { canonical: "/ecosystem/initia" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Initia', },
  ],
};

export default function InitiaPage() {
  return (
    <>
      <ArticleSchema
        headline="Initia: Cosmos-based L1 for Modular Rollups"
        description="Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM)."
        url="/ecosystem/initia"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/initia" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/initia" />
      <InitiaClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Initia: Cosmos-based L1 for Modular Rollups", "description": "Initia is a Cosmos-based L1 orchestrating modular rollups (Minitias) with $300M+ TVL and multi-VM support (MoveVM, EVM, WasmVM).", "url": "https://degen0x.com/ecosystem/initia", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
