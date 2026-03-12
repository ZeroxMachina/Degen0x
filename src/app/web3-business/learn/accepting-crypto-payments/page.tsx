import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Accepting Crypto Payments (${CURRENT_YEAR}) - Business Guide | degen0x`,
  description: `Learn how to accept cryptocurrency payments for your business. Payment processors, invoicing, accounting, tax implications, and integration guides.`,
};

export default function AcceptingCryptoPaymentsPage() {
  return (
    <LearnPageLayout
      title="Accepting Crypto Payments for Business"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="9 min"
      intro="Accepting cryptocurrency payments can open your business to a global customer base, reduce transaction fees compared to traditional payment processors, and provide faster settlement times. Whether you run an e-commerce store, SaaS platform, or professional services firm, this guide covers the technical, accounting, and regulatory aspects of accepting crypto payments."
      toc={[
        { id: "payment-processors", title: "payment-processors", level: 2 },
        { id: "payment-processors-and-gateways", title: "Payment Processors and Gateways", level: 2 },
        { id: "direct-payments", title: "direct-payments", level: 2 },
        { id: "direct-wallet-payments", title: "Direct Wallet Payments", level: 2 },
        { id: "invoicing", title: "invoicing", level: 2 },
        { id: "crypto-invoicing", title: "Crypto Invoicing", level: 2 },
        { id: "accounting-tax", title: "accounting-tax", level: 2 },
        { id: "accounting-and-tax-implications", title: "Accounting and Tax Implications", level: 2 }
      ]}
      faqs={[
        { question: "Do I need to hold cryptocurrency to accept crypto payments?", answer: "No. Payment processors like BitPay and Coinbase Commerce can automatically convert incoming crypto payments to fiat currency and deposit directly to your bank account. This eliminates price volatility risk while still offering customers the option to pay with crypto. You only hold cryptocurrency if you choose to." },
        { question: "What are the fees for accepting crypto payments?", answer: "Crypto payment processor fees typically range from 0.5% to 1.5%, significantly lower than credit card processing fees (2.5-3.5%). If accepting direct wallet payments, you pay only the network transaction fee (which the sender usually covers). However, if using instant fiat conversion, there may be an additional conversion spread of 0.5-1%." },
        { question: "Which cryptocurrencies should I accept?", answer: "Start with the most widely held and stable options: Bitcoin, Ethereum, and USDC (a dollar-pegged stablecoin). USDC is particularly attractive because it eliminates price volatility, meaning you receive exactly the dollar amount invoiced. As you gain comfort, you can add support for additional tokens based on customer demand." },
      ]}
      relatedArticles={[
        { title: "Best Payment Processing Platforms", href: "/web3-business/best/payment-processing", category: "Web3 Business" },
        { title: "Stablecoin Payments Guide", href: "/spending/learn/stablecoin-payments", category: "Crypto Spending" },
        { title: "Web3 Business Taxes", href: "/web3-business/learn/business-taxes", category: "Web3 Business" },
      ]}
    >
      <h2 id="payment-processors">Payment Processors and Gateways</h2>
      <p>Crypto payment processors handle the complexity of receiving, converting, and settling cryptocurrency payments so your business does not have to manage wallets, private keys, or volatile assets. Leading providers include BitPay (supports Bitcoin, Ethereum, and major altcoins with automatic fiat conversion and bank deposits), Coinbase Commerce (integrates with Shopify, WooCommerce, and custom checkout flows), BTCPay Server (an open-source, self-hosted payment processor with no third-party fees), and Stripe (now supports USDC payments on select blockchains with direct fiat settlement). When choosing a processor, evaluate supported cryptocurrencies, integration options with your existing systems, settlement speed and currency, fee structure, and geographic availability. Most processors offer plugins for major e-commerce platforms and APIs for custom integrations. Setup typically takes less than a day for standard e-commerce platforms with available plugins.</p>

      <h2 id="direct-payments">Direct Wallet Payments</h2>
      <p>For businesses that want to hold cryptocurrency or prefer to avoid third-party processors, accepting direct wallet payments is straightforward. Generate a unique payment address or QR code for each transaction to simplify reconciliation. For in-person payments, display a QR code that customers scan with their mobile wallet. For online payments, present the payment address and amount on your checkout page with a countdown timer (crypto transactions should be confirmed within a reasonable window to account for price fluctuations). If accepting stablecoins like USDC or USDT, price volatility is not a concern since each token is pegged to one dollar. For volatile assets like Bitcoin or Ethereum, implement a brief payment window (typically 15 minutes) after which the quoted price refreshes to reflect current market rates. Monitor incoming payments using blockchain explorers or payment notification services, and wait for sufficient network confirmations before considering the payment final.</p>

      <h2 id="invoicing">Crypto Invoicing</h2>
      <p>For B2B transactions and professional services, crypto invoicing streamlines the payment process. Tools like Request Network, Gilded, and Bitwage provide crypto-native invoicing with features tailored to blockchain payments. A proper crypto invoice should include the payment amount in both fiat and crypto terms, the specific wallet address and blockchain network for payment, a QR code for easy mobile payment, the exchange rate used and the window during which that rate is valid, and payment terms and late fee policies. For recurring invoices (subscriptions, retainer agreements), consider accepting stablecoins to avoid repricing each billing cycle. Some invoicing platforms support payment streaming through protocols like Superfluid, where payments flow continuously by the second rather than in lump sums, which is particularly useful for contractor compensation.</p>

      <h2 id="accounting-tax">Accounting and Tax Implications</h2>
      <p>Every crypto payment received is a taxable event for your business. The fair market value of the cryptocurrency at the time of receipt determines the revenue amount reported. If you hold the received crypto rather than immediately converting to fiat, you establish a cost basis at the receipt value. Any subsequent appreciation or depreciation when you eventually sell or convert creates a capital gain or loss. For accounting purposes, crypto payments should be recorded at their fiat equivalent value on the date of receipt. If accepting volatile assets, the timing difference between invoicing and payment receipt may create discrepancies that need to be reconciled. Stablecoin payments largely eliminate this issue. Use accounting software that supports crypto transactions (Bitwave, Cryptio, or QuickBooks with crypto integrations) to automate fair market value lookups, cost basis tracking, and tax report generation. Maintain separate wallet addresses for business receipts to simplify reconciliation and audit trails.</p>
    </LearnPageLayout>
  );
}
