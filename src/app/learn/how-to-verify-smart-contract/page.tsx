import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Verify a Smart Contract (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to verifying smart contracts on blockchain explorers including source code verification, audit checks, and security assessment techniques.",
  keywords: ["verify smart contract", "smart contract verification", "Etherscan verify", "contract audit", "smart contract security"],
};

export default function HowToVerifySmartContractPage() {
  return (
    <LearnPageLayout title="How to Verify a Smart Contract" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="Verifying smart contracts before interacting with them is a critical safety practice in DeFi. Verification includes checking source code publication, reviewing audit reports, analyzing contract permissions, and assessing risk factors. This guide teaches you practical techniques for evaluating smart contract safety."
      toc={[
        { id: "why-verify", title: "Why Verify Contracts?", level: 2 },
        { id: "source-code", title: "Source Code Verification", level: 2 },
        { id: "audit-review", title: "Reviewing Audits", level: 2 },
        { id: "permissions", title: "Checking Permissions", level: 2 },
        { id: "tools", title: "Verification Tools", level: 2 },
      ]}
      faqs={[
        { question: "What does 'verified' mean on Etherscan?", answer: "A verified contract on Etherscan means the developer has published the source code and it matches the deployed bytecode. This allows anyone to read the code and understand what the contract does. It does not mean the code has been audited or is free of vulnerabilities — it simply means the source code is publicly available." },
        { question: "Should I interact with unverified contracts?", answer: "Unverified contracts should be treated with extreme caution. Without source code, you cannot verify what the contract will do with your funds. While some legitimate contracts may be temporarily unverified, the vast majority of serious projects verify their contracts. Avoid approving tokens or sending funds to unverified contracts." },
        { question: "How do I check if a contract is upgradeable?", answer: "Look for proxy patterns on the block explorer. If the contract shows 'Proxy Contract' and points to an implementation contract, it is upgradeable. Check who has the authority to upgrade (usually a multisig or timelock). Upgradeable contracts can have their logic changed, introducing trust assumptions about the upgrade authority." },
      ]}
      relatedArticles={[
        { title: "Smart Contract Risks", href: "/learn/smart-contract-risks", category: "Learn" },
        { title: "How to Read a Blockchain Explorer", href: "/learn/how-to-read-blockchain-explorer", category: "Learn" },
        { title: "DeFi Exploit Prevention", href: "/learn/defi-exploit-prevention", category: "Learn" },
        { title: "How to Research Crypto", href: "/learn/how-to-research-crypto", category: "Learn" },
      ]}
    >
      <section id="why-verify"><h2>Why Verify Contracts?</h2><p>Every DeFi interaction involves sending transactions to smart contracts that control your funds according to their coded logic. If a contract contains malicious code — hidden functions to drain tokens, ability to block selling, or backdoors for the owner — your funds are at risk the moment you interact. Verifying contracts before interaction is the DeFi equivalent of reading a financial agreement before signing.</p><p>Verification is especially important for new or unfamiliar protocols, token contracts you are considering buying, and any contract you are granting token approvals to. Even seemingly simple token swaps involve interacting with router contracts that handle your tokens — understanding what these contracts can do helps you make informed decisions about which protocols to trust with your assets.</p></section>
      <section id="source-code"><h2>Source Code Verification</h2><p>On Etherscan (or the relevant block explorer), navigate to the contract address and click the "Contract" tab. A green checkmark indicates the source code is verified. Read through the code, paying attention to: owner-only functions (what can the admin do?), transfer functions (are there hidden fees or restrictions?), and any functions that can modify key parameters (pausing, blacklisting, minting).</p><p>Look for common red flags in the source code: functions that can disable transfers for everyone except the owner, unlimited minting capabilities, hidden fee mechanisms, and proxy patterns that allow complete code replacement. If you cannot read Solidity code yourself, use automated analysis tools or look for community analysis of the contract. Well-known protocols typically have extensive community review of their contracts.</p></section>
      <section id="audit-review"><h2>Reviewing Audits</h2><p>Check if the protocol has been audited by reputable security firms. Quality audits come from established firms like Trail of Bits, OpenZeppelin, Consensys Diligence, Certora, and Spearbit. Read the actual audit report, not just the summary — look at the severity of findings, whether critical and high-severity issues were resolved, and the audit's scope (which contracts were covered).</p><p>Be aware of audit limitations: audits are point-in-time reviews and may not cover subsequent code changes. Some protocols use obscure audit firms that provide superficial reviews. Verify audit authenticity by checking the auditor's website for the published report. Multiple audits from different firms provide stronger assurance than a single audit. The absence of any audit for a protocol handling significant funds is a major red flag.</p></section>
      <section id="permissions"><h2>Checking Permissions</h2><p>Examine who has administrative control over the contract. Is ownership held by a single address (risky), a multisig wallet (better), or is ownership renounced (most trustless but prevents bug fixes)? If a timelock is in place, what is the delay period? Longer timelocks give users more time to react to potentially malicious changes. Check if the admin can pause the contract, modify fees, upgrade the implementation, or access user funds.</p><p>For token contracts specifically, check: can the owner mint new tokens (inflationary risk), can the owner blacklist addresses (centralization risk), are there transfer taxes or restrictions, and can the contract be paused. For DeFi protocols, verify: can the owner modify interest rates or collateral requirements, who controls the protocol treasury, and what governance mechanisms exist for parameter changes.</p></section>
      <section id="tools"><h2>Verification Tools</h2><p>Automated tools streamline contract analysis. Token Sniffer scores token contracts for security risks and flags honeypots, hidden minting functions, and suspicious ownership patterns. GoPlus Security API provides real-time contract analysis. De.Fi Scanner evaluates DeFi protocol contracts. Wallet extensions like Pocket Universe and Wallet Guard simulate transactions before you sign, showing the expected outcome.</p><p>DeFiSafety provides protocol-level security assessments covering code, documentation, and operational practices. Certik's Skynet offers real-time security monitoring for supported protocols. For deeper analysis, Tenderly allows transaction simulation so you can preview what a contract interaction will do before executing it on-chain. Building a habit of using these tools before interacting with new contracts significantly reduces your exposure to malicious contracts.</p></section>
    </LearnPageLayout>
  );
}
