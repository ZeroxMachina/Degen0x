import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import APIPricing from "@/components/APIPricing";

export const metadata: Metadata = {
  title: "API Pricing | degen0x — Free, Pro & Enterprise Plans",
  description:
    "Access real-time crypto data, DeFi yields, whale alerts, and trading signals via the degen0x API. Free tier included. Usage-based pricing for pros.",
  openGraph: {
    title: "API Pricing | degen0x",
    description: "Real-time crypto API with free, pro, and enterprise tiers.",
  },

  alternates: { canonical: "/pricing" },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', },
  ],
};

export default function PricingPage() {
  return (
    <>
      <APIPricing />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "API Pricing | degen0x — Free, Pro & Enterprise Plans", "description": "Access real-time crypto data, DeFi yields, whale alerts, and trading signals via the degen0x API. Free tier included. Usage-based pricing for pros.", "url": "https://degen0x.com/pricing", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
