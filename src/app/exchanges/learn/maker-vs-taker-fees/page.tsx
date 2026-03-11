import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Maker vs Taker Fees Explained (${CURRENT_YEAR}): Crypto Exchange Fees`,
  description: "Understand the difference between maker and taker fees on crypto exchanges. Learn how to reduce your trading fees and when each order type makes sense.",
};

const toc = [
  { id: "what-are-maker-taker", title: "What Are Maker and Taker Fees", level: 2 },
  { id: "how-they-work", title: "How the Fee Model Works", level: 2 },
  { id: "fee-comparison", title: "Exchange Fee Comparison", level: 2 },
  { id: "reduce-fees", title: "How to Reduce Your Fees", level: 2 },
];

const faqs = [
  { question: "Why are maker fees lower than taker fees?", answer: "Maker orders add liquidity to the order book, making the market deeper and more efficient for everyone. Exchanges incentivize this by charging lower (sometimes zero) fees for makers. Taker orders remove liquidity, so they are charged higher fees. Some exchanges even pay makers (negative fees) to provide liquidity." },
  { question: "Am I a maker or taker?", answer: "If your order goes onto the order book and waits to be filled (limit orders that do not immediately match), you are a maker. If your order fills immediately against existing orders (market orders and limit orders that match instantly), you are a taker. The same order can be partially maker and partially taker." },
  { question: "Do fees really matter that much?", answer: "Yes, especially for active traders. A 0.1% fee difference on $100,000 monthly volume is $100/month or $1,200/year. For high-frequency traders with millions in volume, the difference between 0.02% and 0.1% is significant. Even for casual investors, using advanced trading interfaces with lower fees saves money over time." },
];

export default function MakerVsTakerFeesPage() {
  return (
    <LearnPageLayout
      title="Maker vs Taker Fees: Crypto Exchange Fee Guide"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="7 min"
      intro="Understanding the maker-taker fee model is essential for minimizing your trading costs on crypto exchanges. Most exchanges charge different fees depending on whether your order adds liquidity (maker) or removes it (taker). This guide explains the mechanics and shows you how to pay less."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Exchange Fees Explained", href: "/exchanges/learn/exchange-fees-explained", category: "Exchanges" },
        { title: "Trading Pairs Explained", href: "/exchanges/learn/trading-pairs-explained", category: "Exchanges" },
        { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange", category: "Exchanges" },
      ]}
    >
      <h2 id="what-are-maker-taker">What Are Maker and Taker Fees?</h2>
      <p>
        A maker is someone who places an order that does not immediately fill but instead sits
        on the order book, adding liquidity for others to trade against. A taker is someone
        whose order fills immediately by matching with an existing order on the book, removing
        liquidity. Exchanges charge different fee rates for each role to incentivize liquidity
        provision.
      </p>
      <p>
        In practice, limit orders placed away from the current market price are almost always
        maker orders. Market orders are always taker orders. Limit orders placed at or better
        than the current best price may execute as taker orders if they match immediately.
      </p>

      <h2 id="how-they-work">How the Fee Model Works</h2>
      <p>
        When you place a limit buy order below the current ask price, it goes onto the order
        book and waits. You have made liquidity available. When someone else places a market
        sell order that matches your buy, your order fills as a maker and you pay the lower
        maker fee. The person who sold against your order pays the higher taker fee.
      </p>
      <p>
        This system encourages tighter spreads and deeper order books, which benefits all
        traders through better price execution and lower slippage. It is the standard fee model
        used by virtually every major crypto exchange.
      </p>

      <h2 id="fee-comparison">Exchange Fee Comparison</h2>
      <p>
        Fee structures vary significantly. Binance charges 0.1% maker and 0.1% taker at base
        tier, with BNB discounts. Coinbase Advanced charges 0% maker and up to 0.60% taker.
        Kraken charges 0.16% maker and 0.26% taker. OKX charges 0.08% maker and 0.1% taker.
        All exchanges offer volume-based tier reductions that lower fees significantly for
        active traders.
      </p>
      <p>
        For futures trading, fees are typically lower: 0.02% maker and 0.05-0.06% taker is
        common at base tiers. Some exchanges offer negative maker fees (they pay you) for
        futures at high volume tiers, essentially rewarding you for providing liquidity.
      </p>

      <h2 id="reduce-fees">How to Reduce Your Fees</h2>
      <p>
        Use limit orders instead of market orders to benefit from lower maker fees. Hold and use
        native exchange tokens (BNB on Binance, KCS on KuCoin) for fee discounts. Increase your
        30-day trading volume to qualify for lower fee tiers. Use the advanced trading interface
        rather than simple buy/sell which typically charges higher fees.
      </p>
      <p>
        For serious traders, some exchanges offer VIP or market maker programs with significantly
        reduced fees. Referral programs can also provide fee discounts. Finally, consider which
        exchange has the best fees for your specific volume tier and trading style rather than
        just comparing base rates.
      </p>
    </LearnPageLayout>
  );
}
