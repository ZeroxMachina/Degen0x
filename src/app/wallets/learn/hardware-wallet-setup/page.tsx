import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Hardware Wallet Setup Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Step-by-step guide to setting up a hardware wallet. Learn how to initialize Ledger and Trezor devices, secure your seed phrase, and connect to DeFi.",
};

export default function HardwareWalletSetupPage() {
  return (
    <LearnPageLayout title="Hardware Wallet Setup Guide" categoryName="Crypto Wallets" categorySlug="wallets" readTime="10 min read"
      intro="Hardware wallets provide the highest level of security for crypto storage by keeping your private keys on a dedicated device that never exposes them to the internet. Setting up a hardware wallet correctly is critical because mistakes during initialization, especially with seed phrase backup, can lead to permanent loss of funds. This guide walks you through the complete setup process for the most popular hardware wallets, from unboxing to your first transaction, with security best practices at every step."
      toc={[
        { id: "before-you-start", title: "before-you-start", level: 2 },
        { id: "before-you-start", title: "Before You Start", level: 2 },
        { id: "initial-setup", title: "initial-setup", level: 2 },
        { id: "initial-device-setup", title: "Initial Device Setup", level: 2 },
        { id: "seed-phrase-backup", title: "seed-phrase-backup", level: 2 },
        { id: "seed-phrase-backup", title: "Seed Phrase Backup", level: 2 },
        { id: "connecting-to-software", title: "connecting-to-software", level: 2 },
        { id: "connecting-to-software", title: "Connecting to Software", level: 2 },
        { id: "first-transaction", title: "first-transaction", level: 2 },
        { id: "your-first-transaction", title: "Your First Transaction", level: 2 }
      ]}
      faqs={[{ question: "Should I buy a Ledger or Trezor?", answer: "Both are excellent choices. Ledger uses a secure element chip (similar to credit cards) and supports more tokens natively. Trezor is fully open-source and has a larger touchscreen on premium models. Ledger Nano S Plus ($79) and Trezor Safe 3 ($79) are the best entry-level options. Choose based on whether you prioritize open-source transparency (Trezor) or wider native token support (Ledger)." },
        { question: "Is it safe to buy a used hardware wallet?", answer: "You should only buy hardware wallets new from the manufacturer or authorized resellers. Used devices could have compromised firmware or pre-generated seed phrases that allow the previous owner to steal your funds. Always verify the tamper-evident packaging is intact and the device prompts you to set up as a new device during initialization." },
        { question: "What happens if my hardware wallet breaks?", answer: "Your crypto is on the blockchain, not on the device. If your hardware wallet breaks, you can restore your accounts on a new device using your seed phrase. This is why the seed phrase backup is the most important part of the setup process. Without it, a broken device means permanent loss of access to your funds." }]}
      relatedArticles={[{ title: "Wallet Types Explained", href: "/wallets/learn/wallet-types-explained", category: "Wallets" }, { title: "Wallet Security", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" }, { title: "Choosing Your First Wallet", href: "/wallets/learn/choosing-first-wallet", category: "Wallets" }, { title: "What Is a Crypto Wallet?", href: "/wallets/learn/what-is-a-crypto-wallet", category: "Wallets" }]}
    >
      <section id="before-you-start">
        <h2>Before You Start</h2>
        <p>Purchase your hardware wallet only from the official manufacturer website or authorized retailers. Never buy from third-party marketplace sellers on Amazon or eBay, as tampered devices are a known attack vector. When your device arrives, verify the tamper-evident seal is intact and the packaging shows no signs of opening. Prepare a pen and the included seed phrase card (or purchase a metal backup plate). Find a private location where no one can observe your screen during setup.</p>
        <p>Ensure your computer or phone is free from malware before connecting the device. Download the official companion software (Ledger Live for Ledger, Trezor Suite for Trezor) only from the manufacturer&apos;s official website. Verify the download by checking the URL carefully. Fake companion apps are a common phishing vector. Do not rush the setup process, as errors during initialization are the leading cause of fund loss with hardware wallets.</p>
      </section>

      <section id="initial-setup">
        <h2>Initial Device Setup</h2>
        <p>Connect your hardware wallet to your computer and follow the on-screen prompts. The device will ask you to set a PIN code. Choose a strong PIN that you can remember but others cannot guess. Avoid obvious combinations like birthdays or sequential numbers. On Ledger devices, the PIN is 4-8 digits. On Trezor, you can set a longer PIN with a randomized keypad layout for additional security against shoulder surfing.</p>
        <p>The device will then generate your recovery seed phrase. This is a set of 12 or 24 words generated using cryptographic randomness from the device&apos;s secure element. These words, in their exact order, are the master key to all accounts created on this device. The device will display words one at a time or in groups. Do not skip ahead, do not take photos, and do not store these words digitally in any form.</p>
      </section>

      <section id="seed-phrase-backup">
        <h2>Seed Phrase Backup</h2>
        <p>Write down every word of your seed phrase in the exact order displayed on the device screen. Use the provided recovery card or a dedicated metal backup plate. Double-check each word carefully as a single incorrect letter can make the entire phrase unusable. After writing all words, the device will quiz you by asking you to confirm specific words. This verification step ensures you recorded the phrase correctly.</p>
        <p>Store your seed phrase backup in a secure, fireproof, and waterproof location. Consider using a metal seed phrase plate (products like Cryptosteel or Billfodl) for protection against fire and water damage. Never store your seed phrase digitally: no photos, no cloud storage, no password managers, no text files. For high-value holdings, consider splitting the phrase across multiple secure locations or using Shamir&apos;s Secret Sharing (available on Trezor) to distribute backup fragments.</p>
      </section>

      <section id="connecting-to-software">
        <h2>Connecting to Software</h2>
        <p>After initialization, install the companion app (Ledger Live or Trezor Suite) and connect your device. Install the blockchain apps you need (Ethereum, Bitcoin, Solana, etc.) through the companion software. Each blockchain requires its own app on the device. Create accounts for each blockchain you plan to use. The companion app will display your receiving addresses, balances, and transaction history.</p>
        <p>For DeFi usage, connect your hardware wallet to browser extension interfaces like MetaMask. In MetaMask, select &quot;Connect Hardware Wallet&quot; and follow the prompts. This allows you to interact with DeFi protocols while keeping your private keys on the hardware device. Every transaction must be physically confirmed on the device, adding a crucial security layer. Rabby Wallet also offers excellent hardware wallet integration with clearer transaction previews.</p>
      </section>

      <section id="first-transaction">
        <h2>Your First Transaction</h2>
        <p>To receive crypto, share your public address from the companion app. Always verify that the address shown on the companion app matches the address displayed on your hardware wallet&apos;s screen. This verification prevents clipboard malware from substituting a different address. Start with a small test transaction before sending large amounts. Wait for the transaction to confirm on the blockchain before proceeding with larger transfers.</p>
        <p>To send crypto, initiate the transaction in the companion app, then physically verify and confirm the recipient address and amount on your hardware wallet&apos;s screen. Never approve a transaction without carefully checking the details on the device display. The companion app screen could be compromised by malware, but the hardware wallet display cannot be. This physical verification step is the core security advantage of hardware wallets and should never be skipped.</p>
      </section>
    </LearnPageLayout>
  );
}
