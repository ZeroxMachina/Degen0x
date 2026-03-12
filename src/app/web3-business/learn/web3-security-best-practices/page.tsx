import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Web3 Security Best Practices for Businesses (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn essential Web3 security practices for businesses including smart contract auditing, key management, operational security, incident response, and protecting user funds.",
};

export default function Web3SecurityBestPracticesPage() {
  return (
    <LearnPageLayout
      title="Web3 Security Best Practices for Businesses"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Security is the most critical concern for any Web3 business. The irreversible nature of blockchain transactions means that security failures can result in immediate, permanent loss of user funds with no recourse. Billions of dollars have been lost to smart contract exploits, private key compromises, and social engineering attacks. Unlike traditional software where bugs can be patched after discovery, on-chain vulnerabilities are exploited within minutes of detection. This guide covers the comprehensive security practices that Web3 businesses must implement across smart contracts, operations, key management, and incident response."
      toc={[
        { id: "smart-contract-security", title: "smart-contract-security", level: 2 },
        { id: "smart-contract-security", title: "Smart Contract Security", level: 2 },
        { id: "key-management", title: "key-management", level: 2 },
        { id: "key-management-and-access-control", title: "Key Management and Access Control", level: 2 },
        { id: "operational-security", title: "operational-security", level: 2 },
        { id: "operational-security", title: "Operational Security", level: 2 },
        { id: "monitoring-detection", title: "monitoring-detection", level: 2 },
        { id: "monitoring-and-threat-detection", title: "Monitoring and Threat Detection", level: 2 },
        { id: "incident-response", title: "incident-response", level: 2 },
        { id: "incident-response-planning", title: "Incident Response Planning", level: 2 }
      ]}
      faqs={[
        {
          question: "How much should a Web3 company spend on security?",
          answer:
            "Security budgets should be proportional to the value your protocols handle. As a baseline, allocate 10-20% of your development budget to security activities including audits, bug bounties, monitoring, and security tooling. For protocols handling significant TVL, this percentage should be higher. A single audit can cost $20,000-$300,000+, and ongoing bug bounty programs typically reserve 1-5% of TVL for potential payouts. Under-investing in security is a false economy since the cost of a single exploit far exceeds prevention spending.",
        },
        {
          question: "How many audits does a smart contract need?",
          answer:
            "At minimum, any contract handling user funds should receive one audit from a reputable firm before deployment. Critical DeFi protocols typically get 2-3 audits from different firms to get diverse security perspectives. Each significant code change or upgrade should be audited before deployment. Additionally, competitive audit contests on platforms like Code4rena or Sherlock expose code to hundreds of security researchers and often find issues that traditional audits miss.",
        },
        {
          question: "What is the most common cause of Web3 security incidents?",
          answer:
            "Private key compromises account for the largest dollar value of losses. Smart contract vulnerabilities including reentrancy, oracle manipulation, and access control flaws are the most frequent attack type. Social engineering targeting team members through phishing, fake job interviews, and compromised dependencies is increasingly common. Many incidents involve a combination of factors, such as a phished team member whose compromised key had excessive permissions on unaudited contracts.",
        },
      ]}
      relatedArticles={[
        { title: "Smart Contract Development", href: "/web3-business/learn/smart-contract-development", category: "Web3 Business" },
        { title: "Smart Contract Auditing", href: "/web3-business/learn/smart-contract-auditing", category: "Web3 Business" },
        { title: "Blockchain Scalability Solutions", href: "/web3-business/learn/blockchain-scalability", category: "Web3 Business" },
      ]}
    >
      <h2 id="smart-contract-security">Smart Contract Security</h2>
      <p>Smart contract security starts with secure development practices. Use battle-tested libraries like OpenZeppelin for standard functionality rather than writing custom implementations of common patterns. Follow the checks-effects-interactions pattern to prevent reentrancy attacks: validate all conditions first, update state variables second, and make external calls last. Implement comprehensive access control using role-based patterns that restrict sensitive functions to authorized addresses. Minimize the contract's attack surface by keeping code as simple as possible and avoiding unnecessary complexity. Every external call is a potential attack vector. Before deployment, conduct thorough testing including unit tests with 100% branch coverage, fuzz testing with randomized inputs, invariant testing that verifies critical properties always hold, and fork testing against mainnet state. Get at least one professional audit from a reputable firm, and consider additional audits from different firms for critical contracts. Run a bug bounty program through Immunefi with meaningful rewards proportional to the value at risk.</p>

      <h2 id="key-management">Key Management and Access Control</h2>
      <p>Private key management is the single most critical operational security concern. Never store private keys in code repositories, environment variables on servers, or any location accessible to multiple people. Use hardware security modules (HSMs) or institutional custody solutions like Fireblocks or Fordefi for high-value keys. Multisig wallets through Safe (formerly Gnosis Safe) should control all critical protocol functions including treasury, upgrades, and parameter changes. Require multiple independent signers for any significant transaction, typically 3-of-5 or 4-of-7 threshold schemes. Implement timelocks on sensitive operations so the community has time to review and react to proposed changes before they execute. Use separate keys for different functions: deployment, operations, emergency, and treasury, with increasing security requirements for higher-value operations. Rotate keys periodically and immediately revoke access when team members leave. Never allow a single individual to control keys that can affect user funds.</p>

      <h2 id="operational-security">Operational Security</h2>
      <p>Operational security extends beyond smart contracts to the entire team and infrastructure. Require hardware wallets for all team members who interact with protocol contracts. Implement mandatory security training covering phishing recognition, social engineering tactics, and safe transaction signing practices. Use dedicated devices for signing high-value transactions, separate from daily-use computers. Verify all transaction details on the hardware wallet display before signing, not on the screen of a potentially compromised computer. Protect your development pipeline: use signed commits, require code review for all changes, and audit CI/CD configurations for supply chain attack vectors. Dependency management is critical as compromised npm packages and Python libraries have led to exploits. Pin dependency versions, audit updates, and use tools like Socket to scan for malicious packages. Secure your DNS and domain configuration with registrar locks and DNSSEC to prevent domain hijacking that redirects users to malicious frontends. Implement rate limiting and monitoring on your frontend to detect and respond to unusual activity patterns.</p>

      <h2 id="monitoring-detection">Monitoring and Threat Detection</h2>
      <p>Real-time monitoring enables rapid detection of security incidents, often making the difference between partial and total fund loss. Set up transaction monitoring through services like Forta, Tenderly, or OpenZeppelin Defender that alert your team to suspicious on-chain activity. Monitor for abnormal patterns including large withdrawals, unusual function calls, governance proposal submissions, and proxy upgrade attempts. Track your protocol's total value locked and alert on significant changes that might indicate an exploit in progress. Monitor mempool activity for pending transactions targeting your contracts, which can reveal attacks before they settle. Implement circuit breakers in your smart contracts that can pause functionality when anomalous conditions are detected, such as TVL dropping by more than a defined threshold within a short timeframe. Monitor social media and security researcher channels for vulnerability disclosures or exploit discussions related to your protocol. Subscribe to security advisory feeds from audit firms and blockchain security organizations. Establish a 24/7 on-call rotation for security-critical alerts with clear escalation procedures.</p>

      <h2 id="incident-response">Incident Response Planning</h2>
      <p>Every Web3 business needs a documented incident response plan before an incident occurs. The plan should define roles and responsibilities: who leads incident response, who communicates with the community, who coordinates with exchanges, and who handles technical mitigation. Establish communication channels that remain available even if your primary infrastructure is compromised, such as encrypted group chats on Signal with pre-verified team members. Prepare emergency actions including contract pause mechanisms, guardian key activation, and exchange notification procedures. Practice these procedures through tabletop exercises where the team simulates different attack scenarios. When an incident occurs, prioritize protecting remaining funds over investigation. Pause affected contracts immediately if possible. Coordinate with exchanges to freeze stolen assets. Communicate transparently with your community about what happened, what funds are affected, and what steps you are taking. Engage incident response firms like Chainalysis or TRM Labs for fund tracing. After the incident, conduct a thorough post-mortem documenting what happened, how it was detected, what the response was, and what changes will prevent recurrence. Publish the post-mortem to maintain community trust and contribute to the broader ecosystem's security knowledge.</p>
    </LearnPageLayout>
  );
}
