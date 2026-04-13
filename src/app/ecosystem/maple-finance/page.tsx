import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MapleFinanceClient from "./MapleFinanceClient";

export const metadata: Metadata = {
  title: "Maple Finance: Institutional On-Chain Credit",
  description: "Maple Finance: Institutional on-chain credit on Ethereum and Arbitrum. Decentralized lending with $3.2B TVL, 4.7% USDC yield, and institutional borrowing.",
  openGraph: {
    title: "Maple Finance: Institutional On-Chain Credit",
    description: "DeFi lending for institutions. Decentralized institutional credit marketplace with $3.2B TVL and ~4.7% syrupUSDC APY.",
    images: [{ url: "https://degen0x.com/og-maple-finance-ecosystem.svg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Finance: Institutional On-Chain Credit",
    description: "DeFi lending for institutions. Decentralized institutional credit marketplace with $3.2B TVL and ~4.7% syrupUSDC APY.",
    images: ["https://degen0x.com/og-maple-finance-ecosystem.svg"],
  },

  alternates: { canonical: "/ecosystem/maple-finance" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Maple Finance', },
  ],
};

export default function MapleFinancePage() {
  return (
    <>
      <MapleFinanceClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Maple Finance: Institutional On-Chain Credit", "description": "Maple Finance: Institutional on-chain credit on Ethereum and Arbitrum. Decentralized lending with $3.2B TVL, 4.7% USDC yield, and institutional borrowing.", "url": "https://degen0x.com/ecosystem/maple-finance", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
