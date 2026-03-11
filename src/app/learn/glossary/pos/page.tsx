import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Proof of Stake (PoS)? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what proof of stake is, how it differs from proof of work, and why it has become the dominant consensus mechanism.",
};

export default function PosPage() {
  return (
    <LearnPageLayout
      title="What Is Proof of Stake (PoS)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="Proof of Stake (PoS) is a consensus mechanism where validators are selected to create new blocks based on the amount of cryptocurrency they have staked (locked up) as collateral. Unlike Proof of Work which requires energy-intensive mining, PoS secures the network through economic incentives: validators risk losing their staked tokens if they act maliciously. Ethereum transitioned to PoS in 2022 with The Merge."
      toc={[
        { id: "definition", title: "What Is Proof of Stake?", level: 2 },
        { id: "how-it-works", title: "How PoS Works", level: 2 },
        { id: "pos-vs-pow", title: "PoS vs Proof of Work", level: 2 },
        { id: "staking-rewards", title: "Staking Rewards", level: 2 },
        { id: "why-it-matters", title: "Why PoS Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is proof of stake secure?",
          answer:
            "PoS is considered secure when properly designed. The security comes from economic incentives: validators stake valuable tokens that can be slashed (destroyed) if they misbehave. Attacking a PoS network requires acquiring a majority of staked tokens, which is extremely expensive and would devalue the attacker's own holdings. Ethereum's PoS requires 32 ETH per validator, with billions staked total.",
        },
        {
          question: "Can anyone become a validator in PoS?",
          answer:
            "Requirements vary by network. Ethereum requires 32 ETH (worth thousands of dollars) to run a solo validator. Other networks have different minimums. Liquid staking services like Lido and Rocket Pool allow users to stake any amount by pooling funds. Delegated PoS chains allow token holders to delegate their stake to a validator without running one themselves.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Work?", href: "/learn/glossary/pow", category: "Glossary" },
        { title: "What Is Staking?", href: "/learn/glossary/staking", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Proof of Stake?</h2>
      <p>
        Proof of Stake is a consensus mechanism that selects block producers based on their economic stake in the network rather than computational power. Validators lock up (stake) their tokens as collateral and are chosen to propose and attest to new blocks. Correct behavior is rewarded with additional tokens, while malicious behavior is punished by slashing (destroying) staked tokens. This creates a strong economic incentive for honest participation.
      </p>

      <h2 id="how-it-works">How PoS Works</h2>
      <p>
        Validators deposit tokens into a staking contract. The protocol uses a selection algorithm (often incorporating randomization and stake weighting) to choose which validator proposes the next block. Other validators then attest that the proposed block is valid. Once enough attestations are collected, the block is finalized. Validators earn rewards for correct proposals and attestations, and face penalties for going offline or acting dishonestly.
      </p>

      <h2 id="pos-vs-pow">PoS vs Proof of Work</h2>
      <p>
        PoW requires miners to expend electricity to solve puzzles, consuming substantial energy. PoS replaces this with economic staking, reducing energy consumption by over 99%. PoW has a longer track record and arguably simpler security assumptions. PoS offers better energy efficiency, potentially better decentralization (no need for specialized hardware), and new features like finality (blocks that cannot be reversed). Both provide Sybil resistance.
      </p>

      <h2 id="staking-rewards">Staking Rewards</h2>
      <p>
        Validators earn rewards in the form of newly minted tokens and transaction fees. Ethereum validators currently earn approximately 3-5% annual yield, varying with the total amount staked and network activity. Staking rewards create a native yield for token holders, making PoS tokens attractive for long-term investors. However, staking involves risks including slashing penalties and liquidity lock-up periods.
      </p>

      <h2 id="why-it-matters">Why PoS Matters</h2>
      <p>
        PoS has become the dominant consensus mechanism for new blockchain networks. Its energy efficiency addresses environmental concerns about cryptocurrency. It enables broader participation since validators do not need expensive mining hardware. The Ethereum Merge demonstrated that a major network can successfully transition from PoW to PoS. Understanding PoS is essential as the majority of crypto innovation now occurs on PoS chains.
      </p>
    </LearnPageLayout>
  );
}
