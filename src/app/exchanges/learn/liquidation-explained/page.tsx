import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquidation in Crypto Trading Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how liquidation works in crypto trading. Margin calls, liquidation prices, cascade effects, and how to avoid getting liquidated on leveraged positions.",
};

export default function LiquidationExplained() {
  return (
    <LearnPageLayout
      title="Liquidation in Crypto Trading Explained"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Liquidation is the forced closure of a leveraged position when your margin falls below the required maintenance level. It is the single biggest risk in leveraged crypto trading and has wiped out billions of dollars in positions during volatile market events. Understanding how liquidation works and how to prevent it is essential for anyone trading with leverage."
      toc={[
        { id: "what-is-liquidation", title: "what-is-liquidation", level: 2 },
        { id: "what-is-liquidation", title: "What Is Liquidation?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-liquidation-works", title: "How Liquidation Works", level: 2 },
        { id: "liquidation-price", title: "liquidation-price", level: 2 },
        { id: "calculating-liquidation-price", title: "Calculating Liquidation Price", level: 2 },
        { id: "margin-types", title: "margin-types", level: 2 },
        { id: "isolated-vs-cross-margin", title: "Isolated vs Cross Margin", level: 2 },
        { id: "cascade-effects", title: "cascade-effects", level: 2 },
        { id: "liquidation-cascades", title: "Liquidation Cascades", level: 2 },
        { id: "prevention", title: "prevention", level: 2 },
        { id: "preventing-liquidation", title: "Preventing Liquidation", level: 2 },
        { id: "recovery", title: "recovery", level: 2 },
        { id: "after-getting-liquidated", title: "After Getting Liquidated", level: 2 }
      ]}
      faqs={[
        { question: "Can I lose more than my deposit?", answer: "With isolated margin, your loss is limited to the margin allocated to that position. With cross margin, you can lose your entire account balance. Most exchanges have insurance funds that prevent negative balances, so you typically will not owe money beyond your account." },
        { question: "What is the liquidation fee?", answer: "Exchanges charge a liquidation fee when forcibly closing your position, typically 0.5-1.5% of the position value. This fee is deducted from your remaining margin. Part of the fee goes to the exchange's insurance fund to cover potential losses." },
        { question: "Can I be liquidated from funding rates alone?", answer: "Yes. If cumulative funding payments erode your margin below the maintenance level, your position will be liquidated even if the price has not moved against you. This is a commonly overlooked risk for long-duration leveraged positions." },
        { question: "Do all exchanges liquidate the same way?", answer: "No. Exchanges use different liquidation engines, maintenance margin rates, and partial vs full liquidation approaches. Some exchanges attempt to partially liquidate to reduce your position size before fully closing it. Check your specific exchange's liquidation rules." },
      ]}
      relatedArticles={[
        { title: "Leverage Trading Guide", href: "/exchanges/learn/leverage-trading-guide", category: "Exchanges" },
        { title: "Funding Rates Explained", href: "/exchanges/learn/funding-rates-explained", category: "Exchanges" },
        { title: "Spot vs Futures Trading", href: "/exchanges/learn/spot-vs-futures-trading", category: "Exchanges" },
      ]}
    >
      <section id="what-is-liquidation">
        <h2>What Is Liquidation?</h2>
        <p>Liquidation occurs when an exchange forcibly closes your leveraged position because your account no longer has sufficient margin to maintain it. When you trade with leverage, you borrow funds to increase your position size. The margin you provide serves as collateral for that borrowed amount.</p>
        <p>If the market moves against your position enough that your losses approach or exceed your margin, the exchange liquidates your position to recover the borrowed funds. This process protects the exchange and other traders from the counterparty risk of your unpaid debt.</p>
        <p>Liquidation typically happens automatically through the exchange's liquidation engine with no warning and no opportunity to adjust once triggered. The speed of execution means your position can be closed in seconds, often at a worse price than the liquidation trigger due to market impact.</p>
      </section>

      <section id="how-it-works">
        <h2>How Liquidation Works</h2>
        <p>Every leveraged position has two key margin levels: initial margin (the amount required to open the position) and maintenance margin (the minimum required to keep it open). When your position's equity falls below the maintenance margin, liquidation begins.</p>
        <p>Before full liquidation, many exchanges send margin call warnings when your margin approaches the maintenance level. Some exchanges attempt partial liquidation first, reducing your position size to bring margin back above maintenance. If partial liquidation is insufficient, full liquidation follows.</p>
        <p>The liquidation engine places a market order to close your position. In volatile markets, this market order may execute at prices significantly worse than your liquidation price due to slippage. A liquidation fee is also deducted, further reducing your remaining margin.</p>
      </section>

      <section id="liquidation-price">
        <h2>Calculating Liquidation Price</h2>
        <p>Your liquidation price depends on your entry price, leverage, margin mode, and the exchange's maintenance margin rate. Higher leverage means a smaller price movement triggers liquidation. With 10x leverage, roughly a 10% adverse move liquidates you. With 100x leverage, about a 1% move is sufficient.</p>
        <p>For a long position at 10x leverage with $1,000 margin controlling a $10,000 position at $50,000 BTC, the liquidation price would be approximately $45,500 (a roughly 9% decline), after accounting for maintenance margin and fees. The exact amount varies by exchange.</p>
        <p>Most exchanges display your estimated liquidation price on the trading interface. Always check this price before confirming a trade. If the liquidation price is within normal daily price volatility range for the asset, the leverage is likely too high for safe trading.</p>
      </section>

      <section id="margin-types">
        <h2>Isolated vs Cross Margin</h2>
        <p>Isolated margin assigns a specific amount of collateral to each position. If that position is liquidated, only the allocated margin is lost. Your other funds and positions are unaffected. This mode limits your maximum loss to the isolated amount.</p>
        <p>Cross margin uses your entire available account balance as collateral for all open positions. This provides more buffer against liquidation on any single position but puts your entire account at risk. If one position causes enough loss, it can drain your entire balance.</p>
        <p>Most experienced traders recommend isolated margin for each position. The defined risk makes position sizing clearer and prevents one bad trade from liquidating your entire account. Cross margin can be useful for hedge positions where losses on one side are offset by gains on the other.</p>
      </section>

      <section id="cascade-effects">
        <h2>Liquidation Cascades</h2>
        <p>Liquidation cascades occur when a price decline triggers liquidations, which dump sell orders into the market, pushing the price further down, triggering more liquidations. This feedback loop can cause price crashes that far exceed what fundamental selling pressure alone would produce.</p>
        <p>Major cascade events have wiped billions of dollars in leveraged positions within hours. These events typically happen during high open interest (many leveraged positions) combined with a sudden price shock. Crypto markets are particularly susceptible due to 24/7 trading and high average leverage.</p>
        <p>Cascade risk means your liquidation price may not be your actual closing price. During a cascade, the market can gap through your liquidation level, closing your position at a significantly worse price. Insurance funds are designed to cover the difference, but in extreme cases, socialized losses may apply to profitable traders.</p>
      </section>

      <section id="prevention">
        <h2>Preventing Liquidation</h2>
        <p>Use lower leverage. The single most effective liquidation prevention is keeping leverage low. Using 2-5x leverage instead of 20-50x provides dramatically more room for price fluctuation. Many successful futures traders rarely exceed 5x leverage.</p>
        <p>Set stop-loss orders well above your liquidation price. A stop-loss at a 3-5% loss on a 10x leveraged position closes your position with a manageable loss rather than waiting for full liquidation. The stop-loss should be wide enough to avoid triggering on normal volatility.</p>
        <p>Monitor your positions and add margin if needed. If the market moves against you but your thesis remains intact, adding margin reduces your effective leverage and pushes your liquidation price further away. However, do not fall into the trap of continually adding margin to a losing position.</p>
      </section>

      <section id="recovery">
        <h2>After Getting Liquidated</h2>
        <p>Accept the loss and analyze what went wrong. Was the leverage too high? Was there no stop-loss? Did you ignore warning signs? Document the trade including your entry reasoning, what happened, and what you would do differently. This analysis is essential for improvement.</p>
        <p>Do not immediately revenge trade to recover losses. Emotional trading after liquidation almost always leads to additional losses. Take a break from trading, review your strategy, and return only when you can trade rationally.</p>
        <p>Adjust your risk management before trading again. If you were liquidated, something in your approach was wrong. Whether it was excessive leverage, poor entry timing, missing stop-losses, or incorrect position sizing, identify the specific failure and fix it before risking more capital.</p>
      </section>
    </LearnPageLayout>
  );
}
