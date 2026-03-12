import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Is Crypto Insurance Worth the Cost? (${CURRENT_YEAR}) | degen0x`,
  description: "Analysis of crypto insurance costs vs benefits. Framework for deciding when DeFi insurance is worth the premium and when self-insurance makes more sense.",
};

export default function InsuranceCostAnalysisPage() {
  return (
    <LearnPageLayout title="Is Crypto Insurance Worth the Cost?" categoryName="Crypto Insurance" categorySlug="insurance" readTime="8 min read"
      intro="DeFi insurance premiums typically cost 2-6% annually, which significantly reduces your net yield. Whether this cost is justified depends on the probability of loss, the severity of potential loss, your risk tolerance, and the specific terms of coverage. This analysis provides a framework for evaluating the cost-effectiveness of crypto insurance across different scenarios."
      toc={[
        { id: "cost-breakdown", title: "cost-breakdown", level: 2 },
        { id: "understanding-insurance-costs", title: "Understanding Insurance Costs", level: 2 },
        { id: "expected-value", title: "expected-value", level: 2 },
        { id: "expected-value-analysis", title: "Expected Value Analysis", level: 2 },
        { id: "when-worth-it", title: "when-worth-it", level: 2 },
        { id: "when-insurance-is-worth-it", title: "When Insurance Is Worth It", level: 2 },
        { id: "when-not", title: "when-not", level: 2 },
        { id: "when-insurance-is-not-worth-it", title: "When Insurance Is Not Worth It", level: 2 }
      ]}
      faqs={[
        { question: "What is the typical cost of DeFi insurance?", answer: "Smart contract cover typically costs 2-6% annually for established protocols and 5-15%+ for newer or higher-risk protocols. The cost is expressed as a percentage of the covered amount per year. A $100,000 position covered at 3% costs $3,000/year." },
        { question: "How do I calculate if insurance is worth it?", answer: "Compare the premium cost to the expected loss: premium vs (probability of exploit times loss amount). If the annual premium is $3,000 and you estimate a 1% annual chance of losing $100,000, the expected loss is $1,000, making the insurance expensive. But if you estimate 5% probability, expected loss is $5,000, making insurance worthwhile." },
        { question: "Does insurance cover all types of loss?", answer: "No. Most DeFi insurance covers only specific events (smart contract exploits). It typically excludes market losses, oracle manipulation, governance attacks, and other risks. This limited coverage scope means you are paying for protection against only a subset of the risks you face." },
      ]}
      relatedArticles={[
        { title: "Self-Insurance Strategies", href: "/insurance/learn/self-insurance-strategies", category: "Insurance" },
        { title: "Smart Contract Cover", href: "/insurance/learn/smart-contract-cover", category: "Insurance" },
        { title: "Lending Risk Management", href: "/defi-lending/learn/lending-risk-management", category: "DeFi Lending" },
      ]}
    >
      <h2 id="cost-breakdown">Understanding Insurance Costs</h2>
      <p>Insurance costs in DeFi are determined by market dynamics. Premiums are priced based on: the perceived risk of the covered protocol (newer and unaudited protocols cost more), the demand for coverage versus available underwriting capital, and the coverage amount and duration. For a typical stablecoin lending position on Aave earning 5% APY, paying 3% for smart contract cover reduces your net yield to 2%. This is a significant reduction that must be weighed against the protection received. Beyond the premium, consider opportunity cost: the premium capital could be earning additional yield if deployed. There may also be gas costs for purchasing and managing insurance positions on Ethereum. Some providers offer discounts for longer coverage periods or larger coverage amounts.</p>

      <h2 id="expected-value">Expected Value Analysis</h2>
      <p>Expected value analysis compares the premium cost to the probability-weighted expected loss. For Aave on Ethereum, a protocol that has operated since 2020 without a core contract exploit and holds billions in TVL, the annual probability of a total fund loss exploit might be estimated at 0.5-2%. For a $100,000 position, the expected annual loss is $500-$2,000. If insurance costs $3,000/year, the premium exceeds the expected loss, making it negative expected value in purely financial terms. However, this analysis ignores the utility of avoiding catastrophic loss. Losing $100,000 may have a disproportionate impact on your finances beyond the mathematical loss. For higher-risk protocols with 5-10% estimated annual exploit probability, the expected value calculation more clearly favors insurance. The challenge is accurately estimating exploit probabilities, which is inherently uncertain.</p>

      <h2 id="when-worth-it">When Insurance Is Worth It</h2>
      <p>Insurance is most justified when: the position is large relative to your total capital (losing it would significantly impact your financial situation), the protocol has a shorter track record or higher perceived risk, you cannot afford the full loss under any circumstances, the premium cost is a small fraction of your expected yield, or institutional or regulatory requirements mandate insurance. For example, a $500,000 position on a newer protocol earning 10% APY where 3% insurance leaves 7% net yield is a reasonable candidate. The position is large enough that loss would be significant, the protocol is risky enough to justify protection, and the remaining yield is still attractive. Insurance also provides psychological benefits: reducing stress about positions allows better decision-making and sleep.</p>

      <h2 id="when-not">When Insurance Is Not Worth It</h2>
      <p>Insurance may not be justified when: positions are small enough that total loss is easily absorbed, the protocol is battle-tested with many years of operation and extensive audits, the insurance premium consumes most of the yield (earning 4% and paying 3% for cover leaves only 1%), you are already well-diversified across many protocols (natural self-insurance), or the insurance coverage is too narrow to protect against the most likely risks you face. For a $5,000 position on Aave earning 5% ($250/year), paying 3% ($150/year) for cover leaves only $100 in net yield. If Aave were exploited, losing $5,000 would be painful but not financially devastating. In this case, self-insurance through diversification is more cost-effective. The key is matching your insurance spending to where it provides the most marginal protection relative to cost.</p>
    </LearnPageLayout>
  );
}
