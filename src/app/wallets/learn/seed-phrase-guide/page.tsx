import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Complete Seed Phrase Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Everything you need to know about crypto seed phrases. Learn what they are, how they work, and best practices for secure storage and backup.",
  keywords: ["seed phrase", "recovery phrase", "mnemonic phrase", "wallet backup", "BIP39"],
};

export default function SeedPhraseGuidePage() {
  return (
    <LearnPageLayout
      title="Complete Seed Phrase Guide"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="9 min"
      intro="Your seed phrase is the master key to all your cryptocurrency. These 12 or 24 words can restore your entire wallet on any compatible device, making them the single most critical piece of information in your crypto security. This guide covers everything you need to know about creating, storing, and protecting your seed phrase."
      toc={[
        { id: "what-is", title: "What Is a Seed Phrase?", level: 2 },
        { id: "how-it-works", title: "How Seed Phrases Work", level: 2 },
        { id: "storage", title: "Secure Storage Methods", level: 2 },
        { id: "mistakes", title: "Common Mistakes to Avoid", level: 2 },
        { id: "metal-backup", title: "Metal Backup Solutions", level: 2 },
      ]}
      faqs={[
        { question: "Can someone steal my crypto with just my seed phrase?", answer: "Yes. Anyone who has your seed phrase can fully recreate your wallet on their device and drain all funds. Never share your seed phrase with anyone, never enter it on a website, and never store it digitally where it could be hacked. Legitimate wallet companies and support staff will never ask for your seed phrase." },
        { question: "What if I lose my seed phrase?", answer: "If you lose your seed phrase and also lose access to your wallet device, your funds are permanently lost. There is no recovery process — this is by design in decentralized systems. This is why secure seed phrase storage with redundant backups in separate locations is critical." },
        { question: "Should I store my seed phrase digitally?", answer: "No. Digital storage such as photos, notes apps, cloud drives, email drafts, or password managers creates vulnerability to hacking. Seed phrases should be stored on physical media — paper in a secure location, or ideally stamped into metal plates that resist fire and water damage." },
      ]}
      relatedArticles={[
        { title: "Private Key Management", href: "/wallets/learn/private-key-management", category: "Wallets" },
        { title: "Shamir Backup Explained", href: "/wallets/learn/shamir-backup-explained", category: "Wallets" },
        { title: "Best Security Wallets", href: "/wallets/best/security", category: "Best Of" },
      ]}
    >
      <section id="what-is">
        <h2>What Is a Seed Phrase?</h2>
        <p>A seed phrase, also called a recovery phrase or mnemonic phrase, is a sequence of 12 or 24 words generated when you create a new cryptocurrency wallet. These words are randomly selected from a standardized list of 2,048 English words defined by the BIP39 standard. The seed phrase is a human-readable representation of the cryptographic seed that generates all your wallet addresses and private keys. Because the same seed phrase always produces the same keys, you can use it to restore your wallet on any compatible software or hardware device, even if your original device is destroyed or lost.</p>
      </section>
      <section id="how-it-works">
        <h2>How Seed Phrases Work</h2>
        <p>Behind the scenes, your seed phrase encodes a large random number that serves as the root of a hierarchical deterministic (HD) wallet. Through a mathematical process defined by BIP32 and BIP44 standards, this root generates an unlimited tree of private keys and corresponding public addresses for multiple cryptocurrencies. This means your single seed phrase can control Bitcoin, Ethereum, Solana, and any other supported blockchain simultaneously. The word order matters — the same 12 words in a different order produce a completely different wallet. The final word includes a checksum that helps detect transcription errors, providing a basic verification that your backup is correct.</p>
      </section>
      <section id="storage">
        <h2>Secure Storage Methods</h2>
        <p>The most important principle of seed phrase storage is keeping it offline and physically secure. Write your seed phrase on paper using permanent ink, verify each word carefully, and store it in a secure location such as a home safe, bank safety deposit box, or hidden location known only to you. For redundancy, create multiple copies stored in geographically separate locations — this protects against fire, flood, or theft at a single location. Consider who should be able to access your seed phrase in an emergency or after your death, and include it in your estate planning. Never store seed phrases digitally in any form — no photos, no screenshots, no text files, no email, no cloud storage, no password managers.</p>
      </section>
      <section id="mistakes">
        <h2>Common Mistakes to Avoid</h2>
        <p>The most dangerous mistake is storing your seed phrase digitally. Photos of seed phrases on phones have been stolen through cloud backup syncing, malware, and device theft. Another common error is writing the phrase down incorrectly — always verify your backup by checking each word against the wallet display before dismissing the setup screen. Some users make the mistake of storing their seed phrase in the same location as their hardware wallet, which defeats the purpose of having a backup if that location is compromised. Others store all copies in one building, making them vulnerable to catastrophic events. Finally, never generate a seed phrase on a potentially compromised device — always use a trusted hardware wallet or freshly installed software wallet for initial generation.</p>
      </section>
      <section id="metal-backup">
        <h2>Metal Backup Solutions</h2>
        <p>Metal seed phrase backups provide superior durability compared to paper. Products like Cryptosteel Capsule, Billfodl, and SeedPlate allow you to stamp or arrange metal letters to record your seed phrase on stainless steel or titanium. These backups are fireproof (surviving temperatures above 1,500 degrees Fahrenheit), waterproof, and resistant to corrosion and physical degradation. While more expensive than paper, metal backups provide peace of mind that your seed phrase will survive environmental disasters that would destroy paper. For anyone securing significant value, the $50-$100 cost of a metal backup is trivial insurance against permanent loss of access to your cryptocurrency holdings.</p>
      </section>
    </LearnPageLayout>
  );
}
