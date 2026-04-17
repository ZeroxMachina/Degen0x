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

export const metadata: Metadata = {
  title: `Koinly vs CryptoTaxCalculator 2026 - Which Is Better for DeFi?`,
  description: `Compare Koinly vs CryptoTaxCalculator. Side-by-side analysis of DeFi support, pricing, integrations, and which crypto tax software is right for you.`,
  alternates: { canonical: "/taxes/compare/koinly-vs-cryptotaxcalculator" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const items = TAX_COMPARISON_ITEMS.filter(i => ["koinly", "cryptotaxcalculator"].includes(i.slug));

const faqs = [
  { question: "Which is better for DeFi taxes?", answer: "CryptoTaxCalculator has the best DeFi support overall, with more automated protocol detection and better handling of complex multi-step transactions. Koinly's DeFi support is good but not as deep. If DeFi is your primary activity, CryptoTaxCalculator is the better choice." },
  { question: "Which has more exchange integrations?", answer: "Koinly leads with 800+ integrations compared to CryptoTaxCalculator's 400+. For users with accounts on many different exchanges, Koinly is more likely to support all of them. CryptoTaxCalculator covers all major exchanges but has a smaller long-tail of supported platforms." },
  { question: "Which is better for international users?", answer: "Both support international users well. CryptoTaxCalculator supports 40+ countries while Koinly supports 20+. For users in less common tax jurisdictions, CryptoTaxCalculator may have better coverage. Both support major markets like US, UK, Australia, and Canada." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Compare', item: 'https://degen0x.com/taxes/compare' },
    { '@type': 'ListItem', position: 4, name: 'Koinly Vs Cryptotaxcalculator', },
  ],
};

export default function KoinlyVsCryptoTaxCalculatorPage() {
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
        { label: "Koinly vs CryptoTaxCalculator", href: "/taxes/compare/koinly-vs-cryptotaxcalculator" },
      ]} />

      <AffiliateDisclosure />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Koinly vs CryptoTaxCalculator: {CURRENT_YEAR} Comparison</h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-2">
        Both are top-tier crypto tax solutions but serve different strengths. Koinly leads in
        integrations and value, while CryptoTaxCalculator excels at DeFi and NFT tax tracking.
      </p>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>

      <div className="mb-12">
        <ComparisonTable items={items} features={TAX_COMPARISON_FEATURES} title="Koinly vs CryptoTaxCalculator" />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Differences</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The primary differentiator is DeFi support depth. CryptoTaxCalculator was built with
          DeFi as a first-class citizen, automatically classifying complex DeFi transactions
          across hundreds of protocols with greater accuracy. Koinly handles common DeFi scenarios
          well but may require more manual categorization for edge cases.
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
        <p className="text-[var(--color-text-secondary)] mb-4">
          Koinly has twice the exchange integrations (800+ vs 400+), a free portfolio tracking
          tier, and generally lower pricing. For users who primarily trade on centralized
          exchanges with occasional DeFi activity, Koinly offers better value. For users who are
          deep in DeFi across multiple chains and protocols, CryptoTaxCalculator saves
          significant time on transaction classification.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          CryptoTaxCalculator supports more countries (40+ vs 20+), which can be a deciding
          factor for users in less common jurisdictions. Both platforms generate accurate tax
          reports and support all standard cost basis methods.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Our Recommendation</h2>
        <p className="text-[var(--color-text-secondary)]">
          Choose Koinly for the best overall value, most exchange integrations, and solid
          all-around coverage. Choose CryptoTaxCalculator if DeFi and NFTs make up a significant
          portion of your crypto activity, or if you need support for a non-US tax jurisdiction
          not covered by Koinly. Both are excellent tools that will save you significant time
          during tax season.
        </p>
      </section>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes/compare/koinly Vs Cryptotaxcalculator", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/compare/koinly-vs-cryptotaxcalculator", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <MethodologyBlock variant="compare" />
    </div>
  );
}
