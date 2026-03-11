import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Cold Wallet? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what a cold wallet is, how cold storage works, the best cold wallets, and why offline storage is the gold standard for crypto security.",
};

export default function ColdWalletPage() {
  return (
    <LearnPageLayout
      title="What Is a Cold Wallet?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A cold wallet is a cryptocurrency storage solution that keeps your private keys completely offline, disconnected from the internet. This makes cold wallets virtually immune to remote hacking, phishing attacks, and malware. Hardware wallets from companies like Ledger and Trezor are the most popular form of cold storage and are widely recommended for securing significant crypto holdings."
      toc={[
        { id: "definition", title: "What Is a Cold Wallet?", level: 2 },
        { id: "how-it-works", title: "How Cold Wallets Work", level: 2 },
        { id: "types", title: "Types of Cold Wallets", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between a cold wallet and a hot wallet?",
          answer:
            "Cold wallets store private keys offline (hardware devices, paper wallets), making them very secure but less convenient for frequent transactions. Hot wallets store keys on internet-connected devices (apps, browser extensions), making them convenient but more vulnerable to hacking. Most users benefit from having both.",
        },
        {
          question: "Can a cold wallet be hacked?",
          answer:
            "Cold wallets are extremely resistant to remote hacking since they are not connected to the internet. However, they can be compromised through physical theft, supply chain attacks (tampered devices), or social engineering that tricks you into revealing your seed phrase. Buying directly from manufacturers and protecting your seed phrase mitigates these risks.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Hot Wallet?", href: "/learn/glossary/hot-wallet", category: "Glossary" },
        { title: "What Is a Hardware Wallet?", href: "/learn/glossary/hardware-wallet", category: "Glossary" },
        { title: "What Is a Private Key?", href: "/learn/glossary/private-key", category: "Glossary" },
        { title: "What Is a Seed Phrase?", href: "/learn/glossary/seed-phrase", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Cold Wallet?</h2>
      <p>
        A cold wallet stores your cryptocurrency private keys in an environment that has no connection to the internet. Because the keys never touch an online device, they cannot be accessed by hackers, malware, or phishing attacks. Cold wallets are considered the gold standard for securing cryptocurrency, especially for large holdings or long-term storage.
      </p>

      <h2 id="how-it-works">How Cold Wallets Work</h2>
      <p>
        When you want to send crypto from a cold wallet, the transaction is created on a connected device (computer or phone) but signed on the cold wallet device itself. The private key never leaves the cold storage device. The signed transaction is then broadcast to the network. This air-gapped signing process is what makes cold wallets secure — your keys are never exposed to an internet-connected environment.
      </p>

      <h2 id="types">Types of Cold Wallets</h2>
      <p>
        Hardware wallets (Ledger, Trezor, Keystone) are dedicated devices designed specifically for key storage. Paper wallets involve printing or writing down private keys on paper. Metal backup plates store seed phrases on durable steel to protect against fire and water damage. Air-gapped computers running wallet software without internet connectivity are another option used by advanced users.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        The history of crypto is filled with stories of funds lost to exchange hacks, malware, and phishing. Cold wallets eliminate the largest attack vector — remote access through the internet. The industry mantra is: not your keys, not your coins. Cold storage puts you in full control of your assets, removing the need to trust any third party.
      </p>

      <h2 id="best-practices">Best Practices</h2>
      <p>
        Buy hardware wallets directly from the manufacturer, never used or from third-party resellers. Back up your seed phrase on metal rather than paper. Store seed phrase backups in a separate physical location from the device. Test your backup by restoring it on a spare device before loading significant funds. Never enter your seed phrase on any website or app — only on the hardware device itself.
      </p>
    </LearnPageLayout>
  );
}
