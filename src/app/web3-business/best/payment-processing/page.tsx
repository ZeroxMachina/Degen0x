import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Payment Processors of ${CURRENT_YEAR} - Accept Crypto Payments | ${SITE_NAME}`,
  description: `Compare the best crypto payment processors in ${CURRENT_YEAR}. Accept Bitcoin, Ethereum, and stablecoins for your business with e-commerce plugins, invoicing, and instant fiat settlement.`,
};

const products: Product[] = [
  {
    name: "BitPay",
    slug: "bitpay",
    rating: 4.7,
    description: "One of the oldest and most established crypto payment processors, serving businesses since 2011. Supports Bitcoin, Ethereum, and major stablecoins with automatic fiat settlement, e-commerce plugins for Shopify and WooCommerce, invoicing, and billing tools.",
    pros: ["Proven track record since 2011", "Automatic fiat settlement option", "Shopify, WooCommerce, and API integrations", "Supports 15+ cryptocurrencies"],
    cons: ["1% processing fee on transactions", "KYC requirements for merchants", "Settlement delays for some currencies", "Less decentralized than self-hosted options"],
    fees: "1% per transaction",
    bestFor: "Established businesses wanting reliable crypto payments",
    affiliateUrl: "#",
    category: "payment-processing",
    featured: true,
  },
  {
    name: "Coinbase Commerce",
    slug: "coinbase-commerce",
    rating: 4.6,
    description: "Simple crypto payment solution from Coinbase that lets businesses accept cryptocurrency payments with minimal setup. Provides hosted checkout pages, payment buttons, and e-commerce integrations. Merchants retain full custody of received funds.",
    pros: ["Backed by Coinbase brand recognition", "Self-custody of received payments", "Simple integration with payment buttons", "No monthly fees"],
    cons: ["1% commerce fee on transactions", "Limited cryptocurrency selection", "Less advanced than BitPay for enterprise", "Customer support can be slow"],
    fees: "1% per transaction",
    bestFor: "Small-to-medium businesses wanting simple crypto checkout",
    affiliateUrl: "#",
    category: "payment-processing",
  },
  {
    name: "BTCPay Server",
    slug: "btcpay-server",
    rating: 4.5,
    description: "Self-hosted, open-source payment processor that gives businesses full control over their crypto payment infrastructure. No fees, no KYC requirements, and complete privacy. Requires technical setup but offers maximum sovereignty and customization.",
    pros: ["Completely free and open-source", "No third-party fees or commissions", "Full self-custody and privacy", "Highly customizable for developers"],
    cons: ["Requires technical setup and hosting", "Self-managed security responsibility", "No automatic fiat conversion", "Steeper learning curve for non-technical users"],
    fees: "Free (self-hosted)",
    bestFor: "Technical teams wanting maximum sovereignty",
    affiliateUrl: "#",
    category: "payment-processing",
  },
  {
    name: "NOWPayments",
    slug: "nowpayments",
    rating: 4.3,
    description: "Versatile crypto payment gateway supporting over 300 cryptocurrencies. Offers plugins for major e-commerce platforms, subscription billing, mass payouts, and a simple API. Stands out for its wide token selection and flexible integration options.",
    pros: ["300+ cryptocurrencies supported", "Subscription and recurring billing", "Mass payout functionality", "Competitive 0.5% processing fee"],
    cons: ["Less established brand than BitPay", "Fiat settlement in fewer currencies", "Some tokens have higher processing times", "Support response times vary"],
    fees: "0.5% per transaction",
    bestFor: "Businesses accepting a wide range of altcoins",
    affiliateUrl: "#",
    category: "payment-processing",
  },
  {
    name: "Circle (USDC Business)",
    slug: "circle-usdc",
    rating: 4.2,
    description: "Stablecoin payment infrastructure from the issuer of USDC. Provides business accounts, payment APIs, and cross-border settlement using USDC. Ideal for businesses that want the benefits of crypto payments without cryptocurrency volatility.",
    pros: ["Dollar-stable payments with USDC", "Fast cross-border settlement", "Strong regulatory compliance", "API-first infrastructure"],
    cons: ["Limited to USDC stablecoin", "Requires technical integration", "Enterprise-focused pricing", "Less consumer-facing than alternatives"],
    fees: "Custom pricing",
    bestFor: "Businesses wanting stablecoin-based payment infrastructure",
    affiliateUrl: "#",
    category: "payment-processing",
  },
];

const faqs: FAQ[] = [
  {
    question: "Why should a business accept crypto payments?",
    answer: "Crypto payments offer several advantages: lower processing fees compared to credit cards (typically 0-1% vs 2-3%), no chargebacks, access to a global customer base without currency conversion friction, faster settlement especially for international transactions, and appeal to crypto-native customers. For online businesses, crypto payments can also reduce fraud risk.",
  },
  {
    question: "Do I have to keep the crypto or can I convert to fiat?",
    answer: "Most payment processors offer automatic fiat settlement, converting received crypto to dollars or your local currency and depositing it in your bank account. BitPay and Coinbase Commerce both offer this. If you want to keep the crypto, self-custody options like BTCPay Server let you receive and hold payments directly in your own wallet.",
  },
  {
    question: "What are the tax implications of accepting crypto payments?",
    answer: "When a business receives crypto as payment for goods or services, the fair market value at the time of receipt is treated as business income. If you later sell or convert the crypto, any change in value creates a capital gain or loss. Using automatic fiat settlement simplifies this since the conversion happens immediately. Keep detailed records of all crypto transactions.",
  },
  {
    question: "How do crypto payment processors compare to traditional processors?",
    answer: "Crypto processors typically charge 0-1% vs 2-3% for credit card processors. Settlement is faster, often same-day vs 2-3 business days. There are no chargebacks with crypto. However, crypto has lower consumer adoption, requires some customer education, and introduces price volatility risk if you do not convert to fiat immediately.",
  },
  {
    question: "Can I accept crypto payments in a physical store?",
    answer: "Yes. BitPay and NOWPayments offer point-of-sale integrations, and BTCPay Server has a POS app. Customers typically scan a QR code with their wallet to make a payment. The experience takes about 30 seconds for most transactions. For high-volume retail, stablecoin payments on fast chains provide near-instant settlement.",
  },
];

export default function PaymentProcessingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Web3 Business", href: "/web3-business" },
          { label: "Best Tools", href: "/web3-business/best" },
          { label: "Payment Processing", href: "/web3-business/best/payment-processing" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Payment Processors ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Accepting cryptocurrency payments can reduce processing fees, eliminate chargebacks, and
          open your business to a global market of crypto holders. The challenge is choosing the right
          processor for your business model, technical capabilities, and compliance requirements.
          We have evaluated the leading solutions from self-hosted open-source tools to fully
          managed enterprise platforms.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">BitPay</strong> is our top pick for most businesses, combining
          reliability, easy integration, and automatic fiat settlement. For maximum control and zero fees,{" "}
          <strong className="text-[var(--color-text)]">BTCPay Server</strong> is the gold standard for self-hosted
          payment processing. <strong className="text-[var(--color-text)]">Coinbase Commerce</strong> offers the
          simplest setup for businesses that want to get started quickly.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Our Rankings</h2>
        <div className="space-y-4">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              product={product}
              rank={index + 1}
              categorySlug="web3-business"
            />
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Integration Options by Business Type</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "E-Commerce Stores", desc: "Use Shopify or WooCommerce plugins from BitPay, Coinbase Commerce, or NOWPayments. Setup takes minutes with pre-built integrations." },
            { title: "SaaS & Subscriptions", desc: "NOWPayments and BitPay support recurring billing. BTCPay Server has a subscription plugin for self-hosted recurring payments." },
            { title: "Invoicing & B2B", desc: "Request Finance and BitPay offer crypto invoicing. Send professional invoices that accept crypto payment with automatic tracking." },
            { title: "Physical Retail", desc: "BitPay and BTCPay Server offer point-of-sale apps. Generate QR codes for in-store payments with instant confirmation." },
          ].map((item) => (
            <div key={item.title} className="p-4 rounded-lg bg-[var(--color-bg)]/50">
              <h3 className="text-[var(--color-text)] font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
