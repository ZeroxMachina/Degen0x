import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Gift Cards (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Top platforms to buy gift cards with cryptocurrency in ${CURRENT_YEAR}. Compare Bitrefill, CoinGate, and more for Amazon, Steam, and major retailer gift cards.`,
  alternates: { canonical: "/spending/best/gift-cards" },
};

const toc = [
  { id: "overview", title: "Crypto Gift Cards Overview", level: 2 },
  { id: "top-platforms", title: "Top Gift Card Platforms", level: 2 },
  { id: "how-to-buy", title: "How to Buy Gift Cards with Crypto", level: 2 },
  { id: "supported-retailers", title: "Supported Retailers", level: 2 },
  { id: "tips", title: "Tips for Buying Crypto Gift Cards", level: 2 },
];

const faqs = [
  { question: "Can I buy Amazon gift cards with Bitcoin?", answer: "Yes. Platforms like Bitrefill and CoinGate allow you to purchase Amazon gift cards using Bitcoin, Ethereum, Litecoin, and many other cryptocurrencies. The gift card code is delivered digitally within minutes of payment confirmation." },
  { question: "Are crypto gift cards cheaper than regular gift cards?", answer: "Crypto gift cards are typically sold at face value, though some platforms offer cashback or loyalty rewards in crypto. Bitrefill offers up to 10% back on certain cards through their rewards program. You may also save on fees compared to traditional payment methods." },
  { question: "What happens if my crypto transaction is slow?", answer: "Most platforms hold your order until the blockchain transaction confirms. If the crypto price fluctuates significantly during confirmation, some platforms may adjust or cancel the order. Using Lightning Network for Bitcoin payments provides near-instant confirmation." },
];

const relatedArticles = [
  { title: "Crypto Gift Cards Guide", href: "/spending/learn/crypto-gift-cards", category: "Spending" },
  { title: "Best Payment Apps", href: "/spending/best/payment-apps", category: "Spending" },
  { title: "Best Online Shopping Options", href: "/spending/best/online-shopping", category: "Spending" },
];

export default function BestGiftCardsPage() {
  return (
    <LearnPageLayout
      title="Best Crypto Gift Cards: Spend Your Crypto Anywhere"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="7 min"
      intro="Gift cards are one of the easiest ways to spend cryptocurrency at major retailers that do not accept crypto directly. Platforms like Bitrefill and CoinGate let you convert Bitcoin, Ethereum, and other tokens into gift cards for Amazon, Steam, Uber, and hundreds of other brands, effectively bridging the gap between your crypto wallet and everyday purchases."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="overview">Crypto Gift Cards Overview</h2>
      <p>
        Crypto gift cards work by allowing you to purchase digital gift card codes using cryptocurrency. The process
        is straightforward: select a retailer, choose the denomination, pay with your preferred crypto, and receive
        a redeemable code instantly. This approach lets you shop at thousands of stores worldwide without waiting
        for direct merchant crypto adoption.
      </p>

      <h2 id="top-platforms">Top Gift Card Platforms</h2>
      <p>
        Bitrefill is the market leader, supporting over 5,000 gift cards across 170+ countries with Bitcoin,
        Ethereum, Litecoin, Dogecoin, and Lightning Network payments. CoinGate offers a curated selection of
        popular brands with competitive pricing. Gyft and eGifter also support limited crypto payment options.
        Each platform varies in regional availability, supported cryptocurrencies, and bonus reward programs.
      </p>

      <h2 id="how-to-buy">How to Buy Gift Cards with Crypto</h2>
      <p>
        The purchase process is simple across most platforms. Create an account (optional on some services),
        browse available gift cards, select your desired amount, and complete payment using your crypto wallet.
        Most platforms display the exact crypto amount required including any network fees. Gift card codes are
        typically delivered via email or displayed on screen within minutes of blockchain confirmation.
      </p>

      <h2 id="supported-retailers">Supported Retailers</h2>
      <p>
        Major supported retailers include Amazon, Walmart, Target, Best Buy, Steam, PlayStation Store, Xbox,
        Netflix, Spotify, Uber, DoorDash, Airbnb, and Apple. Coverage varies by country. US-based buyers have
        the widest selection, while European and Asian markets are expanding rapidly. Some platforms also offer
        mobile top-ups and bill payment options alongside traditional gift cards.
      </p>

      <h2 id="tips">Tips for Buying Crypto Gift Cards</h2>
      <p>
        Always purchase from reputable platforms to avoid scams. Compare prices across services as some charge a
        small premium above face value. Use Lightning Network for Bitcoin payments to get faster confirmations
        and lower fees. Take advantage of cashback and loyalty programs offered by platforms like Bitrefill.
        Keep records of your purchases for tax purposes, as converting crypto to gift cards is typically a
        taxable event in most jurisdictions.
      </p>
    </LearnPageLayout>
  );
}
