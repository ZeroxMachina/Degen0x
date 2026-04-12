import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto Tax Solutions (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Explore the best crypto tax solutions for ${CURRENT_YEAR}. From tax software and free tools to crypto CPAs and DeFi-specific tax solutions.`,
};

const subcategories = [
  {
    name: "Best Crypto Tax Software",
    href: "/taxes/best/software",
    description: "Full-featured tax software for calculating, tracking, and filing your crypto taxes. Supports hundreds of exchanges, DeFi protocols, and NFT platforms.",
  },
  {
    name: "Best Free Tax Tools",
    href: "/taxes/best/free-tools",
    description: "Free and freemium crypto tax tools that help you track transactions, estimate taxes, and generate basic reports without paying for premium software.",
  },
  {
    name: "Best Crypto CPAs & Accountants",
    href: "/taxes/best/accountants",
    description: "Top-rated accountants and CPA firms specializing in cryptocurrency taxation. Get expert help with complex crypto tax situations, audits, and planning.",
  },
  {
    name: "Best DeFi Tax Tools",
    href: "/taxes/best/defi-tax-tools",
    description: "Specialized tools for tracking and reporting taxes on DeFi activities including yield farming, liquidity pools, staking rewards, and token swaps.",
  },
];

export default function BestTaxSolutionsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Taxes", href: "/taxes" },
          { label: "Best Solutions", href: "/taxes/best" },
        ]}
      />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
        Best Crypto Tax Solutions ({CURRENT_YEAR})
      </h1>
      <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mb-12">
        Find the right crypto tax solution for your needs. Whether you are a casual investor,
        an active DeFi user, or need professional help, we have compared the top options in
        every category.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {subcategories.map((cat) => (
          <Link href={cat.href}
            key={cat.href}
            className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 card-hover"
          >
            <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">{cat.name}</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {cat.description}
            </p>
            <span className="mt-4 inline-block text-[var(--color-primary)] text-sm font-medium">
              View Rankings &#8594;
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
