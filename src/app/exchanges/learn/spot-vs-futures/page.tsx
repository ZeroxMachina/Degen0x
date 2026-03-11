import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Spot Trading vs Futures Trading (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Understand the differences between spot trading and futures trading in crypto. Learn about leverage, margin, funding rates, liquidation, and which approach suits your strategy.",
};

export default function SpotVsFuturesPage() {
  return (
    <LearnPageLayout
      title="Spot Trading vs Futures Trading"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="11 min"
      intro="Crypto exchanges offer two primary trading markets: spot and futures (also called derivatives). Spot trading involves buying and selling the actual cryptocurrency, while futures trading involves contracts that derive their value from the underlying asset. Futures offer leverage and the ability to profit from falling prices, but they also carry significantly higher risk. This guide explains both markets, their mechanics, and who each one is best suited for."
      toc={[
        { id: "spot-trading", title: "What Is Spot Trading?", level: 2 },
        { id: "futures-trading", title: "What Is Futures Trading?", level: 2 },
        { id: "leverage-margin", title: "Understanding Leverage and Margin", level: 2 },
        { id: "perpetual-vs-dated", title: "Perpetual vs Dated Futures", level: 2 },
        { id: "risks", title: "Risks of Futures Trading", level: 2 },
        { id: "which-to-choose", title: "Which Market Should You Choose?", level: 2 },
      ]}
      faqs={[
        {
          question: "Can I lose more than my initial investment in futures trading?",
          answer:
            "On most modern crypto exchanges, the maximum you can lose is your margin (the funds you have allocated to the position). This is called isolated margin mode. However, in cross-margin mode, your entire account balance can be used to prevent liquidation, which means you could lose your full balance. Always understand your margin mode before trading.",
        },
        {
          question: "What are funding rates in perpetual futures?",
          answer:
            "Funding rates are periodic payments between long and short traders that keep the perpetual futures price aligned with the spot price. When funding is positive, longs pay shorts. When negative, shorts pay longs. Funding rates are typically settled every 8 hours and can add up to a significant cost for long-held positions.",
        },
        {
          question: "Is futures trading legal in the US?",
          answer:
            "Crypto futures trading is available in the US through CFTC-regulated platforms. However, many popular offshore exchanges like Binance, Bybit, and OKX do not offer futures to US residents. US traders can access regulated crypto futures through platforms that hold appropriate CFTC licenses.",
        },
      ]}
      relatedArticles={[
        {
          title: "Limit Orders vs Market Orders Explained",
          href: "/exchanges/learn/limit-vs-market-orders",
          category: "Exchanges",
        },
        {
          title: "How to Read Crypto Trading Charts",
          href: "/exchanges/learn/how-to-read-charts",
          category: "Exchanges",
        },
        {
          title: "Crypto Exchange Fees Explained",
          href: "/exchanges/learn/exchange-fees-explained",
          category: "Exchanges",
        },
      ]}
    >
      <h2 id="spot-trading">What Is Spot Trading?</h2>
      <p>
        Spot trading is the most straightforward form of trading. When you buy Bitcoin on the spot market, you are
        purchasing actual Bitcoin that is delivered to your exchange wallet immediately (or &quot;on the spot&quot;).
        You own the underlying asset, and your profit or loss depends on how the price changes from your purchase
        price.
      </p>
      <p>
        In spot trading, your maximum loss is limited to the amount you invested. If you buy $1,000 worth of
        Ethereum and the price drops to zero (extremely unlikely), you lose $1,000. There is no leverage involved,
        no expiration dates, and no complex mechanics. You buy, you hold, and you sell when you choose.
      </p>
      <p>
        Spot trading is the default market on every exchange and is suitable for both beginners and experienced
        investors. It supports all investment strategies, from day trading to long-term holding. When people talk
        about buying crypto, they are almost always referring to spot trading.
      </p>

      <h2 id="futures-trading">What Is Futures Trading?</h2>
      <p>
        Futures trading involves buying and selling contracts that represent the value of a cryptocurrency rather
        than the cryptocurrency itself. A futures contract is an agreement to buy or sell an asset at a
        predetermined price at a specified time in the future. In crypto, the most popular type is the perpetual
        futures contract, which has no expiration date.
      </p>
      <p>
        The defining feature of futures trading is leverage. Leverage allows you to control a position much larger
        than your actual capital. With 10x leverage, a $1,000 deposit (margin) lets you open a $10,000 position.
        This amplifies both gains and losses by 10x. A 5% price move in your favor yields a 50% return on your
        margin, but a 5% move against you results in a 50% loss.
      </p>
      <p>
        Futures also allow you to go &quot;short,&quot; meaning you can profit from falling prices. In spot
        trading, you can only profit when prices go up. In futures, you can open a short position that gains value
        as the underlying asset&apos;s price decreases. This makes futures useful for hedging existing spot
        positions or speculating on downward price movements.
      </p>

      <h2 id="leverage-margin">Understanding Leverage and Margin</h2>
      <p>
        Leverage is expressed as a multiplier, such as 2x, 5x, 10x, 50x, or even 100x on some exchanges. The
        leverage you choose determines how much margin (collateral) you need to open a position. At 10x leverage,
        you need 10% of the position size as margin. At 100x leverage, you need just 1%.
      </p>
      <p>
        There are two margin modes: isolated and cross. In isolated margin mode, only the specific margin allocated
        to a position can be lost if the trade goes against you. In cross margin mode, your entire account balance
        serves as collateral, which provides a larger buffer against liquidation but also puts your full balance at
        risk.
      </p>
      <p>
        Maintenance margin is the minimum amount required to keep a position open. If your position loses enough
        that the remaining margin falls below the maintenance margin level, the exchange will liquidate your
        position automatically. This is designed to prevent your account from going into negative balance, but it
        means you can lose your entire margin in a rapid price move.
      </p>

      <h2 id="perpetual-vs-dated">Perpetual vs Dated Futures</h2>
      <p>
        Perpetual futures are the most traded derivatives product in crypto. Unlike traditional futures contracts,
        they have no expiration date, allowing you to hold a position indefinitely (as long as you have sufficient
        margin). The trade-off is funding rates -- periodic payments between longs and shorts that keep the
        perpetual price close to the spot price.
      </p>
      <p>
        When the perpetual futures price trades above the spot price (contango), funding rates are positive, and
        long position holders pay short holders. When futures trade below spot (backwardation), the reverse
        occurs. Funding rates are typically calculated and paid every 8 hours, and they can be a significant
        ongoing cost for positions held over days or weeks.
      </p>
      <p>
        Dated (or delivery) futures have specific expiration dates, such as quarterly contracts. They settle at
        the spot price on the expiration date. Dated futures do not have funding rates but can trade at a premium
        or discount to spot. They are less popular in crypto than perpetuals but are used by institutional traders
        for structured hedging strategies.
      </p>

      <h2 id="risks">Risks of Futures Trading</h2>
      <p>
        The amplified returns from leverage come with equally amplified risks. With 100x leverage, a 1% move
        against your position wipes out your entire margin. Even at 10x leverage, a 10% adverse move liquidates
        your position. Crypto markets regularly experience 10-20% moves within hours, making high-leverage
        positions extremely risky.
      </p>
      <p>
        Liquidation cascades are a particularly dangerous phenomenon. When the price drops enough to liquidate
        overleveraged long positions, those forced sales push the price down further, triggering more liquidations.
        This cascade effect can cause massive, rapid price crashes that wipe out traders across the market. Billions
        of dollars in positions are routinely liquidated during such events.
      </p>
      <p>
        Emotional and psychological risks are also higher with futures trading. Leverage amplifies the stress of
        watching your position, often leading to impulsive decisions. Studies show that the vast majority of
        retail futures traders lose money over time. If you choose to trade futures, use conservative leverage
        (2-5x), always set stop-losses, and never risk more than you can afford to lose.
      </p>

      <h2 id="which-to-choose">Which Market Should You Choose?</h2>
      <p>
        Spot trading is the right choice for beginners, long-term investors, and anyone building a crypto
        portfolio. It is straightforward, lower-risk, and lets you actually own the assets you are investing in.
        You can stake your holdings for additional yield, participate in governance, or transfer to your own
        wallet for self-custody.
      </p>
      <p>
        Futures trading is appropriate for experienced traders who understand leverage, risk management, and
        technical analysis. It is useful for hedging existing positions (protecting against short-term price drops
        without selling your spot holdings), capitalizing on short-term market movements, and generating profits in
        both rising and falling markets.
      </p>
      <p>
        If you are new to crypto, start exclusively with spot trading. Once you are comfortable with the market
        dynamics, understand technical analysis, and have developed a consistent strategy, you can consider
        exploring futures with very low leverage (2-3x) and small position sizes. The majority of your portfolio
        should remain in spot holdings regardless of your experience level.
      </p>
    </LearnPageLayout>
  );
}
