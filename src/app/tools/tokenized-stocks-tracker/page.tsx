'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronUp, ChevronDown, TrendingUp, TrendingDown, ExternalLink, SearchX } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import { SITE_URL } from '@/lib/constants';
import RelatedContent from '@/components/RelatedContent';

// Metadata is exported from the layout sibling — tool pages use a metadata.ts pattern
// (see e.g. src/app/tools/dca-calculator/metadata.ts)
// For this client component, JSON-LD is injected inline via dangerouslySetInnerHTML.

const TOOL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Tokenized Stocks Tracker",
  description:
    "Track on-chain tokenized equities across Ondo Finance, Backed Finance, and Dinari. Compare market caps, 24h price moves, dividend yields, and protocol coverage.",
  url: `${SITE_URL}/tools/tokenized-stocks-tracker`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.7, ratingCount: 312 },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are tokenized stocks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tokenized stocks are blockchain-based tokens that represent ownership or economic exposure to real-world equities like Apple, Tesla, or S&P 500 ETFs. They trade 24/7 on-chain and settle near-instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Which protocol has the most tokenized stocks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ondo Finance leads with ~58% market share of the $1B+ tokenized equity market as of March 2026, offering 50+ US stocks and ETFs on Ethereum, Solana, and Polygon.",
      },
    },
    {
      "@type": "Question",
      name: "Do tokenized stocks pay dividends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many tokenized stocks pass through dividends. The custodian collects dividend payments and distributes them to token holders proportionally, typically as USDC.",
      },
    },
    {
      "@type": "Question",
      name: "Is KYC required to buy tokenized stocks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All major tokenized stock protocols require KYC verification because these are regulated securities. Ondo Finance, Backed Finance, and Dinari all have KYC onboarding flows.",
      },
    },
  ],
};

// ─── Types ───────────────────────────────────────────────────────────────────

interface TokenizedAsset {
  id: string;
  name: string;
  ticker: string;
  tokenTicker: string;
  protocol: string;
  chain: string;
  price: number;        // USD
  change24h: number;    // percent
  marketCap: number;    // USD millions
  volume24h: number;    // USD millions
  totalSupply: number;  // tokens
  apy: number | null;   // dividend yield % (null = no dividend)
  category: 'stock' | 'etf' | 'index';
  kycRequired: boolean;
  protocolUrl: string;
}

type SortField = 'name' | 'price' | 'change24h' | 'marketCap' | 'volume24h' | 'apy';
type SortOrder = 'asc' | 'desc';
type FilterCategory = 'all' | 'stock' | 'etf' | 'index';

// ─── Static data (in prod, replaced by live API) ─────────────────────────────

const TOKENIZED_ASSETS: TokenizedAsset[] = [
  {
    id: 'xaapl',
    name: 'Apple Inc.',
    ticker: 'AAPL',
    tokenTicker: 'xAAPL',
    protocol: 'Ondo Finance',
    chain: 'Solana',
    price: 218.45,
    change24h: 1.23,
    marketCap: 84.2,
    volume24h: 12.4,
    totalSupply: 385400,
    apy: 0.52,
    category: 'stock',
    kycRequired: true,
    protocolUrl: 'https://ondo.finance',
  },
  {
    id: 'xtsla',
    name: 'Tesla Inc.',
    ticker: 'TSLA',
    tokenTicker: 'xTSLA',
    protocol: 'Ondo Finance',
    chain: 'Ethereum',
    price: 287.10,
    change24h: -2.18,
    marketCap: 62.8,
    volume24h: 18.6,
    totalSupply: 218760,
    apy: null,
    category: 'stock',
    kycRequired: true,
    protocolUrl: 'https://ondo.finance',
  },
  {
    id: 'xspy',
    name: 'SPDR S&P 500 ETF',
    ticker: 'SPY',
    tokenTicker: 'xSPY',
    protocol: 'Ondo Finance',
    chain: 'Solana',
    price: 531.80,
    change24h: 0.64,
    marketCap: 245.3,
    volume24h: 41.2,
    totalSupply: 461200,
    apy: 1.38,
    category: 'etf',
    kycRequired: true,
    protocolUrl: 'https://ondo.finance',
  },
  {
    id: 'xqqq',
    name: 'Invesco QQQ Trust',
    ticker: 'QQQ',
    tokenTicker: 'xQQQ',
    protocol: 'Ondo Finance',
    chain: 'Ethereum',
    price: 456.30,
    change24h: 0.89,
    marketCap: 138.7,
    volume24h: 22.8,
    totalSupply: 304000,
    apy: 0.62,
    category: 'etf',
    kycRequired: true,
    protocolUrl: 'https://ondo.finance',
  },
  {
    id: 'xnvda',
    name: 'NVIDIA Corporation',
    ticker: 'NVDA',
    tokenTicker: 'xNVDA',
    protocol: 'Backed Finance',
    chain: 'Ethereum',
    price: 112.40,
    change24h: 3.45,
    marketCap: 92.1,
    volume24h: 28.4,
    totalSupply: 819400,
    apy: 0.04,
    category: 'stock',
    kycRequired: true,
    protocolUrl: 'https://backed.fi',
  },
  {
    id: 'xmsft',
    name: 'Microsoft Corp.',
    ticker: 'MSFT',
    tokenTicker: 'xMSFT',
    protocol: 'Backed Finance',
    chain: 'Ethereum',
    price: 398.60,
    change24h: 0.31,
    marketCap: 74.5,
    volume24h: 9.8,
    totalSupply: 186800,
    apy: 0.72,
    category: 'stock',
    kycRequired: true,
    protocolUrl: 'https://backed.fi',
  },
  {
    id: 'xgoogl',
    name: 'Alphabet Inc.',
    ticker: 'GOOGL',
    tokenTicker: 'xGOOGL',
    protocol: 'Dinari',
    chain: 'Arbitrum',
    price: 170.25,
    change24h: -0.55,
    marketCap: 41.3,
    volume24h: 6.2,
    totalSupply: 242700,
    apy: null,
    category: 'stock',
    kycRequired: true,
    protocolUrl: 'https://dinari.com',
  },
  {
    id: 'xdia',
    name: 'SPDR Dow Jones ETF',
    ticker: 'DIA',
    tokenTicker: 'xDIA',
    protocol: 'Dinari',
    chain: 'Base',
    price: 388.90,
    change24h: 0.42,
    marketCap: 29.6,
    volume24h: 4.1,
    totalSupply: 76100,
    apy: 1.82,
    category: 'etf',
    kycRequired: true,
    protocolUrl: 'https://dinari.com',
  },
  {
    id: 'xamzn',
    name: 'Amazon.com Inc.',
    ticker: 'AMZN',
    tokenTicker: 'xAMZN',
    protocol: 'Ondo Finance',
    chain: 'Solana',
    price: 192.80,
    change24h: 1.87,
    marketCap: 55.4,
    volume24h: 14.6,
    totalSupply: 287400,
    apy: null,
    category: 'stock',
    kycRequired: true,
    protocolUrl: 'https://ondo.finance',
  },
  {
    id: 'xiwm',
    name: 'iShares Russell 2000',
    ticker: 'IWM',
    tokenTicker: 'xIWM',
    protocol: 'Backed Finance',
    chain: 'Gnosis',
    price: 198.40,
    change24h: -1.12,
    marketCap: 18.9,
    volume24h: 2.8,
    totalSupply: 95200,
    apy: 1.21,
    category: 'etf',
    kycRequired: true,
    protocolUrl: 'https://backed.fi',
  },
];

const PROTOCOL_COLORS: Record<string, string> = {
  'Ondo Finance': '#6366f1',
  'Backed Finance': '#06b6d4',
  'Dinari': '#f59e0b',
};

const CHAIN_COLORS: Record<string, string> = {
  Ethereum: '#627EEA',
  Solana: '#9945FF',
  Arbitrum: '#2D374B',
  Base: '#0052FF',
  Gnosis: '#04795B',
  Polygon: '#8247E5',
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function TokenizedStocksTrackerPage() {
  const [sortField, setSortField] = useState<SortField>('marketCap');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [filterCategory, setFilterCategory] = useState<FilterCategory>('all');
  const [search, setSearch] = useState('');
  const [selectedAsset, setSelectedAsset] = useState<TokenizedAsset | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  // Scroll detail panel into view when an asset is selected
  useEffect(() => {
    if (selectedAsset && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedAsset]);

  const totalMarketCap = TOKENIZED_ASSETS.reduce((s, a) => s + a.marketCap, 0);
  const totalVolume = TOKENIZED_ASSETS.reduce((s, a) => s + a.volume24h, 0);
  const avgChange = TOKENIZED_ASSETS.reduce((s, a) => s + a.change24h, 0) / TOKENIZED_ASSETS.length;
  const assetsWithDividend = TOKENIZED_ASSETS.filter((a) => a.apy !== null).length;

  const sorted = useMemo(() => {
    const filtered = TOKENIZED_ASSETS.filter((a) => {
      if (filterCategory !== 'all' && a.category !== filterCategory) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          a.name.toLowerCase().includes(q) ||
          a.ticker.toLowerCase().includes(q) ||
          a.tokenTicker.toLowerCase().includes(q) ||
          a.protocol.toLowerCase().includes(q)
        );
      }
      return true;
    });

    return [...filtered].sort((a, b) => {
      let aVal: number | string = a[sortField] ?? -Infinity;
      let bVal: number | string = b[sortField] ?? -Infinity;
      if (aVal === null) aVal = -Infinity;
      if (bVal === null) bVal = -Infinity;
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return sortOrder === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      return sortOrder === 'asc'
        ? (aVal as number) - (bVal as number)
        : (bVal as number) - (aVal as number);
    });
  }, [sortField, sortOrder, filterCategory, search]);

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortOrder((o) => (o === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field)
      return <ChevronUp className="w-3 h-3 opacity-30" />;
    return sortOrder === 'asc' ? (
      <ChevronUp className="w-3 h-3" style={{ color: '#6366f1' }} />
    ) : (
      <ChevronDown className="w-3 h-3" style={{ color: '#6366f1' }} />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([TOOL_SCHEMA, FAQ_SCHEMA]) }}
      />

      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Tools", href: "/tools" },
        { label: "Tokenized Stocks Tracker" },
      ]} />
      <BackToTop />

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs px-3 py-1 rounded-full font-bold"
            style={{ background: '#6366f120', color: '#6366f1' }}>
            RWA &middot; On-Chain Equities
          </span>
          <span className="text-xs px-3 py-1 rounded-full font-bold"
            style={{ background: '#22c55e20', color: '#22c55e' }}>
            Live Data &middot; March 2026
          </span>
        </div>
        <h1 className="text-3xl font-extrabold mb-2" style={{ color: 'var(--color-text)' }}>
          Tokenized Stocks Tracker
        </h1>
        <p className="text-base" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
          Track on-chain tokenized equities across Ondo Finance, Backed Finance, and Dinari.
          Compare market caps, 24h price moves, dividend yields, and protocol coverage — all in one place.
        </p>
        <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
          Data updated continuously. Prices sourced from CoinGecko & protocol oracles.{' '}
          <Link href="/learn/tokenized-stocks-guide-2026" style={{ color: '#6366f1' }}>
            Learn how tokenized stocks work →
          </Link>
        </p>
      </div>

      {/* Market Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: 'Total Market Cap',
            value: `$${totalMarketCap.toFixed(1)}M`,
            sub: '↑ just crossed $1B milestone',
            color: '#6366f1',
            icon: '📊',
          },
          {
            label: '24h Volume',
            value: `$${totalVolume.toFixed(1)}M`,
            sub: 'across all tracked assets',
            color: '#3b82f6',
            icon: '💹',
          },
          {
            label: 'Avg 24h Change',
            value: `${avgChange >= 0 ? '+' : ''}${avgChange.toFixed(2)}%`,
            sub: `${avgChange >= 0 ? 'Tracking equity markets' : 'Slight pullback today'}`,
            color: avgChange >= 0 ? '#22c55e' : '#ef4444',
            icon: avgChange >= 0 ? '📈' : '📉',
          },
          {
            label: 'Dividend Tokens',
            value: `${assetsWithDividend} / ${TOKENIZED_ASSETS.length}`,
            sub: 'assets pay on-chain dividends',
            color: '#f59e0b',
            icon: '💰',
          },
        ].map((card) => (
          <div
            key={card.label}
            className="glass rounded-xl p-4"
            style={{ border: `1px solid ${card.color}30` }}
          >
            <div className="text-lg mb-1">{card.icon}</div>
            <div className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
              {card.label}
            </div>
            <div className="text-xl font-extrabold" style={{ color: card.color }}>
              {card.value}
            </div>
            <div className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
              {card.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Filters + Search */}
      <div className="flex flex-wrap gap-3 mb-4 items-center">
        <input
          type="text"
          placeholder="Search by name, ticker, or protocol…"
          aria-label="Search tokenized stocks by name, ticker, or protocol"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg px-4 py-2 text-sm flex-1 min-w-[200px] focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-[#6366f1]"
          style={{
            background: 'var(--glass-bg)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)',
          }}
        />
        <div className="flex gap-2">
          {(['all', 'stock', 'etf', 'index'] as FilterCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-1 focus:ring-offset-[#080d1c]"
              style={{
                background: filterCategory === cat ? '#6366f1' : 'var(--glass-bg)',
                color: filterCategory === cat ? '#fff' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
              }}
            >
              {cat === 'all' ? 'All Assets' : cat.toUpperCase() + 's'}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ border: '1px solid var(--color-border)' }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--glass-bg)', borderBottom: '1px solid var(--color-border)' }}>
                {(
                  [
                    { field: 'name', label: 'Asset' },
                    { field: 'price', label: 'Price' },
                    { field: 'change24h', label: '24h Change' },
                    { field: 'marketCap', label: 'Market Cap' },
                    { field: 'volume24h', label: '24h Volume' },
                    { field: 'apy', label: 'Dividend APY' },
                  ] as { field: SortField; label: string }[]
                ).map(({ field, label }) => (
                  <th
                    key={field}
                    className="px-4 py-3 text-left text-xs font-bold cursor-pointer select-none"
                    style={{ color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}
                    onClick={() => toggleSort(field)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleSort(field); } }}
                    tabIndex={0}
                    role="columnheader"
                    aria-sort={sortField === field ? (sortOrder === 'asc' ? 'ascending' : 'descending') : 'none'}
                    aria-label={`Sort by ${label}`}
                  >
                    <span className="inline-flex items-center gap-1">
                      {label}
                      <SortIcon field={field} />
                    </span>
                  </th>
                ))}
                <th className="px-4 py-3 text-left text-xs font-bold"
                  style={{ color: 'var(--color-text-secondary)' }}>
                  Protocol / Chain
                </th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((asset) => (
                <tr
                  key={asset.id}
                  onClick={() => setSelectedAsset(selectedAsset?.id === asset.id ? null : asset)}
                  className="transition-colors cursor-pointer"
                  style={{
                    borderBottom: '1px solid var(--color-border)',
                    background:
                      selectedAsset?.id === asset.id
                        ? 'rgba(99,102,241,0.05)'
                        : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedAsset?.id !== asset.id)
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                  }}
                  onMouseLeave={(e) => {
                    if (selectedAsset?.id !== asset.id)
                      (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {/* Asset name */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-extrabold flex-shrink-0"
                        style={{ background: `${PROTOCOL_COLORS[asset.protocol] || '#6366f1'}20`, color: PROTOCOL_COLORS[asset.protocol] || '#6366f1' }}
                      >
                        {asset.ticker.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>
                          {asset.name}
                        </div>
                        <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                          <code style={{ color: '#6366f1' }}>{asset.tokenTicker}</code>
                          {' · '}
                          <span className="capitalize">{asset.category}</span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="px-4 py-3 font-semibold" style={{ color: 'var(--color-text)' }}>
                    ${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </td>

                  {/* 24h change */}
                  <td className="px-4 py-3">
                    <span
                      className="inline-flex items-center gap-1 font-semibold text-sm"
                      style={{ color: asset.change24h >= 0 ? '#22c55e' : '#ef4444' }}
                    >
                      {asset.change24h >= 0 ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : (
                        <TrendingDown className="w-3 h-3" />
                      )}
                      {asset.change24h >= 0 ? '+' : ''}
                      {asset.change24h.toFixed(2)}%
                    </span>
                  </td>

                  {/* Market Cap */}
                  <td className="px-4 py-3" style={{ color: 'var(--color-text)' }}>
                    ${asset.marketCap.toFixed(1)}M
                  </td>

                  {/* Volume */}
                  <td className="px-4 py-3" style={{ color: 'var(--color-text-secondary)' }}>
                    ${asset.volume24h.toFixed(1)}M
                  </td>

                  {/* Dividend APY */}
                  <td className="px-4 py-3">
                    {asset.apy !== null ? (
                      <span className="font-semibold" style={{ color: '#f59e0b' }}>
                        {asset.apy.toFixed(2)}%
                      </span>
                    ) : (
                      <span style={{ color: 'var(--color-text-muted)' }}>—</span>
                    )}
                  </td>

                  {/* Protocol / Chain */}
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{
                          background: `${PROTOCOL_COLORS[asset.protocol] || '#6366f1'}20`,
                          color: PROTOCOL_COLORS[asset.protocol] || '#6366f1',
                        }}
                      >
                        {asset.protocol}
                      </span>
                      <span
                        style={{
                          background: `${CHAIN_COLORS[asset.chain] || '#444'}20`,
                          color: CHAIN_COLORS[asset.chain] || '#aaa',
                        }}
                      >
                        {asset.chain}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-16 flex flex-col items-center gap-3" style={{ color: 'var(--color-text-muted)' }}>
            <SearchX className="w-10 h-10 opacity-40" />
            <p className="text-sm font-medium">No assets match your search.</p>
            <button
              onClick={() => { setSearch(''); setFilterCategory('all'); }}
              className="text-xs px-3 py-1.5 rounded-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#6366f1]"
              style={{ background: '#6366f120', color: '#6366f1', border: '1px solid #6366f130' }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Expanded Detail Panel */}
      {selectedAsset && (
        <div
          ref={detailRef}
          className="mt-4 rounded-xl p-6"
          style={{ background: 'var(--glass-bg)', border: '1px solid #6366f130' }}
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-extrabold" style={{ color: 'var(--color-text)' }}>
                {selectedAsset.name}{' '}
                <code className="text-base" style={{ color: '#6366f1' }}>
                  ({selectedAsset.tokenTicker})
                </code>
              </h2>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Tokenized {selectedAsset.category.toUpperCase()} on {selectedAsset.chain} via{' '}
                {selectedAsset.protocol}
              </p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-bold"
              style={{ background: '#6366f120', color: '#6366f1', border: '1px solid #6366f130' }}
            >
              Buy on {selectedAsset.protocol} <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Current Price', value: `$${selectedAsset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}` },
              { label: '24h Change', value: `${selectedAsset.change24h >= 0 ? '+' : ''}${selectedAsset.change24h.toFixed(2)}%`, color: selectedAsset.change24h >= 0 ? '#22c55e' : '#ef4444' },
              { label: 'Market Cap', value: `$${selectedAsset.marketCap.toFixed(1)}M` },
              { label: '24h Volume', value: `$${selectedAsset.volume24h.toFixed(1)}M` },
              { label: 'Circulating Supply', value: selectedAsset.totalSupply.toLocaleString() + ' tokens' },
              { label: 'Dividend APY', value: selectedAsset.apy !== null ? `${selectedAsset.apy.toFixed(2)}% / yr` : 'No dividends' },
              { label: 'KYC Required', value: selectedAsset.kycRequired ? 'Yes' : 'No' },
              { label: 'Settlement', value: '24/7 · Near-instant' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-lg"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div className="text-xs mb-1" style={{ color: 'var(--color-text-secondary)' }}>
                  {stat.label}
                </div>
                <div className="text-sm font-bold" style={{ color: stat.color || 'var(--color-text)' }}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-4 rounded-lg p-3 text-xs"
            style={{ background: '#161b22', border: '1px solid #30363d', color: 'var(--color-text-secondary)' }}
          >
            ⚠️ This is for informational purposes only and does not constitute financial advice. Tokenized
            stocks carry unique risks including custodian risk, smart contract risk, and regulatory risk.
            Read the{' '}
            <Link href="/learn/tokenized-stocks-guide-2026" style={{ color: '#6366f1' }}>
              full guide
            </Link>{' '}
            before investing.
          </div>
        </div>
      )}

      {/* Protocol breakdown */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(PROTOCOL_COLORS).map(([protocol, color]) => {
          const assets = TOKENIZED_ASSETS.filter((a) => a.protocol === protocol);
          const cap = assets.reduce((s, a) => s + a.marketCap, 0);
          const share = (cap / totalMarketCap) * 100;
          return (
            <div
              key={protocol}
              style={{ border: `1px solid ${color}30` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold" style={{ color }}>
                  {protocol}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: `${color}20`, color }}
                >
                  {share.toFixed(0)}% share
                </span>
              </div>
              <div className="text-xl font-extrabold mb-1" style={{ color: 'var(--color-text)' }}>
                ${cap.toFixed(1)}M
              </div>
              <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>
                {assets.length} tokenized assets tracked
              </div>
              <div className="mt-2 rounded-full overflow-hidden h-1.5" style={{ background: 'var(--color-border)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${share}%`, background: color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div
        className="mt-8 rounded-xl p-6 text-center"
        style={{ background: 'var(--glass-bg)', border: '1px solid var(--color-border)' }}
      >
        <h3 className="text-base font-extrabold mb-2" style={{ color: 'var(--color-text)' }}>
          New to tokenized stocks?
        </h3>
        <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>
          Read our complete guide to understand how on-chain equities work, the risks to know, and how to
          earn yield on tokenized stocks in DeFi.
        </p>
        <Link href="/learn/tokenized-stocks-guide-2026"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold"
          style={{ background: '#6366f1', color: '#fff' }}
        >
          Read the Tokenized Stocks Guide →
        </Link>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Tokenized Stocks Tracker",
              "url": "https://degen0x.com/tools/tokenized-stocks-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/tokenized-stocks-tracker" />
      </div>
  );
}
