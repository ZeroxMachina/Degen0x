import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Bytecode in Crypto? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what bytecode is in blockchain, how smart contracts compile to bytecode, and why bytecode verification matters for security.",
  keywords: ["bytecode", "EVM bytecode", "smart contract bytecode", "compiled code blockchain", "contract verification"],
};

export default function BytecodePage() {
  return (
    <LearnPageLayout title="What Is Bytecode?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="Bytecode is the low-level, machine-readable code that smart contracts are compiled into before deployment on blockchain virtual machines. When developers write smart contracts in Solidity or other high-level languages, the code is compiled into bytecode that the Ethereum Virtual Machine (EVM) can execute. Understanding bytecode is important for contract verification and security analysis."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "compilation", title: "compilation", level: 2 },
        { id: "from-source-to-bytecode", title: "From Source to Bytecode", level: 2 },
        { id: "verification", title: "verification", level: 2 },
        { id: "bytecode-verification", title: "Bytecode Verification", level: 2 }
      ]}
      faqs={[
        { question: "Can I read bytecode?", answer: "Raw bytecode is a hexadecimal string that is not human-readable. However, decompilers and disassemblers can convert bytecode back to opcodes (individual instructions) or approximate high-level code. Verified contracts on Etherscan show the original source code alongside the bytecode, making analysis straightforward." },
        { question: "Why does bytecode matter for security?", answer: "The bytecode is what actually executes on the blockchain, not the source code. If a project publishes friendly-looking source code but deploys different bytecode, the actual behavior will differ from what is shown. Source code verification on block explorers confirms that the published source compiles to the deployed bytecode." },
      ]}
      relatedArticles={[
        { title: "EVM", href: "/learn/glossary/evm", category: "Glossary" },
        { title: "Smart Contract", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "How to Verify a Smart Contract", href: "/learn/how-to-verify-smart-contract", category: "Learn" },
        { title: "ERC-20", href: "/learn/glossary/erc-20", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Bytecode is a compact, platform-independent instruction set designed for efficient execution by a virtual machine. In the Ethereum context, EVM bytecode consists of opcodes (operation codes) that perform operations like arithmetic, storage access, cryptographic hashing, and control flow. Each opcode is represented as a single byte, hence the name. The EVM processes these instructions sequentially, with each opcode consuming a specific amount of gas proportional to its computational cost.</p></section>
      <section id="compilation"><h2>From Source to Bytecode</h2><p>Developers write smart contracts in high-level languages like Solidity or Vyper. Compilers (solc for Solidity, vyper for Vyper) translate this human-readable code into EVM bytecode. The compilation process also generates the ABI (Application Binary Interface), which describes how to interact with the contract's functions. When a contract is deployed, the bytecode is stored on the blockchain and assigned an address. Every subsequent interaction with the contract executes this stored bytecode.</p></section>
      <section id="verification"><h2>Bytecode Verification</h2><p>Source code verification on block explorers like Etherscan involves compiling the submitted source code and confirming that the resulting bytecode matches the deployed bytecode exactly. This proves that the published source accurately represents what the contract does. Unverified contracts only show raw bytecode on explorers, making it impossible for non-experts to understand the contract's behavior. Always verify source code before interacting with significant value in a smart contract.</p></section>
    </LearnPageLayout>
  );
}
