import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Radiant vs Aave (${CURRENT_YEAR}) | degen0x`,
  description:
    "Compare Radiant Capital and Aave lending protocols. Analysis of cross-chain lending, tokenomics, rates, and which multi-chain lending protocol to choose.",
};

export default function RadiantVsAavePage() {
  return (
    <LearnPageLayout
      title="Radiant vs Aave"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min read"
      intro="Radiant Capital positioned itself as a cross-chain lending protocol built on LayerZero, aiming to create unified lending markets across multiple chains. Aave is the established leader in DeFi lending with its own multi-chain strategy. This comparison examines how these protocols approach cross-chain lending, their tokenomics, rates, and security profiles to help you decide which is better suited for your lending and borrowing needs."
      toc={[
        { id: "cross-chain-approach", title: "cross-chain-approach", level: 2 },
        { id: "cross-chain-lending-approaches", title: "Cross-Chain Lending Approaches", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "tokenomics-comparison", title: "Tokenomics Comparison", level: 2 },
        { id: "rates-tvl", title: "rates-tvl", level: 2 },
        { id: "rates-and-tvl", title: "Rates and TVL", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "security-considerations", title: "Security Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is Radiant Capital?", answer: "Radiant Capital is a DeFi lending protocol built on LayerZero's cross-chain messaging. It allows users to deposit collateral on one chain and borrow on another. Radiant V2 introduced dynamic liquidity provisioning (dLP) requirements to access RDNT emissions. Note: Radiant suffered a significant exploit in 2024." },
        { question: "How does Aave handle cross-chain lending?", answer: "Aave V3 introduced Portals, a feature that allows approved bridge protocols to mint aTokens on the destination chain, effectively enabling cross-chain liquidity. Aave operates independent deployments on each chain with governance coordinating parameters across all deployments." },
        { question: "Which has higher yields?", answer: "Radiant historically offered higher headline APYs due to RDNT token emissions. However, effective yields depend on RDNT token price and the requirement to lock dLP tokens. Aave's yields come primarily from genuine borrowing demand with some AAVE incentives. Sustainable yield typically favors Aave." },
        { question: "Is Radiant safe to use?", answer: "Radiant suffered a major security exploit in October 2024 where attackers compromised the multisig controlling the protocol, draining approximately $50 million. This highlighted critical security risks with its governance model. Users should exercise extreme caution and review the protocol's current security measures before depositing." },
      ]}
      relatedArticles={[
        { title: "Aave vs Compound", href: "/crypto-loans/compare/aave-vs-compound-lending", category: "Crypto Loans" },
        { title: "Cross-Chain Lending", href: "/defi-lending/learn/cross-chain-lending", category: "DeFi Lending" },
        { title: "Spark vs Aave", href: "/crypto-loans/compare/spark-vs-aave", category: "Crypto Loans" },
      ]}
    >
      <h2 id="cross-chain-approach">Cross-Chain Lending Approaches</h2>
      <p>
        Radiant aimed to solve the liquidity fragmentation problem in DeFi by creating unified lending markets using LayerZero&apos;s omnichain messaging. The vision was to deposit on one chain and seamlessly borrow on another. Radiant V2, deployed on Arbitrum and BNB Chain, implemented cross-chain functionality through LayerZero. However, the practical execution of cross-chain lending introduces complexity and additional trust assumptions. Aave takes a more conservative approach: independent lending markets on each chain, coordinated through governance. Aave V3&apos;s Portal feature allows approved bridges to mint unbacked aTokens on the destination chain, with the backing provided when the bridge completes. This approach is less seamless but introduces fewer new trust assumptions. Aave&apos;s cross-chain governance ensures consistent risk parameters across deployments.
      </p>

      <h2 id="tokenomics">Tokenomics Comparison</h2>
      <p>
        Radiant&apos;s tokenomics centered on RDNT emissions to incentivize deposits and borrowing. Radiant V2 introduced the dLP (dynamic Liquidity Provisioning) mechanism requiring users to lock RDNT/ETH LP tokens worth at least 5% of their deposit value to qualify for RDNT emissions. This aimed to align incentives but created a complex system where users needed to manage both lending positions and LP positions. The dLP requirement meant that raw APY numbers were misleading without factoring in the LP capital requirement. AAVE tokenomics are simpler: AAVE is a governance token with a Safety Module where stakers earn rewards for backstopping the protocol. AAVE incentives on lending markets are more modest but do not require additional capital lock-ups. AAVE has a fee switch potential where protocol revenue could be directed to token holders through governance.
      </p>

      <h2 id="rates-tvl">Rates and TVL</h2>
      <p>
        Aave consistently maintains the highest TVL of any lending protocol, with billions deposited across all chains. This deep liquidity enables competitive rates and low slippage for large positions. Base lending and borrowing rates on Aave are market-driven and reflect genuine supply and demand. Radiant achieved significant TVL during its growth phase, primarily driven by RDNT emissions rather than organic demand. High emissions attracted mercenary capital that left when incentives decreased. Headline APYs on Radiant appeared very attractive when including RDNT rewards, but the underlying base rates from actual borrowing were often comparable to or lower than Aave. When evaluating rates, separate the base lending rate from token incentives, as token rewards are variable and dependent on the governance token&apos;s market price.
      </p>

      <h2 id="security">Security Considerations</h2>
      <p>
        Security is the critical differentiator. Aave has operated since 2020 across multiple chains without a major exploit of its core contracts. The protocol uses a multi-layered security approach including multiple audits, bug bounties, formal verification, and the Safety Module backstop. Aave&apos;s governance process for parameter changes includes timelock delays and guardian multisigs. Radiant suffered a catastrophic exploit in October 2024 when attackers compromised the multisig wallet controlling the protocol, draining approximately $50 million across Arbitrum and BNB Chain. The exploit was a compromise of private keys controlling the multisig rather than a smart contract vulnerability, highlighting governance infrastructure risks. This event severely impacted trust in the protocol. For users evaluating lending protocols, this comparison underscores the importance of governance security, not just smart contract audits, in protocol selection.
      </p>
    </LearnPageLayout>
  );
}
