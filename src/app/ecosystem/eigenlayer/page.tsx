import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import EigenLayerClient from "./EigenLayerClient";

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
      <EigenLayerClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
