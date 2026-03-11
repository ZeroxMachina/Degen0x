import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Insurance Claims Process Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Filing a DeFi insurance claim involves a process fundamentally different from traditional insurance...",
};

export default function DefiInsuranceClaimsProcessPage() {
  return (
    <LearnPageLayout
      title="DeFi Insurance Claims Process Guide"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="10 min"
      intro="Filing a DeFi insurance claim involves a process fundamentally different from traditional insurance. From incident verification to governance voting and payout distribution, understanding the claims process ensures effective navigation when coverage is needed."
      toc={[
        { id: "section-1", title: "Claims Process Overview", level: 2 },
        { id: "section-2", title: "Filing a Claim", level: 2 },
        { id: "section-3", title: "Assessment and Voting", level: 2 },
        { id: "section-4", title: "Payout and Resolution", level: 2 },
      ]}
      faqs={[
        { question: "How long does a DeFi insurance claim take?", answer: "Claims processing timelines vary by protocol, typically ranging from a few days to several weeks. Governance-based assessment can take longer due to voting periods. Automated systems with on-chain verification tend to be faster." },
        { question: "What evidence do I need for a claim?", answer: "You typically need proof of coverage, evidence of the covered event, proof of loss amount, and transaction records showing your affected positions. Specific requirements vary by insurance protocol." },
      ]}
      relatedArticles={[
        { title: "Crypto Insurance Complete Guide", href: "/insurance/learn/crypto-insurance-complete-guide", category: "Crypto Insurance" },
        { title: "Smart Contract Cover Explained", href: "/insurance/learn/smart-contract-cover-explained", category: "Crypto Insurance" },
        { title: "InsurAce Review", href: "/insurance/reviews/insurace", category: "Crypto Insurance" },
      ]}
    >
      <section id="section-1">
        <h2>Claims Process Overview</h2>
        <p>DeFi insurance claims follow processes defined by each protocol's smart contracts and governance framework. Unlike traditional insurance where a company assesses claims internally, decentralized insurance uses community governance, automated verification, or committee-based assessment to determine claim validity. Understanding the specific process of your insurance provider before an incident occurs ensures you can act quickly and effectively when needed.</p>
        <p>The general claims flow involves incident identification, claim submission with supporting evidence, assessment period where claim validity is evaluated, governance vote or automated verification, and payout distribution if approved. Each step has specific requirements and timelines that vary by protocol. Familiarity with these steps reduces stress and improves outcomes during what is typically a high-pressure situation following a loss event.</p>
      </section>

      <section id="section-2">
        <h2>Filing a Claim</h2>
        <p>Initiate a claim as soon as you identify a covered event by gathering necessary documentation and submitting through the insurance protocol's interface. Required documentation typically includes your active coverage policy details, transaction records showing your affected positions, evidence of the covered event such as exploit transactions, and proof of the loss amount you are claiming for review.</p>
        <p>Time sensitivity matters in claims filing. Most protocols have deadlines for claim submission after a covered event, ranging from days to weeks. Acting quickly ensures you meet filing requirements and preserves relevant on-chain evidence. Document everything thoroughly as incomplete or poorly documented claims are more likely to face challenges during the assessment process and may result in reduced or denied payouts.</p>
      </section>

      <section id="section-3">
        <h2>Assessment and Voting</h2>
        <p>Governance-based assessment involves presenting your claim to the insurance community, where token holders evaluate the evidence and vote on claim validity. This process provides transparency but can be slow and subject to political dynamics within the governance community. Prepare clear, factual claim documentation that makes it easy for voters to verify the covered event and your loss amount.</p>
        <p>Automated assessment systems use on-chain data to verify covered events programmatically. These systems check for specific conditions like material loss of value in covered protocols and can process claims more quickly than governance-based approaches. Some protocols use hybrid models with automated initial assessment followed by governance review for disputed or complex claims.</p>
      </section>

      <section id="section-4">
        <h2>Payout and Resolution</h2>
        <p>Approved claims result in payout from the insurance pool, typically in stablecoins or the protocol's native token. Payout amounts are determined by the lesser of your coverage amount and your actual documented loss. Processing times for approved claims vary but generally range from immediate automated payouts to several days for governance-approved claims that require manual distribution.</p>
        <p>If a claim is denied, most protocols offer appeal mechanisms. Understand the appeal process and requirements before accepting a denial. Some protocols have escalation committees or second-round voting for disputed claims. Learning from both successful and unsuccessful claims in the community helps improve your claim documentation and strategy for future insurance interactions across any protocol.</p>
      </section>
    </LearnPageLayout>
  );
}
