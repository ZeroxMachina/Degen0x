import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import StarRating from "@/components/StarRating";
import TableOfContents from "@/components/TableOfContents";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `CryptoTaxCalculator Review (${CURRENT_YEAR}) - Best for DeFi Taxes | ${SITE_NAME}`,
  description: `In-depth CryptoTaxCalculator review for ${CURRENT_YEAR}. The best crypto tax software for DeFi and NFT traders with advanced transaction tracking.`,
  alternates: { canonical: "/taxes/reviews/cryptotaxcalculator" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "defi-support", title: "DeFi & NFT Support", level: 2 },
  { id: "pricing", title: "Pricing", level: 2 },
  { id: "pros-cons", title: "Pros & Cons", level: 2 },
  { id: "verdict", title: "Final Verdict", level: 2 },
];

const faqs = [
  { question: "Is CryptoTaxCalculator good for DeFi?", answer: "CryptoTaxCalculator has the best DeFi support in the industry. It automatically classifies complex DeFi transactions including swaps, liquidity pool entries and exits, yield farming, staking rewards, lending, borrowing, and bridging across hundreds of protocols and chains." },
  { question: "How much does CryptoTaxCalculator cost?", answer: "Plans start at $49/year for up to 100 transactions. The Trader plan at $99/year covers 1,000 transactions. The Pro plan at $189/year covers 10,000 transactions. There is no free tier for tax reports, though you can import and preview your data before purchasing." },
  { question: "Does CryptoTaxCalculator support international taxes?", answer: "Yes. CryptoTaxCalculator supports tax reports for over 40 countries including the US, UK, Australia, Canada, Germany, and more. It generates country-specific tax forms and supports local cost basis methods for each jurisdiction." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Cryptotaxcalculator', },
  ],
};

export default function CryptoTaxCalculatorReviewPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "Reviews", href: "/taxes" },
        { label: "CryptoTaxCalculator", href: "/taxes/reviews/cryptotaxcalculator" },
      ]} />
      <AffiliateDisclosure />

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">CryptoTaxCalculator Review {CURRENT_YEAR}</h1>
          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={4.7} size="lg" />
            <span className="text-sm text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</span>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            CryptoTaxCalculator is the gold standard for DeFi and NFT tax tracking. If your
            crypto activity goes beyond simple exchange trading, this platform handles the
            complexity that other tools struggle with.
          </p>
          <div className="mt-4">
            <a href="https://degen0x.com/go/cryptotaxcalculator" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try CryptoTaxCalculator</a>
          </div>
        </header>

        <TableOfContents items={toc} />

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Founded in Australia, CryptoTaxCalculator has built its reputation on handling the
            most complex crypto tax scenarios. While most tax software handles simple exchange
            trades well, CryptoTaxCalculator specializes in automatically classifying DeFi
            transactions, NFT trades, cross-chain bridges, and other advanced activities that
            other platforms often miscategorize or miss entirely.
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
            The platform supports over 400 exchange and wallet integrations, direct blockchain
            imports for all major chains, and automatic detection of DeFi protocols. Its
            classification engine categorizes transactions as trades, income, transfers, or
            other tax-relevant events with impressive accuracy, though complex edge cases may
            still require manual review.
          </p>
        </section>

        <section id="defi-support" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">DeFi & NFT Support</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            This is where CryptoTaxCalculator truly excels. It automatically handles Uniswap
            and SushiSwap trades, Aave and Compound lending/borrowing, Curve and Balancer LP
            positions, yield farming across major protocols, staking and liquid staking
            transactions, cross-chain bridges, and NFT minting, buying, and selling with
            royalty tracking.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The platform continuously adds support for new DeFi protocols and chains. Its ability
            to detect and correctly classify complex multi-step DeFi transactions (like flash
            loans, leveraged positions, and protocol migrations) sets it apart from competitors
            that often categorize these as simple trades or unknown transactions.
          </p>
        </section>

        <section id="pricing" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { plan: "Rookie", price: "$49", txns: "100 transactions" },
              { plan: "Hobbyist", price: "$99", txns: "1,000 transactions" },
              { plan: "Investor", price: "$189", txns: "10,000 transactions" },
              { plan: "Trader", price: "$299", txns: "100,000 transactions" },
            ].map((p) => (
              <div key={p.plan} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{p.plan}</h3>
                <p className="text-2xl font-bold text-[var(--color-primary)] my-2">{p.price}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{p.txns}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pros-cons" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pros & Cons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-success)] mb-3">Pros</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>+ Best-in-class DeFi transaction support</li>
                <li>+ Excellent NFT tax tracking</li>
                <li>+ 40+ country tax report support</li>
                <li>+ Automatic transaction classification</li>
                <li>+ Growing protocol coverage</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-danger)] mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>- No free tier for tax reports</li>
                <li>- Can be complex for beginners</li>
                <li>- Higher pricing for advanced features</li>
                <li>- No direct TurboTax integration</li>
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

        </section>

        <section id="verdict" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Final Verdict</h2>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <StarRating rating={4.7} size="lg" />
            <p className="text-[var(--color-text-secondary)] mt-4 mb-4">
              CryptoTaxCalculator earns our top rating for DeFi tax tracking. If you actively
              use DeFi protocols, trade NFTs, or interact with multiple chains, this is the best
              tool for ensuring accurate tax reporting. For simple exchange-only trading, Koinly
              offers a more cost-effective solution, but for DeFi complexity, CryptoTaxCalculator
              is unmatched.
            </p>
            <a href="https://degen0x.com/go/cryptotaxcalculator" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try CryptoTaxCalculator</a>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/taxes/compare/koinly-vs-cryptotaxcalculator" className="text-[var(--color-primary)] hover:underline">Koinly vs CryptoTaxCalculator &#8594;</Link>
          <Link href="/taxes/best/software" className="text-[var(--color-primary)] hover:underline">All Tax Software &#8594;</Link>
        </div>
      </article>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Overview", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/reviews/cryptotaxcalculator", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
