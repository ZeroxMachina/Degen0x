import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Trading Pairs Explained: Complete Guide (${CURRENT_YEAR})`,
  description: "Learn how crypto trading pairs work. Understand base and quote currencies, how to read pairs, liquidity, and choosing the right trading pair.",
};

const toc = [
  { id: "what-are-pairs", title: "What Are Trading Pairs", level: 2 },
  { id: "base-quote", title: "Base and Quote Currencies", level: 2 },
  { id: "types-of-pairs", title: "Types of Trading Pairs", level: 2 },
  { id: "liquidity", title: "Understanding Pair Liquidity", level: 2 },
  { id: "choosing-pairs", title: "Choosing the Right Pair", level: 2 },
];

const faqs = [
  { question: "What does BTC/USDT mean?", answer: "BTC/USDT means you are trading Bitcoin (the base currency) against Tether (the quote currency). The price shown is how much USDT you need to buy one BTC. If BTC/USDT is 60,000, it costs 60,000 USDT to buy 1 BTC." },
  { question: "What is the difference between BTC/USDT and BTC/USD?", answer: "BTC/USDT is traded against the stablecoin Tether, while BTC/USD is traded against actual US dollars. BTC/USDT typically has higher liquidity on most exchanges. BTC/USD is available on regulated exchanges like Coinbase and Kraken that support fiat currencies." },
  { question: "Why do some tokens only have certain pairs?", answer: "Exchanges list pairs based on demand and liquidity. Popular tokens have many pairs (BTC, ETH, USDT, USDC). Smaller altcoins may only have one or two pairs, typically against USDT or BTC. If your desired pair does not exist, you may need to make two trades through an intermediate currency." },
];

export default function TradingPairsExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Trading Pairs Explained"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="8 min"
      intro="Trading pairs are the foundation of every crypto exchange. They define which two assets can be traded against each other and determine how prices are quoted. Understanding trading pairs is essential for navigating any exchange, reading charts, and executing trades efficiently."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Maker vs Taker Fees", href: "/exchanges/learn/maker-vs-taker-fees", category: "Exchanges" },
        { title: "How to Buy Crypto", href: "/exchanges/learn/how-to-buy-crypto", category: "Exchanges" },
        { title: "Stop-Loss Orders", href: "/exchanges/learn/stop-loss-orders", category: "Exchanges" },
      ]}
    >
      <h2 id="what-are-pairs">What Are Trading Pairs?</h2>
      <p>
        A trading pair represents two currencies that can be exchanged for each other on an
        exchange. When you see ETH/BTC on an exchange, it means you can trade Ethereum for
        Bitcoin and vice versa. Every trade on an exchange involves a pair: you are always
        buying one asset while simultaneously selling another.
      </p>
      <p>
        Trading pairs are written in the format BASE/QUOTE. The first currency (base) is what
        you are buying or selling. The second currency (quote) is what you are paying with or
        receiving. The price displayed is always how much of the quote currency equals one unit
        of the base currency.
      </p>

      <h2 id="base-quote">Base and Quote Currencies</h2>
      <p>
        In the pair ETH/USDT, ETH is the base currency and USDT is the quote currency. If the
        price is 3,000, it means 1 ETH costs 3,000 USDT. When you buy this pair, you spend USDT
        to get ETH. When you sell, you give up ETH to receive USDT. The base currency is always
        listed first and is what the price refers to.
      </p>
      <p>
        Common quote currencies include USDT (most popular globally), USDC, BTC, ETH, and USD.
        Most exchanges default to USDT pairs because of their high liquidity. Understanding this
        convention helps you navigate any exchange and read price data correctly.
      </p>

      <h2 id="types-of-pairs">Types of Trading Pairs</h2>
      <p>
        Stablecoin pairs (like SOL/USDT) are the most common and easiest to understand because
        the quote currency maintains a stable dollar value. Crypto-to-crypto pairs (like ETH/BTC)
        let you trade one cryptocurrency directly for another, which is useful for rebalancing
        between assets without converting to fiat. Fiat pairs (like BTC/USD) trade against
        actual government currency and are common on regulated exchanges.
      </p>
      <p>
        Some exchanges also offer cross-margin pairs and leveraged pairs for derivatives trading.
        These advanced pairs have additional mechanics around margin, funding rates, and
        settlement that standard spot pairs do not have.
      </p>

      <h2 id="liquidity">Understanding Pair Liquidity</h2>
      <p>
        Liquidity describes how easily you can trade a pair without significantly moving the price.
        High-liquidity pairs like BTC/USDT have tight bid-ask spreads and deep order books, meaning
        you can trade large amounts with minimal slippage. Low-liquidity pairs for small altcoins
        may have wide spreads and thin order books, meaning your trades can move the price.
      </p>
      <p>
        Always check the 24-hour volume and order book depth of a pair before trading. Trading
        illiquid pairs can result in poor execution prices, especially for larger orders. If a
        token has low liquidity on one pair, check if another pair (such as the BTC pair versus
        the USDT pair) has better depth.
      </p>

      <h2 id="choosing-pairs">Choosing the Right Pair</h2>
      <p>
        For simple buying and selling, use stablecoin pairs (USDT or USDC) as they are the most
        liquid and easiest to understand. For trading between cryptocurrencies, direct crypto
        pairs avoid the extra step and fee of converting to a stablecoin first. When evaluating
        a pair, prioritize liquidity, check the spread, and consider the fees for that specific
        market.
      </p>
      <p>
        Some exchanges offer fee discounts on certain pairs or charge different fees for different
        quote currencies. Always check the specific fee schedule for your chosen pair before
        executing a trade.
      </p>
    </LearnPageLayout>
  );
}
