import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Derivatives Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn about crypto derivatives including futures, options, and perpetual swaps. Understand how they work, their risks, and how traders use them.`,
};

export default function CryptoDerivativesExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Derivatives Explained"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="12 min"
      intro="Crypto derivatives are financial instruments whose value is derived from the price of an underlying cryptocurrency. They include futures, options, and perpetual swaps, enabling traders to speculate on price movements, hedge positions, and access leverage. Derivatives now account for the majority of crypto trading volume globally."
      toc={[
        { id: "what-are-derivatives", title: "what-are-derivatives", level: 2 },
        { id: "what-are-crypto-derivatives", title: "What Are Crypto Derivatives?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-crypto-derivatives", title: "Types of Crypto Derivatives", level: 2 },
        { id: "how-to-use", title: "how-to-use", level: 2 },
        { id: "how-traders-use-derivatives", title: "How Traders Use Derivatives", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-of-crypto-derivatives", title: "Risks of Crypto Derivatives", level: 2 }
      ]}
      faqs={[
        { question: "What are perpetual swaps?", answer: "Perpetual swaps (perps) are crypto-native derivative contracts that have no expiration date, unlike traditional futures. They use a funding rate mechanism to keep the contract price aligned with the spot price. When longs pay shorts (positive funding), it means the market is bullish; when shorts pay longs (negative funding), the market is bearish." },
        { question: "Should beginners trade crypto derivatives?", answer: "No. Derivatives involve leverage, which amplifies both gains and losses. Most retail traders lose money trading leveraged derivatives. Beginners should master spot trading, portfolio management, and risk assessment before considering derivatives. Even experienced traders should use conservative leverage." },
      ]}
      relatedArticles={[
        { title: "Technical Analysis Guide", href: "/investing/learn/technical-analysis", category: "Investing" },
        { title: "Risk Management Guide", href: "/investing/learn/risk-management", category: "Investing" },
        { title: "Best Day Trading Cryptos", href: "/investing/best/day-trading", category: "Investing" },
      ]}
    >
      <h2 id="what-are-derivatives">What Are Crypto Derivatives?</h2>
      <p>
        Crypto derivatives are contracts that derive their value from the price of a cryptocurrency
        without requiring ownership of the underlying asset. They allow traders to profit from
        price movements in both directions (long and short), access leverage to amplify positions,
        and hedge existing holdings against price declines. The crypto derivatives market now
        exceeds spot trading volume by several multiples, with daily notional volume in the
        hundreds of billions.
      </p>

      <h2 id="types">Types of Crypto Derivatives</h2>
      <p>
        Futures contracts are agreements to buy or sell a cryptocurrency at a predetermined price
        on a specific future date. Options give the holder the right (but not obligation) to buy
        or sell at a strike price. Perpetual swaps are the most popular crypto derivative, offering
        futures-like exposure without expiration dates. Other types include structured products,
        prediction markets, and on-chain derivatives protocols like dYdX and GMX.
      </p>

      <h2 id="how-to-use">How Traders Use Derivatives</h2>
      <p>
        Hedging is the most prudent use of derivatives. A long-term ETH holder can open a short
        futures position to protect against near-term downside without selling their spot holdings.
        Speculation with leverage allows traders to amplify returns on directional bets. Basis
        trading involves profiting from the price difference between spot and futures markets.
        Options strategies can generate income through covered calls or provide downside protection
        through protective puts.
      </p>

      <h2 id="risks">Risks of Crypto Derivatives</h2>
      <p>
        Leverage amplifies losses just as it amplifies gains. A 10x leveraged position loses 100%
        of its value with just a 10% adverse move. Liquidation risk means your position can be
        forcibly closed if the margin falls below maintenance requirements. Funding rates on
        perpetual swaps can significantly erode returns over time. Counterparty risk exists on
        centralized derivatives exchanges. Only trade derivatives with money you can afford to
        lose, and always use stop losses.
      </p>
    </LearnPageLayout>
  );
}
