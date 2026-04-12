import Link from "next/link";
import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR, CURRENT_MONTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Insurance - Compare DeFi & Smart Contract Coverage ${CURRENT_YEAR}`,
  description:
    "Compare the best crypto insurance protocols. Protect your assets with smart contract cover, exchange insurance, DeFi protocol coverage, and stablecoin depeg protection.",
};

const bestOfLinks = [
  { title: "Best Crypto Insurance", href: "/insurance/best", desc: "Top-rated insurance protocols compared side by side" },
  { title: "Smart Contract Cover", href: "/insurance/best/smart-contract", desc: "Protect against smart contract exploits and bugs" },
  { title: "Exchange Cover", href: "/insurance/best/exchange-cover", desc: "Insurance for exchange hacks and insolvency" },
  { title: "Protocol Cover", href: "/insurance/best/protocol-cover", desc: "Coverage for DeFi protocol failures" },
  { title: "Depeg Cover", href: "/insurance/best/depeg-cover", desc: "Stablecoin depeg insurance options" },
  { title: "Wallet Protection", href: "/insurance/best/wallet-protection", desc: "Insurance for wallet theft and loss" },
  { title: "DeFi Protocol Insurance", href: "/insurance/best/defi-protocols", desc: "Best coverage for DeFi positions" },
];

const reviewLinks = [
  { title: "Nexus Mutual Review", href: "/insurance/reviews/nexus-mutual", desc: "The largest decentralized insurance protocol" },
  { title: "InsurAce Review", href: "/insurance/reviews/insurace", desc: "Multi-chain insurance with portfolio coverage" },
  { title: "Unslashed Review", href: "/insurance/reviews/unslashed", desc: "Parametric insurance for crypto assets" },
];

const learnLinks = [
  { title: "What Is Crypto Insurance?", href: "/insurance/learn/what-is-crypto-insurance", desc: "Understanding decentralized insurance basics" },
  { title: "Smart Contract Cover Explained", href: "/insurance/learn/smart-contract-cover-explained", desc: "How smart contract coverage works" },
  { title: "How to Insure Your Crypto", href: "/insurance/learn/how-to-insure-your-crypto", desc: "Step-by-step guide to getting coverage" },
  { title: "Exchange Insurance & FDIC", href: "/insurance/learn/exchange-insurance-fdic", desc: "What exchanges cover and what they do not" },
  { title: "DeFi Insurance: How It Works", href: "/insurance/learn/defi-insurance-how-it-works", desc: "Mechanics of decentralized coverage" },
  { title: "Stablecoin Depeg Risks", href: "/insurance/learn/stablecoin-depeg-risks", desc: "Protecting against stablecoin depegging" },
];

export default function InsuranceHubPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Insurance", href: "/insurance" },
        ]}
      />

      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Crypto Insurance Hub
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-8">
          The crypto industry has lost billions of dollars to smart contract exploits, exchange hacks, and protocol failures. Crypto insurance is an emerging sector that provides financial protection against these risks, enabling users to hedge their exposure and protect their assets from unforeseen events.
        </p>

        <p className="text-[var(--color-text-secondary)] mb-6">
          Unlike traditional insurance, most crypto insurance operates through decentralized protocols where coverage is underwritten by community members who stake capital in risk pools. When a valid claim event occurs, policyholders receive payouts from these pools. This decentralized approach removes the need for traditional insurance companies and enables permissionless, transparent coverage that anyone can purchase or provide.
        </p>

        <p className="text-[var(--color-text-secondary)] mb-12">
          Whether you are protecting a large DeFi portfolio, hedging stablecoin exposure, or seeking coverage for assets held on centralized exchanges, understanding the landscape of crypto insurance is essential for responsible digital asset management. Our guides, reviews, and comparisons cover every aspect of protecting your crypto in {CURRENT_YEAR}.
        </p>
      </div>

      {/* Best-Of Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">
          Best Crypto Insurance for {CURRENT_MONTH} {CURRENT_YEAR}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bestOfLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 card-hover"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Insurance Protocol Reviews</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {reviewLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              <span className="inline-block rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-medium px-2 py-0.5 mb-2">
                Review
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Learn Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Learn About Crypto Insurance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learnLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
            >
              <span className="inline-block rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium px-2 py-0.5 mb-2">
                Guide
              </span>
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">{link.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Insurance Matters */}
      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Why Crypto Insurance Matters</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Smart Contract Risk</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              DeFi protocols are powered by smart contracts that can contain bugs or vulnerabilities. Insurance provides a safety net when exploits happen, helping users recover lost funds.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Exchange Failures</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Centralized exchanges can be hacked or become insolvent, as history has shown multiple times. Exchange cover protects users who keep funds on trading platforms.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Stablecoin Depegs</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Stablecoins can lose their peg due to algorithmic failures, collateral issues, or market panics. Depeg insurance pays out when a stablecoin drops below a defined threshold.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
