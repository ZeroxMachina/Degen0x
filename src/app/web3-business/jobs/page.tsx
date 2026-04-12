import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto & Web3 Jobs Board 2026 — Find Your Next Role in",
  description:
    "Browse the top crypto, DeFi, and Web3 jobs in 2026. Find roles at leading exchanges, DAOs, Layer 1s, and DeFi protocols. Remote & on-site positions.",
  alternates: { canonical: "/web3-business/jobs" }};

const JOB_LISTINGS = [
  {
    id: 1,
    company: "Coinbase",
    logo: "CB",
    color: "#0052ff",
    role: "Senior Solidity Engineer",
    type: "Full-time",
    location: "Remote (US)",
    salary: "$180K–$240K",
    tags: ["Solidity", "EVM", "DeFi"],
    category: "Engineering",
    posted: "2d ago",
    hot: true,
  },
  {
    id: 2,
    company: "Uniswap Labs",
    logo: "UNI",
    color: "#ff007a",
    role: "Protocol Researcher",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$160K–$220K",
    tags: ["MEV", "AMM", "Research"],
    category: "Research",
    posted: "3d ago",
    hot: true,
  },
  {
    id: 3,
    company: "Paradigm",
    logo: "PDM",
    color: "#6366f1",
    role: "Investment Analyst — DeFi",
    type: "Full-time",
    location: "San Francisco, CA",
    salary: "$140K–$200K + carry",
    tags: ["DeFi", "Investing", "Research"],
    category: "Finance",
    posted: "5d ago",
    hot: false,
  },
  {
    id: 4,
    company: "Binance",
    logo: "BNB",
    color: "#f3ba2f",
    role: "Crypto Content Writer — DeFi & Trading",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$70K–$110K",
    tags: ["Content", "DeFi", "Trading"],
    category: "Content",
    posted: "1d ago",
    hot: false,
  },
  {
    id: 5,
    company: "Arbitrum Foundation",
    logo: "ARB",
    color: "#12aaff",
    role: "Developer Relations Engineer",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$130K–$170K",
    tags: ["DevRel", "L2", "EVM"],
    category: "Engineering",
    posted: "4d ago",
    hot: false,
  },
  {
    id: 6,
    company: "Solana Foundation",
    logo: "SOL",
    color: "#9945ff",
    role: "Ecosystem Growth Lead",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$120K–$160K",
    tags: ["Growth", "BD", "Solana"],
    category: "Growth",
    posted: "6d ago",
    hot: false,
  },
  {
    id: 7,
    company: "MakerDAO / Sky",
    logo: "MKR",
    color: "#1aab9b",
    role: "Risk Analyst — Collateral",
    type: "Full-time",
    location: "Remote (EU/US)",
    salary: "$100K–$150K",
    tags: ["Risk", "DeFi", "Stablecoins"],
    category: "Finance",
    posted: "1w ago",
    hot: false,
  },
  {
    id: 8,
    company: "HyperLiquid",
    logo: "HL",
    color: "#22d3ee",
    role: "Backend Engineer — Trading Infrastructure",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$150K–$200K",
    tags: ["Rust", "Perps", "Trading"],
    category: "Engineering",
    posted: "2d ago",
    hot: true,
  },
  {
    id: 9,
    company: "Ledger",
    logo: "LDG",
    color: "#f8f9fa",
    role: "Security Engineer — Hardware Wallet",
    type: "Full-time",
    location: "Paris / Remote",
    salary: "$110K–$160K",
    tags: ["Security", "Hardware", "Firmware"],
    category: "Engineering",
    posted: "3d ago",
    hot: false,
  },
  {
    id: 10,
    company: "Delphi Digital",
    logo: "DD",
    color: "#f59e0b",
    role: "Research Analyst — Tokenomics",
    type: "Full-time",
    location: "Remote (Global)",
    salary: "$90K–$140K",
    tags: ["Research", "Tokenomics", "DeFi"],
    category: "Research",
    posted: "1w ago",
    hot: false,
  },
  {
    id: 11,
    company: "Kraken",
    logo: "KRK",
    color: "#5741d9",
    role: "Compliance Officer — EMEA",
    type: "Full-time",
    location: "Dublin / Remote",
    salary: "$120K–$160K",
    tags: ["Compliance", "AML", "Legal"],
    category: "Legal",
    posted: "5d ago",
    hot: false,
  },
  {
    id: 12,
    company: "OpenSea",
    logo: "OS",
    color: "#2081e2",
    role: "Product Designer — NFT UX",
    type: "Full-time",
    location: "New York / Remote",
    salary: "$120K–$160K",
    tags: ["Design", "NFT", "UX"],
    category: "Design",
    posted: "4d ago",
    hot: false,
  },
];

const CATEGORY_FILTERS = [
  "All",
  "Engineering",
  "Research",
  "Finance",
  "Growth",
  "Content",
  "Design",
  "Legal",
];

const SALARY_RANGES = ["Any salary", "Under $80K", "$80K–$130K", "$130K–$200K", "$200K+"];

const JOB_RESOURCES = [
  {
    title: "How to Break Into Web3",
    desc: "Career transition guide for developers, marketers, and financiers",
    href: "/learn/break-into-web3",
    icon: "🚀",
  },
  {
    title: "Top Web3 Skills in 2026",
    desc: "The skills employers are paying most for this year",
    href: "/learn/web3-skills-2026",
    icon: "💡",
  },
  {
    title: "DAO Contribution Guide",
    desc: "How to get paid working for decentralized organizations",
    href: "/learn/dao-contributor-guide",
    icon: "🏛️",
  },
  {
    title: "Crypto Salary Benchmarks",
    desc: "What roles actually pay in 2026 — data from 500+ offers",
    href: "/web3-business/salary-guide",
    icon: "💰",
  },
];

const FEATURED_COMPANIES = [
  { name: "Coinbase", color: "#0052ff", logo: "CB", openRoles: 34 },
  { name: "Binance", color: "#f3ba2f", logo: "BNB", openRoles: 61 },
  { name: "Uniswap", color: "#ff007a", logo: "UNI", openRoles: 12 },
  { name: "Chainlink", color: "#375bd2", logo: "LINK", openRoles: 19 },
  { name: "Solana Fdn", color: "#9945ff", logo: "SOL", openRoles: 8 },
  { name: "Paradigm", color: "#6366f1", logo: "PDM", openRoles: 5 },
];

export default function CryptoJobsPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, #6366f1 8%, transparent), color-mix(in srgb, #22c55e 4%, transparent))",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="max-w-3xl">
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
              style={{ background: "#6366f120", color: "#818cf8", border: "1px solid #6366f130" }}
            >
              247 OPEN ROLES · UPDATED DAILY
            </div>
            <h1
              className="text-4xl md:text-5xl font-extrabold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              Crypto & Web3 Jobs 2026
            </h1>
            <p
              className="text-lg mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Find your next role at leading exchanges, DeFi protocols, Layer 1s, and DAOs.
              Remote-first positions from the best teams in the space.
            </p>
            {/* Search bar */}
            <div
              className="flex gap-3 max-w-2xl"
            >
              <input
                type="text"
                placeholder="Search jobs, skills, or companies..."
                className="flex-1 px-4 py-3 rounded-xl text-sm"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  outline: "none",
                }}
              />
              <button
                className="affiliate-cta px-6 py-3 rounded-xl text-white font-semibold text-sm"
              >
                Search
              </button>
            </div>
          </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="web3-business"
        />

        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2">
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORY_FILTERS.map((cat) => (
                <button
                  key={cat}
                  className="text-xs px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    background: cat === "All" ? "var(--color-primary)" : "var(--glass-bg)",
                    color: cat === "All" ? "white" : "var(--color-text-secondary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  {cat}
                </button>
              ))}
              <select
                className="text-xs px-3 py-1.5 rounded-full ml-auto"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                  outline: "none",
                }}
              >
                {SALARY_RANGES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Job Cards */}
            <div className="space-y-3">
              {JOB_LISTINGS.map((job) => (
                <div
                  key={job.id}
                  className="glass rounded-xl p-5 card-hover cursor-pointer"
                  style={{
                    borderLeft: job.hot ? `3px solid #f85149` : "3px solid transparent",
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-extrabold flex-shrink-0"
                      style={{ background: job.color + "25", color: job.color }}
                    >
                      {job.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 flex-wrap">
                        <div>
                          <h3
                            className="text-sm font-bold mb-0.5"
                            style={{ color: "var(--color-text)" }}
                          >
                            {job.role}
                          </h3>
                          <span
                            className="text-xs"
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {job.company} · {job.location}
                          </span>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div
                            className="text-sm font-bold"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {job.salary}
                          </div>
                          <div
                            style={{ color: "var(--color-text-secondary)" }}
                          >
                            {job.posted}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        {job.hot && (
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: "#f8514920", color: "#f85149" }}
                          >
                            🔥 Hot
                          </span>
                        )}
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "var(--glass-bg)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-text-secondary)",
                          }}
                        >
                          {job.type}
                        </span>
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            style={{
                              background: "var(--color-primary)" + "15",
                              color: "var(--color-primary)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button
                className="glass px-8 py-3 rounded-xl font-semibold text-sm"
                style={{ color: "var(--color-primary)" }}
              >
                Load More Jobs (235 remaining)
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Featured Companies */}
            <section className="glass rounded-xl p-5">
              <h3
                className="text-sm font-bold mb-4 uppercase tracking-wide"
                style={{ color: "var(--color-text-secondary)" }}
              >
                🏢 Top Hiring Companies
              </h3>
              <div className="space-y-2">
                {FEATURED_COMPANIES.map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 p-2 rounded-lg cursor-pointer card-hover"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold flex-shrink-0"
                      style={{ background: c.color + "25", color: c.color }}
                    >
                      {c.logo}
                    </div>
                    <span
                      className="flex-1 text-xs font-semibold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {c.name}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {c.openRoles} roles
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Post a Job CTA */}
            <div
              className="glass rounded-xl p-5 text-center"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, #6366f1 12%, transparent), color-mix(in srgb, #06b6d4 8%, transparent))",
                border: "1px solid #6366f130",
              }}
            >
              <div className="text-3xl mb-2">📣</div>
              <h3
                className="text-sm font-bold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                Hiring in Web3?
              </h3>
              <p
                className="text-xs mb-4"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Post a job to reach 47,000+ vetted crypto professionals. Starting at $199/month.
              </p>
              <button
                className="affiliate-cta w-full py-2.5 rounded-xl text-white font-semibold text-sm"
              >
                Post a Job →
              </button>
            </div>

            {/* Resources */}
            <section className="glass rounded-xl p-5">
              <h3
                style={{ color: "var(--color-text-secondary)" }}
              >
                📚 Career Resources
              </h3>
              <div className="space-y-3">
                {JOB_RESOURCES.map((r) => (
                  <Link href={r.href}
                    key={r.href}
                    className="flex items-start gap-3 p-2 rounded-lg card-hover"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <span className="text-base flex-shrink-0">{r.icon}</span>
                    <div>
                      <div
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-text)" }}
                      >
                        {r.title}
                      </div>
                      <div
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {r.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Alert signup */}
            <section className="glass rounded-xl p-5">
              <h3
                style={{ color: "var(--color-text)" }}
              >
                🔔 Job Alerts
              </h3>
              <p
                className="text-xs mb-3"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Get notified when new roles match your skills.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 rounded-lg text-xs mb-2"
                style={{
                  background: "var(--glass-bg)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  outline: "none",
                }}
              />
              <button
                className="affiliate-cta w-full py-2 rounded-lg text-white font-semibold text-xs"
              >
                Enable Alerts
              </button>
            </section>
          </div>
        </div>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Crypto & Web3 Jobs Board 2026 \u2014 Find Your Next Role in", "description": "Browse the top crypto, DeFi, and Web3 jobs in 2026. Find roles at leading exchanges, DAOs, Layer 1s, and DeFi protocols. Remote & on-site positions.", "url": "https://degen0x.com/web3-business/jobs"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
