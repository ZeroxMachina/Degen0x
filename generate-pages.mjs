import fs from 'fs';
import path from 'path';

const BASE = '/Users/0xmachina/cryptodegen/src/app';

function writeIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.log(`SKIP: ${filePath}`);
    return;
  }
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content);
  console.log(`WROTE: ${filePath}`);
}

// ==========================================
// WALLET BEST-OF PAGES
// ==========================================

const walletBestPages = [
  {
    slug: "open-source",
    title: "Best Open-Source Crypto Wallets",
    desc: "Top open-source wallets for transparency and security",
    intro: "Open-source wallets let anyone audit the code, ensuring there are no hidden backdoors or vulnerabilities. We evaluated the best open-source wallets for code transparency, security audits, community contributions, and overall usability.",
    statLabel1: "100%", statDesc1: "Code publicly auditable",
    statLabel2: "1000s", statDesc2: "Community contributors",
    statLabel3: "50+", statDesc3: "Independent audits combined",
    products: [
      { name: "MetaMask", slug: "metamask", rating: 4.5, description: "The most popular open-source Ethereum wallet with millions of users and extensive third-party auditing. Available as browser extension and mobile app.", pros: ["Fully open source on GitHub", "Massive community review", "Regular security audits"], cons: ["Privacy concerns with default RPC", "Extension attack surface"], bestFor: "Open-source Ethereum wallet with broadest compatibility" },
      { name: "Rabby", slug: "rabby", rating: 4.6, description: "Open-source security-focused wallet with transaction simulation and risk alerts, built by the DeBank team.", pros: ["Open source with active development", "Pre-transaction security checks", "Multi-chain support"], cons: ["Newer project with shorter track record", "Desktop only"], bestFor: "Security-first open-source wallet with transaction preview" },
      { name: "Electrum", slug: "electrum", rating: 4.3, description: "One of the oldest open-source Bitcoin wallets with advanced features, multisig support, and hardware wallet integration.", pros: ["Battle-tested since 2011", "Advanced Bitcoin features", "Fully verifiable builds"], cons: ["Bitcoin only", "Dated interface"], bestFor: "Open-source Bitcoin wallet with longest track record" },
      { name: "Frame", slug: "frame", rating: 4.2, description: "Privacy-focused system-level wallet that runs outside the browser with zero telemetry and full open-source transparency.", pros: ["System-level architecture", "Zero data collection", "Full hardware wallet support"], cons: ["Desktop only", "Smaller community"], bestFor: "Privacy-conscious users wanting open-source desktop wallet" },
      { name: "Blockstream Jade", slug: "jade", rating: 4.2, description: "Fully open-source hardware wallet including both firmware and hardware design, with air-gapped signing capability.", pros: ["Hardware design is open source too", "Air-gapped via QR codes", "Budget-friendly"], cons: ["Bitcoin only", "Novel security approach"], bestFor: "Open-source hardware wallet with verifiable design" },
    ],
    faq1q: "Why does open source matter for wallets?", faq1a: "Open-source wallets allow security researchers and the community to inspect the code for vulnerabilities, backdoors, or privacy issues. This transparency creates accountability — any malicious code addition would be visible to the public. Closed-source wallets require you to trust the company, while open-source wallets let you verify the security claims independently.",
    faq2q: "Are open-source wallets less polished?", faq2a: "Not necessarily. MetaMask and Rabby are both fully open source while offering polished, user-friendly interfaces. The open-source model attracts developer contributions that can improve the product. However, some open-source projects prioritize functionality over design, which is why we evaluate usability alongside transparency in our rankings.",
    faq3q: "Can I verify the code myself?", faq3a: "Yes, all open-source wallets publish their code on GitHub or similar platforms. If you are a developer, you can read the code, build the wallet from source, and verify that the published version matches the source code. Even if you cannot read code, the fact that thousands of other developers can provides a strong security guarantee through community oversight.",
    relatedLinks: [
      { href: "/wallets/best/security", title: "Best Security Wallets", desc: "Maximum asset protection" },
      { href: "/wallets/reviews/frame", title: "Frame Wallet Review", desc: "Privacy-first open-source wallet" },
      { href: "/wallets/learn/wallet-security-best-practices", title: "Wallet Security Guide", desc: "Best practices for wallet safety" },
    ],
  },
  {
    slug: "browser-extension",
    title: "Best Crypto Browser Extension Wallets",
    desc: "Top browser extension wallets for DeFi and dApp access",
    intro: "Browser extension wallets are essential for interacting with DeFi protocols, NFT marketplaces, and dApps directly from your browser. We tested the top extensions for security, dApp compatibility, speed, and ease of use.",
    statLabel1: "5+", statDesc1: "Major browsers supported",
    statLabel2: "10,000+", statDesc2: "Compatible dApps",
    statLabel3: "Sub-second", statDesc3: "Typical connection time",
    products: [
      { name: "MetaMask", slug: "metamask", rating: 4.5, description: "The industry standard browser extension wallet with near-universal dApp compatibility across Chrome, Firefox, Brave, and Edge.", pros: ["Universal dApp compatibility", "Custom RPC network support", "Snaps extensibility system"], cons: ["Can be slow with many networks", "Default RPC has privacy concerns"], bestFor: "Broadest dApp compatibility across all browsers" },
      { name: "Rabby", slug: "rabby", rating: 4.6, description: "Security-focused browser extension that simulates transactions before signing, showing you exactly what tokens will change in your wallet.", pros: ["Transaction simulation preview", "Auto-detects active chain", "Risk assessment for contracts"], cons: ["Chrome-based browsers only", "Smaller ecosystem"], bestFor: "Security-first browser extension with pre-sign previews" },
      { name: "Phantom", slug: "phantom", rating: 4.7, description: "Multi-chain browser extension supporting Solana, Ethereum, and Polygon with a clean interface and built-in swap functionality.", pros: ["Excellent Solana support", "Clean, fast interface", "Built-in token swaps"], cons: ["Limited to few chains", "Not open source"], bestFor: "Solana and multi-chain browser extension" },
      { name: "Coinbase Wallet", slug: "coinbase-wallet", rating: 4.3, description: "Browser extension wallet by Coinbase with easy onboarding, multi-chain support, and optional cloud backup for recovery.", pros: ["Beginner-friendly setup", "Coinbase account integration", "Cloud backup option"], cons: ["Connected to centralized company", "Less DeFi-focused features"], bestFor: "Beginners wanting a trusted brand browser extension" },
      { name: "Zerion", slug: "zerion", rating: 4.4, description: "DeFi-focused browser extension with portfolio tracking across 15+ chains and automatic detection of DeFi positions.", pros: ["Multi-chain portfolio view", "DeFi position tracking", "Swap aggregation"], cons: ["Premium features require NFT/subscription", "EVM chains only"], bestFor: "DeFi users wanting portfolio visibility in their browser" },
    ],
    faq1q: "Are browser extension wallets safe?", faq1a: "Browser extension wallets are generally safe when downloaded from official sources and used with good security practices. The main risks include phishing sites that mimic wallet popups, malicious browser extensions that can interfere with your wallet, and clipboard hijacking malware. To stay safe, always verify dApp URLs, keep your browser updated, minimize other extensions installed, and consider pairing your browser extension with a hardware wallet for signing.",
    faq2q: "Can I use multiple browser extension wallets?", faq2a: "Yes, you can install multiple wallet extensions in the same browser. Most dApps let you choose which wallet to connect. Having MetaMask for EVM chains and Phantom for Solana is a common setup. However, having too many extensions can slow your browser and increase security surface area, so install only the wallets you actively use.",
    faq3q: "Should I use a browser extension or mobile wallet?", faq3a: "Browser extensions are best for desktop DeFi and dApp interactions where you need to connect to web-based protocols. Mobile wallets are better for on-the-go transactions, QR code payments, and casual portfolio checking. Many wallets like MetaMask and Phantom offer both, letting you sync your accounts across devices.",
    relatedLinks: [
      { href: "/wallets/learn/wallet-apps-vs-browser-extensions", title: "Apps vs Extensions", desc: "Compare wallet form factors" },
      { href: "/wallets/best/desktop", title: "Best Desktop Wallets", desc: "Full desktop wallet experiences" },
      { href: "/wallets/learn/phishing-protection-guide", title: "Phishing Protection", desc: "Stay safe from scam sites" },
    ],
  },
  {
    slug: "ios",
    title: "Best Crypto Wallets for iPhone (iOS)",
    desc: "Top iOS crypto wallets for iPhone and iPad",
    intro: "The best iOS wallets combine Apple's native security features like Face ID and Secure Enclave with robust crypto functionality. We tested the top iPhone wallets for user experience, security, feature completeness, and App Store reliability.",
    statLabel1: "Face ID", statDesc1: "Biometric security on all picks",
    statLabel2: "4.5+", statDesc2: "Average App Store rating",
    statLabel3: "100M+", statDesc3: "Combined iOS downloads",
    products: [
      { name: "Trust Wallet", slug: "trust-wallet", rating: 4.4, description: "Feature-rich iOS wallet supporting 10M+ tokens across 100+ blockchains with built-in dApp browser, staking, and swaps.", pros: ["Massive multi-chain support", "Built-in dApp browser", "Face ID integration"], cons: ["Owned by Binance", "Can feel overwhelming"], bestFor: "Broadest multi-chain iOS wallet experience" },
      { name: "Phantom", slug: "phantom", rating: 4.7, description: "Beautifully designed iOS app for Solana, Ethereum, and Polygon with smooth animations and native iOS design language.", pros: ["Native iOS design feel", "Smooth animations and transitions", "Excellent NFT gallery"], cons: ["Limited chain support", "Not open source"], bestFor: "Best-designed iOS wallet for Solana and Ethereum" },
      { name: "Coinbase Wallet", slug: "coinbase-wallet", rating: 4.3, description: "User-friendly iOS wallet with iCloud backup option, Coinbase exchange integration, and support for major EVM chains.", pros: ["iCloud key backup option", "Coinbase account linking", "Simple onboarding"], cons: ["Tied to Coinbase ecosystem", "Fewer DeFi features"], bestFor: "iOS beginners who want easy setup with cloud backup" },
      { name: "Rainbow", slug: "rainbow", rating: 4.3, description: "Ethereum-focused iOS wallet designed with Apple-quality aesthetics, beautiful NFT display, and ENS name integration.", pros: ["Apple-quality design standards", "Best NFT display on iOS", "ENS integration"], cons: ["EVM chains only", "Limited advanced features"], bestFor: "iOS users who value beautiful design and NFT display" },
      { name: "Exodus", slug: "exodus", rating: 4.5, description: "Multi-platform wallet with an excellent iOS app featuring portfolio tracking, built-in exchange, and staking for multiple networks.", pros: ["Beautiful portfolio charts", "Built-in exchange", "Multi-asset staking"], cons: ["Higher exchange fees", "Not open source"], bestFor: "All-in-one iOS portfolio management and trading" },
    ],
    faq1q: "Are iPhone crypto wallets secure?", faq1a: "iPhone wallets benefit from iOS security features including Face ID biometric authentication, the Secure Enclave for cryptographic operations, and App Store review that screens for malicious apps. The iOS sandbox prevents apps from accessing each other's data. When combined with a reputable wallet app, an iPhone provides a reasonably secure environment for crypto storage. For large holdings, consider pairing your iOS wallet with a hardware wallet via Bluetooth.",
    faq2q: "Can I use a hardware wallet with my iPhone?", faq2a: "Yes, several hardware wallets connect to iPhones via Bluetooth. Ledger Nano X works with the Ledger Live iOS app, and some third-party wallets like MetaMask mobile support Ledger Bluetooth connections. Keystone and Jade support air-gapped QR code signing with iPhone cameras. USB connections are more limited on iOS due to Lightning and USB-C constraints.",
    faq3q: "Should I backup my wallet to iCloud?", faq3a: "iCloud backup is convenient but involves trade-offs. Wallets like Coinbase Wallet encrypt your key before storing it in iCloud, so Apple cannot access it. However, if someone gains access to your Apple ID and knows your wallet password, they could potentially recover your wallet. For maximum security, use an offline seed phrase backup. For convenience with moderate balances, encrypted cloud backup is a reasonable option.",
    relatedLinks: [
      { href: "/wallets/best/android", title: "Best Android Wallets", desc: "Top wallets for Android devices" },
      { href: "/wallets/best/mobile", title: "Best Mobile Wallets", desc: "All mobile wallets compared" },
      { href: "/wallets/learn/mobile-wallet-security", title: "Mobile Wallet Security", desc: "Keep your phone wallet safe" },
    ],
  },
  {
    slug: "android",
    title: "Best Crypto Wallets for Android",
    desc: "Top Android crypto wallets for Samsung, Pixel, and more",
    intro: "Android wallets benefit from the platform's openness and flexibility, supporting features like NFC hardware wallet connections and sideloading. We tested the best Android wallets for security, features, device compatibility, and Google Play reliability.",
    statLabel1: "Biometric", statDesc1: "Fingerprint and face unlock",
    statLabel2: "4.4+", statDesc2: "Average Play Store rating",
    statLabel3: "500M+", statDesc3: "Combined Android downloads",
    products: [
      { name: "Trust Wallet", slug: "trust-wallet", rating: 4.4, description: "The most feature-complete Android wallet with 100+ chain support, dApp browser, staking, and WalletConnect integration.", pros: ["Broadest chain support on Android", "Full dApp browser", "NFC support on compatible devices"], cons: ["Complex interface for beginners", "Binance ownership concerns"], bestFor: "Most comprehensive multi-chain Android wallet" },
      { name: "Phantom", slug: "phantom", rating: 4.7, description: "Polished Android app for Solana and EVM chains with Material Design integration and smooth performance.", pros: ["Excellent Solana support", "Material Design integration", "Fast and responsive"], cons: ["Fewer chains than Trust Wallet", "Not open source"], bestFor: "Best Solana experience on Android" },
      { name: "MetaMask", slug: "metamask", rating: 4.5, description: "The leading Ethereum wallet for Android with dApp browser, custom network support, and hardware wallet connectivity.", pros: ["Universal EVM compatibility", "Open source", "Hardware wallet support via USB-C"], cons: ["EVM chains only", "Can be slow"], bestFor: "Ethereum and EVM dApp access on Android" },
      { name: "Exodus", slug: "exodus", rating: 4.5, description: "Beautiful Android wallet with portfolio tracking, 300+ asset support, built-in exchange, and Trezor integration.", pros: ["Stunning visual design", "Built-in exchange", "Multi-asset staking"], cons: ["Not open source", "Higher exchange fees"], bestFor: "Portfolio management and trading on Android" },
      { name: "Tangem", slug: "tangem", rating: 4.3, description: "NFC card-based hardware wallet that pairs with the Tangem Android app for tap-to-sign transactions without batteries or cables.", pros: ["NFC tap to sign on Android", "No batteries or charging", "Credit card form factor"], cons: ["Requires Tangem cards", "Limited advanced features"], bestFor: "NFC hardware wallet experience on Android" },
    ],
    faq1q: "Are Android wallets less secure than iOS?", faq1a: "Android and iOS have different security models, but neither is inherently less secure for crypto wallets. Android allows sideloading apps which can be a risk if users install wallets from unofficial sources. However, Android also allows USB-C connections to hardware wallets and NFC interactions that iOS restricts. Stick to Google Play downloads from verified publishers and enable Play Protect to maintain security.",
    faq2q: "Can Samsung Blockchain Wallet replace a third-party wallet?", faq2a: "Samsung's blockchain features are limited compared to dedicated crypto wallets. While Samsung Knox provides hardware-level security, the blockchain functionality supports fewer chains, fewer dApps, and lacks features like swap aggregation and staking. For serious crypto use, a dedicated wallet like Trust Wallet or MetaMask provides a much more complete experience.",
    faq3q: "How do I connect a hardware wallet to Android?", faq3a: "Android supports hardware wallet connections via USB-C (for Ledger Nano X, Trezor), Bluetooth (for Ledger Nano X), NFC (for Tangem), and QR code camera scanning (for Keystone, Jade). MetaMask and other Android wallets have built-in support for hardware wallet signing. USB-C OTG connections are the most reliable, while Bluetooth can occasionally have pairing issues.",
    relatedLinks: [
      { href: "/wallets/best/ios", title: "Best iOS Wallets", desc: "Top wallets for iPhone" },
      { href: "/wallets/best/mobile", title: "Best Mobile Wallets", desc: "All mobile wallets compared" },
      { href: "/wallets/learn/mobile-wallet-security", title: "Mobile Wallet Security", desc: "Protect your phone wallet" },
    ],
  },
  {
    slug: "custodial",
    title: "Best Custodial Crypto Wallets",
    desc: "Top custodial wallets for beginners and convenience seekers",
    intro: "Custodial wallets manage your private keys on your behalf, similar to a traditional bank account. They trade self-sovereignty for convenience and recovery options. We evaluated the best custodial solutions for security practices, insurance coverage, ease of use, and regulatory compliance.",
    statLabel1: "$250K+", statDesc1: "FDIC/SIPC coverage (fiat)",
    statLabel2: "24/7", statDesc2: "Customer support availability",
    statLabel3: "KYC", statDesc3: "Identity verification required",
    products: [
      { name: "Coinbase", slug: "coinbase-wallet", rating: 4.3, description: "The largest US-regulated exchange offers custodial wallet services with insurance, FDIC-insured USD balances, and institutional-grade security.", pros: ["Publicly traded, regulated company", "Insurance on custodied assets", "Easy fiat on/off ramps"], cons: ["They control your keys", "KYC required", "Can freeze accounts"], bestFor: "US-based users wanting regulated custodial storage" },
      { name: "Binance Web3 Wallet", slug: "binance-web3-wallet", rating: 4.0, description: "MPC-based wallet within the Binance app offering a hybrid approach between custodial convenience and self-custody security.", pros: ["No seed phrase hassle", "Instant exchange transfers", "30+ chain support"], cons: ["Depends on Binance", "KYC required", "Not available everywhere"], bestFor: "Binance users wanting convenient managed custody" },
      { name: "OKX Wallet", slug: "okx-wallet", rating: 4.1, description: "Exchange-integrated wallet offering both custodial and self-custody modes with easy switching between exchange and Web3 features.", pros: ["Exchange integration", "Dual custody modes", "Multi-chain support"], cons: ["Complex for beginners", "Not available in US", "Exchange dependency"], bestFor: "Exchange users wanting flexible custody options" },
      { name: "Bitget Wallet", slug: "bitget-wallet", rating: 4.0, description: "Multi-chain wallet connected to the Bitget exchange with custodial features, built-in trading, and cross-chain swap aggregation.", pros: ["Exchange integration", "Cross-chain swaps", "Launchpad access"], cons: ["Newer platform", "Limited track record", "Exchange risk"], bestFor: "Bitget exchange users wanting integrated wallet" },
    ],
    faq1q: "What is the difference between custodial and non-custodial wallets?", faq1a: "In a custodial wallet, a third party (usually an exchange) holds your private keys and manages security on your behalf. You access your funds through a username and password like a bank account. In a non-custodial wallet, you hold your own private keys and are solely responsible for security. Custodial wallets offer convenience and account recovery but require trust in the provider. Non-custodial wallets give you full control but mean lost keys equal lost funds.",
    faq2q: "Are custodial wallets safe?", faq2a: "Reputable custodial wallets use institutional-grade security including cold storage, multi-signature authorization, and insurance policies. However, history shows that even major custodians can fail — exchange hacks and bankruptcies have resulted in user fund losses. Custodial wallets are best for smaller amounts and active trading, while significant long-term holdings should be moved to self-custody solutions like hardware wallets.",
    faq3q: "Can I lose my crypto in a custodial wallet?", faq3a: "Yes, there are several ways. The custodian could be hacked, go bankrupt, freeze your account due to regulatory requirements, or experience technical failures. While many custodians carry insurance, coverage limits may not fully protect large holdings. The crypto principle of not your keys, not your coins reflects the reality that custodial storage introduces counterparty risk that self-custody eliminates.",
    relatedLinks: [
      { href: "/wallets/compare/custodial-vs-non-custodial", title: "Custodial vs Non-Custodial", desc: "Compare custody models" },
      { href: "/wallets/best/beginners", title: "Best Beginner Wallets", desc: "Easy wallets for new users" },
      { href: "/wallets/learn/what-is-a-crypto-wallet", title: "What Is a Crypto Wallet?", desc: "Wallet fundamentals" },
    ],
  },
  {
    slug: "institutional",
    title: "Best Institutional Crypto Wallets",
    desc: "Top wallet solutions for institutions, funds, and enterprises",
    intro: "Institutional crypto wallets provide enterprise-grade security, governance controls, and regulatory compliance for organizations managing significant digital asset portfolios. We evaluated the leading solutions for security architecture, access controls, compliance features, and integration capabilities.",
    statLabel1: "$500B+", statDesc1: "Total institutional AUC",
    statLabel2: "SOC 2", statDesc2: "Compliance standard met",
    statLabel3: "24/7", statDesc3: "Dedicated support SLAs",
    products: [
      { name: "Safe (Gnosis Safe)", slug: "safe-wallet", rating: 4.6, description: "The industry-standard multisig wallet securing over $100B in assets for DAOs, protocols, and institutional treasuries across 15+ EVM chains.", pros: ["Battle-tested with $100B+ secured", "Highly configurable governance", "Open source and audited"], cons: ["EVM chains only", "Higher gas costs", "Requires technical setup"], bestFor: "DAO treasuries and on-chain institutional governance" },
      { name: "Ledger Enterprise", slug: "ledger", rating: 4.5, description: "Institutional-grade custody solution combining Ledger hardware security with governance workflows, policy engines, and compliance tools.", pros: ["Hardware security module foundation", "Governance and policy engine", "Multi-approval workflows"], cons: ["Premium pricing", "Requires integration work", "Ledger brand concerns after data breach"], bestFor: "Enterprises needing hardware-secured governance" },
      { name: "GridPlus Lattice1", slug: "gridplus", rating: 4.3, description: "Enterprise hardware wallet with a large touchscreen, SafeCard storage, and support for complex signing workflows and batch operations.", pros: ["Large touchscreen for verification", "SafeCard backup system", "Batch transaction support"], cons: ["Premium device cost", "Limited non-EVM support", "Niche user base"], bestFor: "Power users and small institutions wanting hardware security" },
    ],
    faq1q: "What makes an institutional wallet different from a personal wallet?", faq1a: "Institutional wallets add governance layers that personal wallets lack: multi-signature requirements, role-based access controls, spending policies with approval thresholds, audit trails, and compliance reporting. They also provide dedicated support SLAs, insurance options, and integration APIs for connecting to accounting and portfolio management systems. Personal wallets are designed for individual autonomy, while institutional wallets enforce organizational policies.",
    faq2q: "Do institutional wallets require KYC?", faq2a: "On-chain solutions like Safe do not require KYC — anyone can deploy a Safe multisig. However, managed institutional custody services like Fireblocks and BitGo require extensive KYC and AML compliance as part of their regulatory obligations. The choice depends on whether you need regulated custody with insurance and compliance reporting or prefer on-chain sovereignty with programmable governance.",
    faq3q: "How much does institutional custody cost?", faq3a: "Costs vary dramatically. Safe is free to use (you pay only gas fees). Managed custody platforms typically charge setup fees, monthly platform fees, and basis-point fees on assets under custody. Enterprise solutions can cost tens of thousands annually. The cost is justified by the security, compliance, and governance features that protect organizations from both external threats and internal risks.",
    relatedLinks: [
      { href: "/wallets/reviews/safe-wallet", title: "Safe Wallet Review", desc: "Industry-standard multisig" },
      { href: "/wallets/learn/multisig-setup-guide", title: "Multisig Setup Guide", desc: "Configure multi-signature security" },
      { href: "/wallets/best/security", title: "Best Security Wallets", desc: "Top security-focused wallets" },
    ],
  },
];

for (const page of walletBestPages) {
  const filePath = `${BASE}/wallets/best/${page.slug}/page.tsx`;
  const content = `import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: \`${page.title} (\${CURRENT_YEAR}) | \${SITE_NAME}\`,
  description: \`${page.desc} in \${CURRENT_YEAR}.\`,
};

const products = ${JSON.stringify(page.products, null, 2)};

const faqs = [
  { question: ${JSON.stringify(page.faq1q)}, answer: ${JSON.stringify(page.faq1a)} },
  { question: ${JSON.stringify(page.faq2q)}, answer: ${JSON.stringify(page.faq2a)} },
  { question: ${JSON.stringify(page.faq3q)}, answer: ${JSON.stringify(page.faq3a)} },
];

export default function Best${page.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}WalletsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Best Wallets", href: "/wallets/best" },
          { label: ${JSON.stringify(page.title.replace("Best ", ""))}, href: "/wallets/best/${page.slug}" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">
          ${page.title} ({CURRENT_MONTH} {CURRENT_YEAR})
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          ${page.intro}
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-[var(--color-bg)]/50">
            <p className="text-[var(--color-primary)] font-bold text-lg">${page.statLabel1}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">${page.statDesc1}</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-[var(--color-bg)]/50">
            <p className="text-[var(--color-primary)] font-bold text-lg">${page.statLabel2}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">${page.statDesc2}</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-[var(--color-bg)]/50">
            <p className="text-[var(--color-primary)] font-bold text-lg">${page.statLabel3}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">${page.statDesc3}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">${page.title}, Ranked</h2>
        <div className="space-y-6">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} rank={index + 1} categorySlug="wallets" />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-3 gap-4">
          ${page.relatedLinks.map(l => `<Link href="${l.href}" className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover">
            <h3 className="font-semibold text-white text-sm">${l.title}</h3>
            <p className="text-xs text-[var(--color-text-secondary)]">${l.desc}</p>
          </Link>`).join('\n          ')}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
`;
  writeIfMissing(filePath, content);
}

// ==========================================
// WALLET COMPARISON PAGES
// ==========================================

const walletComparePages = [
  {
    slug: "metamask-vs-coinbase-wallet",
    name1: "MetaMask", name2: "Coinbase Wallet",
    funcName: "MetaMaskVsCoinbaseWallet",
    metaTitle: "MetaMask vs Coinbase Wallet",
    metaDesc: "MetaMask vs Coinbase Wallet side-by-side comparison. Features, fees, security, and dApp support compared.",
    intro: "MetaMask and Coinbase Wallet are two of the most popular Ethereum wallets with different philosophies. MetaMask targets experienced DeFi users with maximum dApp compatibility, while Coinbase Wallet focuses on accessibility for mainstream users with cloud backup and exchange integration.",
    features: ["Type", "Price", "Supported Chains", "Open Source", "DeFi Access", "NFT Support", "Cloud Backup", "Hardware Wallet", "Swap Feature", "Mobile App"],
    item1Features: { Type: "Browser extension + mobile", Price: "Free", "Supported Chains": "All EVM chains", "Open Source": "Yes", "DeFi Access": "Universal", "NFT Support": "Basic", "Cloud Backup": "No", "Hardware Wallet": "Ledger, Trezor", "Swap Feature": "0.875% fee", "Mobile App": "Yes" },
    item2Features: { Type: "Browser extension + mobile", Price: "Free", "Supported Chains": "Major EVM chains", "Open Source": "Partially", "DeFi Access": "Good", "NFT Support": "Good", "Cloud Backup": "Yes (encrypted)", "Hardware Wallet": "Ledger", "Swap Feature": "0.875% fee", "Mobile App": "Yes" },
    rating1: 4.5, rating2: 4.3,
    sections: [
      "MetaMask has broader dApp compatibility as the industry standard since 2016. Virtually every Ethereum dApp is tested with MetaMask first. Coinbase Wallet offers a smoother onboarding experience with the option to link your Coinbase exchange account and use cloud-encrypted backup for recovery.",
      "For DeFi power users who need to connect to every protocol and manage custom RPC networks, MetaMask is the clear choice. For beginners who want an easy setup with the safety net of cloud backup and a recognized brand, Coinbase Wallet provides a more accessible entry point into self-custody crypto.",
    ],
    faqs: [
      { question: "Which is better for beginners?", answer: "Coinbase Wallet is generally better for beginners due to its simpler setup, cloud backup option, and integration with the Coinbase exchange for easy asset transfers. MetaMask has a steeper learning curve but offers more power and flexibility for users who grow into DeFi." },
      { question: "Which has better security?", answer: "MetaMask is fully open source, providing transparency. Coinbase Wallet offers encrypted cloud backup which prevents seed phrase loss but introduces a cloud storage dependency. Neither is objectively more secure — they offer different security trade-offs. Both support hardware wallet integration for maximum security." },
      { question: "Can I use both wallets?", answer: "Yes. You can install both browser extensions simultaneously and use each for different purposes. Some users prefer MetaMask for DeFi and Coinbase Wallet for simple token management. Each wallet creates its own separate set of accounts with different private keys." },
    ],
  },
  {
    slug: "metamask-vs-rabby",
    name1: "MetaMask", name2: "Rabby",
    funcName: "MetaMaskVsRabby",
    metaTitle: "MetaMask vs Rabby",
    metaDesc: "MetaMask vs Rabby wallet comparison. Transaction simulation, security features, multi-chain support compared.",
    intro: "MetaMask is the established industry standard with the broadest dApp ecosystem, while Rabby is the security-focused challenger that introduces transaction simulation and risk assessment features that MetaMask lacks. This comparison helps you decide which fits your DeFi workflow.",
    features: ["Type", "Price", "Transaction Simulation", "Open Source", "Chain Auto-Detection", "Risk Alerts", "dApp Compatibility", "Mobile App", "Snap Extensions", "Hardware Wallet"],
    item1Features: { Type: "Browser extension + mobile", Price: "Free", "Transaction Simulation": "No (via Snaps)", "Open Source": "Yes", "Chain Auto-Detection": "No", "Risk Alerts": "Basic", "dApp Compatibility": "Universal", "Mobile App": "Yes", "Snap Extensions": "Yes", "Hardware Wallet": "Ledger, Trezor" },
    item2Features: { Type: "Browser extension + mobile", Price: "Free", "Transaction Simulation": "Yes (built-in)", "Open Source": "Yes", "Chain Auto-Detection": "Yes", "Risk Alerts": "Advanced", "dApp Compatibility": "Very good", "Mobile App": "Yes", "Snap Extensions": "No", "Hardware Wallet": "Ledger, Trezor, GridPlus" },
    rating1: 4.5, rating2: 4.6,
    sections: [
      "Rabby's standout feature is pre-transaction simulation — before you sign any transaction, Rabby shows you exactly what tokens will leave and enter your wallet, including approval changes. This catches many common attack vectors that MetaMask misses. Rabby also auto-detects which chain a dApp is using and switches networks automatically, eliminating the manual chain-switching friction in MetaMask.",
      "MetaMask's advantage is ecosystem dominance and extensibility. Its Snaps system allows third-party developers to add new features, and virtually every dApp is guaranteed to work with MetaMask. Rabby has excellent compatibility but occasionally encounters issues with dApps that have MetaMask-specific code. For security-conscious DeFi users, Rabby's built-in protections are compelling. For maximum compatibility, MetaMask remains the safest bet.",
    ],
    faqs: [
      { question: "Should I switch from MetaMask to Rabby?", answer: "If you frequently interact with DeFi protocols and want built-in transaction simulation, Rabby is worth trying. You can import your MetaMask seed phrase into Rabby to use the same accounts. Many users run both — Rabby for DeFi with its security features, and MetaMask as a backup for dApps that require it." },
      { question: "Is Rabby as secure as MetaMask?", answer: "Both are open source and support hardware wallets. Rabby adds security features MetaMask lacks: transaction simulation, contract risk assessment, and automatic chain detection. However, MetaMask has a longer track record and larger security research community. Both are reasonable choices for security-conscious users." },
      { question: "Does Rabby work with all dApps?", answer: "Rabby works with the vast majority of dApps. It injects a standard Web3 provider that is compatible with most Ethereum applications. In rare cases, dApps that specifically check for MetaMask may not detect Rabby. Rabby includes a MetaMask compatibility mode for these situations." },
    ],
  },
  {
    slug: "phantom-vs-backpack",
    name1: "Phantom", name2: "Backpack",
    funcName: "PhantomVsBackpack",
    metaTitle: "Phantom vs Backpack",
    metaDesc: "Phantom vs Backpack Solana wallet comparison. Features, xNFT support, DeFi access compared.",
    intro: "Phantom and Backpack are the two leading Solana wallets competing for ecosystem dominance. Phantom is the established leader with the largest user base, while Backpack brings innovation with its xNFT app platform and exchange integration.",
    features: ["Type", "Price", "Primary Chain", "Multi-Chain", "NFT Support", "Built-in Swap", "xNFT Apps", "Exchange Integration", "Staking", "Open Source"],
    item1Features: { Type: "Browser extension + mobile", Price: "Free", "Primary Chain": "Solana", "Multi-Chain": "ETH, Polygon", "NFT Support": "Excellent", "Built-in Swap": "Yes (0.85%)", "xNFT Apps": "No", "Exchange Integration": "No", "Staking": "Yes", "Open Source": "No" },
    item2Features: { Type: "Browser extension + mobile", Price: "Free", "Primary Chain": "Solana", "Multi-Chain": "ETH, limited", "NFT Support": "Good + xNFTs", "Built-in Swap": "Yes", "xNFT Apps": "Yes", "Exchange Integration": "Backpack Exchange", "Staking": "Limited", "Open Source": "Partially" },
    rating1: 4.7, rating2: 4.2,
    sections: [
      "Phantom leads in Solana dApp compatibility, polish, and user base size. Its NFT gallery, SOL staking, and swap features are mature and reliable. Backpack introduces the xNFT concept where NFTs can contain executable applications, creating a new paradigm for on-chain apps. Backpack also integrates with the Backpack Exchange for seamless trading.",
      "For most Solana users, Phantom remains the safer choice due to its broader compatibility and more established track record. Backpack appeals to users who want cutting-edge features and are invested in the xNFT ecosystem. If you primarily use Solana DeFi and NFTs, Phantom's maturity is hard to beat. If you are excited about xNFTs and want exchange integration, Backpack offers a differentiated experience.",
    ],
    faqs: [
      { question: "Which Solana wallet should I use?", answer: "For most users, Phantom is the recommended choice due to its broader dApp compatibility, larger community, and more polished experience. Backpack is worth considering if you are specifically interested in xNFTs or want integration with the Backpack exchange." },
      { question: "What are xNFTs?", answer: "xNFTs (executable NFTs) are Backpack's innovation where NFTs can contain full applications rather than just images. This means an NFT could be a DeFi dashboard, a game, or any interactive application that lives in your wallet. The concept is unique to Backpack and represents a new approach to on-chain application distribution." },
      { question: "Can I use both Phantom and Backpack?", answer: "Yes, both can be installed simultaneously. They create separate wallet instances with different keys unless you import the same seed phrase. Many Solana users install both to access the full range of ecosystem features." },
    ],
  },
  {
    slug: "tangem-vs-ledger",
    name1: "Tangem", name2: "Ledger",
    funcName: "TangemVsLedger",
    metaTitle: "Tangem vs Ledger",
    metaDesc: "Tangem vs Ledger hardware wallet comparison. NFC cards vs USB devices, security, ease of use compared.",
    intro: "Tangem and Ledger represent fundamentally different approaches to hardware wallet design. Tangem uses NFC smart cards you tap against your phone, while Ledger uses traditional USB devices with secure element chips. This comparison examines which approach better suits different users.",
    features: ["Form Factor", "Price", "Connection", "Supported Coins", "Secure Element", "Battery", "Screen", "Backup Method", "Open Source", "Mobile App"],
    item1Features: { "Form Factor": "NFC smart cards", Price: "From $55 (3-card set)", Connection: "NFC tap", "Supported Coins": "7,000+", "Secure Element": "Yes (EAL6+)", Battery: "None needed", Screen: "No (phone display)", "Backup Method": "Backup cards", "Open Source": "Partially", "Mobile App": "Yes (required)" },
    item2Features: { "Form Factor": "USB device", Price: "From $79 (Nano S Plus)", Connection: "USB-C / Bluetooth", "Supported Coins": "5,500+", "Secure Element": "Yes (CC EAL5+)", Battery: "Yes (Nano X)", Screen: "Yes (on device)", "Backup Method": "24-word seed phrase", "Open Source": "Partially", "Mobile App": "Ledger Live" },
    rating1: 4.3, rating2: 4.7,
    sections: [
      "Tangem's card form factor is revolutionary for portability — the cards fit in your physical wallet, require no batteries or charging, and connect via NFC tap. The three-card set provides built-in backup without needing to write down seed phrases. Ledger offers a more traditional experience with on-device screen verification and broader ecosystem support through Ledger Live's extensive app catalog.",
      "Tangem excels for users who want simplicity and portability above all else. The tap-to-sign experience is the fastest hardware wallet interaction available. Ledger excels for users who want maximum control with on-device transaction verification, broader third-party wallet integration, and the Ledger Live ecosystem of DeFi apps. For everyday spending and mobile-first users, Tangem wins. For comprehensive portfolio management and DeFi, Ledger has the edge.",
    ],
    faqs: [
      { question: "Is Tangem as secure as Ledger?", answer: "Both use certified secure element chips (Tangem EAL6+, Ledger EAL5+). The security architectures differ but both protect against key extraction. Tangem's approach of no seed phrase eliminates a common attack vector, while Ledger's on-device screen prevents phone-based display attacks. Both have been independently audited." },
      { question: "What if I lose my Tangem cards?", answer: "Tangem is sold in sets of 2-3 cards that serve as backups for each other. If you lose one card, the others still contain your keys. If you lose all cards, your funds are lost — there is no seed phrase recovery. This makes storing at least one backup card in a separate secure location essential." },
      { question: "Which is better for DeFi?", answer: "Ledger has better DeFi support through Ledger Live's built-in dApp access and integration with browser wallets like MetaMask and Rabby. Tangem can connect to dApps through WalletConnect but the experience is less mature. For heavy DeFi use, Ledger is the better choice." },
    ],
  },
  {
    slug: "hot-vs-cold-wallets",
    name1: "Hot Wallets", name2: "Cold Wallets",
    funcName: "HotVsColdWallets",
    metaTitle: "Hot vs Cold Wallets",
    metaDesc: "Hot wallet vs cold wallet comparison. Security, convenience, cost, and best use cases explained.",
    intro: "The hot vs cold wallet distinction is one of the most important decisions in crypto security. Hot wallets connect to the internet for convenience, while cold wallets stay offline for maximum security. Understanding the trade-offs helps you choose the right approach for your needs.",
    features: ["Internet Connection", "Key Storage", "Typical Cost", "Setup Time", "Transaction Speed", "DeFi Access", "Security Level", "Recovery", "Best For", "Examples"],
    item1Features: { "Internet Connection": "Always connected", "Key Storage": "Device/browser", "Typical Cost": "Free", "Setup Time": "Minutes", "Transaction Speed": "Instant signing", "DeFi Access": "Direct and seamless", "Security Level": "Moderate", Recovery: "Seed phrase", "Best For": "Daily use, DeFi, trading", Examples: "MetaMask, Phantom, Trust Wallet" },
    item2Features: { "Internet Connection": "Offline by default", "Key Storage": "Dedicated hardware", "Typical Cost": "$55-$250+", "Setup Time": "30+ minutes", "Transaction Speed": "Requires device", "DeFi Access": "Via companion app", "Security Level": "Maximum", Recovery: "Seed phrase or cards", "Best For": "Long-term storage", Examples: "Ledger, Trezor, Coldcard" },
    rating1: 4.0, rating2: 4.7,
    sections: [
      "Hot wallets like MetaMask, Phantom, and Trust Wallet store your private keys on an internet-connected device. This enables instant transaction signing and seamless dApp connections, making them ideal for active DeFi use and trading. The trade-off is exposure to online threats — malware, phishing, and remote attacks could potentially access your keys. Hot wallets are best for funds you actively use.",
      "Cold wallets like Ledger, Trezor, and Coldcard store keys on dedicated hardware that never exposes them to the internet. Transaction signing happens on the device itself, so even if your computer is compromised, your keys remain safe. The trade-off is convenience — every transaction requires the physical device. Cold wallets are best for long-term storage of significant holdings. Many users use both: a hot wallet for daily activity and a cold wallet for savings.",
    ],
    faqs: [
      { question: "Should I use a hot or cold wallet?", answer: "Most serious crypto users should use both. Keep daily spending and DeFi funds in a hot wallet for convenience, and store the majority of your holdings in a cold wallet for security. A common approach is to keep no more than you would in a physical wallet in your hot wallet, and treat your cold wallet like a savings account." },
      { question: "Can hot wallets connect to hardware wallets?", answer: "Yes. Most hot wallets like MetaMask, Rabby, and Phantom can connect to hardware wallets. This gives you the interface and dApp connectivity of a hot wallet while signing transactions on the cold wallet device, combining the best of both approaches." },
      { question: "How much crypto should I keep in a hot wallet?", answer: "Only keep what you need for active trading and DeFi interactions. A common guideline is no more than 10-20% of your total portfolio or an amount you would be comfortable losing. Any crypto you are holding long-term or not actively using should be in cold storage." },
    ],
  },
  {
    slug: "custodial-vs-non-custodial",
    name1: "Custodial Wallets", name2: "Non-Custodial Wallets",
    funcName: "CustodialVsNonCustodial",
    metaTitle: "Custodial vs Non-Custodial Wallets",
    metaDesc: "Custodial vs non-custodial wallet comparison. Key ownership, security, recovery options compared.",
    intro: "The custody model determines who controls your crypto. Custodial wallets let a third party manage your keys (like a bank), while non-custodial wallets give you full control. This fundamental choice affects security, convenience, and sovereignty over your digital assets.",
    features: ["Key Ownership", "Account Recovery", "KYC Required", "DeFi Access", "Counterparty Risk", "Regulatory Protection", "Ease of Use", "Cost", "Privacy", "Control"],
    item1Features: { "Key Ownership": "Provider holds keys", "Account Recovery": "Password reset available", "KYC Required": "Yes", "DeFi Access": "Limited", "Counterparty Risk": "High", "Regulatory Protection": "Some (varies)", "Ease of Use": "Very easy", Cost: "Free (may have fees)", Privacy: "Low (KYC required)", Control: "Provider controls" },
    item2Features: { "Key Ownership": "You hold keys", "Account Recovery": "Seed phrase only", "KYC Required": "No", "DeFi Access": "Full access", "Counterparty Risk": "None", "Regulatory Protection": "None", "Ease of Use": "Moderate learning curve", Cost: "Free (hardware costs)", Privacy: "High", Control: "Full user control" },
    rating1: 3.8, rating2: 4.5,
    sections: [
      "Custodial wallets like exchange accounts (Coinbase, Binance) manage your private keys on your behalf. You access funds through a username and password, and can recover your account if you forget credentials. The major risk is counterparty exposure — if the custodian gets hacked, goes bankrupt, or freezes your account, you could lose access to your funds. Historical events like the FTX collapse highlight this risk.",
      "Non-custodial wallets like MetaMask, Phantom, and Ledger give you sole control of your private keys through a seed phrase. No third party can freeze your funds or deny access. The responsibility is entirely yours — lose your seed phrase and no one can help you recover. Non-custodial wallets provide full access to DeFi and require no personal information. For crypto sovereignty, non-custodial is the fundamental choice.",
    ],
    faqs: [
      { question: "Which is safer?", answer: "It depends on the user. Non-custodial wallets eliminate counterparty risk but require responsible key management. Custodial wallets offer account recovery but expose you to exchange hacks and business failures. For users who can securely store a seed phrase, non-custodial is safer. For users who frequently lose passwords and may lose a seed phrase, a reputable custodian might actually be safer despite the counterparty risk." },
      { question: "Can I switch from custodial to non-custodial?", answer: "Yes. You can withdraw your crypto from a custodial exchange to a non-custodial wallet address at any time (subject to the exchange's withdrawal policies). This is simply a blockchain transfer. The reverse — depositing from a non-custodial wallet to an exchange — is equally straightforward." },
      { question: "What does 'not your keys, not your coins' mean?", answer: "This popular crypto phrase means that if you do not hold the private keys to your crypto, you do not truly own it. In a custodial arrangement, the custodian technically controls the assets and could potentially restrict your access. Only with non-custodial wallets do you have cryptographic proof of ownership that no third party can revoke." },
    ],
  },
  {
    slug: "software-vs-hardware",
    name1: "Software Wallets", name2: "Hardware Wallets",
    funcName: "SoftwareVsHardware",
    metaTitle: "Software vs Hardware Wallets",
    metaDesc: "Software wallet vs hardware wallet comparison. Security, cost, convenience, and DeFi access compared.",
    intro: "Software wallets run as apps on your phone or computer, while hardware wallets are dedicated physical devices for key storage. This comparison breaks down the security, convenience, cost, and feature trade-offs to help you choose the right type for your crypto management strategy.",
    features: ["Form Factor", "Cost", "Key Storage", "Internet Exposure", "DeFi Ease", "Transaction Speed", "Portability", "Setup Difficulty", "Attack Surface", "Best For"],
    item1Features: { "Form Factor": "App or extension", Cost: "Free", "Key Storage": "Encrypted on device", "Internet Exposure": "Always online", "DeFi Ease": "Seamless", "Transaction Speed": "Instant", Portability: "On any device", "Setup Difficulty": "Easy", "Attack Surface": "Larger (online device)", "Best For": "Active DeFi use" },
    item2Features: { "Form Factor": "Physical device", Cost: "$55-$250+", "Key Storage": "Secure element chip", "Internet Exposure": "Offline by default", "DeFi Ease": "Requires connection step", "Transaction Speed": "Requires device interaction", Portability: "Must carry device", "Setup Difficulty": "Moderate", "Attack Surface": "Minimal", "Best For": "Long-term storage" },
    rating1: 4.2, rating2: 4.6,
    sections: [
      "Software wallets offer unmatched convenience for daily crypto use. Free to install, instant to set up, and seamlessly integrated with dApps, they are the go-to choice for active DeFi participation and trading. However, because they run on internet-connected devices, they are vulnerable to malware, phishing, and operating system exploits. Major software wallets include MetaMask, Phantom, Trust Wallet, and Exodus.",
      "Hardware wallets provide the strongest security by isolating your private keys on a dedicated device with a secure element chip. Keys never leave the device, so even if your computer is fully compromised, an attacker cannot steal your crypto. The trade-off is a less fluid experience — you need the physical device to sign transactions, and the connection process adds friction. Leading hardware wallets include Ledger, Trezor, Coldcard, and Keystone.",
    ],
    faqs: [
      { question: "Do I need a hardware wallet?", answer: "If you hold more crypto than you can afford to lose, a hardware wallet is strongly recommended. The cost of a hardware device is trivial compared to the value it protects. For small amounts used in DeFi and daily transactions, a software wallet is sufficient. Many users combine both — software for active use, hardware for savings." },
      { question: "Can I use a software wallet with a hardware wallet?", answer: "Yes, this is actually the recommended setup. Software wallets like MetaMask and Rabby can connect to hardware wallets for transaction signing. You get the interface and dApp connectivity of the software wallet with the key security of the hardware device. This combined approach gives you the best of both worlds." },
      { question: "Are software wallets safe enough for large amounts?", answer: "For large amounts, software wallets alone are not recommended. Even the best software wallet stores keys on an internet-connected device, which creates inherent risk. Hardware wallets add a critical security layer by keeping keys in an offline, tamper-resistant environment. The general recommendation is to use hardware wallets for any amount that would be painful to lose." },
    ],
  },
  {
    slug: "mobile-vs-desktop",
    name1: "Mobile Wallets", name2: "Desktop Wallets",
    funcName: "MobileVsDesktop",
    metaTitle: "Mobile vs Desktop Wallets",
    metaDesc: "Mobile wallet vs desktop wallet comparison. Portability, security, features, and dApp access compared.",
    intro: "Mobile and desktop wallets serve different use cases within the crypto ecosystem. Mobile wallets offer portability and biometric security, while desktop wallets provide larger screens and better dApp integration. Understanding the trade-offs helps you pick the right platform for your needs.",
    features: ["Portability", "Screen Size", "Biometric Auth", "dApp Access", "QR Scanning", "Hardware Wallet", "Multi-tasking", "Battery Dependency", "Camera Access", "Notifications"],
    item1Features: { Portability: "Always with you", "Screen Size": "Small (5-7 inches)", "Biometric Auth": "Face ID / fingerprint", "dApp Access": "Mobile dApp browser", "QR Scanning": "Built-in camera", "Hardware Wallet": "Bluetooth/NFC", "Multi-tasking": "Limited", "Battery Dependency": "Yes", "Camera Access": "Yes", Notifications: "Push notifications" },
    item2Features: { Portability: "Tied to computer", "Screen Size": "Large (13+ inches)", "Biometric Auth": "Limited (fingerprint)", "dApp Access": "Full browser integration", "QR Scanning": "Requires webcam", "Hardware Wallet": "USB / Bluetooth", "Multi-tasking": "Full", "Battery Dependency": "Optional", "Camera Access": "Webcam only", Notifications: "App notifications" },
    rating1: 4.3, rating2: 4.4,
    sections: [
      "Mobile wallets like Trust Wallet, Phantom, and Rainbow offer the convenience of always having your crypto accessible. Biometric authentication (Face ID, fingerprint) provides a fast security layer. Built-in cameras enable QR code scanning for payments and air-gapped wallet connections. Push notifications keep you informed of incoming transactions. The main limitation is screen size, which makes complex DeFi interactions harder to manage.",
      "Desktop wallets like MetaMask, Rabby, and Frame excel at dApp interactions through full browser integration. The larger screen makes reviewing complex transactions, managing multiple positions, and comparing DeFi protocols much more comfortable. USB connections to hardware wallets are more reliable than Bluetooth. Desktop wallets are the preferred choice for serious DeFi users who spend significant time interacting with protocols. Many users maintain wallets on both platforms, synced via the same seed phrase.",
    ],
    faqs: [
      { question: "Is a mobile wallet secure enough?", answer: "Modern smartphones have strong security features. iOS devices use the Secure Enclave for cryptographic operations, and Android devices have similar hardware security modules. Combined with a reputable wallet app and biometric authentication, mobile wallets provide reasonable security for moderate holdings. For large amounts, pairing with a hardware wallet via Bluetooth or NFC adds a critical security layer." },
      { question: "Can I use the same wallet on mobile and desktop?", answer: "Yes, most popular wallets like MetaMask, Phantom, and Coinbase Wallet are available on both mobile and desktop. You can import the same seed phrase to access your accounts on both platforms. Some wallets also offer encrypted cloud sync to keep settings and preferences consistent across devices." },
      { question: "Which is better for DeFi?", answer: "Desktop wallets are generally better for DeFi due to larger screens, easier multi-tab management, and more reliable hardware wallet connections. Complex transactions like multi-step yield farming strategies are easier to review on a full-size display. However, mobile wallets have improved significantly, and simple DeFi interactions like swaps and staking work well on mobile." },
    ],
  },
  {
    slug: "evm-vs-solana-wallets",
    name1: "EVM Wallets", name2: "Solana Wallets",
    funcName: "EvmVsSolanaWallets",
    metaTitle: "EVM Wallets vs Solana Wallets",
    metaDesc: "EVM wallet vs Solana wallet comparison. Ecosystem, fees, speed, DeFi, and NFT differences explained.",
    intro: "The EVM and Solana ecosystems use different wallet technologies and offer distinct user experiences. EVM wallets work across Ethereum and compatible chains, while Solana wallets are optimized for Solana's unique architecture. This comparison covers the key differences in functionality, fees, and ecosystem access.",
    features: ["Primary Chains", "Transaction Speed", "Gas Fees", "Token Standard", "NFT Standard", "DeFi Ecosystem", "dApp Count", "Account Model", "Popular Wallet", "Multi-Chain"],
    item1Features: { "Primary Chains": "Ethereum + L2s, BSC, Polygon", "Transaction Speed": "12 sec (ETH) to instant (L2s)", "Gas Fees": "$0.01-$50+ (varies by chain)", "Token Standard": "ERC-20", "NFT Standard": "ERC-721, ERC-1155", "DeFi Ecosystem": "Largest TVL", "dApp Count": "10,000+", "Account Model": "Account-based", "Popular Wallet": "MetaMask", "Multi-Chain": "Any EVM chain" },
    item2Features: { "Primary Chains": "Solana mainnet", "Transaction Speed": "400ms", "Gas Fees": "Less than $0.01", "Token Standard": "SPL", "NFT Standard": "Metaplex", "DeFi Ecosystem": "Growing rapidly", "dApp Count": "1,000+", "Account Model": "Account-based (different)", "Popular Wallet": "Phantom", "Multi-Chain": "Solana only (mostly)" },
    rating1: 4.5, rating2: 4.6,
    sections: [
      "EVM wallets provide access to the largest DeFi ecosystem by total value locked, spanning Ethereum mainnet, Layer 2 networks like Arbitrum and Optimism, and other EVM chains like Polygon and BNB Chain. A single wallet and seed phrase works across all these networks, giving you enormous flexibility. The trade-off is gas fee variability — Ethereum mainnet can be expensive, though Layer 2 networks have brought costs down dramatically.",
      "Solana wallets offer a fundamentally different experience with sub-second transactions and fees that almost always cost less than a penny. The Solana DeFi ecosystem has grown rapidly with protocols like Jupiter, Raydium, and Marinade. NFTs on Solana are particularly vibrant with compressed NFTs enabling mass distribution. The limitation is ecosystem scope — Solana wallets primarily access only Solana applications, though some like Phantom have added EVM support.",
    ],
    faqs: [
      { question: "Should I use an EVM wallet or Solana wallet?", answer: "Choose based on which ecosystem you want to use. If you are interested in Ethereum DeFi, Layer 2 protocols, or multi-chain strategies, an EVM wallet is essential. If you prefer fast and cheap transactions with Solana DeFi and NFTs, a Solana wallet is the way to go. Many active crypto users maintain both — MetaMask or Rabby for EVM and Phantom for Solana." },
      { question: "Can one wallet work for both?", answer: "Some wallets like Phantom and Trust Wallet support both EVM and Solana chains, but the experience is typically stronger on one side. Phantom excels on Solana with added EVM support. MetaMask is EVM-only. For the best experience in each ecosystem, using dedicated wallets is recommended." },
      { question: "Which has lower fees?", answer: "Solana has consistently lower fees at less than $0.01 per transaction. EVM fees vary wildly — Ethereum mainnet can cost $5-$50+ during congestion, but Layer 2 networks like Arbitrum and Base offer fees comparable to Solana at $0.01-$0.10. If you use EVM on Layer 2 networks, the fee difference versus Solana is minimal." },
    ],
  },
  {
    slug: "multisig-vs-single-key",
    name1: "Multisig Wallets", name2: "Single-Key Wallets",
    funcName: "MultisigVsSingleKey",
    metaTitle: "Multisig vs Single-Key Wallets",
    metaDesc: "Multi-signature wallet vs single-key wallet comparison. Security models, use cases, costs compared.",
    intro: "Multisig wallets require multiple private keys to authorize transactions, while single-key wallets use one key for full control. This comparison explores the security implications, practical trade-offs, and ideal use cases for each approach.",
    features: ["Keys Required", "Setup Complexity", "Transaction Cost", "Recovery Options", "Coordination Need", "Single Point of Failure", "Best For", "Examples", "Key Storage", "Speed"],
    item1Features: { "Keys Required": "M-of-N (e.g., 2-of-3)", "Setup Complexity": "High", "Transaction Cost": "Higher (smart contract)", "Recovery Options": "Redundant key holders", "Coordination Need": "Multiple signers required", "Single Point of Failure": "No", "Best For": "Teams, DAOs, high-value storage", Examples: "Safe, Electrum multisig", "Key Storage": "Distributed across parties", Speed: "Slower (requires coordination)" },
    item2Features: { "Keys Required": "One key", "Setup Complexity": "Low", "Transaction Cost": "Standard", "Recovery Options": "Seed phrase only", "Coordination Need": "None", "Single Point of Failure": "Yes", "Best For": "Individual daily use", Examples: "MetaMask, Phantom, Ledger", "Key Storage": "Single device or location", Speed: "Instant signing" },
    rating1: 4.5, rating2: 4.2,
    sections: [
      "Multisig wallets eliminate the single point of failure that plagues single-key setups. With a 2-of-3 configuration, losing one key does not mean losing your funds, and a single compromised key cannot steal your assets. This makes multisig the gold standard for organizational treasuries, shared accounts, and high-value individual holdings. The trade-off is complexity — every transaction requires coordination between signers, and gas costs are higher due to smart contract execution.",
      "Single-key wallets offer simplicity and speed. One person, one key, instant signing. They are the practical choice for everyday transactions, DeFi interactions, and moderate holdings. The risk is concentration — your entire security depends on one seed phrase stored in one or a few locations. For individuals who implement good seed phrase storage practices, single-key wallets work well. For organizations or large portfolios, the additional security of multisig is worth the complexity.",
    ],
    faqs: [
      { question: "Should individuals use multisig?", answer: "Individuals with significant crypto holdings can benefit from personal multisig using a 2-of-3 setup with keys on different devices (e.g., phone, hardware wallet, backup hardware wallet stored separately). This protects against single device loss or theft. For everyday DeFi use with moderate amounts, single-key wallets are more practical." },
      { question: "How much does multisig cost?", answer: "Creating a Safe multisig wallet costs a gas fee for smart contract deployment (variable based on network congestion). Each transaction costs more gas than a standard single-key transaction due to the smart contract logic — typically 30-50% more on Ethereum mainnet. On Layer 2 networks, these additional costs are minimal." },
      { question: "Can I convert a single-key wallet to multisig?", answer: "You cannot convert an existing single-key wallet into a multisig. Instead, you create a new multisig wallet (like a Safe) and transfer your assets to it. The process involves deploying the multisig smart contract, designating signers, and then sending your crypto from your old wallet to the new multisig address." },
    ],
  },
];

for (const page of walletComparePages) {
  const filePath = `${BASE}/wallets/compare/${page.slug}/page.tsx`;
  const content = `import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: \`${page.metaTitle} (\${CURRENT_YEAR}) - Which Is Better? | \${SITE_NAME}\`,
  description: \`${page.metaDesc}\`,
};

const items = [
  {
    name: ${JSON.stringify(page.name1)},
    slug: ${JSON.stringify(page.name1.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, ''))},
    rating: ${page.rating1},
    affiliateUrl: "#",
    features: ${JSON.stringify(page.item1Features)},
  },
  {
    name: ${JSON.stringify(page.name2)},
    slug: ${JSON.stringify(page.name2.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, ''))},
    rating: ${page.rating2},
    affiliateUrl: "#",
    features: ${JSON.stringify(page.item2Features)},
  },
];

const allFeatures = ${JSON.stringify(page.features)};

const faqs = ${JSON.stringify(page.faqs, null, 2)};

export default function ${page.funcName}Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Wallets", href: "/wallets" },
          { label: "Compare", href: "/wallets/compare" },
          { label: "${page.metaTitle}", href: "/wallets/compare/${page.slug}" },
        ]}
      />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
          ${page.metaTitle} ({CURRENT_YEAR})
        </h1>
        <p className="text-[var(--color-text-secondary)]">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>
      </header>

      <p className="text-lg text-[var(--color-text-secondary)] mb-8">${page.intro}</p>

      <section className="mb-10">
        <ComparisonTable items={items} features={allFeatures} title="${page.name1} vs ${page.name2}" />
      </section>

      <div className="prose-crypto mb-10">
        ${page.sections.map((s, i) => `<p>${s}</p>`).join('\n        ')}
      </div>

      <FAQSection faqs={faqs} />

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Related Content</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/wallets/best/security" className="glass-subtle p-4 glass-hover">
            <span className="text-xs text-[var(--color-primary)]">Best Of</span>
            <h3 className="text-sm font-semibold text-[var(--color-text)]">Best Security Wallets</h3>
          </Link>
          <Link href="/wallets/learn/how-to-choose-crypto-wallet" className="glass-subtle p-4 glass-hover">
            <span className="text-xs text-[var(--color-secondary)]">Guide</span>
            <h3 className="text-sm font-semibold text-[var(--color-text)]">How to Choose a Crypto Wallet</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
`;
  writeIfMissing(filePath, content);
}

console.log("\\n=== Wallet best-of and comparison pages generated ===");
