'use client';

/**
 * Community Discussion Board
 * Threaded discussions, upvotes, user profiles, topic categories
 * Sprint 24 — Frontend Agent
 */

import React, { useState, useMemo, useCallback } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

interface Author {
  address: string;
  displayName: string;
  avatar: string;
  reputation: number;
  badges: Badge[];
}

type Badge = 'whale' | 'og' | 'degen' | 'contributor' | 'mod' | 'verified';

interface Reply {
  id: string;
  author: Author;
  content: string;
  createdAt: number;
  upvotes: number;
  userVoted: boolean;
}

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: Author;
  category: Category;
  tags: string[];
  createdAt: number;
  upvotes: number;
  userVoted: boolean;
  replies: Reply[];
  views: number;
  pinned: boolean;
  locked: boolean;
}

type Category = 'general' | 'trading' | 'defi' | 'nft' | 'news' | 'help' | 'projects' | 'memes';
type SortOption = 'hot' | 'new' | 'top' | 'most-replied';

// ── Constants ──────────────────────────────────────────────────────────────

const CATEGORY_META: Record<Category, { label: string; color: string; icon: string }> = {
  general: { label: 'General', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30', icon: '💬' },
  trading: { label: 'Trading', color: 'bg-green-500/20 text-green-400 border-green-500/30', icon: '📈' },
  defi: { label: 'DeFi', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30', icon: '🏦' },
  nft: { label: 'NFT', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30', icon: '🖼️' },
  news: { label: 'News', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30', icon: '📰' },
  help: { label: 'Help', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', icon: '❓' },
  projects: { label: 'Projects', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30', icon: '🚀' },
  memes: { label: 'Memes', color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: '🐸' },
};

const BADGE_META: Record<Badge, { label: string; color: string }> = {
  whale: { label: '🐋 Whale', color: 'bg-blue-500/20 text-blue-400' },
  og: { label: '👑 OG', color: 'bg-yellow-500/20 text-yellow-400' },
  degen: { label: '🔥 Degen', color: 'bg-red-500/20 text-red-400' },
  contributor: { label: '⭐ Contributor', color: 'bg-green-500/20 text-green-400' },
  mod: { label: '🛡️ Mod', color: 'bg-purple-500/20 text-purple-400' },
  verified: { label: '✓ Verified', color: 'bg-cyan-500/20 text-cyan-400' },
};

// ── Mock Data Generator ──────────────────────────────────────────────────

function truncAddr(addr: string): string {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

function randomAddr(): string {
  const chars = '0123456789abcdef';
  return '0x' + Array.from({ length: 40 }, () => chars[Math.floor(Math.random() * 16)]).join('');
}

function randomAuthor(): Author {
  const addr = randomAddr();
  const names = ['CryptoKing', 'DeFiDegen', 'NFTFlippr', 'WhaleWatch', 'MoonBoi', 'SatoshiFan', 'EthMaxi', 'SOLdier', 'ApeBrain', 'DiamondHands', 'PaperTrader', 'YieldFarmer', 'GasGuru', 'TokenTitan', 'BlockBuilder'];
  const badgePool: Badge[] = ['whale', 'og', 'degen', 'contributor', 'verified'];
  const numBadges = Math.floor(Math.random() * 3);
  const badges = Array.from({ length: numBadges }, () => badgePool[Math.floor(Math.random() * badgePool.length)]);

  return {
    address: addr,
    displayName: names[Math.floor(Math.random() * names.length)],
    avatar: `https://placehold.co/40x40/1a1a2e/6366f1?text=${encodeURIComponent(addr.slice(2, 4).toUpperCase())}`,
    reputation: Math.floor(Math.random() * 5000),
    badges: [...new Set(badges)],
  };
}

function randomReply(): Reply {
  const contents = [
    'Great analysis! I was thinking the same thing about the support levels.',
    'This is the way. Loaded up my bags last week.',
    'Be careful with leverage here, the funding rates are insane.',
    'Anyone else seeing the divergence on the 4H chart?',
    'NFA but this looks like a solid entry point.',
    'The team just shipped a major update, bullish on this one.',
    'Yields have been compressing across the board. Time to rotate?',
    'Don\'t sleep on L2s, the gas savings are massive.',
    'DYOR but the tokenomics look solid for long-term holds.',
    'Rug pull potential is high on this one. Stay safe frens.',
  ];

  return {
    id: `reply-${Math.random().toString(36).slice(2, 9)}`,
    author: randomAuthor(),
    content: contents[Math.floor(Math.random() * contents.length)],
    createdAt: Date.now() - Math.floor(Math.random() * 86400000 * 7),
    upvotes: Math.floor(Math.random() * 50),
    userVoted: false,
  };
}

const DISCUSSIONS: Discussion[] = [
  {
    id: 'disc-1',
    title: 'BTC breaking $100K — where do we go from here?',
    content: 'Bitcoin just smashed through the psychological $100K barrier. What are your targets for Q2? I\'m thinking we could see $120K before any major pullback, especially with the ETF inflows remaining strong.',
    category: 'trading',
    tags: ['bitcoin', 'price-prediction', 'etf'],
    pinned: true,
    locked: false,
  },
  {
    id: 'disc-2',
    title: 'Best yield farming strategies for 2026?',
    content: 'I\'ve been farming on Aave and Compound but yields are getting thin. Anyone found good opportunities on newer protocols? Looking for something with decent APY that\'s not too risky.',
    category: 'defi',
    tags: ['yield-farming', 'aave', 'strategies'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-3',
    title: 'NFT market seems to be recovering — top picks?',
    content: 'Floor prices are trending up across major collections. CryptoPunks, BAYC, and Pudgy Penguins all showing strength. What are you watching?',
    category: 'nft',
    tags: ['nft', 'floor-prices', 'collections'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-4',
    title: 'Layer 2 comparison: Base vs Arbitrum vs Optimism',
    content: 'With all the L2 activity, which chain are you deploying on? Base seems to be winning on user growth but Arbitrum has the DeFi ecosystem. Thoughts?',
    category: 'general',
    tags: ['layer2', 'base', 'arbitrum', 'optimism'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-5',
    title: 'How to set up price alerts on degen0x?',
    content: 'I see there\'s a price alert feature but I\'m not sure how to configure it for multiple tokens. Can someone walk me through it? I want alerts for BTC, ETH, and SOL.',
    category: 'help',
    tags: ['alerts', 'tutorial', 'features'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-6',
    title: 'Solana ecosystem is on fire this cycle',
    content: 'The number of new projects launching on Solana is insane. Memecoins, DeFi protocols, NFT marketplaces. Is SOL the best alt play right now?',
    category: 'projects',
    tags: ['solana', 'ecosystem', 'projects'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-7',
    title: 'ETH staking vs liquid staking — which is better?',
    content: 'I\'ve got 10 ETH sitting idle. Should I go native staking through a validator or use something like Lido/Rocket Pool? What are the tradeoffs?',
    category: 'defi',
    tags: ['staking', 'ethereum', 'lido', 'rocketpool'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-8',
    title: 'degen0x feature request: portfolio tracking improvements',
    content: 'The portfolio tracker is great but it would be amazing to have multi-chain tracking in a single view. Also, PnL calculations per trade would be killer.',
    category: 'general',
    tags: ['feature-request', 'portfolio', 'feedback'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-9',
    title: 'When moon? 🚀',
    content: 'My portfolio is up 300% this month. Post your biggest wins below!',
    category: 'memes',
    tags: ['gains', 'memes', 'moon'],
    pinned: false,
    locked: false,
  },
  {
    id: 'disc-10',
    title: 'SEC vs Crypto — latest regulatory developments',
    content: 'The SEC just approved three new spot crypto ETFs. Here\'s a breakdown of what this means for the market and which tokens are likely to benefit.',
    category: 'news',
    tags: ['sec', 'regulation', 'etf', 'news'],
    pinned: false,
    locked: false,
  },
].map(d => ({
  ...d,
  author: randomAuthor(),
  createdAt: Date.now() - Math.floor(Math.random() * 86400000 * 14),
  upvotes: Math.floor(Math.random() * 200) + 10,
  userVoted: false,
  replies: Array.from({ length: Math.floor(Math.random() * 8) + 1 }, () => randomReply()),
  views: Math.floor(Math.random() * 2000) + 50,
}));

// ── Time Formatting ──────────────────────────────────────────────────────

function timeAgo(ts: number): string {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return `${Math.floor(days / 7)}w ago`;
}

// ── Sub-Components ──────────────────────────────────────────────────────

function BadgeList({ badges }: { badges: Badge[] }) {
  if (badges.length === 0) return null;
  return (
    <div className="flex gap-1">
      {badges.map(b => (
        <span key={b} className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${BADGE_META[b].color}`}>
          {BADGE_META[b].label}
        </span>
      ))}
    </div>
  );
}

function VoteButton({ count, voted, onVote }: { count: number; voted: boolean; onVote: () => void }) {
  return (
    <button
      onClick={onVote}
      className={`flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg border transition-colors ${
        voted
          ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400'
          : 'bg-[#161b22] border-[#30363d] text-gray-500 hover:text-gray-300 hover:border-[#484f58]'
      }`}
    >
      <svg className="w-3.5 h-3.5" fill={voted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
      <span className="text-xs font-bold">{count}</span>
    </button>
  );
}

function ReplyCard({ reply }: { reply: Reply }) {
  const [votes, setVotes] = useState(reply.upvotes);
  const [voted, setVoted] = useState(reply.userVoted);

  return (
    <div className="flex gap-3 py-3 border-b border-[#30363d]/50 last:border-0">
      <VoteButton count={votes} voted={voted} onVote={() => { setVoted(!voted); setVotes(voted ? votes - 1 : votes + 1); }} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-bold text-white">{reply.author.displayName}</span>
          <span className="text-[10px] text-gray-600 font-mono">{truncAddr(reply.author.address)}</span>
          <BadgeList badges={reply.author.badges} />
          <span className="text-[10px] text-gray-600">{timeAgo(reply.createdAt)}</span>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">{reply.content}</p>
      </div>
    </div>
  );
}

function DiscussionCard({
  discussion,
  onOpen,
}: {
  discussion: Discussion;
  onOpen: () => void;
}) {
  const [votes, setVotes] = useState(discussion.upvotes);
  const [voted, setVoted] = useState(discussion.userVoted);
  const catMeta = CATEGORY_META[discussion.category];

  return (
    <div className={`flex gap-4 p-4 bg-[#161b22] border border-[#30363d] rounded-xl hover:border-indigo-500/30 transition-colors ${discussion.pinned ? 'ring-1 ring-yellow-500/30' : ''}`}>
      <VoteButton count={votes} voted={voted} onVote={() => { setVoted(!voted); setVotes(voted ? votes - 1 : votes + 1); }} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          {discussion.pinned && (
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">📌 Pinned</span>
          )}
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${catMeta.color}`}>
            {catMeta.icon} {catMeta.label}
          </span>
        </div>
        <button onClick={onOpen} className="text-left">
          <h3 className="text-sm font-bold text-white hover:text-indigo-400 transition-colors mb-1">
            {discussion.title}
          </h3>
        </button>
        <p className="text-xs text-gray-500 line-clamp-2 mb-2">{discussion.content}</p>
        <div className="flex items-center gap-3 text-[10px] text-gray-600">
          <span className="font-bold text-gray-400">{discussion.author.displayName}</span>
          <span>{timeAgo(discussion.createdAt)}</span>
          <span>👁 {discussion.views}</span>
          <span>💬 {discussion.replies.length}</span>
          <div className="flex gap-1 ml-auto">
            {discussion.tags.slice(0, 3).map(tag => (
              <span key={tag} className="px-1.5 py-0.5 rounded bg-[#1c2330] border border-[#30363d] text-gray-500">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function CommunityBoard() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('hot');
  const [openDiscussion, setOpenDiscussion] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredDiscussions = useMemo(() => {
    let items = [...DISCUSSIONS];

    if (selectedCategory !== 'all') {
      items = items.filter(d => d.category === selectedCategory);
    }

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.content.toLowerCase().includes(q) ||
        d.tags.some(t => t.includes(q))
      );
    }

    // Pinned always first
    const pinned = items.filter(d => d.pinned);
    const unpinned = items.filter(d => !d.pinned);

    switch (sortBy) {
      case 'hot':
        unpinned.sort((a, b) => (b.upvotes * 2 + b.replies.length * 3 + b.views * 0.1) - (a.upvotes * 2 + a.replies.length * 3 + a.views * 0.1));
        break;
      case 'new':
        unpinned.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case 'top':
        unpinned.sort((a, b) => b.upvotes - a.upvotes);
        break;
      case 'most-replied':
        unpinned.sort((a, b) => b.replies.length - a.replies.length);
        break;
    }

    return [...pinned, ...unpinned];
  }, [selectedCategory, sortBy, search]);

  const activeDiscussion = useMemo(() => {
    if (!openDiscussion) return null;
    return DISCUSSIONS.find(d => d.id === openDiscussion) ?? null;
  }, [openDiscussion]);

  // ── Thread Detail View ──────────────────────────────────────────────
  if (activeDiscussion) {
    const catMeta = CATEGORY_META[activeDiscussion.category];

    return (
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => setOpenDiscussion(null)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Discussions
          </button>

          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${catMeta.color}`}>
                {catMeta.icon} {catMeta.label}
              </span>
              {activeDiscussion.tags.map(tag => (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c2330] border border-[#30363d] text-gray-500">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-xl font-black text-white mb-3">{activeDiscussion.title}</h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-indigo-400">{activeDiscussion.author.displayName}</span>
              <span className="text-xs text-gray-600 font-mono">{truncAddr(activeDiscussion.author.address)}</span>
              <BadgeList badges={activeDiscussion.author.badges} />
              <span className="text-xs text-gray-600">{timeAgo(activeDiscussion.createdAt)}</span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">{activeDiscussion.content}</p>

            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#30363d]">
              <span className="text-xs text-gray-600">👁 {activeDiscussion.views} views</span>
              <span className="text-xs text-gray-600">⬆ {activeDiscussion.upvotes} upvotes</span>
              <span className="text-xs text-gray-600">💬 {activeDiscussion.replies.length} replies</span>
            </div>
          </div>

          {/* Replies */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h2 className="text-sm font-bold text-white mb-4">
              {activeDiscussion.replies.length} Replies
            </h2>
            <div>
              {activeDiscussion.replies.map(reply => (
                <ReplyCard key={reply.id} reply={reply} />
              ))}
            </div>

            {/* Reply input (placeholder) */}
            <div className="mt-6 pt-4 border-t border-[#30363d]">
              <div className="p-4 rounded-lg bg-[#0d1117] border border-[#30363d] text-sm text-gray-600">
                Connect your wallet to join the discussion
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── List View ──────────────────────────────────────────────────────────
  return (
    <section className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-black text-white mb-1">Community</h1>
          <p className="text-sm text-gray-400">Discuss crypto, share alpha, and connect with fellow degens</p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Discussions', value: DISCUSSIONS.length.toString(), color: 'text-indigo-400' },
            { label: 'Total Replies', value: DISCUSSIONS.reduce((a, d) => a + d.replies.length, 0).toString(), color: 'text-green-400' },
            { label: 'Active Users', value: '1.2K', color: 'text-yellow-400' },
            { label: 'Online Now', value: '48', color: 'text-cyan-400' },
          ].map(s => (
            <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-3 text-center">
              <div className={`text-lg font-black ${s.color}`}>{s.value}</div>
              <div className="text-[10px] text-gray-500 font-semibold uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex-shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
              selectedCategory === 'all'
                ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400'
                : 'bg-[#161b22] border-[#30363d] text-gray-500 hover:text-gray-300'
            }`}
          >
            All
          </button>
          {(Object.entries(CATEGORY_META) as [Category, typeof CATEGORY_META[Category]][]).map(([key, meta]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex-shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${
                selectedCategory === key
                  ? `${meta.color}`
                  : 'bg-[#161b22] border-[#30363d] text-gray-500 hover:text-gray-300'
              }`}
            >
              {meta.icon} {meta.label}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search discussions..."
            className="flex-1 px-3 py-2 text-sm bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50"
          />
          <div className="flex rounded-lg border border-[#30363d] overflow-hidden">
            {([
              { key: 'hot', label: '🔥 Hot' },
              { key: 'new', label: '🕐 New' },
              { key: 'top', label: '⬆ Top' },
              { key: 'most-replied', label: '💬 Active' },
            ] as { key: SortOption; label: string }[]).map(s => (
              <button
                key={s.key}
                onClick={() => setSortBy(s.key)}
                className={`px-3 py-2 text-[11px] font-semibold transition-colors ${
                  sortBy === s.key
                    ? 'bg-indigo-500/20 text-indigo-400'
                    : 'bg-[#161b22] text-gray-500 hover:text-gray-300'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Discussion List */}
        <div className="space-y-3">
          {filteredDiscussions.map(d => (
            <DiscussionCard
              key={d.id}
              discussion={d}
              onOpen={() => setOpenDiscussion(d.id)}
            />
          ))}
        </div>

        {filteredDiscussions.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            <p className="text-lg mb-2">No discussions found</p>
            <p className="text-sm">Try a different category or search term</p>
          </div>
        )}

        {/* New Discussion CTA */}
        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-xl text-center">
          <h3 className="text-lg font-bold text-white mb-2">Start a Discussion</h3>
          <p className="text-sm text-gray-400 mb-4">Connect your wallet to post and reply</p>
          <button className="px-6 py-2.5 text-sm font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity">
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
}
