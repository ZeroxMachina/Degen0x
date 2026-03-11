import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";

const token = CRYPTO_TOKENS[6];

export const metadata: Metadata = {
  title: `How to Invest in Chainlink (LINK) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Chainlink investment guide for ${CURRENT_YEAR}. Learn about LINK fundamentals, oracle networks, CCIP, staking, and how to buy Chainlink.`,
  alternates: { canonical: "/investing/crypto/chainlink" },
};

const faqs = [
  { question: "What problem does Chainlink solve?", answer: "Blockchains cannot natively access external data. Chainlink's oracle network provides tamper-proof data feeds (price data, weather, sports results, etc.) to smart contracts, enabling DeFi protocols, insurance products, and any application that needs real-world data on-chain." },
  { question: "Can I stake LINK?", answer: "Yes. Chainlink staking is available through the Chainlink Staking v0.2 program, which allows LINK holders to stake and earn rewards while helping secure oracle networks. Staking slots may be limited, so check availability on the official Chainlink staking page." },
  { question: "What is CCIP?", answer: "Cross-Chain Interoperability Protocol (CCIP) is Chainlink's cross-chain messaging and token transfer standard. It enables smart contracts on different blockchains to communicate securely. CCIP is considered a major revenue driver for Chainlink and is being adopted by traditional institutions like SWIFT." },
];

export default function ChainlinkPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Chainlink", href: "/investing/crypto/chainlink" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">How to Invest in Chainlink (LINK) in {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Chainlink is the leading decentralized oracle network providing real-world data to
          smart contracts across multiple blockchains, powering the vast majority of DeFi.
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
        <h2 className="text-2xl font-bold text-white mb-4">What Is Chainlink?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Chainlink is a decentralized oracle network that connects smart contracts to real-world
          data, events, and computation. Its price feeds secure hundreds of billions of dollars
          across DeFi protocols including Aave, Compound, Synthetix, and dYdX. Without reliable
          oracle infrastructure, most DeFi applications could not function.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Beyond price feeds, Chainlink offers Verifiable Random Function (VRF) for provably fair
          randomness, Automation for smart contract upkeep, and CCIP for cross-chain communication.
          This expanding suite of services positions Chainlink as essential middleware for the
          entire blockchain ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          LINK's tokenomics have been a point of concern, with the team holding a significant
          portion of the total supply. Competition from other oracle solutions (Pyth, Band, API3)
          is growing, particularly on non-Ethereum chains. Revenue generation relative to market
          cap remains a question, though CCIP adoption by traditional finance institutions could
          be transformative. Token utility is evolving with staking but remains primarily focused
          on node operator incentives.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
