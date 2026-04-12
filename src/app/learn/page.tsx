import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Learn Crypto: Complete Guides & Tutorials (${CURRENT_YEAR})`,
  description: "Start your crypto education here. Beginner guides, blockchain basics, Bitcoin and Ethereum explainers, DeFi, NFTs, security tips, and a comprehensive crypto",
  alternates: { canonical: "/learn" }};

const guides = [
  {
    title: "Crypto for Complete Beginners",
    href: "/learn/crypto-for-beginners",
    description:
      "Brand new to crypto? Start here with a gentle introduction to digital currencies and how they work.",
    icon: "🎓",
    tag: "Start Here",
  },
  {
    title: "What Is Cryptocurrency?",
    href: "/learn/what-is-cryptocurrency",
    description:
      "Understand what cryptocurrency is, how it works, and why it matters in the modern financial landscape.",
    icon: "💡",
  },
  {
    title: "What Is Blockchain Technology?",
    href: "/learn/what-is-blockchain",
    description:
      "Explore the foundational technology behind all cryptocurrencies and its far-reaching applications.",
    icon: "🔗",
  },
  {
    title: "What Is Bitcoin?",
    href: "/learn/what-is-bitcoin",
    description:
      "Everything you need to know about Bitcoin, the first and largest cryptocurrency by market cap.",
    icon: "₿",
  },
  {
    title: "What Is Ethereum?",
    href: "/learn/what-is-ethereum",
    description:
      "Discover Ethereum, smart contracts, and the programmable blockchain powering DeFi and NFTs.",
    icon: "⟠",
  },
  {
    title: "What Is DeFi?",
    href: "/learn/what-is-defi",
    description:
      "Learn about decentralized finance and how it is rebuilding financial services without intermediaries.",
    icon: "🏦",
  },
  {
    title: "What Are NFTs?",
    href: "/learn/what-are-nfts",
    description:
      "Non-fungible tokens explained: digital ownership, use cases, and how the NFT ecosystem works.",
    icon: "🖼️",
  },
  {
    title: "Account Abstraction Guide 2026",
    href: "/learn/account-abstraction",
    description:
      "Master ERC-4337: smart contract wallets, gas sponsorship, social recovery, session keys, and batch transactions. Compare 8+ AA wallets and SDKs with implementation guide.",
    icon: "🔑",
    tag: "New",
  },
  {
    title: "Validator Staking Guide 2026",
    href: "/learn/validator-staking-guide",
    description:
      "Compare 10 validators across 6 chains. Understand slashing risks, APR vs APY, liquid staking, solo vs delegated staking, and how to maximize rewards.",
    icon: "🥩",
  },
  {
    title: "What Are Stablecoins?",
    href: "/learn/what-are-stablecoins",
    description:
      "Price-stable cryptocurrencies that bridge traditional finance and crypto. Learn how they maintain their peg.",
    icon: "🪙",
  },
  {
    title: "What Is Web3?",
    href: "/learn/what-is-web3",
    description:
      "The next evolution of the internet built on blockchain, decentralization, and user ownership.",
    icon: "🌐",
  },
  {
    title: "How to DYOR",
    href: "/learn/how-to-dyor",
    description:
      "Master the art of doing your own research before investing in any crypto project.",
    icon: "🔍",
  },
  {
    title: "Crypto vs Stocks",
    href: "/learn/crypto-vs-stocks",
    description:
      "Compare cryptocurrency and stock market investing across risk, returns, regulation, and more.",
    icon: "📊",
  },
  {
    title: "Crypto Security Guide",
    href: "/learn/crypto-security-guide",
    description:
      "Protect your crypto assets with best practices for wallets, passwords, and operational security.",
    icon: "🔐",
  },
  {
    title: "How to Spot Crypto Scams",
    href: "/learn/crypto-scams",
    description:
      "Identify common scams like rug pulls, phishing, and Ponzi schemes before they cost you money.",
    icon: "🚨",
  },
  {
    title: "Crypto Regulation",
    href: "/learn/crypto-regulation",
    description:
      "Navigate the evolving regulatory landscape for cryptocurrencies across major jurisdictions.",
    icon: "⚖️",
  },
  {
    title: "Crypto Glossary",
    href: "/learn/crypto-glossary",
    description:
      "A-Z reference of over 50 essential crypto terms, from altcoin to zero-knowledge proof.",
    icon: "📖",
  },
];

export default function LearnHubPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="learn"
      />      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Learn Crypto", href: "/learn" },
        ]}
      />

      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
          Learn Crypto: Your Complete Education Hub
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          Whether you are just getting started or looking to deepen your
          knowledge, our comprehensive guides cover everything from blockchain
          basics to advanced DeFi strategies, security best practices, and
          regulatory insights.
        </p>
      </div>

      {/* Featured Start Here Card */}
      <Link href="/learn/crypto-for-beginners"
        className="block mb-10 rounded-xl border-2 border-[var(--color-primary)] bg-[var(--color-bg-card)] p-6 md:p-8 hover:bg-[var(--color-bg-card-hover)] transition-colors"
      >
        <div className="flex items-start gap-4">
          <span className="text-4xl">🎓</span>
          <div>
            <span className="inline-block text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary)]/10 rounded-full px-3 py-1 mb-2">
              Recommended Starting Point
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text)] mb-2">
              Crypto for Complete Beginners
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Brand new to cryptocurrency? This guide walks you through
              everything from scratch — what crypto is, how to buy it, and how
              to stay safe. No jargon, no assumptions.
            </p>
          </div>
        </div>
      </Link>

      {/* Guide Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {guides
          .filter((g) => g.href !== "/learn/crypto-for-beginners")
          .map((guide) => (
            <Link href="/learn/crypto-for-beginners"
              key={guide.href}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-5 hover:bg-[var(--color-bg-card-hover)] hover:border-[var(--color-primary)]/50 transition-colors"
            >
              <span className="text-2xl mb-3 block">{guide.icon}</span>
              <h2 className="text-base font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {guide.description}
              </p>
            </Link>
          ))}
      </div>

      {/* Quick Links */}
      <div className="mt-16 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 md:p-8">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">
          Explore More {SITE_NAME} Resources
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          <Link href="/learn/crypto-for-beginners"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            Compare Crypto Exchanges &rarr;
          </Link>
          <Link href="/learn/crypto-for-beginners"
          >
            Find the Best Wallets &rarr;
          </Link>
          <Link href="/learn/crypto-for-beginners"
          >
            Explore DeFi Lending &rarr;
          </Link>
          <Link href="/learn/crypto-for-beginners"
          >
            Crypto Investing Guides &rarr;
          </Link>
          <Link href="/learn/crypto-for-beginners"
          >
            Crypto Tax Help &rarr;
          </Link>
          <Link href="/learn/crypto-for-beginners"
          >
            Spend Your Crypto &rarr;
          </Link>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Learn",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/learn"
            })
          }}
        />
      </div>
  );
}
