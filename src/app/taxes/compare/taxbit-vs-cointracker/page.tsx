import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { TAX_COMPARISON_ITEMS, TAX_COMPARISON_FEATURES } from "@/data/taxes";
import MethodologyBlock from '@/components/MethodologyBlock';
import CompareSchema from '@/components/CompareSchema';

export const metadata: Metadata = {
  title: `TaxBit vs CoinTracker 2026 - Crypto Tax Software Comparison`,
  description: `Compare TaxBit vs CoinTracker for crypto tax reporting. Side-by-side comparison of pricing, features, integrations, and which is right for you.`,
  alternates: { canonical: "/taxes/compare/taxbit-vs-cointracker" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = TAX_COMPARISON_ITEMS.filter(i => ["taxbit", "cointracker"].includes(i.slug));

const faqs = [
  { question: "Is TaxBit better than CoinTracker?", answer: "It depends on your situation. TaxBit is free through partner exchanges and has enterprise-grade accuracy. CoinTracker offers better portfolio tracking, more integrations, and direct TurboTax integration. Choose TaxBit for free reports from supported exchanges; choose CoinTracker for broader coverage and TurboTax integration." },
  { question: "Which has better TurboTax integration?", answer: "Both support TurboTax, but CoinTracker has a direct one-click integration. TaxBit generates compatible files that can be imported. CoinTracker's integration is smoother and requires fewer steps." },
  { question: "Can I use both TaxBit and CoinTracker?", answer: "You could, but it adds complexity. Some users get free reports from TaxBit through their exchange and verify against another tool. However, using one comprehensive platform is generally simpler and reduces the risk of discrepancies between different software calculations." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/taxes/compare' },
    { '@type': 'ListItem', position: 4, name: 'Taxbit Vs Cointracker', },
  ],
};

export default function TaxBitVsCoinTrackerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="taxes"
      />      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "TaxBit vs CoinTracker", href: "/taxes/compare/taxbit-vs-cointracker" },
      ]} />

      <AffiliateDisclosure />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">TaxBit vs CoinTracker: Comparison for {CURRENT_YEAR}</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-2">
        TaxBit offers free tax reports through exchange partnerships, while CoinTracker provides
        superior portfolio tracking and TurboTax integration. Here is how they compare.
      </p>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>

      <div className="mb-12">
        <ComparisonTable items={items} features={TAX_COMPARISON_FEATURES} title="TaxBit vs CoinTracker Comparison" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Differences</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          TaxBit's biggest advantage is cost: it is free through partner exchanges. If your
          primary exchange is a TaxBit partner (Coinbase, Gemini, etc.), you can generate
          accurate tax reports without paying anything. CoinTracker charges $59+ per year but
          provides a more feature-rich experience with better portfolio tracking and wider
          integration coverage.
        </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Every jurisdiction has different rules, and they're changing fast. We note when guidance is US-specific vs. internationally applicable.
          </p>
        </div>
        <p className="text-[var(--color-text-secondary)]">
          CoinTracker has significantly more integrations (500+ vs 100+) and supports more
          advanced scenarios through its broader data import capabilities. For users with
          activity across many exchanges and wallets, CoinTracker provides more comprehensive
          coverage. TaxBit is stronger for users who consolidate trading on a single major
          exchange.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Recommendation</h2>
        <p className="text-[var(--color-text-secondary)]">
          Choose TaxBit if you trade primarily on a partner exchange and want free, accurate
          tax reports. Choose CoinTracker if you need broader exchange coverage, direct TurboTax
          integration, and portfolio tracking features. For the best overall value with the most
          integrations, also consider Koinly as a third option.
        </p>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes/compare/taxbit Vs Cointracker", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/compare/taxbit-vs-cointracker", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
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
            All Learning Guides
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
            Compare Projects
          </Link>
        </div>
      </div>
      <CompareSchema
        title="Taxbit vs Cointracker — degen0x"
        url="/taxes/compare/taxbit-vs-cointracker"
        description="A head-to-head look at Taxbit and Cointracker: product, fees, risk, and who each one is built for."
        items={["Taxbit", "Cointracker"]}
      />
      <MethodologyBlock variant="compare" />
    </div>
  );
}
