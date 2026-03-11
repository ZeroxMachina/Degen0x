import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Perpetual Futures in Crypto Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn how perpetual futures work in crypto, funding rates, leverage, liquidation mechanics, the difference between perps and traditional futures, and risk management strategies.",
};

export default function PerpetualFuturesPage() {
  return (
    <LearnPageLayout
      title="Perpetual Futures in Crypto Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Perpetual futures (perps) are derivative contracts that allow traders to speculate on the price of a cryptocurrency without an expiration date. Unlike traditional futures that settle on a specific date, perps can be held indefinitely through a funding rate mechanism that keeps the contract price aligned with the spot market. Perpetual futures are the most traded instrument in crypto, with daily volumes regularly exceeding spot market volumes by a significant multiple."
      toc={[
        { id: "what-are-perps", title: "What Are Perpetual Futures?", level: 2 },
        { id: "funding-rates", title: "Understanding Funding Rates", level: 2 },
        { id: "leverage-margin", title: "Leverage and Margin", level: 2 },
        { id: "liquidation", title: "Liquidation Mechanics", level: 2 },
        { id: "dex-perps", title: "Decentralized Perpetual Exchanges", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the maximum leverage available on perps?",
          answer:
            "Maximum leverage varies by platform and asset. Centralized exchanges like Binance and Bybit offer up to 125x leverage on Bitcoin perps. Decentralized platforms like dYdX and Hyperliquid offer up to 50x. However, using maximum leverage is extremely risky — even a small adverse price movement can result in complete liquidation of your position.",
        },
        {
          question: "Do I own the underlying crypto when trading perps?",
          answer:
            "No. Perpetual futures are derivative contracts that derive their value from the underlying asset but do not involve actual ownership. You are trading a contract that tracks the price of the asset. This means you can profit from both price increases (long positions) and price decreases (short positions) without ever holding the actual cryptocurrency.",
        },
        {
          question: "What is the difference between isolated and cross margin?",
          answer:
            "Isolated margin limits the collateral for a specific position to a set amount — if liquidated, only the allocated margin is lost. Cross margin uses your entire account balance as collateral for all open positions, reducing liquidation risk for individual positions but putting your full balance at stake if things go wrong.",
        },
      ]}
      relatedArticles={[
        { title: "Crypto Derivatives Explained", href: "/learn/crypto-derivatives", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
        { title: "Technical Analysis for Crypto", href: "/learn/technical-analysis-crypto", category: "Learn" },
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
      ]}
    >
      <section id="what-are-perps">
        <h2>What Are Perpetual Futures?</h2>
        <p>
          Perpetual futures are contracts that allow you to go long (bet on price increases) or short (bet on price decreases) on a cryptocurrency with leverage. They were invented by crypto exchange BitMEX in 2016 and have since become the dominant trading instrument in the crypto derivatives market. The defining feature of perps is that they have no expiration date — unlike traditional futures that settle on a specific date, you can hold a perp position indefinitely as long as you maintain sufficient margin.
        </p>
        <p>
          The contract price tracks the underlying spot price through a mechanism called the funding rate, which periodically transfers payments between long and short traders. When the perp price is above spot (indicating bullish sentiment), longs pay shorts, incentivizing more shorts and bringing the price down. When the perp price is below spot, shorts pay longs. This creates a self-correcting mechanism that keeps the perpetual contract price closely aligned with the real market price.
        </p>
      </section>

      <section id="funding-rates">
        <h2>Understanding Funding Rates</h2>
        <p>
          Funding rates are periodic payments exchanged between long and short traders to maintain price alignment between the perp and spot markets. Most exchanges settle funding every 8 hours, though some use hourly or continuous funding. A positive funding rate means longs pay shorts (the market is bullish), while a negative rate means shorts pay longs (the market is bearish).
        </p>
        <p>
          Funding rates are an important signal for market sentiment and can also create trading opportunities. During extremely bullish markets, funding rates can spike to annualized rates of 50-100% or more, creating significant carrying costs for leveraged long positions. Some traders exploit this by simultaneously going long on the spot market and short on the perp market, earning the funding rate differential with minimal directional risk — a strategy known as the cash-and-carry or funding rate arbitrage trade.
        </p>
      </section>

      <section id="leverage-margin">
        <h2>Leverage and Margin</h2>
        <p>
          Leverage allows traders to control a position larger than their deposited capital. With 10x leverage, a $1,000 deposit controls a $10,000 position. If the asset price moves 5% in your favor, you profit $500 (a 50% return on your margin). However, leverage amplifies losses equally — a 5% adverse move results in a $500 loss (50% of your margin). At 10x leverage, a 10% adverse move would wipe out your entire margin.
        </p>
        <p>
          Margin is the collateral you deposit to maintain a leveraged position. Initial margin is the amount required to open a position, while maintenance margin is the minimum required to keep it open. Most platforms support both isolated margin (dedicating specific collateral to each position) and cross margin (using your full account balance as collateral). Higher leverage means a higher risk of liquidation but also more capital efficiency. Professional traders typically use conservative leverage (2-5x) while managing risk through stop-losses and position sizing.
        </p>
      </section>

      <section id="liquidation">
        <h2>Liquidation Mechanics</h2>
        <p>
          Liquidation occurs when the market moves against your position to the point where your remaining margin falls below the maintenance margin requirement. At this point, the exchange automatically closes your position to prevent further losses and ensure that the counter-party (other traders) can be made whole. The liquidation price depends on your entry price, leverage, and margin amount.
        </p>
        <p>
          Most exchanges charge a liquidation fee (typically 0.5-1.5% of the position size) that goes into an insurance fund. This fund covers cases where liquidation occurs at a price worse than the bankruptcy price (where the trader's margin reaches zero). During flash crashes, cascading liquidations can create a dangerous feedback loop: falling prices trigger liquidations, forced selling pushes prices lower, triggering more liquidations. Understanding liquidation mechanics and maintaining adequate margin buffers is critical for survival in leveraged trading.
        </p>
      </section>

      <section id="dex-perps">
        <h2>Decentralized Perpetual Exchanges</h2>
        <p>
          Decentralized perpetual exchanges like dYdX, Hyperliquid, GMX, and Drift bring perpetual futures trading on-chain, offering self-custody and transparency without a centralized intermediary. These platforms use different models: dYdX and Hyperliquid operate full order books on high-throughput chains, while GMX uses an oracle-based pricing model where traders trade against a multi-asset liquidity pool that serves as the counterparty.
        </p>
        <p>
          The advantages of decentralized perps include self-custody (your funds remain in your wallet until you open a position), transparency (all trades and liquidations are visible on-chain), and global accessibility without KYC requirements. The trade-offs include potentially lower liquidity compared to major centralized exchanges, smart contract risk, and sometimes higher latency. However, the gap is closing rapidly, with platforms like Hyperliquid matching the performance and liquidity depth of many centralized competitors.
        </p>
      </section>
    </LearnPageLayout>
  );
}
