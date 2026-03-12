import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = {
  title: "APY vs APR: Understanding DeFi Yield Rates (2026)",
  description: "Learn the difference between APY and APR in DeFi. Understand compounding, how protocols calculate rates, and which metric matters for your investments.",
};

export default function ApyVsAprPage() {
  return (
    <LearnPageLayout title="APY vs APR: What Is the Difference?" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="7 min"
      intro="APY and APR are the two most common metrics for expressing DeFi yields, but they represent fundamentally different things. Understanding the difference is essential for accurately comparing investment opportunities and estimating your actual returns. This guide breaks down both metrics with clear examples."
      toc={[
        { id: "apr-explained", title: "apr-explained", level: 2 },
        { id: "apr-explained", title: "APR Explained", level: 2 },
        { id: "apy-explained", title: "apy-explained", level: 2 },
        { id: "apy-explained", title: "APY Explained", level: 2 },
        { id: "compounding-effect", title: "compounding-effect", level: 2 },
        { id: "the-power-of-compounding", title: "The Power of Compounding", level: 2 },
        { id: "which-matters", title: "which-matters", level: 2 },
        { id: "which-metric-should-you-use", title: "Which Metric Should You Use?", level: 2 }
      ]}
      faqs={[
        { question: "Which is higher, APY or APR?", answer: "APY is always equal to or higher than APR for the same investment because APY includes the effect of compounding. The more frequently interest compounds, the larger the gap between APY and APR." },
        { question: "Do DeFi protocols show APY or APR?", answer: "It varies by protocol. Lending protocols often show supply APY and borrow APR. Staking protocols typically show APR. Yield aggregators show APY because they auto-compound. Always check which metric is being displayed." },
        { question: "How do I convert between APY and APR?", answer: "APY = (1 + APR/n)^n - 1, where n is the number of compounding periods per year. For daily compounding (n=365), a 10% APR equals approximately 10.52% APY. For continuous compounding, APY = e^APR - 1." },
      ]}
      relatedArticles={[{ title: "How to Earn Yield", href: "/defi-lending/learn/how-to-earn-yield", category: "DeFi Lending" }, { title: "Yield Calculator", href: "/defi-lending/calculators/yield-calculator", category: "Tool" }]}
    >
      <h2 id="apr-explained">APR Explained</h2>
      <p>APR (Annual Percentage Rate) is the simple annualized interest rate without compounding. If you earn 10% APR on $1,000, you would earn $100 over one year, assuming the rate remains constant. APR does not account for the reinvestment of earned interest. In DeFi, APR is commonly used for staking rates, borrow rates, and situations where rewards are not automatically reinvested.</p>

      <h2 id="apy-explained">APY Explained</h2>
      <p>APY (Annual Percentage Yield) includes the effect of compound interest, representing the total return you earn when interest is reinvested. The same 10% APR with daily compounding produces an APY of approximately 10.52%. APY is the more accurate measure of what you actually earn when your returns are automatically reinvested, which is the case with many DeFi yield strategies, particularly yield aggregator vaults.</p>

      <h2 id="compounding-effect">The Power of Compounding</h2>
      <p>Compounding frequency significantly impacts returns. A 10% APR compounded annually yields 10% APY. The same rate compounded monthly yields 10.47% APY. Compounded daily, it yields 10.52% APY. In DeFi, some yield aggregators compound rewards multiple times per day, maximizing the compounding benefit. This is why auto-compounding vaults often advertise higher APYs than manually managed positions at the same base rate.</p>

      <h2 id="which-matters">Which Metric Should You Use?</h2>
      <p>Use APR when comparing base rates and when you plan to manually manage your rewards. Use APY when comparing investments where returns are automatically reinvested (like yield aggregator vaults). When comparing across different platforms, make sure you are comparing the same metric. A protocol showing 10% APY and another showing 10% APR may seem equal, but the APY investment actually earns slightly less before compounding.</p>
    </LearnPageLayout>
  );
}
