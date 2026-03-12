import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Yield Insurance: Protecting Your Returns (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about DeFi yield insurance. Protect against yield drops, smart contract risks, and protocol failures that could affect your lending returns.",
};

export default function YieldInsurancePage() {
  return (
    <LearnPageLayout title="DeFi Yield Insurance: Protecting Your Returns" categoryName="Crypto Insurance" categorySlug="insurance" readTime="8 min read"
      intro="DeFi yield insurance protects lenders and yield farmers against losses from smart contract exploits, protocol failures, and dramatic yield drops. As DeFi lending becomes a significant income source for many investors, protecting that income stream against downside risks becomes increasingly important. Several protocols offer coverage products designed specifically for yield-generating activities."
      toc={[
        { id: "what-is-covered", title: "what-is-covered", level: 2 },
        { id: "what-yield-insurance-covers", title: "What Yield Insurance Covers", level: 2 },
        { id: "providers", title: "providers", level: 2 },
        { id: "yield-insurance-providers", title: "Yield Insurance Providers", level: 2 },
        { id: "cost-benefit", title: "cost-benefit", level: 2 },
        { id: "cost-benefit-analysis", title: "Cost-Benefit Analysis", level: 2 },
        { id: "alternatives", title: "alternatives", level: 2 },
        { id: "alternatives-to-insurance", title: "Alternatives to Insurance", level: 2 }
      ]}
      faqs={[
        { question: "What does yield insurance cover?", answer: "Yield insurance typically covers smart contract exploits that result in fund loss, protocol economic failures, and sometimes significant yield reduction. Coverage varies by provider and policy. It generally does not cover market-driven yield drops caused by normal supply-demand dynamics." },
        { question: "How much does yield insurance cost?", answer: "Coverage costs typically range from 2-6% of the covered amount annually. The cost depends on the protocol being covered, the coverage amount, and market conditions. Higher-risk protocols command higher premiums. The cost directly reduces your net yield." },
        { question: "Is yield insurance worth it?", answer: "It depends on your position size, the protocol's risk profile, and your risk tolerance. For large positions on newer protocols, the 2-5% cost may be worth the peace of mind. For small positions on battle-tested protocols like Aave, the cost may exceed the expected value of protection." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Cover", href: "/insurance/learn/smart-contract-cover", category: "Insurance" },
        { title: "Insurance Cost Analysis", href: "/insurance/learn/insurance-cost-analysis", category: "Insurance" },
        { title: "Self-Insurance Strategies", href: "/insurance/learn/self-insurance-strategies", category: "Insurance" },
      ]}
    >
      <h2 id="what-is-covered">What Yield Insurance Covers</h2>
      <p>Yield insurance products protect against several categories of loss. Smart contract exploits that drain lending pools are the primary covered risk. If a hacker exploits a vulnerability in Aave, Compound, or another covered protocol and your funds are lost, the insurance pays out. Protocol economic failures where the protocol becomes insolvent due to bad debt accumulation or oracle manipulation are also typically covered. Some products cover stablecoin depegs that affect your yield-generating position. Coverage generally does not extend to: normal market-driven yield fluctuations, impermanent loss in liquidity pools (this is a feature of AMM design, not a failure), or losses from using uncovered protocols or strategies. The specific terms vary significantly between providers, so reading the coverage details carefully is essential.</p>

      <h2 id="providers">Yield Insurance Providers</h2>
      <p>Nexus Mutual is the largest DeFi insurance protocol, offering smart contract cover for many lending protocols. Coverage is purchased with ETH and is underwritten by NXM stakers who assess risk and provide capital. Claims are assessed by a community vote. InsurAce offers multi-chain coverage with a broader range of covered protocols and generally competitive pricing. Unslashed Finance provides parametric-style coverage with automatic payouts for certain events. Risk Harbor focuses on automated payouts for specific protocol failures. Neptune Mutual allows anyone to create and participate in insurance pools for specific protocols. Each provider has different claims processes, payout speeds, and covered events. Diversifying insurance across multiple providers reduces the risk that a single insurance protocol failure leaves you unprotected.</p>

      <h2 id="cost-benefit">Cost-Benefit Analysis</h2>
      <p>The value of yield insurance depends on the probability of a covered loss and the cost of coverage. For a protocol earning 5% APY, paying 3% for insurance reduces your net yield to 2%, a significant reduction. The insurance is valuable if the expected loss (probability times loss amount) exceeds the premium. For tier-one protocols like Aave with long track records, the probability of total loss is low, making the insurance cost potentially excessive. For newer protocols with higher yields and less proven security, insurance becomes more justified. Consider partial coverage: insuring 50% of your position provides significant downside protection at lower cost. Also factor in the opportunity cost of the premium: that 3% could be earning additional yield if redeployed. The decision framework should be: if losing this entire position would significantly impact my financial situation, insurance is worth considering.</p>

      <h2 id="alternatives">Alternatives to Insurance</h2>
      <p>Self-insurance through diversification is the most common alternative. By spreading deposits across multiple protocols and chains, you limit maximum loss from any single failure to a fraction of your portfolio. Setting aside a percentage of yield (say 10%) into a personal insurance fund builds a reserve over time. Position sizing ensures no single protocol failure is catastrophic: keeping individual protocol exposure below 25% of your lending portfolio means a total loss on one protocol reduces total capital by at most 25%. Using only battle-tested, tier-one protocols reduces the probability of loss, potentially making formal insurance unnecessary. For sophisticated users, hedging through options or prediction markets on specific protocol risks can provide targeted protection. The optimal approach often combines some formal insurance for larger positions with self-insurance through diversification and position sizing.</p>
    </LearnPageLayout>
  );
}
