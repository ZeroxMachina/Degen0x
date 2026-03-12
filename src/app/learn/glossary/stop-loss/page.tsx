import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Stop Loss? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what stop-loss orders are, how they work in crypto trading, different types of stop losses, and how to set them effectively for risk management.",
};

export default function StopLossPage() {
  return (
    <LearnPageLayout title="What Is a Stop Loss?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="A stop loss is an order that automatically sells an asset when its price falls to a specified level, limiting the trader's loss on a position. Stop losses are one of the most important risk management tools in crypto trading, providing a safety net against unexpected price drops and emotional decision-making. By defining your maximum acceptable loss before entering a trade, stop losses enforce discipline and protect capital in volatile markets."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-stop-loss", title: "What Is a Stop Loss?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-stop-losses", title: "Types of Stop Losses", level: 2 },
        { id: "setting-stop-losses", title: "setting-stop-losses", level: 2 },
        { id: "how-to-set-stop-losses", title: "How to Set Stop Losses", level: 2 },
        { id: "common-mistakes", title: "common-mistakes", level: 2 },
        { id: "common-stop-loss-mistakes", title: "Common Stop Loss Mistakes", level: 2 }
      ]}
      faqs={[{ question: "Should I always use stop losses?", answer: "For active trading, yes. Stop losses protect against catastrophic losses and enforce disciplined risk management. For long-term investing, stop losses are less critical and can actually hurt returns by selling during temporary dips. The appropriate use depends on your strategy, time horizon, and risk tolerance." },
        { question: "Can my stop loss be triggered and then the price recover?", answer: "Yes, this is called a stop-loss hunt or stop run. Market makers and whales sometimes push prices briefly below common stop levels to trigger a cascade of sell orders, then buy the resulting cheap supply. Setting stop losses at less obvious price levels and using slightly wider buffers can help avoid this." }]}
      relatedArticles={[{ title: "Take Profit", href: "/learn/glossary/take-profit", category: "Glossary" }, { title: "Margin Call", href: "/learn/glossary/margin-call", category: "Glossary" }, { title: "Risk Management", href: "/learn/risk-management-crypto", category: "Learn Crypto" }, { title: "Order Book", href: "/learn/glossary/order-book", category: "Glossary" }]}
    >
      <h2 id="definition">What Is a Stop Loss?</h2>
      <p>A stop-loss order instructs an exchange to sell an asset when it reaches a specific price below the current market price. If you buy ETH at $3,000 and set a stop loss at $2,700, your ETH will be automatically sold if the price drops to $2,700, limiting your loss to 10%. The stop loss converts to a market order when triggered, executing at the best available price, which may be slightly below the trigger price during fast-moving markets.</p>

      <h2 id="types">Types of Stop Losses</h2>
      <p>A standard stop-loss order triggers a market sell at the specified price. A stop-limit order triggers a limit sell, providing price control but risking non-execution if the market drops too fast. Trailing stop losses follow the price upward by a set percentage or dollar amount, locking in profits while protecting against reversals. Mental stop losses are predetermined exit points that require manual execution, useful for avoiding stop-hunting but demanding discipline.</p>

      <h2 id="setting-stop-losses">How to Set Stop Losses</h2>
      <p>Set stop losses based on your risk tolerance and technical analysis. A common approach is to place stops below key support levels, using a 1-3% buffer to avoid false triggers. Position your stop loss so that if triggered, the loss is acceptable within your overall portfolio management rules. Many traders risk no more than 1-2% of their total portfolio on any single trade. Use ATR (Average True Range) to calibrate stop distance based on the asset&apos;s typical volatility.</p>

      <h2 id="common-mistakes">Common Stop Loss Mistakes</h2>
      <p>Setting stops too tight leads to frequent premature exits on normal volatility. Setting stops too wide defeats the purpose of risk management. Moving stops further away as price approaches them is emotional and dangerous. Not using stop losses at all on leveraged positions can result in total capital loss. Placing stops at round numbers or obvious support levels makes them targets for stop-hunting. The best stop losses are placed at levels where your trade thesis is invalidated.</p>
    </LearnPageLayout>
  );
}
