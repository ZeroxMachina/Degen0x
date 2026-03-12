import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Read Crypto Trading Charts (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn to read crypto trading charts: candlestick patterns, support and resistance, volume analysis, moving averages, and essential technical indicators for beginners.",
};

export default function HowToReadChartsPage() {
  return (
    <LearnPageLayout
      title="How to Read Crypto Trading Charts"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="13 min"
      intro="Trading charts are the visual language of the market. They display price history, volume, and patterns that traders use to make informed decisions about when to buy and sell. While chart reading (technical analysis) is not a crystal ball, it provides a framework for understanding market behavior and managing risk. This guide teaches you the essential concepts of reading crypto charts, from basic candlestick patterns to key technical indicators."
      toc={[
        { id: "candlesticks", title: "candlesticks", level: 2 },
        { id: "understanding-candlestick-charts", title: "Understanding Candlestick Charts", level: 2 },
        { id: "timeframes", title: "timeframes", level: 2 },
        { id: "choosing-the-right-timeframe", title: "Choosing the Right Timeframe", level: 2 },
        { id: "support-resistance", title: "support-resistance", level: 2 },
        { id: "support-and-resistance-levels", title: "Support and Resistance Levels", level: 2 },
        { id: "volume", title: "volume", level: 2 },
        { id: "reading-volume", title: "Reading Volume", level: 2 },
        { id: "indicators", title: "indicators", level: 2 },
        { id: "essential-technical-indicators", title: "Essential Technical Indicators", level: 2 },
        { id: "patterns", title: "patterns", level: 2 },
        { id: "common-chart-patterns", title: "Common Chart Patterns", level: 2 }
      ]}
      faqs={[
        {
          question: "Do trading charts actually predict future prices?",
          answer:
            "Charts do not predict the future. They show historical price action and help identify patterns that have tended to repeat. Technical analysis provides probabilities, not certainties. A pattern that historically leads to an upward move 60% of the time still fails 40% of the time. Charts are a tool for managing risk, not a crystal ball.",
        },
        {
          question: "What timeframe should beginners use?",
          answer:
            "Beginners should start with the daily chart (each candle represents one day) for a broader market perspective. As you develop your skills, you can look at 4-hour and 1-hour charts for more detailed analysis. Avoid very short timeframes like 1-minute or 5-minute charts initially, as they contain more noise and require faster decision-making.",
        },
        {
          question: "Which technical indicator is the most useful?",
          answer:
            "No single indicator is universally best. However, many traders consider the Relative Strength Index (RSI) and simple moving averages to be the most useful starting points. RSI helps identify overbought and oversold conditions, while moving averages reveal trend direction. Using two or three indicators together is more effective than relying on one alone.",
        },
      ]}
      relatedArticles={[
        {
          title: "Limit Orders vs Market Orders Explained",
          href: "/exchanges/learn/limit-vs-market-orders",
          category: "Exchanges",
        },
        {
          title: "Spot Trading vs Futures Trading",
          href: "/exchanges/learn/spot-vs-futures",
          category: "Exchanges",
        },
        {
          title: "How to Buy Cryptocurrency: A Step-by-Step Guide",
          href: "/exchanges/learn/how-to-buy-crypto",
          category: "Exchanges",
        },
      ]}
    >
      <h2 id="candlesticks">Understanding Candlestick Charts</h2>
      <p>
        Candlestick charts are the standard chart type used by crypto traders. Each &quot;candle&quot; represents
        a specific time period and displays four pieces of information: the open price (where the period started),
        the close price (where it ended), the high price (the peak during the period), and the low price (the
        lowest point).
      </p>
      <p>
        The rectangular body of the candle shows the range between the open and close prices. A green (or white)
        candle indicates the close was higher than the open -- a bullish period. A red (or black) candle means the
        close was lower than the open -- a bearish period. The thin lines extending above and below the body are
        called wicks or shadows, and they show the highest and lowest prices reached during that period.
      </p>
      <p>
        The size and shape of candles convey important information. A long green body indicates strong buying
        pressure. A long red body signals strong selling. Long wicks suggest price rejection at those levels. A
        candle with a very small body and long wicks (called a &quot;doji&quot;) indicates indecision between
        buyers and sellers, often occurring at potential reversal points.
      </p>

      <h2 id="timeframes">Choosing the Right Timeframe</h2>
      <p>
        The timeframe you choose determines how much time each candle represents. Common timeframes range from
        1 minute to 1 month. Shorter timeframes (1-minute, 5-minute, 15-minute) show granular price action and
        are used by day traders and scalpers. Longer timeframes (daily, weekly, monthly) reveal broader trends
        and are favored by swing traders and long-term investors.
      </p>
      <p>
        A practical approach is multi-timeframe analysis, where you examine the same asset across several
        timeframes to build a complete picture. Start with the weekly or daily chart to identify the major trend,
        then use the 4-hour or 1-hour chart for entry timing. This top-down approach helps you avoid trading
        against the larger trend while finding precise entry points on shorter timeframes.
      </p>
      <p>
        The timeframe you focus on should match your trading style. If you plan to hold positions for days or
        weeks, the daily chart is your primary tool. If you are actively day trading, the 15-minute and 1-hour
        charts will be most relevant. Avoid the temptation to constantly zoom into shorter timeframes when holding
        longer-term positions, as the noise can trigger emotional decisions.
      </p>

      <h2 id="support-resistance">Support and Resistance Levels</h2>
      <p>
        Support is a price level where buying interest is strong enough to prevent the price from falling further.
        Resistance is a level where selling pressure is strong enough to stop the price from rising. These levels
        form because traders remember previous price action and tend to place orders around significant historical
        levels.
      </p>
      <p>
        To identify support and resistance, look for price levels that the asset has bounced off multiple times.
        The more times a level has been tested and held, the stronger it is considered to be. When a support level
        finally breaks, it often becomes a new resistance level, and vice versa. This &quot;polarity&quot; principle
        is one of the most reliable concepts in technical analysis.
      </p>
      <p>
        Round numbers (like $50,000 for Bitcoin or $3,000 for Ethereum) frequently act as psychological support
        and resistance levels because many traders place orders at these prominent price points. All-time highs are
        always significant resistance levels, while previous major lows serve as important support zones.
      </p>

      <h2 id="volume">Reading Volume</h2>
      <p>
        Volume represents the number of units (or dollar value) of an asset traded during a given time period. It
        is typically displayed as a bar chart at the bottom of the price chart. Volume is a confirmation tool --
        it tells you how much conviction is behind a price move.
      </p>
      <p>
        A price move accompanied by high volume is considered more significant and sustainable than one on low
        volume. For example, a breakout above resistance on heavy volume is a stronger signal than a breakout on
        thin volume, which may be a false breakout. Similarly, a support level holding on high volume is more
        meaningful than one holding with minimal trading activity.
      </p>
      <p>
        Declining volume during a trend can be an early warning sign. If the price is climbing but each successive
        move higher comes on less volume, it suggests waning buyer enthusiasm and potential trend exhaustion. This
        divergence between price and volume is one of the more reliable reversal signals in technical analysis.
      </p>

      <h2 id="indicators">Essential Technical Indicators</h2>
      <p>
        <strong>Moving Averages (MA)</strong> smooth out price data to reveal the underlying trend. The two most
        popular are the Simple Moving Average (SMA) and Exponential Moving Average (EMA). Common periods are the
        50-day and 200-day. When the price is above the MA, the trend is generally bullish. When the 50-day MA
        crosses above the 200-day MA, it is called a &quot;golden cross&quot; (bullish), and the reverse is a
        &quot;death cross&quot; (bearish).
      </p>
      <p>
        <strong>Relative Strength Index (RSI)</strong> measures the speed and magnitude of price changes on a
        scale from 0 to 100. Readings above 70 suggest the asset may be overbought (potentially due for a
        pullback), while readings below 30 indicate oversold conditions (potentially due for a bounce). RSI
        divergence -- when the price makes a new high but RSI does not -- is a powerful reversal signal.
      </p>
      <p>
        <strong>MACD (Moving Average Convergence Divergence)</strong> shows the relationship between two moving
        averages. It consists of the MACD line, signal line, and histogram. Crossovers between the MACD and signal
        lines generate buy and sell signals, while the histogram shows the strength of the current momentum. MACD
        is useful for identifying trend changes and momentum shifts.
      </p>

      <h2 id="patterns">Common Chart Patterns</h2>
      <p>
        <strong>Head and Shoulders</strong> is a reversal pattern consisting of three peaks, with the middle peak
        (head) being the highest and the two outer peaks (shoulders) being roughly equal. The pattern signals a
        shift from bullish to bearish when the price breaks below the neckline connecting the two troughs. An
        inverse head and shoulders signals a bullish reversal.
      </p>
      <p>
        <strong>Triangles</strong> form when the price range narrows, creating converging trendlines. An ascending
        triangle (flat top, rising bottom) is typically bullish. A descending triangle (flat bottom, falling top)
        is bearish. A symmetrical triangle can break either way. The breakout from a triangle is usually
        accompanied by increased volume and can lead to a move equal to the height of the triangle.
      </p>
      <p>
        <strong>Double tops and double bottoms</strong> are reversal patterns where the price tests a level twice
        and fails. A double top forms when the price hits resistance twice and falls, creating an M shape that
        signals a bearish reversal. A double bottom occurs when the price tests support twice and bounces, creating
        a W shape that signals a bullish reversal. These patterns are among the most common and reliable in
        crypto markets.
      </p>
    </LearnPageLayout>
  );
}
