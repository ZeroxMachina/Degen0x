import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Exchange Cover Insurance ${CURRENT_YEAR} - Protect Your Exchange Holdings`,
  description:
    "Compare the best crypto exchange insurance options. Protect against exchange hacks, insolvency, and withdrawal freezes with top coverage providers.",
};

const products: Product[] = [
  {
    name: "Nexus Mutual",
    slug: "nexus-mutual",
    rating: 4.7,
    description:
      "Nexus Mutual offers custody cover that protects against losses from centralized exchange hacks and halted withdrawals lasting more than 90 days. Coverage applies to major exchanges including Coinbase, Binance, Kraken, and others.",
    pros: [
      "Covers exchange hacks and prolonged withdrawal halts",
      "Wide range of supported exchanges",
      "Proven claim payout on past exchange incidents",
    ],
    cons: [
      "KYC required",
      "90-day waiting period for withdrawal halt claims",
      "Premiums vary by exchange risk profile",
    ],
    fees: "1.5-5% annually",
    bestFor: "Protecting large exchange balances",
    affiliateUrl: "https://cryptodegen.com/go/nexus-mutual",
    category: "insurance",
    featured: true,
  },
  {
    name: "Unslashed Finance",
    slug: "unslashed",
    rating: 4.4,
    description:
      "Unslashed offers parametric exchange coverage that pays out automatically when predefined conditions are met, such as an exchange being unable to process withdrawals for a set number of days or confirmed hack events.",
    pros: [
      "Parametric payouts without claim disputes",
      "Covers exchange insolvency scenarios",
      "No subjective assessment needed",
    ],
    cons: [
      "Parametric triggers may not match actual losses exactly",
      "Fewer exchange options than Nexus",
      "Smaller capital pool",
    ],
    fees: "2-6% annually",
    bestFor: "Automated exchange hack protection",
    affiliateUrl: "https://cryptodegen.com/go/unslashed",
    category: "insurance",
  },
  {
    name: "InsurAce",
    slug: "insurace",
    rating: 4.2,
    description:
      "InsurAce provides custodian risk cover that protects users against losses from centralized exchange failures. Their multi-chain approach means coverage can be purchased with lower gas fees on supported L2 networks.",
    pros: [
      "No KYC required for coverage",
      "Can bundle with DeFi coverage for discounts",
      "Multi-chain purchasing options",
    ],
    cons: [
      "Less exchange-specific track record",
      "Smaller coverage capacity",
      "Claim timeline can be lengthy",
    ],
    fees: "2-5% annually",
    bestFor: "Bundling exchange cover with DeFi insurance",
    affiliateUrl: "https://cryptodegen.com/go/insurace",
    category: "insurance",
  },
];

const faqs: FAQ[] = [
  {
    question: "What does exchange cover insurance protect against?",
    answer:
      "Exchange cover protects against financial losses when a centralized exchange is hacked, becomes insolvent, or halts withdrawals for an extended period. It does not cover losses from your own account being compromised due to phishing or poor personal security practices.",
  },
  {
    question: "Are my funds on Coinbase or Binance insured by default?",
    answer:
      "Most major exchanges carry some internal insurance funds and may hold crime insurance policies, but these typically do not guarantee full reimbursement to individual users. FDIC insurance on exchanges like Coinbase only covers USD fiat balances, not cryptocurrency holdings. Third-party crypto insurance provides additional protection.",
  },
  {
    question: "How long does an exchange cover claim take?",
    answer:
      "Claim timelines vary by provider. Parametric protocols like Unslashed can pay out within days once trigger conditions are verified. Discretionary protocols like Nexus Mutual typically require a community vote, which can take 1-4 weeks depending on the complexity of the incident.",
  },
  {
    question: "Should I insure all my exchange holdings?",
    answer:
      "Consider insuring only the portion of your portfolio that you must keep on exchanges for active trading. Moving long-term holdings to self-custody wallets is generally more cost-effective than paying ongoing insurance premiums for exchange coverage.",
  },
];

export default function ExchangeCoverPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Insurance", href: "/insurance" },
          { label: "Best", href: "/insurance/best" },
          { label: "Exchange Cover", href: "/insurance/best/exchange-cover" },
        ]}
      />

      <AffiliateDisclosure />

      <div className="max-w-4xl mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Best Exchange Cover Insurance of {CURRENT_MONTH} {CURRENT_YEAR}
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-6">
          The collapse of major exchanges has proven that no centralized platform is immune to failure. Exchange cover insurance protects your crypto holdings against hacks, insolvency, and extended withdrawal freezes on centralized exchanges.
        </p>
        <p className="text-[var(--color-text-secondary)] mb-4">
          While the mantra &quot;not your keys, not your coins&quot; remains true, many traders need to keep funds on exchanges for active trading. Exchange cover bridges this gap by providing financial protection for assets that must remain on centralized platforms. Whether you are a day trader with significant exchange balances or an occasional buyer who keeps some crypto on an exchange for convenience, this coverage can serve as a critical safety net.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          We evaluated exchange cover providers based on the number of exchanges covered, claim trigger conditions, payout speed, premium pricing, and historical reliability. Here are our top picks for {CURRENT_YEAR}.
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="insurance" />
        ))}
      </div>

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Understanding Exchange Risks</h2>
        <div className="grid md:grid-cols-2 gap-6 text-[var(--color-text-secondary)]">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Hack Risk</h3>
            <p>Exchanges are high-value targets for hackers. Even major platforms have suffered breaches that resulted in significant user losses. Exchange cover typically kicks in when an exchange is hacked and users lose access to their deposited assets.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Insolvency Risk</h3>
            <p>Exchange insolvency occurs when a platform cannot meet its obligations to depositors. This can result from mismanagement of customer funds, fraud, or market conditions that deplete exchange reserves. Coverage protects against total loss in these scenarios.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Withdrawal Freeze Risk</h3>
            <p>Some exchange covers trigger when withdrawals are halted for an extended period, typically 90 days or more. This protects against situations where an exchange remains technically operational but prevents users from accessing their funds.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Regulatory Risk</h3>
            <p>Regulatory actions can freeze exchange operations, preventing user withdrawals. While not all policies cover regulatory-driven freezes, some providers include this in their coverage scope, making it important to read policy terms carefully.</p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
