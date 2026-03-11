import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Stop-Loss Orders in Crypto: Complete Guide (${CURRENT_YEAR})`,
  description: "Learn how stop-loss orders work in cryptocurrency trading. Types of stop orders, how to set them, common mistakes, and strategies for protecting your portfolio.",
};

const toc = [
  { id: "what-is-stop-loss", title: "What Is a Stop-Loss Order", level: 2 },
  { id: "types", title: "Types of Stop Orders", level: 2 },
  { id: "how-to-set", title: "How to Set a Stop-Loss", level: 2 },
  { id: "strategies", title: "Stop-Loss Strategies", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
];

const faqs = [
  { question: "What is a good stop-loss percentage for crypto?", answer: "There is no universal answer, but many traders use 5-15% below their entry price for spot positions. Crypto is more volatile than stocks, so tighter stops may trigger too frequently. The right percentage depends on your risk tolerance, the asset's volatility, and your time horizon." },
  { question: "Can a stop-loss fail to execute?", answer: "Yes. In extreme market conditions with low liquidity or flash crashes, a stop-market order may execute at a price significantly worse than your stop price (called slippage). A stop-limit order may not execute at all if the price gaps past your limit. This is an important risk to understand." },
  { question: "Should I always use a stop-loss in crypto?", answer: "Stop-losses are most useful for active traders and leveraged positions. Long-term holders using dollar-cost averaging may not need them, as temporary dips are expected. For futures and margin trading, stop-losses are essential to prevent liquidation." },
];

export default function StopLossOrdersPage() {
  return (
    <LearnPageLayout
      title="Stop-Loss Orders in Crypto Trading: Complete Guide"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="10 min"
      intro="A stop-loss order is one of the most important risk management tools available to crypto traders. It automatically sells your position when the price drops to a specified level, limiting your potential losses. Understanding how to use stop-losses effectively can be the difference between a manageable drawdown and a devastating loss."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How to Short Crypto", href: "/exchanges/learn/how-to-short-crypto", category: "Exchanges" },
        { title: "Leverage Trading Guide", href: "/exchanges/learn/leverage-trading-guide", category: "Exchanges" },
        { title: "Maker vs Taker Fees", href: "/exchanges/learn/maker-vs-taker-fees", category: "Exchanges" },
      ]}
    >
      <h2 id="what-is-stop-loss">What Is a Stop-Loss Order?</h2>
      <p>
        A stop-loss order is a conditional order that triggers a sell (or buy, for short positions)
        when an asset&apos;s price reaches a specified level called the stop price. Once triggered,
        the order executes automatically without requiring you to be watching the market. This
        automation is crucial in the 24/7 crypto market where prices can move dramatically while
        you sleep.
      </p>
      <p>
        For example, if you buy Bitcoin at $60,000 and set a stop-loss at $54,000, your position
        will automatically sell if the price drops to $54,000, limiting your loss to approximately
        10%. Without a stop-loss, you would need to manually monitor the market and execute the
        sell yourself.
      </p>

      <h2 id="types">Types of Stop Orders</h2>
      <p>
        There are several types of stop orders available on most crypto exchanges. A stop-market
        order triggers a market sell when the stop price is reached, guaranteeing execution but
        not a specific price. A stop-limit order places a limit order when triggered, guaranteeing
        price but not execution. A trailing stop moves with the price, maintaining a fixed
        percentage or dollar distance from the highest price reached.
      </p>
      <p>
        Stop-market orders are best for ensuring your position is closed regardless of conditions.
        Stop-limit orders are better when you want to avoid selling at a terrible price during a
        flash crash. Trailing stops are ideal for locking in profits while letting winners run.
        Most exchanges including Binance, Kraken, and Coinbase Advanced support all three types.
      </p>

      <h2 id="how-to-set">How to Set a Stop-Loss</h2>
      <p>
        To set a stop-loss, navigate to the trading interface on your exchange and select the stop
        order type. Enter your stop price (the trigger level) and, for stop-limit orders, your
        limit price. For trailing stops, enter the trailing distance as a percentage or fixed
        amount. Review the order details and confirm. Your stop-loss will remain active until
        triggered, cancelled, or your position is closed.
      </p>
      <p>
        When choosing your stop price, consider the asset&apos;s recent volatility, key support
        levels on the chart, and your personal risk tolerance. Setting stops too tight in volatile
        markets leads to frequent stop-outs followed by price recovery. Setting stops too wide
        defeats the purpose of limiting losses.
      </p>

      <h2 id="strategies">Stop-Loss Strategies</h2>
      <p>
        The percentage-based strategy sets the stop at a fixed percentage below entry, typically
        5-15% for crypto. The support-level strategy places stops just below key technical support
        levels. The ATR-based strategy uses Average True Range to set stops based on actual
        volatility. The breakeven strategy moves the stop to your entry price once the trade
        moves sufficiently in your favor, creating a risk-free position.
      </p>
      <p>
        For futures and margin trading, stop-losses should be set to prevent liquidation. Calculate
        your liquidation price and set stops well above that level. A common approach is to risk
        no more than 1-2% of your total portfolio on any single trade.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>
        The most common mistake is setting stops too tight, causing you to get stopped out by
        normal market noise before the trade plays out. Another frequent error is moving stops
        further away from entry as the price drops, which defeats the purpose of having a
        stop-loss. Placing stops at obvious round numbers where many other traders also place
        theirs makes you vulnerable to stop hunting by large players.
      </p>
      <p>
        Never set a stop-loss and forget about it entirely. Market conditions change, and your
        stop strategy should adapt. Review your stops regularly, move them to breakeven when
        appropriate, and adjust for changing volatility conditions.
      </p>
    </LearnPageLayout>
  );
}
