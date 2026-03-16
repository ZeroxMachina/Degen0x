import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = { title: `Polygon vs Arbitrum (${CURRENT_YEAR}) | ${SITE_NAME}`, description: `Polygon vs Arbitrum comparison for ${CURRENT_YEAR}. Two leading Ethereum scaling solutions compared on speed, fees, DeFi ecosystem, and token investment thesis.` };

const items = [
  { name: "Polygon (POL)", slug: "polygon", rating: 4.4, affiliateUrl: "#", features: { "Scaling Type": "Multi-solution (PoS, zkEVM, CDK)", "Technology": "PoS sidechain + ZK rollups", "TPS": "~7,000 (PoS chain)", "Avg Transaction Fee": "$0.001-0.01", "EVM Compatibility": "Full", "TVL": "Top 5 L2 ecosystem", "Token": "POL (upgraded from MATIC)", "Security Model": "Own validator set (PoS) + Ethereum (zkEVM)", "Major Partners": "Starbucks, Nike, Disney, Reddit", "Development Kit": "Polygon CDK for app-chains" } },
  { name: "Arbitrum (ARB)", slug: "arbitrum", rating: 4.5, affiliateUrl: "#", features: { "Scaling Type": "Optimistic Rollup", "Technology": "Fraud proofs on Ethereum", "TPS": "~40,000 (theoretical)", "Avg Transaction Fee": "$0.01-0.10", "EVM Compatibility": "Full (Nitro)", "TVL": "#1 L2 by TVL", "Token": "ARB (governance)", "Security Model": "Inherits Ethereum security", "Major Partners": "Uniswap, Aave, GMX, Treasure", "Development Kit": "Arbitrum Orbit for L3 chains" } },
];

const faqs = [
  { question: "Which has better security?", answer: "Arbitrum inherits Ethereum's full security through its optimistic rollup design — all transactions are ultimately settled and verified on Ethereum mainnet. Polygon PoS uses its own validator set which provides lower security guarantees than Ethereum but offers faster finality. Polygon's zkEVM provides Ethereum-level security through zero-knowledge proofs. The security comparison depends on which Polygon product you're evaluating." },
  { question: "Why does Arbitrum have higher TVL?", answer: "Arbitrum attracted the largest DeFi protocols early — GMX became the dominant perpetual DEX, Uniswap and Aave deployed major versions, and the ecosystem developed strong DeFi composability. Arbitrum's direct security inheritance from Ethereum gave DeFi protocols confidence to deploy significant capital. The Arbitrum DAO and incentive programs further accelerated adoption." },
  { question: "Which token is a better investment?", answer: "ARB is primarily a governance token for the Arbitrum DAO treasury and protocol decisions. POL (formerly MATIC) has broader utility across Polygon's multi-chain ecosystem including staking, gas fees, and governance. POL benefits from Polygon's enterprise partnerships and diverse product suite, while ARB benefits from being the governance token of the highest-TVL L2 with strong DeFi activity." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Polygon vs Arbitrum" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Polygon vs Arbitrum ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">The two largest Ethereum scaling ecosystems take different approaches to solving blockchain throughput limitations. Polygon offers a suite of scaling solutions from PoS sidechains to zkEVM rollups, while Arbitrum focuses on optimistic rollup technology inheriting Ethereum&apos;s full security. Both have massive ecosystems but serve somewhat different markets and use cases.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Scaling Type", "Technology", "TPS", "Avg Transaction Fee", "EVM Compatibility", "TVL", "Token", "Security Model", "Major Partners", "Development Kit"]} title="Polygon vs Arbitrum" /></section>
      <div className="prose-crypto mb-10">
        <p>Polygon has evolved from a single PoS sidechain into a comprehensive scaling ecosystem. The Polygon CDK allows projects to launch custom ZK-powered chains, while Polygon zkEVM provides a fully EVM-compatible ZK rollup with Ethereum-level security. Polygon&apos;s enterprise partnerships are unmatched in crypto — Starbucks, Nike, Reddit, and Disney have built on Polygon. The POL token upgrade from MATIC expands token utility across the entire multi-chain ecosystem. This breadth makes Polygon a diversified bet on Ethereum scaling rather than a single technology play.</p>
        <p>Arbitrum&apos;s focused approach has made it the undisputed leader in DeFi-focused Layer 2 scaling. By inheriting Ethereum&apos;s security through optimistic rollups, Arbitrum provides the strongest security guarantees among scaling solutions, which is why major DeFi protocols chose it for deployment. GMX&apos;s success on Arbitrum demonstrated that L2-native applications can become category leaders. Arbitrum Orbit extends this model to Layer 3 application-specific chains. For investors, the choice reflects a preference: Polygon for enterprise adoption and multi-chain scaling breadth, or Arbitrum for DeFi dominance and Ethereum security inheritance.</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold mb-4">Related Content</h2><ul className="space-y-2"><li><Link href="/investing/compare/arbitrum-vs-optimism" className="text-blue-600 hover:underline">Arbitrum vs Optimism</Link></li><li><Link href="/investing/learn/layer-2-investing-guide" className="text-blue-600 hover:underline">Layer 2 Investing Guide</Link></li></ul></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
