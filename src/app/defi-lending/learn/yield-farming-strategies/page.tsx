import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Yield Farming Strategies (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn proven yield farming strategies in DeFi. Compare single-sided lending, LP farming, leveraged yield, and recursive borrowing approaches.",
  keywords: ["yield farming strategies", "defi farming", "yield optimization", "defi yield"],
};

export default function YieldFarmingStrategiesPage() {
  return (
    <LearnPageLayout
      title="DeFi Yield Farming Strategies"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="12 min"
      intro="Yield farming involves deploying crypto assets across DeFi protocols to maximize returns. From simple single-sided lending to complex leveraged strategies, the spectrum of yield farming approaches offers different risk-reward tradeoffs. This guide breaks down the most common yield farming strategies, their mechanics, risks, and expected returns to help you find the approach that matches your risk tolerance."
      toc={[
        { id: "single-sided-lending", title: "single-sided-lending", level: 2 },
        { id: "single-sided-lending", title: "Single-Sided Lending", level: 2 },
        { id: "liquidity-provision", title: "liquidity-provision", level: 2 },
        { id: "liquidity-provision", title: "Liquidity Provision", level: 2 },
        { id: "leveraged-farming", title: "leveraged-farming", level: 2 },
        { id: "leveraged-yield-farming", title: "Leveraged Yield Farming", level: 2 },
        { id: "recursive-borrowing", title: "recursive-borrowing", level: 2 },
        { id: "recursive-borrowing", title: "Recursive Borrowing", level: 2 },
        { id: "risk-management", title: "risk-management", level: 2 },
        { id: "risk-management", title: "Risk Management", level: 2 }
      ]}
      faqs={[
        { question: "What is a realistic yield from farming?", answer: "Sustainable yields on stablecoins typically range from 3-10% APY on major protocols. Higher yields exist but usually involve higher risk, impermanent loss exposure, or unsustainable token emissions. Be skeptical of yields above 20% APY as they often come with significant hidden risks." },
        { question: "Is yield farming still profitable?", answer: "Yes, but the landscape has matured significantly since the DeFi summer of 2020. Easy high yields from token incentives have diminished. Profitable farming now requires understanding protocol mechanics, managing gas costs, and accepting appropriate risk levels for targeted returns." },
      ]}
      relatedArticles={[
        { title: "DeFi Interest Rates Explained", href: "/defi-lending/learn/defi-interest-rates-explained", category: "DeFi Lending" },
        { title: "Impermanent Loss Guide", href: "/defi-lending/learn/impermanent-loss-guide", category: "DeFi Lending" },
        { title: "Liquidity Mining Explained", href: "/defi-lending/learn/liquidity-mining-explained", category: "DeFi Lending" },
      ]}
    >
      <section id="single-sided-lending">
        <h2>Single-Sided Lending</h2>
        <p>Single-sided lending is the simplest yield farming strategy. You deposit a single asset into a lending protocol like Aave or Compound and earn interest paid by borrowers. There is no impermanent loss risk because you only hold one asset. Returns come from borrowing demand for that asset, which fluctuates with market conditions. Stablecoin lending typically yields 3-8% APY, while volatile assets can yield more during high-demand periods. The main risks are smart contract vulnerability and utilization risk, where high borrowing demand might temporarily prevent withdrawals. This strategy is ideal for conservative DeFi participants who want passive yield without active management. Yield aggregators like Yearn Finance can optimize returns by automatically moving funds between lending protocols to capture the best available rates.</p>
      </section>
      <section id="liquidity-provision">
        <h2>Liquidity Provision</h2>
        <p>Providing liquidity to decentralized exchanges like Uniswap, Curve, or Balancer earns trading fees proportional to your share of the pool. Concentrated liquidity positions on Uniswap V3 can dramatically increase fee earnings by focusing capital in active trading ranges, but require active management. Curve pools for correlated assets like stablecoins or ETH-stETH pairs offer lower impermanent loss risk with competitive fee returns. Many protocols offer additional token incentives for liquidity providers, boosting total APY. The primary risk is impermanent loss, where divergent price movements between paired assets reduce the value of your position compared to simply holding the assets. Concentrated liquidity amplifies both the fee earnings and the impermanent loss risk. Successful liquidity provision requires understanding the specific pool dynamics and rebalancing when necessary.</p>
      </section>
      <section id="leveraged-farming">
        <h2>Leveraged Yield Farming</h2>
        <p>Leveraged yield farming amplifies returns by borrowing additional assets to increase your farming position size. Platforms like Alpaca Finance and Francium facilitate this by allowing users to borrow against their farming position. For example, you might deposit $1,000 and borrow $2,000 more to create a $3,000 farming position, tripling your yield exposure. However, leverage also amplifies losses and introduces liquidation risk. If the value of your farming position drops below the collateral requirement, you face partial or full liquidation. Leveraged farming is most effective in stable or trending markets and extremely dangerous during volatile periods. The borrowing cost must be factored into expected returns since you are paying interest on the borrowed portion. Net yield equals farming yield times leverage minus borrowing cost, and during unfavorable conditions this can easily turn negative.</p>
      </section>
      <section id="recursive-borrowing">
        <h2>Recursive Borrowing</h2>
        <p>Recursive borrowing, also called looping, involves depositing an asset, borrowing against it, depositing the borrowed asset, and repeating the cycle to amplify token incentive rewards. This strategy is particularly effective when a protocol offers supply incentives that exceed borrowing costs. For example, if supplying USDC earns 5% plus 3% in governance tokens and borrowing USDC costs 4%, each loop generates a net positive return from the token incentives. After several loops, the effective APY on your initial capital is multiplied significantly. The risk is that if incentive programs change or rates shift unfavorably, unwinding the position requires multiple transactions and gas costs. Automated vault strategies on protocols like Morpho and Yearn execute optimized looping strategies and manage the unwinding process. This approach works best during periods of high protocol incentives but becomes unprofitable when emissions decrease.</p>
      </section>
      <section id="risk-management">
        <h2>Risk Management</h2>
        <p>Effective yield farming requires disciplined risk management. Diversify across multiple protocols and strategies to limit exposure to any single smart contract vulnerability. Never allocate more than you can afford to lose to any single farming position. Factor in all costs including gas fees, slippage, impermanent loss, and potential smart contract risk when calculating expected returns. Use established, audited protocols with strong track records rather than chasing the highest yields on untested platforms. Monitor your positions regularly, especially leveraged ones, and have clear exit criteria before entering any farming strategy. Consider the sustainability of yields: returns driven by organic protocol revenue and trading fees are more durable than those dependent on token emissions, which typically decrease over time as incentive programs are reduced through governance decisions.</p>
      </section>
    </LearnPageLayout>
  );
}
