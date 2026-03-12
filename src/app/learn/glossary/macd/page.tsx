import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `MACD Indicator Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what MACD is, how to read MACD crossovers, histogram signals, divergence patterns, and practical MACD trading strategies for cryptocurrency.",
};

export default function MACDPage() {
  return (
    <LearnPageLayout
      title="MACD"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="7 min read"
      intro="The Moving Average Convergence Divergence (MACD) is a trend-following momentum indicator that shows the relationship between two exponential moving averages. MACD helps traders identify trend direction, momentum changes, and potential entry or exit points. It is one of the most versatile and widely used indicators in crypto technical analysis, suitable for both trend identification and momentum assessment."
      toc={[
        { id: "what-is-macd", title: "what-is-macd", level: 2 },
        { id: "what-is-macd", title: "What Is MACD?", level: 2 },
        { id: "components", title: "components", level: 2 },
        { id: "macd-components", title: "MACD Components", level: 2 },
        { id: "signals", title: "signals", level: 2 },
        { id: "macd-signals", title: "MACD Signals", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "macd-trading-strategies", title: "MACD Trading Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What are the best MACD settings for crypto?", answer: "The default settings (12, 26, 9) work well for most situations. For faster signals on shorter timeframes, try (8, 17, 9). For longer-term trend identification, (19, 39, 9) reduces noise. The key is consistency in using the same settings so you learn to read the signals over time." },
        { question: "Is MACD a leading or lagging indicator?", answer: "MACD is primarily a lagging indicator because it is based on moving averages of past prices. However, the histogram component can provide semi-leading signals when it begins shrinking before a crossover occurs. MACD divergence can also anticipate trend changes before they happen in price." },
      ]}
      relatedArticles={[
        { title: "RSI", href: "/learn/glossary/rsi", category: "Glossary" },
        { title: "EMA", href: "/learn/glossary/ema", category: "Glossary" },
        { title: "Moving Average", href: "/learn/glossary/moving-average", category: "Glossary" },
      ]}
    >
      <section id="what-is-macd">
        <h2>What Is MACD?</h2>
        <p>MACD was developed by Gerald Appel in the late 1970s and calculates the difference between two exponential moving averages, typically the 12-period and 26-period EMAs. When the shorter EMA is above the longer EMA, the MACD line is positive, indicating bullish momentum. When below, it is negative, indicating bearish momentum. The rate at which these averages converge or diverge reveals the strength of the underlying trend and potential turning points.</p>
      </section>

      <section id="components">
        <h2>MACD Components</h2>
        <p>The MACD line is the difference between the 12-period and 26-period EMAs. The signal line is a 9-period EMA of the MACD line itself, acting as a smoother reference. The histogram visualizes the difference between the MACD line and the signal line, making crossovers easier to spot. When the histogram is positive and growing, bullish momentum is increasing. When the histogram is negative and expanding, bearish momentum is strengthening. The zero line represents the point where both EMAs are equal.</p>
      </section>

      <section id="signals">
        <h2>MACD Signals</h2>
        <p>A bullish signal occurs when the MACD line crosses above the signal line, especially when below the zero line. A bearish signal occurs when the MACD line crosses below the signal line, particularly when above zero. Zero-line crossovers indicate trend direction changes. Divergence between MACD and price is a powerful signal: bearish divergence (price rising, MACD falling) warns of weakness, while bullish divergence (price falling, MACD rising) hints at a potential reversal. Histogram slope changes often precede the crossover itself.</p>
      </section>

      <section id="strategies">
        <h2>MACD Trading Strategies</h2>
        <p>The crossover strategy buys when MACD crosses above the signal line and sells on the opposite crossover. This works best in trending markets but produces whipsaws in ranging conditions. The histogram reversal strategy enters when the histogram changes direction after reaching an extreme. Multi-timeframe MACD analysis uses the weekly MACD for trend direction and the daily for entry timing. Combining MACD with RSI and volume analysis creates a comprehensive momentum assessment that filters out many false signals common in crypto markets.</p>
      </section>
    </LearnPageLayout>
  );
}
