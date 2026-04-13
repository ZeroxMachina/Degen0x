import type { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import ClientContent from './ClientContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `Crypto & Blockchain Glossary | degen0x`,
  description: 'Comprehensive glossary of cryptocurrency and blockchain terms. Learn DeFi, NFTs, trading, security, and advanced concepts with clear definitions.',
  alternates: { canonical: `${SITE_URL}/glossary` },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Glossary', },
  ],
};

export default function GlossaryPage() {
  return (
    <>
      <ClientContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
