import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Payment Apps of ${CURRENT_YEAR} - Pay With Crypto Anywhere | ${SITE_NAME}`,
  description: `Compare the best crypto payment apps of ${CURRENT_YEAR}. BitPay, CoinGate, Strike, and more. Send, receive, and spend crypto from your phone.`,
};

const paymentApps: Product[] = [
  {
    name: "BitPay",
    slug: "bitpay",
    rating: 4.7,
    description: "The most established crypto payment app with over a decade of history. BitPay processes payments for thousands of merchants, offers a prepaid Mastercard, and supports direct payments in BTC, ETH, and 15+ other cryptos. Features bill pay, gift card purchases, and P2P transfers.",
    pros: ["Largest merchant network in crypto payments", "Prepaid Mastercard for everyday spending", "Bill pay feature for utilities and services", "Gift card marketplace (Amazon, Uber, etc.)"],
    cons: ["1% processing fee on some transactions", "$5 inactivity fee on the card", "Slower settlement than Lightning-based alternatives", "KYC required for full features"],
    fees: "Free app / 1% processing fee",
    bestFor: "Overall crypto payments",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Strike",
    slug: "strike",
    rating: 4.6,
    description: "A Lightning Network-powered payment app that enables instant, near-free Bitcoin transactions. Send money globally for pennies, pay Lightning invoices, and receive payments in BTC or USD. Strike is redefining how fast and cheap crypto payments can be.",
    pros: ["Near-instant Lightning Network payments", "Extremely low fees (fractions of a cent)", "Send globally to any Lightning wallet", "Seamless USD/BTC conversion"],
    cons: ["Bitcoin/Lightning only (no altcoins)", "Limited to US and select countries", "Fewer merchant integrations than BitPay", "Requires Lightning-compatible recipients"],
    fees: "Free (minimal network fees)",
    bestFor: "Instant Bitcoin payments",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "CoinGate",
    slug: "coingate",
    rating: 4.3,
    description: "A versatile crypto payment gateway that lets you buy gift cards, pay with 70+ cryptocurrencies, and use the Lightning Network for instant transactions. CoinGate bridges the gap between crypto holders and merchants who do not yet accept crypto directly.",
    pros: ["70+ supported cryptocurrencies", "Gift card marketplace for major retailers", "Lightning Network support", "Email invoicing for freelancers"],
    cons: ["Primarily European focus", "Less polished app than competitors", "Gift card availability varies by region", "Some merchants have minimum purchase amounts"],
    fees: "Free app / 1% merchant fee",
    bestFor: "Wide crypto support",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Flexa (via SPEDN)",
    slug: "flexa-spedn",
    rating: 4.2,
    description: "A digital payment network that enables instant crypto payments at physical retail locations. Use the SPEDN app to generate a scannable barcode and pay with crypto at participating merchants including Nordstrom, GameStop, and Whole Foods.",
    pros: ["Pay with crypto at major retail chains", "Instant settlement for merchants", "No merchant fees passed to consumers", "Supports multiple cryptocurrencies"],
    cons: ["Limited to participating merchants", "US focused availability", "Merchant network still growing", "Requires SPEDN or compatible app"],
    fees: "Free to use",
    bestFor: "In-store crypto payments",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Crypto.com Pay",
    slug: "crypto-com-pay",
    rating: 4.1,
    description: "The payment feature within the Crypto.com ecosystem. Pay other Crypto.com users instantly with zero fees, earn CRO cashback on eligible purchases, and use QR codes at partner merchants. Integrates seamlessly with the Crypto.com Visa Card.",
    pros: ["Zero fees for P2P transfers to Crypto.com users", "CRO cashback on partner purchases", "QR code payments at physical merchants", "Deep integration with Crypto.com ecosystem"],
    cons: ["Best features limited to Crypto.com ecosystem", "Smaller merchant network than BitPay", "P2P limited to other Crypto.com users", "CRO rewards subject to tier and staking"],
    fees: "Free P2P / varies for merchants",
    bestFor: "Crypto.com ecosystem users",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Cash App (Bitcoin)",
    slug: "cash-app",
    rating: 4.0,
    description: "While primarily a traditional payment app, Cash App has robust Bitcoin features. Buy, sell, and send Bitcoin with a simple interface. The Bitcoin Boost feature offers instant discounts at select merchants when you pay with your Cash App card using Bitcoin.",
    pros: ["Simple, mainstream-friendly interface", "Bitcoin Boost discounts at select merchants", "Lightning Network send and receive", "Automatic Bitcoin purchases (Auto-Invest)"],
    cons: ["Bitcoin only (no altcoins)", "Spread on BTC purchases (1.5-2%)", "Limited crypto features vs dedicated apps", "Not available outside US and UK"],
    fees: "Free sends / spread on purchases",
    bestFor: "Mainstream Bitcoin spending",
    affiliateUrl: "#",
    category: "spending",
  },
];

const faqs = [
  {
    question: "What is the best app for paying with crypto?",
    answer: `For the broadest merchant acceptance, BitPay is the best choice in ${CURRENT_YEAR}. It supports the most merchants, offers a prepaid card, and handles 15+ cryptocurrencies. For Bitcoin-specific payments, Strike offers the fastest and cheapest experience through the Lightning Network.`,
  },
  {
    question: "Can I use crypto to pay bills?",
    answer: "Yes, several apps support bill payments with crypto. BitPay offers a bill pay feature that lets you pay utility bills, phone bills, and other services using cryptocurrency. Some users also use crypto-funded prepaid cards (like BitPay's Mastercard) to pay bills that accept card payments.",
  },
  {
    question: "What is the Lightning Network and why does it matter for payments?",
    answer: "The Lightning Network is a layer-2 solution built on top of Bitcoin that enables near-instant transactions with minimal fees (fractions of a cent). For payments, this means you can buy a coffee with Bitcoin in seconds rather than waiting 10+ minutes for an on-chain confirmation. Apps like Strike and Cash App support Lightning payments.",
  },
  {
    question: "Are crypto payment apps safe?",
    answer: "Reputable crypto payment apps use bank-grade security measures including encryption, two-factor authentication, and biometric login. However, crypto transactions are generally irreversible, so you should always verify payment details carefully. Use apps from established companies and enable all available security features.",
  },
  {
    question: "Do merchants pay higher fees for crypto payments?",
    answer: "Crypto payment fees for merchants are often lower than traditional credit card processing fees (which run 2-3%). BitPay charges merchants 1%, and Lightning Network payments cost fractions of a cent. This cost savings is a key driver of merchant crypto adoption, and it means less cost passed on to consumers.",
  },
];

export default function BestPaymentAppsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spending", href: "/spending" },
          { label: "Best", href: "/spending/best" },
          { label: "Payment Apps", href: "/spending/best/payment-apps" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Payment Apps ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto payment apps let you spend your digital assets at millions of merchants, send money
          globally, and even pay your bills with cryptocurrency. We tested each of these apps for
          speed, fees, merchant acceptance, supported currencies, and overall user experience to help
          you choose the best one for your needs.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          <strong className="text-[var(--color-text)]">BitPay</strong> leads our ranking with the largest merchant
          network and most comprehensive feature set. For Lightning-fast Bitcoin payments,{" "}
          <strong className="text-[var(--color-text)]">Strike</strong> is unmatched. And for in-store retail payments,{" "}
          <strong className="text-[var(--color-text)]">Flexa (via SPEDN)</strong> offers a unique barcode-scanning
          experience at major chains.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {paymentApps.map((app, index) => (
          <div
            key={app.slug}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{app.name}</h3>
                  <div className="text-sm text-[var(--color-accent)]">{app.rating}/5</div>
                </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="spending"
        />

              </div>
              <a
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium whitespace-nowrap"
              >
                Try App
              </a>
            </div>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{app.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                Best for: {app.bestFor}
              </span>
              {app.fees && (
                <span className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
                  Fees: {app.fees}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-success)] mb-1">Pros</h4>
                <ul className="space-y-1">
                  {app.pros.map((pro, i) => (
                    <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                      <span className="text-[var(--color-success)] mt-0.5">+</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-danger)] mb-1">Cons</h4>
                <ul className="space-y-1">
                  {app.cons.map((con, i) => (
                    <li key={i} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1">
                      <span className="text-[var(--color-danger)] mt-0.5">-</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Payment Methods Comparison */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Crypto Payment Methods Compared</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a0a1e', border: '1px solid #4a1259', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🛒</span>
            <strong style={{ color: '#d946ef', fontSize: 15 }}>Spending Reality</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Spending crypto should be a conscious choice, not a default. We cover the tax implications and opportunity costs that most spending guides ignore.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Crypto Debit Cards</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">Convert crypto to fiat at POS. Works everywhere Visa/MC is accepted.</p>
            <div className="text-xs text-[var(--color-text-secondary)]">Speed: Instant | Fees: 0.5-2.5% spread</div>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Lightning Network Apps</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">Instant BTC payments with near-zero fees. Growing merchant adoption.</p>
            <div className="text-xs text-[var(--color-text-secondary)]">Speed: Instant | Fees: &lt;$0.01</div>
          </div>
          <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
            <h3 className="text-[var(--color-text)] font-semibold mb-2">Direct Crypto Payments</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">Pay merchants who accept crypto natively. No intermediary conversion.</p>
            <div className="text-xs text-[var(--color-text-secondary)]">Speed: 1-60 min | Fees: Network gas fees</div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
