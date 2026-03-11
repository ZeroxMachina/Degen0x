import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Risk Management ${CURRENT_YEAR} - Protect Your Portfolio`,
  description: `Learn essential risk management strategies for crypto investing. Position sizing, stop losses, diversification, and emotional discipline for better outcomes.`,
  alternates: { canonical: "/investing/learn/risk-management" },
};

const toc = [
  { id: "why-risk-management", title: "Why Risk Management Matters", level: 2 },
  { id: "position-sizing", title: "Position Sizing", level: 2 },
  { id: "diversification", title: "Diversification", level: 2 },
  { id: "emotional-discipline", title: "Emotional Discipline", level: 2 },
];

const faqs = [
  { question: "What percentage of my portfolio should be in crypto?", answer: "Financial advisors generally recommend 1-5% for conservative investors and up to 10-15% for those with higher risk tolerance. Within your crypto allocation, diversify across asset types and risk levels. The key principle is never investing money you need for essential expenses or emergencies." },
  { question: "Should I use stop losses for crypto?", answer: "Stop losses can protect against catastrophic losses but can also trigger during normal volatility. Many long-term crypto investors avoid tight stop losses because crypto regularly experiences 10-20% corrections even in bull markets. Consider using wider stops (30-40%) for long-term positions or mental stop loss levels where you reassess rather than automatically sell." },
  { question: "How do I manage fear and greed in crypto?", answer: "Create a written investment plan before emotions take over. Define your entry criteria, position sizes, profit-taking levels, and exit triggers in advance. DCA removes timing anxiety. Having a predetermined plan prevents panic selling during crashes and FOMO buying during pumps." },
];

export default function RiskManagementPage() {
  return (
    <LearnPageLayout
      title="Crypto Risk Management"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="9 min"
      intro="Risk management is the most important skill in crypto investing. Even the best asset selection cannot overcome poor risk management. This guide covers essential strategies for protecting your capital and managing the psychological challenges of investing in volatile markets."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Portfolio Allocation", href: "/investing/learn/portfolio-allocation", category: "Investing" },
        { title: "Diversification", href: "/investing/learn/diversification", category: "Investing" },
      ]}
    >
      <section id="why-risk-management" className="mb-10">
        <h2>Why Risk Management Matters</h2>
        <p>
          The asymmetric nature of losses makes risk management critical. A 50% loss requires a
          100% gain to recover. Crypto regularly experiences drawdowns of 30-80% across market
          cycles. Without proper risk management, even one bad decision can devastate your
          portfolio. The best investors are not those who find the highest-returning assets but
          those who avoid catastrophic losses while capturing reasonable upside.
        </p>
      </section>

      <section id="position-sizing" className="mb-10">
        <h2>Position Sizing</h2>
        <p>
          Never risk more than 1-5% of your total portfolio on a single position in higher-risk
          assets. Core holdings (BTC, ETH) can be larger positions (20-40% each) because of
          their relative stability. New or speculative assets should be 1-3% maximum. If a
          position grows beyond your target allocation, trim it back. This ensures no single
          investment can significantly harm your overall portfolio.
        </p>
      </section>

      <section id="diversification" className="mb-10">
        <h2>Diversification</h2>
        <p>
          Diversify across market caps (large, mid, small), sectors (L1s, DeFi, L2s, infrastructure),
          and risk levels (core, growth, speculative). True diversification also means not having
          100% of your net worth in crypto. Maintain a balanced portfolio across asset classes
          including traditional investments, cash reserves, and crypto. Within crypto, diversify
          across exchanges and custody solutions to reduce single-point-of-failure risk.
        </p>
      </section>

      <section id="emotional-discipline" className="mb-10">
        <h2>Emotional Discipline</h2>
        <p>
          Fear and greed are the biggest enemies of successful investing. Create a written
          investment plan when you are calm and rational. Define your DCA schedule, target
          allocations, profit-taking triggers, and exit criteria. Follow this plan regardless
          of market conditions. Avoid checking prices obsessively. Turn off push notifications
          during volatile periods. Remember that the best long-term returns come from patience
          and consistency, not from reacting to every market movement.
        </p>
      </section>
    </LearnPageLayout>
  );
}
