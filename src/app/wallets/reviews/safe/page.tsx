import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "safe")!;

export const metadata: Metadata = {
  title: `Safe (Gnosis Safe) Review (${CURRENT_YEAR}) - Best Multi-Sig Wallet | ${SITE_NAME}`,
  description: `Complete Safe wallet review for ${CURRENT_YEAR}. Covers multi-signature security, DAO treasury management, Safe Apps, and enterprise features.`,
};

const overview =
  "Safe (formerly Gnosis Safe) is the industry-standard multi-signature wallet for Ethereum and EVM-compatible chains. It secures over $100 billion in digital assets and is used by leading DAOs, protocols, and organizations to manage their treasuries. Unlike traditional wallets that rely on a single private key, Safe requires multiple signers to approve each transaction, dramatically reducing the risk of theft or unauthorized access. Safe is a smart contract-based wallet, meaning it lives on the blockchain and offers programmable security rules. It is fully open-source and has been battle-tested since 2018.";

const sections = [
  {
    id: "multi-sig",
    title: "Multi-Signature Security",
    content:
      "Safe's core feature is multi-signature (multi-sig) transaction approval. When creating a Safe, you define the number of owner addresses and the threshold required to execute transactions (for example, 3-of-5 means any 3 of 5 owners must approve). This means no single person can unilaterally move funds, which is essential for organizational security. Each signer can use their own wallet (MetaMask, Ledger, Trezor, etc.) to approve transactions. The threshold can be changed later through a multi-sig approved transaction.",
  },
  {
    id: "safe-apps",
    title: "Safe Apps Ecosystem",
    content:
      "Safe includes an app store called Safe Apps that lets you interact with DeFi protocols directly from the Safe interface. You can access Uniswap, Aave, Compound, Lido, Yearn, and dozens of other protocols without leaving the Safe dashboard. Transactions initiated through Safe Apps go through the same multi-sig approval process. This means your organization can participate in DeFi, manage NFTs, and execute complex transactions while maintaining the security of multi-sig approval for every action.",
  },
  {
    id: "transaction-batching",
    title: "Transaction Batching",
    content:
      "Safe supports transaction batching, which allows you to combine multiple actions into a single multi-sig approval. For example, you can approve 10 token transfers, 3 DeFi interactions, and 2 contract calls as a single batch. All signers review and approve the batch, and all transactions execute atomically. This saves significant gas fees compared to executing each transaction individually and reduces the coordination overhead for multi-sig teams.",
  },
  {
    id: "modules-guards",
    title: "Modules & Guards",
    content:
      "Safe's programmable architecture supports modules and guards that extend its functionality. Modules can add features like spending limits (allowing small transactions without full multi-sig approval), recurring payments, role-based access control, and automated DeFi strategies. Guards add validation rules that must pass before any transaction can execute. These programmable elements make Safe adaptable to complex organizational needs beyond simple multi-sig approval.",
  },
  {
    id: "dao-treasury",
    title: "DAO Treasury Management",
    content:
      "Safe has become the default treasury management solution for DAOs and crypto organizations. Major protocols like Uniswap, Aave, ENS, and Lido use Safe to manage billions in treasury assets. The multi-sig structure maps naturally to DAO governance, where council members or elected signers must collectively approve fund movements. Safe integrates with governance tools like Snapshot and Tally, allowing governance proposals to trigger multi-sig transactions when approved by token holders.",
  },
  {
    id: "supported-chains",
    title: "Supported Chains & Deployment",
    content:
      "Safe is deployed on Ethereum mainnet and most major EVM-compatible chains including Polygon, Arbitrum, Optimism, Avalanche, BNB Chain, Gnosis Chain, Base, and others. You can create separate Safe wallets on each chain or use the same set of signers across multiple chains. Creating a Safe requires a blockchain transaction and incurs gas fees. The Safe web interface at app.safe.global provides a unified dashboard for managing Safes across all supported networks.",
  },
];

const fees: Record<string, string> = {
  "Safe Creation": "Gas fees for smart contract deployment",
  "Transaction Execution": "Gas fees for each multi-sig transaction",
  "Safe Apps": "Free (protocol fees may apply)",
  "Transaction Batching": "Single gas fee for batched transactions",
  "Module Installation": "Gas fees for module setup",
  "Safe Software": "Free and open-source",
};

const security = [
  "Multi-signature approval requires multiple signers for every transaction",
  "Smart contract-based wallet living on the blockchain, not a single device",
  "Fully open-source with extensive security audits by Trail of Bits and others",
  "Battle-tested since 2018 securing over $100B in assets",
  "Customizable threshold (e.g., 2-of-3, 3-of-5, 5-of-7)",
  "Compatible with hardware wallets for individual signer security",
  "Programmable guards and modules for custom security policies",
];

const features = [
  "Multi-signature wallet requiring multiple approvals for transactions",
  "Safe Apps marketplace for DeFi, NFT, and governance integrations",
  "Transaction batching to combine multiple actions into one approval",
  "Programmable modules for spending limits, recurring payments, and automation",
  "Deployed on Ethereum and 10+ EVM-compatible chains",
  "DAO governance integration with Snapshot and Tally",
  "Mobile app for signer approvals on the go",
  "Open-source smart contracts securing over $100B in assets",
];

const faqs = [
  {
    question: "What is a multi-sig wallet?",
    answer:
      "A multi-signature (multi-sig) wallet requires multiple private key holders to approve a transaction before it can execute. For example, a 2-of-3 multi-sig requires any 2 of 3 designated signers to approve. This prevents any single person from moving funds unilaterally and protects against key theft, insider threats, and single points of failure.",
  },
  {
    question: "Do I need a Safe wallet as an individual?",
    answer:
      "Safe is primarily designed for organizations, DAOs, and teams. Individual users can benefit from multi-sig if they want to distribute their key security (for example, using multiple hardware wallets as signers). However, for most individual users, a hardware wallet like Ledger or Trezor provides sufficient security with less complexity.",
  },
  {
    question: "How much does it cost to create a Safe?",
    answer:
      "Creating a Safe requires deploying a smart contract, which costs gas fees. On Ethereum mainnet, this typically costs $20-$100 depending on network congestion. On Layer 2 networks like Arbitrum or Optimism, creation costs are usually under $1. Each transaction executed through the Safe also incurs gas fees.",
  },
  {
    question: "Can I recover a Safe if signers lose their keys?",
    answer:
      "Recovery depends on your threshold setup. If you have a 2-of-3 Safe and one signer loses their key, the remaining two signers can approve a transaction to replace the lost signer. If enough signers lose their keys that the threshold cannot be met, the funds become permanently inaccessible. This is why proper key management for each signer is critical.",
  },
  {
    question: "Is Safe the same as Gnosis Safe?",
    answer:
      "Yes. Safe was originally called Gnosis Safe when it was a product of Gnosis Ltd. In 2022, it was spun out as an independent entity called Safe Ecosystem Foundation. The product, smart contracts, and functionality remained the same. The rebranding to Safe reflects its broader mission beyond the Gnosis ecosystem.",
  },
];

const relatedReviews = [
  { name: "Rabby", slug: "rabby" },
  { name: "MetaMask", slug: "metamask" },
  { name: "Ledger", slug: "ledger" },
];

const relatedGuides = [
  { title: "Multi-Sig Wallets Explained", href: "/wallets/learn/multi-sig-wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
  { title: "Custodial vs Non-Custodial", href: "/wallets/learn/custodial-vs-non-custodial" },
];

export default function SafeReviewPage() {
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
