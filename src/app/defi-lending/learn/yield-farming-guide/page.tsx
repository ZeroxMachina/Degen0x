import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Yield Farming Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to DeFi yield farming. Learn how yield farming works, strategies for maximizing returns, risks to watch for, and the best protocols for farming.",
  keywords: ["yield farming", "DeFi yield farming", "crypto yield farming", "farming rewards DeFi"],
};

export default function YieldFarmingGuidePage() {
  return (
    <LearnPageLayout
      title="Yield Farming Explained"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min read"
      intro="Yield farming is the practice of deploying crypto assets across DeFi protocols to maximize returns. By providing liquidity, lending, staking, or performing other actions that protocols incentivize, yield farmers earn rewards in the form of trading fees, interest payments, and token incentives. While yield farming can be highly profitable, it requires understanding the risks, costs, and strategies involved to avoid the many pitfalls."
      toc={[
        { id: "what-is-farming", title: "What Is Yield Farming?", level: 2 },
        { id: "strategies", title: "Common Yield Farming Strategies", level: 2 },
        { id: "apy-calculations", title: "Understanding APY & APR", level: 2 },
        { id: "risks", title: "Yield Farming Risks", level: 2 },
        { id: "getting-started", title: "Getting Started with Yield Farming", level: 2 },
        { id: "advanced", title: "Advanced Farming Techniques", level: 2 },
      ]}
      faqs={[
        { question: "How much can you earn yield farming?", answer: "Returns vary enormously, from 2-5% on stablecoin strategies to 50-200%+ on new protocols with token incentives. Higher yields almost always come with higher risk. Sustainable real yields on established protocols typically range from 3-15% APY." },
        { question: "Is yield farming still profitable?", answer: "Yes, but the landscape has matured. The extreme yields of 2020-2021 DeFi summer are rare. Profitable farming now requires understanding gas costs, impermanent loss, and token emissions sustainability. Stablecoin farming and liquid staking strategies offer the best risk-adjusted returns." },
        { question: "What is the minimum to start yield farming?", answer: "On Ethereum mainnet, you need enough to justify gas costs, typically at least $1,000-5,000. On Layer 2 networks like Arbitrum or Optimism, or alt-L1s like Avalanche, you can start with as little as $100-500 due to lower fees." },
        { question: "Do I need to actively manage yield farms?", answer: "It depends on the strategy. Auto-compounding vaults handle reinvestment automatically. Manual strategies like chasing incentives across protocols require active management. Stablecoin lending and liquid staking are relatively passive." },
      ]}
      relatedArticles={[
        { title: "How to Provide Liquidity", href: "/defi-lending/learn/liquidity-providing-guide", category: "DeFi Lending" },
        { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
        { title: "APY vs APR", href: "/defi-lending/learn/apy-vs-apr", category: "DeFi Lending" },
      ]}
    >
      <h2 id="what-is-farming">What Is Yield Farming?</h2>
      <p>
        Yield farming, also called liquidity mining, involves deploying crypto assets into DeFi protocols to earn returns. The concept emerged during DeFi Summer 2020 when Compound began distributing COMP tokens to lenders and borrowers. Since then, yield farming has expanded to encompass providing liquidity to DEXs, lending on protocols like Aave, staking tokens, participating in vault strategies, and leveraging positions to amplify returns. At its core, yield farming works because protocols need liquidity to function and are willing to pay for it through fees, interest, and token incentives.
      </p>

      <h2 id="strategies">Common Yield Farming Strategies</h2>
      <p>
        The most common strategies include stablecoin lending on Aave or Compound for low-risk returns, providing liquidity to DEX pools to earn trading fees plus token incentives, staking governance tokens in protocol vaults, using liquid staking derivatives like stETH or rETH in lending protocols for layered yields, and depositing into auto-compounding vaults on Yearn or Beefy that optimize strategies automatically. More advanced farmers use leverage, borrowing against deposits to increase their farming position. Each strategy has different risk-reward profiles, gas costs, and time requirements. Starting with simple lending or single-sided staking is recommended before progressing to complex strategies.
      </p>

      <h2 id="apy-calculations">Understanding APY &amp; APR</h2>
      <p>
        APR (Annual Percentage Rate) represents simple interest without compounding. APY (Annual Percentage Yield) includes the effect of compounding. A 50% APR compounded daily equals approximately 64.8% APY. DeFi protocols display rates differently, so compare carefully. Also distinguish between base yield (from fees and interest) and incentivized yield (from token emissions). Base yield is generally sustainable, while incentivized yield can disappear when emissions end or token prices drop. Real yield is the return after accounting for token emissions and inflation. A farm showing 100% APY might have only 5% real yield if 95% comes from a depreciating governance token.
      </p>

      <h2 id="risks">Yield Farming Risks</h2>
      <p>
        Smart contract risk is the most fundamental danger: bugs or exploits in the protocol code can result in total loss of funds. Impermanent loss affects liquidity providers when the price ratio of pooled assets changes significantly. Token emission risk means the reward tokens driving high APYs may decrease in value, reducing real returns. Liquidation risk applies to leveraged farming where a price drop can trigger forced selling. Rug pull risk exists on newer or unaudited protocols where developers may drain funds. Gas cost risk on Ethereum can make small farming positions unprofitable. Finally, regulatory risk means some farming activities may have unclear tax or legal implications.
      </p>

      <h2 id="getting-started">Getting Started with Yield Farming</h2>
      <p>
        Begin by choosing a network based on your capital and risk tolerance. Layer 2s like Arbitrum and Optimism offer low fees with Ethereum security. Start with simple strategies: deposit stablecoins into Aave or Compound for single-digit yields with low risk. Once comfortable, try providing liquidity to a stablecoin pool on Curve or Uniswap. Use a portfolio tracker like DeBank or Zapper to monitor positions across protocols. Always research the protocols you use: check for audits, review TVL trends, and understand the team behind the project. Never invest more than you can afford to lose, and diversify across multiple protocols to limit the impact of any single failure.
      </p>

      <h2 id="advanced">Advanced Farming Techniques</h2>
      <p>
        Advanced yield farmers use strategies like recursive lending (depositing, borrowing, and redepositing to amplify exposure to lending incentives), delta-neutral farming (hedging price exposure while capturing yields), and cross-protocol arbitrage. Vault aggregators like Yearn automate complex strategies and reduce gas costs through shared transactions. Points farming on new protocols before their token launch can be lucrative but carries high uncertainty. Concentrated liquidity provision on Uniswap V3 can dramatically increase fee revenue but requires active management of price ranges. Always calculate net returns after gas, fees, impermanent loss, and token depreciation before committing to any strategy.
      </p>
    </LearnPageLayout>
  );
}
