"use client";

import { SITE_NAME } from "@/lib/constants";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import { useWallet } from "@solana/wallet-adapter-react";

const TOKEN_NAME = "$DEGEN";
const TOKEN_TICKER = "DEGEN";

const features = [
  {
    icon: "🔥",
    title: "Degen Mode",
    description:
      "Unlock premium features across the entire site. Advanced analytics, real-time yield comparisons, portfolio tracking tools, and exclusive content.",
    requirement: "Hold 10,000 $DEGEN",
  },
  {
    icon: "✍️",
    title: "Community Reviews",
    description:
      "Write wallet-verified reviews of exchanges, wallets, and DeFi protocols. Your on-chain identity proves you are a real user, not a bot or paid shill.",
    requirement: "Connect wallet",
  },
  {
    icon: "🗳️",
    title: "Governance",
    description:
      "Vote on which platforms get featured, which new content gets created, and how the platform evolves. Your tokens, your voice.",
    requirement: "Hold $DEGEN to vote",
  },
  {
    icon: "💰",
    title: "Revenue Sharing",
    description:
      "degen0x earns affiliate commissions from exchanges and platforms. A portion of revenue is used for $DEGEN buybacks and distributed to stakers.",
    requirement: "Stake $DEGEN",
  },
  {
    icon: "📝",
    title: "Content Bounties",
    description:
      "Earn $DEGEN by contributing reviews, guides, translations, and research. The community builds the platform, the platform rewards the community.",
    requirement: "Submit approved content",
  },
  {
    icon: "🎁",
    title: "Airdrops & Rewards",
    description:
      "Active community members receive periodic airdrops based on their contributions: reviews written, votes cast, content submitted, and referrals made.",
    requirement: "Be an active degen",
  },
];

const stats = [
  { label: "Pages of Content", value: "5,000+", icon: "📄" },
  { label: "Categories Covered", value: "14", icon: "📊" },
  { label: "Products Reviewed", value: "500+", icon: "⭐" },
  { label: "Countries Covered", value: "40+", icon: "🌍" },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Launch",
    items: [
      "Token launch on Pump.fun",
      "Wallet-gated community reviews",
      "Degen Mode premium features",
      "5,000+ pages of crypto content",
    ],
    status: "current" as const,
  },
  {
    phase: "Phase 2",
    title: "Growth",
    items: [
      "Content bounty program",
      "Governance voting system",
      "Advanced portfolio tracker",
      "Real-time yield comparisons",
      "10,000+ pages target",
    ],
    status: "upcoming" as const,
  },
  {
    phase: "Phase 3",
    title: "Revenue",
    items: [
      "Affiliate revenue sharing",
      "$DEGEN staking with real yield",
      "Buyback and burn mechanism",
      "Premium API access",
    ],
    status: "upcoming" as const,
  },
  {
    phase: "Phase 4",
    title: "Expansion",
    items: [
      "Mobile app",
      "Multi-language support",
      "On-chain review verification",
      "DAO treasury management",
      "Strategic partnerships",
    ],
    status: "upcoming" as const,
  },
];

export default function TokenPage() {
  const { connected } = useWallet();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-cyan-500/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <div className="glass-pill inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-primary)] mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Live on Solana
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6">
            <span className="gradient-text">{TOKEN_NAME}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-4 font-medium">
            Your Crypto Companion, Owned by Degens
          </p>

          <p className="text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
            We built the most comprehensive crypto comparison platform — 5,000+ pages covering every exchange, wallet,
            DeFi protocol, and coin. Now we&apos;re giving it to the community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-[var(--color-text)] rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <span className="text-2xl">🚀</span>
              Buy {TOKEN_NAME} on Pump.fun
            </a>
            <ConnectWalletButton />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass p-4 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-bold text-[var(--color-text)]">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why $DEGEN Section */}
      <section className="py-20 section-glass">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
              Why {TOKEN_NAME}?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Most memecoins have no product. We have 5,000+ pages of real utility. {TOKEN_NAME} gives the community
              ownership of the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="glass glass-hover p-6 space-y-3 group">
                <div className="text-3xl group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-[var(--color-text)]">{feature.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{feature.description}</p>
                <div className="glass-pill inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
                  {feature.requirement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] text-center mb-12">
            How It Works
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Buy $DEGEN",
                desc: "Get $DEGEN on Pump.fun (Solana). Fair launch, no presale, no VC allocation.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                step: "02",
                title: "Connect Your Wallet",
                desc: "Connect Phantom, Solflare, or any Solana wallet to degen0x.com. Your wallet is your identity.",
                color: "from-purple-500 to-cyan-500",
              },
              {
                step: "03",
                title: "Activate Degen Mode",
                desc: "Hold the minimum $DEGEN balance to unlock premium features, advanced analytics, and exclusive content.",
                color: "from-cyan-500 to-amber-500",
              },
              {
                step: "04",
                title: "Contribute & Earn",
                desc: "Write reviews, submit content, vote on governance proposals. Active degens earn rewards and airdrops.",
                color: "from-amber-500 to-orange-500",
              },
            ].map((item) => (
              <div key={item.step} className="glass p-6 flex gap-6 items-start group glass-hover">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-[var(--color-text)] font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 section-glass">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] text-center mb-4">
            Tokenomics
          </h2>
          <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-xl mx-auto">
            Simple, fair, transparent. No presale, no team allocation, no hidden wallets.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="glass p-6 text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-[var(--color-text)] mb-1">Fair Launch</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                100% fair launch on Pump.fun. Bonding curve mechanics. No presale, no whitelist, no insiders.
              </p>
            </div>
            <div className="glass p-6 text-center">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-bold text-[var(--color-text)] mb-1">Buyback & Burn</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                A percentage of affiliate revenue is used for market buybacks. Bought tokens are burned permanently.
              </p>
            </div>
            <div className="glass p-6 text-center">
              <div className="text-3xl mb-2">💎</div>
              <h3 className="font-bold text-[var(--color-text)] mb-1">Utility Sinks</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Token-gated premium features, staking for revenue share, content bounty payments, governance voting.
              </p>
            </div>
            <div className="glass p-6 text-center">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="font-bold text-[var(--color-text)] mb-1">Full Transparency</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Dev wallet is public. All revenue numbers are shared. All buybacks are on-chain verifiable. No secrets.
              </p>
            </div>
          </div>

          <div className="glass-elevated p-6 text-center">
            <p className="text-xs text-[var(--color-text-secondary)] mb-3 uppercase tracking-wider font-semibold">Contract Address</p>
            <div className="glass-pill inline-flex items-center gap-3 px-6 py-3">
              <span className="font-mono text-sm text-[var(--color-text)]">TBA — Launching on Pump.fun</span>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] text-center mb-12">
            Roadmap
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmap.map((phase) => (
              <div
                key={phase.phase}
                className={`glass p-6 relative overflow-hidden ${phase.status === "current" ? "ring-2 ring-[var(--color-primary)]" : ""}`}
              >
                {phase.status === "current" && (
                  <div className="absolute top-0 right-0 bg-[var(--color-primary)] text-[var(--color-text)] text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">
                    CURRENT
                  </div>
                )}
                <div className="text-xs font-bold text-[var(--color-primary)] mb-1">{phase.phase}</div>
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className={`mt-0.5 ${phase.status === "current" ? "text-green-500" : "text-[var(--color-text-secondary)] opacity-50"}`}>
                        {phase.status === "current" ? "✓" : "○"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-glass">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Join the Degen Revolution
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8">
            The first product-backed memecoin. Real utility. Real revenue. Real community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 text-[var(--color-text)] rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              🚀 Buy {TOKEN_NAME}
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 glass glass-hover rounded-2xl font-semibold text-[var(--color-text)]"
            >
              Explore the Platform →
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 mt-10">
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              <span className="text-sm font-medium">Twitter/X</span>
            </a>
            <span className="text-[var(--glass-border)]">|</span>
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              <span className="text-sm font-medium">Telegram</span>
            </a>
            <span className="text-[var(--glass-border)]">|</span>
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              <span className="text-sm font-medium">Discord</span>
            </a>
          </div>

          <p className="text-[10px] text-[var(--color-text-secondary)] mt-8 max-w-lg mx-auto opacity-60">
            {TOKEN_NAME} is a community token. It is not a security and does not represent equity or guarantee returns.
            Cryptocurrency investments are volatile and risky. Always do your own research. Not financial advice.
          </p>
        </div>
      </section>
    </div>
  );
}
