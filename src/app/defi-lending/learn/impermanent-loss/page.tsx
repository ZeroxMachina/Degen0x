import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = {
  title: "Impermanent Loss Explained: What Every LP Needs to Know (2026)",
  description: "Understand impermanent loss in DeFi liquidity pools. Learn what causes it, how to calculate it, strategies to minimize it, and when LP fees make up for the loss.",
};

export default function ImpermanentLossPage() {
  return (
    <LearnPageLayout
      title="Impermanent Loss Explained"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="9 min"
      intro="Impermanent loss is the most misunderstood concept in DeFi liquidity provision. It occurs when the price ratio of tokens in your liquidity pool changes relative to when you deposited, potentially causing your position to be worth less than if you had simply held the tokens. This guide explains exactly how impermanent loss works, when it matters, and how to manage it."
      toc={[
        { id: "what-is-il", title: "what-is-il", level: 2 },
        { id: "what-is-impermanent-loss", title: "What Is Impermanent Loss?", level: 2 },
        { id: "how-calculated", title: "how-calculated", level: 2 },
        { id: "how-it-is-calculated", title: "How It Is Calculated", level: 2 },
        { id: "when-permanent", title: "when-permanent", level: 2 },
        { id: "when-does-it-become-permanent", title: "When Does It Become Permanent?", level: 2 },
        { id: "minimizing", title: "minimizing", level: 2 },
        { id: "strategies-to-minimize-il", title: "Strategies to Minimize IL", level: 2 }
      ]}
      faqs={[
        { question: "Can you avoid impermanent loss completely?", answer: "You can avoid impermanent loss by only providing liquidity to pools with assets that maintain a fixed price ratio, such as stablecoin pools (USDC/USDT/DAI) or same-peg pools (stETH/ETH). For volatile pairs, impermanent loss is unavoidable but can be offset by trading fee revenue." },
        { question: "Is impermanent loss always bad?", answer: "Not necessarily. The trading fees and token incentives earned by LPs often exceed the impermanent loss experienced, resulting in a net profit. The key is to provide liquidity in pools with high trading volume relative to the pool size and manageable price divergence." },
        { question: "Does impermanent loss apply to single-sided staking?", answer: "No. Impermanent loss only applies to providing liquidity in two-sided (or multi-sided) pools. Single-sided staking, lending, and liquid staking do not have impermanent loss risk." },
      ]}
      relatedArticles={[
        { title: "Liquidity Pools Explained", href: "/defi-lending/learn/liquidity-pools-explained", category: "DeFi Lending" },
        { title: "IL Calculator", href: "/defi-lending/calculators/impermanent-loss-calculator", category: "Tool" },
        { title: "Best Liquidity Pools", href: "/defi-lending/best/liquidity-pools", category: "DeFi Lending" },
      ]}
    >
      <h2 id="what-is-il">What Is Impermanent Loss?</h2>
      <p>Impermanent loss occurs when you provide liquidity to an automated market maker (AMM) pool and the price ratio of your deposited tokens changes compared to when you deposited them. The AMM algorithm automatically rebalances your position as prices move, buying more of the depreciating asset and selling the appreciating asset. This rebalancing means you end up with less of the winning token and more of the losing token compared to simply holding.</p>
      <p>The loss is called "impermanent" because if the price ratio returns to its original state, the loss disappears entirely. However, if you withdraw while prices have diverged, the loss becomes permanent and real.</p>

      <h2 id="how-calculated">How It Is Calculated</h2>
      <p>For a standard 50/50 constant-product AMM pool, impermanent loss depends only on the price ratio change between the two tokens. If one token doubles in price relative to the other, the impermanent loss is approximately 5.7%. If one token increases 5x, the loss is about 25.5%. The formula is: IL = 2 * sqrt(price_ratio) / (1 + price_ratio) - 1. These percentages represent how much less your LP position is worth compared to simply holding the same tokens outside the pool.</p>

      <h2 id="when-permanent">When Does It Become Permanent?</h2>
      <p>Impermanent loss becomes permanent (realized) when you withdraw your liquidity. As long as your funds remain in the pool, the loss can still be reversed if prices return to their original ratio. However, the practical reality is that prices rarely return to exact original levels, so most LPs experience some degree of permanent loss on volatile pairs. The key question is whether trading fees and incentives earned exceed the impermanent loss incurred.</p>

      <h2 id="minimizing">Strategies to Minimize IL</h2>
      <p>The most effective strategy is to provide liquidity to correlated asset pools (stablecoin pools, stETH/ETH pools) where price divergence is minimal. Curve Finance specializes in these pools and offers minimal IL. For volatile pairs, choosing pools with high trading volume helps because fee revenue can offset IL. Concentrated liquidity on Uniswap V3 amplifies both returns and IL, so careful range management is essential. Finally, yield aggregators like Yearn can help by automatically managing positions and harvesting rewards to offset losses.</p>
    </LearnPageLayout>
  );
}
