import Link from "next/link";
import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} - Onboarding the Next 1 Billion to Web3`,
  description: "The crypto world is powerful but intimidating. Free tools, honest reviews, and clear explanations. No account needed. No paywall. Ever.",
};

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.08) 0%, transparent 70%)"
        }} />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 py-24">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] mb-7">
            <span>&#x2B21;</span> Our Mission
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6">
            <span className="text-[var(--color-text)]">Onboard the next</span>
            <br />
            <span className="gradient-text">1 billion people</span>
            <br />
            <span className="text-[var(--color-text)]">to Web3</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed">
            The crypto world is powerful but intimidating. We&apos;re building the guide we wish we had &mdash; free tools, honest reviews, and clear explanations. No account needed. No paywall. Ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn/crypto-for-beginners"
              className="affiliate-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              I&apos;m new &mdash; show me around &rarr;
            </Link>
            <Link
              href="/dashboard"
              className="glass inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-[var(--color-text-secondary)] font-medium text-base transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-text-secondary)] text-sm animate-bounce">
          &darr; See how it works
        </div>
      </section>

      {/* ═══════════════════════ NARRATIVE SCROLL ═══════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28 md:space-y-36">

        {/* Step 1: Learn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-extrabold mb-4" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e" }}>1</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight mb-4">
              Learn at your own pace
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              We wrote 35+ in-depth guides that explain crypto from scratch &mdash; no jargon, no assumptions. Start with Bitcoin, work your way to DeFi, or jump straight to the topic you&apos;re curious about.
            </p>
            <Link href="/learn" className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1.5 hover:underline">
              Browse all guides &rarr;
            </Link>
          </div>
          <div className="glass p-6 sm:p-8 rounded-2xl space-y-3">
            {[
              { href: "/learn/what-is-bitcoin", icon: "₿", title: "What is Bitcoin?", desc: "The original cryptocurrency explained", tag: "8 min", tagColor: "#22c55e" },
              { href: "/learn/what-is-ethereum", icon: "⟠", title: "What is Ethereum?", desc: "Smart contracts & the world computer", tag: "10 min", tagColor: "#818cf8" },
              { href: "/learn/what-is-defi", icon: "🏦", title: "What is DeFi?", desc: "Decentralized finance without the bank", tag: "12 min", tagColor: "#06b6d4" },
              { href: "/learn/what-is-a-crypto-wallet", icon: "👛", title: "Crypto Wallets", desc: "Your keys, your coins — how it works", tag: "6 min", tagColor: "#f59e0b" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-all hover:border-[var(--color-primary)]">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h4>
                  <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: item.tagColor + "20", color: item.tagColor }}>{item.tag}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Step 2: Compare (reversed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 glass p-6 sm:p-8 rounded-2xl space-y-3">
            {[
              { href: "/exchanges/best", icon: "🏆", title: "Best Exchanges 2026", desc: "50+ exchanges rated on fees, security, UX", tag: "Hot", tagColor: "#f85149" },
              { href: "/wallets/best/hardware", icon: "🔒", title: "Best Hardware Wallets", desc: "Ledger, Trezor, and more tested", tag: "Security", tagColor: "#22c55e" },
              { href: "/defi-lending/best", icon: "📊", title: "Best DeFi Lending", desc: "Compare APY, risk, and TVL", tag: "DeFi", tagColor: "#818cf8" },
              { href: "/crypto-cards/best", icon: "💳", title: "Best Crypto Cards", desc: "Spend crypto anywhere with cashback", tag: "Spending", tagColor: "#f59e0b" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-all hover:border-[var(--color-primary)]">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h4>
                  <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: item.tagColor + "20", color: item.tagColor }}>{item.tag}</span>
              </Link>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-extrabold mb-4" style={{ background: "rgba(99,102,241,0.12)", color: "#818cf8" }}>2</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight mb-4">
              Compare before you commit
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Choosing an exchange, wallet, or DeFi protocol? We&apos;ve tested them all. Honest reviews with real fee comparisons, security analysis, and side-by-side breakdowns &mdash; so you can decide with confidence.
            </p>
            <Link href="/exchanges/best" className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1.5 hover:underline">
              Compare exchanges &rarr;
            </Link>
          </div>
        </div>

        {/* Step 3: Use Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-extrabold mb-4" style={{ background: "rgba(6,182,212,0.12)", color: "#06b6d4" }}>3</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] leading-tight tracking-tight mb-4">
              Use tools that make you smarter
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              92+ free interactive tools &mdash; from simple converters to advanced portfolio rebalancers, tax loss harvesters, and on-chain analytics. No signup required. Just open and use.
            </p>
            <Link href="/tools" className="text-[var(--color-primary)] font-semibold inline-flex items-center gap-1.5 hover:underline">
              Explore all 92+ tools &rarr;
            </Link>
          </div>
          <div className="glass p-6 sm:p-8 rounded-2xl space-y-3">
            {[
              { href: "/tools/converter", icon: "🔄", title: "Crypto Converter", desc: "Real-time prices, 10+ coins", tag: "Popular", tagColor: "#22c55e" },
              { href: "/tools/dca-calculator", icon: "📅", title: "DCA Calculator", desc: "Plan your investment strategy", tag: "Popular", tagColor: "#818cf8" },
              { href: "/tools/portfolio-rebalancer", icon: "⚖️", title: "Portfolio Rebalancer", desc: "Drift detection & trade plans", tag: "New", tagColor: "#f59e0b" },
              { href: "/tools/tax-loss-harvester", icon: "🧾", title: "Tax Loss Harvester", desc: "Find tax savings automatically", tag: "New", tagColor: "#f59e0b" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-3.5 p-3.5 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-all hover:border-[var(--color-primary)]">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-[var(--color-text)]">{item.title}</h4>
                  <p className="text-xs text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: item.tagColor + "20", color: item.tagColor }}>{item.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════ TOOLS GRID PREVIEW ═══════════════════════ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-3">
          Built for everyone
        </h2>
        <p className="text-base sm:text-lg text-[var(--color-text-secondary)] mb-12">
          From your first trade to your 10,000th &mdash; we&apos;ve got a tool for that.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { href: "/tools/gas-tracker", icon: "⛽", title: "Gas Tracker", desc: "Real-time blockchain fees" },
            { href: "/tools/staking-rewards", icon: "💰", title: "Staking Calculator", desc: "Compare yields across chains" },
            { href: "/tools/fear-greed-timeline", icon: "📈", title: "Fear & Greed Index", desc: "Market sentiment history" },
            { href: "/tools/portfolio-tracker", icon: "💼", title: "Portfolio Tracker", desc: "Monitor your holdings" },
            { href: "/tools/advanced-charting", icon: "📊", title: "Advanced Charts", desc: "TradingView-style analysis" },
            { href: "/tools/crypto-calendar", icon: "📅", title: "Crypto Calendar", desc: "Upcoming events & launches" },
            { href: "/tools/correlation-matrix", icon: "🔗", title: "Correlation Matrix", desc: "Find diversification edges" },
            { href: "/tools/perp-funding", icon: "📈", title: "Funding Rates", desc: "Perp arbitrage opportunities" },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} className="glass p-5 sm:p-6 text-center card-hover rounded-2xl">
              <div className="text-3xl mb-2.5">{tool.icon}</div>
              <h3 className="text-sm font-bold text-[var(--color-text)] mb-1">{tool.title}</h3>
              <p className="text-xs text-[var(--color-text-secondary)]">{tool.desc}</p>
            </Link>
          ))}
        </div>
        <Link href="/tools" className="inline-flex items-center gap-1.5 mt-8 text-[var(--color-primary)] font-semibold hover:underline">
          See all 92+ tools &rarr;
        </Link>
      </section>

      {/* ═══════════════════════ MISSION STATEMENT ═══════════════════════ */}
      <section className="section-glass py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-6xl sm:text-8xl md:text-9xl font-black gradient-text leading-none mb-4">
            1B
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] mb-4">
            That&apos;s our goal. One billion people in Web3.
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
            Not because we think everyone should trade crypto &mdash; but because everyone deserves to understand the financial system being built around them. Education is the way in.
          </p>
          <Link
            href="/learn/crypto-for-beginners"
            className="affiliate-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Start learning &mdash; it&apos;s free &rarr;
          </Link>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight mb-4">
            Ready?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
            Pick a guide, open a tool, or just explore. There&apos;s no wrong way to start.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/learn/crypto-for-beginners"
              className="affiliate-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              Begin Your Journey &rarr;
            </Link>
            <Link
              href="/tools"
              className="glass inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-[var(--color-text-secondary)] font-medium text-base transition-all hover:border-[var(--color-primary)] hover:text-[var(--color-text)]"
            >
              Browse Tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
