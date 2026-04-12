import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { TAX_PRODUCTS, TAX_COMPARISON_ITEMS, TAX_COMPARISON_FEATURES, TAX_FAQS } from "@/data/taxes";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Tax Software (${CURRENT_MONTH} ${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Compare the best crypto tax software of ${CURRENT_YEAR}. Expert reviews of Koinly, CoinTracker, TaxBit, CryptoTaxCalculator, and TokenTax with pricing, features, and DeFi support.`,
  alternates: { canonical: "/taxes/best/software" }};

export default function BestTaxSoftwarePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Best Solutions", href: "/taxes/best" },
          { label: "Best Tax Software", href: "/taxes/best/software" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Tax Software ({CURRENT_YEAR})
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          We tested and compared every major crypto tax software platform to help you find the best
          solution for calculating, tracking, and reporting your cryptocurrency taxes. Our rankings
          consider accuracy, exchange integrations, DeFi support, pricing, and ease of use.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </div>

      <AffiliateDisclosure />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Crypto Tax Software Ranked</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto tax compliance is a mess, but ignoring it is worse. We focus on practical approaches that balance accuracy with the reality that most exchanges have incomplete records.
          </p>
        </div>
        <div className="grid gap-6">
          {TAX_PRODUCTS.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              rank={i + 1}
              categorySlug="taxes"
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <ComparisonTable
          items={TAX_COMPARISON_ITEMS}
          features={TAX_COMPARISON_FEATURES}
          title="Crypto Tax Software Comparison"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Rank Crypto Tax Software</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">
            Our editorial team evaluates crypto tax software across multiple criteria to provide
            unbiased rankings. We create accounts, import real transaction data, and test every
            feature before making our recommendations.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">Evaluation Criteria</h3>
              <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                <li>Accuracy of tax calculations (25%)</li>
                <li>Exchange and wallet integrations (20%)</li>
                <li>DeFi and NFT support (20%)</li>
                <li>Pricing and value (15%)</li>
                <li>Ease of use and interface (10%)</li>
                <li>Customer support quality (10%)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">Testing Process</h3>
              <ul className="space-y-1 text-sm text-[var(--color-text-secondary)]">
                <li>Import real transactions from 5+ exchanges</li>
                <li>Test DeFi transaction categorization</li>
                <li>Compare generated tax forms for accuracy</li>
                <li>Evaluate customer support response times</li>
                <li>Test all export and integration features</li>
                <li>Review pricing across all plan tiers</li>
              </ul>
            </div>
          </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="taxes"
        />

        </div>
      </section>

      <FAQSection faqs={TAX_FAQS} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes/best/software", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/best/software"}) }} />
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
    </main>
  );
}
