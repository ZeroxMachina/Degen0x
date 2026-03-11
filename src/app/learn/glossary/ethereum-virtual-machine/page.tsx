import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is the Ethereum Virtual Machine (EVM)? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what the Ethereum Virtual Machine is, how it executes smart contracts, and why EVM compatibility matters across blockchains.",
};

export default function EvmPage() {
  return (
    <LearnPageLayout
      title="What Is the Ethereum Virtual Machine (EVM)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="The Ethereum Virtual Machine (EVM) is the runtime environment for smart contracts on Ethereum. It is a sandboxed, Turing-complete virtual machine that executes bytecode compiled from high-level languages like Solidity. Every Ethereum node runs the EVM to process transactions and maintain consistent state across the network. EVM compatibility has become the dominant standard for smart contract platforms."
      toc={[
        { id: "definition", title: "What Is the EVM?", level: 2 },
        { id: "how-it-works", title: "How the EVM Works", level: 2 },
        { id: "gas-and-execution", title: "Gas and Execution", level: 2 },
        { id: "evm-compatibility", title: "EVM Compatibility", level: 2 },
        { id: "why-it-matters", title: "Why the EVM Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "What does EVM-compatible mean?",
          answer:
            "An EVM-compatible blockchain can execute the same smart contract bytecode as Ethereum. This means developers can deploy their Ethereum smart contracts on chains like BNB Chain, Polygon, Avalanche, and Arbitrum with minimal or no changes. It also means wallets and tools built for Ethereum work across these chains.",
        },
        {
          question: "Why is the EVM described as Turing-complete?",
          answer:
            "Turing-complete means the EVM can theoretically compute anything that any computer can, given enough resources. It supports loops, conditionals, and arbitrary logic. The gas mechanism prevents infinite loops by requiring payment for every computational step, making it practically bounded while theoretically complete.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is a DApp?", href: "/learn/glossary/dapp", category: "Glossary" },
        { title: "What Is Gwei?", href: "/learn/glossary/gwei", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is the EVM?</h2>
      <p>
        The Ethereum Virtual Machine is the computation engine of Ethereum. It processes every transaction and smart contract interaction on the network. Think of it as a global, decentralized computer where every participating node executes the same instructions and arrives at the same result. The EVM operates on a stack-based architecture and processes low-level bytecode instructions called opcodes.
      </p>

      <h2 id="how-it-works">How the EVM Works</h2>
      <p>
        Developers write smart contracts in high-level languages like Solidity, which are compiled into EVM bytecode. When a transaction calls a contract function, every node loads the contract&apos;s bytecode into the EVM, executes the relevant opcodes, and updates the blockchain state. The EVM is fully deterministic: given the same input and state, every node produces exactly the same output.
      </p>

      <h2 id="gas-and-execution">Gas and Execution</h2>
      <p>
        Every EVM operation has a gas cost that reflects its computational complexity. Simple operations like addition cost less gas than storage operations or cryptographic computations. Users specify a gas limit and gas price with each transaction. If execution exceeds the gas limit, the transaction reverts but the gas fee is still consumed. This mechanism prevents spam and infinite loops.
      </p>

      <h2 id="evm-compatibility">EVM Compatibility</h2>
      <p>
        The success of the EVM has led dozens of alternative blockchains to adopt EVM compatibility. Chains like Polygon, Avalanche, BNB Chain, Fantom, and Arbitrum all run EVM-compatible execution environments. This allows developers to port their contracts and tooling across chains with minimal friction, and has made the EVM the de facto standard for smart contract execution.
      </p>

      <h2 id="why-it-matters">Why the EVM Matters</h2>
      <p>
        The EVM is the foundation of programmable money and decentralized applications. It enables trustless execution of complex logic, from simple token transfers to sophisticated DeFi protocols. Its deterministic nature ensures all nodes agree on state transitions, and its sandboxed design prevents contracts from accessing resources outside the blockchain environment.
      </p>
    </LearnPageLayout>
  );
}
