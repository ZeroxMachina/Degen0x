'use client';

/**
 * NFT Collection Analytics & Rarity Tools
 * Provides trait analysis, rarity scoring, and price estimation per trait
 * Sprint 24 — NFT Agent
 */

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';

// ── Types ──────────────────────────────────────────────────────────────────

interface NFTTrait {
  type: string;
  value: string;
  count: number;
  total: number;
  rarityScore: number;
  priceImpact: number; // percentage impact on floor price
}

interface NFTItem {
  id: string;
  name: string;
  collection: string;
  image: string;
  rarityRank: number;
  rarityScore: number;
  estimatedPrice: number;
  traits: NFTTrait[];
  lastSale: number;
  listed: boolean;
}

interface CollectionStats {
  name: string;
  slug: string;
  chain: 'ethereum' | 'solana';
  totalSupply: number;
  floorPrice: number;
  volume24h: number;
  holders: number;
  uniqueTraitTypes: number;
  avgRarityScore: number;
  topTraits: NFTTrait[];
  items: NFTItem[];
}

type SortOption = 'rarity-asc' | 'rarity-desc' | 'price-asc' | 'price-desc' | 'recent';
type ViewMode = 'grid' | 'table' | 'traits';

// ── Mock Data ──────────────────────────────────────────────────────────────

function generateTraits(): NFTTrait[] {
  const traitTypes: Record<string, { values: string[]; counts: number[] }> = {
    Background: { values: ['Blue', 'Red', 'Green', 'Purple', 'Gold', 'Black'], counts: [2100, 1800, 1600, 900, 350, 250] },
    Body: { values: ['Standard', 'Zombie', 'Ape', 'Alien', 'Robot', 'Gold'], counts: [4000, 1200, 800, 400, 350, 250] },
    Eyes: { values: ['Normal', 'Laser', 'VR', 'Sleepy', 'Diamond', '3D'], counts: [3000, 1500, 1000, 700, 500, 300] },
    Mouth: { values: ['Smile', 'Cigar', 'Pipe', 'Grill', 'Diamond Grill', 'Bored'], counts: [3200, 1400, 1100, 600, 400, 300] },
    Hat: { values: ['None', 'Beanie', 'Crown', 'Captain', 'Halo', 'Party'], counts: [2500, 1800, 1200, 800, 450, 250] },
    Clothing: { values: ['T-Shirt', 'Hoodie', 'Suit', 'Leather', 'Space Suit', 'None'], counts: [2800, 1600, 1100, 700, 500, 300] },
  };

  const total = 7000;
  const traits: NFTTrait[] = [];

  Object.entries(traitTypes).forEach(([type, { values, counts }]) => {
    const idx = Math.floor(Math.random() * values.length);
    const count = counts[idx];
    const rarityScore = 1 / (count / total);
    const priceImpact = rarityScore > 10 ? (rarityScore - 1) * 12 : rarityScore > 3 ? (rarityScore - 1) * 5 : 0;

    traits.push({
      type,
      value: values[idx],
      count,
      total,
      rarityScore: Math.round(rarityScore * 100) / 100,
      priceImpact: Math.round(priceImpact * 10) / 10,
    });
  });

  return traits;
}

function generateNFTItem(collection: string, index: number, floorPrice: number): NFTItem {
  const traits = generateTraits();
  const totalRarity = traits.reduce((acc, t) => acc + t.rarityScore, 0);
  const priceMultiplier = 1 + traits.reduce((acc, t) => acc + t.priceImpact, 0) / 100;

  return {
    id: `${collection}-${index}`,
    name: `#${1000 + index}`,
    collection,
    image: `https://placehold.co/300x300/1a1a2e/e0e0ff?text=${encodeURIComponent(`#${1000 + index}`)}`,
    rarityRank: Math.floor(Math.random() * 7000) + 1,
    rarityScore: Math.round(totalRarity * 100) / 100,
    estimatedPrice: Math.round(floorPrice * priceMultiplier * 100) / 100,
    traits,
    lastSale: Math.round(floorPrice * (0.8 + Math.random() * 0.6) * 100) / 100,
    listed: Math.random() > 0.6,
  };
}

const COLLECTIONS: CollectionStats[] = [
  {
    name: 'CryptoPunks',
    slug: 'cryptopunks',
    chain: 'ethereum',
    totalSupply: 10000,
    floorPrice: 35.2,
    volume24h: 892.5,
    holders: 3561,
    uniqueTraitTypes: 7,
    avgRarityScore: 6.2,
    topTraits: [],
    items: [],
  },
  {
    name: 'Bored Ape Yacht Club',
    slug: 'bayc',
    chain: 'ethereum',
    totalSupply: 10000,
    floorPrice: 12.5,
    volume24h: 456.3,
    holders: 5682,
    uniqueTraitTypes: 7,
    avgRarityScore: 5.8,
    topTraits: [],
    items: [],
  },
  {
    name: 'Azuki',
    slug: 'azuki',
    chain: 'ethereum',
    totalSupply: 10000,
    floorPrice: 8.4,
    volume24h: 234.1,
    holders: 5012,
    uniqueTraitTypes: 8,
    avgRarityScore: 5.5,
    topTraits: [],
    items: [],
  },
  {
    name: 'DeGods',
    slug: 'degods',
    chain: 'ethereum',
    totalSupply: 10000,
    floorPrice: 8.9,
    volume24h: 312.7,
    holders: 4823,
    uniqueTraitTypes: 6,
    avgRarityScore: 5.1,
    topTraits: [],
    items: [],
  },
  {
    name: 'Pudgy Penguins',
    slug: 'pudgy',
    chain: 'ethereum',
    totalSupply: 8888,
    floorPrice: 11.2,
    volume24h: 389.4,
    holders: 4567,
    uniqueTraitTypes: 7,
    avgRarityScore: 5.6,
    topTraits: [],
    items: [],
  },
  {
    name: 'Mad Lads',
    slug: 'mad-lads',
    chain: 'solana',
    totalSupply: 10000,
    floorPrice: 85.5,
    volume24h: 1245.3,
    holders: 4201,
    uniqueTraitTypes: 6,
    avgRarityScore: 4.9,
    topTraits: [],
    items: [],
  },
].map(c => ({
  ...c,
  topTraits: generateTraits(),
  items: Array.from({ length: 20 }, (_, i) => generateNFTItem(c.slug, i, c.floorPrice)),
}));

// ── Utility ──────────────────────────────────────────────────────────────

function getRarityTier(score: number): { label: string; color: string; bg: string } {
  if (score >= 20) return { label: 'Legendary', color: 'text-yellow-300', bg: 'bg-yellow-500/20 border-yellow-500/30' };
  if (score >= 12) return { label: 'Epic', color: 'text-purple-400', bg: 'bg-purple-500/20 border-purple-500/30' };
  if (score >= 6) return { label: 'Rare', color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/30' };
  if (score >= 3) return { label: 'Uncommon', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/30' };
  return { label: 'Common', color: 'text-gray-400', bg: 'bg-gray-500/20 border-gray-500/30' };
}

function formatEth(val: number): string {
  return val >= 1000 ? `${(val / 1000).toFixed(1)}K` : val.toFixed(2);
}

// ── Components ──────────────────────────────────────────────────────────────

function TraitBar({ trait }: { trait: NFTTrait }) {
  const pct = (trait.count / trait.total) * 100;
  const rarityTier = getRarityTier(trait.rarityScore);

  return (
    <div className="flex items-center gap-3 py-2 px-3 rounded-lg bg-[#1c2330] border border-[#30363d] hover:border-indigo-500/40 transition-colors">
      <div className="w-20 text-xs text-gray-400 font-medium truncate">{trait.type}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-semibold text-white">{trait.value}</span>
          <span className="text-xs text-gray-500">{trait.count.toLocaleString()} / {trait.total.toLocaleString()}</span>
        </div>
        <div className="w-full h-1.5 bg-[#30363d] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all"
            style={{ width: `${Math.max(pct, 2)}%` }}
          />
        </div>
      </div>
      <div className={`text-xs font-bold px-2 py-0.5 rounded border ${rarityTier.bg} ${rarityTier.color}`}>
        {trait.rarityScore.toFixed(1)}x
      </div>
      {trait.priceImpact > 0 && (
        <div className="text-xs font-semibold text-green-400">+{trait.priceImpact}%</div>
      )}
    </div>
  );
}

function NFTCard({ item, floorPrice }: { item: NFTItem; floorPrice: number }) {
  const [showTraits, setShowTraits] = useState(false);
  const tier = getRarityTier(item.rarityScore);
  const premium = ((item.estimatedPrice - floorPrice) / floorPrice * 100);

  return (
    <div className="bg-[#1c2330] border border-[#30363d] rounded-xl overflow-hidden hover:border-indigo-500/50 transition-all group">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center">
        <span className="text-3xl font-black text-white/20">{item.name}</span>
        <div className="absolute top-2 left-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${tier.bg} ${tier.color}`}>
            {tier.label}
          </span>
        </div>
        <div className="absolute top-2 right-2 text-xs font-mono text-gray-400 bg-black/50 px-1.5 py-0.5 rounded">
          Rank #{item.rarityRank.toLocaleString()}
        </div>
        {item.listed && (
          <div className="absolute bottom-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">
            Listed
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-bold text-white">{item.name}</span>
          <span className="text-xs font-mono text-gray-400">Score: {item.rarityScore.toFixed(1)}</span>
        </div>

        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xs text-gray-500">Est. Value</div>
            <div className="text-sm font-bold text-white">{formatEth(item.estimatedPrice)} ETH</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">vs Floor</div>
            <div className={`text-sm font-bold ${premium > 0 ? 'text-green-400' : 'text-gray-400'}`}>
              {premium > 0 ? `+${premium.toFixed(1)}%` : 'At floor'}
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-500 mb-2">Last sale: {item.lastSale} ETH</div>

        <button
          onClick={() => setShowTraits(!showTraits)}
          className="w-full text-xs text-center py-1.5 rounded-lg bg-[#161b22] border border-[#30363d] text-gray-400 hover:text-white hover:border-indigo-500/40 transition-colors"
        >
          {showTraits ? 'Hide' : 'Show'} Traits ({item.traits.length})
        </button>

        {showTraits && (
          <div className="mt-2 space-y-1">
            {item.traits.map((t, i) => (
              <div key={i} className="flex items-center justify-between text-xs py-1 px-2 rounded bg-[#161b22]">
                <span className="text-gray-500">{t.type}</span>
                <span className="text-white font-medium">{t.value}</span>
                <span className={`font-bold ${getRarityTier(t.rarityScore).color}`}>{t.rarityScore.toFixed(1)}x</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CollectionCard({ collection, onClick }: { collection: CollectionStats; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-[#161b22] border border-[#30363d] rounded-xl p-4 hover:border-indigo-500/50 transition-all group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-xl font-black text-indigo-400">
          {collection.name.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-bold text-white truncate group-hover:text-indigo-400 transition-colors">
            {collection.name}
          </h3>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
            collection.chain === 'ethereum'
              ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
              : 'bg-green-500/20 text-green-400 border border-green-500/30'
          }`}>
            {collection.chain.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <div className="text-gray-500">Floor</div>
          <div className="font-bold text-white">
            {collection.chain === 'solana' ? `${collection.floorPrice} SOL` : `${collection.floorPrice} ETH`}
          </div>
        </div>
        <div>
          <div className="text-gray-500">24h Vol</div>
          <div className="font-bold text-white">{formatEth(collection.volume24h)} {collection.chain === 'solana' ? 'SOL' : 'ETH'}</div>
        </div>
        <div>
          <div className="text-gray-500">Supply</div>
          <div className="font-bold text-white">{collection.totalSupply.toLocaleString()}</div>
        </div>
        <div>
          <div className="text-gray-500">Holders</div>
          <div className="font-bold text-white">{collection.holders.toLocaleString()}</div>
        </div>
      </div>
    </button>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function NFTRarityAnalytics() {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('rarity-asc');
  const [search, setSearch] = useState('');

  const collection = useMemo(() => {
    if (!selectedCollection) return null;
    return COLLECTIONS.find(c => c.slug === selectedCollection) ?? null;
  }, [selectedCollection]);

  const sortedItems = useMemo(() => {
    if (!collection) return [];
    let items = [...collection.items];

    if (search) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.traits.some(t => t.value.toLowerCase().includes(search.toLowerCase()))
      );
    }

    switch (sortBy) {
      case 'rarity-asc': return items.sort((a, b) => a.rarityRank - b.rarityRank);
      case 'rarity-desc': return items.sort((a, b) => b.rarityRank - a.rarityRank);
      case 'price-asc': return items.sort((a, b) => a.estimatedPrice - b.estimatedPrice);
      case 'price-desc': return items.sort((a, b) => b.estimatedPrice - a.estimatedPrice);
      case 'recent': return items.sort((a, b) => b.lastSale - a.lastSale);
      default: return items;
    }
  }, [collection, sortBy, search]);

  // ── Collection List View ────────────────────────────────────────────────
  if (!collection) {
    return (
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white mb-2">NFT Collection Analytics</h1>
            <p className="text-gray-400">Rarity scores, trait analysis, and price estimation for top collections</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COLLECTIONS.map(c => (
              <CollectionCard
                key={c.slug}
                collection={c}
                onClick={() => setSelectedCollection(c.slug)}
              />
            ))}
          </div>

          {/* Rarity Score Explainer */}
          <div className="mt-12 bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-4">How Rarity Scoring Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-3 rounded-lg bg-[#1c2330] border border-[#30363d]">
                <div className="text-sm font-bold text-indigo-400 mb-1">1. Trait Frequency</div>
                <p className="text-xs text-gray-400">Each trait is scored by how rare it is within the collection. Fewer occurrences = higher score.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#1c2330] border border-[#30363d]">
                <div className="text-sm font-bold text-cyan-400 mb-1">2. Statistical Rarity</div>
                <p className="text-xs text-gray-400">Score = 1 / (trait_count / total_supply). A trait appearing in 1% of items gets 100x score.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#1c2330] border border-[#30363d]">
                <div className="text-sm font-bold text-purple-400 mb-1">3. Combined Score</div>
                <p className="text-xs text-gray-400">All trait scores are summed for the total rarity score. Higher combined = rarer NFT.</p>
              </div>
              <div className="p-3 rounded-lg bg-[#1c2330] border border-[#30363d]">
                <div className="text-sm font-bold text-green-400 mb-1">4. Price Estimation</div>
                <p className="text-xs text-gray-400">Rare traits add premium over floor. Legendary traits can push 10-30x floor value.</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {(['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'] as const).map(tier => {
                const info = getRarityTier(
                  tier === 'Legendary' ? 25 : tier === 'Epic' ? 15 : tier === 'Rare' ? 8 : tier === 'Uncommon' ? 4 : 1
                );
                return (
                  <span key={tier} className={`text-xs font-bold px-2.5 py-1 rounded border ${info.bg} ${info.color}`}>
                    {tier}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── Collection Detail View ────────────────────────────────────────────
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <button
          onClick={() => setSelectedCollection(null)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Collections
        </button>

        {/* Collection Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-3xl font-black text-indigo-400">
            {collection.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-black text-white">{collection.name}</h1>
            <div className="flex items-center gap-3 mt-1">
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                collection.chain === 'ethereum'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'bg-green-500/20 text-green-400 border border-green-500/30'
              }`}>
                {collection.chain.toUpperCase()}
              </span>
              <span className="text-xs text-gray-500">{collection.totalSupply.toLocaleString()} items</span>
              <span className="text-xs text-gray-500">{collection.holders.toLocaleString()} holders</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-right px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg">
              <div className="text-[10px] text-gray-500 uppercase font-semibold">Floor</div>
              <div className="text-lg font-black text-white">{collection.floorPrice} {collection.chain === 'solana' ? 'SOL' : 'ETH'}</div>
            </div>
            <div className="text-right px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg">
              <div className="text-[10px] text-gray-500 uppercase font-semibold">24h Vol</div>
              <div className="text-lg font-black text-white">{formatEth(collection.volume24h)} {collection.chain === 'solana' ? 'SOL' : 'ETH'}</div>
            </div>
          </div>
        </div>

        {/* Trait Distribution Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-white mb-3">Trait Distribution</h2>
          <div className="space-y-2">
            {collection.topTraits.map((trait, i) => (
              <TraitBar key={i} trait={trait} />
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name or trait..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 px-3 py-2 text-sm bg-[#161b22] border border-[#30363d] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-3 py-2 text-sm bg-[#161b22] border border-[#30363d] rounded-lg text-white focus:outline-none focus:border-indigo-500/50"
          >
            <option value="rarity-asc">Rarest First</option>
            <option value="rarity-desc">Most Common First</option>
            <option value="price-desc">Highest Price</option>
            <option value="price-asc">Lowest Price</option>
            <option value="recent">Recent Sales</option>
          </select>

          <div className="flex rounded-lg border border-[#30363d] overflow-hidden">
            {(['grid', 'table'] as ViewMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-3 py-2 text-xs font-semibold transition-colors ${
                  viewMode === mode
                    ? 'bg-indigo-500/20 text-indigo-400'
                    : 'bg-[#161b22] text-gray-400 hover:text-white'
                }`}
              >
                {mode === 'grid' ? 'Grid' : 'Table'}
              </button>
            ))}
          </div>

          <span className="text-xs text-gray-500 ml-auto">{sortedItems.length} items</span>
        </div>

        {/* Items Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {sortedItems.map(item => (
              <NFTCard key={item.id} item={item} floorPrice={collection.floorPrice} />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left text-xs text-gray-500 font-semibold uppercase py-3 px-3">Item</th>
                  <th className="text-left text-xs text-gray-500 font-semibold uppercase py-3 px-3">Rank</th>
                  <th className="text-left text-xs text-gray-500 font-semibold uppercase py-3 px-3">Rarity</th>
                  <th className="text-left text-xs text-gray-500 font-semibold uppercase py-3 px-3">Tier</th>
                  <th className="text-right text-xs text-gray-500 font-semibold uppercase py-3 px-3">Est. Price</th>
                  <th className="text-right text-xs text-gray-500 font-semibold uppercase py-3 px-3">Last Sale</th>
                  <th className="text-center text-xs text-gray-500 font-semibold uppercase py-3 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map(item => {
                  const tier = getRarityTier(item.rarityScore);
                  return (
                    <tr key={item.id} className="border-b border-[#30363d] hover:bg-[#1c2330] transition-colors">
                      <td className="py-3 px-3 font-bold text-white">{item.name}</td>
                      <td className="py-3 px-3 font-mono text-gray-400">#{item.rarityRank.toLocaleString()}</td>
                      <td className="py-3 px-3 font-bold text-indigo-400">{item.rarityScore.toFixed(1)}</td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${tier.bg} ${tier.color}`}>
                          {tier.label}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-bold text-white">{item.estimatedPrice} ETH</td>
                      <td className="py-3 px-3 text-right text-gray-400">{item.lastSale} ETH</td>
                      <td className="py-3 px-3 text-center">
                        {item.listed ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">Listed</span>
                        ) : (
                          <span className="text-[10px] text-gray-600">Unlisted</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
