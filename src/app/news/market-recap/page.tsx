import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";

import MarketRecapClient from "./MarketRecapClient";

export const metadata: Metadata = {
  title: "Daily Market Recap | degen0x AI",
  description:
    "Daily crypto market recap: Price analysis, volume tracking, sentiment signals, on-chain metrics, whale activity tracking, and DEX patterns.",
  keywords: [
    "crypto market recap",
    "Bitcoin",
    "Ethereum",
    "market sentiment",
    "trading signals",
  ],
  openGraph: {
    title: "AI Market Recap | degen0x",
    description: "AI-powered daily crypto market analysis — sentiment, gainers/losers, whale activity & on-chain signals.",
    type: "website",
    url: "https://degen0x.com/news/market-recap",
    images: [{ url: "https://degen0x.com/og-market-recap.png", width: 1200, height: 630, alt: "AI Market Recap — degen0x" }],
  },
  twitter: { card: "summary_large_image", title: "AI Market Recap | degen0x", images: ["https://degen0x.com/og-market-recap.png"] },

  alternates: { canonical: "/news/market-recap" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'News', item: 'https://degen0x.com/news' },
    { '@type': 'ListItem', position: 3, name: 'Market Recap', },
  ],
};

export default function MarketRecapPage() {
  return (
    <>
      <MarketRecapClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Daily Market Recap | degen0x AI", "description": "Daily crypto market recap: Price analysis, volume tracking, sentiment signals, on-chain metrics, whale activity tracking, and DEX patterns.", "url": "https://degen0x.com/news/market-recap", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/news/[slug]" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>[Slug]</a>
  <a href="/news/live" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Live</a>
</nav>
      </>
  );
}
