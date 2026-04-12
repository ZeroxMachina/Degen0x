import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `YouHodler Review (${CURRENT_YEAR}) | degen0x`,
  description: "In-depth YouHodler review covering crypto loans, Multi HODL feature, turbocharge loans, rates, and whether YouHodler is right for your needs.",
  alternates: { canonical: "/crypto-loans/reviews/youhodler" }};

export default function YouHodlerReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "YouHodler",
        slug: "youhodler",
        rating: 4.0,
        description: "YouHodler is a Swiss-based crypto fintech platform offering crypto-backed loans, high-yield savings, and unique leveraged trading features like Multi HODL and Turbocharge. The platform supports 50+ cryptocurrencies and offers some of the highest LTV ratios in the market.",
        pros: [
          "Up to 90% LTV on crypto loans",
          "50+ supported collateral assets",
          "Unique Multi HODL leveraged trading feature",
          "High-yield crypto savings accounts",
        ],
        cons: [
          "Not available to US residents",
          "High LTV options carry significant liquidation risk",
          "Some features are complex for beginners",
        ],
        bestFor: "International users wanting high LTV loans and yield products",
        affiliateUrl: "#",
        category: "crypto-loans",
      }}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="YouHodler is based in Switzerland and regulated under Swiss financial law. The platform launched in 2018 and has grown to serve users in over 100 countries (excluding the US). YouHodler differentiates itself with exceptionally high LTV ratios (up to 90%), innovative features like Multi HODL for leveraged positions, and Turbocharge for chained loans that amplify market exposure. Beyond lending, YouHodler offers competitive yield on crypto deposits and fiat-to-crypto conversion services."
      sections={[
        { id: "crypto-loans", title: "Crypto Loans", content: "YouHodler offers instant crypto-backed loans with LTV ratios from 50% to 90%. Higher LTV provides more borrowing power but increases liquidation risk. Loans can be disbursed in fiat (EUR, USD, GBP, CHF) or stablecoins. Loan terms range from 30 days and can be extended. Interest rates start from around 5% and vary based on collateral type and LTV chosen." },
        { id: "multi-hodl-and-turbocharge", title: "Multi HODL and Turbocharge", content: "Multi HODL is a unique feature that lets users take leveraged long or short positions on crypto, essentially amplifying market exposure using borrowed funds. Turbocharge creates a chain of loans that convert each loan into more crypto, building a leveraged long position. These features are powerful but carry substantial risk and are best suited for experienced traders who understand leveraged positions." },
        { id: "yield-and-savings", title: "Yield and Savings", content: "YouHodler offers competitive yield on crypto deposits across 50+ assets. Stablecoin yields can reach up to 12% APY, while BTC and ETH earn lower but still attractive rates. Yields are paid weekly and there are no lock-up requirements for standard savings products. The platform uses deposited funds for lending operations to generate yield." },
      ]}
      fees={{
        "Loan Interest": "From ~5% (varies by LTV and collateral)",
        "Origination Fee": "None",
        "Conversion Fee": "0.5-1% spread",
        "Withdrawal Fee": "Varies by asset and network",
      }}
      security={[
        "Swiss-based with Crypto Valley Association membership",
        "Ledger Vault for institutional custody",
        "Crime insurance through Ledger",
        "Two-factor authentication",
        "3-D Secure for card transactions",
      ]}
      features={[
        "Crypto loans with up to 90% LTV",
        "50+ supported crypto assets",
        "Multi HODL leveraged trading",
        "Turbocharge chained loan feature",
        "High-yield savings accounts",
        "Fiat and stablecoin disbursement",
        "Mobile app for iOS and Android",
      ]}
      faqs={[
        { question: "Is YouHodler available in the US?", answer: "No. YouHodler does not serve US residents due to regulatory restrictions. The platform is available in most European countries and over 100 other jurisdictions worldwide." },
        { question: "Is 90% LTV safe?", answer: "A 90% LTV is very risky. Even a 10% price drop in your collateral could trigger liquidation. While YouHodler offers this option, most experts recommend staying at 50% LTV or below for volatile crypto assets. Only use high LTV if you fully understand and accept the liquidation risk." },
      ]}
      relatedReviews={[
        { name: "Nexo", slug: "/crypto-loans/reviews/nexo" },
        { name: "SALT Lending", slug: "/crypto-loans/reviews/salt-lending" },
      ]}
      relatedGuides={[
        { title: "Best Ethereum Loans", href: "/crypto-loans/best/ethereum-loans" },
        { title: "Overcollateralization Explained", href: "/crypto-loans/learn/overcollateralization-explained" },
      ]}
    />
  );
}
