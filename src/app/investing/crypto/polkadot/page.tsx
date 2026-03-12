import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";

const token = CRYPTO_TOKENS[4];

export const metadata: Metadata = {
  title: `How to Invest in Polkadot (DOT) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Polkadot investment guide for ${CURRENT_YEAR}. Learn about DOT fundamentals, parachains, interoperability, staking, and how to buy Polkadot.`,
  alternates: { canonical: "/investing/crypto/polkadot" },
};

const faqs = [
  { question: "What is Polkadot used for?", answer: "Polkadot enables cross-blockchain interoperability through its parachain architecture. It allows specialized blockchains to connect and share security while maintaining their own governance and functionality. DOT is used for governance, staking, and bonding for parachain slots." },
  { question: "Can I stake Polkadot?", answer: "Yes. DOT staking yields approximately 10-14% APY through nominated proof-of-stake. You can nominate validators through the Polkadot.js interface or use staking through exchanges. The minimum staking amount varies but is generally accessible for most investors." },
  { question: "Is Polkadot still relevant?", answer: "Polkadot continues to innovate with features like asynchronous backing and the transition from parachain auctions to on-demand coretime. However, it faces strong competition from cross-chain bridges and messaging protocols. Its relevance depends on ecosystem growth and developer adoption of the parachain model." },
];

export default function PolkadotPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Polkadot", href: "/investing/crypto/polkadot" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">How to Invest in Polkadot (DOT) in {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Polkadot is a multi-chain protocol designed for cross-blockchain interoperability,
          enabling specialized parachains to share security and communicate seamlessly.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-[var(--color-text)] mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.ticker}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.launchYear}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.maxSupply}</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-[var(--color-text)]">{token.consensus}</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Polkadot?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Founded by Gavin Wood, co-founder of Ethereum, Polkadot introduces a heterogeneous
          multi-chain architecture where specialized blockchains (parachains) connect to a
          central relay chain. This design allows each parachain to be optimized for specific
          use cases while sharing the security of the overall Polkadot network.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The network uses Nominated Proof of Stake and features on-chain governance, forkless
          upgrades, and cross-chain message passing (XCM). Polkadot's Substrate framework enables
          developers to build custom blockchains that can connect to the Polkadot ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          Polkadot's inflationary tokenomics (no hard supply cap) create ongoing dilution for
          holders. The parachain model competes with simpler cross-chain bridges and messaging
          protocols. Ecosystem TVL and developer activity have lagged behind Ethereum, Solana,
          and Cosmos. The complexity of building on Substrate creates a higher barrier to entry
          for developers compared to EVM-compatible chains.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
