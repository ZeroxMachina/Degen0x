import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import YearnClient from "./YearnClient";

export const metadata: Metadata = {
  title: "Yearn Finance: Automated Yield Optimizer Guide 2026 — $500M",
  description: "Complete guide to Yearn Finance — the original DeFi yield optimizer with $500M+ TVL, 200+ active vaults, and V3 modular architecture. How vaults work, YFI",
  keywords: [
    "yearn finance",
    "yearn finance guide",
    "yearn vaults",
    "YFI token",
    "yield optimizer",
    "defi yield farming",
    "yearn v3",
    "automated yield",
    "yearn review 2026",
  ],
  openGraph: {
    title: "Yearn Finance: Automated Yield Optimizer Guide 2026",
    description:
      "$500M+ TVL. 200+ vaults. Complete guide to DeFi's original yield optimizer.",
    type: "article",
    url: "https://degen0x.com/ecosystem/yearn",
    publishedTime: "2026-03-17T00:00:00Z",
    modifiedTime: "2026-03-17T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/api/og?title=Yearn+Finance:+Yield+Optimizer+Guide+2026&category=Ecosystem&type=page",
        width: 1200,
        height: 630,
        alt: "Yearn Finance Guide on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yearn Finance: Yield Optimizer Guide 2026 | degen0x",
    description:
      "$500M+ TVL. 200+ vaults. V3 modular architecture. Complete yield optimizer guide inside.",
    images: [
      "https://degen0x.com/api/og?title=Yearn+Finance:+Yield+Optimizer+Guide+2026&category=Ecosystem&type=page",
    ],
  },

  alternates: { canonical: "/ecosystem/yearn" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Ecosystem', item: 'https://degen0x.com/ecosystem' },
    { '@type': 'ListItem', position: 3, name: 'Yearn', },
  ],
};

export default function YearnPage() {
  return (
    <>
      <YearnClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Yearn Finance: Automated Yield Optimizer Guide 2026 — $500M", "description": "Complete guide to Yearn Finance — the original DeFi yield optimizer with $500M+ TVL, 200+ active vaults, and V3 modular architecture. How vaults work, YFI", "url": "https://degen0x.com/ecosystem/yearn", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
