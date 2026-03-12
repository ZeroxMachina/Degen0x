import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Doji Candlestick Pattern Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what a doji candlestick is, the different types of doji patterns, what they signal about market indecision, and how to trade doji candles in crypto.",
};

export default function DojiPage() {
  return (
    <LearnPageLayout
      title="Doji Candlestick"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="6 min read"
      intro="A doji is a candlestick pattern where the opening and closing prices are virtually equal, creating a candle with little to no body but potentially long upper and lower shadows. Doji candles signal indecision between buyers and sellers and often appear at turning points in the market. The specific type of doji and its position within the trend context provides important clues about potential reversals or continuation."
      toc={[
        { id: "what-is-doji", title: "what-is-doji", level: 2 },
        { id: "what-is-a-doji", title: "What Is a Doji?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-doji-patterns", title: "Types of Doji Patterns", level: 2 },
        { id: "interpretation", title: "interpretation", level: 2 },
        { id: "interpreting-doji-signals", title: "Interpreting Doji Signals", level: 2 },
        { id: "trading", title: "trading", level: 2 },
        { id: "trading-with-doji-candles", title: "Trading with Doji Candles", level: 2 }
      ]}
      faqs={[
        { question: "Is a doji bullish or bearish?", answer: "A doji by itself is neutral and indicates indecision. Its significance depends on context. A doji after a strong uptrend can be bearish (buyers losing control). A doji after a strong downtrend can be bullish (sellers losing control). Always wait for confirmation from the next candle before acting on a doji signal." },
        { question: "How often do doji candles appear in crypto?", answer: "Doji candles appear frequently in crypto markets, especially on shorter timeframes. Not every doji is significant. Focus on doji patterns that appear at key support or resistance levels, after extended trends, or at significant Fibonacci levels. Doji on daily and weekly charts carry more weight than those on hourly charts." },
      ]}
      relatedArticles={[
        { title: "Hammer Candlestick", href: "/learn/glossary/hammer", category: "Glossary" },
        { title: "Engulfing Pattern", href: "/learn/glossary/engulfing", category: "Glossary" },
        { title: "Candlestick", href: "/learn/glossary/candle", category: "Glossary" },
      ]}
    >
      <section id="what-is-doji">
        <h2>What Is a Doji?</h2>
        <p>A doji forms when an asset opens and closes at nearly the same price during a trading period. The result is a candlestick with a very thin or nonexistent body. The upper shadow shows the highest price reached, and the lower shadow shows the lowest. A doji represents a period where neither buyers nor sellers gained the upper hand despite active trading during the session. This equilibrium often precedes a shift in momentum as the market decides its next direction.</p>
      </section>

      <section id="types">
        <h2>Types of Doji Patterns</h2>
        <p>The standard doji has small or equal upper and lower shadows. The long-legged doji has very long shadows on both sides, indicating extreme indecision with wide price swings. The dragonfly doji has a long lower shadow and no upper shadow, forming after price dropped significantly but recovered to close near the open. The gravestone doji has a long upper shadow and no lower shadow, forming after price rallied but gave back all gains. Each variation carries slightly different implications depending on trend context.</p>
      </section>

      <section id="interpretation">
        <h2>Interpreting Doji Signals</h2>
        <p>Context is everything with doji patterns. A doji at the top of an uptrend (especially a gravestone doji) warns that buyers are losing control. A doji at the bottom of a downtrend (especially a dragonfly doji) suggests sellers are weakening. Doji at support or resistance levels gain additional significance. The morning doji star (downtrend, doji, bullish candle) and evening doji star (uptrend, doji, bearish candle) are powerful three-candle reversal patterns that incorporate doji as the pivot candle.</p>
      </section>

      <section id="trading">
        <h2>Trading with Doji Candles</h2>
        <p>Never trade a doji in isolation. Wait for the next candle to confirm the reversal direction. If a doji appears at resistance and the next candle is bearish, this confirms a short setup. If a doji appears at support and the next candle is bullish, this confirms a long setup. Place stops beyond the doji shadows. In crypto, doji on the daily chart at major support or resistance levels provide the most actionable signals. Combine doji analysis with volume and momentum indicators for the highest probability setups.</p>
      </section>
    </LearnPageLayout>
  );
}
