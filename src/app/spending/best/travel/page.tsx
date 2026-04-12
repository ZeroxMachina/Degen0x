import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { Product } from "@/lib/types";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: `Best Crypto Cards for Travel in ${CURRENT_YEAR} - No Foreign Fees | ${SITE_NAME}`,
  description: `Find the best crypto debit cards for international travel in ${CURRENT_YEAR}. No foreign transaction fees, airport lounge access, and worldwide acceptance compared.`,
};

const travelCards: Product[] = [
  {
    name: "Crypto.com Visa Card (Jade Green / Royal Indigo+)",
    slug: "crypto-com-jade",
    rating: 4.9,
    description: "The best crypto card for travelers. Zero foreign transaction fees, free airport lounge access via LoungeKey (Jade Green and above), 3-5% cashback worldwide, and interbank exchange rates. Higher tiers include free Spotify and Netflix, perfect for long-term travelers.",
    pros: ["Zero foreign transaction fees", "Airport lounge access (LoungeKey) on Jade Green+", "3-5% cashback works worldwide", "Interbank exchange rates on currency conversion"],
    cons: ["Jade Green requires $4,000 CRO staking", "Lounge access limited to card tiers Jade and above", "Cashback in CRO only", "Some ATM networks charge their own fees"],
    fees: "No annual fee / $4,000+ CRO stake",
    bestFor: "Overall best travel crypto card",
    affiliateUrl: "#",
    category: "spending",
    featured: true,
  },
  {
    name: "Wirex Card",
    slug: "wirex-card",
    rating: 4.4,
    description: "Supports 150+ currencies with interbank exchange rates, making it ideal for multi-country trips. Up to 8% Cryptoback on in-store purchases abroad. The multi-currency account lets you hold and convert between fiat and crypto seamlessly.",
    pros: ["150+ supported fiat and crypto currencies", "Interbank exchange rates", "Available in 130+ countries", "Up to 8% Cryptoback on in-store purchases"],
    cons: ["Premium plan needed for best rates ($14.99/mo)", "Cryptoback in WXT token only", "Weekend exchange rate surcharges", "ATM withdrawal limits on free tier"],
    fees: "$0-$14.99/month",
    bestFor: "Multi-currency international travel",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Binance Card",
    slug: "binance-card",
    rating: 4.3,
    description: "An excellent travel companion for non-US travelers. Zero foreign transaction fees and real-time conversion at competitive Binance exchange rates. Up to 8% cashback in BNB works the same whether you are spending domestically or abroad.",
    pros: ["No foreign transaction fees", "Competitive Binance exchange rates", "Up to 8% BNB cashback worldwide", "Wide crypto selection for funding"],
    cons: ["Not available in the US", "Limited to EU and select regions", "Cashback only in BNB", "No airport lounge access"],
    fees: "No annual fee",
    bestFor: "European travelers",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "Nexo Card",
    slug: "nexo-card",
    rating: 4.1,
    description: "Ideal for travelers who want to preserve their crypto portfolio. Spend abroad by borrowing against your crypto holdings rather than selling them. No foreign transaction fees on the Mastercard network, and you maintain full market exposure to your assets.",
    pros: ["No foreign transaction fees", "Spend without selling crypto (borrow against it)", "Maintain full market exposure while traveling", "Up to 2% cashback in NEXO or BTC"],
    cons: ["Interest charged on credit line (0-13.9% APR)", "Lower cashback than competitors", "Requires collateral in Nexo account", "No airport lounge perks"],
    fees: "No annual fee / interest on credit line",
    bestFor: "Traveling without selling crypto",
    affiliateUrl: "#",
    category: "spending",
  },
  {
    name: "BitPay Card",
    slug: "bitpay-card",
    rating: 3.9,
    description: "A prepaid option for travelers who prefer to lock in their conversion rate before the trip. Load USD onto the card from your crypto, then spend worry-free abroad. Compatible with Apple Pay for convenient tap-to-pay at international merchants.",
    pros: ["Lock in conversion rate before traveling", "Apple Pay and Google Pay compatible", "No conversion fee when loading", "Widely accepted on Mastercard network"],
    cons: ["Foreign transaction fees may apply", "No crypto cashback rewards", "US-issued card (limited international ATM network)", "Must pre-load funds before travel"],
    fees: "$0 annual / potential FX fees",
    bestFor: "Pre-loaded travel spending",
    affiliateUrl: "#",
    category: "spending",
  },
];

const faqs = [
  {
    question: "Do crypto debit cards charge foreign transaction fees?",
    answer: "Many crypto debit cards charge zero foreign transaction fees, which is a major advantage over traditional bank cards that typically charge 1-3%. The Crypto.com Visa, Binance Card, and Nexo Card all offer fee-free international spending. However, always check the exchange rate spread, as some cards make up for the lack of explicit fees through wider conversion spreads.",
  },
  {
    question: "Can I use a crypto card at international ATMs?",
    answer: "Yes, most crypto debit cards work at international ATMs on the Visa or Mastercard network. However, fees vary. Crypto.com offers free ATM withdrawals up to a monthly limit ($200-$1,000 depending on tier). Beyond the free allowance, fees of 1-2% typically apply. The ATM operator may also charge their own fee, which is separate from the card issuer's charges.",
  },
  {
    question: "Which crypto card has airport lounge access?",
    answer: "The Crypto.com Visa Card offers airport lounge access through the LoungeKey program on Jade Green tier and above. This gives you access to 1,000+ airport lounges worldwide. The Jade Green tier requires $4,000 in CRO staking. No other major crypto debit card currently offers built-in lounge access.",
  },
  {
    question: "How does currency conversion work with crypto cards abroad?",
    answer: "When you use a crypto card abroad, the card provider converts your cryptocurrency to the local currency at the point of sale. The conversion typically goes crypto to your card's base currency (e.g., USD), then the payment network (Visa/Mastercard) handles the conversion to the local currency. The exchange rate you receive depends on the provider's rate plus any spread.",
  },
  {
    question: "Should I use a crypto card or traditional travel card?",
    answer: "Crypto cards can be competitive with traditional travel cards, especially if you are already holding crypto. The main advantages are zero foreign transaction fees and crypto cashback rewards. However, traditional premium travel cards may offer better travel insurance, purchase protection, and broader airport lounge networks. Consider using both for maximum coverage.",
  },
];

export default function BestTravelCardsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Spending", href: "/spending" },
          { label: "Best", href: "/spending/best" },
          { label: "Travel Cards", href: "/spending/best/travel" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Cards for Travel ({CURRENT_YEAR})
      </h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">
        Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
      </p>

      <AffiliateDisclosure />

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Crypto debit cards have become a serious contender for international travel spending.
          Many offer zero foreign transaction fees, competitive exchange rates, and crypto cashback
          that works worldwide. We tested these cards across multiple countries to evaluate real-world
          performance on international transactions, ATM withdrawals, and merchant acceptance.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          The <strong className="text-[var(--color-text)]">Crypto.com Visa Card</strong> (Jade Green or higher) is our
          top travel pick thanks to its combination of zero FX fees, airport lounge access, and strong
          cashback rates abroad. For multi-currency flexibility, the <strong className="text-[var(--color-text)]">Wirex Card</strong> supports
          over 150 currencies with interbank rates.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {travelCards.map((card, index) => (
          <div
            key={card.slug}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 card-hover"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-text)] font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">{card.name}</h3>
                  <div className="text-sm text-[var(--color-accent)]">{card.rating}/5</div>
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
                href={card.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="affiliate-cta px-4 py-2 rounded-lg text-white text-sm font-medium whitespace-nowrap"
              >
                Get Card
              </a>
            </div>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)]">{card.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                Best for: {card.bestFor}
              </span>
              {card.fees && (
                <span className="inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-3 py-1 text-xs font-medium text-[var(--color-success)]">
                  {card.fees}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold text-[var(--color-success)] mb-1">Pros</h4>
                <ul className="space-y-1">
                  {card.pros.map((pro, i) => (
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
                  {card.cons.map((con, i) => (
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

      {/* Travel Tips */}
      <section className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Travel Tips for Crypto Card Users</h2>
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
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">1.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Always choose local currency at the POS</h3>
              <p className="text-sm">When paying abroad, always select the local currency rather than your home currency. Dynamic currency conversion (DCC) offered by merchants adds a hidden markup of 3-7%.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">2.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Carry a backup payment method</h3>
              <p className="text-sm">Crypto cards can occasionally be declined at certain international merchants. Always carry a traditional card or cash as backup, especially in developing countries.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">3.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Check ATM withdrawal limits before your trip</h3>
              <p className="text-sm">Know your free ATM withdrawal allowance and daily limits. Plan larger withdrawals to minimize the number of transactions and avoid exceeding your free monthly limit.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-primary)] font-bold text-lg">4.</span>
            <div>
              <h3 className="text-[var(--color-text)] font-semibold">Consider stablecoin funding for volatile markets</h3>
              <p className="text-sm">If crypto markets are volatile during your trip, fund your card with stablecoins like USDC or USDT to avoid losing purchasing power from price swings mid-vacation.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
