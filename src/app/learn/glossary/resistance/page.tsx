import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Resistance in Trading? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what resistance means in crypto trading, how to identify resistance levels, how resistance works with support, and strategies for trading around resistance.",
};

export default function ResistancePage() {
  return (
    <LearnPageLayout title="What Is Resistance?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Resistance is a price level where selling pressure consistently overwhelms buying pressure, preventing the price from rising further. When an asset approaches a resistance level, it tends to stall or reverse as sellers enter the market and buyers become hesitant. Resistance levels are among the most important concepts in technical analysis, helping traders identify potential reversal points, set profit targets, and time their entries and exits."
      toc={[{ id: "definition", title: "What Is Resistance?", level: 2 }, { id: "identifying-resistance", title: "Identifying Resistance Levels", level: 2 }, { id: "support-and-resistance", title: "Support and Resistance", level: 2 }, { id: "trading-resistance", title: "Trading Resistance Levels", level: 2 }]}
      faqs={[{ question: "What happens when resistance is broken?", answer: "When price convincingly breaks above resistance on high volume, that level often becomes support. This is called a support-resistance flip. Breakouts above resistance can trigger rapid price increases as short sellers cover and momentum traders enter. However, false breakouts are common in crypto, where price briefly exceeds resistance before falling back." },
        { question: "How many times does resistance need to be tested?", answer: "The more times a resistance level is tested without breaking, the stronger it is considered. However, each test also weakens it as sellers at that level gradually exhaust their supply. Two to three tests is typical before either a breakout or a more significant pullback. The context of each test (volume, momentum) matters as much as the count." }]}
      relatedArticles={[{ title: "Candlestick", href: "/learn/glossary/candle", category: "Glossary" }, { title: "Volume", href: "/learn/glossary/volume", category: "Glossary" }, { title: "Take Profit", href: "/learn/glossary/take-profit", category: "Glossary" }, { title: "Crypto Market Indicators", href: "/learn/crypto-market-indicators", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is Resistance?</h2>
      <p>Resistance is a price level where an asset has historically struggled to move above. It represents a zone where selling interest concentrates, created by traders setting profit targets, short sellers entering positions, or psychological barriers at round numbers. When price approaches resistance, the increase in selling pressure creates a ceiling effect. Resistance is not a precise price but rather a zone where the probability of a pullback increases significantly.</p>

      <h2 id="identifying-resistance">Identifying Resistance Levels</h2>
      <p>Historical resistance is identified by examining price charts for levels where the asset has previously reversed or consolidated. Round numbers ($50,000 for BTC, $4,000 for ETH) act as psychological resistance. Previous all-time highs form strong resistance until broken. Fibonacci retracement levels (38.2%, 50%, 61.8%) identify potential resistance within trends. Moving averages (50-day, 200-day) often act as dynamic resistance in downtrends.</p>

      <h2 id="support-and-resistance">Support and Resistance</h2>
      <p>Support and resistance are complementary concepts. Support is where buying pressure prevents further decline; resistance is where selling pressure prevents further advance. Together they create a price range or channel within which the asset trades. When resistance is broken, it often becomes support (and vice versa). This polarity principle is one of the most reliable concepts in technical analysis and applies across all timeframes and asset classes.</p>

      <h2 id="trading-resistance">Trading Resistance Levels</h2>
      <p>Conservative traders sell or take profits as price approaches resistance, anticipating a pullback. Aggressive traders wait for a confirmed breakout above resistance and enter long positions, using the old resistance as a stop-loss level. Breakout confirmation typically requires a close above resistance on above-average volume. Fade traders short at resistance, betting on a rejection, placing stops above the resistance zone. The strategy you choose depends on the broader trend context and your risk tolerance.</p>
    </LearnPageLayout>
  );
}
