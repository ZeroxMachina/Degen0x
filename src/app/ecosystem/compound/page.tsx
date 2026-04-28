import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import CompoundGuidePage from "./CompoundClient";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Compound Finance Guide 2026: DeFi Lending & Borrowing",
  description:
    "Complete guide to Compound Finance — the pioneering DeFi lending protocol. Learn how to lend, borrow, and earn interest on crypto with Compound V3 in 2026.",
  keywords: [
    "compound finance",
    "compound defi",
    "compound lending",
    "compound v3",
    "COMP token",
    "defi lending",
    "crypto borrowing",
    "compound guide 2026",
  ],
  openGraph: {
    title: "Compound Finance Guide 2026: DeFi Lending & Borrowing",
    description:
      "Complete guide to Compound Finance — learn how to lend, borrow, and earn interest on crypto with Compound V3.",
    type: "article",
    url: "https://degen0x.com/ecosystem/compound",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Compound+Finance:+DeFi+Lending+Guide&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Compound Finance Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compound Finance Guide 2026 | degen0x",
    description:
      "DeFi lending & borrowing with Compound V3. Lend, borrow, and earn interest on crypto.",
    images: [
      "https://degen0x.com/api/og?title=Compound+Finance:+DeFi+Lending+Guide&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/compound" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Compound', },
  ],
};

export default function CompoundPage() {
  return (
    <>
      <ArticleSchema
        headline="Compound Finance Guide 2026: DeFi Lending & Borrowing"
        description="Complete guide to Compound Finance — the pioneering DeFi lending protocol. Learn how to lend, borrow, and earn interest on crypto with Compound V3 in 2026."
        url="/ecosystem/compound"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/compound" />
        <ReadingTime />
      </div>
<AuthoritySources url="/ecosystem/compound" />
      <CompoundGuidePage />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Compound Finance Guide 2026: DeFi Lending & Borrowing", "description": "Complete guide to Compound Finance — the pioneering DeFi lending protocol. Learn how to lend, borrow, and earn interest on crypto with Compound V3 in 2026.", "url": "https://degen0x.com/ecosystem/compound", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
