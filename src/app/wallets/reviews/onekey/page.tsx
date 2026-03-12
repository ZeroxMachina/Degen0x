import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "OneKey",
  slug: "onekey",
  rating: 4.1,
  description:
    "OneKey is a fully open-source hardware wallet ecosystem offering multiple form factors (Classic, Mini, Pro, Touch) with broad chain support, competitive pricing, and transparent security.",
  pros: [
    "Fully open-source firmware and software for independent verification",
    "Multiple form factors to suit different needs and budgets",
    "Competitive pricing compared to Ledger and Trezor",
    "Supports 1,000+ tokens across major blockchains",
  ],
  cons: [
    "Smaller ecosystem and community than Ledger or Trezor",
    "Some models have limited availability outside Asia",
    "Software wallet companion app is less mature than Ledger Live",
    "Brand recognition still growing in Western markets",
  ],
  fees: "$59-$279 depending on model",
  bestFor: "Open-source advocates seeking affordable hardware wallets",
  affiliateUrl: "https://degen0x.com/go/onekey",
  category: "wallets",
};

export const metadata: Metadata = {
  title: `OneKey Wallet Review (${CURRENT_YEAR}) - Open-Source Hardware Wallet | ${SITE_NAME}`,
  description: `Complete OneKey wallet review for ${CURRENT_YEAR}. Covers open-source design, hardware models, supported chains, security architecture, and value proposition.`,
};

const overview =
  "OneKey is a fully open-source hardware wallet brand that has gained significant traction, particularly in Asian markets. The company offers multiple hardware wallet form factors including the Classic (affordable entry-level), Mini (compact card-like design), Pro (professional with large screen), and Touch (premium touchscreen). All OneKey devices feature open-source firmware and are paired with an open-source companion app.\n\nOneKey supports 1,000+ tokens across major blockchains including Bitcoin, Ethereum, Solana, Polygon, and many others. The company emphasizes transparency, security, and affordability as its core values. Every component of the OneKey ecosystem, from hardware schematics to firmware code, is publicly available on GitHub for independent audit and verification. This open-source approach distinguishes OneKey from Ledger (closed-source firmware) and positions it alongside Trezor as a transparency-first option.";

const sections = [
  {
    id: "hardware-lineup",
    title: "Hardware Model Lineup",
    content:
      "OneKey offers four distinct hardware models. The Classic 1S is an entry-level device with a small screen and USB-C connectivity. The Mini is a card-shaped device with an e-ink display, NFC connectivity, and a rechargeable battery. The Pro is a professional-grade device with a large IPS display, fingerprint sensor, USB-C, and Bluetooth. The Touch is the premium model featuring a full color touchscreen, USB-C, and Bluetooth. This range allows users to choose based on their budget, portability needs, and desired feature set.",
  },
  {
    id: "open-source",
    title: "Fully Open-Source Design",
    content:
      "OneKey's commitment to open-source is comprehensive. The firmware, hardware schematics, companion app, and browser extension are all available on GitHub. This means security researchers, developers, and users can independently verify that there are no backdoors, hidden functionality, or security vulnerabilities in any component. The community can contribute to development and flag issues. This level of transparency is rare in the hardware wallet space, where most competitors keep at least some components proprietary.",
  },
  {
    id: "supported-chains",
    title: "Supported Chains & Tokens",
    content:
      "OneKey supports 1,000+ tokens across Bitcoin, Ethereum (and all EVM-compatible chains), Solana, Polygon, Avalanche, BNB Chain, and other major blockchains. The companion app provides portfolio management, transaction history, and balance tracking across all supported chains. Token support is continuously expanding through firmware and app updates. The device also supports NFT viewing for Ethereum and Solana collections.",
  },
  {
    id: "companion-app",
    title: "Companion App & Browser Extension",
    content:
      "The OneKey companion app is available on desktop (Windows, macOS, Linux), mobile (iOS, Android), and as a browser extension. The app provides the interface for managing your hardware wallet, viewing balances, initiating transactions, and connecting to dApps. The browser extension supports WalletConnect and direct dApp integration for DeFi access. While functional, the companion app is less polished than Ledger Live, with occasional UI quirks and a smaller selection of integrated features.",
  },
  {
    id: "security-architecture",
    title: "Security Architecture",
    content:
      "OneKey devices use secure element chips for key storage (in models that include them) alongside the open-source firmware. The devices generate and store private keys offline, requiring physical button presses or biometric confirmation to sign transactions. The on-device screen allows transaction verification before signing. Firmware updates are verified through cryptographic signatures. The combination of open-source code and hardware-level key isolation provides a strong security foundation that can be independently verified by anyone.",
  },
];

const fees: Record<string, string> = {
  "OneKey Classic 1S": "~$59",
  "OneKey Mini": "~$79",
  "OneKey Pro": "~$169",
  "OneKey Touch": "~$279",
  "App & Firmware Updates": "Free",
  "Network Fees": "Standard blockchain gas fees",
};

const security = [
  "Fully open-source firmware, hardware schematics, and software",
  "Secure element chip for private key storage (select models)",
  "On-device screen for transaction verification before signing",
  "Fingerprint sensor on Pro model for biometric confirmation",
  "Cryptographically signed firmware updates",
  "Air-gapped operation with offline key generation",
  "Community-auditable code on GitHub",
];

const features = [
  "Multiple hardware form factors (Classic, Mini, Pro, Touch)",
  "Fully open-source from firmware to companion app",
  "1,000+ supported tokens across major blockchains",
  "Companion app for desktop, mobile, and browser extension",
  "DeFi dApp connectivity through WalletConnect integration",
  "NFT viewing for Ethereum and Solana collections",
  "NFC connectivity on Mini model",
  "Bluetooth and fingerprint on Pro model",
];

const faqs = [
  {
    question: "How does OneKey compare to Ledger?",
    answer:
      "OneKey is fully open-source while Ledger's firmware is closed-source. OneKey offers more form factors and competitive pricing. Ledger has a more mature companion app (Ledger Live), broader ecosystem partnerships, and stronger brand recognition. If open-source transparency is your priority, OneKey wins. If ecosystem maturity matters more, Ledger has the advantage.",
  },
  {
    question: "Is OneKey available worldwide?",
    answer:
      "OneKey ships globally through its website and select retailers. The brand has the strongest presence in Asian markets but is expanding its Western market reach. Shipping times and availability may vary by region. The companion app and firmware are available in multiple languages.",
  },
  {
    question: "Which OneKey model should I buy?",
    answer:
      "The Classic 1S is best for budget-conscious users who want basic hardware wallet security. The Mini suits users who want portability in a card form factor. The Pro is the best balance of features and price with its large screen and fingerprint sensor. The Touch is the premium choice for users who want the best display and user experience.",
  },
  {
    question: "Does OneKey have a secure element?",
    answer:
      "Yes, the Pro and Touch models include secure element chips for key storage. The Classic uses a general-purpose microcontroller (similar to Trezor). Check the specifications of each model to confirm secure element availability, as this varies across the product line.",
  },
];

const relatedReviews = [
  { name: "Ledger", slug: "ledger" },
  { name: "Trezor", slug: "trezor" },
  { name: "Keystone", slug: "keystone" },
];

const relatedGuides = [
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices" },
];

export default function OneKeyReviewPage() {
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
