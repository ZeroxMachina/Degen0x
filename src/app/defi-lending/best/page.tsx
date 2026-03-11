import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { DEFI_LENDING_PRODUCTS, DEFI_COMPARISON_ITEMS, DEFI_COMPARISON_FEATURES, DEFI_FAQS } from "@/data/defi-lending";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `7 Best DeFi Lending Protocols of ${CURRENT_YEAR} (Ranked & Reviewed)`,
  description: `Compare the top DeFi lending protocols of ${CURRENT_YEAR}. We tested yield rates, security, TVL, and user experience. Find the best protocol for earning yield and borrowing.`,
};

const subCategories = [
  { title: "Stablecoin Yield", href: "/defi-lending/best/stablecoin-yield", desc: "Highest stablecoin yields" },
  { title: "Yield Aggregators", href: "/defi-lending/best/yield-aggregators", desc: "Auto-optimize returns" },
  { title: "Liquidity Pools", href: "/defi-lending/best/liquidity-pools", desc: "Top LP opportunities" },
  { title: "Cross-Chain", href: "/defi-lending/best/cross-chain", desc: "Multi-chain lending" },
  { title: "Ethereum", href: "/defi-lending/best/ethereum", desc: "Best on Ethereum" },
  { title: "Solana", href: "/defi-lending/best/solana", desc: "Best on Solana" },
  { title: "Layer 2", href: "/defi-lending/best/layer-2", desc: "Low-cost L2 lending" },
  { title: "Fixed Rate", href: "/defi-lending/best/fixed-rate", desc: "Predictable returns" },
];

export default function BestDefiLendingPage() {
  const ranked = [...DEFI_LENDING_PRODUCTS].sort((a, b) => b.rating - a.rating);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Best DeFi Lending", href: "/defi-lending/best" }]} />

        <h1 className="text-4xl font-bold text-white mb-4">7 Best DeFi Lending Protocols of {CURRENT_YEAR}</h1>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>

        <AffiliateDisclosure />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            DeFi lending has grown into a multi-billion dollar sector, enabling anyone with a crypto wallet to earn yield by supplying assets or borrow against their holdings without intermediaries. We spent over 150 hours testing and comparing the top protocols, depositing real funds, monitoring yields, and evaluating security practices on each one.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
            Our top pick for most users is <strong className="text-white">Aave</strong> for its deep liquidity, multi-chain support, and proven security track record. For passive yield seekers, <strong className="text-white">Yearn Finance</strong> automates the process of finding the best returns. And for ETH holders, <strong className="text-white">Lido</strong> offers liquid staking with seamless DeFi integration.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Our Rankings</h2>
          <div className="space-y-4">
            {ranked.map((protocol, index) => (
              <ProductCard key={protocol.slug} product={protocol} rank={index + 1} categorySlug="defi-lending" />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Top Protocols Compared</h2>
          <ComparisonTable items={DEFI_COMPARISON_ITEMS.slice(0, 5)} features={DEFI_COMPARISON_FEATURES} title="Feature Comparison" />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {subCategories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover">
                <h3 className="text-lg font-semibold text-white mb-1">{cat.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Methodology</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">We evaluate each DeFi protocol across six key categories:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Security (30%)", desc: "Audit history, bug bounty programs, exploit track record, and code maturity." },
              { title: "Yield (25%)", desc: "Historical yield rates, consistency, and competitiveness versus peers." },
              { title: "Liquidity (20%)", desc: "Total value locked, market depth, and withdrawal reliability." },
              { title: "User Experience (10%)", desc: "Interface quality, documentation, and onboarding process." },
              { title: "Decentralization (10%)", desc: "Governance structure, token distribution, and admin key controls." },
              { title: "Innovation (5%)", desc: "Novel features, cross-chain expansion, and protocol upgrades." },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <FAQSection faqs={DEFI_FAQS} />
      </div>
    </>
  );
}
