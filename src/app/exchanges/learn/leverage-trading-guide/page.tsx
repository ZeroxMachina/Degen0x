import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Leverage Trading Guide (${CURRENT_YEAR}): Margin, Futures & Risk`,
  description: "Complete guide to leverage trading in crypto. Learn about margin trading, futures contracts, liquidation risks, and strategies for managing leveraged positions.",
};

const toc = [
  { id: "what-is-leverage", title: "What Is Leverage Trading", level: 2 },
  { id: "margin-vs-futures", title: "Margin Trading vs Futures", level: 2 },
  { id: "liquidation", title: "Understanding Liquidation", level: 2 },
  { id: "risk-management", title: "Risk Management for Leverage", level: 2 },
  { id: "getting-started", title: "Getting Started Safely", level: 2 },
];

const faqs = [
  { question: "What leverage should a beginner use?", answer: "Beginners should start with no more than 2-3x leverage, or avoid leverage entirely until they have consistent profitability in spot trading. High leverage (10x+) dramatically increases both gains and losses and is only suitable for experienced traders with strict risk management." },
  { question: "Can I lose more than my deposit with leverage?", answer: "On most crypto exchanges, you cannot lose more than your margin (the funds in your account). Liquidation mechanisms close your position before your losses exceed your collateral. However, in extreme cases with rapid price moves, there is a small risk of negative balance, though many exchanges absorb this through insurance funds." },
  { question: "Which exchanges offer leverage trading?", answer: "Binance, Bybit, OKX, Bitget, and Kraken all offer leverage trading with varying maximum leverage levels. US-based exchanges have more restrictions on leverage products. Always check which products are available in your jurisdiction." },
];

export default function LeverageTradingGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Leverage Trading: Complete Guide"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="12 min"
      intro="Leverage trading allows you to control a larger position with a smaller amount of capital. While this amplifies potential profits, it equally amplifies losses. This guide covers the mechanics of leverage trading, the difference between margin and futures, liquidation risks, and essential risk management strategies."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Stop-Loss Orders", href: "/exchanges/learn/stop-loss-orders", category: "Exchanges" },
        { title: "How to Short Crypto", href: "/exchanges/learn/how-to-short-crypto", category: "Exchanges" },
        { title: "Maker vs Taker Fees", href: "/exchanges/learn/maker-vs-taker-fees", category: "Exchanges" },
      ]}
    >
      <h2 id="what-is-leverage">What Is Leverage Trading?</h2>
      <p>
        Leverage trading means borrowing funds to increase the size of your trading position
        beyond what your own capital allows. If you have $1,000 and use 10x leverage, you
        control a $10,000 position. A 5% price move in your favor yields a 50% return on your
        capital. However, a 5% move against you results in a 50% loss, and a 10% adverse move
        would wipe out your entire capital.
      </p>
      <p>
        Leverage is expressed as a multiplier (2x, 5x, 10x, 50x, 125x). Higher leverage means
        more amplification of both gains and losses, and a smaller price move needed to liquidate
        your position. Most professional traders use conservative leverage levels of 2-5x.
      </p>

      <h2 id="margin-vs-futures">Margin Trading vs Futures</h2>
      <p>
        Margin trading involves borrowing funds against your collateral to trade on the spot
        market. You are trading the actual asset with borrowed money. Interest accrues on the
        borrowed amount. Margin trading is available on exchanges like Kraken and Binance with
        typical leverage of 2-10x.
      </p>
      <p>
        Futures trading involves contracts that derive their value from the underlying asset.
        Perpetual futures are the most popular in crypto, with no expiration date. Instead of
        interest, futures use a funding rate mechanism where longs pay shorts (or vice versa)
        periodically. Futures typically offer higher leverage (up to 125x) and are available
        on Binance, Bybit, OKX, and other derivatives exchanges.
      </p>

      <h2 id="liquidation">Understanding Liquidation</h2>
      <p>
        Liquidation occurs when the market moves against your leveraged position enough to
        consume your margin collateral. At that point, the exchange forcibly closes your
        position to prevent further losses. The liquidation price depends on your leverage
        level and entry price. At 10x leverage, roughly a 10% adverse move triggers liquidation.
        At 50x, roughly a 2% move triggers it.
      </p>
      <p>
        Most exchanges use a tiered liquidation system: they send margin call warnings first,
        then partially reduce your position, and finally fully liquidate if the price continues
        moving against you. Understanding your exact liquidation price before entering a trade
        is critical for survival in leveraged trading.
      </p>

      <h2 id="risk-management">Risk Management for Leverage</h2>
      <p>
        Never risk more than 1-2% of your total portfolio on a single leveraged trade. Always
        set stop-losses before entering a position. Use isolated margin mode instead of cross
        margin to limit losses to the margin allocated to that specific position. Avoid adding
        to losing positions (averaging down) with leverage, as this can accelerate losses.
      </p>
      <p>
        Consider the funding rate costs for perpetual futures positions held over extended
        periods. During bullish markets, long positions often pay high funding rates that erode
        profits. Monitor your positions actively and be prepared to exit quickly when conditions
        change.
      </p>

      <h2 id="getting-started">Getting Started Safely</h2>
      <p>
        Before trading with leverage, master spot trading first. Develop a consistent strategy
        with proven profitability before amplifying it with leverage. Start with a testnet or
        paper trading account if available. When you begin live leverage trading, use the
        minimum leverage (2-3x), trade only highly liquid pairs, and risk a small portion of
        your portfolio.
      </p>
      <p>
        Keep a trading journal to track your leveraged trades, analyze your mistakes, and
        refine your approach. Many successful leveraged traders went through significant
        learning periods before becoming consistently profitable.
      </p>
    </LearnPageLayout>
  );
}
