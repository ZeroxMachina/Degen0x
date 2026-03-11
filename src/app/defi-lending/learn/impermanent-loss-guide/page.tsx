import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Impermanent Loss Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand impermanent loss in DeFi liquidity pools. Learn how it occurs, how to calculate it, and strategies to minimize its impact on your returns.",
  keywords: ["impermanent loss", "liquidity pool risk", "defi impermanent loss", "il calculation"],
};

export default function ImpermanentLossGuidePage() {
  return (
    <LearnPageLayout
      title="Impermanent Loss: Complete Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="Impermanent loss is one of the most important concepts for anyone providing liquidity in DeFi. It represents the difference between holding assets in a liquidity pool versus simply holding them in your wallet. Despite the name, impermanent loss can become very permanent if you withdraw at an unfavorable time. This guide explains the mechanics, calculation, and practical strategies for managing impermanent loss."
      toc={[
        { id: "what-is-il", title: "What Is Impermanent Loss", level: 2 },
        { id: "how-it-occurs", title: "How It Occurs", level: 2 },
        { id: "calculating-il", title: "Calculating Impermanent Loss", level: 2 },
        { id: "minimizing-il", title: "Minimizing Impermanent Loss", level: 2 },
        { id: "when-to-provide-liquidity", title: "When to Provide Liquidity", level: 2 },
      ]}
      faqs={[
        { question: "Why is it called impermanent?", answer: "It is called impermanent because the loss only becomes realized when you withdraw liquidity. If asset prices return to their original ratio, the impermanent loss disappears. However, in practice, prices rarely return to exact entry ratios, so some degree of loss is common." },
        { question: "Can trading fees offset impermanent loss?", answer: "Yes, in many cases trading fees earned by liquidity providers can more than offset impermanent loss. This is especially true for high-volume pools with correlated assets. The key is whether total returns from fees exceed the impermanent loss over your holding period." },
      ]}
      relatedArticles={[
        { title: "Yield Farming Strategies", href: "/defi-lending/learn/yield-farming-strategies", category: "DeFi Lending" },
        { title: "Liquidity Mining Explained", href: "/defi-lending/learn/liquidity-mining-explained", category: "DeFi Lending" },
      ]}
    >
      <section id="what-is-il">
        <h2>What Is Impermanent Loss</h2>
        <p>Impermanent loss occurs when you provide liquidity to an automated market maker pool and the price ratio of your deposited assets changes from the ratio at the time of deposit. The AMM's constant product formula automatically rebalances your position, selling the appreciating asset and buying the depreciating one. This rebalancing means you end up with less of the asset that increased in value and more of the asset that decreased, compared to simply holding both assets. The greater the price divergence from your entry ratio, the larger the impermanent loss. It is a fundamental tradeoff of providing liquidity: you earn trading fees in exchange for accepting the risk of impermanent loss from price movements in either direction.</p>
      </section>
      <section id="how-it-occurs">
        <h2>How It Occurs</h2>
        <p>Consider depositing equal values of ETH and USDC into a Uniswap pool when ETH is priced at $2,000. You deposit 1 ETH and 2,000 USDC for a total value of $4,000. If ETH doubles to $4,000, the AMM rebalances your position. Due to the constant product formula, you would now hold approximately 0.707 ETH and 2,828 USDC, worth about $5,656 total. However, if you had simply held your original 1 ETH and 2,000 USDC, they would be worth $6,000. The difference of $344 is your impermanent loss, representing about 5.7% of the hold value. The same loss occurs if ETH halves to $1,000, because impermanent loss depends on the magnitude of price change regardless of direction. A 2x price change in either direction results in approximately 5.7% impermanent loss, while a 5x change results in approximately 25% loss.</p>
      </section>
      <section id="calculating-il">
        <h2>Calculating Impermanent Loss</h2>
        <p>For a standard 50/50 constant product AMM pool, impermanent loss can be calculated using the formula: IL = 2 times the square root of the price ratio divided by (1 plus the price ratio) minus 1. The price ratio is the current price divided by the entry price. At a 1.5x price change, IL is approximately 2%. At 2x, it is roughly 5.7%. At 3x, about 13.4%. At 5x, around 25.5%. For concentrated liquidity positions on Uniswap V3, impermanent loss is amplified proportionally to the concentration factor. A position concentrated in a narrow range behaves as if it had much more capital at risk, multiplying both fee earnings and impermanent loss. Several online calculators including DailyDeFi and Uniswap's own tools can help you model impermanent loss scenarios for specific pools and price ranges before committing capital.</p>
      </section>
      <section id="minimizing-il">
        <h2>Minimizing Impermanent Loss</h2>
        <p>The most effective way to minimize impermanent loss is to provide liquidity to pools with correlated assets. Stablecoin pairs like USDC-USDT experience minimal impermanent loss because their prices stay nearly identical. Similarly, liquid staking derivative pairs like ETH-stETH have low divergence risk. Curve Finance specializes in these correlated-asset pools through its StableSwap invariant, which concentrates liquidity around the expected price ratio. For volatile asset pairs, wider concentration ranges on Uniswap V3 reduce impermanent loss but also reduce fee earnings. Some protocols like Bancor attempted impermanent loss protection by absorbing losses through protocol fees, though the sustainability of such mechanisms varies. Token incentives from liquidity mining programs can offset impermanent loss by providing additional rewards beyond trading fees.</p>
      </section>
      <section id="when-to-provide-liquidity">
        <h2>When to Provide Liquidity</h2>
        <p>Providing liquidity is most attractive when trading volume is high relative to pool size, generating significant fee revenue. Range-bound markets with high volatility within a defined range create ideal conditions for liquidity providers, as frequent price swings generate more trading fees without large net price movements. Sideways markets with high trading activity are historically the best periods for LP profitability. Conversely, strongly trending markets in one direction create the worst impermanent loss outcomes. Before providing liquidity, model the break-even scenario: calculate how much fees you need to earn to offset potential impermanent loss at various price change levels. If the pool's historical fee APY significantly exceeds your modeled impermanent loss at reasonable price changes, the position is likely profitable.</p>
      </section>
    </LearnPageLayout>
  );
}
