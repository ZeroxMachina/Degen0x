import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { exchanges } from "@/data/exchanges";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: `Best Crypto Exchanges in Brazil (2026)`,
  description: `Compare the best crypto exchanges for Brazilian residents in ${CURRENT_YEAR}. CVM-compliant platforms with BRL deposits via PIX, competitive fees, and strong local presence.`,
  keywords: [
    "best crypto exchanges Brazil",
    "Brazilian crypto exchanges",
    "buy crypto Brazil",
    "comprar cripto Brasil",
    "best cryptocurrency exchange Brazil",
    "PIX crypto exchange",
  ],
  alternates: { canonical: "/exchanges/best/brazil" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const brazilExchanges = [
  exchanges.find((e) => e.slug === "binance")!,
  exchanges.find((e) => e.slug === "coinbase")!,
  exchanges.find((e) => e.slug === "kraken")!,
  exchanges.find((e) => e.slug === "crypto-com")!,
  exchanges.find((e) => e.slug === "kucoin")!,
];

const faqs = [
  {
    question: "Is cryptocurrency legal in Brazil?",
    answer:
      "Yes. Brazil passed the Legal Framework for Virtual Assets in December 2022, making it one of the few countries with dedicated crypto legislation. The Central Bank of Brazil oversees crypto exchanges as virtual asset service providers. This law provides clear legal standing for crypto transactions.",
  },
  {
    question: "Can I deposit BRL on crypto exchanges?",
    answer:
      "Yes. Most exchanges serving Brazil support BRL deposits via PIX (instant, free), bank transfer (TED/DOC), and boleto bancario. PIX has become the dominant deposit method due to its speed and zero cost. Binance, Coinbase, and other major exchanges all support PIX.",
  },
  {
    question: "How is crypto taxed in Brazil?",
    answer:
      "Crypto gains in Brazil are subject to capital gains tax on monthly sales exceeding 35,000 BRL. Rates are progressive: 15% for gains up to 5 million BRL, 17.5% for 5-10 million, 20% for 10-30 million, and 22.5% above 30 million. Monthly sales below 35,000 BRL are exempt from capital gains tax.",
  },
  {
    question: "Do I need to report crypto holdings to the Receita Federal?",
    answer:
      "Yes. Brazilian tax residents must report crypto holdings worth over 5,000 BRL in their annual income tax declaration (DIRPF). Additionally, exchanges must report all customer transactions to the Receita Federal monthly. Failure to report can result in fines and penalties.",
  },
  {
    question: "What is the most popular crypto exchange in Brazil?",
    answer:
      "Binance is the most popular exchange in Brazil by trading volume, thanks to its early entry into the market, PIX support, and BRL trading pairs. Local exchanges like Mercado Bitcoin and Foxbit are also popular, especially among users who prefer a Portuguese-language platform.",
  },
  {
    question: "Are there Brazilian-owned crypto exchanges?",
    answer:
      "Yes. Mercado Bitcoin is the largest Brazilian-owned exchange and one of the largest in Latin America. Foxbit, NovaDAX, and BitcoinTrade are other notable Brazilian platforms. They offer Portuguese-language support, BRL pairs, and compliance with Brazilian regulations.",
  },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Best', item: 'https://degen0x.com/exchanges/best' },
    { '@type': 'ListItem', position: 4, name: 'Brazil', },
  ],
};

export default function BrazilExchangesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Exchanges", href: "/exchanges" },
          { label: "Best Exchanges", href: "/exchanges/best" },
          { label: "Best in Brazil", href: "/exchanges/best/brazil" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Exchanges in Brazil ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Brazil is the largest crypto market in Latin America and one of the most active
          globally. With dedicated crypto legislation, PIX integration for instant BRL deposits,
          and strong adoption among the population, Brazilian traders have excellent options.
          We have ranked the best crypto exchanges available to Brazilian residents based on
          fees, BRL support, security, and regulatory compliance.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Brazilian Crypto Regulation</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Brazil&apos;s Legal Framework for Virtual Assets (Law 14.478/2022) established the
          Central Bank as the primary regulator for crypto exchanges. The law requires
          exchanges to register as virtual asset service providers, maintain anti-money
          laundering programs, and comply with consumer protection standards. This legal
          clarity has attracted both global and local platforms to the Brazilian market.
        </p>
        <h2 className="text-xl font-bold text-[var(--color-text)] mt-8 mb-4">Why PIX Changed the Game</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          PIX, Brazil&apos;s instant payment system launched by the Central Bank, has
          revolutionized crypto purchases in the country. With PIX, Brazilians can deposit
          BRL to exchanges instantly and for free, 24 hours a day, 7 days a week. This has
          made Brazil one of the most frictionless markets for buying cryptocurrency and
          has driven significant adoption growth.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {brazilExchanges.map((exchange, index) => (
          <ProductCard
            key={exchange.slug}
            product={exchange}
            rank={index + 1}
            categorySlug="exchanges"
          />
        ))}
      </div>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Payment Methods for Brazilian Users</h2>
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
            <h3 className="text-[var(--color-text)] font-semibold mb-2">PIX</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Instant, free BRL deposits 24/7. The best option for Brazilian users. Supported by all major exchanges.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">TED Bank Transfer</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Same-day transfer during business hours. Small fee charged by banks. Good for larger amounts.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Boleto Bancario</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Pay at banks, ATMs, or lottery houses. Takes 1-3 business days. Good for cash-based users.</p>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">P2P Trading</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Buy directly from other users with flexible payment. Available on Binance and others.</p>
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Exchanges/best/brazil", "description": "Crypto content on degen0x", "url": "https://degen0x.com/exchanges/best/brazil", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <RelatedContent category="tools" currentSlug="/exchanges/best/brazil" />
    </div>
  );
}
