'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ChevronUp, ChevronDown, Plus, Trash2, TrendingUp, TrendingDown } from 'lucide-react';

// Types
interface Wallet {
  id: string;
  address: string;
  name: string;
  chain: 'ETH' | 'SOL';
}

interface Holding {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  currentPrice: number;
  priceChange24h: number;
  allocation: number;
}

interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  symbol: string;
  amount: number;
  price: number;
  timestamp: string;
}

interface PortfolioData {
  totalValue: number;
  change24h: number;
  change7d: number;
  pnlTotal: number;
  pnlUnrealized: number;
  pnlRealized: number;
  holdings: Holding[];
  transactions: Transaction[];
  performanceData: { timestamp: string; value: number }[];
}

// Mock data generator
const generateMockPortfolioData = (): PortfolioData => {
  const now = Date.now();
  const holdings: Holding[] = [
    {
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.5234,
      currentPrice: 96500,
      priceChange24h: 3.24,
      allocation: 0,
    },
    {
      id: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 8.742,
      currentPrice: 3450,
      priceChange24h: 2.15,
      allocation: 0,
    },
    {
      id: '3',
      symbol: 'SOL',
      name: 'Solana',
      amount: 125.5,
      currentPrice: 198,
      priceChange24h: 5.42,
      allocation: 0,
    },
    {
      id: '4',
      symbol: 'USDC',
      name: 'USD Coin',
      amount: 15000,
      currentPrice: 1.0,
      priceChange24h: 0.01,
      allocation: 0,
    },
    {
      id: '5',
      symbol: 'ARB',
      name: 'Arbitrum',
      amount: 2500,
      currentPrice: 0.85,
      priceChange24h: -1.23,
      allocation: 0,
    },
  ];

  // Calculate values
  const holdingsWithValues = holdings.map(h => ({
    ...h,
    value: h.amount * h.currentPrice,
  }));

  const totalValue = holdingsWithValues.reduce((sum, h) => sum + h.value, 0);

  const holdingsWithAllocation = holdingsWithValues.map(h => ({
    ...h,
    allocation: (h.value / totalValue) * 100,
  }));

  // Generate performance data (last 30 days)
  const performanceData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(now - (29 - i) * 24 * 60 * 60 * 1000);
    const variance = (Math.random() - 0.5) * 5000;
    return {
      timestamp: date.toISOString().split('T')[0],
      value: totalValue + variance,
    };
  });

  // Generate mock transactions
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'buy',
      symbol: 'ETH',
      amount: 2.5,
      price: 3420,
      timestamp: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '2',
      type: 'sell',
      symbol: 'SOL',
      amount: 10,
      price: 195,
      timestamp: new Date(now - 5 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '3',
      type: 'buy',
      symbol: 'BTC',
      amount: 0.1,
      price: 95800,
      timestamp: new Date(now - 1 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '4',
      type: 'buy',
      symbol: 'ARB',
      amount: 500,
      price: 0.82,
      timestamp: new Date(now - 2 * 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: '5',
      type: 'sell',
      symbol: 'USDC',
      amount: 5000,
      price: 1.0,
      timestamp: new Date(now - 3 * 24 * 60 * 60 * 1000).toISOString(),
    },
  ];

  return {
    totalValue,
    change24h: totalValue * 0.0452,
    change7d: totalValue * 0.0823,
    pnlTotal: 15234.5,
    pnlUnrealized: 12450.25,
    pnlRealized: 2784.25,
    holdings: holdingsWithAllocation,
    transactions,
    performanceData,
  };
};

// Counter animation component
const AnimatedCounter: React.FC<{ value: number; decimals?: number }> = ({ value, decimals = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const increment = value / 30;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [value]);

  return <>{displayValue.toFixed(decimals)}</>;
};

// SVG Pie Chart Component
const PieChart: React.FC<{ holdings: Holding[] }> = ({ holdings }) => {
  const size = 200;
  const radius = size / 2 - 10;
  const cx = size / 2;
  const cy = size / 2;

  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

  let currentAngle = 0;
  const slices = holdings.map((holding, index) => {
    const sliceAngle = (holding.allocation / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = cx + radius * Math.cos(startRad);
    const y1 = cy + radius * Math.sin(startRad);
    const x2 = cx + radius * Math.cos(endRad);
    const y2 = cy + radius * Math.sin(endRad);

    const largeArc = sliceAngle > 180 ? 1 : 0;

    const pathData = [
      `M ${cx} ${cy}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
      'Z',
    ].join(' ');

    currentAngle = endAngle;

    return (
      <g key={index}>
        <path d={pathData} fill={colors[index % colors.length]} opacity="0.8" />
        <path d={pathData} fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
      </g>
    );
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {slices}
    </svg>
  );
};

// Performance Chart Component
const PerformanceChart: React.FC<{ data: { timestamp: string; value: number }[] }> = ({ data }) => {
  const width = 500;
  const height = 200;
  const padding = 40;

  const minValue = Math.min(...data.map(d => d.value));
  const maxValue = Math.max(...data.map(d => d.value));
  const range = maxValue - minValue || 1;

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.map((point, index) => {
    const x = padding + (index / (data.length - 1)) * chartWidth;
    const normalizedValue = (point.value - minValue) / range;
    const y = padding + chartHeight - normalizedValue * chartHeight;
    return { x, y, ...point };
  });

  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="w-full h-full">
      {/* Grid lines */}
      <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="rgba(107, 114, 128, 0.3)" strokeWidth="1" />
      <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(107, 114, 128, 0.3)" strokeWidth="1" />

      {/* Path */}
      <path d={pathData} fill="none" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />

      {/* Gradient fill */}
      <defs>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={`${pathData} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`} fill="url(#areaGradient)" />
    </svg>
  );
};

// Main Dashboard Component
export const PortfolioDashboard: React.FC = () => {
  const [wallets, setWallets] = useState<Wallet[]>([
    { id: '1', address: '0x1234...5678', name: 'Main Wallet', chain: 'ETH' },
    { id: '2', address: '9B4q...5xYz', name: 'Solana Wallet', chain: 'SOL' },
  ]);

  const [portfolioData, setPortfolioData] = useState<PortfolioData>(generateMockPortfolioData());
  const [newWalletAddress, setNewWalletAddress] = useState('');
  const [newWalletChain, setNewWalletChain] = useState<'ETH' | 'SOL'>('ETH');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Holding; direction: 'asc' | 'desc' }>({
    key: 'allocation',
    direction: 'desc',
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioData(prev => {
        const newData = generateMockPortfolioData();
        return {
          ...newData,
          holdings: newData.holdings,
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleAddWallet = useCallback(() => {
    if (newWalletAddress.trim()) {
      const newWallet: Wallet = {
        id: Date.now().toString(),
        address: newWalletAddress,
        name: `${newWalletChain} Wallet ${wallets.length + 1}`,
        chain: newWalletChain,
      };
      setWallets(prev => [...prev, newWallet]);
      setNewWalletAddress('');
    }
  }, [newWalletAddress, newWalletChain, wallets.length]);

  const handleRemoveWallet = useCallback((id: string) => {
    setWallets(prev => prev.filter(w => w.id !== id));
  }, []);

  const sortedHoldings = useMemo(() => {
    const sorted = [...portfolioData.holdings];
    sorted.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });
    return sorted;
  }, [portfolioData.holdings, sortConfig]);

  const handleSort = useCallback((key: keyof Holding) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'desc' ? 'asc' : 'desc',
    }));
  }, []);

  const change24hIsPositive = portfolioData.change24h >= 0;
  const change7dIsPositive = portfolioData.change7d >= 0;
  const pnlIsPositive = portfolioData.pnlTotal >= 0;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Portfolio Dashboard</h1>
        <p className="text-gray-400">Real-time portfolio tracking and management</p>
      </div>

      {/* Wallet Management Section */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4">Connected Wallets</h2>

        {/* Wallet List */}
        <div className="grid gap-3 mb-6">
          {wallets.map(wallet => (
            <div key={wallet.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
              <div>
                <p className="font-medium">{wallet.name}</p>
                <p className="text-sm text-gray-400">{wallet.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full">{wallet.chain}</span>
                <button onClick={() => handleRemoveWallet(wallet.id)} className="text-red-400 hover:text-red-300 p-2">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Wallet Form */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter wallet address"
            value={newWalletAddress}
            onChange={e => setNewWalletAddress(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleAddWallet()}
            className="flex-1 bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <select
            value={newWalletChain}
            onChange={e => setNewWalletChain(e.target.value as 'ETH' | 'SOL')}
            className="bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          >
            <option value="ETH">ETH</option>
            <option value="SOL">SOL</option>
          </select>
          <button
            onClick={handleAddWallet}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium flex items-center gap-2 transition-colors"
          >
            <Plus size={18} />
            Add
          </button>
        </div>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Value */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <p className="text-gray-400 mb-2">Total Portfolio Value</p>
          <h3 className="text-3xl font-bold mb-4">
            $<AnimatedCounter value={portfolioData.totalValue} decimals={2} />
          </h3>
          <div className={`flex items-center gap-2 ${change24hIsPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change24hIsPositive ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            <span>
              {change24hIsPositive ? '+' : ''}${Math.abs(portfolioData.change24h).toFixed(2)} (
              {change24hIsPositive ? '+' : ''}
              {((portfolioData.change24h / portfolioData.totalValue) * 100).toFixed(2)}%) 24h
            </span>
          </div>
        </div>

        {/* 7 Day Change */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <p className="text-gray-400 mb-2">7 Day Change</p>
          <h3 className={`text-3xl font-bold mb-4 ${change7dIsPositive ? 'text-green-400' : 'text-red-400'}`}>
            {change7dIsPositive ? '+' : ''}$<AnimatedCounter value={Math.abs(portfolioData.change7d)} decimals={2} />
          </h3>
          <p className="text-gray-400 text-sm">
            {change7dIsPositive ? '+' : ''}
            {((portfolioData.change7d / portfolioData.totalValue) * 100).toFixed(2)}% week performance
          </p>
        </div>

        {/* Total PnL */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <p className="text-gray-400 mb-2">Total PnL</p>
          <h3 className={`text-3xl font-bold mb-4 ${pnlIsPositive ? 'text-green-400' : 'text-red-400'}`}>
            {pnlIsPositive ? '+' : ''}$<AnimatedCounter value={Math.abs(portfolioData.pnlTotal)} decimals={2} />
          </h3>
          <div className="text-sm text-gray-400 space-y-1">
            <p>Unrealized: ${portfolioData.pnlUnrealized.toFixed(2)}</p>
            <p>Realized: ${portfolioData.pnlRealized.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Asset Allocation Pie Chart */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Asset Allocation</h2>
          <PieChart holdings={portfolioData.holdings} />
          <div className="mt-6 space-y-2 text-sm">
            {portfolioData.holdings.map((holding, index) => (
              <div key={holding.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'][index % 5] }}></div>
                  <span>{holding.symbol}</span>
                </div>
                <span className="text-gray-400">{holding.allocation.toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio Performance Chart */}
        <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Portfolio Value (30 Days)</h2>
          <div className="h-64">
            <PerformanceChart data={portfolioData.performanceData} />
          </div>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Holdings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">
                  <button onClick={() => handleSort('name')} className="flex items-center gap-2 hover:text-white">
                    Asset
                    {sortConfig.key === 'name' && (sortConfig.direction === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
                  </button>
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">
                  <button onClick={() => handleSort('amount')} className="flex items-center justify-end gap-2 hover:text-white">
                    Amount
                    {sortConfig.key === 'amount' && (sortConfig.direction === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
                  </button>
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">
                  <button onClick={() => handleSort('currentPrice')} className="flex items-center justify-end gap-2 hover:text-white">
                    Price
                    {sortConfig.key === 'currentPrice' && (sortConfig.direction === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
                  </button>
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">
                  <button onClick={() => handleSort('amount')} className="flex items-center justify-end gap-2 hover:text-white">
                    Value
                    {sortConfig.key === 'amount' && (sortConfig.direction === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
                  </button>
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">
                  <button onClick={() => handleSort('priceChange24h')} className="flex items-center justify-end gap-2 hover:text-white">
                    24h Change
                    {sortConfig.key === 'priceChange24h' && (sortConfig.direction === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
                  </button>
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">
                  <button onClick={() => handleSort('allocation')} className="flex items-center justify-end gap-2 hover:text-white">
                    Allocation
                    {sortConfig.key === 'allocation' && (sortConfig.direction === 'desc' ? <ChevronDown size={16} /> : <ChevronUp size={16} />)}
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedHoldings.map(holding => {
                const holdingValue = holding.amount * holding.currentPrice;
                const isPositive = holding.priceChange24h >= 0;
                return (
                  <tr key={holding.id} className="border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">{holding.name}</p>
                        <p className="text-sm text-gray-400">{holding.symbol}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-medium">{holding.amount.toFixed(6)}</td>
                    <td className="py-4 px-4 text-right font-medium">${holding.currentPrice.toFixed(2)}</td>
                    <td className="py-4 px-4 text-right font-medium">${holdingValue.toFixed(2)}</td>
                    <td className={`py-4 px-4 text-right font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                      {isPositive ? '+' : ''}
                      {holding.priceChange24h.toFixed(2)}%
                    </td>
                    <td className="py-4 px-4 text-right font-medium">{holding.allocation.toFixed(2)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Transactions</h2>
        <div className="space-y-3">
          {portfolioData.transactions.map(transaction => (
            <div key={transaction.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg hover:bg-gray-700/70 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-full ${transaction.type === 'buy' ? 'bg-green-900' : 'bg-red-900'}`}>
                  {transaction.type === 'buy' ? <TrendingUp className="text-green-400" size={20} /> : <TrendingDown className="text-red-400" size={20} />}
                </div>
                <div>
                  <p className="font-medium">
                    {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.symbol}
                  </p>
                  <p className="text-sm text-gray-400">{new Date(transaction.timestamp).toLocaleString()}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {transaction.amount} {transaction.symbol}
                </p>
                <p className="text-sm text-gray-400">${(transaction.amount * transaction.price).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDashboard;
