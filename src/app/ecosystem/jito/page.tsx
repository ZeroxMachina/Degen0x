import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import JitoClient from "./JitoClient";

export const metadata: Metadata = {
  title: "Jito: Solana Liquid Staking & MEV Guide 2026 | degen0x",
  description:
    "Complete guide to Jito — Solana's leading liquid staking protocol with MEV-powered yields. JitoSOL, MEV tips, validator staking, JTO governance, and how to earn enhanced staking rewards.",
  keywords: [
    "jito",
    "jito guide",
    "solana staking",
    "JitoSOL",
    "liquid staking",
    "MEV solana",
    "JTO token",
    "jito review 2026",
    "solana defi",
  ],
  openGraph: {
    title: "Jito: Solana Liquid Staking & MEV Guide 2026",
    description:
      "Solana's leading liquid staking protocol. MEV-powered yields, JitoSOL, JTO governance. Complete guide.",
    type: "article",
    url: "https://degen0x.com/ecosystem/jito",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Jito:+Solana+Liquid+Staking+%26+MEV+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Jito Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jito: Solana Liquid Staking & MEV Guide 2026 | degen0x",
    description:
      "Solana's #1 liquid staking. MEV-powered yields. JitoSOL. Complete guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Jito:+Solana+Liquid+Staking+%26+MEV+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/jito" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Jito', },
  ],
};

export default function JitoPage() {
  return (
    <>
      <JitoClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Jito: Solana Liquid Staking & MEV Guide 2026 | degen0x", "description": "Complete guide to Jito — Solana's leading liquid staking protocol with MEV-powered yields. JitoSOL, MEV tips, validator staking, JTO governance, and how to earn enhanced staking rewards.", "url": "https://degen0x.com/ecosystem/jito", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
