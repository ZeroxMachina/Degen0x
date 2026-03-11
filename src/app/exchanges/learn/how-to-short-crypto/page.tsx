import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Short Crypto (${CURRENT_YEAR}): Complete Guide to Short Selling`,
  description: "Learn how to short sell cryptocurrency. Understand futures shorts, margin shorts, inverse tokens, and the risks of betting against crypto markets.",
};

const toc = [
  { id: "what-is-shorting", title: "What Is Shorting Crypto", level: 2 },
  { id: "methods", title: "Methods to Short Crypto", level: 2 },
  { id: "futures-shorting", title: "Shorting with Futures", level: 2 },
  { id: "risks", title: "Risks of Shorting", level: 2 },
  { id: "when-to-short", title: "When Shorting Makes Sense", level: 2 },
];

const faqs = [
  { question: "Can you lose more than you invest when shorting?", answer: "Theoretically, short losses are unlimited because there is no cap on how high a price can go. In practice, on crypto exchanges, your position will be liquidated before losses exceed your margin. However, in extreme scenarios with rapid price spikes, slippage during liquidation can cause losses beyond your initial margin." },
  { question: "What is the easiest way to short Bitcoin?", answer: "The easiest method is opening a short perpetual futures position on an exchange like Binance, Bybit, or OKX. Choose low leverage (1-3x), set a stop-loss, and start with a small position size. Alternatively, you can buy inverse Bitcoin ETFs on traditional brokerages." },
  { question: "Is shorting crypto ethical?", answer: "Shorting is a normal market mechanism that provides price discovery, liquidity, and allows hedging. Short sellers can help identify overvalued assets and market inefficiencies. However, coordinated short attacks or spreading false information while shorting is unethical and often illegal." },
];

export default function HowToShortCryptoPage() {
  return (
    <LearnPageLayout
      title="How to Short Crypto: Complete Guide"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="10 min"
      intro="Shorting cryptocurrency means profiting from price declines. While crypto is often associated with buying and holding, short selling is an important tool for hedging risk, expressing bearish views, and profiting in bear markets. This guide covers every method for shorting crypto and the critical risks involved."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Leverage Trading Guide", href: "/exchanges/learn/leverage-trading-guide", category: "Exchanges" },
        { title: "Stop-Loss Orders", href: "/exchanges/learn/stop-loss-orders", category: "Exchanges" },
        { title: "Risk Management", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <h2 id="what-is-shorting">What Is Shorting Crypto?</h2>
      <p>
        Shorting (or short selling) means profiting when an asset&apos;s price goes down. When
        you short Bitcoin at $60,000 and the price drops to $50,000, you profit from the $10,000
        difference. This is the opposite of going long, where you profit from price increases.
        Shorting is accomplished through derivatives (futures), margin borrowing, or inverse
        products.
      </p>
      <p>
        Shorting serves multiple purposes in the market. Traders use it to profit from expected
        price declines. Portfolio managers use it to hedge existing long positions. Market makers
        use it to facilitate trading. Understanding how to short gives you the ability to profit
        in any market direction.
      </p>

      <h2 id="methods">Methods to Short Crypto</h2>
      <p>
        Perpetual futures contracts are the most popular method. You open a short position by
        selling a futures contract, which profits as the underlying price falls. Margin trading
        lets you borrow crypto, sell it at the current price, and buy it back later at a lower
        price. Inverse ETFs and tokens (like inverse BTC tokens) provide short exposure without
        direct derivatives trading. Options (put options) give you the right but not obligation
        to sell at a specified price.
      </p>

      <h2 id="futures-shorting">Shorting with Futures</h2>
      <p>
        On exchanges like Binance, Bybit, and OKX, you can open a short perpetual futures
        position with a few clicks. Choose your leverage (start low at 1-3x), select the
        contract size, and click sell/short. Your profit or loss is calculated as the difference
        between your entry price and the current price, multiplied by your position size and
        leverage.
      </p>
      <p>
        Perpetual futures use a funding rate mechanism where shorts may pay longs (or vice versa)
        every eight hours depending on market conditions. In bullish markets, funding rates tend
        to favor shorts (they receive payments). Always factor funding costs into your short
        trading strategy.
      </p>

      <h2 id="risks">Risks of Shorting</h2>
      <p>
        The primary risk of shorting is that losses are theoretically unlimited. A long position
        can only lose your entire investment (price goes to zero), but a short position faces
        unlimited upside risk. Crypto markets are prone to violent short squeezes where rapid
        price increases force short sellers to close positions at large losses, further
        accelerating the upward move.
      </p>
      <p>
        Liquidation risk is acute for leveraged shorts. A 10% price increase liquidates a 10x
        short. Always use stop-losses, manage position size carefully, and never short with
        leverage you cannot afford to lose.
      </p>

      <h2 id="when-to-short">When Shorting Makes Sense</h2>
      <p>
        Shorting makes sense as a hedge to protect long-term holdings during expected downturns.
        It can be profitable during confirmed bear trends with clear technical breakdown signals.
        Shorting is also useful for market-neutral strategies that pair long and short positions
        to capture relative value. It is generally not advisable to short during strong bull
        markets or based on gut feelings about tops.
      </p>
    </LearnPageLayout>
  );
}
