import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Passphrase vs Seed Phrase (${CURRENT_YEAR}) - Key Differences | ${SITE_NAME}`,
  description: `Understand the difference between a passphrase and seed phrase in ${CURRENT_YEAR}. How each works, when to use them, and best practices for securing your crypto wallet.`,
  alternates: { canonical: "/wallets/learn/passphrase-vs-seed-phrase" },
};

const toc = [
  { id: "overview", title: "Passphrase vs Seed Phrase: Key Differences", level: 2 },
  { id: "seed-phrase", title: "What Is a Seed Phrase?", level: 2 },
  { id: "passphrase", title: "What Is a Passphrase?", level: 2 },
  { id: "how-they-work-together", title: "How They Work Together", level: 2 },
  { id: "best-practices", title: "Security Best Practices", level: 2 },
];

const faqs = [
  { question: "Is a passphrase the same as a password?", answer: "No. A wallet passphrase (sometimes called the 25th word) is fundamentally different from a password. A password protects access to an application. A passphrase generates an entirely different set of wallet addresses from the same seed phrase. If you lose your passphrase, there is no password reset option. The funds in the passphrase-derived wallet are permanently inaccessible without the exact passphrase." },
  { question: "Do I need a passphrase if I have a seed phrase?", answer: "A passphrase is optional but adds a powerful extra layer of security. Your seed phrase alone generates your default wallet. Adding a passphrase creates a completely separate hidden wallet. This provides plausible deniability (a $5 wrench attack defense) and protection if your seed phrase is compromised. However, it also adds complexity and another point of failure if forgotten." },
  { question: "What happens if someone finds my seed phrase?", answer: "If someone finds your seed phrase without a passphrase protecting your main wallet, they can access all your funds immediately. This is why secure seed phrase storage is critical. If you use a passphrase, the attacker would only see the default wallet (which you can keep mostly empty) and would need the passphrase to access your hidden wallets." },
  { question: "How should I store my seed phrase?", answer: "Store your seed phrase on durable physical media: stamped metal plates, engraved steel, or at minimum written on paper stored in a fireproof safe. Never store it digitally (no photos, no text files, no cloud storage, no email). Consider splitting it across multiple secure locations using Shamir's Secret Sharing or simply storing redundant copies in separate secure locations." },
  { question: "Can I change my seed phrase?", answer: "You cannot change a seed phrase for an existing wallet. The seed phrase is mathematically linked to your wallet addresses. To get a new seed phrase, you must create a new wallet and transfer all assets to the new addresses. Some users periodically migrate to new wallets for security reasons, though this involves transaction fees and effort." },
];

const relatedArticles = [
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
  { title: "Wallet Recovery Guide", href: "/wallets/learn/wallet-recovery-guide", category: "Wallets" },
  { title: "Hardware Wallet Setup Guide", href: "/wallets/learn/hardware-wallet-setup-guide", category: "Wallets" },
];

export default function PassphraseVsSeedPhrasePage() {
  return (
    <LearnPageLayout
      title="Passphrase vs Seed Phrase: Understanding the Difference"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="7 min"
      intro="Seed phrases and passphrases are both critical components of crypto wallet security, but they serve very different purposes. Confusing the two can lead to lost funds or inadequate security. This guide explains what each one is, how they work together, and best practices for managing both to keep your crypto safe."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="overview">Passphrase vs Seed Phrase: Key Differences</h2>
      <p>
        A seed phrase (also called a recovery phrase or mnemonic phrase) is a series of 12 or 24
        words that serves as the master backup for your entire crypto wallet. It is generated when
        you first create a wallet and can restore all your accounts and funds on any compatible
        wallet application. A passphrase (sometimes called the 25th word) is an optional additional
        word or phrase that, when combined with your seed phrase, generates an entirely different
        set of wallet addresses.
      </p>
      <p>
        Think of it this way: your seed phrase is the master key to your house. A passphrase creates
        a secret room inside that house. Anyone who finds your seed phrase can enter the house and
        see whatever is in the default rooms. But only someone who has both the seed phrase and the
        passphrase can access the hidden room where your most valuable assets are stored.
      </p>

      <h2 id="seed-phrase">What Is a Seed Phrase?</h2>
      <p>
        A seed phrase is a human-readable representation of the cryptographic seed that generates
        all your wallet&apos;s private keys. The 12 or 24 words are selected from a standardized list
        of 2,048 words (BIP-39 standard). The order matters: each specific combination of words in
        a specific order maps to one unique set of wallet addresses. Changing a single word or
        swapping two words generates a completely different wallet.
      </p>
      <p>
        Your seed phrase is the single most important piece of information in your crypto security.
        Anyone who has your seed phrase controls your funds on every blockchain and every account
        derived from that seed. Losing your seed phrase means losing access to your wallet if
        your device fails, with no way to recover. This is why proper backup and storage of your
        seed phrase is the foundation of crypto self-custody security.
      </p>

      <h2 id="passphrase">What Is a Passphrase?</h2>
      <p>
        A passphrase is an additional user-chosen word, phrase, or string of characters that
        extends your seed phrase. When you add a passphrase, it is combined with your seed phrase
        to derive a completely new set of private keys and addresses. Every different passphrase
        creates a different wallet. There is no wrong passphrase; each string of characters generates
        a valid (but different) wallet. This means there is no error message if you mistype your
        passphrase, which makes accuracy critical.
      </p>
      <p>
        Hardware wallets like Ledger and Trezor support passphrases as a native feature. When
        enabled, you enter your passphrase each time you connect the device (it is not stored on
        the hardware wallet). This provides plausible deniability: if someone forces you to reveal
        your wallet, you can give them the PIN for the default wallet (with minimal funds) while
        your main holdings remain hidden behind the passphrase.
      </p>

      <h2 id="how-they-work-together">How They Work Together</h2>
      <p>
        The seed phrase alone generates your default wallet (the wallet you see without a passphrase).
        Seed phrase plus passphrase A generates wallet A. Seed phrase plus passphrase B generates
        wallet B. All three are completely independent wallets with different addresses and balances.
        You need both your seed phrase and the exact passphrase to access each specific hidden wallet.
      </p>
      <p>
        This system allows sophisticated security setups. Keep a small amount in the default wallet
        as a decoy. Store the majority of your holdings behind a passphrase. You can even use
        multiple passphrases for different purposes: one for long-term savings, one for DeFi
        activity, and so on. However, every additional passphrase is another secret you must
        remember or store securely, so balance security with manageability.
      </p>

      <h2 id="best-practices">Security Best Practices</h2>
      <p>
        Store your seed phrase on a durable physical medium. Metal backup plates (stamped or
        engraved) survive fire, water, and physical damage that would destroy paper. Never store
        your seed phrase digitally. No photos, screenshots, text files, password managers, or
        cloud storage. Physical media in a secure location is the only recommended approach.
        Consider redundant backups in separate geographic locations.
      </p>
      <p>
        If you use a passphrase, store it separately from your seed phrase. The security benefit
        of a passphrase vanishes if it is stored alongside your seed phrase. Choose a passphrase
        that is complex enough to resist guessing but memorable enough that you will not forget
        it. Some users store their passphrase in a sealed envelope in a different physical location
        from their seed phrase backup. The combination of separated storage provides strong
        protection while maintaining recoverability.
      </p>
    </LearnPageLayout>
  );
}
