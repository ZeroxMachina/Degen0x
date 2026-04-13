import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "coinbase-wallet")!;

export const metadata: Metadata = {
  title: `Coinbase Wallet Review (${CURRENT_YEAR}) - Self-Custody from Coinbase | ${SITE_NAME}`,
  description: `In-depth Coinbase Wallet review for ${CURRENT_YEAR}. Covers self-custody features, multi-chain support, dApp browser, Coinbase integration, and security.`,
  alternates: { canonical: "/wallets/reviews/coinbase-wallet" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Coinbase Wallet is a self-custody crypto wallet developed by Coinbase, the largest US-based cryptocurrency exchange. It is a separate product from the Coinbase exchange app and gives users full control of their private keys. Coinbase Wallet supports Ethereum, Solana, Bitcoin, and several other blockchain networks. It features a built-in dApp browser, NFT management, and seamless integration with the Coinbase exchange for easy fund transfers. Available on iOS, Android, and as a Chrome browser extension, it bridges the gap between centralized exchange convenience and self-custody sovereignty.";

const sections = [
  {
    id: "coinbase-integration",
    title: "Coinbase Exchange Integration",
    content:
      "The strongest differentiator for Coinbase Wallet is its seamless connection to the Coinbase exchange. You can transfer funds between your Coinbase exchange account and Coinbase Wallet with a few taps, without needing to copy and paste blockchain addresses. This makes it incredibly easy to move from custodial to self-custody and back. For users who already have a Coinbase account, this integration eliminates the friction of managing a separate wallet. The connection is optional, and you can use Coinbase Wallet independently without a Coinbase account.",
  },
  {
    id: "multi-chain",
    title: "Multi-Chain Support",
    content:
      "Coinbase Wallet supports multiple blockchains including Ethereum and all EVM-compatible chains (Polygon, Arbitrum, Optimism, Base, Avalanche, BNB Chain), Solana, and Bitcoin. The wallet automatically detects tokens on supported networks and displays your balances across chains. Base, Coinbase's own Layer 2 network built on Optimism, is natively integrated with optimized support. The multi-chain management is handled within a unified interface, though the depth of support varies by chain.",
  },
  {
    id: "dapp-browser",
    title: "dApp Browser & Web3",
    content:
      "Coinbase Wallet includes a built-in dApp browser for accessing decentralized applications across supported chains. You can browse popular dApps, access DeFi protocols, mint and trade NFTs, and participate in governance directly from the wallet. The browser supports WalletConnect for connecting to desktop dApps from the mobile app. Coinbase Wallet also supports ENS (Ethereum Name Service) and Coinbase's own cb.id username system for human-readable wallet addresses.",
  },
  {
    id: "cloud-backup",
    title: "Cloud Backup Option",
    content:
      "Coinbase Wallet offers an optional encrypted cloud backup for your recovery phrase, stored in your personal Google Drive or iCloud account. This feature makes it easier for beginners who might lose a paper seed phrase backup. The backup is encrypted with a password you choose, and Coinbase cannot access it. While convenient, security-conscious users may prefer the traditional approach of writing down the seed phrase and storing it physically offline, as cloud storage introduces a potential attack vector.",
  },
  {
    id: "nft-features",
    title: "NFT Features",
    content:
      "Coinbase Wallet provides NFT viewing and management across Ethereum, Polygon, and other supported chains. Your NFTs are displayed in a gallery format with collection grouping. You can send, receive, and view the details of your NFTs within the wallet. The wallet also integrates with NFT marketplaces accessible through the dApp browser. Coinbase has invested heavily in its NFT infrastructure, and the wallet experience reflects this with reliable token detection and display.",
  },
  {
    id: "identity-features",
    title: "Identity & Social Features",
    content:
      "Coinbase Wallet supports cb.id usernames, which are free Coinbase-issued identifiers that work as human-readable wallet addresses. Instead of sharing a long hexadecimal address, you can share your cb.id username for receiving crypto. The wallet also supports ENS domains and displays other users' identities when available. These social features position Coinbase Wallet as more than just a financial tool, leaning into the Web3 identity space.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Coinbase Transfers": "Network fees only (no additional fee)",
  "Token Swaps": "DEX aggregator fees (variable)",
  "Buy Crypto": "Coinbase on-ramp fees apply",
  "Network Fees": "Standard blockchain gas fees",
  "Cloud Backup": "Free (uses your own cloud storage)",
};

const security = [
  "Self-custody wallet with locally stored encrypted private keys",
  "12-word recovery phrase with optional encrypted cloud backup",
  "Biometric authentication (Face ID, fingerprint) on mobile",
  "Secure Enclave integration on supported iOS devices",
  "Transaction simulation and approval warnings",
  "No KYC required for wallet creation (Coinbase account optional)",
  "Regular security audits by third-party firms",
];

const features = [
  "Seamless fund transfers to and from Coinbase exchange",
  "Multi-chain support for Ethereum, Solana, Bitcoin, and more",
  "Built-in dApp browser for DeFi and NFT access",
  "Optional encrypted cloud backup for recovery phrase",
  "cb.id username system for human-readable addresses",
  "NFT gallery with collection management across chains",
  "Browser extension for desktop dApp connectivity",
  "Native Base (Layer 2) network support and optimization",
];

const faqs = [
  {
    question: "Is Coinbase Wallet the same as Coinbase?",
    answer:
      "No. Coinbase Wallet is a separate self-custody wallet app where you control your own private keys. The Coinbase exchange app is a custodial platform where Coinbase holds your funds. You can link them for easy transfers, but they serve different purposes. Coinbase Wallet can be used without a Coinbase exchange account.",
  },
  {
    question: "Is the cloud backup safe?",
    answer:
      "The cloud backup encrypts your recovery phrase with a password you choose before storing it in your personal Google Drive or iCloud. Coinbase cannot access this backup. The security depends on the strength of your encryption password and the security of your cloud account. While convenient, security purists prefer writing down the seed phrase on paper or metal and storing it in a secure physical location.",
  },
  {
    question: "Does Coinbase Wallet support Solana?",
    answer:
      "Yes. Coinbase Wallet supports Solana including SOL transfers, SPL token management, and access to Solana dApps. However, the Solana experience in Coinbase Wallet is not as feature-rich as Phantom, which was built specifically for the Solana ecosystem. For heavy Solana usage, Phantom may be a better choice.",
  },
  {
    question: "Can I use Coinbase Wallet for DeFi?",
    answer:
      "Yes. The built-in dApp browser gives you access to DeFi protocols across all supported chains. You can use Uniswap, Aave, Compound, and other protocols directly. The wallet also supports token swaps through its built-in aggregator. For heavy DeFi usage on Ethereum, MetaMask or Rabby may offer a more specialized experience.",
  },
  {
    question: "What is cb.id?",
    answer:
      "cb.id is a free username system from Coinbase that provides a human-readable address for receiving crypto. Instead of sharing a long hex address like 0x1234...5678, you can share your cb.id username. It works on Ethereum and EVM-compatible chains. You can claim a free cb.id through Coinbase Wallet.",
  },
];

const relatedReviews = [
  { name: "MetaMask", slug: "metamask" },
  { name: "Phantom", slug: "phantom" },
  { name: "Exodus", slug: "exodus" },
];

const relatedGuides = [
  { title: "Custodial vs Non-Custodial Wallets", href: "/wallets/learn/custodial-vs-non-custodial" },
  { title: "How to Set Up a Wallet", href: "/wallets/learn/how-to-set-up-wallet" },
  { title: "Seed Phrase Explained", href: "/wallets/learn/seed-phrase-explained" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Coinbase Wallet', },
  ],
};

export default function CoinbaseWalletReviewPage() {
  return (
    <>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
