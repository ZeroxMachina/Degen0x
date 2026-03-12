import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Candlestick? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what candlestick charts are, how to read them, common candlestick patterns, and how to use candlestick analysis for crypto trading decisions.",
};

export default function CandlePage() {
  return (
    <LearnPageLayout title="What Is a Candlestick?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A candlestick is a visual representation of price movement for a specific time period, showing the open, high, low, and close prices. Candlestick charts are the most popular charting method in crypto trading, providing more information at a glance than simple line charts. Individual candles and multi-candle patterns can signal potential trend reversals, continuations, and market sentiment shifts, making them essential tools for technical analysis."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-candlestick", title: "What Is a Candlestick?", level: 2 },
        { id: "reading-candles", title: "reading-candles", level: 2 },
        { id: "how-to-read-candlesticks", title: "How to Read Candlesticks", level: 2 },
        { id: "common-patterns", title: "common-patterns", level: 2 },
        { id: "common-candlestick-patterns", title: "Common Candlestick Patterns", level: 2 },
        { id: "using-candles", title: "using-candles", level: 2 },
        { id: "using-candlesticks-in-trading", title: "Using Candlesticks in Trading", level: 2 }
      ]}
      faqs={[{ question: "What timeframes should I use for candlestick analysis?", answer: "It depends on your trading style. Scalpers use 1-5 minute candles. Day traders focus on 15-minute to 1-hour candles. Swing traders analyze 4-hour and daily candles. Long-term investors look at weekly and monthly candles. Higher timeframe patterns are generally more reliable than lower timeframe patterns." },
        { question: "Are candlestick patterns reliable in crypto?", answer: "Candlestick patterns work in crypto but with lower reliability than in traditional markets due to higher volatility, 24/7 trading, and more manipulation. They are most effective on higher timeframes and when combined with volume analysis, support/resistance levels, and other technical indicators. Never trade based on a single candle pattern in isolation." }]}
      relatedArticles={[{ title: "Resistance", href: "/learn/glossary/resistance", category: "Glossary" }, { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" }, { title: "Crypto Market Indicators", href: "/learn/crypto-market-indicators", category: "Learn Crypto" }, { title: "Fundamental Analysis", href: "/learn/fundamental-analysis-crypto", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is a Candlestick?</h2>
      <p>A candlestick represents four data points for a time period: the opening price, highest price, lowest price, and closing price. The body (thick part) shows the range between open and close. The wicks (thin lines) extend to the high and low. A green (or hollow) candle means the close was higher than the open (bullish). A red (or filled) candle means the close was lower than the open (bearish). The body size and wick length convey the intensity of buying and selling pressure.</p>

      <h2 id="reading-candles">How to Read Candlesticks</h2>
      <p>A long green body indicates strong buying pressure. A long red body indicates strong selling pressure. Long upper wicks suggest sellers pushed price down from highs. Long lower wicks suggest buyers defended against lower prices. Small bodies (doji candles) with long wicks on both sides indicate indecision and potential reversal. The relative size and position of candles compared to previous candles provide context about momentum and trend direction.</p>

      <h2 id="common-patterns">Common Candlestick Patterns</h2>
      <p>Reversal patterns include hammer and inverted hammer (bullish at the bottom of downtrends), shooting star and hanging man (bearish at the top of uptrends), and engulfing patterns (where a large candle completely envelops the previous candle). Continuation patterns include three white soldiers (three consecutive bullish candles confirming an uptrend) and three black crows (three bearish candles confirming a downtrend). Doji candles at key levels often signal trend exhaustion and potential reversal.</p>

      <h2 id="using-candles">Using Candlesticks in Trading</h2>
      <p>Use candlestick patterns as confirmation tools rather than primary signals. A hammer at a known support level is more meaningful than a hammer in the middle of nowhere. Always check the volume accompanying a candlestick pattern: strong patterns should have above-average volume. Combine candlestick analysis with trend analysis, support and resistance levels, and momentum indicators for the most reliable trading signals. Practice pattern recognition on historical charts before applying it to live trading.</p>
    </LearnPageLayout>
  );
}
