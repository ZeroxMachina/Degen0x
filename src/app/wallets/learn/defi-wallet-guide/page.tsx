import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best DeFi Wallets Guide (${CURRENT_YEAR}) - Top Wallets for DeFi | ${SITE_NAME}`,
  description: `Find the best wallet for DeFi in ${CURRENT_YEAR}. Compare MetaMask, Rabby, Phantom, and more. Features to look for, security tips, and how to set up your DeFi wallet.`,
  alternates: { canonical: "/wallets/learn/defi-wallet-guide" },
};

const toc = [
  { id: "what-is-defi-wallet", title: "What Makes a Good DeFi Wallet?", level: 2 },
  { id: "top-defi-wallets", title: "Top DeFi Wallets Compared", level: 2 },
  { id: "security-features", title: "Essential Security Features", level: 2 },
  { id: "multi-chain", title: "Multi-Chain DeFi Wallet Setup", level: 2 },
  { id: "best-practices", title: "DeFi Wallet Best Practices", level: 2 },
];

const faqs = [
  { question: "What is the best wallet for DeFi?", answer: "Rabby Wallet has become a top choice for DeFi users due to its transaction simulation, multi-chain support, and security warnings. MetaMask remains the most widely compatible wallet for EVM chains. Phantom excels for Solana DeFi. For maximum security, connect any of these to a hardware wallet like Ledger. The best wallet depends on which chains and protocols you use most." },
  { question: "Is MetaMask safe for DeFi?", answer: "MetaMask is safe when used correctly. It has been audited extensively and used by millions. However, its security depends on your practices: use strong passwords, never share your seed phrase, be cautious with token approvals, and connect to a hardware wallet for large holdings. MetaMask cannot protect you from approving malicious transactions, so always verify what you are signing." },
  { question: "Do I need different wallets for different blockchains?", answer: "Not necessarily. Many modern wallets support multiple blockchains. MetaMask and Rabby work across all EVM-compatible chains (Ethereum, Arbitrum, Optimism, Base, Polygon, etc.). Phantom supports Solana, Ethereum, and Bitcoin. However, some chains have specialized wallets that offer better experiences. You can use the same seed phrase across compatible wallets." },
  { question: "How do I protect myself from malicious approvals?", answer: "Always check what you are approving before confirming transactions. Use wallets with transaction simulation (Rabby, MetaMask Snaps) that show you the expected outcome before signing. Regularly revoke unused approvals using Revoke.cash. Avoid giving unlimited token approvals when possible. If a dApp requests unlimited approval, consider setting a specific limit instead." },
  { question: "Should I use a separate wallet for DeFi?", answer: "Yes, this is a recommended security practice. Use a dedicated wallet for DeFi interactions with only the funds you are actively using. Keep your main holdings in a separate cold wallet. This way, if a malicious smart contract drains your DeFi wallet, your primary savings are not affected. Think of it as using a checking account for daily spending while keeping savings separate." },
];

const relatedArticles = [
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
  { title: "Hardware Wallet Setup Guide", href: "/wallets/learn/hardware-wallet-setup-guide", category: "Wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
];

export default function DefiWalletGuidePage() {
  return (
    <LearnPageLayout
      title="DeFi Wallet Guide: Choosing and Securing Your DeFi Wallet"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="8 min"
      intro="A good DeFi wallet is your gateway to decentralized finance. It needs to connect seamlessly to protocols across multiple blockchains, provide clear transaction information, and protect you from scams and exploits. This guide covers the best wallets for DeFi, essential security features to look for, and best practices for safely navigating the DeFi ecosystem."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-is-defi-wallet">What Makes a Good DeFi Wallet?</h2>
      <p>
        A DeFi wallet needs several capabilities beyond basic crypto storage. It must support
        connecting to decentralized applications (dApps) through a browser extension or mobile
        browser integration. It needs multi-chain support to access DeFi protocols across Ethereum,
        Arbitrum, Optimism, Base, Polygon, and other networks. It should provide clear transaction
        previews so you understand what you are signing before approving.
      </p>
      <p>
        Modern DeFi wallets also include security features that protect against common attack
        vectors. Transaction simulation shows you the expected outcome of a transaction before
        execution. Approval management lets you review and revoke token permissions. Phishing
        protection warns you about known malicious contracts. These features have become essential
        as DeFi exploits targeting individual users have grown more sophisticated.
      </p>

      <h2 id="top-defi-wallets">Top DeFi Wallets Compared</h2>
      <p>
        MetaMask is the most widely used and compatible DeFi wallet. Nearly every dApp supports
        MetaMask connection. It works as a browser extension and mobile app across all EVM chains.
        Its large user base means extensive documentation and community support. MetaMask Snaps
        adds extensibility for additional chains and features. The main drawback is a less intuitive
        interface compared to newer competitors.
      </p>
      <p>
        Rabby Wallet has rapidly gained market share among power DeFi users. Its standout feature
        is pre-transaction simulation that shows exactly what tokens will enter and leave your
        wallet before you confirm. It displays clear security warnings about risky approvals and
        supports automatic chain switching. Phantom is the leading wallet for Solana DeFi and now
        supports Ethereum and Bitcoin. Its clean interface and fast performance make it popular
        with both beginners and experienced users.
      </p>

      <h2 id="security-features">Essential Security Features</h2>
      <p>
        Transaction simulation is the single most important security feature for DeFi users.
        Wallets like Rabby and MetaMask (with Snaps) simulate your transaction against the
        current blockchain state and show you the expected result: which tokens you will send
        and receive. This catches many attack types including token approval drainers, honeypot
        contracts, and unexpected fee deductions.
      </p>
      <p>
        Approval management lets you see all active token approvals (contracts you have given
        permission to spend your tokens) and revoke ones you no longer need. Many exploits work
        by abusing approvals that users forgot about. Check your approvals regularly using your
        wallet&apos;s built-in tools or Revoke.cash. Set specific spending limits rather than
        unlimited approvals whenever possible. A wallet that makes approval management easy and
        visible contributes significantly to your DeFi security.
      </p>

      <h2 id="multi-chain">Multi-Chain DeFi Wallet Setup</h2>
      <p>
        Modern DeFi spans many blockchains, and your wallet setup should accommodate this. For
        EVM chains (Ethereum, Arbitrum, Optimism, Base, Polygon, Avalanche), a single wallet
        like MetaMask or Rabby covers all of them with the same addresses. Add custom RPC
        endpoints for each network or let your wallet auto-detect chains. Your same seed phrase
        generates valid addresses on every EVM chain.
      </p>
      <p>
        For non-EVM chains like Solana, you need separate wallet software (Phantom, Solflare).
        Some wallets like Phantom now support both Solana and EVM chains in a single interface.
        For Cosmos ecosystem DeFi, Keplr is the standard wallet. Consider whether you need a
        separate wallet for each ecosystem or can consolidate with multi-chain wallets. Keep your
        wallet setup as simple as possible while covering the chains you actually use.
      </p>

      <h2 id="best-practices">DeFi Wallet Best Practices</h2>
      <p>
        Use a dedicated wallet for DeFi with limited funds. Transfer only what you need for
        active DeFi positions from your cold storage. This limits your exposure if a dApp
        interaction goes wrong. Connect your DeFi wallet to a hardware wallet for an extra layer
        of security. This means every transaction requires physical confirmation on your hardware
        device, preventing unauthorized transactions even if your computer is compromised.
      </p>
      <p>
        Before interacting with any new protocol, verify the URL carefully (bookmark trusted
        dApps), check the contract addresses on the block explorer, and start with a small test
        transaction. Review every transaction detail on your wallet or hardware device screen
        before confirming. Never approve unlimited token spending for contracts you do not fully
        trust. Regularly revoke approvals for protocols you no longer use. These habits form the
        foundation of safe DeFi participation.
      </p>
    </LearnPageLayout>
  );
}
