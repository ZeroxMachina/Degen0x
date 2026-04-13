import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import AaveClient from "./AaveClient";

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
      <AaveClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Aave: DeFi Lending & Borrowing Guide 2026 | degen0x", "description": "Complete guide to Aave — the largest DeFi lending protocol. Multi-chain lending, flash loans, GHO stablecoin, safety module staking, and how to earn yield on", "url": "https://degen0x.com/ecosystem/aave", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
