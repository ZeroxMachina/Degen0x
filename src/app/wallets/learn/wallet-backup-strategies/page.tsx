import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Wallet Backup Strategies: How to Protect Your Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Complete guide to cryptocurrency wallet backup strategies in ${CURRENT_YEAR}. Learn how to back up seed phrases, private keys, and wallet data to prevent permanent loss.`,
};

export default function WalletBackupStrategiesPage() {
  return (
    <LearnPageLayout
      title="Wallet Backup Strategies: How to Protect Your Crypto from Loss"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="9 min"
      intro="Losing access to your cryptocurrency wallet means losing your funds permanently. Unlike a bank, there is no customer support to help you recover lost crypto. A robust backup strategy is the single most important thing you can do to protect your digital assets. This guide covers proven backup methods, common mistakes, and strategies for different levels of holdings."
      toc={[
        { id: "why-backups-matter", title: "Why Backups Matter", level: 2 },
        { id: "what-to-back-up", title: "What to Back Up", level: 2 },
        { id: "backup-methods", title: "Backup Methods Compared", level: 2 },
        { id: "redundancy", title: "Redundancy & Geographic Distribution", level: 2 },
        { id: "testing", title: "Testing Your Backups", level: 2 },
        { id: "inheritance", title: "Inheritance & Emergency Access", level: 2 },
      ]}
      faqs={[
        {
          question: "How many backup copies should I have?",
          answer: "For most users, 2-3 copies stored in separate secure locations is ideal. One copy at home in a fireproof safe and one in a bank safety deposit box or trusted family member's secure location provides solid redundancy. More copies increase availability but also increase the risk of unauthorized access. The right number depends on the value of your holdings and your risk tolerance.",
        },
        {
          question: "Should I back up my wallet file or just the seed phrase?",
          answer: "The seed phrase is the most critical backup because it can regenerate your entire wallet. However, some wallets also have wallet files, passwords, or derivation path settings that may be needed for full recovery. Back up the seed phrase as your primary backup, and keep notes about which wallet software you use, any passphrase (25th word), and any non-standard derivation paths.",
        },
        {
          question: "What if my backup is stolen?",
          answer: "If you suspect your seed phrase backup has been compromised, immediately create a new wallet with a new seed phrase, transfer all assets to the new wallet, and securely destroy all copies of the old seed phrase. Speed matters — if an attacker has your seed phrase, they can drain your wallet at any time. Consider adding a passphrase (25th word) to your new wallet for additional protection.",
        },
      ]}
      relatedArticles={[
        { title: "Seed Phrase Security", href: "/wallets/learn/seed-phrase-security", category: "Wallets" },
        { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
        { title: "Wallet Recovery Guide", href: "/wallets/learn/wallet-recovery-guide", category: "Wallets" },
      ]}
    >
      <h2 id="why-backups-matter">Why Backups Matter</h2>
      <p>
        Cryptocurrency self-custody means you are solely responsible for your funds. If your phone is lost, your computer crashes, or your hardware wallet is destroyed, your backup is the only way to recover your assets. Without a backup, your funds are gone forever. Estimates suggest billions of dollars worth of Bitcoin alone are permanently lost due to missing or inadequate backups. The irreversible nature of blockchain means there is no undo button, no fraud department, and no account recovery process. A proper backup strategy protects against device failure, theft, natural disasters, and accidental deletion.
      </p>

      <h2 id="what-to-back-up">What to Back Up</h2>
      <p>
        The most critical item to back up is your seed phrase (recovery phrase), the 12 or 24 words generated when you created your wallet. This phrase can reconstruct your entire wallet on any compatible software. Beyond the seed phrase, document which wallet application you use (MetaMask, Phantom, Ledger Live, etc.), any passphrase or 25th word you have set, your wallet&apos;s derivation path if non-standard, and a list of networks and tokens you hold. For hardware wallets, keep the device PIN documented separately from the seed phrase. For multi-sig setups, document the quorum configuration, all signer addresses, and the safe or vault contract address.
      </p>

      <h2 id="backup-methods">Backup Methods Compared</h2>
      <p>
        Paper backups are the simplest method: write your seed phrase on paper with a pen and store it securely. Paper is vulnerable to fire, water, and degradation over time but is free and requires no special tools. Metal backups (Cryptosteel, Billfodl, Blockplate) stamp or engrave your seed phrase on stainless steel or titanium, providing resistance to fire up to 1,500 degrees Celsius, water, and corrosion. Metal backups cost $50-150 but offer superior durability for long-term storage. Digital encrypted backups (using tools like VeraCrypt or encrypted USB drives) provide convenience but introduce risks from malware, hardware failure, and password loss. Most security experts recommend metal or paper as the primary backup with digital as an optional secondary layer.
      </p>

      <h2 id="redundancy">Redundancy &amp; Geographic Distribution</h2>
      <p>
        Storing all backups in one location creates a single point of failure. A house fire, flood, or burglary could destroy everything. Geographic distribution solves this by placing backup copies in separate physical locations. Common strategies include keeping one copy in a home safe, one in a bank safety deposit box, and optionally one with a trusted family member. Each location should protect against both environmental damage and unauthorized access. For very large holdings, Shamir Secret Sharing (SSS) can split a seed into multiple shares where a threshold number (e.g., 3 of 5) are needed to reconstruct it, allowing geographic distribution without any single location holding enough information to access funds.
      </p>

      <h2 id="testing">Testing Your Backups</h2>
      <p>
        A backup you have never tested is a backup you cannot trust. Periodically verify that your seed phrase backup is legible, complete, and functional. The safest way to test is to use a dedicated device (a fresh phone or computer that will be wiped afterward) to restore the wallet using only your backup. Verify that the wallet address matches your actual wallet. If you use a passphrase, test that as well. Some users test by restoring into a watch-only wallet (importing only the public key) to verify the address without exposing the seed phrase to an internet-connected device. Schedule backup verification at least once per year, and always verify after creating a new backup.
      </p>

      <h2 id="inheritance">Inheritance &amp; Emergency Access</h2>
      <p>
        Planning for the possibility that you become incapacitated or pass away is an often-overlooked aspect of backup strategy. Without a plan, your crypto assets may be permanently lost to your heirs. Options include providing a trusted family member with sealed backup instructions stored in a safe or safety deposit box, using a lawyer or estate attorney to hold encrypted backup information, or setting up a multi-sig wallet where family members hold keys. Document clear, non-technical instructions that explain what cryptocurrency you hold, where the backup is located, and step-by-step recovery procedures. Services like Casa offer inheritance-focused custody solutions. Whatever method you choose, ensure your heirs can access funds without your active participation while preventing premature access during your lifetime.
      </p>
    </LearnPageLayout>
  );
}
