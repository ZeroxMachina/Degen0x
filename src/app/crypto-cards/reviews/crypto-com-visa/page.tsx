import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";

const product = cryptoCards.find((c) => c.slug === "crypto-com-visa")!;

export const metadata: Metadata = {
  title: "Crypto.com Visa Card Review 2026: Tiers, Cashback, Staking",
  description: "Our in-depth Crypto.com Visa card review covers CRO staking tiers from Midnight Blue to Obsidian, cashback rates, airport lounge access, Spotify/Netflix",
  alternates: { canonical: "/crypto-cards/reviews/crypto-com-visa" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Crypto Cards', item: 'https://degen0x.com/crypto-cards' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/crypto-cards/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Crypto Com Visa', },
  ],
};

export default function CryptoComVisaReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview="The Crypto.com Visa card is widely considered the gold standard in crypto debit cards, offering a tiered rewards system that scales from casual crypto users all the way to high-net-worth investors. Launched in 2018, the card is issued by Crypto.com in partnership with Visa and is available in over 40 countries across North America, Europe, and Asia-Pacific. The card draws directly from your Crypto.com app wallet and converts crypto to local fiat currency at the point of sale.

What makes the Crypto.com Visa card stand out from nearly every competitor is its multi-tier staking model. By locking up CRO (Crypto.com's native token) for 180 days, cardholders unlock progressively better rewards: higher cashback rates, streaming service rebates, airport lounge access, and even bonus interest on the Crypto.com Earn program. There are five distinct tiers ranging from the free Midnight Blue card to the ultra-exclusive Obsidian card requiring a $400,000 CRO stake. Each tier comes with a physically distinct metal card and an expanding set of perks.

Despite several rounds of reward reductions in 2022 and 2023 that frustrated early adopters, the Crypto.com Visa card remains one of the most feature-rich crypto cards on the market. The combination of tangible everyday perks like Spotify and Netflix reimbursements with meaningful cashback rates makes it a compelling choice for anyone who already holds or is willing to acquire CRO tokens."
      sections={[
        {
          id: "card-tiers",
          title: "Card Tiers & Staking Requirements",
          content:
            "The Crypto.com Visa card offers five tiers, each with different CRO staking requirements and benefits. Midnight Blue is the entry-level tier requiring no CRO stake and offering 1% cashback. Ruby Steel requires a $400 CRO stake and provides 2% cashback plus a full Spotify rebate (up to $13.99/month). Jade Green and Royal Indigo require a $4,000 CRO stake and bump cashback to 3% while adding Netflix rebates and LoungeKey airport lounge access. Icy White and Rose Gold require a $40,000 CRO stake, deliver 5% cashback, and include Amazon Prime rebates plus Expedia travel credits. The top-tier Obsidian card demands a $400,000 CRO stake, provides 5% cashback with the highest limits, and grants exclusive perks including a dedicated account manager and partner merchant offers. All staking periods are 180 days, and if you unstake after the lock period, you retain the card but drop to the Midnight Blue reward level.",
        },
        {
          id: "rewards-structure",
          title: "Rewards & Cashback Structure",
          content:
            "Cashback on the Crypto.com Visa card is paid in CRO tokens and credited to your Crypto.com app wallet immediately after each qualifying purchase. The cashback percentage depends on your card tier: 1% for Midnight Blue, 2% for Ruby Steel, 3% for Jade Green/Royal Indigo, and 5% for Icy White/Rose Gold and Obsidian. Certain merchant categories are excluded from cashback, including financial services, government payments, insurance premiums, and recurring utility bills. Monthly cashback is capped at $25 for Midnight Blue, $50 for Ruby Steel, and progressively higher limits for upper tiers. Beyond direct cashback, higher-tier cardholders receive streaming service rebates that function as statement credits paid in CRO. The Ruby tier covers Spotify, Jade adds Netflix, and Icy adds Amazon Prime. These rebates are based on the subscription cost and are credited within 24 hours of the charge appearing on the card.",
        },
        {
          id: "user-experience",
          title: "User Experience & Mobile App",
          content:
            "The Crypto.com app serves as the command center for managing your Visa card. From the app, you can view real-time transaction history, check your CRO staking status, manage card settings, and toggle the card on or off for security. The card management interface is clean and intuitive, with clear visibility into your cashback earnings, spending limits, and tier benefits. Topping up the card is straightforward: select the crypto or fiat you want to convert, confirm the amount, and the balance is available on the card within seconds. The app also provides push notifications for every transaction, which is helpful for monitoring spending in real time. One area that could be improved is the card's integration with budgeting and expense-tracking features, which are currently minimal compared to traditional banking apps. Physical card delivery times vary by region but typically range from 7 to 21 business days after approval.",
        },
        {
          id: "spending-limits",
          title: "Spending Limits & ATM Access",
          content:
            "Each Crypto.com Visa card tier comes with different spending and ATM withdrawal limits. The Midnight Blue card allows up to $200 in free ATM withdrawals per month, while Ruby Steel offers $400, Jade Green/Royal Indigo offer $800, and Icy White and Obsidian cards allow up to $1,000 in free monthly ATM withdrawals. Beyond the free limit, a 2% fee applies to all ATM withdrawals. Daily spending limits range from $5,000 for the basic tier to $25,000 for Obsidian. Monthly spending limits range from $25,000 for Midnight Blue up to $250,000 for Obsidian. These limits can accommodate most everyday and travel spending scenarios. International transactions are processed at the Visa exchange rate with no additional foreign transaction fee for Jade tier and above, while lower tiers may incur a small spread.",
        },
        {
          id: "airport-lounge",
          title: "Airport Lounge Access & Travel Perks",
          content:
            "One of the most valued perks of the Crypto.com Visa card is airport lounge access through the LoungeKey program. This benefit is available to Jade Green/Royal Indigo cardholders and above. Jade and Indigo tier members receive complimentary access to LoungeKey lounges, with the cardholder being admitted free of charge. Icy White and Obsidian cardholders can bring a guest into the lounge at no additional cost. The LoungeKey network includes over 1,300 airport lounges worldwide, offering amenities such as complimentary food and beverages, WiFi, comfortable seating, and sometimes shower facilities. Beyond lounge access, Icy White and Obsidian cardholders receive Expedia travel credits, which provide up to 10% back on eligible hotel bookings made through the Crypto.com app's travel partnership. These travel perks make the higher-tier cards particularly attractive for frequent travelers.",
        },
        {
          id: "security",
          title: "Card Security & Fraud Protection",
          content:
            "The Crypto.com Visa card includes several security features designed to protect cardholders. The physical card does not display the card number, CVV, or expiration date, which reduces the risk of card skimming. Instead, these details are accessible only through the Crypto.com app. The card can be frozen and unfrozen instantly through the app, which is useful if you misplace it or suspect unauthorized use. All online transactions require 3D Secure verification for an additional layer of protection. The app supports biometric authentication (Face ID and fingerprint) as well as PIN protection. Crypto.com maintains comprehensive insurance coverage for digital assets held on the platform, and the company undergoes regular third-party security audits. The platform also supports two-factor authentication for account access and withdrawal confirmations.",
        },
      ]}
      fees={{
        "Annual Fee": "Free on all tiers",
        "Card Issuance Fee": "$50 (waived for Ruby and above with active stake)",
        "ATM Withdrawal (within free limit)": "Free ($200–$1,000/month depending on tier)",
        "ATM Withdrawal (over limit)": "2% of withdrawal amount",
        "Foreign Transaction Fee": "0% for Jade tier and above; up to 2% for lower tiers",
        "Card Replacement Fee": "$50",
        "Crypto Top-Up Fee": "Free (crypto converted at market rate)",
        "Monthly Inactivity Fee": "None",
      }}
      security={[
        "Card number, CVV, and expiration hidden from physical card surface for anti-skimming protection",
        "Instant card freeze and unfreeze through the Crypto.com mobile app",
        "3D Secure (Verified by Visa) for all online transactions",
        "Biometric authentication (Face ID, fingerprint) and PIN code for app access",
        "Two-factor authentication required for account login and withdrawals",
        "Regular third-party security audits and SOC 2 Type II compliance",
        "Real-time push notifications for every card transaction",
      ]}
      features={[
        "Five card tiers (Midnight Blue, Ruby Steel, Jade Green/Royal Indigo, Icy White/Rose Gold, Obsidian)",
        "Up to 5% CRO cashback on all eligible purchases",
        "Spotify, Netflix, and Amazon Prime subscription rebates in CRO",
        "LoungeKey airport lounge access at 1,300+ locations worldwide",
        "Zero foreign transaction fees on Jade tier and above",
        "Instant top-up from crypto holdings via the Crypto.com app",
        "Expedia travel credits (up to 10% back) for Icy and Obsidian tiers",
        "Metal card construction with premium tier-specific designs",
      ]}
      faqs={[
        {
          question: "How much CRO do I need to stake for the Crypto.com Visa card?",
          answer:
            "Staking requirements vary by tier: Midnight Blue requires no stake, Ruby Steel requires $400 in CRO, Jade Green/Royal Indigo requires $4,000, Icy White/Rose Gold requires $40,000, and Obsidian requires $400,000. All stakes are locked for 180 days.",
        },
        {
          question: "What happens if I unstake my CRO after the 180-day lock period?",
          answer:
            "If you unstake your CRO after the lock period, you keep the physical card but your benefits revert to the Midnight Blue tier level (1% cashback, no streaming rebates, no lounge access). You can restake at any time to regain your tier benefits.",
        },
        {
          question: "Is the Crypto.com Visa card a credit card or debit card?",
          answer:
            "The Crypto.com Visa card is a prepaid debit card. You load funds onto it by converting crypto or fiat in your Crypto.com app. It does not offer credit and does not affect your credit score.",
        },
        {
          question: "Which purchases are excluded from cashback rewards?",
          answer:
            "Certain merchant categories do not earn cashback, including financial services, utility payments, government transactions, insurance payments, and money orders. Crypto.com maintains a full list of excluded categories in their terms of service.",
        },
        {
          question: "Can I use the Crypto.com Visa card internationally?",
          answer:
            "Yes, the card works anywhere Visa is accepted globally. Jade Green tier and above enjoy zero foreign transaction fees. Lower tiers may incur a fee of up to 2% on international transactions.",
        },
        {
          question: "How long does it take to receive the physical card?",
          answer:
            "After approval and staking (if required), physical card delivery typically takes 7 to 21 business days depending on your region. A virtual card is issued immediately and can be used for online purchases while you wait for the physical card.",
        },
      ]}
      relatedReviews={[
        { name: "Coinbase Card", slug: "coinbase-card" },
        { name: "Binance Card", slug: "binance-card" },
        { name: "Nexo Card", slug: "nexo-card" },
        { name: "Gemini Credit Card", slug: "gemini-card" },
      ]}
      relatedGuides={[
        { title: "Best Crypto Cards", href: "/crypto-cards/best" },
        { title: "Best Crypto Cashback Cards", href: "/crypto-cards/best/cashback" },
        { title: "How to Spend Crypto", href: "/spending/learn/spending-crypto" },
      ]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto.com Visa Card Review 2026: Tiers, Cashback, Staking", "description": "Our in-depth Crypto.com Visa card review covers CRO staking tiers from Midnight Blue to Obsidian, cashback rates, airport lounge access, Spotify/Netflix", "url": "https://degen0x.com/crypto-cards/reviews/crypto-com-visa", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    </>
  );
}
