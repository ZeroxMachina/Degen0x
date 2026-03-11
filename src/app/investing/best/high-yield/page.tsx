import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Best High-Yield Crypto Investments (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top high-yield cryptocurrency opportunities in ${CURRENT_YEAR}. Compare staking, lending, and DeFi yield options with risk-adjusted analysis.`,
};

const products = [
  { name: "Lido Staked ETH (stETH)", slug: "lido", rating: 4.7, description: "The largest liquid staking protocol offering ETH staking yield (3-5% APY) while maintaining liquidity. stETH can be used across DeFi for additional yield.", pros: ["Largest liquid staking TVL", "Ethereum staking rewards with liquidity", "Composable across DeFi"], cons: ["Smart contract risk", "Staking reward rate varies", "Slight depeg risk in extreme markets"], bestFor: "Passive ETH staking with DeFi composability", affiliateUrl: "#", category: "investing" },
  { name: "Aave Stablecoin Lending", slug: "aave-lending", rating: 4.5, description: "Earn 3-8% on USDC and USDT by lending through Aave, the most established decentralized lending protocol with billions in TVL and strong audit history.", pros: ["Battle-tested protocol security", "Variable rates respond to demand", "Multi-chain deployment options"], cons: ["Rates fluctuate with market conditions", "Smart contract risk", "No deposit insurance"], bestFor: "Stablecoin yield with established protocol security", affiliateUrl: "#", category: "investing" },
  { name: "Pendle Fixed Yield", slug: "pendle-yield", rating: 4.4, description: "Lock in fixed yields on various DeFi assets through Pendle's yield tokenization. Separate yield from principal to trade and secure predictable returns.", pros: ["Fixed-rate yield options", "Innovative yield trading", "Multiple underlying assets"], cons: ["Complex mechanism", "Locked until maturity for fixed rates", "Smart contract risk"], bestFor: "Fixed-rate DeFi yield strategies", affiliateUrl: "#", category: "investing" },
  { name: "Cosmos Staking (ATOM)", slug: "cosmos-staking", rating: 4.3, description: "Stake ATOM for 15-20% APY while participating in Cosmos ecosystem governance. Higher yields than Ethereum staking with active IBC ecosystem participation.", pros: ["Higher staking yields than ETH", "Governance participation", "Growing IBC ecosystem"], cons: ["21-day unbonding period", "Inflation-funded rewards", "Slashing risk"], bestFor: "High-yield proof-of-stake staking", affiliateUrl: "#", category: "investing" },
  { name: "Curve Stablecoin Pools", slug: "curve-pools", rating: 4.3, description: "Provide liquidity to Curve's stablecoin pools earning swap fees plus CRV rewards. Minimal impermanent loss risk due to stable asset pairs.", pros: ["Low impermanent loss on stable pairs", "Swap fees plus CRV incentives", "Deep liquidity pools"], cons: ["CRV reward sustainability", "Complex gauge voting mechanics", "Smart contract risk"], bestFor: "Stablecoin liquidity provision with low IL risk", affiliateUrl: "#", category: "investing" },
];

const faqs = [
  { question: "Are high crypto yields sustainable?", answer: "Yields from protocol fees and staking rewards can be sustainable when backed by genuine economic activity. Yields from token incentive programs typically decline over time as emissions decrease. Be skeptical of yields above 20% — they usually indicate either temporary incentives, high risk, or unsustainable economics." },
  { question: "What is a good yield in crypto?", answer: "Sustainable yields range from 3-8% for stablecoins and 3-15% for staking, depending on the network. Yields consistently above 15% likely involve higher risk or temporary incentives. Compare yields against the risk-free rate (US Treasury yields) to assess whether the additional risk is adequately compensated." },
  { question: "Can I lose money chasing yield?", answer: "Yes. Smart contract exploits, stablecoin depegs, impermanent loss, and protocol failures can result in losing deposited capital. The 2022 CeFi lending collapse (Celsius, BlockFi) showed that high yields can mask fatal risks. Never invest more than you can afford to lose in yield strategies." },
];

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Best High-Yield Crypto" }]} />
      <AffiliateDisclosure />
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Best High-Yield Crypto Investments ({CURRENT_YEAR})</h1>
        <p className="text-gray-600">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
        <p className="mt-4 text-lg">Generate passive income on your crypto holdings through staking, lending, and DeFi yield strategies. We prioritized sustainable yields from established protocols over flashy APYs from unproven platforms.</p>
      </header>
      <div className="space-y-6 mb-12">
        {products.map((product, i) => (<ProductCard key={product.slug} product={product} rank={i + 1} categorySlug="investing" />))}
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li><Link href="/investing/learn/yield-farming-vs-staking" className="text-blue-600 hover:underline">Yield Farming vs Staking</Link></li>
          <li><Link href="/investing/learn/stablecoin-investing-guide" className="text-blue-600 hover:underline">Stablecoin Investing Guide</Link></li>
          <li><Link href="/investing/learn/crypto-lending-as-investment" className="text-blue-600 hover:underline">Crypto Lending as Investment</Link></li>
        </ul>
      </section>
      <FAQSection faqs={faqs} />
    </main>
  );
}
