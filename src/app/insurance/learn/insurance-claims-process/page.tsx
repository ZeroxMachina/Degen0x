import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to File a DeFi Insurance Claim (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Step-by-step guide to filing DeFi insurance claims. Learn the process for Nexus Mutual, InsurAce, and other protocols, plus tips for successful claims.",
};

export default function InsuranceClaimsProcessPage() {
  return (
    <LearnPageLayout title="How to File a DeFi Insurance Claim" categoryName="Crypto Insurance" categorySlug="insurance" readTime="7 min read"
      intro="Filing a DeFi insurance claim can be daunting, especially during the stress of experiencing a protocol exploit. Each insurance provider has its own claims process with specific requirements, timelines, and assessment criteria. Understanding these processes before you need them ensures you can act quickly and effectively when a covered event occurs."
      toc={[{ id: "when-to-file", title: "When to File a Claim", level: 2 }, { id: "documentation", title: "Required Documentation", level: 2 }, { id: "provider-processes", title: "Provider-Specific Processes", level: 2 }, { id: "tips", title: "Tips for Successful Claims", level: 2 }]}
      faqs={[
        { question: "How long does the claims process take?", answer: "Timeframes vary by provider. Nexus Mutual claims typically take 1-3 weeks from filing to resolution. InsurAce aims for faster resolution through their claims committee. Parametric products can pay out within hours of a trigger event. Traditional claims-based products are inherently slower." },
        { question: "What if my claim is denied?", answer: "Most providers have an appeal process. At Nexus Mutual, denied claims can be resubmitted with additional evidence. Understanding why the claim was denied helps strengthen the appeal. Some denials are due to the event not meeting the specific covered event definition rather than a dispute about the loss." },
        { question: "Do I need to prove my loss?", answer: "Yes, for claims-based products. You need to demonstrate that you held funds in the affected protocol during the exploit and suffered a financial loss. On-chain transaction history serves as evidence. For parametric products, individual loss proof is not required since payouts are triggered by the event itself." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Cover", href: "/insurance/learn/smart-contract-cover", category: "Insurance" },
        { title: "Parametric Insurance", href: "/insurance/learn/parametric-insurance", category: "Insurance" },
        { title: "Self-Insurance Strategies", href: "/insurance/learn/self-insurance-strategies", category: "Insurance" },
      ]}
    >
      <h2 id="when-to-file">When to File a Claim</h2>
      <p>File a claim as soon as you confirm that a covered event has occurred and you have suffered a loss. Most policies have a claims filing window (typically 30-90 days after the event). Filing earlier is better because it starts the assessment process sooner. Before filing, verify that your policy was active at the time of the event, the event falls within the covered events definition, and your loss is verifiable on-chain. Do not wait to file hoping the situation will resolve itself. If a protocol is exploited and your funds are lost, even if there is a chance of recovery, filing the claim promptly protects your rights. You can always withdraw the claim if the funds are recovered.</p>

      <h2 id="documentation">Required Documentation</h2>
      <p>Prepare the following before filing: your policy details (policy ID, covered protocol, coverage amount, coverage period), proof of loss (transaction hashes showing your deposits in the affected protocol), evidence of the exploit (links to the exploit transaction, security analysis reports, protocol team announcements), calculation of your loss amount in the covered currency, and your wallet address and identity verification if required. On-chain evidence is the strongest documentation because it is immutable and verifiable. Screenshots of wallet balances before and after the exploit support your claim. Community analyses, audit firm reports, and protocol post-mortems help establish that the event meets the covered event definition.</p>

      <h2 id="provider-processes">Provider-Specific Processes</h2>
      <p>Nexus Mutual: submit a claim through the Nexus Mutual app with your policy ID and evidence. The claim enters a community assessment period where NXM token holders vote. If approved by a majority, the payout is processed. If denied, you can appeal by resubmitting with additional evidence. The process typically takes one to three weeks. InsurAce: file a claim through the InsurAce platform. Their claims committee reviews the evidence and makes a determination. InsurAce aims for faster resolution than community voting models. Neptune Mutual: for parametric products, claims may be processed automatically based on on-chain trigger events. For other products, a reporting and claim submission process applies. Each provider publishes their full claims process documentation. Review this documentation when purchasing cover, not when you need to file.</p>

      <h2 id="tips">Tips for Successful Claims</h2>
      <p>Document everything immediately when an exploit occurs. Take screenshots, save transaction hashes, and note the timeline. Do not move remaining funds until you have documented your position, as this evidence may be needed for the claim. Be thorough and specific in your claim submission: vague descriptions lead to delays and potential denial. Reference specific smart contract functions, transaction hashes, and block numbers. If the insurance community has a discussion forum, follow the exploit discussion to gather supporting evidence and understand how others are framing their claims. Be patient but persistent. Follow up if the assessment timeline extends beyond the published schedule. Connect with other affected policyholders to share information and coordinate. For large losses, consider consulting a lawyer experienced in DeFi to support your claim.</p>
    </LearnPageLayout>
  );
}
