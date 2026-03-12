import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Gnosis (GNO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Gnosis (GNO), the Ethereum sidechain and prediction market infrastructure. Discover how it works, tokenomics, use cases, and how to buy GNO.",
};

export default function GnosisPage() {
  return (
    <LearnPageLayout
      title="What Is Gnosis (GNO)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Gnosis is a long-standing Ethereum ecosystem project that operates Gnosis Chain (formerly xDai), a community-run EVM sidechain, and has built critical Web3 infrastructure including Safe smart wallets, CoW Protocol DEX, and prediction market tools. GNO is used for staking on Gnosis Chain and governance across the Gnosis ecosystem."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-gnosis", title: "What Is Gnosis?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-gnosis-work", title: "How Does Gnosis Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "gno-tokenomics", title: "GNO Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-gno", title: "How to Buy GNO", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Gnosis?", answer: "Gnosis operates Gnosis Chain (EVM sidechain), and has built Safe wallets, CoW Protocol DEX, and prediction market infrastructure. GNO is the staking and governance token." },
        { question: "Where can I buy GNO?", answer: "GNO is available on Coinbase, Binance, Kraken, and Uniswap. It trades against USDT, USD, and ETH pairs." },
        { question: "Is Gnosis a good investment?", answer: "Gnosis has deep Ethereum ecosystem roots and valuable infrastructure products, but GNO value capture across products varies. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Ethereum", href: "/investing/crypto/ethereum", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Gnosis?</h2>
      <p>Gnosis was founded by Martin Koppelmann and Stefan George in 2015, making it one of the oldest projects in the Ethereum ecosystem. Originally focused on prediction markets, Gnosis expanded into building critical infrastructure including Gnosis Safe (now Safe), CoW Protocol, and Gnosis Chain. The ecosystem has produced some of the most widely used tools in Web3.</p>
      <p>Gnosis Chain operates as an EVM-compatible sidechain with low transaction costs and fast block times, using GNO for proof-of-stake consensus. The chain merged with the former xDai chain and has positioned itself as a community-owned and operated alternative to Ethereum mainnet for everyday transactions, particularly payments and real-world applications.</p>

      <h2 id="how-it-works">How Does Gnosis Work?</h2>
      <p>Gnosis Chain uses a Beacon Chain-style proof-of-stake consensus with GNO as the staking token. Validators stake GNO to participate in block production and earn staking rewards. The chain is EVM-compatible and supports all standard Ethereum tooling. Transaction fees are paid in xDAI (bridged DAI stablecoin), keeping costs predictable and low.</p>
      <p>The broader Gnosis ecosystem includes GnosisDAO (governance over the treasury and ecosystem), Gnosis Pay (crypto-native Visa debit card), and various infrastructure investments. Gnosis has incubated and spun off multiple successful projects, maintaining equity and token positions that contribute to the GnosisDAO treasury value.</p>

      <h2 id="tokenomics">GNO Tokenomics</h2>
      <p>GNO has a total supply of approximately 3 million tokens, one of the lowest supplies in crypto. The token is used for Gnosis Chain staking and validation, GnosisDAO governance, and as backing for the mGNO staking derivative. The low supply combined with staking lockup reduces circulating tokens. GnosisDAO controls a substantial treasury of diverse crypto assets, adding book value to the GNO token.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>GNO powers Gnosis Chain validation and staking, governance over the GnosisDAO treasury, low-cost EVM transactions for payments and real-world applications, and ecosystem investment through GnosisDAO. The broader Gnosis ecosystem supports prediction markets, DEX trading through CoW Protocol, smart wallet infrastructure, and crypto payment cards.</p>

      <h2 id="how-to-buy">How to Buy GNO</h2>
      <p>To buy GNO, create an account on Coinbase, Binance, or Kraken. Complete identity verification and purchase GNO tokens. GNO is also available on Uniswap. After purchasing, stake GNO to become a Gnosis Chain validator. Store GNO in MetaMask or a Ledger wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Gnosis Chain faces competition from larger L2s and sidechains with more ecosystem activity. The value relationship between GNO and the various spun-off products (Safe, CoW Protocol) is indirect. While the low token supply is attractive, liquidity for GNO trading can be limited. The diverse portfolio of ecosystem projects makes GNO more like a crypto holding company token, which adds complexity to valuation.</p>
    </LearnPageLayout>
  );
}
