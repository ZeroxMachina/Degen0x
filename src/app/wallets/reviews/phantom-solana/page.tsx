import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Phantom Solana Wallet Review (${CURRENT_YEAR}) - Best Solana Wallet? | ${SITE_NAME}`,
  description: `Detailed Phantom review focused on its Solana experience for ${CURRENT_YEAR}. Covers SPL tokens, Solana DeFi, NFT management, staking, and transaction speed.`,
};

const product = {
  name: "Phantom (Solana)",
  slug: "phantom-solana",
  rating: 4.7,
  description: "Phantom is the dominant Solana wallet offering the best SPL token management, Solana DeFi integration, NFT gallery, and staking experience in the ecosystem.",
  pros: [
    "Best-in-class Solana dApp compatibility and ecosystem integration",
    "Beautiful NFT gallery with Solana collection support",
    "Built-in SOL staking with validator selection",
    "Near-instant transactions with sub-cent fees on Solana",
  ],
  cons: [
    "Solana network outages affect wallet functionality",
    "Swap fees of 0.85% are higher than using Jupiter directly",
    "Not open source — code cannot be independently audited",
  ],
  bestFor: "Solana ecosystem users who want the most polished and complete Solana wallet experience",
  affiliateUrl: "#",
  category: "wallets",
};

const overview = `Phantom has established itself as the undisputed leading wallet for the Solana ecosystem, much like MetaMask's position on Ethereum. While Phantom has expanded to support Ethereum and Polygon, its Solana experience remains the core strength that defines the wallet. On Solana, Phantom offers near-instant transaction confirmations, fees that typically cost less than a penny, and deep integration with virtually every Solana dApp, DEX, and NFT marketplace. The wallet handles SPL tokens natively, auto-detecting new tokens in your wallet and displaying them with proper names, logos, and price data.

The Solana-specific features include a curated NFT gallery that showcases Solana collections beautifully, built-in SOL staking with validator selection and reward tracking, and a swap feature powered by Jupiter aggregation that finds the best prices across Solana DEXs. Phantom also includes automatic spam token detection and burning, which is particularly important on Solana where spam airdrops are common due to the low transaction costs. For anyone operating primarily within the Solana ecosystem, Phantom provides the most complete and polished wallet experience available.`;

const sections = [
  {
    id: "solana-defi",
    title: "Solana DeFi & dApp Integration",
    content: "Phantom is compatible with virtually every Solana dApp, making it the default wallet for the ecosystem. Major protocols like Jupiter, Raydium, Orca, Marinade Finance, and Tensor all work seamlessly with Phantom. The wallet handles Solana's unique transaction model — including versioned transactions and lookup tables — without requiring any user intervention. When connecting to a Solana dApp, Phantom displays the requested permissions clearly and shows transaction simulations that preview the expected outcome before you sign. The speed of Solana means that DeFi interactions through Phantom feel instantaneous compared to Ethereum, where transactions can take minutes to confirm and cost dollars in gas. This combination of broad compatibility and fast execution makes Phantom the gateway to Solana DeFi for most users.",
  },
  {
    id: "nft-gallery",
    title: "Solana NFT Gallery & Management",
    content: "Phantom's NFT gallery is tailored for Solana's vibrant NFT ecosystem. Collections like Mad Lads, Tensorians, and Claynosaurz are displayed with high-resolution images, trait information, and current floor prices from major Solana marketplaces. The gallery organizes NFTs by collection and supports filtering, sorting, and favoriting. A standout feature is the burn and earn functionality — Phantom lets you burn unwanted spam NFTs and recover the small amount of SOL locked in the token account's rent. This is particularly valuable on Solana where spam NFT airdrops are frequent. The gallery also supports compressed NFTs, which are a Solana-specific technology for creating NFTs at a fraction of the cost of traditional minting. For Solana NFT collectors and traders, Phantom's gallery provides the most comprehensive management experience.",
  },
  {
    id: "staking",
    title: "SOL Staking & Validator Selection",
    content: "Phantom includes built-in SOL staking that lets you delegate your SOL to validators and earn staking rewards. The staking interface displays a curated list of validators with their commission rates, total stake, performance scores, and estimated APY. You can select individual validators or use Phantom's recommended validator selection for a balanced stake distribution. Staking rewards are tracked within the wallet with clear displays of earned SOL and current APY. The unstaking process is also managed within Phantom, with clear indication of the cooldown period required before staked SOL becomes available for withdrawal. For users who want to earn yield on their SOL holdings without the complexity of command-line staking, Phantom makes the process accessible with a few taps.",
  },
  {
    id: "token-management",
    title: "SPL Token Management & Swaps",
    content: "Phantom excels at managing SPL tokens — the token standard on Solana. New tokens are automatically detected when they arrive in your wallet, displaying the correct name, symbol, and logo from Solana's token registry. Price data is shown for established tokens, and you can quickly check your token balances and recent transaction history for each asset. The built-in swap feature, powered by Jupiter aggregation, searches across all major Solana DEXs to find the best rate for your trade. The swap interface is clean and shows the expected output, price impact, and any route splits. While the 0.85% swap fee is higher than using Jupiter directly, the convenience of swapping without leaving the wallet is valuable for casual traders. Phantom also includes priority fee settings for transactions, letting you increase fees during periods of network congestion to ensure your transactions are processed promptly.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Solana Transactions": "Typically less than $0.01",
  "Built-in Swap Fee": "0.85% per swap",
  "SOL Staking": "Validator commission (varies, typically 5-10%)",
  "NFT Burn": "Free (recovers rent SOL)",
  "Priority Fees": "Optional, user-configurable for faster processing",
};

const security = [
  "Local private key storage encrypted with device password",
  "12-word seed phrase backup for wallet recovery",
  "Transaction simulation previews before signing",
  "Automatic spam token and NFT detection",
  "Biometric authentication on mobile (Face ID, fingerprint)",
  "Browser extension phishing warnings for suspicious sites",
  "Ledger hardware wallet integration for Solana accounts",
];

const features = [
  "Dominant Solana wallet with near-universal dApp compatibility",
  "NFT gallery with floor prices, traits, and burn-to-earn",
  "Built-in SOL staking with validator selection and reward tracking",
  "Jupiter-powered swap aggregation across Solana DEXs",
  "Automatic SPL token detection and price display",
  "Compressed NFT support for Solana's state compression",
  "Priority fee control for congested network periods",
  "Multi-chain support including Ethereum and Polygon",
];

const faqs = [
  {
    question: "Why is Phantom the best Solana wallet?",
    answer: "Phantom has the broadest Solana dApp compatibility, the most polished interface, and the most complete feature set for Solana users. It handles SPL tokens, NFTs, staking, and DeFi all within a single application. Its market dominance means that Solana dApp developers prioritize Phantom compatibility, creating a network effect that reinforces its position. While alternatives like Backpack and Solflare offer competitive features, Phantom's ecosystem integration remains the strongest.",
  },
  {
    question: "Does Phantom work during Solana outages?",
    answer: "During Solana network outages, Phantom cannot process transactions or update balances because the underlying blockchain is not producing blocks. Your funds remain safe in your wallet — they are controlled by your private key regardless of network status. Once the network resumes, Phantom automatically reconnects and processes any pending operations. Historical portfolio data and cached balances may still display during brief outages.",
  },
  {
    question: "Can I use Phantom with a Ledger hardware wallet?",
    answer: "Yes. Phantom supports Ledger hardware wallet integration for Solana accounts. You can connect your Ledger via USB, add your Solana accounts to Phantom, and use the Ledger to sign transactions while benefiting from Phantom's interface and dApp connectivity. This gives you the security of hardware key storage with the convenience of Phantom's software features.",
  },
];

const relatedReviews = [
  { name: "Backpack Wallet", slug: "backpack-wallet" },
  { name: "Phantom", slug: "phantom" },
  { name: "Trust Wallet", slug: "trust-wallet" },
];

const relatedGuides = [
  { title: "Best Solana Wallets", href: "/wallets/best/solana" },
  { title: "Best Staking Wallets", href: "/wallets/best/staking" },
  { title: "NFT Storage Guide", href: "/wallets/learn/nft-storage-guide" },
];

export default function PhantomSolanaReviewPage() {
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
