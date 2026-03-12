import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Hot Wallet? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what hot wallets are, how they differ from cold wallets, and the trade-offs between convenience and security.",
};

export default function HotWalletPage() {
  return (
    <LearnPageLayout
      title="What Is a Hot Wallet?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="A hot wallet is a cryptocurrency wallet that is connected to the internet. This includes browser extension wallets like MetaMask, mobile wallet apps, and desktop wallet software. Hot wallets offer convenience for frequent transactions and DeFi interactions but are more vulnerable to hacking, malware, and phishing attacks compared to offline cold storage solutions."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-hot-wallet", title: "What Is a Hot Wallet?", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-hot-wallets", title: "Types of Hot Wallets", level: 2 },
        { id: "hot-vs-cold", title: "hot-vs-cold", level: 2 },
        { id: "hot-wallets-vs-cold-wallets", title: "Hot Wallets vs Cold Wallets", level: 2 },
        { id: "security-tips", title: "security-tips", level: 2 },
        { id: "security-tips", title: "Security Tips", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-hot-wallets-matter", title: "Why Hot Wallets Matter", level: 2 }
      ]}
      faqs={[
        {
          question: "Are hot wallets safe to use?",
          answer:
            "Hot wallets are safe for reasonable amounts and daily use when proper security practices are followed. However, they should not be used to store large holdings. Think of a hot wallet like a physical wallet in your pocket: convenient for daily spending, but you would not carry your life savings in it. Use hardware wallets for significant amounts.",
        },
        {
          question: "What is the most popular hot wallet?",
          answer:
            "MetaMask is the most widely used hot wallet for Ethereum and EVM-compatible chains, with tens of millions of users. Phantom is popular for Solana. Trust Wallet and Coinbase Wallet are popular mobile options. The best choice depends on which blockchains you use and whether you prefer browser or mobile access.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Cold Wallet?", href: "/learn/glossary/cold-wallet", category: "Glossary" },
        { title: "What Is a Hardware Wallet?", href: "/learn/glossary/hardware-wallet", category: "Glossary" },
        { title: "What Is a Private Key?", href: "/learn/glossary/private-key", category: "Glossary" },
        { title: "What Is a Seed Phrase?", href: "/learn/glossary/seed-phrase", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Hot Wallet?</h2>
      <p>
        A hot wallet is any cryptocurrency wallet that maintains a connection to the internet. The private keys that control your funds are stored on an internet-connected device, such as your computer, phone, or in a browser extension. This connectivity enables quick access for sending, receiving, and interacting with decentralized applications, but it also creates an attack surface for hackers and malware.
      </p>

      <h2 id="types">Types of Hot Wallets</h2>
      <p>
        Browser extension wallets (MetaMask, Phantom) run inside your web browser and connect directly to DApps. Mobile wallets (Trust Wallet, Rainbow) offer on-the-go access. Desktop wallets (Exodus, Electrum) run as standalone applications. Custodial exchange wallets are also hot wallets, though the exchange controls the private keys rather than the user.
      </p>

      <h2 id="hot-vs-cold">Hot Wallets vs Cold Wallets</h2>
      <p>
        The key difference is internet connectivity. Hot wallets prioritize convenience and accessibility at the cost of increased vulnerability. Cold wallets (hardware devices, air-gapped computers, paper wallets) prioritize security by keeping keys offline. Most experienced users employ both: a hot wallet with limited funds for daily DeFi activity and a cold wallet for long-term holdings.
      </p>

      <h2 id="security-tips">Security Tips</h2>
      <p>
        Only keep funds you actively need in a hot wallet. Regularly review and revoke token approvals. Be cautious of phishing sites that impersonate legitimate DApps. Never share your seed phrase with anyone or enter it on websites. Use a dedicated device or browser profile for crypto transactions. Enable all available security features like password protection and biometric locks on mobile wallets.
      </p>

      <h2 id="why-it-matters">Why Hot Wallets Matter</h2>
      <p>
        Hot wallets are the primary interface between users and the crypto ecosystem. They enable participation in DeFi, NFT markets, governance, and everyday transactions. Without hot wallets, the user experience would be too cumbersome for mainstream adoption. Understanding their capabilities and limitations helps users make informed decisions about how to balance convenience with security.
      </p>
    </LearnPageLayout>
  );
}
