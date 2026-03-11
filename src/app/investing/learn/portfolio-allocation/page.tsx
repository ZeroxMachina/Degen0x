import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Portfolio Allocation Guide ${CURRENT_YEAR} - How to Build a Portfolio`,
  description: `Learn how to allocate your crypto portfolio for ${CURRENT_YEAR}. Strategies for balancing risk and reward across Bitcoin, altcoins, DeFi, and stablecoins.`,
  alternates: { canonical: "/investing/learn/portfolio-allocation" },
};

const toc = [
  { id: "principles", title: "Allocation Principles", level: 2 },
  { id: "model-portfolios", title: "Model Portfolios", level: 2 },
  { id: "rebalancing", title: "When to Rebalance", level: 2 },
  { id: "risk-profiles", title: "Risk Profiles", level: 2 },
];

const faqs = [
  { question: "How much of my portfolio should be in crypto?", answer: "Most financial advisors suggest 1-5% for conservative investors and up to 10-15% for higher risk tolerance. This refers to your overall investment portfolio, not just crypto. Your total crypto allocation should be money you can afford to lose without impacting your financial security." },
  { question: "Should I hold stablecoins in my portfolio?", answer: "Holding stablecoins (like USDC) as 5-15% of your crypto portfolio provides dry powder to buy during dips, reduces overall volatility, and can earn yield through DeFi lending. It is a practical risk management tool rather than an investment per se." },
  { question: "How often should I rebalance my crypto portfolio?", answer: "Quarterly rebalancing works well for most investors. Some prefer threshold-based rebalancing where you rebalance when an asset deviates more than 5-10% from its target allocation. Avoid rebalancing too frequently, as it incurs transaction fees and tax events." },
];

export default function PortfolioAllocationPage() {
  return (
    <LearnPageLayout
      title="Crypto Portfolio Allocation Guide"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Building a well-allocated crypto portfolio is crucial for balancing risk and reward. This guide covers allocation strategies for different risk profiles, model portfolios you can adapt, and when and how to rebalance your holdings."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Diversification Strategies", href: "/investing/learn/diversification", category: "Investing" },
        { title: "Risk Management", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <section id="principles" className="mb-10">
        <h2>Allocation Principles</h2>
        <p>
          Effective crypto portfolio allocation follows three core principles: diversification
          across asset types and risk levels, position sizing based on conviction and risk
          tolerance, and regular rebalancing to maintain target allocations. The goal is to
          capture the upside of crypto's growth while managing downside risk through thoughtful
          allocation.
        </p>
        <p>
          Bitcoin and Ethereum should form the core of most portfolios due to their liquidity,
          track records, and lower relative volatility. Altcoins provide growth potential but
          carry higher risk. Stablecoins serve as a buffer and buying opportunity fund.
        </p>
      </section>

      <section id="model-portfolios" className="mb-10">
        <h2>Model Portfolios</h2>
        <p>
          Conservative portfolio: 70% BTC, 20% ETH, 10% stablecoins. Moderate portfolio: 40%
          BTC, 30% ETH, 20% large-cap altcoins, 10% stablecoins. Aggressive portfolio: 30%
          BTC, 25% ETH, 30% altcoins across DeFi, L2, and emerging sectors, 10% high-risk
          positions, 5% stablecoins. These are starting frameworks to customize based on your
          own research and risk tolerance.
        </p>
      </section>

      <section id="rebalancing" className="mb-10">
        <h2>When to Rebalance</h2>
        <p>
          Rebalance when your portfolio drifts significantly from target allocations. If Bitcoin
          rallies and becomes 80% of your moderate portfolio (target: 40%), selling some BTC and
          buying underweight assets restores balance. Rebalancing forces you to sell high and
          buy low systematically. Use quarterly calendar rebalancing or 10% threshold triggers.
        </p>
      </section>

      <section id="risk-profiles" className="mb-10">
        <h2>Risk Profiles</h2>
        <p>
          Your risk profile determines your allocation. Conservative investors nearing retirement
          should weight heavily toward BTC and ETH. Younger investors with longer time horizons
          can afford more altcoin exposure. Active DeFi users might allocate more to governance
          tokens they understand and use. The key is matching your portfolio to your personal
          financial situation, goals, and emotional tolerance for volatility.
        </p>
      </section>
    </LearnPageLayout>
  );
}
