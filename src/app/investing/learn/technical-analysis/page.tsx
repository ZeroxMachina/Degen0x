import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Technical Analysis ${CURRENT_YEAR} - Charts, Indicators & Patterns`,
  description: `Learn technical analysis for crypto trading. Understand chart patterns, support/resistance, moving averages, RSI, and other indicators for better trades.`,
  alternates: { canonical: "/investing/learn/technical-analysis" },
};

const toc = [
  { id: "what-is-ta", title: "What Is Technical Analysis", level: 2 },
  { id: "support-resistance", title: "Support and Resistance", level: 2 },
  { id: "indicators", title: "Key Indicators", level: 2 },
  { id: "limitations", title: "Limitations", level: 2 },
];

const faqs = [
  { question: "Does technical analysis work for crypto?", answer: "Technical analysis can provide useful information about market sentiment and potential price levels, but it is not predictive with certainty. Crypto markets are influenced by narratives, regulatory events, and whale movements that charts cannot predict. Use TA as one tool among many, not as your sole decision-making method." },
  { question: "What timeframe should I use?", answer: "Long-term investors should focus on weekly and monthly charts. Swing traders use daily and 4-hour charts. Day traders use 1-hour and 15-minute charts. Higher timeframes provide more reliable signals but fewer trading opportunities. Match your timeframe to your investment strategy." },
  { question: "What are the most useful indicators for crypto?", answer: "The most widely used indicators include Moving Averages (50-day and 200-day), RSI (Relative Strength Index), MACD (Moving Average Convergence Divergence), and Volume. Simple tools like support/resistance levels and trend lines are often more useful than complex indicator combinations." },
];

export default function TechnicalAnalysisPage() {
  return (
    <LearnPageLayout
      title="Crypto Technical Analysis"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="12 min"
      intro="Technical analysis uses historical price and volume data to identify patterns and predict future price movements. While not foolproof, TA is a valuable tool for understanding market trends, identifying entry and exit points, and managing risk in your crypto investments."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Fundamental Analysis", href: "/investing/learn/fundamental-analysis", category: "Investing" },
        { title: "Risk Management", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <section id="what-is-ta" className="mb-10">
        <h2>What Is Technical Analysis?</h2>
        <p>
          Technical analysis studies historical price action and trading volume to forecast future
          price movements. The core premise is that all available information is reflected in the
          price, and that price patterns tend to repeat because human psychology drives markets.
          TA practitioners use charts, indicators, and pattern recognition to identify trading
          opportunities and assess risk.
        </p>
      </section>

      <section id="support-resistance" className="mb-10">
        <h2>Support and Resistance</h2>
        <p>
          Support levels are prices where buying pressure historically prevents further decline.
          Resistance levels are prices where selling pressure prevents further advance. These
          levels form because traders remember past price points and tend to act similarly at
          those levels. When support breaks, it often becomes resistance, and vice versa.
          Identifying key support and resistance levels is one of the most practical TA skills.
        </p>
      </section>

      <section id="indicators" className="mb-10">
        <h2>Key Indicators</h2>
        <p>
          Moving averages smooth price data to identify trends. The 50-day and 200-day moving
          averages are widely watched. RSI measures whether an asset is overbought (above 70)
          or oversold (below 30). MACD shows momentum changes by comparing moving averages.
          Volume confirms price movements. A breakout on high volume is more reliable than one
          on low volume. These basic indicators cover most practical TA needs for crypto investors.
        </p>
      </section>

      <section id="limitations" className="mb-10">
        <h2>Limitations of Technical Analysis</h2>
        <p>
          TA cannot predict black swan events, regulatory actions, or fundamental shifts.
          Crypto markets are influenced by narratives, social media, and whale movements that
          technical patterns cannot capture. Indicators can give false signals, especially in
          strongly trending or extremely volatile markets. Use TA alongside fundamental analysis
          and risk management rather than in isolation.
        </p>
      </section>
    </LearnPageLayout>
  );
}
