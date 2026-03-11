import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Leverage? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what leverage is in crypto trading, how it amplifies both gains and losses, and the risks involved.",
};

export default function LeveragePage() {
  return (
    <LearnPageLayout
      title="What Is Leverage?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="Leverage in crypto trading means using borrowed funds to increase your position size beyond what your own capital would allow. If you use 10x leverage, a $1,000 deposit controls a $10,000 position. Leverage amplifies both profits and losses proportionally. While it can dramatically increase returns on successful trades, it also introduces liquidation risk and is the primary cause of catastrophic losses for retail traders."
      toc={[
        { id: "definition", title: "What Is Leverage?", level: 2 },
        { id: "how-it-works", title: "How Leverage Works", level: 2 },
        { id: "leverage-levels", title: "Leverage Levels", level: 2 },
        { id: "risks", title: "Risks of Leverage", level: 2 },
        { id: "why-it-matters", title: "Why Leverage Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Can I lose more than my initial deposit with leverage?",
          answer:
            "On most crypto exchanges, your loss is limited to your margin (initial deposit) through automatic liquidation. When your position loses enough value, the exchange closes it before your losses exceed your margin. However, in extreme volatility, slippage during liquidation can sometimes result in losses slightly exceeding your deposit.",
        },
        {
          question: "What is the most common leverage used in crypto?",
          answer:
            "While some platforms offer up to 100x or even 125x leverage, experienced traders typically use 2-5x. Higher leverage dramatically increases liquidation risk. Many regulatory jurisdictions have capped retail leverage at 2-5x for crypto. The appropriate level depends on market volatility, position size, and risk tolerance.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Liquidation?", href: "/learn/glossary/liquidation", category: "Glossary" },
        { title: "What Is Collateral?", href: "/learn/glossary/collateral", category: "Glossary" },
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Leverage?</h2>
      <p>
        Leverage is a financial tool that allows traders to control a large position with a relatively small amount of their own capital. In crypto, leverage is expressed as a multiplier: 2x, 5x, 10x, or higher. The trader deposits margin (collateral) and borrows the rest from the exchange or protocol. Profits and losses are calculated on the full position size, not just the margin, making leverage a double-edged sword.
      </p>

      <h2 id="how-it-works">How Leverage Works</h2>
      <p>
        With 10x leverage and $1,000 margin, you open a $10,000 position. If the asset rises 5%, your position gains $500, a 50% return on your $1,000 margin. However, if the asset falls 5%, you lose $500, also 50% of your margin. At 10x leverage, a mere 10% adverse move would wipe out your entire margin, triggering liquidation. The math is simple but its implications are severe.
      </p>

      <h2 id="leverage-levels">Leverage Levels</h2>
      <p>
        Low leverage (2-3x) is commonly used for longer-term positions where the trader has high conviction. Medium leverage (5-10x) is popular among active traders for swing trades. High leverage (20x+) is extremely risky and typically used only for very short-term scalping with tight stop-losses. The higher the leverage, the smaller the price move needed to liquidate the position.
      </p>

      <h2 id="risks">Risks of Leverage</h2>
      <p>
        Liquidation is the primary risk: if your position moves against you beyond your margin, the exchange automatically closes it at a loss. Funding rates on perpetual futures can erode profits over time. Emotional decision-making is amplified when losses are magnified. Market manipulation through large leveraged positions can trigger cascading liquidations that crash prices further. Most retail leveraged traders lose money.
      </p>

      <h2 id="why-it-matters">Why Leverage Matters</h2>
      <p>
        Leverage is a significant force in crypto markets. Large leveraged positions create liquidation cascades that amplify both rallies and crashes. Open interest data (total leveraged positions) is closely watched as a market indicator. Understanding leverage is essential even for spot-only traders, because leveraged positions by others affect price action, volatility, and market structure.
      </p>
    </LearnPageLayout>
  );
}
