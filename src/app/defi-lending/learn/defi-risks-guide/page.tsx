import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Risks: Impermanent Loss, Smart Contract Risks & More (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Comprehensive guide to DeFi risks. Understand smart contract vulnerabilities, impermanent loss, oracle manipulation, liquidation cascades, and how to protect your funds.",
  keywords: ["DeFi risks", "smart contract risk", "impermanent loss", "DeFi security", "DeFi dangers"],
};

export default function DefiRisksGuidePage() {
  return (
    <LearnPageLayout
      title="DeFi Risks: Impermanent Loss, Smart Contract Risks & More"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="13 min read"
      intro="DeFi offers unprecedented financial opportunities, but it also comes with significant risks that every participant must understand. From smart contract exploits that can drain entire protocols to impermanent loss that quietly erodes LP returns, the DeFi risk landscape is complex and evolving. This guide covers every major risk category, how they manifest, and practical strategies for protecting your capital."
      toc={[
        { id: "smart-contract", title: "smart-contract", level: 2 },
        { id: "smart-contract-risks", title: "Smart Contract Risks", level: 2 },
        { id: "impermanent-loss", title: "impermanent-loss", level: 2 },
        { id: "impermanent-loss-deep-dive", title: "Impermanent Loss Deep Dive", level: 2 },
        { id: "oracle-risk", title: "oracle-risk", level: 2 },
        { id: "oracle-manipulation-failures", title: "Oracle Manipulation & Failures", level: 2 },
        { id: "liquidation", title: "liquidation", level: 2 },
        { id: "liquidation-cascading-risks", title: "Liquidation & Cascading Risks", level: 2 },
        { id: "economic-risks", title: "economic-risks", level: 2 },
        { id: "economic-governance-risks", title: "Economic & Governance Risks", level: 2 },
        { id: "protection", title: "protection", level: 2 },
        { id: "how-to-protect-yourself", title: "How to Protect Yourself", level: 2 }
      ]}
      faqs={[
        { question: "What is the biggest risk in DeFi?", answer: "Smart contract risk is the most catastrophic, as exploits can result in total loss of deposited funds. However, impermanent loss and token depreciation are more common sources of losses for average users." },
        { question: "Can DeFi protocols be hacked?", answer: "Yes. DeFi protocols have lost billions to hacks, exploits, and vulnerabilities. Even well-audited protocols can have undiscovered bugs. No protocol is completely safe, which is why diversification and careful evaluation are essential." },
        { question: "How can I check if a DeFi protocol is safe?", answer: "Check for multiple independent audits, review the team's track record, verify the TVL trend, look for a bug bounty program, assess the governance structure, and review past incident history. Tools like DeFi Safety and L2Beat provide protocol risk ratings." },
        { question: "Should I use DeFi insurance?", answer: "DeFi insurance from protocols like Nexus Mutual can protect against smart contract exploits. It adds cost but provides peace of mind for large positions. The cost-benefit analysis depends on your position size and risk tolerance." },
      ]}
      relatedArticles={[
        { title: "How to Insure DeFi Positions", href: "/defi-lending/learn/defi-insurance-guide", category: "DeFi Lending" },
        { title: "Smart Contract Risks", href: "/defi-lending/learn/smart-contract-risks", category: "DeFi Lending" },
        { title: "Impermanent Loss Guide", href: "/defi-lending/learn/impermanent-loss", category: "DeFi Lending" },
      ]}
    >
      <h2 id="smart-contract">Smart Contract Risks</h2>
      <p>
        Smart contract risk is the most fundamental and potentially devastating risk in DeFi. Despite audits and formal verification, smart contracts can contain bugs that attackers exploit to drain funds. Billions of dollars have been lost to smart contract exploits across DeFi history. Common vulnerability types include reentrancy attacks, flash loan exploits, logic errors in reward calculations, access control failures, and unprotected upgrade mechanisms. Even audited protocols are not immune; audits reduce risk but cannot guarantee safety. The complexity of DeFi composability, where protocols interact with each other, creates additional attack surfaces that may not be apparent in isolation.
      </p>

      <h2 id="impermanent-loss">Impermanent Loss Deep Dive</h2>
      <p>
        Impermanent loss (IL) affects liquidity providers in constant-product AMMs. When the price ratio of pooled tokens diverges from the deposit ratio, arbitrageurs rebalance the pool, leaving LPs with less value than a simple hold strategy. For a standard x*y=k pool, a 2x price change in one token results in about 5.7% IL, a 3x change causes 13.4% IL, and a 5x change causes 25.5% IL. IL becomes permanent when you withdraw. For LP positions to be profitable, earned trading fees plus any token incentives must exceed the IL. Stablecoin pairs and correlated asset pairs (ETH/stETH) minimize IL. Concentrated liquidity positions amplify both fees and IL proportionally.
      </p>

      <h2 id="oracle-risk">Oracle Manipulation &amp; Failures</h2>
      <p>
        DeFi protocols rely on oracles to fetch asset prices from external sources. If an oracle reports an incorrect price, it can trigger wrongful liquidations, enable price manipulation exploits, or cause protocols to make incorrect financial decisions. Oracle manipulation attacks typically use flash loans to skew on-chain price sources like AMM pool ratios. Chainlink and other decentralized oracle networks mitigate this by aggregating data from multiple sources, but even they can have latency issues during extreme volatility. Protocols that use a single oracle source or on-chain TWAP without sufficient delay are particularly vulnerable to manipulation.
      </p>

      <h2 id="liquidation">Liquidation &amp; Cascading Risks</h2>
      <p>
        Borrowers on lending protocols face liquidation risk when their collateral value drops below the required threshold. During sharp market declines, mass liquidations can cascade: forced selling pushes prices lower, triggering more liquidations in a feedback loop. The March 2020 Black Thursday event demonstrated this when MakerDAO saw cascading liquidations that left the protocol with millions in bad debt. To manage liquidation risk, maintain healthy collateral ratios well above the minimum, use stablecoins as collateral where possible, set up monitoring alerts, and keep funds available to add collateral during market drops. Never leverage to the maximum amount.
      </p>

      <h2 id="economic-risks">Economic &amp; Governance Risks</h2>
      <p>
        Economic risks include token emissions inflation that dilutes yields, stablecoin depegging events that can cascade through DeFi, bridge exploits that affect cross-chain assets, and protocol insolvency from accumulated bad debt. Governance risks include malicious proposals that drain treasuries, centralized admin keys that can upgrade contracts, and governance attacks where an entity accumulates enough tokens to pass harmful proposals. Rug pulls, where project creators abandon or drain a protocol, remain a risk particularly for newer projects. Regulatory risk is also growing as governments worldwide develop frameworks that could restrict or alter DeFi operations.
      </p>

      <h2 id="protection">How to Protect Yourself</h2>
      <p>
        Diversify across multiple protocols to limit exposure to any single failure. Use only audited protocols with established track records. Start with small amounts and increase gradually as you gain confidence. Monitor your positions actively using tools like DeBank, Zapper, or Zerion. Set up price alerts and health factor warnings for borrowing positions. Consider DeFi insurance from protocols like Nexus Mutual for large positions. Use hardware wallets for interaction and revoke unnecessary token approvals regularly using tools like Revoke.cash. Stay informed about vulnerabilities through security newsletters and Twitter accounts. Never chase unsustainably high yields without understanding the source and risks.
      </p>
    </LearnPageLayout>
  );
}
