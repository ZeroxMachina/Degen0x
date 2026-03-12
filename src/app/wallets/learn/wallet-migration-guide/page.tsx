import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Migrate Between Crypto Wallets (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to safely migrate your crypto between wallets. Step-by-step guide for importing seed phrases, transferring funds, and switching wallet providers.",
};

export default function WalletMigrationGuidePage() {
  return (
    <LearnPageLayout title="How to Migrate Between Crypto Wallets" categoryName="Crypto Wallets" categorySlug="wallets" readTime="7 min read"
      intro="There are many reasons to migrate between crypto wallets: upgrading to a hardware wallet, switching to a wallet with better features, moving to a different blockchain ecosystem, or consolidating multiple wallets. The migration process varies depending on whether you are importing your existing seed phrase or transferring funds to a completely new wallet. This guide covers both approaches, common pitfalls to avoid, and best practices for a safe migration."
      toc={[
        { id: "migration-methods", title: "migration-methods", level: 2 },
        { id: "migration-methods", title: "Migration Methods", level: 2 },
        { id: "seed-phrase-import", title: "seed-phrase-import", level: 2 },
        { id: "seed-phrase-import", title: "Seed Phrase Import", level: 2 },
        { id: "fund-transfer", title: "fund-transfer", level: 2 },
        { id: "fund-transfer-method", title: "Fund Transfer Method", level: 2 },
        { id: "post-migration", title: "post-migration", level: 2 },
        { id: "post-migration-checklist", title: "Post-Migration Checklist", level: 2 }
      ]}
      faqs={[{ question: "Can I use my MetaMask seed phrase in a Ledger?", answer: "Technically yes, you can import a MetaMask seed phrase into a Ledger device. However, this is not recommended because the seed phrase was generated on an internet-connected device (your browser), meaning it may have been exposed to malware. The security benefit of a hardware wallet comes from keys that have never been online. Generate a fresh seed phrase on the Ledger and transfer your funds to the new address instead." },
        { question: "Will I lose my transaction history when migrating?", answer: "If you import your seed phrase into a new wallet, your full on-chain transaction history remains accessible since it lives on the blockchain. If you transfer funds to a new address, the old address retains its history and the new address starts fresh. Some wallet features like labels, notes, and address book entries may not transfer between different wallet software and must be manually recreated." },
        { question: "How do I handle NFTs during migration?", answer: "NFTs are transferred like any other token. If importing your seed phrase, NFTs appear automatically in the new wallet (assuming it supports the NFT standard). If transferring to a new address, send each NFT individually. Be aware of gas costs, as each NFT transfer is a separate transaction. For large collections, batch transfer tools can help, but verify them thoroughly before granting approval." }]}
      relatedArticles={[{ title: "Choosing Your First Wallet", href: "/wallets/learn/choosing-first-wallet", category: "Wallets" }, { title: "Hardware Wallet Setup", href: "/wallets/learn/hardware-wallet-setup", category: "Wallets" }, { title: "Wallet Address Formats", href: "/wallets/learn/wallet-address-formats", category: "Wallets" }, { title: "Wallet Security", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" }]}
    >
      <section id="migration-methods">
        <h2>Migration Methods</h2>
        <p>There are two primary migration methods. Seed phrase import creates an identical wallet in the new software, maintaining your existing addresses and access to all associated accounts. Fund transfer involves creating a new wallet with a fresh seed phrase and sending your assets from the old wallet to the new one. Each method has distinct advantages and trade-offs related to security, complexity, and cost.</p>
        <p>Seed phrase import is free, instant, and preserves your addresses, but it does not improve your security posture since the same keys are being reused. Fund transfer creates a completely fresh set of keys, which is more secure especially when upgrading from a software wallet to hardware wallet, but it costs gas fees for each transfer transaction. Choose your method based on whether you need improved security or just a different interface.</p>
      </section>

      <section id="seed-phrase-import">
        <h2>Seed Phrase Import</h2>
        <p>To import via seed phrase, install the new wallet software and select the option to import or restore an existing wallet. Enter your seed phrase words in the exact order. The new wallet will derive the same addresses and display your existing balances. Note that different wallets may use different derivation paths, which means some accounts might not appear automatically. You may need to manually add additional accounts or adjust derivation path settings.</p>
        <p>Common derivation path issues: MetaMask and most EVM wallets use m/44&apos;/60&apos;/0&apos;/0. Ledger Live uses a slightly different path. Bitcoin wallets vary between legacy, SegWit, and Native SegWit derivation paths. If your balances do not appear after importing, check the derivation path settings. Some wallets let you choose during import, while others require advanced configuration. Solana wallets generally use m/44&apos;/501&apos;/0&apos;/0 but Phantom may derive multiple accounts differently.</p>
      </section>

      <section id="fund-transfer">
        <h2>Fund Transfer Method</h2>
        <p>For maximum security, create a completely new wallet with a fresh seed phrase and transfer funds. First, set up the new wallet and verify your seed phrase backup. Then, send a small test amount from the old wallet to the new address. After confirming receipt, transfer the remaining assets. For ERC-20 tokens, each token transfer is a separate transaction. Use a portfolio tracker or block explorer to ensure nothing is left behind in the old wallet.</p>
        <p>Gas costs for fund transfers can add up quickly, especially on Ethereum mainnet with many different tokens. Consider timing transfers during low gas periods (typically weekends and early morning UTC). For small token balances, the gas cost to transfer may exceed the token value, so you may choose to leave dust amounts behind. On L2s and other chains with low fees, the transfer cost is negligible, making the fund transfer method more practical.</p>
      </section>

      <section id="post-migration">
        <h2>Post-Migration Checklist</h2>
        <p>After migration, verify all balances in the new wallet across every chain you use. Check that NFTs transferred correctly by viewing them in the new wallet or on a marketplace. Update any saved addresses in exchanges, contacts, or recurring payment services to your new address if applicable. If you used the fund transfer method, revoke all token approvals on the old address using Revoke.cash since the old address no longer holds funds but may still have active approvals.</p>
        <p>Securely back up your new wallet&apos;s seed phrase if you created a fresh one. Test receiving and sending small amounts to confirm everything works correctly. Update bookmarked dApps to connect with your new wallet. If you imported your seed phrase, consider whether the old wallet software still has cached key data and clear it if possible. Keep your old wallet software installed briefly as a fallback until you are fully confident the migration was successful.</p>
      </section>
    </LearnPageLayout>
  );
}
