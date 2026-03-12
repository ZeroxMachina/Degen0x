import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Engulfing Pattern in Crypto Trading (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what bullish and bearish engulfing patterns are, how to identify them on crypto charts, confirmation signals, and trading strategies for engulfing candles.",
};

export default function EngulfingPage() {
  return (
    <LearnPageLayout
      title="Engulfing Pattern"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="An engulfing pattern is a two-candle reversal formation where the second candle completely engulfs the body of the first candle. A bullish engulfing occurs when a large green candle fully engulfs the prior red candle at the bottom of a downtrend. A bearish engulfing occurs when a large red candle engulfs the prior green candle at the top of an uptrend. Engulfing patterns are among the most powerful and reliable candlestick reversal signals in crypto trading."
      toc={[
        { id: "what-is-engulfing", title: "what-is-engulfing", level: 2 },
        { id: "what-is-an-engulfing-pattern", title: "What Is an Engulfing Pattern?", level: 2 },
        { id: "bullish-engulfing", title: "bullish-engulfing", level: 2 },
        { id: "bullish-engulfing", title: "Bullish Engulfing", level: 2 },
        { id: "bearish-engulfing", title: "bearish-engulfing", level: 2 },
        { id: "bearish-engulfing", title: "Bearish Engulfing", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-engulfing-patterns", title: "Trading Engulfing Patterns", level: 2 }
      ]}
      faqs={[
        { question: "Do engulfing patterns need to engulf the shadows too?", answer: "The traditional definition requires only the body of the second candle to engulf the body of the first. If the second candle also engulfs the shadows of the first, this is an even stronger signal. The key is that the open and close of the engulfing candle exceed the open and close of the prior candle." },
        { question: "How reliable are engulfing patterns in crypto?", answer: "Engulfing patterns have a success rate of approximately 65-75% when they appear at key levels after extended trends. They are more reliable on daily and weekly charts than intraday charts. The signal strengthens when it occurs at support or resistance, with above-average volume, and divergence on momentum indicators." },
      ]}
      relatedArticles={[
        { title: "Hammer Candlestick", href: "/learn/glossary/hammer", category: "Glossary" },
        { title: "Doji Candlestick", href: "/learn/glossary/doji", category: "Glossary" },
        { title: "Candlestick", href: "/learn/glossary/candle", category: "Glossary" },
      ]}
    >
      <section id="what-is-engulfing">
        <h2>What Is an Engulfing Pattern?</h2>
        <p>An engulfing pattern is a two-candlestick formation where the second candle opens beyond the close of the first and closes beyond the open of the first, completely covering the prior candle body. The pattern represents a dramatic shift in control from one side to the other within a single period. The larger the engulfing candle relative to the first, the stronger the signal. The pattern is most significant when it appears after a sustained trend and at a recognized support or resistance level.</p>
      </section>

      <section id="bullish-engulfing">
        <h2>Bullish Engulfing</h2>
        <p>A bullish engulfing forms when a large green candle completely engulfs the body of the previous smaller red candle during a downtrend. The pattern shows that buyers overwhelmed sellers with enough force to not only absorb all selling pressure but push price higher than the previous open. Volume should be notably higher on the engulfing candle compared to the prior candle. The pattern is most significant at support levels, after extended declines, and when RSI shows oversold conditions.</p>
      </section>

      <section id="bearish-engulfing">
        <h2>Bearish Engulfing</h2>
        <p>A bearish engulfing forms when a large red candle completely engulfs the body of the previous smaller green candle during an uptrend. It signals that sellers have overwhelmed buyers and taken control of the price action. The pattern is particularly powerful at resistance levels, after parabolic rallies, and when accompanied by high volume. In crypto, bearish engulfing patterns at all-time highs or after extended rallies can mark significant tops and precede substantial corrections.</p>
      </section>

      <section id="trading">
        <h2>Trading Engulfing Patterns</h2>
        <p>For bullish engulfing, enter long on the close of the engulfing candle or at the open of the next candle. Place stops below the low of the engulfing candle. For bearish engulfing, enter short on the close or next open with stops above the engulfing candle high. Target a minimum risk-reward ratio of 2:1. Engulfing patterns at key support or resistance levels with volume confirmation provide the highest probability trades. In crypto, these patterns on the daily chart at major moving averages often produce reliable reversals.</p>
      </section>
    </LearnPageLayout>
  );
}
