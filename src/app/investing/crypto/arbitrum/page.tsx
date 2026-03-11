import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";

const token = CRYPTO_TOKENS[9];

export const metadata: Metadata = {
  title: `How to Invest in Arbitrum (ARB) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Arbitrum investment guide for ${CURRENT_YEAR}. Learn about ARB fundamentals, L2 dominance, DeFi ecosystem, Orbit chains, and how to buy Arbitrum.`,
  alternates: { canonical: "/investing/crypto/arbitrum" },
};

const faqs = [
  { question: "What is Arbitrum?", answer: "Arbitrum is the leading Ethereum Layer 2 network using optimistic rollup technology. It processes transactions off the Ethereum mainnet at much lower costs while inheriting Ethereum's security. Arbitrum has the highest TVL among all L2s and hosts the largest L2 DeFi ecosystem." },
  { question: "Is ARB a good investment?", answer: "ARB is the governance token for Arbitrum DAO, which controls the network treasury and protocol upgrades. The investment case depends on continued L2 adoption, fee revenue growth, and potential future value accrual mechanisms. As a governance-only token currently, its value proposition is tied to the ecosystem's growth." },
  { question: "What are Orbit chains?", answer: "Orbit chains are Layer 3 networks built on top of Arbitrum using the Arbitrum Orbit framework. They allow projects to launch their own dedicated chains that settle to Arbitrum, creating a multi-layered scaling architecture. Gaming and application-specific chains are primary use cases." },
];

export default function ArbitrumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Arbitrum", href: "/investing/crypto/arbitrum" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">How to Invest in Arbitrum (ARB) in {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Arbitrum is the leading Ethereum Layer 2 rollup by TVL, powering the largest L2 DeFi
          ecosystem with fast, cheap Ethereum transactions.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-white">{token.ticker}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-white">{token.launchYear}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-white">{token.maxSupply}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-white">{token.consensus}</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Is Arbitrum?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Built by Offchain Labs, Arbitrum is an optimistic rollup that batches transactions
          and posts compressed data to Ethereum mainnet. It is fully EVM-compatible, meaning
          existing Ethereum smart contracts can deploy without modification. Arbitrum hosts
          hundreds of DeFi protocols including GMX, Camelot, Radiant, and Pendle, making it
          the most active L2 DeFi ecosystem.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The Arbitrum Orbit framework enables Layer 3 chains to be built on top of Arbitrum,
          creating dedicated execution environments for specific applications like gaming or
          enterprise use cases. The Arbitrum DAO governs the network with one of the largest
          governance treasuries in crypto.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          ARB is currently a governance-only token without direct fee sharing, meaning its value
          does not directly capture the network's revenue. The sequencer remains centralized,
          creating a single point of failure and censorship risk. Competition from other L2s
          (Optimism, Base, zkSync) is intensifying. Large token unlocks from team and investor
          allocations could create selling pressure. The 7-day withdrawal period to Ethereum is
          a UX drawback compared to ZK-rollups.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
