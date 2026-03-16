import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Club Card",
  slug: "club-card",
  rating: 3.6,
  description: "Club Card is a crypto-powered debit card that allows users to spend crypto assets directly with competitive exchange rates and multi-currency support.",
  pros: ["Multi-currency support", "Competitive exchange rates", "No hidden fees on transactions", "Works with multiple crypto wallets"],
  cons: ["Limited availability", "Smaller user base", "Fewer rewards than major competitors", "Less established brand"],
  bestFor: "Crypto holders looking for a straightforward way to spend multiple cryptocurrencies with fair exchange rates",
  affiliateUrl: "https://degen0x.com/go/club-card",
  category: "crypto-cards",
};

export const metadata: Metadata = {
  title: `Club Card Review (${CURRENT_YEAR}): Multi-Crypto Spending Card | ${SITE_NAME}`,
  description: "In-depth Club Card review covering multi-currency support, fees, exchange rates, and how it compares to other crypto debit cards.",
};

export default function ClubCardReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview="Club Card provides a crypto debit card that focuses on making it easy to spend cryptocurrency in everyday transactions. The card supports multiple cryptocurrencies and converts them to fiat at the point of sale with competitive exchange rates. Unlike some crypto cards that require pre-loading with fiat currency, Club Card can draw directly from your crypto balances. The platform aims to bridge the gap between holding cryptocurrency and using it for daily spending. The card works anywhere Visa or Mastercard is accepted, depending on the version, and provides a straightforward interface for managing which crypto assets are used for each transaction. For users who want to use their crypto holdings for everyday purchases without the hassle of manually selling and transferring to a bank account, Club Card offers a practical solution."
      sections={[
        { id: "multi-currency", title: "Multi-Currency Support", content: "Club Card supports a range of cryptocurrencies for spending, including Bitcoin, Ethereum, and several major altcoins and stablecoins. Users can select which cryptocurrency to spend for each transaction or set a default spending hierarchy. When you make a purchase, the card automatically converts the selected cryptocurrency to the local fiat currency at the current exchange rate. The exchange rates are generally competitive, with a small spread that serves as one of the primary ways the platform generates revenue. Stablecoin spending incurs minimal conversion cost since the exchange rate is essentially one-to-one with the dollar. This multi-currency flexibility is particularly useful for users who hold diverse crypto portfolios and want the option to spend from whichever asset is most advantageous at any given time." },
        { id: "exchange-rates", title: "Exchange Rates and Fees", content: "Club Card uses real-time market rates with a transparent spread for crypto-to-fiat conversion. The spread varies by cryptocurrency but is generally competitive with other crypto spending cards. There are no hidden fees on standard transactions, and the card does not charge a monthly or annual fee for basic usage. International transactions may incur a small foreign exchange fee depending on the card network and your specific plan. ATM withdrawals have a monthly free limit, with fees applied beyond that threshold. The transparent fee structure is one of Club Card's advantages, as some competing cards have complex fee schedules that can erode the value of rewards. For users who prioritize knowing exactly what they will pay on each transaction, Club Card's straightforward pricing is appealing." },
        { id: "app-experience", title: "App and User Experience", content: "The Club Card mobile app provides a clean interface for managing your card, viewing transaction history, and selecting spending currencies. Real-time notifications alert you to every transaction, and the app displays both the crypto amount debited and the fiat amount charged. Portfolio tracking within the app shows your current balances across supported cryptocurrencies. The app includes security features like instant card freeze and unfreeze, transaction limits, and notification controls. Setup is relatively straightforward, with identity verification required for regulatory compliance. The card can typically be ordered and received within one to two weeks, with a virtual card available immediately for online purchases in some markets." },
        { id: "limitations", title: "Limitations and Considerations", content: "Club Card is a smaller player in the crypto card market compared to established names like Crypto.com and Coinbase. This means a smaller user community, fewer integration partners, and potentially less robust customer support infrastructure. The card's availability is limited to certain regions, and not all features may be available in every market. The rewards program, if offered, is typically less generous than major competitors who use rewards as a primary marketing tool. For users prioritizing maximum cashback or reward rates, larger platforms may be more attractive. However, Club Card's focus on fair exchange rates and transparent fees may result in better overall value for users who primarily want to spend their crypto rather than earn rewards. The platform's smaller scale also means updates and new features may roll out more slowly than on larger platforms." },
      ]}
      fees={{ "Annual Fee": "None (basic tier)", "Monthly Fee": "None", "Crypto Conversion Spread": "Variable by asset", "Foreign Transaction Fee": "Varies by plan", "ATM Withdrawal": "Free monthly limit, then small fee" }}
      security={["Card network security (Visa/Mastercard)", "Real-time transaction notifications", "Instant card freeze/unfreeze", "Two-factor authentication", "KYC verification required"]}
      features={["Multi-cryptocurrency spending", "Real-time crypto-to-fiat conversion", "Mobile app management", "Virtual card for online purchases", "Transaction notifications", "Portfolio tracking"]}
      faqs={[
        { question: "Where is Club Card available?", answer: "Club Card availability varies by region. Check the Club Card website for current supported countries and territories. Availability may expand over time as the platform grows and secures additional licensing." },
        { question: "Can I spend stablecoins with Club Card?", answer: "Yes, Club Card supports stablecoin spending. Using stablecoins like USDC for transactions minimizes conversion costs since the exchange rate is nearly one-to-one with the dollar, making stablecoin spending one of the most cost-effective uses of the card." },
      ]}
      relatedReviews={[
        { name: "Wirex Card", slug: "wirex-card" },
        { name: "Bitpay Card", slug: "bitpay-card" },
      ]}
      relatedGuides={[
        { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work" },
        { title: "Crypto Card Fees Explained", href: "/crypto-cards/learn/crypto-card-fees-explained" },
      ]}
    />
  );
}
