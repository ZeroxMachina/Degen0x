import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Whale in Crypto? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what a crypto whale is, how whale activity affects markets, how to track whale movements, and strategies for trading around whale behavior.",
};

export default function WhalePage() {
  return (
    <LearnPageLayout title="What Is a Whale?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A whale is an individual or entity that holds a large amount of cryptocurrency, enough to significantly influence market prices through their trading activity. In Bitcoin, a whale typically holds 1,000+ BTC. In smaller-cap tokens, whale status may require far less. Whale movements are closely watched by traders because large buy or sell orders can cause significant price swings, and on-chain data makes it possible to track whale wallets in real-time."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-whale", title: "What Is a Whale?", level: 2 },
        { id: "whale-impact", title: "whale-impact", level: 2 },
        { id: "how-whales-impact-markets", title: "How Whales Impact Markets", level: 2 },
        { id: "tracking-whales", title: "tracking-whales", level: 2 },
        { id: "tracking-whale-activity", title: "Tracking Whale Activity", level: 2 },
        { id: "whale-strategies", title: "whale-strategies", level: 2 },
        { id: "trading-around-whales", title: "Trading Around Whales", level: 2 }
      ]}
      faqs={[{ question: "Who are the biggest crypto whales?", answer: "The largest Bitcoin whales include Satoshi Nakamoto (estimated 1.1M BTC), government seizure wallets (US, China), MicroStrategy, Tesla, and early miners. For Ethereum, the Ethereum Foundation, Vitalik Buterin, and large DeFi protocols hold significant amounts. Many whales are anonymous, known only by their wallet addresses." },
        { question: "Can whales manipulate the market?", answer: "Yes. Whales can place large buy or sell walls to influence price direction, execute wash trades to create false volume signals, and use their holdings to influence governance votes. In low-liquidity markets, a single whale trade can move prices by 10% or more. This is why liquidity and trading volume are important considerations when evaluating token investments." }]}
      relatedArticles={[{ title: "Whale Watching", href: "/learn/whale-watching", category: "Learn Crypto" }, { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" }, { title: "Market Depth", href: "/learn/glossary/market-depth", category: "Glossary" }, { title: "Liquidation", href: "/learn/glossary/liquidation", category: "Glossary" }]}
    >
      <h2 id="definition">What Is a Whale?</h2>
      <p>In crypto, a whale is any wallet or entity holding enough cryptocurrency to materially impact market prices. The threshold varies by asset: for Bitcoin, whales typically hold over 1,000 BTC. For altcoins, holding 1-5% of total supply might qualify. Whales include early investors, founding teams, venture capital firms, exchanges, and increasingly institutional players like hedge funds and corporate treasuries. Their activity is a key signal that traders monitor.</p>

      <h2 id="whale-impact">How Whales Impact Markets</h2>
      <p>When a whale sells a large position, it can overwhelm buy orders and crash the price. Conversely, large whale purchases can trigger price rallies and FOMO buying from retail traders. Whales moving tokens to exchanges often signals impending selling, while moving tokens off exchanges suggests long-term holding intent. In DeFi governance, whales can dominate voting outcomes due to token-weighted governance models.</p>

      <h2 id="tracking-whales">Tracking Whale Activity</h2>
      <p>On-chain analytics platforms like Lookonchain, Nansen, and Arkham Intelligence track whale wallets and their transactions. Whale Alert provides real-time notifications of large transfers across blockchains. By labeling known wallets (exchanges, funds, protocol treasuries), these tools help traders interpret the significance of large movements. Tracking whale accumulation patterns can provide early signals about market sentiment shifts.</p>

      <h2 id="whale-strategies">Trading Around Whales</h2>
      <p>Retail traders can use whale data as one input among many in their trading decisions. Whale accumulation during price dips may signal a buying opportunity. Large exchange deposits during price rallies may signal impending selling pressure. However, whales can also use their visibility strategically, making conspicuous moves to mislead followers. Never trade solely based on whale activity without considering the broader market context and your own analysis.</p>
    </LearnPageLayout>
  );
}
