import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blockstream Jade Wallet Review (${CURRENT_YEAR}) - Best Budget Hardware Wallet? | ${SITE_NAME}`,
  description: `Detailed Blockstream Jade review for ${CURRENT_YEAR}. Covers air-gapped signing, virtual secure element, Bitcoin-focused features, and Liquid Network support.`,
  alternates: { canonical: "/wallets/reviews/jade-wallet" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const product = {
  name: "Blockstream Jade",
  slug: "jade-wallet",
  rating: 4.2,
  description: "Blockstream Jade is a fully open-source Bitcoin hardware wallet featuring air-gapped QR code signing, a virtual secure element, and native Liquid Network",
  pros: [
    "Fully open source — both hardware and firmware",
    "Air-gapped operation via QR code camera for maximum security",
    "Affordable price point compared to Ledger and Trezor",
    "Native Liquid Network support for L-BTC and Tether",
  ],
  cons: [
    "Bitcoin and Liquid Network only — no altcoin support",
    "Small screen makes transaction verification less comfortable",
    "Virtual secure element is novel and less proven than traditional chips",
  ],
  bestFor: "Bitcoin maximalists who want an affordable, open-source hardware wallet with air-gapped capability",
  affiliateUrl: "#",
  category: "wallets",
};

const overview = `Blockstream Jade is a hardware wallet designed specifically for Bitcoin users by Blockstream, one of the most prominent Bitcoin infrastructure companies. The device stands out for being fully open source — both the hardware design and firmware code are publicly available for inspection and verification. At a price point significantly below Ledger and Trezor flagship devices, Jade delivers security features that compete with much more expensive options, including air-gapped transaction signing via QR codes and a unique virtual secure element approach to key storage.

The wallet focuses exclusively on Bitcoin and the Liquid Network, Blockstream's Bitcoin sidechain. It works with Blockstream Green as its companion app, available on desktop and mobile. The Jade device features a color screen, built-in camera for QR code scanning, and Bluetooth connectivity for mobile use. For Bitcoin-only users who value open-source transparency and want hardware wallet security without the premium price tag, Jade represents one of the best value propositions in the hardware wallet market.`;

const sections = [
  {
    id: "air-gapped",
    title: "Air-Gapped QR Code Signing",
    content: "Jade supports fully air-gapped transaction signing using its built-in camera and display. In air-gapped mode, the device never connects to a computer or phone via USB or Bluetooth. Instead, you create a transaction in Blockstream Green on your phone, display it as a QR code, scan it with Jade's camera, review and sign on the device, then display the signed transaction as a QR code that your phone scans to broadcast. This complete isolation from any networked device eliminates entire categories of attack vectors. Even if your phone or computer is compromised with malware, the attacker cannot extract keys from a Jade that only communicates via visual QR codes. Few hardware wallets at any price point offer true air-gapped operation, making this feature particularly notable at Jade's budget price.",
  },
  {
    id: "virtual-secure-element",
    title: "Virtual Secure Element Technology",
    content: "Unlike Ledger which uses a physical secure element chip, Jade employs a virtual secure element that splits key material between the device and Blockstream's blind oracle server. During wallet unlock, Jade connects to Blockstream's server to retrieve an encrypted PIN secret without revealing the PIN or key material to the server. This means the device itself does not store the complete key at rest, so physical extraction attacks that could compromise a standard microcontroller are ineffective. The server never learns your PIN or keys — it only provides a blinded response that the device needs to reconstruct the signing key. This novel approach provides comparable security to physical secure elements while avoiding the proprietary, closed-source nature of traditional secure element chips. The entire protocol is documented and open source for public scrutiny.",
  },
  {
    id: "bitcoin-features",
    title: "Bitcoin-Specific Features",
    content: "Jade is purpose-built for Bitcoin, supporting all major Bitcoin address formats including Legacy, SegWit, Native SegWit, and Taproot. Multisig configurations are supported for users who want to create multi-key setups. The device works with PSBT (Partially Signed Bitcoin Transactions), the standard format for hardware wallet interactions. Jade displays full transaction details on its screen including recipient addresses, amounts, fees, and change outputs, allowing you to verify every aspect of a transaction before signing. The companion Blockstream Green app provides coin selection, fee estimation, and transaction construction with a clean interface optimized for Bitcoin users. For users who only hold Bitcoin and want a wallet that does one thing exceptionally well rather than many things adequately, Jade's focused approach is a strength.",
  },
  {
    id: "liquid-network",
    title: "Liquid Network Support",
    content: "Jade includes native support for the Liquid Network, Blockstream's Bitcoin sidechain designed for faster settlements and confidential transactions. Through Liquid, you can hold and transact L-BTC (Liquid Bitcoin) with one-minute block times instead of Bitcoin's ten-minute blocks. Liquid also supports issued assets including Tether (USDt) on the Liquid Network, making Jade one of the few hardware wallets that can natively secure Tether without using the Ethereum or Tron networks. Confidential transactions on Liquid hide the transaction amount from outside observers while still being cryptographically verifiable, providing enhanced privacy for Bitcoin users who need it. The Liquid functionality is fully integrated into Blockstream Green, making it as easy to use as standard Bitcoin transactions.",
  },
];

const fees: Record<string, string> = {
  "Device Purchase": "Starting around $65 USD",
  "Firmware Updates": "Free",
  "Blockstream Green App": "Free",
  "Bitcoin Transactions": "Standard Bitcoin network fees",
  "Liquid Transactions": "Minimal Liquid Network fees",
  "Air-Gapped Mode": "No additional cost",
};

const security = [
  "Fully open-source hardware and firmware design",
  "Air-gapped QR code signing eliminates network attack vectors",
  "Virtual secure element with blind oracle key protection",
  "PIN protection with anti-phishing measures",
  "On-device transaction verification with color display",
  "PSBT support for standard hardware wallet interactions",
  "Multisig support for multi-key security configurations",
];

const features = [
  "Bitcoin and Liquid Network focused hardware wallet",
  "Air-gapped transaction signing via QR code camera",
  "Virtual secure element with blind oracle protocol",
  "Color display for transaction verification",
  "Bluetooth connectivity for mobile use",
  "Blockstream Green companion app on desktop and mobile",
  "All Bitcoin address formats including Taproot",
  "Confidential transactions on Liquid Network",
];

const faqs = [
  {
    question: "Does Blockstream Jade support altcoins?",
    answer: "No. Jade is a Bitcoin-only hardware wallet that also supports the Liquid Network. It does not support Ethereum, Solana, or any other cryptocurrency. This focused approach allows Blockstream to optimize the entire experience for Bitcoin users. If you need altcoin support, consider Ledger, Trezor, or Keystone instead.",
  },
  {
    question: "Is the virtual secure element as safe as a physical secure element?",
    answer: "The virtual secure element provides comparable protection against physical extraction attacks through a different mechanism. Instead of relying on a tamper-resistant chip, it splits key material so the device never stores the complete key at rest. The trade-off is that initial setup and unlock require a brief server connection. In air-gapped mode after unlock, the device operates completely offline. Both approaches have been analyzed by security researchers, and the virtual secure element's open-source nature allows for independent verification that physical secure elements typically do not.",
  },
  {
    question: "How does Jade compare to Coldcard?",
    answer: "Both are Bitcoin-only hardware wallets with air-gapped capability. Coldcard has a longer track record, physical secure element, and more advanced power-user features like BIP85 and anti-duress PINs. Jade is significantly cheaper, fully open source including hardware design, and includes a color screen and camera for QR code scanning. Coldcard is preferred by advanced Bitcoin users who want maximum features, while Jade appeals to users who prioritize open-source transparency and budget-friendly pricing.",
  },
];

const relatedReviews = [
  { name: "Coldcard", slug: "coldcard" },
  { name: "Keystone", slug: "keystone" },
  { name: "Trezor", slug: "trezor" },
];

const relatedGuides = [
  { title: "Air-Gapped Wallets Guide", href: "/wallets/learn/air-gapped-wallets-guide" },
  { title: "Best Security Wallets", href: "/wallets/best/security" },
  { title: "Hardware Wallet Firmware Updates", href: "/wallets/learn/hardware-wallet-firmware-updates" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Jade Wallet', },
  ],
};

export default function JadeWalletReviewPage() {
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
