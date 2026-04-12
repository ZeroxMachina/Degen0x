import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import LearnPage from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Wallet Security Best Practices (${CURRENT_YEAR}) - Protect Your Crypto | ${SITE_NAME}`,
  description: `Essential crypto wallet security best practices for ${CURRENT_YEAR}. Seed phrase protection, phishing defense, approval management, and hardware wallet recommendations.`,
  alternates: { canonical: "/wallets/learn/wallet-security-best-practices" }};

const toc = [
  { id: "seed-phrase", title: "Seed Phrase Security", level: 2 },
  { id: "phishing", title: "Avoiding Phishing Attacks", level: 2 },
  { id: "approvals", title: "Token Approval Management", level: 2 },
  { id: "hardware", title: "Hardware Wallet Best Practices", level: 2 },
  { id: "operational", title: "Operational Security Tips", level: 2 },
];

const faqs = [
  { question: "What is the biggest crypto wallet security risk?", answer: "The biggest risk for most users is phishing attacks, where scammers create fake wallet interfaces or dApps to steal your seed phrase or trick you into signing malicious transactions. Always verify URLs, never enter your seed phrase on any website, and use wallets with transaction simulation (like Rabby) to preview what you are signing." },
  { question: "Should I use a password manager for my seed phrase?", answer: "Security experts generally recommend against storing seed phrases in password managers because they introduce a digital attack vector. A written copy in a physically secure location is safer. However, a hardware-encrypted password manager is better than no backup at all. The worst approach is a seed phrase saved in plain text in a notes app, email, or cloud storage." },
  { question: "How often should I revoke token approvals?", answer: "Review and revoke unused token approvals at least monthly, or after each DeFi session. Use tools like Rabby's built-in approval manager or revoke.cash to view and revoke approvals. Every outstanding approval is a potential attack vector if the approved contract is compromised." },
];

const relatedArticles = [
  { title: "Seed Phrase Explained", href: "/wallets/learn/seed-phrase-explained", category: "Wallets" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
  { title: "Multi-Sig Wallets Explained", href: "/wallets/learn/multi-sig-wallets", category: "Wallets" },
  { title: "Wallet Backup Guide", href: "/wallets/learn/wallet-backup-guide", category: "Wallets" },
];

export default function WalletSecurityBestPracticesPage() {
  return (
    <LearnPage
      title="Wallet Security Best Practices: Protect Your Crypto"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="10 min"
      intro="In crypto, you are your own bank, which means security is entirely your responsibility. This guide covers the essential practices for protecting your wallet from the most common threats: phishing attacks, malicious approvals, seed phrase theft, and operational mistakes. Following these practices dramatically reduces your risk of losing funds."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="seed-phrase">Seed Phrase Security</h2>
      <p>
        Your seed phrase is the master key to your wallet. Never store it digitally in any form: no screenshots,
        no notes apps, no cloud storage, no emails. Write it on paper and store it in a physically secure location.
        For larger holdings, engrave it on a metal plate for fire and water resistance. Consider storing copies
        in multiple secure locations.
      </p>
      <p>
        Never share your seed phrase with anyone for any reason. No legitimate service, support agent, or wallet
        provider will ever ask for it. Any request for your seed phrase is a scam without exception. If someone
        gains access to your seed phrase, they can drain your entire wallet from anywhere in the world.
      </p>

      <h2 id="phishing">Avoiding Phishing Attacks</h2>
      <p>
        Phishing is the most common way crypto users lose funds. Attackers create fake websites that look identical
        to legitimate wallet interfaces, dApps, or airdrop claim pages. Always bookmark the official URLs of
        wallets and dApps you use regularly and access them only through bookmarks, never through search results
        or links in social media, Discord, or emails.
      </p>
      <p>
        Be skeptical of any unsolicited messages about airdrops, free tokens, or urgent wallet actions. Verify
        the URL in your browser address bar before connecting your wallet. Use wallets with built-in phishing
        detection like Rabby, which warns you about known malicious sites. If a deal seems too good to be true
        in crypto, it is almost certainly a scam.
      </p>

      <h2 id="approvals">Token Approval Management</h2>
      <p>
        When you interact with DeFi protocols, you often grant smart contracts permission to spend your tokens
        (token approvals). These approvals persist indefinitely unless revoked. If an approved contract has a
        vulnerability or turns malicious, it can drain the approved tokens from your wallet.
      </p>
      <p>
        Regularly audit your outstanding approvals using tools like Rabby&apos;s built-in manager or revoke.cash.
        Revoke approvals for contracts you no longer use. When granting new approvals, consider approving only
        the amount needed rather than unlimited spending. Use Rabby&apos;s transaction simulation to see exactly
        what approvals a transaction is requesting before you sign.
      </p>

      <h2 id="hardware">Hardware Wallet Best Practices</h2>
      <p>
        Buy hardware wallets only from official manufacturer websites (ledger.com, trezor.io). Never buy from
        third-party sellers on Amazon or eBay, as devices may be tampered with. When you receive the device,
        verify the packaging seals are intact. Initialize the device yourself and generate a fresh seed phrase;
        never use a pre-configured device.
      </p>
      <p>
        Always verify transaction details on the hardware wallet screen before confirming. The screen on your
        computer could be compromised, but the hardware wallet screen shows the true transaction. Set a strong
        PIN and consider enabling a passphrase for additional protection. Keep your firmware updated through the
        official companion app.
      </p>

      <h2 id="operational">Operational Security Tips</h2>
      <p>
        Use a dedicated browser or browser profile for crypto activities to isolate your wallet from other
        browsing. Keep your browser extensions minimal, as malicious extensions can interact with your wallet.
        Use separate wallets for different risk levels: a hardware wallet for savings, a hot wallet for DeFi,
        and a burner wallet for interacting with new or unverified contracts.
      </p>
      <p>
        Enable all available security features: biometric authentication on mobile wallets, auto-lock timers,
        and hardware wallet integration for software wallets. Before connecting your wallet to any new dApp,
        research the protocol, check if it has been audited, and start with a small amount. Regularly review
        your wallet activity for any unauthorized transactions.
      </p>
    </LearnPage>
  );
}
