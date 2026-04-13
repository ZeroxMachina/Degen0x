import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CRYPTO_LOAN_PRODUCTS, LOAN_COMPARISON_ITEMS, LOAN_COMPARISON_FEATURES, LOAN_FAQS } from "@/data/crypto-loans";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Loan Platforms of ${CURRENT_YEAR} (Ranked & Reviewed)`,
  description: `Compare the best crypto loan platforms of ${CURRENT_YEAR}. We tested rates, LTV ratios, collateral support, and security. Find the best way to borrow against your crypto.`,
  alternates: { canonical: "/crypto-loans/best" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', item: 'https://degen0x.com/crypto-loans' },
    { '@type': 'ListItem', position: 3, name: 'Best', },
  ],
};

export default function BestCryptoLoansPage() {
  const ranked = CRYPTO_LOAN_PRODUCTS.filter((p) => p.slug !== "celsius").sort((a, b) => b.rating - a.rating);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="crypto-loans"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Best Crypto Loans", href: "/crypto-loans/best" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Crypto Loan Platforms of {CURRENT_YEAR}</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <AffiliateDisclosure />
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">Crypto-backed loans let you access liquidity without selling your crypto assets. Whether you need cash for expenses, want to avoid taxable events, or plan to leverage your holdings, these platforms offer various ways to borrow against Bitcoin, Ethereum, and other cryptocurrencies. We evaluated each platform for interest rates, loan-to-value ratios, collateral options, security, and overall borrower experience.</p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">For DeFi borrowers, <strong className="text-[var(--color-text)]">Aave</strong> offers the deepest liquidity and most flexible terms. For CeFi borrowers wanting a simple experience, <strong className="text-[var(--color-text)]">Nexo</strong> provides competitive rates with no monthly payments required. For DAI stablecoin borrowers, <strong className="text-[var(--color-text)]">MakerDAO</strong> pioneered the space and remains a strong choice.</p>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
        {/* editorial-voice */}
        <div style={{ background: '#0f0a1e', border: '1px solid #2e1065', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🏦</span>
            <strong style={{ color: '#8b5cf6', fontSize: 15 }}>Lending Insight</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto-backed loans can be tax-efficient, but liquidation risk is real. We calculate the buffer needed at various volatility levels for each platform.
          </p>
        </div>
        <div className="space-y-4">{ranked.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Platform Comparison</h2>
        <ComparisonTable items={LOAN_COMPARISON_ITEMS} features={LOAN_COMPARISON_FEATURES} title="Feature Comparison" />
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Browse by Loan Type</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "Bitcoin Loans", href: "/crypto-loans/best/bitcoin-loans", desc: "Borrow against BTC" },
            { title: "DeFi Loans", href: "/crypto-loans/best/defi", desc: "No KYC required" },
            { title: "Low Interest", href: "/crypto-loans/best/low-interest", desc: "Cheapest rates" },
            { title: "Flash Loans", href: "/crypto-loans/best/flash-loans", desc: "Zero-collateral DeFi" },
            { title: "NFT Collateral", href: "/crypto-loans/best/nft-collateral", desc: "Borrow against NFTs" },
            { title: "Institutional", href: "/crypto-loans/best/institutional", desc: "Large-scale borrowing" },
          ].map((c) => (<Link key={c.href} href={c.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover"><h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{c.title}</h3><p className="text-sm text-[var(--color-text-secondary)]">{c.desc}</p></Link>))}
        </div>
      </section>
      <FAQSection faqs={LOAN_FAQS} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Bitcoin Loans", "description": "Crypto content on degen0x", "url": "https://degen0x.com/crypto-loans/best", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
