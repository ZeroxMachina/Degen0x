import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "trust-wallet")!;

export const metadata: Metadata = {
  title: `Trust Wallet Review (${CURRENT_YEAR}) - Multi-Chain Mobile Wallet | ${SITE_NAME}`,
  description: `Full Trust Wallet review for ${CURRENT_YEAR}. Covers 100+ blockchain support, dApp browser, staking, security, and Binance integration.`,
  alternates: { canonical: "/wallets/reviews/trust-wallet" }};

const overview =
  "Trust Wallet is one of the most versatile multi-chain crypto wallets available, supporting over 100 blockchains and millions of tokens. Originally acquired by Binance in 2018, it has since become an independent company while maintaining its reputation as a reliable self-custody solution. Trust Wallet is available on iOS, Android, and as a browser extension, offering a built-in dApp browser, staking for multiple assets, NFT management, and seamless access to decentralized applications across virtually every major blockchain network.";

const sections = [
  {
    id: "multi-chain",
    title: "100+ Blockchain Support",
    content:
      "Trust Wallet's standout feature is its massive multi-chain support. It natively supports over 100 blockchains including Ethereum, BNB Chain, Solana, Polygon, Avalanche, Cosmos, Tron, Optimism, Arbitrum, Fantom, and many more. This means you can manage assets across almost every major ecosystem from a single wallet without needing to switch between multiple applications. Token auto-detection identifies your holdings automatically, and you can manually add custom tokens using contract addresses.",
  },
  {
    id: "dapp-browser",
    title: "Built-in dApp Browser",
    content:
      "Trust Wallet includes a fully functional dApp browser that lets you access decentralized applications directly within the wallet. You can use DeFi protocols, NFT marketplaces, DEXs, lending platforms, and governance tools without leaving the app. The browser supports all EVM chains plus Solana, making it a universal gateway to Web3. On iOS, the dApp browser is accessible through a workaround due to Apple's restrictions, but it remains fully functional on Android and the browser extension.",
  },
  {
    id: "staking",
    title: "Staking & Earning",
    content:
      "Trust Wallet supports native staking for several proof-of-stake cryptocurrencies including BNB, Cosmos (ATOM), Tezos, Tron, Kava, Osmosis, and others. You can delegate to validators and earn staking rewards directly in the wallet. The staking interface shows available validators, their commission rates, and estimated APY. Trust Wallet does not charge any additional fees for staking beyond the standard network validator commissions.",
  },
  {
    id: "swap-feature",
    title: "Token Swaps & Cross-Chain",
    content:
      "Trust Wallet includes a built-in DEX aggregator that allows you to swap tokens across supported chains. It sources liquidity from multiple decentralized exchanges to find competitive rates. Cross-chain swaps are also supported through integrated bridging protocols, allowing you to move assets between different blockchains without leaving the wallet. The swap interface shows estimated output, price impact, and network fees before you confirm the transaction.",
  },
  {
    id: "nft-support",
    title: "NFT Management",
    content:
      "Trust Wallet provides NFT viewing and management across multiple blockchains. Your NFTs are displayed with image previews and collection information. You can send NFTs to other addresses and view their details including traits and metadata. The NFT experience covers Ethereum, BNB Chain, Polygon, and other EVM-compatible chains. While the NFT display is functional, dedicated NFT wallets like Phantom may offer a more polished gallery experience.",
  },
  {
    id: "browser-extension",
    title: "Browser Extension",
    content:
      "Trust Wallet expanded beyond mobile with a browser extension for Chrome and other Chromium-based browsers. The extension provides the same multi-chain support as the mobile app and connects to dApps on your desktop. You can sync your mobile wallet with the extension or create a separate wallet. The extension supports all EVM chains and integrates with the same swap and staking features available on mobile.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Token Swaps": "Variable DEX aggregator fees",
  "Cross-Chain Swaps": "Bridge provider fees apply",
  "Staking": "No Trust Wallet fee (validator commission applies)",
  "Buy Crypto": "Third-party provider fees (Moonpay, Simplex, etc.)",
  "Network Fees": "Standard blockchain gas fees apply",
};

const security = [
  "Self-custody wallet where you control your private keys",
  "Local key storage encrypted with your device password",
  "Biometric authentication support (Face ID, fingerprint)",
  "12-word seed phrase backup for recovery",
  "Open-source core components available on GitHub",
  "Security audit by Halborn and other firms",
  "dApp browser with phishing site warnings",
];

const features = [
  "Supports 100+ blockchains and millions of tokens natively",
  "Built-in dApp browser for accessing decentralized applications",
  "Native staking for BNB, ATOM, Tezos, Tron, and more",
  "DEX aggregator for token swaps across multiple chains",
  "NFT viewing and management across EVM chains",
  "Mobile app (iOS and Android) plus browser extension",
  "Cross-chain bridge integration for moving assets between chains",
  "Fiat on-ramp for buying crypto with credit card or bank transfer",
];

const faqs = [
  {
    question: "Is Trust Wallet safe?",
    answer:
      "Trust Wallet is a self-custody wallet, meaning you hold your own private keys rather than a centralized service. Your keys are stored locally on your device and encrypted. The wallet has been audited by security firms and its core components are open-source. As with any hot wallet, the main risks are device compromise and phishing attacks. For maximum security, pair Trust Wallet with a hardware wallet for large holdings.",
  },
  {
    question: "Is Trust Wallet owned by Binance?",
    answer:
      "Trust Wallet was acquired by Binance in 2018 but has since operated as a separate entity. In 2022, Trust Wallet became an independent company with its own governance structure. While there are integrations with Binance's ecosystem, Trust Wallet operates independently and your funds remain in your self-custody at all times.",
  },
  {
    question: "Does Trust Wallet support Solana?",
    answer:
      "Yes. Trust Wallet supports Solana natively, including SOL transfers, SPL token management, and access to Solana dApps through the built-in browser. You can also swap Solana tokens directly in the wallet. For the deepest Solana experience, Phantom may offer more chain-specific features, but Trust Wallet's Solana support is solid.",
  },
  {
    question: "Can I use Trust Wallet for DeFi?",
    answer:
      "Yes. Trust Wallet's built-in dApp browser gives you access to DeFi protocols across all supported chains. You can use lending platforms like Aave, DEXs like Uniswap, yield aggregators like Yearn, and many more. The multi-chain support means you can access DeFi on Ethereum, BNB Chain, Polygon, Avalanche, and other networks from a single wallet.",
  },
  {
    question: "What happens if I lose my phone with Trust Wallet?",
    answer:
      "If you have your 12-word seed phrase, you can restore your Trust Wallet on a new device or even in a different wallet application. Your crypto lives on the blockchain, not on your phone. This is why it is critical to write down and securely store your seed phrase during wallet setup. Without the seed phrase, your funds cannot be recovered.",
  },
];

const relatedReviews = [
  { name: "Exodus", slug: "exodus" },
  { name: "Phantom", slug: "phantom" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet" },
];

const relatedGuides = [
  { title: "Custodial vs Non-Custodial Wallets", href: "/wallets/learn/custodial-vs-non-custodial" },
  { title: "How to Transfer Crypto", href: "/wallets/learn/how-to-transfer-crypto" },
  { title: "Wallet Backup Guide", href: "/wallets/learn/wallet-backup-guide" },
];

export default function TrustWalletReviewPage() {
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
