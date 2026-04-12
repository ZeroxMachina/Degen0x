import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import { TAX_PRODUCTS, TAX_FAQS } from "@/data/taxes";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Tax Software & Guides (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Navigate crypto taxes with confidence. Compare the best crypto tax software, read expert reviews, use free calculators, and learn how cryptocurrency is taxed in ${CURRENT_YEAR}.`,
};

const subcategories = [
  { name: "Best Tax Software", href: "/taxes/best/software", description: "Top-rated crypto tax software compared" },
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

export default function TaxesHubPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
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
    </main>
  );
}
