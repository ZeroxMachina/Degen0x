import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

import ArticleSchema from "@/components/ArticleSchema";

import AuthoritySources from "@/components/AuthoritySources";

import ReviewSchema from "@/components/ReviewSchema";

import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";

const product = {
  name: "Keystone",
  slug: "keystone",
  rating: 4.2,
  description: "Keystone is an air-gapped hardware wallet using QR code communication instead of USB/Bluetooth. Features a large touchscreen, open-source firmware, and",
  pros: [
    "Fully air-gapped with QR code communication (no USB/Bluetooth/WiFi)",
    "Large touchscreen for easy transaction verification",
    "Open-source firmware for transparency and community audit",
    "Supports MetaMask, Rabby, and other software wallets as companion",
  ],
  cons: [
    "QR code signing requires camera on both devices",
    "Bulkier than card-shaped competitors like Tangem",
    "Smaller app ecosystem compared to Ledger Live",
    "Premium pricing for higher-end models",
  ],
  fees: "$119-$169 depending on model",
  bestFor: "Security-focused users who want air-gapped transaction signing",
  affiliateUrl: "https://degen0x.com/go/keystone",
  category: "wallets",
};

export const metadata: Metadata = {
  title: `Keystone Wallet Review (2026) - Air-Gapped QR Code Hardware Wallet | degen0x`,
  description: `Complete Keystone wallet review for ${CURRENT_YEAR}. Covers air-gapped QR code signing, touchscreen interface, open-source firmware, and MetaMask integration.`,
  alternates: { canonical: "/wallets/reviews/keystone" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Keystone (formerly Cobo Vault) is a hardware wallet that prioritizes maximum security through a fully air-gapped design. Unlike Ledger and Trezor devices that connect to computers via USB (and sometimes Bluetooth), Keystone communicates exclusively through QR codes. Transaction data is displayed as a QR code on your phone, scanned by Keystone's camera, signed offline, and the signed result is displayed as a QR code scanned back by your phone. This air-gap ensures the device never has a wired or wireless connection that could be exploited.\n\nKeystone features a large 4-inch touchscreen display for clear transaction verification, open-source firmware, and support for multiple blockchains. The device can be paired with MetaMask, Rabby, and other software wallets as a signing device, making it compatible with the broader DeFi ecosystem. Keystone offers multiple models including the Essential (entry-level) and Pro (premium with fingerprint sensor and additional security features).";

const sections = [
  {
    id: "air-gapped-design",
    title: "Air-Gapped QR Code Communication",
    content:
      "Keystone's defining feature is its fully air-gapped design. The device has no USB port, Bluetooth, WiFi, or NFC. All communication between the device and your phone or computer happens through QR codes. When you want to sign a transaction, the unsigned transaction is displayed as a QR code on your phone (through MetaMask or Keystone's companion app). You scan this QR code with Keystone's built-in camera, review the transaction details on the large screen, approve it, and the signed transaction is displayed as a QR code on Keystone's screen, which you scan with your phone to broadcast. This complete isolation eliminates entire categories of attack vectors.",
  },
  {
    id: "touchscreen",
    title: "Large Touchscreen Display",
    content:
      "Keystone features a 4-inch touchscreen that provides ample space for displaying transaction details clearly. You can verify recipient addresses, amounts, fee details, and smart contract interactions on the device screen before signing. The touchscreen also makes navigating menus, entering PINs, and managing settings much easier than devices with small screens and limited buttons. The display quality is good, with clear text rendering that makes address verification straightforward.",
  },
  {
    id: "metamask-integration",
    title: "MetaMask & Software Wallet Integration",
    content:
      "Keystone integrates with MetaMask (extension), Rabby, Sparrow Wallet (Bitcoin), and other popular software wallets through QR code pairing. This means you can use your preferred wallet interface while keeping your keys secured on the air-gapped Keystone device. The integration with MetaMask is particularly valuable, giving Keystone users full access to the Ethereum DeFi ecosystem with hardware-wallet-level security. The QR code signing process adds a few seconds to each transaction but provides significantly stronger security than USB-connected alternatives.",
  },
  {
    id: "open-source",
    title: "Open-Source Firmware",
    content:
      "Keystone's firmware is open-source and available on GitHub for community review. This transparency allows security researchers to audit the code for vulnerabilities and verify that the device behaves as expected. The open-source approach builds trust and allows the community to contribute to security improvements. Keystone has also undergone independent security audits by reputable firms, providing additional assurance beyond the open-source codebase.",
  },
  {
    id: "multi-chain",
    title: "Multi-Chain Support",
    content:
      "Keystone supports Bitcoin, Ethereum, and all EVM-compatible chains, Solana, Cosmos, Polkadot, and other major blockchains. The device handles different signature schemes natively. Bitcoin support includes full PSBT (Partially Signed Bitcoin Transactions) compatibility for use with Sparrow, BlueWallet, and other Bitcoin wallets. Ethereum support covers EIP-712 typed data signing for DeFi interaction. The breadth of chain support makes Keystone a versatile choice for multi-chain users.",
  },
];

const fees: Record<string, string> = {
  "Keystone Essential": "~$119",
  "Keystone Pro": "~$169",
  "Firmware Updates": "Free (via microSD card)",
  "Network Fees": "Standard blockchain gas fees",
};

const security = [
  "Fully air-gapped with zero wired or wireless connectivity",
  "QR code-only communication eliminates remote attack vectors",
  "Open-source firmware on GitHub for community audit",
  "Large touchscreen for clear transaction verification",
  "Secure element chip for private key storage",
  "Self-destruct mechanism on Pro model (tamper detection)",
  "Independent third-party security audits",
  "Fingerprint sensor on Pro model for biometric confirmation",
];

const features = [
  "Fully air-gapped design with QR code communication only",
  "4-inch touchscreen for detailed transaction verification",
  "Open-source firmware available on GitHub",
  "MetaMask, Rabby, and Sparrow Wallet integration",
  "Multi-chain support including Bitcoin, Ethereum, Solana, Cosmos",
  "PSBT support for advanced Bitcoin transactions",
  "Firmware updates via microSD card (air-gapped process)",
  "Fingerprint sensor on Pro model",
];

const faqs = [
  {
    question: "Why is air-gapped better than USB/Bluetooth?",
    answer:
      "USB and Bluetooth connections create potential attack surfaces that could be exploited by malware on your computer. An air-gapped device that only communicates through QR codes has no electronic connection that can be compromised remotely. The tradeoff is a slightly slower transaction signing process (scanning QR codes takes a few extra seconds), but the security improvement is significant.",
  },
  {
    question: "Can I use Keystone with MetaMask?",
    answer:
      "Yes. Keystone integrates with MetaMask's browser extension through QR code pairing. You connect Keystone to MetaMask by scanning a QR code, and all subsequent transaction signing happens through QR code exchange. This gives you MetaMask's full DeFi functionality with Keystone's air-gapped security.",
  },
  {
    question: "How does firmware update work without USB?",
    answer:
      "Keystone firmware updates are delivered via microSD card. You download the update file to a microSD card from Keystone's website, insert the card into the device, and install the update. This maintains the air-gap throughout the update process. The update files are cryptographically signed to prevent tampering.",
  },
  {
    question: "How does Keystone compare to Ledger?",
    answer:
      "Keystone offers stronger isolation through its air-gapped design (no USB/Bluetooth), open-source firmware, and a larger screen. Ledger offers a more mature app ecosystem (Ledger Live), Bluetooth convenience (Nano X), and broader brand recognition. Keystone is the more secure option for those who prioritize maximum isolation. Ledger is more convenient for everyday use.",
  },
];

const relatedReviews = [
  { name: "Ledger", slug: "ledger" },
  { name: "Trezor", slug: "trezor" },
  { name: "OneKey", slug: "onekey" },
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
    { '@type': 'ListItem', position: 4, name: 'Keystone', },
  ],
};

export default function KeystoneReviewPage() {
  return (
    <>
      <ReviewSchema
        itemName="Keystone Wallet Review (2026) - Air-Gapped QR Code Hardware Wallet"
        url="https://degen0x.com/wallets/reviews/keystone"
        rating={4.0}
        datePublished="2024-06-01"
        dateModified="2026-04-17"
      />
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
      <ArticleSchema
        headline="Keystone Wallet Review (2026) - Air-Gapped QR Code Hardware Wallet | degen0x"
        description="Keystone is an air-gapped hardware wallet using QR code communication instead of USB/Bluetooth. Features a large touchscreen, open-source firmware, and"
        url="https://degen0x.com/wallets/reviews/keystone"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Reviews"
      />
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/wallets/reviews/keystone" />
        <ReadingTime />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Air-Gapped QR Code Communication", "description": "Keystone is an air-gapped hardware wallet using QR code communication instead of USB/Bluetooth. Features a large touchscreen, open-source firmware, and", "url": "https://degen0x.com/wallets/reviews/keystone", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
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
