import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `On-Chain Analysis: Reading the Blockchain for Investment Signals (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to use on-chain analysis for crypto investing. Understand key metrics like MVRV, SOPR, NVT, exchange flows, and whale watching for better investment decisions.",
  keywords: ["on-chain analysis", "blockchain analysis", "crypto on-chain metrics", "Bitcoin on-chain", "MVRV ratio"],
};

export default function OnChainAnalysisGuidePage() {
  return (
    <LearnPageLayout
      title="On-Chain Analysis: Reading the Blockchain for Investment Signals"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="12 min read"
      intro="On-chain analysis examines data directly from the blockchain to understand investor behavior, network health, and market conditions. Unlike technical analysis which reads price charts, on-chain analysis looks at actual transaction flows, wallet balances, and network activity. This provides unique insights into what participants are doing, not just what prices are showing. For long-term investors, on-chain metrics can help identify market cycle extremes and improve accumulation and exit timing."
      toc={[
        { id: "what-is-onchain", title: "What Is On-Chain Analysis?", level: 2 },
        { id: "key-metrics", title: "Key On-Chain Metrics", level: 2 },
        { id: "exchange-flows", title: "Exchange Flow Analysis", level: 2 },
        { id: "holder-behavior", title: "Holder Behavior & Whale Watching", level: 2 },
        { id: "cycle-indicators", title: "Market Cycle Indicators", level: 2 },
        { id: "tools", title: "On-Chain Analysis Tools", level: 2 },
      ]}
      faqs={[
        { question: "Is on-chain analysis reliable?", answer: "On-chain analysis provides objective data about network activity and investor behavior. However, it is not a crystal ball. Metrics can be misinterpreted, and the relationship between on-chain data and price is not always immediate. Use it as one input alongside other analysis methods." },
        { question: "What is the most important on-chain metric?", answer: "No single metric is definitive. MVRV Z-Score is widely used for identifying cycle extremes. Exchange net flows indicate buying/selling pressure. Active addresses reflect network adoption. The most powerful signals come from multiple metrics aligning." },
        { question: "Can on-chain analysis predict the top of a bull market?", answer: "On-chain metrics have historically identified the zone where tops are likely, but cannot pinpoint exact tops. When multiple metrics like MVRV, SOPR, and long-term holder supply change enter extreme readings simultaneously, the probability of a top increases." },
        { question: "Does on-chain analysis work for altcoins?", answer: "On-chain analysis is most developed and reliable for Bitcoin. Ethereum on-chain analysis is growing but less mature. For most altcoins, on-chain data is limited and less reliable as an investment signal. The smaller the network, the less meaningful the on-chain metrics." },
      ]}
      relatedArticles={[
        { title: "Crypto Correlation Guide", href: "/long-term/learn/crypto-correlation-guide", category: "Long-Term" },
        { title: "Macro Analysis & Crypto", href: "/long-term/learn/macro-analysis-crypto", category: "Long-Term" },
        { title: "Bear Market Strategies", href: "/long-term/learn/bear-market-strategies", category: "Long-Term" },
      ]}
    >
      <h2 id="what-is-onchain">What Is On-Chain Analysis?</h2>
      <p>
        On-chain analysis leverages the transparent nature of public blockchains to extract investment insights from raw transaction data. Every Bitcoin and Ethereum transaction is permanently recorded, creating a rich dataset of economic activity. Analysts can track how much Bitcoin is moving, who is accumulating or selling, how long coins have been held, and how network activity correlates with price movements. This is fundamentally different from traditional financial analysis because the underlying data is open and verifiable. On-chain analysis has grown into a sophisticated discipline with dedicated research firms, data providers, and a growing library of proven metrics.
      </p>

      <h2 id="key-metrics">Key On-Chain Metrics</h2>
      <p>
        MVRV Z-Score compares Bitcoin&apos;s market value to its realized value (average cost basis of all coins). When significantly above historical averages, Bitcoin is overvalued; when below, it is undervalued. NVT Ratio (Network Value to Transactions) is similar to a P/E ratio for stocks, comparing market cap to on-chain transaction volume. SOPR (Spent Output Profit Ratio) shows whether coins being moved are in profit or loss on average. Realized price represents the average cost basis of all Bitcoin holders. Active addresses measure network usage and adoption trends. Each metric reveals different aspects of market conditions and investor behavior.
      </p>

      <h2 id="exchange-flows">Exchange Flow Analysis</h2>
      <p>
        Tracking the movement of crypto to and from exchanges provides insight into buying and selling pressure. Net exchange inflows (more crypto moving onto exchanges) suggest potential selling pressure, as users typically move assets to exchanges to sell. Net exchange outflows suggest accumulation, as users move assets to self-custody for long-term holding. Large inflows during price drops can indicate capitulation. Sustained outflows during a bull market suggest strong conviction among holders. Exchange reserve data shows the total amount of Bitcoin held on exchanges, with declining reserves generally being a bullish signal indicating reduced available supply for selling.
      </p>

      <h2 id="holder-behavior">Holder Behavior &amp; Whale Watching</h2>
      <p>
        On-chain data allows categorization of holders by holding period and size. Long-term holders (LTH), defined as wallets that have not moved coins for over 155 days, provide stability signals: when LTH supply increases, it indicates accumulation and conviction. When LTH supply decreases sharply, it suggests distribution and potential tops. Short-term holders (STH) provide volatility signals. Whale wallets (holding large amounts) are tracked for significant movements that could impact markets. However, interpreting whale activity requires caution: a whale moving coins to a new address they control looks the same on-chain as preparation for selling.
      </p>

      <h2 id="cycle-indicators">Market Cycle Indicators</h2>
      <p>
        Several composite on-chain indicators help identify where Bitcoin is in its market cycle. The Bitcoin Rainbow Chart provides a long-term logarithmic view with color-coded zones from extreme undervaluation to extreme overvaluation. Coin Days Destroyed measures the economic weight of transactions by accounting for how long coins were held before moving. The Puell Multiple compares daily mining revenue to its 365-day average, identifying when miners are earning unusually high or low revenue relative to norms. When multiple cycle indicators simultaneously signal extreme readings, the probability of a major inflection point increases, though timing remains imprecise.
      </p>

      <h2 id="tools">On-Chain Analysis Tools</h2>
      <p>
        Glassnode is the industry-leading on-chain analytics platform, offering hundreds of metrics with professional-grade dashboards. CryptoQuant provides detailed exchange flow data and on-chain indicators. Lookonchain tracks whale wallet activity and large transactions in real-time. IntoTheBlock offers retail-accessible on-chain analytics. Santiment combines on-chain data with social sentiment analysis. Dune Analytics allows custom queries of blockchain data for advanced users. Many of these platforms offer free tiers with basic metrics and paid tiers for advanced data. For long-term investors, checking key on-chain metrics weekly or monthly is sufficient; daily monitoring is only necessary for active traders.
      </p>
    </LearnPageLayout>
  );
}
