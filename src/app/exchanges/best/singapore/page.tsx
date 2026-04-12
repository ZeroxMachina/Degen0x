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
  title: `Best Crypto Exchanges in Singapore (${CURRENT_YEAR})`,
  description: `Compare the best crypto exchanges for Singapore residents in ${CURRENT_YEAR}. MAS-licensed platforms with SGD deposits via FAST/PayNow, no capital gains tax, and strong regulatory compliance.`,
  keywords: [
    "best crypto exchanges Singapore",
    "Singapore crypto exchanges",
    "buy crypto Singapore",
    "MAS licensed crypto exchange",
    "best cryptocurrency exchange Singapore",
  ],
  alternates: { canonical: "/exchanges/best/singapore" }};

const singaporeExchanges = [
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "gemini")!,
];

const faqs = [
  {
    question: "Which crypto exchanges are MAS-licensed in Singapore?",
    answer:
      "The Monetary Authority of Singapore (MAS) issues Digital Payment Token (DPT) service licenses. Licensed exchanges include Crypto.com, Coinbase, and several local platforms. The MAS maintains a public list of licensed DPT service providers. Always verify an exchange's license status before trading.",
  },
  {
    question: "Is there capital gains tax on crypto in Singapore?",
    answer:
      "Singapore does not have a capital gains tax, which means profits from buying and selling cryptocurrency for investment purposes are generally not taxable. However, if you trade crypto as a business (frequent, systematic trading), profits may be treated as business income and subject to income tax.",
  },
  {
    question: "Can I deposit SGD on crypto exchanges?",
    answer:
      "Yes. Licensed exchanges in Singapore support SGD deposits via FAST (instant, free), PayNow (instant, free), bank transfer (1-2 days), and Xfers. FAST and PayNow are the most popular options for Singapore-based users due to their speed and zero fees.",
  },
  {
    question: "What are Singapore's crypto advertising rules?",
    answer:
      "MAS guidelines prohibit crypto exchanges from advertising in public areas or through social media influencers in Singapore. Crypto platforms must not portray trading as trivially easy or promote crypto in a way that trivializes risks. These restrictions are unique to Singapore.",
  },
  {
    question: "Is Binance available in Singapore?",
    answer:
      "Binance has a complicated history in Singapore. Binance.com was asked to stop serving Singapore users in 2021. Binance subsequently obtained a MAS license through a local entity. Check current availability, as the situation may evolve with regulatory developments.",
  },
  {
    question: "What is the best exchange for Singapore beginners?",
    answer:
      "Coinbase and Crypto.com are the most beginner-friendly options for Singapore residents. Both are MAS-licensed, support SGD deposits, and offer intuitive mobile apps. Crypto.com has a strong physical presence in Singapore, which can be reassuring for new users.",
  },
];

export default function SingaporeExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in Singapore", href: "/exchanges/best/singapore" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges in Singapore ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Singapore is one of the most crypto-friendly jurisdictions in Asia, with no capital
          gains tax and a clear regulatory framework under the Monetary Authority of Singapore
          (MAS). The Payment Services Act governs crypto exchanges, requiring them to obtain
          Digital Payment Token (DPT) service licenses. Here are the best exchanges for
          Singapore-based traders and investors.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Singapore&apos;s Regulatory Approach</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          MAS has taken a measured approach to crypto regulation, balancing innovation with
          consumer protection. The Payment Services Act requires DPT providers to comply with
          anti-money laundering rules, maintain adequate cyber security, and segregate customer
          assets. MAS has also introduced strict advertising guidelines to protect retail
          investors from misleading crypto promotions.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Tax Advantages for Singapore Traders</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Singapore&apos;s lack of capital gains tax makes it one of the most attractive
          jurisdictions for crypto investors globally. Long-term holders and casual traders do
          not owe tax on crypto profits. However, individuals who trade crypto as a business
          may have their profits classified as income and taxed accordingly. The distinction
          depends on factors like trading frequency, holding period, and intent.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {singaporeExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Payment Methods for Singapore Users</h2>
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
            <h3 className="text-[var(--color-text)] font-semibold mb-2">FAST Transfer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant SGD deposits. Free on most exchanges. The most popular method in Singapore.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">PayNow</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant mobile transfers using phone number or NRIC. Free. Supported by major banks.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Xfers</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Payment gateway popular with Singapore crypto exchanges. Supports bank transfer and PayNow.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Debit / Credit Card</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant purchase. 2-3.5% fee. Visa and Mastercard supported on most global exchanges.</p>
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Exchanges/best/singapore", "description": "Crypto content on degen0x", "url": "https://degen0x.com/exchanges/best/singapore"}) }} />
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
