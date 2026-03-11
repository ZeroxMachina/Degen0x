import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Insure Your DeFi Positions (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to protect your DeFi positions with decentralized insurance. Compare protocols, understand coverage types, and learn when insurance is worth the cost.",
  keywords: ["DeFi insurance", "insure DeFi", "smart contract cover", "DeFi protection", "Nexus Mutual"],
};

export default function DefiInsuranceGuidePage() {
  return (
    <LearnPageLayout
      title="How to Insure Your DeFi Positions"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min read"
      intro="DeFi insurance provides financial protection against smart contract exploits, protocol failures, and other covered events. As billions continue to be lost to DeFi hacks, insurance has evolved from a niche product to an essential risk management tool for serious DeFi participants. This guide explains how to evaluate, purchase, and manage DeFi insurance to protect your positions."
      toc={[
        { id: "why-insure", title: "Why Insure Your DeFi Positions?", level: 2 },
        { id: "coverage-types", title: "Types of DeFi Coverage", level: 2 },
        { id: "protocols", title: "Major Insurance Protocols", level: 2 },
        { id: "cost-benefit", title: "Cost-Benefit Analysis", level: 2 },
        { id: "how-to-buy", title: "How to Buy DeFi Insurance", level: 2 },
        { id: "claims", title: "Making a Claim", level: 2 },
      ]}
      faqs={[
        { question: "Is DeFi insurance worth it?", answer: "For large positions (over $10,000), the 2-6% annual cost is often worth the protection against a potential total loss. For smaller positions, the cost may exceed the expected value of protection. Consider it mandatory for six-figure or larger DeFi positions." },
        { question: "What does DeFi insurance cover?", answer: "Most DeFi insurance covers smart contract exploits, economic design failures, oracle manipulation, and governance attacks against specific protocols. It does not typically cover impermanent loss, market crashes, or user errors like sending funds to wrong addresses." },
        { question: "How are DeFi insurance claims processed?", answer: "Claims are typically assessed by community vote (Nexus Mutual), advisory board (InsurAce), or parametric triggers (Neptune Mutual). The process usually takes 7-30 days from incident to payout, depending on the protocol and the complexity of the claim." },
        { question: "Can I insure positions on any chain?", answer: "Coverage availability varies. Ethereum protocols have the widest coverage. Multi-chain insurers like InsurAce offer coverage across multiple networks. Availability depends on which protocols the insurance provider has assessed and priced." },
      ]}
      relatedArticles={[
        { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
        { title: "Smart Contract Risks", href: "/defi-lending/learn/smart-contract-risks", category: "DeFi Lending" },
        { title: "What is Crypto Insurance", href: "/insurance/learn/what-is-crypto-insurance", category: "Insurance" },
      ]}
    >
      <h2 id="why-insure">Why Insure Your DeFi Positions?</h2>
      <p>
        DeFi protocols have lost over $10 billion to exploits, hacks, and failures since 2020. Even the most trusted protocols with multiple audits have been exploited. Smart contract insurance provides financial recovery when the worst happens. The math is straightforward: paying 3-5% annually to protect against a potential 100% loss is rational for any significant DeFi position. Insurance also enables more aggressive yield strategies by capping your downside. Without insurance, a single exploit could wipe out years of accumulated yield. For institutional DeFi participants, insurance is often a compliance requirement rather than an optional extra.
      </p>

      <h2 id="coverage-types">Types of DeFi Coverage</h2>
      <p>
        Protocol cover protects against smart contract exploits and economic design failures of a specific protocol. This is the most common type and covers events like reentrancy attacks, flash loan exploits, and oracle manipulation. Custody cover protects against losses from centralized exchange failures or custodian insolvency. Stablecoin depeg cover pays out if a stablecoin loses its peg beyond a specified threshold. Bridge cover protects against cross-chain bridge exploits. Slashing cover protects validators against slashing penalties. Each type has specific terms defining what constitutes a covered event, the payout conditions, and any exclusions.
      </p>

      <h2 id="protocols">Major Insurance Protocols</h2>
      <p>
        Nexus Mutual is the largest DeFi insurance provider with the deepest capital pool and most proven claim history, though it requires KYC. InsurAce offers multi-chain coverage without KYC and portfolio bundling discounts. Neptune Mutual uses parametric triggers for faster, more objective payouts. Unslashed Finance provides coverage with unique features like capital efficiency and a DeFi-native approach. Risk Harbor offers algorithmic insurance with automated payouts for certain events. Each protocol has different strengths in terms of coverage breadth, claim processes, pricing, and capital requirements. Comparing across multiple providers is recommended for the best terms.
      </p>

      <h2 id="cost-benefit">Cost-Benefit Analysis</h2>
      <p>
        DeFi insurance premiums typically range from 2 to 6 percent annually, depending on the protocol being covered and market conditions. To determine if insurance is worthwhile, compare the annual premium cost against your expected yield and the probability of a loss event. If you are earning 10% APY on Aave and pay 2.5% for insurance, your net yield is 7.5% with the assurance that you will not lose your principal to an exploit. For a $50,000 position, the $1,250 annual premium protects against a potential $50,000 loss. The larger the position, the more compelling the math becomes. Consider that the probability of any given protocol being exploited in a year is not zero.
      </p>

      <h2 id="how-to-buy">How to Buy DeFi Insurance</h2>
      <p>
        To purchase DeFi insurance, visit the insurance protocol&apos;s website (such as app.nexusmutual.io or app.insurace.io). Select the protocol you want to cover, choose your coverage amount and duration (typically 30 to 365 days), and pay the premium in ETH, stablecoins, or the insurer&apos;s native token. On Nexus Mutual, you must first become a member by completing KYC. On InsurAce, no KYC is required. Compare prices across providers for the same coverage, as premiums can vary significantly. After purchasing, keep records of your cover policy including the start date, amount, and covered protocol for claim purposes.
      </p>

      <h2 id="claims">Making a Claim</h2>
      <p>
        When a covered incident occurs, file a claim through the insurance protocol&apos;s interface. Provide evidence of the incident and proof that you had active coverage at the time. Nexus Mutual uses community voting for claim assessment, typically taking 3-7 days. InsurAce uses an advisory board followed by community confirmation, usually 7-14 days. Neptune Mutual uses parametric triggers that can pay out almost immediately if the trigger conditions are met. If your initial claim is denied, most protocols offer an appeals process. Documenting your positions, coverage details, and the incident timeline increases the likelihood of a successful claim. Keep in mind that insurance does not cover all types of losses.
      </p>
    </LearnPageLayout>
  );
}
