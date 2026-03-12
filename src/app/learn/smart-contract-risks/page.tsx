import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Smart Contract Risks (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Guide to smart contract risks in DeFi including common vulnerabilities, audit limitations, risk assessment strategies, and how to protect your funds.",
  keywords: ["smart contract risks", "smart contract vulnerability", "DeFi risks", "smart contract audit", "reentrancy attack", "flash loan attack"],
};

export default function SmartContractRisksPage() {
  return (
    <LearnPageLayout title="Smart Contract Risks" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="Smart contracts are the foundation of DeFi but also its greatest source of risk. Code vulnerabilities, design flaws, and unexpected interactions between protocols have led to billions in losses. Understanding smart contract risks helps you make informed decisions about which protocols to trust with your funds and how much exposure to take."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "understanding-smart-contract-risk", title: "Understanding Smart Contract Risk", level: 2 },
        { id: "common-vulnerabilities", title: "common-vulnerabilities", level: 2 },
        { id: "common-vulnerabilities", title: "Common Vulnerabilities", level: 2 },
        { id: "economic-attacks", title: "economic-attacks", level: 2 },
        { id: "economic-attacks", title: "Economic Attacks", level: 2 },
        { id: "audits", title: "audits", level: 2 },
        { id: "audits-their-limitations", title: "Audits & Their Limitations", level: 2 },
        { id: "risk-assessment", title: "risk-assessment", level: 2 },
        { id: "assessing-smart-contract-risk", title: "Assessing Smart Contract Risk", level: 2 }
      ]}
      faqs={[
        { question: "Are audited smart contracts safe?", answer: "Audits significantly reduce risk but do not guarantee safety. Audits are point-in-time reviews that may miss subtle vulnerabilities, and new attack vectors are constantly discovered. Some of the largest exploits have occurred on audited protocols. Think of audits as one risk reduction factor, not a guarantee." },
        { question: "What is a reentrancy attack?", answer: "A reentrancy attack exploits a vulnerability where a contract calls an external contract before updating its own state. The external contract calls back into the original contract, which still has the old state, allowing repeated withdrawals or actions. This was the vulnerability behind the original DAO hack in 2016." },
        { question: "What makes a smart contract upgradeable?", answer: "Upgradeable contracts use proxy patterns where the logic can be changed by the contract owner while maintaining the same address and state. While useful for fixing bugs, upgradeability introduces trust assumptions — the upgrade authority can change the contract's behavior at any time, potentially in malicious ways." },
      ]}
      relatedArticles={[
        { title: "DeFi Exploit Prevention", href: "/learn/defi-exploit-prevention", category: "Learn" },
        { title: "Crypto Insurance Guide", href: "/learn/crypto-insurance-guide", category: "Learn" },
        { title: "What Is a Smart Contract?", href: "/learn/what-is-a-smart-contract", category: "Learn" },
        { title: "How to Verify a Smart Contract", href: "/learn/how-to-verify-smart-contract", category: "Learn" },
      ]}
    >
      <section id="overview"><h2>Understanding Smart Contract Risk</h2><p>Smart contracts are immutable programs that control billions of dollars in assets. Unlike traditional software where bugs can be patched through updates, smart contract vulnerabilities may be permanently exploitable unless the contract includes upgrade mechanisms. The immutability that provides trustlessness also means mistakes are permanent. A single vulnerability can drain an entire protocol's funds in seconds.</p><p>The composability of DeFi amplifies smart contract risk — protocols build on and interact with each other, meaning a vulnerability in one contract can cascade across the ecosystem. A lending protocol's security depends not only on its own code but on the security of every token, oracle, and external contract it integrates with. This interconnected risk is unique to DeFi and difficult to fully assess.</p></section>
      <section id="common-vulnerabilities"><h2>Common Vulnerabilities</h2><p>Reentrancy vulnerabilities allow attackers to repeatedly call a function before previous executions complete, draining funds through recursive calls. Integer overflow and underflow bugs can cause unexpected behavior when mathematical operations exceed variable boundaries. Access control failures allow unauthorized users to call privileged functions. Logic errors in business rules can create exploitable conditions that the developers did not anticipate.</p><p>Oracle manipulation vulnerabilities exploit dependencies on price data — attackers can temporarily manipulate the price of assets in low-liquidity pools to trigger favorable conditions in lending protocols (such as borrowing at artificially deflated collateral values). Front-running and sandwich attacks exploit transaction ordering to extract value. Governance attacks exploit voting mechanisms to pass malicious proposals when quorum requirements are low.</p></section>
      <section id="economic-attacks"><h2>Economic Attacks</h2><p>Flash loan attacks use uncollateralized loans (borrowed and repaid in a single transaction) to execute complex economic exploits. An attacker might manipulate a price oracle, exploit the resulting mispricing in a lending protocol, and repay the flash loan — all atomically. These attacks do not require any capital beyond gas fees, making them accessible to sophisticated attackers.</p><p>Economic design flaws can be exploited without any code vulnerability. Token emission models that create unsustainable sell pressure, liquidation mechanisms that cascade during volatility, and incentive structures that can be gamed are all forms of economic risk. These risks are harder to identify through code audits because they involve game theory and market dynamics rather than programming errors.</p></section>
      <section id="audits"><h2>Audits & Their Limitations</h2><p>Smart contract audits involve expert review of code for vulnerabilities, logic errors, and best practice violations. Reputable audit firms (Trail of Bits, OpenZeppelin, Consensys Diligence, Certora) provide valuable security assurance, but audits have inherent limitations. They are point-in-time assessments that may miss novel attack vectors, complex multi-contract interactions, or economic design flaws that require market simulation to detect.</p><p>Multiple audits from different firms provide better coverage than a single audit. Formal verification (mathematical proof that code behaves as specified) provides stronger guarantees than manual review but is expensive and only as good as the specification it verifies against. Bug bounty programs provide ongoing security incentives that complement periodic audits. The most secure protocols combine all of these approaches with time — a protocol that has held significant value for years without incident provides evidence of security that no audit alone can match.</p></section>
      <section id="risk-assessment"><h2>Assessing Smart Contract Risk</h2><p>When evaluating a protocol's smart contract risk, consider: the number and quality of audits, the track record (time in production and value secured without incident), code complexity (simpler protocols have less attack surface), upgradeability (who can modify the contract and with what constraints), team reputation and responsiveness to security issues, and the presence of bug bounty programs with meaningful rewards.</p><p>Practical risk management includes: limiting exposure to any single protocol, using only established protocols for large positions, monitoring security channels for emerging threats, maintaining awareness of your token approval exposure, and keeping informed about audit results and security incidents in protocols you use. The crypto security landscape evolves rapidly, and ongoing vigilance is as important as initial due diligence.</p></section>
    </LearnPageLayout>
  );
}
