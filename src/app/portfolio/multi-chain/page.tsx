import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MultiChainPortfolio from "@/components/MultiChainPortfolio";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: "Multi-Chain Portfolio — ETH, SOL, Arbitrum, Optimism, Base",
  description:
    "Track your entire crypto portfolio across Ethereum, Solana, Arbitrum, Optimism, and Base in one unified dashboard. Tokens, staked positions, and LP tracking.",
  openGraph: {
    title: "Multi-Chain Portfolio | degen0x",
    description: "Unified multi-chain portfolio tracker for DeFi degens.",
  },

  alternates: { canonical: "/portfolio/multi-chain" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://degen0x.com/portfolio' },
    { '@type': 'ListItem', position: 3, name: 'Multi Chain', },
  ],
};

export default function MultiChainPortfolioPage() {
  return (
    <>
      <ArticleSchema
        headline="Multi-Chain Portfolio — ETH, SOL, Arbitrum, Optimism, Base"
        description="Track your entire crypto portfolio across Ethereum, Solana, Arbitrum, Optimism, and Base in one unified dashboard. Tokens, staked positions, and LP tracking."
        url="/portfolio/multi-chain"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/portfolio/multi-chain" />
        <ReadingTime />
      </div>
<AuthoritySources url="/portfolio/multi-chain" />
      <MultiChainPortfolio />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Multi-Chain Portfolio — ETH, SOL, Arbitrum, Optimism, Base", "description": "Track your entire crypto portfolio across Ethereum, Solana, Arbitrum, Optimism, and Base in one unified dashboard. Tokens, staked positions, and LP tracking.", "url": "https://degen0x.com/portfolio/multi-chain", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
