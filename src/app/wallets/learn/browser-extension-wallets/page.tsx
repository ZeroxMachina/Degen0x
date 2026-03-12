import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Browser Extension Wallets Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about browser extension crypto wallets like MetaMask, Phantom, and Rabby. Compare features, security, and find the best extension wallet for DeFi.",
};

export default function BrowserExtensionWalletsPage() {
  return (
    <LearnPageLayout title="Browser Extension Wallets Guide" categoryName="Crypto Wallets" categorySlug="wallets" readTime="9 min read"
      intro="Browser extension wallets are the gateway to decentralized finance, providing seamless integration between your web browser and blockchain applications. They inject a connection interface into web pages, allowing one-click interactions with DEXs, lending protocols, NFT marketplaces, and thousands of other dApps. Understanding how browser wallets work, their security model, and which one fits your needs is essential for anyone exploring DeFi."
      toc={[
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-browser-wallets-work", title: "How Browser Wallets Work", level: 2 },
        { id: "top-extension-wallets", title: "top-extension-wallets", level: 2 },
        { id: "top-extension-wallets", title: "Top Extension Wallets", level: 2 },
        { id: "security-considerations", title: "security-considerations", level: 2 },
        { id: "security-considerations", title: "Security Considerations", level: 2 },
        { id: "advanced-features", title: "advanced-features", level: 2 },
        { id: "advanced-features", title: "Advanced Features", level: 2 }
      ]}
      faqs={[{ question: "Is MetaMask still the best browser wallet?", answer: "MetaMask remains the most widely supported wallet with the largest ecosystem, but alternatives like Rabby offer better security features (transaction simulation, phishing detection) and Phantom provides a superior Solana experience. MetaMask is the safest choice for maximum dApp compatibility, while Rabby is arguably better for security-conscious DeFi users on Ethereum and its L2s." },
        { question: "Can I use multiple browser extension wallets?", answer: "Yes, you can install multiple browser wallets simultaneously. This is common practice: many users run MetaMask for broad compatibility, Phantom for Solana, and Rabby for its security features. However, having multiple wallets can cause conflicts when dApps try to detect your wallet. Most dApps let you choose which wallet to connect if multiple are detected." },
        { question: "How do I protect my browser wallet from phishing?", answer: "Bookmark official dApp URLs and always navigate from bookmarks rather than search results or links. Enable phishing protection in your wallet settings. Use wallets with built-in transaction simulation like Rabby to preview what a transaction will do before signing. Never enter your seed phrase on any website. Revoke unnecessary token approvals regularly using tools like Revoke.cash." }]}
      relatedArticles={[{ title: "Mobile Wallet Guide", href: "/wallets/learn/mobile-wallet-guide", category: "Wallets" }, { title: "Wallet Types Explained", href: "/wallets/learn/wallet-types-explained", category: "Wallets" }, { title: "DeFi Wallet Setup", href: "/wallets/learn/defi-wallet-setup", category: "Wallets" }, { title: "Wallet Permissions Guide", href: "/wallets/learn/wallet-permissions-guide", category: "Wallets" }]}
    >
      <section id="how-they-work">
        <h2>How Browser Wallets Work</h2>
        <p>Browser extension wallets operate by injecting a JavaScript provider object into every web page you visit. When a dApp needs to interact with the blockchain, it communicates with this provider to request account access, suggest transactions, or ask for message signatures. The wallet acts as a gatekeeper, showing you what the dApp is requesting and requiring your explicit approval before any action is taken on the blockchain.</p>
        <p>Your private keys are stored locally in encrypted form within the browser&apos;s extension storage, protected by your wallet password. When you approve a transaction, the wallet decrypts your key, signs the transaction locally, and broadcasts it to the blockchain network. Your private key never leaves your device and is never shared with the dApp or website. This architecture provides a secure way to interact with decentralized applications without exposing your keys.</p>
      </section>

      <section id="top-extension-wallets">
        <h2>Top Extension Wallets</h2>
        <p>MetaMask is the industry standard with support for Ethereum and all EVM-compatible chains (Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche). It has the widest dApp compatibility and the largest community for troubleshooting. Rabby Wallet offers superior transaction simulation, showing you exactly what tokens will leave and enter your wallet before you sign. It also automatically detects phishing sites and suspicious contracts.</p>
        <p>Phantom dominates the Solana ecosystem and has expanded to Ethereum and Bitcoin support. Its interface is notably faster and more polished than most competitors. Coinbase Wallet extension integrates with Coinbase exchange accounts for easy funding. Backpack is the newer wallet built for Solana with xNFT support. For Cosmos chains, Keplr is the essential extension. For Sui, the Sui Wallet extension is the primary choice. Choose your wallet based on which blockchains you use most.</p>
      </section>

      <section id="security-considerations">
        <h2>Security Considerations</h2>
        <p>Browser wallets are inherently more exposed to threats than hardware wallets because they operate in the browser environment alongside potentially malicious websites. The primary risks include phishing sites that mimic legitimate dApps, malicious token approval requests that drain your wallet, and browser extensions that can read page content. Mitigate these risks by using a dedicated browser profile for crypto, installing only essential extensions, and always verifying URLs.</p>
        <p>Transaction simulation is one of the most important security features to look for. Wallets like Rabby and the latest MetaMask versions simulate transactions before you sign, showing you the expected outcome. If a transaction claims to be a simple swap but the simulation shows tokens leaving without receiving anything in return, it is likely malicious. Always review simulated outcomes and reject transactions that do not match your expectations.</p>
      </section>

      <section id="advanced-features">
        <h2>Advanced Features</h2>
        <p>Modern browser wallets offer features far beyond basic sending and receiving. Built-in token swaps aggregate DEX prices to find the best rates. Portfolio views track your holdings across multiple chains. Gas estimation tools help you time transactions for lower fees. Some wallets support custom RPC endpoints for connecting to specific nodes or private mempools. Hardware wallet integration lets you use the browser wallet interface while keeping keys on a Ledger or Trezor.</p>
        <p>Multi-account management allows you to create separate accounts for different purposes (DeFi, NFTs, testing) within the same wallet. Address book features save frequently used addresses. Transaction history exports help with tax reporting. Some wallets support account abstraction features like social recovery and batched transactions. As the wallet space evolves, expect features like built-in bridges, cross-chain swaps, and AI-powered transaction analysis to become standard.</p>
      </section>
    </LearnPageLayout>
  );
}
