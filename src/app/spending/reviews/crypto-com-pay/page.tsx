import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto.com Pay Review (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Crypto.com Pay review for ${CURRENT_YEAR}. Merchant payments, supported cryptos, CRO cashback, integration options, fees, and user experience.`,
  alternates: { canonical: "/spending/reviews/crypto-com-pay" },
};

export default function CryptoComPayReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "Crypto.com Pay",
        slug: "crypto-com-pay",
        rating: 4.2,
        description: "Crypto.com Pay is a payment solution that lets users pay merchants with crypto while earning CRO cashback rewards, integrated within the Crypto.com ecosystem.",
        pros: [
          "Up to 10% CRO cashback on merchant payments",
          "Supports 30+ cryptocurrencies",
          "Seamless integration with Crypto.com app",
          "Growing merchant network globally",
        ],
        cons: [
          "Cashback rates depend on CRO staking tier",
          "Merchant acceptance still limited vs traditional payments",
          "Requires Crypto.com account and app",
        ],
        bestFor: "Crypto.com ecosystem users who want to earn CRO rewards when paying merchants with cryptocurrency",
        affiliateUrl: "#",
        category: "spending",
      }}
      categoryName="Crypto Spending"
      categorySlug="spending"
      overview="Crypto.com Pay is the payment arm of the broader Crypto.com ecosystem, designed to let consumers pay merchants using cryptocurrency directly from their Crypto.com app wallet. What sets it apart from generic crypto payment methods is the integrated CRO cashback reward system. Depending on your CRO staking tier, you can earn between 1.5% and 10% back in CRO on every qualifying merchant payment. The service supports over 30 cryptocurrencies and has partnerships with hundreds of online merchants."
      sections={[
        { id: "cashback", title: "CRO Cashback Rewards", content: "The standout feature of Crypto.com Pay is its tiered cashback system. Users earn CRO tokens back on eligible merchant purchases. The cashback percentage depends on your CRO staking level in the Crypto.com app: no stake earns 1.5%, staking $400+ earns 2%, $4,000+ earns 3%, and $40,000+ earns up to 10% on select merchants. Cashback is credited instantly in CRO to your Crypto.com wallet. This makes Crypto.com Pay one of the highest-reward crypto payment methods available." },
        { id: "merchants", title: "Merchant Network", content: "Crypto.com Pay has onboarded hundreds of merchants spanning categories like travel, electronics, fashion, gaming, and services. Notable partners include Ledger, Time Magazine, and various online retailers. The merchant checkout experience integrates a Crypto.com Pay button that redirects to the app for payment confirmation. For online merchants, integration is available via API, plugins for Shopify and WooCommerce, and payment links." },
        { id: "experience", title: "User Experience", content: "Paying with Crypto.com Pay is straightforward for existing Crypto.com users. At checkout, select Crypto.com Pay, scan a QR code or approve in the app, choose your payment cryptocurrency, and confirm. The payment is processed instantly. The app displays your cashback earnings in real time. For peer-to-peer payments, users can send crypto to other Crypto.com users for free using the Pay feature, making it useful for splitting bills or sending money to friends." },
      ]}
      fees={{
        "Merchant Payment Fee": "0% for consumers (merchants pay processing fee)",
        "P2P Transfers": "Free between Crypto.com users",
        "Conversion Spread": "0.4-0.8% built into exchange rate",
        "Minimum Payment": "Varies by merchant",
      }}
      security={[
        "Payments processed through Crypto.com secure infrastructure",
        "Biometric and PIN authentication for payment approval",
        "Real-time transaction notifications",
        "No sharing of crypto wallet details with merchants",
        "SOC 2 Type II certified platform",
      ]}
      features={[
        "Up to 10% CRO cashback on merchant payments",
        "30+ supported cryptocurrencies for payment",
        "Free peer-to-peer transfers between Crypto.com users",
        "QR code and in-app payment approval",
        "Merchant API and e-commerce plugins",
        "Real-time cashback tracking",
      ]}
      faqs={[
        { question: "Do I need to stake CRO to use Crypto.com Pay?", answer: "No, you can use Crypto.com Pay without staking CRO and still earn 1.5% cashback. However, staking CRO increases your cashback rate up to 10% depending on the tier and merchant." },
        { question: "Which cryptocurrencies can I pay with?", answer: "Crypto.com Pay supports over 30 cryptocurrencies including Bitcoin, Ethereum, CRO, USDC, USDT, Litecoin, and many others available in the Crypto.com app." },
        { question: "How is Crypto.com Pay different from the Crypto.com Visa card?", answer: "Crypto.com Pay is for direct merchant payments (online checkout), while the Visa card is a debit card for in-store and online purchases at any Visa merchant. Both offer CRO cashback but through different mechanisms." },
      ]}
      relatedReviews={[
        { name: "BitPay", slug: "bitpay-app" },
        { name: "CoinGate", slug: "coingate" },
        { name: "NOWPayments", slug: "nowpayments" },
      ]}
      relatedGuides={[
        { title: "Best Crypto Cashback", href: "/spending/best/cashback" },
        { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments" },
      ]}
    />
  );
}
