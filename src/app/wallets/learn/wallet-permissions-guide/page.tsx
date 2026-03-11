import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Understanding Wallet Permissions and Approvals (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how token approvals and wallet permissions work, why they matter for security, and how to review and revoke dangerous approvals to protect your funds.",
};

export default function WalletPermissionsGuidePage() {
  return (
    <LearnPageLayout title="Understanding Wallet Permissions and Approvals" categoryName="Crypto Wallets" categorySlug="wallets" readTime="8 min read"
      intro="Every time you interact with a DeFi protocol, you grant permissions that can have significant security implications. Token approvals, wallet connections, and signing permissions form a complex web of access that most users never review after granting. Malicious or excessive approvals are one of the leading causes of fund theft in DeFi. Understanding how permissions work and regularly auditing them is essential for protecting your crypto assets."
      toc={[{ id: "token-approvals", title: "Token Approvals Explained", level: 2 }, { id: "wallet-connections", title: "Wallet Connections", level: 2 }, { id: "reviewing-permissions", title: "Reviewing Your Permissions", level: 2 }, { id: "revoking-approvals", title: "Revoking Dangerous Approvals", level: 2 }]}
      faqs={[{ question: "What is an unlimited token approval?", answer: "An unlimited (or infinite) token approval grants a smart contract permission to spend any amount of a specific token from your wallet, indefinitely. This means that even if you only swap 100 USDC, the protocol could access your entire USDC balance at any time in the future. If the contract is compromised or malicious, an attacker can drain all approved tokens. Always set custom approval limits matching the amount you actually intend to use." },
        { question: "Does disconnecting my wallet revoke approvals?", answer: "No. Disconnecting your wallet from a dApp only removes the website's ability to see your address and request new transactions. Existing token approvals remain active on the blockchain because they are recorded in the token's smart contract, not in your wallet. To revoke an approval, you must submit an on-chain transaction that sets the approval amount to zero. Disconnecting and revoking are completely separate actions." },
        { question: "How much does it cost to revoke an approval?", answer: "Revoking an approval requires a small on-chain transaction that costs gas. On Ethereum mainnet this might cost a few dollars depending on gas prices. On L2s like Arbitrum or Base, revocations cost fractions of a cent. The cost is minimal compared to the potential loss from a compromised approval. Prioritize revoking approvals for protocols you no longer use or for unlimited approvals to high-value tokens." }]}
      relatedArticles={[{ title: "Browser Extension Wallets", href: "/wallets/learn/browser-extension-wallets", category: "Wallets" }, { title: "DeFi Wallet Setup", href: "/wallets/learn/defi-wallet-setup", category: "Wallets" }, { title: "Wallet Security", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" }, { title: "Smart Contract Wallets", href: "/wallets/learn/smart-contract-wallets", category: "Wallets" }]}
    >
      <section id="token-approvals">
        <h2>Token Approvals Explained</h2>
        <p>ERC-20 token approvals are a core mechanism in DeFi. Before a smart contract can move your tokens, you must approve it to spend a specific amount. This is why DeFi transactions often require two steps: first an approval transaction, then the actual action (swap, deposit, stake). The approval is recorded on the blockchain and persists until explicitly revoked. Most dApps request unlimited approvals for convenience, avoiding repeated approval transactions.</p>
        <p>The problem with unlimited approvals is that they create perpetual access to your tokens. If a protocol is later exploited, the attacker can use existing approvals to drain tokens from every user who ever approved the contract. High-profile exploits like the Multichain and BadgerDAO attacks leveraged existing token approvals to steal hundreds of millions. Setting custom approval limits to match your actual transaction amount significantly reduces this risk.</p>
      </section>

      <section id="wallet-connections">
        <h2>Wallet Connections</h2>
        <p>Wallet connections (through the provider API or WalletConnect) grant dApps access to view your address, token balances, and request transaction signatures. A connection alone cannot move your funds, it only allows the dApp to propose transactions that you must still approve. However, connections do expose your address, enabling the dApp to track your activity and portfolio composition across connected chains.</p>
        <p>Be selective about which sites you connect to. Phishing sites use wallet connections to craft convincing but malicious transaction requests. Some connection requests ask for additional permissions like signing arbitrary messages, which can be used for off-chain signatures that authorize token transfers through protocols like Permit2. Always read what a connection is requesting and only connect to verified, trusted dApps from bookmarked URLs.</p>
      </section>

      <section id="reviewing-permissions">
        <h2>Reviewing Your Permissions</h2>
        <p>Regular permission audits should be part of your crypto security routine. Use tools like Revoke.cash, Etherscan&apos;s token approval checker, or DeBank to view all active approvals for your address. These tools show which contracts have permission to spend which tokens and the approved amounts. Prioritize reviewing approvals for high-value tokens like USDC, USDT, WETH, and any token where you hold significant balances.</p>
        <p>When reviewing, look for: unlimited approvals to contracts you no longer use, approvals to contracts you do not recognize, and approvals for tokens with large balances. Rabby Wallet includes built-in approval management that shows a risk assessment for each approval. Establishing a monthly review habit takes minutes and can prevent catastrophic losses from compromised protocols or malicious approvals you may have granted unknowingly.</p>
      </section>

      <section id="revoking-approvals">
        <h2>Revoking Dangerous Approvals</h2>
        <p>To revoke an approval, use Revoke.cash or your wallet&apos;s built-in approval manager to send a transaction that sets the approved amount to zero. This is an on-chain transaction that costs gas. On Ethereum mainnet, batch revoking during low gas periods is cost-effective. On L2s, the cost is negligible. Start by revoking approvals for protocols you no longer use, then reduce unlimited approvals on active protocols to reasonable amounts.</p>
        <p>For maximum security, adopt a proactive approach: set custom approval limits when first interacting with protocols rather than accepting unlimited defaults. MetaMask and Rabby both allow you to edit the approval amount during the transaction signing step. Approve only what you need for the current transaction. For protocols you use frequently, you can set a slightly higher limit to avoid repeated approval transactions, but never approve unlimited amounts for any protocol.</p>
      </section>
    </LearnPageLayout>
  );
}
