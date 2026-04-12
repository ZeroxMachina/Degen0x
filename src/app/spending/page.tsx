import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Spending Guide ${CURRENT_YEAR} - Debit Cards, Payment Apps & More | ${SITE_NAME}`,
  description: `Everything you need to spend cryptocurrency in the real world. Compare the best crypto debit cards, payment apps, cashback cards, and discover where to spend your crypto in ${CURRENT_YEAR}.`,
};

const bestOfLinks = [
  { title: "Best Crypto Debit Cards", href: "/spending/best/debit-cards", description: "Top debit cards that let you spend crypto anywhere Visa or Mastercard is accepted" },
  { title: "Best Crypto Cashback Cards", href: "/spending/best/cashback", description: "Earn crypto rewards every time you make a purchase" },
  { title: "Best Crypto Cards for Travel", href: "/spending/best/travel", description: "No foreign transaction fees and worldwide acceptance" },
  { title: "Best Crypto Rewards Cards", href: "/spending/best/rewards", description: "Maximize your rewards in Bitcoin, Ethereum, and more" },
  { title: "Best Crypto Payment Apps", href: "/spending/best/payment-apps", description: "Pay with crypto at millions of merchants using your phone" },
  { title: "Where to Spend Crypto", href: "/spending/best/merchants", description: "Discover retailers, services, and platforms that accept cryptocurrency" },
];

const learnLinks = [
  { title: "Crypto Debit Cards Explained", href: "/spending/learn/crypto-debit-cards-explained", description: "How crypto debit cards work under the hood" },
  { title: "How to Spend Cryptocurrency", href: "/spending/learn/spending-crypto", description: "A practical guide to using crypto for everyday purchases" },
  { title: "Lightning Network Payments", href: "/spending/learn/lightning-network-payments", description: "Instant, low-fee Bitcoin transactions explained" },
  { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", description: "Why stablecoins are becoming a popular payment method" },
  { title: "Tax Implications of Spending Crypto", href: "/spending/learn/tax-implications-spending", description: "What you owe the IRS when you use crypto to buy things" },
];

const faqs = [
  {
    question: "Can I spend cryptocurrency like regular money?",
    answer: "Yes, there are several ways to spend crypto in the real world. The most common method is using a crypto debit card, which automatically converts your crypto to fiat currency at the point of sale. You can also use payment apps like BitPay, spend directly at merchants that accept crypto, or use the Lightning Network for instant Bitcoin payments.",
  },
  {
    question: "What is the best crypto debit card?",
    answer: `As of ${CURRENT_YEAR}, the Crypto.com Visa Card is our top pick for most users due to its generous cashback tiers (up to 5% back in CRO), no annual fees on the base tier, and worldwide acceptance. The Coinbase Card is a strong alternative that lets you choose which crypto you earn as rewards.`,
  },
  {
    question: "Do I have to pay taxes when I spend crypto?",
    answer: "In the United States and most jurisdictions, spending cryptocurrency is treated as a taxable disposition. If the crypto you spend has appreciated since you acquired it, you owe capital gains tax on the difference. This applies whether you are buying coffee or a car. Keeping detailed records of your transactions is essential for tax compliance.",
  },
  {
    question: "What are the fees for spending crypto with a debit card?",
    answer: "Crypto debit card fees vary by provider. Most charge a conversion spread of 0.5% to 2.5% when converting crypto to fiat at the point of sale. Some cards have no monthly fees on basic tiers, while premium tiers may require staking tokens or paying annual fees. ATM withdrawals typically incur additional fees after a free monthly allowance.",
  },
  {
    question: "Can I earn rewards for spending crypto?",
    answer: "Absolutely. Many crypto debit cards offer cashback rewards ranging from 1% to 8% paid in cryptocurrency. Some cards let you choose your reward currency, while others pay in their native token. These rewards can compound significantly over time, especially during bull markets.",
  },
];

export default function SpendingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Crypto Spending Hub - ${CURRENT_YEAR}`,
    description: `Everything you need to spend cryptocurrency in the real world. Compare the best crypto debit cards, payment apps, and more.`,
    url: "https://degen0x.com/spending",
    isPartOf: { "@type": "WebSite", name: SITE_NAME },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Crypto Spending", href: "/spending" },
          ]}
        />

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
            Crypto Spending Hub
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Your complete resource for spending cryptocurrency in the real world. Compare
            crypto debit cards, discover payment apps, find merchants that accept crypto,
            and learn how to use your digital assets for everyday purchases.
            Last updated {CURRENT_MONTH} {CURRENT_YEAR}.
          </p>
        </div>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Crypto Cards Reviewed", value: "15+" },
              { label: "Payment Apps Tested", value: "12+" },
              { label: "Merchants Listed", value: "500+" },
              { label: "Countries Covered", value: "100+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 text-center"
              >
                <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-secondary)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Best-Of Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Find the Best Way to Spend Crypto</h2>
          <AffiliateDisclosure />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestOfLinks.map((link) => (
              <Link href={link.href}
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover block"
              >
                <h3 className="text-[var(--color-text)] font-semibold mb-1">{link.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">How Spending Crypto Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Load Your Card or App",
                desc: "Connect your crypto wallet or exchange account to a crypto debit card or payment app. Choose which cryptocurrencies you want to spend.",
              },
              {
                step: "2",
                title: "Shop Anywhere",
                desc: "Use your card at any merchant that accepts Visa or Mastercard. The crypto is automatically converted to fiat currency at the point of sale.",
              },
              {
                step: "3",
                title: "Earn Rewards",
                desc: "Many cards offer crypto cashback on every purchase. Your rewards accumulate in your wallet and can grow in value over time.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-[var(--color-text)] font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learn Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About Spending Crypto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learnLinks.map((link) => (
              <Link href={link.href}
                key={link.href}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
              >
                <span className="text-[var(--color-text)] font-semibold">{link.title}</span>
                <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                  {link.description}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">How We Review Crypto Spending Products</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Every crypto debit card and payment app we recommend has been personally tested by our team. We
            order each card, make real purchases, test ATM withdrawals, and evaluate the full user experience
            from signup to daily use. We assess fees, conversion rates, reward structures, supported
            cryptocurrencies, customer support quality, and global availability.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Our reviews are updated quarterly to reflect changes in reward tiers, fee structures, and card
            availability. When you sign up through our affiliate links, we may earn a commission at no extra
            cost to you, which helps fund our ongoing testing and research.
          </p>
        </section>

        <FAQSection faqs={faqs} />
      </div>
    </>
  );
}
