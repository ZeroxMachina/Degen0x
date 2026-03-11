import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cold Storage Best Practices for Long-Term Holders (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Complete guide to cold storage for cryptocurrency. Hardware wallets, seed phrase security, multisig setups, and best practices for long-term holders.",
};

export default function ColdStorageGuidePage() {
  return (
    <LearnPageLayout title="Cold Storage Best Practices for Long-Term Holders" categoryName="Long-Term Strategies" categorySlug="long-term" readTime="9 min read"
      intro="Cold storage means keeping your cryptocurrency private keys completely offline, disconnected from the internet. For long-term holders, cold storage is the gold standard of security because it eliminates the risk of remote hacking, phishing, and exchange failures. Proper cold storage setup requires careful attention to key generation, backup procedures, and physical security to ensure your crypto remains accessible for years or decades."
      toc={[
        { id: "hardware-wallets", title: "Hardware Wallet Selection", level: 2 },
        { id: "seed-phrase", title: "Seed Phrase Security", level: 2 },
        { id: "multisig", title: "Multisignature Setups", level: 2 },
        { id: "maintenance", title: "Ongoing Maintenance", level: 2 },
      ]}
      faqs={[
        { question: "What is the best hardware wallet?", answer: "Ledger and Trezor are the two most established hardware wallet manufacturers. Ledger uses a secure element chip and supports a wide range of assets. Trezor is fully open-source. Both are excellent choices. For large holdings, consider using devices from different manufacturers in a multisig setup to avoid single-vendor risk." },
        { question: "How should I store my seed phrase?", answer: "Write your seed phrase on metal (steel or titanium plates) rather than paper, as metal survives fire and flood. Store copies in multiple secure, geographically separated locations such as bank safe deposit boxes and home safes. Never store seed phrases digitally: no photos, no cloud storage, no text files, no password managers." },
        { question: "What happens if my hardware wallet breaks?", answer: "Your crypto is not stored on the device. The hardware wallet is just a tool for signing transactions using your private keys. As long as you have your seed phrase, you can restore your wallet on a new device of the same type or even a different manufacturer that supports the same seed phrase standard (BIP39). The device is replaceable; the seed phrase is not." },
      ]}
      relatedArticles={[
        { title: "Generational Wealth with Crypto", href: "/long-term/learn/generational-wealth-crypto", category: "Long-Term" },
        { title: "Crypto Inheritance Planning", href: "/long-term/learn/crypto-inheritance-planning", category: "Long-Term" },
        { title: "Accumulation Strategies", href: "/long-term/learn/accumulation-strategies", category: "Long-Term" },
      ]}
    >
      <h2 id="hardware-wallets">Hardware Wallet Selection</h2>
      <p>A hardware wallet is a dedicated device that stores your private keys offline and signs transactions without ever exposing the keys to a connected computer. The two leading manufacturers are Ledger and Trezor. Ledger devices (Nano S Plus, Nano X, Stax) use a certified secure element chip similar to those in credit cards and passports. This chip is designed to be tamper-resistant and protects keys even if the device is physically compromised. Trezor devices (Model One, Model T, Safe 3) are fully open-source, meaning the firmware and hardware designs can be independently verified. Both support Bitcoin, Ethereum, and hundreds of other assets. For maximum security, purchase hardware wallets directly from the manufacturer, never from third-party sellers who might tamper with the device. When you receive the device, verify it is sealed and uninitialized. Generate your seed phrase on the device itself, never using a seed phrase that came pre-written. The device should generate the seed phrase randomly during initial setup.</p>

      <h2 id="seed-phrase">Seed Phrase Security</h2>
      <p>Your seed phrase (typically 12 or 24 words) is the master key to your cryptocurrency. Anyone with your seed phrase can access and steal all your funds. Protecting it is the single most important aspect of cold storage. Write the seed phrase on durable material: steel or titanium seed phrase plates (Cryptosteel, Billfodl, or similar products) survive fire up to 1500 degrees Celsius and are waterproof. Paper degrades, burns, and can be destroyed by water. Create multiple copies stored in different geographic locations. A common setup is one copy in a home safe and another in a bank safe deposit box. For large holdings, consider distributing copies across multiple cities or properties. Never store your seed phrase digitally in any form. Photographs, cloud documents, password managers, and encrypted files are all vulnerable to hacking. The entire point of cold storage is keeping keys offline. Consider using a passphrase (sometimes called the 25th word) as an additional layer of security. The passphrase creates a completely different wallet, so even if someone finds your seed phrase, they cannot access your funds without the passphrase.</p>

      <h2 id="multisig">Multisignature Setups</h2>
      <p>Multisignature (multisig) wallets require multiple private keys to authorize a transaction, eliminating single points of failure. A common configuration is two-of-three: three keys exist, and any two are needed to sign a transaction. Store each key in a different location (home safe, bank safe deposit box, trusted family member or attorney). If one key is lost, stolen, or destroyed, the remaining two can still access the funds and create a new multisig setup. For Bitcoin, native multisig is well-supported through tools like Sparrow Wallet, Electrum, and Unchained Capital. For Ethereum, Gnosis Safe (now Safe) provides smart contract-based multisig. Using hardware wallets from different manufacturers for each key (one Ledger, one Trezor, one Coldcard) protects against a vulnerability in any single device. Multisig adds complexity: every transaction requires coordination between multiple devices. For long-term holdings that are rarely moved, this trade-off strongly favors security over convenience.</p>

      <h2 id="maintenance">Ongoing Maintenance</h2>
      <p>Cold storage is not a set-and-forget solution. Schedule annual reviews of your security setup. Verify that all seed phrase backups are intact and readable. Check that hardware wallet firmware is updated (updates often include security patches). Test that you can still access your wallets by connecting the device and verifying your balances. Replace hardware wallets every three to five years or when the manufacturer discontinues support. Technology evolves, and older devices may become incompatible with newer wallet software or blockchain standards. When you replace a device, verify the new device generates the same addresses from your existing seed phrase before retiring the old device. Monitor security news related to your hardware wallet manufacturer. If a significant vulnerability is discovered, assess whether your setup is affected and take appropriate action. Keep your recovery instructions updated, especially if you change storage locations, add new wallets, or modify your multisig configuration. The goal is ensuring that your crypto remains securely accessible not just today but decades from now.</p>
    </LearnPageLayout>
  );
}
