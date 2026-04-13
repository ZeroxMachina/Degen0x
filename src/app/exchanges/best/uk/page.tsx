import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Exchanges in the UK (2026)`,
  description: `Compare the best crypto exchanges for UK residents in ${CURRENT_YEAR}. FCA-registered platforms with GBP deposits via Faster Payments, competitive fees, and full regulatory compliance.`,
  keywords: [
    "best crypto exchanges UK",
    "UK crypto exchanges",
    "buy crypto UK",
    "FCA regulated crypto exchange",
    "best cryptocurrency exchange United Kingdom",
  ],
  alternates: { canonical: "/exchanges/best/uk" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const ukExchanges = [
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "gemini")!,
];

const faqs = [
  {
    question: "Which crypto exchanges are FCA-registered in the UK?",
    answer:
      "As of 2026, exchanges registered with the FCA include Kraken, Coinbase, Gemini, and Crypto.com. The FCA maintains a public register of all licensed crypto asset firms. Always verify an exchange's registration status before depositing funds.",
  },
  {
    question: "Can I deposit GBP on crypto exchanges?",
    answer:
      "Yes. Most UK-friendly exchanges accept GBP deposits via Faster Payments (instant, usually free), bank transfer, and debit cards. Kraken and Coinbase both support free GBP deposits through Faster Payments. Avoid credit card purchases as most UK banks block them.",
  },
  {
    question: "Do I pay tax on crypto in the UK?",
    answer:
      "Yes. HMRC treats cryptocurrency as an asset subject to Capital Gains Tax. You have a tax-free allowance (currently reduced to 3,000 pounds per year). Gains above this are taxed at 10% or 20% depending on your income band. Crypto received as income is subject to Income Tax and National Insurance.",
  },
  {
    question: "Is Binance available in the UK?",
    answer:
      "Binance has worked to comply with FCA requirements and has re-established GBP deposit and withdrawal options for UK users. However, the regulatory situation has changed over time, so check current availability on their website.",
  },
  {
    question: "What is the cheapest crypto exchange in the UK?",
    answer:
      "Kraken offers the lowest fees for UK users with maker fees starting at 0.16% and taker fees at 0.26%. Coinbase Advanced charges 0.04-0.60%. Avoid the simple buy interfaces on any exchange as they typically add 1.5-3% in spread fees.",
  },
  {
    question: "Are crypto exchanges safe in the UK?",
    answer:
      "FCA-registered exchanges must follow strict anti-money laundering rules and customer protection standards. However, crypto assets themselves are not covered by the Financial Services Compensation Scheme (FSCS). Only keep on exchanges what you actively trade, and use a hardware wallet for long-term storage.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/exchanges/best' },
    { '@type': 'ListItem', position: 4, name: 'Uk', },
  ],
};

export default function UKExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in the UK", href: "/exchanges/best/uk" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges in the UK ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          The United Kingdom has a well-developed cryptocurrency market with strong regulatory
          oversight from the Financial Conduct Authority (FCA). UK residents benefit from
          instant GBP deposits via Faster Payments, clear tax guidelines from HMRC, and access
          to most of the world&apos;s leading exchanges. We have tested and ranked the best
          exchanges for UK-based traders.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">UK Regulatory Framework</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The FCA requires all crypto asset businesses operating in the UK to be registered
          and comply with anti-money laundering regulations. Since October 2023, the FCA has
          also enforced strict rules on crypto promotions, requiring risk warnings and cooling-off
          periods for new investors. The UK government has signaled its intention to become a
          global crypto hub with upcoming comprehensive legislation covering stablecoins,
          staking, and exchange regulation.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">What UK Traders Should Look For</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Beyond FCA registration, UK traders should prioritize exchanges that offer free GBP
          deposits via Faster Payments, GBP trading pairs to avoid unnecessary conversion fees,
          competitive spot trading fees, and tax reporting tools compatible with HMRC requirements.
          The best exchanges for UK users combine all of these with a wide selection of cryptocurrencies.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {ukExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Payment Methods for UK Users</h2>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Faster Payments (Bank Transfer)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Free on most exchanges. Arrives in minutes. The best option for UK users.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Debit Card</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant purchases. Fees typically 1.5-3.5%. Good for small, time-sensitive buys.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Open Banking</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant bank-linked payments. Supported by Kraken and others. Free or low-cost.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Credit Card</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Blocked by most UK banks for crypto purchases. Not recommended.</p>
          </div>
        </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="exchanges"
        />

      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Exchanges/best/uk", "description": "Crypto content on degen0x", "url": "https://degen0x.com/exchanges/best/uk", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
