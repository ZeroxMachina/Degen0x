import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Trading Pair: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a trading pair means in cryptocurrency. Understand how trading pairs work on exchanges, how to read pair notation, and why liquidity matters.",
  keywords: ["trading pair", "crypto trading pair", "base quote currency", "exchange pair"],
};

export default function TradingPairGlossaryPage() {
  return (
    <LearnPageLayout
      title="Trading Pair: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="A trading pair represents two assets that can be exchanged for each other on a cryptocurrency exchange. Written as BASE/QUOTE (like BTC/USDT), it shows the price of one asset denominated in another. Trading pairs are fundamental to how crypto markets operate."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the difference between base and quote currency?",
          answer:
            "The base currency is listed first and is the asset being priced. The quote currency is listed second and is the unit of measurement. In BTC/USDT, BTC is the base currency and its price is expressed in USDT (the quote). When you buy this pair, you receive BTC and pay USDT.",
        },
        {
          question: "Why do some tokens have more trading pairs than others?",
          answer:
            "Major cryptocurrencies like Bitcoin and Ethereum have dozens of trading pairs because they have deep liquidity and widespread demand. Smaller tokens may only have a few pairs, typically against USDT, ETH, or BTC. More trading pairs generally mean more liquidity and easier access for traders.",
        },
      ]}
      relatedArticles={[
        { title: "Liquidity Pool", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" },
        { title: "Swap", href: "/learn/glossary/swap", category: "Glossary" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A trading pair is the combination of two different assets that can be exchanged against each other on a cryptocurrency exchange. It establishes a market where buyers and sellers can trade one asset for another at a mutually agreed-upon price. Trading pairs are expressed in the format BASE/QUOTE, where the base currency is the asset being traded and the quote currency is the unit in which the price is denominated. For example, in the trading pair ETH/USDT, Ethereum is the base currency and Tether is the quote currency, meaning the price shown represents how many USDT one ETH costs. Every exchange, whether centralized or decentralized, organizes its markets around trading pairs. Without trading pairs, there would be no standardized way to express the relative value of one cryptocurrency against another, and the process of exchanging assets would be far more complex and fragmented.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          On centralized exchanges, trading pairs are managed through order books where buyers place bids and sellers place asks. The exchange matches these orders to facilitate trades. The most liquid trading pairs, like BTC/USDT, have tight spreads (small differences between bid and ask prices) and deep order books, meaning large trades can be executed without significantly moving the price. On decentralized exchanges, trading pairs are represented by liquidity pools containing reserves of both tokens. When you trade ETH for USDT on a DEX, you are swapping tokens with the liquidity pool rather than with another individual. The price is determined algorithmically based on the ratio of tokens in the pool. If you want to trade a token that does not have a direct pair with your desired asset, the exchange may route through intermediate pairs. For example, trading Token A for Token C might route through Token A to ETH to Token C if no direct A/C pair exists. This routing adds complexity but enables trading between any combination of supported assets.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          The most commonly traded pairs in crypto include BTC/USDT, ETH/USDT, ETH/BTC, and BNB/USDT. Stablecoin pairs like USDC/USDT are used for arbitrage and stablecoin swaps. On DEXs like Uniswap, any two ERC-20 tokens can form a trading pair as long as someone creates and funds a liquidity pool for them. This permissionless pair creation has led to thousands of available pairs on major DEXs. Crypto-to-fiat pairs like BTC/USD and ETH/EUR are available on regulated exchanges that support fiat currency deposits. Cross-chain DEX aggregators can even facilitate trades between tokens on different blockchains by routing through multiple pairs and bridges. Traders use multiple pairs strategically: they might trade altcoins against ETH during bull markets to accumulate more ETH, or trade against stablecoins during bear markets to preserve value. The availability of trading pairs for a token directly impacts its accessibility and liquidity for the broader market.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Trading pairs are the fundamental building blocks of cryptocurrency markets. The number and depth of trading pairs available for a token directly correlate with its liquidity, accessibility, and overall market health. Tokens with many active trading pairs across multiple exchanges are easier to buy and sell, have more stable prices, and attract more trading volume. For traders, understanding trading pairs is essential for executing efficient trades, minimizing slippage, and identifying arbitrage opportunities. The choice of quote currency affects the trading experience; trading against stablecoins provides a clear dollar-value reference, while trading against BTC or ETH shows performance relative to major cryptocurrencies. For new token projects, getting listed on trading pairs across major exchanges is a critical milestone that dramatically increases visibility and accessibility. The evolution from simple order book pairs to AMM liquidity pools has democratized market making, allowing anyone to create a trading pair and earn fees from the trading activity it generates.
        </p>
      </section>
    </LearnPageLayout>
  );
}
