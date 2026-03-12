import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Types of Crypto Wallets Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about the different types of crypto wallets including hardware, software, mobile, browser extension, and paper wallets. Find the right wallet for your needs.",
};

export default function WalletTypesExplainedPage() {
  return (
    <LearnPageLayout title="Types of Crypto Wallets Explained" categoryName="Crypto Wallets" categorySlug="wallets" readTime="9 min read"
      intro="Crypto wallets come in many forms, each offering different trade-offs between security, convenience, and functionality. From hardware devices that keep your keys offline to browser extensions that integrate seamlessly with DeFi, understanding the wallet landscape is essential for choosing the right tool for your needs. This guide breaks down every type of crypto wallet, their strengths and weaknesses, and the best use case for each."
      toc={[
        { id: "wallet-categories", title: "wallet-categories", level: 2 },
        { id: "wallet-categories-overview", title: "Wallet Categories Overview", level: 2 },
        { id: "hardware-wallets", title: "hardware-wallets", level: 2 },
        { id: "hardware-wallets", title: "Hardware Wallets", level: 2 },
        { id: "software-wallets", title: "software-wallets", level: 2 },
        { id: "software-wallets", title: "Software Wallets", level: 2 },
        { id: "choosing-right-type", title: "choosing-right-type", level: 2 },
        { id: "choosing-the-right-type", title: "Choosing the Right Type", level: 2 }
      ]}
      faqs={[{ question: "Which type of wallet is most secure?", answer: "Hardware wallets are the most secure for storing large amounts because they keep private keys offline, immune to malware and phishing. However, security also depends on user practices. A hardware wallet improperly backed up is less secure than a well-managed software wallet. Multi-signature wallets offer the highest security for organizations." },
        { question: "Can I use multiple wallet types?", answer: "Yes, and this is recommended. Most experienced users keep a hardware wallet for long-term holdings, a browser extension wallet for DeFi interaction, and possibly a mobile wallet for on-the-go transactions. This layered approach balances security with convenience for different activities." },
        { question: "Are custodial wallets safe?", answer: "Custodial wallets (where an exchange holds your keys) are convenient but carry counterparty risk. If the exchange is hacked or goes bankrupt (like FTX), you may lose your funds. For small amounts and active trading, exchange wallets are practical. For long-term storage of significant amounts, non-custodial wallets are strongly recommended." }]}
      relatedArticles={[{ title: "Choosing Your First Wallet", href: "/wallets/learn/choosing-first-wallet", category: "Wallets" }, { title: "Hardware Wallet Setup", href: "/wallets/learn/hardware-wallet-setup", category: "Wallets" }, { title: "Mobile Wallet Guide", href: "/wallets/learn/mobile-wallet-guide", category: "Wallets" }, { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" }]}
    >
      <section id="wallet-categories">
        <h2>Wallet Categories Overview</h2>
        <p>Crypto wallets fall into two main categories: hot wallets (connected to the internet) and cold wallets (offline storage). Hot wallets include browser extensions, mobile apps, and desktop applications. Cold wallets include hardware devices and paper wallets. Within each category, wallets further differentiate by custody model (custodial vs non-custodial), chain support (single-chain vs multi-chain), and functionality (basic vs DeFi-enabled).</p>
        <p>The security-convenience spectrum is the fundamental trade-off. Hardware wallets require physical interaction for every transaction but are nearly immune to remote attacks. Browser wallets are instantly accessible for DeFi but are vulnerable to phishing and malware. Understanding where each wallet type falls on this spectrum helps you make informed decisions about which to use for different activities and amounts.</p>
      </section>

      <section id="hardware-wallets">
        <h2>Hardware Wallets</h2>
        <p>Hardware wallets are physical devices (like Ledger and Trezor) that store private keys on secure chips isolated from the internet. Transactions must be physically confirmed on the device, preventing remote theft. They range from $79 to $279 and support thousands of tokens across multiple blockchains. Hardware wallets are the gold standard for storing significant crypto holdings and are recommended for anyone with more than a few thousand dollars in crypto.</p>
        <p>The main limitation of hardware wallets is convenience. Every transaction requires connecting the device and physically confirming, making them impractical for frequent DeFi interactions. They also have limited display sizes for verifying transaction details. Some newer hardware wallets offer Bluetooth connectivity and mobile integration to improve usability without compromising security.</p>
      </section>

      <section id="software-wallets">
        <h2>Software Wallets</h2>
        <p>Browser extension wallets like MetaMask, Phantom, and Rabby are the most popular for DeFi users. They integrate directly with decentralized applications through the browser, enabling one-click connections to DEXs, lending platforms, and NFT marketplaces. Mobile wallets like Trust Wallet and Coinbase Wallet provide on-the-go access with QR code scanning and biometric security. Desktop wallets like Exodus offer portfolio management with built-in exchange features.</p>
        <p>Software wallets store keys on your device, protected by encryption and a password. They are more vulnerable than hardware wallets to malware, phishing, and physical device compromise. However, for daily DeFi usage and moderate amounts, the convenience advantages make them practical choices. Using a software wallet in combination with a hardware wallet (software wallet connected to hardware signer) provides the best of both worlds.</p>
      </section>

      <section id="choosing-right-type">
        <h2>Choosing the Right Type</h2>
        <p>For beginners, start with a reputable mobile wallet like Coinbase Wallet or Trust Wallet for learning. For active DeFi users, a browser extension like MetaMask or Rabby is essential. For long-term storage of significant value, invest in a hardware wallet like Ledger or Trezor. For organizations or large holdings, consider multi-signature wallets like Safe that require multiple approvals for transactions.</p>
        <p>Many users eventually settle on a multi-wallet setup: hardware wallet for savings, browser wallet for DeFi, and mobile wallet for day-to-day transactions. The key principle is to never store more value in a hot wallet than you are willing to lose, and always maintain secure backups of your seed phrases in separate physical locations. Your wallet choice should evolve as your crypto holdings and usage patterns grow.</p>
      </section>
    </LearnPageLayout>
  );
}
