import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Create a Crypto Wallet (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Step-by-step guide to creating a cryptocurrency wallet including choosing a wallet type, setup instructions, and security best practices.",
  keywords: ["create crypto wallet", "crypto wallet setup", "how to create wallet", "cryptocurrency wallet guide", "wallet tutorial"],
};

export default function HowToCreateWalletPage() {
  return (
    <LearnPageLayout title="How to Create a Crypto Wallet" categoryName="Crypto Education" categorySlug="learn" readTime="7 min" intro="A cryptocurrency wallet is your gateway to the blockchain ecosystem. It stores your private keys, enables you to send and receive crypto, and lets you interact with decentralized applications. Creating your first wallet is straightforward, but understanding the options and security implications is essential for protecting your assets."
      toc={[
        { id: "wallet-types", title: "wallet-types", level: 2 },
        { id: "choosing-a-wallet-type", title: "Choosing a Wallet Type", level: 2 },
        { id: "software-wallet", title: "software-wallet", level: 2 },
        { id: "creating-a-software-wallet", title: "Creating a Software Wallet", level: 2 },
        { id: "hardware-wallet", title: "hardware-wallet", level: 2 },
        { id: "setting-up-a-hardware-wallet", title: "Setting Up a Hardware Wallet", level: 2 },
        { id: "securing-wallet", title: "securing-wallet", level: 2 },
        { id: "securing-your-wallet", title: "Securing Your Wallet", level: 2 },
        { id: "first-steps", title: "first-steps", level: 2 },
        { id: "first-steps-after-setup", title: "First Steps After Setup", level: 2 }
      ]}
      faqs={[
        { question: "Which wallet should I choose as a beginner?", answer: "For beginners, MetaMask (for Ethereum and EVM chains) or Phantom (for Solana) are popular software wallets that are easy to set up and use. Once you have significant holdings, consider upgrading to a hardware wallet like Ledger or Trezor for enhanced security." },
        { question: "Can I have multiple wallets?", answer: "Yes, and it is recommended. Many users maintain separate wallets for different purposes: a hardware wallet for long-term storage, a software wallet for daily DeFi use, and a separate hot wallet for trying new protocols. This limits risk exposure." },
        { question: "Is creating a wallet free?", answer: "Software wallets (browser extensions and mobile apps) are free to create. Hardware wallets require purchasing the physical device, typically ranging from $50-$200. There are no ongoing fees for having a wallet — you only pay network transaction fees when making transfers." },
      ]}
      relatedArticles={[
        { title: "How to Use MetaMask", href: "/learn/how-to-use-metamask", category: "Learn" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
        { title: "How to Use a Hardware Wallet", href: "/learn/how-to-use-hardware-wallet", category: "Learn" },
        { title: "How to Bridge Crypto", href: "/learn/how-to-bridge-crypto", category: "Learn" },
      ]}
    >
      <section id="wallet-types"><h2>Choosing a Wallet Type</h2><p>Software wallets (hot wallets) run on your computer or smartphone and provide convenient access to your crypto. Popular options include MetaMask for Ethereum, Phantom for Solana, Keplr for Cosmos, and Rabby for multi-chain EVM support. They are free, easy to set up, and suitable for active DeFi participation, though they are connected to the internet and therefore more vulnerable to attacks than hardware wallets.</p><p>Hardware wallets (cold wallets) like Ledger and Trezor store your private keys on dedicated physical devices that never expose keys to the internet. They provide significantly stronger security and are recommended for any holdings you cannot afford to lose. The trade-off is cost (device purchase) and slightly less convenience for frequent transactions, though hardware wallets can be used alongside software wallet interfaces.</p></section>
      <section id="software-wallet"><h2>Creating a Software Wallet</h2><p>To create a software wallet: download the official wallet application from the developer's website or verified app store listing (never from third-party sources). During setup, the wallet will generate a new seed phrase — typically 12 or 24 random words. Write this seed phrase down on paper immediately. Never store it digitally (no screenshots, no cloud storage, no text files). Verify you have recorded it correctly by completing the wallet's confirmation step.</p><p>Set a strong password to protect the wallet on your device. This password encrypts the wallet locally but is not the same as your seed phrase — the seed phrase is the master backup that can restore your wallet on any compatible application. After setup, your wallet will display one or more receiving addresses. You can now receive crypto by sharing these addresses with senders or use them to transfer from an exchange.</p></section>
      <section id="hardware-wallet"><h2>Setting Up a Hardware Wallet</h2><p>Purchase hardware wallets only from the manufacturer's official website or authorized retailers. Check that the device is sealed and shows no signs of tampering upon arrival. Connect the device to your computer, install the manufacturer's companion software (Ledger Live for Ledger, Trezor Suite for Trezor), and follow the on-screen setup process. The device will generate and display your seed phrase on its own screen.</p><p>Record the seed phrase directly from the hardware wallet's display — never from a computer screen. The entire point of a hardware wallet is that your keys never touch an internet-connected device. After recording and verifying your seed phrase, set a PIN code on the device. Install the blockchain apps you need (Bitcoin app, Ethereum app, etc.) through the companion software. Your hardware wallet is now ready to receive and manage crypto assets.</p></section>
      <section id="securing-wallet"><h2>Securing Your Wallet</h2><p>Store your seed phrase on durable physical media in at least two separate secure locations. Consider metal backup plates for resistance to fire and water damage. Never share your seed phrase with anyone — no legitimate service, support team, or application will ever need it. Enable all available security features: strong passwords, auto-lock timeouts, and biometric authentication where available.</p><p>Be cautious about which applications you authorize to interact with your wallet. Each DeFi protocol you connect to receives permission to see your balances and, if you approve transactions, to interact with your tokens. Regularly review and revoke unnecessary token approvals. Use a dedicated browser profile for crypto activities to reduce exposure to malicious websites and extensions.</p></section>
      <section id="first-steps"><h2>First Steps After Setup</h2><p>Before depositing significant funds, test your wallet by sending a small amount and verifying it arrives correctly. If using a hardware wallet, test the recovery process: reset the device and restore from your seed phrase, then verify the same addresses appear. This confirms your backup is correct before it matters. Familiarize yourself with the wallet's interface, transaction signing process, and any blockchain-specific features.</p><p>Add the blockchain networks you plan to use (for EVM wallets, you may need to manually add networks like Arbitrum, Polygon, or Base). Bookmark the official websites of DeFi protocols you plan to use. Consider setting up a separate wallet with a small balance for exploring new protocols, keeping your main holdings isolated from potential risks associated with unknown smart contracts.</p></section>
    </LearnPageLayout>
  );
}
