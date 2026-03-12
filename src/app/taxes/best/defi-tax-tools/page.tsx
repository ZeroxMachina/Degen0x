import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: `Best DeFi Tax Tools (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Compare the best DeFi tax tools for ${CURRENT_YEAR}. Track yield farming, liquidity pools, staking rewards, token swaps, and complex DeFi transactions for tax reporting.`,
};

const defiTaxProducts: Product[] = [
  {
    name: "CryptoTaxCalculator",
    slug: "cryptotaxcalculator",
    rating: 4.7,
    description:
      "CryptoTaxCalculator leads the market in DeFi tax support with automatic detection and categorization of complex DeFi transactions across hundreds of protocols on every major blockchain.",
    pros: ["Best-in-class DeFi categorization", "Supports 100+ DeFi protocols", "Automatic yield farming tracking", "NFT and liquidity pool support"],
    cons: ["No free tier for tax reports", "Can be complex for DeFi beginners", "Higher pricing for advanced features"],
    fees: "From $49/year",
    bestFor: "DeFi power users",
    affiliateUrl: "https://degen0x.com/go/cryptotaxcalculator",
    category: "taxes",
    featured: true,
  },
  {
    name: "Koinly",
    slug: "koinly",
    rating: 4.8,
    description:
      "Koinly provides strong DeFi tax support with automatic tracking for most major protocols. Its broad exchange integration base combined with solid DeFi handling makes it a great all-around choice.",
    pros: ["Good DeFi protocol coverage", "800+ total integrations", "Automatic cost basis for DeFi", "Staking reward tracking"],
    cons: ["DeFi support not as deep as CryptoTaxCalculator", "Some protocols need CSV import", "Complex DeFi may need manual review"],
    fees: "From $49/year",
    bestFor: "Mixed CeFi/DeFi portfolios",
    affiliateUrl: "https://degen0x.com/go/koinly",
    category: "taxes",
    featured: true,
  },
  {
    name: "TokenTax",
    slug: "tokentax",
    rating: 4.4,
    description:
      "TokenTax combines DeFi tax software with access to CPAs who understand decentralized finance. Ideal for complex DeFi portfolios that need professional review alongside automated tracking.",
    pros: ["CPA review for complex DeFi taxes", "Handles margin and leveraged positions", "Full-service filing option", "Good protocol coverage"],
    cons: ["Most expensive option", "Fewer automated DeFi integrations", "CPA wait times during tax season"],
    fees: "From $65/year",
    bestFor: "Complex DeFi with CPA needs",
    affiliateUrl: "https://degen0x.com/go/tokentax",
    category: "taxes",
  },
];

const faqs = [
  {
    question: "How are DeFi transactions taxed?",
    answer: "DeFi transactions are taxed similarly to other crypto activities. Token swaps on DEXs are taxable trades. Yield farming and liquidity pool rewards are typically income. Adding and removing liquidity can trigger capital gains. Interest earned from lending is ordinary income. Each protocol interaction may create multiple taxable events.",
  },
  {
    question: "Which DeFi tax tool is best for yield farming?",
    answer: "CryptoTaxCalculator is the best tool for yield farming tax tracking. It automatically detects yield farming positions, calculates rewards as income, and tracks the cost basis of farming tokens across protocols like Yearn, Curve, and Convex.",
  },
  {
    question: "Do I need to report DeFi income under $600?",
    answer: "Yes. All crypto income is reportable regardless of the amount. There is no minimum threshold for reporting cryptocurrency income in the US. Even small amounts from staking, yield farming, or airdrops must be reported on your tax return.",
  },
  {
    question: "How do I track gas fees for DeFi taxes?",
    answer: "Gas fees paid for DeFi transactions can be added to your cost basis (for buys) or subtracted from proceeds (for sells). Most DeFi tax tools automatically track gas fees from on-chain data. Gas fees for failed transactions may also be deductible as investment expenses.",
  },
];

export default function BestDefiTaxToolsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Best Solutions", href: "/taxes/best" },
          { label: "DeFi Tax Tools", href: "/taxes/best/defi-tax-tools" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best DeFi Tax Tools ({CURRENT_YEAR})
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          DeFi creates some of the most complex tax situations in crypto. From yield farming
          and liquidity pools to staking rewards and token swaps, you need specialized tools
          that understand decentralized finance protocols and can accurately categorize
          every transaction.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </div>

      <AffiliateDisclosure />

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top DeFi Tax Tools</h2>
        <div className="grid gap-6">
          {defiTaxProducts.map((product, i) => (
            <ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="taxes" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">DeFi Tax Scenarios These Tools Handle</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "Token Swaps (DEX)", desc: "Every swap on Uniswap, SushiSwap, or other DEXs is a taxable disposal of one asset and acquisition of another." },
            { title: "Yield Farming", desc: "Farming rewards are taxed as ordinary income at their fair market value when received." },
            { title: "Liquidity Pools", desc: "Adding/removing liquidity can create taxable events. LP token minting and burning may trigger gains." },
            { title: "Staking Rewards", desc: "Staking income is taxed as ordinary income. The cost basis is the fair market value when rewards are received." },
            { title: "Lending Interest", desc: "Interest earned from lending on Aave, Compound, or similar protocols is ordinary income." },
            { title: "Airdrops & Governance", desc: "Airdrops are taxed as income. Governance token rewards from voting or participation are also income." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Related Guides</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/taxes/learn/defi-taxes" className="text-sm text-[var(--color-primary)] hover:underline">DeFi Taxes Guide &#8594;</Link>
          <Link href="/taxes/learn/staking-taxes" className="text-sm text-[var(--color-primary)] hover:underline">Staking Taxes &#8594;</Link>
          <Link href="/taxes/learn/tax-loss-harvesting" className="text-sm text-[var(--color-primary)] hover:underline">Tax Loss Harvesting &#8594;</Link>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </main>
  );
}
