import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Injective Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Injective blockchain ecosystem including its financial primitives, order book DEX, DeFi protocols, and how to get started with INJ.",
  keywords: ["Injective", "INJ", "Injective ecosystem", "Injective DeFi", "order book DEX", "Cosmos DeFi"],
};

export default function InjectiveEcosystemGuidePage() {
  return (
    <LearnPageLayout title="Injective Ecosystem Guide" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Injective is a Layer 1 blockchain built on Cosmos SDK, purpose-designed for DeFi and financial applications. With a built-in fully decentralized order book, zero gas fee execution for certain operations, and cross-chain interoperability through IBC, Injective provides institutional-grade financial infrastructure in a decentralized environment."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "injective-overview", title: "Injective Overview", level: 2 },
        { id: "financial-primitives", title: "financial-primitives", level: 2 },
        { id: "financial-primitives", title: "Financial Primitives", level: 2 },
        { id: "ecosystem", title: "ecosystem", level: 2 },
        { id: "ecosystem", title: "Ecosystem", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "What makes Injective unique?", answer: "Injective is the only blockchain with a fully decentralized order book module built into the chain itself. This means any dApp can access shared liquidity through the native exchange module without building custom matching engines. Combined with zero-gas trading, MEV resistance, and IBC connectivity, it creates a comprehensive DeFi platform." },
        { question: "How does INJ tokenomics work?", answer: "INJ has a deflationary token model through its auction burn mechanism — a portion of protocol fees are used to buy back and burn INJ tokens weekly. This creates consistent buy pressure and deflationary supply dynamics as ecosystem activity increases." },
        { question: "Is Injective part of Cosmos?", answer: "Yes, Injective is built with the Cosmos SDK and connects to the broader Cosmos ecosystem through IBC. This enables cross-chain token transfers and communication with other IBC-connected chains like Osmosis, Cosmos Hub, and more." },
      ]}
      relatedArticles={[
        { title: "Cosmos Ecosystem Guide", href: "/learn/cosmos-ecosystem-guide", category: "Learn" },
        { title: "Sei Ecosystem Guide", href: "/learn/sei-ecosystem-guide", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "What Is Interoperability?", href: "/learn/what-is-interoperability", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Injective Overview</h2><p>Injective was founded in 2018 and launched its mainnet in 2021, positioning itself as the blockchain for finance. The protocol is backed by major investors including Binance Labs, Jump Crypto, and Pantera Capital. Injective achieves instant finality through Tendermint consensus, processes over 25,000 TPS, and offers near-zero transaction fees, making it competitive with centralized exchange performance.</p><p>The INJ token is used for governance, staking (with attractive yields), fee burning through the weekly auction mechanism, and collateral in DeFi protocols. The deflationary burn mechanism has made INJ one of the few blockchain tokens with consistently decreasing supply when protocol activity is high.</p></section>
      <section id="financial-primitives"><h2>Financial Primitives</h2><p>Injective's exchange module provides a fully decentralized order book at the protocol level. This shared infrastructure means all applications on Injective can access unified liquidity for spot and derivatives trading. The module supports limit orders, stop orders, and complex order types typically found only on centralized exchanges, bringing sophisticated trading capabilities to DeFi.</p><p>The protocol also features built-in modules for insurance funds, oracle integration, and auction mechanisms. These financial primitives reduce the complexity of building financial applications and ensure that critical infrastructure is battle-tested at the protocol level rather than reimplemented by each individual application.</p></section>
      <section id="ecosystem"><h2>Ecosystem</h2><p>Helix is the flagship DEX built on Injective's exchange module, offering spot and perpetual futures trading. Hydro Protocol provides lending and borrowing. DojoSwap serves as an AMM-based DEX. The ecosystem includes prediction markets, options platforms, and real-world asset protocols that leverage Injective's financial infrastructure. Cross-chain connectivity through IBC enables seamless access to the broader Cosmos DeFi ecosystem.</p></section>
      <section id="getting-started"><h2>Getting Started</h2><p>Install the Keplr wallet extension for native Cosmos support or use MetaMask with Injective's EVM layer. Acquire INJ through centralized exchanges and transfer to your wallet. Explore Helix for trading, stake INJ for rewards, and participate in the weekly burn auction. The ecosystem rewards active participants through staking yields and governance participation.</p></section>
    </LearnPageLayout>
  );
}
