import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Best Crypto Tax Software Compared (${CURRENT_YEAR}): Complete Comparison`,
  description: `Compare all major crypto tax software platforms side by side. Koinly, CoinTracker, CryptoTaxCalculator, TokenTax, ZenLedger, CoinLedger, and more rated and ranked.`,
  alternates: { canonical: "/taxes/compare/crypto-tax-software-comparison" }};

const items: ComparisonItem[] = [
  { name: "Koinly", slug: "koinly", rating: 4.5, affiliateUrl: "https://degen0x.com/go/koinly", features: { "Price": "From $49/yr", "Exchanges": "800+", "DeFi": "Excellent", "International": "20+ countries", "Best For": "International users, DeFi", "TurboTax": "CSV export" } },
  { name: "CryptoTaxCalculator", slug: "cryptotaxcalculator", rating: 4.6, affiliateUrl: "https://degen0x.com/go/ctc", features: { "Price": "From $49/yr", "Exchanges": "700+", "DeFi": "Best in class", "International": "20+ countries", "Best For": "DeFi power users", "TurboTax": "CSV export" } },
  { name: "CoinTracker", slug: "cointracker", rating: 4.3, affiliateUrl: "https://degen0x.com/go/cointracker", features: { "Price": "From $59/yr", "Exchanges": "500+", "DeFi": "Good", "International": "US focused", "Best For": "TurboTax users", "TurboTax": "Direct integration" } },
  { name: "CoinLedger", slug: "coinledger", rating: 4.2, affiliateUrl: "https://degen0x.com/go/coinledger", features: { "Price": "From $49/yr", "Exchanges": "400+", "DeFi": "Good", "International": "US focused", "Best For": "Beginners", "TurboTax": "Direct integration" } },
  { name: "TokenTax", slug: "tokentax", rating: 4.2, affiliateUrl: "https://degen0x.com/go/tokentax", features: { "Price": "From $65/yr", "Exchanges": "100+", "DeFi": "Excellent", "International": "10+ countries", "Best For": "Active traders, full-service", "TurboTax": "CSV export" } },
  { name: "ZenLedger", slug: "zenledger", rating: 4.0, affiliateUrl: "https://degen0x.com/go/zenledger", features: { "Price": "From $49/yr", "Exchanges": "400+", "DeFi": "Good", "International": "US focused", "Best For": "CPA collaboration", "TurboTax": "CSV export" } },
];

const features = ["Price", "Exchanges", "DeFi", "International", "Best For", "TurboTax"];

const faqs: FAQ[] = [
  { question: "What is the best overall crypto tax software?", answer: "CryptoTaxCalculator and Koinly consistently rank highest overall. CryptoTaxCalculator has the best DeFi support, while Koinly offers the broadest international coverage. For US users who want TurboTax integration, CoinTracker or CoinLedger are excellent choices. The best option depends on your specific needs." },
  { question: "Which crypto tax software is cheapest?", answer: "TaxBit offers a free consumer product. Among paid tools, Koinly, CryptoTaxCalculator, CoinLedger, and ZenLedger all start at $49 per year. CoinTracker starts at $59 and TokenTax at $65. The cheapest option that meets your needs is more important than the absolute lowest price." },
  { question: "Can I switch crypto tax software?", answer: "Yes, you can switch between platforms. Most tools import data from exchanges directly, so switching mainly means re-importing your transaction history into the new tool. Some platforms also offer import from other tax tools. The main consideration is ensuring consistent cost basis method selection across years." },
  { question: "Do I need crypto tax software if I use a CPA?", answer: "Even with a CPA, crypto tax software is valuable. It automates the complex calculations your CPA would otherwise do manually. Many CPAs prefer receiving organized reports from crypto tax tools rather than raw exchange data. Some platforms like ZenLedger and TokenTax offer CPA access features for seamless collaboration." },
];

export default function CryptoTaxSoftwareComparisonPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="taxes"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Taxes", href: "/taxes" }, { label: "Compare", href: "/taxes/compare/crypto-tax-software-comparison" }, { label: "All Software Compared", href: "/taxes/compare/crypto-tax-software-comparison" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto Tax Software Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Choosing the right crypto tax software can save you hours of manual work and potentially thousands in taxes through optimized cost basis selection. This comprehensive comparison ranks all major crypto tax platforms across the features that matter most: pricing, exchange coverage, DeFi support, international compatibility, and ease of use.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">Quick recommendations:</strong> Best overall: CryptoTaxCalculator. Best for international users: Koinly. Best for TurboTax users: CoinTracker. Best for beginners: CoinLedger. Best for active traders: TokenTax. Best for CPA collaboration: ZenLedger.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Crypto Tax Software Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Ranked These Tools</h2>
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
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">DeFi Support Quality</h3>
        <p className="text-[var(--color-text-secondary)]">DeFi support is the most significant differentiator between crypto tax tools. CryptoTaxCalculator leads the field with support for the widest range of DeFi protocols across multiple chains. Koinly and TokenTax are close behind. CoinTracker and CoinLedger have improved their DeFi support but still lag for complex multi-protocol strategies. ZenLedger provides solid basic DeFi support. We tested each tool with real DeFi transaction data including lending, borrowing, liquidity provision, yield farming, and staking to evaluate accuracy.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Exchange Coverage</h3>
        <p className="text-[var(--color-text-secondary)]">Koinly leads with over 800 exchange integrations, followed by CryptoTaxCalculator with 700 and CoinTracker with 500. For most users trading on major exchanges, all tools provide adequate coverage. The differences matter most for users of smaller, regional, or DeFi-native exchanges. If you use obscure exchanges, verify support before committing to any tool.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">International Support</h3>
        <p className="text-[var(--color-text-secondary)]">For non-US users, international support is critical. Koinly and CryptoTaxCalculator both support over 20 countries with country-specific tax calculations and forms. CoinPanda supports 65 countries. CoinTracker, CoinLedger, and ZenLedger are primarily US-focused. International users should verify that their specific country's tax rules are implemented, not just listed as a supported export format.</p>
      </section>
      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes/compare/crypto Tax Software Comparison", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/compare/crypto-tax-software-comparison"}) }} />
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
    </div>
  );
}
