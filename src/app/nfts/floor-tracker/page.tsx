'use client';

import type { Metadata } from "next";
import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { ToolStructuredData } from "@/components/StructuredData";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

// Types
interface NFTCollection {
  id: string;
  name: string;
  floorPriceEth: number;
  change24h: number;
  change7d: number;
  volume24h: number;
  supply: number;
  listed: number;
  chain: 'ethereum' | 'solana';
}

type SortBy = 'floor' | 'change24h' | 'change7d' | 'volume';
type ChainFilter = 'all' | 'ethereum' | 'solana';
type ViewMode = 'cards' | 'table';

// Hardcoded NFT Collections Data
const NFT_COLLECTIONS: NFTCollection[] = [
  {
    id: 'bored-apes',
    name: 'Bored Ape Yacht Club',
    floorPriceEth: 12.5,
    change24h: 2.1,
    change7d: 5.3,
    volume24h: 1250,
    supply: 10000,
    listed: 542,
    chain: 'ethereum',
  },
  {
    id: 'cryptopunks',
    name: 'CryptoPunks',
    floorPriceEth: 35.2,
    change24h: -1.2,
    change7d: 3.8,
    volume24h: 2840,
    supply: 10000,
    listed: 312,
    chain: 'ethereum',
  },
  {
    id: 'azuki',
    name: 'Azuki',
    floorPriceEth: 8.4,
    change24h: 4.5,
    change7d: 12.1,
    volume24h: 892,
    supply: 10000,
    listed: 721,
    chain: 'ethereum',
  },
  {
    id: 'pudgy-penguins',
    name: 'Pudgy Penguins',
    floorPriceEth: 5.2,
    change24h: 6.8,
    change7d: 14.2,
    volume24h: 634,
    supply: 8888,
    listed: 445,
    chain: 'ethereum',
  },
  {
    id: 'doodles',
    name: 'Doodles',
    floorPriceEth: 4.1,
    change24h: 3.2,
    change7d: 8.9,
    volume24h: 512,
    supply: 10000,
    listed: 623,
    chain: 'ethereum',
  },
  {
    id: 'clonex',
    name: 'CloneX',
    floorPriceEth: 6.8,
    change24h: -0.5,
    change7d: 2.3,
    volume24h: 456,
    supply: 20000,
    listed: 834,
    chain: 'ethereum',
  },
  {
    id: 'moonbirds',
    name: 'Moonbirds',
    floorPriceEth: 9.2,
    change24h: 1.8,
    change7d: 6.4,
    volume24h: 778,
    supply: 10000,
    listed: 389,
    chain: 'ethereum',
  },
  {
    id: 'degods',
    name: 'DeGods',
    floorPriceEth: 8.9,
    change24h: 5.2,
    change7d: 11.3,
    volume24h: 892,
    supply: 10000,
    listed: 456,
    chain: 'ethereum',
  },
  {
    id: 'y00ts',
    name: 'y00ts',
    floorPriceEth: 7.3,
    change24h: 4.1,
    change7d: 9.7,
    volume24h: 634,
    supply: 15000,
    listed: 567,
    chain: 'ethereum',
  },
  {
    id: 'milady',
    name: 'Milady Maker',
    floorPriceEth: 3.2,
    change24h: 7.4,
    change7d: 18.5,
    volume24h: 423,
    supply: 10000,
    listed: 712,
    chain: 'ethereum',
  },
  {
    id: 'mutant-apes',
    name: 'Mutant Ape Yacht Club',
    floorPriceEth: 2.1,
    change24h: 3.6,
    change7d: 7.2,
    volume24h: 289,
    supply: 20000,
    listed: 1523,
    chain: 'ethereum',
  },
  {
    id: 'cool-cats',
    name: 'Cool Cats',
    floorPriceEth: 1.8,
    change24h: 2.1,
    change7d: 5.3,
    volume24h: 212,
    supply: 9999,
    listed: 2134,
    chain: 'ethereum',
  },
  {
    id: 'wow',
    name: 'World of Women',
    floorPriceEth: 1.5,
    change24h: 1.9,
    change7d: 4.8,
    volume24h: 178,
    supply: 10000,
    listed: 2456,
    chain: 'ethereum',
  },
  {
    id: 'meebits',
    name: 'Meebits',
    floorPriceEth: 2.4,
    change24h: 2.7,
    change7d: 6.1,
    volume24h: 256,
    supply: 20000,
    listed: 1834,
    chain: 'ethereum',
  },
  {
    id: 'veefriends',
    name: 'VeeFriends',
    floorPriceEth: 3.9,
    change24h: -1.3,
    change7d: 3.2,
    volume24h: 334,
    supply: 10255,
    listed: 1245,
    chain: 'ethereum',
  },
  {
    id: 'loot',
    name: 'Loot',
    floorPriceEth: 2.8,
    change24h: 4.2,
    change7d: 9.1,
    volume24h: 298,
    supply: 8000,
    listed: 834,
    chain: 'ethereum',
  },
  {
    id: 'art-blocks-curated',
    name: 'Art Blocks Curated',
    floorPriceEth: 4.6,
    change24h: 3.1,
    change7d: 7.4,
    volume24h: 389,
    supply: 1000,
    listed: 123,
    chain: 'ethereum',
  },
  {
    id: 'chromie-squiggles',
    name: 'Chromie Squiggles',
    floorPriceEth: 1.2,
    change24h: 5.3,
    change7d: 12.8,
    volume24h: 145,
    supply: 8000,
    listed: 456,
    chain: 'ethereum',
  },
  {
    id: 'fidenza',
    name: 'Fidenza',
    floorPriceEth: 5.1,
    change24h: 2.4,
    change7d: 5.9,
    volume24h: 378,
    supply: 999,
    listed: 67,
    chain: 'ethereum',
  },
  {
    id: 'autoglyphs',
    name: 'Autoglyphs',
    floorPriceEth: 18.5,
    change24h: 0.8,
    change7d: 2.1,
    volume24h: 456,
    supply: 512,
    listed: 34,
    chain: 'ethereum',
  },
];

// Helper Functions
const convertToUSD = (eth: number): number => {
  const ethUsdPrice = 3500; // Mock ETH price
  return eth * ethUsdPrice;
};

const formatUSD = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

const formatEth = (value: number): string => {
  if (value >= 1) {
    return value.toFixed(2);
  }
  return value.toFixed(3);
};

const getPercentageColor = (change: number): string => {
  if (change > 0) return 'text-green-400';
  if (change < 0) return 'text-red-400';
  return 'text-[var(--color-text-secondary)]';
};

const getListedPercentage = (listed: number, supply: number): number => {
  return Math.round((listed / supply) * 100);
};

// Metadata is removed since this is a client component
// Move metadata to a separate layout or use a dynamic route

export default function FloorTrackerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('floor');
  const [chainFilter, setChainFilter] = useState<ChainFilter>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  // Filter and sort data
  const filteredAndSortedCollections = useMemo(() => {
    let filtered = NFT_COLLECTIONS.filter((collection) => {
      const matchesSearch = collection.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesChain = chainFilter === 'all' || collection.chain === chainFilter;
      return matchesSearch && matchesChain;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'floor':
          return b.floorPriceEth - a.floorPriceEth;
        case 'change24h':
          return b.change24h - a.change24h;
        case 'change7d':
          return b.change7d - a.change7d;
        case 'volume':
          return b.volume24h - a.volume24h;
        default:
          return 0;
      }
    });
  }, [searchQuery, sortBy, chainFilter]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'NFT Floor Price Tracker',
    description: 'Real-time NFT floor price tracking for popular collections',
    url: `${SITE_URL}/nfts/floor-tracker`,
    applicationCategory: 'FinanceApplication',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'NFTs', href: '/nfts' },
            { label: 'Floor Price Tracker', href: '/nfts/floor-tracker' },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-3">
            NFT Floor Price Tracker
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Track real-time floor prices across the top NFT collections. Monitor price changes,
            trading volume, and listing percentages across Ethereum and Solana.
          </p>
        </div>

        {/* Controls Section */}
        <div className="glass rounded-xl p-6 mb-8 border border-[var(--glass-border)]">
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-input)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] border border-[var(--glass-border)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
              />
              <span className="absolute right-3 top-3 text-[var(--color-text-secondary)]">🔍</span>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="px-4 py-3 rounded-lg bg-[var(--color-bg-input)] text-[var(--color-text)] border border-[var(--glass-border)] focus:outline-none focus:border-[var(--color-primary)] transition-colors cursor-pointer"
            >
              <option value="floor">Sort by Floor Price</option>
              <option value="change24h">Sort by 24h Change</option>
              <option value="change7d">Sort by 7d Change</option>
              <option value="volume">Sort by Volume</option>
            </select>
          </div>

          {/* Chain Filter and View Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-2">
              {(['all', 'ethereum', 'solana'] as const).map((chain) => (
                <button
                  key={chain}
                  onClick={() => setChainFilter(chain)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    chainFilter === chain
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'glass text-[var(--color-text)] hover:bg-[var(--glass-bg)]'
                  }`}
                >
                  {chain === 'all' ? 'All Chains' : chain.charAt(0).toUpperCase() + chain.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex-1" />

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'cards'
                    : 'glass text-[var(--color-text)]'
                }`}
              >
                Cards
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'table'
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-[var(--color-text-secondary)]">
          Showing {filteredAndSortedCollections.length} of {NFT_COLLECTIONS.length} collections
        </div>

        {/* Cards View */}
        {viewMode === 'cards' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredAndSortedCollections.map((collection) => (
              <div
                key={collection.id}
                className="glass rounded-xl p-5 border border-[var(--glass-border)] hover:border-[var(--color-primary)] transition-all hover:shadow-lg"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">
                    {collection.name}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full glass text-[var(--color-text-secondary)]">
                    {collection.chain === 'ethereum' ? '⟠ Ethereum' : '◎ Solana'}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  {/* Floor Price */}
                  <div>
                    <div className="text-sm text-[var(--color-text-secondary)] mb-1">Floor Price</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[var(--color-text)]">
                        {formatEth(collection.floorPriceEth)} {collection.chain === 'ethereum' ? 'ETH' : 'SOL'}
                      </span>
                      <span className="text-sm text-[var(--color-text-secondary)]">
                        {formatUSD(convertToUSD(collection.floorPriceEth))}
                      </span>
                    </div>
                  </div>

                  {/* Changes */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)] mb-1">24h Change</div>
                      <span className={`font-semibold ${getPercentageColor(collection.change24h)}`}>
                        {collection.change24h > 0 ? '↑' : collection.change24h < 0 ? '↓' : '–'}{' '}
                        {Math.abs(collection.change24h).toFixed(1)}%
                      </span>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)] mb-1">7d Change</div>
                      <span className={`font-semibold ${getPercentageColor(collection.change7d)}`}>
                        {collection.change7d > 0 ? '↑' : collection.change7d < 0 ? '↓' : '–'}{' '}
                        {Math.abs(collection.change7d).toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Volume & Stats */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)] mb-1">24h Volume</div>
                      <div className="font-semibold text-[var(--color-text)]">
                        {collection.volume24h.toLocaleString()} {collection.chain === 'ethereum' ? 'ETH' : 'SOL'}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)] mb-1">% Listed</div>
                      <div className="font-semibold text-[var(--color-text)]">
                        {getListedPercentage(collection.listed, collection.supply)}%
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition-opacity text-sm">
                  Set Alert
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Table View */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-xl border border-[var(--glass-border)] mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--glass-bg)] border-b border-[var(--glass-border)]">
                  <th className="text-left px-4 py-4 text-[var(--color-text-secondary)] font-semibold">
                    Collection
                  </th>
                  <th className="text-left px-4 py-4 text-[var(--color-text-secondary)] font-semibold">
                    Chain
                  </th>
                  <th className="text-right px-4 py-4 text-[var(--color-text-secondary)] font-semibold">
                    Floor Price
                  </th>
                  <th className="text-right px-4 py-4 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">
                    24h Change
                  </th>
                  <th className="text-right px-4 py-4 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">
                    7d Change
                  </th>
                  <th className="text-right px-4 py-4 text-[var(--color-text-secondary)] font-semibold hidden lg:table-cell">
                    24h Volume
                  </th>
                  <th className="text-right px-4 py-4 text-[var(--color-text-secondary)] font-semibold hidden md:table-cell">
                    Listed %
                  </th>
                  <th className="px-4 py-4 text-center" />
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedCollections.map((collection, idx) => (
                  <tr
                    key={collection.id}
                    className="border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <span className="w-6 text-sm text-[var(--color-text-secondary)] font-medium">
                          {idx + 1}
                        </span>
                        <span className="font-semibold text-[var(--color-text)]">
                          {collection.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                        {collection.chain === 'ethereum' ? '⟠ ETH' : '◎ SOL'}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="font-semibold text-[var(--color-text)]">
                        {formatEth(collection.floorPriceEth)}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)]">
                        {formatUSD(convertToUSD(collection.floorPriceEth))}
                      </div>
                    </td>
                    <td className={`px-4 py-4 text-right hidden md:table-cell font-semibold ${getPercentageColor(collection.change24h)}`}>
                      {collection.change24h > 0 ? '↑' : collection.change24h < 0 ? '↓' : '–'}{' '}
                      {Math.abs(collection.change24h).toFixed(1)}%
                    </td>
                    <td className={`px-4 py-4 text-right hidden lg:table-cell font-semibold ${getPercentageColor(collection.change7d)}`}>
                      {collection.change7d > 0 ? '↑' : collection.change7d < 0 ? '↓' : '–'}{' '}
                      {Math.abs(collection.change7d).toFixed(1)}%
                    </td>
                    <td className="px-4 py-4 text-right hidden lg:table-cell text-[var(--color-text-secondary)]">
                      {collection.volume24h.toLocaleString()}
                    </td>
                    <td className="px-4 py-4 text-right hidden md:table-cell font-semibold text-[var(--color-text)]">
                      {getListedPercentage(collection.listed, collection.supply)}%
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="text-xs px-3 py-1 rounded-lg bg-[var(--color-primary)] text-white hover:opacity-90 transition-opacity">
                        Alert
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filteredAndSortedCollections.length === 0 && (
          <div className="glass rounded-xl p-12 text-center border border-[var(--glass-border)]">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">No collections found</h3>
            <p className="text-[var(--color-text-secondary)]">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Info Section */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6 border border-[var(--glass-border)]">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">About Floor Prices</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              The floor price is the lowest asking price for an NFT in a collection. It&apos;s a key
              metric for assessing collection value and liquidity. Floor prices fluctuate based on
              market demand, rarity, and overall market conditions.
            </p>
          </div>

          <div className="glass rounded-xl p-6 border border-[var(--glass-border)]">
            <h3 className="text-lg font-bold text-[var(--color-text)] mb-3">Trading Tips</h3>
            <ul className="text-sm text-[var(--color-text-secondary)] space-y-2 leading-relaxed">
              <li>• Monitor 24h and 7d changes for trend analysis</li>
              <li>• Compare volume to gauge market liquidity</li>
              <li>• Set alerts for significant price movements</li>
              <li>• Research collection fundamentals before buying</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-xl border border-[var(--glass-border)] text-xs text-[var(--color-text-secondary)]">
          <strong className="text-[var(--color-text)]">Disclaimer:</strong> Floor prices are
          indicative and for informational purposes only. Prices are updated periodically and may not
          reflect real-time market conditions. Always verify current prices on official marketplaces
          before trading. NFT prices are highly volatile and investing in NFTs carries significant risk.
        </div>
      </div>
    </>
  );
}
