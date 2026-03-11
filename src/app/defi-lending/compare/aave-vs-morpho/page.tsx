import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `Aave vs Morpho ${CURRENT_YEAR}: Which DeFi Lending Protocol Is Better?`,
  description: `Detailed comparison of Aave vs Morpho in ${CURRENT_YEAR}. Compare yields, architecture, risk models, supported assets, and which protocol optimizes your DeFi lending returns.`,
};

const items: ComparisonItem[] = [
  { name: "Aave", slug: "aave", rating: 4.8, affiliateUrl: "https://cryptodegen.com/go/aave", features: { "TVL": "$15B+", "Chains": "10+", "Architecture": "Pool-based V3", "Rate Model": "Variable + Stable", "Risk Approach": "Shared pool risk", "Governance Token": "AAVE", "Yield Optimization": "Manual", "Unique Feature": "Flash loans, eMode" } },
  { name: "Morpho", slug: "morpho", rating: 4.7, affiliateUrl: "https://cryptodegen.com/go/morpho", features: { "TVL": "$5B+", "Chains": "Ethereum, Base", "Architecture": "Peer-to-peer matching + vaults", "Rate Model": "Optimized variable", "Risk Approach": "Isolated vault risk", "Governance Token": "MORPHO", "Yield Optimization": "Automatic", "Unique Feature": "Rate optimization layer" } },
];

const features = ["TVL", "Chains", "Architecture", "Rate Model", "Risk Approach", "Governance Token", "Yield Optimization", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Is Morpho better than Aave for yields?", answer: "Morpho was originally designed to optimize rates on top of Aave and Compound by matching lenders and borrowers peer-to-peer when possible. Morpho Blue and Morpho Vaults now offer independent lending markets with competitive rates. In many cases, Morpho provides better rates for both lenders and borrowers compared to using Aave directly, though this depends on the specific market and asset." },
  { question: "Can I use Morpho and Aave together?", answer: "Yes. Many DeFi users deposit in Morpho vaults that may allocate to Aave markets as part of their strategy. You can also use Aave for assets or chains that Morpho does not support. Diversifying across both protocols reduces smart contract risk exposure and lets you access the best rates available across the ecosystem." },
  { question: "Is Morpho safe to use?", answer: "Morpho has been extensively audited and has processed billions in lending volume without a major exploit. Morpho Blue uses a minimal, immutable smart contract design that reduces attack surface. However, Morpho Vaults introduce curator risk, as vault managers choose which markets to allocate to. Always verify the vault curator's reputation and risk parameters before depositing." },
  { question: "What is Morpho Blue?", answer: "Morpho Blue is Morpho's base lending protocol with a minimal, permissionless smart contract. Anyone can create isolated lending markets with custom collateral, loan assets, oracles, and risk parameters. It is the foundation layer on top of which Morpho Vaults and other applications are built. Think of it as primitive lending infrastructure that others can build on." },
  { question: "Which protocol has better multi-chain support?", answer: "Aave has significantly broader multi-chain support with deployments on 10+ chains including Ethereum, Arbitrum, Optimism, Base, Polygon, and Avalanche. Morpho is currently available on Ethereum and Base. If you need to lend or borrow on chains beyond those two, Aave is the more accessible choice." },
];

export default function AaveVsMorphoPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/aave-vs-compound" }, { label: "Aave vs Morpho", href: "/defi-lending/compare/aave-vs-morpho" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">Aave vs Morpho: Full Comparison ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Aave is the largest DeFi lending protocol by TVL, while Morpho has emerged as a powerful rate optimization and lending infrastructure layer. Originally built to improve rates on top of Aave and Compound, Morpho has evolved into a standalone lending ecosystem with Morpho Blue and Morpho Vaults. This comparison helps you understand which protocol, or combination of both, best suits your lending and borrowing needs.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-white">The short answer:</strong> Aave is better for users who want broad multi-chain access, a proven track record, and the widest asset selection. Morpho is better for users seeking optimized yields, isolated risk markets, and a more modular lending experience. Many sophisticated DeFi users benefit from using both.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Aave vs Morpho Feature Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Architecture and Design Philosophy</h3>
        <p className="text-[var(--color-text-secondary)]">Aave V3 uses a pool-based model where all assets share liquidity within a market. This provides deep liquidity and broad asset support but means all depositors share exposure to every asset in the pool. Morpho Blue takes a fundamentally different approach with isolated markets where each lending pair has independent risk parameters. Morpho Vaults add a curation layer that aggregates across multiple Morpho Blue markets.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Yield Optimization</h3>
        <p className="text-[var(--color-text-secondary)]">Morpho&apos;s original innovation was matching lenders and borrowers peer-to-peer to offer improved rates versus the pool model. With Morpho Vaults, this optimization continues through curated allocation strategies that direct deposits to the highest-yielding Morpho Blue markets. Aave relies on its utilization-based interest rate model without active optimization. For passive yield-seekers, Morpho Vaults often provide a superior experience.</p>
        <h3 className="text-xl font-bold text-white mt-6 mb-3">Risk Management Approach</h3>
        <p className="text-[var(--color-text-secondary)]">Aave&apos;s shared pool model means a problem with any single asset could theoretically affect all depositors. Aave mitigates this with conservative listing criteria, eMode for correlated assets, and isolation mode for riskier tokens. Morpho Blue&apos;s isolated markets mean risk is contained: a bad oracle or collateral issue in one market cannot affect others. This makes Morpho more flexible in supporting riskier assets while protecting users in other markets.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
