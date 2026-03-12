import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Types of Crypto Wallets Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn about the different types of crypto wallets including hardware, software, mobile, desktop, browser extension, paper, and custodial wallets.",
  keywords: ["crypto wallet types", "hardware wallet", "software wallet", "hot wallet", "cold wallet"],
};

export default function TypesOfCryptoWalletsPage() {
  return (
    <LearnPageLayout
      title="Types of Crypto Wallets Explained"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="10 min"
      intro="Crypto wallets come in many forms, each with different security properties, convenience levels, and ideal use cases. Understanding the distinctions between hardware, software, mobile, desktop, and custodial wallets is essential for choosing the right tool for your needs."
      toc={[
        { id: "hardware", title: "hardware", level: 2 },
        { id: "hardware-wallets", title: "Hardware Wallets", level: 2 },
        { id: "software", title: "software", level: 2 },
        { id: "software-wallets", title: "Software Wallets", level: 2 },
        { id: "mobile", title: "mobile", level: 2 },
        { id: "mobile-wallets", title: "Mobile Wallets", level: 2 },
        { id: "desktop", title: "desktop", level: 2 },
        { id: "desktop-wallets", title: "Desktop Wallets", level: 2 },
        { id: "browser", title: "browser", level: 2 },
        { id: "browser-extension-wallets", title: "Browser Extension Wallets", level: 2 },
        { id: "paper", title: "paper", level: 2 },
        { id: "paper-wallets", title: "Paper Wallets", level: 2 },
        { id: "custodial", title: "custodial", level: 2 },
        { id: "custodial-wallets", title: "Custodial Wallets", level: 2 },
        { id: "choosing", title: "choosing", level: 2 },
        { id: "choosing-the-right-type", title: "Choosing the Right Type", level: 2 }
      ]}
      faqs={[
        { question: "What type of wallet is best for beginners?", answer: "Mobile wallets like Trust Wallet or Coinbase Wallet offer the easiest onboarding experience. They provide biometric security, intuitive interfaces, and often include guided setup processes. As you become more comfortable, consider adding a hardware wallet for long-term storage." },
        { question: "Can I use multiple wallet types?", answer: "Yes, and most experienced crypto users do. A common setup is a hardware wallet for long-term savings, a browser extension wallet for DeFi interactions, and a mobile wallet for on-the-go transactions. Each type serves a different purpose in your overall crypto management strategy." },
        { question: "Which wallet type is most secure?", answer: "Hardware wallets provide the highest security by keeping private keys offline on a dedicated device. Air-gapped hardware wallets that communicate only via QR codes offer the maximum isolation. However, security also depends heavily on user behavior — any wallet is only as secure as your seed phrase storage and phishing awareness." },
      ]}
      relatedArticles={[
        { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" },
        { title: "Best Hardware Wallets", href: "/wallets/best/hardware", category: "Best Of" },
        { title: "Hot vs Cold Wallets", href: "/wallets/compare/hot-vs-cold-wallets", category: "Compare" },
        { title: "How to Choose a Crypto Wallet", href: "/wallets/learn/how-to-choose-crypto-wallet", category: "Wallets" },
      ]}
    >
      <section id="hardware">
        <h2>Hardware Wallets</h2>
        <p>Hardware wallets are dedicated physical devices designed specifically for storing cryptocurrency private keys offline. They use secure element chips — the same tamper-resistant technology found in credit cards and passports — to protect your keys from extraction. Popular hardware wallets include Ledger, Trezor, Coldcard, Keystone, and Tangem. These devices range from $55 to $250 and connect to your computer or phone via USB, Bluetooth, NFC, or QR codes. Hardware wallets are considered the gold standard for security because your private keys never touch an internet-connected device. Even if your computer is infected with malware, a hardware wallet keeps your keys safe in its isolated environment.</p>
      </section>
      <section id="software">
        <h2>Software Wallets</h2>
        <p>Software wallets are applications that run on your computer or phone, storing your private keys in encrypted form on the device. They are free to download and set up in minutes, making them the most accessible wallet type. Software wallets include mobile apps, desktop applications, and browser extensions. While they offer excellent convenience for daily transactions and DeFi interactions, they store keys on internet-connected devices, which creates inherent security risks from malware, phishing, and device compromise. Software wallets are best for active trading and moderate amounts rather than long-term storage of significant holdings.</p>
      </section>
      <section id="mobile">
        <h2>Mobile Wallets</h2>
        <p>Mobile wallets run on your smartphone, leveraging biometric authentication like Face ID and fingerprint scanning for quick access. They are ideal for on-the-go transactions, QR code payments, and casual portfolio checking. Leading mobile wallets include Trust Wallet, Phantom, MetaMask Mobile, and Rainbow. The smartphone ecosystem provides security benefits like hardware-backed key storage via the Secure Enclave on iOS and similar modules on Android. Mobile wallets can also connect to hardware wallets via Bluetooth or NFC for enhanced security while maintaining the mobile convenience factor. The main limitation is screen size, which can make complex DeFi transactions harder to review carefully.</p>
      </section>
      <section id="desktop">
        <h2>Desktop Wallets</h2>
        <p>Desktop wallets are standalone applications that run on Windows, macOS, or Linux. They offer the advantages of larger screens for reviewing transactions, USB connections for hardware wallets, and the ability to run alongside browser-based dApps. Exodus is a popular desktop wallet with portfolio tracking, while Frame provides a system-level wallet that works across all browsers. Electrum is the go-to desktop wallet for Bitcoin power users. Desktop wallets generally provide a more spacious and comfortable experience for managing complex portfolios and interacting with DeFi protocols compared to mobile alternatives.</p>
      </section>
      <section id="browser">
        <h2>Browser Extension Wallets</h2>
        <p>Browser extension wallets live in your web browser and enable direct interaction with web-based dApps, DeFi protocols, and NFT marketplaces. MetaMask pioneered this category and remains the most widely used, while Rabby has gained popularity for its transaction simulation features. Phantom serves as the primary browser wallet for Solana. Browser extensions inject a Web3 provider into web pages, allowing dApps to request wallet connections and transaction signatures. This makes them essential for DeFi activities. The trade-off is that browser extensions exist within the browser security sandbox, which means browser vulnerabilities could potentially affect your wallet.</p>
      </section>
      <section id="paper">
        <h2>Paper Wallets</h2>
        <p>Paper wallets involve printing your private key or seed phrase on physical paper and storing it offline. While this was a common cold storage method in early Bitcoin days, paper wallets are now generally considered outdated and risky. Paper degrades over time, ink fades, and the process of creating and using paper wallets involves technical steps where keys could be exposed to online devices. Modern hardware wallets provide all the offline security benefits of paper wallets with far better usability and durability. If you do use paper for seed phrase backup, store it in a waterproof, fireproof container in a secure location, and consider metal backup plates for long-term durability.</p>
      </section>
      <section id="custodial">
        <h2>Custodial Wallets</h2>
        <p>Custodial wallets are managed by a third party — typically a cryptocurrency exchange like Coinbase or Binance. The exchange holds your private keys and manages security on your behalf. You access your funds through a username and password, similar to a bank account. Custodial wallets offer convenience, account recovery options, and customer support, making them accessible for beginners. The critical trade-off is counterparty risk: if the custodian is hacked, goes bankrupt, or freezes your account, you could lose access to your funds. The collapse of FTX demonstrated this risk dramatically, resulting in billions in user losses.</p>
      </section>
      <section id="choosing">
        <h2>Choosing the Right Wallet Type</h2>
        <p>The best approach for most users is combining wallet types for different purposes. Use a hardware wallet for long-term savings and large holdings where security is paramount. Use a browser extension or mobile wallet for active DeFi participation and daily transactions where convenience matters. Consider a custodial exchange wallet for active trading where you need assets readily available for quick buys and sells. The proportion of funds in each type should reflect your activity level: most crypto should be in cold storage, with only working capital in hot wallets. As your portfolio grows, investing in proper security infrastructure like hardware wallets becomes increasingly important relative to the value being protected.</p>
      </section>
    </LearnPageLayout>
  );
}
