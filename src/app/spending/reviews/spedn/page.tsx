import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `SPEDN App Review ${CURRENT_YEAR}: Fees, Features, Pros & Cons`,
  description:
    "Full SPEDN app review covering Flexa-powered crypto payments at retail stores, supported cryptocurrencies, merchant network, and in-store spending experience.",
};

export default function SpednReview() {
  return (
    <ReviewPage
      product={{
        name: "SPEDN",
        slug: "spedn",
        rating: 3.9,
        description:
          "SPEDN is a mobile wallet app powered by the Flexa payment network that enables instant cryptocurrency payments at participating brick-and-mortar retail stores using QR code-based checkout.",
        pros: [
          "Spend crypto at major physical retail stores",
          "Powered by Flexa network with instant settlement",
          "Supports multiple cryptocurrencies beyond Bitcoin",
          "No merchant integration needed beyond existing POS",
          "Instant payment confirmation with fraud protection",
        ],
        cons: [
          "Limited to participating Flexa network merchants",
          "In-store only, no online shopping support",
          "Requires QR code scanning at checkout",
          "Merchant network still growing in coverage",
        ],
        bestFor: "Crypto holders who want to spend at physical retail locations",
        affiliateUrl: "#",
        category: "spending",
      }}
      categoryName="Crypto Spending"
      categorySlug="spending"
      overview="SPEDN is the consumer-facing wallet application built on the Flexa payment network, designed specifically for spending cryptocurrency at physical retail locations. Unlike crypto debit cards that convert your crypto to fiat before the merchant is involved, SPEDN processes genuine crypto payments through Flexa's payment infrastructure. The merchant receives fiat settlement while the customer pays with their chosen cryptocurrency, all facilitated through a simple QR code scan at the point of sale.

The Flexa network underpinning SPEDN uses a collateralization mechanism backed by the AMP token to guarantee instant payment finality. This means merchants receive guaranteed payment confirmation in seconds, eliminating the risk of charge-backs or unconfirmed transactions. This technical architecture solves one of the fundamental challenges of crypto payments at physical stores: the need for immediate finality in a face-to-face transaction.

SPEDN supports a variety of cryptocurrencies including Bitcoin, Ethereum, Litecoin, and several others. The merchant network includes major US retailers, though coverage continues to expand. The app experience centers around a simple interface: select your payment crypto, scan the store QR code or present your own code to be scanned, and the payment processes instantly."
      sections={[
        {
          id: "payment-experience",
          title: "In-Store Payment Experience",
          content:
            "Using SPEDN at a participating store follows a straightforward flow. Open the app, select which cryptocurrency you want to spend, and a payment-ready QR code appears on screen. At checkout, present this QR code to the cashier who scans it with their existing point-of-sale terminal. Alternatively, some stores display a store QR code that you scan with the SPEDN app. Payment confirmation happens in under a second, matching the speed of traditional card payments. The experience feels natural for both the customer and cashier, requiring no special training or equipment beyond what the store already uses.",
        },
        {
          id: "flexa-network",
          title: "Flexa Payment Network",
          content:
            "Flexa is the payment network that powers SPEDN and enables instant, fraud-proof crypto payments. The network uses AMP token collateral pools to guarantee payment finality before the underlying crypto transaction confirms on-chain. When you make a payment, AMP tokens are temporarily staked as collateral, the merchant receives guaranteed fiat settlement, and your crypto is transferred once confirmed. This mechanism eliminates the double-spend risk and confirmation delay issues that have historically prevented crypto adoption at physical retail. Flexa processes payments across multiple blockchain networks including Bitcoin, Ethereum, and Litecoin.",
        },
        {
          id: "supported-merchants",
          title: "Merchant Network and Coverage",
          content:
            "The SPEDN merchant network includes major US retail brands across categories like electronics, home improvement, food and beverage, and movie theaters. Notable participating merchants have included chains with thousands of locations nationwide. The merchant network is growing as Flexa establishes partnerships with additional point-of-sale providers and retail chains. Coverage is strongest in major metropolitan areas. The SPEDN app includes a merchant locator that shows nearby participating stores based on your location, making it easy to find where you can spend crypto in your area.",
        },
        {
          id: "currencies-wallets",
          title: "Supported Currencies and Wallet Features",
          content:
            "SPEDN supports multiple cryptocurrencies for payment including Bitcoin, Ethereum, Litecoin, Zcash, and select stablecoins. Users can hold multiple currencies in the app and choose which to spend at checkout. The wallet provides basic functionality for receiving and storing crypto assets, though it is designed primarily as a spending wallet rather than a full-featured storage solution. The app displays current balances, transaction history, and real-time exchange rates. For large holdings, users may prefer to keep funds in a separate wallet and transfer to SPEDN only amounts intended for spending.",
        },
      ]}
      fees={{
        "App Fee": "Free to download and use",
        "Transaction Fee": "No additional fee beyond exchange rate",
        "Merchant Fee": "Paid by merchant (lower than card processing)",
        "Withdrawal": "Standard network fees",
        "Monthly Fee": "None",
      }}
      security={[
        "Flexa collateralization eliminates double-spend risk",
        "Instant payment finality for merchants",
        "No sensitive payment data transmitted",
        "Biometric app authentication",
        "QR code payment does not expose wallet details",
      ]}
      features={[
        "In-store crypto payments via QR code",
        "Flexa network instant settlement",
        "Multiple cryptocurrency support",
        "Merchant locator with nearby store map",
        "Real-time exchange rate display",
        "Transaction history and spending tracking",
      ]}
      faqs={[
        {
          question: "Where can I use SPEDN?",
          answer:
            "SPEDN works at participating merchants on the Flexa payment network. The app includes a merchant locator showing nearby supported stores. Coverage is strongest in major US metropolitan areas.",
        },
        {
          question: "Does SPEDN charge transaction fees?",
          answer:
            "SPEDN does not charge users a transaction fee. The exchange rate at the time of payment determines the crypto amount deducted. Merchants pay a processing fee to Flexa that is lower than traditional card processing fees.",
        },
        {
          question: "How fast are SPEDN payments?",
          answer:
            "Payments confirm in under one second thanks to Flexa's AMP-collateralized payment system. The speed matches or exceeds traditional card payment confirmation times.",
        },
      ]}
      relatedReviews={[
        { name: "Flexa", slug: "flexa" },
        { name: "BitPay", slug: "bitpay" },
        { name: "Fold App", slug: "fold-app" },
      ]}
      relatedGuides={[
        { title: "Crypto Point of Sale Guide", href: "/spending/learn/crypto-point-of-sale" },
        { title: "Where to Spend Crypto", href: "/spending/learn/where-to-spend-crypto" },
      ]}
    />
  );
}
