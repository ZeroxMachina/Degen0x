import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Moving Average in Crypto Trading (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what moving averages are, how SMA and EMA work in crypto trading, how to use them for trend identification, and common moving average strategies.",
};

export default function MovingAveragePage() {
  return (
    <LearnPageLayout
      title="Moving Average"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="7 min read"
      intro="A moving average is a technical indicator that smooths price data by calculating the average price over a specific number of periods. Moving averages help traders identify trends, filter market noise, and generate buy or sell signals. They are among the most widely used tools in crypto technical analysis, forming the foundation for more complex indicators like MACD and Bollinger Bands."
      toc={[
        { id: "what-is-ma", title: "What Is a Moving Average?", level: 2 },
        { id: "sma-vs-ema", title: "SMA vs EMA", level: 2 },
        { id: "common-periods", title: "Common MA Periods", level: 2 },
        { id: "trading-strategies", title: "MA Trading Strategies", level: 2 },
      ]}
      faqs={[
        { question: "Which moving average is best for crypto?", answer: "There is no single best moving average. The 50-day and 200-day SMAs are most popular for identifying long-term trends. The 20-day EMA works well for swing trading. Shorter EMAs (9-day, 12-day) suit active traders. The best choice depends on your trading timeframe and strategy." },
        { question: "Can moving averages predict crypto prices?", answer: "Moving averages do not predict future prices. They are lagging indicators that reflect past price action. Their value lies in identifying trends after they form and providing objective reference levels for trading decisions. Combine them with other indicators for more complete analysis." },
      ]}
      relatedArticles={[
        { title: "EMA", href: "/learn/glossary/ema", category: "Glossary" },
        { title: "SMA", href: "/learn/glossary/sma", category: "Glossary" },
        { title: "Golden Cross", href: "/learn/glossary/golden-cross", category: "Glossary" },
        { title: "Death Cross", href: "/learn/glossary/death-cross", category: "Glossary" },
      ]}
    >
      <section id="what-is-ma">
        <h2>What Is a Moving Average?</h2>
        <p>A moving average calculates the arithmetic mean of an asset&apos;s price over a set number of periods, updating with each new period. For example, a 50-day moving average adds up the closing prices of the last 50 days and divides by 50. As each new day passes, the oldest day drops off and the newest is added. This creates a smooth line that follows the price trend, eliminating short-term fluctuations and making the overall direction clearer. Moving averages work on any timeframe from minutes to months.</p>
      </section>

      <section id="sma-vs-ema">
        <h2>SMA vs EMA</h2>
        <p>The Simple Moving Average (SMA) gives equal weight to all periods in the calculation. The Exponential Moving Average (EMA) applies more weight to recent prices, making it more responsive to new information. EMAs react faster to price changes but produce more false signals. SMAs are smoother and more reliable for long-term trend identification. Most traders use EMAs for short-term trading and SMAs for longer-term analysis. Both have valid applications, and the choice depends on whether you prioritize speed or reliability in your signals.</p>
      </section>

      <section id="common-periods">
        <h2>Common MA Periods</h2>
        <p>The 200-day MA is the gold standard for determining long-term trend direction. Price above the 200-day MA is generally considered bullish; below it is bearish. The 50-day MA identifies medium-term trends and is often used alongside the 200-day for crossover signals. The 20-day MA tracks short-term momentum and aligns roughly with one trading month. The 9-day and 12-day EMAs are popular among active traders for entries and exits. Combining multiple moving averages across timeframes provides a layered view of market structure.</p>
      </section>

      <section id="trading-strategies">
        <h2>MA Trading Strategies</h2>
        <p>Crossover strategies generate signals when a shorter MA crosses above (bullish) or below (bearish) a longer MA. The Golden Cross (50-day crossing above 200-day) and Death Cross (50-day crossing below 200-day) are the most famous examples. Moving averages also act as dynamic support and resistance levels. In an uptrend, price tends to bounce off the 50-day or 20-day MA. Traders use MA slope to gauge trend strength and MA spacing to identify momentum. These strategies work best in trending markets and generate false signals in sideways conditions.</p>
      </section>
    </LearnPageLayout>
  );
}
