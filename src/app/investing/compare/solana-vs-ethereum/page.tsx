import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = { title: `Solana vs Ethereum (${CURRENT_YEAR}) | ${SITE_NAME}`, description: `Solana vs Ethereum comparison for ${CURRENT_YEAR}. Speed, fees, DeFi ecosystem, developer activity, and investment thesis compared.` };

const items = [
  { name: "Solana (SOL)", slug: "solana", rating: 4.6, affiliateUrl: "#", features: { "Consensus": "Proof-of-History + PoS", "TPS (Theoretical)": "65,000+", "Block Time": "~400ms", "Avg Transaction Fee": "<$0.01", "TVL": "Growing rapidly", "Smart Contract Language": "Rust / Anchor", "Staking Yield": "5-8%", "Network Uptime": "Improving (past outages)", "Validator Count": "~2,000", "ETF Available": "Not yet" } },
  { name: "Ethereum (ETH)", slug: "ethereum", rating: 4.8, affiliateUrl: "#", features: { "Consensus": "Proof-of-Stake", "TPS (Theoretical)": "~30 (L1), 100K+ (with L2s)", "Block Time": "~12 seconds", "Avg Transaction Fee": "$1-50 (mainnet)", "TVL": "Largest in crypto", "Smart Contract Language": "Solidity / Vyper", "Staking Yield": "3-5%", "Network Uptime": "100% since launch", "Validator Count": "~900,000+", "ETF Available": "Yes" } },
];

const faqs = [
  { question: "Is Solana an Ethereum killer?", answer: "Solana is a strong competitor but unlikely to kill Ethereum. Both serve different market segments — Ethereum excels in security, decentralization, and institutional trust, while Solana wins on speed and cost for consumer applications. The market is large enough for both to thrive." },
  { question: "Which is better for DeFi?", answer: "Ethereum has the deepest DeFi ecosystem with the most protocols, TVL, and composability. Solana's DeFi is growing rapidly with unique strengths in order-book DEXs and fast execution. For established blue-chip DeFi, Ethereum leads. For emerging DeFi innovation, both are competitive." },
  { question: "Should I invest in both?", answer: "Many investors hold both. Ethereum provides established platform exposure with ETF access, while Solana offers higher growth potential as a faster-growing challenger. A common approach is heavier Ethereum allocation (as part of core holdings) with smaller Solana exposure for growth." },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Investing", href: "/investing" }, { label: "Compare", href: "/investing/compare" }, { label: "Solana vs Ethereum" }]} />
      <AffiliateDisclosure />
      <header className="mb-8"><h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">Solana vs Ethereum ({CURRENT_YEAR})</h1><p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p></header>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8">The two most important smart contract platforms represent different approaches to blockchain scaling. Ethereum prioritizes decentralization and security with Layer 2 scaling, while Solana optimizes for speed and low cost on a single high-performance layer. This comparison examines both from an investment and technology perspective.</p>
      <section className="mb-10"><ComparisonTable items={items} features={["Consensus", "TPS (Theoretical)", "Block Time", "Avg Transaction Fee", "TVL", "Smart Contract Language", "Staking Yield", "Network Uptime", "Validator Count", "ETF Available"]} title="Solana vs Ethereum" /></section>
      <div className="prose-crypto mb-10">
        <p>Ethereum&apos;s strength lies in its unmatched decentralization with over 900,000 validators, perfect uptime record, and the deepest smart contract ecosystem in crypto. Its Layer 2 strategy delegates execution to rollups while maintaining mainnet as a secure settlement and data availability layer. This approach sacrifices some user experience for maximum security and decentralization. Ethereum&apos;s ETF availability and institutional adoption provide a demand floor that Solana has not yet achieved.</p>
        <p>Solana&apos;s advantage is performance — sub-second finality and sub-penny fees make it practical for consumer applications, high-frequency trading, and micropayments that are impractical on Ethereum mainnet. Solana&apos;s monolithic architecture provides a single composable environment without the fragmentation of multiple L2s. Developer momentum is strong with innovative applications in DeFi, meme coins, DePIN, and consumer crypto. The trade-off is lower decentralization and past network stability issues, though reliability has improved significantly.</p>
      </div>
      <section className="mb-10"><h2 className="text-2xl font-bold mb-4">Related Content</h2><ul className="space-y-2"><li><Link href="/investing/compare/bitcoin-vs-ethereum" className="text-blue-600 hover:underline">Bitcoin vs Ethereum</Link></li><li><Link href="/investing/learn/layer-2-investing-guide" className="text-blue-600 hover:underline">Layer 2 Investing Guide</Link></li></ul></section>
      <FAQSection faqs={faqs} />
    </div>
  );
}
