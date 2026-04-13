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
  title: `CoinTracker Review (${CURRENT_YEAR}) - Pricing, Features & TurboTax Integration | ${SITE_NAME}`,
  description: `Detailed CoinTracker review for ${CURRENT_YEAR}. Analysis of pricing, TurboTax integration, portfolio tracking, DeFi support, and how it compares to Koinly.`,
  alternates: { canonical: "/taxes/reviews/cointracker" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
  { id: "pricing", title: "Pricing", level: 2 },
  { id: "turbotax-integration", title: "TurboTax Integration", level: 2 },
  { id: "defi-support", title: "DeFi Support", level: 2 },
  { id: "pros-cons", title: "Pros & Cons", level: 2 },
  { id: "verdict", title: "Final Verdict", level: 2 },
];

const faqs = [
  { question: "Does CoinTracker integrate with TurboTax?", answer: "Yes. CoinTracker has a direct integration with TurboTax that allows you to import your crypto tax data with one click. This is one of CoinTracker's primary advantages over competitors like Koinly." },
  { question: "How much does CoinTracker cost?", answer: "CoinTracker offers a free tier for up to 25 transactions. Paid plans start at $59 per year for up to 100 transactions. Higher tiers cost $199 (1,000 transactions) and $599 (unlimited transactions) per tax year." },
  { question: "Is CoinTracker better than Koinly?", answer: "CoinTracker is better if you use TurboTax and want direct integration. Koinly is better for international users, DeFi-heavy portfolios, and those who want more exchange integrations at a lower price point. Both are excellent tools." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Cointracker', },
  ],
};

export default function CoinTrackerReviewPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Reviews", href: "/taxes" },
          { label: "CoinTracker", href: "/taxes/reviews/cointracker" },
        ]}
      />
      <AffiliateDisclosure />

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">CoinTracker Review {CURRENT_YEAR}</h1>
          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={4.6} size="lg" />
            <span className="text-sm text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</span>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            CoinTracker stands out for its seamless TurboTax and H&R Block integration, making
            it the top choice for US investors who want the easiest path from crypto trades to
            filed tax return. Backed by Coinbase Ventures, CoinTracker also provides excellent
            real-time portfolio tracking alongside its tax features.
          </p>
          <div className="mt-4">
            <a href="https://degen0x.com/go/cointracker" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try CoinTracker</a>
          </div>
        </header>

        <TableOfContents items={toc} />

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CoinTracker was founded in 2017 and has grown into one of the most trusted names
            in crypto tax software. The platform integrates with over 500 exchanges and wallets,
            automatically syncing your transaction data to calculate capital gains, income, and
            generate tax-ready forms. Its partnership with Intuit (TurboTax) gives it a unique
            competitive advantage in the US market.
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
            The platform excels in user experience, offering one of the cleanest interfaces in
            the crypto tax space. Portfolio tracking is a core feature, providing real-time
            valuations, performance metrics, and cost basis tracking across all connected accounts.
            CoinTracker is ideal for investors who want both portfolio management and tax
            reporting in a single platform.
          </p>
        </section>

        <section id="key-features" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "TurboTax Direct Import", desc: "One-click import of crypto tax data directly into TurboTax. No CSV export/import needed." },
              { title: "Real-Time Portfolio", desc: "Track your entire crypto portfolio across exchanges and wallets with live price updates." },
              { title: "500+ Integrations", desc: "API connections for major exchanges and blockchain address imports for on-chain activity." },
              { title: "Tax Optimization", desc: "Preview different cost basis methods to find the one that minimizes your tax liability." },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">{f.title}</h3>
                <p className="text-xs text-[var(--color-text-secondary)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pricing</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CoinTracker pricing is based on the number of transactions per tax year. While it
            is more expensive than some competitors, the TurboTax integration and polished
            experience justify the premium for many users. The free tier supports up to 25
            transactions, which is adequate for very casual investors.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { plan: "Free", price: "$0", txns: "25 transactions" },
              { plan: "Base", price: "$59", txns: "100 transactions" },
              { plan: "Plus", price: "$199", txns: "1,000 transactions" },
              { plan: "Premier", price: "$599", txns: "Unlimited" },
            ].map((p) => (
              <div key={p.plan} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{p.plan}</h3>
                <p className="text-2xl font-bold text-[var(--color-primary)] my-2">{p.price}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{p.txns}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="turbotax-integration" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">TurboTax Integration</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CoinTracker's TurboTax integration is its standout feature. Once your transactions
            are imported and reviewed, you can push your complete crypto tax data to TurboTax
            with one click. TurboTax automatically populates Form 8949 and Schedule D with your
            capital gains and losses. This eliminates the manual CSV upload process required by
            other crypto tax platforms and reduces the chance of errors in your filing.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The H&R Block integration works similarly, giving you two options for seamless
            integration with major tax filing software. This makes CoinTracker the clear winner
            for users who want the simplest possible tax filing workflow.
          </p>
        </section>

        <section id="defi-support" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">DeFi Support</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            CoinTracker supports DeFi transactions through blockchain address imports. It can
            detect and categorize common DeFi activities including token swaps, lending,
            borrowing, and staking. However, its DeFi support is not as comprehensive as
            CryptoTaxCalculator or Koinly. Complex DeFi strategies across multiple protocols
            may require some manual categorization.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            CoinTracker has been steadily improving its DeFi capabilities, and support for major
            protocols like Uniswap, Aave, and Compound is solid. If DeFi is a major part of your
            portfolio, compare CoinTracker with CryptoTaxCalculator before deciding.
          </p>
        </section>

        <section id="pros-cons" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pros & Cons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-success)] mb-3">Pros</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>+ Direct TurboTax and H&R Block integration</li>
                <li>+ Clean, intuitive interface</li>
                <li>+ Excellent real-time portfolio tracking</li>
                <li>+ Backed by Coinbase Ventures</li>
                <li>+ Tax optimization preview</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-danger)] mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>- Higher pricing than competitors</li>
                <li>- Limited DeFi support on basic plans</li>
                <li>- 25 transaction free tier is restrictive</li>
                <li>- Fewer integrations than Koinly (500 vs 800+)</li>
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
            <StarRating rating={4.6} size="lg" />
            <p className="text-[var(--color-text-secondary)] mt-4 mb-4">
              CoinTracker is the best crypto tax software for TurboTax users and anyone who
              prioritizes a seamless filing experience. Its direct integration with major tax
              software, combined with excellent portfolio tracking and a clean interface, makes
              it a top-tier choice. The higher pricing and somewhat limited DeFi support keep
              it from the top spot, but for straightforward exchange-based trading, CoinTracker
              is excellent.
            </p>
            <a href="https://degen0x.com/go/cointracker" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try CoinTracker</a>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/taxes/compare/koinly-vs-cointracker" className="text-[var(--color-primary)] hover:underline">Koinly vs CoinTracker &#8594;</Link>
          <Link href="/taxes/compare/taxbit-vs-cointracker" className="text-[var(--color-primary)] hover:underline">TaxBit vs CoinTracker &#8594;</Link>
        </div>
      </article>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Overview", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/reviews/cointracker", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
