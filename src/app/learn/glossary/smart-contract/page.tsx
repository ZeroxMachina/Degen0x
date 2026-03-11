import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Smart Contract? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what smart contracts are, how they work, and why they are the building blocks of DeFi, NFTs, and decentralized applications.",
};

export default function SmartContractPage() {
  return (
    <LearnPageLayout
      title="What Is a Smart Contract?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="A smart contract is a self-executing program stored on a blockchain that automatically enforces the terms of an agreement when predefined conditions are met. Written in languages like Solidity (Ethereum) or Rust (Solana), smart contracts eliminate the need for intermediaries by encoding rules directly into code. They power everything from DeFi protocols and NFT marketplaces to DAOs and token standards."
      toc={[
        { id: "definition", title: "What Is a Smart Contract?", level: 2 },
        { id: "how-it-works", title: "How Smart Contracts Work", level: 2 },
        { id: "use-cases", title: "Use Cases", level: 2 },
        { id: "risks", title: "Risks and Limitations", level: 2 },
        { id: "why-it-matters", title: "Why Smart Contracts Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Are smart contracts really contracts?",
          answer:
            "Smart contracts are not legal contracts in the traditional sense. They are programs that execute automatically based on code. While they can implement the logic of an agreement, they do not inherently have legal enforceability. Some jurisdictions are exploring legal frameworks for smart contracts, but currently, they are best understood as automated code execution with economic consequences.",
        },
        {
          question: "Can smart contracts be changed after deployment?",
          answer:
            "It depends on the design. Immutable contracts cannot be changed after deployment — their code is permanent. Upgradeable contracts use proxy patterns that allow the underlying logic to be swapped while maintaining the same address and state. Upgradeability adds flexibility but introduces trust assumptions about who controls upgrades.",
        },
      ]}
      relatedArticles={[
        { title: "What Is the EVM?", href: "/learn/glossary/ethereum-virtual-machine", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is a DApp?", href: "/learn/glossary/dapp", category: "Glossary" },
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Smart Contract?</h2>
      <p>
        A smart contract is a program deployed on a blockchain that executes predetermined logic when triggered by transactions. The term was coined by computer scientist Nick Szabo in the 1990s, but became practical with Ethereum&apos;s launch in 2015. Smart contracts are deterministic (same input always produces same output), transparent (code is publicly viewable), and unstoppable (they execute as long as the blockchain runs).
      </p>

      <h2 id="how-it-works">How Smart Contracts Work</h2>
      <p>
        A developer writes the contract logic in a programming language like Solidity, compiles it to bytecode, and deploys it to the blockchain by sending a special transaction. The contract receives a unique address and can hold funds, maintain state, and interact with other contracts. When users send transactions to the contract, the EVM executes the relevant function, updates state, and records everything on-chain.
      </p>

      <h2 id="use-cases">Use Cases</h2>
      <p>
        Smart contracts enable an enormous range of applications. DeFi protocols use them for lending, borrowing, and trading without intermediaries. NFT contracts manage creation, ownership, and royalties for digital assets. DAOs use smart contracts for treasury management and governance voting. Token standards (ERC-20, ERC-721) are smart contract specifications. Bridges, oracles, and Layer 2 settlement all rely on smart contracts.
      </p>

      <h2 id="risks">Risks and Limitations</h2>
      <p>
        Smart contract bugs can lead to catastrophic losses — once deployed, flawed code can be exploited before it can be fixed. The DAO hack in 2016 and numerous DeFi exploits have demonstrated these risks. Smart contracts cannot access off-chain data without oracles. They execute exactly as written, which may differ from the developer&apos;s intent. Security audits reduce but do not eliminate risk, and the immutability that provides trust also prevents easy fixes.
      </p>

      <h2 id="why-it-matters">Why Smart Contracts Matter</h2>
      <p>
        Smart contracts are the innovation that transformed blockchain from a ledger technology into a programmable platform. They enable trustless automation of complex agreements, creating financial and organizational structures that operate transparently and without central control. The ability to compose smart contracts together (DeFi composability) has created an open financial system that anyone can participate in and build upon.
      </p>
    </LearnPageLayout>
  );
}
