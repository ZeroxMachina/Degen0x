import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Smart Contract? Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what smart contracts are, how they work on blockchains like Ethereum, their use cases in DeFi, NFTs, and DAOs, plus security considerations and limitations.",
  keywords: [
    "smart contract",
    "what is a smart contract",
    "ethereum smart contracts",
    "solidity",
    "smart contract security",
    "blockchain programming",
  ],
};

export default function WhatIsASmartContractPage() {
  return (
    <LearnPageLayout
      title="What Is a Smart Contract?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="10 min"
      intro="A smart contract is a self-executing program stored on a blockchain that automatically enforces the terms of an agreement when predetermined conditions are met. Smart contracts eliminate the need for intermediaries by replacing human enforcement with transparent, immutable code — forming the foundation of DeFi, NFTs, DAOs, and the broader Web3 ecosystem."
      toc={[
        { id: "definition", title: "Understanding Smart Contracts", level: 2 },
        { id: "how-they-work", title: "How Smart Contracts Work", level: 2 },
        { id: "platforms", title: "Smart Contract Platforms", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "security", title: "Smart Contract Security", level: 2 },
        { id: "limitations", title: "Limitations and Challenges", level: 2 },
        { id: "development", title: "Smart Contract Development", level: 2 },
      ]}
      faqs={[
        {
          question: "Can smart contracts be changed after deployment?",
          answer:
            "Traditional smart contracts are immutable once deployed. However, upgradeable proxy patterns allow contract logic to be updated while preserving state and address. This introduces flexibility but also centralization risk, as the upgrade authority could modify the contract in malicious ways.",
        },
        {
          question: "Are smart contracts legally binding?",
          answer:
            "Smart contracts are technically enforceable through code but their legal status varies by jurisdiction. Some jurisdictions recognize smart contracts as legally binding agreements, while others require traditional legal contracts alongside the code. The intersection of smart contracts and law is still evolving.",
        },
        {
          question: "How much does it cost to deploy a smart contract?",
          answer:
            "Deployment costs depend on the blockchain and contract complexity. On Ethereum, deploying a simple contract might cost $50-500 in gas fees depending on network congestion. Layer-2 networks like Arbitrum or Base offer significantly lower deployment costs, often under $1. Solana deployment costs are also minimal.",
        },
        {
          question: "What programming languages are used for smart contracts?",
          answer:
            "Solidity is the most popular language for Ethereum and EVM-compatible chains. Rust is used for Solana and Near. Move is used for Sui and Aptos. Vyper is a Python-like alternative for Ethereum. Cairo is used for StarkNet's zero-knowledge contracts.",
        },
      ]}
      relatedArticles={[
        { title: "Smart Contract Risks", href: "/learn/smart-contract-risks", category: "Learn" },
        { title: "How to Verify a Smart Contract", href: "/learn/how-to-verify-smart-contract", category: "Learn" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Understanding Smart Contracts</h2>
        <p>
          A smart contract is a computer program deployed on a blockchain that executes automatically when specific conditions are met. The term was coined by computer scientist Nick Szabo in 1994, who described them as digital protocols that facilitate, verify, and enforce the negotiation or performance of a contract. However, modern smart contracts go far beyond simple agreements — they are general-purpose programs that can implement complex logic, manage digital assets, and interact with other contracts to create sophisticated decentralized applications.
        </p>
        <p>
          The key properties that distinguish smart contracts from regular software are immutability, transparency, and trustlessness. Once deployed to a blockchain, the contract's code cannot be altered by any party, including its creator. Anyone can read the contract's code and verify its logic. And execution is guaranteed by the blockchain's consensus mechanism rather than by any single server or organization. These properties enable strangers to transact with confidence, knowing the rules cannot be changed midway through.
        </p>
        <p>
          Smart contracts are the building blocks of decentralized applications. Every token, every decentralized exchange, every lending protocol, and every NFT marketplace is powered by smart contracts. Understanding how they work is essential to understanding the modern cryptocurrency ecosystem and evaluating the protocols you interact with.
        </p>
      </section>

      <section id="how-they-work">
        <h2>How Smart Contracts Work</h2>
        <p>
          Smart contracts are deployed to a blockchain as compiled bytecode, which runs on the blockchain's virtual machine — the Ethereum Virtual Machine (EVM) in the case of Ethereum and compatible chains. When a user sends a transaction that calls a function on a smart contract, every validator node on the network executes that function independently and reaches consensus on the result. This distributed execution ensures that no single party can manipulate the outcome.
        </p>
        <p>
          The contract maintains its own state, which includes variables like token balances, configuration parameters, and mapping relationships. State changes only occur through valid transactions that are included in a finalized block. The contract can receive and send cryptocurrency, interact with other contracts, emit events that off-chain applications can listen for, and store data permanently on the blockchain.
        </p>
        <p>
          Gas fees are the cost of execution. Every operation a smart contract performs — reading from storage, writing data, performing calculations — consumes a specific amount of gas. Users pay gas fees to compensate validators for the computational resources required to execute contract functions. More complex operations require more gas, creating an economic incentive for developers to write efficient code. If a transaction runs out of gas before completion, all state changes are reverted but the gas is still consumed.
        </p>
      </section>

      <section id="platforms">
        <h2>Smart Contract Platforms</h2>
        <p>
          Ethereum pioneered smart contracts when it launched in 2015 and remains the dominant platform with the largest developer ecosystem, most battle-tested infrastructure, and highest total value locked in its smart contracts. Ethereum smart contracts are written primarily in Solidity, a language specifically designed for the EVM, and benefit from extensive tooling including development frameworks like Hardhat and Foundry, testing libraries, and formal verification tools.
        </p>
        <p>
          Numerous alternative platforms have emerged to address Ethereum's limitations around speed, cost, and scalability. Solana offers high throughput and low fees using a parallel execution model, with contracts written in Rust. Layer-2 networks like Arbitrum, Optimism, and Base run on top of Ethereum, inheriting its security while offering dramatically lower transaction costs. Each platform makes different trade-offs between decentralization, performance, and developer experience, creating a diverse smart contract ecosystem.
        </p>
        <p>
          Newer platforms like Sui and Aptos use the Move programming language, which was designed specifically to prevent common smart contract vulnerabilities through resource-oriented programming. StarkNet uses Cairo for zero-knowledge smart contracts that can verify computation off-chain while posting only proofs on-chain. The evolution of smart contract platforms continues to push the boundaries of what decentralized applications can achieve.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          Decentralized Finance (DeFi) represents the most impactful application of smart contracts. Lending protocols like Aave use smart contracts to manage billions in deposits and loans without any human involvement — collateral ratios are enforced automatically, interest rates adjust algorithmically, and liquidations execute instantly when positions become undercollateralized. Decentralized exchanges like Uniswap use automated market maker contracts to facilitate token swaps without order books or centralized matching engines.
        </p>
        <p>
          NFTs (Non-Fungible Tokens) are smart contracts that represent unique digital ownership. Each NFT is a record on a smart contract that maps a unique token ID to an owner address, enabling verifiable ownership of digital art, music, gaming items, and real-world asset representations. The smart contract ensures that ownership transfers are atomic and recorded permanently.
        </p>
        <p>
          DAOs use smart contracts to encode organizational rules and automate governance. Voting, treasury management, and proposal execution all happen through smart contracts, creating organizations that operate transparently and cannot be captured by any individual. Other use cases include supply chain tracking, insurance automation, decentralized identity systems, and prediction markets — essentially any application where trustless execution and transparent rules provide value.
        </p>
      </section>

      <section id="security">
        <h2>Smart Contract Security</h2>
        <p>
          Smart contract security is critically important because vulnerabilities can lead to irreversible loss of funds. Unlike traditional software where bugs can be patched after deployment, exploited smart contracts cannot be rolled back — stolen funds are permanently lost unless the attacker voluntarily returns them. The history of DeFi is marked by billions of dollars lost to smart contract exploits, making security the paramount concern in contract development.
        </p>
        <p>
          Common vulnerabilities include reentrancy attacks, where a malicious contract repeatedly calls back into a vulnerable contract before state updates complete; integer overflow and underflow errors that produce unexpected calculation results; access control failures that allow unauthorized users to execute privileged functions; and oracle manipulation where attackers feed false price data to exploit contract logic. Flash loan attacks combine multiple vulnerabilities across protocols to extract value in a single transaction.
        </p>
        <p>
          The industry has developed multiple layers of defense: professional security audits review code before deployment, formal verification mathematically proves contract properties, bug bounty programs incentivize white-hat hackers to discover vulnerabilities, and monitoring systems detect suspicious on-chain activity. Despite these measures, the complexity of modern DeFi protocols means that new vulnerability classes continue to emerge, and users should always consider smart contract risk when depositing funds into any protocol.
        </p>
      </section>

      <section id="limitations">
        <h2>Limitations and Challenges</h2>
        <p>
          Smart contracts cannot access external data on their own — they can only read data stored on their blockchain. This limitation, known as the oracle problem, means that contracts relying on real-world information like asset prices, weather data, or sports results must trust external data feeds called oracles. The accuracy and reliability of these oracles becomes a critical dependency and potential point of failure for any contract that uses them.
        </p>
        <p>
          Scalability remains a challenge. Every smart contract interaction must be processed by every validator on the network, which limits the number of transactions the system can handle. This creates congestion during high-demand periods, resulting in elevated gas fees that can make small transactions economically unviable. Layer-2 solutions, sharding, and alternative consensus mechanisms are actively working to address these constraints.
        </p>
        <p>
          The immutability of smart contracts, while a security feature, also means that bugs in deployed contracts cannot be easily fixed. Upgradeable contract patterns exist but introduce their own risks around centralized upgrade authority. The gap between what users expect from a protocol and what the code actually does can lead to unexpected outcomes, highlighting the importance of code audits and user education.
        </p>
      </section>

      <section id="development">
        <h2>Smart Contract Development</h2>
        <p>
          Developing smart contracts requires specialized knowledge beyond traditional software engineering. Developers must understand blockchain fundamentals, cryptographic principles, gas optimization, security best practices, and the specific programming language for their target platform. The most popular development path starts with Solidity for EVM-compatible chains, using frameworks like Hardhat or Foundry for testing and deployment.
        </p>
        <p>
          The development lifecycle typically includes writing contract code, creating comprehensive test suites covering edge cases, deploying to testnets for integration testing, conducting internal code reviews, obtaining professional security audits, deploying to mainnet with careful parameter configuration, and establishing ongoing monitoring and incident response procedures. Each step is critical because the consequences of shipping buggy smart contract code are far more severe than in traditional software development.
        </p>
      </section>
    </LearnPageLayout>
  );
}
