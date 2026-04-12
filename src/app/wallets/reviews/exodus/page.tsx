import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "exodus")!;

export const metadata: Metadata = {
  title: `Exodus Wallet Review (${CURRENT_YEAR}) - Best for Beginners? | ${SITE_NAME}`,
  description: `Detailed Exodus wallet review for ${CURRENT_YEAR}. Covers the desktop, mobile, and browser experience, built-in exchange, Trezor integration, and portfolio tracking.`,
  alternates: { canonical: "/wallets/reviews/exodus" }};

const overview =
  "Exodus is a beautifully designed multi-platform crypto wallet that prioritizes simplicity and visual appeal. Available on desktop (Windows, Mac, Linux), mobile (iOS, Android), and as a browser extension, Exodus supports over 300 cryptocurrencies with a built-in exchange, portfolio tracking, and staking features. Its standout strength is the user experience, which makes managing crypto feel intuitive even for complete beginners. Exodus also integrates with Trezor hardware wallets for users who want enhanced security without sacrificing the polished interface.";

const sections = [
  {
    id: "design",
    title: "Design & User Interface",
    content:
      "Exodus is widely regarded as having the most visually appealing crypto wallet interface. The dashboard features real-time portfolio charts with smooth animations, color-coded asset allocation breakdowns, and a clean layout that makes navigation intuitive. Each supported cryptocurrency has its own dedicated page with price charts, transaction history, and quick-action buttons. The design language is consistent across desktop, mobile, and browser extension, creating a cohesive experience regardless of which platform you use.",
  },
  {
    id: "built-in-exchange",
    title: "Built-in Exchange",
    content:
      "Exodus includes a built-in exchange that lets you swap between 300+ supported cryptocurrencies without leaving the wallet. The exchange interface shows estimated rates, minimum amounts, and expected arrival times. Exchange rates are sourced from multiple liquidity providers. While convenient, the exchange fees tend to be higher than using DEXs directly, as Exodus includes a spread in its rates. For small to medium trades, the convenience often outweighs the cost difference, but active traders may prefer external exchanges.",
  },
  {
    id: "multi-platform",
    title: "Multi-Platform Experience",
    content:
      "Exodus offers one of the most complete multi-platform experiences in the wallet space. The desktop app (available for Windows, Mac, and Linux) provides the full-featured experience with portfolio analytics and advanced settings. The mobile app mirrors the desktop functionality with a touch-optimized interface. The browser extension connects to dApps on EVM chains. All three platforms sync automatically through an encrypted cloud backup, so your wallet stays consistent across devices.",
  },
  {
    id: "trezor-integration",
    title: "Trezor Hardware Wallet Integration",
    content:
      "Exodus integrates directly with Trezor hardware wallets, combining Exodus's beautiful interface with Trezor's offline security. When connected, your private keys are stored on the Trezor device while you manage your portfolio through the Exodus desktop app. Supported assets can be moved between your Exodus software wallet and Trezor hardware wallet with one click. This integration makes Exodus one of the few software wallets that offers a native hardware wallet pairing out of the box.",
  },
  {
    id: "staking",
    title: "Staking & Passive Income",
    content:
      "Exodus supports staking for several proof-of-stake cryptocurrencies including Solana, Cardano, Cosmos, Tezos, Algorand, and others. The staking interface is straightforward: select the asset, choose a validator or use the recommended option, and stake with one click. Rewards are displayed in the wallet with estimated APY percentages. Exodus handles the delegation process automatically, making staking accessible even for users who do not understand the technical details.",
  },
  {
    id: "portfolio-tracking",
    title: "Portfolio Tracking & Analytics",
    content:
      "The portfolio section provides comprehensive analytics including total balance, 24-hour change, performance charts over various time periods, and asset allocation pie charts. Individual asset pages show price history, your transaction log, and percentage gain or loss. While not as detailed as dedicated portfolio trackers like CoinGecko or Zerion, the built-in analytics are more than sufficient for most users and have the advantage of pulling directly from your actual holdings without manual input.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Built-in Exchange": "Spread-based (typically 2-5%)",
  "Staking": "No Exodus fee (validator commission applies)",
  "Buy Crypto": "Third-party provider fees (Ramp, Moonpay)",
  "Network Fees": "Standard blockchain gas fees",
  "Trezor Integration": "Free (Trezor device required separately)",
};

const security = [
  "Local key storage encrypted with your password on each device",
  "12-word seed phrase backup for wallet recovery",
  "Trezor hardware wallet integration for offline key storage",
  "Biometric authentication on mobile (Face ID, fingerprint)",
  "Automatic lock feature after inactivity timeout",
  "No KYC or account registration required",
  "Encrypted cloud sync between devices",
];

const features = [
  "Desktop app for Windows, Mac, and Linux with full portfolio analytics",
  "Mobile app for iOS and Android with touch-optimized interface",
  "Browser extension for dApp connectivity on EVM chains",
  "Built-in exchange supporting 300+ cryptocurrency swaps",
  "Native Trezor hardware wallet integration",
  "Staking for Solana, Cardano, Cosmos, Tezos, and more",
  "Real-time portfolio tracking with performance charts",
  "Automatic encrypted sync across all platforms",
];

const faqs = [
  {
    question: "Is Exodus wallet safe?",
    answer:
      "Exodus is a self-custody wallet that stores your private keys locally on your device, encrypted with your password. It does not require KYC or account registration. For enhanced security, you can pair it with a Trezor hardware wallet. The main limitation is that Exodus is not fully open-source, which means the code cannot be independently audited by the public. For users with large holdings, the Trezor integration is strongly recommended.",
  },
  {
    question: "Why are Exodus exchange fees high?",
    answer:
      "Exodus's built-in exchange includes a spread in the exchange rate rather than charging an explicit fee. This spread typically ranges from 2-5% depending on the trading pair and market conditions. For small trades, the convenience may be worth the cost. For larger trades, using a dedicated exchange like Coinbase or a DEX like Uniswap will provide better rates.",
  },
  {
    question: "Does Exodus have two-factor authentication?",
    answer:
      "Exodus does not support traditional two-factor authentication (2FA) because it is a self-custody wallet without accounts or servers. Your security comes from your device password, seed phrase, and optional hardware wallet integration. On mobile, biometric authentication (Face ID or fingerprint) provides an additional layer of security. The auto-lock feature protects against unauthorized access to an open session.",
  },
  {
    question: "Can I use Exodus for DeFi?",
    answer:
      "The Exodus browser extension allows you to connect to DeFi dApps on Ethereum and other EVM-compatible chains, similar to MetaMask. However, the DeFi integration is more limited than dedicated DeFi wallets. For heavy DeFi usage, MetaMask or Rabby may be better choices. Exodus is better suited for users who want straightforward portfolio management with occasional DeFi interaction.",
  },
  {
    question: "Does Exodus support NFTs?",
    answer:
      "Yes. Exodus supports viewing and managing NFTs on Ethereum and Solana. The NFT gallery shows your collections with image previews and basic metadata. You can send NFTs from Exodus to other addresses. However, the NFT experience is not as rich as dedicated NFT-focused wallets like Phantom.",
  },
];

const relatedReviews = [
  { name: "Trust Wallet", slug: "trust-wallet" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet" },
  { name: "Trezor", slug: "trezor" },
];

const relatedGuides = [
  { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets" },
  { title: "How to Set Up a Wallet", href: "/wallets/learn/how-to-set-up-wallet" },
];

export default function ExodusReviewPage() {
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
