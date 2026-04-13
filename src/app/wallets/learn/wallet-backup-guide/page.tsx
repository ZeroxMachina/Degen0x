import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import LearnPage from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Wallet Backup Guide (${CURRENT_YEAR}) - Protect Your Recovery Phrase | ${SITE_NAME}`,
  description: `Complete guide to backing up your crypto wallet in ${CURRENT_YEAR}. Seed phrase storage, metal backups, Shamir Backup, multi-location strategies, and disaster recovery.`,
  alternates: { canonical: "/wallets/learn/wallet-backup-guide" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const toc = [
  { id: "why-backup", title: "Why Backup Matters", level: 2 },
  { id: "paper-backup", title: "Paper Backup Method", level: 2 },
  { id: "metal-backup", title: "Metal Backup Solutions", level: 2 },
  { id: "shamir", title: "Shamir Backup (Split Recovery)", level: 2 },
  { id: "multi-location", title: "Multi-Location Strategy", level: 2 },
];

const faqs = [
  { question: "Should I store my seed phrase in a safety deposit box?", answer: "A bank safety deposit box is a good option for one copy of your backup because it provides physical security and fire/flood protection. However, do not rely on it as your only backup, as banks can restrict access or close locations. Maintain at least one additional backup in a different secure location that you control." },
  { question: "Can I split my seed phrase across multiple locations?", answer: "Splitting a standard seed phrase (storing words 1-6 in one place and 7-12 in another) is not recommended because it weakens security since each half contains partial information that reduces the brute-force difficulty. Instead, use Shamir Backup (supported by Trezor) which is mathematically designed for secure splitting where individual shares reveal no information about the original seed." },
  { question: "How often should I verify my backup?", answer: "Verify your seed phrase backup at least every 6-12 months. Check that the words are still legible, the paper has not degraded, and you can find and access the backup when needed. Do not enter the seed phrase into any device during verification; simply visually confirm the words are intact and readable." },
];

const relatedArticles = [
  { title: "Seed Phrase Explained", href: "/wallets/learn/seed-phrase-explained", category: "Wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
  { title: "Best Hardware Wallets", href: "/wallets/best/hardware", category: "Wallets" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Wallets', item: 'https://degen0x.com/wallets' },
    { '@type': 'ListItem', position: 3, name: 'Learn', item: 'https://degen0x.com/wallets/learn' },
    { '@type': 'ListItem', position: 4, name: 'Wallet Backup Guide', },
  ],
};

export default function WalletBackupGuidePage() {
  return (
    <LearnPage
      title="Crypto Wallet Backup Guide: Never Lose Access to Your Funds"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="9 min"
      intro="Your wallet backup is the only way to recover your crypto if your device is lost, stolen, broken, or compromised. A proper backup strategy protects against fire, flood, theft, and human error. This guide covers every backup method from basic paper storage to advanced Shamir splitting, so you can choose the right approach for your situation."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <h2 id="why-backup">Why Backup Matters</h2>
      <p>
        Your seed phrase is the only way to restore access to your wallet if your device fails. Unlike bank
        accounts with customer support and fraud protection, crypto wallets have no recovery mechanism beyond
        the seed phrase. If you lose both your device and your backup, your funds are permanently inaccessible.
        No company, developer, or authority can help you recover them. The importance of proper backup cannot
        be overstated.
      </p>
      <p>
        A good backup strategy protects against multiple failure modes: device loss or theft, fire or water damage
        to your home, degradation of the backup medium over time, and accidental destruction. The strategy should
        also account for accessibility, ensuring you or your trusted parties can access the backup when needed
        without making it vulnerable to unauthorized access.
      </p>

      <h2 id="paper-backup">Paper Backup Method</h2>
      <p>
        The simplest and most common backup method is writing your seed phrase on paper. Use the cards provided
        with your hardware wallet or plain paper. Write clearly with a permanent pen (not pencil, which can fade).
        Write each word in order, numbered for clarity. Store the paper in a sealed envelope in a secure location
        such as a locked safe, fireproof box, or safety deposit box.
      </p>
      <p>
        The advantages of paper are simplicity and zero technology dependency. The disadvantages are vulnerability
        to fire, water, fading ink, and physical deterioration over years. To mitigate these risks, use acid-free
        archival paper, laminate the backup, or store it inside a waterproof container. Paper backups are best
        suited for users who verify their backup regularly and combine it with a more durable method.
      </p>

      <h2 id="metal-backup">Metal Backup Solutions</h2>
      <p>
        Metal seed storage devices are designed to survive fires, floods, and physical damage that would destroy
        paper. Products like Cryptosteel, Billfodl, and Blockplate allow you to engrave or stamp your seed words
        into stainless steel or titanium plates. These typically withstand temperatures over 1,000 degrees Celsius
        and are water and corrosion resistant.
      </p>
      <p>
        The investment in a metal backup ($30-$100) is worthwhile for anyone storing more than a few hundred
        dollars in crypto. The engraving or stamping process takes 15-30 minutes. Once complete, the metal plate
        is essentially indestructible under normal circumstances. Store it in the same secure locations you would
        use for paper: a safe, lockbox, or safety deposit box.
      </p>

      <h2 id="shamir">Shamir Backup (Split Recovery)</h2>
      <p>
        Shamir Backup (SLIP-39), supported by Trezor wallets, splits your seed into multiple shares using
        Shamir&apos;s Secret Sharing algorithm. You define the total number of shares and the threshold needed
        to reconstruct the seed. For example, a 3-of-5 setup creates 5 shares where any 3 can restore your
        wallet, but 1 or 2 shares reveal absolutely nothing about the original seed.
      </p>
      <p>
        This approach is superior to naive splitting (dividing a standard seed phrase into parts) because
        individual Shamir shares are cryptographically independent. Losing some shares does not lock you out
        (as long as you retain the threshold number), and finding one share does not help an attacker. Distribute
        shares to different geographic locations, safety deposit boxes, or trusted family members for maximum
        resilience.
      </p>

      <h2 id="multi-location">Multi-Location Strategy</h2>
      <p>
        For significant holdings, maintain backups in at least two geographically separated locations. This
        protects against localized disasters (fire, flood, earthquake) that could destroy all copies stored in
        one place. Each location should have its own secure storage method. For example, a metal backup in a
        home safe and a paper backup in a bank safety deposit box in a different city.
      </p>
      <p>
        When planning your multi-location strategy, consider accessibility, security, and redundancy. Each
        location should be secure from unauthorized access. You should be able to reach at least one backup
        within a reasonable time frame. And no single location failure should result in total loss. For
        Shamir Backup users, distributing shares across locations provides even stronger protection because
        compromising one location does not compromise the wallet.
      </p>
    </LearnPage>
  );
}
