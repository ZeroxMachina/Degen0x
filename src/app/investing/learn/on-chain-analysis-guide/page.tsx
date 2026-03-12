import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `On-Chain Analysis Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn on-chain analysis for crypto investing. Understand key blockchain metrics, tools, and how to use on-chain data for better investment decisions.`,
};

export default function OnChainAnalysisGuidePage() {
  return (
    <LearnPageLayout
      title="On-Chain Analysis Guide"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="12 min"
      intro="On-chain analysis examines blockchain data to gain insights into market conditions, investor behavior, and network health. Unlike traditional financial analysis that relies on company reports, on-chain data is publicly available and updated in real-time. This guide teaches you the essential on-chain metrics and tools for making better crypto investment decisions."
      toc={[
        { id: "what-is-on-chain", title: "what-is-on-chain", level: 2 },
        { id: "what-is-on-chain-analysis", title: "What Is On-Chain Analysis?", level: 2 },
        { id: "key-metrics", title: "key-metrics", level: 2 },
        { id: "key-on-chain-metrics", title: "Key On-Chain Metrics", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "on-chain-analysis-tools", title: "On-Chain Analysis Tools", level: 2 },
        { id: "practical-application", title: "practical-application", level: 2 },
        { id: "practical-application", title: "Practical Application", level: 2 }
      ]}
      faqs={[
        { question: "Do I need to be technical to use on-chain analysis?", answer: "No. While raw blockchain data requires technical skills to parse, tools like Glassnode, Dune Analytics, and Nansen provide user-friendly dashboards and charts. You can access most key metrics through these platforms without writing any code. Understanding what the metrics mean is more important than the technical ability to extract them." },
        { question: "What on-chain metrics matter most?", answer: "The most actionable metrics include exchange netflows (large outflows suggest accumulation), MVRV ratio (indicates whether holders are in profit or loss), active addresses (measures network usage), and whale transaction counts. Combining multiple metrics gives a more complete picture than relying on any single indicator." },
      ]}
      relatedArticles={[
        { title: "Whale Tracking Guide", href: "/investing/learn/whale-tracking-guide", category: "Investing" },
        { title: "Fundamental Analysis", href: "/investing/learn/fundamental-analysis", category: "Investing" },
        { title: "Technical Analysis Guide", href: "/investing/learn/technical-analysis", category: "Investing" },
      ]}
    >
      <h2 id="what-is-on-chain">What Is On-Chain Analysis?</h2>
      <p>
        On-chain analysis is the study of blockchain transaction data to understand market dynamics.
        Because blockchains are public ledgers, every transaction, wallet balance, and smart
        contract interaction is visible to anyone. By aggregating and analyzing this data, investors
        can identify accumulation and distribution patterns, gauge market sentiment, and detect
        trends before they appear in price action. On-chain analysis is unique to crypto and
        provides insights unavailable in any traditional financial market.
      </p>

      <h2 id="key-metrics">Key On-Chain Metrics</h2>
      <p>
        Exchange netflows track whether crypto is moving to exchanges (potential selling) or leaving
        exchanges (accumulation). The MVRV (Market Value to Realized Value) ratio compares the
        current market cap to the average cost basis of all holders, indicating whether the market
        is overvalued or undervalued. Active addresses measure daily network usage. Supply
        distribution shows how tokens are distributed across different wallet sizes. Staking
        ratios reveal how much supply is locked in staking versus available for trading.
      </p>

      <h2 id="tools">On-Chain Analysis Tools</h2>
      <p>
        Glassnode is the leading on-chain analytics platform for Bitcoin and Ethereum, offering
        comprehensive metrics and charts. Dune Analytics allows users to create custom queries
        across multiple blockchains. Nansen provides wallet-level analytics including smart money
        tracking. DefiLlama tracks TVL and DeFi protocol metrics. Arkham Intelligence offers
        wallet labeling and transaction tracking. Most platforms offer free tiers with limited
        data access.
      </p>

      <h2 id="practical-application">Practical Application</h2>
      <p>
        Combine on-chain metrics with technical and fundamental analysis for a comprehensive view.
        When exchange outflows are high, MVRV is below 1, and active addresses are stable, it
        typically signals a good accumulation zone. When exchange inflows spike, MVRV is highly
        elevated, and social sentiment is euphoric, it suggests increased distribution risk. On-chain
        analysis works best as a confirmation tool alongside other analysis methods rather than
        a standalone trading signal.
      </p>
    </LearnPageLayout>
  );
}
