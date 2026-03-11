import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Accepting Bitcoin as a Merchant (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Complete guide for merchants accepting Bitcoin payments. Payment processors, setup guides, tax considerations, and best practices for business crypto acceptance.",
};

export default function BitcoinPaymentsMerchantsPage() {
  return (
    <LearnPageLayout title="Accepting Bitcoin as a Merchant" categoryName="Crypto Spending" categorySlug="spending" readTime="8 min read"
      intro="Accepting Bitcoin payments opens your business to a global customer base of crypto holders, reduces payment processing fees compared to credit cards, eliminates chargeback fraud, and positions your brand as innovative and forward-thinking. Whether you run an online store, a physical retail location, or a service business, multiple solutions exist to integrate Bitcoin payments with minimal technical complexity and full control over your currency exposure."
      toc={[
        { id: "why-accept", title: "Why Accept Bitcoin?", level: 2 },
        { id: "payment-processors", title: "Payment Processors", level: 2 },
        { id: "implementation", title: "Implementation Guide", level: 2 },
        { id: "accounting-tax", title: "Accounting and Tax Considerations", level: 2 },
      ]}
      faqs={[
        { question: "Do I have to hold Bitcoin if I accept it?", answer: "No. Payment processors like BTCPay Server, BitPay, and Strike can automatically convert Bitcoin payments to fiat currency (USD, EUR) and deposit to your bank account. You can accept Bitcoin from customers while receiving 100% fiat, eliminating cryptocurrency price risk. Some merchants choose to keep a percentage in Bitcoin as an investment." },
        { question: "What are the fees for accepting Bitcoin?", answer: "Bitcoin payment processing fees are typically lower than credit card fees. BTCPay Server is free and open-source (you only pay Bitcoin network fees, typically under $1). BitPay charges around 1% per transaction. Strike charges as low as 0.1%. Compare this to credit card processing at 2-3% plus fixed per-transaction fees. For high-volume merchants, the savings can be substantial." },
        { question: "What about Bitcoin price volatility?", answer: "If you convert Bitcoin to fiat immediately through a payment processor, volatility is irrelevant because the conversion happens in seconds. The customer pays in Bitcoin at the current rate, and you receive the equivalent fiat amount minus processing fees. Only merchants who choose to hold Bitcoin are exposed to price volatility." },
      ]}
      relatedArticles={[
        { title: "Crypto Donations", href: "/spending/learn/crypto-donations", category: "Spending" },
        { title: "Stablecoin Spending", href: "/spending/learn/stablecoin-spending", category: "Spending" },
        { title: "Crypto Salary Guide", href: "/spending/learn/crypto-salary-guide", category: "Spending" },
      ]}
    >
      <h2 id="why-accept">Why Accept Bitcoin?</h2>
      <p>Bitcoin payments offer several advantages over traditional payment methods. Lower transaction fees: credit card processing typically costs 2-3% plus a fixed fee per transaction. Bitcoin payment processing can cost less than 1%, with some solutions nearly free. For businesses with thin margins or high transaction volumes, this difference is significant. No chargebacks: Bitcoin transactions are irreversible, eliminating the chargeback fraud that costs merchants billions annually. Once a customer pays in Bitcoin, the payment cannot be reversed without your cooperation. Global accessibility: Bitcoin enables payments from anyone in the world without currency conversion complications, correspondent banking delays, or international payment fees. This is particularly valuable for online businesses with international customers. Settlement speed: Bitcoin payments can settle in minutes (on-chain) or instantly (Lightning Network), compared to credit card settlements that take one to three business days. Customer acquisition: a growing segment of crypto holders actively seek businesses that accept Bitcoin. Accepting Bitcoin signals innovation and can differentiate your business from competitors. Privacy: Bitcoin transactions do not require customers to share credit card numbers or personal financial information with your business, reducing your PCI compliance burden.</p>

      <h2 id="payment-processors">Payment Processors</h2>
      <p>BTCPay Server is a free, open-source, self-hosted payment processor. You run the software on your own server, maintaining full control over your payments with no third-party intermediary. BTCPay Server supports on-chain Bitcoin, Lightning Network for instant payments, and can auto-convert to fiat through connected exchange accounts. It integrates with major e-commerce platforms (WooCommerce, Shopify, Magento) and provides point-of-sale interfaces for physical retail. The trade-off is that self-hosting requires technical setup and maintenance. BitPay is the largest commercial Bitcoin payment processor, offering hosted solutions with easy integration, automatic fiat conversion, and bank deposits. BitPay supports Bitcoin, Ethereum, and several stablecoins. Their fee is approximately 1% per transaction. Strike enables Bitcoin and Lightning payments with near-zero fees, converting to fiat instantly. It is particularly popular for small businesses and tipping. OpenNode provides a developer-friendly payment API with Lightning Network support and competitive fees. For each processor, evaluate: fees, supported cryptocurrencies, conversion options, integration with your existing systems, and whether you are comfortable with the custody model.</p>

      <h2 id="implementation">Implementation Guide</h2>
      <p>For online stores, integration typically involves installing a plugin or adding API-based payment buttons. WooCommerce users can install the BTCPay Server or BitPay plugin in minutes. Shopify merchants can use BitPay or Strike integrations through the Shopify app store. Custom websites can integrate payment APIs from any processor with a few lines of code. For physical retail locations, most payment processors offer point-of-sale applications that generate QR codes for customers to scan with their Bitcoin wallet. The cashier enters the sale amount, a QR code appears, the customer scans and pays, and the system confirms payment in seconds (Lightning Network) or minutes (on-chain). Some processors offer NFC-enabled terminals for tap-to-pay with Lightning wallets. Implementation steps: choose your payment processor based on your needs and technical capability. Set up your account and connect your bank for fiat conversion if desired. Install the integration for your platform. Configure your settings (auto-convert to fiat, currency display, confirmation requirements). Test with a small transaction. Train staff on the new payment option. Announce Bitcoin acceptance to customers through your marketing channels.</p>

      <h2 id="accounting-tax">Accounting and Tax Considerations</h2>
      <p>Accepting Bitcoin introduces specific accounting and tax requirements. In most jurisdictions, Bitcoin received as payment for goods or services is taxable income, valued at the fair market value at the time of receipt. If you immediately convert to fiat, the accounting is straightforward: record the fiat amount received. If you hold Bitcoin, you must track the cost basis (fair market value when received) and report any capital gains or losses when you eventually convert or spend it. Accounting software like QuickBooks, Xero, and specialized crypto accounting tools (CoinTracker, Koinly) can help track Bitcoin transactions alongside traditional sales. Your payment processor should provide transaction reports that include the Bitcoin amount, fiat equivalent, and timestamp for each transaction. Consult with an accountant familiar with cryptocurrency to ensure proper reporting. For sales tax purposes, most jurisdictions require collecting sales tax on the fiat-equivalent value of Bitcoin payments, just as you would with any other payment method. Keep detailed records of every Bitcoin transaction including the date, amount in both BTC and fiat equivalent, the exchange rate used, and any conversion fees paid. Good record-keeping simplifies year-end tax preparation and audit defense.</p>
    </LearnPageLayout>
  );
}
