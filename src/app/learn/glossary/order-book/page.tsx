import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an Order Book? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what an order book is, how it works in crypto trading, how to read order book data, and the difference between order book and AMM-based exchanges.",
};

export default function OrderBookPage() {
  return (
    <LearnPageLayout title="What Is an Order Book?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="An order book is a real-time, continuously updated list of buy and sell orders for a specific trading pair, organized by price. Order books are the core mechanism of centralized exchanges and some decentralized exchanges, matching buyers with sellers to facilitate trades. Understanding how to read an order book gives traders insight into supply and demand dynamics, potential support and resistance levels, and the depth of liquidity available at each price point."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-an-order-book", title: "What Is an Order Book?", level: 2 },
        { id: "reading-order-books", title: "reading-order-books", level: 2 },
        { id: "how-to-read-an-order-book", title: "How to Read an Order Book", level: 2 },
        { id: "order-types", title: "order-types", level: 2 },
        { id: "order-types", title: "Order Types", level: 2 },
        { id: "order-book-vs-amm", title: "order-book-vs-amm", level: 2 },
        { id: "order-book-vs-amm", title: "Order Book vs AMM", level: 2 }
      ]}
      faqs={[{ question: "What is the spread in an order book?", answer: "The spread is the difference between the highest bid (buy order) and the lowest ask (sell order). A tight spread indicates high liquidity and efficient pricing. A wide spread suggests low liquidity and potentially higher trading costs. Major trading pairs like BTC/USDT on top exchanges have spreads of $0.01 or less." },
        { question: "Can order books be manipulated?", answer: "Yes. Spoofing involves placing large orders to create the illusion of demand or supply, then canceling before execution. Wash trading creates artificial volume. Layering places multiple orders at different prices to influence perception. While illegal in traditional markets, enforcement in crypto is limited. Read order books critically and be aware of potential manipulation." }]}
      relatedArticles={[{ title: "Spread", href: "/learn/glossary/spread", category: "Glossary" }, { title: "Market Depth", href: "/learn/glossary/market-depth", category: "Glossary" }, { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" }, { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is an Order Book?</h2>
      <p>An order book is a digital ledger that records all outstanding buy and sell orders for a trading pair at various prices. The buy side (bids) lists orders from traders wanting to purchase the asset, ordered from highest to lowest price. The sell side (asks) lists orders from traders wanting to sell, ordered from lowest to highest. When a bid price meets an ask price, a trade executes automatically. The order book is the transparent heart of price discovery on an exchange.</p>

      <h2 id="reading-order-books">How to Read an Order Book</h2>
      <p>The order book display typically shows price, quantity, and cumulative total for each level. Large buy walls (clusters of buy orders at a specific price) may indicate strong support. Large sell walls may indicate resistance. The depth chart visualizes the order book graphically, showing cumulative buy and sell volumes at each price level. Pay attention to order size distribution: many small orders suggest retail participation, while a few large orders suggest institutional or whale activity.</p>

      <h2 id="order-types">Order Types</h2>
      <p>Market orders execute immediately at the best available price in the order book, consuming existing orders. Limit orders are placed at a specific price and wait in the order book until matched. Stop orders become market or limit orders when triggered by a specific price. Post-only orders guarantee your order is placed in the book as a maker, avoiding taker fees. Iceberg orders hide the full order size, displaying only a small portion to minimize market impact.</p>

      <h2 id="order-book-vs-amm">Order Book vs AMM</h2>
      <p>Order books match individual buyers with sellers at specific prices, offering precise control over execution price but requiring sufficient counterparty liquidity. AMMs use mathematical formulas and pooled liquidity to price trades algorithmically, offering constant liquidity but with price impact (slippage) proportional to trade size. Centralized exchanges primarily use order books, while most DEXs use AMMs. Hybrid models like dYdX combine on-chain settlement with order book matching for the best of both approaches.</p>
    </LearnPageLayout>
  );
}
