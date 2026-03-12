import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Trading Volume in Crypto? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what trading volume means in crypto markets, how to interpret volume data, spot wash trading, and use volume analysis for better trading decisions.",
  keywords: ["trading volume", "crypto volume", "volume analysis", "wash trading", "market liquidity", "volume indicators"],
};

export default function WhatIsVolumePage() {
  return (
    <LearnPageLayout
      title="What Is Trading Volume in Crypto?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="7 min"
      intro="Trading volume measures the total value of a cryptocurrency traded over a specific period, typically 24 hours. Volume is one of the most important market indicators — it reveals the level of interest and activity around a token, confirms price trends, signals potential reversals, and helps identify whether a market has genuine liquidity or is artificially inflated through wash trading."
      toc={[
        { id: "understanding-volume", title: "understanding-volume", level: 2 },
        { id: "understanding-volume", title: "Understanding Volume", level: 2 },
        { id: "volume-price", title: "volume-price", level: 2 },
        { id: "volume-and-price-relationship", title: "Volume and Price Relationship", level: 2 },
        { id: "wash-trading", title: "wash-trading", level: 2 },
        { id: "wash-trading", title: "Wash Trading", level: 2 },
        { id: "on-chain-volume", title: "on-chain-volume", level: 2 },
        { id: "on-chain-vs-exchange-volume", title: "On-Chain vs Exchange Volume", level: 2 },
        { id: "using-volume", title: "using-volume", level: 2 },
        { id: "using-volume-for-analysis", title: "Using Volume for Analysis", level: 2 }
      ]}
      faqs={[
        { question: "What is good trading volume for a crypto?", answer: "Volume should be evaluated relative to market cap. A healthy volume-to-market-cap ratio is typically 5-20% daily. Very low volume (under 1%) suggests illiquidity and potential difficulty exiting positions. Very high volume may indicate exceptional events or wash trading." },
        { question: "What is wash trading?", answer: "Wash trading is when an entity simultaneously buys and sells the same asset to artificially inflate volume. This makes a token appear more popular and liquid than it actually is. Some estimates suggest a significant portion of reported crypto exchange volume is wash trading." },
        { question: "Does high volume mean the price will go up?", answer: "Not necessarily. High volume confirms the significance of a price move in either direction. Rising prices with high volume suggest strong buying conviction. Falling prices with high volume suggest strong selling pressure. Volume validates trends but does not predict direction." },
      ]}
      relatedArticles={[
        { title: "What Is Market Cap?", href: "/learn/what-is-market-cap", category: "Learn" },
        { title: "What Is Liquidity?", href: "/learn/what-is-liquidity", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
      ]}
    >
      <section id="understanding-volume">
        <h2>Understanding Volume</h2>
        <p>
          Trading volume represents the total dollar value (or token quantity) exchanged between buyers and sellers over a given timeframe. When 10,000 ETH is bought and sold across all exchanges in 24 hours at an average price of $3,000, the 24-hour volume for ETH is $30 million on those exchanges. Volume is tracked at multiple levels: per trading pair, per exchange, per token (aggregated across all exchanges), and across the entire crypto market.
        </p>
        <p>
          Volume serves as a measure of market interest and conviction. High volume indicates strong participation and suggests that the current price reflects broad market agreement. Low volume suggests disinterest or uncertainty, and price movements on low volume are generally considered less reliable because they can be caused by a small number of participants. Professional traders often use volume as a confirmation tool — a price breakout accompanied by high volume is more likely to sustain than one on thin volume.
        </p>
      </section>

      <section id="volume-price">
        <h2>Volume and Price Relationship</h2>
        <p>
          The relationship between volume and price provides important trading signals. Increasing price accompanied by increasing volume suggests a strong uptrend with growing buyer participation. Increasing price with decreasing volume is a warning sign — fewer participants are driving the move, suggesting the trend may be weakening. Similarly, a price decline on high volume indicates strong selling conviction, while decline on low volume may suggest a temporary pullback rather than a trend reversal.
        </p>
        <p>
          Volume spikes often mark significant market events. A sudden volume increase can indicate the start of a new trend, a reaction to major news, a large institutional trade, or the unwinding of leveraged positions. Monitoring volume alongside price provides a more complete picture of market dynamics than either metric alone, helping traders distinguish between meaningful moves and noise.
        </p>
      </section>

      <section id="wash-trading">
        <h2>Wash Trading</h2>
        <p>
          Wash trading — where an entity trades with itself to inflate volume — is a persistent problem in crypto markets. Exchanges may inflate volume to appear larger and attract more users. Token projects may wash trade to fake demand and secure exchange listings. The practice makes it difficult to assess true market interest and liquidity, and several studies have estimated that a significant percentage of reported crypto exchange volume is artificial.
        </p>
        <p>
          To identify potential wash trading, look for volume that is disproportionately high relative to the token's market cap and community size, perfectly round-number trades appearing repeatedly, volume concentrated on obscure exchanges known for lax oversight, and volume that does not produce corresponding price movement. Platforms like CoinGecko apply trust scores to exchanges and provide adjusted volume figures that attempt to filter out wash trading.
        </p>
      </section>

      <section id="on-chain-volume">
        <h2>On-Chain vs Exchange Volume</h2>
        <p>
          On-chain volume measures the value transferred directly on the blockchain, including wallet-to-wallet transfers, smart contract interactions, and DEX trades. Exchange volume (often called off-chain volume) measures trades executed on centralized exchanges where the actual token movements happen within the exchange's internal ledger rather than on-chain. Both metrics provide different perspectives on a token's usage and trading activity.
        </p>
        <p>
          DEX volume has grown significantly as DeFi adoption has increased, with platforms like Uniswap regularly processing billions of dollars in daily volume. Unlike centralized exchange volume, DEX volume is fully transparent and verifiable on-chain, making it harder to fake. Comparing on-chain volume to reported exchange volume can help identify discrepancies that might indicate wash trading or other manipulation on centralized venues.
        </p>
      </section>

      <section id="using-volume">
        <h2>Using Volume for Analysis</h2>
        <p>
          For investment analysis, use the volume-to-market-cap ratio to assess relative trading activity. Compare volume trends over time rather than looking at single-day snapshots. Evaluate volume across multiple exchanges to ensure it is not concentrated on a single, potentially unreliable venue. Use on-chain volume data from blockchain explorers and DeFi dashboards as a cross-reference for reported exchange figures.
        </p>
        <p>
          For practical trading purposes, check volume before entering a position to ensure you can exit at a reasonable price. Avoid tokens with very low volume relative to the position size you intend to take. Monitor volume changes after significant events — earnings announcements, partnership reveals, or protocol upgrades — to gauge the market's reaction and the likely sustainability of resulting price moves.
        </p>
      </section>
    </LearnPageLayout>
  );
}
