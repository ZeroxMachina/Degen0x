import { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Link from "next/link";

export const metadata: Metadata = {
  title: "degen0x Community — Ask, Discuss, Learn with Fellow Degens",
  description:
    "Join the degen0x community. Ask questions, share alpha, follow expert discussions, and connect with thousands of crypto traders, investors, and builders.",
  alternates: { canonical: "/community" }};

const TRENDING_THREADS = [
  {
    id: 1,
    title: "Is the Trump crypto strategic reserve actually bullish long-term?",
    category: "Markets",
    author: "WhaleSurfer",
    replies: 142,
    upvotes: 847,
    views: "12.4K",
    ago: "2h",
    tag: "Hot",
    tagColor: "#f85149",
  },
  {
    id: 2,
    title: "HyperLiquid vs dYdX vs GMX — which perp DEX wins in 2026?",
    category: "DeFi",
    author: "PerpMaxi",
    replies: 89,
    upvotes: 613,
    views: "8.1K",
    ago: "4h",
    tag: "Trending",
    tagColor: "#f0883e",
  },
  {
    id: 3,
    title: "Ledger vs Trezor Safe 5 — security comparison thread",
    category: "Wallets",
    author: "ColdStorageChad",
    replies: 76,
    upvotes: 502,
    views: "6.3K",
    ago: "6h",
    tag: "Popular",
    tagColor: "#3fb950",
  },
  {
    id: 4,
    title: "My DCA strategy for ETH in 2026 — sharing my setup",
    category: "Investing",
    author: "SatoshiStacker",
    replies: 54,
    upvotes: 391,
    views: "4.8K",
    ago: "8h",
    tag: "Guide",
    tagColor: "#58a6ff",
  },
  {
    id: 5,
    title: "Best exchanges for low fees on altcoin pairs (not Binance)?",
    category: "Exchanges",
    author: "FeeOptimizer",
    replies: 67,
    upvotes: 289,
    views: "3.9K",
    ago: "10h",
    tag: "Q&A",
    tagColor: "#bc8cff",
  },
  {
    id: 6,
    title: "Solana ecosystem projects worth watching — community picks",
    category: "Altcoins",
    author: "SolanaMaxi",
    replies: 118,
    upvotes: 774,
    views: "9.2K",
    ago: "1d",
    tag: "Community",
    tagColor: "#06b6d4",
  },
  {
    id: 7,
    title: "Tax loss harvesting before end of Q1 — who's doing it?",
    category: "Taxes",
    author: "TaxSavvyDegen",
    replies: 33,
    upvotes: 195,
    views: "2.7K",
    ago: "1d",
    tag: "Seasonal",
    tagColor: "#d29922",
  },
  {
    id: 8,
    title: "RWA tokenization: which protocols are actually delivering?",
    category: "DeFi",
    author: "RWAResearcher",
    replies: 91,
    upvotes: 566,
    views: "7.1K",
    ago: "2d",
    tag: "Research",
    tagColor: "#6366f1",
  },
];

const EXPERT_INSIGHTS = [
  {
    expert: "Alex V.",
    role: "Senior DeFi Analyst",
    avatar: "AV",
    color: "#6366f1",
    insight:
      "The HyperLiquid surge to $4B TVL in 90 days represents the fastest DEX growth ever. Orderbook DEXs are entering a new era — and they're winning on UX.",
    category: "DeFi",
    ago: "3h",
  },
  {
    expert: "Maya K.",
    role: "Crypto Tax Specialist",
    avatar: "MK",
    color: "#22c55e",
    insight:
      "Q1 2026 is your last chance to harvest losses before the new IRS crypto reporting rules kick in. Don't sleep on Form 1099-DA preparation.",
    category: "Taxes",
    ago: "5h",
  },
  {
    expert: "Carlos R.",
    role: "Exchange Researcher",
    avatar: "CR",
    color: "#f59e0b",
    insight:
      "Coinbase's fee restructure is finally competitive with Kraken for high-volume traders. The 0.10% maker fee is the real story nobody's covering.",
    category: "Exchanges",
    ago: "1d",
  },
];

const COMMUNITY_STATS = [
  { label: "Members", value: "47,200+", icon: "👥" },
  { label: "Threads", value: "18,400+", icon: "💬" },
  { label: "Questions Answered", value: "94,000+", icon: "✅" },
  { label: "Expert Contributors", value: "340+", icon: "🎓" },
];

const CATEGORIES = [
  { name: "Markets & Trading", threads: 4821, icon: "📈", color: "#6366f1", slug: "markets" },
  { name: "DeFi & Protocols", threads: 3204, icon: "⚡", color: "#22c55e", slug: "defi" },
  { name: "Exchange Reviews", threads: 2876, icon: "🔀", color: "#f59e0b", slug: "exchanges" },
  { name: "Wallets & Security", threads: 2143, icon: "🔐", color: "#06b6d4", slug: "wallets" },
  { name: "Taxes & Compliance", threads: 1654, icon: "🧾", color: "#f0883e", slug: "taxes" },
  { name: "Altcoins & Projects", threads: 5912, icon: "🚀", color: "#bc8cff", slug: "altcoins" },
  { name: "Mining & Staking", threads: 1489, icon: "⛏️", color: "#3fb950", slug: "staking" },
  { name: "Beginner Questions", threads: 3678, icon: "🎓", color: "#ec4899", slug: "beginners" },
  { name: "NFTs & Gaming", threads: 1103, icon: "🎮", color: "#d29922", slug: "nfts" },
];

const FEATURED_MEMBERS = [
  { name: "WhaleSurfer", posts: 2340, badge: "Top Contributor", color: "#f85149" },
  { name: "DeFiProfessor", posts: 1891, badge: "Expert", color: "#6366f1" },
  { name: "CryptoPatrol", posts: 1543, badge: "Moderator", color: "#22c55e" },
  { name: "SatoshiStacker", posts: 1287, badge: "Veteran", color: "#f59e0b" },
  { name: "YieldFarmerX", posts: 1102, badge: "DeFi Expert", color: "#06b6d4" },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="community"
      />      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, #6366f1 8%, transparent), color-mix(in srgb, #06b6d4 5%, transparent))",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: "#6366f120", color: "#818cf8", border: "1px solid #6366f130" }}
            >
              47,200+ MEMBERS
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              The degen0x Community
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Ask questions, share alpha, follow expert discussions, and connect
              with thousands of crypto traders, investors, and builders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                className="affiliate-cta px-7 py-3 rounded-xl text-white font-semibold text-base"
              >
                Join the Community
              </button>
              <button
                className="glass px-7 py-3 rounded-xl font-semibold text-base"
                style={{ color: "var(--color-text)" }}
              >
                Post a Question
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {COMMUNITY_STATS.map((s) => (
              <div key={s.label} className="glass text-center p-4 rounded-xl">
                <div className="text-2xl mb-1">{s.icon}</div>
                <div
                  className="text-xl font-extrabold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Expert Insights */}
            <section>
              <h2
                className="text-lg font-bold mb-4"
                style={{ color: "var(--color-text)" }}
              >
                🎓 Expert Insights Today
              </h2>
              <div className="space-y-3">
                {EXPERT_INSIGHTS.map((e) => (
                  <div
                    key={e.expert}
                    className="glass p-4 rounded-xl"
                    style={{ borderLeft: `3px solid ${e.color}` }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-extrabold flex-shrink-0"
                        style={{ background: e.color + "25", color: e.color }}
                      >
                        {e.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="text-sm font-bold"
                            style={{ color: "var(--color-text)" }}
                          >
                            {e.expert}
                          </span>
                          <span
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {e.role}
                          </span>
                          <span
                            className="ml-auto text-xs"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {e.ago}
                          </span>
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: "var(--color-text-secondary)", lineHeight: "1.5" }}
                        >
                          {e.insight}
                        </p>
                        <span
                          className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full"
                          style={{ background: e.color + "20", color: e.color }}
                        >
                          {e.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Trending Threads */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2
                  className="text-lg font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  🔥 Trending Discussions
                </h2>
                <button
                  className="text-xs px-3 py-1 rounded-lg"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-primary)",
                  }}
                >
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {TRENDING_THREADS.map((t) => (
                  <div
                    key={t.id}
                    className="glass p-4 rounded-xl card-hover cursor-pointer"
                  >
                    <div className="flex items-start gap-3">
                      {/* Upvote */}
                      <div className="flex flex-col items-center gap-0.5 flex-shrink-0 min-w-[40px]">
                        <button
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          ▲
                        </button>
                        <span
                          style={{ color: "var(--color-primary)" }}
                        >
                          {t.upvotes}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-xs px-2 py-0.5 rounded-full font-bold"
                            style={{
                              background: t.tagColor + "20",
                              color: t.tagColor,
                            }}
                          >
                            {t.tag}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "var(--glass-bg)",
                              color: "var(--color-text-secondary)",
                              border: "1px solid var(--color-border)",
                            }}
                          >
                            {t.category}
                          </span>
                        </div>
                        <h3
                          className="text-sm font-semibold mb-2"
                          style={{ color: "var(--color-text)", lineHeight: "1.4" }}
                        >
                          {t.title}
                        </h3>
                        <div
                          className="flex items-center gap-4 text-xs"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          <span>by {t.author}</span>
                          <span>💬 {t.replies} replies</span>
                          <span>👁 {t.views}</span>
                          <span>{t.ago}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Browse Categories */}
            <section className="glass rounded-xl p-5">
              <h3
                className="text-sm font-bold mb-4 uppercase tracking-wide"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Browse by Category
              </h3>
              <div className="space-y-2">
                {CATEGORIES.map((c) => (
                  <div
                    key={c.slug}
                    className="flex items-center justify-between p-2 rounded-lg cursor-pointer"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span>{c.icon}</span>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--color-text)" }}
                      >
                        {c.name}
                      </span>
                    </div>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ background: c.color + "20", color: c.color }}
                    >
                      {c.threads.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Top Members */}
            <section className="glass rounded-xl p-5">
              <h3
                style={{ color: "var(--color-text-secondary)" }}
              >
                🏆 Top Members This Month
              </h3>
              <div className="space-y-3">
                {FEATURED_MEMBERS.map((m, i) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <span
                      className="text-sm font-extrabold w-5"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {i + 1}
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: m.color + "25",
                        color: m.color,
                      }}
                    >
                      {m.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {m.name}
                      </div>
                      <div
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {m.posts.toLocaleString()} posts
                      </div>
                    </div>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap"
                      style={{
                        background: m.color + "20",
                        color: m.color,
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Community Rules */}
            <section className="glass rounded-xl p-5">
              <h3
                className="text-sm font-bold mb-3"
                style={{ color: "var(--color-text)" }}
              >
                📋 Community Rules
              </h3>
              <div className="space-y-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                {[
                  "✅ No financial advice — share experience, not tips",
                  "✅ Cite sources when making claims",
                  "✅ Be respectful and constructive",
                  "✅ No self-promotion without contributing first",
                  "✅ No pump & dump shilling",
                ].map((r) => (
                  <p key={r}>{r}</p>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section className="glass rounded-xl p-5">
              <h3
                style={{ color: "var(--color-text)" }}
              >
                🔗 Useful Resources
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Crypto Glossary", href: "/learn/glossary" },
                  { label: "Exchange Comparison", href: "/exchanges/best" },
                  { label: "Degen Score Calculator", href: "/tools/degen-score" },
                  { label: "Staking Rewards", href: "/tools/staking-rewards" },
                  { label: "Tax Calculator", href: "/tools/tax-calculator" },
                ].map((l) => (
                  <Link href={l.href}
                    key={l.href}
                    className="flex items-center gap-2 text-xs py-1.5 px-2 rounded-lg card-hover"
                    style={{
                      color: "var(--color-primary)",
                      background: "transparent",
                    }}
                  >
                    → {l.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "degen0x Community \u2014 Ask, Discuss, Learn with Fellow Degens", "description": "Join the degen0x community. Ask questions, share alpha, follow expert discussions, and connect with thousands of crypto traders, investors, and builders.", "url": "https://degen0x.com/community"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
