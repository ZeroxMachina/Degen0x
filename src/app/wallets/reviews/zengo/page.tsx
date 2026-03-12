import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "ZenGo",
  slug: "zengo",
  rating: 4.1,
  description:
    "ZenGo is a keyless crypto wallet using MPC (multi-party computation) technology to eliminate seed phrases. Supports 120+ assets with built-in swaps, staking, and Web3 access.",
  pros: [
    "No seed phrase required thanks to MPC threshold signature technology",
    "Biometric recovery eliminates the risk of lost seed phrases",
    "Clean, beginner-friendly mobile-first interface",
    "Built-in token swaps, staking, and Web3 browser",
  ],
  cons: [
    "Mobile-only with no desktop or browser extension version",
    "Closed-source MPC implementation requires trust in ZenGo",
    "Smaller asset selection (120+) compared to some competitors",
    "Limited DeFi functionality compared to MetaMask or Rabby",
  ],
  fees: "Free download; swap fees vary by provider",
  bestFor: "Beginners and users who want to avoid seed phrase management",
  affiliateUrl: "https://degen0x.com/go/zengo",
  category: "wallets",
};

export const metadata: Metadata = {
  title: `ZenGo Wallet Review (${CURRENT_YEAR}) - Keyless MPC Wallet | ${SITE_NAME}`,
  description: `Complete ZenGo wallet review for ${CURRENT_YEAR}. Covers MPC technology, seedless recovery, supported assets, Web3 features, and security model.`,
};

const overview =
  "ZenGo is a cryptocurrency wallet that eliminates the traditional seed phrase through its implementation of MPC (multi-party computation) threshold signature technology. Instead of a single private key stored on your device, ZenGo splits the cryptographic key into two shares: one stored on your phone and one on ZenGo's servers. Both shares are needed to sign transactions, but neither party can access funds alone. Recovery is handled through biometric verification (face scan) and email, making it impossible to lose access through a forgotten or lost seed phrase.\n\nThis innovative approach addresses one of the biggest pain points in crypto: the fear of losing a seed phrase and permanently losing access to funds. ZenGo supports 120+ cryptocurrencies across multiple chains, offers built-in token swaps, staking, an NFT gallery, and a Web3 browser for dApp interaction. The wallet is available as a mobile app on iOS and Android.";

const sections = [
  {
    id: "mpc-technology",
    title: "MPC Threshold Signature Technology",
    content:
      "ZenGo's MPC implementation splits the private key into two secret shares using threshold cryptography. Your device holds one share, and ZenGo's server holds the other. When you sign a transaction, both shares participate in the signing process without ever being combined into a single key. This means your device alone cannot sign transactions (protecting against device theft), and ZenGo's server alone cannot sign transactions (protecting against a rogue company). The mathematical proofs behind MPC are well-established in cryptographic research.",
  },
  {
    id: "recovery-system",
    title: "Biometric Recovery (No Seed Phrase)",
    content:
      "ZenGo's recovery system uses a combination of biometric face scanning, email verification, and encrypted cloud backup. When you set up ZenGo, a 3D face map is created and encrypted. If you lose your device, you can recover your wallet on a new phone by verifying your email and face scan. This eliminates the single point of failure that seed phrases represent. The biometric data is processed locally and the encrypted result is stored securely. For users who dread the responsibility of safeguarding a 12-word seed phrase, ZenGo's approach is transformative.",
  },
  {
    id: "supported-assets",
    title: "Supported Assets & Chains",
    content:
      "ZenGo supports 120+ cryptocurrencies across Bitcoin, Ethereum, Polygon, and other major chains. Major assets like BTC, ETH, SOL, MATIC, and popular ERC-20 tokens are all available. The wallet displays portfolio value, individual token balances, and price charts. While the selection covers most mainstream needs, users seeking access to hundreds of niche altcoins or newer chains may find the catalog limiting compared to wallets like MetaMask or Trust Wallet.",
  },
  {
    id: "web3-features",
    title: "Web3 Browser & DeFi Access",
    content:
      "ZenGo includes a built-in Web3 browser for connecting to decentralized applications. You can access DeFi protocols, NFT marketplaces, and other dApps directly within the app. The wallet also features built-in token swaps powered by multiple DEX aggregators, staking for select assets, and an NFT gallery for viewing your collection. While the Web3 functionality is solid, dedicated DeFi wallets like MetaMask or Rabby offer deeper integration with the EVM ecosystem.",
  },
  {
    id: "security-model",
    title: "Security Model & Trust Assumptions",
    content:
      "ZenGo's security model requires trusting the company to maintain their key share server honestly and securely. While MPC cryptography is mathematically sound, ZenGo's specific implementation is not fully open-source, which means independent verification is limited. ZenGo has published research papers and undergone security audits. The wallet includes transaction simulation, phishing protection, and real-time asset monitoring. The company has a Guardian feature that designates a recovery contact for emergency access. For users concerned about the trust model, ZenGo has stated that they plan to open-source more components over time.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free",
  "Token Swaps": "Varies by aggregator provider",
  "Buy Crypto": "Third-party provider fees (MoonPay, Banxa)",
  "Network Fees": "Standard blockchain gas fees",
  "Staking": "No ZenGo fee (network/validator fees apply)",
};

const security = [
  "MPC threshold signatures eliminate single point of key failure",
  "Biometric (3D face scan) recovery without seed phrases",
  "Neither device nor server can sign transactions alone",
  "Transaction simulation previews outcomes before signing",
  "Phishing and malicious site detection",
  "Guardian feature for emergency recovery contact",
  "Regular third-party security audits",
];

const features = [
  "No seed phrase required - MPC threshold signature technology",
  "Biometric face scan recovery for lost device situations",
  "120+ supported cryptocurrencies across major chains",
  "Built-in token swaps powered by DEX aggregators",
  "Web3 browser for DeFi and dApp access",
  "NFT gallery with collection viewing",
  "In-app crypto purchases via MoonPay and Banxa",
  "Staking support for select proof-of-stake assets",
];

const faqs = [
  {
    question: "Is ZenGo safe without a seed phrase?",
    answer:
      "ZenGo's MPC technology is mathematically secure and eliminates the risk of seed phrase theft or loss, which is the most common way people lose crypto. The tradeoff is that you must trust ZenGo to maintain their key share server. Neither party can access funds alone, and the cryptographic proofs are well-established. For most users, especially beginners, the elimination of seed phrase risk is a net security improvement.",
  },
  {
    question: "What happens if ZenGo goes out of business?",
    answer:
      "ZenGo has implemented a decentralized recovery mechanism using time-locked encryption. If ZenGo becomes unavailable, a master decryption key is released through a decentralized protocol, allowing users to reconstruct their full private key and migrate to another wallet. This safeguard means your funds are not permanently locked even if ZenGo ceases operations.",
  },
  {
    question: "Can I use ZenGo with hardware wallets?",
    answer:
      "No. ZenGo's MPC architecture is incompatible with traditional hardware wallets, which use standard private key storage. ZenGo is designed as a standalone solution that provides security through its MPC model rather than through hardware device isolation.",
  },
  {
    question: "Is ZenGo open-source?",
    answer:
      "ZenGo's MPC library is partially open-source and the underlying cryptographic research has been published. However, the full wallet application is not open-source. The company has undergone multiple security audits and has been transparent about its cryptographic approach, but full code verification is not possible.",
  },
];

const relatedReviews = [
  { name: "Phantom", slug: "phantom" },
  { name: "Trust Wallet", slug: "trust-wallet" },
  { name: "Coinbase Wallet", slug: "coinbase-wallet" },
];

const relatedGuides = [
  { title: "Seed Phrase Security", href: "/wallets/learn/seed-phrase-security" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
];

export default function ZenGoReviewPage() {
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
