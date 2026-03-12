import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Smart Contract Security: Audits and Best Practices (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about smart contract security: common vulnerabilities, the audit process, formal verification, bug bounties, and how to evaluate the security of DeFi protocols before using them.",
};

export default function SmartContractSecurityPage() {
  return (
    <LearnPageLayout
      title="Smart Contract Security: Audits and Best Practices"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Smart contract security is one of the most critical aspects of the blockchain ecosystem. Since smart contracts are immutable once deployed and often manage millions or billions in user funds, vulnerabilities can lead to catastrophic, irreversible losses. Billions of dollars have been lost to smart contract exploits throughout DeFi's history. Understanding common vulnerabilities, the audit process, and how to evaluate a protocol's security posture is essential for anyone interacting with decentralized applications."
      toc={[
        { id: "common-vulnerabilities", title: "common-vulnerabilities", level: 2 },
        { id: "common-vulnerabilities", title: "Common Vulnerabilities", level: 2 },
        { id: "audit-process", title: "audit-process", level: 2 },
        { id: "the-audit-process", title: "The Audit Process", level: 2 },
        { id: "beyond-audits", title: "beyond-audits", level: 2 },
        { id: "beyond-audits-bug-bounties-and-formal-verification", title: "Beyond Audits: Bug Bounties and Formal Verification", level: 2 },
        { id: "evaluating-security", title: "evaluating-security", level: 2 },
        { id: "evaluating-protocol-security-as-a-user", title: "Evaluating Protocol Security as a User", level: 2 },
        { id: "incident-response", title: "incident-response", level: 2 },
        { id: "incident-response-and-recovery", title: "Incident Response and Recovery", level: 2 }
      ]}
      faqs={[
        {
          question: "Does an audit guarantee a smart contract is safe?",
          answer:
            "No. Audits significantly reduce risk but cannot guarantee the absence of all bugs. Auditors review the code at a specific point in time and may miss novel attack vectors or complex logic errors. Many exploited protocols had been audited, sometimes by multiple reputable firms. An audit is a necessary but not sufficient condition for smart contract security.",
        },
        {
          question: "How much does a smart contract audit cost?",
          answer:
            "Audit costs vary based on code complexity, scope, and the auditing firm's reputation. A basic audit from a reputable firm starts at $50,000-$100,000 and can exceed $500,000 for large, complex protocols. Top-tier firms like Trail of Bits, OpenZeppelin, and Spearbit command premium rates. While expensive, an audit is a fraction of the potential loss from an exploit.",
        },
        {
          question: "What are the most common smart contract attacks?",
          answer:
            "Reentrancy attacks (where a malicious contract recursively calls the victim), flash loan attacks (using borrowed funds to manipulate prices or state), oracle manipulation (feeding incorrect price data), access control flaws (unauthorized users calling privileged functions), and logic errors (incorrect calculations or state transitions) are among the most frequent attack vectors.",
        },
      ]}
      relatedArticles={[
        { title: "What Are Smart Contracts?", href: "/learn/what-are-smart-contracts", category: "Learn" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn" },
        { title: "Rug Pulls Explained", href: "/learn/rug-pulls-explained", category: "Learn" },
        { title: "Crypto Insurance", href: "/learn/crypto-insurance-options", category: "Learn" },
      ]}
    >
      <section id="common-vulnerabilities">
        <h2>Common Vulnerabilities</h2>
        <p>
          Reentrancy attacks exploit the order of operations in a smart contract. If a contract sends funds before updating its internal state, a malicious recipient contract can call back into the original contract and withdraw funds again before the balance is updated, repeating until the contract is drained. The original DAO hack in 2016, which led to Ethereum's hard fork, was a reentrancy attack. Modern Solidity includes the nonReentrant modifier and checks-effects-interactions pattern to prevent this, but subtle variations continue to appear.
        </p>
        <p>
          Oracle manipulation attacks exploit the price feeds that DeFi protocols rely on for critical functions like liquidations, collateral valuation, and trade execution. An attacker might use flash loans to temporarily manipulate an AMM's price, then interact with a protocol that uses that AMM as a price oracle, profiting from the artificial price before the manipulation is corrected. Access control vulnerabilities occur when administrative functions lack proper authorization checks, allowing unauthorized users to change parameters, pause contracts, or drain funds. Integer overflow and underflow, precision loss in mathematical calculations, and front-running vulnerabilities round out the most common categories.
        </p>
      </section>

      <section id="audit-process">
        <h2>The Audit Process</h2>
        <p>
          A professional smart contract audit typically involves multiple phases. The initial review establishes the scope, documentation, and threat model. Manual code review is the core of the audit, where experienced security researchers read every line of code, trace execution paths, and identify potential vulnerabilities. This is supplemented by automated analysis using static analysis tools, fuzzers, and symbolic execution engines that can explore a vast number of possible execution paths.
        </p>
        <p>
          Findings are classified by severity: critical (immediate risk of fund loss), high (significant risk under certain conditions), medium (potential issues that could become serious), low (best practice recommendations), and informational. The protocol team receives a draft report, addresses the findings, and the auditor verifies the fixes in a follow-up review. The final report is typically published publicly, allowing users to review the findings. A thorough audit of a complex protocol may take 4-8 weeks and involve a team of 2-5 auditors with specialized expertise.
        </p>
      </section>

      <section id="beyond-audits">
        <h2>Beyond Audits: Bug Bounties and Formal Verification</h2>
        <p>
          Bug bounty programs offer financial rewards to security researchers who discover and responsibly disclose vulnerabilities. Major DeFi protocols offer bounties ranging from $10,000 to $10 million for critical findings. Platforms like Immunefi host bug bounty programs for hundreds of crypto projects, creating a continuous security review process that extends well beyond the initial audit. Bug bounties harness the collective expertise of the global security community.
        </p>
        <p>
          Formal verification uses mathematical proofs to verify that a smart contract behaves exactly as specified under all possible conditions. Unlike audits, which rely on human judgment, formal verification provides mathematical certainty about specific properties of the code. Tools like Certora, Halmos, and the K Framework enable teams to prove critical invariants (like "the total supply of tokens never exceeds X" or "only the authorized address can withdraw funds"). While formal verification is expensive and cannot cover all aspects of a complex protocol, it provides the highest level of assurance for critical components.
        </p>
      </section>

      <section id="evaluating-security">
        <h2>Evaluating Protocol Security as a User</h2>
        <p>
          Before depositing funds into any DeFi protocol, check whether it has been audited by reputable firms and read the audit reports for any unresolved critical or high-severity findings. Verify that the deployed contract code matches the audited code by checking the verification status on block explorers. Check whether the protocol has an active bug bounty program and how much has been paid out, which indicates ongoing security investment.
        </p>
        <p>
          Assess the protocol's administrative controls: who has the ability to upgrade contracts, change parameters, or pause functionality? Timelocks (which delay administrative actions, giving users time to exit) and multi-sig admin keys are positive security signals. Protocols where a single externally owned account has admin control over upgradeable contracts represent a significant risk. Also consider the protocol's track record — how long it has been operating, how much TVL it manages, and whether it has successfully handled any security incidents in the past. Longer track records with no major incidents provide more confidence.
        </p>
      </section>

      <section id="incident-response">
        <h2>Incident Response and Recovery</h2>
        <p>
          Even with comprehensive security measures, exploits can occur. Well-prepared protocols have incident response plans that include automated monitoring and alerting systems, emergency pause functionality that can halt operations before an exploit causes maximum damage, communication procedures to inform users quickly, and pre-arranged relationships with security researchers and white-hat groups who can assist in recovery.
        </p>
        <p>
          Post-exploit recovery strategies vary. Some protocols maintain insurance funds or treasury reserves to compensate affected users. White-hat rescues, where friendly security researchers exploit the same vulnerability to secure remaining funds before the attacker can take them, have saved significant amounts. On-chain negotiation, where protocols offer bounties to attackers for returning funds, has been surprisingly effective in several cases. As the ecosystem matures, the combination of proactive security measures and reactive incident response capabilities is becoming a standard requirement for any serious DeFi protocol.
        </p>
      </section>
    </LearnPageLayout>
  );
}
