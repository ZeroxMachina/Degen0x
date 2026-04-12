'use client';

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, SITE_NAME, SITE_URL } from "@/lib/constants";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  url: string;
  type: "tool" | "learn" | "category";
}

// Comprehensive index of all site pages
const buildSearchIndex = (): SearchResult[] => {
  const results: SearchResult[] = [];

  // Add all main categories
  CATEGORIES.forEach((cat) => {
    results.push({
      id: `cat-${cat.slug}`,
      title: cat.name,
      description: cat.description,
      category: "Categories",
      categorySlug: "categories",
      url: `/${cat.slug}`,
      type: "category",
    });

    // Add subcategories as results
    cat.subcategories.forEach((sub) => {
      results.push({
        id: `subcat-${cat.slug}-${sub.slug}`,
        title: `${sub.name} - ${cat.name}`,
        description: sub.description,
        category: cat.name,
        categorySlug: cat.slug,
        url: `/${cat.slug}/${sub.slug}`,
        type: "tool",
      });
    });
  });

  // Add Learn/Educational Content
  const learnArticles = [
    { slug: "what-is-cryptocurrency", title: "What is Cryptocurrency?", desc: "Learn the fundamentals of cryptocurrencies and how blockchain works." },
    { slug: "what-is-blockchain", title: "What is Blockchain?", desc: "Understand blockchain technology and distributed ledgers." },
    { slug: "crypto-for-beginners", title: "Crypto for Beginners", desc: "Start your crypto journey with beginner-friendly guides." },
    { slug: "crypto-security-guide", title: "Crypto Security Guide", desc: "Protect your assets with essential security practices." },
    { slug: "crypto-glossary", title: "Crypto Glossary", desc: "Understand common cryptocurrency and blockchain terms." },
    { slug: "what-is-defi", title: "What is DeFi?", desc: "Decentralized Finance explained: protocols, yields, and opportunities." },
    { slug: "how-to-buy-ethereum", title: "How to Buy Ethereum", desc: "Step-by-step guide to purchasing Ethereum safely." },
    { slug: "how-to-use-uniswap", title: "How to Use Uniswap", desc: "Complete guide to swapping tokens on Uniswap." },
    { slug: "what-is-web3", title: "What is Web3?", desc: "Explore the decentralized internet and Web3 fundamentals." },
    { slug: "how-to-provide-liquidity", title: "How to Provide Liquidity", desc: "Earn fees by providing liquidity to DeFi protocols." },
    { slug: "two-factor-authentication-guide", title: "2FA Security Guide", desc: "Secure your accounts with two-factor authentication." },
    { slug: "sim-swap-protection", title: "SIM Swap Protection", desc: "Protect yourself from SIM swap attacks and phone-based hacks." },
    { slug: "crypto-derivatives", title: "Crypto Derivatives", desc: "Understand futures, options, and advanced trading instruments." },
    { slug: "validator-guide", title: "Crypto Validator Guide", desc: "Learn how to stake and become a blockchain validator." },
    { slug: "how-to-participate-in-governance", title: "DAO Governance Guide", desc: "Participate in decentralized governance and voting." },
    { slug: "bitcoin-etf-investing", title: "Bitcoin ETF Investing", desc: "Invest in Bitcoin through regulated ETF products." },
    { slug: "how-to-avoid-gas-fees", title: "How to Avoid Gas Fees", desc: "Strategies to minimize transaction costs on blockchain." },
    { slug: "whale-watching", title: "Whale Watching Guide", desc: "Track large transactions and whale movements." },
    { slug: "what-is-mining", title: "What is Crypto Mining?", desc: "Understand mining, staking, and proof-of-work mechanisms." },
    { slug: "what-is-a-bridge", title: "What are Crypto Bridges?", desc: "Learn how bridges enable cross-chain asset transfers." },
    { slug: "decentralized-social-media", title: "Decentralized Social Media", desc: "Explore Web3 social platforms and decentralized networks." },
    { slug: "how-to-convert-crypto", title: "How to Convert Crypto", desc: "Swap and convert between different cryptocurrencies." },
    { slug: "modular-blockchains-guide", title: "Modular Blockchains", desc: "Understanding modular blockchain architecture." },
    { slug: "crypto-ai-intersection", title: "Crypto and AI", desc: "Explore the intersection of cryptocurrency and artificial intelligence." },
    { slug: "ai-agents-crypto", title: "AI Agents in Crypto", desc: "Autonomous agents and AI-powered trading in crypto." },
    { slug: "rwa-tokenization-guide", title: "RWA Tokenization", desc: "Real-world asset tokenization and blockchain." },
    { slug: "base-ecosystem-guide", title: "Base Ecosystem Guide", desc: "Complete guide to the Base blockchain and ecosystem." },
    { slug: "parallel-evm-guide", title: "Parallel EVM", desc: "Understanding parallel EVM and increased blockchain throughput." },
    { slug: "crypto-regulation-uk", title: "UK Crypto Regulation", desc: "Navigate UK cryptocurrency and FCA regulations." },
    { slug: "crypto-regulation-2026", title: "Crypto Regulations 2026", desc: "Latest cryptocurrency regulations and compliance requirements." },
    { slug: "gamefi-guide", title: "What is GameFi?", desc: "Gaming and finance combined: NFTs, play-to-earn, and more." },
  ];

  learnArticles.forEach((article) => {
    results.push({
      id: `learn-${article.slug}`,
      title: article.title,
      description: article.desc,
      category: "Learn Crypto",
      categorySlug: "learn",
      url: `/learn/${article.slug}`,
      type: "learn",
    });
  });

  // Add special pages
  const specialPages = [
    { title: "Live Crypto Prices", desc: "Real-time Bitcoin, Ethereum, and cryptocurrency prices.", url: "/prices", cat: "Tools" },
    { title: "Contact Us", desc: "Get in touch with the degen0x team.", url: "/contact", cat: "General" },
    { title: "Token Tracker", desc: "Track and analyze cryptocurrency tokens.", url: "/token", cat: "Tools" },
    { title: "Crypto Converter", desc: "Convert between cryptocurrencies and fiat currency.", url: "/investing/tools/crypto-converter", cat: "Tools" },
    { title: "Tax Calculator", desc: "Calculate your crypto tax obligations.", url: "/taxes/calculators/tax-calculator", cat: "Tools" },
    { title: "Portfolio Tracker", desc: "Track your crypto portfolio performance.", url: "/investing/tools/portfolio-tracker", cat: "Tools" },
    { title: "Security Audit Checker", desc: "Check security audits for smart contracts.", url: "/investing/tools/security-audit-checker", cat: "Tools" },
    { title: "Gas Price Tracker", desc: "Monitor real-time gas prices across networks.", url: "/investing/tools/gas-price-tracker", cat: "Tools" },
  ];

  specialPages.forEach((page) => {
    results.push({
      id: `page-${page.url}`,
      title: page.title,
      description: page.desc,
      category: page.cat,
      categorySlug: page.url.split("/")[1],
      url: page.url,
      type: page.url.includes("tools") ? "tool" : "category",
    });
  });

  return results;
};

const SEARCH_INDEX = buildSearchIndex();

const CATEGORY_FILTERS = [
  "All",
  "Categories",
  "Tools",
  "Learn Crypto",
  "Crypto Exchanges",
  "Crypto Wallets",
  "Crypto Investing",
  "DeFi Lending",
  "Crypto Loans",
  "Crypto Taxes",
  "Crypto Insurance",
  "NFTs",
];

export default function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Search and filter results
  const results = useMemo(() => {
    let filtered = SEARCH_INDEX;

    // Filter by search query
    if (query.trim()) {
      const searchTerm = query.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm) ||
          item.description.toLowerCase().includes(searchTerm)
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    return filtered.sort((a, b) => {
      // Prioritize exact title matches
      const aExact = a.title.toLowerCase() === query.toLowerCase();
      const bExact = b.title.toLowerCase() === query.toLowerCase();
      if (aExact && !bExact) return -1;
      if (!aExact && bExact) return 1;

      // Then prioritize title starts with query
      const aStarts = a.title.toLowerCase().startsWith(query.toLowerCase());
      const bStarts = b.title.toLowerCase().startsWith(query.toLowerCase());
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      return 0;
    });
  }, [query, selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">Search degen0x</h1>
        <p className="text-lg text-[var(--color-text-secondary)]">
          Explore our comprehensive library of crypto tools, guides, and resources.
        </p>
      </div>

      {/* Search Input */}
      <div className="mb-8">
        <div className="relative mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools, guides, exchanges, wallets..."
            className="w-full px-5 py-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
          />
          <span className="absolute right-4 top-4 text-2xl text-[var(--color-text-secondary)]">&#128269;</span>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[var(--color-primary)] text-[var(--color-text)]"
                  : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-card)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-[var(--color-text-secondary)]">
          {results.length} {results.length === 1 ? "result" : "results"} found
          {query && ` for "${query}"`}
          {selectedCategory !== "All" && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="space-y-4 mb-12">
          {results.map((result) => (
            <Link href={result.url}
              key={result.id}
              href={result.url}
              className="glass rounded-xl p-5 hover:bg-[var(--color-bg-card)] transition-all group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {result.title}
                    </h3>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap" style={{
                      backgroundColor: `var(--color-primary)20`,
                      color: `var(--color-primary)`,
                    }}>
                      {result.category}
                    </span>
                  </div>
                  <p className="text-[var(--color-text-secondary)] text-sm mb-3 line-clamp-2">
                    {result.description}
                  </p>
                  <div className="text-xs text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {result.url}
                  </div>
                </div>
                <div className="text-2xl text-[var(--color-text-secondary)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0">
                  &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="glass rounded-xl p-12 text-center">
          <div className="text-4xl mb-4">&#128269;</div>
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-2">No results found</h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            {query
              ? `We couldn't find anything matching "${query}"`
              : "Try searching for a tool, guide, or topic"}
          </p>
          <div className="space-y-3 text-left inline-block">
            <p className="text-sm text-[var(--color-text-secondary)] font-semibold mb-2">Popular searches:</p>
            {[
              "How to buy Bitcoin",
              "Best crypto exchanges",
              "DeFi yield farming",
              "Wallet security",
              "Crypto taxes",
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="block text-sm text-[var(--color-primary)] hover:underline"
              >
                &bull; {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Links */}
      <section className="mb-8">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Quick Links</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "Crypto Exchanges",
              desc: "Compare and review top crypto exchanges",
              href: "/exchanges",
            },
            {
              title: "Crypto Wallets",
              desc: "Find the best wallet for your needs",
              href: "/wallets",
            },
            {
              title: "DeFi Protocols",
              desc: "Explore decentralized finance opportunities",
              href: "/defi-lending",
            },
            {
              title: "Learning Center",
              desc: "Start with crypto fundamentals",
              href: "/learn",
            },
            {
              title: "Token Prices",
              desc: "Check live cryptocurrency prices",
              href: "/prices",
            },
            {
              title: "Crypto Tools",
              desc: "Tax calculators, converters, and more",
              href: "/investing/tools/crypto-converter",
            },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="glass rounded-xl p-4 hover:bg-[var(--color-bg-card)] transition-all group">
              <h3 className="font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                {link.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)]">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer Help */}
      <div className="text-center text-[var(--color-text-secondary)] text-sm">
        <p>
          Can&apos;t find what you&apos;re looking for?{" "}
          <Link href="/contact" className="text-[var(--color-primary)] hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}

