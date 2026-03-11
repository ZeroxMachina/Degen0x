import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in Stacks (STX) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Stacks investment guide for ${CURRENT_YEAR}. Learn about STX fundamentals, Bitcoin smart contracts, Nakamoto upgrade, risks, and how to buy Stacks.`,
  alternates: { canonical: "/investing/crypto/stacks" },
};

const faqs = [
  { question: "Is Stacks a good investment?", answer: "Stacks is the leading smart contract platform built on Bitcoin, enabling DeFi, NFTs, and dApps that settle on the Bitcoin blockchain. The Nakamoto upgrade significantly improved performance with fast blocks and 100% Bitcoin finality. Growing interest in Bitcoin DeFi (BTCFi) is a strong tailwind, but competition from other Bitcoin L2 solutions and the relatively small ecosystem compared to Ethereum are risks." },
  { question: "How does Stacks connect to Bitcoin?", answer: "Stacks uses a unique Proof of Transfer (PoX) consensus mechanism where STX miners spend BTC to mine new blocks, anchoring Stacks' history to Bitcoin's blockchain. After the Nakamoto upgrade, every Stacks transaction achieves 100% Bitcoin finality, meaning Stacks transactions are as irreversible as Bitcoin transactions. This makes Stacks one of the most Bitcoin-aligned smart contract platforms." },
  { question: "What is sBTC?", answer: "sBTC is a decentralized, programmable Bitcoin on the Stacks network. Users can deposit BTC and receive sBTC, which can then be used in DeFi protocols, lending, trading, and other smart contract applications on Stacks. sBTC aims to be the most trust-minimized way to use Bitcoin in DeFi, backed 1:1 by BTC and managed through a decentralized signer set." },
];

export default function StacksPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Stacks", href: "/investing/crypto/stacks" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          How to Invest in Stacks (STX) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Stacks is the leading smart contract platform that extends Bitcoin's capabilities,
          enabling DeFi, NFTs, and decentralized applications that settle on the Bitcoin blockchain.
          STX is the native token powering the Stacks network.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-white">STX</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-white">2021</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-white">1,818,000,000 STX</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-white">Proof of Transfer (PoX)</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Is Stacks?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Stacks is a Bitcoin Layer 2 that brings smart contract functionality to the Bitcoin
          network without modifying Bitcoin itself. Founded by Muneeb Ali and Ryan Shea, the
          project was the first SEC-qualified token offering in the US. Stacks uses the Clarity
          programming language for smart contracts, which is decidable (meaning you can know what
          a contract will do before executing it) and can read Bitcoin state directly.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The Nakamoto upgrade, activated in 2024, was a major milestone that introduced fast blocks
          (seconds instead of minutes), 100% Bitcoin finality for all Stacks transactions, and the
          groundwork for sBTC (a decentralized, programmable Bitcoin). These improvements make
          Stacks competitive with other smart contract platforms on performance while maintaining
          its unique value proposition of Bitcoin settlement security. The growing BTCFi narrative
          positions Stacks as key infrastructure for unlocking Bitcoin's value in DeFi.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Stacks enables Bitcoin DeFi through protocols like ALEX (DEX), Arkadiko (stablecoin),
          and Zest Protocol (Bitcoin lending). NFTs on Stacks settle on Bitcoin and have a dedicated
          marketplace. STX holders can participate in Stacking (Stacks' version of staking), where
          they lock STX to support consensus and earn BTC rewards from miners. sBTC enables using
          Bitcoin natively in DeFi without custodial bridges, addressing the largest pool of
          untapped DeFi collateral in crypto.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Competition in the Bitcoin L2 space is intensifying, with multiple projects (Lightning,
          RSK, Liquid, BOB, and various Bitcoin rollups) vying for developers and users. The Stacks
          ecosystem is significantly smaller than Ethereum or Solana's ecosystems. Clarity's smaller
          developer community compared to Solidity limits the speed of ecosystem growth. sBTC's
          trust assumptions, while minimized, are not fully trustless. The BTC rewards from Stacking
          depend on miner behavior and can be variable. Bitcoin purists who oppose any form of
          L2 complexity may not support Stacks' approach.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Buy Stacks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          STX is available on exchanges including Coinbase, Binance, OKX, and Kraken. After
          purchasing, you can participate in Stacking through wallets like Leather (formerly Hiro
          Wallet) or Xverse to earn BTC rewards. Stacking requires a minimum STX amount (which
          varies), but pooled Stacking options allow participation with any amount. STX can be stored
          in Leather, Xverse, or Ledger hardware wallets. The ability to earn BTC by holding STX
          is a unique feature that attracts Bitcoin-focused investors.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
