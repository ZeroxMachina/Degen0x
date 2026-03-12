import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How Merchants Accept Crypto Payments (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how businesses can accept Bitcoin and cryptocurrency payments. Compare payment processors, POS integrations, and settlement options for merchants.",
};

export default function MerchantCryptoAcceptancePage() {
  return (
    <LearnPageLayout
      title="How Merchants Accept Crypto Payments"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="10 min"
      intro="Accepting cryptocurrency payments is becoming increasingly practical for businesses of all sizes. Modern payment processors handle the technical complexity, allowing merchants to accept Bitcoin and other cryptocurrencies while receiving settlement in fiat currency if preferred. This guide covers the payment processors available, integration options, fee structures, and practical considerations for merchants looking to accept crypto."
      toc={[
        { id: "payment-processors", title: "payment-processors", level: 2 },
        { id: "crypto-payment-processors", title: "Crypto Payment Processors", level: 2 },
        { id: "integration-options", title: "integration-options", level: 2 },
        { id: "integration-options", title: "Integration Options", level: 2 },
        { id: "settlement", title: "settlement", level: 2 },
        { id: "settlement-and-conversion", title: "Settlement and Conversion", level: 2 },
        { id: "pos-solutions", title: "pos-solutions", level: 2 },
        { id: "point-of-sale-solutions", title: "Point-of-Sale Solutions", level: 2 },
        { id: "accounting-tax", title: "accounting-tax", level: 2 },
        { id: "accounting-and-tax-implications", title: "Accounting and Tax Implications", level: 2 }
      ]}
      faqs={[
        { question: "Do merchants need to hold cryptocurrency?", answer: "No. Most payment processors offer instant conversion to fiat currency, so merchants receive dollars, euros, or their local currency in their bank account. The merchant never needs to touch or understand crypto. Some businesses choose to keep a portion in crypto, but it is entirely optional." },
        { question: "What are the fees for accepting crypto?", answer: "Crypto payment processor fees typically range from 0.5% to 1.5% per transaction, which is competitive with or lower than traditional credit card processing fees of 2-3.5%. BTCPay Server is free and open-source with no processing fees, though merchants handle their own infrastructure." },
        { question: "How long does settlement take?", answer: "Settlement times vary by processor and method. BitPay and CoinGate settle to bank accounts within 1-3 business days. BTCPay Server settles directly to the merchant's wallet instantly. Lightning Network payments are confirmed in under a second. Stablecoin payments on fast networks settle in seconds." },
      ]}
      relatedArticles={[
        { title: "How to Spend Bitcoin", href: "/spending/learn/how-to-spend-bitcoin", category: "Spending" },
        { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
        { title: "Accepting Crypto Payments for Business", href: "/web3-business/learn/accepting-crypto-payments", category: "Web3 Business" },
      ]}
    >
      <h2 id="payment-processors">Crypto Payment Processors</h2>
      <p>BitPay is the largest crypto payment processor, serving thousands of merchants worldwide and supporting Bitcoin, Ethereum, Litecoin, and stablecoins. CoinGate processes over 70 cryptocurrencies with plugins for major e-commerce platforms. BTCPay Server is a free, open-source, self-hosted processor that gives merchants complete control with zero processing fees. NOWPayments supports 200+ cryptocurrencies with a non-custodial model. Strike enables Lightning Network payments with instant fiat settlement for US merchants. Each processor offers different tradeoffs between ease of use, supported currencies, fees, and custody models.</p>

      <h2 id="integration-options">Integration Options</h2>
      <p>E-commerce integration is straightforward with most processors offering plugins for Shopify, WooCommerce, Magento, and PrestaShop. These plugins add a crypto payment option at checkout alongside traditional payment methods. For custom websites, API integrations allow full control over the payment flow. Hosted payment pages provide the simplest integration where merchants redirect customers to a processor-hosted checkout page. Invoice-based systems work well for service businesses, generating payment links that customers can pay from any wallet. QR code-based payments suit physical retail environments.</p>

      <h2 id="settlement">Settlement and Conversion</h2>
      <p>Merchants can choose how they want to receive funds. Instant fiat conversion eliminates crypto price risk by converting payments to dollars at the time of transaction and settling to the merchant's bank account. Partial conversion lets merchants keep a chosen percentage in crypto while converting the rest to fiat. Full crypto settlement deposits the received cryptocurrency directly into the merchant's wallet. Most processors handle the conversion automatically at competitive exchange rates. Settlement frequency varies from daily to weekly bank deposits depending on volume and processor.</p>

      <h2 id="pos-solutions">Point-of-Sale Solutions</h2>
      <p>Physical retail locations need point-of-sale solutions for in-person crypto payments. BTCPay Server includes a web-based POS interface that runs on any device with a browser. Breez offers a Lightning Network POS app for mobile devices. BitPay provides a dedicated merchant app for processing in-store payments. The typical flow involves the merchant entering the sale amount, the system generating a QR code at the current exchange rate, and the customer scanning and paying from their wallet. Lightning Network payments confirm instantly, providing the same speed as card tap payments.</p>

      <h2 id="accounting-tax">Accounting and Tax Implications</h2>
      <p>Merchants accepting crypto must track the fair market value of each payment at the time of receipt for tax purposes. If the merchant converts to fiat immediately, this is straightforward since the fiat amount is the taxable revenue. If the merchant holds crypto, they must track cost basis for potential capital gains when eventually selling. Most payment processors provide transaction reports with fiat values for accounting purposes. Accounting software like QuickBooks and Xero can import these reports. Consult with a tax professional familiar with crypto to ensure proper reporting in your jurisdiction.</p>
    </LearnPageLayout>
  );
}
