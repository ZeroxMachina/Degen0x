import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Cold Storage? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what cold storage means in cryptocurrency, different cold storage methods, and best practices for securing digital assets offline.",
  keywords: ["cold storage", "cold storage crypto", "offline wallet", "crypto cold storage", "hardware wallet storage"],
};

export default function ColdStoragePage() {
  return (
    <LearnPageLayout title="What Is Cold Storage?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="Cold storage refers to keeping cryptocurrency private keys completely offline, disconnected from the internet. By removing internet connectivity, cold storage eliminates the primary attack vector for cryptocurrency theft — remote hacking. Cold storage is considered the most secure method for holding cryptocurrency long-term."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "methods", title: "Cold Storage Methods", level: 2 },{ id: "best-practices", title: "Best Practices", level: 2 }]}
      faqs={[
        { question: "What is the difference between cold storage and a cold wallet?", answer: "The terms are often used interchangeably. Cold storage is the broader concept of keeping keys offline. A cold wallet is a specific device or method used for cold storage. Hardware wallets are the most common cold wallet type, but air-gapped computers, paper wallets, and metal seed backups are also forms of cold storage." },
        { question: "Is cold storage necessary?", answer: "For significant cryptocurrency holdings, cold storage is strongly recommended. Hot wallets (connected to the internet) are convenient for daily use but vulnerable to malware, phishing, and remote attacks. Cold storage eliminates these risks for long-term holdings while hot wallets can hold smaller amounts for active use." },
      ]}
      relatedArticles={[
        { title: "Hot Wallet", href: "/learn/glossary/hot-wallet", category: "Glossary" },
        { title: "Self-Custody Guide", href: "/learn/self-custody-guide", category: "Learn" },
        { title: "How to Use a Hardware Wallet", href: "/learn/how-to-use-hardware-wallet", category: "Learn" },
        { title: "Private Key", href: "/learn/glossary/private-key", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Cold storage is any method of storing cryptocurrency private keys in a way that is not connected to the internet. Since blockchain assets are controlled entirely by private keys, keeping those keys offline prevents remote attackers from accessing them regardless of how sophisticated their attack methods are. Cold storage is the standard security practice for exchanges, custodians, and individuals holding significant cryptocurrency value.</p></section>
      <section id="methods"><h2>Cold Storage Methods</h2><p>Hardware wallets (Ledger, Trezor) are the most practical cold storage solution, storing keys on dedicated secure chips that connect to computers only for transaction signing. Air-gapped computers that have never connected to the internet can generate and store keys with maximum isolation. Paper wallets print keys on physical paper. Metal seed phrase backups (stamped steel plates) provide fire and water-resistant storage of recovery phrases. Each method offers different trade-offs between security, convenience, and durability.</p></section>
      <section id="best-practices"><h2>Best Practices</h2><p>Use cold storage for any cryptocurrency holdings you are not actively trading. Maintain multiple backups of recovery information in separate secure physical locations. Test your recovery process before relying on cold storage for significant funds. Keep hardware wallet firmware updated through the official manufacturer's software. Consider using a passphrase (25th word) for an additional security layer on hardware wallets. The combination of cold storage for long-term holdings and a hot wallet with limited funds for daily use provides both security and convenience.</p></section>
    </LearnPageLayout>
  );
}
