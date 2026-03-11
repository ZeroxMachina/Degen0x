import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Stake Solana (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to staking SOL including validator selection, liquid staking options, rewards, and step-by-step staking instructions.",
  keywords: ["stake Solana", "SOL staking", "how to stake SOL", "Solana validators", "Solana staking rewards", "liquid staking Solana"],
};

export default function HowToStakeSolanaPage() {
  return (
    <LearnPageLayout title="How to Stake Solana" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Staking SOL secures the Solana network and earns you rewards. Solana's native staking is straightforward with no minimum amount, and liquid staking options provide additional flexibility. With typical rewards around 6-8% APY, SOL staking is one of the most accessible and rewarding staking experiences in crypto."
      toc={[
        { id: "native-staking", title: "Native Staking", level: 2 },
        { id: "validator-selection", title: "Choosing a Validator", level: 2 },
        { id: "liquid-staking", title: "Liquid Staking on Solana", level: 2 },
        { id: "rewards", title: "Staking Rewards", level: 2 },
        { id: "how-to", title: "Step-by-Step Guide", level: 2 },
      ]}
      faqs={[
        { question: "What is the minimum to stake SOL?", answer: "There is no hard minimum to stake SOL natively, though a small amount (0.01 SOL) must remain unstaked for transaction fees. Liquid staking protocols also accept any amount. This makes SOL staking accessible regardless of holding size." },
        { question: "How long does it take to unstake SOL?", answer: "Native SOL staking has a cooldown period of approximately 2-3 days (one epoch). During this time, your SOL is deactivating and not earning rewards. Liquid staking tokens (mSOL, JitoSOL) can be instantly swapped on DEXs to avoid the cooldown period." },
        { question: "What are the risks of staking SOL?", answer: "Risks include validator downtime (reduced rewards), slashing (rare on Solana), opportunity cost during the unstaking cooldown, and smart contract risk for liquid staking. Choosing a reliable validator with high uptime and a reasonable commission rate minimizes these risks." },
      ]}
      relatedArticles={[
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn" },
        { title: "What Is Proof of Stake?", href: "/learn/what-is-proof-of-stake", category: "Learn" },
        { title: "What Is a Validator?", href: "/learn/what-is-a-validator", category: "Learn" },
        { title: "How to Stake Ethereum", href: "/learn/how-to-stake-ethereum", category: "Learn" },
      ]}
    >
      <section id="native-staking"><h2>Native Staking</h2><p>Solana's native staking involves delegating your SOL to a validator who processes transactions and secures the network. Unlike Ethereum's 32 ETH requirement for solo validation, Solana allows any SOL holder to delegate to existing validators. Your SOL remains in your wallet (custodially) but is locked during the staking period. You earn rewards proportional to your staked amount, minus the validator's commission.</p><p>Native staking is available directly through Solana wallets like Phantom and Solflare. The process is simple: select a validator, choose the amount to delegate, and confirm the transaction. Rewards are distributed every epoch (approximately 2-3 days) and automatically added to your stake account. You can split your SOL across multiple validators for additional decentralization contribution.</p></section>
      <section id="validator-selection"><h2>Choosing a Validator</h2><p>When selecting a validator, consider: commission rate (the percentage of rewards the validator keeps, typically 0-10%), uptime (validators with higher uptime earn more consistent rewards), total stake (consider delegating to smaller validators to improve network decentralization), and the validator's track record and community involvement.</p><p>Use tools like Stakewiz, validators.app, or your wallet's built-in validator list to compare validators. Avoid validators with 100% commission (they keep all rewards) or very low stake (which may indicate instability). Many community-focused validators offer 0% commission to attract delegators. A validator with consistent high uptime and a reasonable commission (5% or less) is typically a good choice.</p></section>
      <section id="liquid-staking"><h2>Liquid Staking on Solana</h2><p>Solana's liquid staking ecosystem includes Marinade Finance (mSOL), Jito (JitoSOL), and BlazeStake (bSOL). These protocols stake your SOL across multiple validators and give you a liquid token that represents your staked position plus rewards. The liquid token can be used in Solana DeFi — as collateral for lending, in liquidity pools, or for other yield-generating strategies.</p><p>JitoSOL is notable for distributing MEV rewards to stakers in addition to base staking rewards, potentially increasing total yield. Marinade offers both liquid staking and native staking options. To liquid stake: connect your wallet to the protocol's interface, enter the amount of SOL, confirm the transaction, and receive the liquid staking token. Your token's value appreciates over time relative to SOL as staking rewards accrue.</p></section>
      <section id="rewards"><h2>Staking Rewards</h2><p>SOL staking rewards currently range from approximately 6-8% APY, depending on the overall network staking participation rate and the specific validator's performance. Rewards are funded by Solana's inflation schedule, which decreases over time according to a predefined curve. Active, high-uptime validators earn maximum rewards for their delegators.</p><p>Liquid staking tokens may offer slightly different effective yields: JitoSOL includes MEV rewards, while protocol fees reduce net returns slightly compared to native staking. Compounding staking rewards (re-staking earned rewards) increases effective yield over time. When evaluating staking returns, consider both the APY and any validator commission, protocol fees, and the token's performance relative to SOL.</p></section>
      <section id="how-to"><h2>Step-by-Step Guide</h2><p>For native staking in Phantom: open Phantom wallet, click on your SOL balance, select "Start Earning SOL," choose a validator from the list (or search for a specific one), enter the amount to stake (leave some SOL unstaked for transaction fees), and confirm. Rewards will accrue automatically every epoch.</p><p>For liquid staking with Marinade: navigate to marinade.finance, connect your Phantom or Solflare wallet, enter the amount of SOL to stake, confirm the transaction, and receive mSOL. You can then use mSOL across Solana DeFi protocols for additional yield opportunities. To unstake, either use Marinade's unstaking feature (2-3 day delay) or instantly swap mSOL to SOL on a DEX like Jupiter.</p></section>
    </LearnPageLayout>
  );
}
