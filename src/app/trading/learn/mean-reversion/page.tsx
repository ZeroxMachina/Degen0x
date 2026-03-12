import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Mean Reversion Trading Strategy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn mean reversion trading for crypto. Profit when overextended prices revert to their average using Bollinger Bands, RSI, and statistical methods.",
};

export default function MeanReversionPage() {
  return (
    <LearnPageLayout
      title="Mean Reversion Trading Strategy"
      categoryName="Trading"
      categorySlug="trading"
      readTime="8 min read"
      intro="Mean reversion is a trading strategy based on the statistical observation that prices tend to return to their average over time. When an asset moves significantly above or below its mean, mean reversion traders bet on a move back toward the average. This contrarian approach can be highly effective in crypto markets during certain conditions."
      toc={[
        { id: "mean-reversion-basics", title: "mean-reversion-basics", level: 2 },
        { id: "mean-reversion-basics", title: "Mean Reversion Basics", level: 2 },
        { id: "indicators-tools", title: "indicators-tools", level: 2 },
        { id: "indicators-and-tools", title: "Indicators and Tools", level: 2 },
        { id: "crypto-application", title: "crypto-application", level: 2 },
        { id: "applying-mean-reversion-to-crypto", title: "Applying Mean Reversion to Crypto", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-and-risk-management", title: "Limitations and Risk Management", level: 2 }
      ]}
      faqs={[
        { question: "Does mean reversion work in crypto?", answer: "Mean reversion works in crypto during ranging markets and for mature, large-cap assets with established trading ranges. It is less effective during strong trending periods or for new tokens with limited price history. The key is identifying when mean reversion conditions exist versus when momentum will persist." },
        { question: "What is the mean in mean reversion?", answer: "The mean typically refers to a moving average such as the 20-day or 50-day simple or exponential moving average. It can also refer to the VWAP, a statistical mean, or the middle Bollinger Band. The specific mean used depends on the timeframe and strategy." },
      ]}
      relatedArticles={[
        { title: "Bollinger Bands Strategy", href: "/trading/learn/bollinger-bands", category: "Trading" },
        { title: "RSI Indicator: How to Use It", href: "/trading/learn/rsi-indicator", category: "Trading" },
        { title: "Range Trading Crypto Markets", href: "/trading/learn/range-trading", category: "Trading" },
        { title: "Statistical Arbitrage Strategies", href: "/trading/learn/statistical-arbitrage", category: "Trading" },
      ]}
    >
      <section id="mean-reversion-basics">
        <h2>Mean Reversion Basics</h2>
        <p>
          Mean reversion rests on the principle that extreme price movements are temporary and that prices will eventually return to their historical average. When an asset is significantly overextended above its mean, it is considered overbought and likely to pull back. When it is significantly below, it is oversold and likely to bounce.
        </p>
        <p>
          This concept has strong statistical support across many asset classes. In crypto, while trends can be more persistent than in traditional markets, mean reversion still applies, particularly for large-cap assets and during consolidation phases.
        </p>
        <p>
          Mean reversion trading is inherently contrarian: you buy when others are selling heavily and sell when others are buying aggressively. This requires conviction and a systematic approach to avoid catching falling knives or shorting into parabolic rallies.
        </p>
      </section>

      <section id="indicators-tools">
        <h2>Indicators and Tools</h2>
        <p>
          Bollinger Bands are the quintessential mean reversion tool. The middle band represents the mean (typically a 20-period SMA), and the upper and lower bands represent standard deviations. When price touches or exceeds the outer bands, a reversion to the middle band becomes more probable.
        </p>
        <p>
          RSI extremes below 20 or above 80 signal deeply overextended conditions with high mean reversion potential. Z-score analysis measures how many standard deviations the current price is from the mean, providing a statistical basis for identifying extreme deviations.
        </p>
        <p>
          VWAP (Volume Weighted Average Price) serves as an intraday mean. Day traders use deviations from VWAP to identify mean reversion opportunities, buying when price trades significantly below VWAP and selling when it trades significantly above.
        </p>
      </section>

      <section id="crypto-application">
        <h2>Applying Mean Reversion to Crypto</h2>
        <p>
          Focus on large-cap, highly liquid cryptocurrencies like Bitcoin and Ethereum for mean reversion strategies. These assets have deeper order books, more mean-reverting behavior, and are less prone to the one-directional moves that can devastate mean reversion positions on low-cap tokens.
        </p>
        <p>
          Use multiple timeframe confirmation: if the daily RSI is oversold and the 4-hour chart shows a bullish divergence near a key support level, the mean reversion probability increases significantly. Always align your mean reversion trades with higher timeframe support and resistance levels.
        </p>
        <p>
          Pair trades are an advanced mean reversion technique where you go long on an underperforming asset and short on an outperforming one within the same sector, betting that the performance gap will narrow. For example, going long ETH and short SOL when the ETH/SOL ratio reaches extreme lows relative to its mean.
        </p>
      </section>

      <section id="limitations">
        <h2>Limitations and Risk Management</h2>
        <p>
          The biggest danger in mean reversion trading is that sometimes prices do not revert. Regime changes, fundamental shifts, or black swan events can cause permanent moves away from the historical mean. Always use stop-losses to cap maximum loss per trade.
        </p>
        <p>
          Avoid mean reversion during strong trending markets. When the ADX is above 30 and moving averages are steeply sloped, momentum strategies outperform mean reversion. Switching between strategies based on market conditions is key to long-term success.
        </p>
        <p>
          Size positions smaller for mean reversion trades compared to momentum trades, as you are trading against the current direction. Scale into positions gradually rather than going all in at the first sign of an extreme reading. The market can stay irrational longer than your capital can hold out.
        </p>
      </section>
    </LearnPageLayout>
  );
}
