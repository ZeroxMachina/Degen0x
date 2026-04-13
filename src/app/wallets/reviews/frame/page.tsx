import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Frame Wallet Review (${CURRENT_YEAR}) - Best Desktop System-Level Wallet? | ${SITE_NAME}`,
  description: `Detailed Frame wallet review for ${CURRENT_YEAR}. Covers system-level OS integration, hardware wallet support, multi-chain management, and privacy features.`,
  alternates: { canonical: "/wallets/reviews/frame" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const product = {
  name: "Frame",
  slug: "frame",
  rating: 4.2,
  description: "Frame is a privacy-focused, system-level Ethereum wallet that runs as a native OS application rather than a browser extension, offering superior hardware",
  pros: [
    "System-level wallet accessible from any browser or application",
    "Excellent hardware wallet support for Ledger, Trezor, and GridPlus",
    "Privacy-focused with minimal data collection",
    "Open source with transparent development process",
  ],
  cons: [
    "Desktop only — no mobile app available",
    "Steeper learning curve compared to browser extension wallets",
    "Smaller user community and fewer tutorials available",
  ],
  bestFor: "Privacy-conscious desktop users who want system-level wallet integration with hardware wallet support",
  affiliateUrl: "#",
  category: "wallets",
};

const overview = `Frame takes a fundamentally different approach to crypto wallet design by running as a native operating system application rather than a browser extension. This system-level architecture means Frame is available to any application on your computer — any browser, any Electron app, any program that supports Web3 injection can connect to Frame. When a dApp requests a wallet connection, Frame appears as an overlay on your screen regardless of which browser you are using, providing a consistent signing experience across all applications.

The wallet excels at hardware wallet integration, supporting Ledger, Trezor, GridPlus Lattice, and other devices with a unified interface. You can manage multiple accounts from different hardware wallets and hot wallets simultaneously, switching between them with a single click. Frame is fully open source and prioritizes privacy — it does not collect analytics, does not require account creation, and does not phone home with usage data. For desktop users who value privacy and want the flexibility of a system-level wallet that works everywhere, Frame offers capabilities that no browser extension can match.`;

const sections = [
  {
    id: "system-level",
    title: "System-Level Architecture",
    content: "Unlike browser extensions that only work within a single browser, Frame installs as a native application on Windows, macOS, and Linux. It runs in your system tray and intercepts Web3 provider requests from any application. This means you can use Frame with Chrome, Firefox, Brave, and any other browser without installing separate extensions. The system tray icon provides quick access to your accounts, pending transactions, and chain settings. When a dApp requests a signature, Frame displays a transaction review overlay that appears on top of all windows, ensuring you never miss a signing request. This architecture also isolates your private keys from browser vulnerabilities, as Frame runs in its own process separate from any browser sandbox.",
  },
  {
    id: "hardware-wallets",
    title: "Hardware Wallet Integration",
    content: "Frame provides one of the best hardware wallet experiences available. It supports Ledger via USB and Bluetooth, Trezor via USB, GridPlus Lattice via network connection, and Keystone via QR code scanning. You can connect multiple hardware wallets simultaneously and organize accounts from different devices in a unified account list. Switching between a Ledger account and a Trezor account is as simple as clicking a different account in the Frame sidebar. The signing flow shows clear transaction details and waits for hardware confirmation without timeout issues that plague some browser extensions. For users who manage multiple hardware wallets or want to use their hardware wallet with applications outside of a browser, Frame provides unmatched flexibility.",
  },
  {
    id: "privacy",
    title: "Privacy & Transparency",
    content: "Frame is built with privacy as a core principle. The application does not collect any analytics or telemetry data. There is no account creation, no email registration, and no cloud sync. All wallet data is stored locally on your machine. RPC requests to blockchain nodes can be configured to use custom endpoints or privacy-preserving options, giving you control over which servers see your transaction data. The codebase is fully open source under a permissive license, allowing anyone to audit the code and verify these privacy claims. For users who are concerned about the data collection practices of larger wallet providers, Frame offers a genuinely private alternative with full transparency into how your data is handled.",
  },
  {
    id: "chain-management",
    title: "Multi-Chain & Network Management",
    content: "Frame supports Ethereum mainnet and all EVM-compatible chains with an intuitive chain management interface. Adding custom networks is straightforward — enter the RPC URL, chain ID, and currency symbol, and Frame handles the rest. You can set a default chain for each account and quickly switch networks from the system tray menu. The chain management also allows you to configure multiple RPC endpoints per network with automatic fallback, ensuring connectivity even if a primary node goes down. Frame displays gas estimates and network status for the currently selected chain, helping you time transactions for optimal gas costs. For developers who frequently switch between testnets and mainnets, Frame's network management is particularly efficient.",
  },
];

const fees: Record<string, string> = {
  "Wallet Download": "Free and open source",
  "Transaction Fees": "Standard blockchain gas fees only",
  "Hardware Wallet Use": "Free (hardware device required)",
  "Custom RPC": "Free (bring your own node)",
  "Premium Features": "None — all features are free",
};

const security = [
  "System-level isolation from browser vulnerabilities",
  "Hardware wallet support for Ledger, Trezor, GridPlus, and Keystone",
  "Fully open-source codebase with community auditing",
  "No telemetry, analytics, or data collection",
  "Local-only data storage with no cloud sync",
  "Transaction review overlay for clear signing confirmation",
  "Custom RPC endpoint configuration for privacy",
];

const features = [
  "System-level wallet accessible from any browser or application",
  "Multi-device hardware wallet management in unified interface",
  "Full EVM chain support with custom network configuration",
  "Privacy-first design with zero data collection",
  "Open-source codebase under permissive license",
  "Transaction review overlay with clear details",
  "Multiple RPC endpoints per chain with automatic fallback",
  "System tray quick access for account and chain switching",
];

const faqs = [
  {
    question: "How does Frame differ from MetaMask?",
    answer: "The primary difference is architecture. MetaMask runs as a browser extension within your browser, while Frame runs as a native OS application accessible from any browser or application. This makes Frame more versatile for desktop use but unavailable on mobile. Frame also has superior multi-hardware-wallet support and stronger privacy protections. MetaMask has a much larger user base, broader dApp compatibility testing, and mobile apps.",
  },
  {
    question: "Does Frame work on mobile?",
    answer: "No. Frame is a desktop-only application available for Windows, macOS, and Linux. There are no plans for a mobile version, as the system-level architecture that defines Frame requires native OS access that mobile platforms do not typically provide. For mobile wallet needs, consider MetaMask, Rainbow, or Trust Wallet.",
  },
  {
    question: "Is Frame compatible with all dApps?",
    answer: "Frame is compatible with any dApp that uses standard Web3 provider injection. It works with the vast majority of Ethereum dApps, DeFi protocols, and NFT marketplaces. In rare cases, dApps that specifically check for MetaMask or another named wallet may not detect Frame — in these situations, Frame's MetaMask compatibility mode can resolve the issue by presenting itself as MetaMask to the dApp.",
  },
];

const relatedReviews = [
  { name: "MetaMask", slug: "metamask" },
  { name: "Rabby", slug: "rabby" },
  { name: "GridPlus", slug: "gridplus" },
];

const relatedGuides = [
  { title: "Best Desktop Wallets", href: "/wallets/best/desktop" },
  { title: "Best Open-Source Wallets", href: "/wallets/best/open-source" },
  { title: "Wallet Apps vs Browser Extensions", href: "/wallets/learn/wallet-apps-vs-browser-extensions" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/wallets/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Frame', },
  ],
};

export default function FrameReviewPage() {
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
