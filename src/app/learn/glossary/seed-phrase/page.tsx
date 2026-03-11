import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Seed Phrase? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what seed phrases are, how they protect your crypto, and best practices for storing them securely.",
};

export default function SeedPhrasePage() {
  return (
    <LearnPageLayout
      title="What Is a Seed Phrase?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A seed phrase (also called a recovery phrase or mnemonic phrase) is a list of 12 or 24 words that serves as the master backup for a cryptocurrency wallet. These words, generated when you first create a wallet, can restore all your private keys and access to your funds on any compatible wallet software or hardware. The seed phrase is the single most important thing to protect in all of crypto self-custody."
      toc={[
        { id: "definition", title: "What Is a Seed Phrase?", level: 2 },
        { id: "how-it-works", title: "How Seed Phrases Work", level: 2 },
        { id: "storage", title: "How to Store Your Seed Phrase", level: 2 },
        { id: "common-mistakes", title: "Common Mistakes", level: 2 },
        { id: "why-it-matters", title: "Why Seed Phrases Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "What if someone finds my seed phrase?",
          answer:
            "If someone gains access to your seed phrase, they can restore your wallet on any device and steal all your funds. There is no two-factor authentication or additional verification needed — the seed phrase alone grants complete control. If you suspect your seed phrase has been compromised, immediately create a new wallet and transfer all assets to it.",
        },
        {
          question: "Can I change my seed phrase?",
          answer:
            "No. The seed phrase is generated once when the wallet is created and cannot be changed. It is mathematically tied to your private keys and addresses. If you want a new seed phrase, you must create an entirely new wallet and transfer all assets from the old wallet to the new one. Keep both seed phrases until all assets are moved.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Private Key?", href: "/learn/glossary/private-key", category: "Glossary" },
        { title: "What Is a Hardware Wallet?", href: "/learn/glossary/hardware-wallet", category: "Glossary" },
        { title: "What Is a Cold Wallet?", href: "/learn/glossary/cold-wallet", category: "Glossary" },
        { title: "What Is a Hot Wallet?", href: "/learn/glossary/hot-wallet", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Seed Phrase?</h2>
      <p>
        A seed phrase is a human-readable representation of the cryptographic seed that generates all private keys in a wallet. It consists of 12 or 24 words selected from a standardized list of 2,048 words (defined by BIP-39). The word order matters — the same words in a different order produce different keys. This phrase is the ultimate backup: with it, you can recover your entire wallet and all its addresses on any compatible device.
      </p>

      <h2 id="how-it-works">How Seed Phrases Work</h2>
      <p>
        When you create a wallet, the software generates a random number, converts it into a sequence of words using the BIP-39 wordlist, and uses that sequence to deterministically derive all your private keys through a standard algorithm (BIP-32/BIP-44). This means the same seed phrase will always generate the same set of keys and addresses. Multiple accounts and addresses can be derived from a single seed phrase.
      </p>

      <h2 id="storage">How to Store Your Seed Phrase</h2>
      <p>
        Write your seed phrase on paper or etch it into metal (steel or titanium plates resist fire and water). Store copies in multiple secure physical locations — a home safe, a safety deposit box, or with a trusted family member. Never store your seed phrase digitally: no photos, no cloud storage, no password managers, no emails, no text files. Physical, offline storage is the only acceptable method.
      </p>

      <h2 id="common-mistakes">Common Mistakes</h2>
      <p>
        Taking a photo or screenshot of the seed phrase creates a digital copy vulnerable to hacking. Storing it in cloud-synced notes exposes it to data breaches. Entering it on websites (phishing sites disguised as wallet interfaces) is the most common theft vector. Storing only one copy means a single loss event (fire, flood, theft) destroys access to funds permanently. Each of these mistakes has cost people their entire crypto holdings.
      </p>

      <h2 id="why-it-matters">Why Seed Phrases Matter</h2>
      <p>
        Your seed phrase is the key to your financial sovereignty in crypto. It is the one thing that, if protected, ensures you can always access your funds regardless of what happens to any specific device or wallet software. And it is the one thing that, if compromised, means total loss of funds with no recourse. Treating your seed phrase with the same seriousness as your most valuable physical possession is not paranoia — it is responsible custody.
      </p>
    </LearnPageLayout>
  );
}
