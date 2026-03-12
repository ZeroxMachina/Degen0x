import { Product, Review, ComparisonItem, FAQ } from "@/lib/types";

// ─── Product Data ────────────────────────────────────────────────────────────

export const walletProducts: Product[] = [
  {
    name: "Ledger Nano X",
    slug: "ledger",
    rating: 4.7,
    description:
      "The Ledger Nano X is a premium Bluetooth-enabled hardware wallet supporting 5,500+ cryptocurrencies. It uses a certified Secure Element chip (CC EAL5+) and pairs with the Ledger Live app for seamless portfolio management on desktop and mobile.",
    pros: [
      "Bluetooth connectivity for mobile use",
      "Supports 5,500+ coins and tokens",
      "Certified Secure Element chip (CC EAL5+)",
      "Excellent Ledger Live companion app",
      "Staking and DeFi access through Ledger Live",
    ],
    cons: [
      "Premium price point (~$149)",
      "Closed-source firmware",
      "Bluetooth may concern some security purists",
      "Small screen can be hard to read",
    ],
    fees: "$149",
    bestFor: "Overall best hardware wallet",
    affiliateUrl: "https://degen0x.com/go/ledger",
    category: "wallets",
    featured: true,
  },
  {
    name: "Ledger Nano S Plus",
    slug: "ledger",
    rating: 4.5,
    description:
      "The Ledger Nano S Plus is an affordable hardware wallet with the same Secure Element chip as the Nano X. It supports 5,500+ assets but connects via USB-C only, making it ideal for users who prioritize security on a budget.",
    pros: [
      "Very affordable for a hardware wallet (~$79)",
      "Same Secure Element chip as Nano X",
      "Supports 5,500+ coins and tokens",
      "USB-C connectivity",
      "Can install up to 100 apps simultaneously",
    ],
    cons: [
      "No Bluetooth connectivity",
      "No battery — requires USB connection",
      "Closed-source firmware",
      "Smaller storage than Nano X",
    ],
    fees: "$79",
    bestFor: "Budget hardware wallet",
    affiliateUrl: "https://degen0x.com/go/ledger",
    category: "wallets",
  },
  {
    name: "Trezor Model T",
    slug: "trezor",
    rating: 4.6,
    description:
      "The Trezor Model T features a full-color touchscreen and supports 1,800+ cryptocurrencies. As a fully open-source hardware wallet, it offers transparency that security-conscious users appreciate. It also supports Shamir Backup for advanced seed recovery.",
    pros: [
      "Fully open-source firmware and hardware",
      "Color touchscreen for easy verification",
      "Shamir Backup (SLIP-39) support",
      "Supports 1,800+ cryptocurrencies",
      "Built-in exchange via Trezor Suite",
    ],
    cons: [
      "Higher price point (~$219)",
      "No Secure Element chip (uses general-purpose MCU)",
      "Bulkier design than competitors",
      "Fewer supported coins than Ledger",
    ],
    fees: "$219",
    bestFor: "Open-source security enthusiasts",
    affiliateUrl: "https://degen0x.com/go/trezor",
    category: "wallets",
    featured: true,
  },
  {
    name: "Trezor Safe 3",
    slug: "trezor",
    rating: 4.5,
    description:
      "The Trezor Safe 3 is Trezor's latest entry-level device, combining the brand's open-source philosophy with a new Secure Element chip. It supports 8,000+ coins and offers Shamir Backup in a compact, USB-C form factor.",
    pros: [
      "Open-source with a Secure Element chip",
      "Affordable price point (~$79)",
      "Supports 8,000+ coins and tokens",
      "Shamir Backup support",
      "Compact, portable design with USB-C",
    ],
    cons: [
      "Small monochrome display",
      "No touchscreen",
      "No Bluetooth or wireless connectivity",
      "Newer product with less track record",
    ],
    fees: "$79",
    bestFor: "Open-source budget hardware wallet",
    affiliateUrl: "https://degen0x.com/go/trezor",
    category: "wallets",
  },
  {
    name: "MetaMask",
    slug: "metamask",
    rating: 4.4,
    description:
      "MetaMask is the most widely used Ethereum and EVM-compatible wallet, available as a browser extension and mobile app. It serves as the gateway to thousands of DeFi protocols, NFT marketplaces, and dApps across Ethereum, Polygon, Arbitrum, Optimism, BSC, and many more networks.",
    pros: [
      "Most widely supported wallet for dApps",
      "Supports all EVM-compatible chains",
      "Built-in token swaps aggregator",
      "Browser extension and mobile app",
      "Open-source and well-audited",
    ],
    cons: [
      "Ethereum/EVM chains only (no Bitcoin, Solana)",
      "Swap fees can be high (0.875%)",
      "Has been targeted by phishing attacks",
      "Can be complex for beginners",
    ],
    fees: "Free (0.875% swap fee)",
    bestFor: "Ethereum DeFi and dApp users",
    affiliateUrl: "https://degen0x.com/go/metamask",
    category: "wallets",
    featured: true,
  },
  {
    name: "Phantom",
    slug: "phantom",
    rating: 4.5,
    description:
      "Phantom is a sleek, user-friendly multi-chain wallet originally built for Solana, now supporting Ethereum, Polygon, and Bitcoin. It offers built-in token swaps, NFT management, staking, and a clean interface that makes it one of the most popular wallets in the Solana ecosystem.",
    pros: [
      "Beautiful, intuitive user interface",
      "Supports Solana, Ethereum, Polygon, and Bitcoin",
      "Built-in token swaps and staking",
      "Excellent NFT display and management",
      "Fast and lightweight browser extension",
    ],
    cons: [
      "Limited to four blockchains currently",
      "Relatively newer than MetaMask",
      "Swap fees can be high on some pairs",
      "Less extensive dApp ecosystem than MetaMask",
    ],
    fees: "Free (swap fees vary)",
    bestFor: "Solana ecosystem users",
    affiliateUrl: "https://degen0x.com/go/phantom",
    category: "wallets",
    featured: true,
  },
  {
    name: "Trust Wallet",
    slug: "trust-wallet",
    rating: 4.3,
    description:
      "Trust Wallet is Binance's official decentralized wallet supporting 10M+ assets across 100+ blockchains. It offers a built-in dApp browser, staking, and NFT support. Available on mobile and as a browser extension, it is one of the most versatile multi-chain wallets available.",
    pros: [
      "Supports 100+ blockchains and millions of tokens",
      "Built-in dApp browser",
      "Staking for multiple assets",
      "Backed by Binance",
      "Available on mobile and as browser extension",
    ],
    cons: [
      "Binance association concerns some users",
      "Customer support can be slow",
      "Browser extension is relatively new",
      "Interface can feel cluttered with many assets",
    ],
    fees: "Free",
    bestFor: "Multi-chain mobile users",
    affiliateUrl: "https://degen0x.com/go/trust-wallet",
    category: "wallets",
  },
  {
    name: "Exodus",
    slug: "exodus",
    rating: 4.3,
    description:
      "Exodus is a beautifully designed multi-chain wallet available on desktop, mobile, and as a browser extension. It supports 300+ cryptocurrencies with built-in exchange features, portfolio tracking, and staking. Its emphasis on design makes it one of the most beginner-friendly wallets available.",
    pros: [
      "Stunning, intuitive design across all platforms",
      "Built-in exchange for 300+ assets",
      "Desktop, mobile, and browser extension",
      "Excellent portfolio tracking and charts",
      "Trezor hardware wallet integration",
    ],
    cons: [
      "Not fully open-source",
      "Higher exchange fees than alternatives",
      "No two-factor authentication",
      "Limited advanced DeFi features",
    ],
    fees: "Free (exchange fees vary)",
    bestFor: "Beginners wanting a beautiful interface",
    affiliateUrl: "https://degen0x.com/go/exodus",
    category: "wallets",
  },
  {
    name: "Coinbase Wallet",
    slug: "coinbase-wallet",
    rating: 4.2,
    description:
      "Coinbase Wallet is a self-custody wallet from Coinbase that supports Ethereum, Solana, and many other networks. It is separate from the Coinbase exchange app and gives users full control of their private keys. It integrates seamlessly with the Coinbase exchange for easy fund transfers.",
    pros: [
      "Easy integration with Coinbase exchange",
      "Multi-chain support (Ethereum, Solana, etc.)",
      "User-friendly for Coinbase customers",
      "NFT and dApp browser built in",
      "Cloud backup option for recovery phrase",
    ],
    cons: [
      "Not fully open-source",
      "Cloud backup raises security concerns",
      "Limited staking options",
      "Can be confused with Coinbase exchange app",
    ],
    fees: "Free",
    bestFor: "Coinbase users wanting self-custody",
    affiliateUrl: "https://degen0x.com/go/coinbase-wallet",
    category: "wallets",
  },
  {
    name: "Rabby",
    slug: "rabby",
    rating: 4.4,
    description:
      "Rabby is a security-focused Ethereum and EVM wallet developed by the DeBank team. It stands out with its pre-transaction risk scanning, which simulates transactions before signing to show users exactly what will happen. It auto-detects the active chain based on the dApp being used.",
    pros: [
      "Pre-transaction risk scanning and simulation",
      "Auto-detects active blockchain from dApp",
      "Multi-chain support for all EVM networks",
      "Transparent security warnings",
      "Open-source and free to use",
    ],
    cons: [
      "EVM chains only (no Bitcoin, Solana)",
      "Smaller user community than MetaMask",
      "Desktop browser extension only (no mobile app)",
      "Less established brand recognition",
    ],
    fees: "Free",
    bestFor: "Security-conscious DeFi users",
    affiliateUrl: "https://degen0x.com/go/rabby",
    category: "wallets",
  },
  {
    name: "Coldcard Mk4",
    slug: "coldcard",
    rating: 4.8,
    description:
      "The Coldcard Mk4 is the gold standard for Bitcoin-only cold storage security. Designed by Coinkite, it is a fully air-gapped hardware wallet with a Secure Element chip, NFC support, and a built-in calculator-style keypad. Trusted by Bitcoin maximalists and institutional HODLers worldwide.",
    pros: [
      "Fully air-gapped — can sign transactions without ever connecting to a computer via USB",
      "Dual Secure Element chips (ATECC608A + SE050C)",
      "Bitcoin-only firmware eliminates attack surface from altcoin code",
      "PSBT (BIP174) native, compatible with Sparrow, Electrum, Specter",
      "Seedless / SEEDXOR backup system for advanced users",
    ],
    cons: [
      "Bitcoin-only — no altcoin or EVM chain support",
      "Steeper learning curve, not beginner-friendly",
      "Premium price (~$157)",
      "Text-only interface with no touchscreen",
    ],
    fees: "$157",
    bestFor: "Bitcoin-only maximalists & advanced security",
    affiliateUrl: "https://degen0x.com/go/coldcard",
    category: "wallets",
    featured: true,
  },
  {
    name: "Foundation Passport 2",
    slug: "foundation-passport",
    rating: 4.7,
    description:
      "The Foundation Passport 2 is an open-source, Bitcoin-only hardware wallet built in the USA. It combines full air-gap operation via QR codes, a large color display, and a 1200mAh removable battery — making it the most portable air-gapped Bitcoin wallet available. Fully auditable down to the hardware schematic.",
    pros: [
      "Fully open-source hardware and software (verifiable supply chain)",
      "Air-gapped via QR code signing — no USB data connection ever",
      "Large color display with intuitive navigation",
      "Built-in removable 1200mAh battery",
      "MicroSD card support for firmware updates and PSBT signing",
    ],
    cons: [
      "Bitcoin-only — no ETH or altcoin support",
      "Premium price (~$199)",
      "QR-based workflow requires compatible software (BlueWallet, Envoy, Sparrow)",
      "Smaller community vs Ledger/Trezor",
    ],
    fees: "$199",
    bestFor: "Open-source Bitcoin air-gap enthusiasts",
    affiliateUrl: "https://degen0x.com/go/foundation-passport",
    category: "wallets",
  },
  {
    name: "Safe (Gnosis Safe)",
    slug: "safe",
    rating: 4.5,
    description:
      "Safe (formerly Gnosis Safe) is the industry-standard multi-signature wallet securing over $100B in digital assets. It requires multiple signers to approve transactions, making it the go-to choice for DAOs, treasuries, and organizations managing large crypto holdings.",
    pros: [
      "Industry-standard multi-sig wallet",
      "Secures over $100B in assets",
      "Highly customizable approval thresholds",
      "Extensive dApp integration via Safe Apps",
      "Fully open-source and battle-tested",
    ],
    cons: [
      "Requires gas fees for each transaction",
      "Complex setup for beginners",
      "Primarily Ethereum and EVM chains only",
      "Multi-sig coordination can be slow",
    ],
    fees: "Free (gas fees apply)",
    bestFor: "DAOs and organizational treasuries",
    affiliateUrl: "https://degen0x.com/go/safe",
    category: "wallets",
  },
];

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getWalletBySlug(slug: string): Product | undefined {
  return walletProducts.find((p) => p.slug === slug);
}

export function getWalletsByCategory(filter: (p: Product) => boolean): Product[] {
  return walletProducts.filter(filter);
}

// ─── Comparison Items ────────────────────────────────────────────────────────

export const walletComparisonItems: Record<string, ComparisonItem> = {
  "ledger-nano-x": {
    name: "Ledger Nano X",
    slug: "ledger",
    rating: 4.7,
    affiliateUrl: "https://degen0x.com/go/ledger",
    features: {
      Type: "Hardware (Cold)",
      Price: "$149",
      "Supported Coins": "5,500+",
      "Mobile App": "Yes (Bluetooth)",
      "Open Source": "Partial (app is open-source)",
      "Secure Element": "Yes (CC EAL5+)",
      "Backup Method": "24-word seed phrase",
      "DeFi Access": "Via Ledger Live",
      "NFT Support": "Yes",
      Staking: "Yes",
      "Multi-Sig": "No",
      "Battery Life": "~8 hours",
    },
  },
  "ledger-nano-s-plus": {
    name: "Ledger Nano S Plus",
    slug: "ledger",
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/ledger",
    features: {
      Type: "Hardware (Cold)",
      Price: "$79",
      "Supported Coins": "5,500+",
      "Mobile App": "No (USB-C only)",
      "Open Source": "Partial",
      "Secure Element": "Yes (CC EAL5+)",
      "Backup Method": "24-word seed phrase",
      "DeFi Access": "Via Ledger Live",
      "NFT Support": "Yes",
      Staking: "Yes",
      "Multi-Sig": "No",
      "Battery Life": "N/A (USB powered)",
    },
  },
  "trezor-model-t": {
    name: "Trezor Model T",
    slug: "trezor",
    rating: 4.6,
    affiliateUrl: "https://degen0x.com/go/trezor",
    features: {
      Type: "Hardware (Cold)",
      Price: "$219",
      "Supported Coins": "1,800+",
      "Mobile App": "Via Trezor Suite (web)",
      "Open Source": "Yes (fully)",
      "Secure Element": "No (general MCU)",
      "Backup Method": "Shamir Backup / 12-24 word seed",
      "DeFi Access": "Via Trezor Suite",
      "NFT Support": "Limited",
      Staking: "Yes",
      "Multi-Sig": "Yes (via third-party)",
      "Battery Life": "N/A (USB powered)",
    },
  },
  "trezor-safe-3": {
    name: "Trezor Safe 3",
    slug: "trezor",
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/trezor",
    features: {
      Type: "Hardware (Cold)",
      Price: "$79",
      "Supported Coins": "8,000+",
      "Mobile App": "Via Trezor Suite (web)",
      "Open Source": "Yes (fully)",
      "Secure Element": "Yes",
      "Backup Method": "Shamir Backup / 12-24 word seed",
      "DeFi Access": "Via Trezor Suite",
      "NFT Support": "Limited",
      Staking: "Yes",
      "Multi-Sig": "Yes (via third-party)",
      "Battery Life": "N/A (USB powered)",
    },
  },
  "coldcard-mk4": {
    name: "Coldcard Mk4",
    slug: "coldcard",
    rating: 4.8,
    affiliateUrl: "https://degen0x.com/go/coldcard",
    features: {
      Type: "Hardware (Air-Gap)",
      Price: "$157",
      "Supported Coins": "Bitcoin only",
      "Mobile App": "Via Sparrow / Electrum",
      "Open Source": "Partially (firmware audit available)",
      "Secure Element": "Yes (dual: ATECC608A + SE050C)",
      "Backup Method": "BIP39 seed / SeedXOR",
      "DeFi Access": "No",
      "NFT Support": "No",
      Staking: "No",
      "Multi-Sig": "Yes (native PSBT + BIP45/BIP87)",
      "Battery Life": "USB powered (or AAA batteries via optional kit)",
    },
  },
  "foundation-passport-2": {
    name: "Foundation Passport 2",
    slug: "foundation-passport",
    rating: 4.7,
    affiliateUrl: "https://degen0x.com/go/foundation-passport",
    features: {
      Type: "Hardware (Air-Gap)",
      Price: "$199",
      "Supported Coins": "Bitcoin only",
      "Mobile App": "Envoy (iOS + Android)",
      "Open Source": "Yes (fully — hardware + firmware)",
      "Secure Element": "Yes (ATECC608A)",
      "Backup Method": "BIP39 seed / SeedQR / MicroSD",
      "DeFi Access": "No",
      "NFT Support": "No",
      Staking: "No",
      "Multi-Sig": "Yes (via Sparrow, BlueWallet)",
      "Battery Life": "1200mAh removable battery",
    },
  },
  metamask: {
    name: "MetaMask",
    slug: "metamask",
    rating: 4.4,
    affiliateUrl: "https://degen0x.com/go/metamask",
    features: {
      Type: "Software (Hot)",
      Price: "Free",
      "Supported Coins": "All EVM tokens",
      "Mobile App": "Yes",
      "Open Source": "Yes",
      "Secure Element": "N/A",
      "Backup Method": "12-word seed phrase",
      "DeFi Access": "Native (industry standard)",
      "NFT Support": "Yes",
      Staking: "Via dApps",
      "Multi-Sig": "No (use Safe instead)",
      "Battery Life": "N/A",
    },
  },
  phantom: {
    name: "Phantom",
    slug: "phantom",
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/phantom",
    features: {
      Type: "Software (Hot)",
      Price: "Free",
      "Supported Coins": "Solana, ETH, Polygon, BTC",
      "Mobile App": "Yes",
      "Open Source": "No",
      "Secure Element": "N/A",
      "Backup Method": "12-word seed phrase",
      "DeFi Access": "Native",
      "NFT Support": "Yes (excellent)",
      Staking: "Yes (SOL native staking)",
      "Multi-Sig": "No",
      "Battery Life": "N/A",
    },
  },
  "trust-wallet": {
    name: "Trust Wallet",
    slug: "trust-wallet",
    rating: 4.3,
    affiliateUrl: "https://degen0x.com/go/trust-wallet",
    features: {
      Type: "Software (Hot)",
      Price: "Free",
      "Supported Coins": "10M+ across 100+ chains",
      "Mobile App": "Yes",
      "Open Source": "Partially",
      "Secure Element": "N/A",
      "Backup Method": "12-word seed phrase",
      "DeFi Access": "Built-in dApp browser",
      "NFT Support": "Yes",
      Staking: "Yes",
      "Multi-Sig": "No",
      "Battery Life": "N/A",
    },
  },
  exodus: {
    name: "Exodus",
    slug: "exodus",
    rating: 4.3,
    affiliateUrl: "https://degen0x.com/go/exodus",
    features: {
      Type: "Software (Hot)",
      Price: "Free",
      "Supported Coins": "300+",
      "Mobile App": "Yes",
      "Open Source": "No",
      "Secure Element": "N/A",
      "Backup Method": "12-word seed phrase",
      "DeFi Access": "Limited",
      "NFT Support": "Yes",
      Staking: "Yes",
      "Multi-Sig": "No",
      "Battery Life": "N/A",
    },
  },
  "coinbase-wallet": {
    name: "Coinbase Wallet",
    slug: "coinbase-wallet",
    rating: 4.2,
    affiliateUrl: "https://degen0x.com/go/coinbase-wallet",
    features: {
      Type: "Software (Hot)",
      Price: "Free",
      "Supported Coins": "Multi-chain (ETH, SOL, etc.)",
      "Mobile App": "Yes",
      "Open Source": "Partially",
      "Secure Element": "N/A",
      "Backup Method": "12-word seed / Cloud backup",
      "DeFi Access": "Built-in dApp browser",
      "NFT Support": "Yes",
      Staking: "Limited",
      "Multi-Sig": "No",
      "Battery Life": "N/A",
    },
  },
  rabby: {
    name: "Rabby",
    slug: "rabby",
    rating: 4.4,
    affiliateUrl: "https://degen0x.com/go/rabby",
    features: {
      Type: "Software (Hot)",
      Price: "Free",
      "Supported Coins": "All EVM tokens",
      "Mobile App": "No",
      "Open Source": "Yes",
      "Secure Element": "N/A",
      "Backup Method": "12-word seed phrase",
      "DeFi Access": "Native (with tx simulation)",
      "NFT Support": "Yes",
      Staking: "Via dApps",
      "Multi-Sig": "No",
      "Battery Life": "N/A",
    },
  },
  safe: {
    name: "Safe (Gnosis Safe)",
    slug: "safe",
    rating: 4.5,
    affiliateUrl: "https://degen0x.com/go/safe",
    features: {
      Type: "Smart Contract (Multi-Sig)",
      Price: "Free (gas fees apply)",
      "Supported Coins": "All EVM tokens",
      "Mobile App": "Yes",
      "Open Source": "Yes",
      "Secure Element": "N/A",
      "Backup Method": "Smart contract based",
      "DeFi Access": "Via Safe Apps",
      "NFT Support": "Yes",
      Staking: "Via Safe Apps",
      "Multi-Sig": "Yes (native)",
      "Battery Life": "N/A",
    },
  },
};

// ─── Featured wallets by category ────────────────────────────────────────────

export const hardwareWallets: Product[] = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[10], // Coldcard Mk4 (2026 addition)
  walletProducts[11], // Foundation Passport 2 (2026 addition)
  walletProducts[3], // Trezor Safe 3
  walletProducts[1], // Ledger Nano S Plus
];

export const softwareWallets: Product[] = [
  walletProducts[4], // MetaMask
  walletProducts[5], // Phantom
  walletProducts[9], // Rabby
  walletProducts[7], // Exodus
  walletProducts[6], // Trust Wallet
  walletProducts[8], // Coinbase Wallet
];

export const hotWallets: Product[] = [
  walletProducts[4], // MetaMask
  walletProducts[5], // Phantom
  walletProducts[9], // Rabby
  walletProducts[7], // Exodus
  walletProducts[6], // Trust Wallet
  walletProducts[8], // Coinbase Wallet
];

export const mobileWallets: Product[] = [
  walletProducts[5], // Phantom
  walletProducts[6], // Trust Wallet
  walletProducts[7], // Exodus
  walletProducts[4], // MetaMask
  walletProducts[8], // Coinbase Wallet
];

export const desktopWallets: Product[] = [
  walletProducts[7], // Exodus
  walletProducts[4], // MetaMask
  walletProducts[9], // Rabby
  walletProducts[5], // Phantom
  walletProducts[8], // Coinbase Wallet
];

export const bitcoinWallets: Product[] = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[3], // Trezor Safe 3
  walletProducts[7], // Exodus
  walletProducts[5], // Phantom
];

export const ethereumWallets: Product[] = [
  walletProducts[4], // MetaMask
  walletProducts[9], // Rabby
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[10], // Safe
];

export const solanaWallets: Product[] = [
  walletProducts[5], // Phantom
  walletProducts[8], // Coinbase Wallet
  walletProducts[0], // Ledger Nano X
  walletProducts[6], // Trust Wallet
];

export const multiChainWallets: Product[] = [
  walletProducts[6], // Trust Wallet
  walletProducts[7], // Exodus
  walletProducts[0], // Ledger Nano X
  walletProducts[5], // Phantom
  walletProducts[8], // Coinbase Wallet
];

export const defiWallets: Product[] = [
  walletProducts[4], // MetaMask
  walletProducts[9], // Rabby
  walletProducts[5], // Phantom
  walletProducts[10], // Safe
  walletProducts[6], // Trust Wallet
];

export const nftWallets: Product[] = [
  walletProducts[5], // Phantom
  walletProducts[4], // MetaMask
  walletProducts[9], // Rabby
  walletProducts[6], // Trust Wallet
  walletProducts[7], // Exodus
];

export const beginnerWallets: Product[] = [
  walletProducts[7], // Exodus
  walletProducts[8], // Coinbase Wallet
  walletProducts[5], // Phantom
  walletProducts[6], // Trust Wallet
  walletProducts[1], // Ledger Nano S Plus
];

export const securityWallets: Product[] = [
  walletProducts[0], // Ledger Nano X
  walletProducts[2], // Trezor Model T
  walletProducts[10], // Safe
  walletProducts[9], // Rabby
  walletProducts[3], // Trezor Safe 3
];

export const privacyWallets: Product[] = [
  walletProducts[2], // Trezor Model T
  walletProducts[3], // Trezor Safe 3
  walletProducts[9], // Rabby
  walletProducts[4], // MetaMask
  walletProducts[0], // Ledger Nano X
];

// ─── Common FAQs ─────────────────────────────────────────────────────────────

export const walletFAQs: FAQ[] = [
  {
    question: "What is a crypto wallet?",
    answer:
      "A crypto wallet is a tool that stores your private keys and lets you send, receive, and manage cryptocurrencies. It does not actually store your coins (those live on the blockchain) but holds the cryptographic keys that prove ownership. Wallets can be hardware devices, software applications, or even paper printouts.",
  },
  {
    question: "What is the difference between a hot wallet and a cold wallet?",
    answer:
      "A hot wallet is connected to the internet (browser extensions, mobile apps, desktop apps), making it convenient for daily transactions but more vulnerable to online threats. A cold wallet (hardware wallet, air-gapped device) stores private keys offline, providing maximum security for long-term storage. Most experts recommend using both: a hot wallet for daily activity and a cold wallet for savings.",
  },
  {
    question: "Are hardware wallets worth it?",
    answer:
      "Yes, if you hold any significant amount of cryptocurrency. Hardware wallets like the Ledger Nano X or Trezor Model T keep your private keys offline on a dedicated secure device, protecting you from malware, phishing, and remote hacking. They typically cost $79-$219, which is a small price for the security of your assets.",
  },
  {
    question: "Can I use multiple crypto wallets?",
    answer:
      "Absolutely. Many experienced users have multiple wallets for different purposes: a hardware wallet for long-term savings, a hot wallet for daily DeFi activity, and perhaps a separate wallet for NFTs. Using multiple wallets also adds security through diversification — if one is compromised, the others remain safe.",
  },
  {
    question: "What happens if I lose my crypto wallet?",
    answer:
      "If you have your seed phrase (recovery phrase), you can restore your wallet on a new device or in a different wallet app. Your crypto is on the blockchain, not in the physical device or app. However, if you lose both your wallet and your seed phrase, your funds are permanently inaccessible. This is why seed phrase backup is critically important.",
  },
  {
    question: "Is MetaMask safe to use?",
    answer:
      "MetaMask is generally safe as it is open-source and well-audited. However, as a hot wallet, it is inherently less secure than hardware wallets since your keys are stored in your browser. The biggest risks come from phishing sites and malicious smart contract approvals. Always verify URLs, use hardware wallet integration when possible, and regularly revoke unused token approvals.",
  },
];

export const hardwareWalletFAQs: FAQ[] = [
  {
    question: "Which is better, Ledger or Trezor?",
    answer:
      "Both are excellent choices. Ledger uses certified Secure Element chips and supports more cryptocurrencies (5,500+ vs 1,800+). Trezor is fully open-source and offers Shamir Backup. Ledger is generally better for beginners and mobile users (Bluetooth support), while Trezor appeals to open-source advocates and those who value full transparency.",
  },
  {
    question: "How do hardware wallets keep my crypto safe?",
    answer:
      "Hardware wallets store your private keys on a dedicated physical device that never exposes them to the internet. When you sign a transaction, the signing happens on the device itself. Even if your computer is compromised by malware, attackers cannot extract your keys because they never leave the hardware wallet.",
  },
  {
    question: "Can hardware wallets be hacked?",
    answer:
      "While no device is 100% hack-proof, hardware wallets are extremely resistant to attacks. The main risks are physical theft (mitigated by your PIN and passphrase) and supply chain attacks (always buy from official stores). There have been very few successful attacks on hardware wallets, and they typically require physical possession and sophisticated equipment.",
  },
];
