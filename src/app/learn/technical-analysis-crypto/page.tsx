import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Technical Analysis for Crypto Trading (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn technical analysis for cryptocurrency trading: chart patterns, key indicators like RSI and MACD, support and resistance levels, volume analysis, and how to build a trading strategy.",
};

export default function TechnicalAnalysisCryptoPage() {
  return (
    <LearnPageLayout
      title="Technical Analysis for Crypto Trading"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Technical analysis (TA) is the study of price charts and statistical indicators to forecast future price movements based on historical patterns. In crypto markets, where fundamental valuations are often difficult to establish and sentiment drives short-term price action, technical analysis provides a structured framework for making trading decisions. While no method can predict markets with certainty, understanding chart patterns, indicators, and market structure helps traders identify higher-probability setups and manage risk more effectively."
      toc={[
        { id: "foundations", title: "foundations", level: 2 },
        { id: "foundations-of-technical-analysis", title: "Foundations of Technical Analysis", level: 2 },
        { id: "chart-patterns", title: "chart-patterns", level: 2 },
        { id: "key-chart-patterns", title: "Key Chart Patterns", level: 2 },
        { id: "indicators", title: "indicators", level: 2 },
        { id: "essential-technical-indicators", title: "Essential Technical Indicators", level: 2 },
        { id: "volume-analysis", title: "volume-analysis", level: 2 },
        { id: "volume-analysis", title: "Volume Analysis", level: 2 },
        { id: "building-strategy", title: "building-strategy", level: 2 },
        { id: "building-a-trading-strategy", title: "Building a Trading Strategy", level: 2 }
      ]}
      faqs={[
        {
          question: "Does technical analysis actually work for crypto?",
          answer:
            "Technical analysis is not a crystal ball, but it provides a probability-based framework for decision-making. Many patterns work in crypto because traders act on them, creating self-fulfilling prophecies. TA is most effective when combined with risk management, fundamental analysis, and an understanding of market structure. It works best as one input among many, not as a standalone prediction system.",
        },
        {
          question: "Which timeframe should I use for crypto TA?",
          answer:
            "The best timeframe depends on your trading style. Day traders typically use 5-minute to 1-hour charts. Swing traders use 4-hour and daily charts. Position traders and investors use daily and weekly charts. Higher timeframes generally produce more reliable signals with less noise. Multi-timeframe analysis — checking alignment across several timeframes — provides the strongest setups.",
        },
        {
          question: "What is the most important technical indicator?",
          answer:
            "There is no single most important indicator. Most successful traders focus on price action (candlestick patterns and market structure) and volume as primary inputs, supplemented by 1-2 indicators like RSI for momentum and moving averages for trend direction. More indicators do not necessarily mean better analysis — simplicity and consistency usually outperform complexity.",
        },
      ]}
      relatedArticles={[
        { title: "Fundamental Analysis for Crypto", href: "/learn/fundamental-analysis-crypto", category: "Learn" },
        { title: "Crypto Market Cycles", href: "/learn/crypto-market-cycles", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
        { title: "Crypto Market Indicators", href: "/learn/crypto-market-indicators", category: "Learn" },
      ]}
    >
      <section id="foundations">
        <h2>Foundations of Technical Analysis</h2>
        <p>
          Technical analysis rests on three core assumptions: the market discounts everything (all known information is already reflected in the price), price moves in trends (prices tend to continue in a direction until a force causes reversal), and history tends to repeat (market psychology creates recurring patterns). Support levels are prices where buying pressure has historically prevented further decline, while resistance levels are prices where selling pressure has prevented further advance.
        </p>
        <p>
          Candlestick charts are the standard visualization in crypto trading. Each candle shows the open, high, low, and close prices for a specific time period. The body shows the range between open and close (green/bullish if close is above open, red/bearish if below), while the wicks (shadows) show the extreme highs and lows reached during that period. Reading candlestick patterns gives insight into the balance of power between buyers and sellers within each period.
        </p>
      </section>

      <section id="chart-patterns">
        <h2>Key Chart Patterns</h2>
        <p>
          Trend continuation patterns suggest the current trend will resume after a pause. Flags and pennants form during brief consolidations within a strong trend, with the price typically breaking out in the direction of the prior trend. Ascending and descending triangles form when price compresses between a flat support/resistance and a diagonal trendline, usually resolving in the direction of the flat boundary.
        </p>
        <p>
          Reversal patterns signal a potential trend change. Head and shoulders (and its inverse) is one of the most reliable reversal patterns, featuring three peaks with the middle peak (head) being the highest. Double tops and double bottoms form when price tests a level twice and fails to break through, suggesting a reversal. Wedges and broadening formations also signal potential reversals. No pattern works 100% of the time — confirmation through volume, additional indicators, and risk management through stop-losses is essential.
        </p>
      </section>

      <section id="indicators">
        <h2>Essential Technical Indicators</h2>
        <p>
          Moving averages smooth price data to identify trends. The 50-day and 200-day simple moving averages (SMA) are widely watched. When the shorter moving average crosses above the longer one (golden cross), it signals bullish momentum. When it crosses below (death cross), it signals bearish momentum. The exponential moving average (EMA) weights recent prices more heavily, making it more responsive to current conditions.
        </p>
        <p>
          The Relative Strength Index (RSI) measures momentum on a 0-100 scale. Readings above 70 suggest overbought conditions, while readings below 30 suggest oversold conditions. RSI divergences — where price makes a new high but RSI makes a lower high — can signal weakening momentum and potential reversals. The MACD (Moving Average Convergence Divergence) shows the relationship between two EMAs and generates signals through line crossovers and histogram changes. Bollinger Bands show price volatility: when bands narrow (squeeze), a significant move is often imminent, though direction is uncertain.
        </p>
      </section>

      <section id="volume-analysis">
        <h2>Volume Analysis</h2>
        <p>
          Volume measures the number of tokens or contracts traded during a specific period and is considered by many to be the most important confirming indicator. Strong price movements accompanied by high volume are more likely to be sustainable, while moves on low volume are more likely to reverse. Volume typically increases in the direction of the prevailing trend and decreases during countertrend corrections, confirming the trend's strength.
        </p>
        <p>
          Volume precedes price in many cases: an increase in volume before a significant price move can signal institutional accumulation or distribution. On-Balance Volume (OBV) creates a running total by adding volume on up days and subtracting it on down days, revealing the cumulative buying and selling pressure that may not be visible in price alone. Volume Profile, which shows the distribution of trading volume at each price level, identifies high-volume nodes (strong support/resistance) and low-volume areas (price moves quickly through these ranges).
        </p>
      </section>

      <section id="building-strategy">
        <h2>Building a Trading Strategy</h2>
        <p>
          An effective trading strategy combines a clear entry signal, a predetermined stop-loss level, and a defined profit target. Start by identifying the market structure (trending or ranging) on a higher timeframe, then look for entry opportunities on a lower timeframe that align with the higher-timeframe direction. Entering trades in the direction of the dominant trend significantly improves success rates.
        </p>
        <p>
          Keep your strategy simple — a system using 2-3 indicators and clear rules outperforms a complex system that generates conflicting signals. Backtest your strategy on historical data before risking real capital. Paper trade (simulate trades without real money) to build confidence and identify weaknesses. Keep a trading journal that records every trade's rationale, entry, exit, and outcome. Over time, this journal becomes your most valuable tool for identifying what works and eliminating what does not. Remember that the most important factor in trading success is risk management, not prediction accuracy.
        </p>
      </section>
    </LearnPageLayout>
  );
}
