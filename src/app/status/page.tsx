import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ClientContent from './ClientContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'System Status - degen0x',
  description: 'Real-time health status and monitoring of degen0x API services and infrastructure.',
  alternates: { canonical: "/status" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Status', },
  ],
};

export default function StatusPage() {
  return (
    <>
      <ClientContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "System Status - degen0x", "description": "Real-time health status and monitoring of degen0x API services and infrastructure.", "url": "https://degen0x.com/status", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
