'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Bell, Trash2, Power, Plus, TrendingUp, TrendingDown } from 'lucide-react';

// Types
interface Alert {
  id: string;
  coin: string;
  condition: 'above' | 'below';
  targetPrice: number;
  isActive: boolean;
  createdAt: Date;
}

interface TriggeredAlert {
  id: string;
  alertId: string;
  coin: string;
  condition: 'above' | 'below';
  targetPrice: number;
  currentPrice: number;
  triggeredAt: Date;
}

interface Toast {
  id: string;
  coin: string;
  condition: 'above' | 'below';
  currentPrice: number;
  targetPrice: number;
}

// Top 20 cryptocurrencies
const TOP_CRYPTOS = [
  { symbol: 'BTC', name: 'Bitcoin', price: 42500 },
  { symbol: 'ETH', name: 'Ethereum', price: 2800 },
  { symbol: 'BNB', name: 'Binance Coin', price: 625 },
  { symbol: 'SOL', name: 'Solana', price: 185 },
  { symbol: 'XRP', name: 'Ripple', price: 2.45 },
  { symbol: 'DOGE', name: 'Dogecoin', price: 0.42 },
  { symbol: 'ADA', name: 'Cardano', price: 0.95 },
  { symbol: 'AVAX', name: 'Avalanche', price: 38 },
  { symbol: 'LINK', name: 'Chainlink', price: 18.5 },
  { symbol: 'MATIC', name: 'Polygon', price: 0.52 },
  { symbol: 'ATOM', name: 'Cosmos', price: 12.8 },
  { symbol: 'APT', name: 'Aptos', price: 9.2 },
  { symbol: 'SUI', name: 'Sui', price: 3.8 },
  { symbol: 'ARB', name: 'Arbitrum', price: 0.95 },
  { symbol: 'OP', name: 'Optimism', price: 1.8 },
  { symbol: 'PEPE', name: 'Pepe', price: 0.000015 },
  { symbol: 'SHIB', name: 'Shiba Inu', price: 0.000024 },
  { symbol: 'NEAR', name: 'Near', price: 7.2 },
  { symbol: 'LDO', name: 'Lido', price: 3.5 },
  { symbol: 'AAVE', name: 'Aave', price: 625 },
];

export default function PriceAlertManager() {
  // State management
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [triggeredAlerts, setTriggeredAlerts] = useState<TriggeredAlert[]>([]);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>('BTC');
  const [condition, setCondition] = useState<'above' | 'below'>('above');
  const [targetPrice, setTargetPrice] = useState<string>('');
  const [currentPrices, setCurrentPrices] = useState<Record<string, number>>({});
  const [pendingCount, setPendingCount] = useState(0);

  // Initialize current prices
  useEffect(() => {
    const initialPrices: Record<string, number> = {};
    TOP_CRYPTOS.forEach((crypto) => {
      initialPrices[crypto.symbol] = crypto.price * (0.95 + Math.random() * 0.1);
    });
    setCurrentPrices(initialPrices);
  }, []);

  // Simulate price feed and check alerts
  useEffect(() => {
    const priceInterval = setInterval(() => {
      setCurrentPrices((prevPrices) => {
        const newPrices = { ...prevPrices };

        TOP_CRYPTOS.forEach((crypto) => {
          const currentPrice = newPrices[crypto.symbol] || crypto.price;
          const change = (Math.random() - 0.5) * 0.05;
          newPrices[crypto.symbol] = Math.max(currentPrice * (1 + change), 0.00001);
        });

        // Check alerts
        alerts.forEach((alert) => {
          if (!alert.isActive) return;

          const currentPrice = newPrices[alert.coin];
          const isTriggered =
            (alert.condition === 'above' && currentPrice >= alert.targetPrice) ||
            (alert.condition === 'below' && currentPrice <= alert.targetPrice);

          if (isTriggered) {
            const newTriggered: TriggeredAlert = {
              id: `triggered-${Date.now()}-${Math.random()}`,
              alertId: alert.id,
              coin: alert.coin,
              condition: alert.condition,
              targetPrice: alert.targetPrice,
              currentPrice,
              triggeredAt: new Date(),
            };

            setTriggeredAlerts((prev) => [newTriggered, ...prev]);

            // Add toast
            const newToast: Toast = {
              id: `toast-${Date.now()}-${Math.random()}`,
              coin: alert.coin,
              condition: alert.condition,
              currentPrice,
              targetPrice: alert.targetPrice,
            };

            setToasts((prev) => [newToast, ...prev]);

            // Remove toast after 5 seconds
            setTimeout(() => {
              setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
            }, 5000);

            // Deactivate alert
            setAlerts((prev) =>
              prev.map((a) => (a.id === alert.id ? { ...a, isActive: false } : a))
            );
          }
        });

        return newPrices;
      });
    }, 3000);

    return () => clearInterval(priceInterval);
  }, [alerts]);

  // Update pending count
  useEffect(() => {
    const count = alerts.filter((a) => a.isActive).length;
    setPendingCount(count);
  }, [alerts]);

  // Handle create alert
  const handleCreateAlert = useCallback(() => {
    if (!targetPrice || isNaN(parseFloat(targetPrice)) || parseFloat(targetPrice) <= 0) {
      return;
    }

    const newAlert: Alert = {
      id: `alert-${Date.now()}`,
      coin: selectedCoin,
      condition,
      targetPrice: parseFloat(targetPrice),
      isActive: true,
      createdAt: new Date(),
    };

    setAlerts((prev) => [newAlert, ...prev]);
    setTargetPrice('');
    setSelectedCoin('BTC');
    setCondition('above');
  }, [selectedCoin, condition, targetPrice]);

  // Handle delete alert
  const handleDeleteAlert = useCallback((id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  }, []);

  // Handle toggle alert
  const handleToggleAlert = useCallback((id: string) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isActive: !a.isActive } : a))
    );
  }, []);

  // Get crypto info
  const getCryptoInfo = (symbol: string) => {
    return TOP_CRYPTOS.find((c) => c.symbol === symbol);
  };

  // Format price
  const formatPrice = (price: number): string => {
    if (price < 0.01) {
      return `$${price.toFixed(8)}`;
    }
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Price Alerts</h1>
            <p className="text-gray-400">Monitor crypto prices and receive notifications</p>
          </div>

          {/* Bell notification badge */}
          <div className="relative">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <Bell className="w-8 h-8 text-blue-400" />
              {pendingCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  {pendingCount}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Toast notifications */}
        <div className="fixed top-6 right-6 space-y-3 z-50">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`p-4 rounded-lg border shadow-lg animate-pulse ${
                toast.condition === 'above'
                  ? 'bg-green-900 border-green-600 text-green-100'
                  : 'bg-red-900 border-red-600 text-red-100'
              }`}
            >
              <div className="font-semibold">{toast.coin} Price Alert Triggered!</div>
              <div className="text-sm mt-1">
                Price reached {formatPrice(toast.currentPrice)} ({toast.condition} {formatPrice(toast.targetPrice)})
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Create Alert Form */}
          <div className="lg:col-span-1 bg-gray-800 rounded-lg p-6 border border-gray-700 h-fit">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-blue-400" />
              New Alert
            </h2>

            <div className="space-y-4">
              {/* Coin Selection */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Cryptocurrency
                </label>
                <select
                  value={selectedCoin}
                  onChange={(e) => setSelectedCoin(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  {TOP_CRYPTOS.map((crypto) => (
                    <option key={crypto.symbol} value={crypto.symbol}>
                      {crypto.symbol} - {crypto.name}
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-xs text-gray-400">
                  Current: {formatPrice(currentPrices[selectedCoin] || 0)}
                </div>
              </div>

              {/* Condition Selection */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Alert when price goes
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCondition('above')}
                    className={`flex-1 py-2 px-3 rounded transition-colors flex items-center justify-center ${
                      condition === 'above'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Above
                  </button>
                  <button
                    onClick={() => setCondition('below')}
                    className={`flex-1 py-2 px-3 rounded transition-colors flex items-center justify-center ${
                      condition === 'below'
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <TrendingDown className="w-4 h-4 mr-1" />
                    Below
                  </button>
                </div>
              </div>

              {/* Price Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Target Price
                </label>
                <input
                  type="number"
                  step="0.00001"
                  value={targetPrice}
                  onChange={(e) => setTargetPrice(e.target.value)}
                  placeholder="Enter target price"
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Create Button */}
              <button
                onClick={handleCreateAlert}
                disabled={!targetPrice || isNaN(parseFloat(targetPrice)) || parseFloat(targetPrice) <= 0}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Create Alert
              </button>
            </div>
          </div>

          {/* Active Alerts and History */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Alerts */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4">Active Alerts ({alerts.filter(a => a.isActive).length})</h2>

              {alerts.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <Bell className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No alerts yet. Create one to get started!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {alerts.map((alert) => {
                    const currentPrice = currentPrices[alert.coin] || 0;
                    const cryptoInfo = getCryptoInfo(alert.coin);
                    const isPriceReached =
                      (alert.condition === 'above' && currentPrice >= alert.targetPrice) ||
                      (alert.condition === 'below' && currentPrice <= alert.targetPrice);

                    return (
                      <div
                        key={alert.id}
                        className={`p-4 rounded-lg border transition-all ${
                          alert.isActive
                            ? 'bg-gray-700 border-gray-600'
                            : 'bg-gray-700 border-gray-700 opacity-50'
                        } ${
                          isPriceReached && alert.isActive
                            ? alert.condition === 'above'
                              ? 'ring-2 ring-green-500'
                              : 'ring-2 ring-red-500'
                            : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <div>
                                <div className="font-semibold text-lg">
                                  {alert.coin}
                                  {cryptoInfo && <span className="text-gray-400 text-sm ml-1">({cryptoInfo.name})</span>}
                                </div>
                                <div className="text-sm text-gray-400 mt-1">
                                  Alert when price goes{' '}
                                  <span className={alert.condition === 'above' ? 'text-green-400' : 'text-red-400'}>
                                    {alert.condition}
                                  </span>{' '}
                                  {formatPrice(alert.targetPrice)}
                                </div>
                                <div className="text-xs text-gray-500 mt-2">
                                  Current: {formatPrice(currentPrice)}
                                </div>
                              </div>
                              {isPriceReached && alert.isActive && (
                                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  alert.condition === 'above'
                                    ? 'bg-green-900 text-green-100'
                                    : 'bg-red-900 text-red-100'
                                }`}>
                                  TRIGGERED
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleToggleAlert(alert.id)}
                              className={`p-2 rounded transition-colors ${
                                alert.isActive
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                              }`}
                              title={alert.isActive ? 'Deactivate' : 'Activate'}
                            >
                              <Power className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteAlert(alert.id)}
                              className="p-2 rounded bg-red-900 hover:bg-red-800 text-red-200 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Alert History */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4">Triggered Alerts ({triggeredAlerts.length})</h2>

              {triggeredAlerts.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No alerts triggered yet. Keep monitoring!</p>
                </div>
              ) : (
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {triggeredAlerts.map((triggered) => {
                    const cryptoInfo = getCryptoInfo(triggered.coin);
                    return (
                      <div
                        key={triggered.id}
                        className={`p-3 rounded-lg border text-sm ${
                          triggered.condition === 'above'
                            ? 'bg-green-900 border-green-600'
                            : 'bg-red-900 border-red-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">
                              {triggered.coin}
                              {cryptoInfo && <span className="text-gray-300 text-xs ml-1">({cryptoInfo.name})</span>}
                            </div>
                            <div className="text-xs mt-1 opacity-90">
                              Reached {formatPrice(triggered.currentPrice)} ({triggered.condition} {formatPrice(triggered.targetPrice)})
                            </div>
                          </div>
                          <div className="text-xs opacity-75">
                            {triggered.triggeredAt.toLocaleTimeString()}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
