import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import { TAX_PRODUCTS } from "@/data/taxes";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
export const metadata: Metadata = {
  title: "Free Tools — Crypto Tools",
  description: "Explore Free Tools on degen0x. Free crypto tools and in-depth analysis.",
  alternates: { canonical: "https://degen0x.com/taxes/best/free-tools" },
};


const freeToolProducts: Product[] = [
  {
    name: "TaxBit (Free Tier)",
    slug: "taxbit",
    rating: 4.5,
    description:
      "TaxBit offers free crypto tax reports through its network of partner exchanges. If you trade on a supported exchange, you can generate IRS-ready tax forms at no cost with automatic transaction importing.",
    pros: ["Completely free through partner exchanges", "IRS-compliant reports", "Automatic data import", "All cost basis methods supported"],
    cons: ["Only free through partner exchanges", "Limited DeFi support", "Fewer integrations than paid tools"],
    fees: "Free",
    bestFor: "Exchange users wanting free reports",
    affiliateUrl: "https://degen0x.com/go/taxbit",
    category: "taxes",
    featured: true,
  },
  {
    name: "Koinly (Free Portfolio Tracker)",
    slug: "koinly",
    rating: 4.8,
    description:
      "Koinly offers a free portfolio tracking tier that lets you import transactions from 800+ exchanges and wallets. While tax report generation requires a paid plan, the free tier provides excellent portfolio overview and transaction tracking.",
    pros: ["Free portfolio tracking", "800+ exchange integrations", "DeFi transaction tracking", "Unlimited transaction imports on free tier"],
    cons: ["Tax reports require paid plan", "Some features locked behind paywall", "No tax form generation on free tier"],
    fees: "Free (portfolio only)",
    bestFor: "Portfolio tracking with upgrade option",
    affiliateUrl: "https://degen0x.com/go/koinly",
    category: "taxes",
    featured: true,
  },
  {
    name: "CoinTracker (Free Tier)",
    slug: "cointracker",
    rating: 4.6,
    description:
      "CoinTracker provides a free plan for users with 25 or fewer transactions per year. The free tier includes portfolio tracking, capital gains preview, and basic tax reporting features.",
    pros: ["Free for up to 25 transactions", "Portfolio tracking included", "TurboTax integration on all tiers", "Clean interface"],
    cons: ["25 transaction limit is very restrictive", "Most users will need paid plan", "DeFi transactions count toward limit"],
    fees: "Free (25 transactions)",
    bestFor: "Low-volume investors",
    affiliateUrl: "https://degen0x.com/go/cointracker",
    category: "taxes",
  },
];

const freeFaqs = [
  {
    question: "Is there truly free crypto tax software?",
    answer:
      "Yes. TaxBit offers genuinely free tax reports through its exchange partner network. Koinly and CoinTracker have free tiers with limitations. TaxBit is the best option for completely free tax reports if you trade on a supported exchange.",
  },
  {
    question: "What are the limitations of free crypto tax tools?",
    answer:
      "Free tiers typically limit the number of transactions, restrict access to tax report generation, or only work with specific exchanges. Most free tools provide portfolio tracking but require a paid upgrade for actual tax form generation.",
  },
  {
    question: "Should I use free or paid crypto tax software?",
    answer:
      "If you have fewer than 25 transactions and only use major exchanges, a free tool may be sufficient. If you use DeFi, trade frequently, or need detailed tax reports, a paid plan from Koinly or CryptoTaxCalculator will save you time and reduce errors.",
  },
  {
    question: "Can I do my crypto taxes manually for free?",
    answer:
      "Yes, but it is extremely time-consuming. You would need to export transactions from every exchange and wallet, calculate cost basis for each trade, apply the correct tax lot method, and fill out IRS Form 8949 manually. For more than a handful of transactions, software is strongly recommended.",
  },
];

export default function BestFreeToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Best Solutions", href: "/taxes/best" },
          { label: "Free Tax Tools", href: "/taxes/best/free-tools" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Free Crypto Tax Tools ({CURRENT_YEAR})
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          You do not need to spend money to handle your crypto taxes. We have identified the
          best free and freemium crypto tax tools that help you track transactions, estimate
          your tax liability, and generate basic reports without a paid subscription.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </div>

      <AffiliateDisclosure />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Best Free Options Ranked</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto tax compliance is a mess, but ignoring it is worse. We focus on practical approaches that balance accuracy with the reality that most exchanges have incomplete records.
          </p>
        </div>
        <div className="grid gap-6">
          {freeToolProducts.map((product, i) => (
            <ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="taxes" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Free vs Paid: What You Get</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-success)] mb-3">Free Tier Features</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Portfolio tracking and overview</li>
                <li>Transaction import from exchanges</li>
                <li>Basic capital gains preview</li>
                <li>Cost basis calculation (limited)</li>
                <li>Price alerts and notifications</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-3">Paid Plan Extras</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Full tax report generation (Form 8949, Schedule D)</li>
                <li>TurboTax / H&R Block integration</li>
                <li>DeFi transaction auto-categorization</li>
                <li>NFT profit/loss tracking</li>
                <li>International tax form support</li>
                <li>Tax loss harvesting insights</li>
                <li>Priority customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Other Free Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/taxes/calculators/tax-calculator"
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover"
          >
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">Free Tax Calculator</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Estimate your crypto tax liability for free</p>
          </Link>
          <Link href="/taxes/calculators/tax-calculator"
          >
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">Capital Gains Calculator</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">Calculate capital gains on crypto trades</p>
          </Link>
        </div>
      </section>

      <FAQSection faqs={freeFaqs} />
    </main>
  );
}
