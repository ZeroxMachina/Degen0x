import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `RSI (Relative Strength Index) Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what RSI is, how to read overbought and oversold signals, RSI divergence, and practical strategies for using RSI in crypto trading.",
};

export default function RSIPage() {
  return (
    <LearnPageLayout
      title="RSI (Relative Strength Index)"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="7 min read"
      intro="The Relative Strength Index (RSI) is a momentum oscillator that measures the speed and magnitude of recent price changes to evaluate whether an asset is overbought or oversold. RSI oscillates between 0 and 100, with readings above 70 suggesting overbought conditions and below 30 indicating oversold conditions. Developed by J. Welles Wilder Jr., RSI remains one of the most popular and reliable technical indicators for crypto traders."
      toc={[
        { id: "what-is-rsi", title: "what-is-rsi", level: 2 },
        { id: "what-is-rsi", title: "What Is RSI?", level: 2 },
        { id: "reading-rsi", title: "reading-rsi", level: 2 },
        { id: "reading-rsi-signals", title: "Reading RSI Signals", level: 2 },
        { id: "rsi-divergence", title: "rsi-divergence", level: 2 },
        { id: "rsi-divergence", title: "RSI Divergence", level: 2 },
        { id: "rsi-strategies", title: "rsi-strategies", level: 2 },
        { id: "rsi-trading-strategies", title: "RSI Trading Strategies", level: 2 }
      ]}
      faqs={[
        { question: "What RSI setting should I use for crypto?", answer: "The default 14-period RSI works well for most timeframes. Shorter periods (7 or 9) make RSI more sensitive and suit day traders. Longer periods (21 or 25) smooth the indicator for swing traders and investors. Adjust the overbought/oversold thresholds to 80/20 in strong trends for fewer but higher-quality signals." },
        { question: "Can RSI stay overbought for a long time?", answer: "Yes. In strong bull markets, RSI can remain above 70 for extended periods while price continues to rise. This is why using RSI alone for sell signals in trending markets can lead to premature exits. In strong trends, RSI pullbacks to the 40-50 zone often represent buying opportunities rather than bearish signals." },
      ]}
      relatedArticles={[
        { title: "MACD", href: "/learn/glossary/macd", category: "Glossary" },
        { title: "Stochastic Oscillator", href: "/learn/glossary/stochastic", category: "Glossary" },
        { title: "Technical Analysis", href: "/investing/learn/technical-analysis", category: "Investing" },
      ]}
    >
      <section id="what-is-rsi">
        <h2>What Is RSI?</h2>
        <p>RSI compares the magnitude of recent gains to recent losses over a specified period, typically 14 periods. The formula calculates the average gain divided by the average loss, then normalizes the result to a 0-100 scale. When an asset has had more and larger gains than losses recently, RSI rises toward 100. When losses dominate, RSI falls toward 0. The indicator provides an objective measure of momentum that helps traders assess whether a move has been too fast in either direction.</p>
      </section>

      <section id="reading-rsi">
        <h2>Reading RSI Signals</h2>
        <p>Traditional interpretation flags RSI above 70 as overbought (potential sell signal) and below 30 as oversold (potential buy signal). However, in strong crypto trends, these thresholds need adjustment. During bull markets, RSI may repeatedly bounce off the 40-50 range without reaching 30. During bear markets, RSI may struggle to surpass 60. Experienced traders adjust their thresholds based on the prevailing trend and use RSI as a confirmation tool rather than a standalone signal generator.</p>
      </section>

      <section id="rsi-divergence">
        <h2>RSI Divergence</h2>
        <p>Divergence occurs when RSI and price move in opposite directions, signaling potential trend weakness. Bullish divergence forms when price makes a lower low but RSI makes a higher low, suggesting selling momentum is fading. Bearish divergence appears when price makes a higher high but RSI makes a lower high, indicating buying momentum is weakening. Divergence is one of the most powerful RSI signals and often precedes significant trend reversals in crypto markets. Hidden divergence, where RSI diverges during a trend continuation, confirms the existing trend direction.</p>
      </section>

      <section id="rsi-strategies">
        <h2>RSI Trading Strategies</h2>
        <p>The failure swing is a pattern where RSI crosses above 30, pulls back without crossing below 30, then breaks its recent high to confirm a bullish signal. RSI trendlines can be drawn on the indicator itself, and breaks of these trendlines often precede price moves. Combining RSI with support and resistance levels creates high-probability setups where oversold RSI at a support level suggests a strong bounce potential. Multi-timeframe RSI analysis, checking RSI on daily and weekly charts simultaneously, helps avoid counter-trend trades.</p>
      </section>
    </LearnPageLayout>
  );
}
