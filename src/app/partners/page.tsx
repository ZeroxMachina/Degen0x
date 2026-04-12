'use client';

"use client";
import { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────
//  Influencer / KOL Partner Portal
//  degen0x · Sprint 24 · Day 30
//  Co-branded landing page + embeddable widget code generator for KOLs
// ─────────────────────────────────────────────

const TIERS = [
  {
    name: "Nano Degen",
    icon: "🌱",
    followers: "1K–10K",
    commission: "25%",
    color: "#cd7f32",
    bg: "#cd7f3215",
    perks: [
      "Custom referral link with tracking",
      "Embeddable price widget (your brand colors)",
      "Monthly payout via crypto or PayPal",
      "Partner badge for your bio",
    ],
  },
  {
    name: "Mid-Tier KOL",
    icon: "⚡",
    followers: "10K–100K",
    commission: "35%",
    color: "#c0c0c0",
    bg: "#c0c0c015",
    perks: [
      "Everything in Nano +",
      "Co-branded landing page with your handle",
      "Trivia widget with your brand",
      "Priority Discord support",
      "Exclusive 'Partner Verified' badge",
    ],
    featured: true,
  },
  {
    name: "Whale KOL",
    icon: "🐋",
    followers: "100K+",
    commission: "50%",
    color: "#ffd700",
    bg: "#ffd70015",
    perks: [
      "Everything in Mid-Tier +",
      "Full white-label option",
      "Custom tool co-development",
      "Revenue share on traffic (not just referrals)",
      "Dedicated account manager",
      "Quarterly strategy call",
    ],
  },
];

const WIDGET_PREVIEWS = [
  {
    id: "price-ticker",
    name: "Live Price Ticker",
    desc: "Shows BTC, ETH, SOL prices with 24h change. Updates every 30 seconds.",
    icon: "📈",
    embedPreview: `<iframe src="https://degen0x.com/widgets/price-ticker?ref=YOUR_ID&theme=dark"
  width="400" height="80" frameborder="0" scrolling="no"
  style="border-radius:12px;overflow:hidden">
</iframe>`,
  },
  {
    id: "exchange-compare",
    name: "Exchange Comparison",
    desc: "A mini comparison table of top exchanges with your referral links embedded.",
    icon: "🔀",
    embedPreview: `<iframe src="https://degen0x.com/widgets/exchanges?ref=YOUR_ID&theme=dark&top=3"
  width="400" height="280" frameborder="0" scrolling="no"
  style="border-radius:12px;overflow:hidden">
</iframe>`,
  },
  {
    id: "trivia",
    name: "Daily Trivia Widget",
    desc: "Embed the daily crypto quiz on your site. Players see your brand. Drives daily return visits.",
    icon: "🧠",
    embedPreview: `<iframe src="https://degen0x.com/widgets/trivia?ref=YOUR_ID&theme=dark&branded=1"
  width="400" height="420" frameborder="0" scrolling="no"
  style="border-radius:12px;overflow:hidden">
</iframe>`,
  },
  {
    id: "dca-calc",
    name: "DCA Calculator",
    desc: "Show your audience potential DCA returns for Bitcoin. Highly shareable.",
    icon: "🧮",
    embedPreview: `<iframe src="https://degen0x.com/widgets/dca?ref=YOUR_ID&theme=dark&coin=BTC"
  width="400" height="360" frameborder="0" scrolling="no"
  style="border-radius:12px;overflow:hidden">
</iframe>`,
  },
  {
    id: "fear-greed",
    name: "Fear & Greed Index",
    desc: "The most-requested widget. Shows current market sentiment at a glance.",
    icon: "😱",
    embedPreview: `<iframe src="https://degen0x.com/widgets/fear-greed?ref=YOUR_ID&theme=dark"
  width="280" height="200" frameborder="0" scrolling="no"
  style="border-radius:12px;overflow:hidden">
</iframe>`,
  },
];

const STATS = [
  { value: "302+", label: "Pages of Expert Content", icon: "📄" },
  { value: "66+",  label: "Interactive Tools",       icon: "🛠️" },
  { value: "3",    label: "Languages (EN/ES/PT-BR/FR)", icon: "🌍" },
  { value: "25%–50%", label: "Commission Rate",      icon: "💰" },
];

export default function PartnersPage() {
  const [activeWidget, setActiveWidget] = useState("price-ticker");
  const [refId, setRefId] = useState("YOUR_ID");
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeForm, setActiveForm] = useState({ name: "", handle: "", email: "", platform: "", followers: "" });
  const [submitted, setSubmitted] = useState(false);

  const currentWidget = WIDGET_PREVIEWS.find(w => w.id === activeWidget)!;
  const embedCode = currentWidget.embedPreview
    .replace(/YOUR_ID/g, refId || "YOUR_ID")
    .replace(/theme=dark/g, `theme=${theme}`);

  function copyEmbed() {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(embedCode).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mb-8">
        <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
        <span>›</span>
        <span className="text-[var(--color-text)]">Partner Program</span>
      </nav>

      {/* ── Hero ── */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5"
             style={{ background: "#f7931a20", color: "#f7931a" }}>
          🤝 KOL & Influencer Partner Program
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[var(--color-text)] mb-4 leading-tight">
          Monetize Your Crypto{" "}
          <span className="gradient-text">Audience</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] mb-6">
          Partner with degen0x to earn commissions, embed pro-grade tools on your channels,
          and give your audience the best crypto comparison platform — with your brand on it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#apply"
             className="affiliate-cta px-7 py-3 rounded-xl text-white font-bold text-base">
            Apply to Partner 🚀
          </a>
          <a href="#widgets"
             className="glass px-7 py-3 rounded-xl font-bold text-base text-[var(--color-text)]">
            🛠️ See Widgets
          </a>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {STATS.map(s => (
          <div key={s.label} className="rounded-2xl border border-[var(--color-border)] p-5 text-center"
               style={{ background: "var(--color-surface)" }}>
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-xl font-black text-[var(--color-text)]">{s.value}</div>
            <div className="text-xs text-[var(--color-text-secondary)] mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Partner Tiers ── */}
      <section className="mb-16">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">💰 Commission Tiers</h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6">
          Earn on every user you refer who signs up with an exchange, opens a wallet, or converts.
          No cap. Lifetime cookies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map(tier => (
            <div key={tier.name}
                 className="rounded-2xl border p-6 relative"
                 style={{
                   background: tier.featured
                     ? `linear-gradient(135deg, #6366f110, #06b6d410)`
                     : "var(--color-surface)",
                   borderColor: tier.featured ? "var(--color-primary)" : "var(--color-border)",
                 }}>
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-black text-[var(--color-text)]"
                     style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
                  MOST POPULAR
                </div>
              )}
              <div className="text-3xl mb-2">{tier.icon}</div>
              <div className="font-black text-lg text-[var(--color-text)]">{tier.name}</div>
              <div className="text-sm text-[var(--color-text-secondary)] mb-1">{tier.followers} followers</div>
              <div className="text-3xl font-black my-3" style={{ color: tier.color }}>
                {tier.commission}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] mb-4">commission per referral</div>
              <ul className="space-y-2">
                {tier.perks.map(perk => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                    <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Widget Generator ── */}
      <section className="mb-16" id="widgets">
        <h2 className="text-2xl font-black text-[var(--color-text)] mb-2">🛠️ Embeddable Widgets</h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6">
          Drop professional crypto tools on your website, blog, or Discord with one line of code.
          Your referral ID is baked in — you earn commissions from every interaction.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Widget Selector */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-3">
              Choose Widget
            </div>
            <div className="space-y-2">
              {WIDGET_PREVIEWS.map(w => (
                <button key={w.id}
                        onClick={() => setActiveWidget(w.id)}
                        className="w-full text-left rounded-xl border p-3 transition-all"
                        style={{
                          background: activeWidget === w.id ? "var(--color-bg)" : "var(--color-surface)",
                          borderColor: activeWidget === w.id ? "var(--color-primary)" : "var(--color-border)",
                        }}>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{w.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-[var(--color-text)]">{w.name}</div>
                      <div className="text-xs text-[var(--color-text-secondary)]">{w.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Code Generator */}
          <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden"
               style={{ background: "var(--color-surface)" }}>
            <div className="p-4 border-b border-[var(--color-border)]">
              <div className="text-sm font-bold text-[var(--color-text)] mb-3">⚙️ Configure Your Widget</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[var(--color-text-secondary)] block mb-1">Your Partner ID</label>
                  <input type="text"
                         value={refId}
                         onChange={e => setRefId(e.target.value)}
                         placeholder="e.g. yourhandle"
                         className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]" />
                </div>
                <div>
                  <label className="text-xs text-[var(--color-text-secondary)] block mb-1">Theme</label>
                  <select value={theme}
                          onChange={e => setTheme(e.target.value as "dark" | "light")}
                          className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Embed Code */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-[var(--color-text-secondary)]">Embed Code</div>
                <button onClick={copyEmbed}
                        className="text-xs px-3 py-1 rounded-lg font-bold transition-colors"
                        style={{
                          background: copied ? "#3fb95020" : "var(--color-bg)",
                          color: copied ? "#3fb950" : "var(--color-text-secondary)",
                          border: `1px solid ${copied ? "#3fb95040" : "var(--color-border)"}`,
                        }}>
                  {copied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
              <pre className="rounded-xl p-3 text-xs overflow-x-auto leading-relaxed"
                   style={{ background: "var(--color-bg)", color: "#8b949e", fontFamily: "monospace" }}>
                {embedCode}
              </pre>
            </div>

            {/* Earnings estimate */}
            <div className="mx-4 mb-4 rounded-xl p-3"
                 style={{ background: "#3fb95015", border: "1px solid #3fb95030" }}>
              <div className="text-xs font-bold" style={{ color: "#3fb950" }}>💰 Estimated Monthly Earnings</div>
              <div className="text-xs text-[var(--color-text-secondary)] mt-1">
                With 1,000 monthly widget views → avg 2% CTR → avg $45 commission per referred user
                <span className="font-bold text-[var(--color-text)]"> = ~$900/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section id="apply" className="mb-10">
        <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden"
             style={{ background: "var(--color-surface)" }}>
          <div className="p-6 border-b border-[var(--color-border)]"
               style={{ background: "linear-gradient(135deg, #f7931a08, #6366f108)" }}>
            <h2 className="text-2xl font-black text-[var(--color-text)]">🚀 Apply to Partner</h2>
            <p className="text-[var(--color-text-secondary)] text-sm mt-1">
              Takes 2 minutes. We review and approve within 48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <div className="text-xl font-black text-[var(--color-text)] mb-2">Application Received!</div>
              <div className="text-[var(--color-text-secondary)] text-sm">
                We&apos;ll review your application and reach out within 48 hours.
                Check your email for next steps.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Your Name", key: "name", placeholder: "Satoshi Nakamoto", type: "text" },
                { label: "Social Handle / Username", key: "handle", placeholder: "@yourhandle", type: "text" },
                { label: "Email Address", key: "email", placeholder: "you@example.com", type: "email" },
                { label: "Primary Platform", key: "platform", placeholder: "Twitter / YouTube / Podcast / Blog", type: "text" },
              ].map(field => (
                <div key={field.key}>
                  <label className="text-xs font-bold text-[var(--color-text-secondary)] block mb-1">
                    {field.label}
                  </label>
                  <input type={field.type}
                         required
                         placeholder={field.placeholder}
                         value={activeForm[field.key as keyof typeof activeForm]}
                         onChange={e => setActiveForm({ ...activeForm, [field.key]: e.target.value })}
                         className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]" />
                </div>
              ))}
              <div>
                <label className="text-xs font-bold text-[var(--color-text-secondary)] block mb-1">
                  Follower / Subscriber Count
                </label>
                <select required
                        value={activeForm.followers}
                        onChange={e => setActiveForm({ ...activeForm, followers: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)]">
                  <option value="">Select range...</option>
                  <option value="1k-10k">1,000 – 10,000</option>
                  <option value="10k-50k">10,000 – 50,000</option>
                  <option value="50k-100k">50,000 – 100,000</option>
                  <option value="100k-500k">100,000 – 500,000</option>
                  <option value="500k+">500,000+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <button type="submit"
                        className="w-full py-3 rounded-xl font-bold text-[var(--color-text)]"
                        style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}>
                  Submit Application 🚀
                </button>
                <p className="text-xs text-center text-[var(--color-text-secondary)] mt-2">
                  By submitting you agree to our affiliate terms. No spam — ever.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-xl font-black text-[var(--color-text)] mb-4">❓ FAQ</h2>
        <div className="space-y-3">
          {[
            {
              q: "How do I get paid?",
              a: "Monthly payouts via Bitcoin, USDC, or PayPal. Minimum threshold: $50. No lock-in period.",
            },
            {
              q: "How long are cookies tracked?",
              a: "90-day cookie window. If someone clicks your link and converts within 90 days, you earn.",
            },
            {
              q: "Can I use the widgets on multiple sites?",
              a: "Yes. One partner ID works across unlimited domains. All traffic is attributed to your account.",
            },
            {
              q: "Do I need to disclose the partnership?",
              a: "Yes — per FTC and ASA guidelines, always disclose affiliate relationships to your audience.",
            },
          ].map(faq => (
            <div key={faq.question} className="rounded-xl border border-[var(--color-border)] p-4"
                 style={{ background: "var(--color-surface)" }}>
              <div className="font-bold text-sm text-[var(--color-text)] mb-1">{faq.question}</div>
              <div className="text-sm text-[var(--color-text-secondary)]">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
