import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = { title: `Arbitrum vs Optimism (${CURRENT_YEAR}) | ${SITE_NAME}`, description: `Arbitrum vs Optimism comparison for ${CURRENT_YEAR}. The two leading optimistic rollups compared on TVL, DeFi ecosystem, governance, and investment potential.` };

const items = [
  { name: "Arbitrum (ARB)", slug: "arbitrum", rating: 4.5, affiliateUrl: "#", features: { "Rollup Type": "Optimistic Rollup", "Fraud Proof": "Multi-round interactive", "TPS": "~40,000 (theoretical)", "Avg Transaction Fee": "$0.01-0.10", "TVL": "#1 L2 by TVL", "Governance": "Arbitrum DAO", "Token Utility": "Governance", "Notable DApps": "GMX, Camelot, Radiant, Pendle", "Expansion Strategy": "Arbitrum Orbit (L3 chains)", "Revenue Model": "Sequencer fees to DAO treasury" } },
  { name: "Optimism (OP)", slug: "optimism", rating: 4.4, affiliateUrl: "#", features: { "Rollup Type": "Optimistic Rollup", "Fraud Proof": "Single-round non-interactive", "TPS": "~4,000 (current)", "Avg Transaction Fee": "$0.01-0.10", "TVL": "#2-3 L2 by TVL", "Governance": "Optimism Collective (Token + Citizens)", "Token Utility": "Governance + retroactive funding", "Notable DApps": "Velodrome, Synthetix, Aave, Uniswap", "Expansion Strategy": "OP Stack / Superchain", "Revenue Model": "Sequencer fees + Superchain revenue sharing" } },
];

const faqs = [
  { question: "Why does Arbitrum have more TVL?", answer: "Arbitrum launched its mainnet earlier, attracted DeFi-native builders with strong technical documentation, and benefited from GMX becoming the dominant perpetual DEX — bringing massive liquidity. Arbitrum's multi-round fraud proof system is considered more technically sophisticated, which attracted security-conscious DeFi protocols. The airdrop also drove significant user adoption and capital inflow." },
  { question: "What is the OP Stack Superchain?", answer: "The OP Stack is open-source software that allows anyone to launch their own optimistic rollup chain. The Superchain vision connects all OP Stack chains into an interoperable network sharing security and communication. Coinbase's Base, Worldcoin, and other major projects use the OP Stack, creating a growing network effect that channels value back to the Optimism ecosystem and OP token." },
  { question: "Which L2 token is better to invest in?", answer: "ARB benefits from being the governance token of the highest-TVL L2 with deep DeFi activity and DAO treasury. OP benefits from the Superchain thesis — as more chains adopt the OP Stack (Base, Zora, Mode), value accrues to the Optimism ecosystem through revenue sharing. OP has a clearer path to protocol-level revenue through Superchain fees, while ARB has stronger current DeFi metrics." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Arbitrum vs Optimism" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Arbitrum vs Optimism ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">The two dominant optimistic rollups on Ethereum represent different visions for Layer 2 scaling. Arbitrum leads in DeFi TVL and on-chain activity, while Optimism&apos;s OP Stack Superchain strategy positions it as the foundation layer for an entire ecosystem of rollup chains. Both inherit Ethereum&apos;s security but diverge on governance, expansion strategy, and value accrual.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Rollup Type", "Fraud Proof", "TPS", "Avg Transaction Fee", "TVL", "Governance", "Token Utility", "Notable DApps", "Expansion Strategy", "Revenue Model"]} title="Arbitrum vs Optimism" /></section>
      <div className="prose-crypto mb-10">
        <p>Arbitrum&apos;s dominance in DeFi TVL reflects its strong technical execution and early mover advantage in attracting blue-chip DeFi protocols. GMX pioneered the decentralized perpetual exchange model on Arbitrum, generating substantial real revenue and attracting billions in liquidity. Arbitrum Orbit extends this success by enabling Layer 3 application-specific chains that settle to Arbitrum, creating a vertical scaling stack. The Arbitrum DAO controls a significant treasury, and governance proposals increasingly focus on ecosystem incentives, revenue distribution, and protocol upgrades that could add value accrual mechanisms to the ARB token.</p>
        <p>Optimism&apos;s strategic advantage is the OP Stack and Superchain vision. By open-sourcing its rollup technology, Optimism attracted Coinbase (Base), Worldcoin, Sony, and dozens of other projects to build chains using OP Stack. This creates a network effect where every new OP Stack chain strengthens the Superchain ecosystem and contributes revenue back to the Optimism Collective. The dual governance model with Token House and Citizens House enables both token-weighted and reputation-based governance. For investors, ARB offers exposure to the leading DeFi L2 by current metrics, while OP offers exposure to the thesis that rollup-as-a-service and Superchain interoperability will define the future of Ethereum scaling.</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold mb-4">Related Content</h2><ul className="space-y-2"><li><Link href="/investing/compare/polygon-vs-arbitrum" className="text-blue-600 hover:underline">Polygon vs Arbitrum</Link></li><li><Link href="/investing/learn/layer-2-investing-guide" className="text-blue-600 hover:underline">Layer 2 Investing Guide</Link></li></ul></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
