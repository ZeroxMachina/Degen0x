import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Staking Explained ${CURRENT_YEAR} - How It Works & How to Earn`,
  description: `Learn how crypto staking works. Understand proof-of-stake, liquid staking, staking rewards, risks, and how to start earning yield on your holdings.`,
  alternates: { canonical: "/investing/learn/staking-explained" },
};

const toc = [
  { id: "what-is-staking", title: "What Is Staking", level: 2 },
  { id: "how-it-works", title: "How Staking Works", level: 2 },
  { id: "liquid-staking", title: "Liquid Staking", level: 2 },
  { id: "risks", title: "Staking Risks", level: 2 },
  { id: "getting-started", title: "Getting Started", level: 2 },
];

const faqs = [
  { question: "How much can I earn from staking?", answer: "Staking rewards vary by network: Ethereum yields 3-4% APY, Solana 6-8%, Cosmos chains 10-20%. Centralized exchanges take 25-35% commission while DeFi protocols charge 4-10%. Returns are paid in the staked token, so your dollar returns depend on price movement." },
  { question: "Is staking safe?", answer: "Staking through regulated exchanges is relatively safe for the staking itself, though you face price risk on the underlying token. DeFi staking protocols add smart contract risk. Slashing risk exists if your validator misbehaves. Liquid staking reduces lock-up risk but adds protocol risk." },
  { question: "Can I unstake at any time?", answer: "It depends on the network and method. Liquid staking tokens (stETH, rETH) can be sold at any time on DEXs. Native staking on Ethereum has an unstaking queue. Exchange staking policies vary. Cardano staking has no lock-up period. Always check unstaking conditions before staking." },
];

export default function StakingExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Staking Explained"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="9 min"
      intro="Staking is one of the most popular ways to earn passive income on your cryptocurrency holdings. This guide explains how staking works, the different types available, expected returns, risks to consider, and how to start staking today."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Best Staking Platforms", href: "/investing/best/staking", category: "Investing" },
        { title: "Passive Income Strategies", href: "/investing/best/passive-income", category: "Investing" },
      ]}
    >
      <section id="what-is-staking" className="mb-10">
        <h2>What Is Staking?</h2>
        <p>
          Staking is the process of locking cryptocurrency in a proof-of-stake blockchain to help
          validate transactions and secure the network. In return, stakers receive rewards paid
          in the native token. It is analogous to earning interest in a savings account, but the
          mechanics are different. Instead of a bank lending your money, your staked tokens are
          used to verify transactions on the blockchain.
        </p>
      </section>

      <section id="how-it-works" className="mb-10">
        <h2>How Staking Works</h2>
        <p>
          In proof-of-stake networks, validators are selected to create new blocks based on the
          amount of cryptocurrency they have staked. More stake means a higher chance of being
          selected and earning rewards. Individual stakers can delegate their tokens to validators
          without running their own infrastructure. The validator does the technical work, and
          rewards are shared between the validator and delegators after a commission fee.
        </p>
      </section>

      <section id="liquid-staking" className="mb-10">
        <h2>Liquid Staking</h2>
        <p>
          Liquid staking protocols like Lido (for ETH) and Marinade (for SOL) issue a derivative
          token representing your staked position. When you deposit ETH into Lido, you receive
          stETH, which can be used across DeFi for lending, borrowing, or liquidity provision.
          This means you earn staking rewards while simultaneously using your capital in other
          yield-generating activities, effectively compounding your returns.
        </p>
      </section>

      <section id="risks" className="mb-10">
        <h2>Staking Risks</h2>
        <p>
          Token price risk is primary: if your staked token drops 50% in value, your 4% staking
          yield does not compensate for the loss. Smart contract risk exists with DeFi staking
          protocols. Slashing risk can destroy a portion of staked tokens if a validator acts
          maliciously. Lock-up periods may prevent you from selling during market downturns.
          Concentration risk arises when too much stake flows to a single provider, threatening
          network decentralization.
        </p>
      </section>

      <section id="getting-started" className="mb-10">
        <h2>Getting Started with Staking</h2>
        <p>
          The simplest way to start is through exchange staking on Coinbase or Kraken, where you
          stake with a few clicks. For better yields and decentralization, use liquid staking
          protocols like Lido (ETH) or Marinade (SOL). Advanced users can run their own validator
          nodes, though this requires significant capital and technical expertise. Start with a
          small amount, understand the process, then scale up.
        </p>
      </section>
    </LearnPageLayout>
  );
}
