import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import StarRating from "@/components/StarRating";
import TableOfContents from "@/components/TableOfContents";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import MethodologyBlock from '@/components/MethodologyBlock';
import LastUpdated from '@/components/LastUpdated';


export const metadata: Metadata = {
  title: `TaxBit Review (2026) - Free Crypto Tax Reports | degen0x`,
  description: `In-depth TaxBit review for ${CURRENT_YEAR}. Enterprise-grade crypto tax compliance with free tax reports through partner exchanges. Pricing, features, and accuracy.`,
  alternates: { canonical: "/taxes/reviews/taxbit" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
  { id: "pricing", title: "Pricing", level: 2 },
  { id: "pros-cons", title: "Pros & Cons", level: 2 },
  { id: "verdict", title: "Final Verdict", level: 2 },
];

const faqs = [
  { question: "Is TaxBit really free?", answer: "TaxBit offers free tax reports for individual users through its network of partner exchanges including Coinbase, Gemini, and others. If your exchange is a TaxBit partner, you can access tax reports at no cost. Users of non-partner exchanges may need to use alternative software." },
  { question: "How does TaxBit compare to Koinly?", answer: "TaxBit is best for users of partner exchanges who want free reports. Koinly is better for users with multiple exchanges, DeFi activity, or international tax needs. Koinly has more integrations (800+ vs 100+) and broader DeFi support. TaxBit excels in IRS compliance and enterprise-grade accuracy." },
  { question: "Does TaxBit support DeFi?", answer: "TaxBit has basic DeFi support but it is not as comprehensive as Koinly or CryptoTaxCalculator. For heavy DeFi users, consider alternatives. TaxBit is strongest for standard exchange-based trading and is trusted by major exchanges for their built-in tax reporting." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Taxbit', },
  ],
};

export default function TaxBitReviewPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "Reviews", href: "/taxes" },
        { label: "TaxBit", href: "/taxes/reviews/taxbit" },
      ]} />
      <AffiliateDisclosure />

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">TaxBit Review {CURRENT_YEAR}</h1>
          <LastUpdated pathKey="/taxes/reviews/taxbit" />
          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={4.5} size="lg" />
            <span className="text-sm text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</span>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            TaxBit brings enterprise-grade crypto tax compliance to individual users, offering
            free tax reports through its network of partner exchanges. Trusted by the IRS and
            major exchanges, TaxBit prioritizes accuracy and regulatory compliance above all else.
          </p>
          <div className="mt-4">
            <a href="https://degen0x.com/go/taxbit" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try TaxBit Free</a>
          </div>
        </header>

        <TableOfContents items={toc} />

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            TaxBit was founded in 2018 by CPAs and tax attorneys, giving it deep expertise in
            tax compliance. The company provides tax information reporting infrastructure to
            major crypto exchanges, which is why several exchanges offer free TaxBit-powered
            tax reports to their users. The platform supports all IRS-approved cost basis methods
            and generates Form 8949, Schedule D, and other required tax documents.
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
            TaxBit's enterprise focus means its accuracy is trusted at the institutional level.
            The company also provides tax reporting solutions to the IRS itself, which gives
            users confidence in the accuracy of their tax calculations. For individual users,
            the free tier through partner exchanges is the primary value proposition.
          </p>
        </section>

        <section id="key-features" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Free Through Partners", desc: "Free tax reports for users of Coinbase, Gemini, and other partner exchanges." },
              { title: "IRS Compliance", desc: "Built by CPAs and tax attorneys with a focus on IRS regulatory compliance." },
              { title: "All Cost Basis Methods", desc: "Supports FIFO, LIFO, HIFO, specific identification, and average cost." },
              { title: "Enterprise-Grade Accuracy", desc: "The same engine used by exchanges for their regulatory reporting." },
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
          <p className="text-[var(--color-text-secondary)]">
            TaxBit is free for individual users who access it through partner exchanges. This
            makes it the most cost-effective option for users who primarily trade on supported
            platforms. For users needing to connect non-partner exchanges, standalone pricing
            is available but not as publicly promoted as the partner exchange route.
          </p>
        </section>

        <section id="pros-cons" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pros & Cons</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-success)] mb-3">Pros</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>+ Free through partner exchanges</li>
                <li>+ Enterprise-grade accuracy</li>
                <li>+ IRS compliance focused</li>
                <li>+ All cost basis methods supported</li>
                <li>+ Trusted by major exchanges</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-danger)] mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>- Limited exchange integrations vs competitors</li>
                <li>- Fewer international tax forms</li>
                <li>- Interface less polished than alternatives</li>
                <li>- Basic DeFi support</li>
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
            <StarRating rating={4.5} size="lg" />
            <p className="text-[var(--color-text-secondary)] mt-4 mb-4">
              TaxBit is an excellent choice for users who primarily trade on partner exchanges
              and want free, accurate tax reports. Its enterprise-grade accuracy and IRS compliance
              focus provide confidence in your tax filing. However, users with diverse exchange
              activity or heavy DeFi usage may find Koinly or CryptoTaxCalculator more suitable.
            </p>
            <a href="https://degen0x.com/go/taxbit" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try TaxBit Free</a>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/taxes/compare/taxbit-vs-cointracker" className="text-[var(--color-primary)] hover:underline">TaxBit vs CoinTracker &#8594;</Link>
          <Link href="/taxes/best/software" className="text-[var(--color-primary)] hover:underline">All Tax Software &#8594;</Link>
        </div>
      </article>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Overview", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/reviews/taxbit", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
      <MethodologyBlock variant="review" />
    </main>
  );
}
