import { Metadata } from "next";
import { cryptoCards } from "@/data/crypto-cards";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

const product = cryptoCards.find((c) => c.slug === "binance-card")!;

export const metadata: Metadata = {
  title: `Binance Card Review (${CURRENT_YEAR}): Cashback, Features & Pros/Cons | CryptoDegen`,
  description: "In-depth Binance Card review covering BNB-tiered cashback, zero transaction fees, supported cryptocurrencies, and regional availability.",
};

export default function BinanceCardReviewPage() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      overview={`The Binance Card is a Visa debit card that connects directly to your Binance spot wallet, allowing you to spend your crypto holdings anywhere Visa is accepted. The card stands out with zero transaction fees on purchases and a cashback program that can reach up to 8% based on your BNB holdings. Crypto is automatically converted to fiat at the point of sale using competitive exchange rates.\n\nThe card supports spending from multiple cryptocurrencies including Bitcoin, Ethereum, BNB, and stablecoins. You can set a priority order for which assets are spent first, giving you control over your spending strategy. The real-time conversion means you always pay the current market rate without needing to pre-load fiat onto the card.\n\nThe primary limitation is geographic availability. The Binance Card is not available in the United States and availability varies across other markets. The highest cashback tiers require holding substantial amounts of BNB, with the top 8% tier requiring 600+ BNB, making it most practical for committed Binance ecosystem participants.`}
      sections={[
        { id: "cashback-tiers", title: "Cashback Tiers", content: "Binance Card cashback is determined by your BNB holdings on the platform. The base tier offers 0.1% cashback with no BNB requirement. Holding 1 BNB unlocks 2%, 10 BNB unlocks 3%, 40 BNB unlocks 4%, 100 BNB unlocks 5%, and 600+ BNB unlocks the maximum 8%. Cashback is paid in BNB and credited to your spot wallet after each transaction. The tiered system incentivizes deeper commitment to the Binance ecosystem." },
        { id: "spending-experience", title: "Spending Experience", content: "The Binance Card converts crypto to the local fiat currency at the point of sale with zero transaction fees. You set a spending priority order for your assets, so the card draws from your preferred cryptocurrency first. If your primary asset has insufficient balance, it automatically moves to the next in your priority list. The conversion uses Binance's exchange rates, which are among the most competitive in the industry. Transaction history syncs with your Binance app for unified portfolio tracking." },
        { id: "supported-regions", title: "Regional Availability", content: "The Binance Card is primarily available in the European Economic Area through the Binance Visa partnership. It has also been available in select markets across Asia, Latin America, and the Middle East depending on local regulatory approvals. The card is not available in the United States. Availability can change as Binance navigates different regulatory environments. Check the Binance website for current availability in your country." },
        { id: "ecosystem-integration", title: "Binance Ecosystem Integration", content: "The card integrates with the broader Binance ecosystem including Binance Earn, Binance Pay, and the spot trading platform. Your card spending draws from the same wallet used for trading, eliminating the need to transfer between accounts. Binance Pay enables peer-to-peer crypto transfers to other Binance users. The unified experience means your card, trading, earning, and payments are all managed through a single app with consistent security and account management." },
      ]}
      fees={{ "Annual Fee": "None", "Transaction Fee": "None", "Cashback (No BNB)": "0.1%", "Cashback (1 BNB)": "2%", "Cashback (10 BNB)": "3%", "Cashback (600+ BNB)": "Up to 8%", "ATM Withdrawal": "Varies by region" }}
      security={["Binance platform security with SAFU insurance fund", "Two-factor authentication", "Card freeze via mobile app", "Real-time transaction notifications", "Visa Zero Liability protection"]}
      features={["Up to 8% cashback based on BNB holdings", "Zero transaction fees on purchases", "Spend from multiple cryptocurrencies", "Customizable asset spending priority", "Competitive Binance exchange rates", "Binance ecosystem integration", "Real-time crypto-to-fiat conversion"]}
      faqs={[
        { question: "Is the Binance Card available in the US?", answer: "No, the Binance Card is not currently available in the United States. It is primarily available in the European Economic Area and select other markets." },
        { question: "Do I need to hold BNB for cashback?", answer: "A base 0.1% cashback is available without BNB. Higher tiers from 2% to 8% require holding 1 to 600+ BNB in your Binance account." },
        { question: "How is crypto converted when I make a purchase?", answer: "The card automatically converts your crypto to the local fiat currency at the point of sale using Binance exchange rates. The asset used follows your priority order settings." },
      ]}
      relatedReviews={[{ name: "Crypto.com Visa", slug: "crypto-com-visa" }, { name: "Coinbase Card", slug: "coinbase-card" }, { name: "Bybit Card", slug: "bybit-card" }]}
      relatedGuides={[{ title: "Crypto Card Fees Compared", href: "/crypto-cards/learn/crypto-card-fees-compared" }, { title: "Best Crypto Card Rewards", href: "/crypto-cards/learn/best-crypto-card-rewards" }]}
    />
  );
}
