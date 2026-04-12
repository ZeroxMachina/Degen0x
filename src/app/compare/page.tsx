import { Metadata } from 'next';
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ExchangeComparisonEngine from '@/components/ExchangeComparisonEngine';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Crypto Exchange Comparison Tool | degen0x',
  description: 'Compare top cryptocurrency exchanges side-by-side. Analyze fees, security, features, and user experience. Find the best exchange for your trading needs.',
  keywords: [
    'crypto exchange comparison',
    'bitcoin exchange',
    'ethereum exchange',
    'trading platform',
    'crypto trading',
    'exchange fees',
    'security comparison',
    'Coinbase vs Binance',
  ],
  openGraph: {
    title: 'Crypto Exchange Comparison Tool | degen0x',
    description: 'Compare top cryptocurrency exchanges side-by-side. Analyze fees, security, features, and user experience.',
    type: 'website',
    url: 'https://degen0x.com/compare',
    images: [
      {
        url: '/og-compare.png',
        width: 1200,
        height: 630,
        alt: 'Crypto Exchange Comparison',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Exchange Comparison Tool | degen0x',
    description: 'Compare top cryptocurrency exchanges side-by-side.',
    images: ['/og-compare.png'],
  },
  alternates: {
    canonical: 'https://degen0x.com/compare',
  },
};

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="compare"
      />      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="gradient-text">Exchange Comparison Tool</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Find the perfect cryptocurrency exchange for your trading needs. Compare fees, security, features, and user experience across top platforms.
          </p>
        </div>

        {/* Main Comparison Engine */}
        <div className="glass p-8 rounded-2xl">
          <ExchangeComparisonEngine />
        </div>
      </section>

      {/* Comparison Guide Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trading Fees */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">💰 Trading Fees</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Compare maker and taker fees across exchanges. Lower fees can significantly impact your trading profits over time.
            </p>
          </div>

          {/* Security */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">🔒 Security</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Review security ratings, regulatory compliance, and insurance coverage to protect your funds and identity.
            </p>
          </div>

          {/* Features */}
          <div className="glass p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-3">⚡ Features</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Check available features like staking, NFT markets, futures trading, and diverse deposit methods.
            </p>
          </div>
        </div>
      </section>

      {/* What to Look For Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">
            What to Look For in an Exchange
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">For Beginners</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Easy-to-use interface</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Multiple payment methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Strong security and regulation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Responsive customer support</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">For Advanced Traders</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Low trading fees (maker/taker)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Advanced trading features</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">Futures and derivatives trading</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-success)] text-xl flex-shrink-0">✓</span>
                  <span className="text-[var(--color-text-secondary)]">API access and tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Summaries */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">
          Featured Exchanges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coinbase */}
          <div className="glass p-6 rounded-2xl glass-hover">
            <h3 className="text-2xl font-bold mb-2">🪙 Coinbase</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Best for US-based beginners seeking a regulated, user-friendly platform.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>✓ Highly regulated (US)</li>
              <li>✓ Excellent user interface</li>
              <li>✓ Multiple payment methods</li>
              <li>✓ Staking and NFT marketplace</li>
            </ul>
          </div>

          {/* Binance */}
          <div className="glass p-6 rounded-2xl glass-hover">
            <h3 className="text-2xl font-bold mb-2">🔶 Binance</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Best for advanced traders with lowest fees and most trading pairs.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>✓ Lowest trading fees (0.1%)</li>
              <li>✓ 1,200+ supported coins</li>
              <li>✓ Advanced trading features</li>
              <li>✓ Staking and futures</li>
            </ul>
          </div>

          {/* Kraken */}
          <div className="glass p-6 rounded-2xl glass-hover">
            <h3 className="text-2xl font-bold mb-2">🦑 Kraken</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Best for security-conscious traders in US and Europe.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>✓ Regulated (US/EU)</li>
              <li>✓ Excellent security</li>
              <li>✓ Competitive fees</li>
              <li>✓ Futures trading available</li>
            </ul>
          </div>

          {/* Crypto.com */}
          <div className="glass p-6 rounded-2xl glass-hover">
            <h3 className="text-2xl font-bold mb-2">🔵 Crypto.com</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4">
              Best for users seeking rewards program and mobile experience.
            </p>
            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li>✓ CRO rewards program</li>
              <li>✓ Excellent mobile app</li>
              <li>✓ Multiple features</li>
              <li>✓ Global payment support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Which exchange has the lowest fees?
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Binance, KuCoin, and OKX offer the lowest trading fees at 0.1% for both maker and taker orders. However, fees vary by trading pair and tier level.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Is cryptocurrency trading safe?
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Trading on reputable, regulated exchanges is generally safe. Choose exchanges with strong security ratings, regulatory compliance, and insurance coverage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Can I use multiple exchanges?
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Yes, many traders use multiple exchanges for different purposes: one for security, another for low fees, and another for specific features. Diversification can reduce platform risk.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                What's the difference between maker and taker fees?
              </h3>
              <p className="text-[var(--color-text-secondary)]">
                Maker fees apply when you provide liquidity (post a limit order). Taker fees apply when you take existing liquidity (market order). Makers usually get lower fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto Exchange Comparison Tool | degen0x", "description": "Compare top cryptocurrency exchanges side-by-side. Analyze fees, security, features, and user experience. Find the best exchange for your trading needs.", "url": "https://degen0x.com/compare"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
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
            All Comparisons
          </Link>
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
            Crypto Tools
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
        </div>
      </div>
    </main>
  );
}
