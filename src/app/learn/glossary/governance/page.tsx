import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Governance in Crypto? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what governance means in cryptocurrency, how on-chain governance works, the role of governance tokens, and why decentralized governance matters.",
};

export default function GovernancePage() {
  return (
    <LearnPageLayout
      title="What Is Governance?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="5 min read"
      intro="Governance in crypto refers to the systems and processes by which decentralized protocols make collective decisions about upgrades, parameters, and resource allocation. Through governance tokens and voting mechanisms, stakeholders can propose and vote on changes to the protocol without relying on a centralized authority. Governance is what makes truly decentralized protocols possible, giving communities ownership over the rules that govern their financial infrastructure."
      toc={[
        { id: "definition", title: "What Is Governance?", level: 2 },
        { id: "on-chain-governance", title: "On-Chain Governance", level: 2 },
        { id: "governance-tokens", title: "Governance Tokens", level: 2 },
        { id: "importance", title: "Why Governance Matters", level: 2 },
      ]}
      faqs={[
        { question: "What is a governance token?", answer: "A governance token gives holders the right to vote on protocol decisions. Each token typically represents one vote. Major governance tokens include UNI (Uniswap), AAVE, COMP (Compound), ARB (Arbitrum), and OP (Optimism). Some protocols use vote-escrow models where locking tokens for longer grants more voting power." },
        { question: "Is crypto governance truly decentralized?", answer: "In practice, governance power is often concentrated among large token holders, founding teams, and VCs who received large allocations. Voter participation rates are typically low. However, governance is progressively decentralizing as communities mature, delegate systems develop, and new governance mechanisms reduce plutocratic influence." },
      ]}
      relatedArticles={[
        { title: "Crypto Governance Guide", href: "/learn/crypto-governance", category: "Learn Crypto" },
        { title: "DAO Participation", href: "/learn/dao-participation", category: "Learn Crypto" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn Crypto" },
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Governance?</h2>
      <p>
        Governance is the decision-making framework that determines how a protocol evolves over time. In traditional companies, executives and boards make these decisions. In decentralized protocols, governance is distributed among token holders who can propose changes, vote on proposals, and execute approved decisions through smart contracts. This model aims to create systems where users have a real voice in the rules that affect their assets and activities.
      </p>

      <h2 id="on-chain-governance">On-Chain Governance</h2>
      <p>
        On-chain governance executes directly through smart contracts. When a proposal reaches the required quorum and passes, it is automatically queued in a time-lock contract and executed after a delay period. This process is fully transparent and verifiable. Off-chain governance uses tools like Snapshot for gasless signaling votes, with results then implemented by multisig holders or development teams. Most protocols use a hybrid of both approaches.
      </p>

      <h2 id="governance-tokens">Governance Tokens</h2>
      <p>
        Governance tokens quantify voting power within a protocol. Standard models give one vote per token, but variations exist. Vote-escrowed tokens (veTokens) reward longer lock-up periods with more voting power. Quadratic voting reduces whale influence by making each additional vote cost more. Delegated voting allows holders to transfer their voting power to trusted delegates who vote on their behalf, improving participation without requiring every holder to research every proposal.
      </p>

      <h2 id="importance">Why Governance Matters</h2>
      <p>
        Good governance determines whether a protocol can adapt, grow, and serve its community effectively. It controls how billions in treasury funds are allocated, how protocol fees are distributed, and how the protocol evolves technically. Poor governance can lead to stagnation, capture by special interests, or catastrophic parameter changes. For token holders, governance is both a right and a responsibility that directly impacts the value and utility of their holdings.
      </p>
    </LearnPageLayout>
  );
}
