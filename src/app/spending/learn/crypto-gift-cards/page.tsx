import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Buying Gift Cards with Crypto (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how to buy gift cards with Bitcoin and other cryptocurrencies. Compare platforms like Bitrefill, Fold, and CoinGate for the best deals and cashback rewards.",
};

export default function CryptoGiftCardsPage() {
  return (
    <LearnPageLayout
      title="Buying Gift Cards with Crypto"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Gift cards are one of the most popular and practical ways to spend cryptocurrency. Platforms like Bitrefill, Fold, and CoinGate let you convert BTC, ETH, and other cryptocurrencies into gift cards for hundreds of retailers including Amazon, Walmart, Target, and Uber. Many offer cashback in crypto, making it a rewarding way to spend your digital assets on everyday purchases."
      toc={[
        { id: "top-platforms", title: "top-platforms", level: 2 },
        { id: "top-gift-card-platforms", title: "Top Gift Card Platforms", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-buying-gift-cards-works", title: "How Buying Gift Cards Works", level: 2 },
        { id: "supported-retailers", title: "supported-retailers", level: 2 },
        { id: "supported-retailers-and-brands", title: "Supported Retailers and Brands", level: 2 },
        { id: "cashback-rewards", title: "cashback-rewards", level: 2 },
        { id: "cashback-and-rewards", title: "Cashback and Rewards", level: 2 },
        { id: "tips-best-deals", title: "tips-best-deals", level: 2 },
        { id: "tips-for-getting-the-best-deals", title: "Tips for Getting the Best Deals", level: 2 }
      ]}
      faqs={[
        { question: "Which platform has the most gift card options?", answer: "Bitrefill offers the widest selection with gift cards for over 4,000 businesses across 170+ countries. CoinGate and Coinsbee also have extensive catalogs. The selection varies by country, so check which retailers are available in your region before choosing a platform." },
        { question: "Can I get a refund on a crypto gift card?", answer: "Most crypto gift card purchases are non-refundable once the code is delivered. Since blockchain transactions are irreversible, platforms cannot reverse the crypto payment. Always double-check the amount and retailer before confirming your purchase." },
        { question: "Are there discounts when buying gift cards with crypto?", answer: "Some platforms offer regular discounts of 1-5% on select gift cards. Fold offers Bitcoin cashback on every gift card purchase through its rewards wheel. Bitrefill occasionally runs promotions with bonus sats on Lightning payments." },
      ]}
      relatedArticles={[
        { title: "How to Spend Bitcoin", href: "/spending/learn/how-to-spend-bitcoin", category: "Spending" },
        { title: "Earning Crypto Cashback", href: "/spending/learn/crypto-cashback-guide", category: "Spending" },
        { title: "Online Shopping with Crypto", href: "/spending/learn/crypto-shopping-guide", category: "Spending" },
      ]}
    >
      <h2 id="top-platforms">Top Gift Card Platforms</h2>
      <p>Bitrefill is the market leader for crypto gift cards, supporting Bitcoin, Ethereum, Litecoin, and Lightning Network payments across 4,000+ brands in 170+ countries. Fold combines gift card purchases with a gamified Bitcoin rewards system where every purchase gives you a spin to earn between 0.5% and 100% back in BTC. CoinGate offers gift cards alongside its merchant payment processing, supporting over 70 cryptocurrencies. Coinsbee provides a European-focused catalog with strong coverage for EU retailers and supports dozens of altcoins.</p>

      <h2 id="how-it-works">How Buying Gift Cards Works</h2>
      <p>The process is straightforward across all major platforms. Browse or search for the retailer you want, then select the gift card denomination, typically ranging from $10 to $500. Choose your payment cryptocurrency and complete the transaction. For Lightning Network payments, the gift card code is delivered almost instantly. For on-chain Bitcoin payments, delivery usually takes one to three block confirmations, roughly 10-30 minutes. You receive a digital code that you redeem on the retailer website or app just like any other gift card.</p>

      <h2 id="supported-retailers">Supported Retailers and Brands</h2>
      <p>The range of available gift cards covers virtually every spending category. For general shopping, Amazon, Walmart, Target, and eBay are all available. Dining options include DoorDash, Uber Eats, Grubhub, and Starbucks. Travel cards cover Airbnb, Hotels.com, Southwest Airlines, and Uber. Entertainment spans Netflix, Spotify, Steam, PlayStation, and Xbox. For everyday essentials, you can find cards for Home Depot, CVS, and major grocery chains. The selection varies by country and platform.</p>

      <h2 id="cashback-rewards">Cashback and Rewards</h2>
      <p>Several platforms incentivize gift card purchases with crypto cashback. Fold's spin-the-wheel mechanic offers Bitcoin back on every purchase with chances to win up to 100% cashback. Bitrefill's Coinback program gives users Lightning sats back on select purchases. Lolli provides automatic Bitcoin cashback through their browser extension. Stacking these rewards with credit card points or retailer loyalty programs can maximize value, with some users earning 3-7% total back by combining multiple promotions.</p>

      <h2 id="tips-best-deals">Tips for Getting the Best Deals</h2>
      <p>Use Lightning Network payments whenever possible to avoid on-chain fees and get instant delivery. Buy gift cards during promotional periods when platforms offer bonus cashback. Compare prices across platforms since the same retailer card may have different pricing. Purchase cards in commonly used denominations to avoid leaving small unused balances. Consider using stablecoins like USDC for purchases to avoid triggering capital gains tax on appreciated Bitcoin. Set up accounts on multiple platforms to access each one's unique offers.</p>
    </LearnPageLayout>
  );
}
