import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { SITE_NAME } from "@/lib/constants";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Onboarding the Next 1 Billion to Web3`,
  description: "The crypto world is powerful but intimidating. Free tools, honest reviews, and clear explanations. No account needed. No paywall. Ever.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
  ],
};

export default function HomePage() {
  return (
    <>
      <HomeContent />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
