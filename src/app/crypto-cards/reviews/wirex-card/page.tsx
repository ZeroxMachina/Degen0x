import { Metadata } from "next";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

const product = cryptoCards.find((c) => c.slug === "wirex-card")!;

export const metadata: Metadata = {
  title: `Wirex Card Review (${CURRENT_YEAR}): Multi-Currency, Rewards & Pros/Cons | CryptoDegen`,
  description: "In-depth Wirex Card review covering multi-currency support, cryptoback rewards, X-Accounts yield, and whether it is the best card for global travelers.",
};

export default function WirexCardReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview={`The Wirex Card is a multi-currency Visa card that bridges both traditional fiat and cryptocurrency in a single platform. Available in over 130 countries across Europe, Asia, and other regions, it offers in-app exchange between 60+ fiat and cryptocurrencies, making it one of the most versatile financial tools for global crypto users.\n\nWirex distinguishes itself with its cryptoback rewards program, offering up to 8% back in WXT tokens based on your staking tier. The platform also features X-Accounts, which let you earn yield on idle balances in both fiat and crypto. This combination of spending, earning, and exchange functionality makes Wirex an all-in-one financial app.\n\nThe card is particularly popular among international travelers and digital nomads who need to manage multiple currencies. The competitive exchange rates for both crypto-to-fiat and fiat-to-fiat conversions, combined with the ability to hold balances in different currencies, reduce the friction of managing money across borders. The main drawback is that the card is not available in the US.`}
      sections={[
        { id: "multi-currency", title: "Multi-Currency Support", content: "Wirex supports over 60 fiat and cryptocurrencies within a single app. You can hold balances in multiple currencies simultaneously and switch between them with in-app exchange. Supported fiat currencies include USD, EUR, GBP, and dozens more. Crypto support spans Bitcoin, Ethereum, major altcoins, and stablecoins. The seamless exchange between currencies makes it easy to convert and spend in whatever currency is needed for your current location or transaction." },
        { id: "cryptoback-rewards", title: "Cryptoback Rewards", content: "Wirex offers up to 8% cashback in WXT tokens through its tiered rewards program. The base tier provides 0.5% cryptoback with no staking requirement. Higher tiers require staking WXT tokens: Standard offers 1%, Premium offers 2%, Elite offers 4%, and the top tier offers 8%. Cryptoback is earned on every purchase and deposited in WXT to your Wirex account. The WXT token can be traded, staked for further rewards, or converted to other currencies within the app." },
        { id: "x-accounts", title: "X-Accounts Yield", content: "X-Accounts are Wirex's yield-earning feature, allowing you to earn returns on idle balances in both fiat and crypto. Interest rates vary by currency and market conditions but have historically offered competitive rates for stablecoins and select fiat currencies. Funds in X-Accounts remain accessible, though withdrawal timing may vary. This feature turns your Wirex balance into an earning asset rather than idle cash, adding value between spending sessions." },
        { id: "travel-features", title: "Travel and International Features", content: "Wirex excels for international travelers with competitive interbank exchange rates, multi-currency wallet support, and broad global availability. Hold balances in local currencies before traveling to lock in exchange rates. The card is accepted at all Visa merchants worldwide. In-app exchange means you can convert currencies on the fly as you travel between countries. The combination of crypto and fiat support means you can use whichever offers the best value in each situation." },
      ]}
      fees={{ "Standard Plan": "Free", "Premium Plan": "From $2.99/month", "Elite Plan": "$29.99/month", "Exchange Spread": "Small markup on interbank rate", "ATM Withdrawal": "Free up to monthly limit; fees thereafter", "Card Delivery": "Free standard; express available", "Inactivity Fee": "None" }}
      security={["FCA regulated (UK)", "Two-factor authentication", "Card freeze via app", "Transaction notifications", "Segregated client funds", "Multi-signature cold storage for crypto"]}
      features={["60+ fiat and crypto currencies supported", "Up to 8% cryptoback in WXT tokens", "X-Accounts yield on idle balances", "In-app exchange between all currencies", "Available in 130+ countries", "Competitive exchange rates for travel", "Apple Pay and Google Pay support"]}
      faqs={[
        { question: "Is Wirex available in the US?", answer: "No, Wirex is not currently available in the United States. It is available in over 130 countries across Europe, Asia, and other regions." },
        { question: "What is WXT token?", answer: "WXT is Wirex's native utility token used for the cryptoback rewards program. Staking WXT unlocks higher cashback tiers. The token can be traded on exchanges or converted within the Wirex app." },
        { question: "How do X-Accounts work?", answer: "X-Accounts let you earn yield on idle fiat and crypto balances within Wirex. Rates vary by currency and market conditions. Funds remain accessible though withdrawal timing may vary." },
      ]}
      relatedReviews={[{ name: "Plutus Card", slug: "plutus-card" }, { name: "Crypto.com Visa", slug: "crypto-com-visa" }, { name: "Baanx Card", slug: "baanx-card" }]}
      relatedGuides={[{ title: "Crypto Card Fees Compared", href: "/crypto-cards/learn/crypto-card-fees-compared" }, { title: "Traveling with Crypto", href: "/spending/learn/crypto-travel-guide" }]}
    />
  );
}
