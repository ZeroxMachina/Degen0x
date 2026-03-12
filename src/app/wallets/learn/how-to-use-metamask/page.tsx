import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use MetaMask: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Step-by-step MetaMask guide for ${CURRENT_YEAR}. Learn to install, set up, send/receive crypto, connect to DeFi, add networks, and secure your wallet.`,
};

export default function HowToUseMetaMaskPage() {
  return (
    <LearnPageLayout
      title="How to Use MetaMask: Complete Beginner's Guide"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="12 min"
      intro="MetaMask is the most widely used Ethereum wallet and your gateway to the world of DeFi, NFTs, and Web3. This guide walks you through everything from installation and setup to connecting to decentralized applications and managing your assets securely."
      toc={[
        { id: "install", title: "install", level: 2 },
        { id: "installing-metamask", title: "Installing MetaMask", level: 2 },
        { id: "setup", title: "setup", level: 2 },
        { id: "setting-up-your-wallet", title: "Setting Up Your Wallet", level: 2 },
        { id: "fund", title: "fund", level: 2 },
        { id: "funding-your-wallet", title: "Funding Your Wallet", level: 2 },
        { id: "send-receive", title: "send-receive", level: 2 },
        { id: "sending-receiving-crypto", title: "Sending & Receiving Crypto", level: 2 },
        { id: "networks", title: "networks", level: 2 },
        { id: "adding-networks-polygon-arbitrum-etc", title: "Adding Networks (Polygon, Arbitrum, etc.)", level: 2 },
        { id: "defi", title: "defi", level: 2 },
        { id: "connecting-to-defi-dapps", title: "Connecting to DeFi & dApps", level: 2 },
        { id: "security", title: "security", level: 2 },
        { id: "security-best-practices", title: "Security Best Practices", level: 2 }
      ]}
      faqs={[
        {
          question: "Is MetaMask safe to use?",
          answer: "MetaMask is generally safe as a hot wallet when used correctly. Always download from the official website (metamask.io) or app store, secure your seed phrase offline, enable password protection, and be cautious about which sites you connect to. For large holdings, pair MetaMask with a hardware wallet like Ledger for added security.",
        },
        {
          question: "Does MetaMask support Bitcoin?",
          answer: "MetaMask natively supports Ethereum and EVM-compatible networks (Polygon, Arbitrum, Optimism, BNB Chain, Avalanche, etc.) but does not support Bitcoin natively. You can hold wrapped Bitcoin (WBTC) on Ethereum. For native Bitcoin, use a dedicated Bitcoin wallet like Electrum or a multi-chain wallet like Trust Wallet.",
        },
        {
          question: "What are gas fees in MetaMask?",
          answer: "Gas fees are transaction costs paid to network validators for processing your transaction on the blockchain. On Ethereum mainnet, gas fees can range from a few dollars to over $50 during congestion. Layer 2 networks like Arbitrum and Polygon offer much lower gas fees (often under $0.10). MetaMask shows estimated gas fees before you confirm any transaction.",
        },
      ]}
      relatedArticles={[
        { title: "MetaMask Review", href: "/wallets/reviews/metamask", category: "Wallets" },
        { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
        { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
      ]}
    >
      <h2 id="install">Installing MetaMask</h2>
      <p>
        MetaMask is available as a browser extension for Chrome, Firefox, Brave, and Edge, and as a mobile app for iOS and Android. To install the browser extension, visit metamask.io and click the download button. This will redirect you to your browser&apos;s extension store. Always verify the URL is metamask.io before downloading, as phishing sites impersonating MetaMask are common. After installation, the MetaMask fox icon will appear in your browser toolbar.
      </p>

      <h2 id="setup">Setting Up Your Wallet</h2>
      <p>
        When you first open MetaMask, you will be prompted to either create a new wallet or import an existing one. To create a new wallet, set a strong password for encrypting the wallet on your device. MetaMask will then display your 12-word Secret Recovery Phrase (seed phrase). Write this phrase down on paper and store it in a secure physical location. Never store your seed phrase digitally, take screenshots of it, or share it with anyone. This phrase is the only way to recover your wallet if you lose access to your device.
      </p>
      <p>
        After securing your seed phrase, MetaMask will ask you to confirm it by selecting the words in the correct order. Once verified, your wallet is ready to use. You will see your account address (starting with 0x) which you can share to receive crypto.
      </p>

      <h2 id="fund">Funding Your Wallet</h2>
      <p>
        To add funds to your MetaMask wallet, you can transfer crypto from an exchange like Coinbase or Kraken. Copy your MetaMask wallet address, go to your exchange, select the asset you want to withdraw (like ETH), paste your MetaMask address as the destination, and select the correct network (Ethereum mainnet, Polygon, Arbitrum, etc.). Make sure the withdrawal network matches where you want to receive the funds. MetaMask also supports buying crypto directly through integrated providers like MoonPay, though fees are typically higher than exchange purchases.
      </p>

      <h2 id="send-receive">Sending &amp; Receiving Crypto</h2>
      <p>
        To receive crypto, simply share your wallet address or QR code. To send crypto, click the Send button in MetaMask, enter the recipient&apos;s address, specify the amount, review the gas fee estimate, and confirm the transaction. Always double-check the recipient address before confirming, as blockchain transactions are irreversible. For sending tokens (like USDC or UNI), select the specific token from your assets list before initiating the send.
      </p>

      <h2 id="networks">Adding Networks (Polygon, Arbitrum, etc.)</h2>
      <p>
        MetaMask defaults to the Ethereum mainnet but supports adding other EVM-compatible networks. To add a network like Polygon or Arbitrum, click the network dropdown at the top of MetaMask and select &quot;Add Network.&quot; MetaMask includes popular networks in its built-in list, so you can add them with a single click. For networks not in the list, you can manually enter the network details (RPC URL, chain ID, etc.) from the official documentation of that blockchain. Using Layer 2 networks like Arbitrum and Optimism can dramatically reduce gas fees while maintaining Ethereum security.
      </p>

      <h2 id="defi">Connecting to DeFi &amp; dApps</h2>
      <p>
        To use a decentralized application, navigate to the dApp&apos;s website (like app.uniswap.org for Uniswap) and click the &quot;Connect Wallet&quot; button. Select MetaMask from the options, and a popup will ask you to approve the connection. Once connected, the dApp can see your address and request transaction signatures, but it cannot access your funds without your explicit approval for each transaction. Always verify you are on the correct website before connecting, as phishing sites that look identical to legitimate dApps are a common attack vector.
      </p>

      <h2 id="security">Security Best Practices</h2>
      <p>
        Secure your MetaMask by storing your seed phrase offline on paper or metal, using a strong unique password, and enabling auto-lock after a short timeout period. Never enter your seed phrase on any website. Regularly review and revoke token approvals that you no longer need using tools like revoke.cash. Consider pairing MetaMask with a Ledger hardware wallet for enhanced security, where your keys stay on the hardware device while you use MetaMask&apos;s familiar interface. Be suspicious of any airdropped tokens that appear in your wallet uninvited, as interacting with them could trigger malicious contract calls.
      </p>
    </LearnPageLayout>
  );
}
