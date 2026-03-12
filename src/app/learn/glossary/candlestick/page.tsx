import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Candlestick Chart? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what candlestick charts are, how to read them, common patterns, and how crypto traders use them for technical analysis.",
};

export default function CandlestickPage() {
  return (
    <LearnPageLayout
      title="What Is a Candlestick Chart?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A candlestick is a type of price chart element that displays the open, high, low, and close price of an asset for a specific time period. Originally developed by Japanese rice traders in the 18th century, candlestick charts are now the most widely used chart type in crypto trading. They provide more visual information than simple line charts and form the basis of technical analysis."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-candlestick", title: "What Is a Candlestick?", level: 2 },
        { id: "how-to-read", title: "how-to-read", level: 2 },
        { id: "how-to-read-candlesticks", title: "How to Read Candlesticks", level: 2 },
        { id: "patterns", title: "patterns", level: 2 },
        { id: "common-patterns", title: "Common Patterns", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "What do the colors mean on candlestick charts?",
          answer:
            "Green (or white) candles indicate the price closed higher than it opened — a bullish candle. Red (or black) candles indicate the price closed lower than it opened — a bearish candle. The body shows the open-to-close range, while the wicks show the high and low extremes.",
        },
        {
          question: "What timeframes should I use?",
          answer:
            "The best timeframe depends on your trading style. Day traders often use 5-minute, 15-minute, or 1-hour candles. Swing traders prefer 4-hour or daily candles. Long-term investors look at weekly or monthly candles. Higher timeframes generally provide more reliable signals but fewer trading opportunities.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Market Cap?", href: "/learn/glossary/market-cap", category: "Glossary" },
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
        { title: "What Is a Bull Market?", href: "/learn/glossary/bull-market", category: "Glossary" },
        { title: "What Is a Bear Market?", href: "/learn/glossary/bear-market", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Candlestick?</h2>
      <p>
        Each candlestick represents price action during a specific time period — it could be one minute, one hour, one day, or any other interval. The thick part of the candle is called the &quot;body&quot; and shows the range between the opening and closing price. The thin lines extending above and below the body are called &quot;wicks&quot; or &quot;shadows&quot; and show the highest and lowest prices reached during that period.
      </p>

      <h2 id="how-to-read">How to Read Candlesticks</h2>
      <p>
        A green candle means the asset closed higher than it opened (bullish). The bottom of the body is the open price and the top is the close price. A red candle means the asset closed lower than it opened (bearish). The top of the body is the open and the bottom is the close. Long bodies indicate strong buying or selling pressure, while short bodies suggest indecision.
      </p>
      <p>
        Long upper wicks show that buyers pushed the price up but sellers pushed it back down. Long lower wicks show that sellers drove the price down but buyers stepped in to recover. These wick patterns provide clues about market sentiment and potential reversals.
      </p>

      <h2 id="patterns">Common Patterns</h2>
      <p>
        Doji candles have nearly equal open and close prices, signaling indecision and potential reversal. Hammer and shooting star patterns show rejection of a price level. Engulfing patterns, where one candle completely covers the previous one, suggest a shift in momentum. These patterns are most meaningful when they appear at key support or resistance levels and are confirmed by volume.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Candlestick analysis is a foundational skill for any crypto trader. While no chart pattern guarantees future price movement, candlesticks provide a structured way to interpret market behavior, identify potential entry and exit points, and understand the balance between buyers and sellers. Combined with volume analysis and other indicators, they form the core of technical analysis.
      </p>
    </LearnPageLayout>
  );
}
