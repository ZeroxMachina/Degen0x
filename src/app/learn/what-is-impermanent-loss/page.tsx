import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Impermanent Loss? DeFi Liquidity Risk Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what impermanent loss is, how it affects liquidity providers on DEXs like Uniswap, how to calculate it, and strategies to minimize impermanent loss in DeFi.",
  keywords: ["impermanent loss", "liquidity provider", "DeFi risk", "AMM", "Uniswap", "liquidity pool risk"],
};

export default function WhatIsImpermanentLossPage() {
  return (
    <LearnPageLayout
      title="What Is Impermanent Loss?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="Impermanent loss is the difference in value between holding tokens in a liquidity pool versus simply holding them in your wallet. When you provide liquidity to a decentralized exchange, the AMM algorithm automatically rebalances your position as prices change, potentially leaving you with less value than if you had just held the original tokens. Understanding impermanent loss is critical for anyone considering becoming a DeFi liquidity provider."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-impermanent-loss-works", title: "How Impermanent Loss Works", level: 2 },
        { id: "calculation", title: "calculation", level: 2 },
        { id: "calculating-impermanent-loss", title: "Calculating Impermanent Loss", level: 2 },
        { id: "when-it-matters", title: "when-it-matters", level: 2 },
        { id: "when-il-matters-most", title: "When IL Matters Most", level: 2 },
        { id: "mitigation", title: "mitigation", level: 2 },
        { id: "strategies-to-mitigate-il", title: "Strategies to Mitigate IL", level: 2 },
        { id: "fee-income", title: "fee-income", level: 2 },
        { id: "fee-income-vs-impermanent-loss", title: "Fee Income vs Impermanent Loss", level: 2 }
      ]}
      faqs={[
        { question: "Is impermanent loss really impermanent?", answer: "It is called impermanent because the loss is unrealized while you remain in the pool — if prices return to their original ratio, the loss disappears. However, if you withdraw while prices have diverged, the loss becomes permanent. In practice, prices rarely return to the exact original ratio, so the loss often materializes as real." },
        { question: "Can I lose all my money to impermanent loss?", answer: "Impermanent loss alone cannot cause a total loss. Even in extreme price divergence, you retain the value of both tokens, just in different proportions than you deposited. However, if one token in the pair goes to zero, you end up holding only that worthless token. Total losses come from the token's fundamental failure, not the IL mechanism itself." },
        { question: "Which pools have the least impermanent loss?", answer: "Pools of correlated assets have the least impermanent loss. Stablecoin-to-stablecoin pools (USDC/USDT) experience minimal IL because prices rarely diverge. Pools of tokens that tend to move together (like different ETH derivatives) also have low IL. The highest IL occurs in pools pairing volatile and stable assets." },
      ]}
      relatedArticles={[
        { title: "What Is a Liquidity Pool?", href: "/learn/what-is-a-liquidity-pool", category: "Learn" },
        { title: "How to Provide Liquidity", href: "/learn/how-to-provide-liquidity", category: "Learn" },
        { title: "What Is APY vs APR?", href: "/learn/what-is-apy-vs-apr", category: "Learn" },
        { title: "AMM Glossary", href: "/learn/glossary/amm", category: "Learn" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Impermanent Loss Works</h2>
        <p>
          When you provide liquidity to an AMM pool, you deposit two tokens in equal value — for example, $500 of ETH and $500 of USDC. The AMM maintains a constant product formula (x * y = k) that automatically adjusts the ratio of tokens in the pool as trades occur. If ETH doubles in price, arbitrageurs buy the underpriced ETH from the pool until the pool price matches the market price. This process removes ETH from the pool and adds USDC, changing the composition of your position.
        </p>
        <p>
          After this rebalancing, your share of the pool contains less ETH and more USDC than you originally deposited. While your position has still increased in dollar value (because ETH is now worth more), it has increased less than if you had simply held the original tokens in your wallet. This shortfall — the difference between your pool position value and what you would have had by just holding — is impermanent loss.
        </p>
        <p>
          The loss occurs regardless of which direction the price moves. Whether ETH doubles or halves relative to USDC, the rebalancing process always results in your pool position being worth less than a simple hold strategy. The loss increases with greater price divergence from the deposit ratio, and it does not matter in which direction the divergence occurs.
        </p>
      </section>

      <section id="calculation">
        <h2>Calculating Impermanent Loss</h2>
        <p>
          Impermanent loss depends solely on the price ratio change between the two tokens. For a standard 50/50 constant product pool: if one token doubles in price relative to the other (2x ratio change), the impermanent loss is approximately 5.7%. At 3x ratio change, IL is about 13.4%. At 5x, it reaches 25.5%. At 10x, the loss is approximately 42.5%. These percentages represent how much less your position is worth compared to simply holding the original tokens.
        </p>
        <p>
          The formula for impermanent loss as a function of price ratio r is: IL = 2*sqrt(r)/(1+r) - 1. This mathematical relationship shows that IL accelerates as price divergence increases — the first doubling in price causes about 5.7% loss, but the range from 5x to 10x causes an additional 17%. This means that providing liquidity for highly volatile token pairs carries disproportionately higher IL risk.
        </p>
      </section>

      <section id="when-it-matters">
        <h2>When IL Matters Most</h2>
        <p>
          Impermanent loss is most significant in pools where the two tokens have low price correlation and high volatility. An ETH/USDC pool experiences substantial IL during major ETH price movements because the two assets move independently. Conversely, a stETH/ETH pool experiences minimal IL because stETH and ETH prices are closely correlated and rarely diverge significantly.
        </p>
        <p>
          The time dimension also matters. Short-term liquidity provision during stable market conditions may produce negligible IL, while providing liquidity through a major market move or extended trending period can result in significant losses. Bull markets are particularly challenging for LPs in token/stablecoin pairs, as the rising token price continuously creates IL. Paradoxically, the best conditions for holding tokens are often the worst conditions for providing liquidity with them.
        </p>
      </section>

      <section id="mitigation">
        <h2>Strategies to Mitigate IL</h2>
        <p>
          The most effective mitigation is choosing correlated asset pairs. Stablecoin pairs, wrapped token pairs (WBTC/BTC), and liquid staking derivative pairs (stETH/ETH) experience minimal IL because the assets tend to maintain a stable price relationship. These pools trade lower fees due to lower volatility but offer more predictable returns for liquidity providers.
        </p>
        <p>
          Concentrated liquidity, pioneered by Uniswap V3, allows LPs to provide liquidity within a specific price range, earning higher fees per dollar of capital but facing amplified IL if the price moves outside their range. Active management — adjusting ranges as prices change — can improve returns but requires constant attention or automated management tools. Some protocols offer IL protection mechanisms that compensate LPs for losses sustained over specified holding periods, though these protections are funded by the protocol and may not be available indefinitely.
        </p>
      </section>

      <section id="fee-income">
        <h2>Fee Income vs Impermanent Loss</h2>
        <p>
          Liquidity providers earn trading fees (typically 0.05% to 1% per trade) that offset impermanent loss. Whether LP positions are profitable depends on whether accumulated fee income exceeds the impermanent loss over the holding period. High-volume pools with moderate price volatility tend to be the most profitable, as they generate substantial fees while keeping IL manageable.
        </p>
        <p>
          Many DeFi protocols supplement trading fees with token incentives (liquidity mining rewards) to make LP positions more attractive. When evaluating LP opportunities, calculate the total expected return (fees plus incentives) against the expected impermanent loss for the price range you anticipate. If fees and incentives significantly exceed expected IL, the position is likely profitable. If not, you may be better off simply holding the underlying tokens. Several online calculators and analytics platforms help LPs model these scenarios before committing capital.
        </p>
      </section>
    </LearnPageLayout>
  );
}
