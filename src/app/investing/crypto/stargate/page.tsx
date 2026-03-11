import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Stargate Finance (STG)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Stargate Finance (STG), the omnichain liquidity transport protocol built on LayerZero. Discover how it works, tokenomics, use cases, and how to buy STG.",
};

export default function StargatePage() {
  return (
    <LearnPageLayout
      title="What Is Stargate Finance (STG)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Stargate Finance is an omnichain liquidity transport protocol built on LayerZero that enables native asset cross-chain transfers with unified liquidity pools. As the first dApp built on LayerZero, Stargate solves the bridging trilemma of instant finality, native assets, and unified liquidity across multiple blockchain networks."
      toc={[
        { id: "what-is", title: "What Is Stargate Finance?", level: 2 },
        { id: "how-it-works", title: "How Does Stargate Finance Work?", level: 2 },
        { id: "tokenomics", title: "STG Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy STG", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Stargate Finance?",
          answer:
            "Stargate Finance is a cross-chain liquidity protocol built on LayerZero that enables users to transfer native assets between chains with instant guaranteed finality and unified liquidity pools.",
        },
        {
          question: "Where can I buy STG?",
          answer:
            "STG is available on Binance, Coinbase, OKX, Bybit, and decentralized exchanges. It trades against USDT, USDC, and ETH pairs.",
        },
        {
          question: "Is Stargate Finance a good investment?",
          answer:
            "Stargate has deep integrations across DeFi and strong TVL, but its value is tied to LayerZero ecosystem growth and cross-chain volume. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Uniswap", href: "/investing/crypto/uniswap", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Stargate Finance?</h2>
      <p>
        Stargate Finance was launched in March 2022 by the LayerZero Labs team, co-founded by Bryan Pellegrino, Ryan Zarick, and Caleb Banister. The protocol was designed to address the fundamental challenges of cross-chain bridging by enabling transfers of native assets (not wrapped tokens) with instant guaranteed finality. Stargate quickly attracted billions in total value locked, making it one of the largest bridge protocols by TVL.
      </p>
      <p>
        Unlike wrapped token bridges where users receive synthetic assets, Stargate uses unified liquidity pools shared across all connected chains. This means users receive native USDC, USDT, or ETH on the destination chain, not a Stargate-specific wrapped version. The Delta algorithm manages pool rebalancing to prevent liquidity depletion on any single chain, maintaining consistent transfer availability.
      </p>

      <h2 id="how-it-works">How Does Stargate Finance Work?</h2>
      <p>
        Stargate leverages LayerZero&apos;s messaging protocol for cross-chain communication. When a user deposits tokens into a Stargate pool on the source chain, LayerZero delivers a message to the destination chain to release the corresponding native tokens. The Delta algorithm dynamically adjusts pool weights and fees to maintain balanced liquidity across chains, using soft and hard partitions to guarantee transfer availability.
      </p>
      <p>
        Liquidity providers deposit single-sided assets into Stargate pools and receive LP tokens representing their share. They earn fees from cross-chain transfers and STG emission rewards. The protocol supports composability, meaning other DeFi protocols can integrate Stargate bridging directly into their smart contracts for seamless cross-chain transactions within their own interfaces.
      </p>

      <h2 id="tokenomics">STG Tokenomics</h2>
      <p>
        STG has a total supply of 1 billion tokens. The token is used for governance through the veSTG (vote-escrowed STG) model, where users lock STG for voting power on pool emission allocations and protocol parameters. Liquidity providers earn STG rewards alongside transfer fees. The veSTG model, inspired by Curve&apos;s veCRV design, incentivizes long-term holding by giving more governance power to longer lock periods.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Stargate powers native asset cross-chain transfers for end users and protocols, liquidity provision across multiple chains from unified pools, composable cross-chain DeFi interactions where bridging is embedded in protocol transactions, and stablecoin routing for large cross-chain transfers with minimal slippage. Major DeFi protocols integrate Stargate for cross-chain functionality, making it a core piece of omnichain infrastructure.
      </p>

      <h2 id="how-to-buy">How to Buy STG</h2>
      <p>
        To buy STG, create an account on Binance, Coinbase, or OKX. Complete identity verification, deposit funds, and purchase STG tokens. You can also acquire STG on Uniswap or SushiSwap. After purchasing, lock STG for veSTG to participate in governance and earn boosted rewards. Store STG in MetaMask, Ledger, or any EVM-compatible wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Stargate&apos;s security depends on the underlying LayerZero messaging protocol. Any vulnerability in LayerZero could affect Stargate&apos;s cross-chain operations. The unified liquidity pool model, while efficient, concentrates risk if the rebalancing algorithm fails under extreme market conditions. Smart contract risk is heightened by the complexity of cross-chain interactions.
      </p>
      <p>
        Competition from Across, Synapse, and native chain bridges could reduce transfer volume and fee revenue. The veSTG governance model requires active participation to direct emissions, creating complexity for passive holders. Dependence on LayerZero&apos;s continued development and security adds platform risk. Regulatory uncertainty around cross-chain liquidity protocols remains a concern.
      </p>
    </LearnPageLayout>
  );
}
