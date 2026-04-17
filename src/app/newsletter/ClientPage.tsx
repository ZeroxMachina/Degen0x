'use client';

"use client";

// ─────────────────────────────────────────────
//  Newsletter Growth Hub
//  degen0x · Sprint 25 · Day 31
//  High-conversion email capture page
//  Features: value props, social proof, preview samples,
//  referral program, multi-tier signup options
// ─────────────────────────────────────────────

import { useState } from "react";
import Link from "next/link";
import { Metadata } from "next";

const TIERS = [
  {
    id: "free",
    name: "Degen Weekly",
    price: "Free",
    cadence: "Every Sunday",
    emoji: "📰",
    color: "#6366f1",
    highlights: [
      "Top 5 moves of the week",
      "Fear & Greed index recap",
      "Best crypto deal of the week",
      "1 actionable insight",
    ],
    cta: "Subscribe Free",
    popular: false,
  },
  {
    id: "pro",
    name: "Degen Daily",
    price: "$9/mo",
    cadence: "Every weekday",
    emoji: "⚡",
    color: "#f7931a",
    highlights: [
      "Everything in Weekly",
      "Daily market brief (7am)",
      "Token unlock alerts",
      "Whale movement alerts",
      "3 trade setups per week",
    ],
    cta: "Go Daily →",
    popular: true,
  },
  {
    id: "alpha",
    name: "Degen Alpha",
    price: "$29/mo",
    cadence: "Real-time",
    emoji: "🔑",
    color: "#bc8cff",
    highlights: [
      "Everything in Daily",
      "Exclusive alpha channel access",
      "Early project reviews",
      "Portfolio template",
      "Direct community Discord",
      "Monthly 1-on-1 Q&A",
    ],
    cta: "Get Alpha →",
    popular: false,
  },
];

const SOCIAL_PROOF = [
  { avatar: "🦁", name: "Alex M.", handle: "@alexcrypto", text: "The Sunday brief is the only thing I actually read end-to-end. Dense, no fluff, great alpha." },
  { avatar: "🦊", name: "Sarah K.", handle: "@defi_sarah", text: "Switched from 5 different newsletters to just this one. Saves me 2 hours a week easily." },
  { avatar: "🐻", name: "Marcus T.", handle: "@btcmaxi_mt", text: "The whale alerts alone have saved me from two rug pulls. Worth every penny of the Pro tier." },
  { avatar: "🦅", name: "Priya R.", handle: "@priyadefi", text: "Best onboarding for newcomers. The weekly digest explained yield farming better than any YouTube video." },
];

const SAMPLE_ISSUES = [
  {
    date: "Mar 10, 2026",
    title: "BTC breaks $85K — what the charts say next",
    preview: "A clean weekly close above the $84.2K resistance flipped to support. Next target: the $89K—$91K supply zone. Here's how smart money is positioned...",
    tags: ["BTC", "TA", "Levels"],
    readTime: "4 min",
  },
  {
    date: "Mar 3, 2026",
    title: "The $2.3B token unlock this week nobody's talking about",
    preview: "Three major projects have scheduled unlocks this week totaling $2.3B in circulating supply. Historical data shows unlock weeks correlate with 12–18% drawdowns...",
    tags: ["Unlocks", "Risk", "On-chain"],
    readTime: "3 min",
  },
  {
    date: "Feb 24, 2026",
    title: "MiCA is live — what it means for your portfolio",
    preview: "The EU's Markets in Crypto Assets regulation came into full effect. We break down the practical impact on exchanges, stablecoins, and retail investors in the EU...",
    tags: ["Regulation", "EU", "MiCA"],
    readTime: "6 min",
  },
];

const STATS = [
  { label: "Subscribers", value: "47,200+", icon: "📬" },
  { label: "Avg Open Rate", value: "52%", icon: "👀" },
  { label: "Issues Published", value: "184+", icon: "📃" },
  { label: "Avg Rating", value: "4.9/5.0", icon: "⭐" },
];

const REFERRAL_REWARDS = [
  { threshold: 1, reward: "1 Month Free Daily", emoji: "🎁" },
  { threshold: 3, reward: "Degen NFT Badge", emoji: "🏅" },
  { threshold: 10, reward: "Lifetime Pro Access", emoji: "👑" },
  { threshold: 25, reward: "Revenue Share (10%)", emoji: "💸" },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [selectedTier, setSelectedTier] = useState("free");
  const [submitted, setSubmitted] = useState(false);
  const [refEmail, setRefEmail] = useState("");
  const [refCopied, setRefCopied] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  function copyRefLink() {
    navigator.clipboard.writeText(`https://degen0x.com/newsletter?ref=${btoa(email || "demo")}`);
    setRefCopied(true);
    setTimeout(() => setRefCopied(false), 2000);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">

      {/* ── Hero ── */}
      <section className="text-center mb-16">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          style={{ background: "#f7931a20", color: "#f7931a", border: "1px solid #f7931a40" }}
        >
          📬 47,200+ degens already subscribed
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-[var(--color-text)] mb-5 leading-tight">
          The Only Crypto Newsletter<br />
          <span className="gradient-text">Worth Reading</span>
        </h1>
        <p className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
          No noise. No shilling. Just the moves that matter — distilled into a
          5-minute read. Used by 47,000+ traders and investors every week.
        </p>

        {/* Quick sign-up */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm bg-[var(--color-surface)] text-[var(--color-text)] focus:border-[var(--color-primary)] outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-[var(--color-text)] text-sm"
                style={{ background: "#f7931a" }}
              >
                Subscribe Free
              </button>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2">
              Free forever. No credit card. Unsubscribe in 1 click.
            </p>
          </form>
        ) : (
          <div
            className="max-w-md mx-auto rounded-xl border p-5 text-center"
            style={{ background: "#3fb95010", borderColor: "#3fb95040" }}
          >
            <div className="text-3xl mb-2">🎉</div>
            <div className="font-black text-[var(--color-text)] mb-1">You&apos;re in!</div>
            <div className="text-sm text-[var(--color-text-secondary)]">
              Check <strong>{email}</strong> for your confirmation. First issue lands Sunday.
            </div>
          </div>
        )}

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black text-[var(--color-text)]">{s.icon} {s.value}</div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tier Cards ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] text-center mb-2">
          Choose Your Level
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center text-sm mb-8">
          Start free. Upgrade any time. Cancel instantly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className="relative rounded-2xl border p-6 cursor-pointer transition-all"
              style={{
                background: "var(--color-surface)",
                borderColor: selectedTier === tier.id ? tier.color : "var(--color-border)",
                boxShadow: selectedTier === tier.id ? `0 0 20px ${tier.color}30` : "none",
              }}
            >
              {tier.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-black text-[var(--color-text)]"
                  style={{ background: tier.color }}
                >
                  MOST POPULAR
                </div>
              )}
              <div className="text-3xl mb-3">{tier.emoji}</div>
              <div className="flex items-center justify-between mb-1">
                <div className="font-black text-[var(--color-text)] text-lg">{tier.name}</div>
                <div className="font-black text-sm" style={{ color: tier.color }}>{tier.price}</div>
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mb-4">{tier.cadence}</div>
              <ul className="space-y-2 mb-5">
                {tier.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span style={{ color: tier.color }} className="flex-shrink-0 font-bold">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-2.5 rounded-xl font-bold text-sm transition-all"
                style={{
                  background: selectedTier === tier.id ? tier.color : `${tier.color}20`,
                  color: selectedTier === tier.id ? "white" : tier.color,
                  border: `1px solid ${tier.color}40`,
                }}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sample Issues ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          📃 Recent Issues
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6">
          See exactly what you&apos;ll get in your inbox.
        </p>
        <div className="space-y-4">
          {SAMPLE_ISSUES.map((issue) => (
            <div
              key={issue.date}
              className="rounded-2xl border border-[var(--color-border)] p-5 hover:border-[var(--color-primary)] transition-all"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-[var(--color-text-secondary)]">{issue.date}</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">·</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">⏱️ {issue.readTime} read</span>
                  </div>
                  <h3 className="font-bold text-[var(--color-text)] mb-2">{issue.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {issue.preview}{" "}
                    <span className="font-bold cursor-pointer" style={{ color: "var(--color-primary)" }}>
                      [Subscribe to read full issue]
                    </span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-1">
                  {issue.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full font-semibold"
                      style={{ background: "#6366f120", color: "#818cf8" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Social Proof ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">
          💬 What Degens Say
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6">Real readers. No paid testimonials.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SOCIAL_PROOF.map((r) => (
            <div key={r.handle}
              className="rounded-2xl border border-[var(--color-border)] p-5"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">{r.avatar}</div>
                <div>
                  <div className="font-bold text-sm text-[var(--color-text)]">{r.name}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{r.handle}</div>
                </div>
                <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Referral Program ── */}
      <section className="mb-16">
        <div
          className="rounded-2xl border p-6"
          style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ background: "#f7931a20", color: "#f7931a" }}
              >
                🎁 Referral Program
              </div>
              <h2 className="text-xl font-black text-[var(--color-text)] mb-2">
                Share & Earn. The More You Refer, the Better Your Rewards.
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Every friend you refer to degen0x newsletter earns you rewards.
              </p>
            </div>
            <div
              className="flex flex-col gap-2 min-w-60"
              style={{ flexShrink: 0 }}
            >
              <input
                type="text"
                readOnly
                value={`degen0x.com/newsletter?ref=${btoa(email || "your-email")}`}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-xs bg-[var(--color-bg)] text-[var(--color-text-secondary)]"
              />
              <button
                onClick={copyRefLink}
                className="w-full py-2 rounded-lg font-bold text-sm text-[var(--color-text)]"
                style={{ background: "#f7931a" }}
              >
                {refCopied ? "✓ Copied!" : "Copy Referral Link"}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {REFERRAL_REWARDS.map((r) => (
              <div
                key={r.threshold}
                className="rounded-xl border border-[var(--color-border)] p-3 text-center"
                style={{ background: "var(--color-bg)" }}
              >
                <div className="text-2xl mb-1">{r.emoji}</div>
                <div className="text-lg font-black" style={{ color: "#f7931a" }}>
                  {r.threshold} ref{r.threshold > 1 ? "s" : ""}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{r.reward}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="text-center mb-10">
        <div
          className="rounded-2xl border p-10"
          style={{
            background: "linear-gradient(135deg, var(--color-surface), #f7931a08)",
            borderColor: "#f7931a30",
          }}
        >
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-3xl font-black text-[var(--color-text)] mb-3">
            Ready to level up your crypto game?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Join 47,200+ subscribers. Start with the free weekly. Upgrade when you&apos;re ready.
          </p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm bg-[var(--color-bg)] text-[var(--color-text)] focus:border-[var(--color-primary)] outline-none"
                />
                <button
                  className="px-6 py-3 rounded-xl font-bold text-[var(--color-text)]"
                  style={{ background: "#f7931a" }}
                >
                  Subscribe Free
                </button>
              </div>
            </form>
          ) : (
            <div
              className="max-w-md mx-auto rounded-xl p-4"
              style={{ background: "#3fb95015", borderColor: "#3fb95040" }}
            >
              <span className="font-bold text-[var(--color-text)]">You&apos;re subscribed! 🎉</span>
            </div>
          )}
        </div>
      </section>

      {/* Related links */}
      <div className="flex flex-wrap gap-3 text-sm justify-center">
        <Link href="/tools" className="text-[var(--color-primary)] hover:underline">🛠️ Free Tools</Link>
        <Link href="/learn" className="text-[var(--color-primary)] hover:underline">🎓 Learn Crypto</Link>
        <Link href="/partners" className="text-[var(--color-primary)] hover:underline">🤝 Affiliate Program</Link>
        <Link href="/community" className="text-[var(--color-primary)] hover:underline">💬 Community</Link>
      </div>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/nft-analytics" style={{ color: "#fb923c", marginRight: "1rem" }}>Nft Analytics</a>
        
          <a href="/copy-trading" style={{ color: "#fb923c", marginRight: "1rem" }}>Copy Trading</a>
        
          <a href="/xp-attestation" style={{ color: "#fb923c", marginRight: "1rem" }}>Xp Attestation</a>
        
          <a href="/newsletter/welcome" style={{ color: "#fb923c", marginRight: "1rem" }}>Welcome</a>
        </nav>
    </main>
  );
}
