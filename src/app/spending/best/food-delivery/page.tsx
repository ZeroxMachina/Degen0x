import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Ways to Pay for Food Delivery with Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Order food delivery with cryptocurrency in ${CURRENT_YEAR}. Compare the best methods for paying with Bitcoin and crypto at DoorDash, Uber Eats, Grubhub, and more.`,
};

export default function BestFoodDeliveryPage() {
  return (
    <LearnPageLayout
      title="Best Ways to Pay for Food Delivery with Crypto"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="7 min"
      intro="Ordering food delivery with cryptocurrency is possible through gift cards, crypto debit cards, and select platforms that accept digital assets directly. Whether you prefer DoorDash, Uber Eats, or Grubhub, there are reliable methods to pay for your meals with Bitcoin and other cryptocurrencies."
      toc={[
        { id: "gift-cards", title: "Food Delivery Gift Cards with Crypto", level: 2 },
        { id: "debit-cards", title: "Using Crypto Debit Cards", level: 2 },
        { id: "direct-payments", title: "Direct Crypto Payment Options", level: 2 },
        { id: "rewards", title: "Earning Crypto Back on Food Orders", level: 2 },
      ]}
      faqs={[
        { question: "Can I order DoorDash with Bitcoin?", answer: "DoorDash does not accept Bitcoin directly, but you can purchase DoorDash gift cards with crypto through Bitrefill or use a crypto debit card from BitPay or Crypto.com to pay for DoorDash orders." },
        { question: "Which food delivery apps accept crypto?", answer: "Most major food delivery apps do not accept crypto directly. The best approach is using crypto-purchased gift cards for DoorDash, Uber Eats, and Grubhub, or using a crypto debit card that works like any regular Visa or Mastercard." },
        { question: "Can I earn Bitcoin on food delivery orders?", answer: "Yes, platforms like Lolli and Fold offer Bitcoin cashback when ordering through supported food delivery services. Some crypto debit cards also offer rewards on food delivery purchases." },
      ]}
      relatedArticles={[
        { title: "Where to Spend Crypto", href: "/spending/learn/where-to-spend-crypto", category: "Spending" },
        { title: "Best Crypto Payment Apps", href: "/spending/learn/crypto-payment-apps-guide", category: "Spending" },
        { title: "BitPay Review", href: "/spending/reviews/bitpay", category: "Spending" },
      ]}
    >
      <section id="gift-cards">
        <h2>Food Delivery Gift Cards with Crypto</h2>
        <p>The most reliable method for paying for food delivery with crypto is through gift cards. Platforms like Bitrefill, CoinGate, and eGifter sell gift cards for major food delivery services including DoorDash, Uber Eats, Grubhub, and Instacart. These gift cards can be purchased with Bitcoin, Ethereum, Litecoin, and other cryptocurrencies. The process takes just minutes: select the gift card denomination, pay with crypto, and receive a digital code that you redeem in the delivery app.</p>
        <p>Gift card purchases offer the advantage of locking in a fiat value, eliminating price volatility concerns between ordering and delivery. Many gift card platforms also run promotions offering discounts or bonus value on food delivery cards, effectively saving you money compared to paying with traditional methods. The main drawback is the extra step of purchasing the gift card before placing your order.</p>
      </section>

      <section id="debit-cards">
        <h2>Using Crypto Debit Cards</h2>
        <p>Crypto debit cards provide the most seamless experience for paying food delivery with digital assets. Cards from BitPay, Crypto.com, Coinbase, and others convert your crypto to fiat at the time of purchase, allowing you to pay at any food delivery service that accepts Visa or Mastercard. This includes DoorDash, Uber Eats, Grubhub, Postmates, and virtually any delivery platform.</p>
        <p>The convenience of crypto debit cards comes with a small cost in the form of conversion fees, typically 1-2% depending on the card provider. However, many crypto cards offer cashback rewards of 1-8% that can offset or exceed the conversion cost. For frequent food delivery users, a crypto debit card with food delivery category bonuses can actually save money compared to traditional payment methods.</p>
      </section>

      <section id="direct-payments">
        <h2>Direct Crypto Payment Options</h2>
        <p>Some restaurants and local food delivery services accept cryptocurrency directly, particularly in crypto-forward cities. Bitcoin-friendly restaurant directories and apps like the BTC Map help locate eateries that accept crypto in your area. Several pizza delivery chains and local restaurants have experimented with Bitcoin payments, though availability varies greatly by location.</p>
        <p>Peer-to-peer food delivery platforms built on blockchain technology are emerging, though they remain niche compared to established services. These platforms typically accept crypto natively and may offer lower delivery fees by connecting customers directly with restaurants and delivery drivers without centralized intermediaries.</p>
      </section>

      <section id="rewards">
        <h2>Earning Crypto Back on Food Orders</h2>
        <p>Beyond paying with crypto, you can earn crypto rewards on food delivery purchases. Lolli offers Bitcoin cashback at select food delivery partners through its browser extension and mobile app. The Fold App's Visa card earns Bitcoin rewards on every purchase including food delivery. Crypto.com's card offers up to 5% back in CRO on all spending including delivery orders.</p>
        <p>Stacking rewards is the optimal strategy: use a crypto cashback card to pay for food delivery and activate Lolli simultaneously to earn Bitcoin from both sources on a single order. This approach lets you accumulate Bitcoin passively while ordering food you would buy anyway, turning everyday meals into a small but consistent crypto stacking strategy.</p>
      </section>
    </LearnPageLayout>
  );
}
