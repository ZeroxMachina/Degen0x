import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Fibonacci Retracement in Crypto (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what Fibonacci retracement is, how to draw Fibonacci levels on crypto charts, key retracement percentages, and strategies for trading with Fibonacci tools.",
};

export default function FibonacciPage() {
  return (
    <LearnPageLayout
      title="Fibonacci Retracement"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="7 min read"
      intro="Fibonacci retracement is a technical analysis tool that uses horizontal lines to indicate potential support and resistance levels based on ratios derived from the Fibonacci sequence. Traders draw Fibonacci retracements between a significant high and low to identify where price might pull back before continuing its trend. The key levels of 23.6%, 38.2%, 50%, 61.8%, and 78.6% serve as potential reversal zones and are widely used across all financial markets including crypto."
      toc={[
        { id: "what-is-fibonacci", title: "What Is Fibonacci Retracement?", level: 2 },
        { id: "key-levels", title: "Key Fibonacci Levels", level: 2 },
        { id: "drawing-fibs", title: "How to Draw Fibonacci Levels", level: 2 },
        { id: "trading-fibs", title: "Trading with Fibonacci", level: 2 },
      ]}
      faqs={[
        { question: "Why does Fibonacci work in trading?", answer: "Fibonacci levels work partly as self-fulfilling prophecies because so many traders use them. When thousands of traders place buy orders at the 61.8% retracement, that collective action creates actual support. The mathematical ratios also appear in natural patterns, which some believe reflects fundamental market behavior driven by human psychology." },
        { question: "Which Fibonacci level is most important?", answer: "The 61.8% retracement (the golden ratio) is considered the most significant level. If price retraces 61.8% and holds, it typically indicates a strong trend that is likely to continue. The 50% level is also widely watched despite not being a true Fibonacci ratio. In strong trends, pullbacks often find support at the 38.2% level." },
      ]}
      relatedArticles={[
        { title: "Support Level", href: "/learn/glossary/support", category: "Glossary" },
        { title: "Resistance", href: "/learn/glossary/resistance", category: "Glossary" },
        { title: "Elliott Wave Theory", href: "/learn/glossary/elliott-wave", category: "Glossary" },
      ]}
    >
      <section id="what-is-fibonacci">
        <h2>What Is Fibonacci Retracement?</h2>
        <p>Fibonacci retracement is based on the Fibonacci sequence where each number is the sum of the two preceding ones (1, 1, 2, 3, 5, 8, 13...). The key ratios are derived from mathematical relationships within this sequence: 61.8% comes from dividing a number by the one that follows it, 38.2% from dividing by the number two places higher, and 23.6% from dividing by three places higher. These ratios are applied to price swings to identify levels where retracements are likely to stall and the original trend may resume.</p>
      </section>

      <section id="key-levels">
        <h2>Key Fibonacci Levels</h2>
        <p>The 23.6% retracement is a shallow pullback typical of strong trends with aggressive momentum. The 38.2% level represents a moderate retracement that often holds in healthy uptrends. The 50% level, while not technically a Fibonacci ratio, is widely used because markets frequently retrace half of a prior move. The 61.8% golden ratio is the most watched level and often represents the last line of defense for a trend. A break below 78.6% usually signals the prior trend has failed and a reversal is underway.</p>
      </section>

      <section id="drawing-fibs">
        <h2>How to Draw Fibonacci Levels</h2>
        <p>For an uptrend retracement, draw from the significant low to the significant high. For a downtrend retracement, draw from the high to the low. The tool automatically plots horizontal lines at each Fibonacci percentage level. Use clear, obvious swing points rather than minor fluctuations. Multiple timeframe Fibonacci analysis adds confidence when levels from different timeframes cluster near the same price. Fibonacci extensions (beyond 100%) project potential profit targets for the continuation of the trend.</p>
      </section>

      <section id="trading-fibs">
        <h2>Trading with Fibonacci</h2>
        <p>Enter long positions at Fibonacci support levels during uptrend pullbacks, placing stop-losses below the next Fibonacci level. Use Fibonacci extensions to set profit targets. Fibonacci clusters, where multiple levels from different swing points converge, create high-probability zones. Combine Fibonacci with other indicators like RSI divergence at a Fibonacci level for strong confirmation. The tool is most reliable when used with candlestick patterns and volume analysis at the retracement level rather than placing blind limit orders at Fibonacci lines.</p>
      </section>
    </LearnPageLayout>
  );
}
