import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";

export const metadata: Metadata = { title: "What Is Crypto Insurance? Complete Guide (2026)", description: "Learn what crypto insurance is, how it works, what it covers, and why it matters for protecting your digital assets against hacks, exploits, and failures." };

export default function WhatIsCryptoInsurancePage() {
  return (
    <LearnPageLayout title="What Is Crypto Insurance?" categoryName="Insurance" categorySlug="insurance" readTime="8 min"
      intro="Crypto insurance provides financial protection against losses in the cryptocurrency ecosystem. Unlike traditional insurance backed by regulated companies, crypto insurance operates through decentralized protocols and risk pools. This guide explains the different types of crypto insurance, how they work, and how to evaluate whether you need coverage."
      toc={[{ id: "overview", title: "What Is Crypto Insurance?", level: 2 }, { id: "types", title: "Types of Coverage", level: 2 }, { id: "how-it-works", title: "How It Works", level: 2 }, { id: "who-needs-it", title: "Who Needs It?", level: 2 }]}
      faqs={[
        { question: "Is crypto insurance the same as FDIC insurance?", answer: "No. FDIC insurance is government-backed protection for bank deposits. Crypto insurance is provided by private protocols and risk pools. There is no government guarantee behind crypto insurance, and coverage depends on the capital adequacy of the insurance provider." },
        { question: "How much does crypto insurance cost?", answer: "Premiums typically range from 1.5% to 7% of the covered amount per year, depending on the type of coverage, the protocol being insured, and current demand for insurance. Higher-risk protocols command higher premiums." },
        { question: "Can I insure my entire crypto portfolio?", answer: "You can insure specific positions and protocols, but comprehensive portfolio-wide insurance is not commonly available. Most coverage is per-protocol or per-risk-type. Portfolio bundling products from providers like InsurAce can cover multiple protocols at a discount." },
      ]}
      relatedArticles={[{ title: "How to Insure Your Crypto", href: "/insurance/learn/how-to-insure-your-crypto", category: "Insurance" }, { title: "DeFi Insurance: How It Works", href: "/insurance/learn/defi-insurance-how-it-works", category: "Insurance" }]}
    >
      <h2 id="overview">What Is Crypto Insurance?</h2>
      <p>Crypto insurance is a category of financial products designed to protect cryptocurrency holders against specific risks including smart contract exploits, exchange hacks, stablecoin depegs, and protocol failures. The concept emerged from the recognition that the crypto ecosystem lacks the safety nets present in traditional finance, such as FDIC insurance for bank deposits or SIPC protection for brokerage accounts. Most crypto insurance is provided by decentralized protocols that pool capital from underwriters and use it to pay claims when covered events occur. The insurance market has grown significantly as DeFi TVL has expanded, with hundreds of millions in active coverage across multiple providers.</p>

      <h2 id="types">Types of Coverage</h2>
      <p>Crypto insurance covers several distinct risk categories. Smart contract cover protects against losses from code vulnerabilities and exploits in DeFi protocols. Exchange cover provides protection if a centralized exchange is hacked or becomes insolvent. Stablecoin depeg cover pays out if a covered stablecoin loses its peg beyond a specified threshold. Wallet protection covers losses from wallet hacks or key compromise. Protocol cover is a broader category that may include smart contract risk plus additional risks like oracle failure and governance attacks. Each type addresses a specific threat vector, and users can combine multiple covers to build comprehensive protection for their crypto activities.</p>

      <h2 id="how-it-works">How It Works</h2>
      <p>Decentralized crypto insurance operates through a three-party system: cover buyers who pay premiums for protection, capital providers who stake funds to back coverage, and assessors who evaluate claims. When you buy cover, your premium is deposited into the insurance pool. Capital providers earn yields from premiums in exchange for backing policies. If a covered event occurs, you submit a claim with evidence of your loss. The claim is assessed either by community vote (discretionary model) or automatically based on predefined conditions (parametric model). Approved claims are paid from the capital pool. The system is designed so that capital providers are incentivized to accurately price risk and maintain sufficient reserves for potential payouts.</p>

      <h2 id="who-needs-it">Who Needs Crypto Insurance?</h2>
      <p>Crypto insurance is most valuable for users with significant DeFi positions, particularly in newer or less battle-tested protocols. If you have large deposits in lending protocols, liquidity pools, or yield farming strategies, smart contract cover provides meaningful protection against the most common DeFi risk: code exploits. Users who hold large amounts on centralized exchanges may benefit from exchange cover, especially given the history of exchange failures. Stablecoin holders with concentrated positions should consider depeg cover. For small portfolios, the cost of insurance premiums may not justify the coverage. As a general guideline, consider insurance when the potential loss would significantly impact your financial situation and the premium cost is manageable relative to your expected returns.</p>
    </LearnPageLayout>
  );
}
