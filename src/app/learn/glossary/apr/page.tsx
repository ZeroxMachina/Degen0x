import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is APR (Annual Percentage Rate)? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what APR means in crypto, how it differs from APY, how to calculate it, and how to evaluate APR rates across DeFi protocols.",
};

export default function AprPage() {
  return (
    <LearnPageLayout title="What Is APR (Annual Percentage Rate)?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="APR (Annual Percentage Rate) is the yearly rate of return earned on an investment or paid on a loan, expressed as a percentage without accounting for compounding. In crypto, APR is commonly used to describe staking rewards, lending yields, and DeFi farming returns. Understanding APR helps you compare different yield opportunities and make informed decisions about where to deploy your capital."
      toc={[{ id: "definition", title: "What Is APR?", level: 2 }, { id: "apr-vs-apy", title: "APR vs APY", level: 2 }, { id: "apr-in-defi", title: "APR in DeFi", level: 2 }, { id: "evaluating-apr", title: "Evaluating APR Rates", level: 2 }]}
      faqs={[{ question: "Is a higher APR always better?", answer: "Not necessarily. Higher APR often correlates with higher risk. A 100% APR on a new, unaudited protocol carries significantly more risk than a 5% APR on Aave. Extremely high APRs are often unsustainable and funded by token emissions that dilute the token's value. Always assess risk alongside return." },
        { question: "Why do crypto APRs change so frequently?", answer: "DeFi APRs are dynamic and change based on supply and demand. When more capital enters a lending pool, the APR decreases because rewards are spread across more depositors. When capital exits, APR increases. Staking APRs change with the total amount staked and network inflation parameters." }]}
      relatedArticles={[{ title: "APY", href: "/learn/glossary/apy", category: "Glossary" }, { title: "Yield", href: "/learn/glossary/yield", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }, { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn Crypto" }]}
    >
      <h2 id="definition">What Is APR?</h2>
      <p>APR represents the simple annual rate of return without compounding. If you stake 100 ETH at 5% APR, you earn 5 ETH over one year (assuming the rate stays constant). The calculation is straightforward: principal multiplied by rate multiplied by time. APR does not account for the effect of reinvesting earned rewards, which is why it always appears lower than APY for the same underlying rate when compounding occurs.</p>

      <h2 id="apr-vs-apy">APR vs APY</h2>
      <p>APY (Annual Percentage Yield) accounts for compound interest, where earned rewards are reinvested to earn additional rewards. A 10% APR compounded daily produces approximately 10.52% APY. The more frequently rewards compound, the larger the gap between APR and APY. Some protocols auto-compound rewards (raising APY), while others require manual claiming and reinvestment (where APR is the relevant metric). Always check which metric a protocol advertises to make accurate comparisons.</p>

      <h2 id="apr-in-defi">APR in DeFi</h2>
      <p>DeFi APRs come from multiple sources: lending interest from borrowers, trading fees from liquidity provision, token emissions from protocol incentives, and staking rewards from network validation. Many protocols display APRs that combine all reward sources, which can be misleading if a large portion comes from token emissions that may decrease over time. Separate base APR (from genuine protocol revenue) from incentive APR (from token distribution) for better analysis.</p>

      <h2 id="evaluating-apr">Evaluating APR Rates</h2>
      <p>When comparing APRs across protocols, consider the asset risk, smart contract risk, and sustainability of the rate. Stablecoin APRs above 10% should prompt careful investigation into the source of yield. Token emission-funded APRs decline as emissions decrease or token price drops. Protocol revenue-funded APRs are more sustainable but typically lower. The real yield movement emphasizes APRs backed by genuine economic activity rather than inflationary token distributions.</p>
    </LearnPageLayout>
  );
}
