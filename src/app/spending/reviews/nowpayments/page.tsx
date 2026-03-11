import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NOWPayments Review (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `NOWPayments review for ${CURRENT_YEAR}. Crypto payment gateway with 200+ coins, merchant tools, subscription billing, and API integration options.`,
  alternates: { canonical: "/spending/reviews/nowpayments" },
};

export default function NOWPaymentsReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "NOWPayments",
        slug: "nowpayments",
        rating: 3.9,
        description: "NOWPayments is a non-custodial crypto payment gateway supporting 200+ cryptocurrencies with simple API integration, e-commerce plugins, and subscription billing for merchants.",
        pros: [
          "200+ supported cryptocurrencies",
          "Non-custodial payment processing",
          "Simple API and plugin integrations",
          "Subscription and recurring billing support",
        ],
        cons: [
          "0.5% processing fee plus exchange spread",
          "Less established brand than BitPay or CoinGate",
          "Customer support can be slow during peak times",
        ],
        bestFor: "Merchants wanting the widest cryptocurrency acceptance with non-custodial payment processing and subscription billing capabilities",
        affiliateUrl: "#",
        category: "spending",
      }}
      categoryName="Crypto Spending"
      categorySlug="spending"
      overview="NOWPayments is a crypto payment gateway built by the team behind ChangeNOW exchange. It distinguishes itself with support for over 200 cryptocurrencies, making it the most coin-diverse payment processor in the market. The platform is non-custodial, meaning merchant funds go directly to their wallets without NOWPayments holding custody. It offers plugins for major e-commerce platforms, a robust API, payment links, invoicing, and subscription billing capabilities."
      sections={[
        { id: "integrations", title: "Integrations &amp; Plugins", content: "NOWPayments provides pre-built plugins for WooCommerce, Shopify, Magento, WHMCS, PrestaShop, and OpenCart. For custom integrations, their REST API is well-documented and straightforward. Payment widgets can be embedded on any website with a few lines of code. Donation buttons are available for non-profit and content creators. The platform also supports point-of-sale integration for physical stores through QR code generation." },
        { id: "subscriptions", title: "Subscription Billing", content: "One of NOWPayments unique features is crypto subscription billing. Merchants can set up recurring payments in cryptocurrency, which is unusual in the crypto payment space. Customers authorize recurring charges from their crypto wallet. This is particularly useful for SaaS businesses, membership sites, and subscription boxes that want to accept crypto for ongoing services." },
        { id: "experience", title: "User Experience", content: "The merchant dashboard is functional and provides transaction monitoring, payment history, and settlement tracking. Setting up a new payment gateway takes under 30 minutes with the plugins. The customer checkout experience shows a QR code and payment address with a countdown timer. Auto-conversion allows merchants to receive a different crypto than what the customer pays, powered by ChangeNOW exchange in the background." },
      ]}
      fees={{
        "Processing Fee": "0.5% per transaction",
        "Exchange Spread": "Built into conversion rate",
        "Setup Fee": "Free",
        "Monthly Fee": "Free for standard plan",
        "Business Plan": "$29.99/month (premium features)",
        "Enterprise Plan": "Custom pricing",
      }}
      security={[
        "Non-custodial processing (funds go directly to merchant wallet)",
        "SSL encryption on all payment pages",
        "Two-factor authentication for dashboard access",
        "IP whitelisting for API access",
        "Automated payment verification system",
      ]}
      features={[
        "200+ supported cryptocurrencies",
        "Non-custodial payment processing",
        "Subscription and recurring billing",
        "E-commerce plugins for major platforms",
        "Auto-conversion between cryptocurrencies",
        "Donation buttons and payment links",
        "Mass payouts for affiliate programs",
      ]}
      faqs={[
        { question: "Is NOWPayments custodial?", answer: "No. NOWPayments is non-custodial. Payments go directly from the customer to the merchant wallet address. NOWPayments never holds your funds. This reduces counterparty risk but means merchants are responsible for their own wallet security." },
        { question: "How many cryptocurrencies does NOWPayments support?", answer: "NOWPayments supports over 200 cryptocurrencies including Bitcoin, Ethereum, major stablecoins, and a wide range of altcoins. New coins are added regularly through their partnership with ChangeNOW exchange." },
        { question: "Can I accept crypto subscriptions with NOWPayments?", answer: "Yes. NOWPayments offers subscription billing that allows merchants to set up recurring crypto payments. Customers authorize the recurring charge and payments are processed automatically on the billing cycle you define." },
      ]}
      relatedReviews={[
        { name: "CoinGate", slug: "coingate" },
        { name: "BitPay", slug: "bitpay-app" },
        { name: "Crypto.com Pay", slug: "crypto-com-pay" },
      ]}
      relatedGuides={[
        { title: "Merchant Adoption Guide", href: "/spending/learn/merchant-adoption-guide" },
        { title: "Layer 2 Payments", href: "/spending/learn/layer-2-payments" },
      ]}
    />
  );
}
