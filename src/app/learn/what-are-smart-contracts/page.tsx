import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Are Smart Contracts? (${CURRENT_YEAR}) | degen0x`,
  description:
    "Understand smart contracts: self-executing programs on blockchains that automate agreements without intermediaries. Learn how they work, their uses in DeFi and NFTs, and security considerations.",
};

export default function WhatAreSmartContractsPage() {
  return (
    <LearnPageLayout
      title="What Are Smart Contracts?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Smart contracts are self-executing programs stored on a blockchain that automatically enforce the terms of an agreement when predetermined conditions are met. They eliminate the need for intermediaries by encoding rules directly into code that runs exactly as written, without the possibility of downtime, censorship, or third-party interference. Smart contracts are the building blocks of decentralized applications and the entire DeFi ecosystem."
      toc={[
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-smart-contracts-work", title: "How Smart Contracts Work", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "smart-contract-platforms", title: "Smart Contract Platforms", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "security-considerations", title: "Security Considerations", level: 2 },
        { id: "future", title: "future", level: 2 },
        { id: "the-future-of-smart-contracts", title: "The Future of Smart Contracts", level: 2 }
      ]}
      faqs={[
        {
          question: "Are smart contracts legally binding?",
          answer:
            "The legal status of smart contracts varies by jurisdiction. While the code executes automatically on the blockchain, its legal enforceability depends on local laws. Some jurisdictions have begun recognizing smart contracts as legally valid agreements, but the legal framework is still evolving. Many projects use smart contracts alongside traditional legal agreements for comprehensive coverage.",
        },
        {
          question: "Can smart contracts be changed after deployment?",
          answer:
            "Standard smart contracts are immutable once deployed. However, developers can use upgradeable proxy patterns that allow the logic to be updated while preserving the contract's address and stored data. This flexibility comes with a trade-off: users must trust the contract owner not to make malicious upgrades.",
        },
        {
          question: "What programming language are smart contracts written in?",
          answer:
            "Solidity is the most popular language for Ethereum and EVM-compatible chains. Rust is used for Solana programs. Vyper is an alternative for Ethereum that emphasizes simplicity and security. Move is used on Aptos and Sui. Each language has different strengths regarding security, expressiveness, and tooling.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
        { title: "Smart Contract Security", href: "/learn/smart-contract-security", category: "Learn" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
        { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn" },
      ]}
    >
      <section id="how-they-work">
        <h2>How Smart Contracts Work</h2>
        <p>
          A smart contract is essentially a program deployed to a blockchain address that contains a set of functions and state variables. When a user or another contract calls one of its functions and sends a transaction, the blockchain's virtual machine executes the code deterministically — every node in the network runs the same computation and arrives at the same result. This deterministic execution ensures that the contract behaves identically regardless of which node processes the transaction.
        </p>
        <p>
          Consider a simple escrow example: a buyer deposits funds into a smart contract, a seller delivers goods, and the buyer confirms receipt. The contract automatically releases payment to the seller upon confirmation. If the buyer fails to confirm within a specified timeframe, the contract can include logic for dispute resolution or automatic refund. All rules are transparent, immutable, and execute exactly as coded without any human intermediary.
        </p>
        <p>
          Smart contracts can hold and manage significant amounts of value, interact with other contracts (composability), emit events that external applications can listen for, and maintain complex state across multiple transactions. This programmability is what makes blockchains like Ethereum fundamentally different from Bitcoin, which was designed primarily for value transfer.
        </p>
      </section>

      <section id="platforms">
        <h2>Smart Contract Platforms</h2>
        <p>
          Ethereum pioneered general-purpose smart contracts when it launched in 2015, and it remains the largest smart contract platform by total value locked and developer ecosystem. Smart contracts on Ethereum are typically written in Solidity and run on the Ethereum Virtual Machine (EVM). The EVM standard has been adopted by numerous other blockchains including BNB Chain, Avalanche, Polygon, Arbitrum, and Base, creating a vast ecosystem of EVM-compatible chains.
        </p>
        <p>
          Solana takes a different approach, using Rust-based programs that run on its own virtual machine, achieving higher throughput at the cost of EVM compatibility. Newer platforms like Aptos and Sui use the Move programming language, which was designed specifically for safe resource management in smart contracts. Each platform offers different trade-offs in terms of speed, cost, security guarantees, and developer tooling, but the fundamental concept of programmable, self-executing code on a blockchain remains consistent across all of them.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          Decentralized finance is the largest application of smart contracts. Lending protocols like Aave use smart contracts to automatically manage deposits, calculate interest rates based on supply and demand, and execute liquidations when collateral values fall below required thresholds. Decentralized exchanges like Uniswap use smart contracts to create automated market makers that enable permissionless token trading without order books or centralized matching engines.
        </p>
        <p>
          NFTs (non-fungible tokens) are smart contracts that represent unique digital assets, from art and music to gaming items and real estate deeds. DAOs use smart contracts to create organizations governed by token holders who vote on proposals that are automatically executed on-chain. Insurance protocols, prediction markets, identity systems, and supply chain tracking all leverage smart contracts to automate processes that traditionally require trusted intermediaries.
        </p>
      </section>

      <section id="security">
        <h2>Security Considerations</h2>
        <p>
          Because smart contracts often manage millions or billions of dollars in value and are immutable once deployed, security is paramount. Common vulnerabilities include reentrancy attacks (where a malicious contract repeatedly calls back into the victim contract before state updates complete), integer overflow errors, access control flaws, and oracle manipulation. The history of DeFi includes numerous high-profile exploits that resulted in hundreds of millions of dollars in losses.
        </p>
        <p>
          Best practices for smart contract security include professional audits by reputable firms, formal verification of critical logic, comprehensive test suites, bug bounty programs, and gradual rollouts with limited initial deposits. Users should verify that contracts they interact with have been audited, check whether the contract is upgradeable and who controls the upgrade mechanism, and understand the risks before depositing funds.
        </p>
      </section>

      <section id="future">
        <h2>The Future of Smart Contracts</h2>
        <p>
          Smart contract technology continues to evolve rapidly. Account abstraction is making smart contract wallets the default, enabling features like social recovery, gas sponsorship, and batched transactions that dramatically improve user experience. Cross-chain messaging protocols are enabling smart contracts on different blockchains to communicate and interact, breaking down the siloed nature of individual chains.
        </p>
        <p>
          Zero-knowledge proofs are enabling privacy-preserving smart contracts that can verify computations without revealing underlying data. Formal verification tools are maturing, allowing developers to mathematically prove that their contracts behave correctly. As these technologies advance, smart contracts are expected to move beyond crypto-native applications into mainstream finance, governance, and enterprise operations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
