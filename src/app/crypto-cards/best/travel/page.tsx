import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { cryptoCards } from "@/data/crypto-cards";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Cards for Travel in ${CURRENT_YEAR} - No Foreign Fees`,
  description: `Compare the best crypto cards for international travel in ${CURRENT_YEAR}. Zero foreign transaction fees, airport lounge access, and multi-currency spending.`,
};

const travelCards = [
  cryptoCards.find((c) => c.slug === "crypto-com-visa")!,
  cryptoCards.find((c) => c.slug === "wirex-card")!,
  cryptoCards.find((c) => c.slug === "nexo-card")!,
  cryptoCards.find((c) => c.slug === "gemini-card")!,
  cryptoCards.find((c) => c.slug === "binance-card")!,
  cryptoCards.find((c) => c.slug === "rain-card")!,
];

const faqs = [
  {
    question: "Which crypto card is best for international travel?",
    answer: "The Crypto.com Visa is the best overall travel crypto card, offering zero foreign transaction fees, airport lounge access on Icy White and Obsidian tiers, and Visa network acceptance in 200+ countries. The Wirex Card is excellent for multi-currency flexibility, and the Nexo Card works in 200+ countries with no foreign fees.",
  },
  {
    question: "Do crypto cards charge foreign transaction fees?",
    answer: "Most top crypto cards charge zero foreign transaction fees, which is a significant advantage over many traditional bank cards that charge 1%–3%. However, watch for the exchange rate spread applied when converting crypto to a foreign currency, as this can function as a hidden fee.",
  },
  {
    question: "Can I use a crypto card at ATMs abroad?",
    answer: "Yes, most crypto debit cards allow ATM withdrawals internationally. The Crypto.com Visa offers free monthly ATM withdrawals ($200–$1,000 depending on tier), after which a 2% fee applies. Other cards may charge flat fees per withdrawal. Always check your specific card terms before traveling.",
  },
  {
    question: "Do any crypto cards offer airport lounge access?",
    answer: "Yes, the Crypto.com Visa Icy White and Obsidian tiers include complimentary LoungeKey airport lounge access. This is comparable to Priority Pass offered by premium traditional travel cards. You need to stake $40,000+ in CRO to access this benefit.",
  },
  {
    question: "Is it safe to travel with a crypto card as my primary payment?",
    answer: "Crypto cards on the Visa or Mastercard network are accepted at millions of locations worldwide and function identically to traditional cards at the point of sale. However, carry a backup payment method, as some regions or merchants may not accept cards. Also ensure your crypto balance is sufficient before traveling.",
  },
  {
    question: "How do exchange rates work on crypto cards when traveling?",
    answer: "When you make a purchase in a foreign currency, the card network (Visa or Mastercard) converts the amount at its exchange rate. If you are spending crypto, there is an additional conversion from crypto to your base currency. The combined rate is typically competitive with or better than traditional bank cards, but varies by issuer.",
  },
];

export default function BestTravelCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Best Crypto Cards", href: "/crypto-cards/best" },
          { label: "Travel", href: "/crypto-cards/best/travel" },
        ]}
      />

      <h1 className="text-4xl font-bold text-white mb-4">
        Best Crypto Cards for Travel ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto cards can be excellent travel companions. Many charge zero foreign transaction
          fees, offer competitive exchange rates, and work on global Visa or Mastercard networks
          accepted in virtually every country. Some even provide airport lounge access and travel
          insurance, making them serious alternatives to traditional travel credit cards. We
          ranked the best crypto cards for travelers based on international usability, fees
          abroad, and travel-specific perks.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">What Makes a Good Travel Crypto Card</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The ideal travel crypto card should charge no foreign transaction fees, offer
          competitive exchange rates with minimal spread, provide worldwide acceptance on a
          major card network, and ideally include travel perks like lounge access, travel
          insurance, or free ATM withdrawals abroad. Multi-currency support is a bonus, letting
          you hold and spend in local currencies without repeated conversion fees.
        </p>
        <h2 className="text-xl font-bold text-white mt-8 mb-4">Our Top Picks</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The <strong className="text-white">Crypto.com Visa</strong> is our top travel card
          with zero foreign fees, airport lounge access on premium tiers, and free ATM
          withdrawals. The <strong className="text-white">Wirex Card</strong> shines for multi-currency
          travel with support for 60+ fiat and crypto currencies in a single app. The{" "}
          <strong className="text-white">Nexo Card</strong> lets you borrow against your crypto
          in 200+ countries without selling your holdings or worrying about foreign fees.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {travelCards.map((card, index) => (
          <ProductCard
            key={card.slug}
            product={card}
            rank={index + 1}
            categorySlug="crypto-cards"
          />
        ))}
      </div>

      {/* Travel Features Comparison */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Travel Feature Comparison</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-white font-semibold">Airport lounge access: Crypto.com Visa</h3>
              <p className="text-sm">Icy White and Obsidian tiers include complimentary LoungeKey access at 1,000+ airport lounges worldwide. A premium perk typically found only on high-end traditional travel cards.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-white font-semibold">Multi-currency flexibility: Wirex Card</h3>
              <p className="text-sm">Hold and spend in 60+ fiat currencies and cryptocurrencies. Convert between them in-app at competitive rates. Ideal for frequent travelers visiting multiple countries.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-white font-semibold">Spend without selling: Nexo Card</h3>
              <p className="text-sm">Travel and spend against your crypto portfolio as collateral in 200+ countries. Your assets stay invested while you enjoy instant purchasing power abroad.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-white font-semibold">Free ATM withdrawals: Crypto.com Visa</h3>
              <p className="text-sm">Monthly free ATM allowance from $200 (Ruby) to $1,000 (Obsidian). Access local currency cash when traveling in areas with limited card acceptance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Our Methodology</h2>
        <p className="text-[var(--color-text-secondary)]">
          Travel card rankings prioritize international usability and cost efficiency abroad.
          We weight zero foreign transaction fees heavily (30%), followed by travel-specific
          perks like lounge access and insurance (25%), global acceptance and currency
          flexibility (20%), ATM access and fees abroad (15%), and the overall earning rate on
          international purchases (10%). We test each card during actual international travel
          to verify real-world performance.
        </p>
      </section>

      {/* Related Links */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Best Crypto Cards Overall", href: "/crypto-cards/best" },
            { title: "Best Free Crypto Cards", href: "/crypto-cards/best/no-annual-fee" },
            { title: "Best Crypto Cards for High Spenders", href: "/crypto-cards/best/high-spenders" },
            { title: "How to Choose the Right Crypto Card", href: "/crypto-cards/learn/how-to-choose" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 card-hover block"
            >
              <span className="text-white font-semibold">{link.title}</span>
              <span className="block text-xs text-[var(--color-text-secondary)] mt-1">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
