import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Spread in Trading? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what spread means in crypto trading, how it affects your trading costs, what causes wide spreads, and how to minimize spread costs.",
};

export default function SpreadPage() {
  return (
    <LearnPageLayout title="What Is Spread?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="The spread is the difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask) for an asset. Spread is a hidden cost of trading that affects every transaction. Tight spreads indicate a liquid, efficient market, while wide spreads signal low liquidity and higher trading costs. Understanding spread helps you choose better trading venues and minimize the cost of executing trades."
      toc={[{ id: "definition", title: "What Is Spread?", level: 2 }, { id: "factors", title: "What Affects Spread", level: 2 }, { id: "spread-types", title: "Types of Spread", level: 2 }, { id: "minimizing-spread", title: "Minimizing Spread Costs", level: 2 }]}
      faqs={[{ question: "Why do different exchanges have different spreads?", answer: "Spread depends on liquidity depth, market maker activity, and trading volume. Major exchanges like Binance with high volume have tight spreads on popular pairs. Smaller exchanges or illiquid pairs have wider spreads. DEXs have variable spread equivalent (slippage) based on pool depth and trade size." },
        { question: "Is spread the same as slippage?", answer: "They are related but different. Spread is the static difference between bid and ask. Slippage is the difference between your expected price and actual execution price, which can be caused by spread plus price movement during execution. On AMM DEXs, slippage replaces spread as the primary trading cost." }]}
      relatedArticles={[{ title: "Order Book", href: "/learn/glossary/order-book", category: "Glossary" }, { title: "Market Depth", href: "/learn/glossary/market-depth", category: "Glossary" }, { title: "Slippage", href: "/learn/glossary/slippage", category: "Glossary" }, { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Spread?</h2>
      <p>Spread is the gap between the best bid and best ask in an order book. If BTC&apos;s best bid is $60,000 and best ask is $60,010, the spread is $10 (0.017%). When you buy at market price, you pay the ask; when you sell at market, you receive the bid. This means you start every trade with a small loss equal to the spread. For active traders making many transactions, spread costs accumulate and can significantly impact overall returns.</p>

      <h2 id="factors">What Affects Spread</h2>
      <p>Trading volume is the primary factor: high-volume assets have tight spreads because many market makers compete to offer the best prices. Market volatility widens spreads as market makers increase their margin to compensate for rapid price changes. Time of day matters, as spreads tend to widen during low-activity periods. The specific exchange, trading pair, and presence of professional market makers all influence the spread available to traders.</p>

      <h2 id="spread-types">Types of Spread</h2>
      <p>The quoted spread is the visible bid-ask difference at any given moment. The effective spread accounts for the actual execution price you receive, which may be better or worse than the quoted spread due to order book dynamics. Realized spread measures the market maker&apos;s actual profit after the trade, accounting for price movement. In DeFi, the equivalent concept is price impact, which increases proportionally with trade size relative to pool liquidity.</p>

      <h2 id="minimizing-spread">Minimizing Spread Costs</h2>
      <p>Trade on exchanges with the highest liquidity for your chosen pairs. Use limit orders instead of market orders to avoid paying the full spread. Trade during high-volume periods when spreads are naturally tighter. For large orders, consider splitting them across multiple venues or using time-weighted average price (TWAP) execution. On DEXs, use aggregators that route trades across multiple pools to find the best execution price and minimize price impact.</p>
    </LearnPageLayout>
  );
}
