import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loan Collateral Requirements (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand collateral requirements for crypto loans. Learn which assets are accepted, minimum amounts, and how collateral ratios work across platforms.",
  keywords: ["crypto collateral requirements", "loan collateral", "crypto loan collateral", "collateral ratio"],
};

export default function CollateralRequirementsPage() {
  return (
    <LearnPageLayout
      title="Crypto Loan Collateral Requirements"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min"
      intro="Collateral requirements determine how much you need to deposit, which assets are accepted, and how much you can borrow. Different platforms have different requirements based on the risk profile of each collateral type. Understanding these requirements helps you choose the right platform and plan your borrowing strategy to maximize capital efficiency while maintaining safety."
      toc={[
        { id: "accepted-assets", title: "Accepted Collateral Assets", level: 2 },
        { id: "ratios-explained", title: "Collateral Ratios Explained", level: 2 },
        { id: "platform-comparison", title: "Platform Requirements", level: 2 },
        { id: "multi-collateral", title: "Multi-Collateral Strategies", level: 2 },
      ]}
      faqs={[
        { question: "Can I use stablecoins as collateral?", answer: "Yes, most platforms accept stablecoins as collateral with higher LTV ratios (typically 75-90%) due to their low volatility. This is useful for borrowing other stablecoins or volatile assets while maintaining stable collateral value." },
        { question: "What is the minimum collateral amount?", answer: "Minimums vary by platform. CeFi platforms may require $500-5,000 minimum. DeFi protocols have no minimums but gas fees make very small positions impractical on Ethereum mainnet. Layer 2 protocols are better for smaller collateral amounts." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Explained", href: "/crypto-loans/learn/ltv-ratio-explained", category: "Crypto Loans" },
        { title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-crypto-loans-work", category: "Crypto Loans" },
      ]}
    >
      <section id="accepted-assets">
        <h2>Accepted Collateral Assets</h2>
        <p>Bitcoin and Ethereum are universally accepted as collateral across virtually all crypto lending platforms due to their high liquidity, large market caps, and reliable price feeds. Beyond these, acceptance varies significantly. CeFi platforms like Nexo support 30-60 assets as collateral, while DeFi protocols vary by deployment. Aave on Ethereum supports over 100 assets, while newer chain deployments may support only a handful. Stablecoins like USDC and USDT are widely accepted and receive favorable collateral ratios. Liquid staking derivatives like stETH and rETH are increasingly accepted and allow you to earn staking rewards while your collateral is locked. Smaller altcoins may only be accepted on specific platforms and typically receive much lower collateral ratios reflecting their higher volatility and lower liquidity.</p>
      </section>
      <section id="ratios-explained">
        <h2>Collateral Ratios Explained</h2>
        <p>The collateral ratio determines how much you must deposit relative to your loan. A 150% collateral ratio means depositing $15,000 of collateral to borrow $10,000. This is expressed inversely as a loan-to-value ratio: 150% collateral equals roughly 67% LTV. Different assets have different required ratios based on their risk profile. Bitcoin typically requires 125-200% collateral, Ethereum similar, and volatile altcoins may require 200-300% or more. The difference between your current collateral ratio and the liquidation threshold is your safety margin. A higher ratio means more safety but less capital efficiency. Finding the right balance depends on your risk tolerance and how actively you can monitor your position during market volatility.</p>
      </section>
      <section id="platform-comparison">
        <h2>Platform Requirements</h2>
        <p>CeFi platforms generally offer more aggressive LTV ratios because they can margin call borrowers and liquidate positions more flexibly. Nexo offers up to 90% LTV on certain assets at their Platinum tier. Ledn offers standard 50% LTV on Bitcoin. DeFi protocols set collateral factors through governance. Aave V3 offers up to 82.5% LTV for ETH with eMode for correlated assets pushing near 93%. Compound V3 sets conservative parameters with isolated markets. MakerDAO varies by vault type from 130% to 170% minimum collateral. Liquity offers the most aggressive ratio at 110% minimum. When comparing platforms, look at both the maximum LTV and the liquidation threshold, as the gap between these determines your buffer before liquidation.</p>
      </section>
      <section id="multi-collateral">
        <h2>Multi-Collateral Strategies</h2>
        <p>Many platforms allow depositing multiple asset types as collateral for a single loan. This diversification can improve your overall collateral health because different assets may not decline simultaneously. Aave calculates a weighted average collateral factor across all your deposited assets. MakerDAO supports multi-collateral vaults. CeFi platforms often aggregate all your deposits into a single credit line. Using correlated assets like ETH and stETH as combined collateral through Aave's eMode can maximize your borrowing power while keeping correlation risk low. Mixing stablecoins with volatile assets in your collateral basket provides a more stable base collateral value while still gaining exposure to crypto price appreciation on the volatile portion.</p>
      </section>
    </LearnPageLayout>
  );
}
