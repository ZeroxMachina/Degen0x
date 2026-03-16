import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `BitPay App Review (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `In-depth BitPay app review for ${CURRENT_YEAR}. Wallet features, bill pay, Visa card, merchant payments, supported cryptocurrencies, fees, and security.`,
  alternates: { canonical: "/spending/reviews/bitpay-app" },
};

export default function BitPayAppReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "BitPay",
        slug: "bitpay-app",
        rating: 4.1,
        description: "BitPay is a veteran crypto payments platform offering a wallet app, Visa debit card, bill pay, and merchant payment processing for Bitcoin, Ethereum, and stablecoins.",
        pros: [
          "Visa debit card for spending crypto at any Visa merchant",
          "Bill pay feature for rent, utilities, and other expenses",
          "Supports Bitcoin, Ethereum, and major stablecoins",
          "Long track record since 2011",
        ],
        cons: [
          "Limited altcoin support compared to competitors",
          "Card only available in the US",
          "Conversion fees can add up on frequent transactions",
        ],
        bestFor: "US-based users who want an all-in-one crypto spending solution with a debit card and bill pay",
        affiliateUrl: "#",
        category: "spending",
      }}
      categoryName="Crypto Spending"
      categorySlug="spending"
      overview="BitPay has been a cornerstone of the crypto payments ecosystem since 2011, serving as both a merchant payment processor and a consumer-facing spending platform. The BitPay app combines a non-custodial wallet with a prepaid Visa debit card and a bill pay service, creating a comprehensive solution for converting and spending crypto in everyday life. Users can store Bitcoin, Ethereum, and several stablecoins, then spend them through the card at millions of Visa merchants or pay bills directly from the app."
      sections={[
        { id: "wallet", title: "Wallet Features", content: "The BitPay wallet is non-custodial, meaning you control your private keys. It supports Bitcoin, Bitcoin Cash, Ethereum, Dogecoin, Litecoin, and stablecoins including USDC, BUSD, and DAI. The wallet includes built-in exchange functionality through partner integrations, allowing you to swap between supported assets. Multi-signature security is available for shared wallets. The wallet also supports importing existing wallets via recovery phrases." },
        { id: "card", title: "BitPay Visa Card", content: "The BitPay Visa prepaid debit card lets you spend crypto anywhere Visa is accepted. You load the card by converting crypto from your BitPay wallet into US dollars. The card has no annual fee and charges a 1% conversion fee when loading. ATM withdrawals are available at Allpoint ATMs for free and $2.50 at other ATMs. The card supports Apple Pay and Google Pay for contactless payments." },
        { id: "billpay", title: "Bill Pay Service", content: "BitPay bill pay allows you to pay bills from your crypto balance. Supported bill types include rent, utilities, phone, internet, insurance, and credit card payments. The service converts your crypto to fiat and sends the payment via ACH transfer. A 1% network cost applies to bill payments. Processing times are typically 1-3 business days. This feature is currently available only in the US." },
      ]}
      fees={{
        "Card Annual Fee": "Free",
        "Card Loading Fee": "1% conversion",
        "ATM Withdrawal (Allpoint)": "Free",
        "ATM Withdrawal (Other)": "$2.50",
        "Bill Pay Fee": "1% network cost",
        "Wallet Transfers": "Network fees only",
      }}
      security={[
        "Non-custodial wallet with user-controlled private keys",
        "Multi-signature wallet support for shared accounts",
        "Biometric authentication (Face ID, fingerprint)",
        "PIN protection for card transactions",
        "12-word recovery phrase backup",
      ]}
      features={[
        "Non-custodial multi-currency wallet",
        "Prepaid Visa debit card with Apple Pay and Google Pay",
        "Bill pay for rent, utilities, and more",
        "In-app crypto exchange and swaps",
        "Gift card purchasing for major retailers",
        "QR code payments at BitPay merchants",
      ]}
      faqs={[
        { question: "Is the BitPay wallet custodial or non-custodial?", answer: "The BitPay wallet is non-custodial. You hold your own private keys and have full control over your funds. BitPay cannot access or freeze your wallet. You are responsible for backing up your 12-word recovery phrase." },
        { question: "Can I use the BitPay card outside the US?", answer: "The BitPay Visa card is currently only available to US residents. International users can still use the BitPay wallet for storing crypto, making merchant payments, and purchasing gift cards." },
        { question: "What cryptocurrencies does BitPay support?", answer: "BitPay supports Bitcoin, Bitcoin Cash, Ethereum, Dogecoin, Litecoin, Shiba Inu, and stablecoins including USDC, BUSD, DAI, and GUSD. The supported list is periodically expanded." },
      ]}
      relatedReviews={[
        { name: "Crypto.com Pay", slug: "crypto-com-pay" },
        { name: "CoinGate", slug: "coingate" },
        { name: "NOWPayments", slug: "nowpayments" },
      ]}
      relatedGuides={[
        { title: "Best Crypto Bill Pay", href: "/spending/best/bill-pay" },
        { title: "Bitcoin Payments Guide", href: "/spending/learn/bitcoin-payments-guide" },
      ]}
    />
  );
}
