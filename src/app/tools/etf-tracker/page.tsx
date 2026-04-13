import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ETFTrackerClient from "./ETFTrackerClient";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin & Crypto ETF Tracker 2026 — Live Flows, AUM & Performance | degen0x`,
  description: `Track Bitcoin spot ETF inflows, outflows, and AUM in real-time. Compare all crypto ETFs by performance, fees, and assets under management. Updated ${CURRENT_MONTH} ${CURRENT_YEAR}.`,
  keywords: ["bitcoin ETF", "crypto ETF tracker", "spot bitcoin ETF", "ETF inflows", "IBIT", "GBTC", "crypto ETF comparison"],
  alternates: { canonical: "/tools/etf-tracker" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Etf Tracker', },
  ],
};

export default function ETFTrackerPage() {
  return (
    <>
      <ETFTrackerClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Bitcoin & Crypto ETF Tracker 2026 \u2014 Live Flows, AUM & Performance | degen0x", "description": "Track Bitcoin spot ETF inflows, outflows, and AUM in real-time. Compare all crypto ETFs by performance, fees, and assets under management. Updated ${CURRENT_MONTH} ${CURRENT_YEAR}.", "url": "https://degen0x.com/tools/etf-tracker", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</>
  );
}
