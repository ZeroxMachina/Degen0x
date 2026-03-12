import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Loan Interest Rates Compared (${CURRENT_YEAR}) | degen0x`,
  description: "Compare crypto loan interest rates across CeFi and DeFi platforms. Understand variable vs fixed rates, how rates are set, and how to find the best deal.",
};

export default function InterestRatesComparisonPage() {
  return (
    <LearnPageLayout
      title="Crypto Loan Interest Rates Compared"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Interest rates on crypto loans vary dramatically across platforms, ranging from 0% APR on select CeFi tiers to over 15% during high-demand periods in DeFi. Understanding how rates are determined, what drives changes, and where to find the best deals can save you thousands in borrowing costs."
      toc={[
        { id: "rate-landscape", title: "rate-landscape", level: 2 },
        { id: "current-rate-landscape", title: "Current Rate Landscape", level: 2 },
        { id: "variable-vs-fixed", title: "variable-vs-fixed", level: 2 },
        { id: "variable-vs-fixed-rates", title: "Variable vs Fixed Rates", level: 2 },
        { id: "what-drives-rates", title: "what-drives-rates", level: 2 },
        { id: "what-drives-rate-changes", title: "What Drives Rate Changes", level: 2 },
        { id: "finding-best-rates", title: "finding-best-rates", level: 2 },
        { id: "finding-the-best-rates", title: "Finding the Best Rates", level: 2 }
      ]}
      faqs={[
        { question: "Why do DeFi rates change so frequently?", answer: "DeFi rates are algorithmically determined based on pool utilization. When many people borrow and utilization rises, rates increase to attract more depositors. When demand drops, rates decrease. This can change block by block." },
        { question: "Is 0% APR on Nexo real?", answer: "Yes, but only for Platinum-tier members who hold at least 10% of their portfolio in NEXO tokens. The effective cost includes the opportunity cost and risk of holding NEXO tokens, so the true cost may not be zero." },
      ]}
      relatedArticles={[
        { title: "Best Low-Interest Crypto Loans", href: "/crypto-loans/best/low-interest", category: "Crypto Loans" },
        { title: "Compound vs Aave Loans", href: "/crypto-loans/compare/compound-vs-aave-loans", category: "Crypto Loans" },
        { title: "Repayment Strategies", href: "/crypto-loans/learn/repayment-strategies", category: "Crypto Loans" },
      ]}
    >
      <h2 id="rate-landscape">Current Rate Landscape</h2>
      <p>CeFi platforms typically charge 0-14% APR depending on loyalty tiers and collateral type. Nexo offers 0% for Platinum members, while base-tier rates run 7-14%. DeFi protocols charge variable rates based on utilization: Aave and Compound typically range from 2-8% for stablecoins, but can spike above 15% during high demand. Spark Protocol offers competitive DAI borrowing rates set by governance. Rates change constantly, so checking at the time of borrowing is essential.</p>

      <h2 id="variable-vs-fixed">Variable vs Fixed Rates</h2>
      <p>Most crypto loans use variable rates that change with market conditions. Variable rates are lower on average but unpredictable. Fixed-rate options exist through protocols like Notional and Term Finance, offering rate certainty in exchange for slightly higher costs and fixed terms. CeFi platforms sometimes offer promotional fixed rates. For long-term borrowing, the predictability of fixed rates may outweigh the potentially lower cost of variable rates.</p>

      <h2 id="what-drives-rates">What Drives Rate Changes</h2>
      <p>In DeFi, the primary driver is pool utilization (borrowed amount divided by total deposits). Higher utilization means higher rates. Macro market conditions also play a role: bull markets drive up borrowing demand and rates, while bear markets reduce them. CeFi rates are set by the platform based on their cost of capital, competitive positioning, and risk assessment. Token incentives and loyalty programs further affect effective rates.</p>

      <h2 id="finding-best-rates">Finding the Best Rates</h2>
      <p>Use rate aggregators like DeFi Llama to compare DeFi borrow rates across protocols and chains. Check rates on multiple platforms before committing. Consider total cost of borrowing, including origination fees, withdrawal fees, and gas costs. Factor in token holding requirements for CeFi tier benefits. Borrowing during low-demand periods (often weekends or bear markets) typically yields better DeFi rates.</p>
    </LearnPageLayout>
  );
}
