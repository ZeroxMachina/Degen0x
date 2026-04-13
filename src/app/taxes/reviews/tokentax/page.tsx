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
  title: `TokenTax Review (${CURRENT_YEAR}) - CPA Services & Tax Software | ${SITE_NAME}`,
  description: `In-depth TokenTax review for ${CURRENT_YEAR}. The only crypto tax platform offering full-service CPA filing alongside software tools. Pricing, features, and analysis.`,
  alternates: { canonical: "/taxes/reviews/tokentax" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "cpa-services", title: "CPA Services", level: 2 },
  { id: "pricing", title: "Pricing", level: 2 },
  { id: "pros-cons", title: "Pros & Cons", level: 2 },
  { id: "verdict", title: "Final Verdict", level: 2 },
];

const faqs = [
  { question: "Does TokenTax include CPA filing?", answer: "Yes. TokenTax's VIP plan includes access to CPAs who specialize in cryptocurrency tax filing. They handle your entire tax return including crypto and traditional income. This is a premium service with limited availability, especially during tax season." },
  { question: "How much does TokenTax cost?", answer: "TokenTax plans start at $65/year for the Basic plan (500 transactions). The Premium plan is $199/year (5,000 transactions). The VIP plan with CPA services starts at $3,500/year. The CPA service is the most expensive option but provides full-service filing." },
  { question: "Is TokenTax worth the price?", answer: "For users who need CPA assistance with complex crypto tax situations (margin trading, DeFi, international filing), TokenTax's CPA services can be worth the premium. For straightforward tax needs, Koinly or CryptoTaxCalculator offer better value. TokenTax is best for those who want professional handling of their crypto taxes." },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', item: 'https://degen0x.com/taxes' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/taxes/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Tokentax', },
  ],
};

export default function TokenTaxReviewPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Taxes", href: "/taxes" },
        { label: "Reviews", href: "/taxes" },
        { label: "TokenTax", href: "/taxes/reviews/tokentax" },
      ]} />
      <AffiliateDisclosure />

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">TokenTax Review {CURRENT_YEAR}</h1>
          <div className="flex items-center gap-4 mb-4">
            <StarRating rating={4.4} size="lg" />
            <span className="text-sm text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</span>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            TokenTax is unique in the crypto tax space by combining tax software with access to
            professional CPAs who specialize in cryptocurrency. For investors with complex tax
            situations who want hands-on professional guidance, TokenTax bridges the gap between
            DIY software and full-service accounting.
          </p>
          <div className="mt-4">
            <a href="https://degen0x.com/go/tokentax" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try TokenTax</a>
          </div>
        </header>

        <TableOfContents items={toc} />

        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Overview</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            TokenTax was founded in 2017 and has carved out a niche as the premium crypto tax
            solution. While its software capabilities are solid with support for exchange imports,
            DeFi tracking, and margin trading, its real differentiator is the CPA service. Users
            can work directly with accountants who understand crypto-specific tax issues like
            staking income classification, DeFi lending treatment, and cross-chain transaction
            tracking.
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
            The platform supports approximately 200+ exchange integrations and handles most
            common trading scenarios. For complex DeFi activity, CryptoTaxCalculator offers
            broader protocol coverage, but TokenTax compensates with its professional CPA
            review that can handle edge cases manually.
          </p>
        </section>

        <section id="cpa-services" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">CPA Services</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            TokenTax's VIP plan provides access to CPAs who specialize in cryptocurrency taxation.
            These professionals can handle your complete tax return, advise on tax optimization
            strategies, help with IRS audits or notices, and manage complex situations like
            international reporting, wash sale considerations, and ambiguous DeFi tax treatment.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The CPA service is particularly valuable for high-net-worth crypto investors, active
            traders with complex strategies, and anyone who has received IRS notices about
            unreported crypto income. The peace of mind of having a professional handle your
            filing can justify the premium cost for the right users.
          </p>
        </section>

        <section id="pricing" className="mb-10">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { plan: "Basic", price: "$65", txns: "500 transactions", notes: "Software only" },
              { plan: "Premium", price: "$199", txns: "5,000 transactions", notes: "Priority support" },
              { plan: "VIP", price: "$3,500+", txns: "Unlimited", notes: "Full CPA filing service" },
            ].map((p) => (
              <div key={p.plan} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 text-center">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">{p.plan}</h3>
                <p className="text-2xl font-bold text-[var(--color-primary)] my-2">{p.price}</p>
                <p className="text-xs text-[var(--color-text-secondary)]">{p.txns}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{p.notes}</p>
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
                <li>+ Full-service CPA filing available</li>
                <li>+ Handles complex margin trading</li>
                <li>+ DeFi and staking support</li>
                <li>+ Expert tax consultation</li>
                <li>+ Good for complex situations</li>
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--color-danger)] mb-3">Cons</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>- Most expensive option</li>
                <li>- Fewer exchange integrations</li>
                <li>- CPA services have long wait times</li>
                <li>- Software alone less competitive</li>
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
            <StarRating rating={4.4} size="lg" />
            <p className="text-[var(--color-text-secondary)] mt-4 mb-4">
              TokenTax fills an important niche for crypto investors who want professional CPA
              assistance. The software-only plans are competitively priced but face stiff
              competition from Koinly and CryptoTaxCalculator. The VIP CPA service is where
              TokenTax truly shines, offering peace of mind for complex tax situations that
              software alone cannot handle.
            </p>
            <a href="https://degen0x.com/go/tokentax" target="_blank" rel="noopener noreferrer sponsored" className="affiliate-cta inline-block px-6 py-3 rounded-lg text-white font-medium">Try TokenTax</a>
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/taxes/best/software" className="text-[var(--color-primary)] hover:underline">All Tax Software &#8594;</Link>
          <Link href="/taxes/best/accountants" className="text-[var(--color-primary)] hover:underline">Best Crypto Accountants &#8594;</Link>
        </div>
      </article>

      <FAQSection faqs={faqs} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Overview", "description": "Crypto content on degen0x", "url": "https://degen0x.com/taxes/reviews/tokentax", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
