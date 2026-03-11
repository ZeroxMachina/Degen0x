import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use Phantom Wallet: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Step-by-step Phantom wallet guide for ${CURRENT_YEAR}. Learn to set up, swap tokens, stake SOL, manage NFTs, and connect to Solana DeFi applications.`,
};

export default function HowToUsePhantomPage() {
  return (
    <LearnPageLayout
      title="How to Use Phantom Wallet: Complete Beginner's Guide"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="11 min"
      intro="Phantom is the most popular wallet for the Solana ecosystem and now supports Ethereum, Polygon, and Bitcoin. Known for its beautiful design and rich features, Phantom makes DeFi, NFTs, and token swaps accessible to everyone. This guide covers everything you need to know to get started."
      toc={[
        { id: "install", title: "Installing Phantom", level: 2 },
        { id: "setup", title: "Creating Your Wallet", level: 2 },
        { id: "fund", title: "Adding Funds to Phantom", level: 2 },
        { id: "swaps", title: "Swapping Tokens", level: 2 },
        { id: "staking", title: "Staking SOL", level: 2 },
        { id: "nfts", title: "Managing NFTs", level: 2 },
        { id: "security", title: "Security Tips", level: 2 },
      ]}
      faqs={[
        {
          question: "Is Phantom only for Solana?",
          answer: "No. Phantom originally launched for Solana but now supports Ethereum, Polygon, and Bitcoin as well. You can manage assets across all four chains from a single wallet. Solana remains the strongest chain in terms of Phantom's feature set, but multi-chain support is fully functional.",
        },
        {
          question: "How much does Phantom cost?",
          answer: "Phantom is free to download and use. The wallet charges a 0.85% service fee on built-in token swaps. SOL staking through Phantom has no additional wallet fee beyond the validator's commission. Standard Solana network fees (typically under $0.01) apply to transactions.",
        },
        {
          question: "Can I connect Phantom to a hardware wallet?",
          answer: "Yes. Phantom supports Ledger hardware wallet integration. You can use Phantom's interface while keeping your private keys on the Ledger device. This is recommended for users with significant holdings who want Phantom's user experience with hardware-level security.",
        },
      ]}
      relatedArticles={[
        { title: "Phantom Review", href: "/wallets/reviews/phantom", category: "Wallets" },
        { title: "How to Use MetaMask", href: "/wallets/learn/how-to-use-metamask", category: "Wallets" },
        { title: "Seed Phrase Security", href: "/wallets/learn/seed-phrase-security", category: "Wallets" },
      ]}
    >
      <h2 id="install">Installing Phantom</h2>
      <p>
        Phantom is available as a browser extension for Chrome, Firefox, Brave, and Edge, and as a mobile app for iOS and Android. Visit phantom.app to download the official version. Always verify you are on the official Phantom website, as fake versions exist. After installing the browser extension, the Phantom icon will appear in your browser toolbar. On mobile, download from the Apple App Store or Google Play Store.
      </p>

      <h2 id="setup">Creating Your Wallet</h2>
      <p>
        Open Phantom and select &quot;Create a new wallet.&quot; Set a password for local device encryption, then Phantom will display your 12-word Secret Recovery Phrase. Write this phrase down on paper and store it securely offline. Do not store it digitally or share it with anyone. Confirm the phrase to complete setup. Your wallet is now ready with addresses for Solana, Ethereum, Polygon, and Bitcoin. Each chain has its own address format, visible by selecting the respective chain in the wallet.
      </p>

      <h2 id="fund">Adding Funds to Phantom</h2>
      <p>
        To add funds, copy your wallet address for the relevant chain (SOL address for Solana assets, ETH address for Ethereum assets). Send crypto from an exchange like Coinbase, Binance, or Kraken to this address, selecting the correct network. For Solana assets, use the Solana network. Phantom also supports buying crypto directly through integrated on-ramp providers like MoonPay. You will need a small amount of the native token (SOL for Solana, ETH for Ethereum) to pay for transaction fees.
      </p>

      <h2 id="swaps">Swapping Tokens</h2>
      <p>
        Phantom&apos;s built-in swap feature lets you exchange tokens directly within the wallet. On Solana, swaps are powered by Jupiter (the leading Solana DEX aggregator) and execute in under a second with minimal fees. On Ethereum and Polygon, swaps use the 0x aggregator. To swap, select the token you want to sell, choose the token you want to receive, enter the amount, review the rate and fees, and confirm. Phantom charges a 0.85% service fee on swaps, but the convenience and speed make it worthwhile for most users.
      </p>

      <h2 id="staking">Staking SOL</h2>
      <p>
        Phantom makes staking SOL straightforward. Navigate to your SOL balance, tap the staking option, and browse available validators. Each validator shows their commission rate, uptime, and stake amount. Select a validator, enter the amount of SOL to stake, and confirm. Staking rewards accrue each epoch (approximately 2-3 days) and are automatically compounded. You can unstake at any time, though there is a cooldown period of one epoch before your SOL becomes liquid again. Phantom does not charge an additional fee for staking beyond the validator&apos;s commission.
      </p>

      <h2 id="nfts">Managing NFTs</h2>
      <p>
        Phantom displays your NFTs in a gallery view organized by collection. You can view details, send NFTs to other addresses, and see floor price data for supported collections. On Solana, Phantom detects spam NFTs and provides a burn feature that reclaims the rent deposit (the SOL locked when the NFT was created). This burn feature is useful for cleaning up unwanted airdropped NFTs. Phantom supports NFTs across Solana, Ethereum, Polygon, and Bitcoin (Ordinals).
      </p>

      <h2 id="security">Security Tips</h2>
      <p>
        Always download Phantom from the official website or app stores. Enable biometric authentication (Face ID or fingerprint) on mobile. Set a short auto-lock timeout so Phantom locks when you step away. Phantom&apos;s transaction simulation feature previews the outcome of every transaction before you sign it, so pay attention to these previews and reject anything unexpected. Be cautious of dApps that request unusual permissions. For significant holdings, connect a Ledger hardware wallet to Phantom for the best combination of user experience and security.
      </p>
    </LearnPageLayout>
  );
}
