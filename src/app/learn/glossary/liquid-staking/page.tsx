import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Liquid Staking? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what liquid staking is, how it works, major liquid staking protocols, and why liquid staking has become the dominant way to stake cryptocurrency.",
};

export default function LiquidStakingPage() {
  return (
    <LearnPageLayout title="What Is Liquid Staking?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Liquid staking allows users to stake their cryptocurrency and receive a tradeable receipt token that represents their staked position plus accumulated rewards. This solves the liquidity problem of traditional staking, where tokens are locked and unusable during the staking period. With liquid staking, you earn staking rewards while simultaneously using your liquid staking token in DeFi for lending, borrowing, and liquidity provision."
      toc={[{ id: "definition", title: "What Is Liquid Staking?", level: 2 }, { id: "how-it-works", title: "How Liquid Staking Works", level: 2 }, { id: "major-protocols", title: "Major Liquid Staking Protocols", level: 2 }, { id: "risks", title: "Liquid Staking Risks", level: 2 }]}
      faqs={[{ question: "Is liquid staking safe?", answer: "Liquid staking introduces smart contract risk on top of base staking risk. Major protocols like Lido have billions in TVL and multiple audits, but they are not risk-free. The liquid staking token can trade at a discount during market stress. Validator performance and slashing also affect the value of liquid staking tokens. Diversifying across multiple liquid staking providers reduces concentration risk." },
        { question: "What is the difference between stETH and rETH?", answer: "stETH (Lido) is a rebasing token that increases in balance daily to reflect earned rewards. rETH (Rocket Pool) is a value-accruing token whose price increases relative to ETH as rewards accumulate. Both represent staked ETH, but they differ in mechanism, decentralization level, and DeFi integration depth." }]}
      relatedArticles={[{ title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn Crypto" }, { title: "Restaking", href: "/learn/glossary/restaking", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }, { title: "Unbonding", href: "/learn/glossary/unbonding", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Liquid Staking?</h2>
      <p>Liquid staking is a mechanism that allows you to stake cryptocurrency and receive a liquid derivative token in return. You deposit ETH into Lido and receive stETH, which represents your staked ETH and earns staking rewards automatically. Unlike traditional staking where your tokens are locked, stETH can be traded on DEXs, used as collateral in lending protocols, or deployed in yield strategies. This unlocks the capital efficiency that traditional staking sacrifices.</p>

      <h2 id="how-it-works">How Liquid Staking Works</h2>
      <p>When you deposit tokens into a liquid staking protocol, the protocol stakes them with validators on your behalf and mints a receipt token. The receipt token accrues value from staking rewards either by increasing in balance (rebasing) or increasing in price (value-accruing). When you want your original tokens back, you can either unstake through the protocol (subject to withdrawal queues) or sell the liquid staking token on secondary markets for immediate liquidity.</p>

      <h2 id="major-protocols">Major Liquid Staking Protocols</h2>
      <p>Lido is the largest liquid staking protocol, holding over 30% of all staked ETH. Rocket Pool offers a more decentralized approach with permissionless node operators. Coinbase&apos;s cbETH provides institutional-grade liquid staking. Jito on Solana offers liquid staking with MEV rewards. Stride provides liquid staking across Cosmos chains. Each protocol differs in decentralization, validator diversity, and fee structure.</p>

      <h2 id="risks">Liquid Staking Risks</h2>
      <p>Smart contract vulnerabilities in the liquid staking protocol could result in loss of deposited funds. Depeg risk occurs when the liquid staking token trades below its theoretical value during market stress. Centralization risk arises when a single protocol controls a large percentage of staked tokens, potentially influencing consensus. Slashing risk from validator misbehavior affects the value backing liquid staking tokens. Evaluate each protocol&apos;s track record, audit history, and validator diversification before committing significant capital.</p>
    </LearnPageLayout>
  );
}
