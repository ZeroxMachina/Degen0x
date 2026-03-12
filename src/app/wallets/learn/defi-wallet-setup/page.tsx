import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Setting Up a Wallet for DeFi (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to set up and configure your crypto wallet for DeFi participation. Cover network setup, dApp connections, gas management, and security practices.",
};

export default function DefiWalletSetupPage() {
  return (
    <LearnPageLayout title="Setting Up a Wallet for DeFi" categoryName="Crypto Wallets" categorySlug="wallets" readTime="9 min read"
      intro="Participating in DeFi requires more than just a basic wallet setup. You need to configure multiple networks, understand gas management, connect safely to dApps, and implement security practices that protect you from the unique risks of decentralized finance. This guide walks you through everything you need to set up a wallet optimized for DeFi, from choosing the right wallet software to configuring it for the protocols you want to use."
      toc={[
        { id: "choosing-defi-wallet", title: "choosing-defi-wallet", level: 2 },
        { id: "choosing-a-defi-wallet", title: "Choosing a DeFi Wallet", level: 2 },
        { id: "network-configuration", title: "network-configuration", level: 2 },
        { id: "network-configuration", title: "Network Configuration", level: 2 },
        { id: "connecting-to-dapps", title: "connecting-to-dapps", level: 2 },
        { id: "connecting-to-dapps", title: "Connecting to dApps", level: 2 },
        { id: "defi-security-setup", title: "defi-security-setup", level: 2 },
        { id: "defi-security-setup", title: "DeFi Security Setup", level: 2 }
      ]}
      faqs={[{ question: "Do I need different wallets for different DeFi protocols?", answer: "No, one wallet can connect to multiple DeFi protocols on the same chain. However, using separate wallets for different risk levels is a best practice. Keep a main wallet for established protocols like Aave and Uniswap, and use a separate burner wallet for testing new or unaudited protocols. This limits your exposure if a new protocol turns out to be malicious." },
        { question: "How do I add a new network to my wallet?", answer: "For MetaMask, go to Settings > Networks > Add Network. Use Chainlist.org to find correct RPC details and add networks with one click. For Rabby, networks are auto-detected when you visit a dApp. Always verify RPC endpoints against official documentation. Malicious RPC endpoints can show incorrect balances or redirect transactions. Chainlist.org is a trusted source for network configuration details." },
        { question: "How much ETH do I need for gas to start DeFi?", answer: "On Ethereum mainnet, keep at least 0.05-0.1 ETH for gas. A single DeFi transaction costs $2-50 depending on complexity and network congestion. On L2s like Arbitrum or Base, $5-10 worth of ETH covers hundreds of transactions. Start with L2s to minimize costs while learning. You can always bridge more ETH from mainnet or buy directly on L2s through exchanges." }]}
      relatedArticles={[{ title: "Browser Extension Wallets", href: "/wallets/learn/browser-extension-wallets", category: "Wallets" }, { title: "Wallet Permissions Guide", href: "/wallets/learn/wallet-permissions-guide", category: "Wallets" }, { title: "Wallet Gas Optimization", href: "/wallets/learn/wallet-gas-optimization", category: "Wallets" }, { title: "Multi-Chain Wallets", href: "/wallets/learn/multi-chain-wallets", category: "Wallets" }]}
    >
      <section id="choosing-defi-wallet">
        <h2>Choosing a DeFi Wallet</h2>
        <p>For Ethereum and L2 DeFi, MetaMask is the most widely compatible choice with nearly universal dApp support. Rabby Wallet offers superior security features including transaction simulation that shows you exactly what will happen before you sign. For Solana DeFi, Phantom is the clear leader with integrated swap functionality and excellent dApp support. For multi-chain DeFi, Coinbase Wallet or Trust Wallet provide the broadest coverage.</p>
        <p>The ideal DeFi setup combines a browser extension wallet for daily interactions with a hardware wallet for transaction signing. This gives you the convenience of a hot wallet with the security of cold storage. Both MetaMask and Rabby support connecting Ledger and Trezor devices as signing backends. For maximum security on high-value DeFi positions, always use hardware wallet signing rather than hot wallet keys.</p>
      </section>

      <section id="network-configuration">
        <h2>Network Configuration</h2>
        <p>After installing your wallet, add the networks you plan to use. For EVM chains, each network requires an RPC endpoint, chain ID, and native currency configuration. Use Chainlist.org to add networks with verified details in one click. Popular DeFi networks include Ethereum mainnet, Arbitrum, Optimism, Base, Polygon, and BNB Chain. Each network requires its native token for gas fees: ETH on Ethereum and its L2s, MATIC on Polygon, BNB on BNB Chain.</p>
        <p>Consider using multiple RPC providers for reliability. If one RPC endpoint is slow or down, you can switch to an alternative. Services like Alchemy, Infura, and QuickNode offer free RPC endpoints with rate limits. For privacy-conscious users, some RPCs support encrypted connections and do not log IP addresses. Configure custom RPCs in your wallet settings, and always verify the chain ID matches the expected value to prevent connecting to the wrong network.</p>
      </section>

      <section id="connecting-to-dapps">
        <h2>Connecting to dApps</h2>
        <p>To connect to a DeFi protocol, navigate to its official website and click the connect wallet button. Your wallet extension will prompt you to confirm the connection. Before connecting, verify the URL is correct by checking against bookmarks or official social media links. Phishing sites that mimic popular DeFi protocols are extremely common and often appear in search results or social media ads.</p>
        <p>After connecting, the dApp can see your address and request transactions. For each transaction, your wallet will show a confirmation popup with details about what the transaction does. Take time to review these details, especially for approvals and complex transactions. Rabby provides the most readable transaction previews, showing token flows and warning about potential risks. Never approve a transaction you do not fully understand.</p>
      </section>

      <section id="defi-security-setup">
        <h2>DeFi Security Setup</h2>
        <p>Create at least two wallets: a main wallet for trusted protocols and a burner wallet for experimentation. Fund the burner wallet with only small amounts. This way, if you connect to a malicious dApp or sign a dangerous transaction with the burner, your main holdings are protected. Some users create additional wallets for specific purposes like airdrop farming, NFT minting, or testnet interaction.</p>
        <p>Enable all security features your wallet offers: transaction simulation, phishing detection, approval amount editing, and hardware wallet integration. Bookmark every DeFi protocol you use regularly and only navigate from bookmarks. Set up approval monitoring using Revoke.cash or your wallet&apos;s built-in tools. When making large transactions, always send a small test transaction first. Finally, never store your seed phrase digitally and keep it in a secure offline location.</p>
      </section>
    </LearnPageLayout>
  );
}
