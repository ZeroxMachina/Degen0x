import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Aptos Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Aptos blockchain ecosystem including Move language, parallel execution, DeFi protocols, and how to get started with APT.",
  keywords: ["Aptos", "APT", "Aptos ecosystem", "Move language", "Aptos DeFi", "parallel execution"],
};

export default function AptosEcosystemGuidePage() {
  return (
    <LearnPageLayout title="Aptos Ecosystem Guide" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Aptos is a Layer 1 blockchain built by former Meta engineers using the Move programming language. With its parallel execution engine (Block-STM), Aptos achieves high throughput while maintaining safety guarantees. The ecosystem is growing across DeFi, gaming, and social applications with strong institutional backing and developer tooling."
      toc={[
        { id: "overview", title: "Aptos Overview", level: 2 },
        { id: "technology", title: "Technology", level: 2 },
        { id: "ecosystem", title: "Key Applications", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "How does Aptos differ from Sui?", answer: "Both use Move but implement it differently. Aptos uses an account-based model while Sui uses an object-centric model. Aptos focuses on the Block-STM parallel execution engine for high throughput. The ecosystems have different DeFi protocols and developer communities despite sharing the Move language." },
        { question: "What is Block-STM?", answer: "Block-STM is Aptos's optimistic parallel execution engine. It speculatively executes transactions in parallel and validates them afterward, re-executing any that conflict. This achieves high throughput on multi-core hardware while maintaining correctness." },
        { question: "Is Aptos a good investment?", answer: "APT has significant institutional backing and a technically capable team. However, the ecosystem is still growing relative to established chains like Ethereum and Solana. The Move language creates a smaller developer pool compared to EVM chains. As always, evaluate fundamentals and do thorough research." },
      ]}
      relatedArticles={[
        { title: "Sui Ecosystem Guide", href: "/learn/sui-ecosystem-guide", category: "Learn" },
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn" },
        { title: "What Is a Smart Contract?", href: "/learn/what-is-a-smart-contract", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Aptos Overview</h2><p>Aptos was developed by Aptos Labs, founded by Mo Shaikh and Avery Ching, who led the Diem blockchain project at Meta. The project launched its mainnet in October 2022 with significant venture capital backing. Aptos differentiates through its Block-STM parallel execution engine, Move smart contracts, and a focus on reliability and upgradeability through on-chain configuration and modular architecture.</p><p>The APT token is used for transaction fees, staking (with a validator set of over 100 nodes), and on-chain governance. Aptos has attracted partnerships in gaming, social media, and institutional finance, leveraging its high performance and the safety guarantees of the Move language to build enterprise-grade blockchain applications.</p></section>
      <section id="technology"><h2>Technology</h2><p>Block-STM enables Aptos to process thousands of transactions per second by executing them optimistically in parallel across multiple CPU cores. Transactions are assumed not to conflict and executed simultaneously. If conflicts are detected during validation, only the conflicting transactions are re-executed. This approach extracts maximum parallelism from any workload without requiring developers to declare dependencies upfront.</p><p>Aptos's Move implementation focuses on modularity and upgradeability. Smart contracts can be upgraded in place through a governed process, and the framework provides standard libraries for common operations. The Aptos token standard supports rich metadata, programmable transfer rules, and native fungible asset functionality, providing more capability than basic ERC-20 style tokens.</p></section>
      <section id="ecosystem"><h2>Key Applications</h2><p>The Aptos DeFi ecosystem includes Liquidswap and ThalaSwap as leading DEXs, Aries Markets for lending, and Amnis Finance for liquid staking. The ecosystem is growing with new protocols launching regularly, attracted by Aptos's performance characteristics and developer grants. Stablecoin liquidity continues to deepen with USDC, USDT, and other stablecoins available natively.</p><p>Beyond DeFi, Aptos has attracted gaming projects, social platforms, and NFT marketplaces. The Aptos Foundation actively funds ecosystem development through grants and partnerships, creating a supportive environment for builders. Microsoft, Google Cloud, and other technology companies have established partnerships with the Aptos ecosystem.</p></section>
      <section id="getting-started"><h2>Getting Started</h2><p>Install Petra Wallet (the official Aptos wallet) or Martian Wallet as a browser extension. Acquire APT through centralized exchanges and transfer to your wallet. Explore DeFi through Liquidswap or ThalaSwap, try lending on Aries Markets, or browse NFT collections on Aptos-native marketplaces. The wallet experience is designed to be intuitive for users familiar with MetaMask and similar tools.</p></section>
    </LearnPageLayout>
  );
}
