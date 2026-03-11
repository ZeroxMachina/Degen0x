import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "rabby")!;

export const metadata: Metadata = {
  title: `Rabby Wallet Review (${CURRENT_YEAR}) - Security-First EVM Wallet | ${SITE_NAME}`,
  description: `Complete Rabby wallet review for ${CURRENT_YEAR}. Covers transaction simulation, auto chain detection, multi-chain EVM support, and DeFi security features.`,
};

const overview =
  "Rabby is a security-focused browser extension wallet for Ethereum and EVM-compatible chains, developed by the DeBank team. Its standout feature is pre-transaction risk scanning, which simulates every transaction before you sign it and shows you exactly what will happen to your balances. Rabby also automatically detects which chain a dApp is using and switches networks accordingly, eliminating one of the most common pain points of EVM wallet usage. It is open-source, free to use, and has become a favorite among experienced DeFi users who prioritize security and transparency.";

const sections = [
  {
    id: "transaction-simulation",
    title: "Pre-Transaction Risk Scanning",
    content:
      "Rabby's defining feature is its transaction simulation engine. Before you sign any transaction, Rabby simulates it against the current blockchain state and shows you a detailed preview of the outcome. You can see exactly which tokens will leave your wallet, which will arrive, what approvals are being granted, and whether the contract you are interacting with has any known risk flags. This simulation catches scams, phishing attempts, and accidental mistakes before they happen. The risk indicators include contract age, audit status, and historical interaction patterns.",
  },
  {
    id: "auto-chain-detection",
    title: "Automatic Chain Detection",
    content:
      "One of the most frustrating aspects of using EVM wallets is manually switching between networks. Rabby solves this by automatically detecting which chain a dApp is running on and switching your active network to match. When you visit Uniswap on Arbitrum, Rabby automatically activates Arbitrum. When you switch to Aave on Polygon, Rabby follows. This eliminates the need for manual network switching and prevents the common error of being on the wrong chain when trying to interact with a dApp.",
  },
  {
    id: "multi-chain-overview",
    title: "Multi-Chain Portfolio Overview",
    content:
      "Rabby provides a comprehensive portfolio view that aggregates your holdings across all EVM chains. You can see your total balance, individual token holdings, and their distribution across chains in a single dashboard. The portfolio view is powered by DeBank's extensive token database, which covers even obscure DeFi positions, LP tokens, and lending deposits. This gives you a true picture of your on-chain wealth without needing to check each chain separately.",
  },
  {
    id: "approval-management",
    title: "Token Approval Management",
    content:
      "Rabby includes a built-in token approval management tool that lets you view and revoke smart contract approvals. When you interact with DeFi protocols, you often grant them permission to spend your tokens. Over time, these approvals accumulate and represent a security risk if any approved contract is compromised. Rabby shows all your outstanding approvals, the risk level of each contract, and lets you revoke them with one click. The approval page also highlights high-risk approvals that you should consider revoking.",
  },
  {
    id: "debank-integration",
    title: "DeBank Integration",
    content:
      "Rabby is built by the same team behind DeBank, a popular Web3 portfolio tracker. This means Rabby benefits from DeBank's extensive protocol database, token pricing data, and chain support. The integration provides accurate portfolio valuations even for complex DeFi positions like LP tokens, lending deposits, vesting contracts, and farming rewards. DeBank's social features also integrate with Rabby, showing the on-chain reputation and history of addresses you interact with.",
  },
  {
    id: "hardware-support",
    title: "Hardware Wallet Support",
    content:
      "Rabby supports connection with Ledger, Trezor, OneKey, GridPlus, and other hardware wallets. You can use Rabby's advanced UI features, transaction simulation, and chain auto-detection while keeping your private keys securely on the hardware device. The hardware wallet integration supports all EVM chains, and you get the same pre-transaction risk scanning for hardware wallet-signed transactions. This makes Rabby an excellent companion app for hardware wallet users who want enhanced DeFi security.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Transaction Simulation": "Free",
  "Token Swaps": "DEX aggregator fees (variable)",
  "Approval Revocation": "Network gas fees only",
  "Network Fees": "Standard EVM chain gas fees",
  "Hardware Wallet Use": "Free (device required separately)",
};

const security = [
  "Pre-transaction simulation shows exact outcomes before signing",
  "Risk scoring for smart contracts based on age, audits, and history",
  "Automatic phishing and scam site detection with warnings",
  "Token approval management with one-click revocation",
  "Open-source code available for public audit on GitHub",
  "Hardware wallet integration for offline key storage",
  "Address labeling to identify known entities and flag suspicious addresses",
];

const features = [
  "Pre-transaction risk scanning with detailed balance change previews",
  "Automatic chain detection matches the dApp you are using",
  "Multi-chain portfolio overview aggregating all EVM holdings",
  "Built-in token approval manager with risk-level indicators",
  "DeBank integration for accurate DeFi position tracking",
  "Hardware wallet support for Ledger, Trezor, and others",
  "Open-source and free to use with no hidden fees",
  "Gas fee estimation and customization for each transaction",
];

const faqs = [
  {
    question: "Is Rabby better than MetaMask?",
    answer:
      "Rabby offers several advantages over MetaMask for DeFi users: pre-transaction simulation, automatic chain detection, and built-in approval management. MetaMask has broader dApp compatibility, a mobile app, and a larger ecosystem with Snaps extensions. Rabby is the better choice for security-conscious DeFi users, while MetaMask remains the safer bet for maximum compatibility and mobile usage.",
  },
  {
    question: "Does Rabby have a mobile app?",
    answer:
      "As of now, Rabby is a desktop browser extension only. It is available for Chrome, Brave, Edge, and other Chromium-based browsers. There is no mobile app yet. If you need mobile wallet functionality, MetaMask, Phantom, or Trust Wallet are better alternatives. The Rabby team has indicated mobile development is on their roadmap.",
  },
  {
    question: "Is Rabby open-source?",
    answer:
      "Yes. Rabby is fully open-source with its code available on GitHub. This means anyone can audit the code for security vulnerabilities or backdoors. The open-source nature, combined with the DeBank team's reputation, contributes to Rabby's trustworthiness as a security-focused wallet.",
  },
  {
    question: "Does Rabby support non-EVM chains?",
    answer:
      "No. Rabby is designed specifically for EVM-compatible chains (Ethereum, Polygon, Arbitrum, Optimism, Avalanche, BNB Chain, etc.). It does not support Bitcoin, Solana, or other non-EVM blockchains. If you need multi-ecosystem support, Trust Wallet or Phantom are better choices.",
  },
  {
    question: "How does transaction simulation work in Rabby?",
    answer:
      "When you initiate a transaction, Rabby simulates it against the current blockchain state before you sign. The simulation shows you exactly which tokens will leave your wallet, which will arrive, and any approvals being granted. It also flags known risky contracts and unusual transaction patterns. You can review all these details and decide whether to proceed or cancel. This process happens locally and adds only a few seconds to the transaction flow.",
  },
];

const relatedReviews = [
  { name: "MetaMask", slug: "metamask" },
  { name: "Safe (Gnosis)", slug: "safe" },
  { name: "Ledger", slug: "ledger" },
];

const relatedGuides = [
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets" },
];

export default function RabbyReviewPage() {
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
