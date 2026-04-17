import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

const product = {
  name: "Tangem",
  slug: "tangem",
  rating: 4.0,
  description: "Tangem is a card-shaped hardware wallet using NFC technology and a secure chip (EAL6+). No batteries, no cables - just tap your phone to sign transactions.",
  pros: [
    "Credit-card form factor with NFC - no cables or batteries needed",
    "EAL6+ certified secure chip for strong key protection",
    "No seed phrase by default (backup card system)",
    "Supports 6,000+ tokens across 30+ blockchains",
  ],
  cons: [
    "Requires NFC-enabled smartphone to use",
    "No desktop interface or USB connectivity",
    "No screen on the device for transaction verification",
    "Less established brand compared to Ledger or Trezor",
  ],
  fees: "$54.90 for 3-card set",
  bestFor: "Users wanting simple, portable hardware security",
  affiliateUrl: "https://degen0x.com/go/tangem",
  category: "wallets",
};

export const metadata: Metadata = {
  title: `Tangem Wallet Review (2026) - NFC Card Hardware Wallet | degen0x`,
  description: `Complete Tangem wallet review for ${CURRENT_YEAR}. Covers the NFC card design, EAL6+ secure chip, backup system, supported chains, and mobile experience.`,
  alternates: { canonical: "/wallets/reviews/tangem" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Tangem is a hardware cryptocurrency wallet that takes a radically different approach to cold storage. Instead of a USB device with a screen, Tangem wallets are thin, credit-card-sized NFC cards that communicate with your smartphone via tap. Each card contains an EAL6+ certified secure element chip that generates and stores your private key, which never leaves the card. The wallet ships as a set of 2 or 3 cards: one primary and one or two backup cards that mirror the key.\n\nTangem's approach eliminates several pain points of traditional hardware wallets: there are no batteries to charge, no cables to carry, no firmware updates to install, and by default no seed phrase to manage (the backup cards serve as your recovery method). The companion mobile app provides the wallet interface, supporting 6,000+ tokens across 30+ blockchains. Transactions are signed by tapping the Tangem card to your NFC-enabled phone.";

const sections = [
  {
    id: "card-design",
    title: "NFC Card Design & Hardware",
    content:
      "Each Tangem card is a thin, waterproof, dustproof card with an embedded secure element chip (Samsung S3D350A, EAL6+ certified). The card communicates with your smartphone via NFC (Near Field Communication) technology. There are no batteries, screens, or buttons on the card. The design is intended for maximum durability and portability, fitting easily in a standard wallet alongside credit cards. The cards are rated for temperatures from -25 to 50 degrees Celsius and have an expected lifespan of over 25 years.",
  },
  {
    id: "backup-system",
    title: "Multi-Card Backup System",
    content:
      "Tangem wallets ship as multi-card sets (2 or 3 cards). During initial setup, the primary card generates a private key within its secure element, and this key is then cryptographically cloned to the backup card(s). Each card can independently sign transactions, so if one card is lost or damaged, the backup cards provide full access to your funds. This eliminates the need for a traditional seed phrase. Users who prefer seed phrase backup can opt to export one, but Tangem's default multi-card approach is simpler and less error-prone for most users.",
  },
  {
    id: "mobile-app",
    title: "Mobile App Experience",
    content:
      "The Tangem mobile app (iOS and Android) provides the wallet interface for managing your portfolio, initiating transactions, and accessing dApps. The app displays balances across all supported chains, provides swap functionality powered by DEX aggregators, and includes a WalletConnect integration for dApp connectivity. To sign any transaction, you tap your Tangem card to your phone's NFC reader. This physical tap requirement means no transaction can be authorized without physical possession of the card, providing strong security against remote attacks.",
  },
  {
    id: "supported-chains",
    title: "Supported Chains & Tokens",
    content:
      "Tangem supports 6,000+ tokens across 30+ blockchains including Bitcoin, Ethereum, Solana, Polygon, Avalanche, BNB Chain, Cardano, Cosmos, Polkadot, and many more. The multi-chain support is comprehensive for a hardware wallet. The app automatically detects tokens on supported chains and displays them in a unified portfolio view. New chains and tokens are added through app updates, which do not require card firmware updates.",
  },
  {
    id: "security-model",
    title: "Security Architecture",
    content:
      "The EAL6+ certified secure element chip is the same class of hardware used in biometric passports and bank cards. The private key is generated within the chip and never leaves it in any form. Even Tangem as a company cannot extract the key. The chip is physically tamper-resistant, meaning destructive analysis of the card destroys the key. The NFC tap requirement for transaction signing provides physical 2FA by default. The card has no wireless connectivity other than NFC (range of a few centimeters), eliminating remote attack vectors.",
  },
];

const fees: Record<string, string> = {
  "2-Card Set": "$49.90",
  "3-Card Set": "$54.90",
  "Token Swaps": "DEX aggregator fees (variable)",
  "Network Fees": "Standard blockchain gas fees",
  "App & Firmware Updates": "Free",
};

const security = [
  "EAL6+ certified secure element chip (Samsung S3D350A)",
  "Private key generated and stored on-chip, never exported",
  "NFC-only communication (few centimeters range) prevents remote attacks",
  "Physical tap required for every transaction signing",
  "Multi-card backup eliminates seed phrase risk by default",
  "Waterproof, dustproof, temperature-resistant construction",
  "Independent third-party security audits of hardware and firmware",
];

const features = [
  "Credit-card-sized NFC hardware wallet with no batteries or cables",
  "EAL6+ secure chip for institutional-grade key protection",
  "Multi-card backup system (2 or 3 cards per set)",
  "6,000+ supported tokens across 30+ blockchains",
  "Built-in swap functionality via DEX aggregators",
  "WalletConnect integration for dApp connectivity",
  "25+ year expected hardware lifespan",
  "Companion mobile app with portfolio management",
];

const faqs = [
  {
    question: "Is Tangem safe without a seed phrase?",
    answer:
      "Yes. Tangem's multi-card backup system provides redundancy without a seed phrase. Your private key exists on each card in the set, so losing one card does not mean losing access. The EAL6+ secure chip prevents key extraction. For most users, this is simpler and less risky than managing a seed phrase on paper. Users who want a seed phrase can optionally export one.",
  },
  {
    question: "What if I lose all my Tangem cards?",
    answer:
      "If you lose all cards and did not export a seed phrase, your funds are permanently inaccessible. This is why Tangem ships 2-3 card sets and recommends storing backup cards in separate secure locations. Treat your backup cards with the same importance as you would a seed phrase backup.",
  },
  {
    question: "Does Tangem work without internet?",
    answer:
      "The Tangem card itself does not need internet. However, the companion phone app needs internet access to broadcast transactions, check balances, and interact with blockchains. You can sign a transaction offline by tapping the card, but the app needs connectivity to submit it to the network.",
  },
  {
    question: "How does Tangem compare to Ledger?",
    answer:
      "Ledger devices have screens for on-device transaction verification, Bluetooth (Nano X), and a more mature software ecosystem (Ledger Live). Tangem offers a simpler form factor, no batteries or firmware updates, and a seedless backup system. Ledger is better for advanced users who want maximum verification capabilities. Tangem is better for users who prioritize simplicity and portability.",
  },
];

const relatedReviews = [
  { name: "Ledger", slug: "ledger" },
  { name: "Trezor", slug: "trezor" },
  { name: "SafePal", slug: "safepal" },
];

const relatedGuides = [
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Tangem', },
  ],
};

export default function TangemReviewPage() {
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
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "NFC Card Design & Hardware", "description": "Tangem is a card-shaped hardware wallet using NFC technology and a secure chip (EAL6+). No batteries, no cables - just tap your phone to sign transactions.", "url": "https://degen0x.com/wallets/reviews/tangem", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/wallets/reviews/arculus" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Arculus</a>
  <a href="/wallets/reviews/argent" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Argent</a>
  <a href="/wallets/reviews/atomic" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Atomic</a>
  <a href="/wallets/reviews/backpack-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Backpack Wallet</a>
  <a href="/wallets/reviews/bc-vault" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bc Vault</a>
  <a href="/wallets/reviews/binance-web3-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Binance Web3 Wallet</a>
  <a href="/wallets/reviews/bitbox" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitbox</a>
  <a href="/wallets/reviews/bitget-wallet" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitget Wallet</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
