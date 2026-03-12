import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Proof of Stake (PoS) Explained (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how Proof of Stake works, why Ethereum switched to PoS, staking rewards, validator requirements, slashing risks, and how PoS compares to Proof of Work.",
};

export default function ProofOfStakePage() {
  return (
    <LearnPageLayout
      title="Proof of Stake (PoS) Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Proof of Stake (PoS) is a consensus mechanism where validators are selected to create new blocks based on the amount of cryptocurrency they have staked as collateral. Unlike Proof of Work, which requires enormous computational power, PoS achieves network security through economic incentives — validators risk losing their staked assets if they act dishonestly. Since Ethereum's historic transition to PoS in September 2022, it has become the dominant consensus mechanism across the blockchain ecosystem."
      toc={[
        { id: "how-pos-works", title: "how-pos-works", level: 2 },
        { id: "how-proof-of-stake-works", title: "How Proof of Stake Works", level: 2 },
        { id: "staking-rewards", title: "staking-rewards", level: 2 },
        { id: "staking-rewards-and-economics", title: "Staking Rewards and Economics", level: 2 },
        { id: "slashing", title: "slashing", level: 2 },
        { id: "slashing-and-validator-penalties", title: "Slashing and Validator Penalties", level: 2 },
        { id: "variations", title: "variations", level: 2 },
        { id: "pos-variations", title: "PoS Variations", level: 2 },
        { id: "advantages-tradeoffs", title: "advantages-tradeoffs", level: 2 },
        { id: "advantages-and-trade-offs", title: "Advantages and Trade-offs", level: 2 }
      ]}
      faqs={[
        {
          question: "How much can you earn from staking?",
          answer:
            "Staking rewards vary by network and market conditions. Ethereum staking typically yields 3-5% annually, while other PoS networks may offer higher rates. Rewards come from newly minted tokens and transaction fees. Liquid staking protocols allow you to earn staking rewards while maintaining liquidity through derivative tokens.",
        },
        {
          question: "Do you need technical knowledge to stake?",
          answer:
            "Running your own validator node requires technical expertise and a minimum stake (32 ETH for Ethereum). However, most people stake through liquid staking protocols like Lido or through their exchange accounts, which require no technical knowledge. Delegated PoS networks like Cosmos allow you to delegate tokens to a validator of your choice.",
        },
        {
          question: "Can you lose money staking?",
          answer:
            "Yes. Validators can be slashed for misbehavior, resulting in loss of staked funds. Even without slashing, the value of your staked tokens can decrease due to market volatility. Some protocols also have unbonding periods during which your tokens are locked and cannot be sold, exposing you to price risk during that window.",
        },
      ]}
      relatedArticles={[
        { title: "Proof of Work Explained", href: "/learn/proof-of-work", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
        { title: "Consensus Mechanisms Explained", href: "/learn/consensus-mechanisms", category: "Learn" },
        { title: "The Blockchain Trilemma", href: "/learn/blockchain-trilemma", category: "Learn" },
      ]}
    >
      <section id="how-pos-works">
        <h2>How Proof of Stake Works</h2>
        <p>
          In a Proof of Stake system, participants lock up (stake) a certain amount of the network's native cryptocurrency to become validators. The protocol then selects validators to propose and attest to new blocks based on factors that typically include the size of their stake, the length of time they have been staking, and an element of randomization to prevent concentration of power among the wealthiest participants.
        </p>
        <p>
          When selected, a validator proposes a new block containing pending transactions. Other validators then attest to the block's validity. Once a sufficient number of attestations are collected, the block is finalized and added to the chain. The proposer and attestors receive rewards in the form of newly minted tokens and a share of transaction fees. This entire process consumes minimal energy compared to Proof of Work since it does not require solving computationally intensive puzzles.
        </p>
        <p>
          The security of PoS relies on the economic principle that validators have a financial stake in the network's integrity. Acting honestly preserves and grows their staked capital through rewards, while acting dishonestly results in the destruction of their stake through a mechanism called slashing. This creates a powerful deterrent against attacks without requiring physical resource expenditure.
        </p>
      </section>

      <section id="staking-rewards">
        <h2>Staking Rewards and Economics</h2>
        <p>
          Validators earn rewards for successfully proposing and attesting to blocks. The reward rate is determined by the protocol and typically depends on the total amount of cryptocurrency staked across the network — when fewer tokens are staked, rewards per validator are higher to incentivize more participation, and vice versa. This creates a self-regulating economic equilibrium that targets an optimal level of network security.
        </p>
        <p>
          On Ethereum, validators must stake a minimum of 32 ETH to run a node. Annual yields have typically ranged from 3% to 5%, varying with network activity and the total staking ratio. Transaction fees and priority tips from users add supplemental income. During periods of high network usage, these fees can significantly boost validator returns, sometimes creating large spikes in daily earnings.
        </p>
      </section>

      <section id="slashing">
        <h2>Slashing and Validator Penalties</h2>
        <p>
          Slashing is the mechanism by which validators lose a portion of their staked tokens for provably malicious behavior, such as proposing two different blocks at the same height (equivocation) or making contradictory attestations. Slashing penalties are designed to be severe enough to deter attacks while being proportional to the offense. On Ethereum, the minimum slashing penalty is 1/32 of the validator's stake, with additional penalties scaling based on how many other validators are slashed simultaneously.
        </p>
        <p>
          Beyond slashing, validators can receive lighter penalties for less serious offenses such as going offline or failing to submit attestations on time. These inactivity penalties are relatively mild and serve to encourage validators to maintain reliable uptime. The combination of rewards for good behavior and penalties for bad behavior creates a robust incentive structure that keeps the network functioning securely even without central oversight.
        </p>
      </section>

      <section id="variations">
        <h2>PoS Variations</h2>
        <p>
          Several variations of Proof of Stake have been developed to address different requirements. Delegated Proof of Stake (DPoS), used by networks like EOS and Tron, allows token holders to vote for a limited set of delegates who validate transactions on their behalf. This achieves very high throughput but concentrates validation power among fewer participants, raising decentralization concerns.
        </p>
        <p>
          Nominated Proof of Stake (NPoS), used by Polkadot, allows nominators to back validators they trust with their stake. Liquid Proof of Stake, used by Tezos, allows any token holder to delegate their staking rights without locking their tokens. Bonded Proof of Stake, used by Cosmos, requires stakers to lock their tokens for a fixed unbonding period. Each variation makes different trade-offs between security, decentralization, capital efficiency, and governance participation.
        </p>
      </section>

      <section id="advantages-tradeoffs">
        <h2>Advantages and Trade-offs</h2>
        <p>
          The most cited advantage of PoS is energy efficiency. Ethereum's transition from PoW to PoS reduced its energy consumption by over 99.95%, eliminating the need for energy-intensive mining hardware. PoS also enables higher transaction throughput and faster finality since block creation does not depend on solving computational puzzles. The lower barrier to entry — staking tokens versus purchasing specialized mining hardware — can promote broader participation in network validation.
        </p>
        <p>
          However, PoS introduces its own trade-offs. Wealth concentration is a concern: those who hold more tokens earn more rewards, potentially leading to increasing centralization over time. The nothing-at-stake problem — where validators can costlessly vote on multiple chain forks — requires careful protocol design to mitigate. Additionally, PoS systems have a shorter track record than Bitcoin's Proof of Work, which has operated securely for over fifteen years. These trade-offs mean that the choice between PoW and PoS depends on a project's priorities and the threat model it aims to address.
        </p>
      </section>
    </LearnPageLayout>
  );
}
