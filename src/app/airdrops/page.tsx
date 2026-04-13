import ClientContent from './ClientContent';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";

export const metadata = {
  title: 'Airdrop Calendar & Tracker | degen0x - Never Miss Free Crypto',
  description:
    'Track upcoming cryptocurrency airdrops with real-time countdowns, eligibility requirements, and strategy guides. Never miss free crypto again.',
  keywords: 'crypto airdrops, airdrop tracker, free crypto, ethereum airdrops, defi airdrops, blockchain',
  openGraph: {
    title: 'Airdrop Calendar & Tracker | degen0x',
    description: 'Never miss free crypto again. Track and maximize your airdrop eligibility.',
    images: [{ url: 'https://degen0x.com/og-airdrops.png', width: 1200, height: 630, alt: 'Airdrop Calendar and Tracker on degen0x' }],
  },

  alternates: { canonical: "/airdrops" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Airdrops', },
  ],
};

export default function AirdropsPage() {
  return (
    <>
      <ClientContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
