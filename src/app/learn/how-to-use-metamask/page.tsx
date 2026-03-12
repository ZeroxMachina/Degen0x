import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use MetaMask (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to using MetaMask wallet including installation, sending and receiving crypto, adding networks, connecting to DeFi, and security tips.",
  keywords: ["MetaMask", "how to use MetaMask", "MetaMask tutorial", "MetaMask guide", "MetaMask DeFi", "MetaMask setup"],
};

export default function HowToUseMetamaskPage() {
  return (
    <LearnPageLayout title="How to Use MetaMask" categoryName="Crypto Education" categorySlug="learn" readTime="8 min" intro="MetaMask is the most widely used Ethereum wallet, with over 30 million monthly active users. As a browser extension and mobile app, MetaMask serves as your identity and gateway to the Ethereum ecosystem and all EVM-compatible blockchains. This guide covers everything from initial setup to advanced DeFi interactions."
      toc={[
        { id: "installation", title: "installation", level: 2 },
        { id: "installation-setup", title: "Installation & Setup", level: 2 },
        { id: "sending-receiving", title: "sending-receiving", level: 2 },
        { id: "sending-receiving", title: "Sending & Receiving", level: 2 },
        { id: "networks", title: "networks", level: 2 },
        { id: "adding-networks", title: "Adding Networks", level: 2 },
        { id: "defi", title: "defi", level: 2 },
        { id: "connecting-to-defi", title: "Connecting to DeFi", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "security-tips", title: "Security Tips", level: 2 }
      ]}
      faqs={[
        { question: "Is MetaMask safe?", answer: "MetaMask itself is a well-audited, open-source wallet used by millions. However, your security depends on your practices: never share your seed phrase, be cautious about which sites you connect to, verify transaction details before signing, and keep your browser and extension updated. Use MetaMask with a hardware wallet for maximum security." },
        { question: "Does MetaMask support Bitcoin?", answer: "MetaMask natively supports Ethereum and EVM-compatible chains (Arbitrum, Polygon, Base, etc.). It does not natively support Bitcoin. You can hold wrapped Bitcoin (WBTC) on Ethereum through MetaMask. For native Bitcoin, you need a Bitcoin-specific wallet." },
        { question: "What are gas fees in MetaMask?", answer: "Gas fees are network transaction fees paid to validators for processing your transactions. MetaMask estimates gas fees and allows you to adjust them. Higher gas fees result in faster transaction processing. Gas fees vary by network congestion — Ethereum mainnet is typically more expensive than Layer 2 networks." },
      ]}
      relatedArticles={[
        { title: "How to Create a Wallet", href: "/learn/how-to-create-wallet", category: "Learn" },
        { title: "How to Use Uniswap", href: "/learn/how-to-use-uniswap", category: "Learn" },
        { title: "How to Bridge Crypto", href: "/learn/how-to-bridge-crypto", category: "Learn" },
        { title: "How to Use Layer 2", href: "/learn/how-to-use-layer-2", category: "Learn" },
      ]}
    >
      <section id="installation"><h2>Installation & Setup</h2><p>Install MetaMask from the official website (metamask.io) or your browser's extension store (Chrome, Firefox, Brave, Edge). Verify you are downloading the genuine extension by checking the developer name and download count. During setup, choose "Create a new wallet," set a strong password, and carefully record your 12-word seed phrase on paper. Complete the seed phrase verification step to confirm your backup is correct.</p><p>After setup, MetaMask will display your Ethereum address. This address works across all EVM-compatible networks. Pin the MetaMask extension to your browser toolbar for easy access. Familiarize yourself with the interface: the account selector at the top, the network selector, and the activity tab that shows your transaction history. You can create multiple accounts within MetaMask, each with its own address derived from the same seed phrase.</p></section>
      <section id="sending-receiving"><h2>Sending & Receiving</h2><p>To receive crypto, click your account name to copy your address and share it with the sender. Always double-check the full address before sharing. To send crypto, click "Send," enter the recipient's address, specify the amount, review the gas fee estimate, and confirm the transaction. MetaMask shows you the estimated gas fee and allows you to adjust the speed (and thus the fee) before confirming.</p><p>For token transfers (not just ETH), you need to have ETH in your wallet for gas fees regardless of which token you are sending. MetaMask automatically detects popular tokens in your wallet, but you may need to manually add custom token addresses for less common tokens. Always send a small test transaction before transferring large amounts to a new address to verify everything works correctly.</p></section>
      <section id="networks"><h2>Adding Networks</h2><p>MetaMask supports any EVM-compatible network. To add a new network, click the network selector and choose "Add network." You can add popular networks like Arbitrum, Polygon, Base, and Optimism through MetaMask's built-in network list. For other networks, you will need to manually enter the network details: chain ID, RPC URL, currency symbol, and block explorer URL. Always verify network details from official documentation.</p><p>Once a network is added, switch between networks using the network selector. Your address remains the same across all EVM networks, but your balances are network-specific — ETH on Ethereum mainnet is separate from ETH on Arbitrum. To move assets between networks, you need to use a bridge. MetaMask offers a built-in bridge feature, and third-party bridges are also available.</p></section>
      <section id="defi"><h2>Connecting to DeFi</h2><p>When you visit a DeFi application, it will request to connect to your MetaMask wallet. Review the connection request, which shows what permissions the site is requesting (typically just to view your address and balances). After connecting, you can interact with the protocol — swapping tokens, providing liquidity, lending, or borrowing. Each action requires a transaction that MetaMask will prompt you to review and confirm.</p><p>Pay attention to token approvals: before a DeFi protocol can use your tokens, you need to approve the protocol's smart contract to spend them. MetaMask shows the approval amount — consider approving only the specific amount you intend to use rather than unlimited approvals, which carry higher risk if the contract is compromised. Review the MetaMask transaction confirmation carefully, checking the recipient address and the action being performed before clicking confirm.</p></section>
      <section id="security"><h2>Security Tips</h2><p>Connect MetaMask to a hardware wallet for significant holdings — in MetaMask settings, choose "Connect Hardware Wallet" to use your Ledger or Trezor for transaction signing while maintaining MetaMask's convenient interface. Regularly review and revoke token approvals through MetaMask's connected sites and token approval management features or through third-party tools like Revoke.cash.</p><p>Keep MetaMask updated to receive security patches. Use MetaMask in a dedicated browser profile for crypto activities. Never enter your seed phrase on any website — MetaMask will never ask for it outside the extension itself. Be cautious with MetaMask Snaps (third-party plugins) and only install them from trusted sources. If you suspect your wallet is compromised, immediately transfer assets to a new wallet generated on a secure device.</p></section>
    </LearnPageLayout>
  );
}
