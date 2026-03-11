import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in BNB (BNB) ${CURRENT_YEAR} - Complete Guide`,
  description: `Complete BNB investment guide for ${CURRENT_YEAR}. Learn about BNB fundamentals, the Binance ecosystem, BNB Chain, risks, and how to buy BNB.`,
  alternates: { canonical: "/investing/crypto/bnb" },
};

const faqs = [
  { question: "Is BNB a good investment?", answer: "BNB is the native token of the Binance ecosystem, the world's largest crypto exchange by trading volume. Its value is closely tied to Binance's success, fee discounts, and the growing BNB Chain ecosystem. BNB benefits from regular token burns that reduce supply, but regulatory risk around Binance is a key concern." },
  { question: "What is the BNB token burn?", answer: "Binance conducts quarterly BNB token burns, permanently removing tokens from circulation based on trading volume on the platform. The goal is to reduce the total supply from 200 million to 100 million BNB. Additionally, BNB Chain has a real-time burn mechanism similar to Ethereum's EIP-1559 that burns a portion of gas fees." },
  { question: "Can I use BNB outside of Binance?", answer: "Yes. BNB is the native gas token for BNB Chain (formerly Binance Smart Chain), which hosts thousands of DeFi protocols, NFT marketplaces, and gaming applications. You can use BNB for transaction fees, staking, governance, and as collateral across the BNB Chain ecosystem. It is also accepted by various merchants and payment services." },
];

export default function BNBPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "BNB", href: "/investing/crypto/bnb" },
      ]} />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          How to Invest in BNB (BNB) in {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          BNB is the native cryptocurrency of the Binance ecosystem and BNB Chain. Originally
          launched as an exchange utility token, BNB has evolved into the backbone of one of the
          largest smart contract platforms by total value locked and daily active users.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mb-8">
        <h2 className="text-lg font-semibold text-white mb-4">Key Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><p className="text-xs text-[var(--color-text-secondary)]">Ticker</p><p className="text-sm font-semibold text-white">BNB</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Launch Year</p><p className="text-sm font-semibold text-white">2017</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Max Supply</p><p className="text-sm font-semibold text-white">200,000,000 BNB (burning to 100M)</p></div>
          <div><p className="text-xs text-[var(--color-text-secondary)]">Consensus</p><p className="text-sm font-semibold text-white">Proof of Staked Authority</p></div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">What Is BNB?</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          BNB was originally created in 2017 as an ERC-20 token on Ethereum to provide trading fee
          discounts on the Binance exchange. It has since migrated to its own blockchain, BNB Chain
          (formerly Binance Smart Chain), and serves as the native gas token powering one of the
          most active smart contract ecosystems in crypto. BNB Chain uses a Proof of Staked Authority
          consensus mechanism that prioritizes speed and low transaction costs.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          The BNB ecosystem includes BNB Beacon Chain for governance and staking, BNB Smart Chain
          for EVM-compatible smart contracts, opBNB as a Layer 2 scaling solution, and BNB Greenfield
          for decentralized storage. This multi-chain approach positions BNB as infrastructure for
          a wide range of decentralized applications, from DeFi to gaming.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Use Cases</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          BNB serves multiple functions across the Binance ecosystem. On the Binance exchange, holding
          BNB provides up to 25% trading fee discounts and is used for Binance Launchpad token sales.
          On BNB Chain, BNB pays for gas fees and is used for staking, governance, and as collateral
          in DeFi protocols like PancakeSwap and Venus. The token is also used in Binance Pay for
          merchant payments and peer-to-peer transfers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Investment Risks</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          BNB's primary risk is its deep dependence on Binance, the centralized exchange. Regulatory
          actions against Binance directly impact BNB's value, as demonstrated by the DOJ settlement
          in 2023. BNB Chain is also more centralized than competitors like Ethereum, with only 21
          active validators. Competition from other L1 chains, potential security vulnerabilities in
          the bridge infrastructure, and the concentration of ecosystem activity around a single
          entity are additional factors investors should weigh.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">How to Buy BNB</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The most direct way to buy BNB is through the Binance exchange, where it is available with
          the lowest fees. BNB is also listed on other major exchanges like Coinbase, Kraken, and
          KuCoin. After purchasing, you can hold BNB on the exchange, transfer it to a self-custody
          wallet like Trust Wallet or MetaMask (configured for BNB Chain), or stake it to earn
          rewards while supporting network validation.
        </p>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
