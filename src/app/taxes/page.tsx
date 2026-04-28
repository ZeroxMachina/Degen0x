import type { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import { TAX_PRODUCTS, TAX_FAQS } from "@/data/taxes";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import AuthoritySources from '@/components/AuthoritySources';

import ArticleSchema from "@/components/ArticleSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

export const metadata: Metadata = {
  title: `Best Crypto Tax Software & Guides (2026) | degen0x`,
  description: `Navigate crypto taxes with confidence. Compare the best crypto tax software, read expert reviews, use free calculators, and learn how cryptocurrency is taxed in ${CURRENT_YEAR}.`,
  alternates: { canonical: "/taxes" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const subcategories = [
  { name: "Best Tax Software", href: "/taxes/best/software", description: "Crypto tax guide and calculator tools. Calculate tax liabilities on Bitcoin, Ethereum, DeFi, staking, NFTs. Compare tax strategies and US tax software." },
  { name: "Free Tax Tools", href: "/taxes/best/free-tools", description: "Best free crypto tax tools and calculators" },
  { name: "Crypto CPAs", href: "/taxes/best/accountants", description: "Find crypto-specialized accountants" },
  { name: "DeFi Tax Tools", href: "/taxes/best/defi-tax-tools", description: "Best tools for DeFi tax reporting" },
];

const guides = [
  { name: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide" },
  { name: "How Crypto Is Taxed", href: "/taxes/learn/how-crypto-is-taxed" },
  { name: "Capital Gains Explained", href: "/taxes/learn/capital-gains" },
  { name: "Tax Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting" },
  { name: "DeFi Taxes", href: "/taxes/learn/defi-taxes" },
  { name: "Staking Taxes", href: "/taxes/learn/staking-taxes" },
  { name: "Airdrop Taxes", href: "/taxes/learn/airdrop-taxes" },
  { name: "NFT Taxes", href: "/taxes/learn/nft-taxes" },
  { name: "Mining Taxes", href: "/taxes/learn/mining-taxes" },
  { name: "How to File", href: "/taxes/learn/how-to-file" },
  { name: "IRS Form 8949", href: "/taxes/learn/irs-form-8949" },
  { name: "Reporting Requirements", href: "/taxes/learn/reporting-requirements" },
  { name: "Cost Basis Methods", href: "/taxes/learn/cost-basis-methods" },
  { name: "Wash Sale Rule", href: "/taxes/learn/wash-sale-rule" },
];

const calculators = [
  { name: "Crypto Tax Calculator", href: "/taxes/calculators/tax-calculator", description: "Estimate your crypto tax liability" },
  { name: "Capital Gains Calculator", href: "/taxes/calculators/capital-gains-calculator", description: "Calculate short and long-term capital gains" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Taxes', },
  ],
};

export default function TaxesHubPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ArticleSchema
        headline="Guides"
        description="Crypto tax guide and calculator tools. Calculate tax liabilities on Bitcoin, Ethereum, DeFi, staking, NFTs. Compare tax strategies and US tax software."
        url="/taxes"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="taxes"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Crypto Taxes Hub
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl">
          Everything you need to handle your cryptocurrency taxes. Compare tax software,
          read expert reviews, learn how crypto is taxed, and use our free calculators
          to estimate your tax liability for {CURRENT_YEAR}.
        </p>
      </div>

      <AffiliateDisclosure />

      {/* Top Products */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Top Crypto Tax Software
        </h2>
        <div className="grid gap-6">
          {TAX_PRODUCTS.filter((p) => p.featured).map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              rank={i + 1}
              categorySlug="taxes"
            />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/taxes/best/software"
            className="inline-block px-6 py-3 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)]/10 transition-colors"
          >
            View All Tax Software
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Browse by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subcategories.map((cat) => (
            <Link href="/taxes/best/software"
              key={cat.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{cat.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Tax Guides & Education</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((guide) => (
            <Link href="/taxes/best/software"
              key={guide.href}
              className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"
            >
              <span className="text-[var(--color-primary)]">&#8594;</span>
              <span className="text-sm font-medium text-[var(--color-text)]">{guide.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculators */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Tax Calculators</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {calculators.map((calc) => (
            <Link href="/taxes/best/software"
              key={calc.href}
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{calc.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{calc.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews Links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Software Reviews</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TAX_PRODUCTS.map((product) => (
            <Link href="/taxes/best/software"
              key={product.slug}
              className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"
            >
              <span className="text-sm font-medium text-[var(--color-text)]">{product.name} Review</span>
              <span className="text-xs text-[var(--color-text-secondary)]">{product.rating}/5</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparisons */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Head-to-Head Comparisons</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/taxes/best/software"
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"
          >
            <span className="text-sm font-medium text-[var(--color-text)]">Koinly vs CoinTracker</span>
          </Link>
          <Link href="/taxes/best/software"
          >
            <span className="text-sm font-medium text-[var(--color-text)]">TaxBit vs CoinTracker</span>
          </Link>
          <Link href="/taxes/best/software"
          >
            <span className="text-sm font-medium text-[var(--color-text)]">Koinly vs CryptoTaxCalculator</span>
          </Link>
        </div>
      </section>

      <FAQSection faqs={TAX_FAQS} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Taxes", "description": "Top-rated crypto tax software compared", "url": "https://degen0x.com/taxes", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/offline" style={{ color: "#fb923c", marginRight: "1rem" }}>Offline</a>
        
          <a href="/referral" style={{ color: "#fb923c", marginRight: "1rem" }}>Referral</a>
        
          <a href="/pricing" style={{ color: "#fb923c", marginRight: "1rem" }}>Pricing</a>
        </nav>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/taxes" />
        <ReadingTime />
      </div>
<AuthoritySources url="/taxes" />
    </main>
  );
}
