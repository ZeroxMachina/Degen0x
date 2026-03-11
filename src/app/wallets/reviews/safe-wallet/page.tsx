import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Safe (Gnosis Safe) Wallet Review (${CURRENT_YEAR}) - Best Multisig Wallet? | ${SITE_NAME}`,
  description: `Detailed Safe wallet review for ${CURRENT_YEAR}. Covers multi-signature security, DAO treasury management, spending policies, and institutional features.`,
};

const product = {
  name: "Safe (Gnosis Safe)",
  slug: "safe-wallet",
  rating: 4.6,
  description: "Safe is the industry-standard multisig wallet securing over $100 billion in digital assets, used by DAOs, protocols, and institutions for shared treasury management.",
  pros: [
    "Battle-tested multisig securing over $100B in assets",
    "Highly configurable M-of-N signer thresholds",
    "Extensive app ecosystem with transaction builder and batching",
    "Open source with multiple independent security audits",
  ],
  cons: [
    "Not designed for individual everyday wallet use",
    "Smart contract interactions incur higher gas costs",
    "Requires coordination between multiple signers for transactions",
  ],
  bestFor: "DAOs, teams, and institutions requiring shared custody with multi-signature approval",
  affiliateUrl: "#",
  category: "wallets",
};

const overview = `Safe, formerly known as Gnosis Safe, is the most widely adopted multisig wallet in the crypto ecosystem. It secures treasuries for thousands of DAOs, DeFi protocols, and institutional users, with over $100 billion in total assets under protection. The core concept is straightforward — instead of a single private key controlling funds, Safe requires multiple pre-designated signers to approve each transaction. A typical configuration might require 3 out of 5 designated signers to approve any outgoing transaction, ensuring no single individual can move funds unilaterally.

Safe operates as a smart contract wallet deployed on Ethereum and more than a dozen other EVM-compatible chains including Arbitrum, Optimism, Polygon, Base, Avalanche, and BNB Chain. The web interface provides a clean dashboard for creating transactions, reviewing pending approvals, and managing signers. Safe also offers an extensive ecosystem of apps and modules that extend functionality, including transaction builders for batching multiple operations, spending allowances for recurring payments, and recovery modules. For any organization that needs shared custody of crypto assets with transparent governance, Safe is the clear industry standard.`;

const sections = [
  {
    id: "multisig-security",
    title: "Multi-Signature Security Model",
    content: "The foundation of Safe is its M-of-N multisig model. When creating a Safe, you specify a list of owner addresses and a threshold — for example, 3-of-5 means any three of the five designated owners must sign a transaction for it to execute. This model protects against single points of failure: a compromised signer cannot steal funds alone, a lost key does not lock out the treasury, and insider threats are mitigated by requiring consensus. The threshold and owner list can be modified by the existing owners through the same multisig approval process, allowing governance to evolve over time. Safe supports any standard Ethereum address as a signer, including hardware wallets like Ledger and Trezor, other Safe wallets for nested multisig, and even smart contract signers for automated approval workflows.",
  },
  {
    id: "transaction-management",
    title: "Transaction Creation & Approval Workflow",
    content: "Creating a transaction in Safe follows a structured workflow. Any owner can propose a transaction — whether a simple ETH transfer, token send, or complex smart contract interaction. The proposal is shared with other owners who can review the transaction details, simulate its outcome, and either approve or reject it. Once the required number of signatures is collected, any owner can execute the transaction on-chain. The interface displays pending transactions clearly with signer status, showing who has approved and who has yet to review. For time-sensitive operations, owners receive notifications through email or integrated communication channels. The transaction builder allows you to compose complex multi-step operations — for example, approving a token and swapping it in a single batched transaction — reducing gas costs and execution risk.",
  },
  {
    id: "app-ecosystem",
    title: "Safe Apps Ecosystem",
    content: "Safe features an extensive app ecosystem that extends its functionality far beyond basic transfers. The Transaction Builder lets you create custom contract interactions and batch multiple operations into a single transaction. WalletConnect integration allows you to connect your Safe to any dApp that supports it. Dedicated modules include spending allowances for recurring payments to team members, recovery modules for social recovery setups, and role-based access controls for complex organizational hierarchies. Third-party apps integrated directly into the Safe interface include major DeFi protocols like Aave, Uniswap, and Lido, as well as DAO governance tools like Snapshot. This app ecosystem means teams can manage virtually all their on-chain operations from within the Safe interface.",
  },
  {
    id: "institutional-features",
    title: "Institutional & DAO Features",
    content: "Safe includes features specifically designed for institutional and DAO use cases. Spending policies allow designated signers to execute transactions up to a certain value without full multisig approval, streamlining operational payments while maintaining oversight for larger transfers. The audit trail provides a complete, on-chain record of every transaction including who proposed it, who signed it, and when it executed. Integration with governance platforms like Snapshot allows DAOs to link on-chain execution directly to governance vote outcomes. Safe also supports delegate keys that can propose transactions but not sign them, useful for operations teams that need to prepare transactions for leadership approval. Multi-chain deployment means DAOs operating across multiple networks can use the same Safe addresses and signer configurations.",
  },
];

const fees: Record<string, string> = {
  "Safe Creation": "Gas fee for deploying the smart contract",
  "Transaction Execution": "Gas fee (higher than EOA due to contract logic)",
  "Signature Collection": "Free (off-chain signatures)",
  "Safe Web Interface": "Free to use",
  "Module Deployment": "Gas fee per module activation",
  "Multi-Chain Deployment": "Gas fee per chain",
};

const security = [
  "Battle-tested multisig with $100B+ in secured assets",
  "Fully open-source codebase with multiple audits",
  "Configurable M-of-N signature thresholds",
  "Formal verification of core smart contracts",
  "Hardware wallet support for all signers",
  "Time-locked module changes for governance safety",
  "On-chain audit trail for complete transaction history",
];

const features = [
  "Configurable multi-signature wallet with M-of-N thresholds",
  "Transaction builder for batched and custom operations",
  "Extensive Safe Apps ecosystem with DeFi integration",
  "Spending allowances for recurring operational payments",
  "Multi-chain deployment on 15+ EVM networks",
  "WalletConnect for external dApp connectivity",
  "Recovery modules for social recovery configurations",
  "Complete on-chain audit trail and transaction history",
];

const faqs = [
  {
    question: "Is Safe suitable for individual users?",
    answer: "Safe is primarily designed for teams, DAOs, and institutional users who need shared custody. Individual users can create a Safe with a single signer, but there is little advantage over a standard wallet in that configuration. The value of Safe comes from requiring multiple approvals for transactions. Individual users looking for enhanced security should consider a 2-of-3 configuration with their own devices — for example, a phone, hardware wallet, and backup device — to create a personal multisig for high-value holdings.",
  },
  {
    question: "What happens if a signer loses their key?",
    answer: "If a signer loses their private key, the remaining signers can execute a transaction to remove the compromised address and add a replacement. This requires the existing threshold of signatures. For this reason, it is critical that your threshold is set lower than your total number of signers — a 3-of-5 setup can tolerate up to 2 key losses while a 3-of-3 setup would be locked out if any single key is lost.",
  },
  {
    question: "How much does it cost to use Safe?",
    answer: "The Safe interface is free to use. Costs come from on-chain gas fees: deploying a new Safe, executing transactions, and activating modules all require gas. Because Safe is a smart contract wallet, transaction gas costs are higher than a standard wallet — typically 30-50% more for simple transfers. However, the transaction builder's batching capability can offset this by combining multiple operations into a single transaction.",
  },
];

const relatedReviews = [
  { name: "Argent", slug: "argent" },
  { name: "Ledger", slug: "ledger" },
  { name: "GridPlus", slug: "gridplus" },
];

const relatedGuides = [
  { title: "Multisig Setup Guide", href: "/wallets/learn/multisig-setup-guide" },
  { title: "Smart Contract Wallets", href: "/wallets/learn/smart-contract-wallets" },
  { title: "Best Security Wallets", href: "/wallets/best/security" },
];

export default function SafeWalletReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      overview={overview}
      sections={sections}
      fees={fees}
      security={security}
      features={features}
      faqs={faqs}
      relatedReviews={relatedReviews}
      relatedGuides={relatedGuides}
    />
  );
}
