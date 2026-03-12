import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Trading Volume? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what trading volume means in crypto, how to interpret volume data, the relationship between volume and price, and how to use volume in your analysis.",
};

export default function VolumePage() {
  return (
    <LearnPageLayout title="What Is Volume?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Volume is the total amount of a cryptocurrency traded during a specific time period, typically measured over 24 hours. It indicates the level of activity and interest in a particular asset or market. Volume is one of the most important technical indicators because it confirms price trends, reveals the strength of market moves, and provides insight into liquidity and market participation. High volume suggests strong conviction behind a price move, while low volume suggests weakness."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-volume", title: "What Is Volume?", level: 2 },
        { id: "volume-and-price", title: "volume-and-price", level: 2 },
        { id: "volume-and-price-relationship", title: "Volume and Price Relationship", level: 2 },
        { id: "interpreting-volume", title: "interpreting-volume", level: 2 },
        { id: "interpreting-volume", title: "Interpreting Volume", level: 2 },
        { id: "volume-indicators", title: "volume-indicators", level: 2 },
        { id: "volume-based-indicators", title: "Volume-Based Indicators", level: 2 }
      ]}
      faqs={[{ question: "Can trading volume be faked?", answer: "Yes. Wash trading (trading with yourself to inflate volume) is common on crypto exchanges. Studies have estimated that a significant percentage of reported volume on some exchanges is artificial. Use trusted data aggregators that filter for suspicious activity, and compare volume across multiple sources. Real volume typically correlates with order book depth and spread." },
        { question: "What is good volume for a cryptocurrency?", answer: "There is no absolute threshold. For major assets like BTC and ETH, daily volume in the billions is normal. For mid-cap altcoins, consistent volume of $10M+ suggests healthy liquidity. Volume should be evaluated relative to the asset's market cap. A volume-to-market-cap ratio above 10% indicates active trading, while below 1% suggests low interest." }]}
      relatedArticles={[{ title: "Market Depth", href: "/learn/glossary/market-depth", category: "Glossary" }, { title: "Candlestick", href: "/learn/glossary/candle", category: "Glossary" }, { title: "Order Book", href: "/learn/glossary/order-book", category: "Glossary" }, { title: "Spread", href: "/learn/glossary/spread", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Volume?</h2>
      <p>Trading volume measures the total number of units (or dollar value) of an asset exchanged during a given period. On-chain volume counts actual blockchain transactions. Exchange volume counts trades executed on centralized and decentralized exchanges. These can differ significantly, as on-chain volume includes transfers that are not trades, while exchange volume may include wash trading. DEX volume is generally considered more reliable since it is transparently recorded on-chain.</p>

      <h2 id="volume-and-price">Volume and Price Relationship</h2>
      <p>Price moves accompanied by high volume are considered more significant than those on low volume. A breakout above resistance on high volume suggests strong buying conviction and is more likely to sustain. A breakout on low volume is suspicious and may quickly reverse. Similarly, a selloff on high volume indicates strong selling pressure, while a dip on low volume may represent temporary weakness in an ongoing uptrend.</p>

      <h2 id="interpreting-volume">Interpreting Volume</h2>
      <p>Rising volume during an uptrend confirms bullish momentum. Declining volume during an uptrend warns of weakening momentum and potential reversal. Volume spikes often occur at market tops and bottoms, marking capitulation events where the last sellers exit or the last buyers FOMO in. Comparing current volume to historical averages provides context: unusually high volume signals exceptional interest, while unusually low volume suggests market indecision.</p>

      <h2 id="volume-indicators">Volume-Based Indicators</h2>
      <p>On-Balance Volume (OBV) tracks cumulative volume flow, adding volume on up days and subtracting on down days. Divergence between OBV and price can signal upcoming reversals. Volume-Weighted Average Price (VWAP) shows the average price weighted by volume, used as a benchmark for trade execution quality. Volume Profile shows volume distribution across price levels, identifying high-volume nodes (strong support/resistance) and low-volume nodes (areas of rapid price movement).</p>
    </LearnPageLayout>
  );
}
