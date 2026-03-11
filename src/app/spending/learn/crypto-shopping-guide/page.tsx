import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Online Shopping with Cryptocurrency (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how to shop online with Bitcoin and crypto. Discover platforms, browser extensions, and payment methods for spending crypto at your favorite online stores.",
};

export default function CryptoShoppingGuidePage() {
  return (
    <LearnPageLayout
      title="Online Shopping with Cryptocurrency"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="9 min"
      intro="Online shopping with cryptocurrency has never been easier. From browser extensions that earn Bitcoin cashback at thousands of stores to direct crypto checkout at major retailers, there are multiple ways to use your digital assets for online purchases. This guide covers the best methods, platforms, and strategies for spending crypto while shopping online."
      toc={[
        { id: "direct-checkout", title: "Stores with Direct Crypto Checkout", level: 2 },
        { id: "browser-extensions", title: "Cashback Browser Extensions", level: 2 },
        { id: "payment-gateways", title: "Crypto Payment Gateways", level: 2 },
        { id: "marketplace-shopping", title: "Crypto-Native Marketplaces", level: 2 },
        { id: "maximizing-value", title: "Maximizing Value When Shopping", level: 2 },
      ]}
      faqs={[
        { question: "Which major retailers accept crypto directly?", answer: "Newegg, Overstock, and Microsoft accept Bitcoin directly. Shopify enables thousands of independent merchants to accept crypto. AT&T accepts Bitcoin for bill payments. However, most major retailers like Amazon, Walmart, and Target do not accept crypto directly. For these stores, use gift cards from Bitrefill or a crypto debit card to complete your purchase." },
        { question: "Is Lolli safe and legitimate?", answer: "Yes, Lolli is a legitimate Bitcoin cashback platform backed by major venture capital firms. It works as a browser extension that tracks your purchases at partner stores and deposits Bitcoin rewards into your Lolli account. The company has been operating since 2018 and has paid out millions in Bitcoin rewards to users." },
        { question: "Can I return items bought with cryptocurrency?", answer: "Return policies depend on the retailer, not the payment method. If you paid with a crypto debit card, refunds typically go back to the card. For direct crypto payments, merchants may refund in crypto or fiat depending on their policy. Gift card purchases are generally non-refundable, so consider this when choosing your payment method." },
      ]}
      relatedArticles={[
        { title: "Buying Gift Cards with Crypto", href: "/spending/learn/crypto-gift-cards", category: "Spending" },
        { title: "Crypto Cashback Guide", href: "/spending/learn/crypto-cashback-guide", category: "Spending" },
        { title: "How to Spend Bitcoin", href: "/spending/learn/how-to-spend-bitcoin", category: "Spending" },
      ]}
    >
      <h2 id="direct-checkout">Stores with Direct Crypto Checkout</h2>
      <p>A growing number of online retailers accept cryptocurrency as a native payment option. Newegg accepts Bitcoin and several other cryptocurrencies for electronics through their BitPay integration. Overstock has been a pioneer in crypto acceptance since 2014. Microsoft allows Bitcoin for account credits usable across Xbox and Windows Store. Thousands of Shopify merchants accept crypto through integrations with BitPay, CoinGate, and Coinbase Commerce. For digital services, many VPN providers, web hosting companies, and domain registrars accept Bitcoin directly, reflecting the crypto-savvy demographics of their customer base.</p>

      <h2 id="browser-extensions">Cashback Browser Extensions</h2>
      <p>Browser extensions like Lolli and Satsback automatically earn you Bitcoin cashback when you shop at partner stores. Lolli partners with over 10,000 online retailers including Macy's, Nike, Booking.com, and Sephora, offering 1-30% cashback in Bitcoin depending on the store and promotion. Satsback focuses on the European market with similar functionality. These extensions work in the background, detecting when you visit a partner store and automatically crediting your account with Bitcoin rewards after your purchase is confirmed. There is no additional cost to you since the rewards come from the retailer's affiliate marketing budget.</p>

      <h2 id="payment-gateways">Crypto Payment Gateways</h2>
      <p>Payment gateways like BitPay, CoinGate, and Coinbase Commerce enable merchants to accept crypto payments and are integrated into thousands of online stores. BitPay supports Bitcoin, Ethereum, Litecoin, and stablecoins across its merchant network. CoinGate processes over 70 cryptocurrencies and provides plugins for WooCommerce, Magento, and PrestaShop. NOWPayments offers a non-custodial solution supporting 200+ cryptocurrencies. When you see these payment options at checkout, you can pay directly from your wallet. The merchant receives fiat or crypto depending on their preference, and you get a seamless checkout experience.</p>

      <h2 id="marketplace-shopping">Crypto-Native Marketplaces</h2>
      <p>Beyond traditional e-commerce, crypto-native marketplaces cater specifically to cryptocurrency users. OpenBazaar pioneered decentralized peer-to-peer commerce, and its spiritual successors continue the model. Particl Marketplace offers a private, decentralized shopping experience. Bidali provides a marketplace where you can buy electronics, apparel, and home goods directly with cryptocurrency. Purse.io specializes in Amazon purchases at a discount by matching crypto spenders with people who want Bitcoin. These platforms offer unique advantages like privacy, discounts, or decentralization that traditional e-commerce cannot match.</p>

      <h2 id="maximizing-value">Maximizing Value When Shopping</h2>
      <p>Stack multiple savings strategies to maximize the value of your crypto spending. Start by checking if a Lolli or Satsback cashback offer exists for the store. If not, consider buying a discounted gift card through Bitrefill or Fold to earn additional Bitcoin back. Use a crypto debit card with cashback rewards as your default payment method for stores that do not accept crypto directly. Time your purchases to coincide with promotional cashback boosts from platforms like Fold or Bitrefill. Compare the total cost across different payment methods since the combination of conversion fees, cashback rates, and promotional offers can vary significantly.</p>
    </LearnPageLayout>
  );
}
