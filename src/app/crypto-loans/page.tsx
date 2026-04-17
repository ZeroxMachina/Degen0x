import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { CRYPTO_LOAN_PRODUCTS, LOAN_FAQS } from "@/data/crypto-loans";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import AuthoritySources from '@/components/AuthoritySources';

import ArticleSchema from "@/components/ArticleSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Crypto Loans - Compare Crypto-Backed Lending Platforms 2026`,
  description: "Compare the best crypto loan platforms. Borrow against your Bitcoin and crypto without selling. CeFi and DeFi options with expert reviews and guides.",
  alternates: { canonical: "/crypto-loans" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const bestOfLinks = [
  { title: "Best Crypto Loan Platforms", href: "/crypto-loans/best", desc: "Top-rated platforms compared" },
  { title: "Bitcoin Loans", href: "/crypto-loans/best/bitcoin-loans", desc: "Best Bitcoin-backed loans" },
  { title: "DeFi Loans", href: "/crypto-loans/best/defi", desc: "Best decentralized lending" },
  { title: "Low Interest", href: "/crypto-loans/best/low-interest", desc: "Cheapest crypto loan rates" },
  { title: "No KYC Loans", href: "/crypto-loans/best/no-kyc", desc: "Borrow without ID verification" },
  { title: "Stablecoin Loans", href: "/crypto-loans/best/stablecoin", desc: "Borrow stablecoins against crypto" },
  { title: "Flash Loans", href: "/crypto-loans/best/flash-loans", desc: "Zero-collateral DeFi loans" },
  { title: "NFT Collateral", href: "/crypto-loans/best/nft-collateral", desc: "Borrow against your NFTs" },
  { title: "Margin Lending", href: "/crypto-loans/best/margin-lending", desc: "Leverage trading platforms" },
  { title: "Institutional", href: "/crypto-loans/best/institutional", desc: "Large-scale crypto borrowing" },
];
const reviewLinks = [
  { name: "Nexo", slug: "nexo" }, { name: "Aave", slug: "aave-loans" }, { name: "Compound", slug: "compound-loans" }, { name: "MakerDAO", slug: "makerdao" }, { name: "Celsius", slug: "celsius" },
];
const compareLinks = [
  { title: "Nexo vs Aave", href: "/crypto-loans/compare/nexo-vs-aave" },
  { title: "MakerDAO vs Compound", href: "/crypto-loans/compare/makerdao-vs-compound" },
];
const learnLinks = [
  { title: "What Are Crypto-Backed Loans?", href: "/crypto-loans/learn/what-are-crypto-backed-loans" },
  { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained" },
  { title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk" },
  { title: "CeFi vs DeFi Lending", href: "/crypto-loans/learn/cefi-vs-defi-lending" },
  { title: "Flash Loans Explained", href: "/crypto-loans/learn/flash-loans-explained" },
  { title: "Crypto Loan Taxes", href: "/crypto-loans/learn/crypto-loan-taxes" },
  { title: "How to Borrow Against Crypto", href: "/crypto-loans/learn/how-to-borrow-against-crypto" },
];
const toolLinks = [
  { title: "Loan Calculator", href: "/crypto-loans/calculators/loan-calculator", desc: "Calculate loan payments and interest" },
  { title: "LTV Calculator", href: "/crypto-loans/calculators/ltv-calculator", desc: "Determine your loan-to-value ratio" },
  { title: "Liquidation Price Calculator", href: "/crypto-loans/calculators/liquidation-price-calculator", desc: "Find your liquidation price" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Loans', },
  ],
};

export default function CryptoLoansPage() {
  const topPlatforms = CRYPTO_LOAN_PRODUCTS.filter((p) => p.slug !== "celsius").sort((a, b) => b.rating - a.rating).slice(0, 4);
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: `Crypto Loans Hub ${CURRENT_YEAR}`, url: "https://degen0x.com/crypto-loans", isPartOf: { "@type": "WebSite", name: SITE_NAME } };

  return (
    <>
      <ArticleSchema
        headline="Best Crypto Loan Platforms"
        description="Compare the best crypto loan platforms. Borrow against your Bitcoin and crypto without selling. CeFi and DeFi options with expert reviews and guides."
        url="/crypto-loans"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }]} />
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto Loans Hub</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">Your complete resource for crypto-backed loans. Compare CeFi and DeFi loan platforms, read expert reviews, and learn how to borrow against your crypto without selling. Last updated {CURRENT_MONTH} {CURRENT_YEAR}.</p>
        </div>
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text)]">Top Loan Platforms</h2>
            <Link href="/crypto-loans/best" className="text-[var(--color-primary)] hover:underline text-sm font-medium">View all rankings &rarr;</Link>
          </div>
          <AffiliateDisclosure />
          <div className="space-y-4">{topPlatforms.map((p, i) => (<ProductCard key={p.slug} product={p} rank={i + 1} categorySlug="crypto-loans" />))}</div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Right Loan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((l) => (<Link key={l.href} href={l.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"><h3 className="text-[var(--color-text)] font-semibold mb-1">{l.title}</h3><p className="text-sm text-[var(--color-text-secondary)]">{l.desc}</p></Link>))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Platform Reviews</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {reviewLinks.map((r) => (<Link key={r.slug} href={`/crypto-loans/reviews/${r.slug}`} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover text-center block"><span className="text-[var(--color-text)] font-semibold">{r.name}</span><span className="block text-xs text-[var(--color-text-secondary)] mt-1">Full Review</span></Link>))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compareLinks.map((l) => (<Link key={l.href} href={l.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"><span className="text-[var(--color-text)] font-semibold">{l.title}</span><span className="block text-xs text-[var(--color-text-secondary)] mt-1">Detailed comparison &rarr;</span></Link>))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Tools & Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolLinks.map((t) => (<Link key={t.href} href={t.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"><h3 className="text-[var(--color-text)] font-semibold mb-1">{t.title}</h3><p className="text-sm text-[var(--color-text-secondary)]">{t.desc}</p></Link>))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About Crypto Loans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((l) => (<Link key={l.href} href={l.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"><span className="text-[var(--color-text)] font-semibold">{l.title}</span><span className="block text-xs text-[var(--color-text-secondary)] mt-1">Read guide &rarr;</span></Link>))}
          </div>
        </section>
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review Loan Platforms</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">Our crypto loan platform reviews evaluate interest rates, LTV ratios, supported collateral, liquidation policies, platform security, regulatory status, and user experience. We test each platform with real deposits and monitor terms over time. The collapse of Celsius in 2022 reinforced the importance of thorough due diligence, especially for centralized lending platforms.</p>
          <p className="text-[var(--color-text-secondary)]">We evaluate both CeFi platforms (which require KYC but offer simpler experiences) and DeFi protocols (which are permissionless but require more technical knowledge). Our recommendations consider platform risk, borrower experience, and overall value.</p>
        </section>
        <FAQSection faqs={LOAN_FAQS} />
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Best Crypto Loan Platforms", "description": "Compare the best crypto loan platforms. Borrow against your Bitcoin and crypto without selling. CeFi and DeFi options with expert reviews and guides.", "url": "https://degen0x.com/crypto-loans", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-loans" />
        <ReadingTime />
      </div>
<AuthoritySources url="/crypto-loans" />
    </>
  );
}
