import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Prepaid vs Debit Crypto Cards (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Understand the differences between prepaid and debit crypto cards. Compare funding models, features, fees, and which card type is best for your needs.",
};

export default function PrepaidVsDebitCryptoPage() {
  return (
    <LearnPageLayout
      title="Prepaid vs Debit Crypto Cards"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="8 min"
      intro="Crypto cards come in two main varieties: prepaid cards that require loading funds before spending, and debit cards that draw directly from your crypto or exchange balance at the point of sale. Each model has distinct advantages for different use cases. Understanding the differences helps you choose the right card for your spending habits and financial goals."
      toc={[
        { id: "prepaid-explained", title: "How Prepaid Crypto Cards Work", level: 2 },
        { id: "debit-explained", title: "How Debit Crypto Cards Work", level: 2 },
        { id: "credit-line-cards", title: "Credit-Line Crypto Cards", level: 2 },
        { id: "key-differences", title: "Key Differences Compared", level: 2 },
        { id: "choosing-right-card", title: "Choosing the Right Card Type", level: 2 },
      ]}
      faqs={[
        { question: "Can I overspend on a prepaid crypto card?", answer: "No, prepaid cards can only spend the balance loaded onto them. This makes them a good budgeting tool since you cannot exceed your loaded amount. Transactions that exceed your balance will be declined." },
        { question: "Do debit crypto cards sell my crypto instantly?", answer: "Yes, debit-style crypto cards convert your crypto to fiat at the moment of purchase. The exchange rate is locked at the transaction time. Your crypto is sold from your exchange or wallet balance in real-time." },
        { question: "Which type is better for daily spending?", answer: "Debit cards are more convenient for daily use since they draw from your existing balance without requiring separate loading steps. Prepaid cards require planning ahead to ensure sufficient funds are loaded. For budget control, prepaid cards offer clearer spending limits." },
      ]}
      relatedArticles={[
        { title: "Crypto Card Fees Compared", href: "/crypto-cards/learn/crypto-card-fees-compared", category: "Crypto Cards" },
        { title: "Best Crypto Card Rewards", href: "/crypto-cards/learn/best-crypto-card-rewards", category: "Crypto Cards" },
        { title: "Crypto Card Security Tips", href: "/crypto-cards/learn/crypto-card-security", category: "Crypto Cards" },
      ]}
    >
      <h2 id="prepaid-explained">How Prepaid Crypto Cards Work</h2>
      <p>Prepaid crypto cards require you to convert cryptocurrency to fiat and load it onto the card before making purchases. The BitPay Card is a classic example: you open the app, convert BTC to USD, and the dollar amount appears on your card balance. You then spend those dollars like any prepaid Visa or Mastercard. The conversion happens when you load the card, not when you make a purchase. This means you lock in the exchange rate at loading time and know exactly how much spending power you have. The card cannot be overdrawn since spending is limited to the loaded balance.</p>

      <h2 id="debit-explained">How Debit Crypto Cards Work</h2>
      <p>Debit crypto cards draw directly from your exchange or wallet balance at the point of sale. The Coinbase Card and Crypto.com Card work this way: when you tap your card at a merchant, the system instantly converts the required amount of crypto from your account to fiat and pays the merchant. You do not need to pre-load anything. This model is more convenient since your entire exchange balance is available for spending at any time. The exchange rate is determined at the moment of purchase, which means your spending power fluctuates with crypto prices.</p>

      <h2 id="credit-line-cards">Credit-Line Crypto Cards</h2>
      <p>A third category is credit-line cards like the Nexo Card, which borrow against your crypto collateral rather than selling it. You deposit crypto as collateral and receive a spending credit line. Purchases add to your outstanding balance rather than selling your assets. This model avoids triggering capital gains tax events and allows your crypto to continue appreciating while you spend. The tradeoff is interest on the outstanding balance and the risk of collateral liquidation if crypto prices drop significantly.</p>

      <h2 id="key-differences">Key Differences Compared</h2>
      <p>The key differences center around timing, control, and tax implications. Prepaid cards lock in the exchange rate at loading time, giving price certainty but requiring planning. Debit cards convert at purchase time, offering convenience but exposure to real-time price fluctuation. For taxes, prepaid cards create one taxable event at loading while debit cards create a taxable event for each purchase. Budgeting is easier with prepaid cards since the balance is fixed. Debit cards offer more spending flexibility since your full exchange balance is accessible. Credit-line cards defer the tax event entirely but add interest costs.</p>

      <h2 id="choosing-right-card">Choosing the Right Card Type</h2>
      <p>Choose a prepaid card if you want clear spending limits, prefer to control the exchange rate timing, or want to simplify tax reporting with fewer conversion events. Choose a debit card if you want maximum convenience, do not want to manage loading, and are comfortable with real-time conversion. Choose a credit-line card if you are a long-term holder who wants to avoid selling, have stable collateral, and can manage the interest and liquidation risks. Many crypto users carry multiple cards: a debit card for everyday convenience and a credit-line card for large purchases where they want to avoid triggering capital gains.</p>
    </LearnPageLayout>
  );
}
