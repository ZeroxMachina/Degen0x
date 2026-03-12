import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Take Profit? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what take-profit orders are, how they work, different take-profit strategies, and how to set profit targets for your crypto trades effectively.",
};

export default function TakeProfitPage() {
  return (
    <LearnPageLayout title="What Is Take Profit?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="A take-profit order automatically sells an asset when it reaches a specified price above the current market price, locking in gains. Combined with stop losses, take-profit orders form a complete risk management framework that defines both your maximum loss and target gain before entering a trade. Take-profit orders remove emotion from selling decisions and ensure that profitable trades are captured rather than given back to the market."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-take-profit", title: "What Is Take Profit?", level: 2 },
        { id: "setting-targets", title: "setting-targets", level: 2 },
        { id: "setting-profit-targets", title: "Setting Profit Targets", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "take-profit-strategies", title: "Take-Profit Strategies", level: 2 },
        { id: "risk-reward", title: "risk-reward", level: 2 },
        { id: "risk-reward-ratios", title: "Risk-Reward Ratios", level: 2 }
      ]}
      faqs={[{ question: "Should I take all profits at once or gradually?", answer: "Scaling out is generally more effective than all-or-nothing exits. A common approach is to take 25-50% at the first target, another portion at the second target, and let the remainder run with a trailing stop. This captures guaranteed profit while maintaining upside exposure." },
        { question: "What is a good risk-reward ratio?", answer: "Most traders aim for at least a 2:1 risk-reward ratio, meaning the potential profit is twice the potential loss. For example, risking $100 (stop loss) to make $200 (take profit). Higher ratios like 3:1 are preferred but harder to achieve consistently. Never enter trades with negative risk-reward ratios." }]}
      relatedArticles={[{ title: "Stop Loss", href: "/learn/glossary/stop-loss", category: "Glossary" }, { title: "Resistance", href: "/learn/glossary/resistance", category: "Glossary" }, { title: "Risk Management", href: "/learn/risk-management-crypto", category: "Learn Crypto" }, { title: "Order Book", href: "/learn/glossary/order-book", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Take Profit?</h2>
      <p>A take-profit order (TP) is a limit order placed above your entry price that automatically closes a position when the target price is reached. If you buy ETH at $3,000 and set a take profit at $3,600, your position automatically sells at $3,600, securing a 20% gain. Like stop losses, take-profit orders execute without requiring you to watch the market, ensuring you capture planned gains even if price reaches the target briefly during off-hours.</p>

      <h2 id="setting-targets">Setting Profit Targets</h2>
      <p>Profit targets should be based on technical analysis, not arbitrary round numbers. Common approaches include setting targets at resistance levels, Fibonacci extension levels, or measured move projections. Consider the asset&apos;s historical price behavior and volatility. For trending markets, wider targets capture larger moves. For range-bound markets, take profits near the upper range boundary. Always ensure your take-profit distance is greater than your stop-loss distance.</p>

      <h2 id="strategies">Take-Profit Strategies</h2>
      <p>Scaled exits split your position into multiple take-profit levels. Trailing take-profit uses a trailing stop that follows price upward, capturing extended moves beyond fixed targets. Time-based exits close positions after a predetermined holding period regardless of price. Indicator-based exits trigger when technical indicators signal momentum exhaustion. Each strategy has trade-offs between locking in certain gains and allowing for larger moves.</p>

      <h2 id="risk-reward">Risk-Reward Ratios</h2>
      <p>The risk-reward ratio compares your potential loss (distance to stop loss) to your potential gain (distance to take profit). A 2:1 ratio means you risk $1 to potentially make $2. This is critical because even with only 40% winning trades, a 2:1 ratio is profitable. Before entering any trade, calculate the risk-reward ratio. If the nearest logical take-profit level does not offer at least 2:1 relative to your stop loss, the trade may not be worth taking.</p>
    </LearnPageLayout>
  );
}
