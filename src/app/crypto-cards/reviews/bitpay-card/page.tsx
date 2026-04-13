import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

const product = cryptoCards.find((c) => c.slug === "bitpay-card")!;

export const metadata: Metadata = {
  title: `BitPay Card Review (${CURRENT_YEAR}): Features, Fees & Pros/Cons | degen0x`,
  description: "In-depth BitPay Card review covering crypto-to-fiat conversion, supported cryptocurrencies, fees, and whether this prepaid Mastercard is right for you.",
  alternates: { canonical: "/crypto-cards/reviews/bitpay-card" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Cards', item: 'https://degen0x.com/crypto-cards' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-cards/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Bitpay Card', },
  ],
};

export default function BitPayCardReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview={`The BitPay Card is one of the longest-running crypto debit cards in the market, backed by BitPay, a pioneer in cryptocurrency payment processing since 2011. The card is a prepaid Mastercard that lets you convert Bitcoin and other supported cryptocurrencies to USD and spend anywhere Mastercard is accepted. Unlike cards that convert at the point of sale, the BitPay Card requires pre-loading your fiat balance by converting crypto within the BitPay app.\n\nThe card supports Bitcoin, Ethereum, Bitcoin Cash, Litecoin, XRP, Dogecoin, and several stablecoins including USDC, USDT, BUSD, and DAI. This makes it one of the most versatile cards for stablecoin holders who want to spend without exchange rate volatility. The conversion from crypto to USD happens when you load the card, locking in the rate at that moment.\n\nThe BitPay Card does not offer cashback or crypto rewards, which is its main competitive disadvantage compared to cards from Crypto.com, Coinbase, and Fold. However, its straightforward prepaid model, established brand reputation, and broad crypto support make it a reliable option for users who prioritize simplicity and want to spend their crypto gains.`}
      sections={[
        { id: "loading-spending", title: "Loading and Spending", content: "To use the BitPay Card, you first convert cryptocurrency to USD within the BitPay app. The conversion is instant at the current market rate with no additional conversion fee. Once USD is loaded onto the card, you spend it like any prepaid debit card. This pre-loading model means you know exactly how many dollars are on your card and eliminates exchange rate uncertainty at the point of purchase. The card balance is displayed in the BitPay app and can be checked anytime." },
        { id: "supported-cryptos", title: "Supported Cryptocurrencies", content: "The BitPay Card supports a wide range of cryptocurrencies for loading. Major assets include Bitcoin, Ethereum, Bitcoin Cash, Litecoin, XRP, and Dogecoin. Stablecoin support includes USDC, USDT, BUSD, DAI, and GUSD. The stablecoin support is particularly useful since loading USDC or USDT to the card involves minimal value change, effectively giving you a dollar-denominated spending card funded from your crypto holdings." },
        { id: "bill-pay-integration", title: "Bill Pay Integration", content: "A unique feature of the BitPay Card is integration with BitPay's bill payment service. You can pay bills directly from your BitPay wallet using crypto, with BitPay converting and sending fiat payments to your billers via ACH. This covers utilities, rent, phone bills, and other recurring expenses. The combination of card spending and bill payment makes BitPay a comprehensive solution for living on crypto without maintaining a traditional bank account." },
        { id: "merchant-network", title: "Merchant Acceptance", content: "As a Mastercard, the BitPay Card is accepted at millions of merchants worldwide, both online and in physical stores. It works for in-store tap payments, online purchases, and subscription billing. The card can be added to Apple Pay and Google Pay for contactless payments. For online shopping, it functions identically to any other debit card. ATM cash withdrawals are supported at any Mastercard-compatible ATM." },
      ]}
      fees={{ "Card Issuance": "$10 one-time fee", "Monthly Fee": "None (active usage)", "Inactivity Fee": "$5/month after 90 days of no activity", "ATM Withdrawal (Domestic)": "$3 per withdrawal", "ATM Withdrawal (International)": "$3 plus ATM operator fees", "Crypto Loading": "No conversion fee (market rate applies)", "Foreign Transaction": "Up to 3%" }}
      security={["BitPay platform security with multi-signature wallets", "Card lock via BitPay app", "Transaction notifications", "Mastercard Zero Liability protection", "EMV chip technology"]}
      features={["Prepaid Mastercard accepted worldwide", "Support for BTC, ETH, XRP, LTC, and stablecoins", "Instant crypto-to-USD conversion in app", "Bill payment integration", "Apple Pay and Google Pay compatible", "No monthly fee with active usage", "Established brand since 2011"]}
      faqs={[
        { question: "Does the BitPay Card offer cashback?", answer: "No, the BitPay Card does not offer cashback or crypto rewards. Its value proposition is straightforward crypto-to-fiat spending rather than rewards earning." },
        { question: "Is there a fee to load the card?", answer: "There is no separate fee for converting crypto to USD on the card. You receive the market exchange rate at the time of conversion. The main fees are the $10 issuance fee and $5 inactivity fee after 90 days." },
        { question: "Can I use the BitPay Card internationally?", answer: "Yes, it works anywhere Mastercard is accepted worldwide. International transactions may incur up to a 3% foreign transaction fee." },
      ]}
      relatedReviews={[{ name: "Coinbase Card", slug: "coinbase-card" }, { name: "Crypto.com Visa", slug: "crypto-com-visa" }, { name: "Wirex Card", slug: "wirex-card" }]}
      relatedGuides={[{ title: "Prepaid vs Debit Crypto Cards", href: "/crypto-cards/learn/prepaid-vs-debit-crypto" }, { title: "Crypto Card Fees Compared", href: "/crypto-cards/learn/crypto-card-fees-compared" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Loading and Spending", "description": "In-depth BitPay Card review covering crypto-to-fiat conversion, supported cryptocurrencies, fees, and whether this prepaid Mastercard is right for you.", "url": "https://degen0x.com/crypto-cards/reviews/bitpay-card", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
