import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Order Types Explained: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn every crypto exchange order type: market, limit, stop-loss, stop-limit, OCO, trailing stop, and more. Understand when and how to use each one.",
  keywords: ["crypto order types", "limit order crypto", "stop loss crypto", "market order vs limit order"],
};

export default function OrderTypesExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Exchange Order Types Explained"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="10 min"
      intro="Understanding order types is fundamental to effective crypto trading. Using the right order type can save you money on fees, protect you from losses, and ensure you enter and exit positions at the prices you want. This guide explains every major order type available on crypto exchanges."
      toc={[
        { id: "market-orders", title: "Market Orders", level: 2 },
        { id: "limit-orders", title: "Limit Orders", level: 2 },
        { id: "stop-loss", title: "Stop-Loss Orders", level: 2 },
        { id: "stop-limit", title: "Stop-Limit Orders", level: 2 },
        { id: "oco-orders", title: "OCO (One-Cancels-Other) Orders", level: 2 },
        { id: "trailing-stop", title: "Trailing Stop Orders", level: 2 },
        { id: "advanced-orders", title: "Advanced Order Types", level: 2 },
      ]}
      faqs={[
        { question: "Should I use market or limit orders?", answer: "Limit orders are generally preferred because they give you price control and usually incur lower fees (maker vs taker). Use market orders only when you need immediate execution and are willing to pay a slightly worse price." },
        { question: "What is the difference between a stop-loss and a stop-limit?", answer: "A stop-loss triggers a market order when the stop price is reached, guaranteeing execution but not price. A stop-limit triggers a limit order, guaranteeing price but not execution. In fast-moving markets, stop-limit orders may not fill." },
        { question: "Do all exchanges support advanced order types?", answer: "No. Basic exchanges like Robinhood and PayPal only support market orders. Binance, Bybit, OKX, Kraken, and Coinbase Advanced support most advanced order types. Always check available order types before choosing an exchange." },
      ]}
      relatedArticles={[
        { title: "How to Read the Order Book", href: "/exchanges/learn/how-to-read-order-book", category: "Exchanges" },
        { title: "Slippage Explained", href: "/exchanges/learn/slippage-explained", category: "Exchanges" },
        { title: "Stop-Loss Strategies", href: "/trading/learn/stop-loss-strategies", category: "Trading" },
      ]}
    >
      <section id="market-orders">
        <h2>Market Orders</h2>
        <p>A market order executes immediately at the best available price in the order book. When you place a buy market order, it matches against the lowest available sell orders. When you sell, it matches against the highest available buy orders. Market orders guarantee execution but not price — in volatile markets or on illiquid pairs, the executed price may differ significantly from the displayed price (this is called slippage).</p>
        <p>Market orders are classified as taker orders because they remove liquidity from the order book, so they incur taker fees which are typically higher than maker fees. Use market orders when speed of execution is more important than getting a specific price.</p>
      </section>

      <section id="limit-orders">
        <h2>Limit Orders</h2>
        <p>A limit order sets the maximum price you are willing to pay (for buys) or the minimum price you are willing to accept (for sells). The order only executes at your specified price or better. If the market price never reaches your limit price, the order remains open until you cancel it or it expires. Limit orders provide price certainty and usually qualify for lower maker fees when they add liquidity to the order book.</p>
        <p>For example, if Bitcoin is trading at $50,000 and you place a buy limit order at $48,000, the order will only fill if the price drops to $48,000 or below. This is useful for planning entries at support levels or exits at resistance levels.</p>
      </section>

      <section id="stop-loss">
        <h2>Stop-Loss Orders</h2>
        <p>A stop-loss order is designed to limit your downside risk by automatically selling your position if the price falls to a specified level. When the stop price is triggered, a market order is placed to sell immediately. This ensures execution but the actual fill price may be worse than the stop price during fast-moving markets. Stop-loss orders are essential risk management tools for any active trader.</p>
        <p>For example, if you bought Bitcoin at $50,000 and set a stop-loss at $47,000, your position will be automatically sold if the price drops to $47,000, limiting your loss to approximately 6%.</p>
      </section>

      <section id="stop-limit">
        <h2>Stop-Limit Orders</h2>
        <p>A stop-limit order combines a stop trigger with a limit order. When the stop price is reached, instead of a market order, a limit order is placed at a specified limit price. This gives you more control over your execution price but carries the risk that the order may not fill if the price moves past your limit before it can execute. In a flash crash scenario, a stop-limit order might not execute, leaving you in a losing position.</p>
        <p>Stop-limit orders typically require setting two prices: the stop price (trigger) and the limit price. Setting the limit price slightly below the stop price for sells gives the order room to fill while still maintaining price control.</p>
      </section>

      <section id="oco-orders">
        <h2>OCO (One-Cancels-Other) Orders</h2>
        <p>An OCO order pairs two orders together — when one executes, the other is automatically cancelled. This is commonly used to set both a take-profit and stop-loss on the same position. For example, if you bought Bitcoin at $50,000, you could place an OCO with a sell limit at $55,000 (take profit) and a stop-loss at $47,000. Whichever price is reached first will trigger that order and cancel the other. OCO orders are available on Binance, OKX, and some other advanced exchanges.</p>
      </section>

      <section id="trailing-stop">
        <h2>Trailing Stop Orders</h2>
        <p>A trailing stop order adjusts the stop price as the market moves in your favor. You set a trailing distance (either a fixed amount or percentage), and the stop follows the price up (for long positions) but never moves down. This allows you to lock in profits as the price rises while still providing downside protection. If Bitcoin rises from $50,000 to $60,000 with a 5% trailing stop, your stop would be at $57,000. If it then rises to $65,000, the stop moves to $61,750.</p>
      </section>

      <section id="advanced-orders">
        <h2>Advanced Order Types</h2>
        <p>Some exchanges offer additional order types for sophisticated trading. Iceberg orders display only a portion of the total order size, hiding the full quantity from other traders. Post-only orders ensure your order adds liquidity to the book and qualifies for maker fees, cancelling if it would execute immediately. Fill-or-kill orders must execute entirely or not at all. Time-in-force settings (GTC, IOC, FOK) control how long an order remains active. These features are primarily used by institutional and algorithmic traders.</p>
      </section>
    </LearnPageLayout>
  );
}
