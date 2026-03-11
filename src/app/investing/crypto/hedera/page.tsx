import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in Hedera (HBAR) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Hedera investment guide for ${CURRENT_YEAR}. Learn about HBAR fundamentals, hashgraph technology, enterprise adoption, risks, and how to buy HBAR.`,
  alternates: { canonical: "/investing/crypto/hedera" },
};

const faqs = [
  { question: "Is Hedera a good investment?", answer: "Hedera stands out for its enterprise-grade governance council, which includes major corporations like Google, IBM, Boeing, and LG. Its hashgraph consensus achieves high throughput with low, predictable fees. However, the governing council's centralized control, limited DeFi ecosystem compared to Ethereum, and the large supply of HBAR yet to be released are concerns for investors." },
  { question: "What is hashgraph consensus?", answer: "Hashgraph is a consensus algorithm invented by Leemon Baird that uses a gossip protocol and virtual voting to achieve fast, fair consensus. Unlike traditional blockchains that organize transactions into sequential blocks, hashgraph creates a directed acyclic graph of events. This enables high throughput (10,000+ TPS), sub-5-second finality, and mathematically proven fairness in transaction ordering." },
  { question: "Who governs Hedera?", answer: "Hedera is governed by a council of up to 39 multinational organizations, each serving limited terms. Current members include Google, IBM, Boeing, LG, Tata Communications, Dell, ServiceNow, and others. The council manages network governance, treasury decisions, and platform development. While this structure provides stability and enterprise credibility, it makes Hedera more centralized than most public blockchains." },
];

export default function HederaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Hedera", href: "/investing/crypto/hedera" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          How to Invest in Hedera (HBAR) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Hedera is an enterprise-grade public network using hashgraph consensus technology. Governed
          by a council of major global corporations, Hedera offers high throughput, low fees, and
          carbon-negative operations for enterprise and consumer applications.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-white">HBAR</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-white">2019</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-white">50,000,000,000 HBAR</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-white">Hashgraph (aBFT)</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Is Hedera?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Hedera is a public distributed ledger that uses the hashgraph consensus algorithm, a
          fundamentally different approach from traditional blockchain technology. Founded by
          Dr. Leemon Baird and Mance Harmon, Hedera achieves asynchronous Byzantine Fault Tolerance
          (aBFT), the highest grade of security for distributed systems. The network processes
          over 10,000 transactions per second with finality in 3-5 seconds and an average transaction
          cost of $0.001.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Hedera's governance council of Fortune 500 companies sets it apart from other networks.
          The council provides stability, regulatory credibility, and enterprise partnerships that
          drive real-world adoption. Hedera offers native services including the Hedera Token
          Service (HTS) for token creation, Hedera Consensus Service (HCS) for timestamped data
          logging, and smart contracts via a Solidity-compatible EVM. The network is carbon-negative
          and has attracted enterprise use cases across supply chain, ESG reporting, and payments.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Hedera is used for enterprise applications including supply chain tracking, carbon credit
          tokenization, identity verification, and IoT data integrity. The Hedera Token Service
          enables efficient token creation and management with built-in compliance features. DeFi
          protocols like SaucerSwap and HeliSwap provide decentralized trading. Stablecoin issuers
          have chosen Hedera for its low, predictable fees and enterprise governance. The network
          also supports NFTs and gaming applications through its token and consensus services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Hedera's governing council model makes it significantly more centralized than networks
          like Ethereum or Bitcoin, which may deter decentralization-focused investors. A large
          portion of the 50 billion HBAR supply remains to be distributed, creating potential
          dilution. The DeFi ecosystem on Hedera is much smaller than on Ethereum, Solana, or
          even newer chains like Sui. Enterprise adoption, while growing, has not yet translated
          into the transaction volume needed to support significant HBAR value appreciation through
          fee demand alone. Competition from both public blockchains and permissioned enterprise
          solutions is a factor.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Buy Hedera</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          HBAR is available on exchanges including Coinbase, Binance, OKX, and Crypto.com. After
          purchasing, HBAR can be staked natively through the network to earn staking rewards, which
          are distributed proportionally to all HBAR holders via network rewards. HashPack and Blade
          are the most popular Hedera wallets for interacting with the ecosystem's DeFi and NFT
          applications. Ledger hardware wallets support HBAR for secure long-term storage.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
