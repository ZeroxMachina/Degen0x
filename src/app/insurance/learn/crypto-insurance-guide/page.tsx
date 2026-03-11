import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Complete Guide to Crypto Insurance (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Everything you need to know about crypto insurance. Types of coverage, centralized vs decentralized options, costs, and how to choose the right protection for your assets.",
  keywords: ["crypto insurance", "cryptocurrency insurance", "DeFi insurance guide", "crypto asset protection"],
};

export default function CryptoInsuranceGuidePage() {
  return (
    <LearnPageLayout
      title="Complete Guide to Crypto Insurance"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="12 min read"
      intro="Crypto insurance has emerged as a critical tool for protecting digital assets against the unique risks of the cryptocurrency ecosystem. From smart contract exploits and exchange hacks to stablecoin depegging and custodial failures, crypto insurance covers threats that traditional insurance cannot. This comprehensive guide explains every aspect of crypto insurance, from the different types of coverage available to how to evaluate and purchase the right protection for your needs."
      toc={[
        { id: "what-is", title: "What Is Crypto Insurance?", level: 2 },
        { id: "types", title: "Types of Crypto Insurance", level: 2 },
        { id: "centralized-vs-defi", title: "Centralized vs Decentralized Insurance", level: 2 },
        { id: "costs", title: "What Does Crypto Insurance Cost?", level: 2 },
        { id: "choosing", title: "How to Choose the Right Coverage", level: 2 },
        { id: "limitations", title: "Limitations & Exclusions", level: 2 },
      ]}
      faqs={[
        { question: "Is crypto insurance worth it?", answer: "For significant holdings (over $10,000), the 2-6% annual premium is generally worth the protection against catastrophic loss. The value proposition increases with position size. Institutional holders often consider insurance mandatory." },
        { question: "What does crypto insurance NOT cover?", answer: "Most crypto insurance does not cover market crashes, impermanent loss, user errors (sending to wrong addresses), phishing attacks where you approve malicious transactions, or losses from unsupported protocols." },
        { question: "Can I insure my crypto on an exchange?", answer: "Some exchanges have their own insurance funds (like Coinbase's crime insurance or Binance's SAFU fund). For additional protection, decentralized insurance protocols offer custody cover and exchange failure coverage for major platforms." },
        { question: "How do DeFi insurance claims work?", answer: "Claims processes vary by provider. Nexus Mutual uses community voting, InsurAce uses advisory boards, and Neptune Mutual uses parametric triggers. Typical resolution times range from 7 to 30 days." },
      ]}
      relatedArticles={[
        { title: "Exchange Insurance Explained", href: "/insurance/learn/exchange-insurance-explained", category: "Insurance" },
        { title: "Smart Contract Audit Guide", href: "/insurance/learn/smart-contract-audit-guide", category: "Insurance" },
        { title: "Insurance Protocols Compared", href: "/insurance/learn/insurance-protocols-compared", category: "Insurance" },
      ]}
    >
      <h2 id="what-is">What Is Crypto Insurance?</h2>
      <p>
        Crypto insurance provides financial protection against losses specific to cryptocurrency and blockchain activities. Unlike traditional insurance where regulated companies underwrite policies, crypto insurance exists in both centralized and decentralized forms. Centralized options include exchange insurance funds and traditional insurers entering the crypto space. Decentralized options use smart contracts and community governance to pool capital and process claims. The crypto insurance market has grown significantly as the value locked in DeFi protocols and held on exchanges has increased, driving demand for protection against exploits, hacks, and operational failures.
      </p>

      <h2 id="types">Types of Crypto Insurance</h2>
      <p>
        Smart contract cover protects against exploits in specific DeFi protocols. This is the most common type and covers events like reentrancy attacks, flash loan exploits, and economic design failures. Custody cover protects against losses from exchange hacks, custodian insolvency, or internal theft. Stablecoin depeg cover pays out when a covered stablecoin trades below a specified threshold for a defined period. Bridge cover protects against cross-chain bridge exploits. Slashing cover protects proof-of-stake validators against penalties. Some providers also offer bundled coverage that combines multiple types at a discount.
      </p>

      <h2 id="centralized-vs-defi">Centralized vs Decentralized Insurance</h2>
      <p>
        Centralized crypto insurance comes from traditional insurance companies or exchange-managed funds. Coinbase has crime insurance covering certain internal theft and cybersecurity breaches. Exchanges like Binance maintain self-funded insurance reserves (SAFU). Traditional insurers like Lloyd&apos;s of London have started offering crypto custody coverage. Decentralized insurance uses smart contract protocols where community members pool capital, buy cover, and assess claims through governance. Nexus Mutual, InsurAce, and Neptune Mutual are leading decentralized options. Decentralized insurance offers more transparency and composability, while centralized options may provide clearer legal recourse.
      </p>

      <h2 id="costs">What Does Crypto Insurance Cost?</h2>
      <p>
        Premiums for decentralized DeFi insurance typically range from 2 to 6 percent of coverage annually. Battle-tested protocols like Aave and Compound are at the lower end, while newer or more complex protocols command higher premiums. Premiums are dynamically priced based on the ratio of active cover to staked capital, demand for coverage, and the assessed risk of the protocol. Centralized custody insurance costs vary widely based on the provider, coverage amount, and security assessment. The cost is generally justified when compared to the alternative of uninsured exposure to a potential total loss event.
      </p>

      <h2 id="choosing">How to Choose the Right Coverage</h2>
      <p>
        Evaluate your insurance needs based on position size, protocol risk, and risk tolerance. For single-protocol exposure above $10,000, dedicated protocol cover makes sense. For diversified DeFi positions, a portfolio bundle from InsurAce may be more cost-effective. Check the insurer&apos;s capital adequacy: does the total capital pool cover potential claims? Review the claim history: has the insurer paid legitimate claims promptly? Understand the claim assessment process: community vote, advisory board, or parametric. Compare premiums across multiple providers for the same coverage. Consider the insurer&apos;s own smart contract risk, as insurance protocols can also be exploited.
      </p>

      <h2 id="limitations">Limitations &amp; Exclusions</h2>
      <p>
        Crypto insurance has important limitations. Market risk is never covered; if crypto prices crash, no insurance pays out. User errors like phishing, sending funds to wrong addresses, or losing private keys are typically not covered. Losses from unsupported or unassessed protocols fall outside coverage. Some policies have waiting periods before coverage activates. Maximum payout amounts may be less than your total position. Parametric policies only trigger when specific quantitative conditions are met, which may not capture all types of losses. Understanding these limitations is essential to avoid false confidence and to complement insurance with other risk management practices like diversification and security best practices.
      </p>
    </LearnPageLayout>
  );
}
