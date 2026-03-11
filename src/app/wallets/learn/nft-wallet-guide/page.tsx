import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best NFT Wallets Guide (${CURRENT_YEAR}) - Store & Manage NFTs | ${SITE_NAME}`,
  description: `Complete guide to NFT wallets in ${CURRENT_YEAR}. Best wallets for storing, viewing, and managing NFTs. Security tips for protecting your digital collectibles.`,
  alternates: { canonical: "/wallets/learn/nft-wallet-guide" },
};

const toc = [
  { id: "what-is-nft-wallet", title: "What Is an NFT Wallet?", level: 2 },
  { id: "best-nft-wallets", title: "Best Wallets for NFTs", level: 2 },
  { id: "nft-security", title: "NFT Security Essentials", level: 2 },
  { id: "managing-nfts", title: "Managing Your NFT Collection", level: 2 },
  { id: "common-scams", title: "Avoiding NFT Scams", level: 2 },
];

const faqs = [
  { question: "What is the best wallet for NFTs?", answer: "MetaMask is the most widely supported NFT wallet for Ethereum and EVM chains, compatible with all major marketplaces. Phantom is excellent for Solana NFTs with a beautiful gallery view. For maximum security, use a Ledger hardware wallet connected to MetaMask or Phantom. Rabby also provides good NFT viewing and multi-chain support. Choose based on which blockchain your NFTs are on." },
  { question: "Can I store NFTs on a hardware wallet?", answer: "Yes. NFTs are blockchain tokens just like cryptocurrencies, and hardware wallets can hold them. Connect your Ledger or Trezor to MetaMask to view, send, and receive NFTs while keeping your keys on the hardware device. This is the recommended approach for valuable NFT collections. The NFTs will not display on the hardware device itself but are secure through key storage." },
  { question: "Are my NFTs safe in MetaMask?", answer: "MetaMask is a hot wallet, meaning your keys are stored on your internet-connected device. While MetaMask itself is secure, your NFTs are vulnerable to phishing attacks, malicious approvals, and device compromise. For valuable NFTs, transfer them to a hardware wallet. For daily use NFTs (profile pictures, gaming assets), MetaMask with careful security practices is reasonable." },
  { question: "What happens to my NFTs if I lose my wallet?", answer: "Your NFTs exist on the blockchain, not in your wallet. If you lose your device but have your seed phrase, you can restore your wallet on a new device and your NFTs will be there. If you lose both your device and seed phrase, the NFTs are permanently inaccessible. This is why backing up your seed phrase is critical for NFT collectors as well." },
  { question: "Can someone steal my NFTs?", answer: "Yes, through several methods: phishing sites that trick you into signing malicious transactions, malicious NFT approval requests, compromised seed phrases, and social engineering. The most common NFT theft occurs through fake marketplace links that request wallet approvals. Always verify URLs, never sign transactions you do not understand, and use a separate wallet for minting from unknown projects." },
];

const relatedArticles = [
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
  { title: "DeFi Wallet Guide", href: "/wallets/learn/defi-wallet-guide", category: "Wallets" },
  { title: "Wallet Security Best Practices", href: "/wallets/learn/wallet-security-best-practices", category: "Wallets" },
];

export default function NftWalletGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Wallet Guide: Storing and Managing Digital Collectibles"
      categoryName="Crypto Wallets"
      categorySlug="wallets"
      readTime="8 min"
      intro="NFTs require the same wallet security as any crypto asset, plus additional considerations around display, marketplace compatibility, and the unique scam vectors that target NFT collectors. Whether you hold a single profile picture or a large collection, choosing the right wallet and following proper security practices protects your digital assets from theft and loss."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-is-nft-wallet">What Is an NFT Wallet?</h2>
      <p>
        An NFT wallet is any crypto wallet that supports the token standards used for NFTs. On
        Ethereum and EVM chains, NFTs use the ERC-721 and ERC-1155 standards. On Solana, they use
        the Metaplex standard. Most modern crypto wallets support NFTs natively, displaying your
        collection with images, metadata, and marketplace links. There is no special NFT-only
        wallet type; the same wallet that holds your ETH or SOL also holds your NFTs.
      </p>
      <p>
        What differentiates wallets for NFT users is the viewing experience, marketplace
        compatibility, and security features specific to NFT transactions. A good NFT wallet
        displays your collection in a visual gallery, integrates with major marketplaces like
        OpenSea and Magic Eden, and provides clear warnings about the approval requests that
        NFT transactions commonly require. These NFT-specific features enhance the collecting
        and trading experience.
      </p>

      <h2 id="best-nft-wallets">Best Wallets for NFTs</h2>
      <p>
        MetaMask is the most universally compatible wallet for Ethereum NFTs. Every major
        marketplace and minting site supports MetaMask connection. It displays NFTs in a
        dedicated gallery tab and supports all EVM chains where NFTs exist. For Solana NFTs,
        Phantom provides the best experience with a beautiful collection view, integrated
        marketplace features, and fast transaction confirmations that Solana&apos;s speed enables.
      </p>
      <p>
        Rabby Wallet offers strong NFT support with its transaction simulation feature, which is
        especially valuable for NFT minting where unexpected costs or malicious contracts are
        common. For maximum security, connect any of these software wallets to a Ledger hardware
        wallet. Your NFTs are controlled by the hardware device while you use the software
        wallet&apos;s superior display and interaction features. This combination offers the best of
        both worlds for serious NFT collectors.
      </p>

      <h2 id="nft-security">NFT Security Essentials</h2>
      <p>
        The most critical NFT security practice is using a vault wallet. Keep your most valuable
        NFTs in a hardware wallet that you rarely connect to any dApp. Use a separate hot wallet
        for minting, trading, and interacting with new projects. If the hot wallet is compromised,
        your vault NFTs remain safe. Transfer NFTs to your vault after purchase and only move them
        to your hot wallet when you intend to sell or trade.
      </p>
      <p>
        Be extremely cautious with approval requests. NFT marketplaces require you to approve
        the marketplace contract to transfer your NFTs on your behalf (setApprovalForAll). Only
        grant these approvals to verified, legitimate marketplaces. Revoke approvals after
        completing trades. Fake marketplace sites that request approvals are the most common
        vector for NFT theft. Always verify the contract address you are approving against
        the official marketplace documentation.
      </p>

      <h2 id="managing-nfts">Managing Your NFT Collection</h2>
      <p>
        Organize your NFTs across wallets based on purpose and value. High-value NFTs go to your
        vault (hardware wallet). Active trading inventory stays in your hot wallet. NFTs you use
        as profile pictures or in games might live in a dedicated social wallet. This organization
        makes it easier to manage risk and know where each asset is.
      </p>
      <p>
        Track your NFT portfolio using tools that aggregate holdings across multiple wallets and
        chains. Platforms like NFTGo, Dew, and individual marketplace portfolios show floor prices,
        rarity rankings, and collection trends. Some wallets provide built-in portfolio tracking.
        For tax purposes, keep records of acquisition dates and prices for every NFT, as sales
        may trigger capital gains depending on your jurisdiction.
      </p>

      <h2 id="common-scams">Avoiding NFT Scams</h2>
      <p>
        Never click links in unsolicited DMs on Discord, Twitter, or other platforms. Fake mint
        sites are the most common NFT scam: they mimic legitimate project websites and trick
        you into signing malicious transactions. Always navigate to project sites through official
        channels (verified Twitter accounts, official Discord announcements) rather than links
        shared by strangers. Bookmark legitimate marketplace URLs and use bookmarks instead of
        search results.
      </p>
      <p>
        Be wary of random NFTs that appear in your wallet. Scammers send malicious NFTs that,
        when you try to sell or interact with them, trigger approval requests that drain your
        wallet. Do not interact with NFTs you did not purchase or mint yourself. Hide them in
        your wallet&apos;s interface and ignore them. If an unexpected NFT links to a website or
        promises free rewards, it is almost certainly a scam designed to compromise your wallet
        through a fraudulent transaction approval.
      </p>
    </LearnPageLayout>
  );
}
