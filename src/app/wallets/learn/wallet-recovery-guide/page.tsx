import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Wallet Recovery Guide (${CURRENT_YEAR}) - Restore Your Wallet | ${SITE_NAME}`,
  description: `Complete wallet recovery guide for ${CURRENT_YEAR}. How to restore wallets from seed phrases, recover from lost devices, and what to do if your wallet is compromised.`,
  alternates: { canonical: "/wallets/learn/wallet-recovery-guide" },
};

const toc = [
  { id: "when-to-recover", title: "When You Need Wallet Recovery", level: 2 },
  { id: "seed-phrase-recovery", title: "Recovering with a Seed Phrase", level: 2 },
  { id: "lost-device", title: "Lost or Damaged Device Recovery", level: 2 },
  { id: "compromised-wallet", title: "What to Do If Your Wallet Is Compromised", level: 2 },
  { id: "prevention", title: "Preventing Future Recovery Situations", level: 2 },
];

const faqs = [
  { question: "Can I recover my wallet without a seed phrase?", answer: "In most cases, no. If you have lost both your device and your seed phrase, the funds are permanently inaccessible. This is a fundamental property of self-custody: there is no central authority that can reset your access. Some wallet providers offer social recovery mechanisms (like Argent's guardians), but these must be set up before losing access." },
  { question: "Can I use my seed phrase on a different wallet app?", answer: "Yes. Seed phrases follow the BIP-39 standard, making them compatible across most wallet applications. You can restore a MetaMask seed phrase in Trust Wallet, import a Ledger seed into Trezor, and so on. However, some wallets use different derivation paths, so you may need to manually select the correct path to see all your accounts." },
  { question: "What is a derivation path and why does it matter for recovery?", answer: "A derivation path is the mathematical formula used to generate specific addresses from your seed phrase. Different blockchains and wallet apps may use different derivation paths. If you recover your wallet but see zero balance, try alternative derivation paths in the wallet settings. Common paths include m/44'/60'/0'/0 for Ethereum and m/44'/0'/0'/0 for Bitcoin." },
  { question: "My recovered wallet shows zero balance, what happened?", answer: "Several possibilities: you may be on the wrong derivation path (try switching in settings), you may be looking at the wrong network (check if assets are on a different chain), the wallet may not be fully synced yet, or you may have entered the seed phrase incorrectly. Double-check each word carefully. If using a passphrase, ensure you entered the exact same passphrase." },
  { question: "How long does wallet recovery take?", answer: "Software wallet recovery (MetaMask, Phantom) takes just a few minutes: install the app, choose restore, enter your seed phrase. Hardware wallet recovery takes 10-20 minutes as the device goes through its setup process. Blockchain syncing may take additional time depending on the network. Bitcoin full node wallets can take hours to rescan the blockchain after recovery." },
];

const relatedArticles = [
  { title: "Passphrase vs Seed Phrase", href: "/wallets/learn/passphrase-vs-seed-phrase", category: "Wallets" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
];

export default function WalletRecoveryGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Wallet Recovery Guide: Restoring Access to Your Funds"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="8 min"
      intro="Losing access to your crypto wallet is stressful, but in most cases, recovery is straightforward if you have your seed phrase. This guide walks through every recovery scenario: restoring from a seed phrase, recovering after a lost device, responding to a compromised wallet, and setting up proper backups to prevent future emergencies."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="when-to-recover">When You Need Wallet Recovery</h2>
      <p>
        Wallet recovery is needed in several situations: your phone or computer is lost, stolen, or
        damaged; you need to migrate to a new device; your wallet app is corrupted or uninstalled;
        you suspect your wallet has been compromised; or you are restoring from a backup after an
        extended period. Each scenario has a slightly different recovery process, but the seed phrase
        is the key to all of them.
      </p>
      <p>
        The most important rule when you realize you need recovery: do not panic and do not rush.
        Hasty actions during recovery, like entering your seed phrase on a phishing site or sending
        funds to a wrong address, cause more losses than the original problem. Take a breath, verify
        you are using legitimate recovery tools, and follow the steps methodically. Your funds on the
        blockchain are safe as long as no one else has your seed phrase.
      </p>

      <h2 id="seed-phrase-recovery">Recovering with a Seed Phrase</h2>
      <p>
        To recover a software wallet, install the official wallet application on your new device.
        Choose the option to restore or import an existing wallet. Enter your seed phrase words in
        the exact order they were originally given to you. After entering all words, the wallet
        will regenerate your accounts and display your balances. This process works because your
        funds are on the blockchain, not on your device. The seed phrase simply regenerates the
        keys that prove ownership.
      </p>
      <p>
        For hardware wallet recovery, initialize the new hardware device and select the recovery
        option during setup. Enter your seed phrase on the device itself, never on a computer.
        The hardware wallet will regenerate your keys within its secure chip. After recovery,
        connect the hardware wallet to its companion app to verify your balances and accounts
        appear correctly. Verify a known address matches before sending any new funds.
      </p>

      <h2 id="lost-device">Lost or Damaged Device Recovery</h2>
      <p>
        If your phone or computer is lost but your seed phrase is safely stored, your funds are
        not at risk (assuming you did not store your seed phrase on the lost device). Install your
        wallet app on a new device and recover using your seed phrase. If the lost device had a
        hot wallet, consider the possibility that someone could access it. If the wallet was
        protected only by a PIN or biometric (without a strong device password), move funds to
        a new wallet generated on the new device as a precaution.
      </p>
      <p>
        If a hardware wallet is lost or damaged, your funds remain safe because the device requires
        a PIN to access. Order a replacement hardware wallet (same brand or a compatible one) and
        recover using your seed phrase. Do not buy a used hardware wallet for recovery. Always
        purchase from the official manufacturer to avoid tampered devices. Your funds exist on
        the blockchain, and the hardware wallet is just the key to access them.
      </p>

      <h2 id="compromised-wallet">What to Do If Your Wallet Is Compromised</h2>
      <p>
        If you suspect your wallet is compromised (unauthorized transactions, seed phrase exposure),
        act immediately. Create a new wallet on a secure, clean device. Transfer all remaining
        assets from the compromised wallet to the new wallet as quickly as possible. Prioritize
        the highest-value assets first. If the compromise involves a token approval exploit, revoke
        all approvals using tools like Revoke.cash before the attacker can drain approved tokens.
      </p>
      <p>
        After securing your funds, investigate how the compromise occurred. Common causes include
        seed phrase exposure (stored digitally, seen by someone), malicious dApp approvals
        (unlimited token approvals to a malicious contract), malware on your device (keyloggers,
        clipboard hijackers), or social engineering (fake support agents asking for your seed phrase).
        Understanding the attack vector helps prevent repeat incidents and informs your improved
        security setup.
      </p>

      <h2 id="prevention">Preventing Future Recovery Situations</h2>
      <p>
        The best recovery plan is one you never need. Store your seed phrase on metal backup
        plates in a fireproof safe or bank safety deposit box. Test your backup by verifying you
        can see the correct addresses when entering the seed phrase on a separate device (use a
        watch-only wallet or a test recovery). Maintain redundant backups in separate secure
        locations to protect against fire, flood, or physical damage to a single location.
      </p>
      <p>
        Consider setting up social recovery or multisig wallets for significant holdings. Smart
        contract wallets like Safe (formerly Gnosis Safe) require multiple approvers for
        transactions, eliminating single points of failure. Some wallets support guardian-based
        recovery where trusted contacts can help restore access without having individual control
        over your funds. These advanced setups add complexity but provide much stronger protection
        for large portfolios.
      </p>
    </LearnPageLayout>
  );
}
