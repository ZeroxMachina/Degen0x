import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Delegator? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what a delegator is in proof-of-stake networks, how delegation works, the benefits and risks, and how to choose the right validator.",
};

export default function DelegatorPage() {
  return (
    <LearnPageLayout title="What Is a Delegator?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="A delegator is a token holder who stakes their cryptocurrency with a validator without running their own node infrastructure. Delegation allows anyone to participate in network security and earn staking rewards by lending their economic weight to a chosen validator. The delegator retains ownership of their tokens while the validator uses the delegated stake to increase their consensus power and share a portion of rewards back to delegators."
      toc={[{ id: "definition", title: "What Is a Delegator?", level: 2 }, { id: "how-delegation-works", title: "How Delegation Works", level: 2 }, { id: "benefits-and-risks", title: "Benefits and Risks", level: 2 }, { id: "choosing-validators", title: "Best Practices for Delegators", level: 2 }]}
      faqs={[{ question: "Do I lose custody of my tokens when delegating?", answer: "On most networks, no. Delegation is a non-custodial operation where your tokens remain in your wallet or a staking contract you control. You can undelegate at any time, subject to the network's unbonding period. Validators cannot spend your delegated tokens. This is different from depositing tokens on a centralized exchange for staking." },
        { question: "Can I delegate to multiple validators?", answer: "On many networks, yes. Cosmos chains, Polkadot, and Solana all support multi-validator delegation. Spreading your delegation across multiple validators reduces concentration risk and supports network decentralization. Ethereum's native staking requires 32 ETH per validator, but liquid staking protocols effectively delegate across many validators." }]}
      relatedArticles={[{ title: "Validator", href: "/learn/glossary/validator", category: "Glossary" }, { title: "Slashing", href: "/learn/glossary/slashing", category: "Glossary" }, { title: "Bonding", href: "/learn/glossary/bonding", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is a Delegator?</h2>
      <p>A delegator participates in proof-of-stake consensus by assigning their tokens to a validator of their choice. This is the most accessible way to earn staking rewards, requiring no technical infrastructure or minimum stake on most networks. The validator performs the actual block production and validation work, and the delegator shares in the rewards proportionally to their delegated amount, minus the validator&apos;s commission fee.</p>

      <h2 id="how-delegation-works">How Delegation Works</h2>
      <p>To delegate, you select a validator and submit a delegation transaction from your wallet. Your tokens are bonded to that validator, increasing their total stake and consensus power. Rewards accrue based on your share of the validator&apos;s total delegation. Most networks require an unbonding period to undelegate (21 days on Cosmos, variable on other chains). During unbonding, tokens are locked and do not earn rewards. You can typically redelegate between validators without unbonding.</p>

      <h2 id="benefits-and-risks">Benefits and Risks</h2>
      <p>Benefits include earning passive staking rewards without running infrastructure, contributing to network security, and maintaining ownership of your tokens. Risks include slashing if your chosen validator misbehaves (some networks pass slashing penalties to delegators), the opportunity cost of locked tokens during the unbonding period, and the possibility of validator downtime reducing your rewards. Choosing reliable, well-established validators minimizes these risks.</p>

      <h2 id="choosing-validators">Best Practices for Delegators</h2>
      <p>Diversify across multiple validators to reduce concentration risk. Avoid validators with the highest stake, as delegating to smaller validators improves network decentralization and often provides comparable rewards. Check validator commission rates (typically 5-20%), uptime history, and community reputation. Review your delegation periodically and redelegate if your validator&apos;s performance degrades. Participate in governance votes that come with your delegated tokens to have a voice in network decisions.</p>
    </LearnPageLayout>
  );
}
