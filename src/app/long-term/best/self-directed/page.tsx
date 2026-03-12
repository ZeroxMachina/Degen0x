import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import FAQSection from "@/components/FAQSection";
import { Product, FAQ } from "@/lib/types";
import { CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Self-Directed Crypto Retirement Accounts ${CURRENT_YEAR}`,
  description: `Compare the best self-directed IRA and Solo 401(k) providers for cryptocurrency investing in ${CURRENT_YEAR}. Take full control of your crypto retirement portfolio with checkbook control and expanded asset options.`,
};

const products: Product[] = [
  {
    name: "Rocket Dollar",
    slug: "rocket-dollar",
    rating: 4.7,
    description:
      "Rocket Dollar offers true self-directed IRA and Solo 401(k) accounts with checkbook control, meaning you manage your own LLC that holds the retirement assets. This structure gives you maximum flexibility to invest in crypto through any exchange or DeFi protocol of your choice. The platform handles all custodial compliance, IRS reporting, and LLC formation while you maintain full investment control.",
    pros: ["Checkbook control via LLC structure", "Invest through any exchange or DeFi platform", "Solo 401(k) with higher contribution limits", "Supports Traditional, Roth, and SEP IRA", "No per-transaction fees"],
    cons: ["$15/month Silver or $30/month Gold plan", "Requires investment knowledge", "LLC setup takes 2-3 weeks", "More complex than managed platforms"],
    fees: "$15-$30/month, no per-trade fees",
    bestFor: "Full control self-directed crypto retirement",
    affiliateUrl: "https://degen0x.com/go/rocket-dollar",
    category: "long-term",
    featured: true,
  },
  {
    name: "Alto IRA",
    slug: "alto-ira",
    rating: 4.6,
    description:
      "Alto IRA provides self-directed retirement accounts with streamlined access to alternative investments including crypto. Their Alto CryptoIRA product offers direct crypto trading through Coinbase integration, while their standard self-directed IRA allows investments in a broader range of alternatives. The platform combines self-directed flexibility with a user-friendly interface that simplifies the typically complex SDIRA process.",
    pros: ["Coinbase integration for crypto trading", "Low monthly fees", "Easy-to-use interface for SDIRA", "No minimum investment required", "Access to alternative investments beyond crypto"],
    cons: ["1% crypto trading fee", "$10-$25 monthly fee depending on plan", "Fewer crypto assets than pure crypto IRAs", "Limited DeFi access"],
    fees: "$10-$25/month + 1% crypto trading fee",
    bestFor: "User-friendly self-directed crypto IRA",
    affiliateUrl: "https://degen0x.com/go/alto-ira",
    category: "long-term",
  },
  {
    name: "Directed IRA (Directed Trust Company)",
    slug: "directed-ira",
    rating: 4.4,
    description:
      "Directed IRA by Directed Trust Company offers self-directed IRA and Solo 401(k) accounts with checkbook control for investing in cryptocurrencies and other alternative assets. As a regulated trust company, they provide institutional-grade custodial services while giving account holders full investment discretion. Their educational resources and responsive support team help investors navigate self-directed retirement investing.",
    pros: ["Regulated trust company custodian", "Checkbook control available", "Solo 401(k) with Roth option", "Excellent educational resources", "Responsive customer support"],
    cons: ["Higher annual fees than some competitors", "Crypto investment requires LLC setup", "Processing times can be slow", "Interface less modern than competitors"],
    fees: "Annual custodial fee varies by account type",
    bestFor: "Regulated self-directed retirement custody",
    affiliateUrl: "https://degen0x.com/go/directed-ira",
    category: "long-term",
  },
  {
    name: "IRA Financial",
    slug: "ira-financial",
    rating: 4.3,
    description:
      "IRA Financial provides self-directed IRA and Solo 401(k) accounts designed for alternative investments including cryptocurrency. Founded by a tax attorney, the platform specializes in checkbook control IRA LLCs and Solo 401(k) plans that allow direct crypto investing through any platform. Their in-house legal team ensures compliance with complex IRS regulations governing self-directed retirement accounts.",
    pros: ["Founded by tax attorneys", "Checkbook control for maximum flexibility", "Solo 401(k) with loan provisions", "In-house legal compliance team", "No asset-based fees"],
    cons: ["One-time setup fees", "Requires self-management of investments", "Less hand-holding than managed platforms", "Phone-based customer support primarily"],
    fees: "One-time setup fee + annual maintenance",
    bestFor: "Tax-optimized self-directed retirement investing",
    affiliateUrl: "https://degen0x.com/go/ira-financial",
    category: "long-term",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is a self-directed crypto retirement account?",
    answer: "A self-directed IRA or Solo 401(k) is a retirement account where you, not a custodian or broker, choose how your funds are invested. Unlike standard crypto IRAs that limit you to their own trading platform, self-directed accounts typically use a checkbook control LLC structure that lets you invest through any crypto exchange, DeFi protocol, or even hold keys to your own wallet, all within a tax-advantaged retirement wrapper.",
  },
  {
    question: "What is checkbook control and why does it matter for crypto?",
    answer: "Checkbook control means your IRA owns an LLC, and you are the manager of that LLC with signing authority on its bank and investment accounts. For crypto investors, this means you can trade on any exchange, participate in DeFi, stake assets, or even hold crypto in a hardware wallet, all within your IRA. Without checkbook control, you are limited to the specific platform your IRA custodian provides.",
  },
  {
    question: "Can I use DeFi protocols inside a self-directed IRA?",
    answer: "Technically yes, if you have a checkbook control self-directed IRA, you can interact with DeFi protocols. However, this is a regulatory gray area. The IRS has not issued specific guidance on DeFi within IRAs. You should consult with a tax professional and be aware that certain DeFi activities could be considered prohibited transactions. Conservative investors may want to stick to simple buy-and-hold or staking within their SDIRA.",
  },
  {
    question: "Solo 401(k) vs Self-Directed IRA: which is better for crypto?",
    answer: "A Solo 401(k) offers higher contribution limits (up to $69,000/year vs $7,000 for IRAs), a Roth option, and loan provisions. However, Solo 401(k)s are only available to self-employed individuals with no full-time employees. If you qualify, a Solo 401(k) is generally the better option for crypto retirement investing due to the significantly higher contribution limits.",
  },
];

export default function SelfDirectedPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Long-Term", href: "/long-term" }, { label: "Best", href: "/long-term/best" }, { label: "Self-Directed", href: "/long-term/best/self-directed" }]} />
      <AffiliateDisclosure />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Best Self-Directed Crypto Retirement Accounts ({CURRENT_YEAR})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-6">Last updated: {CURRENT_MONTH} {CURRENT_YEAR}</p>

      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Self-directed retirement accounts give you complete control over your crypto investments within a
          tax-advantaged wrapper. Unlike standard crypto IRAs that restrict you to their own platform, self-directed
          accounts with checkbook control let you invest through any exchange, participate in DeFi, or even hold
          your own keys. This flexibility comes with more responsibility but also more opportunity.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
          Our top pick is <strong className="text-[var(--color-text)]">Rocket Dollar</strong> for its streamlined LLC setup,
          checkbook control, and flat monthly pricing with no per-transaction fees. For a more user-friendly
          experience, <strong className="text-[var(--color-text)]">Alto IRA</strong> offers simplified self-directed crypto
          investing through Coinbase integration without the complexity of LLC management.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} rank={index + 1} categorySlug="long-term" />
        ))}
      </div>

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 mb-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Self-Directed vs Standard Crypto IRA</h2>
        <div className="space-y-4 text-[var(--color-text-secondary)]">
          <p>Understanding the key differences helps you choose the right structure for your retirement crypto investing:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Standard Crypto IRA</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Trade through the provider&apos;s platform only</li>
                <li>Limited to assets the provider supports</li>
                <li>Provider handles all custody and compliance</li>
                <li>Simpler setup and management</li>
                <li>Best for: passive investors wanting simplicity</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-[var(--color-bg)]/50">
              <h3 className="text-[var(--color-text)] font-semibold mb-2">Self-Directed IRA (Checkbook Control)</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Invest through any exchange or platform</li>
                <li>Access to any cryptocurrency or DeFi protocol</li>
                <li>You manage investments; custodian handles compliance</li>
                <li>More complex setup with LLC formation</li>
                <li>Best for: experienced investors wanting maximum control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
    </div>
  );
}
