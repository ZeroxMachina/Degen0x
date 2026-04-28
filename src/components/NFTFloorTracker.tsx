'use client';

import Link from 'next/link';

// Types
interface NFTCollection {
  name: string;
  floorPrice: number;
  change24h: number;
  chain: 'ethereum' | 'solana';
}

// Top 5 NFT Collections by Floor Price
const TOP_COLLECTIONS: NFTCollection[] = [
  {
    name: 'CryptoPunks',
    floorPrice: 35.2,
    change24h: -1.2,
    chain: 'ethereum',
  },
  {
    name: 'Bored Ape Yacht Club',
    floorPrice: 12.5,
    change24h: 2.1,
    chain: 'ethereum',
  },
  {
    name: 'Moonbirds',
    floorPrice: 9.2,
    change24h: 1.8,
    chain: 'ethereum',
  },
  {
    name: 'DeGods',
    floorPrice: 8.9,
    change24h: 5.2,
    chain: 'ethereum',
  },
  {
    name: 'Azuki',
    floorPrice: 8.4,
    change24h: 4.5,
    chain: 'ethereum',
  },
];

// Helper to get the maximum floor price for scaling
const getMaxFloorPrice = (): number => {
  return Math.max(...TOP_COLLECTIONS.map((c) => c.floorPrice));
};

// Helper to get percentage of max for visual bar
const getBarPercentage = (price: number, max: number): number => {
  return (price / max) * 100;
};

// Helper to determine color based on change
const getChangeColor = (change: number): string => {
  if (change > 0) return 'text-green-400';
  if (change < 0) return 'text-red-400';
  return 'text-[var(--color-text-secondary)]';
};

export default function NFTFloorTracker() {
  const maxPrice = getMaxFloorPrice();

  return (
    <div className="glass rounded-xl p-6 border border-[var(--glass-border)] h-full flex flex-col">
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg font-bold text-[var(--color-text)] flex items-center gap-2">
          <span className="text-xl">🖼️</span> NFT Floor Prices
        </h3>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
          Top collections by floor price
        </p>
      </div>

      {/* Collections List */}
      <div className="space-y-4 flex-1">
        {TOP_COLLECTIONS.map((collection, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Collection Name & Price */}
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {index + 1}. {collection.name}
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-medium text-[var(--color-text)]">
                    {collection.floorPrice.toFixed(2)} ETH
                  </span>
                  <span className={`text-xs font-semibold ${getChangeColor(collection.change24h)}`}>
                    {collection.change24h > 0 ? '▲' : collection.change24h < 0 ? '▼' : '−'}{' '}
                    {Math.abs(collection.change24h).toFixed(1)}%
                  </span>
                </div>
              </div>
              <span className="text-xs font-medium text-[var(--color-text-secondary)] whitespace-nowrap ml-2">
                ⟠
              </span>
            </div>

            {/* Mini Sparkline Bar */}
            <div className="w-full h-6 bg-[var(--color-bg-card)] rounded-lg overflow-hidden relative">
              <div
                className={`h-full rounded-lg transition-all duration-300 group-hover:opacity-100 opacity-75 ${
                  collection.change24h > 0 ? 'bg-green-500/40' : collection.change24h < 0 ? 'bg-red-500/40' : 'bg-blue-500/40'
                }`}
                style={{
                  width: `${getBarPercentage(collection.floorPrice, maxPrice)}%`,
                }}
              />
              <div className="absolute inset-0 flex items-center px-2">
                <span className="text-xs font-bold text-[var(--color-text-secondary)] opacity-40">
                  {getBarPercentage(collection.floorPrice, maxPrice).toFixed(0)}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <Link
        href="/nfts/floor-tracker"
        className="mt-6 px-4 py-2.5 rounded-lg bg-[var(--color-primary)] text-white font-medium text-sm hover:opacity-90 transition-opacity text-center block"
      >
        View Full Tracker →
      </Link>

      {/* Info Tip */}
      <p className="text-xs text-[var(--color-text-secondary)] mt-4 text-center">
        Updated periodically • Ethereum mainnet
      </p>
    </div>
  );
}
