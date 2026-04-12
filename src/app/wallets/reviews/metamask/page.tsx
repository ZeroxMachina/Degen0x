import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "metamask")!;

export const metadata: Metadata = {
  title: `MetaMask Review (${CURRENT_YEAR}) - Best Ethereum Wallet? | ${SITE_NAME}`,
  description: `Detailed MetaMask review for ${CURRENT_YEAR}. We cover MetaMask's features, swap fees, security, multi-chain support, and how it compares to alternatives.`,
  alternates: { canonical: "/wallets/reviews/metamask" }};

const overview =
  "MetaMask is the most widely used self-custody wallet for Ethereum and EVM-compatible blockchains. With over 30 million monthly active users, it serves as the primary gateway to DeFi, NFT marketplaces, and thousands of decentralized applications. Available as a browser extension for Chrome, Firefox, Brave, and Edge, as well as a mobile app for iOS and Android, MetaMask provides a seamless interface for managing your Ethereum assets, interacting with smart contracts, and swapping tokens. It is open-source, well-audited, and backed by ConsenSys, one of the largest companies in the Ethereum ecosystem.";

const sections = [
  {
    id: "multi-chain",
    title: "Multi-Chain & Network Support",
    content:
      "While MetaMask was originally built for Ethereum, it now supports any EVM-compatible blockchain. You can easily add networks like Polygon, Arbitrum, Optimism, Base, Avalanche, BNB Chain, Fantom, and dozens more. MetaMask also features Linea, ConsenSys's own Layer 2 network. Adding networks is as simple as clicking a button on chainlist.org or entering the RPC details manually. This makes MetaMask a universal gateway to the entire EVM ecosystem, though it does not support non-EVM chains like Bitcoin or Solana natively.",
  },
  {
    id: "swap-aggregator",
    title: "Built-in Swap Aggregator",
    content:
      "MetaMask includes a built-in token swap feature that aggregates prices from multiple decentralized exchanges and market makers to find the best rate for your trade. It sources liquidity from Uniswap, SushiSwap, 1inch, Paraswap, and other providers. MetaMask charges a 0.875% service fee on swaps, which is higher than using DEXs directly but provides the convenience of one-click trading without leaving the wallet. For large trades, advanced users may prefer going directly to a DEX to avoid this fee.",
  },
  {
    id: "dapp-ecosystem",
    title: "dApp Ecosystem & Compatibility",
    content:
      "MetaMask is the industry standard for dApp connectivity. Nearly every Ethereum-based application supports MetaMask as a connection method, making it essential for DeFi users. Whether you are lending on Aave, trading on Uniswap, minting NFTs on OpenSea, or voting in a DAO on Snapshot, MetaMask provides the seamless wallet connection. The WalletConnect protocol also allows MetaMask mobile users to connect to desktop dApps by scanning a QR code. This universal compatibility is MetaMask's strongest advantage over newer alternatives.",
  },
  {
    id: "snaps",
    title: "MetaMask Snaps (Extension System)",
    content:
      "MetaMask Snaps is a plugin system that allows developers to extend MetaMask's functionality. Snaps can add support for non-EVM blockchains (like Bitcoin and Cosmos), provide transaction insights and security warnings, integrate with notification services, and add new features to the wallet. This modular approach means MetaMask can evolve without requiring users to switch wallets. Notable Snaps include transaction simulation tools and cross-chain bridging interfaces. The Snaps ecosystem is still growing and represents MetaMask's vision for becoming a universal wallet.",
  },
  {
    id: "mobile-app",
    title: "Mobile App Experience",
    content:
      "The MetaMask mobile app brings the full wallet experience to iOS and Android. It includes a built-in browser for accessing dApps directly within the app, token swaps, NFT viewing, and portfolio tracking. The mobile app syncs with your browser extension through a QR code-based setup process using your seed phrase. Mobile-specific features include biometric authentication (Face ID or fingerprint), QR code scanning for addresses, and push notifications for incoming transactions.",
  },
  {
    id: "hardware-integration",
    title: "Hardware Wallet Integration",
    content:
      "MetaMask integrates with Ledger and Trezor hardware wallets, allowing you to use MetaMask's interface while keeping your private keys securely on the hardware device. This combination gives you the best of both worlds: MetaMask's dApp compatibility and the hardware wallet's offline key storage. You can connect via USB or Bluetooth (Ledger Nano X) and use your hardware wallet for every transaction confirmation. This is the recommended setup for users managing significant assets through DeFi.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Token Swaps": "0.875% service fee",
  "Bridge Transactions": "0.875% service fee",
  "Buy Crypto": "Provider fees (Moonpay, Transak, etc.)",
  "Network Gas Fees": "Standard Ethereum/chain gas fees",
  "Hardware Wallet Use": "Free (device purchased separately)",
};

const security = [
  "Open-source code regularly audited by security firms",
  "Private keys stored locally in encrypted browser storage",
  "Password protection and optional biometric authentication on mobile",
  "Phishing detection warnings for known malicious sites",
  "Token approval management to revoke unwanted smart contract permissions",
  "Hardware wallet integration for offline key storage",
  "Seed phrase backup for account recovery across devices",
];

const features = [
  "Browser extension for Chrome, Firefox, Brave, and Edge",
  "Mobile app with built-in dApp browser for iOS and Android",
  "Built-in swap aggregator sourcing from multiple DEXs",
  "Support for all EVM-compatible blockchains",
  "MetaMask Snaps plugin system for extended functionality",
  "NFT detection and display across supported networks",
  "WalletConnect support for connecting to dApps",
  "Portfolio tracking with token balances and price data",
];

const faqs = [
  {
    question: "Is MetaMask safe?",
    answer:
      "MetaMask is generally safe as an open-source, well-audited wallet. Your private keys are stored locally in encrypted browser storage and never transmitted to MetaMask servers. The main risks come from phishing attacks, malicious token approvals, and browser vulnerabilities. For maximum security, combine MetaMask with a hardware wallet like Ledger. Always verify you are on the correct website before connecting your wallet.",
  },
  {
    question: "Does MetaMask support Bitcoin?",
    answer:
      "MetaMask does not natively support Bitcoin since it is built for EVM-compatible chains. However, you can use wrapped Bitcoin (WBTC) on Ethereum through MetaMask. Through MetaMask Snaps, experimental Bitcoin support is being added. If you need native Bitcoin support, consider Phantom, Exodus, or a hardware wallet like Ledger or Trezor.",
  },
  {
    question: "Why are MetaMask swap fees so high?",
    answer:
      "MetaMask charges a 0.875% service fee on swaps, which is higher than using DEXs directly. This fee funds MetaMask development and supports the free wallet. To avoid it, you can use Uniswap, 1inch, or other DEXs directly through MetaMask's browser without using the built-in swap feature. The swap aggregator does sometimes find better prices that offset the fee for smaller trades.",
  },
  {
    question: "Can I use MetaMask on multiple devices?",
    answer:
      "Yes. You can import your MetaMask wallet on any number of devices using your 12-word seed phrase. Install MetaMask on the new device, select 'Import Wallet,' and enter your seed phrase. Note that MetaMask does not sync automatically between devices; each installation is independent but accesses the same blockchain accounts.",
  },
  {
    question: "How do I add a network to MetaMask?",
    answer:
      "You can add networks by going to Settings > Networks > Add Network in MetaMask, or by visiting chainlist.org which provides one-click network additions. Popular networks like Polygon, Arbitrum, and Optimism can be added directly from the network selector dropdown. Each network requires an RPC URL, chain ID, currency symbol, and block explorer URL.",
  },
];

const relatedReviews = [
  { name: "Rabby", slug: "rabby" },
  { name: "Phantom", slug: "phantom" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet" },
];

const relatedGuides = [
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet" },
  { title: "How to Transfer Crypto", href: "/wallets/learn/how-to-transfer-crypto" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
];

export default function MetaMaskReviewPage() {
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
