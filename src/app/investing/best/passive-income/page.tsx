import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import TableOfContents from "@/components/TableOfContents";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";
import { STAKING_PLATFORMS, PASSIVE_INCOME_FAQS } from "@/data/investing";
import { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: `Best Crypto Passive Income Strategies ${CURRENT_YEAR} - Earn Yield`,
  description: `Discover the best ways to earn passive income with crypto in ${CURRENT_YEAR}. Staking, lending, yield farming, and more strategies for earning yield on your holdings.`,
  alternates: { canonical: "/investing/best/passive-income" },
};

const passiveIncomePicks: Product[] = [
  ...STAKING_PLATFORMS.slice(0, 3),
  {
    name: "Aave",
    slug: "aave",
    rating: 4.5,
    description: "The largest DeFi lending protocol where you can earn interest by supplying crypto assets to liquidity pools used by borrowers.",
    pros: ["Highest TVL in DeFi lending", "Multi-chain deployment", "Transparent on-chain rates", "Battle-tested security"],
    cons: ["Variable interest rates", "Smart contract risk", "Requires DeFi knowledge", "Gas fees on Ethereum mainnet"],
    fees: "No platform fees (gas only)",
    bestFor: "DeFi lending yield",
    affiliateUrl: "https://degen0x.com/go/aave",
    category: "passive-income",
  },
  {
    name: "Pendle Finance",
    slug: "pendle",
    rating: 4.2,
    description: "A yield trading protocol that lets you tokenize and trade future yield, enabling fixed-rate income and yield speculation strategies.",
    pros: ["Fixed-rate yield options", "Yield trading strategies", "Growing multi-chain presence", "Innovative yield market"],
    cons: ["Complex for beginners", "Smart contract risk", "Newer protocol", "Requires understanding of yield tokens"],
    fees: "Variable protocol fees",
    bestFor: "Advanced yield strategies",
    affiliateUrl: "https://degen0x.com/go/pendle",
    category: "passive-income",
  },
];

const toc = [
  { id: "top-picks", title: "Top Passive Income Options", level: 2 },
  { id: "strategies", title: "Passive Income Strategies", level: 2 },
  { id: "risk-reward", title: "Risk vs Reward", level: 2 },
  { id: "tax-implications", title: "Tax Implications", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
];

export default function BestPassiveIncomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Crypto Investing", href: "/investing" },
        { label: "Best Passive Income", href: "/investing/best/passive-income" },
      ]} />

      <AffiliateDisclosure />

      <header className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Best Crypto Passive Income Strategies for {CURRENT_YEAR}
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Make your crypto work for you. From staking to DeFi lending to yield farming, there
          are numerous ways to earn passive income on your crypto holdings. We evaluate the
          top options by yield, risk, and accessibility.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] mt-2">
          Last updated: {CURRENT_MONTH} {CURRENT_YEAR}
        </p>
      </header>

      <TableOfContents items={toc} />

      <section id="top-picks" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Top Passive Income Options</h2>
        <div className="space-y-4">
          {passiveIncomePicks.map((product, idx) => (
            <ProductCard key={product.slug} product={product} rank={idx + 1} categorySlug="investing" />
          ))}
        </div>
      </section>

      <section id="strategies" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Passive Income Strategies</h2>
        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Staking (3-12% APY)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              The safest crypto passive income strategy. Lock your PoS tokens to earn rewards for
              securing the network. Liquid staking protocols let you earn while maintaining DeFi access.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">DeFi Lending (2-8% APY)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Supply crypto to lending protocols like Aave or Compound to earn interest from borrowers.
              Rates are variable and depend on market demand for borrowing specific assets.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Liquidity Provision (Variable)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Provide liquidity to DEX trading pairs and earn a share of trading fees. Higher yields
              but carries impermanent loss risk. Best for stablecoin pairs with lower volatility.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Yield Farming (Variable, Higher Risk)</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Combine multiple DeFi strategies to maximize returns. Often involves earning bonus
              governance tokens on top of base yields. Higher returns come with higher complexity and risk.
            </p>
          </div>
        </div>
      </section>

      <section id="risk-reward" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Risk vs Reward</h2>
        <p className="text-[var(--color-text-secondary)] mb-4">
          As a general rule, higher yields mean higher risk. Exchange staking at 3-4% APY is
          relatively low risk but offers modest returns. DeFi staking at 4-8% APY adds smart
          contract risk. Yield farming strategies promising 20%+ APY often involve significant
          risks including impermanent loss, token devaluation, and smart contract exploits.
          Be skeptical of any platform promising unusually high yields with no apparent risk.
        </p>
        <p className="text-[var(--color-text-secondary)]">
          Start with the safest options and only move to higher-risk strategies as your
          understanding of DeFi grows. Never allocate more than you can afford to lose to
          any single yield-generating strategy, and always verify the security audit status
          of protocols before depositing funds.
        </p>
      </section>

      <section id="tax-implications" className="mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Tax Implications</h2>
        <p className="text-[var(--color-text-secondary)]">
          Crypto passive income is generally taxable as ordinary income when received. Staking
          rewards, lending interest, and yield farming tokens are all subject to income tax at
          their fair market value when earned. You may also owe capital gains tax when you later
          sell these rewards. Track all yield earned using crypto tax software to ensure accurate
          reporting and avoid penalties.
        </p>
      </section>

      <section id="faq">
        <FAQSection faqs={PASSIVE_INCOME_FAQS} />
      </section>
    </div>
  );
}
