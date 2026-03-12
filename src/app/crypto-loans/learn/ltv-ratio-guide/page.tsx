import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Understanding LTV Ratios in Crypto Lending (${CURRENT_YEAR}) | degen0x`,
  description:
    "Complete guide to Loan-to-Value ratios in crypto lending. Learn how LTV works, optimal ratios for different strategies, and how to manage your LTV effectively.",
};

export default function LtvRatioGuidePage() {
  return (
    <LearnPageLayout
      title="Understanding LTV Ratios in Crypto Lending"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min read"
      intro="The Loan-to-Value (LTV) ratio is the most fundamental concept in crypto lending. It determines how much you can borrow against your collateral, when you risk liquidation, and the overall safety of your position. Whether you use DeFi protocols or CeFi platforms, understanding LTV is essential for managing crypto loans effectively. This guide explains LTV mechanics, optimal ratios for different strategies, and how to actively manage your LTV."
      toc={[
        { id: "what-is-ltv", title: "what-is-ltv", level: 2 },
        { id: "what-is-ltv-ratio", title: "What Is LTV Ratio", level: 2 },
        { id: "ltv-thresholds", title: "ltv-thresholds", level: 2 },
        { id: "ltv-thresholds-across-platforms", title: "LTV Thresholds Across Platforms", level: 2 },
        { id: "optimal-ratios", title: "optimal-ratios", level: 2 },
        { id: "optimal-ltv-for-different-strategies", title: "Optimal LTV for Different Strategies", level: 2 },
        { id: "managing-ltv", title: "managing-ltv", level: 2 },
        { id: "managing-your-ltv-actively", title: "Managing Your LTV Actively", level: 2 }
      ]}
      faqs={[
        { question: "What is a good LTV ratio for crypto loans?", answer: "A conservative LTV is 25-40%, providing substantial buffer against market volatility. Moderate risk is 40-60% LTV. Aggressive is 60-75% LTV. The optimal ratio depends on the volatility of your collateral, your risk tolerance, and whether you have reserves to add collateral if prices drop." },
        { question: "How is LTV calculated?", answer: "LTV equals the loan amount divided by the collateral value, expressed as a percentage. For example, if you deposit $10,000 worth of ETH and borrow $5,000 in USDC, your LTV is 50%. As your collateral value changes with market prices, your LTV changes dynamically." },
        { question: "What happens when LTV exceeds the maximum?", answer: "When your LTV exceeds the liquidation threshold (which varies by platform and asset), your collateral is partially or fully liquidated. Liquidators repay your debt and take your collateral at a discount. You lose the collateral minus remaining debt, plus a liquidation penalty typically of 5-15%." },
        { question: "Does LTV differ by collateral type?", answer: "Yes. More volatile assets have lower maximum LTV and liquidation thresholds. Stablecoins may have 90%+ LTV because their value is stable. Major assets like ETH and BTC typically allow 75-82% LTV. Smaller altcoins may only allow 40-65% LTV due to higher volatility and liquidity risk." },
      ]}
      relatedArticles={[
        { title: "Liquidation Prevention", href: "/crypto-loans/learn/liquidation-prevention", category: "Crypto Loans" },
        { title: "Bitcoin-Backed Loans", href: "/crypto-loans/learn/bitcoin-backed-loans", category: "Crypto Loans" },
        { title: "DeFi vs CeFi Lending", href: "/crypto-loans/learn/defi-vs-cefi-lending", category: "Crypto Loans" },
      ]}
    >
      <h2 id="what-is-ltv">What Is LTV Ratio</h2>
      <p>
        The Loan-to-Value ratio expresses your borrowed amount as a percentage of your collateral value. The formula is straightforward: LTV = (Loan Amount / Collateral Value) x 100. If you deposit $20,000 in Bitcoin and borrow $10,000 in USDC, your LTV is 50%. This metric is dynamic because crypto prices constantly change. If Bitcoin drops 20%, your collateral is now worth $16,000, pushing your LTV to 62.5%. If Bitcoin rises 20%, your collateral is $24,000 and your LTV drops to 41.7%. Every lending platform defines three key LTV thresholds: the maximum LTV (the most you can initially borrow), the liquidation LTV (where liquidation begins), and the target or recommended LTV. The gap between maximum LTV and liquidation LTV provides a small buffer, but it is not sufficient protection against significant market moves.
      </p>

      <h2 id="ltv-thresholds">LTV Thresholds Across Platforms</h2>
      <p>
        Different platforms set different LTV parameters based on their risk models. Aave V3 allows maximum LTV of 80% for ETH with a liquidation threshold of 82.5%, giving a thin 2.5% buffer. For WBTC, the maximum LTV is 73% with liquidation at 78%. For volatile assets like LINK, maximum LTV drops to 68% with liquidation at 73%. MakerDAO allows 75-80% LTV for ETH collateral depending on the vault type. CeFi platforms often offer lower LTVs but with more predictable terms: Nexo offers up to 80% LTV, and platform-specific terms define margin call and liquidation levels. The safest approach is to never borrow close to the maximum. The maximum LTV exists as a hard limit, not a recommendation. Your target should be well below this level, especially for volatile collateral assets.
      </p>

      <h2 id="optimal-ratios">Optimal LTV for Different Strategies</h2>
      <p>
        For long-term holders using loans to avoid selling, a conservative 25-35% LTV provides maximum safety. At 25% LTV with ETH collateral, ETH would need to drop approximately 70% to trigger liquidation on Aave. This is suitable for borrowing against Bitcoin or ETH for living expenses or investments while maintaining your crypto position. For yield farming strategies where borrowed funds generate returns, 40-50% LTV balances capital efficiency with safety. The yield earned should substantially exceed the borrowing cost to justify the risk. For leveraged trading where you borrow to buy more of the collateral asset, 50-65% LTV is common but aggressive. Each additional layer of leverage amplifies both gains and losses. Professional traders may use higher LTVs but with active monitoring, automated protection, and the ability to respond in minutes. For stablecoin-to-stablecoin borrowing (depositing USDC to borrow DAI), very high LTVs of 85-90% are reasonable because the collateral and loan values move together.
      </p>

      <h2 id="managing-ltv">Managing Your LTV Actively</h2>
      <p>
        Active LTV management involves monitoring your ratio and taking action when it moves outside your target range. Set personal upper and lower bounds: for example, target 40% LTV with an upper alert at 55% and a lower bound at 30%. When LTV rises above your upper alert (collateral dropping or debt increasing), add collateral or repay debt. When LTV drops below your lower bound (collateral appreciating), you can either withdraw excess collateral or borrow additional funds. Calculate your liquidation price for each position and track it alongside market prices. Use spreadsheets or portfolio tools to model how different price scenarios affect your LTV. During bull markets, your LTV naturally decreases, creating opportunities to withdraw collateral or borrow more. During bear markets, your LTV increases, requiring defensive actions. Avoid the common mistake of using appreciated collateral to borrow more at high LTVs, as a price reversal will rapidly push you toward liquidation.
      </p>
    </LearnPageLayout>
  );
}
