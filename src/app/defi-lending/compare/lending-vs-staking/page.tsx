import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { ComparisonItem, FAQ } from "@/lib/types";

export const metadata: Metadata = {
  title: `DeFi Lending vs Staking ${CURRENT_YEAR}: Which Earns More?`,
  description: `Compare DeFi lending vs staking in ${CURRENT_YEAR}. Analyze yields, risks, lock-up periods, and which passive income strategy is better for your portfolio.`,
};

const items: ComparisonItem[] = [
  { name: "DeFi Lending", slug: "defi-lending", rating: 4.5, affiliateUrl: "https://degen0x.com/go/aave", features: { "Typical Yields": "3-8% stablecoins", "Lock-up Period": "None (instant withdrawal)", "Risk Type": "Smart contract, utilization", "Assets Supported": "Any listed token", "Complexity": "Low to moderate", "Composability": "High (receipt tokens)", "Reward Source": "Borrower interest payments", "Best For": "Stablecoin yield, flexibility" } },
  { name: "Staking", slug: "defi-lending", rating: 4.4, affiliateUrl: "https://degen0x.com/go/lido", features: { "Typical Yields": "3-5% ETH, varies by chain", "Lock-up Period": "Variable (days to weeks)", "Risk Type": "Slashing, validator risk", "Assets Supported": "PoS native tokens only", "Complexity": "Low", "Composability": "High (liquid staking)", "Reward Source": "Network validation rewards", "Best For": "Long-term holders, ETH yield" } },
];

const features = ["Typical Yields", "Lock-up Period", "Risk Type", "Assets Supported", "Complexity", "Composability", "Reward Source", "Best For"];

const faqs: FAQ[] = [
  { question: "Can I do both lending and staking?", answer: "Yes, and many users combine both through liquid staking. Stake ETH to receive stETH, then deposit stETH into a lending protocol to earn staking rewards plus lending interest simultaneously. This stacking of yield sources is a popular DeFi strategy." },
  { question: "Which is safer?", answer: "Both carry distinct risks. Staking risk includes slashing penalties and validator downtime, but these are rare on major platforms. Lending risk includes smart contract exploits and temporary liquidity issues. Neither is inherently safer; they have different risk profiles that complement each other in a diversified portfolio." },
  { question: "Which offers higher yields?", answer: "It depends on market conditions. During high borrowing demand, lending rates can spike above staking returns. During calm markets, staking provides more consistent yields. Combining both through liquid staking and lending typically provides the highest total yield with manageable risk." },
];

export default function LendingVsStakingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "DeFi Lending", href: "/defi-lending" }, { label: "Compare", href: "/defi-lending/compare/lending-vs-staking" }, { label: "Lending vs Staking", href: "/defi-lending/compare/lending-vs-staking" }]} />
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">DeFi Lending vs Staking ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Lending and staking are the two primary passive income strategies in DeFi. Lending earns interest from borrowers, while staking earns rewards from blockchain validation. Both offer competitive yields with different risk profiles, lock-up requirements, and asset coverage. This comparison helps you decide how to allocate between these complementary strategies.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">The short answer:</strong> Use lending for stablecoin yield and maximum flexibility. Use staking for long-term ETH or PoS token holdings. Combine both through liquid staking derivatives for optimal risk-adjusted returns.
        </p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={items} features={features} title="Lending vs Staking Comparison" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Detailed Analysis</h2>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Yield Sources</h3>
        <p className="text-[var(--color-text-secondary)]">Lending yields come from borrower interest payments, which are driven by demand for leverage and liquidity. These yields fluctuate with market activity. Staking yields come from blockchain validation rewards, which are more predictable and tied to network monetary policy. ETH staking currently yields around 3-4% APY from protocol issuance plus tips. The stability of staking yields versus the variability of lending yields makes them complementary in a portfolio.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Liquid Staking Synergy</h3>
        <p className="text-[var(--color-text-secondary)]">Liquid staking tokens like Lido's stETH and Rocket Pool's rETH have created a powerful synergy between staking and lending. By converting staked ETH into a liquid token, you can deposit it into lending protocols as collateral, earning staking rewards while also borrowing or earning additional lending yield. This composability is a key advantage of DeFi and is not possible in traditional staking setups.</p>
        <h3 className="text-xl font-bold text-[var(--color-text)] mt-6 mb-3">Asset Coverage</h3>
        <p className="text-[var(--color-text-secondary)]">Lending supports any token listed on lending protocols, including stablecoins, governance tokens, and wrapped assets. Staking is limited to proof-of-stake native tokens like ETH, SOL, ATOM, and DOT. If you hold stablecoins or non-PoS tokens, lending is your only option for earning yield on those assets. If you hold ETH or other PoS tokens long-term, staking provides a natural yield source that does not depend on external borrowing demand.</p>
      </section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
