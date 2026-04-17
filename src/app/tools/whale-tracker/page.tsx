import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import WhaleTrackerClient from "./WhaleTrackerClient";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
  title: "Whale Wallet Tracker — Monitor Smart Money Moves | degen0x",
  description: "Track whale wallets, smart money flows, and large crypto transactions in real-time. Monitor top holders across Ethereum, Solana, and Bitcoin with our free",
  keywords: [
    "whale tracker",
    "whale wallet",
    "smart money",
    "on-chain analytics",
    "crypto whale",
    "large transactions",
    "whale alert",
  ],
  openGraph: {
    title: "Whale Wallet Tracker — Monitor Smart Money | degen0x",
    description: "Track whale wallets and smart money moves across Ethereum, Solana, and Bitcoin.",
    type: "website",
    url: "https://degen0x.com/tools/whale-tracker",
    images: [
      {
        url: "https://degen0x.com/og-whale-tracker.svg",
        width: 1200,
        height: 630,
        alt: "Whale Wallet Tracker on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whale Wallet Tracker — Monitor Smart Money | degen0x",
    description: "Track whale wallets and smart money moves across Ethereum, Solana, and Bitcoin.",
    images: [
      "https://degen0x.com/og-whale-tracker.svg",
    ],
  },

  alternates: { canonical: "/tools/whale-tracker" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Whale Tracker', },
  ],
};

export default function WhaleTrackerPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="tools"
      />      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Whale Tracker" },
          ]}
        />
        <WhaleTrackerClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Whale Tracker",
              "url": "https://degen0x.com/tools/whale-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" , "datePublished": "2026-04-13", "dateModified": "2026-04-13"}
            })
          }}
        />
            <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Tools
          </Link>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Learning Guides
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Tools
          </Link>
        </div>
      </div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Whale Wallet Tracker \u2014 Monitor Smart Money Moves | degen0x", "description": "Track whale wallets, smart money flows, and large crypto transactions in real-time. Monitor top holders across Ethereum, Solana, and Bitcoin with our free", "url": "https://degen0x.com/tools/whale-tracker", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="tools" currentSlug="/tools/whale-tracker" />
</div>
  );
}
