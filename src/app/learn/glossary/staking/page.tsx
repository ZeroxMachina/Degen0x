import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Staking? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what staking is, how it earns rewards, and the different ways to stake your cryptocurrency safely.",
};

export default function StakingPage() {
  return (
    <LearnPageLayout
      title="What Is Staking?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Staking is the process of locking up cryptocurrency to support the operation of a proof-of-stake blockchain network. In return for staking tokens, participants earn rewards, typically paid in the same cryptocurrency. Staking serves two purposes: it secures the network by requiring validators to have economic skin in the game, and it provides token holders with a way to earn passive yield on their holdings."
      toc={[
        { id: "definition", title: "What Is Staking?", level: 2 },
        { id: "how-it-works", title: "How Staking Works", level: 2 },
        { id: "ways-to-stake", title: "Ways to Stake", level: 2 },
        { id: "risks", title: "Staking Risks", level: 2 },
        { id: "why-it-matters", title: "Why Staking Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "How much can I earn from staking?",
          answer:
            "Staking yields vary by network and conditions. Ethereum staking currently yields approximately 3-5% annually. Other networks offer different rates based on their inflation schedules and staking ratios. Higher yields often come with higher risk. Be cautious of protocols advertising extremely high staking yields, as these are often unsustainable and may involve additional risks.",
        },
        {
          question: "Is staking the same as lending?",
          answer:
            "No. Staking locks your tokens to support network consensus on a proof-of-stake chain. Lending involves depositing tokens into a protocol that lends them to borrowers. Staking rewards come from newly minted tokens and transaction fees. Lending returns come from interest paid by borrowers. The risk profiles are different: staking has slashing risk while lending has default risk.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Proof of Stake?", href: "/learn/glossary/pos", category: "Glossary" },
        { title: "What Is a Node?", href: "/learn/glossary/node", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is Consensus?", href: "/learn/glossary/consensus", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Staking?</h2>
      <p>
        Staking involves depositing cryptocurrency into a proof-of-stake network to help validate transactions and secure the blockchain. Stakers commit their tokens as collateral, signaling their willingness to follow the protocol rules honestly. In return, they receive rewards proportional to their stake. Staking can be thought of as the PoS equivalent of mining: both secure the network, but staking uses economic commitment rather than computational power.
      </p>

      <h2 id="how-it-works">How Staking Works</h2>
      <p>
        On Ethereum, validators deposit 32 ETH into the staking contract and run validator software that proposes and attests to blocks. Correct behavior earns rewards; misbehavior triggers slashing (partial loss of staked ETH). Other PoS chains have different staking mechanics — some allow delegation, where token holders assign their stake to a validator without running their own node, earning a share of the validator&apos;s rewards.
      </p>

      <h2 id="ways-to-stake">Ways to Stake</h2>
      <p>
        Solo staking means running your own validator node with full control and maximum rewards, but requires technical knowledge and minimum token amounts. Liquid staking services (Lido, Rocket Pool) accept any amount and give you a liquid token (stETH, rETH) representing your stake that can be used in DeFi. Centralized exchanges offer staking with minimal effort but introduce custodial risk. Delegated staking lets you choose a validator to stake with.
      </p>

      <h2 id="risks">Staking Risks</h2>
      <p>
        Slashing penalties can reduce your stake if the validator software misbehaves or goes offline excessively. Lock-up periods mean you cannot immediately withdraw staked tokens (Ethereum has an exit queue). Liquid staking tokens can temporarily de-peg from the underlying asset. Smart contract risk exists for liquid staking protocols. The staked token itself may decrease in value, and staking rewards may not offset price declines.
      </p>

      <h2 id="why-it-matters">Why Staking Matters</h2>
      <p>
        Staking is fundamental to PoS network security — the more value staked, the more expensive it is to attack the network. It also represents one of the most established ways to earn yield in crypto, offering returns that come from protocol mechanics rather than unsustainable incentive programs. As PoS has become the dominant consensus mechanism, staking has grown into a multi-hundred-billion-dollar activity that underpins the security of the entire ecosystem.
      </p>
    </LearnPageLayout>
  );
}
