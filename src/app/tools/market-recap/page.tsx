import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MarketRecapClient from "./MarketRecapClient";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Daily Crypto Market Recap — Today's Movers & Events | degen0x",
  description: "Get a daily snapshot of what moved the crypto market — top gainers, losers, sector performance, and key events. Updated live with market data from CoinGecko",
  keywords: [
    "crypto market recap",
    "daily crypto news",
    "crypto market today",
    "top crypto gainers",
    "top crypto losers",
    "crypto sector performance",
    "bitcoin market recap",
    "crypto market events",
  ],
  openGraph: {
    title: "Daily Crypto Market Recap — Today's Movers & Events | degen0x",
    description:
      "Get a daily snapshot of what moved the crypto market — top gainers, losers, sector performance, and key events.",
    type: "website",
    url: "https://degen0x.com/tools/market-recap",
    images: [
      {
        url: "https://degen0x.com/og-market-recap.svg",
        width: 1200,
        height: 630,
        alt: "Daily Crypto Market Recap on degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Crypto Market Recap | degen0x",
    description:
      "Top gainers, losers, sector performance, and key market events — updated live.",
    images: [
      "https://degen0x.com/og-market-recap.svg",
    ],
  },

  alternates: { canonical: "/tools/market-recap" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Market Recap', },
  ],
};

export default function MarketRecapPage() {
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
            { label: "Market Recap" },
          ]}
        />
        <MarketRecapClient />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Market Recap",
              "url": "https://degen0x.com/tools/market-recap",
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
    </div>
  );
}
