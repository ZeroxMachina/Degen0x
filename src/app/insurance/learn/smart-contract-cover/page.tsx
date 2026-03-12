import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Smart Contract Cover: How It Works (${CURRENT_YEAR}) | degen0x`,
  description: "Guide to smart contract insurance in DeFi. Learn how cover works, how claims are assessed, and which protocols offer the best protection.",
};

export default function SmartContractCoverPage() {
  return (
    <LearnPageLayout title="Smart Contract Cover: How It Works" categoryName="Crypto Insurance" categorySlug="insurance" readTime="8 min read"
      intro="Smart contract cover is the most established form of DeFi insurance, protecting against financial losses from smart contract bugs, exploits, and vulnerabilities. Protocols like Nexus Mutual pioneered this product category, creating a decentralized insurance marketplace where risk is assessed and underwritten by the community. Understanding how smart contract cover works, its limitations, and how to use it effectively is essential for protecting DeFi positions."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-smart-contract-cover-works", title: "How Smart Contract Cover Works", level: 2 },
        { id: "claims-process", title: "claims-process", level: 2 },
        { id: "the-claims-process", title: "The Claims Process", level: 2 },
        { id: "providers", title: "providers", level: 2 },
        { id: "cover-providers", title: "Cover Providers", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What does smart contract cover protect against?", answer: "Smart contract cover protects against financial losses resulting from unintended code behavior in the covered protocol's smart contracts. This includes bugs, exploits, and vulnerabilities that cause fund loss. It typically does not cover economic design failures, governance attacks, oracle manipulation, or market-driven losses." },
        { question: "How are claims assessed?", answer: "At Nexus Mutual, claims are assessed by community vote. Claim assessors review the evidence (the exploit, the loss, the policy terms) and vote to approve or deny. InsurAce uses a claims committee. Some newer protocols offer parametric or automated claims. Assessment quality varies by provider." },
        { question: "How much does smart contract cover cost?", answer: "Costs range from 2-6% annually for major protocols like Aave and Compound, to 10%+ for newer or higher-risk protocols. Pricing reflects the market's assessment of the protocol's risk. Costs are dynamic and change based on supply and demand for cover." },
      ]}
      relatedArticles={[
        { title: "Yield Insurance", href: "/insurance/learn/yield-insurance", category: "Insurance" },
        { title: "Insurance Claims Process", href: "/insurance/learn/insurance-claims-process", category: "Insurance" },
        { title: "Insurance Cost Analysis", href: "/insurance/learn/insurance-cost-analysis", category: "Insurance" },
      ]}
    >
      <h2 id="how-it-works">How Smart Contract Cover Works</h2>
      <p>Smart contract cover operates through a risk pooling mechanism. Cover purchasers pay premiums to buy protection for specific protocols. Capital providers (underwriters) deposit funds into the insurance pool, earning yield from premiums in exchange for taking on risk. When a covered smart contract is exploited, valid claims are paid from the pool. The premium price is determined by the market: higher demand for cover on riskier protocols drives up premiums, while abundant underwriting capital drives premiums down. This creates a market-driven pricing mechanism for smart contract risk. Cover is typically purchased for specific protocols (e.g., Aave V3 on Ethereum) for specific amounts and durations. You choose the protocol, coverage amount, and period, and pay the corresponding premium.</p>

      <h2 id="claims-process">The Claims Process</h2>
      <p>When a covered protocol is exploited, the policyholder files a claim. At Nexus Mutual, the process involves: submitting the claim with evidence of the exploit and personal loss, a community assessment period where NXM token holders vote on the claim&apos;s validity, and payout if approved by a sufficient majority. The assessment evaluates whether the loss resulted from a covered event (smart contract bug or exploit) and whether the claimant suffered the claimed loss. Historically, Nexus Mutual has paid valid claims including payouts for the Yearn V1 yDAI vault exploit. However, the claims process can be contentious for borderline cases where the cause of loss is not clearly a smart contract bug versus an economic design issue. InsurAce and other providers have their own claims processes, some faster and more streamlined than others. Understanding the claims process before purchasing is important.</p>

      <h2 id="providers">Cover Providers</h2>
      <p>Nexus Mutual is the largest DeFi insurance protocol with the broadest range of covered protocols and the deepest capital pool. It operates on Ethereum and uses NXM tokens for governance and staking. InsurAce offers multi-chain coverage with competitive pricing and a broader range of covered events including stablecoin depeg and bridge failures. Neptune Mutual uses a parametric model for some products, offering faster payouts without traditional claims assessment. Ease.org (formerly Armor) provides aggregated coverage across multiple protocols. Each provider has different strengths: Nexus has the largest track record, InsurAce offers multi-chain and broader event coverage, and Neptune offers faster parametric payouts. Diversifying insurance across multiple providers reduces the risk that a single insurance protocol failure leaves you unprotected.</p>

      <h2 id="best-practices">Best Practices</h2>
      <p>Match coverage to your actual exposure. If you have $50,000 in Aave, get $50,000 in cover, not more or less. Review what events are specifically covered and excluded in the policy terms. Understand the claims process before you need it: know what evidence is required, the assessment timeline, and your obligations as a policyholder. Consider covering your largest and most concentrated positions first. The cost of cover should be weighed against the expected yield: if cover costs 3% and you earn 5%, your effective yield is 2% but with downside protection. Renew coverage before it expires if you maintain the position. Monitor the insurance protocol itself for solvency and governance health. Remember that smart contract cover does not protect against all risks: market risk, oracle risk, and bridge risk require different mitigation strategies.</p>
    </LearnPageLayout>
  );
}
