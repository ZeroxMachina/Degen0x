import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

const product = cryptoCards.find((c) => c.slug === "nexo-card")!;

export const metadata: Metadata = {
  title: `Nexo Card Review (2026): Credit Line, Rewards & Pros/Cons | degen0x`,
  description: "In-depth Nexo Card review covering crypto-backed credit lines, cashback rewards, spending without selling, and whether it is right for long-term HODLers.",
  alternates: { canonical: "/crypto-cards/reviews/nexo-card" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Cards', item: 'https://degen0x.com/crypto-cards' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-cards/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Nexo Card', },
  ],
};

export default function NexoCardReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview={`The Nexo Card takes a fundamentally different approach to crypto spending. Instead of selling your cryptocurrency when you make a purchase, the Nexo Card extends a credit line against your crypto collateral, allowing you to spend without triggering a taxable sale event. Your Bitcoin, Ethereum, and other deposited assets continue to appreciate while you spend against their value.\n\nThis credit-line model is particularly attractive for long-term holders who believe their crypto will appreciate but need liquidity for everyday expenses. The card offers up to 2% cashback paid in Bitcoin or NEXO tokens, zero foreign transaction fees in 200+ countries, and no minimum monthly payments. Interest on the credit line ranges from 0% for Nexo Platinum loyalty tier members to 13.9% for base tier users.\n\nThe main risk is that crypto collateral can be liquidated if prices drop significantly, reducing the loan-to-value ratio below the liquidation threshold. Users must monitor their collateral health and may need to add more crypto or repay part of the balance during market downturns. The card is available in most countries except certain US states with lending restrictions.`}
      sections={[
        { id: "credit-line-model", title: "Credit Line Model", content: "The Nexo Card draws from a credit line collateralized by your deposited crypto assets. When you make a purchase, the amount is added to your outstanding balance rather than selling your crypto. Your collateral continues to earn yield through Nexo's earn program while simultaneously backing your spending. The available credit line depends on your total deposited collateral and the loan-to-value ratio, which varies by asset (typically 50% for Bitcoin and Ethereum, lower for more volatile altcoins)." },
        { id: "loyalty-tiers", title: "Loyalty Tiers and Rates", content: "Nexo's loyalty program determines your interest rate and cashback. The Platinum tier (10%+ of portfolio in NEXO tokens) offers 0% APR on the credit line and 2% cashback. Gold tier (5-10% NEXO) offers reduced interest. Silver (1-5% NEXO) offers moderate savings. Base tier has the standard rate of up to 13.9%. The loyalty tiers create a strong incentive to hold NEXO tokens alongside your other crypto, though this concentrates risk in the Nexo ecosystem." },
        { id: "spending-experience", title: "Spending Experience", content: "The Nexo Card works as a standard Mastercard accepted worldwide. Transactions are instant, and you can track your spending and credit balance through the Nexo app. The card supports both contactless and chip-and-PIN payments. There are no foreign transaction fees, making it excellent for international use. Your available credit adjusts dynamically with your collateral value, so rising crypto prices increase your spending power while falling prices may require attention to avoid liquidation." },
        { id: "risk-management", title: "Risk Management", content: "The primary risk of the credit-line model is collateral liquidation. If the value of your deposited crypto falls enough to breach the liquidation threshold, Nexo may sell a portion of your collateral to repay the loan. You can manage this risk by maintaining a conservative loan-to-value ratio, adding more collateral during market dips, or partially repaying the balance. Nexo sends alerts as you approach liquidation thresholds. Using stablecoins as part of your collateral mix reduces volatility risk." },
      ]}
      fees={{ "Annual Fee": "None", "Interest Rate (Platinum)": "0% APR", "Interest Rate (Base)": "Up to 13.9% APR", "Foreign Transaction Fee": "None", "Cashback": "Up to 2% in BTC or NEXO", "ATM Withdrawal": "Free up to limits; fees thereafter", "Card Issuance": "Free" }}
      security={["SOC 2 Type II audited platform", "Real-time collateral monitoring", "Ledger Vault institutional custody", "Two-factor authentication", "Card freeze via app", "$775M insurance on custodied assets"]}
      features={["Spend without selling your crypto", "Up to 2% cashback in BTC or NEXO", "0% interest with Platinum loyalty tier", "Zero foreign transaction fees in 200+ countries", "No minimum monthly payments", "Dynamic credit line based on collateral value", "Earn yield on collateral while spending"]}
      faqs={[
        { question: "How is this different from a regular crypto debit card?", answer: "Regular crypto debit cards sell your crypto at the point of purchase, creating a taxable event. The Nexo Card borrows against your crypto instead, meaning your assets remain unsold and continue to appreciate. You repay the balance on your own schedule." },
        { question: "What happens if my collateral value drops?", answer: "Nexo sends notifications as your loan-to-value ratio approaches the liquidation threshold. You can add more collateral, repay part of the balance, or both. If you take no action and the threshold is breached, Nexo may liquidate enough collateral to restore a safe ratio." },
        { question: "Can I repay the balance in crypto?", answer: "Yes, you can repay your outstanding balance using fiat or cryptocurrency. Repaying in crypto uses the current market value at the time of repayment." },
      ]}
      relatedReviews={[{ name: "Crypto.com Visa", slug: "crypto-com-visa" }, { name: "Coinbase Card", slug: "coinbase-card" }, { name: "Plutus Card", slug: "plutus-card" }]}
      relatedGuides={[{ title: "Crypto Card Security Tips", href: "/crypto-cards/learn/crypto-card-security" }, { title: "Crypto Card Tax Implications", href: "/crypto-cards/learn/crypto-card-taxes" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Credit Line Model", "description": "In-depth Nexo Card review covering crypto-backed credit lines, cashback rewards, spending without selling, and whether it is right for long-term HODLers.", "url": "https://degen0x.com/crypto-cards/reviews/nexo-card", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
