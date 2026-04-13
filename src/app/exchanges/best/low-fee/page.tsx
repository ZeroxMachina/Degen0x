import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cheapest Crypto Exchanges in 2026 - Lowest Fee Comparison`,
  description: `Find the crypto exchanges with the lowest trading fees in ${CURRENT_YEAR}. Compare maker/taker fees, withdrawal costs, and hidden charges across top platforms.`,
  alternates: { canonical: "/exchanges/best/low-fee" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const lowFeeExchanges = [
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "okx")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "bybit")!,
  exchanges.find((e) => e.slug === "kucoin")!,
  exchanges.find((e) => e.slug === "bitget")!,
  exchanges.find((e) => e.slug === "gate-io")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "gemini")!,
];

const faqs = [
  {
    question: "Which crypto exchange has the lowest fees?",
    answer: "Binance offers the lowest standard trading fees at 0.1% for spot trades, reducible to 0.075% with BNB. For US users, Kraken Pro offers maker fees as low as 0% for high-volume traders. Many exchanges also offer fee discounts when holding their native tokens.",
  },
  {
    question: "What types of fees do crypto exchanges charge?",
    answer: "Exchanges charge several types of fees: trading fees (maker/taker), deposit fees (often free for crypto, variable for fiat), withdrawal fees (network-dependent), spread fees (difference between buy and sell price), and sometimes inactivity fees. Always check the full fee schedule before committing.",
  },
  {
    question: "How can I reduce my crypto trading fees?",
    answer: "Use limit orders instead of market orders to pay maker fees (usually lower). Hold the exchange's native token for discounts (BNB on Binance, KCS on KuCoin). Increase your trading volume for tiered fee reductions. Use the advanced trading interface instead of the simple buy/sell view.",
  },
  {
    question: "Are withdrawal fees the same across exchanges?",
    answer: "No, withdrawal fees vary significantly. Some exchanges charge a flat fee per withdrawal, while others pass on the network transaction fee. Bitcoin withdrawals typically cost between $1 and $20 depending on the exchange. Always compare withdrawal fees for the specific coins you plan to move.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/exchanges/best' },
    { '@type': 'ListItem', position: 4, name: 'Low Fee', },
  ],
};

export default function LowFeeExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="exchanges"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Lowest Fees", href: "/exchanges/best/low-fee" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Cheapest Crypto Exchanges ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Trading fees can eat into your profits quickly, especially if you trade frequently.
          The difference between paying 0.1% and 0.5% per trade may seem small, but over hundreds
          of trades it adds up to thousands of dollars. We have ranked the exchanges with the
          lowest overall fee structures, considering trading fees, deposit costs, withdrawal charges,
          and any hidden fees.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Understanding Crypto Exchange Fees</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Most exchanges use a maker/taker fee model. Maker fees apply when you add liquidity
          to the order book (limit orders that do not fill immediately), while taker fees apply
          when you remove liquidity (market orders or limit orders that fill immediately). Makers
          typically pay less because they help create a liquid market. Volume-based tier systems
          further reduce fees as your monthly trading volume increases.
        </p>
      </div>

      {/* Fee Comparison Table */}
      <section className="mb-12 overflow-x-auto">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Fee Comparison Table</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a1500', border: '1px solid #3d2e0a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🔍</span>
            <strong style={{ color: '#f59e0b', fontSize: 15 }}>Our Testing Notes</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We evaluate exchanges by actually using them — not just reading their marketing materials. Some surprises, both good and bad.
          </p>
        </div>
        <div className="rounded-xl border border-[var(--color-border)]">
          <table className="w-full">
            <thead>
              <tr className="bg-[var(--color-bg-card)]">
                <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Exchange</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Maker Fee</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Taker Fee</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Token Discount</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-[var(--color-text)]">BTC Withdrawal</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Binance", maker: "0.10%", taker: "0.10%", discount: "25% with BNB", btcFee: "0.0001 BTC" },
                { name: "Kraken", maker: "0.16%", taker: "0.26%", discount: "None", btcFee: "0.00015 BTC" },
                { name: "OKX", maker: "0.08%", taker: "0.10%", discount: "20% with OKB", btcFee: "0.0001 BTC" },
                { name: "Crypto.com", maker: "0.075%", taker: "0.075%", discount: "Up to 100% with CRO", btcFee: "0.0004 BTC" },
                { name: "Bybit", maker: "0.10%", taker: "0.10%", discount: "None", btcFee: "0.0002 BTC" },
                { name: "KuCoin", maker: "0.10%", taker: "0.10%", discount: "20% with KCS", btcFee: "0.0004 BTC" },
                { name: "Bitget", maker: "0.10%", taker: "0.10%", discount: "20% with BGB", btcFee: "0.0003 BTC" },
                { name: "Gate.io", maker: "0.10%", taker: "0.10%", discount: "15% with GT", btcFee: "0.001 BTC" },
                { name: "Coinbase", maker: "0.40%", taker: "0.60%", discount: "None", btcFee: "Network fee" },
                { name: "Gemini", maker: "0.20%", taker: "0.40%", discount: "None", btcFee: "Network fee" },
              ].map((row) => (
                <tr key={row.name} className="border-t border-[var(--color-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text)]">{row.name}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.maker}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.taker}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.discount}</td>
                  <td className="px-4 py-3 text-sm text-center text-[var(--color-text-secondary)]">{row.btcFee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="space-y-4 mb-12">
        {lowFeeExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Exchanges/best/low Fee", "description": "Crypto content on degen0x", "url": "https://degen0x.com/exchanges/best/low-fee", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/exchanges" style={{
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
            All Exchanges
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
            Trading Tools
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
            Compare Exchanges
          </Link>
        </div>
      </div>
    </div>
  );
}
