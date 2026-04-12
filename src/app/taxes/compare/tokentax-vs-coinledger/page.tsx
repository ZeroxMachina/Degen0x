import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `TokenTax vs CoinLedger ${CURRENT_YEAR}: Which Crypto Tax Software Is Better?`,
  description: `Compare TokenTax vs CoinLedger for crypto tax reporting. Pricing, features, DeFi support, full-service filing, and beginner-friendliness compared in ${CURRENT_YEAR}.`,
  alternates: { canonical: "/taxes/compare/tokentax-vs-coinledger" }};

const items: ComparisonItem[] = [
  { name: "TokenTax", slug: "tokentax", rating: 4.2, affiliateUrl: "https://degen0x.com/go/tokentax", features: { "Paid Plans": "From $65/year", "Exchanges": "100+", "DeFi Support": "Excellent", "Full-Service Filing": "Yes (VIP plan)", "Margin/Futures": "Yes", "International": "10+ countries", "TurboTax Integration": "CSV export", "CPA Support": "Yes" } },
  { name: "CoinLedger", slug: "coinledger", rating: 4.2, affiliateUrl: "https://degen0x.com/go/coinledger", features: { "Paid Plans": "From $49/year", "Exchanges": "400+", "DeFi Support": "Good", "Full-Service Filing": "No", "Margin/Futures": "Basic", "International": "US focused", "TurboTax Integration": "Direct integration", "CPA Support": "No" } },
];

const features = ["Paid Plans", "Exchanges", "DeFi Support", "Full-Service Filing", "Margin/Futures", "International", "TurboTax Integration", "CPA Support"];

const faqs: FAQ[] = [
  { question: "Which is better for beginners?", answer: "CoinLedger is more beginner-friendly with its guided step-by-step process, clear interface, and direct TurboTax integration. TokenTax has a steeper learning curve but offers more advanced features. If simplicity is your priority, choose CoinLedger." },
  { question: "Which handles margin trading and futures better?", answer: "TokenTax is significantly better for margin trading and futures. It has dedicated support for complex trading types including leveraged positions, futures contracts, and options. CoinLedger handles basic margin trading but lacks the depth needed for active derivative traders." },
  { question: "Is TokenTax's full-service filing worth it?", answer: "TokenTax's VIP plan includes full-service tax filing where their CPAs prepare and file your entire tax return, not just the crypto portion. This is valuable for users with complex tax situations who want professional preparation. The cost is significantly higher than self-filing but saves considerable time and reduces error risk." },
];

export default function TokenTaxVsCoinLedgerPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="taxes"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Taxes", href: "/taxes" }, { label: "Compare", href: "/taxes/compare/tokentax-vs-coinledger" }, { label: "TokenTax vs CoinLedger", href: "/taxes/compare/tokentax-vs-coinledger" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">TokenTax vs CoinLedger: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          TokenTax and CoinLedger cater to different crypto tax needs. TokenTax targets advanced traders with full-service filing options and derivatives support, while CoinLedger focuses on user-friendliness and affordability. This comparison breaks down the key differences to help you choose.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> TokenTax is better for advanced traders, margin and futures traders, and those wanting full-service CPA filing. CoinLedger is better for beginners and straightforward portfolios who want an easy filing process with TurboTax integration.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="TokenTax vs CoinLedger Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
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
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">User Experience</h3>
        <p className="text-[var(--color-text-secondary)]">CoinLedger excels in user experience with a clean, guided interface that walks users through each step of the tax reporting process. Clear explanations and minimal jargon make it accessible for first-time crypto tax filers. TokenTax has a more utilitarian interface that prioritizes functionality over simplicity, which benefits power users but may overwhelm beginners.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Advanced Trading Support</h3>
        <p className="text-[var(--color-text-secondary)]">TokenTax stands out for active and advanced traders. Its support for margin trading, futures contracts, and complex order types goes beyond what most crypto tax tools offer. The platform can handle DeFi transactions across multiple protocols and has dedicated support for calculating gains and losses on leveraged positions. CoinLedger handles standard exchange trading well but has limited support for derivatives and complex DeFi strategies.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Full-Service Filing</h3>
        <p className="text-[var(--color-text-secondary)]">TokenTax's VIP plan is unique in offering full-service tax preparation where their in-house CPAs handle your entire tax return. This is ideal for users with complex tax situations involving crypto alongside traditional income, investments, and deductions. No other major crypto tax tool offers comparable full-service filing. CoinLedger focuses solely on generating the crypto tax reports, leaving the actual filing to the user or their accountant.</p>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes/compare/tokentax Vs Coinledger", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/compare/tokentax-vs-coinledger"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
