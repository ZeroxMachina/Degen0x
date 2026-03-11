import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import { ComparisonItem } from "@/lib/types";

export const metadata: Metadata = {
  title: `Nexo Card vs Crypto.com Visa: Credit Line vs Prepaid (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Nexo Card vs Crypto.com Visa compared. Credit-line spending vs prepaid debit, cashback rates, staking, global availability, and which card is best for HODLers.",
};

const items: ComparisonItem[] = [
  {
    name: "Nexo Card",
    slug: "nexo-card",
    rating: 4.2,
    affiliateUrl: "https://cryptodegen.com/go/nexo-card",
    features: {
      "Cashback Rate": "Up to 2% in NEXO or BTC",
      "Annual Fee": "$0",
      "Card Type": "Mastercard (Credit Line)",
      "Staking Required": "Collateral required",
      "Supported Countries": "200+ countries",
      "ATM Withdrawals": "Free up to limits",
      "Foreign Tx Fee": "0%",
      "Lounge Access": "No",
      "Best For": "HODLers who want to spend without selling",
    },
  },
  {
    name: "Crypto.com Visa",
    slug: "crypto-com-visa",
    rating: 4.7,
    affiliateUrl: "https://cryptodegen.com/go/crypto-com-visa",
    features: {
      "Cashback Rate": "Up to 5% in CRO",
      "Annual Fee": "$0",
      "Card Type": "Prepaid Visa Debit",
      "Staking Required": "Yes (CRO, $400–$400K)",
      "Supported Countries": "100+ countries",
      "ATM Withdrawals": "Free up to $800/mo (higher tiers)",
      "Foreign Tx Fee": "0%",
      "Lounge Access": "Yes (Icy White & Obsidian)",
      "Best For": "High cashback and premium perks",
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

export default function NexoVsCryptoComPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Cards", href: "/crypto-cards" },
          { label: "Compare", href: "/crypto-cards/compare" },
          { label: "Nexo vs Crypto.com", href: "#" },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Nexo Card vs Crypto.com Visa ({CURRENT_YEAR})
      </h1>
      <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
        These two cards represent fundamentally different philosophies. The Nexo Card lets you borrow
        against your crypto holdings so you can spend without selling, while the Crypto.com Visa is a
        traditional prepaid debit card with tiered cashback rewards. Which approach makes more financial
        sense depends on whether you prioritize holding your assets or maximizing cashback.
      </p>

      <AffiliateDisclosure />

      <ComparisonTable items={items} features={features} title="Nexo Card vs Crypto.com Visa" />

      <div className="prose-crypto mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">Spending Model</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The Nexo Card creates a credit line backed by your deposited crypto. When you spend, you are
          borrowing against your holdings rather than selling them. This means your Bitcoin or Ethereum
          continues to appreciate while you spend. You repay the credit line at your own pace. The
          Crypto.com Visa requires you to top up the card by converting crypto or depositing fiat. Once
          you spend, that crypto is gone.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Nexo Card</strong> &mdash; For long-term holders who
          believe their crypto will appreciate, the credit-line model preserves upside potential while
          providing spending power.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Cashback Rewards</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Crypto.com clearly wins on cashback. Up to 5% back on all purchases with its top tier versus
          Nexo&apos;s maximum of 2%. The gap is significant and translates to hundreds or thousands of
          dollars in additional rewards annually for high spenders.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Crypto.com Visa</strong> &mdash; More than double the
          cashback rate at the top tier makes this an easy call for reward-focused users.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Risk Profile</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          The Nexo Card carries liquidation risk. If the value of your crypto collateral drops below a
          certain threshold, Nexo may sell your assets to cover the credit line. Crypto.com&apos;s staked
          CRO is locked for 180 days and subject to price fluctuation, but you will not face forced
          liquidation; the worst case is your staked CRO loses value.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Crypto.com Visa</strong> &mdash; No liquidation risk
          makes the prepaid model safer, even though your staked CRO can still lose value.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Global Availability</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          Nexo Card is available in over 200 countries via the Mastercard network. Crypto.com covers 100
          or more countries via Visa. Both offer zero foreign transaction fees. Nexo has a slight edge in
          reach, though both serve all major markets.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-6">
          <strong className="text-white">Winner: Nexo Card</strong> &mdash; Wider availability gives
          Nexo a slight edge for users in less-served regions.
        </p>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 mt-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Final Verdict</h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Choose the Nexo Card if you are a long-term crypto holder who does not want to sell your
            assets to fund daily spending. The credit-line model is elegant for HODLers, and the zero
            foreign transaction fees make it great for international use.
          </p>
          <p className="text-[var(--color-text-secondary)]">
            Choose the Crypto.com Visa if you want the highest possible cashback rate, premium lifestyle
            perks, and a simpler prepaid spending model without liquidation risk. It is the better card
            for users who prioritize tangible rewards over portfolio preservation.
          </p>
        </div>
      </div>

      <FAQSection
        faqs={[
          {
            question: "Can I get liquidated using the Nexo Card?",
            answer:
              "Yes. If the value of your crypto collateral drops below Nexo's required loan-to-value ratio, your assets may be partially or fully liquidated to cover the credit line. You can avoid this by maintaining a healthy collateral buffer or adding more assets when prices fall.",
          },
          {
            question: "Does the Nexo Card charge interest?",
            answer:
              "Yes. Nexo charges interest on the credit line balance, ranging from 0% for Platinum loyalty members to 13.9% APR depending on your loyalty tier and NEXO token holdings. Platinum members who hold a high proportion of NEXO tokens can borrow at 0%.",
          },
          {
            question: "Can I use both cards simultaneously?",
            answer:
              "Absolutely. Some users keep a Nexo Card for large expenses they want to borrow against and a Crypto.com Visa for daily purchases to maximize cashback. This dual-card strategy can optimize both portfolio preservation and rewards.",
          },
          {
            question: "Which card is safer from a regulatory standpoint?",
            answer:
              "Crypto.com holds regulatory licenses in multiple jurisdictions and has a longer track record with its card program. Nexo is also licensed and regulated but has faced some regulatory scrutiny in certain markets. Both are considered reputable, but Crypto.com has a broader regulatory footprint.",
          },
        ]}
      />
    </div>
  );
}
