import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Hyperliquid vs dYdX: Best Decentralized Perps? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Detailed comparison of Hyperliquid vs dYdX for decentralized perpetual futures trading. Compare fees, speed, liquidity, and features.",
};

export default function HyperliquidVsDydxPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Crypto Exchanges", href: "/exchanges" }, { label: "Compare", href: "/exchanges/compare" }, { label: "Hyperliquid vs dYdX", href: "#" }]} />
      <AffiliateDisclosure />
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Hyperliquid vs dYdX: Which Decentralized Perps Platform Is Better in {CURRENT_YEAR}?</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">Hyperliquid and dYdX are the two leading decentralized perpetual futures platforms, each building their own Layer 1 chains for maximum performance. Both aim to deliver CEX-like trading speed with DEX-level self-custody. This comparison breaks down how they differ in execution, fees, liquidity, and overall trading experience.</p>

      <div className="overflow-x-auto glass mb-8">
        <table className="w-full">
          <thead><tr className="glass-table-header"><th className="px-6 py-3 text-left text-sm font-semibold text-[var(--color-text)]">Feature</th><th className="px-6 py-3 text-center text-sm font-semibold text-[var(--color-text)]">Hyperliquid</th><th className="px-6 py-3 text-center text-sm font-semibold text-[var(--color-text)]">dYdX</th></tr></thead>
          <tbody>
            {[["Architecture", "Custom L1 chain", "Cosmos appchain (v4)"], ["Trading Pairs", "130+", "180+"], ["Maker Fee", "0.01%", "0.02%"], ["Taker Fee", "0.035%", "0.05%"], ["Max Leverage", "50x", "20x"], ["Order Book", "On-chain CLOB", "On-chain CLOB"], ["Governance Token", "HYPE", "DYDX"], ["Spot Trading", "Yes", "No"]].map(([feature, hl, dx]) => (
              <tr key={feature} className="border-t border-[var(--glass-border)] glass-table-row"><td className="px-6 py-3 text-sm text-[var(--color-text-secondary)]">{feature}</td><td className="px-6 py-3 text-center text-sm text-[var(--color-text-secondary)]">{hl}</td><td className="px-6 py-3 text-center text-sm text-[var(--color-text-secondary)]">{dx}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-crypto">
        <h2 className="text-2xl font-bold text-white mb-4">Performance and Architecture</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Both platforms have built custom Layer 1 blockchains optimized for trading. Hyperliquid runs on its own HyperBFT consensus chain, providing sub-second block times and high throughput. dYdX v4 is built as a Cosmos appchain using the CometBFT consensus. Both approaches deliver significantly faster execution than trading on general-purpose chains like Ethereum. In practice, Hyperliquid has gained a reputation for faster fills and lower latency, which has attracted more active traders and market makers, contributing to deeper liquidity on major pairs.</p>

        <h2 className="text-2xl font-bold text-white mb-4">Fee Comparison</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Hyperliquid offers lower fees across the board. Maker fees start at 0.01% versus dYdX's 0.02%, and taker fees are 0.035% versus 0.05%. Both platforms offer volume-based discounts and token-based fee reductions. For active traders executing significant volume, the fee difference compounds meaningfully. Both platforms have zero gas fees for trading, as transactions are processed on their respective app-specific chains.</p>

        <h2 className="text-2xl font-bold text-white mb-4">Liquidity and Volume</h2>
        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">Hyperliquid has surpassed dYdX in trading volume and liquidity, becoming the dominant decentralized perpetuals platform. Hyperliquid regularly processes billions in daily volume with tight spreads on major pairs. dYdX maintains respectable liquidity but has seen its market share decline relative to Hyperliquid. For traders focused on execution quality and minimal slippage, Hyperliquid currently has the edge on most trading pairs.</p>

        <h2 className="text-2xl font-bold text-white mb-4">Verdict</h2>
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
          <p className="text-[var(--color-text-secondary)] leading-relaxed"><strong className="text-white">Choose Hyperliquid if</strong> you want the deepest decentralized perps liquidity, lowest fees, fastest execution, and access to spot trading alongside perpetuals on a single platform.</p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4"><strong className="text-white">Choose dYdX if</strong> you value the Cosmos ecosystem integration, want governance participation through the DYDX token, or prefer dYdX's specific market selection and interface.</p>
        </div>
      </div>

      <FAQSection faqs={[
        { question: "Is Hyperliquid or dYdX more decentralized?", answer: "Both platforms are working toward full decentralization. dYdX v4 runs on a Cosmos appchain with a validator set, while Hyperliquid runs its own L1 chain. Both use on-chain order books, but aspects of infrastructure remain somewhat centralized on both platforms." },
        { question: "Which has better liquidity?", answer: "Hyperliquid currently has deeper liquidity and higher trading volume than dYdX, particularly on major perpetual pairs like BTC and ETH." },
        { question: "Do I need KYC for Hyperliquid or dYdX?", answer: "Neither platform currently requires KYC for trading. You connect a wallet and can begin trading immediately. However, both have geographical restrictions and may implement compliance measures in the future." },
      ]} />
    </div>
  );
}
