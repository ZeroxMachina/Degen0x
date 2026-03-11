import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Point of Sale Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "How to accept cryptocurrency at physical retail locations. POS systems, payment terminals, QR code payments, and integration guides for brick-and-mortar businesses.",
  keywords: ["crypto POS", "crypto point of sale", "accept bitcoin in store"],
};

export default function CryptoPointOfSalePage() {
  return (
    <LearnPageLayout
      title="Crypto Point of Sale Guide"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="9 min"
      intro="Accepting cryptocurrency at physical retail locations has become increasingly practical with modern POS integrations, QR code payment flows, and payment networks like Flexa. This guide covers everything brick-and-mortar businesses need to know about setting up crypto payments at the point of sale."
      toc={[
        { id: "pos-solutions", title: "POS Solutions Overview", level: 2 },
        { id: "qr-payments", title: "QR Code Payment Flows", level: 2 },
        { id: "integration", title: "Integration with Existing Systems", level: 2 },
        { id: "customer-experience", title: "Optimizing Customer Experience", level: 2 },
      ]}
      faqs={[
        { question: "Do I need new hardware to accept crypto?", answer: "Usually not. Most crypto POS solutions work through existing terminals with software updates, or through a tablet or phone running the payment app. Dedicated crypto terminals are available but not required." },
        { question: "How long does a crypto payment take at checkout?", answer: "With solutions like Flexa, payments confirm in under one second. Lightning Network payments are similarly instant. Standard Bitcoin payments may take 10-60 minutes for full confirmation but some processors accept zero-confirmation for small amounts." },
        { question: "What happens if the customer overpays or underpays?", answer: "Most POS solutions generate exact-amount payment requests. If the customer sends the wrong amount, the payment processor typically handles refunds or adjustments. Clear amount display and QR codes minimize payment errors." },
      ]}
      relatedArticles={[
        { title: "Best Merchant Services", href: "/spending/best/merchant-services", category: "Spending" },
        { title: "Merchant Crypto Adoption", href: "/spending/learn/merchant-crypto-adoption", category: "Spending" },
        { title: "Flexa Review", href: "/spending/reviews/flexa", category: "Spending" },
      ]}
    >
      <section id="pos-solutions">
        <h2>POS Solutions Overview</h2>
        <p>Several POS solutions exist for accepting crypto at physical stores. The Flexa network enables crypto payments through existing POS terminals with a software-level integration, powered by AMP token collateral for instant settlement. BitPay offers POS functionality through its merchant app, generating QR codes for each transaction. BTCPay Server provides a self-hosted POS solution for businesses that want full control without third-party dependencies.</p>
        <p>For small businesses, a simple tablet or smartphone running a payment processor's POS app is sufficient to start accepting crypto. The app generates a payment-ready QR code for each transaction amount, the customer scans and pays from their wallet, and the merchant receives confirmation. More sophisticated integrations connect to existing POS systems, allowing crypto payments to appear alongside card and cash transactions in unified reporting.</p>
      </section>

      <section id="qr-payments">
        <h2>QR Code Payment Flows</h2>
        <p>QR code-based payments are the standard for in-store crypto transactions. The merchant's POS system or app generates a QR code containing the payment amount and receiving address. The customer scans this code with their crypto wallet app, confirms the payment, and the merchant receives notification of the completed transaction. This flow works for any cryptocurrency and wallet combination, making it universally compatible.</p>
        <p>Lightning Network QR codes enable the fastest in-store payment experience, with payments confirming in under one second. For non-Lightning payments, merchants can choose their risk tolerance: accepting zero-confirmation transactions for small amounts provides instant checkout at minimal risk, while requiring one or more confirmations provides stronger security for larger purchases at the cost of wait time. Most retail transactions fall within the range where instant or near-instant acceptance is practical.</p>
      </section>

      <section id="integration">
        <h2>Integration with Existing Systems</h2>
        <p>Integrating crypto payments with existing POS systems varies in complexity depending on the POS provider and the crypto payment solution. Major POS providers like Square, Clover, and Shopify POS are developing crypto payment capabilities or have existing integrations available. The Flexa network connects to many existing POS systems at the software level, requiring no hardware changes.</p>
        <p>For POS systems without native crypto support, a parallel setup using a dedicated tablet or phone for crypto payments alongside the existing terminal is the simplest approach. Transaction reconciliation between the two systems can be handled through end-of-day reporting. Some payment processors offer API integrations that allow custom POS systems to add crypto payment processing as a native payment method within the existing interface.</p>
      </section>

      <section id="customer-experience">
        <h2>Optimizing Customer Experience</h2>
        <p>The in-store crypto payment experience should be as fast and simple as card payments. Display clear signage indicating which cryptocurrencies are accepted. Train cashiers on the payment flow so they can guide customers confidently. Keep the QR code display visible and at a comfortable scanning angle. Confirm payment receipt audibly or visually so both cashier and customer know the transaction is complete.</p>
        <p>Common friction points include customers needing to open their wallet app and navigate to the scan function, slow blockchain confirmations for non-Lightning payments, and occasional network issues. Mitigate these by suggesting Lightning or stablecoin payments for faster checkout, having a backup payment method available, and keeping the overall process to under 15 seconds from QR code display to confirmation. A smooth first crypto payment experience encourages repeat usage and word-of-mouth recommendations.</p>
      </section>
    </LearnPageLayout>
  );
}
