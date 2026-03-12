import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Kyber Network (KNC)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Kyber Network (KNC), the multi-chain DEX aggregator and liquidity protocol. Discover how it works, tokenomics, use cases, and how to buy KNC.",
};

export default function KyberPage() {
  return (
    <LearnPageLayout
      title="What Is Kyber Network (KNC)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Kyber Network is a multi-chain decentralized exchange aggregator and liquidity protocol that powers KyberSwap, a DEX offering optimized token swaps, concentrated liquidity provision, and cross-chain trading. As one of the oldest DeFi protocols, Kyber has evolved from an on-chain liquidity protocol to a comprehensive trading platform with advanced DEX aggregation."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-kyber-network", title: "What Is Kyber Network?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-kyber-network-work", title: "How Does Kyber Network Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "knc-tokenomics", title: "KNC Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-knc", title: "How to Buy KNC", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Kyber Network?", answer: "Kyber Network powers KyberSwap, a multi-chain DEX aggregator with concentrated liquidity, limit orders, and cross-chain swaps across Ethereum and major L2s." },
        { question: "Where can I buy KNC?", answer: "KNC is available on Binance, Coinbase, Kraken, and KyberSwap. It trades against USDT, USD, BTC, and ETH." },
        { question: "Is Kyber Network a good investment?", answer: "Kyber is a veteran DeFi protocol with multi-chain presence, but suffered a major exploit and faces intense DEX competition. This is not financial advice. Do your own research." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Uniswap", href: "/investing/crypto/uniswap", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Kyber Network?</h2>
      <p>Kyber Network was founded by Loi Luu and Victor Tran in 2017, making it one of the earliest DeFi protocols. The project has evolved significantly over the years, now operating KyberSwap as its primary product. KyberSwap combines DEX aggregation (routing trades across 100+ liquidity sources) with its own concentrated liquidity pools (KyberSwap Elastic) for a comprehensive trading experience.</p>
      <p>In November 2023, KyberSwap suffered a significant exploit that impacted its Elastic pools across multiple chains. The team has since worked on recovery efforts and continued development. KyberSwap operates on Ethereum, Polygon, Arbitrum, Optimism, BNB Chain, Avalanche, and other chains.</p>

      <h2 id="how-it-works">How Does Kyber Network Work?</h2>
      <p>KyberSwap&apos;s aggregator routes trades across all major DEXs on each supported chain, finding the optimal execution path. The Dynamic Trade Routing algorithm splits trades across multiple routes for best prices. KyberSwap Elastic provides concentrated liquidity pools with auto-compounding fees. The platform supports limit orders, cross-chain swaps, and advanced trading features.</p>

      <h2 id="tokenomics">KNC Tokenomics</h2>
      <p>KNC has a total supply of approximately 223 million tokens. The token is used for governance through KyberDAO, staking for voting rewards and fee sharing, and liquidity mining incentives. KNC stakers vote on protocol parameters and earn a share of trading fees. The token has undergone a migration from KNC (legacy) to KNCv2 with updated tokenomics.</p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>Kyber Network powers multi-chain DEX aggregation for optimal trade execution, concentrated liquidity provision through Elastic pools, limit orders and advanced trading tools, cross-chain token swaps, and developer APIs for integrating swap functionality into dApps.</p>

      <h2 id="how-to-buy">How to Buy KNC</h2>
      <p>To buy KNC, create an account on Binance, Coinbase, or Kraken. Complete identity verification and purchase KNC. KNC is also available on KyberSwap. Store KNC in MetaMask or a Ledger wallet.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>The 2023 exploit damaged trust and resulted in significant TVL loss. Competition from Uniswap, 1inch, and other DEX aggregators is intense. Recovering from the exploit requires rebuilding user confidence and liquidity. The multi-chain strategy spreads liquidity thin. DEX trading volume is highly cyclical. Regulatory uncertainty around DeFi trading protocols adds risk.</p>
    </LearnPageLayout>
  );
}
