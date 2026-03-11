import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy NFTs: Step-by-Step Guide for Beginners (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to buy NFTs step by step. From setting up a wallet and choosing a marketplace to making your first purchase, this guide covers everything beginners need to know.",
};

export default function HowToBuyNftsPage() {
  return (
    <LearnPageLayout
      title="How to Buy NFTs: Step-by-Step Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="11 min"
      intro="Buying your first NFT can feel intimidating with unfamiliar wallets, gas fees, and dozens of marketplaces to choose from. But the process is straightforward once you understand the steps. This guide walks you through everything from setting up a crypto wallet to making your first purchase and storing your NFT safely."
      toc={[
        { id: "what-you-need", title: "What You Need Before Buying", level: 2 },
        { id: "set-up-wallet", title: "Step 1: Set Up a Crypto Wallet", level: 2 },
        { id: "fund-wallet", title: "Step 2: Fund Your Wallet", level: 2 },
        { id: "choose-marketplace", title: "Step 3: Choose an NFT Marketplace", level: 2 },
        { id: "find-nft", title: "Step 4: Find and Evaluate NFTs", level: 2 },
        { id: "make-purchase", title: "Step 5: Make Your Purchase", level: 2 },
        { id: "after-purchase", title: "What to Do After Buying", level: 2 },
      ]}
      faqs={[
        {
          question: "How much does it cost to buy an NFT?",
          answer:
            "NFT prices range from free (free mints) to millions of dollars. You can find quality NFTs for under $50 on chains like Solana and Polygon. On Ethereum, you also need to budget for gas fees, which can range from $2 to $50 depending on network congestion.",
        },
        {
          question: "Can I buy NFTs with a credit card?",
          answer:
            "Some marketplaces like OpenSea and Magic Eden now support credit card purchases through payment processors like MoonPay. This allows you to skip the crypto wallet setup for simple purchases, though fees are typically higher than buying with crypto directly.",
        },
        {
          question: "What is the safest way to buy NFTs?",
          answer:
            "Buy from verified collections on established marketplaces, use a hardware wallet for large purchases, double-check contract addresses before approving transactions, and never click links from unsolicited messages or emails.",
        },
        {
          question: "Can I resell an NFT after buying it?",
          answer:
            "Yes, you can list your NFT for sale on any compatible marketplace at any time. You set your own price or use an auction format. Keep in mind that marketplace fees and creator royalties will be deducted from the sale price.",
        },
        {
          question: "What are gas fees and why do I need to pay them?",
          answer:
            "Gas fees are transaction costs paid to blockchain validators for processing your transaction. On Ethereum, gas fees fluctuate based on network demand and can range from a few dollars to over $50. Lower-cost chains like Solana and Polygon have fees under $0.01.",
        },
      ]}
      relatedArticles={[
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
        { title: "NFT Security Best Practices", href: "/nfts/learn/nft-security-tips", category: "NFTs" },
        { title: "Best NFT Marketplaces", href: "/nfts/best", category: "NFTs" },
      ]}
    >
      <h2 id="what-you-need">What You Need Before Buying</h2>
      <p>
        Before purchasing your first NFT, you need three things: a crypto wallet compatible with the
        blockchain your target NFT lives on, enough cryptocurrency to cover the purchase price plus
        transaction fees, and access to a marketplace that lists the NFT you want. Most beginners start
        with Ethereum-based NFTs using MetaMask, or Solana NFTs using Phantom wallet.
      </p>
      <p>
        Decide on your budget before you start browsing. It is easy to get caught up in the excitement
        and overspend. Factor in gas fees, which on Ethereum can add $5 to $50 to each transaction. On
        Solana or Polygon, transaction fees are negligible at under a cent.
      </p>

      <h2 id="set-up-wallet">Step 1: Set Up a Crypto Wallet</h2>
      <p>
        For Ethereum NFTs, install MetaMask as a browser extension or mobile app. Create a new wallet,
        and you will receive a 12-word seed phrase. Write this phrase down on paper and store it somewhere
        safe. Never share your seed phrase with anyone, and never store it digitally where it could be
        compromised by malware or data breaches.
      </p>
      <p>
        For Solana NFTs, Phantom wallet is the standard choice. For multi-chain flexibility, Coinbase
        Wallet supports Ethereum, Polygon, Solana, and other networks. If you plan to hold valuable NFTs
        long-term, consider investing in a hardware wallet like Ledger, which stores your private keys
        offline for maximum security.
      </p>

      <h2 id="fund-wallet">Step 2: Fund Your Wallet</h2>
      <p>
        You need cryptocurrency in your wallet to buy NFTs and pay transaction fees. The easiest method
        is to buy crypto on an exchange like Coinbase or Kraken, then transfer it to your wallet address.
        For Ethereum NFTs, you need ETH. For Solana NFTs, you need SOL. For Polygon NFTs, you need MATIC.
      </p>
      <p>
        Some wallets allow you to buy crypto directly within the app using a debit card, though fees are
        usually higher than buying on an exchange first. When transferring, always send a small test
        transaction first to make sure you have the correct address. Crypto transfers are irreversible,
        so a mistake means permanent loss.
      </p>

      <h2 id="choose-marketplace">Step 3: Choose an NFT Marketplace</h2>
      <p>
        OpenSea is the largest general marketplace and supports multiple blockchains, making it ideal for
        beginners. Blur is preferred by active Ethereum traders for its zero fees and professional tools.
        Magic Eden dominates Solana and Bitcoin Ordinals trading. For curated digital art, Foundation and
        SuperRare offer gallery-quality experiences.
      </p>
      <p>
        Connect your wallet to the marketplace by clicking the wallet icon and selecting your wallet
        provider. The marketplace will request permission to view your wallet address, which is safe to
        approve. Never approve transactions you did not initiate, and always verify you are on the
        official marketplace URL.
      </p>

      <h2 id="find-nft">Step 4: Find and Evaluate NFTs</h2>
      <p>
        Browse trending collections, explore categories that interest you, or search for specific projects
        you have researched. Before buying, evaluate the project by checking the team behind it, the size
        and activity of the community, the trading volume and price history, and the utility or roadmap
        offered to holders.
      </p>
      <p>
        Look at the floor price (the cheapest available NFT in a collection) and recent sales to understand
        fair market value. Check trait rarity if the collection has varying attributes, as rare traits
        often command premium prices. Be cautious of collections with very low volume or sudden price
        spikes, as these can indicate manipulation.
      </p>

      <h2 id="make-purchase">Step 5: Make Your Purchase</h2>
      <p>
        Once you have found an NFT you want, you have several options. For fixed-price listings, click
        the buy button and confirm the transaction in your wallet. You will see the total cost including
        gas fees before you approve. For auction-style listings, place a bid and wait for the auction to
        end. You can also make offers on items that are not currently listed for sale.
      </p>
      <p>
        When your wallet popup appears, carefully review the transaction details. Verify the contract
        address matches the official collection, check the total cost, and confirm the gas fee is
        reasonable. If gas fees are unusually high, consider waiting for a less congested time, typically
        late night or early morning in US time zones for Ethereum.
      </p>

      <h2 id="after-purchase">What to Do After Buying</h2>
      <p>
        After your purchase completes, the NFT will appear in your wallet and on your marketplace profile.
        If you plan to hold it long-term, consider transferring it to a hardware wallet for enhanced
        security. Join the project&apos;s Discord and Twitter communities to stay updated on developments,
        upcoming events, and potential airdrops for holders.
      </p>
      <p>
        Keep records of your purchase price, date, and transaction hash for tax purposes. In most
        jurisdictions, selling an NFT for more than you paid triggers capital gains tax. Track your NFT
        portfolio using tools like NFTBank or DeBank to monitor the value of your holdings over time.
      </p>
    </LearnPageLayout>
  );
}
