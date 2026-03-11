import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Smart Contract Development Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn smart contract development from fundamentals to deployment. Covers Solidity, development frameworks, testing, auditing, and best practices for building secure on-chain applications.",
};

export default function SmartContractDevelopmentPage() {
  return (
    <LearnPageLayout
      title="Smart Contract Development Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="11 min"
      intro="Smart contracts are self-executing programs deployed on blockchains that automate agreements without intermediaries. They power DeFi protocols, NFT marketplaces, DAOs, and virtually every Web3 application. For businesses building on blockchain, understanding smart contract development is essential whether you are writing contracts yourself or managing a development team. This guide covers the development lifecycle from language fundamentals through testing, auditing, and deployment, with emphasis on security practices that protect user funds."
      toc={[
        { id: "languages", title: "Smart Contract Languages", level: 2 },
        { id: "frameworks", title: "Development Frameworks and Tools", level: 2 },
        { id: "testing", title: "Testing and Quality Assurance", level: 2 },
        { id: "security", title: "Security Best Practices", level: 2 },
        { id: "deployment", title: "Deployment and Upgradability", level: 2 },
      ]}
      faqs={[
        {
          question: "How long does it take to learn smart contract development?",
          answer:
            "A developer with existing programming experience can learn basic Solidity and deploy simple contracts in 2-4 weeks. Becoming proficient enough to build production-grade DeFi or NFT contracts typically takes 3-6 months of dedicated study and practice. Security expertise that qualifies you to build contracts handling significant funds requires 1-2 years of focused experience including auditing practice.",
        },
        {
          question: "How much does a smart contract audit cost?",
          answer:
            "Audit costs vary based on contract complexity and the audit firm's reputation. Simple token contracts may cost $5,000-$15,000. Complex DeFi protocols can cost $50,000-$300,000 or more for a thorough audit from a top firm. Factors include lines of code, number of external interactions, and the amount of value the contract will handle. Budget for audit costs early in your development timeline.",
        },
        {
          question: "Can smart contracts be updated after deployment?",
          answer:
            "Standard smart contracts are immutable once deployed. However, upgradable contract patterns like proxy contracts allow the logic to be updated while preserving the contract address and stored data. Common patterns include Transparent Proxy and UUPS proxy. Upgradability introduces centralization risk since whoever controls the upgrade key can change the contract behavior. Many projects use timelocks and multisig governance for upgrade authority.",
        },
      ]}
      relatedArticles={[
        { title: "Web3 Security Best Practices", href: "/web3-business/learn/web3-security-best-practices", category: "Web3 Business" },
        { title: "Smart Contract Auditing", href: "/web3-business/learn/smart-contract-auditing", category: "Web3 Business" },
        { title: "Blockchain Scalability Solutions", href: "/web3-business/learn/blockchain-scalability", category: "Web3 Business" },
      ]}
    >
      <h2 id="languages">Smart Contract Languages</h2>
      <p>Solidity is the dominant smart contract language, used for Ethereum and all EVM-compatible chains including Polygon, Arbitrum, Optimism, Base, and BNB Chain. It is a statically-typed, contract-oriented language influenced by JavaScript, C++, and Python. Solidity's large ecosystem means extensive documentation, libraries like OpenZeppelin, and a deep talent pool. Vyper is an alternative EVM language with Python-like syntax that prioritizes simplicity and auditability by intentionally limiting features that can introduce security risks. Rust is used for Solana programs through the Anchor framework and for Cosmos chains through CosmWasm. Move is the language for Aptos and Sui, designed with resource-oriented programming that prevents common smart contract vulnerabilities at the language level. For most EVM projects, Solidity is the practical choice given ecosystem maturity and developer availability.</p>

      <h2 id="frameworks">Development Frameworks and Tools</h2>
      <p>Modern smart contract development relies on frameworks that handle compilation, testing, deployment, and interaction. Foundry is the leading framework for Solidity development, offering blazing-fast compilation and testing with tests written in Solidity itself, which allows developers to stay in a single language. Hardhat remains widely used and provides a JavaScript/TypeScript-based testing environment with excellent plugin support and debugging tools. Both frameworks support local blockchain simulation, gas reporting, and deployment scripting. For Solana development, Anchor provides a framework that simplifies program development with Rust, handling account serialization and instruction parsing. Essential tools include block explorers like Etherscan for contract verification and interaction, Tenderly for transaction simulation and debugging, and OpenZeppelin Contracts for audited, reusable contract components that reduce the need to write security-critical code from scratch.</p>

      <h2 id="testing">Testing and Quality Assurance</h2>
      <p>Testing is the most critical phase of smart contract development because deployed contracts handle real funds and cannot be easily patched. Unit tests should cover every function with both expected behavior and edge cases. Integration tests verify that multiple contracts interact correctly. Fuzz testing generates random inputs to discover unexpected behavior, and Foundry's built-in fuzzer is particularly effective for this. Invariant testing defines properties that should always hold true and attempts to find states where they are violated. Fork testing replays your contracts against mainnet state to verify behavior with real data and existing protocols. Aim for 100% branch coverage in unit tests and conduct extensive fuzz testing for any function that handles funds. Static analysis tools like Slither automatically detect common vulnerability patterns. Formal verification using tools like Certora proves mathematical properties about contract behavior, providing the highest assurance for critical logic. Every test should assert not just what happens but also what should not happen.</p>

      <h2 id="security">Security Best Practices</h2>
      <p>Smart contract security requires defense-in-depth with multiple protective layers. Follow the checks-effects-interactions pattern: validate inputs first, update state second, and make external calls last. This prevents reentrancy attacks where a called contract re-enters the calling function before state is updated. Use OpenZeppelin's ReentrancyGuard for additional protection. Never trust external input: validate all parameters, check for zero addresses, and verify that amounts are within expected ranges. Implement access control using OpenZeppelin's Ownable or AccessControl patterns to restrict sensitive functions. Use SafeERC20 for token interactions to handle non-standard token implementations. Minimize the contract's attack surface by keeping code simple and avoiding unnecessary complexity. Follow the principle of least privilege where contracts only have the permissions they absolutely need. Before mainnet deployment, conduct at least one professional audit from a reputable firm, run a bug bounty program, and deploy to a testnet for extended community testing.</p>

      <h2 id="deployment">Deployment and Upgradability</h2>
      <p>Deployment is the irreversible step where your contracts go live on mainnet. Before deploying, verify all constructor parameters, initial configurations, and access control assignments. Use deployment scripts that are version-controlled and reproducible. Deploy to testnets first and verify all functionality with real transactions. Verify your contract source code on the block explorer immediately after deployment so users and auditors can review the code. For upgradability, proxy patterns like UUPS or Transparent Proxy allow logic updates while preserving the contract address and storage. However, upgradability introduces trust assumptions since the upgrade authority can change contract behavior. Mitigate this risk with timelocked upgrades that give users time to react, multisig control requiring multiple approvals, and governance votes for major changes. Some projects deploy as immutable contracts to maximize trustlessness, accepting that bugs cannot be fixed post-deployment. The choice between immutable and upgradable depends on your project's maturity, the complexity of the logic, and how much user trust you need to establish.</p>
    </LearnPageLayout>
  );
}
