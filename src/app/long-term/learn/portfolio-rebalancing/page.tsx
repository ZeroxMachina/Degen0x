import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Rebalance Your Crypto Portfolio (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn when and how to rebalance your cryptocurrency portfolio. Strategies for maintaining target allocations, threshold-based triggers, and tax-efficient rebalancing methods.",
  keywords: ["crypto portfolio rebalancing", "rebalance crypto", "portfolio allocation crypto", "crypto diversification"],
};

export default function PortfolioRebalancingPage() {
  return (
    <LearnPageLayout
      title="How to Rebalance Your Crypto Portfolio"
      categoryName="Long-Term Strategies"
      categorySlug="long-term"
      readTime="10 min read"
      intro="Rebalancing is the process of realigning your portfolio to target allocations by selling assets that have grown beyond their target weight and buying those that have fallen below it. In crypto, where individual assets can move 50-200% in short periods, portfolios drift quickly from target allocations. Regular rebalancing enforces a disciplined buy-low, sell-high approach and manages concentration risk."
      toc={[
        { id: "why-rebalance", title: "why-rebalance", level: 2 },
        { id: "why-rebalancing-matters", title: "Why Rebalancing Matters", level: 2 },
        { id: "methods", title: "methods", level: 2 },
        { id: "rebalancing-methods", title: "Rebalancing Methods", level: 2 },
        { id: "frequency", title: "frequency", level: 2 },
        { id: "how-often-to-rebalance", title: "How Often to Rebalance", level: 2 },
        { id: "tax-efficient", title: "tax-efficient", level: 2 },
        { id: "tax-efficient-rebalancing", title: "Tax-Efficient Rebalancing", level: 2 },
        { id: "step-by-step", title: "step-by-step", level: 2 },
        { id: "step-by-step-rebalancing-guide", title: "Step-by-Step Rebalancing Guide", level: 2 },
        { id: "tools", title: "tools", level: 2 },
        { id: "portfolio-tracking-rebalancing-tools", title: "Portfolio Tracking & Rebalancing Tools", level: 2 }
      ]}
      faqs={[
        { question: "How often should I rebalance my crypto portfolio?", answer: "Either quarterly on a fixed schedule or when any asset drifts more than 5-10% from its target weight. In crypto's volatile environment, threshold-based rebalancing is often more effective than fixed-schedule rebalancing." },
        { question: "Does rebalancing improve returns?", answer: "Rebalancing primarily manages risk rather than maximizing returns. In trending markets, it can reduce returns slightly by selling winners. However, it protects against concentration risk and enforces buying low and selling high. Over multiple market cycles, the risk management benefits typically outweigh the cost." },
        { question: "Should I rebalance during a bear market?", answer: "Yes. Rebalancing during bear markets means buying discounted assets to restore target weights. This is one of the main advantages of a disciplined rebalancing approach: it automates the psychologically difficult act of buying when prices are low." },
        { question: "Can I rebalance by only buying?", answer: "Yes. Cash-flow rebalancing directs new investments to underweight positions rather than selling overweight ones. This avoids triggering taxable events and works well with regular DCA contributions. However, it only works if the portfolio drift is not extreme." },
      ]}
      relatedArticles={[
        { title: "Dollar Cost Averaging", href: "/long-term/learn/dollar-cost-averaging", category: "Long-Term" },
        { title: "Bull Market Strategies", href: "/long-term/learn/bull-market-strategies", category: "Long-Term" },
        { title: "Tax-Loss Harvesting", href: "/long-term/learn/tax-loss-harvesting-crypto", category: "Long-Term" },
      ]}
    >
      <h2 id="why-rebalance">Why Rebalancing Matters</h2>
      <p>
        Without rebalancing, a portfolio designed to be 50% Bitcoin and 50% Ethereum could drift to 80/20 during a Bitcoin rally. This concentration increases risk: if Bitcoin then drops significantly, the portfolio takes a much larger hit than intended. Rebalancing forces you to trim positions that have grown large (selling high) and add to positions that have shrunk (buying low). This disciplined approach prevents the common behavioral mistake of letting winners run until they become an oversized risk and protects against the devastating impact of a concentrated position reversing.
      </p>

      <h2 id="methods">Rebalancing Methods</h2>
      <p>
        Calendar rebalancing adjusts your portfolio on a fixed schedule regardless of market conditions, typically quarterly. Threshold rebalancing triggers when any asset drifts beyond a specified band (such as 5 or 10 percentage points from target). Hybrid approaches combine both: check on a schedule and only rebalance if thresholds are exceeded. Cash-flow rebalancing directs new deposits to underweight assets rather than selling. Tactical rebalancing adjusts target weights based on market conditions or valuations. For most crypto investors, a threshold-based approach with 5-10% bands works best because crypto&apos;s extreme volatility makes fixed schedules either too frequent or too infrequent.
      </p>

      <h2 id="frequency">How Often to Rebalance</h2>
      <p>
        The optimal frequency balances maintaining target allocations with minimizing transaction costs and tax events. Rebalancing too frequently incurs unnecessary fees and taxes. Rebalancing too rarely allows dangerous concentration. Monthly checking with threshold triggers is a practical middle ground. If using a 5% threshold band, check monthly and rebalance only when an asset exceeds its band. For smaller portfolios where fees are proportionally larger, quarterly calendar rebalancing may be more cost-effective. Consider tax implications: in jurisdictions where short-term gains are taxed at higher rates, rebalancing less frequently can save on taxes by allowing more positions to qualify for long-term treatment.
      </p>

      <h2 id="tax-efficient">Tax-Efficient Rebalancing</h2>
      <p>
        Every rebalancing sale is a taxable event in most jurisdictions. Minimize tax impact by prioritizing cash-flow rebalancing, directing new investments to underweight positions. Use tax-loss harvesting: sell losing positions to generate losses that offset gains from rebalancing sales. In the US, crypto is not currently subject to wash sale rules, so you can sell a losing position and immediately rebuy a similar but not identical asset. Rebalance within tax-advantaged accounts (like a crypto IRA) where possible, as these do not trigger taxable events. If you must sell gains, prioritize selling assets held over one year for long-term capital gains treatment.
      </p>

      <h2 id="step-by-step">Step-by-Step Rebalancing Guide</h2>
      <p>
        First, define your target allocation with specific percentages for each asset. Second, calculate current weights by determining the current value of each position relative to total portfolio value. Third, identify positions that exceed your threshold bands. Fourth, calculate the dollar amounts needed to restore target weights. Fifth, execute trades starting with sales of overweight positions, then use proceeds to purchase underweight positions. Sixth, document all transactions for tax purposes. Seventh, schedule your next review date. Keep records of your target allocations and rebalancing history. A spreadsheet or portfolio tracker makes this process efficient and ensures you maintain discipline over time.
      </p>

      <h2 id="tools">Portfolio Tracking &amp; Rebalancing Tools</h2>
      <p>
        DeBank and Zapper provide real-time portfolio tracking across wallets and DeFi positions, showing current allocation percentages. CoinStats and Delta offer dedicated portfolio management with rebalancing alerts. Shrimpy provides automated rebalancing with exchange API connections. For self-custody portfolios, spreadsheet-based tracking with manual rebalancing is common. Set up alerts for threshold breaches so you know when to rebalance without checking daily. Some exchanges offer portfolio rebalancing features that automate the trade execution. Regardless of the tool, the key is having a system that makes it easy to see your current allocation versus target and to act when thresholds are breached.
      </p>
    </LearnPageLayout>
  );
}
