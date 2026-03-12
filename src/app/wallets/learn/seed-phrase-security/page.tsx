import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Seed Phrase Security: How to Protect Your Recovery Phrase (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Complete guide to seed phrase security in ${CURRENT_YEAR}. Learn how to store, protect, and never lose your crypto wallet recovery phrase.`,
};

export default function SeedPhraseSecurityPage() {
  return (
    <LearnPageLayout
      title="Seed Phrase Security: How to Protect Your Recovery Phrase"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="10 min"
      intro="Your seed phrase (also called a recovery phrase or mnemonic phrase) is the master key to your cryptocurrency wallet. If someone obtains your seed phrase, they have complete access to all your funds. If you lose it, your funds may be permanently inaccessible. This guide covers everything you need to know about protecting this critical piece of information."
      toc={[
        { id: "what-is-seed-phrase", title: "what-is-seed-phrase", level: 2 },
        { id: "what-is-a-seed-phrase", title: "What Is a Seed Phrase?", level: 2 },
        { id: "storage-methods", title: "storage-methods", level: 2 },
        { id: "best-storage-methods", title: "Best Storage Methods", level: 2 },
        { id: "common-mistakes", title: "common-mistakes", level: 2 },
        { id: "common-mistakes-to-avoid", title: "Common Mistakes to Avoid", level: 2 },
        { id: "metal-backups", title: "metal-backups", level: 2 },
        { id: "metal-seed-phrase-backups", title: "Metal Seed Phrase Backups", level: 2 },
        { id: "multi-location", title: "multi-location", level: 2 },
        { id: "multi-location-storage-strategy", title: "Multi-Location Storage Strategy", level: 2 },
        { id: "advanced", title: "advanced", level: 2 },
        { id: "advanced-techniques", title: "Advanced Techniques", level: 2 }
      ]}
      faqs={[
        {
          question: "Can I change my seed phrase?",
          answer: "No. A seed phrase is mathematically derived during wallet creation and cannot be changed. If you believe your seed phrase has been compromised, create a new wallet with a new seed phrase and transfer all assets to the new wallet immediately.",
        },
        {
          question: "Is it safe to store my seed phrase in a password manager?",
          answer: "This is debated in the crypto community. A strong, encrypted password manager provides better protection than a Post-it note, but storing your seed phrase digitally introduces risks like cloud synchronization vulnerabilities, master password compromise, and software bugs. Most security experts recommend offline physical storage as the primary backup, with digital storage only as a secondary redundancy if at all.",
        },
        {
          question: "What if I lose my seed phrase but still have access to my wallet?",
          answer: "If you still have access to your wallet, immediately create a new wallet, write down the new seed phrase securely, and transfer all assets from the old wallet to the new one. Once the transfer is complete, the old wallet (with the lost seed phrase) can be abandoned.",
        },
      ]}
      relatedArticles={[
        { title: "Wallet Backup Strategies", href: "/wallets/learn/wallet-backup-strategies", category: "Wallets" },
        { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
        { title: "Wallet Recovery Guide", href: "/wallets/learn/wallet-recovery-guide", category: "Wallets" },
      ]}
    >
      <h2 id="what-is-seed-phrase">What Is a Seed Phrase?</h2>
      <p>
        A seed phrase is a sequence of 12 or 24 words generated when you create a new cryptocurrency wallet. These words are selected from a standardized list (BIP-39) and mathematically encode the master private key from which all your wallet addresses and keys are derived. Anyone who knows these words in the correct order can reconstruct your entire wallet and access all funds across all accounts and chains associated with it. The seed phrase is not a password that can be reset; it is the fundamental cryptographic root of your wallet.
      </p>

      <h2 id="storage-methods">Best Storage Methods</h2>
      <p>
        The gold standard for seed phrase storage is writing it on paper (or metal) and keeping it in a secure physical location. Use a pen (not pencil, which fades) on acid-free paper. Write clearly and legibly, double-checking every word. Store the paper in a fireproof safe, safety deposit box, or other secure location. Avoid storing it where others can easily find it, such as in a desk drawer or taped to a monitor. Some users split their seed phrase into parts stored in separate locations, though this adds complexity and risk if any part is lost.
      </p>

      <h2 id="common-mistakes">Common Mistakes to Avoid</h2>
      <p>
        Never take a screenshot of your seed phrase. Screenshots are automatically synced to cloud services (iCloud, Google Photos) and can be accessed through device compromises. Never type your seed phrase into any website, email, or messaging app. No legitimate service will ever ask for your seed phrase. Never store it in plain text on your computer, phone, or cloud storage. Never share it with anyone, including supposed customer support agents. Do not store it in a notes app, text message, or email draft. These are all common attack vectors that have resulted in millions of dollars in stolen cryptocurrency.
      </p>

      <h2 id="metal-backups">Metal Seed Phrase Backups</h2>
      <p>
        Paper can be destroyed by fire, water, or time. Metal seed phrase backup devices solve this by allowing you to stamp, engrave, or assemble your seed words on stainless steel or titanium plates. Products like Cryptosteel, Billfodl, and Blockplate can withstand extreme temperatures (up to 1,500 degrees Celsius) and water damage. These typically cost $50-150 but provide much greater durability than paper. For significant crypto holdings, a metal backup is a worthwhile investment for long-term seed phrase preservation.
      </p>

      <h2 id="multi-location">Multi-Location Storage Strategy</h2>
      <p>
        Consider storing copies of your seed phrase in multiple secure locations to protect against localized disasters (fire, flood, theft). Options include a home safe, a bank safety deposit box, a trusted family member&apos;s secure location, or a secondary property. Each location should be secure against both theft and environmental damage. If you store multiple copies, be aware that each additional copy increases the risk of unauthorized access while decreasing the risk of total loss. Find the balance that matches your risk profile and holding size.
      </p>

      <h2 id="advanced">Advanced Techniques</h2>
      <p>
        For larger holdings, consider advanced techniques like Shamir Secret Sharing (supported by Trezor), which splits your seed into multiple shares where a threshold number (e.g., 3 of 5) are needed to reconstruct it. This provides redundancy without any single share being sufficient to access funds. Some users add a passphrase (sometimes called a 25th word) to their seed phrase, creating a hidden wallet that requires both the seed phrase and the passphrase to access. This adds another layer of security but also another critical piece of information to safeguard.
      </p>
    </LearnPageLayout>
  );
}
