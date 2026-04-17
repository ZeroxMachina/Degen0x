import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

const product = cryptoCards.find((c) => c.slug === "coinbase-card")!;

export const metadata: Metadata = {
  title: `Coinbase Card Review (2026): Fees, Rewards & Pros/Cons | degen0x`,
  description: "In-depth Coinbase Card review covering crypto rewards, spending features, fees, and whether it is the right crypto debit card for you. Updated for " + CURRENT_YEAR + ".",
  alternates: { canonical: "/crypto-cards/reviews/coinbase-card" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Cards', item: 'https://degen0x.com/crypto-cards' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-cards/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Coinbase Card', },
  ],
};

export default function CoinbaseCardReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview={`The Coinbase Card is a Visa debit card that allows you to spend any cryptocurrency held in your Coinbase account at millions of merchants worldwide. When you make a purchase, Coinbase converts the selected crypto to USD at the point of sale, and you earn up to 4% back in your choice of cryptocurrency. The card integrates seamlessly with the Coinbase app, making it one of the most user-friendly crypto debit cards available.\n\nWhat sets the Coinbase Card apart is the flexibility to choose your reward cryptocurrency. Unlike cards that only pay back in a proprietary token, Coinbase lets you select from Bitcoin, Ethereum, Dogecoin, and other popular assets for your cashback. The card draws from your existing Coinbase balances, so you can spend your Bitcoin, Ethereum, or any of 100+ supported assets directly.\n\nThe card is currently available only to US residents and functions as a debit card rather than a credit card, meaning it does not help build credit history. The primary cost is a 2.49% liquidation spread charged when spending crypto rather than USD balance, which effectively acts as a conversion fee on each transaction.`}
      sections={[
        { id: "rewards-program", title: "Rewards Program", content: "The Coinbase Card offers up to 4% cashback in cryptocurrency on every purchase. The reward rate varies by which crypto you choose to earn. Bitcoin and Ethereum rewards are typically at 1%, while select altcoins offer higher rates up to 4%. Rewards are deposited into your Coinbase account immediately after the transaction settles. You can change your reward selection at any time through the Coinbase app. The flexibility to earn rewards in your preferred cryptocurrency is a significant advantage over cards that only pay back in a single proprietary token." },
        { id: "spending-experience", title: "Spending Experience", content: "Using the Coinbase Card feels identical to any other Visa debit card. It works everywhere Visa is accepted, both online and at physical merchants. The Coinbase app lets you choose which cryptocurrency to spend from, or you can spend your USD balance to avoid the liquidation spread. Google Pay and Apple Pay integration adds contactless payment convenience. Transaction history appears in the Coinbase app alongside your regular trading activity, providing a unified view of all your crypto finances." },
        { id: "supported-assets", title: "Supported Assets", content: "The Coinbase Card supports spending from over 100 cryptocurrencies held in your Coinbase account. This includes major assets like Bitcoin, Ethereum, Litecoin, and Dogecoin, as well as stablecoins like USDC. Spending USDC avoids the 2.49% liquidation fee since it is already dollar-denominated. The card automatically converts your selected crypto to USD at the current market rate when you make a purchase. This broad asset support means you can spend altcoin gains directly without manually converting on the exchange first." },
        { id: "mobile-integration", title: "Mobile App Integration", content: "The Coinbase Card is fully integrated into the main Coinbase mobile app. You can manage your card, view transactions, lock or unlock the card, change reward preferences, and monitor spending all from the same app you use for trading. Push notifications alert you to each transaction in real-time. The app also displays your effective reward earnings over time, helping you track how much crypto you have earned through spending. This tight integration eliminates the need for a separate card management app." },
      ]}
      fees={{ "Annual Fee": "None", "Crypto Liquidation Spread": "2.49% when spending crypto", "USDC Spending": "No fee", "ATM Withdrawal (Domestic)": "Up to $1,000/day; fees vary by ATM operator", "Foreign Transaction Fee": "Up to 2%", "Card Replacement": "$4.95" }}
      security={["Two-factor authentication through Coinbase account", "Card lock and unlock via mobile app", "Real-time transaction notifications", "Visa Zero Liability policy for unauthorized transactions", "Coinbase platform security with insurance coverage on custodied assets"]}
      features={["Up to 4% crypto cashback on all purchases", "Spend from 100+ cryptocurrencies", "Choose your cashback cryptocurrency", "Seamless Coinbase app integration", "Google Pay and Apple Pay support", "No annual fee", "USDC spending with no conversion fee"]}
      faqs={[
        { question: "Is there a fee to use the Coinbase Card?", answer: "There is no annual fee or monthly charge. When spending crypto, a 2.49% liquidation spread applies. Spending your USD balance or USDC incurs no additional fee. ATM withdrawals may have third-party fees." },
        { question: "Can I use the Coinbase Card internationally?", answer: "Yes, the Coinbase Card works wherever Visa is accepted worldwide. International transactions may incur up to a 2% fee. The card converts your crypto to the local currency at the point of sale." },
        { question: "How do I earn the highest cashback rate?", answer: "The highest cashback rates (up to 4%) are available on select altcoins that rotate periodically. Bitcoin and Ethereum rewards are typically at 1%. Check the Coinbase app for the current reward rates on each available cryptocurrency." },
      ]}
      relatedReviews={[{ name: "Crypto.com Visa", slug: "crypto-com-visa" }, { name: "BitPay Card", slug: "bitpay-card" }, { name: "Fold Card", slug: "fold-card" }]}
      relatedGuides={[{ title: "Best Crypto Card Rewards", href: "/crypto-cards/learn/best-crypto-card-rewards" }, { title: "Crypto Card Fees Compared", href: "/crypto-cards/learn/crypto-card-fees-compared" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Rewards Program", "description": "In-depth Coinbase Card review covering crypto rewards, spending features, fees, and whether it is the right crypto debit card for you. Updated for ", "url": "https://degen0x.com/crypto-cards/reviews/coinbase-card", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/crypto-cards/reviews/baanx-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Baanx Card</a>
  <a href="/crypto-cards/reviews/binance-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Binance Card</a>
  <a href="/crypto-cards/reviews/bitpay-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitpay Card</a>
  <a href="/crypto-cards/reviews/bybit-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bybit Card</a>
  <a href="/crypto-cards/reviews/club-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Club Card</a>
  <a href="/crypto-cards/reviews/crypto-com-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Crypto Com Card</a>
  <a href="/crypto-cards/reviews/crypto-com-visa" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Crypto Com Visa</a>
  <a href="/crypto-cards/reviews/fold-card" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Fold Card</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
