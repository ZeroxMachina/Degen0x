import type { Metadata } from "next";
import LearnPage from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Seed Phrase Explained - What It Is & How to Protect It (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Everything you need to know about crypto seed phrases (recovery phrases) in ${CURRENT_YEAR}. What they are, how they work, and the best practices for keeping them safe.`,
};

const toc = [
  { id: "what-is-seed", title: "What Is a Seed Phrase?", level: 2 },
  { id: "how-it-works", title: "How Seed Phrases Work", level: 2 },
  { id: "storage", title: "How to Store Your Seed Phrase", level: 2 },
  { id: "common-mistakes", title: "Common Mistakes to Avoid", level: 2 },
  { id: "advanced-backup", title: "Advanced Backup Methods", level: 2 },
];

const faqs = [
  { question: "What happens if someone gets my seed phrase?", answer: "If someone obtains your seed phrase, they can recreate your wallet on any device and access all your funds. There is no way to reverse this. You would need to immediately transfer all assets to a new wallet with a different seed phrase. Treat your seed phrase with the same security as the total value of all crypto in that wallet." },
  { question: "Can I change my seed phrase?", answer: "No. Your seed phrase is generated once during wallet creation and cannot be changed. It is mathematically linked to all the private keys and addresses in your wallet. If you want a new seed phrase, you must create an entirely new wallet and transfer your funds to it." },
  { question: "Is a 24-word seed phrase more secure than 12 words?", answer: "Yes, technically. A 24-word phrase provides 256 bits of entropy versus 128 bits for a 12-word phrase. However, 128 bits of entropy (12 words) is already astronomically secure, far beyond what any computer can brute-force. For practical purposes, both lengths provide more than adequate security. Hardware wallets typically use 24 words, while most software wallets use 12." },
];

const relatedArticles = [
  { title: "Wallet Backup Guide", href: "/wallets/learn/wallet-backup-guide", category: "Wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
  { title: "How to Set Up a Wallet", href: "/wallets/learn/how-to-set-up-wallet", category: "Wallets" },
];

export default function SeedPhraseExplainedPage() {
  return (
    <LearnPage
      title="Seed Phrase Explained: Your Crypto Recovery Key"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="8 min"
      intro="Your seed phrase (also called a recovery phrase or mnemonic phrase) is the master key to your cryptocurrency. It is a sequence of 12 or 24 words that can restore your entire wallet, including all accounts and private keys. Understanding how seed phrases work and how to protect them is essential for every crypto user."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-is-seed">What Is a Seed Phrase?</h2>
      <p>
        A seed phrase is a human-readable representation of your wallet&apos;s master private key. When you create
        a new crypto wallet, the software generates a random number and converts it into a sequence of 12 or 24
        English words drawn from a standardized list of 2,048 words (the BIP-39 word list). These words, in their
        specific order, encode all the information needed to reconstruct every private key and address in your wallet.
      </p>
      <p>
        The seed phrase is your ultimate backup. If your phone breaks, your computer crashes, or your hardware wallet
        is lost, you can enter your seed phrase into any compatible wallet application to restore full access to your
        funds. The assets themselves are on the blockchain and remain untouched; the seed phrase simply gives you
        back the keys to access them.
      </p>

      <h2 id="how-it-works">How Seed Phrases Work</h2>
      <p>
        Seed phrases work through a system called Hierarchical Deterministic (HD) key derivation, defined by
        standards BIP-32, BIP-39, and BIP-44. Your seed phrase generates a master key, and from that master key,
        an essentially unlimited number of child keys can be mathematically derived. Each child key corresponds
        to a different cryptocurrency address.
      </p>
      <p>
        This is why a single seed phrase can control Bitcoin, Ethereum, Solana, and other cryptocurrency addresses
        simultaneously. The derivation is deterministic, meaning the same seed phrase always produces the same
        keys and addresses. This standardization also means your seed phrase is not locked to any particular wallet
        application. You can create a wallet in MetaMask and restore it in Phantom or Trust Wallet using the
        same seed phrase.
      </p>

      <h2 id="storage">How to Store Your Seed Phrase</h2>
      <p>
        The golden rule is: write it down on paper and store it offline. Never type your seed phrase into a computer,
        take a photo of it, save it in a notes app, email it to yourself, or store it in any digital format. Digital
        storage is vulnerable to malware, cloud breaches, and hacking. A written copy in a secure physical location
        is the safest approach for most users.
      </p>
      <p>
        For enhanced durability, consider engraving your seed phrase on a metal plate or using a metal seed storage
        device. These protect against fire, flooding, and physical degradation that could destroy a paper backup.
        Store your backup in a location that is both secure (protected from theft) and disaster-resistant (not in
        the same building as your primary device). A fireproof safe or bank safety deposit box are good options.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>
        Never share your seed phrase with anyone. No legitimate wallet provider, support team, or crypto company
        will ever ask for your seed phrase. Any website, email, or message requesting it is a scam. Never enter
        your seed phrase on any website except the official wallet application you are using for recovery. Phishing
        sites mimicking wallet interfaces are one of the most common scams in crypto.
      </p>
      <p>
        Do not rely on memory alone. Even if you think you have memorized your seed phrase, always maintain a
        physical written backup. Do not store it in a digital file, even if encrypted. Do not split the phrase
        across multiple notes without a clear system. And critically, do not delay backing up your seed phrase;
        do it immediately during wallet setup, as you may not get another chance to view it.
      </p>

      <h2 id="advanced-backup">Advanced Backup Methods</h2>
      <p>
        For users securing significant value, consider advanced backup strategies. Shamir Backup (supported by
        Trezor) splits your seed into multiple shares where a threshold number is needed to reconstruct the
        original. For example, a 3-of-5 setup means any 3 of your 5 shares can restore the wallet, but losing
        2 shares does not lock you out.
      </p>
      <p>
        BIP-39 passphrases add an optional extra word to your seed phrase, creating an entirely separate set of
        wallets. This provides plausible deniability (a &quot;decoy&quot; wallet without the passphrase) and an extra layer
        of security. Multi-location storage means keeping copies of your backup in different geographic locations
        to protect against localized disasters. The level of backup sophistication should match the value being secured.
      </p>
    </LearnPage>
  );
}
