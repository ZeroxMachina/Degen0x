import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Key Crypto Market Indicators to Watch (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn the most important crypto market indicators: Bitcoin dominance, Fear and Greed Index, funding rates, exchange flows, stablecoin supply, and on-chain metrics that signal market direction.",
};

export default function CryptoMarketIndicatorsPage() {
  return (
    <LearnPageLayout
      title="Key Crypto Market Indicators to Watch"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Crypto market indicators are data points and metrics that help investors gauge market conditions, sentiment, and potential direction. Unlike traditional markets that rely heavily on economic data releases and corporate earnings, crypto has developed its own unique set of indicators leveraging the transparency of blockchain data. Monitoring these indicators provides valuable context for investment decisions and helps you avoid the common trap of relying solely on price action and social media sentiment."
      toc={[
        { id: "sentiment", title: "Sentiment Indicators", level: 2 },
        { id: "on-chain", title: "On-Chain Indicators", level: 2 },
        { id: "derivatives", title: "Derivatives Market Indicators", level: 2 },
        { id: "macro", title: "Macro and Cross-Market Indicators", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the most reliable crypto market indicator?",
          answer:
            "No single indicator is reliably predictive on its own. The most useful approach is combining multiple indicators to build a comprehensive market picture. On-chain metrics like exchange flows and long-term holder behavior tend to be among the most reliable for identifying major market turning points, as they reflect actual capital movement rather than opinion or sentiment.",
        },
        {
          question: "What is Bitcoin dominance and why does it matter?",
          answer:
            "Bitcoin dominance is Bitcoin's share of total crypto market capitalization. Rising dominance often signals risk-off sentiment (capital flowing from altcoins to Bitcoin's relative safety) or early bull market phases. Declining dominance can signal an altcoin season where altcoins outperform Bitcoin. Tracking dominance trends helps with allocation decisions between Bitcoin and altcoins.",
        },
        {
          question: "How often should I check market indicators?",
          answer:
            "For long-term investors, weekly or bi-weekly review is sufficient. For active traders, daily monitoring is appropriate. Avoid checking too frequently, as this can lead to overreaction to short-term noise. Focus on trends in indicators rather than individual data points, and use indicators to inform your strategy rather than to trigger impulsive trades.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Market Cycles", href: "/learn/crypto-market-cycles", category: "Learn" },
        { title: "Technical Analysis for Crypto", href: "/learn/technical-analysis-crypto", category: "Learn" },
        { title: "Crypto Sentiment Analysis", href: "/learn/crypto-sentiment-analysis", category: "Learn" },
        { title: "Whale Watching", href: "/learn/whale-watching", category: "Learn" },
      ]}
    >
      <section id="sentiment">
        <h2>Sentiment Indicators</h2>
        <p>
          The Fear and Greed Index aggregates multiple data sources (volatility, market momentum, social media, surveys, Bitcoin dominance, and Google Trends) into a single 0-100 score. Extreme fear (below 20) has historically coincided with market bottoms and buying opportunities, while extreme greed (above 80) has coincided with overheated conditions and potential tops. The index is a useful contrarian indicator — when everyone is fearful, that is often the time to be greedy, and vice versa.
        </p>
        <p>
          Social media sentiment tracked across platforms like Twitter, Reddit, and Discord can signal shifts in market psychology. A sudden spike in positive sentiment and engagement often precedes or accompanies price tops, while maximum negativity often marks bottoms. Google Trends data for search terms like "buy crypto" and "Bitcoin price" provides a proxy for retail interest — spikes in search volume during price rallies often indicate late-stage retail inflow near cycle peaks. Funding rates on perpetual futures provide a real-time gauge of leveraged trader sentiment.
        </p>
      </section>

      <section id="on-chain">
        <h2>On-Chain Indicators</h2>
        <p>
          Exchange net flows track whether crypto is flowing into or out of exchanges. Net inflows (more crypto deposited to exchanges than withdrawn) suggest increased selling pressure, while net outflows suggest accumulation and holding behavior. Large and sustained outflows from exchanges during bear markets often signal that long-term holders are accumulating at perceived discounts — a bullish signal for the medium to long term.
        </p>
        <p>
          The MVRV ratio (Market Value to Realized Value) compares the current market cap to the aggregate cost basis of all tokens. When MVRV is significantly above 1, the average holder is in profit and may be tempted to sell. When MVRV is below 1, the average holder is at a loss and unlikely to sell, suggesting a market bottom. Stablecoin supply on exchanges measures dry powder available for buying: an increase in exchange-held stablecoins suggests buying power accumulating on the sideline, ready to deploy. Active address counts and transaction volumes provide a pulse on actual network usage independent of price speculation.
        </p>
      </section>

      <section id="derivatives">
        <h2>Derivatives Market Indicators</h2>
        <p>
          Open interest measures the total value of outstanding derivatives contracts. Rising open interest during a price trend suggests new money entering the market and supporting the trend. Falling open interest suggests positions are being closed, potentially weakening the trend. Extremely high open interest relative to spot market cap creates a fragile market susceptible to liquidation cascades if the trend reverses.
        </p>
        <p>
          Funding rates on perpetual futures indicate whether the market is skewed long or short. Consistently positive funding (longs paying shorts) reflects bullish positioning, while consistently negative funding reflects bearish positioning. Extreme funding rates in either direction often precede reversals as the cost of maintaining positions becomes prohibitive. The options market provides implied volatility data and the put/call ratio — a high ratio indicates more demand for downside protection (bearish), while a low ratio suggests complacency (potentially bearish from a contrarian perspective).
        </p>
      </section>

      <section id="macro">
        <h2>Macro and Cross-Market Indicators</h2>
        <p>
          Crypto does not exist in a vacuum — macroeconomic conditions significantly influence market direction. Interest rate decisions by the Federal Reserve and other central banks affect risk appetite: low rates and quantitative easing tend to support crypto prices, while rate hikes and tightening drain liquidity from risk assets. The US Dollar Index (DXY) often moves inversely to crypto — dollar strength tends to correlate with crypto weakness and vice versa.
        </p>
        <p>
          Global liquidity metrics, including M2 money supply and central bank balance sheets, have shown strong correlation with crypto market cycles. Equity market performance, particularly the Nasdaq and other tech-heavy indices, often correlates with crypto in the short to medium term, as both are considered risk-on assets. Monitoring these macro indicators provides context for whether the broader environment is supportive or hostile to crypto investment, helping you adjust your positioning and risk exposure accordingly.
        </p>
      </section>
    </LearnPageLayout>
  );
}
