import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";

export const metadata: Metadata = {
  title: `Fold Card vs Coinbase Card: Bitcoin Rewards Showdown (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Fold Card vs Coinbase Card compared for Bitcoin rewards, cashback rates, fees, and features. Find out which US crypto debit card earns you the most BTC.",
};

const items: ComparisonItem[] = [
  {
    name: "Fold Card",
    slug: "fold-card",
    rating: 4.3,
    affiliateUrl: "https://cryptodegen.com/go/fold-card",
    features: {
      "Cashback Rate": "1%+ back in BTC (Fold+)",
      "Annual Fee": "Free or $150/yr (Fold+)",
      "Card Type": "Visa Debit",
      "Staking Required": "No",
      "Supported Countries": "US only",
      "ATM Withdrawals": "Standard fees",
      "Foreign Tx Fee": "Standard Visa rates",
      "Lounge Access": "No",
      "Best For": "Bitcoin maximalists",
    },
  },
  {
    name: "Coinbase Card",
    slug: "coinbase-card",
    rating: 4.4,
    affiliateUrl: "https://cryptodegen.com/go/coinbase-card",
    features: {
      "Cashback Rate": "Up to 4% in select crypto",
      "Annual Fee": "$0",
      "Card Type": "Visa Debit",
      "Staking Required": "No",
      "Supported Countries": "US only",
      "ATM Withdrawals": "Standard ATM fees",
      "Foreign Tx Fee": "$0 on USDC spend",
      "Lounge Access": "No",
      "Best For": "Multi-crypto cashback",
    },
  },
];

const features = [
  "Cashback Rate",
  "Annual Fee",
  "Card Type",
  "Staking Required",
  "Supported Countries",
  "ATM Withdrawals",
  "Foreign Tx Fee",
  "Lounge Access",
  "Best For",
];

export default function FoldVsCoinbaseCardPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Compare", href: "/crypto-cards/compare" },
          { label: "Fold vs Coinbase Card", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Fold Card vs Coinbase Card ({CURRENT_YEAR})
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        For US crypto card users, the Fold Card and Coinbase Card are two popular options with different
        strengths. Fold is built exclusively around Bitcoin rewards with a gamified experience, while
        Coinbase offers flexible multi-crypto cashback. This head-to-head comparison reveals which card
        delivers better value for different types of users.
      </p>

      <AffiliateDisclosure />

      <ComparisonTable items={items} features={features} title="Fold Card vs Coinbase Card" />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Reward Structure</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Fold Card takes a unique approach with its spin-the-wheel mechanic that can award between 0.5%
          and 100% back in Bitcoin on every purchase. The Fold+ premium subscription guarantees a 1.5%
          base rate plus better spins. Coinbase Card offers up to 4% back in a selection of
          cryptocurrencies, with higher rates for less popular tokens and around 1% for BTC or ETH.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Coinbase Card</strong> &mdash; The guaranteed up to 4%
          rate is more predictable and potentially higher than Fold&apos;s variable rewards. However, if
          you specifically want Bitcoin, Fold is purpose-built for that.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Cost to Use</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Coinbase Card is completely free with no subscription. Fold offers a free tier but the best
          rewards require Fold+ at $150 per year. When you factor in the Coinbase 2.49% liquidation
          spread on crypto spending (avoidable with USDC), the effective cost comparison becomes more
          nuanced. For a user spending $2,000 per month, the Fold+ subscription costs $12.50 monthly,
          while Coinbase&apos;s liquidation spread costs about $50 monthly on crypto spend.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Fold Card</strong> &mdash; The Fold+ subscription is
          predictable and often cheaper than Coinbase&apos;s liquidation spread, assuming you spend
          crypto rather than USDC on Coinbase.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Funding Model</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Fold Card connects to your existing bank account. You spend dollars and earn Bitcoin back,
          meaning you never need to own or manage crypto beforehand. Coinbase Card draws from your
          Coinbase balance, requiring you to hold crypto or USD on the exchange. This makes Fold more
          accessible for users who just want Bitcoin rewards without the complexity of managing exchange
          balances.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Fold Card</strong> &mdash; Bank-connected spending is
          simpler and does not require pre-loading crypto.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Bitcoin-Specific Features</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Fold is built exclusively for Bitcoin enthusiasts. It offers Lightning Network integration for
          instant BTC transfers, purchase round-ups to stack sats, and a community focused on Bitcoin
          accumulation. Coinbase Card treats Bitcoin as just one of many reward options and does not
          offer any Bitcoin-specific features.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Fold Card</strong> &mdash; For Bitcoin maximalists,
          Fold&apos;s dedicated Bitcoin features are unmatched.
        </p>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Final Verdict</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            The Fold Card is the superior choice for users who want to accumulate Bitcoin through everyday
            spending without managing crypto exchange balances. Its gamified rewards, Lightning Network
            support, and bank-connected model make it the best BTC-focused card available.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            The Coinbase Card is the better option if you want flexibility in which cryptocurrency you earn,
            already have a Coinbase account with funds, and prefer a flat guaranteed rate over variable
            spin-based rewards. It is also completely free to use.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Is the Fold+ subscription worth $150 per year?",
            answer:
              "If you spend more than $1,000 per month, the Fold+ subscription typically pays for itself through higher Bitcoin rewards. The guaranteed 1.5% base rate plus enhanced spin rewards mean a user spending $2,000 monthly could earn $360 or more in BTC annually, well above the $150 cost.",
          },
          {
            question: "Can I earn Bitcoin specifically on the Coinbase Card?",
            answer:
              "Yes, but the cashback rate for Bitcoin on Coinbase Card is typically around 1%, which is lower than the rates offered for less popular cryptocurrencies. If Bitcoin is your primary goal, the Fold Card is designed specifically for that purpose.",
          },
          {
            question: "Do I need a crypto wallet to use the Fold Card?",
            answer:
              "No. The Fold Card connects to your existing bank account for funding. Bitcoin rewards are stored in your Fold app wallet, which you can transfer to an external wallet whenever you choose. You do not need any prior crypto setup.",
          },
          {
            question: "Which card is better for someone who does not own any crypto yet?",
            answer:
              "The Fold Card is better for crypto newcomers because it connects to a regular bank account and earns Bitcoin rewards automatically. You do not need to buy crypto first. The Coinbase Card requires you to already have crypto or USD in a Coinbase account.",
          },
        ]}
      />
    </div>
  );
}
