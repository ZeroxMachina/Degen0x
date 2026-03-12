import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Impermanent Loss? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what impermanent loss is, how it affects liquidity providers, and strategies to mitigate this key DeFi risk.",
};

export default function ImpermanentLossPage() {
  return (
    <LearnPageLayout
      title="What Is Impermanent Loss?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="Impermanent loss is the difference in value between holding tokens in a liquidity pool versus simply holding them in a wallet. It occurs when the price ratio of pooled tokens changes from when you deposited them. The 'impermanent' label indicates the loss is only realized when you withdraw; if prices return to the original ratio, the loss disappears. It is the primary risk faced by liquidity providers in automated market makers."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-impermanent-loss", title: "What Is Impermanent Loss?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-impermanent-loss-works", title: "How Impermanent Loss Works", level: 2 },
        { id: "example", title: "example", level: 2 },
        { id: "a-simple-example", title: "A Simple Example", level: 2 },
        { id: "mitigation", title: "mitigation", level: 2 },
        { id: "mitigation-strategies", title: "Mitigation Strategies", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        {
          question: "Can impermanent loss exceed trading fee earnings?",
          answer:
            "Yes. If the price ratio of pooled tokens changes significantly, impermanent loss can exceed the trading fees earned. This is why many liquidity providers lose money overall. High-volume pools with stable price ratios tend to be more profitable, while volatile pairs carry higher impermanent loss risk.",
        },
        {
          question: "Why is it called 'impermanent' if I can still lose money?",
          answer:
            "The loss is impermanent because it only exists as an unrealized opportunity cost while your tokens are in the pool. If the price ratio returns to its original level, the loss vanishes. However, if you withdraw while the ratio has diverged, the loss becomes permanent. Many critics argue the term is misleading since prices rarely return to exact original ratios.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Liquidity Pool?", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is an AMM?", href: "/learn/glossary/amm", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Impermanent Loss?</h2>
      <p>
        Impermanent loss occurs when you provide liquidity to an automated market maker and the price of your deposited tokens changes relative to each other. The AMM rebalances your position as trades occur, resulting in you holding more of the cheaper token and less of the more expensive one compared to if you had just held both tokens. The difference in value is the impermanent loss.
      </p>

      <h2 id="how-it-works">How Impermanent Loss Works</h2>
      <p>
        AMMs like Uniswap maintain a constant product formula (x * y = k) to price assets. When external prices change, arbitrageurs trade against the pool to align its prices with the market. This arbitrage extracts value from liquidity providers. The pool&apos;s rebalancing means LPs end up with a different token ratio than they deposited, and the total value of their position is less than if they had simply held the original tokens.
      </p>

      <h2 id="example">A Simple Example</h2>
      <p>
        Suppose you deposit equal values of ETH and USDC into a pool when ETH is $1,000. If ETH doubles to $2,000, the pool rebalances so you now hold less ETH and more USDC than you started with. Your pool position might be worth $2,828, while simply holding the original tokens would be worth $3,000. The $172 difference is impermanent loss, approximately 5.7% in this scenario.
      </p>

      <h2 id="mitigation">Mitigation Strategies</h2>
      <p>
        Providing liquidity to stablecoin pairs (USDC/USDT) minimizes impermanent loss since the price ratio stays near 1:1. Concentrated liquidity (Uniswap V3) allows LPs to set price ranges, earning more fees but amplifying impermanent loss if prices move outside the range. Some protocols offer impermanent loss insurance or offsetting incentive rewards. Understanding the trade-offs is essential before becoming a liquidity provider.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        Impermanent loss is the hidden cost of providing liquidity in DeFi. Many new liquidity providers are attracted by high APY figures without understanding that impermanent loss can exceed fee earnings. Research consistently shows that a significant percentage of Uniswap LPs lose money compared to simply holding. Understanding impermanent loss is critical for making informed DeFi investment decisions.
      </p>
    </LearnPageLayout>
  );
}
