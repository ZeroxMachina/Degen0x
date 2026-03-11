import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "LTV Ratio Explained: Crypto Loan Guide (2026)", description: "Understand Loan-to-Value (LTV) ratios in crypto lending. Learn how LTV affects borrowing power, liquidation risk, and how to choose the right ratio." };

export default function LtvRatioPage() {
  return (
    <LearnPageLayout title="LTV Ratio Explained" categoryName="Crypto Loans" categorySlug="crypto-loans" readTime="7 min"
      intro="The Loan-to-Value (LTV) ratio is the most important metric in crypto-backed lending. It determines how much you can borrow, how close you are to liquidation, and how much price movement your position can withstand."
      toc={[{ id: "what-is-ltv", title: "What Is LTV?", level: 2 }, { id: "calculating", title: "Calculating LTV", level: 2 }, { id: "safe-levels", title: "Safe LTV Levels", level: 2 }, { id: "managing", title: "Managing Your LTV", level: 2 }]}
      faqs={[
        { question: "What is a safe LTV ratio?", answer: "A conservative LTV of 30-40% provides substantial buffer against liquidation. Moderate risk is 50-60% LTV. Aggressive positions above 70% LTV leave little room for price drops and should only be used by experienced users with active monitoring." },
        { question: "What is the difference between LTV and liquidation threshold?", answer: "LTV is the maximum percentage you can borrow. The liquidation threshold is the level at which your position can be liquidated. The liquidation threshold is typically higher than the LTV limit, providing a buffer zone between maximum borrowing and liquidation." },
        { question: "Can I lower my LTV after borrowing?", answer: "Yes. You can lower your LTV by adding more collateral or by repaying part of your loan. Both actions improve your collateral ratio and move you further from the liquidation threshold." },
      ]}
      relatedArticles={[{ title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk", category: "Crypto Loans" }, { title: "LTV Calculator", href: "/crypto-loans/calculators/ltv-calculator", category: "Tool" }]}
    >
      <h2 id="what-is-ltv">What Is LTV?</h2>
      <p>LTV (Loan-to-Value) ratio expresses your loan amount as a percentage of your collateral value. If you deposit $10,000 in crypto and borrow $5,000, your LTV is 50%. Higher LTV means more borrowing power but greater liquidation risk. Lower LTV means less borrowing power but a larger safety cushion against price drops.</p>

      <h2 id="calculating">Calculating LTV</h2>
      <p>LTV = (Loan Value / Collateral Value) x 100. For a dynamic position, your LTV changes as collateral prices move. If your $10,000 collateral drops to $8,000 while you have a $5,000 loan, your LTV increases from 50% to 62.5%. This is why monitoring LTV during volatile markets is critical.</p>

      <h2 id="safe-levels">Safe LTV Levels</h2>
      <p>Conservative users should target 30-40% LTV, which can withstand a 40-50% price drop before approaching liquidation. Moderate positions at 50-60% LTV can handle 20-30% drops. Aggressive positions above 70% LTV have very little buffer and should only be used with active monitoring and stop-loss mechanisms in place.</p>

      <h2 id="managing">Managing Your LTV</h2>
      <p>Set up price alerts and health factor monitoring tools. Many DeFi platforms display your health factor in real time. Consider using DeFi management tools like DeFi Saver that can automatically add collateral or repay loans when your position approaches dangerous levels. Never borrow at maximum LTV, always leave a buffer, and have additional collateral ready to deploy if needed.</p>
    </LearnPageLayout>
  );
}
