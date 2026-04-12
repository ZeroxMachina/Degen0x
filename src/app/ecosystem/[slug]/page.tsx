import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DAPPS, CHAINS_META, CATEGORIES_META, getDApp } from '@/data/dapps';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── Static Params ─────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return DAPPS.map((d) => ({ slug: d.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dapp = getDApp(slug);
  if (!dapp) return { title: 'dApp Not Found | degen0x' };

  return {
    title: `${dapp.name} Review & Guide — ${dapp.tagline} | degen0x`,
    description: dapp.description.slice(0, 155),
    openGraph: {
      title: `${dapp.name} — ${dapp.tagline}`,
      description: dapp.description.slice(0, 155),
    },
  };
}

// ─── Star Rating ───────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="text-yellow-400 text-xl">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  );
}

// ─── Review Card ──────────────────────────────────────────────────────────
function ReviewCard({
  author,
  rating,
  text,
  date,
  tag,
}: {
  author: string;
  rating: number;
  text: string;
  date: string;
  tag: string;
}) {
  return (
    <div className="bg-[#1c1c1e] rounded-2xl p-4 border border-[#2c2c2e]">
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="font-semibold text-white text-sm">{author}</div>
          <div className="text-yellow-400 text-sm">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
        </div>
        <div className="text-right">
          <div className="text-[#636366] text-xs">{date}</div>
          <div className="bg-[#2c2c2e] text-[#8e8e93] text-[10px] px-2 py-0.5 rounded-full mt-1">{tag}</div>
        </div>
      </div>
      <p className="text-[#aeaeb2] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default async function DAppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dapp = getDApp(slug);
  if (!dapp) notFound();

  // Static sample reviews — in production these would come from DB
  const reviews = [
    {
      author: 'CryptoWhale.eth',
      rating: 5,
      text: `${dapp.name} has been one of the most reliable protocols I've used. Great UX, deep liquidity, and the team is constantly shipping. Highly recommended.`,
      date: 'Mar 10, 2026',
      tag: 'Power User',
    },
    {
      author: 'defi_degen420',
      rating: Math.round(dapp.rating) as 1 | 2 | 3 | 4 | 5,
      text: `Solid protocol with ${dapp.tags[0]} capabilities. I've been using it for over a year and it's been consistent. The ${dapp.token ?? 'governance token'} tokenomics could be improved but overall a great dApp.`,
      date: 'Feb 28, 2026',
      tag: 'DeFi User',
    },
    {
      author: '0xBeginner',
      rating: Math.max(3, Math.round(dapp.rating) - 1) as 1 | 2 | 3 | 4 | 5,
      text: `Took me a while to understand how to use ${dapp.name} but once I got it, it's been great. Wish the documentation was a bit clearer for beginners.`,
      date: 'Feb 14, 2026',
      tag: 'Beginner',
    },
  ];

  // Related dApps in same category
  const related = DAPPS.filter(
    (d) => d.slug !== dapp.slug && d.category === dapp.category
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* ── Breadcrumb ── */}
      <div className="border-b border-[#1c1c1e] bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 text-sm text-[#636366]">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
          <span>/</span>
          <span className="text-[#aeaeb2]">{dapp.name}</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* ── Main Content ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Header */}
            <div className="bg-[#1c1c1e] rounded-2xl overflow-hidden border border-[#2c2c2e]">
              <div className="h-2" style={{ background: `linear-gradient(90deg, ${dapp.color}, ${dapp.color}40)` }} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border border-[#3a3a3c] flex-shrink-0"
                    style={{ background: `${dapp.color}18` }}
                  >
                    {dapp.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-2xl font-bold text-white">{dapp.name}</h1>
                      {dapp.verified && <span className="text-blue-400 text-sm" title="Verified Protocol">✓ Verified</span>}
                      {dapp.featured && <span className="bg-yellow-500/15 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full border border-yellow-500/30">FEATURED</span>}
                      {dapp.trending && <span className="bg-green-500/15 text-green-400 text-xs font-bold px-2 py-0.5 rounded-full border border-green-500/30">🔥 TRENDING</span>}
                    </div>
                    <p className="text-[#8e8e93] mt-1">{dapp.tagline}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <StarRating rating={dapp.rating} />
                      <span className="text-white font-bold">{dapp.rating}</span>
                      <span className="text-[#636366] text-sm">({dapp.reviewCount.toLocaleString()} reviews)</span>
                    </div>
                  </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={3}
          section="ecosystem"
        />

                </div>

                {/* Chain badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {dapp.chains.map((chain) => (
                    <span
                      key={chain}
                      className="text-xs px-2.5 py-1 rounded-full font-medium border"
                      style={{
                        background: `${CHAINS_META[chain].color}15`,
                        color: CHAINS_META[chain].color,
                        borderColor: `${CHAINS_META[chain].color}30`,
                      }}
                    >
                      {CHAINS_META[chain].emoji} {CHAINS_META[chain].label}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {dapp.tags.map((tag) => (
                    <span key={tag} className="bg-[#2c2c2e] text-[#8e8e93] text-xs px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Description / Guide */}
            <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-[#2c2c2e]">
              <h2 className="text-white font-bold text-lg mb-3">What is {dapp.name}?</h2>
              <p className="text-[#aeaeb2] leading-relaxed">{dapp.description}</p>
            </div>

            {/* Key Features */}
            <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-[#2c2c2e]">
              <h2 className="text-white font-bold text-lg mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dapp.tags.map((tag, i) => (
                  <div key={tag} className="flex items-start gap-3 bg-[#2c2c2e] rounded-xl p-3">
                    <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{tag}</div>
                      <div className="text-[#636366] text-xs mt-0.5">
                        Core {dapp.name} capability on {CHAINS_META[dapp.chains[0]].label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security */}
            <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-[#2c2c2e]">
              <h2 className="text-white font-bold text-lg mb-4">Security & Transparency</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className={`rounded-xl p-3 border ${dapp.audited ? 'bg-green-500/10 border-green-500/30' : 'bg-[#2c2c2e] border-[#3a3a3c]'}`}>
                  <div className="text-2xl mb-1">{dapp.audited ? '✅' : '❓'}</div>
                  <div className={`text-sm font-semibold ${dapp.audited ? 'text-green-400' : 'text-[#8e8e93]'}`}>
                    {dapp.audited ? 'Audited' : 'Audit Unknown'}
                  </div>
                  <div className="text-xs text-[#636366] mt-0.5">Smart contract security review</div>
                </div>
                <div className={`rounded-xl p-3 border ${dapp.openSource ? 'bg-blue-500/10 border-blue-500/30' : 'bg-[#2c2c2e] border-[#3a3a3c]'}`}>
                  <div className="text-2xl mb-1">{dapp.openSource ? '🔓' : '🔒'}</div>
                  <div className={`text-sm font-semibold ${dapp.openSource ? 'text-blue-400' : 'text-[#8e8e93]'}`}>
                    {dapp.openSource ? 'Open Source' : 'Closed Source'}
                  </div>
                  <div className="text-xs text-[#636366] mt-0.5">Code visibility</div>
                </div>
                <div className={`rounded-xl p-3 border ${dapp.verified ? 'bg-purple-500/10 border-purple-500/30' : 'bg-[#2c2c2e] border-[#3a3a3c]'}`}>
                  <div className="text-2xl mb-1">{dapp.verified ? '🛡️' : '⚠️'}</div>
                  <div className={`text-sm font-semibold ${dapp.verified ? 'text-purple-400' : 'text-yellow-400'}`}>
                    {dapp.verified ? 'Verified' : 'Unverified'}
                  </div>
                  <div className="text-xs text-[#636366] mt-0.5">degen0x listing status</div>
                </div>
              </div>
            </div>

            {/* Community Reviews */}
            <div className="bg-[#1c1c1e] rounded-2xl p-6 border border-[#2c2c2e]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold text-lg">Community Reviews</h2>
                <span className="text-[#636366] text-sm">{dapp.reviewCount.toLocaleString()} total</span>
              </div>
              <div className="space-y-3">
                {reviews.map((review, i) => (
                  <ReviewCard key={i} {...review} />
                ))}
              </div>
              <button className="w-full mt-4 bg-[#2c2c2e] hover:bg-[#3a3a3c] text-[#aeaeb2] text-sm py-2.5 rounded-xl transition-colors border border-[#3a3a3c]">
                Write a Review (Sign in with wallet)
              </button>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-4">
            {/* CTA */}
            <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center font-bold py-3 px-4 rounded-xl text-white transition-all hover:opacity-90 active:scale-95"
                style={{ background: dapp.color }}
              >
                Open {dapp.name} ↗
              </a>
              <p className="text-[#636366] text-xs text-center mt-2">
                External link — degen0x is not affiliated
              </p>
            </div>

            {/* Stats */}
            <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
              <h3 className="text-white font-bold text-sm mb-3">Protocol Stats</h3>
              <div className="space-y-3">
                {dapp.tvl && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#8e8e93] text-sm">Total Value Locked</span>
                    <span className="text-white font-bold">{dapp.tvl}</span>
                  </div>
                )}
                {dapp.monthlyUsers && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#8e8e93] text-sm">Monthly Users</span>
                    <span className="text-white font-bold">{dapp.monthlyUsers}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-[#8e8e93] text-sm">Category</span>
                  <span className="text-white font-medium">
                    {CATEGORIES_META[dapp.category].emoji} {CATEGORIES_META[dapp.category].label}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#8e8e93] text-sm">Launched</span>
                  <span className="text-white font-medium">{dapp.launchYear}</span>
                </div>
                {dapp.token && (
                  <div className="flex justify-between items-center">
                    <span className="text-[#8e8e93] text-sm">Token</span>
                    <span className="text-white font-bold">${dapp.token}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Learn More */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-cyan-900/20 rounded-2xl p-5 border border-indigo-500/20">
              <div className="text-xl mb-2">🎓</div>
              <h3 className="text-white font-bold text-sm mb-1">Learn DeFi with degen0x</h3>
              <p className="text-[#8e8e93] text-xs mb-3">
                Understand the fundamentals behind {CATEGORIES_META[dapp.category].label} with our free guides and earn XP.
              </p>
              <Link href="/"
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-2 rounded-lg transition-colors"
              >
                Start Learning →
              </Link>
            </div>

            {/* Related dApps */}
            {related.length > 0 && (
              <div className="bg-[#1c1c1e] rounded-2xl p-5 border border-[#2c2c2e]">
                <h3 className="text-white font-bold text-sm mb-3">
                  Similar {CATEGORIES_META[dapp.category].label} dApps
                </h3>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link href="/ecosystem"
                      key={r.slug}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 border border-[#3a3a3c]"
                        style={{ background: `${r.color}18` }}
                      >
                        {r.logo}
                      </div>
                      <div className="min-w-0">
                        <div className="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">{r.name}</div>
                        <div className="text-[#636366] text-xs truncate">{r.tagline}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/ecosystem" className="block text-center text-indigo-400 hover:text-indigo-300 text-xs mt-3 transition-colors">
                  View all {CATEGORIES_META[dapp.category].label} dApps →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
