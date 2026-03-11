import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = { title: `MakerDAO vs Compound ${CURRENT_YEAR}: DeFi Borrowing Compared`, description: `Compare MakerDAO vs Compound for crypto borrowing in ${CURRENT_YEAR}. Analyze DAI minting vs pool-based borrowing, rates, collateral, and more.` };

const items: ComparisonItem[] = [
  { name: "MakerDAO", slug: "makerdao", rating: 4.6, affiliateUrl: "https://cryptodegen.com/go/makerdao", features: { "Model": "Stablecoin minting", "Borrowable Assets": "DAI only", "Collateral Types": "30+ (including RWAs)", "Rate Type": "Governance-set stability fee", "Liquidation": "Dutch auction system", "Governance": "MKR token", "Unique Feature": "Creates new DAI (no liquidity constraint)" } },
  { name: "Compound", slug: "compound-loans", rating: 4.5, affiliateUrl: "https://cryptodegen.com/go/compound", features: { "Model": "Pool-based lending", "Borrowable Assets": "Multiple (USDC, ETH, etc.)", "Collateral Types": "20+ per market", "Rate Type": "Algorithmic variable rate", "Liquidation": "Absorption mechanism", "Governance": "COMP token", "Unique Feature": "Isolated risk per market (V3)" } },
];

const features = ["Model", "Borrowable Assets", "Collateral Types", "Rate Type", "Liquidation", "Governance", "Unique Feature"];

const faqs: FAQ[] = [
  { question: "Should I use MakerDAO or Compound?", answer: "Use MakerDAO if you specifically want to borrow DAI with predictable governance-set rates. Use Compound if you want to borrow USDC, ETH, or other assets with more flexibility. MakerDAO is best for DAI-native strategies; Compound is better for general-purpose borrowing." },
  { question: "Which has lower rates?", answer: "It depends on the current governance decisions for MakerDAO and market conditions for Compound. MakerDAO stability fees can be very competitive when governance sets favorable terms. Compound rates are market-driven and can be lower during low-demand periods." },
];

export default function MakerdaoVsCompoundPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Loans", href: "/crypto-loans" }, { label: "Compare", href: "/crypto-loans/compare/makerdao-vs-compound" }, { label: "MakerDAO vs Compound", href: "/crypto-loans/compare/makerdao-vs-compound" }]} />
      <h1 className="text-4xl font-bold text-white mb-4">MakerDAO vs Compound ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">MakerDAO and Compound represent two different DeFi borrowing models. MakerDAO lets you mint DAI stablecoins directly against collateral (creating new tokens). Compound uses pool-based lending where you borrow from depositor liquidity. Each model has distinct advantages depending on your use case.</p>
      </div>
      <section className="mb-12"><ComparisonTable items={items} features={features} title="MakerDAO vs Compound" /></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
