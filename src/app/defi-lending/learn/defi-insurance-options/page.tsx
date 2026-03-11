import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Insurance Options (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Explore DeFi insurance protocols that protect against smart contract failures, hacks, and depegs. Compare Nexus Mutual, InsurAce, and other coverage providers.",
  keywords: ["defi insurance", "smart contract insurance", "nexus mutual", "defi cover"],
};

export default function DefiInsuranceOptionsPage() {
  return (
    <LearnPageLayout
      title="DeFi Insurance Options"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="9 min"
      intro="DeFi insurance provides financial protection against the unique risks of decentralized finance, including smart contract exploits, oracle failures, and stablecoin depegs. While DeFi protocols undergo audits, no code is guaranteed to be bug-free. Insurance protocols offer a way to hedge this residual risk by purchasing coverage that pays out if a covered event occurs. This guide covers the major DeFi insurance options and how to use them."
      toc={[
        { id: "why-defi-insurance", title: "Why DeFi Insurance Matters", level: 2 },
        { id: "major-providers", title: "Major Insurance Providers", level: 2 },
        { id: "coverage-types", title: "Types of Coverage", level: 2 },
        { id: "cost-analysis", title: "Cost Analysis", level: 2 },
        { id: "claims-process", title: "Claims Process", level: 2 },
      ]}
      faqs={[
        { question: "Is DeFi insurance worth the cost?", answer: "For large positions, insurance is generally worthwhile as a risk management tool. The cost typically ranges from 2-5% annually, which is reasonable compared to the potential total loss of funds from a smart contract exploit. For smaller positions, the cost may exceed the expected benefit." },
        { question: "What does DeFi insurance NOT cover?", answer: "Most DeFi insurance does not cover impermanent loss, market price declines, rug pulls by anonymous teams, or losses from user error like sending funds to wrong addresses. Coverage is specifically for defined events like smart contract exploits and protocol-specific failures." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Audit Guide", href: "/defi-lending/learn/smart-contract-audit-guide", category: "DeFi Lending" },
        { title: "DeFi Risk Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
      ]}
    >
      <section id="why-defi-insurance">
        <h2>Why DeFi Insurance Matters</h2>
        <p>Despite rigorous auditing and formal verification, smart contract exploits remain a persistent risk in DeFi. Hundreds of millions of dollars have been lost to exploits across the ecosystem. Unlike traditional financial services where deposits may be insured by government programs like FDIC, DeFi offers no default protection. When funds are lost to an exploit, there is typically no recourse. DeFi insurance fills this gap by allowing users to transfer risk to a pool of capital providers who earn premiums in exchange for covering potential losses. For institutional investors and larger retail participants, insurance coverage is becoming a standard part of DeFi risk management alongside diversification and protocol due diligence. The insurance layer also benefits the broader ecosystem by providing a market-based price signal for protocol risk.</p>
      </section>
      <section id="major-providers">
        <h2>Major Insurance Providers</h2>
        <p>Nexus Mutual is the largest DeFi insurance provider, operating as a mutual where members pool funds to cover claims. It offers protocol-specific coverage and uses a claims assessment process where members vote on claim validity. InsurAce provides multi-chain coverage across Ethereum, BSC, Polygon, and other networks with competitive pricing and portfolio-based coverage that bundles multiple protocols. Unslashed Finance offers coverage for a variety of DeFi risks including exchange hacks and stablecoin depegs. Neptune Mutual provides parametric coverage that pays out automatically based on predefined trigger conditions without requiring manual claims assessment. Risk Harbor also uses parametric triggers for faster, more deterministic payouts. Each provider has different strengths, coverage availability, and pricing models, so comparing across providers for your specific needs is important.</p>
      </section>
      <section id="coverage-types">
        <h2>Types of Coverage</h2>
        <p>Protocol cover protects against smart contract vulnerabilities in specific DeFi protocols. If the covered protocol suffers an exploit resulting in fund loss, policyholders can file claims. Stablecoin depeg cover protects against a stablecoin losing its peg beyond a defined threshold for a sustained period. This became highly relevant after the UST collapse and USDC depeg scare. Custodial cover protects against losses from centralized exchange hacks or insolvency. Bundled or portfolio cover allows you to insure multiple protocol positions under a single policy, often at a discount compared to individual policies. Slashing cover for liquid staking protects against validator penalties that could reduce the value of staked assets. Some providers also offer bridge cover for cross-chain bridge exploits, which have historically been one of the largest sources of DeFi losses.</p>
      </section>
      <section id="cost-analysis">
        <h2>Cost Analysis</h2>
        <p>Insurance premiums in DeFi typically range from 2% to 8% of the covered amount annually, depending on the perceived risk of the protocol and the duration of coverage. Well-established protocols like Aave and Compound tend to have lower premiums due to their long track records and extensive auditing. Newer or more complex protocols command higher premiums reflecting greater uncertainty. The cost of insurance should be weighed against the yield earned from the covered position. If you are earning 5% APY on a lending position and insurance costs 3%, your net yield drops to 2%, but you gain significant downside protection. For leveraged positions where the loss could exceed your principal, insurance becomes proportionally more valuable. Premium rates are dynamic and adjust based on capital availability and demand for coverage, similar to how lending rates adjust based on utilization.</p>
      </section>
      <section id="claims-process">
        <h2>Claims Process</h2>
        <p>The claims process varies significantly between providers. Nexus Mutual uses a community governance-based claims assessment where token holders vote on whether a claim is valid. This process can take several days and introduces subjectivity, though it has generally functioned well for clear-cut exploit events. Parametric insurance providers like Neptune Mutual and Risk Harbor use predefined trigger conditions, such as a protocol's TVL dropping by more than a specified percentage within a timeframe. When the trigger condition is met, payouts are automatic without requiring individual claims. This provides faster, more predictable payouts but may not cover all loss scenarios. When purchasing coverage, understand the specific conditions required for a valid claim, any waiting periods before coverage begins, the maximum payout relative to your position, and the expected timeline from claim submission to payout.</p>
      </section>
    </LearnPageLayout>
  );
}
