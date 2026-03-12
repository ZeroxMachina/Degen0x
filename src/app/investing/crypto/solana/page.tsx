import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";

const token = CRYPTO_TOKENS[2];

export const metadata: Metadata = {
  title: `How to Invest in Solana (SOL) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Solana investment guide for ${CURRENT_YEAR}. Learn about SOL fundamentals, ecosystem growth, staking, risks, and how to buy Solana.`,
  alternates: { canonical: "/investing/crypto/solana" },
};

const faqs = [
  { question: "Is Solana a good investment?", answer: "Solana has established itself as the leading high-performance blockchain with strong DeFi, NFT, and consumer app ecosystems. Its fast transactions and low fees attract both developers and users. However, past network outages and VC token concentration are risks to consider." },
  { question: "Has Solana had network outages?", answer: "Yes, Solana experienced several network outages in 2022-2023, though reliability has improved significantly since then. The team has implemented multiple upgrades to address these issues. Network stability should continue to improve as the technology matures." },
  { question: "How does Solana compare to Ethereum?", answer: "Solana offers faster transactions (sub-second finality) and much lower fees (fractions of a cent vs dollars on Ethereum mainnet). Ethereum has a larger ecosystem, more decentralization, and stronger institutional adoption. Many investors hold both as they serve complementary roles." },
];

export default function SolanaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Solana", href: "/investing/crypto/solana" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">How to Invest in Solana (SOL) in {CURRENT_YEAR}</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Solana is a high-performance Layer 1 blockchain designed for speed and low costs, powering
          a rapidly growing ecosystem of DeFi, NFT, and consumer applications.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Solana?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Solana is a high-throughput blockchain using a unique combination of Proof of Stake and
          Proof of History to achieve sub-second transaction finality and fees measured in fractions
          of a cent. This performance profile has made it the preferred chain for high-frequency
          DeFi, NFT trading, and consumer-facing applications where user experience depends on
          speed and affordability.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The Solana ecosystem has grown dramatically, attracting major projects in DeFi (Jupiter,
          Marinade, Raydium), NFTs, payments (Solana Pay), and gaming. The Solana Mobile initiative
          and Firedancer validator client represent significant investments in expanding the
          platform's reach and resilience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)]">
          Solana excels at DeFi applications requiring high throughput (DEXs, perpetual exchanges),
          NFT minting and trading, consumer applications (social, gaming), point-of-sale payments
          through Solana Pay, and token launches. Its low fees and fast confirmation times make
          it ideal for applications where Ethereum mainnet costs would be prohibitive.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          Solana's main risks include past network reliability issues (though improving), validator
          centralization concerns, significant VC token holdings that could create selling pressure,
          and intense competition from Ethereum L2s and other high-performance L1s. The inflationary
          token supply (no hard cap) and reliance on the SVM ecosystem (smaller than EVM) are
          additional factors to monitor.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Solana</h2>
        <p className="text-[var(--color-text-secondary)]">
          Buy SOL on major exchanges like Coinbase, Binance, or Kraken. After purchasing, consider
          staking through liquid staking protocols like Marinade Finance or Jito to earn 6-8% APY.
          The Phantom wallet is the most popular Solana wallet for interacting with the ecosystem's
          DeFi applications and NFT marketplaces.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
