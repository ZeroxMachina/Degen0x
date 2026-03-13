'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

// ── Types ────────────────────────────────────────────────────────────────────
interface Token {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  category: 'DeFi' | 'L1' | 'L2' | 'Meme' | 'AI' | 'Gaming';
  sparkline: number[];
}

interface WatchlistToken extends Token {
  order: number;
}

interface PriceAlert {
  id: string;
  tokenId: string;
  type: 'above' | 'below' | 'change';
  value: number;
  isPercentage: boolean;
  active: boolean;
  triggeredAt?: string;
}

interface VolumeAlert {
  id: string;
  tokenId: string;
  percentageIncrease: number;
  active: boolean;
  triggeredAt?: string;
}

interface AlertHistoryItem {
  id: string;
  type: 'price' | 'volume';
  tokenSymbol: string;
  message: string;
  triggeredAt: string;
}

// ── Default Tokens Database ──────────────────────────────────────────────────
const DEFAULT_TOKENS: Token[] = [
  {
    id: '1',
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 67450,
    change24h: 2.5,
    change7d: 8.3,
    marketCap: 1324000000000,
    volume24h: 28500000000,
    category: 'L1',
    sparkline: [65000, 65500, 66200, 66800, 67100, 67300, 67450],
  },
  {
    id: '2',
    symbol: 'ETH',
    name: 'Ethereum',
    price: 3680,
    change24h: 1.8,
    change7d: 5.2,
    marketCap: 442000000000,
    volume24h: 15200000000,
    category: 'L1',
    sparkline: [3550, 3580, 3620, 3650, 3665, 3675, 3680],
  },
  {
    id: '3',
    symbol: 'SOL',
    name: 'Solana',
    price: 198.5,
    change24h: 4.2,
    change7d: 12.1,
    marketCap: 86500000000,
    volume24h: 4200000000,
    category: 'L1',
    sparkline: [185, 188, 192, 195, 197, 198, 198.5],
  },
  {
    id: '4',
    symbol: 'UNI',
    name: 'Uniswap',
    price: 18.75,
    change24h: -2.1,
    change7d: -1.5,
    marketCap: 14100000000,
    volume24h: 890000000,
    category: 'DeFi',
    sparkline: [19.2, 19.1, 18.9, 18.8, 18.7, 18.7, 18.75],
  },
  {
    id: '5',
    symbol: 'AAVE',
    name: 'Aave',
    price: 654.32,
    change24h: 1.4,
    change7d: 3.2,
    marketCap: 9500000000,
    volume24h: 480000000,
    category: 'DeFi',
    sparkline: [640, 645, 648, 650, 652, 653, 654.32],
  },
  {
    id: '6',
    symbol: 'MATIC',
    name: 'Polygon',
    price: 0.98,
    change24h: 2.1,
    change7d: 6.8,
    marketCap: 10200000000,
    volume24h: 520000000,
    category: 'L2',
    sparkline: [0.92, 0.93, 0.95, 0.96, 0.97, 0.975, 0.98],
  },
  {
    id: '7',
    symbol: 'ARB',
    name: 'Arbitrum',
    price: 1.42,
    change24h: -1.2,
    change7d: 4.1,
    marketCap: 5800000000,
    volume24h: 380000000,
    category: 'L2',
    sparkline: [1.38, 1.39, 1.40, 1.41, 1.415, 1.42, 1.42],
  },
  {
    id: '8',
    symbol: 'OP',
    name: 'Optimism',
    price: 3.85,
    change24h: 0.8,
    change7d: 2.3,
    marketCap: 2950000000,
    volume24h: 165000000,
    category: 'L2',
    sparkline: [3.75, 3.77, 3.79, 3.81, 3.83, 3.84, 3.85],
  },
  {
    id: '9',
    symbol: 'DOGE',
    name: 'Dogecoin',
    price: 0.52,
    change24h: 6.2,
    change7d: 18.9,
    marketCap: 76000000000,
    volume24h: 8500000000,
    category: 'Meme',
    sparkline: [0.48, 0.49, 0.50, 0.505, 0.51, 0.515, 0.52],
  },
  {
    id: '10',
    symbol: 'PEPE',
    name: 'Pepe',
    price: 0.00000825,
    change24h: 12.4,
    change7d: 35.8,
    marketCap: 3500000000,
    volume24h: 1200000000,
    category: 'Meme',
    sparkline: [0.0000073, 0.0000075, 0.0000078, 0.0000080, 0.0000082, 0.0000082, 0.00000825],
  },
  {
    id: '11',
    symbol: 'SHIB',
    name: 'Shiba Inu',
    price: 0.0000285,
    change24h: 8.5,
    change7d: 25.3,
    marketCap: 12500000000,
    volume24h: 2100000000,
    category: 'Meme',
    sparkline: [0.0000261, 0.0000268, 0.0000273, 0.0000278, 0.0000281, 0.0000283, 0.0000285],
  },
  {
    id: '12',
    symbol: 'LINK',
    name: 'Chainlink',
    price: 29.45,
    change24h: -0.8,
    change7d: 1.2,
    marketCap: 14500000000,
    volume24h: 720000000,
    category: 'DeFi',
    sparkline: [29.8, 29.7, 29.6, 29.55, 29.5, 29.48, 29.45],
  },
  {
    id: '13',
    symbol: 'AI',
    name: 'AI',
    price: 8.75,
    change24h: 15.3,
    change7d: 42.1,
    marketCap: 2100000000,
    volume24h: 850000000,
    category: 'AI',
    sparkline: [7.2, 7.5, 7.8, 8.1, 8.4, 8.6, 8.75],
  },
  {
    id: '14',
    symbol: 'AGIX',
    name: 'SingularityNET',
    price: 0.65,
    change24h: 5.2,
    change7d: 18.5,
    marketCap: 580000000,
    volume24h: 125000000,
    category: 'AI',
    sparkline: [0.60, 0.61, 0.62, 0.63, 0.64, 0.645, 0.65],
  },
  {
    id: '15',
    symbol: 'AXS',
    name: 'Axie Infinity',
    price: 8.42,
    change24h: 3.8,
    change7d: 12.3,
    marketCap: 2850000000,
    volume24h: 195000000,
    category: 'Gaming',
    sparkline: [8.0, 8.1, 8.2, 8.3, 8.35, 8.4, 8.42],
  },
];

// ── Utility Functions ────────────────────────────────────────────────────────
function formatCurrency(num: number): string {
  if (num >= 1000000000000) return `$${(num / 1000000000000).toFixed(2)}T`;
  if (num >= 1000000000) return `$${(num / 1000000000).toFixed(2)}B`;
  if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`;
  return `$${num.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })}`;
}

function formatPrice(num: number): string {
  if (num < 0.00001) return `$${num.toFixed(8)}`;
  if (num < 0.01) return `$${num.toFixed(6)}`;
  if (num < 1) return `$${num.toFixed(4)}`;
  return formatCurrency(num);
}

function formatPercent(num: number): string {
  return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`;
}

function generateMiniChart(sparkline: number[]): string {
  if (sparkline.length < 2) return '';
  const min = Math.min(...sparkline);
  const max = Math.max(...sparkline);
  const range = max - min || 1;
  const width = sparkline.length * 8;
  const height = 40;
  const points = sparkline
    .map((val, i) => {
      const x = i * 8 + 4;
      const y = height - ((val - min) / range) * (height - 8) - 4;
      return `${x},${y}`;
    })
    .join(' ');
  return `<svg viewBox="0 0 ${width} ${height}" class="w-full h-8"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function getCategoryColor(category: string): string {
  switch (category) {
    case 'DeFi':
      return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    case 'L1':
      return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    case 'L2':
      return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
    case 'Meme':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'AI':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Gaming':
      return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
    default:
      return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  }
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function WatchlistSyncPage() {
  const [activeTab, setActiveTab] = useState<'watchlist' | 'alerts' | 'import-export'>('watchlist');
  const [watchlist, setWatchlist] = useState<WatchlistToken[]>([]);
  const [priceAlerts, setPriceAlerts] = useState<PriceAlert[]>([]);
  const [volumeAlerts, setVolumeAlerts] = useState<VolumeAlert[]>([]);
  const [alertHistory, setAlertHistory] = useState<AlertHistoryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState(true);

  // Price Alert Form
  const [alertForm, setAlertForm] = useState({
    tokenId: '',
    type: 'above' as 'above' | 'below' | 'change',
    value: 0,
    isPercentage: false,
  });

  // Volume Alert Form
  const [volumeAlertForm, setVolumeAlertForm] = useState({
    tokenId: '',
    percentageIncrease: 25,
  });

  // Import/Export
  const [importJson, setImportJson] = useState('');
  const [exportUrl, setExportUrl] = useState('');
  const [comparisonList, setComparisonList] = useState<WatchlistToken[]>([]);

  // Initialize from localStorage
  useEffect(() => {
    const savedWatchlist = localStorage.getItem('watchlist_sync_watchlist');
    const savedAlerts = localStorage.getItem('watchlist_sync_price_alerts');
    const savedVolumeAlerts = localStorage.getItem('watchlist_sync_volume_alerts');
    const savedHistory = localStorage.getItem('watchlist_sync_alert_history');

    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    } else {
      const defaultWatchlist = DEFAULT_TOKENS.slice(0, 8).map((token, idx) => ({
        ...token,
        order: idx,
      }));
      setWatchlist(defaultWatchlist);
      localStorage.setItem('watchlist_sync_watchlist', JSON.stringify(defaultWatchlist));
    }

    if (savedAlerts) setPriceAlerts(JSON.parse(savedAlerts));
    if (savedVolumeAlerts) setVolumeAlerts(JSON.parse(savedVolumeAlerts));
    if (savedHistory) setAlertHistory(JSON.parse(savedHistory));

    setIsLoading(false);
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('watchlist_sync_watchlist', JSON.stringify(watchlist));
    }
  }, [watchlist, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('watchlist_sync_price_alerts', JSON.stringify(priceAlerts));
    }
  }, [priceAlerts, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('watchlist_sync_volume_alerts', JSON.stringify(volumeAlerts));
    }
  }, [volumeAlerts, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('watchlist_sync_alert_history', JSON.stringify(alertHistory));
    }
  }, [alertHistory, isLoading]);

  // Handlers
  const handleAddToWatchlist = (token: Token) => {
    if (!watchlist.find((t) => t.id === token.id)) {
      const newToken: WatchlistToken = {
        ...token,
        order: watchlist.length,
      };
      setWatchlist([...watchlist, newToken]);
    }
  };

  const handleRemoveFromWatchlist = (tokenId: string) => {
    setWatchlist(watchlist.filter((t) => t.id !== tokenId));
  };

  const handleReorderWatchlist = (fromIdx: number, toIdx: number) => {
    const newWatchlist = [...watchlist];
    const [removed] = newWatchlist.splice(fromIdx, 1);
    newWatchlist.splice(toIdx, 0, removed);
    setWatchlist(newWatchlist.map((t, idx) => ({ ...t, order: idx })));
  };

  const handleAddPriceAlert = () => {
    if (alertForm.tokenId && alertForm.value > 0) {
      const newAlert: PriceAlert = {
        id: `alert-${Date.now()}`,
        tokenId: alertForm.tokenId,
        type: alertForm.type,
        value: alertForm.value,
        isPercentage: alertForm.isPercentage,
        active: true,
      };
      setPriceAlerts([...priceAlerts, newAlert]);
      setAlertForm({ tokenId: '', type: 'above', value: 0, isPercentage: false });
    }
  };

  const handleDeletePriceAlert = (alertId: string) => {
    setPriceAlerts(priceAlerts.filter((a) => a.id !== alertId));
  };

  const handleTogglePriceAlert = (alertId: string) => {
    setPriceAlerts(priceAlerts.map((a) => (a.id === alertId ? { ...a, active: !a.active } : a)));
  };

  const handleAddVolumeAlert = () => {
    if (volumeAlertForm.tokenId && volumeAlertForm.percentageIncrease > 0) {
      const newAlert: VolumeAlert = {
        id: `vol-alert-${Date.now()}`,
        tokenId: volumeAlertForm.tokenId,
        percentageIncrease: volumeAlertForm.percentageIncrease,
        active: true,
      };
      setVolumeAlerts([...volumeAlerts, newAlert]);
      setVolumeAlertForm({ tokenId: '', percentageIncrease: 25 });
    }
  };

  const handleDeleteVolumeAlert = (alertId: string) => {
    setVolumeAlerts(volumeAlerts.filter((a) => a.id !== alertId));
  };

  const handleToggleVolumeAlert = (alertId: string) => {
    setVolumeAlerts(volumeAlerts.map((a) => (a.id === alertId ? { ...a, active: !a.active } : a)));
  };

  const handleSimulateAlert = (tokenId: string) => {
    const token = DEFAULT_TOKENS.find((t) => t.id === tokenId);
    if (token) {
      const newHistoryItem: AlertHistoryItem = {
        id: `history-${Date.now()}`,
        type: Math.random() > 0.5 ? 'price' : 'volume',
        tokenSymbol: token.symbol,
        message: `Alert triggered for ${token.symbol} at $${token.price}`,
        triggeredAt: new Date().toISOString(),
      };
      setAlertHistory([newHistoryItem, ...alertHistory]);
    }
  };

  const handleExportWatchlist = () => {
    const exportData = {
      watchlist: watchlist,
      exportedAt: new Date().toISOString(),
      version: '1.0',
    };
    const json = JSON.stringify(exportData, null, 2);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(json));
    element.setAttribute('download', `watchlist-${new Date().toISOString().split('T')[0]}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleImportWatchlist = () => {
    try {
      const imported = JSON.parse(importJson);
      if (imported.watchlist && Array.isArray(imported.watchlist)) {
        setWatchlist(imported.watchlist);
        setImportJson('');
      }
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  const handleGenerateShareUrl = () => {
    const data = btoa(JSON.stringify(watchlist));
    const url = `${typeof window !== 'undefined' ? window.location.origin : SITE_URL}/tools/watchlist-sync?data=${data}`;
    setExportUrl(url);
  };

  const handleCopyShareUrl = () => {
    if (exportUrl && typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(exportUrl);
      alert('Share URL copied to clipboard!');
    }
  };

  const handleCompareWatchlist = () => {
    try {
      const imported = JSON.parse(importJson);
      if (imported.watchlist && Array.isArray(imported.watchlist)) {
        setComparisonList(imported.watchlist);
      }
    } catch (error) {
      alert('Invalid JSON format for comparison');
    }
  };

  const handleBackupWatchlist = () => {
    const backup = {
      watchlist: watchlist,
      priceAlerts: priceAlerts,
      volumeAlerts: volumeAlerts,
      alertHistory: alertHistory,
      backupAt: new Date().toISOString(),
      version: '1.0',
    };
    localStorage.setItem('watchlist_sync_backup', JSON.stringify(backup));
    alert('Backup created successfully!');
  };

  const handleRestoreWatchlist = () => {
    const backup = localStorage.getItem('watchlist_sync_backup');
    if (backup) {
      try {
        const data = JSON.parse(backup);
        setWatchlist(data.watchlist);
        setPriceAlerts(data.priceAlerts);
        setVolumeAlerts(data.volumeAlerts);
        setAlertHistory(data.alertHistory);
        alert('Watchlist restored successfully!');
      } catch (error) {
        alert('Error restoring backup');
      }
    } else {
      alert('No backup found');
    }
  };

  // Memoized calculations
  const tokenMap = useMemo(() => {
    const map = new Map<string, Token>();
    DEFAULT_TOKENS.forEach((token) => map.set(token.id, token));
    return map;
  }, []);

  const filteredTokens = useMemo(() => {
    return DEFAULT_TOKENS.filter((token) => {
      const matchesSearch =
        token.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
        token.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || token.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const watchlistValue = useMemo(() => {
    return watchlist.reduce((sum, token) => sum + token.marketCap, 0);
  }, [watchlist]);

  const activeAlerts = useMemo(() => {
    const priceCount = priceAlerts.filter((a) => a.active).length;
    const volumeCount = volumeAlerts.filter((a) => a.active).length;
    return priceCount + volumeCount;
  }, [priceAlerts, volumeAlerts]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-[var(--color-text-secondary)]">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Watchlist Sync',
            description: 'Synchronize and manage cryptocurrency watchlists with advanced alerts and import/export features',
            url: `${SITE_URL}/tools/watchlist-sync`,
            applicationCategory: 'FinanceApplication',
          }),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Watchlist Sync', href: '/tools/watchlist-sync' },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-3">Watchlist Sync</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Manage your cryptocurrency watchlist with advanced features. Create price alerts, sync across devices, and export your data. All data is stored locally in your browser.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
            <div className="text-xs text-[var(--color-text-secondary)] mb-1">Watched Tokens</div>
            <div className="text-3xl font-bold text-[var(--color-text)]">{watchlist.length}</div>
          </div>
          <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
            <div className="text-xs text-[var(--color-text-secondary)] mb-1">Total Market Cap</div>
            <div className="text-3xl font-bold text-[var(--color-text)]">{formatCurrency(watchlistValue)}</div>
          </div>
          <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
            <div className="text-xs text-[var(--color-text-secondary)] mb-1">Active Alerts</div>
            <div className="text-3xl font-bold text-amber-400">{activeAlerts}</div>
          </div>
          <div className="glass rounded-xl p-4 border border-[var(--color-border)]">
            <div className="text-xs text-[var(--color-text-secondary)] mb-1">Alert History</div>
            <div className="text-3xl font-bold text-cyan-400">{alertHistory.length}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-[var(--color-border)]">
          {(['watchlist', 'alerts', 'import-export'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium text-sm transition-colors border-b-2 ${
                activeTab === tab
                  ? 'text-[var(--color-primary)] border-[var(--color-primary)]'
                  : 'text-[var(--color-text-secondary)] border-transparent hover:text-[var(--color-text)]'
              }`}
            >
              {tab === 'watchlist' && '📋 My Watchlist'}
              {tab === 'alerts' && '🔔 Alerts & Triggers'}
              {tab === 'import-export' && '⚙️ Import/Export'}
            </button>
          ))}
        </div>

        {/* Tab: My Watchlist */}
        {activeTab === 'watchlist' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">Quick Add</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Search tokens (BTC, Ethereum, etc.)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)]"
                />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option>All</option>
                  <option>DeFi</option>
                  <option>L1</option>
                  <option>L2</option>
                  <option>Meme</option>
                  <option>AI</option>
                  <option>Gaming</option>
                </select>
              </div>
            </div>

            {/* Watchlist Cards */}
            {watchlist.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">My Watchlist ({watchlist.length})</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {watchlist.map((token, idx) => (
                    <div key={token.id} className="glass rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-all group">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-[var(--color-text)]">{token.name}</h3>
                          <p className="text-sm text-[var(--color-text-secondary)]">{token.symbol}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(token.category)}`}>
                          {token.category}
                        </span>
                      </div>

                      <div className="mb-3">
                        <div className="text-2xl font-bold text-[var(--color-text)]">{formatPrice(token.price)}</div>
                        <div className="flex gap-2 mt-1">
                          <span className={`text-sm font-semibold ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            24h: {formatPercent(token.change24h)}
                          </span>
                          <span className={`text-sm font-semibold ${token.change7d >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            7d: {formatPercent(token.change7d)}
                          </span>
                        </div>
                      </div>

                      {/* Sparkline Chart */}
                      <div className="mb-3 text-cyan-400 h-8">
                        <svg viewBox={`0 0 ${token.sparkline.length * 8} 40`} className="w-full h-8">
                          {token.sparkline.length >= 2 && (() => {
                            const min = Math.min(...token.sparkline);
                            const max = Math.max(...token.sparkline);
                            const range = max - min || 1;
                            const points = token.sparkline
                              .map((val, i) => {
                                const x = i * 8 + 4;
                                const y = 40 - ((val - min) / range) * 32 - 4;
                                return `${x},${y}`;
                              })
                              .join(' ');
                            return (
                              <polyline
                                points={points}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            );
                          })()}
                        </svg>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-[var(--color-bg)]/50 rounded p-2">
                          <div className="text-[var(--color-text-secondary)] mb-1">Market Cap</div>
                          <div className="font-bold text-[var(--color-text)]">{formatCurrency(token.marketCap)}</div>
                        </div>
                        <div className="bg-[var(--color-bg)]/50 rounded p-2">
                          <div className="text-[var(--color-text-secondary)] mb-1">24h Volume</div>
                          <div className="font-bold text-[var(--color-text)]">{formatCurrency(token.volume24h)}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {idx > 0 && (
                          <button
                            onClick={() => handleReorderWatchlist(idx, idx - 1)}
                            className="flex-1 px-2 py-2 rounded text-xs font-medium bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 transition-colors"
                          >
                            ↑
                          </button>
                        )}
                        {idx < watchlist.length - 1 && (
                          <button
                            onClick={() => handleReorderWatchlist(idx, idx + 1)}
                            className="flex-1 px-2 py-2 rounded text-xs font-medium bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 transition-colors"
                          >
                            ↓
                          </button>
                        )}
                        <button
                          onClick={() => handleRemoveFromWatchlist(token.id)}
                          className="flex-1 px-2 py-2 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Tokens */}
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Add More Tokens</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTokens.slice(0, 12).map((token) => {
                  const isAdded = watchlist.some((t) => t.id === token.id);
                  return (
                    <div
                      key={token.id}
                      className={`glass rounded-lg p-4 border ${
                        isAdded ? 'border-[var(--color-primary)]/50' : 'border-[var(--color-border)]'
                      } hover:border-[var(--color-primary)] transition-all cursor-pointer`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-[var(--color-text)]">{token.symbol}</h3>
                          <p className="text-xs text-[var(--color-text-secondary)]">{token.name}</p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${getCategoryColor(token.category)}`}>
                          {token.category}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[var(--color-text)] mb-2">{formatPrice(token.price)}</div>
                      <div className={`text-sm font-semibold mb-3 ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {formatPercent(token.change24h)}
                      </div>
                      <button
                        onClick={() => (isAdded ? handleRemoveFromWatchlist(token.id) : handleAddToWatchlist(token))}
                        className={`w-full px-3 py-2 rounded text-xs font-medium transition-colors ${
                          isAdded
                            ? 'bg-blue-500/20 text-blue-400 hover:bg-blue-500/30'
                            : 'bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30'
                        }`}
                      >
                        {isAdded ? '✓ Added' : '+ Add'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Alerts & Triggers */}
        {activeTab === 'alerts' && (
          <div className="space-y-6">
            {/* Price Alert Form */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Set Price Alert</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <select
                  value={alertForm.tokenId}
                  onChange={(e) => setAlertForm({ ...alertForm, tokenId: e.target.value })}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="">Select Token</option>
                  {DEFAULT_TOKENS.map((token) => (
                    <option key={token.id} value={token.id}>
                      {token.symbol} - {token.name}
                    </option>
                  ))}
                </select>
                <select
                  value={alertForm.type}
                  onChange={(e) => setAlertForm({ ...alertForm, type: e.target.value as any })}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="above">Price Above</option>
                  <option value="below">Price Below</option>
                  <option value="change">% Change</option>
                </select>
                <input
                  type="number"
                  placeholder="Value"
                  value={alertForm.value}
                  onChange={(e) => setAlertForm({ ...alertForm, value: parseFloat(e.target.value) || 0 })}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)]"
                />
                <button
                  onClick={() => setAlertForm({ ...alertForm, isPercentage: !alertForm.isPercentage })}
                  className={`px-3 py-2 rounded text-xs font-medium transition-colors ${
                    alertForm.isPercentage
                      ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                      : 'bg-[var(--color-border)] text-[var(--color-text-secondary)]'
                  }`}
                >
                  {alertForm.isPercentage ? '%' : '$'}
                </button>
                <button
                  onClick={handleAddPriceAlert}
                  className="px-4 py-2 rounded font-medium bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors text-sm"
                >
                  + Add Alert
                </button>
              </div>
            </div>

            {/* Volume Alert Form */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Set Volume Spike Alert</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  value={volumeAlertForm.tokenId}
                  onChange={(e) => setVolumeAlertForm({ ...volumeAlertForm, tokenId: e.target.value })}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="">Select Token</option>
                  {DEFAULT_TOKENS.map((token) => (
                    <option key={token.id} value={token.id}>
                      {token.symbol}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="% increase"
                  value={volumeAlertForm.percentageIncrease}
                  onChange={(e) => setVolumeAlertForm({ ...volumeAlertForm, percentageIncrease: parseFloat(e.target.value) || 0 })}
                  className="px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)]"
                />
                <div className="flex items-center text-sm text-[var(--color-text-secondary)]">Volume increase alert</div>
                <button
                  onClick={handleAddVolumeAlert}
                  className="px-4 py-2 rounded font-medium bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors text-sm"
                >
                  + Add Alert
                </button>
              </div>
            </div>

            {/* Active Alerts */}
            {priceAlerts.length > 0 && (
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Price Alerts ({priceAlerts.length})</h2>
                <div className="space-y-2">
                  {priceAlerts.map((alert) => {
                    const token = tokenMap.get(alert.tokenId);
                    return (
                      <div key={alert.id} className="flex items-center justify-between p-3 rounded border border-[var(--color-border)] bg-[var(--color-bg)]/50">
                        <div className="flex-1">
                          <div className="font-medium text-[var(--color-text)]">
                            {token?.symbol}: {alert.type === 'above' ? 'Price Above' : alert.type === 'below' ? 'Price Below' : 'Change'}
                          </div>
                          <div className="text-sm text-[var(--color-text-secondary)]">
                            Trigger: {alert.value}
                            {alert.isPercentage ? '%' : '$'}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleTogglePriceAlert(alert.id)}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                              alert.active
                                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                            }`}
                          >
                            {alert.active ? 'Active' : 'Paused'}
                          </button>
                          <button
                            onClick={() => handleSimulateAlert(alert.tokenId)}
                            className="px-3 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                          >
                            Test
                          </button>
                          <button
                            onClick={() => handleDeletePriceAlert(alert.id)}
                            className="px-3 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Volume Alerts */}
            {volumeAlerts.length > 0 && (
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Volume Alerts ({volumeAlerts.length})</h2>
                <div className="space-y-2">
                  {volumeAlerts.map((alert) => {
                    const token = tokenMap.get(alert.tokenId);
                    return (
                      <div key={alert.id} className="flex items-center justify-between p-3 rounded border border-[var(--color-border)] bg-[var(--color-bg)]/50">
                        <div className="flex-1">
                          <div className="font-medium text-[var(--color-text)]">{token?.symbol}: Volume Spike</div>
                          <div className="text-sm text-[var(--color-text-secondary)]">Trigger: +{alert.percentageIncrease}%</div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleToggleVolumeAlert(alert.id)}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                              alert.active
                                ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                                : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                            }`}
                          >
                            {alert.active ? 'Active' : 'Paused'}
                          </button>
                          <button
                            onClick={() => handleSimulateAlert(alert.tokenId)}
                            className="px-3 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                          >
                            Test
                          </button>
                          <button
                            onClick={() => handleDeleteVolumeAlert(alert.id)}
                            className="px-3 py-1 rounded text-xs font-medium bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Alert History */}
            {alertHistory.length > 0 && (
              <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Alert History</h2>
                <div className="space-y-2">
                  {alertHistory.slice(0, 10).map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded border border-[var(--color-border)] bg-[var(--color-bg)]/50">
                      <div className="flex-1">
                        <div className="font-medium text-[var(--color-text)]">{item.message}</div>
                        <div className="text-xs text-[var(--color-text-secondary)]">
                          {new Date(item.triggeredAt).toLocaleString()}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        item.type === 'price'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {item.type === 'price' ? 'Price' : 'Volume'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab: Import/Export */}
        {activeTab === 'import-export' && (
          <div className="space-y-6">
            {/* Export */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Export Watchlist</h2>
              <div className="space-y-4">
                <button
                  onClick={handleExportWatchlist}
                  className="w-full px-4 py-3 rounded font-medium bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-colors"
                >
                  ⬇ Download as JSON
                </button>
                <button
                  onClick={handleGenerateShareUrl}
                  className="w-full px-4 py-3 rounded font-medium bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
                >
                  🔗 Generate Share URL
                </button>
                {exportUrl && (
                  <div className="p-4 rounded bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-2">Share this link:</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={exportUrl}
                        readOnly
                        className="flex-1 px-3 py-2 rounded text-xs border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)]"
                      />
                      <button
                        onClick={handleCopyShareUrl}
                        className="px-4 py-2 rounded font-medium bg-[var(--color-primary)]/20 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/30 transition-colors text-sm"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Import */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Import Watchlist</h2>
              <div className="space-y-4">
                <textarea
                  value={importJson}
                  onChange={(e) => setImportJson(e.target.value)}
                  placeholder='Paste your JSON here...'
                  className="w-full px-3 py-2 rounded border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] h-32 font-mono text-sm"
                />
                <button
                  onClick={handleImportWatchlist}
                  className="w-full px-4 py-3 rounded font-medium bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors"
                >
                  ⬆ Import from JSON
                </button>
              </div>
            </div>

            {/* Comparison */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Compare Watchlists</h2>
              <button
                onClick={handleCompareWatchlist}
                disabled={!importJson}
                className="w-full px-4 py-3 rounded font-medium bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Compare with Imported List
              </button>
              {comparisonList.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold text-[var(--color-text)] mb-2">Comparison Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-2">Current Watchlist</p>
                      <div className="space-y-1">
                        {watchlist.map((token) => (
                          <div key={token.id} className="text-sm text-[var(--color-text)]">
                            {token.symbol}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-[var(--color-text-secondary)] mb-2">Imported Watchlist</p>
                      <div className="space-y-1">
                        {comparisonList.map((token) => (
                          <div key={token.id} className="text-sm text-[var(--color-text)]">
                            {token.symbol}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Backup/Restore */}
            <div className="glass rounded-xl p-6 border border-[var(--color-border)]">
              <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">Backup & Restore</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleBackupWatchlist}
                  className="px-4 py-3 rounded font-medium bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors"
                >
                  💾 Backup Everything
                </button>
                <button
                  onClick={handleRestoreWatchlist}
                  className="px-4 py-3 rounded font-medium bg-teal-500/20 text-teal-400 hover:bg-teal-500/30 transition-colors"
                >
                  📂 Restore Backup
                </button>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-3">
                Backup and restore your complete watchlist data including all alerts and history.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]/50">
          <h3 className="font-bold text-[var(--color-text)] mb-3">About Watchlist Sync</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
            <li>
              <strong className="text-[var(--color-text)]">Full Sync:</strong> Manage your cryptocurrency watchlist with advanced price and volume alerts.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Local Storage:</strong> All data is saved locally in your browser. No data is transmitted to external servers.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Rich Cards:</strong> View token prices, percentage changes, market caps, volumes, and sparkline charts.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Smart Alerts:</strong> Set price alerts (above/below/change %) and volume spike alerts with history tracking.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Import/Export:</strong> Export as JSON, generate shareable links, compare watchlists, and backup everything.
            </li>
            <li>
              <strong className="text-[var(--color-text)]">Disclaimer:</strong> This tool is for educational purposes. Price data is simulated. Always verify with official sources.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
