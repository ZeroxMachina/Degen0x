import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { walletProducts } from "@/data/wallets";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = walletProducts.find((p) => p.slug === "ledger")!;

export const metadata: Metadata = {
  title: `Ledger Nano X Review (2026) - Fees, Security & Features | degen0x`,
  description: `In-depth Ledger Nano X review for ${CURRENT_YEAR}. We tested Ledger's Bluetooth hardware wallet covering security, supported coins, Ledger Live app, fees, and ease of use.`,
  alternates: { canonical: "/wallets/reviews/ledger" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Ledger is the world's most popular hardware wallet brand, trusted by millions of users to secure their cryptocurrency offline. The Ledger Nano X, the company's flagship device, combines a certified Secure Element chip (CC EAL5+) with Bluetooth connectivity so you can manage your portfolio on the go via the Ledger Live mobile app. With support for over 5,500 cryptocurrencies, built-in staking, DeFi access, and NFT management, the Ledger ecosystem covers virtually every use case a crypto investor might need. The device itself is compact, battery-powered, and features a small OLED screen for verifying transactions directly on the hardware.";

const sections = [
  {
    id: "supported-assets",
    title: "Supported Assets & Chains",
    content:
      "The Ledger Nano X supports over 5,500 cryptocurrencies including Bitcoin, Ethereum, Solana, Cardano, Polkadot, Polygon, Avalanche, and virtually every major blockchain network. Through the Ledger Live app you can install dedicated apps for each blockchain and manage up to 100 simultaneously. ERC-20, BEP-20, SPL, and other token standards are all supported. Ledger regularly adds new chains and tokens through firmware and app updates.",
  },
  {
    id: "ledger-live",
    title: "Ledger Live App",
    content:
      "Ledger Live is the companion desktop and mobile app that serves as your portfolio command center. It enables you to buy, sell, swap, and stake crypto directly from the interface while keeping your keys safely on the hardware device. The app features real-time portfolio tracking, price alerts, and a clean dashboard that shows your holdings across all chains. You can also access DeFi protocols and NFT galleries through the integrated discover section.",
  },
  {
    id: "hardware-design",
    title: "Hardware Design & Build Quality",
    content:
      "The Nano X has a sleek stainless steel and plastic body that fits easily on a keychain. It features a 128x64 pixel OLED display for verifying addresses and transaction details, plus two physical buttons for navigation. The built-in battery lasts approximately 8 hours on a single charge, and the device connects via Bluetooth to your phone or USB-C to your computer. It measures 72mm x 18.6mm x 11.75mm and weighs just 34 grams.",
  },
  {
    id: "setup-experience",
    title: "Setup & User Experience",
    content:
      "Setting up the Ledger Nano X takes about 10 minutes. You initialize the device, create a PIN code, and write down your 24-word recovery phrase on the provided cards. Then you download Ledger Live, pair your device via Bluetooth or USB, and install the apps for the blockchains you want to use. The Ledger Live interface guides you through every step, and the overall experience is smooth even for hardware wallet newcomers. Sending and receiving crypto requires physical confirmation on the device screen, which adds security without adding excessive friction.",
  },
  {
    id: "staking-defi",
    title: "Staking & DeFi Integration",
    content:
      "Ledger Live supports native staking for Ethereum, Solana, Cosmos, Tezos, Polkadot, and several other proof-of-stake networks. You can delegate your assets to validators and earn rewards directly in the app. For DeFi, Ledger integrates with protocols like Lido, Aave, Compound, and Yearn through its discover section. You can also connect your Ledger to MetaMask, Rabby, or other browser wallets to use any dApp while keeping your keys on the hardware device.",
  },
  {
    id: "ledger-recover",
    title: "Ledger Recover (Optional Service)",
    content:
      "Ledger offers an optional paid service called Ledger Recover that encrypts and splits your seed phrase into three fragments stored with independent custodians (Ledger, Coincover, and EscrowTech). This allows you to recover your wallet using an ID verification process if you lose your seed phrase. The service costs $9.99 per month and is entirely optional. Some users have raised concerns about this service because it transmits seed data from the device, but Ledger maintains it uses end-to-end encryption and the feature must be explicitly activated by the user.",
  },
];

const fees: Record<string, string> = {
  "Ledger Nano X": "$149",
  "Ledger Nano S Plus": "$79",
  "Ledger Stax": "$279",
  "Ledger Live Swaps": "Provider-dependent (typically 1-3%)",
  "Ledger Live Buy Crypto": "Provider-dependent (Moonpay, Ramp, etc.)",
  "Ledger Recover": "$9.99/month (optional)",
  "Network Fees": "Standard blockchain fees apply",
};

const security = [
  "Certified Secure Element chip (CC EAL5+) stores private keys in tamper-resistant hardware",
  "Keys never leave the device and are never exposed to the internet or your computer",
  "Physical button confirmation required for every transaction",
  "PIN code protection with wipe after 3 incorrect attempts",
  "24-word BIP-39 recovery phrase for backup and restore",
  "Genuine check feature verifies device authenticity on each connection",
  "Regular firmware updates to patch vulnerabilities and add features",
];

const features = [
  "Bluetooth connectivity for wireless mobile management",
  "Supports 5,500+ cryptocurrencies across all major blockchains",
  "Ledger Live app for portfolio tracking, staking, swaps, and DeFi",
  "NFT management and gallery display in Ledger Live",
  "Can install up to 100 blockchain apps simultaneously",
  "USB-C connectivity for desktop use",
  "Compatible with MetaMask, Rabby, and other third-party wallets",
  "Built-in battery with approximately 8 hours of life",
];

const faqs = [
  {
    question: "Is Ledger Nano X safe to use?",
    answer:
      "Yes. The Ledger Nano X uses a CC EAL5+ certified Secure Element chip, the same type of chip used in passports and bank cards. Your private keys are generated and stored on this chip and never leave the device. Every transaction requires physical confirmation on the device screen. As long as you keep your 24-word recovery phrase safe and offline, the Ledger Nano X is one of the most secure ways to store crypto.",
  },
  {
    question: "What is the difference between Ledger Nano X and Nano S Plus?",
    answer:
      "The main differences are Bluetooth connectivity, battery, and storage. The Nano X has Bluetooth and a battery so it can connect wirelessly to your phone, while the Nano S Plus requires a USB-C cable. The Nano X can store up to 100 apps versus about 100 for the S Plus as well, though this gap has narrowed. Both use the same Secure Element chip. The Nano X costs $149 versus $79 for the S Plus.",
  },
  {
    question: "Is the Ledger Recover service safe?",
    answer:
      "Ledger Recover is optional and uses end-to-end encryption to split your seed into three encrypted fragments stored with independent parties. The service requires identity verification for recovery. While some users prefer not to use it due to the principle of seed data leaving the device, Ledger maintains it is secure. You are never required to use Ledger Recover and can rely solely on your physical seed phrase backup instead.",
  },
  {
    question: "Can I use Ledger with MetaMask?",
    answer:
      "Yes. You can connect your Ledger hardware wallet to MetaMask to sign transactions on Ethereum and all EVM-compatible chains. This gives you the convenience of the MetaMask interface while keeping your private keys secure on the Ledger device. Connect via USB or Bluetooth in MetaMask's hardware wallet settings.",
  },
  {
    question: "How many coins can I store on Ledger Nano X?",
    answer:
      "The Ledger Nano X supports over 5,500 cryptocurrencies. You can install up to 100 blockchain apps on the device at the same time. If you need more, you can uninstall and reinstall apps without losing your funds since your keys are derived from your seed phrase. Essentially, you can manage an unlimited number of assets over time.",
  },
];

const relatedReviews = [
  { name: "Trezor", slug: "trezor" },
  { name: "MetaMask", slug: "metamask" },
  { name: "Exodus", slug: "exodus" },
];

const relatedGuides = [
  { title: "Hot vs Cold Wallets Explained", href: "/wallets/learn/hot-vs-cold-wallets" },
  { title: "How to Set Up a Crypto Wallet", href: "/wallets/learn/how-to-set-up-wallet" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Ledger', },
  ],
};

export default function LedgerReviewPage() {
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
