import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use Bitcoin ATMs (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how to buy and sell Bitcoin at ATMs. Find locations, understand fees, limits, KYC requirements, and step-by-step instructions for using crypto ATMs.",
};

export default function BitcoinAtmGuidePage() {
  return (
    <LearnPageLayout
      title="How to Use Bitcoin ATMs"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Bitcoin ATMs provide a physical bridge between cash and cryptocurrency, allowing you to buy Bitcoin with cash or sell Bitcoin for cash without needing a bank account or exchange. With over 38,000 Bitcoin ATMs installed worldwide, they offer accessibility for unbanked populations and convenience for anyone who prefers cash transactions. This guide walks you through finding, using, and understanding the costs of Bitcoin ATMs."
      toc={[
        { id: "how-btc-atms-work", title: "How Bitcoin ATMs Work", level: 2 },
        { id: "finding-atms", title: "Finding a Bitcoin ATM Near You", level: 2 },
        { id: "buying-bitcoin", title: "Buying Bitcoin at an ATM", level: 2 },
        { id: "selling-bitcoin", title: "Selling Bitcoin for Cash", level: 2 },
        { id: "fees-limits", title: "Fees, Limits, and KYC Requirements", level: 2 },
      ]}
      faqs={[
        { question: "How much do Bitcoin ATMs charge?", answer: "Bitcoin ATM fees typically range from 5-15% above the market price for purchases and 5-10% below market price for sales. The exact fee varies by operator, location, and transaction amount. Major operators like Bitcoin Depot, CoinFlip, and Coinsource tend to have more competitive rates than smaller independent operators." },
        { question: "Do I need ID to use a Bitcoin ATM?", answer: "It depends on the transaction amount and operator. Many ATMs allow purchases up to $250-500 with just a phone number for SMS verification. Larger transactions typically require government-issued photo ID and sometimes additional KYC steps. Requirements vary by state and country regulations." },
        { question: "Can I sell Bitcoin for cash at any Bitcoin ATM?", answer: "No, not all Bitcoin ATMs support selling. One-way ATMs only allow buying Bitcoin with cash. Two-way ATMs support both buying and selling. Approximately 30-40% of installed Bitcoin ATMs are two-way machines. Check the ATM's capabilities on CoinATMRadar before visiting." },
      ]}
      relatedArticles={[
        { title: "How to Spend Bitcoin", href: "/spending/learn/how-to-spend-bitcoin", category: "Spending" },
        { title: "Crypto Remittances", href: "/spending/learn/crypto-remittances", category: "Spending" },
        { title: "Best Crypto Cards", href: "/crypto-cards/best", category: "Crypto Cards" },
      ]}
    >
      <h2 id="how-btc-atms-work">How Bitcoin ATMs Work</h2>
      <p>Bitcoin ATMs are physical kiosks that connect to the Bitcoin network and allow users to buy or sell Bitcoin using cash, debit cards, or both. One-way machines only support buying Bitcoin with cash. Two-way machines support both buying and selling, dispensing cash when you sell Bitcoin. The machines typically include a QR code scanner to read your wallet address, a cash acceptor for deposits, and a screen for navigation. When you insert cash, the machine converts it to Bitcoin at the current market rate plus a fee and sends the BTC to your wallet address. The entire process takes just a few minutes for small transactions.</p>

      <h2 id="finding-atms">Finding a Bitcoin ATM Near You</h2>
      <p>CoinATMRadar is the most comprehensive Bitcoin ATM directory, listing over 38,000 machines worldwide with locations, operators, fees, supported cryptocurrencies, and buy/sell capabilities. You can filter by operator, crypto support, and whether the machine supports selling. Major operators in the US include Bitcoin Depot with over 7,000 machines, CoinFlip with 4,000+, and Coinsource. ATMs are commonly found in convenience stores, gas stations, shopping malls, and laundromats. Most are concentrated in the US, Canada, and Europe, with growing deployments in Latin America and Asia.</p>

      <h2 id="buying-bitcoin">Buying Bitcoin at an ATM</h2>
      <p>To buy Bitcoin, approach the ATM and select the purchase option. You will be prompted to verify your identity, which may be as simple as entering your phone number for small amounts or scanning your ID for larger transactions. Next, scan the QR code of your Bitcoin wallet address. If you do not have a wallet, some ATMs can generate a paper wallet for you, though this is not recommended for security reasons. Insert your cash into the bill acceptor, confirm the transaction details including the amount, exchange rate, and fee, then confirm the purchase. The Bitcoin will be sent to your wallet, typically arriving within 10-30 minutes depending on network confirmation times.</p>

      <h2 id="selling-bitcoin">Selling Bitcoin for Cash</h2>
      <p>Selling Bitcoin for cash requires a two-way ATM. Select the sell option and complete any required identity verification. The ATM displays a wallet address or QR code where you send your Bitcoin. After sending the BTC and waiting for network confirmation, the machine dispenses cash. Some operators require you to wait for one or more confirmations before dispensing, which can take 10-60 minutes. A few operators issue a redemption code that you can use to collect your cash later, avoiding the wait at the machine. Always verify the cash amount and exchange rate before confirming the sale.</p>

      <h2 id="fees-limits">Fees, Limits, and KYC Requirements</h2>
      <p>Bitcoin ATM fees are significantly higher than online exchanges, typically 5-15% for purchases and 5-10% for sales. This premium covers the convenience, machine maintenance, and compliance costs. Transaction limits vary by operator and verification level. With minimal verification like phone number only, limits typically range from $250-1,000 per transaction. With full ID verification, limits can reach $5,000-25,000 per transaction. KYC requirements are set by local regulations and operator policy. US machines generally require phone verification for small amounts and full ID for larger transactions. Always compare the displayed rate against the current market price to understand the true cost before completing your transaction.</p>
    </LearnPageLayout>
  );
}
