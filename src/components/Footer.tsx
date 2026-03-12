"use client";

import Link from "next/link";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";
import { useState } from "react";

const TOOL_LINKS = [
  { name: "PnL Calculator", href: "/tools/pnl-calculator" },
  { name: "DCA Calculator", href: "/tools/dca-calculator" },
  { name: "Gas Tracker", href: "/tools/gas-tracker" },
  { name: "Whale Tracker", href: "/tools/whale-tracker" },
  { name: "Fear & Greed Timeline", href: "/tools/fear-greed-timeline" },
  { name: "Portfolio Heatmap", href: "/tools/portfolio-heatmap" },
  { name: "DEX Aggregator", href: "/tools/dex-aggregator" },
  { name: "Staking APY", href: "/tools/staking-apy" },
  { name: "Tax Calculator", href: "/tools/tax-calculator" },
  { name: "Impermanent Loss", href: "/tools/impermanent-loss" },
  { name: "Price Alerts", href: "/tools/price-alerts" },
  { name: "Market Recap", href: "/tools/market-recap" },
];

const LEARN_LINKS = [
  { name: "Crypto for Beginners", href: "/learn/crypto-for-beginners" },
  { name: "How to Buy Ethereum", href: "/learn/how-to-buy-ethereum" },
  { name: "Zero Knowledge Proofs", href: "/learn/zero-knowledge-proofs" },
  { name: "Layer 2 Scaling Guide", href: "/learn/layer-2-scaling-guide" },
  { name: "RWA Tokenization", href: "/learn/rwa-tokenization-guide-2026" },
  { name: "Memecoin Trading", href: "/learn/memecoin-trading-strategy" },
  { name: "Crypto Glossary", href: "/learn/crypto-glossary" },
  { name: "Crypto Airdrops", href: "/learn/crypto-airdrops-2026" },
];

const COMPARE_LINKS = [
  { name: "Best Exchanges", href: "/exchanges/best" },
  { name: "Hardware Wallets", href: "/wallets/best/hardware" },
  { name: "DeFi Lending", href: "/defi-lending/best" },
  { name: "Staking Platforms", href: "/investing/best/staking" },
  { name: "Crypto Debit Cards", href: "/spending/best/debit-cards" },
  { name: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy" },
];

const SOCIAL_LINKS = [
  { name: "Twitter / X", href: "https://x.com/degen0x", icon: "𝕏" },
  { name: "Discord", href: "#", icon: "💬" },
  { name: "Telegram", href: "#", icon: "✈️" },
  { name: "GitHub", href: "#", icon: "⌨️" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--glass-nav-bg)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand + Newsletter */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold gradient-text">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
              The most trusted crypto comparison platform. Expert reviews, interactive tools, and comprehensive guides to navigate the crypto world.
            </p>

            {/* Mini newsletter */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-[var(--color-text)] mb-2 uppercase tracking-wider">
                Stay updated
              </p>
              {subscribed ? (
                <p className="text-sm text-[var(--color-primary)] font-medium">
                  Thanks for subscribing!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 text-sm rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-[var(--color-text)] placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    Go
                  </button>
                </form>
              )}
            </div>

            {/* Social */}
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  title={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] text-sm hover:border-[var(--color-primary)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Tools
            </h3>
            <ul className="space-y-2">
              {TOOL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Learn
            </h3>
            <ul className="space-y-2">
              {LEARN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Compare
            </h3>
            <ul className="space-y-2">
              {COMPARE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-bold text-[var(--color-text)] mb-4 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Methodology</Link></li>
              <li><Link href="/contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">Terms of Service</Link></li>
              <li><Link href="/feed.xml" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">RSS Feed</Link></li>
              <li><Link href="/tools" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">All Tools</Link></li>
              <li><Link href="/learn" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">All Guides</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mt-14 pt-8 border-t border-[var(--glass-border)]">
          <p className="text-xs text-[var(--color-text-secondary)] mb-3 leading-relaxed">
            <strong>Advertiser Disclosure:</strong> {SITE_NAME} is an independent comparison platform. We may receive compensation when you click on certain links. This does not influence our editorial content.
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
            <strong>Risk Disclaimer:</strong> Cryptocurrency is highly volatile and involves significant risk. Never invest more than you can afford to lose. Always DYOR before making any investment decisions.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-[var(--glass-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-text-secondary)]">
            &copy; {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Built with Next.js &bull; Data by CoinGecko
          </p>
        </div>
      </div>
    </footer>
  );
}
