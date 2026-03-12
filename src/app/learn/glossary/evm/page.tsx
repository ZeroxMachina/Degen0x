import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is the EVM (Ethereum Virtual Machine)? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what the Ethereum Virtual Machine (EVM) is, how it executes smart contracts, EVM compatibility, and why it matters for the blockchain ecosystem.",
  keywords: ["EVM", "Ethereum Virtual Machine", "EVM compatible", "smart contract execution", "EVM chains"],
};

export default function EvmPage() {
  return (
    <LearnPageLayout title="What Is the EVM?" categoryName="Glossary" categorySlug="learn/glossary" readTime="5 min" intro="The Ethereum Virtual Machine (EVM) is the computation engine that executes smart contracts on Ethereum and all EVM-compatible blockchains. It acts as a decentralized computer — every node in the network runs an identical copy of the EVM, processing the same transactions and arriving at the same state. The EVM has become the de facto standard for smart contract execution, with dozens of blockchains adopting EVM compatibility to leverage Ethereum's vast ecosystem of tools, developers, and applications."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "evm-compatibility", title: "evm-compatibility", level: 2 },
        { id: "evm-compatibility", title: "EVM Compatibility", level: 2 },
        { id: "gas-and-execution", title: "gas-and-execution", level: 2 },
        { id: "gas-and-execution", title: "Gas and Execution", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-and-alternatives", title: "Limitations and Alternatives", level: 2 }
      ]}
      faqs={[
        { question: "What does EVM-compatible mean?", answer: "EVM-compatible means a blockchain can execute the same smart contract bytecode as Ethereum. Developers can deploy their Ethereum smart contracts on EVM-compatible chains (like Polygon, Arbitrum, Avalanche, BSC) with minimal or no modifications. Users can interact with these chains using the same wallets (MetaMask) and tooling. This compatibility is a major advantage, as it allows chains to immediately tap into Ethereum's mature developer ecosystem." },
        { question: "Is Solana EVM-compatible?", answer: "No, Solana uses its own runtime called Sealevel, which executes programs written in Rust (compiled to BPF bytecode). Solana's architecture is fundamentally different from the EVM, designed for parallel transaction processing rather than the EVM's sequential execution model. However, some projects like Neon EVM have built EVM compatibility layers on top of Solana." },
        { question: "What are EVM alternatives?", answer: "Several blockchains use non-EVM execution environments. Solana uses Sealevel (Rust/BPF), Cosmos chains use CosmWasm (Rust/WebAssembly), Aptos and Sui use MoveVM (Move language), NEAR uses WebAssembly, and TON uses TVM (FunC/Tact languages). Each offers different trade-offs in terms of performance, safety guarantees, and developer experience." },
      ]}
      relatedArticles={[
        { title: "Bytecode", href: "/learn/glossary/bytecode", category: "Glossary" },
        { title: "Smart Contract", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "Gas Limit", href: "/learn/glossary/gas-limit", category: "Glossary" },
        { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>The Ethereum Virtual Machine (EVM) is a stack-based, quasi-Turing-complete virtual machine that executes smart contract bytecode on the Ethereum network. It is the runtime environment for all Ethereum smart contracts, operating as a sandboxed computation layer isolated from the network and filesystem of the host computer. Every Ethereum node runs an EVM implementation, and all nodes process every transaction identically, ensuring that the entire network maintains consensus on the global state. The EVM was designed by Gavin Wood and described in the Ethereum Yellow Paper, establishing the foundation for programmable blockchain applications.</p></section>
      <section id="how-it-works"><h2>How It Works</h2><p>When a transaction invokes a smart contract, the EVM loads the contract's bytecode — a sequence of opcodes (operation codes) — and executes them sequentially. The EVM operates on a stack data structure, with each opcode performing operations like arithmetic, memory access, storage reads and writes, cryptographic hashing, environment queries, and control flow. The EVM has access to three data locations: the stack (temporary computation), memory (temporary per-transaction storage), and storage (permanent on-chain state). Each opcode has a specific gas cost reflecting its computational and storage requirements, and execution halts if the transaction runs out of gas or encounters an error, reverting all state changes.</p></section>
      <section id="evm-compatibility"><h2>EVM Compatibility</h2><p>EVM compatibility has become a dominant strategy for new blockchains seeking rapid ecosystem growth. Chains like Polygon, Arbitrum, Optimism, Avalanche C-Chain, BNB Smart Chain, Fantom, and many others implement the EVM specification, allowing Ethereum smart contracts to be deployed without modification. This means that DeFi protocols like Aave, Uniswap, and Curve can expand to new chains with minimal engineering effort. Developers can use the same tools (Hardhat, Foundry, Remix), the same languages (Solidity, Vyper), and users can use the same wallets (MetaMask). This network effect has made EVM compatibility a near-requirement for new Layer 1 and Layer 2 blockchains.</p></section>
      <section id="gas-and-execution"><h2>Gas and Execution</h2><p>Every EVM operation consumes gas, which serves as the metering mechanism to prevent abuse and compensate validators for computational resources. Simple operations like addition cost 3 gas, while storage writes cost 20,000 gas or more. Each transaction specifies a gas limit (maximum gas to use) and a gas price (amount paid per unit of gas). If execution exceeds the gas limit, the transaction reverts but the gas is still consumed. This gas system prevents infinite loops, incentivizes efficient code, and creates a market for block space. EIP-1559 introduced a base fee that is burned plus an optional priority fee (tip) paid to validators, making gas pricing more predictable.</p></section>
      <section id="limitations"><h2>Limitations and Alternatives</h2><p>The EVM has known limitations. Its sequential execution model processes transactions one at a time, limiting throughput compared to parallel execution environments. The 256-bit word size, while convenient for cryptographic operations, is inefficient for many common computations. Storage operations are expensive due to state growth concerns. These limitations have motivated the development of alternative virtual machines — Solana's Sealevel enables parallel execution, MoveVM (Aptos, Sui) provides stronger safety guarantees through a linear type system, and WebAssembly-based VMs (NEAR, Polkadot) offer near-native performance. Ethereum itself is exploring improvements through EOF (EVM Object Format) and the long-term vision of potential future execution environment upgrades.</p></section>
    </LearnPageLayout>
  );
}
