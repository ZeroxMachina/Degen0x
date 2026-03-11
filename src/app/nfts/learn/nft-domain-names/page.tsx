import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Domain Names: ENS, Unstoppable Domains (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about NFT domain names including ENS and Unstoppable Domains. Understand how blockchain domains work, their uses, and how to register your own Web3 identity.",
};

export default function NftDomainNamesPage() {
  return (
    <LearnPageLayout
      title="NFT Domain Names: ENS, Unstoppable Domains"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="9 min"
      intro="NFT domain names are blockchain-based identifiers that replace complex wallet addresses with human-readable names. Instead of sharing a 42-character Ethereum address, you can share 'yourname.eth' or 'yourname.crypto'. These domains function as NFTs that you truly own, without renewal fees from centralized registrars. This guide covers the major NFT domain providers, practical uses, and how to register your own Web3 identity."
      toc={[
        { id: "how-they-work", title: "How NFT Domains Work", level: 2 },
        { id: "ens-domains", title: "Ethereum Name Service (ENS)", level: 2 },
        { id: "unstoppable-domains", title: "Unstoppable Domains", level: 2 },
        { id: "use-cases", title: "Practical Use Cases", level: 2 },
        { id: "registration-guide", title: "How to Register a Domain", level: 2 },
      ]}
      faqs={[
        { question: "Do NFT domains replace traditional domains?", answer: "Not currently. NFT domains like .eth and .crypto do not resolve in standard web browsers without extensions. They primarily serve as wallet identifiers and Web3 identity. Some NFT domains can be linked to traditional websites through IPFS, but for standard web presence, traditional domains remain necessary." },
        { question: "Are ENS domains a good investment?", answer: "Short, memorable ENS names have sold for significant amounts. However, domain name investing is speculative and most names have little resale value. Popular three-letter, single-word, and number-based domains tend to hold value. As with any speculative investment, only invest what you can afford to lose." },
        { question: "Do I need to renew ENS domains?", answer: "Yes, ENS domains require annual renewal fees paid in ETH. The cost is approximately $5/year for names of five characters or more. Shorter names cost more. If you do not renew, the name returns to available registration after a grace period. Unstoppable Domains, by contrast, require a one-time purchase with no renewals." },
      ]}
      relatedArticles={[
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
        { title: "NFT Security Tips", href: "/nfts/learn/nft-security-tips", category: "NFTs" },
      ]}
    >
      <h2 id="how-they-work">How NFT Domains Work</h2>
      <p>NFT domains are stored on blockchains as non-fungible tokens that you own in your wallet. When someone sends crypto to your domain name, the blockchain resolves the human-readable name to your actual wallet address, similar to how DNS resolves website names to IP addresses. Because the domain is an NFT, you control it through your wallet without relying on any central authority. You can transfer, sell, or configure it freely. The domain can point to multiple wallet addresses across different blockchains, serve as a decentralized website address via IPFS, and function as your universal Web3 identity.</p>

      <h2 id="ens-domains">Ethereum Name Service (ENS)</h2>
      <p>ENS is the largest and most established NFT domain system, running on Ethereum. ENS domains end in .eth and are recognized by virtually every Ethereum wallet, dApp, and NFT marketplace. Registration costs vary by name length: five characters or more cost approximately $5/year, four characters cost $160/year, and three characters cost $640/year. ENS is governed by a DAO, and the ENS token provides governance rights. ENS domains can resolve to Ethereum addresses, content hashes for decentralized websites, text records for social profiles, and addresses on other blockchains. Major wallets like MetaMask, Rainbow, and Coinbase Wallet all support ENS natively.</p>

      <h2 id="unstoppable-domains">Unstoppable Domains</h2>
      <p>Unstoppable Domains offers NFT domains with extensions like .crypto, .nft, .wallet, .blockchain, and .x. The key difference from ENS is the pricing model: Unstoppable Domains charges a one-time purchase fee with no renewals ever. Once you buy a domain, you own it permanently. Domains are minted on Polygon, making gas costs minimal. Unstoppable Domains has partnered with hundreds of wallets and apps for native resolution support. The platform also offers a browser extension for accessing .crypto websites. Pricing starts at around $5-40 for standard names, with premium names priced higher.</p>

      <h2 id="use-cases">Practical Use Cases</h2>
      <p>The primary use case is simplifying crypto payments. Sharing yourname.eth is far easier than sharing a 42-character address and eliminates costly copy-paste errors. Web3 identity is another major use: your ENS or Unstoppable domain becomes your username across DeFi protocols, NFT marketplaces, and Web3 social platforms. Decentralized websites hosted on IPFS can be accessed through NFT domains, creating censorship-resistant web presence. Some domains serve as digital identity for professional profiles, linking to verifiable credentials and work history on-chain. Businesses use branded NFT domains for customer-facing crypto payments.</p>

      <h2 id="registration-guide">How to Register a Domain</h2>
      <p>For ENS, visit app.ens.domains, connect your Ethereum wallet, search for your desired name, and register. You will pay the registration fee plus Ethereum gas costs. Choose a registration period of 1-5 years. After registration, set your domain to resolve to your wallet address. For Unstoppable Domains, visit unstoppabledomains.com, browse available names, and purchase with crypto or credit card. The domain is minted to your wallet on Polygon. Configure your domain to point to your wallet addresses across supported blockchains. Both providers offer detailed setup guides in their documentation.</p>
    </LearnPageLayout>
  );
}
