import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Merchant Adoption Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `How to accept cryptocurrency payments at your business in ${CURRENT_YEAR}. Payment processors, integration methods, tax considerations, and best practices for merchants.`,
  alternates: { canonical: "/spending/learn/merchant-adoption-guide" },
};

const toc = [
  { id: "why-accept", title: "Why Accept Crypto Payments", level: 2 },
  { id: "payment-processors", title: "Choosing a Payment Processor", level: 2 },
  { id: "integration", title: "Integration Methods", level: 2 },
  { id: "tax-accounting", title: "Tax &amp; Accounting", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

const faqs = [
  { question: "How much does it cost to accept crypto payments?", answer: "Most crypto payment processors charge 0.5-1% per transaction, which is significantly less than credit card processing fees of 2-3%. Setup is typically free. Some processors like NOWPayments offer free tiers for low-volume merchants. The main costs are the processing fee and any conversion spread if settling in fiat." },
  { question: "Do I need to hold cryptocurrency?", answer: "No. Most payment processors offer instant conversion to fiat currency. The customer pays in crypto, the processor converts it, and you receive USD, EUR, or your local currency directly to your bank account. You never need to touch or manage cryptocurrency yourself." },
  { question: "What about crypto price volatility?", answer: "With instant fiat settlement, you are not exposed to crypto price volatility. The payment processor locks the exchange rate at the time of payment and settles in fiat. If you choose to receive some payments in crypto, then you accept the volatility risk on that portion." },
];

const relatedArticles = [
  { title: "BitPay vs CoinGate", href: "/spending/compare/bitpay-vs-coingate", category: "Spending" },
  { title: "Lightning Network Payments", href: "/spending/learn/lightning-network-payments", category: "Spending" },
  { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
];

export default function MerchantAdoptionGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto Merchant Adoption Guide: Accepting Digital Payments"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="9 min"
      intro="Accepting cryptocurrency payments can expand your customer base, reduce processing fees, and position your business at the forefront of financial technology. With modern payment processors handling all the complexity, adding crypto as a payment option is simpler than most merchants expect. This guide walks through the entire process from choosing a processor to managing tax obligations."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="why-accept">Why Accept Crypto Payments</h2>
      <p>
        The primary financial benefit for merchants is lower processing fees. Crypto payment processors
        typically charge 0.5-1% compared to 2-3% for credit card networks. For a business processing $100,000
        monthly, that is $1,000-$2,000 in savings. Crypto payments are also irreversible, eliminating the risk
        of chargebacks that cost merchants billions annually. Additionally, crypto opens your business to a
        global customer base without the complexity of international payment processing.
      </p>

      <h2 id="payment-processors">Choosing a Payment Processor</h2>
      <p>
        BitPay is the largest US processor with brand recognition and consumer tools. CoinGate offers the
        broadest crypto support with 70+ coins and competitive 1% fees. NOWPayments provides non-custodial
        processing with 200+ coins. BTCPay Server is a free, open-source self-hosted option for merchants
        who want full control. Your choice should factor in supported cryptocurrencies, fees, settlement
        options, integration complexity, and geographic availability.
      </p>

      <h2 id="integration">Integration Methods</h2>
      <p>
        Most processors offer multiple integration paths. Pre-built plugins for WooCommerce, Shopify, and
        Magento require no coding. Payment buttons and hosted checkout pages can be added to any website.
        API integrations provide full customization for developers. For physical stores, QR code-based
        point-of-sale solutions work with tablets or printed codes. The simplest path is a platform plugin,
        which can be set up in under 30 minutes.
      </p>

      <h2 id="tax-accounting">Tax &amp; Accounting</h2>
      <p>
        If you settle in fiat, crypto payments are treated like any other revenue for tax purposes. If you
        hold crypto, you must track cost basis and report gains or losses when you eventually convert. Most
        payment processors provide transaction reports compatible with accounting software. Consult a tax
        professional familiar with crypto for your jurisdiction. In the US, crypto received as payment is
        reported as income at fair market value on the date received.
      </p>

      <h2 id="best-practices">Best Practices</h2>
      <p>
        Start with instant fiat settlement to avoid volatility exposure until you are comfortable. Display
        crypto payment options prominently at checkout to drive adoption. Educate your staff on how crypto
        payments work and how to handle customer questions. Monitor transaction success rates and adjust
        your payment flow if customers abandon during the crypto checkout process. Consider offering a
        small discount for crypto payments to incentivize adoption and offset your lower processing costs.
      </p>
    </LearnPageLayout>
  );
}
