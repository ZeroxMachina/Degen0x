import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Interest Rate Models Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Understand how DeFi lending protocols determine interest rates. Learn about utilization curves, kinked rate models, and how supply and demand drive DeFi yields.",
};

export default function InterestRateModelsPage() {
  return (
    <LearnPageLayout title="DeFi Interest Rate Models Explained" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="9 min read"
      intro="Interest rate models are the algorithms that determine how much lenders earn and borrowers pay on DeFi lending protocols. Unlike traditional finance where rates are set by committees, DeFi rates are determined by mathematical functions based on supply and demand dynamics. Understanding these models helps you predict rate movements, choose optimal lending times, and understand why rates can spike dramatically during market events."
      toc={[{ id: "utilization-based", title: "Utilization-Based Rate Models", level: 2 }, { id: "kinked-model", title: "The Kinked Rate Model", level: 2 }, { id: "stable-rates", title: "Stable vs Variable Rates", level: 2 }, { id: "predicting-rates", title: "Predicting Rate Movements", level: 2 }]}
      faqs={[
        { question: "How are DeFi lending rates determined?", answer: "Most DeFi protocols use utilization-based models. The utilization rate is total borrows divided by total supply. As utilization increases (more borrowing relative to supply), interest rates increase to attract deposits and discourage additional borrowing. The specific formula varies by protocol." },
        { question: "Why do DeFi rates spike suddenly?", answer: "Rate spikes occur when utilization suddenly increases above the optimal target. Large borrows, mass withdrawals, or market events can push utilization from 75% to 95%+, causing rates to jump from 3% to 50%+ in the high-utilization zone. This incentivizes rapid rebalancing." },
        { question: "What is a kink in the rate curve?", answer: "The kink is a point on the interest rate curve where the slope changes dramatically. Below the kink (optimal utilization), rates increase gradually. Above the kink, rates increase steeply. This design ensures liquidity by strongly discouraging over-utilization." },
      ]}
      relatedArticles={[
        { title: "DeFi Lending Strategies", href: "/defi-lending/learn/defi-lending-strategies", category: "DeFi Lending" },
        { title: "Lending Pool Mechanics", href: "/defi-lending/learn/lending-pool-mechanics", category: "DeFi Lending" },
        { title: "Aave vs Compound", href: "/crypto-loans/compare/aave-vs-compound-lending", category: "Crypto Loans" },
      ]}
    >
      <h2 id="utilization-based">Utilization-Based Rate Models</h2>
      <p>The core concept behind DeFi interest rates is utilization: the percentage of deposited assets that are currently borrowed. Utilization = Total Borrows / Total Supply. At 0% utilization (no borrowing), rates are at their minimum because there is no demand for capital. As utilization increases, rates rise to compensate lenders for reduced liquidity and to manage demand. At 100% utilization, all assets are borrowed and lenders cannot withdraw, which is why protocols use steep rate increases near full utilization to prevent this scenario. The supply rate (what lenders earn) equals the borrow rate multiplied by utilization, minus a protocol reserve factor. For example, if the borrow rate is 5% and utilization is 80%, the supply rate is approximately 4% (5% times 80%), minus any protocol fee. This relationship means supply rates are always lower than borrow rates and increase with utilization.</p>

      <h2 id="kinked-model">The Kinked Rate Model</h2>
      <p>The most common DeFi rate model uses a kinked (two-slope) curve. Below optimal utilization (the kink point, typically 75-90%), rates increase gradually along a gentle slope. Above the kink, rates increase along a much steeper slope, sometimes rising from 5% to 100%+ APR in just 10-15% additional utilization. The kink creates a strong economic incentive to maintain utilization near the optimal level. When utilization exceeds the kink, the spike in borrowing costs encourages repayment, while high supply rates attract new deposits. Both forces push utilization back toward the target. Aave uses this model with different parameters for each asset. Compound III uses a similar approach per market. The specific slopes (how fast rates increase below and above the kink) and the kink point itself are governance-controlled parameters that affect the lending experience for each asset.</p>

      <h2 id="stable-rates">Stable vs Variable Rates</h2>
      <p>Aave offers both variable and stable interest rates for borrowing. Variable rates change with every block based on current utilization, providing the lowest rates during low-demand periods but potentially spiking during high demand. Stable rates offer more predictability but start at a premium above the variable rate. Aave&apos;s stable rates are not truly fixed; they can be rebalanced (changed) if market conditions shift significantly, such as the stable rate being substantially below the variable rate. The stable rate provides a ceiling rather than a guarantee. In practice, most DeFi borrowers use variable rates because the premium for stability is often not justified by the predictability benefit. During normal conditions, variable rates are lower. During spikes, the spike typically resolves quickly as the market rebalances. Borrowers who need absolute rate predictability may prefer fixed-rate protocols like Notional Finance.</p>

      <h2 id="predicting-rates">Predicting Rate Movements</h2>
      <p>While DeFi rates are determined algorithmically, you can anticipate movements by monitoring utilization trends and market conditions. During bull markets, borrowing demand increases as traders seek leverage, pushing utilization and rates higher. During bear markets, borrowing demand decreases and deposits may increase, lowering rates. Large protocol events like governance votes to change rate parameters, new asset listings that attract deposits, or large whale movements can shift utilization. On-chain data tools allow you to monitor utilization in real-time and even track pending large transactions in the mempool. Setting up alerts for utilization thresholds (for example, alert when USDC utilization on Aave exceeds 85%) helps you anticipate rate spikes. Historical rate data available through DeFiLlama and protocol-specific dashboards helps establish baseline expectations for different market conditions.</p>
    </LearnPageLayout>
  );
}
