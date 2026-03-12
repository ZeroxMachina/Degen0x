import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "Smart Contract Cover Explained: Protect Against DeFi Exploits (2026)", description: "Learn how smart contract cover works, what it protects against, how to buy it, and how claims are processed when DeFi protocols get hacked." };

export default function SmartContractCoverExplainedPage() {
  return (
    <LearnPageLayout title="Smart Contract Cover Explained" categoryName="Insurance" categorySlug="insurance" readTime="7 min"
      intro="Smart contract cover is the most popular form of DeFi insurance, protecting your deposited funds against losses caused by bugs, vulnerabilities, and exploits in smart contract code. With hundreds of millions lost to DeFi hacks each year, understanding how this coverage works is essential for anyone with significant DeFi positions."
      toc={[
        { id: "what-it-covers", title: "what-it-covers", level: 2 },
        { id: "what-it-covers", title: "What It Covers", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-cover", title: "How to Buy Cover", level: 2 },
        { id: "claims", title: "claims", level: 2 },
        { id: "the-claim-process", title: "The Claim Process", level: 2 },
        { id: "choosing", title: "choosing", level: 2 },
        { id: "choosing-the-right-cover", title: "Choosing the Right Cover", level: 2 }
      ]}
      faqs={[
        { question: "Does smart contract cover protect against rug pulls?", answer: "It depends on the policy. Some providers include malicious actions by protocol teams as covered events, while others only cover technical exploits by external attackers. Always read the cover wording carefully before purchasing." },
        { question: "What if the insurance protocol itself gets hacked?", answer: "This is a real risk in DeFi insurance. Insurance protocols mitigate this through multiple audits, bug bounties, and formal verification. Some users spread coverage across multiple insurance providers to reduce this risk." },
        { question: "How quickly do claim payouts happen?", answer: "Discretionary claims (community vote) typically take 3-14 days. Parametric claims (automatic trigger) can pay out within hours of the triggering event being confirmed. The speed depends on the insurance provider and claim complexity." },
      ]}
      relatedArticles={[{ title: "What Is Crypto Insurance?", href: "/insurance/learn/what-is-crypto-insurance", category: "Insurance" }, { title: "Best Smart Contract Insurance", href: "/insurance/best/smart-contract", category: "Insurance" }]}
    >
      <h2 id="what-it-covers">What Smart Contract Cover Protects Against</h2>
      <p>Smart contract cover protects against financial losses resulting from failures in smart contract code. The specific covered events typically include reentrancy attacks where an attacker exploits a callback vulnerability to drain funds, flash loan exploits that manipulate protocol state within a single transaction, oracle manipulation that feeds incorrect price data to trigger unfair liquidations or swaps, access control failures where unauthorized parties gain admin-level control, economic design exploits that abuse protocol mechanics in unintended ways, and integer overflow or underflow bugs. Coverage does not typically extend to market volatility losses, impermanent loss from liquidity provision, user error like sending tokens to wrong addresses, or phishing attacks targeting individual users rather than protocol code.</p>

      <h2 id="how-to-buy">How to Buy Smart Contract Cover</h2>
      <p>Purchasing smart contract cover is straightforward on most insurance protocols. First, identify which DeFi protocols you have funds deposited in and need coverage for. Then visit an insurance provider like Nexus Mutual, InsurAce, or Neptune Mutual. Select the protocol you want to cover, choose your coverage amount (should match your deposit value), and select the coverage duration (30 days to 365 days). The interface will show the premium cost based on the protocol risk level and current demand. Pay the premium in ETH, stablecoins, or other supported tokens to activate your cover. Keep your cover details and proof of deposit accessible in case you need to file a claim.</p>

      <h2 id="claims">The Claim Process</h2>
      <p>There are two main claim models in DeFi insurance. Discretionary claims require you to submit evidence of loss after an incident, which is then assessed by community members or an advisory board who vote on whether the claim is valid and the loss qualifies under the cover terms. This model is used by Nexus Mutual and InsurAce. Parametric claims trigger automatically when predefined conditions are met, such as a protocol losing a certain percentage of TVL within a specific timeframe. Neptune Mutual uses this model. Parametric claims are faster and avoid subjective disputes but may not cover all loss scenarios. Regardless of the model, documenting your position before and after the incident is critical for successful claims.</p>

      <h2 id="choosing">Choosing the Right Cover</h2>
      <p>When selecting smart contract cover, compare providers on several factors. Check which events are explicitly covered and excluded in the policy wording. Evaluate the insurance provider's capital pool depth relative to total active coverage to ensure claims can be paid. Review the provider's claim history to see if they have actually paid out legitimate claims. Compare premium rates across providers for the same protocol. Consider whether you prefer discretionary or parametric claim assessment. For large positions, you may want to split coverage across multiple providers to diversify your insurance risk. Always ensure your coverage amount matches your actual deposit value, and set calendar reminders to renew before your cover expires.</p>
    </LearnPageLayout>
  );
}
