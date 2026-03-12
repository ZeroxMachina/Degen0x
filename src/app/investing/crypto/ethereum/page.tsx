import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { CRYPTO_TOKENS } from "@/data/investing";

const token = CRYPTO_TOKENS[1];

export const metadata: Metadata = {
  title: `How to Invest in Ethereum (ETH) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete Ethereum investment guide for ${CURRENT_YEAR}. Learn about ETH fundamentals, staking, DeFi ecosystem, risks, and how to buy Ethereum.`,
  alternates: { canonical: "/investing/crypto/ethereum" },
};

const faqs = [
  { question: "Is Ethereum a good investment?", answer: "Ethereum is the leading smart contract platform with the largest DeFi and NFT ecosystem. Its deflationary tokenomics post-merge, growing L2 ecosystem, and institutional adoption through spot ETFs make it a strong long-term investment candidate. However, it faces competition from faster chains and regulatory uncertainty." },
  { question: "Should I stake my Ethereum?", answer: "Staking ETH earns approximately 3-4% APY and helps secure the network. Liquid staking protocols like Lido let you stake while maintaining liquidity. If you plan to hold ETH long-term, staking is generally a good idea to earn yield on your position." },
  { question: "What is the difference between Ethereum and Bitcoin?", answer: "Bitcoin is primarily a store of value and payment network, while Ethereum is a programmable blockchain enabling smart contracts, DeFi, NFTs, and decentralized applications. Ethereum has moved to proof-of-stake while Bitcoin uses proof-of-work. Both serve different roles in a diversified crypto portfolio." },
];

export default function EthereumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Ethereum", href: "/investing/crypto/ethereum" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          How to Invest in Ethereum (ETH) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Ethereum is the world's leading smart contract platform, powering the vast majority of
          DeFi protocols, NFT marketplaces, and decentralized applications. ETH is the second
          largest cryptocurrency by market cap.
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
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">What Is Ethereum?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Ethereum is a decentralized blockchain platform that enables developers to build and
          deploy smart contracts and decentralized applications (dApps). Launched in 2015 by
          Vitalik Buterin and co-founders, Ethereum introduced programmable money to the
          blockchain world. The Merge in 2022 transitioned Ethereum from proof-of-work to
          proof-of-stake, reducing energy consumption by 99.95% and making ETH potentially
          deflationary through the EIP-1559 burn mechanism.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Ethereum's ecosystem is the largest in crypto, hosting thousands of DeFi protocols,
          NFT platforms, L2 rollups, and enterprise applications. The network processes billions
          in daily transaction volume and secures hundreds of billions in total value locked
          across its ecosystem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)]">
          Ethereum powers decentralized finance (lending, borrowing, trading), NFTs and digital
          collectibles, decentralized autonomous organizations (DAOs), gaming and metaverse
          applications, and Layer 2 scaling networks. Its smart contract functionality enables
          programmable financial products, tokenized real-world assets, and decentralized
          identity systems. Staking ETH provides 3-4% annual yield while securing the network.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)]">
          Ethereum faces competition from faster, cheaper Layer 1 blockchains like Solana and
          from its own Layer 2 ecosystem which may capture value that would otherwise accrue to
          ETH. Regulatory uncertainty around staking and DeFi protocols built on Ethereum could
          impact the ecosystem. Complex upgrade roadmap execution risk exists as Ethereum continues
          its multi-year scaling plan. Despite these risks, Ethereum's network effects, developer
          ecosystem, and institutional adoption provide strong defensive moats.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How to Buy Ethereum</h2>
        <p className="text-[var(--color-text-secondary)]">
          Buy ETH on exchanges like Coinbase or Kraken, through spot Ethereum ETFs like ETHA in
          your brokerage account, or directly from decentralized exchanges. After purchasing,
          consider staking through a liquid staking protocol like Lido to earn yield while
          maintaining liquidity. For long-term holdings, a hardware wallet provides the best
          security.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
