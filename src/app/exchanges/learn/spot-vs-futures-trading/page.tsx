import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Spot vs Futures Trading (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Understand the differences between spot and futures trading in crypto. Mechanics, risks, leverage, funding rates, and which style fits your strategy.",
};

export default function SpotVsFuturesTrading() {
  return (
    <LearnPageLayout
      title="Spot vs Futures Trading"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="10 min read"
      intro="Spot and futures trading represent fundamentally different approaches to crypto markets. Spot trading involves buying and owning actual cryptocurrency, while futures trading uses contracts to speculate on price movements with leverage. Understanding the mechanics, risks, and use cases of each style is essential for choosing the right approach for your goals."
      toc={[
        { id: "spot-trading", title: "What Is Spot Trading?", level: 2 },
        { id: "futures-trading", title: "What Is Futures Trading?", level: 2 },
        { id: "key-differences", title: "Key Differences", level: 2 },
        { id: "leverage-margin", title: "Leverage and Margin", level: 2 },
        { id: "funding-rates", title: "Funding Rates", level: 2 },
        { id: "risks", title: "Risk Comparison", level: 2 },
        { id: "choosing", title: "Which Should You Choose?", level: 2 },
      ]}
      faqs={[
        { question: "Can you lose more than your investment in futures?", answer: "With isolated margin, your loss is limited to the margin allocated. With cross margin, your entire account balance can be at risk. Liquidation mechanisms prevent negative balances on most exchanges, but losses can be severe." },
        { question: "Do you own crypto with futures?", answer: "No. Futures contracts are derivatives that track the price of crypto. You never own the underlying asset. This means no wallet transfers, staking, or on-chain usage of the position." },
        { question: "What leverage should beginners use?", answer: "Most experienced traders recommend beginners avoid leverage entirely or use very low leverage (2-3x maximum). Higher leverage dramatically increases liquidation risk." },
        { question: "Can you short crypto on spot?", answer: "Not directly. Spot markets only allow buying and selling. To short crypto, you need futures, margin trading, or options markets." },
      ]}
      relatedArticles={[
        { title: "Leverage Trading Guide", href: "/exchanges/learn/leverage-trading-guide", category: "Exchanges" },
        { title: "Funding Rates Explained", href: "/exchanges/learn/funding-rates-explained", category: "Exchanges" },
        { title: "Liquidation Explained", href: "/exchanges/learn/liquidation-explained", category: "Exchanges" },
      ]}
    >
      <section id="spot-trading">
        <h2>What Is Spot Trading?</h2>
        <p>Spot trading is the most straightforward form of crypto trading. You buy cryptocurrency at its current market price and receive the actual asset in your account. When you buy 1 BTC on a spot market, you own 1 BTC that you can hold, transfer, stake, or sell at any time.</p>
        <p>Spot markets operate on simple supply-and-demand mechanics. Buyers place bids and sellers place asks on an order book, and trades execute when prices match. There is no expiration date, no leverage requirement, and no risk of liquidation. Your maximum loss is limited to what you invested.</p>
        <p>Most beginners start with spot trading because of its simplicity. You can use limit orders, market orders, and stop-loss orders to manage your positions. Popular spot exchanges include Coinbase, Binance, Kraken, and KuCoin.</p>
      </section>

      <section id="futures-trading">
        <h2>What Is Futures Trading?</h2>
        <p>Futures trading involves contracts that derive their value from an underlying cryptocurrency. Instead of buying actual Bitcoin, you open a position that profits or loses based on Bitcoin's price movement. Perpetual futures are the most common type in crypto, with no expiration date.</p>
        <p>The key feature of futures is leverage, allowing you to control a larger position with less capital. With 10x leverage, $1,000 controls a $10,000 position. This amplifies both gains and losses proportionally. Major futures exchanges include Binance, Bybit, OKX, and dYdX.</p>
        <p>Futures also enable short selling, meaning you can profit from price declines. This makes futures essential for hedging spot holdings during bearish periods and for traders who want to profit in both market directions.</p>
      </section>

      <section id="key-differences">
        <h2>Key Differences</h2>
        <p>Ownership is the most fundamental difference. Spot trading gives you actual cryptocurrency, while futures give you a contract tracking the price. This affects everything from taxation to what you can do with your position.</p>
        <p>Settlement timing differs as well. Spot trades settle immediately with asset delivery. Futures positions remain open until you close them, with profit and loss calculated continuously. Perpetual futures have no expiry, while dated futures settle on specific dates.</p>
        <p>Capital efficiency favors futures. A $10,000 spot position requires $10,000 in capital. The same exposure through futures with 10x leverage requires only $1,000. However, this efficiency comes with significantly higher risk of total loss through liquidation.</p>
      </section>

      <section id="leverage-margin">
        <h2>Leverage and Margin</h2>
        <p>Leverage in futures is expressed as a multiplier. Common options range from 1x to 125x, though most experienced traders use 1-10x. The leverage determines how much margin (collateral) is required to open a position and how close your liquidation price sits.</p>
        <p>Initial margin is the amount required to open a position. Maintenance margin is the minimum amount needed to keep it open. If your position's losses reduce your margin below maintenance level, the exchange liquidates your position to prevent further losses.</p>
        <p>Isolated margin limits your risk to the margin allocated to a specific position. Cross margin uses your entire account balance as collateral, providing more buffer against liquidation but putting your full balance at risk.</p>
      </section>

      <section id="funding-rates">
        <h2>Funding Rates</h2>
        <p>Perpetual futures use funding rates to keep contract prices aligned with spot prices. When the futures price trades above spot (contango), long positions pay short positions. When futures trade below spot (backwardation), shorts pay longs.</p>
        <p>Funding payments typically occur every 8 hours. Rates vary based on market sentiment and can become expensive during strong trends. In bullish markets, holding long positions can cost 0.01-0.1% per funding period, which compounds significantly over time.</p>
        <p>Monitoring funding rates is crucial for futures traders. High positive funding creates opportunities for shorts and signals potential market overheating. Negative funding during bear markets can make long positions cheaper to maintain.</p>
      </section>

      <section id="risks">
        <h2>Risk Comparison</h2>
        <p>Spot trading risk is limited to your investment amount. If you buy $1,000 of Bitcoin and it drops 50%, you lose $500 but still hold the Bitcoin. There is no liquidation risk, and you can hold indefinitely waiting for recovery.</p>
        <p>Futures risk is amplified by leverage. With 10x leverage, a 10% adverse move liquidates your entire position. Even small price fluctuations in volatile crypto markets can trigger liquidation at high leverage levels. The speed of crypto market moves makes managing leveraged positions extremely challenging.</p>
        <p>Additional futures risks include exchange counterparty risk, liquidation cascade events during extreme volatility, funding rate costs eroding positions over time, and the psychological pressure of managing leveraged positions with real-time profit and loss displays.</p>
      </section>

      <section id="choosing">
        <h2>Which Should You Choose?</h2>
        <p>Choose spot trading if you are a beginner, want to build long-term positions, or prefer lower risk. Spot is ideal for buy-and-hold strategies, dollar-cost averaging, and building a portfolio you can transfer to cold storage. Most investors should primarily use spot markets.</p>
        <p>Choose futures trading if you understand leverage risks, want to hedge existing positions, or need short exposure. Futures suit experienced traders who can manage risk with proper position sizing and stop-losses. Never risk more than you can afford to lose on leveraged positions.</p>
        <p>Many experienced traders use both. They build core positions through spot markets while using small, well-managed futures positions for tactical trades and hedging. Starting with spot and gradually learning futures after developing market experience is the safest progression.</p>
      </section>
    </LearnPageLayout>
  );
}
