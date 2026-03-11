import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Smart Contract Audit Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how to evaluate smart contract audits for DeFi protocols. Understand audit firms, common vulnerabilities, and what makes a protocol secure.",
  keywords: ["smart contract audit", "defi security", "audit guide", "protocol security"],
};

export default function SmartContractAuditGuidePage() {
  return (
    <LearnPageLayout
      title="Smart Contract Audit Guide"
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      readTime="10 min"
      intro="Smart contract audits are the primary line of defense against code vulnerabilities in DeFi protocols. Before depositing funds, understanding how to evaluate a protocol's audit history, the reputation of auditing firms, and the limitations of audits themselves is critical for protecting your assets. This guide explains the audit process, what to look for, and how to assess the security posture of any DeFi protocol."
      toc={[
        { id: "what-are-audits", title: "What Are Smart Contract Audits", level: 2 },
        { id: "audit-firms", title: "Top Audit Firms", level: 2 },
        { id: "reading-audits", title: "How to Read an Audit Report", level: 2 },
        { id: "beyond-audits", title: "Security Beyond Audits", level: 2 },
        { id: "evaluating-security", title: "Evaluating Protocol Security", level: 2 },
      ]}
      faqs={[
        { question: "Does an audit guarantee a protocol is safe?", answer: "No. Audits significantly reduce risk but cannot guarantee safety. Auditors may miss vulnerabilities, and new attack vectors emerge over time. Multiple audits from different firms, active bug bounties, and formal verification provide stronger security assurances than a single audit." },
        { question: "How much does a smart contract audit cost?", answer: "Audit costs range from $50,000 to $500,000+ depending on code complexity, audit firm reputation, and timeline. Top firms like Trail of Bits or OpenZeppelin command premium prices. The cost is a fraction of the TVL these protocols secure." },
      ]}
      relatedArticles={[
        { title: "DeFi Risk Guide", href: "/defi-lending/learn/defi-risks-guide", category: "DeFi Lending" },
        { title: "DeFi Insurance Options", href: "/defi-lending/learn/defi-insurance-options", category: "DeFi Lending" },
      ]}
    >
      <section id="what-are-audits">
        <h2>What Are Smart Contract Audits</h2>
        <p>A smart contract audit is a systematic review of a protocol's code by external security experts. Auditors examine the codebase for vulnerabilities, logic errors, gas optimization issues, and deviations from best practices. The process typically involves manual code review by experienced security researchers combined with automated analysis tools. Auditors test edge cases, review access controls, check for common vulnerability patterns like reentrancy and integer overflow, and verify that the code behaves as documented. The audit culminates in a report that categorizes findings by severity, from critical vulnerabilities that could result in fund loss to informational notes about code quality. Protocols then address the findings, and the auditor verifies the fixes in a follow-up review. A thorough audit of a complex lending protocol typically takes four to eight weeks depending on code size and complexity.</p>
      </section>
      <section id="audit-firms">
        <h2>Top Audit Firms</h2>
        <p>Several audit firms have established strong reputations in the DeFi space. Trail of Bits is considered one of the most rigorous, known for deep technical analysis and developing security tooling like Slither and Echidna. OpenZeppelin combines audit services with widely-used standard contract libraries, bringing deep expertise in token and access control patterns. Consensys Diligence offers comprehensive audits backed by Ethereum ecosystem expertise. Spearbit operates a distributed model with top individual security researchers collaborating on audits. ChainSecurity specializes in formal verification alongside traditional auditing. Certora provides formal verification services that mathematically prove certain properties of smart contracts. Smaller but respected firms include Zellic, Cyfrin, and Cantina. When evaluating a protocol's audit, consider the reputation of the specific firm and whether the protocol has been audited by multiple independent teams.</p>
      </section>
      <section id="reading-audits">
        <h2>How to Read an Audit Report</h2>
        <p>Audit reports follow a standard structure. The executive summary provides an overview of the scope, approach, and key findings. Findings are categorized by severity: critical issues that could lead to fund loss, high-severity issues with significant impact, medium issues with moderate risk, low-severity observations, and informational notes. For each finding, the report describes the vulnerability, its potential impact, and a recommended fix. Pay close attention to how the protocol responded to findings. All critical and high findings should be addressed with verified fixes. Unresolved or acknowledged findings require understanding the protocol's rationale for acceptance. Look for the audit's scope to ensure it covers the contracts you will interact with, as protocols sometimes only audit partial codebases. Check the date of the audit relative to the current deployed code, since post-audit changes may introduce new vulnerabilities.</p>
      </section>
      <section id="beyond-audits">
        <h2>Security Beyond Audits</h2>
        <p>Robust security extends well beyond audits. Bug bounty programs incentivize white-hat hackers to find and report vulnerabilities. Major protocols offer bounties ranging from $10,000 to $10 million through platforms like Immunefi. Formal verification uses mathematical proofs to verify specific properties of smart contracts, providing stronger guarantees than manual review for the properties verified. On-chain monitoring services like Forta and OpenZeppelin Defender detect suspicious transactions in real-time. Timelocks on governance actions give users time to exit if malicious proposals pass. Multi-signature administration prevents single points of failure in protocol management. Insurance coverage through Nexus Mutual or InsurAce provides financial protection against smart contract failures. The most secure protocols combine multiple layers of defense rather than relying on any single security measure.</p>
      </section>
      <section id="evaluating-security">
        <h2>Evaluating Protocol Security</h2>
        <p>When assessing a DeFi protocol's security, create a comprehensive checklist. Has it been audited by at least two reputable firms? Are all critical findings resolved? Is there an active bug bounty program with meaningful rewards? How long has the protocol operated without incidents? Is the code open-source and verifiable? Are admin keys protected by multi-sig wallets and timelocks? Does the protocol have a track record of responsible vulnerability disclosure? What is the total value locked, and has the code been battle-tested at that TVL level? Are there circuit breakers or emergency pause mechanisms? The combination of these factors gives a more complete picture than any single metric. Newer protocols inherently carry more risk than established ones, regardless of audit quality, simply because they have less battle-testing under real-world conditions.</p>
      </section>
    </LearnPageLayout>
  );
}
