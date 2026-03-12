import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "SafePal",
  slug: "safepal",
  rating: 3.9,
  description:
    "SafePal offers both a $49.99 air-gapped hardware wallet (S1) and a software wallet app, supporting 100+ blockchains and 10M+ tokens. Backed by Binance Labs.",
  pros: [
    "Very affordable hardware wallet at $49.99 (S1 model)",
    "Air-gapped design with QR code signing on hardware",
    "100+ blockchain support with extensive token coverage",
    "Binance Labs backed with strong exchange integration",
  ],
  cons: [
    "Small screen on S1 can make address verification difficult",
    "Not fully open-source firmware",
    "Software wallet has had past security concerns",
    "Build quality of hardware is modest at the price point",
  ],
  fees: "$49.99 for S1 hardware wallet",
  bestFor: "Budget-conscious users wanting air-gapped hardware security",
  affiliateUrl: "https://degen0x.com/go/safepal",
  category: "wallets",
};

export const metadata: Metadata = {
  title: `SafePal Wallet Review (${CURRENT_YEAR}) - Affordable Air-Gapped Hardware Wallet | ${SITE_NAME}`,
  description: `Complete SafePal wallet review for ${CURRENT_YEAR}. Covers the S1 air-gapped hardware wallet, software wallet, 100+ chain support, and Binance Labs backing.`,
};

const overview =
  "SafePal is a cryptocurrency wallet ecosystem that offers both a hardware wallet (S1) and a software wallet app. The S1 hardware wallet is notable for being one of the most affordable air-gapped hardware wallets on the market, using QR code communication rather than USB or Bluetooth. SafePal was the first hardware wallet project backed by Binance Labs, giving it credibility and integration advantages within the Binance ecosystem.\n\nThe SafePal ecosystem supports 100+ blockchains and over 10 million tokens. The software wallet app (available on iOS and Android) serves as both a standalone hot wallet and the companion app for the S1 hardware wallet. The SFP token is the platform's utility token, providing fee discounts and exclusive features. SafePal positions itself as an accessible entry point for users who want hardware-level security without the premium price tag of Ledger or Trezor.";

const sections = [
  {
    id: "s1-hardware",
    title: "S1 Air-Gapped Hardware Wallet",
    content:
      "The SafePal S1 is a compact, battery-powered hardware wallet that communicates exclusively through QR codes. It has no USB, Bluetooth, WiFi, or NFC connectivity, making it fully air-gapped. Transaction signing works by scanning QR codes between the S1 and the SafePal app on your phone. The device features a small D-pad for navigation, a camera for scanning QR codes, and a screen for displaying transaction details and QR codes. At $49.99, it is one of the most affordable air-gapped hardware wallets available, making hardware security accessible to a wider audience.",
  },
  {
    id: "software-wallet",
    title: "Software Wallet App",
    content:
      "The SafePal software wallet app functions as both a standalone hot wallet and the companion interface for the S1 hardware wallet. The app supports 100+ blockchains with a unified portfolio view, built-in swap aggregation, dApp browser, and staking products. The app provides a clean interface for managing diverse multi-chain portfolios. Users can switch between hardware-secured accounts (requiring S1 for signing) and software-only accounts within the same app.",
  },
  {
    id: "chain-support",
    title: "Multi-Chain Support",
    content:
      "SafePal supports over 100 blockchains including Bitcoin, Ethereum, BNB Chain, Solana, Polygon, Avalanche, Cosmos, and many others. The claimed support for 10 million+ tokens covers the vast majority of assets across all supported chains through automatic token detection. This breadth of support makes SafePal one of the most chain-comprehensive wallet solutions available. The BNB Chain integration is particularly strong given the Binance Labs backing.",
  },
  {
    id: "binance-integration",
    title: "Binance Ecosystem Integration",
    content:
      "As a Binance Labs portfolio company, SafePal has strong integration with the Binance ecosystem. The wallet provides native BNB Chain support, easy connectivity to Binance DEX, and features that complement the Binance exchange experience. The SFP token is listed on Binance and can be used within the SafePal ecosystem for fee discounts and exclusive features. This integration makes SafePal a natural companion for Binance exchange users who want self-custody.",
  },
  {
    id: "security",
    title: "Security Considerations",
    content:
      "The S1 hardware wallet's air-gapped design provides strong protection against remote attacks. The device uses a secure element chip for key storage and requires physical interaction for all operations. However, the S1's small screen can make verifying long addresses challenging. The firmware is not fully open-source, which limits independent verification. The software wallet has been subject to scrutiny regarding past security practices, and users should keep the app updated. Overall, the S1 hardware wallet provides genuine security improvements over software-only wallets at an accessible price point.",
  },
];

const fees: Record<string, string> = {
  "SafePal S1 Hardware Wallet": "$49.99",
  "Software Wallet App": "Free",
  "Token Swaps": "DEX aggregator fees (variable)",
  "Network Fees": "Standard blockchain gas fees",
  "SFP Staking": "No platform fee",
};

const security = [
  "Air-gapped QR code communication on S1 hardware wallet",
  "Secure element chip for key storage on hardware wallet",
  "No USB, Bluetooth, WiFi, or NFC on S1 (fully isolated)",
  "Self-destruct mechanism on hardware tampering detection",
  "Biometric authentication on mobile app",
  "12-word or 24-word seed phrase backup",
  "Binance Labs backing provides institutional credibility",
];

const features = [
  "Affordable $49.99 air-gapped hardware wallet (S1)",
  "100+ blockchain support with 10M+ token coverage",
  "Combined hardware and software wallet ecosystem",
  "Built-in swap aggregator across supported chains",
  "dApp browser for DeFi and Web3 access",
  "Binance ecosystem integration and BNB Chain optimization",
  "SFP utility token for fee discounts and features",
  "Staking products for select proof-of-stake assets",
];

const faqs = [
  {
    question: "Is the SafePal S1 a good hardware wallet?",
    answer:
      "The SafePal S1 offers genuine air-gapped security at the most affordable price point in its category. For users who want basic hardware wallet protection without spending $80-200+, it is a solid choice. The tradeoffs include a small screen, non-open-source firmware, and more modest build quality. For the price, the security upgrade over a software-only wallet is significant.",
  },
  {
    question: "How does SafePal compare to Ledger?",
    answer:
      "Ledger offers a more mature ecosystem, better build quality, larger screens (on Nano X and Stax), and the polished Ledger Live companion app. SafePal is significantly cheaper ($49.99 vs $79-399), offers an air-gapped design (Ledger uses USB/Bluetooth), and supports more blockchains. Choose SafePal for budget and air-gap; choose Ledger for build quality and ecosystem.",
  },
  {
    question: "What is the SFP token?",
    answer:
      "SFP is SafePal's native utility token used for fee discounts on swaps within the app, exclusive product access, and staking rewards. It is a BEP-20 token on BNB Chain and is listed on Binance. Holding SFP provides platform benefits but is not required to use the basic wallet functionality.",
  },
  {
    question: "Can I use SafePal without the hardware wallet?",
    answer:
      "Yes. The SafePal software wallet app functions as a standalone hot wallet without the S1 hardware device. You can manage multi-chain assets, use the swap aggregator, access dApps, and stake tokens using only the mobile app. The S1 adds hardware-level security for transaction signing when connected.",
  },
];

const relatedReviews = [
  { name: "Ledger", slug: "ledger" },
  { name: "Tangem", slug: "tangem" },
  { name: "Keystone", slug: "keystone" },
];

const relatedGuides = [
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets" },
  { title: "Wallet Backup Strategies", href: "/wallets/learn/wallet-backup-strategies" },
];

export default function SafePalReviewPage() {
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
