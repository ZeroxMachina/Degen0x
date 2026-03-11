import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Chainflip (FLIP)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Chainflip (FLIP), the decentralized cross-chain swap protocol. Discover how it works, tokenomics, use cases, and how to buy FLIP.",
};

export default function ChainflipPage() {
  return (
    <LearnPageLayout
      title="What Is Chainflip (FLIP)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Chainflip is a decentralized cross-chain swap protocol that enables native asset exchanges between blockchains without wrapping or bridges. Users can swap native BTC for native ETH, SOL, or other assets directly, with Chainflip's validator network handling the entire settlement process using threshold signature schemes and a Just-In-Time AMM."
      toc={[
        { id: "what-is", title: "What Is Chainflip?", level: 2 },
        { id: "how-it-works", title: "How Does Chainflip Work?", level: 2 },
        { id: "tokenomics", title: "FLIP Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy FLIP", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Chainflip?",
          answer:
            "Chainflip is a decentralized cross-chain swap protocol allowing direct native asset exchanges (like BTC to ETH) without wrapping, using threshold signatures and a JIT AMM for execution.",
        },
        {
          question: "Where can I buy FLIP?",
          answer:
            "FLIP is available on Uniswap, Gate.io, MEXC, and other exchanges. It trades against ETH and USDT pairs.",
        },
        {
          question: "Is Chainflip a good investment?",
          answer:
            "Chainflip offers a unique native cross-chain swap experience, but faces competition from THORChain and centralized exchanges. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "THORChain", href: "/investing/crypto/thorchain", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Chainflip?</h2>
      <p>
        Chainflip was developed by a team led by Simon Harman and launched its mainnet in late 2023. The protocol was designed to provide the seamless swap experience of a centralized exchange but in a fully decentralized manner. Users simply send native assets from their wallet to Chainflip and receive native assets on the destination chain, with no need for wrapped tokens, bridges, or complex multi-step processes.
      </p>
      <p>
        The protocol operates its own Substrate-based blockchain (the State Chain) that coordinates swaps between connected chains. A network of validators collectively manages vault wallets on each connected chain using threshold signature schemes, enabling trustless custody of assets during the swap process. Chainflip supports swaps between Bitcoin, Ethereum, Polkadot, Solana, and other major chains.
      </p>

      <h2 id="how-it-works">How Does Chainflip Work?</h2>
      <p>
        When a user initiates a swap, they send native assets to a Chainflip deposit address on the source chain. Validators observe this deposit, and the State Chain triggers a swap through the Just-In-Time (JIT) AMM, where liquidity providers can compete to fill orders at the best price. The JIT mechanism allows market makers to provide concentrated liquidity at the exact price needed for each swap, similar to limit orders.
      </p>
      <p>
        After the swap executes on the State Chain, validators collectively sign a transaction using threshold signatures to send the output asset to the user on the destination chain. The entire process requires no wallet connections, smart contract approvals, or wrapped tokens. Liquidity providers deposit assets into range-order pools on the State Chain and earn fees from swap volume.
      </p>

      <h2 id="tokenomics">FLIP Tokenomics</h2>
      <p>
        FLIP has a total supply of approximately 90 million tokens. The token is used for validator staking (with a minimum stake required to run a validator node), governance over protocol parameters, and liquidity incentives. Validators earn swap fees and FLIP rewards for securing the network and managing vault wallets. A portion of swap fees is used to buy and burn FLIP tokens, creating deflationary pressure that scales with protocol usage.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Chainflip enables native cross-chain swaps without wrapping or bridging, decentralized OTC-style trading for large cross-chain transfers, market making and liquidity provision through the JIT AMM, and institutional-grade cross-chain settlement. The protocol is particularly useful for users who want to swap Bitcoin for other assets without trusting centralized exchanges or using wrapped token bridges.
      </p>

      <h2 id="how-to-buy">How to Buy FLIP</h2>
      <p>
        To buy FLIP, acquire it on Uniswap by swapping ETH, or purchase on Gate.io or MEXC. Complete identity verification on centralized exchanges, deposit funds, and buy FLIP. After purchasing, you can stake FLIP as a validator to earn swap fees and rewards, or hold for governance participation. FLIP is an ERC-20 token stored in MetaMask or Ledger wallets.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Chainflip&apos;s threshold signature vaults represent concentrated risk, as any compromise could endanger assets in transit. The validator set&apos;s size and decentralization directly affect security. Competition from THORChain, which offers a similar native cross-chain swap experience with a more established ecosystem, is a significant challenge. Centralized exchanges also provide a seamless swap experience with deeper liquidity.
      </p>
      <p>
        The JIT AMM model requires active market makers for competitive pricing, and thin liquidity for less popular pairs could result in poor execution. Substrate-based infrastructure may have less developer tooling than EVM-based alternatives. Token value depends on sustained swap volume generating sufficient fees for the buy-and-burn mechanism. Regulatory scrutiny of cross-chain swap protocols is an emerging concern.
      </p>
    </LearnPageLayout>
  );
}
