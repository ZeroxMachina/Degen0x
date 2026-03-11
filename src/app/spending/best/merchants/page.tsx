import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Where to Spend Crypto in ${CURRENT_YEAR} - 100+ Merchants & Services | ${SITE_NAME}`,
  description: `Discover where you can spend cryptocurrency in ${CURRENT_YEAR}. Major retailers, online services, travel, food, gaming, and more. The complete guide to crypto-accepting merchants.`,
};

const merchantCategories = [
  {
    name: "Technology & Electronics",
    merchants: [
      { name: "Microsoft", type: "Direct", details: "Xbox store credits, Windows apps, and movies" },
      { name: "Newegg", type: "Direct (BitPay)", details: "Full product catalog including PC hardware, electronics" },
      { name: "AT&T", type: "Direct (BitPay)", details: "Mobile phone bills and services" },
      { name: "ExpressVPN", type: "Direct", details: "VPN subscriptions with BTC, ETH, and more" },
      { name: "Namecheap", type: "Direct", details: "Domain registrations and hosting services" },
      { name: "Shopify", type: "Merchant Stores", details: "Thousands of Shopify stores accept crypto via processors" },
    ],
  },
  {
    name: "Travel & Transportation",
    merchants: [
      { name: "Travala", type: "Direct", details: "Hotels, flights, and travel packages in 200+ countries" },
      { name: "CheapAir", type: "Direct", details: "Flights, hotels, and car rentals with Bitcoin since 2013" },
      { name: "airBaltic", type: "Direct (BitPay)", details: "European airline accepting BTC for flight bookings" },
      { name: "Norwegian Air", type: "Planned", details: "Announced crypto payment integration" },
      { name: "AMC Theatres", type: "Direct", details: "Movie tickets and concessions via app" },
      { name: "Uber (via gift cards)", type: "Indirect", details: "Buy Uber gift cards with crypto through BitPay" },
    ],
  },
  {
    name: "Food & Dining",
    merchants: [
      { name: "Starbucks (via Bakkt)", type: "Indirect", details: "Pay via Bakkt app or buy gift cards with crypto" },
      { name: "Chipotle", type: "Indirect", details: "Buy gift cards with crypto via Flexa/BitPay" },
      { name: "Burger King (select locations)", type: "Direct", details: "Some locations accept BTC via payment apps" },
      { name: "Subway (select locations)", type: "Direct", details: "Select franchise locations accept cryptocurrency" },
      { name: "Whole Foods (via Flexa)", type: "Indirect", details: "Pay via SPEDN/Flexa at checkout" },
      { name: "DoorDash (via gift cards)", type: "Indirect", details: "Buy DoorDash gift cards with crypto" },
    ],
  },
  {
    name: "Retail & Shopping",
    merchants: [
      { name: "Overstock", type: "Direct", details: "Furniture, home goods, and more with crypto" },
      { name: "Nordstrom (via Flexa)", type: "Indirect", details: "Pay at checkout using SPEDN/Flexa app" },
      { name: "Home Depot (via Flexa)", type: "Indirect", details: "Home improvement via Flexa payment network" },
      { name: "GameStop (via Flexa)", type: "Indirect", details: "Video games and electronics via Flexa" },
      { name: "Etsy (select sellers)", type: "Direct", details: "Individual sellers may accept crypto payments" },
      { name: "Amazon (via BitPay/Purse)", type: "Indirect", details: "Buy Amazon gift cards or use Purse.io for discounts" },
    ],
  },
  {
    name: "Entertainment & Gaming",
    merchants: [
      { name: "Xbox / Microsoft Store", type: "Direct", details: "Games, subscriptions, and digital content" },
      { name: "PlayStation Store (via gift cards)", type: "Indirect", details: "Buy PSN gift cards with crypto" },
      { name: "Steam (via BitPay gift cards)", type: "Indirect", details: "Buy Steam gift cards with cryptocurrency" },
      { name: "Twitch", type: "Direct (BitPay)", details: "Subscriptions and bits with cryptocurrency" },
      { name: "Spotify (via gift cards)", type: "Indirect", details: "Buy Spotify gift cards or get free via Crypto.com Card" },
      { name: "Netflix (via gift cards)", type: "Indirect", details: "Buy Netflix gift cards or get rebate via Crypto.com Card" },
    ],
  },
  {
    name: "Charity & Non-Profit",
    merchants: [
      { name: "The Giving Block", type: "Direct", details: "Donate crypto to 1,000+ non-profits with tax benefits" },
      { name: "Save the Children", type: "Direct", details: "Accepts Bitcoin and other crypto donations" },
      { name: "Red Cross", type: "Direct (BitPay)", details: "Cryptocurrency donations accepted" },
      { name: "UNICEF CryptoFund", type: "Direct", details: "Accepts and distributes crypto to initiatives worldwide" },
      { name: "Electronic Frontier Foundation", type: "Direct", details: "BTC and other crypto donations for digital rights" },
      { name: "Wikipedia / Wikimedia", type: "Direct (BitPay)", details: "Support free knowledge with crypto" },
    ],
  },
];

const faqs = [
  {
    question: "Can I buy things with Bitcoin?",
    answer: "Yes, there are many ways to buy things with Bitcoin. You can use a crypto debit card at any Visa or Mastercard merchant, pay directly at businesses that accept Bitcoin (like Microsoft, Newegg, and Travala), use the Lightning Network for instant payments, or buy gift cards for major retailers through services like BitPay.",
  },
  {
    question: "What is the easiest way to spend crypto at regular stores?",
    answer: "The easiest method is using a crypto debit card like the Crypto.com Visa or Coinbase Card. These cards work anywhere Visa is accepted, automatically converting your crypto to fiat at the point of sale. You do not need the merchant to accept crypto, and the process feels identical to using a regular debit card.",
  },
  {
    question: "Does Amazon accept cryptocurrency?",
    answer: "Amazon does not directly accept cryptocurrency as a payment method. However, you can effectively spend crypto on Amazon by purchasing Amazon gift cards through BitPay, CoinGate, or similar services. The website Purse.io also lets you buy Amazon items at a discount using Bitcoin.",
  },
  {
    question: "What is the difference between direct and indirect crypto payments?",
    answer: "Direct crypto payments mean the merchant natively accepts cryptocurrency at checkout. Indirect methods involve an intermediary step, such as buying a gift card with crypto or using a payment processor like Flexa that converts crypto to fiat before the merchant receives it. Both let you spend crypto, but direct payments are simpler.",
  },
  {
    question: "Are more merchants starting to accept crypto?",
    answer: `Yes, merchant adoption of cryptocurrency has been steadily growing. Payment processors like BitPay, Flexa, and CoinGate have made it easier for businesses to accept crypto without dealing with volatility. The Lightning Network has also accelerated adoption for Bitcoin payments. As of ${CURRENT_YEAR}, thousands of merchants worldwide accept some form of cryptocurrency.`,
  },
];

export default function WhereToSpendCryptoPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spending", href: "/spending" },
          { label: "Best", href: "/spending/best" },
          { label: "Where to Spend Crypto", href: "/spending/best/merchants" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Where to Spend Crypto in {CURRENT_YEAR}
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Cryptocurrency is no longer just an investment. A growing number of retailers, services,
          and platforms accept crypto for everyday purchases. From buying electronics at Newegg to
          booking flights on Travala, the merchant ecosystem has expanded dramatically. Here is our
          comprehensive directory of where you can spend your crypto today.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          Acceptance methods vary by merchant. Some accept crypto directly at checkout, while others
          work through payment processors like BitPay or Flexa. You can also use crypto indirectly
          at virtually any retailer by purchasing gift cards with cryptocurrency or using a crypto
          debit card.
        </p>
      </div>

      {/* Merchant Directory */}
      {merchantCategories.map((category) => (
        <section key={category.name} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {category.merchants.map((merchant) => (
              <div
                key={merchant.name}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-white font-semibold">{merchant.name}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      merchant.type === "Direct"
                        ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                        : merchant.type.startsWith("Direct")
                        ? "bg-[var(--color-success)]/10 text-[var(--color-success)]"
                        : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                    }`}
                  >
                    {merchant.type}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{merchant.details}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* How to Spend Section */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Three Ways to Spend Crypto Anywhere</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div>
            <h3 className="text-white font-semibold mb-2">1. Crypto Debit Card</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Use a Crypto.com, Coinbase, or Binance debit card at any Visa or Mastercard merchant.
              Your crypto is automatically converted to fiat. Works at 80+ million merchants worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">2. Gift Cards</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Buy gift cards for Amazon, Uber, Netflix, and hundreds more using crypto through BitPay
              or CoinGate. Effectively lets you spend crypto at any major retailer.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">3. Direct Payment</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Pay directly at merchants that accept crypto natively. Use on-chain transactions,
              Lightning Network, or payment processors like BitPay and Flexa at checkout.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
