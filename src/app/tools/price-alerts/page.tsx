'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface Coin {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  change24h: number;
  icon: string;
  color: string;
}

interface PriceAlert {
  id: string;
  coinId: string;
  coinSymbol: string;
  coinName: string;
  currentPrice: number;
  targetPrice: number;
  direction: 'above' | 'below';
  type: 'one-time' | 'recurring';
  enabled: boolean;
  note?: string;
  createdAt: Date;
}

interface TriggeredAlert {
  id: string;
  alertId: string;
  coinSymbol: string;
  coinName: string;
  targetPrice: number;
  triggeredPrice: number;
  triggeredAt: Date;
  actedOn: boolean;
}

// ── Top 20 Cryptocurrencies ────────────────────────────────────────────────
const TOP_20_COINS: Coin[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', currentPrice: 67450, change24h: 2.3, icon: '₿', color: '#F7931A' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', currentPrice: 3680, change24h: 1.8, icon: 'Ξ', color: '#627EEA' },
  { id: 'solana', symbol: 'SOL', name: 'Solana', currentPrice: 198, change24h: 5.2, icon: '◎', color: '#9945FF' },
  { id: 'bnb', symbol: 'BNB', name: 'BNB', currentPrice: 612, change24h: 3.1, icon: '⬢', color: '#F0B90B' },
  { id: 'xrp', symbol: 'XRP', name: 'XRP', currentPrice: 2.85, change24h: -1.2, icon: '✕', color: '#23292F' },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', currentPrice: 1.18, change24h: 2.5, icon: '◆', color: '#0033AD' },
  { id: 'solana-clone', symbol: 'DOGE', name: 'Dogecoin', currentPrice: 0.48, change24h: 4.7, icon: '🐕', color: '#BA9F33' },
  { id: 'polkadot', symbol: 'DOT', name: 'Polkadot', currentPrice: 9.15, change24h: 1.9, icon: '●', color: '#E6007A' },
  { id: 'polygon', symbol: 'MATIC', name: 'Polygon', currentPrice: 0.92, change24h: 3.4, icon: '◆', color: '#8247E5' },
  { id: 'avalanche', symbol: 'AVAX', name: 'Avalanche', currentPrice: 45.20, change24h: 2.8, icon: '▲', color: '#E84142' },
  { id: 'chainlink', symbol: 'LINK', name: 'Chainlink', currentPrice: 28.40, change24h: 1.5, icon: '⛓', color: '#375BD2' },
  { id: 'litecoin', symbol: 'LTC', name: 'Litecoin', currentPrice: 185, change24h: 2.1, icon: 'Ł', color: '#345D9D' },
  { id: 'uniswap', symbol: 'UNI', name: 'Uniswap', currentPrice: 12.45, change24h: -0.8, icon: '∞', color: '#FF007A' },
  { id: 'cosmos', symbol: 'ATOM', name: 'Cosmos', currentPrice: 14.80, change24h: 3.2, icon: '●', color: '#16F1A0' },
  { id: 'tron', symbol: 'TRX', name: 'TRON', currentPrice: 0.318, change24h: 2.9, icon: '▼', color: '#EB0029' },
  { id: 'monero', symbol: 'XMR', name: 'Monero', currentPrice: 182, change24h: 4.1, icon: '◆', color: '#FF6600' },
  { id: 'iota', symbol: 'IOTA', name: 'IOTA', currentPrice: 1.25, change24h: -2.3, icon: '◈', color: '#0066CC' },
  { id: 'vechain', symbol: 'VET', name: 'VeChain', currentPrice: 0.089, change24h: 5.6, icon: 'V', color: '#3D91CE' },
  { id: 'filecoin', symbol: 'FIL', name: 'Filecoin', currentPrice: 18.50, change24h: 1.4, icon: '◈', color: '#0090FF' },
  { id: 'zcash', symbol: 'ZEC', name: 'Zcash', currentPrice: 52.30, change24h: 3.7, icon: '◆', color: '#FF8C00' },
];

// ── Demo Alerts Data ────────────────────────────────────────────────────────
const DEMO_ALERTS: PriceAlert[] = [
  {
    id: 'alert-1',
    coinId: 'bitcoin',
    coinSymbol: 'BTC',
    coinName: 'Bitcoin',
    currentPrice: 67450,
    targetPrice: 70000,
    direction: 'above',
    type: 'one-time',
    enabled: true,
    note: 'Enter position',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'alert-2',
    coinId: 'ethereum',
    coinSymbol: 'ETH',
    coinName: 'Ethereum',
    currentPrice: 3680,
    targetPrice: 3000,
    direction: 'below',
    type: 'recurring',
    enabled: true,
    note: 'DCA opportunity',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'alert-3',
    coinId: 'solana',
    coinSymbol: 'SOL',
    coinName: 'Solana',
    currentPrice: 198,
    targetPrice: 250,
    direction: 'above',
    type: 'one-time',
    enabled: true,
    note: 'Bull breakout',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'alert-4',
    coinId: 'bnb',
    coinSymbol: 'BNB',
    coinName: 'BNB',
    currentPrice: 612,
    targetPrice: 500,
    direction: 'below',
    type: 'one-time',
    enabled: true,
    note: 'Support level',
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'alert-5',
    coinId: 'cardano',
    coinSymbol: 'ADA',
    coinName: 'Cardano',
    currentPrice: 1.18,
    targetPrice: 2.0,
    direction: 'above',
    type: 'recurring',
    enabled: true,
    note: 'Long-term target',
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'alert-6',
    coinId: 'solana-clone',
    coinSymbol: 'DOGE',
    coinName: 'Dogecoin',
    currentPrice: 0.48,
    targetPrice: 1.0,
    direction: 'above',
    type: 'recurring',
    enabled: false,
    note: 'Meme coin pump target',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  },
];

// ── Demo Triggered Alerts ──────────────────────────────────────────────────
const DEMO_HISTORY: TriggeredAlert[] = [
  {
    id: 'history-1',
    alertId: 'old-alert-1',
    coinSymbol: 'BTC',
    coinName: 'Bitcoin',
    targetPrice: 65000,
    triggeredPrice: 65150,
    triggeredAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    actedOn: true,
  },
  {
    id: 'history-2',
    alertId: 'old-alert-2',
    coinSymbol: 'ETH',
    coinName: 'Ethereum',
    targetPrice: 3500,
    triggeredPrice: 3495,
    triggeredAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    actedOn: false,
  },
  {
    id: 'history-3',
    alertId: 'old-alert-3',
    coinSymbol: 'SOL',
    coinName: 'Solana',
    targetPrice: 180,
    triggeredPrice: 179.50,
    triggeredAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    actedOn: true,
  },
];

// ── Helper Functions ──────────────────────────────────────────────────────
function getDistancePercentage(current: number, target: number): number {
  return Math.abs(((target - current) / current) * 100);
}

function getAlertColor(current: number, target: number): string {
  const distance = getDistancePercentage(current, target);
  if (distance < 5) return 'text-green-500'; // Close to trigger
  if (distance < 15) return 'text-yellow-500'; // Moderate
  return 'text-gray-500'; // Far away
}

function getBgAlertColor(current: number, target: number): string {
  const distance = getDistancePercentage(current, target);
  if (distance < 5) return 'bg-green-500/10 border-green-500/20';
  if (distance < 15) return 'bg-yellow-500/10 border-yellow-500/20';
  return 'bg-transparent';
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function PriceAlertsPage() {
  const [selectedCoin, setSelectedCoin] = useState<Coin>(TOP_20_COINS[0]);
  const [alerts, setAlerts] = useState<PriceAlert[]>(DEMO_ALERTS);
  const [history, setHistory] = useState<TriggeredAlert[]>(DEMO_HISTORY);

  // New alert form state
  const [targetPrice, setTargetPrice] = useState<string>('');
  const [direction, setDirection] = useState<'above' | 'below'>('above');
  const [alertType, setAlertType] = useState<'one-time' | 'recurring'>('one-time');
  const [note, setNote] = useState<string>('');

  // Create new alert
  const handleCreateAlert = useCallback(() => {
    if (!targetPrice || isNaN(parseFloat(targetPrice))) {
      alert('Please enter a valid target price');
      return;
    }

    const newAlert: PriceAlert = {
      id: `alert-${Date.now()}`,
      coinId: selectedCoin.id,
      coinSymbol: selectedCoin.symbol,
      coinName: selectedCoin.name,
      currentPrice: selectedCoin.currentPrice,
      targetPrice: parseFloat(targetPrice),
      direction,
      type: alertType,
      enabled: true,
      note: note || undefined,
      createdAt: new Date(),
    };

    setAlerts([newAlert, ...alerts]);
    setTargetPrice('');
    setNote('');
    setDirection('above');
    setAlertType('one-time');
  }, [selectedCoin, targetPrice, direction, alertType, note, alerts]);

  // Toggle alert enabled/disabled
  const handleToggleAlert = useCallback((alertId: string) => {
    setAlerts(alerts.map(a => a.id === alertId ? { ...a, enabled: !a.enabled } : a));
  }, [alerts]);

  // Delete alert
  const handleDeleteAlert = useCallback((alertId: string) => {
    setAlerts(alerts.filter(a => a.id !== alertId));
  }, [alerts]);

  // Quick template handlers
  const handleQuickAlert = useCallback((coin: Coin, target: number, direction: 'above' | 'below') => {
    setSelectedCoin(coin);
    setTargetPrice(target.toString());
    setDirection(direction);
  }, []);

  // Calculate stats
  const activeAlertsCount = useMemo(() => alerts.filter(a => a.enabled).length, [alerts]);
  const closeToTrigger = useMemo(
    () => alerts.filter(a => a.enabled && getDistancePercentage(a.currentPrice, a.targetPrice) < 5).length,
    [alerts]
  );

  return (
    <div className="w-full">
      <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Price Alerts' }]} />

      <div className="px-4 md:px-8 lg:px-12 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mb-4">
            Price Alerts
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Monitor cryptocurrency prices and get notified when they hit your target levels.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="glass p-6 rounded-2xl border border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Active Alerts</p>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{activeAlertsCount}</p>
              </div>
              <div className="text-4xl">🔔</div>
            </div>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Close to Trigger</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">{closeToTrigger}</p>
              </div>
              <div className="text-4xl">🎯</div>
            </div>
          </div>
          <div className="glass p-6 rounded-2xl border border-white/20 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Triggered Today</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{history.filter(h => {
                  const today = new Date();
                  return h.triggeredAt.toDateString() === today.toDateString();
                }).length}</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Alert Creation + Quick Templates */}
          <div className="lg:col-span-1 space-y-6">
            {/* Alert Creation Panel */}
            <div className="glass p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Create Alert</h2>

              {/* Coin Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Coin
                </label>
                <select
                  value={selectedCoin.id}
                  onChange={(e) => {
                    const coin = TOP_20_COINS.find(c => c.id === e.target.value);
                    if (coin) setSelectedCoin(coin);
                  }}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {TOP_20_COINS.map(coin => (
                    <option key={coin.id} value={coin.id}>
                      {coin.symbol} - {coin.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Current Price Display */}
              <div className="glass-subtle p-4 rounded-xl border border-white/20 dark:border-white/10">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Price</p>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${selectedCoin.currentPrice.toFixed(2)}
                  </p>
                  <span className={`text-sm font-semibold ${selectedCoin.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {selectedCoin.change24h >= 0 ? '+' : ''}{selectedCoin.change24h.toFixed(1)}%
                  </span>
                </div>
              </div>

              {/* Target Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Target Price
                </label>
                <input
                  type="number"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder={`e.g., ${(selectedCoin.currentPrice * 1.1).toFixed(2)}`}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-300/50 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Direction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Alert When Price
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setDirection('above')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                      direction === 'above'
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-white/30 dark:bg-white/5 text-gray-900 dark:text-gray-300 border border-white/20'
                    }`}
                  >
                    ⬆ Above
                  </button>
                  <button
                    onClick={() => setDirection('below')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                      direction === 'below'
                    }`}
                  >
                    ⬇ Below
                  </button>
                </div>
              </div>

              {/* Alert Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Alert Type
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setAlertType('one-time')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                      alertType === 'one-time'
                    }`}
                  >
                    Once
                  </button>
                  <button
                    onClick={() => setAlertType('recurring')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                      alertType === 'recurring'
                    }`}
                  >
                    Recurring
                  </button>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Note (optional)
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g., 'Buy here', 'Resistance level'"
                />
              </div>

              {/* Create Button */}
              <button
                onClick={handleCreateAlert}
                className="w-full affiliate-cta py-3 rounded-lg font-semibold text-white transition-all"
              >
                Create Alert
              </button>
            </div>

            {/* Quick Alert Templates */}
            <div className="glass p-8 rounded-2xl border border-white/20 dark:border-white/10 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Templates</h3>

              <button
                onClick={() => handleQuickAlert(TOP_20_COINS[0], 100000, 'above')}
                className="w-full glass-hover p-4 rounded-lg text-left border border-white/20 dark:border-white/10 transition-all"
              >
                <p className="font-semibold text-gray-900 dark:text-white">BTC at $100K</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bitcoin milestone</p>
              </button>

              <button
                onClick={() => handleQuickAlert(TOP_20_COINS[1], 3000, 'below')}
              >
                <p className="font-semibold text-gray-900 dark:text-white">ETH below $3K</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dip buying opportunity</p>
              </button>

              <button
                onClick={() => handleQuickAlert(TOP_20_COINS[2], 250, 'above')}
              >
                <p className="font-semibold text-gray-900 dark:text-white">SOL pumps 25%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">From current $198</p>
              </button>
            </div>
          </div>

          {/* Right Column: Active Alerts + History */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Alerts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Active Alerts</h2>
              <div className="space-y-4">
                {alerts.length === 0 ? (
                  <div className="glass p-12 rounded-2xl border border-white/20 dark:border-white/10 text-center">
                    <p className="text-gray-600 dark:text-gray-400">No alerts yet. Create one to get started!</p>
                  </div>
                ) : (
                  alerts.map(alert => {
                    const distance = getDistancePercentage(alert.currentPrice, alert.targetPrice);
                    const isAbove = alert.direction === 'above';
                    const triggered = isAbove
                      ? alert.currentPrice >= alert.targetPrice
                      : alert.currentPrice <= alert.targetPrice;

                    return (
                      <div
                        key={alert.id}
                        className={`glass p-5 rounded-xl border transition-all ${
                          !alert.enabled
                            ? 'opacity-60 bg-gray-500/5'
                            : getBgAlertColor(alert.currentPrice, alert.targetPrice)
                        } border-white/20 dark:border-white/10`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{TOP_20_COINS.find(c => c.id === alert.coinId)?.icon || '💰'}</span>
                              <div>
                                <h4 className="font-bold text-gray-900 dark:text-white">
                                  {alert.coinSymbol} - {alert.coinName}
                                </h4>
                                <p className="text-xs text-gray-500 dark:text-gray-500">
                                  {alert.type === 'one-time' ? '⏱ One-time' : '🔄 Recurring'} • Created {Math.floor((Date.now() - alert.createdAt.getTime()) / (1000 * 60 * 60 * 24))}d ago
                                </p>
                              </div>
                            </div>

                            <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                              <div>
                                <p className="text-gray-600 dark:text-gray-400 text-xs">Current</p>
                                <p className="font-semibold text-gray-900 dark:text-white">${alert.currentPrice.toFixed(2)}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-gray-600 dark:text-gray-400 text-xs">Direction</p>
                                <p className={`font-bold text-lg ${isAbove ? 'text-green-500' : 'text-red-500'}`}>
                                  {isAbove ? '⬆' : '⬇'}
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-600 dark:text-gray-400 text-xs">Target</p>
                                <p className="font-semibold text-gray-900 dark:text-white">${alert.targetPrice.toFixed(2)}</p>
                              </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-3">
                              <div className="flex justify-between items-center mb-1">
                                <p className={`text-xs font-medium ${getAlertColor(alert.currentPrice, alert.targetPrice)}`}>
                                  {distance.toFixed(1)}% away {triggered && '✓ TRIGGERED'}
                                </p>
                              </div>
                              <div className="w-full h-2 bg-gray-300/30 rounded-full overflow-hidden">
                                <div
                                  className={`h-full transition-all ${
                                    distance < 5 ? 'bg-green-500' : distance < 15 ? 'bg-yellow-500' : 'bg-blue-500'
                                  }`}
                                  style={{ width: `${Math.min(100 - distance, 100)}%` }}
                                />
                              </div>
                            </div>

                            {alert.note && (
                              <p className="mt-2 text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-500/10 px-2 py-1 rounded">
                                📝 {alert.note}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col gap-2">
                            <button
                              onClick={() => handleToggleAlert(alert.id)}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                alert.enabled
                                  ? 'bg-green-500/20 text-green-700 dark:text-green-400 border border-green-500/30'
                                  : 'bg-gray-500/20 text-gray-700 dark:text-gray-400 border border-gray-500/30'
                              }`}
                            >
                              {alert.enabled ? '✓ On' : '✕ Off'}
                            </button>
                            <button
                              onClick={() => handleDeleteAlert(alert.id)}
                              className="px-3 py-2 rounded-lg text-sm font-medium bg-red-500/20 text-red-700 dark:text-red-400 border border-red-500/30 hover:bg-red-500/30 transition-all"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Alert History */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Triggered Alerts</h2>
              <div className="glass rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="glass-table-header border-b border-white/20 dark:border-white/10">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Coin</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Target Price</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Triggered At</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Date</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/20 dark:divide-white/10">
                      {history.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="px-6 py-8 text-center text-gray-600 dark:text-gray-400">
                            No triggered alerts yet
                          </td>
                        </tr>
                      ) : (
                        history.map(record => (
                          <tr key={record.id} className="glass-table-row hover:bg-white/20 dark:hover:bg-white/5">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="font-semibold text-gray-900 dark:text-white">{record.coinSymbol}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-gray-700 dark:text-gray-300">${record.targetPrice.toFixed(2)}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="text-gray-700 dark:text-gray-300">${record.triggeredPrice.toFixed(2)}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                              {record.triggeredAt.toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                  record.actedOn
                                    ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                                    : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                                }`}
                              >
                                {record.actedOn ? '✓ Acted' : '⏱ Pending'}
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 glass p-8 rounded-2xl border border-white/20 dark:border-white/10">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How Price Alerts Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">📊 Real-time Monitoring</p>
              <p>Your alerts are monitored continuously against real-time market data from top exchanges.</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🔔 Instant Notifications</p>
              <p>Get notified via email or push notification the moment your target price is reached.</p>
            </div>
            <div>
              <p className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🔄 Smart Recurring</p>
              <p>Recurring alerts continue to notify you every time the price level is hit, ideal for DCA strategies.</p>
            </div>
          </div>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/price-alerts" />
    </div>
  );
}

