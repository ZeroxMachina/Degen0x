import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake Ethereum (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to staking ETH including solo staking, liquid staking providers, staking pools, rewards, risks, and step-by-step instructions.",
  keywords: ["stake Ethereum", "ETH staking", "how to stake ETH", "Lido staking", "liquid staking", "Ethereum staking rewards"],
};

export default function HowToStakeEthereumPage() {
  return (
    <LearnPageLayout title="How to Stake Ethereum" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Staking ETH helps secure the Ethereum network while earning rewards. Since Ethereum's transition to Proof of Stake, staking has become one of the most popular ways to earn yield on ETH holdings. Multiple staking options exist — from running your own validator to using liquid staking protocols — each with different requirements, rewards, and risk profiles."
      toc={[
        { id: "staking-options", title: "staking-options", level: 2 },
        { id: "staking-options", title: "Staking Options", level: 2 },
        { id: "liquid-staking", title: "liquid-staking", level: 2 },
        { id: "liquid-staking", title: "Liquid Staking", level: 2 },
        { id: "solo-staking", title: "solo-staking", level: 2 },
        { id: "solo-staking", title: "Solo Staking", level: 2 },
        { id: "rewards-risks", title: "rewards-risks", level: 2 },
        { id: "rewards-risks", title: "Rewards & Risks", level: 2 },
        { id: "step-by-step", title: "step-by-step", level: 2 },
        { id: "step-by-step-guide", title: "Step-by-Step Guide", level: 2 }
      ]}
      faqs={[
        { question: "How much ETH do I need to stake?", answer: "Solo staking requires 32 ETH to run a validator. Liquid staking protocols (Lido, Rocket Pool, Coinbase) accept any amount of ETH, making staking accessible to everyone. Some staking pools have minimum deposits as low as 0.01 ETH." },
        { question: "What are ETH staking rewards?", answer: "ETH staking rewards vary based on the total amount of ETH staked network-wide and network activity. Typical annual rewards range from 3-5% APR. Liquid staking protocols take a fee (usually 5-10% of rewards), so net yields are slightly lower than solo staking." },
        { question: "Can I unstake my ETH?", answer: "Yes, since the Shapella upgrade in 2023, staked ETH can be withdrawn. Liquid staking tokens (stETH, rETH) can also be traded on DEXs for instant liquidity. Solo validator withdrawals may take days depending on the exit queue length." },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Stake?", href: "/learn/what-is-proof-of-stake", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
        { title: "What Is Restaking?", href: "/learn/what-is-restaking", category: "Learn" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="staking-options"><h2>Staking Options</h2><p>ETH staking options span a spectrum from fully managed to fully self-operated. Exchange staking (Coinbase, Kraken) is the simplest — deposit ETH on the exchange and they handle everything, though you give up custody. Liquid staking protocols (Lido, Rocket Pool) let you stake from your own wallet and receive a liquid token representing your staked ETH. Solo staking gives you full control but requires 32 ETH and technical infrastructure.</p><p>Each option involves different trade-offs. Exchange staking is easiest but introduces counterparty risk. Liquid staking maintains self-custody and provides DeFi composability through liquid staking tokens, but adds smart contract risk. Solo staking maximizes decentralization contribution and rewards but requires significant capital and ongoing maintenance. Distributed validator technology (DVT) is emerging as a middle ground that improves solo staking's reliability.</p></section>
      <section id="liquid-staking"><h2>Liquid Staking</h2><p>Liquid staking lets you stake any amount of ETH and receive a liquid staking token (LST) in return: stETH from Lido, rETH from Rocket Pool, or cbETH from Coinbase. These tokens represent your staked ETH plus accumulated rewards. You can hold them for staking returns, use them as collateral in lending protocols, or provide liquidity in DEX pools — earning additional yield on top of staking rewards.</p><p>Lido is the largest liquid staking protocol by market share, while Rocket Pool offers a more decentralized approach with permissionless node operators. To liquid stake through Lido: connect your wallet to stake.lido.fi, enter the amount of ETH to stake, approve the transaction, and receive stETH. The stETH balance increases daily to reflect staking rewards. To unstake, you can swap stETH back to ETH on a DEX or use Lido's withdrawal mechanism.</p></section>
      <section id="solo-staking"><h2>Solo Staking</h2><p>Solo staking requires 32 ETH, dedicated hardware (or a reliable cloud server), and running Ethereum execution and consensus layer clients. You operate a validator that proposes and attests to blocks, earning full rewards without protocol fees. Solo staking makes the strongest contribution to Ethereum's decentralization and earns the highest rewards per ETH staked.</p><p>The setup involves: choosing and configuring execution and consensus layer clients (e.g., Geth + Prysm), generating validator keys using the official deposit CLI, depositing 32 ETH through the launchpad.ethereum.org, and monitoring your validator's performance. Downtime results in small penalties, while serious offenses (double signing) trigger slashing — loss of a portion of your staked ETH. Reliable hardware and internet connectivity are essential.</p></section>
      <section id="rewards-risks"><h2>Rewards & Risks</h2><p>Staking rewards come from block proposals, attestations, and sync committee duties. Total rewards depend on network participation rate and transaction activity. Current yields typically range from 3-5% APR for solo staking, with liquid staking protocols earning slightly less after fees. MEV rewards from block proposals can add additional variable income for solo validators using MEV-Boost.</p><p>Risks include: slashing penalties for validator misbehavior (solo staking), smart contract risk (liquid staking), temporary illiquidity during network congestion, and the opportunity cost of locked capital. Liquid staking tokens can temporarily trade below the underlying ETH value during market stress. Despite these risks, ETH staking is considered one of the lower-risk yield opportunities in crypto due to Ethereum's maturity and the fundamental nature of staking rewards.</p></section>
      <section id="step-by-step"><h2>Step-by-Step Guide</h2><p>For liquid staking with Lido (simplest approach): ensure you have ETH in your wallet and are connected to Ethereum mainnet, navigate to stake.lido.fi through a bookmarked link, connect your wallet, enter the amount of ETH to stake, confirm the transaction in your wallet, and receive stETH. Your stETH balance will automatically increase to reflect accumulated staking rewards. To use stETH in DeFi, simply interact with protocols that accept it as collateral or for trading.</p><p>For Rocket Pool (more decentralized option): visit stake.rocketpool.net, connect your wallet, enter the amount to stake, confirm the transaction, and receive rETH. Unlike Lido's rebasing stETH, rETH is a value-accruing token whose price increases relative to ETH over time to reflect accumulated rewards. Both approaches can be reversed through the respective protocol's withdrawal mechanism or by swapping the LST on a DEX.</p></section>
    </LearnPageLayout>
  );
}
