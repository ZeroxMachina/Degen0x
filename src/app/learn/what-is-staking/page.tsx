import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Crypto Staking? Complete Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what crypto staking is, how it works, the risks involved, and how to earn passive income by staking your cryptocurrency holdings.",
};

export default function WhatIsStakingPage() {
  return (
    <LearnPageLayout
      title="What Is Crypto Staking?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Staking is the process of locking up cryptocurrency to support the operations of a proof-of-stake blockchain network. In return for committing their tokens, stakers earn rewards in the form of additional cryptocurrency. Staking serves a similar security function to mining but uses economic incentives rather than computational power. It has become one of the most popular ways to earn passive income in crypto."
      toc={[
        { id: "how-staking-works", title: "How Staking Works", level: 2 },
        { id: "types-of-staking", title: "Types of Staking", level: 2 },
        { id: "staking-rewards", title: "Staking Rewards and APY", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the minimum amount needed to stake?",
          answer:
            "It varies by network. Running a solo Ethereum validator requires 32 ETH, but liquid staking services like Lido have no minimum. Many exchanges allow staking with as little as $1. Solana delegation has no minimum, and Cosmos chains typically require small amounts. Liquid staking protocols have made staking accessible to everyone.",
        },
        {
          question: "Can I unstake my crypto at any time?",
          answer:
            "Most networks have an unbonding period during which your tokens are locked and not earning rewards. Ethereum withdrawals take about 1-5 days depending on the exit queue. Cosmos chains typically have a 21-day unbonding period. Liquid staking tokens can be traded immediately on secondary markets, bypassing the unstaking wait.",
        },
        {
          question: "Is staking safe?",
          answer:
            "Staking on-chain with reputable validators is generally safe, but risks include slashing penalties if your validator misbehaves, smart contract risk with liquid staking protocols, and the opportunity cost of locked tokens. Staking on centralized exchanges adds custodial risk. Always research the validator or platform before staking.",
        },
      ]}
      relatedArticles={[
        { title: "Proof of Stake Explained", href: "/learn/proof-of-stake", category: "Learn Crypto" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn Crypto" },
        { title: "What Is Mining?", href: "/learn/what-is-mining", category: "Learn Crypto" },
        { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn Crypto" },
      ]}
    >
      <section id="how-staking-works">
        <h2>How Staking Works</h2>
        <p>
          In proof-of-stake networks, validators are selected to propose and verify new blocks based on the amount of cryptocurrency they have staked as collateral. The more tokens a validator stakes, the higher their chance of being selected. When chosen, validators process transactions, create new blocks, and earn rewards for their work. This economic model aligns validator incentives with network security.
        </p>
        <p>
          If a validator acts dishonestly or goes offline, a portion of their staked tokens can be slashed, meaning permanently confiscated by the protocol. This penalty mechanism discourages malicious behavior and ensures validators remain reliable. The combination of rewards for good behavior and penalties for bad behavior creates a robust security model without the energy consumption of proof-of-work mining.
        </p>
      </section>

      <section id="types-of-staking">
        <h2>Types of Staking</h2>
        <p>
          Solo staking involves running your own validator node, which offers the highest rewards and maximum decentralization benefit. Ethereum requires 32 ETH to run a solo validator. Delegated staking allows you to delegate your tokens to an existing validator without running your own infrastructure. This is the standard model on networks like Solana, Cosmos, Polkadot, and Cardano.
        </p>
        <p>
          Liquid staking has emerged as the most popular approach, allowing users to stake their tokens and receive a liquid receipt token in return. For example, staking ETH through Lido gives you stETH, which can be used in DeFi while your original ETH continues earning staking rewards. Exchange staking through platforms like Coinbase or Binance is the simplest option but introduces custodial risk and typically charges higher fees.
        </p>
      </section>

      <section id="staking-rewards">
        <h2>Staking Rewards and APY</h2>
        <p>
          Staking rewards vary significantly by network and are influenced by the total amount staked, network inflation rate, and transaction fee distribution. Ethereum staking currently yields approximately 3-4% APR. Solana offers around 6-7% APR. Cosmos ecosystem chains range from 10-25% APR depending on the specific network. Higher APR often correlates with higher inflation, which can dilute the real return.
        </p>
        <p>
          It is important to distinguish between APR (Annual Percentage Rate) and APY (Annual Percentage Yield). APY accounts for compounding, so it is always higher than APR for the same rate. When evaluating staking returns, also consider the real yield after accounting for token inflation. A 15% staking APR with 12% inflation results in only 3% real growth in your share of the network.
        </p>
      </section>

      <section id="risks-and-considerations">
        <h2>Risks and Considerations</h2>
        <p>
          Slashing risk is the most staking-specific danger. While rare on established networks, validator software bugs or misconfigurations can lead to slashing events that reduce your staked balance. Choosing well-established validators with strong track records minimizes this risk. Smart contract risk applies when using liquid staking protocols, as vulnerabilities in the staking contract could result in loss of funds.
        </p>
        <p>
          Lock-up periods create opportunity cost. If the market drops significantly during your unbonding period, you cannot sell to limit losses. Liquid staking mitigates this since you can sell the liquid staking token, though it may trade at a slight discount during market stress. Tax implications also matter, as staking rewards are typically treated as income in most jurisdictions at the time they are received.
        </p>
      </section>
    </LearnPageLayout>
  );
}
