import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sei Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Sei blockchain ecosystem including parallelized EVM, trading-optimized design, DeFi protocols, and how to get started.",
  keywords: ["Sei", "Sei ecosystem", "SEI token", "parallelized EVM", "Sei DeFi", "trading blockchain"],
};

export default function SeiEcosystemGuidePage() {
  return (
    <LearnPageLayout title="Sei Ecosystem Guide" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Sei is a Layer 1 blockchain optimized for trading and financial applications. With its parallelized EVM execution, twin-turbo consensus, and built-in order matching engine, Sei delivers the performance needed for high-frequency trading applications while maintaining EVM compatibility for easy developer adoption."
      toc={[
        { id: "overview", title: "Sei Overview", level: 2 },
        { id: "technology", title: "Technology", level: 2 },
        { id: "ecosystem", title: "Ecosystem", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "What is Sei V2?", answer: "Sei V2 introduced parallelized EVM execution and backward compatibility with Ethereum smart contracts. This upgrade combined Sei's optimized consensus with EVM compatibility, allowing developers to deploy Ethereum apps while benefiting from Sei's performance advantages." },
        { question: "Why is Sei good for trading?", answer: "Sei was designed specifically for trading with features including a native order matching engine, parallel transaction processing, fast finality (around 400ms), and optimistic block processing that begins execution before consensus is finalized." },
        { question: "How does Sei compare to Solana?", answer: "Both target high-performance use cases. Sei focuses specifically on trading and financial applications with a parallelized EVM, while Solana is a more general-purpose high-throughput chain using Rust. Sei's EVM compatibility gives it access to a larger developer ecosystem." },
      ]}
      relatedArticles={[
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "Injective Ecosystem Guide", href: "/learn/injective-ecosystem-guide", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Sei Overview</h2><p>Sei was built by Sei Labs with the thesis that trading applications need purpose-built infrastructure rather than general-purpose blockchains. The network processes transactions with approximately 400ms finality and supports parallel execution of EVM transactions, enabling it to handle the throughput demands of decentralized exchanges, order books, and other financial applications.</p><p>The SEI token is used for gas fees, staking, and governance. Sei has attracted interest from trading-focused projects and financial applications that require low latency and high throughput. The ecosystem is growing as EVM compatibility attracts developers who can deploy existing Ethereum applications with minimal modifications.</p></section>
      <section id="technology"><h2>Technology</h2><p>Sei's parallelized EVM executes transactions concurrently, identifying independent transactions that can be processed simultaneously. Combined with optimistic block processing (beginning execution before consensus finalizes) and the twin-turbo consensus mechanism, Sei achieves performance characteristics suited for latency-sensitive financial applications.</p><p>The native order matching engine allows DEXs to operate with centralized exchange-like performance while maintaining decentralization. This built-in primitive means trading applications do not need to implement their own matching logic, reducing complexity and improving standardization across the ecosystem.</p></section>
      <section id="ecosystem"><h2>Ecosystem</h2><p>The Sei ecosystem includes DragonSwap as a leading DEX, Yei Finance for lending, and various DeFi protocols optimized for trading. NFT marketplaces and gaming applications are also growing on the platform. The EVM compatibility has accelerated ecosystem development by enabling familiar Ethereum applications to deploy on Sei.</p><p>Trading-focused applications are the ecosystem's core strength, with order book DEXs, perpetual futures platforms, and options protocols leveraging Sei's performance advantages. The combination of low latency and EVM compatibility creates a compelling platform for DeFi developers who need exchange-grade performance.</p></section>
      <section id="getting-started"><h2>Getting Started</h2><p>Add Sei to MetaMask using the network's EVM RPC details, or use Compass Wallet for a native Sei experience. Acquire SEI through exchanges and bridge to the network. Explore the trading-focused DeFi ecosystem and consider staking SEI for network rewards while supporting the validator set.</p></section>
    </LearnPageLayout>
  );
}
