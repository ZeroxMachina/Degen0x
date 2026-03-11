import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is the Move Programming Language? Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what the Move programming language is, how it differs from Solidity, which blockchains use it, and why it's considered a next-generation smart contract language.",
};

export default function WhatIsMoveLanguagePage() {
  return (
    <LearnPageLayout
      title="What Is the Move Programming Language?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Move is a smart contract programming language originally developed at Meta for the Diem blockchain project. It was designed from the ground up with safety and security as core principles, addressing many of the vulnerabilities common in Solidity and the EVM. Move is now the foundation for several high-performance blockchains including Aptos and Sui, and represents a fundamental evolution in how smart contracts are written and executed."
      toc={[
        { id: "what-is-move", title: "What Is Move?", level: 2 },
        { id: "move-vs-solidity", title: "Move vs Solidity", level: 2 },
        { id: "move-blockchains", title: "Blockchains Using Move", level: 2 },
        { id: "developer-ecosystem", title: "The Move Developer Ecosystem", level: 2 },
      ]}
      faqs={[
        {
          question: "Is Move better than Solidity?",
          answer:
            "Move offers stronger safety guarantees, particularly around asset handling. Its resource model makes it impossible to accidentally duplicate or destroy tokens, a class of bugs that has cost millions on EVM chains. However, Solidity has a much larger ecosystem, more tooling, and vastly more developers. Each has strengths depending on the use case.",
        },
        {
          question: "Which blockchains use Move?",
          answer:
            "Aptos uses the original Move language. Sui uses a modified version called Sui Move with an object-centric data model. Movement Labs is building an Ethereum L2 that runs Move. Several other projects are exploring Move compatibility, drawn by its safety guarantees and performance characteristics.",
        },
        {
          question: "Should I learn Move as a developer?",
          answer:
            "If you are interested in building on Aptos, Sui, or Movement, learning Move is essential. The language has strong fundamentals and growing demand. However, for maximum job opportunities today, Solidity and Rust remain more widely used. Many developers learn Move as a second smart contract language to expand their options.",
        },
      ]}
      relatedArticles={[
        { title: "What Are Smart Contracts?", href: "/learn/what-are-smart-contracts", category: "Learn Crypto" },
        { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn Crypto" },
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn Crypto" },
        { title: "Account Abstraction", href: "/learn/account-abstraction", category: "Learn Crypto" },
      ]}
    >
      <section id="what-is-move">
        <h2>What Is Move?</h2>
        <p>
          Move was created by a team at Meta (then Facebook) led by Sam Blackshear for the Diem (formerly Libra) blockchain project. When Diem was shut down in 2022, the Move language lived on through the founding teams of Aptos and Sui, who took the technology and built their own Layer 1 blockchains around it. Move treats digital assets as first-class resources with strict ownership rules enforced at the language level.
        </p>
        <p>
          The key innovation of Move is its resource-oriented programming model. In Move, assets like tokens and NFTs are resources that cannot be copied, implicitly discarded, or double-spent. The compiler enforces these rules at compile time, preventing an entire class of bugs before code even reaches the blockchain. This is in contrast to Solidity, where asset management relies on developer discipline and proper accounting in storage variables.
        </p>
      </section>

      <section id="move-vs-solidity">
        <h2>Move vs Solidity</h2>
        <p>
          Solidity operates on a shared global state model where smart contracts read and write to storage slots. This flexibility is powerful but creates reentrancy vulnerabilities, integer overflow risks, and access control bugs that have resulted in billions in losses. Move&apos;s type system and resource model eliminate many of these attack vectors structurally, making it harder to write insecure code even for inexperienced developers.
        </p>
        <p>
          Move also supports formal verification more naturally than Solidity. The Move Prover is a built-in tool that mathematically verifies smart contract properties, catching bugs that testing alone might miss. This is particularly valuable for financial applications where correctness is critical. Solidity has third-party verification tools, but they require more setup and are less integrated into the development workflow.
        </p>
      </section>

      <section id="move-blockchains">
        <h2>Blockchains Using Move</h2>
        <p>
          Aptos is the most direct descendant of the Diem project, using the original Move language with an account-based data model. It achieves high throughput through parallel transaction execution using Block-STM, its novel concurrency engine. Sui, built by another team of ex-Meta engineers, modified Move to use an object-centric model where each on-chain asset is a distinct object that can be processed independently, enabling even greater parallelism.
        </p>
        <p>
          Movement Labs is building a framework for Move-based Ethereum L2s, bringing Move&apos;s safety guarantees to the Ethereum ecosystem. This is significant because it allows developers to write Move smart contracts that settle on Ethereum, combining Move&apos;s language advantages with Ethereum&apos;s security and liquidity. Other projects are exploring Move integration, suggesting the language&apos;s influence will continue to grow across the blockchain landscape.
        </p>
      </section>

      <section id="developer-ecosystem">
        <h2>The Move Developer Ecosystem</h2>
        <p>
          The Move developer community is smaller than Solidity&apos;s but growing rapidly. Both Aptos and Sui offer comprehensive documentation, tutorials, and developer grants. The Move language has a syntax that is familiar to Rust developers, making it accessible to programmers already working in the blockchain space. Developer tooling includes IDEs, debuggers, testing frameworks, and deployment pipelines comparable to what Solidity developers expect.
        </p>
        <p>
          Job demand for Move developers is increasing as Aptos and Sui ecosystems expand. DeFi protocols, NFT platforms, and gaming projects on these chains all need Move expertise. The scarcity of Move developers relative to demand means higher compensation and more opportunities. For developers considering which languages to invest in, Move offers a compelling combination of technical elegance, safety guarantees, and market opportunity.
        </p>
      </section>
    </LearnPageLayout>
  );
}
