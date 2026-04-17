import { Metadata } from "next";
import Link from "next/link";
import CryptoConverter from "@/components/CryptoConverter";
import Breadcrumb from "@/components/Breadcrumb";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Crypto Converter - BTC to USD, ETH to EUR | Live Rates",
  description: "Convert Bitcoin, Ethereum, and 20+ cryptocurrencies to USD, EUR, GBP in real-time. Two-way crypto-to-fiat converter with live CoinGecko prices. Fast, accurate,",
  keywords:
    "crypto converter, bitcoin to usd, ethereum to eur, btc to usd, eth to eur, cryptocurrency converter, live prices, coingecko, crypto exchange rates",
  openGraph: {
    title: "Crypto Converter - Real-Time BTC to USD & More",
    description:
      "Convert top 20 cryptocurrencies to fiat currencies. Free, live converter powered by CoinGecko API.",
    url: "https://degen0x.com/tools/converter",
    type: "website",
    images: [
      {
        url: "https://degen0x.com/og-crypto-converter.png",
        width: 1200,
        height: 630,
        alt: "Crypto Converter Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Converter - Real-Time Rates",
    description: "Convert BTC, ETH, SOL and more to USD, EUR, GBP instantly.",
  },

  alternates: { canonical: "/tools/converter" }};

// ─── Component ───────────────────────────────────────────────────────────────
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://degen0x.com/tools' },
    { '@type': 'ListItem', position: 3, name: 'Converter', },
  ],
};

export default function ConverterPage() {
  return (
    <div style={{ background: "var(--color-bg)" }}>
      <ArticleSchema
        headline="Crypto Converter - BTC to USD, ETH to EUR | Live Rates"
        description="Convert Bitcoin, Ethereum, and 20+ cryptocurrencies to USD, EUR, GBP in real-time. Two-way crypto-to-fiat converter with live CoinGecko prices. Fast, accurate,"
        url="/tools/converter"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/converter" />
        <ReadingTime />
      </div>
<AuthoritySources url="/tools/converter" />
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/converter"
        name="Crypto Converter - BTC to USD, ETH to EUR"
        description="Convert Bitcoin, Ethereum, and 20+ cryptocurrencies to USD, EUR, GBP in real-time. Two-way crypto-to-fiat converter with live CoinGecko prices. Fast, accurate,"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Crypto Converter" },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              background: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              borderRadius: 20,
              fontSize: 12,
              color: "var(--color-primary)",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            🔄 Crypto Converter
          </div>
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 900,
              color: "var(--color-text)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Cryptocurrency Converter
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--color-text-secondary)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Convert BTC to USD, ETH to EUR, and 20+ cryptos to fiat currencies.
            Live rates updated every 60 seconds.
          </p>
        </div>

        {/* ── Main Converter Component ── */}
        <div style={{ marginBottom: "2rem" }}>
          <CryptoConverter initialFrom="bitcoin" initialTo="usd" />
        </div>

        {/* ── Features Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 16,
            marginBottom: "3rem",
          }}
        >
          {[
            {
              title: "Top 20 Cryptocurrencies",
              body: "BTC, ETH, SOL, BNB, XRP, ADA, AVAX, DOT, MATIC, LINK, UNI, ATOM, FTM, NEAR, ARB, OP, APT, SUI, SEI, and TIA.",
            },
            {
              title: "3 Fiat Currencies",
              body: "USD, EUR, and GBP. Real-time forex conversion with live market rates.",
            },
            {
              title: "Crypto-to-Crypto Conversion",
              body: "Convert directly between any two cryptocurrencies via USD base pair.",
            },
            {
              title: "Live CoinGecko Data",
              body: "Prices updated every 60 seconds. Graceful fallback to cached data if API limits reached.",
            },
          ].map((box) => (
            <div
              key={box.title}
              style={{
                padding: "1.25rem",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                borderRadius: "var(--glass-radius-sm)",
                backdropFilter: "blur(var(--glass-blur))",
                WebkitBackdropFilter: "blur(var(--glass-blur))",
              }}
            >
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: 8,
                  margin: "0 0 8px 0",
                }}
              >
                {box.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {box.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── FAQ Section ── */}
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: "1.25rem",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              {
                q: "How do I convert Bitcoin to USD?",
                a: "Select BTC in the 'From' field and USD in the 'To' field. Enter any amount and the USD equivalent updates instantly with live market prices.",
              },
              {
                q: "Can I convert crypto to crypto?",
                a: "Yes! Select any cryptocurrency in both fields. The conversion routes via USD as the base pair for accurate cross-crypto rates.",
              },
              {
                q: "How accurate are the prices?",
                a: "Prices are fetched from CoinGecko every 60 seconds and reflect current global market rates. For large trades, check exchange-specific prices which may vary slightly.",
              },
              {
                q: "Why might my exchange show different prices?",
                a: "CoinGecko shows aggregated global prices. Individual exchanges set rates based on order book depth, fees, and local demand. Expect 0.5-2% variance.",
              },
              {
                q: "Which cryptocurrencies are supported?",
                a: "Bitcoin, Ethereum, Solana, BNB, XRP, Cardano, Avalanche, Polkadot, Polygon, Chainlink, Uniswap, Cosmos, Fantom, NEAR, Arbitrum, Optimism, Aptos, Sui, Sei, and Celestia.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{
                  padding: "1rem 1.25rem",
                  background: "var(--glass-bg)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "var(--glass-radius-sm)",
                  backdropFilter: "blur(var(--glass-blur))",
                  WebkitBackdropFilter: "blur(var(--glass-blur))",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "var(--color-text)",
                    margin: "0 0 6px 0",
                  }}
                >
                  {faq.question}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--color-text-secondary)",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="tools"
        />


        {/* ── Info Section ── */}
        <div
          style={{
            padding: "2rem",
            background: "var(--glass-bg)",
            border: "1px solid var(--glass-border)",
            borderRadius: "var(--glass-radius)",
            backdropFilter: "blur(var(--glass-blur))",
            WebkitBackdropFilter: "blur(var(--glass-blur))",
            marginBottom: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              color: "var(--color-text)",
              marginTop: 0,
              marginBottom: "1rem",
            }}
          >
            About This Converter
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              margin: "0 0 1rem 0",
            }}
          >
            Our real-time cryptocurrency converter powered by CoinGecko API provides instant
            conversion between 20 major cryptocurrencies and USD, EUR, GBP. Perfect for traders,
            investors, and crypto enthusiasts who need quick, accurate price conversions.
          </p>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Swap currencies with a single click, view exchange rates, and convert between any
            crypto pair instantly. Works great on desktop, tablet, and mobile devices.
          </p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Converter",
              "url": "https://degen0x.com/tools/converter",
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Converter - BTC to USD, ETH to EUR | Live Rates", "description": "Convert Bitcoin, Ethereum, and 20+ cryptocurrencies to USD, EUR, GBP in real-time. Two-way crypto-to-fiat converter with live CoinGecko prices. Fast, accurate,", "url": "https://degen0x.com/tools/converter", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="tools" currentSlug="/tools/converter" />
</div>
  );
}
