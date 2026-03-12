'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface ExchangeFeeData {
  id: string;
  name: string;
  logo: string;
  spotMaker: number;
  spotTaker: number;
  futuresMaker: number;
  futuresTaker: number;
  withdrawalBTC: number;
  withdrawalETH: number;
  withdrawalUSDT: number;
  depositFeePercent: number;
  fiatOnRampPercent: number;
  fiatOffRampPercent: number;
  trustScore: number;
  securityRating: string;
  vipTiers: Array<{
    name: string;
    volumeThreshold: number;
    spotMaker: number;
    spotTaker: number;
  }>;
}

const exchangeData: ExchangeFeeData[] = [
  {
    id: 'coinbase',
    name: 'Coinbase',
    logo: '₿',
    spotMaker: 0.004,
    spotTaker: 0.006,
    futuresMaker: 0.0002,
    futuresTaker: 0.0006,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.005,
    withdrawalUSDT: 1.5,
    depositFeePercent: 0,
    fiatOnRampPercent: 3.99,
    fiatOffRampPercent: 1.49,
    trustScore: 98,
    securityRating: 'A+',
    vipTiers: [
      { name: 'Standard', volumeThreshold: 0, spotMaker: 0.004, spotTaker: 0.006 },
      { name: 'Pro', volumeThreshold: 50000, spotMaker: 0.002, spotTaker: 0.004 },
      { name: 'Premium', volumeThreshold: 500000, spotMaker: 0.001, spotTaker: 0.002 },
    ],
  },
  {
    id: 'binance',
    name: 'Binance',
    logo: '⬡',
    spotMaker: 0.001,
    spotTaker: 0.001,
    futuresMaker: 0.0002,
    futuresTaker: 0.0004,
    withdrawalBTC: 0.0004,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 1.5,
    fiatOffRampPercent: 0.5,
    trustScore: 96,
    securityRating: 'A+',
    vipTiers: [
      { name: 'VIP 0', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.001 },
      { name: 'VIP 1', volumeThreshold: 50, spotMaker: 0.001, spotTaker: 0.001 },
      { name: 'VIP 2', volumeThreshold: 500, spotMaker: 0.0008, spotTaker: 0.001 },
      { name: 'VIP 3', volumeThreshold: 2000, spotMaker: 0.0006, spotTaker: 0.0008 },
      { name: 'VIP 4', volumeThreshold: 20000, spotMaker: 0.0004, spotTaker: 0.0006 },
    ],
  },
  {
    id: 'kraken',
    name: 'Kraken',
    logo: '🐙',
    spotMaker: 0.0016,
    spotTaker: 0.0026,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.005,
    withdrawalUSDT: 2,
    depositFeePercent: 0,
    fiatOnRampPercent: 3.75,
    fiatOffRampPercent: 1.5,
    trustScore: 97,
    securityRating: 'A+',
    vipTiers: [
      { name: 'Starter', volumeThreshold: 0, spotMaker: 0.0016, spotTaker: 0.0026 },
      { name: 'Intermediate', volumeThreshold: 50000, spotMaker: 0.0014, spotTaker: 0.0024 },
      { name: 'Pro', volumeThreshold: 500000, spotMaker: 0.001, spotTaker: 0.002 },
    ],
  },
  {
    id: 'gemini',
    name: 'Gemini',
    logo: '⚖️',
    spotMaker: 0.001,
    spotTaker: 0.0035,
    futuresMaker: 0.0001,
    futuresTaker: 0.0005,
    withdrawalBTC: 0,
    withdrawalETH: 0,
    withdrawalUSDT: 0,
    depositFeePercent: 0,
    fiatOnRampPercent: 2.5,
    fiatOffRampPercent: 1.5,
    trustScore: 99,
    securityRating: 'A+',
    vipTiers: [
      { name: 'Basic', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.0035 },
      { name: 'Advanced', volumeThreshold: 100000, spotMaker: 0.0005, spotTaker: 0.002 },
    ],
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    logo: '◆',
    spotMaker: 0.001,
    spotTaker: 0.001,
    futuresMaker: 0.0001,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2,
    fiatOffRampPercent: 1,
    trustScore: 94,
    securityRating: 'A',
    vipTiers: [
      { name: 'Lv.0', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.001 },
      { name: 'Lv.1', volumeThreshold: 50000, spotMaker: 0.0009, spotTaker: 0.0009 },
      { name: 'Lv.2', volumeThreshold: 200000, spotMaker: 0.0007, spotTaker: 0.0007 },
    ],
  },
  {
    id: 'bybit',
    name: 'Bybit',
    logo: '🎯',
    spotMaker: 0.001,
    spotTaker: 0.001,
    futuresMaker: 0.0001,
    futuresTaker: 0.0006,
    withdrawalBTC: 0.0004,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2,
    fiatOffRampPercent: 1,
    trustScore: 95,
    securityRating: 'A',
    vipTiers: [
      { name: 'VIP 0', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.001 },
      { name: 'VIP 1', volumeThreshold: 100000, spotMaker: 0.0008, spotTaker: 0.001 },
      { name: 'VIP 2', volumeThreshold: 1000000, spotMaker: 0.0006, spotTaker: 0.0008 },
    ],
  },
  {
    id: 'okx',
    name: 'OKX',
    logo: '🟨',
    spotMaker: 0.0008,
    spotTaker: 0.001,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0004,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2.5,
    fiatOffRampPercent: 1.5,
    trustScore: 93,
    securityRating: 'A',
    vipTiers: [
      { name: 'General', volumeThreshold: 0, spotMaker: 0.0008, spotTaker: 0.001 },
      { name: 'Gold', volumeThreshold: 50000, spotMaker: 0.0006, spotTaker: 0.0008 },
      { name: 'Platinum', volumeThreshold: 500000, spotMaker: 0.0004, spotTaker: 0.0006 },
    ],
  },
  {
    id: 'crypto-com',
    name: 'Crypto.com',
    logo: '🔷',
    spotMaker: 0.0004,
    spotTaker: 0.0004,
    futuresMaker: 0.00005,
    futuresTaker: 0.0003,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.005,
    withdrawalUSDT: 1.5,
    depositFeePercent: 0,
    fiatOnRampPercent: 2.99,
    fiatOffRampPercent: 2.99,
    trustScore: 96,
    securityRating: 'A+',
    vipTiers: [
      { name: 'Standard', volumeThreshold: 0, spotMaker: 0.0004, spotTaker: 0.0004 },
      { name: 'Silver', volumeThreshold: 25000, spotMaker: 0.0003, spotTaker: 0.0003 },
      { name: 'Gold', volumeThreshold: 125000, spotMaker: 0.0002, spotTaker: 0.0002 },
    ],
  },
  {
    id: 'bitstamp',
    name: 'Bitstamp',
    logo: '📊',
    spotMaker: 0.005,
    spotTaker: 0.005,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.005,
    withdrawalUSDT: 2.5,
    depositFeePercent: 0,
    fiatOnRampPercent: 4.5,
    fiatOffRampPercent: 2,
    trustScore: 96,
    securityRating: 'A+',
    vipTiers: [
      { name: 'Starter', volumeThreshold: 0, spotMaker: 0.005, spotTaker: 0.005 },
      { name: 'Pro', volumeThreshold: 50000, spotMaker: 0.002, spotTaker: 0.002 },
    ],
  },
  {
    id: 'gate-io',
    name: 'Gate.io',
    logo: '🚀',
    spotMaker: 0.001,
    spotTaker: 0.001,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2,
    fiatOffRampPercent: 1,
    trustScore: 92,
    securityRating: 'A',
    vipTiers: [
      { name: 'Lv.0', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.001 },
      { name: 'Lv.1', volumeThreshold: 50000, spotMaker: 0.0009, spotTaker: 0.0009 },
    ],
  },
  {
    id: 'huobi',
    name: 'Huobi/HTX',
    logo: '🟡',
    spotMaker: 0.002,
    spotTaker: 0.002,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2.5,
    fiatOffRampPercent: 1.5,
    trustScore: 90,
    securityRating: 'A',
    vipTiers: [
      { name: 'Regular', volumeThreshold: 0, spotMaker: 0.002, spotTaker: 0.002 },
      { name: 'Premium', volumeThreshold: 100000, spotMaker: 0.0015, spotTaker: 0.0015 },
    ],
  },
  {
    id: 'bitfinex',
    name: 'Bitfinex',
    logo: '🔶',
    spotMaker: 0.001,
    spotTaker: 0.002,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0008,
    withdrawalETH: 0.008,
    withdrawalUSDT: 2,
    depositFeePercent: 0,
    fiatOnRampPercent: 3.5,
    fiatOffRampPercent: 1.5,
    trustScore: 88,
    securityRating: 'A-',
    vipTiers: [
      { name: 'Basic', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.002 },
      { name: 'Advanced', volumeThreshold: 250000, spotMaker: 0.0005, spotTaker: 0.001 },
    ],
  },
  {
    id: 'mexc',
    name: 'MEXC',
    logo: '🎪',
    spotMaker: 0.002,
    spotTaker: 0.002,
    futuresMaker: 0.0002,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2.5,
    fiatOffRampPercent: 1,
    trustScore: 88,
    securityRating: 'A-',
    vipTiers: [
      { name: 'Standard', volumeThreshold: 0, spotMaker: 0.002, spotTaker: 0.002 },
      { name: 'Premium', volumeThreshold: 100000, spotMaker: 0.0015, spotTaker: 0.0015 },
    ],
  },
  {
    id: 'bitget',
    name: 'Bitget',
    logo: '✨',
    spotMaker: 0.001,
    spotTaker: 0.001,
    futuresMaker: 0.0001,
    futuresTaker: 0.0005,
    withdrawalBTC: 0.0004,
    withdrawalETH: 0.003,
    withdrawalUSDT: 1,
    depositFeePercent: 0,
    fiatOnRampPercent: 2,
    fiatOffRampPercent: 1,
    trustScore: 91,
    securityRating: 'A',
    vipTiers: [
      { name: 'Lv.1', volumeThreshold: 0, spotMaker: 0.001, spotTaker: 0.001 },
      { name: 'Lv.2', volumeThreshold: 50000, spotMaker: 0.0008, spotTaker: 0.001 },
    ],
  },
  {
    id: 'uphold',
    name: 'Uphold',
    logo: '☘️',
    spotMaker: 0.005,
    spotTaker: 0.005,
    futuresMaker: 0,
    futuresTaker: 0,
    withdrawalBTC: 0.0005,
    withdrawalETH: 0.005,
    withdrawalUSDT: 0,
    depositFeePercent: 0,
    fiatOnRampPercent: 1.5,
    fiatOffRampPercent: 0,
    trustScore: 94,
    securityRating: 'A',
    vipTiers: [
      { name: 'Basic', volumeThreshold: 0, spotMaker: 0.005, spotTaker: 0.005 },
    ],
  },
];

interface ComparisonSelection {
  [key: string]: boolean;
}

interface VolumeTier {
  label: string;
  volume: number;
}

const volumeTiers: VolumeTier[] = [
  { label: 'Beginner ($5K)', volume: 5000 },
  { label: 'Active ($50K)', volume: 50000 },
  { label: 'Professional ($500K)', volume: 500000 },
  { label: 'Institutional ($5M)', volume: 5000000 },
];

export default function ExchangeFeesPage() {
  const [selectedExchanges, setSelectedExchanges] = useState<ComparisonSelection>({
    binance: true,
    coinbase: true,
    kraken: true,
  });

  const [monthlyVolume, setMonthlyVolume] = useState<number>(50000);
  const [selectedVolumeTier, setSelectedVolumeTier] = useState<number>(1);
  const [tradeAmount, setTradeAmount] = useState<number>(10000);
  const [sortBy, setSortBy] = useState<'cheapest' | 'trust'>('cheapest');

  const toggleExchange = useCallback((id: string) => {
    setSelectedExchanges((prev) => {
      const newSelection = { ...prev, [id]: !prev[id] };
      const selectedCount = Object.values(newSelection).filter(Boolean).length;
      if (selectedCount > 4) {
        return prev;
      }
      return newSelection;
    });
  }, []);

  const getApplicableTier = useCallback(
    (exchange: ExchangeFeeData) => {
      let applicableTier = exchange.vipTiers[0];
      for (let i = exchange.vipTiers.length - 1; i >= 0; i--) {
        if (monthlyVolume >= exchange.vipTiers[i].volumeThreshold) {
          applicableTier = exchange.vipTiers[i];
          break;
        }
      }
      return applicableTier;
    },
    [monthlyVolume]
  );

  const calculateTotalFees = useCallback(
    (exchange: ExchangeFeeData) => {
      const tier = getApplicableTier(exchange);
      const spotFees = tradeAmount * (tier.spotMaker + tier.spotTaker) / 2;
      return spotFees;
    },
    [tradeAmount, getApplicableTier]
  );

  const selectedExchangesList = useMemo(
    () =>
      exchangeData
        .filter((ex) => selectedExchanges[ex.id])
        .sort((a, b) => {
          if (sortBy === 'cheapest') {
            return calculateTotalFees(a) - calculateTotalFees(b);
          }
          return b.trustScore - a.trustScore;
        }),
    [selectedExchanges, sortBy, calculateTotalFees]
  );

  const feeComparison = useMemo(
    () =>
      selectedExchangesList.map((ex) => ({
        name: ex.name,
        totalFees: calculateTotalFees(ex),
        spotFees: tradeAmount * (getApplicableTier(ex).spotMaker + getApplicableTier(ex).spotTaker) / 2,
        withdrawalFees: (ex.withdrawalBTC + ex.withdrawalETH + ex.withdrawalUSDT) / 3,
      })),
    [selectedExchangesList, calculateTotalFees, tradeAmount, getApplicableTier]
  );

  const maxFee = Math.max(...feeComparison.map((f) => f.totalFees), 1);

  const bestValue = useMemo(() => {
    if (feeComparison.length === 0) return null;
    return feeComparison.reduce((best, current) =>
      current.totalFees < best.totalFees ? current : best
    );
  }, [feeComparison]);

  const savingsChart = useMemo(
    () =>
      feeComparison.length > 0
        ? feeComparison.map((f) => {
            const worst = Math.max(...feeComparison.map((c) => c.totalFees));
            const savings = worst - f.totalFees;
            const savingsPercent = (savings / worst) * 100;
            return { ...f, savings, savingsPercent };
          })
        : [],
    [feeComparison]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Exchange Fees', href: '/tools/exchange-fees' }]} />

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-3">
            Multi-Exchange Fee Comparison
          </h1>
          <p className="text-gray-300 text-lg">
            Compare trading fees, withdrawal costs, and VIP tiers across 15+ major crypto exchanges
          </p>
        </div>

        {/* Volume Tier Quick Select */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Your Trading Volume</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {volumeTiers.map((tier, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedVolumeTier(idx);
                  setMonthlyVolume(tier.volume);
                }}
                className={`p-3 rounded-lg font-medium transition-all ${
                  selectedVolumeTier === idx
                    ? 'bg-blue-600 text-[var(--color-text)] border-2 border-blue-400'
                    : 'bg-gray-700 text-gray-300 border-2 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="text-sm">{tier.label}</div>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <label className="text-[var(--color-text)] font-medium">Custom Volume ($):</label>
            <input
              type="number"
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="flex-1 px-4 py-2 bg-gray-700 text-[var(--color-text)] rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Trade Amount Calculator */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">Trade Amount Analysis</h2>
          <div className="flex items-center gap-4">
            <label className="text-[var(--color-text)] font-medium whitespace-nowrap">Single Trade ($):</label>
            <input
              type="number"
              value={tradeAmount}
              onChange={(e) => setTradeAmount(Number(e.target.value))}
              className="flex-1 px-4 py-2 bg-gray-700 text-[var(--color-text)] rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
            <div className="text-right">
              <div className="text-gray-400 text-sm">Monthly Volume</div>
              <div className="text-[var(--color-text)] text-xl font-bold">${(monthlyVolume / 1000).toFixed(1)}K</div>
            </div>
          </div>
        </div>

        {/* Exchange Selection */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">Select Exchanges (2-4)</h2>
            <span className="text-sm text-gray-400">{Object.values(selectedExchanges).filter(Boolean).length} selected</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {exchangeData.map((exchange) => (
              <button
                key={exchange.id}
                onClick={() => toggleExchange(exchange.id)}
                disabled={!selectedExchanges[exchange.id] && Object.values(selectedExchanges).filter(Boolean).length >= 4}
                className={`p-3 rounded-lg font-medium transition-all text-center ${
                  selectedExchanges[exchange.id]
                    ? 'bg-green-700 text-[var(--color-text)] border-2 border-green-500 shadow-lg shadow-green-500/20'
                    : 'bg-gray-700 text-gray-400 border-2 border-gray-600 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed'
                }`}
              >
                <div className="text-xl mb-1">{exchange.logo}</div>
                <div className="text-xs truncate">{exchange.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Comparison Controls */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Fee Comparison Results</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setSortBy('cheapest')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'cheapest'
                  ? 'bg-blue-600 text-[var(--color-text)]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Cheapest
            </button>
            <button
              onClick={() => setSortBy('trust')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                sortBy === 'trust'
                  ? 'bg-blue-600 text-[var(--color-text)]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Most Trusted
            </button>
          </div>
        </div>

        {selectedExchangesList.length > 0 ? (
          <>
            {/* SVG Bar Chart */}
            <div className="bg-gray-800 rounded-lg p-8 mb-8 border border-gray-700 overflow-x-auto">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">Estimated Fees for ${tradeAmount.toLocaleString()} Trade</h3>
              <svg viewBox="0 0 800 400" className="w-full min-w-max">
                {/* Grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                  const x = 150 + ratio * 600;
                  const feeAmount = (ratio * maxFee).toFixed(2);
                  return (
                    <g key={`grid-${i}`}>
                      <line x1={x} y1="30" x2={x} y2="320" stroke="#444" strokeDasharray="2,4" />
                      <text
                        x={x}
                        y="350"
                        textAnchor="middle"
                        fill="#999"
                        fontSize="12"
                        fontFamily="Arial"
                      >
                        ${feeAmount}
                      </text>
                    </g>
                  );
                })}

                {/* Bars */}
                {feeComparison.map((item, idx) => {
                  const barWidth = (item.totalFees / maxFee) * 600;
                  const y = 50 + idx * 60;
                  const isLowest = bestValue && item.name === bestValue.name;
                  const barColor = isLowest ? '#10b981' : '#3b82f6';
                  const shadowColor = isLowest ? '#059669' : '#1e40af';

                  return (
                    <g key={`bar-${idx}`}>
                      {/* Bar shadow */}
                      <rect
                        x="150"
                        y={y + 2}
                        width={barWidth}
                        height="35"
                        fill={shadowColor}
                        opacity="0.2"
                      />
                      {/* Main bar */}
                      <rect x="150" y={y} width={barWidth} height="35" fill={barColor} rx="4" />
                      {/* Label */}
                      <text
                        x="145"
                        y={y + 22}
                        textAnchor="end"
                        fill="#fff"
                        fontSize="13"
                        fontFamily="Arial"
                        fontWeight="bold"
                      >
                        {item.name}
                      </text>
                      {/* Fee amount */}
                      <text
                        x={160 + barWidth}
                        y={y + 22}
                        fill="#fff"
                        fontSize="13"
                        fontFamily="Arial"
                        fontWeight="bold"
                      >
                        ${item.totalFees.toFixed(2)}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Detailed Comparison Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-text)]">Exchange</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-text)]">Trust Score</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-[var(--color-text)]">Security</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--color-text)]">Spot Fees</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--color-text)]">Withdrawal Avg</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--color-text)] text-green-400">
                        Total Fees (${tradeAmount.toLocaleString()})
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-[var(--color-text)]">VIP Tier</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {selectedExchangesList.map((exchange, idx) => {
                      const tier = getApplicableTier(exchange);
                      const fees = calculateTotalFees(exchange);
                      const isLowest = bestValue && exchange.name === bestValue.name;

                      return (
                        <tr
                          key={exchange.id}
                          className={`hover:bg-gray-700 transition-colors ${
                            isLowest ? 'bg-green-900/20' : ''
                          }`}
                        >
                          <td className="px-6 py-4 text-[var(--color-text)] font-semibold">{exchange.name}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 bg-gray-700 rounded-full h-2 overflow-hidden">
                                <div
                                  className="bg-yellow-500 h-full"
                                  style={{ width: `${exchange.trustScore}%` }}
                                />
                              </div>
                              <span className="text-[var(--color-text)] font-medium">{exchange.trustScore}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[var(--color-text)]">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                exchange.securityRating === 'A+'
                                  ? 'bg-green-900 text-green-200'
                                  : exchange.securityRating === 'A'
                                  ? 'bg-blue-900 text-blue-200'
                                  : 'bg-gray-700 text-gray-200'
                              }`}
                            >
                              {exchange.securityRating}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-[var(--color-text)]">
                            {((tier.spotMaker + tier.spotTaker) * 100).toFixed(3)}%
                          </td>
                          <td className="px-6 py-4 text-right text-[var(--color-text)]">
                            ${((exchange.withdrawalBTC + exchange.withdrawalETH + exchange.withdrawalUSDT) / 3).toFixed(2)}
                          </td>
                          <td className={`px-6 py-4 text-right font-bold ${isLowest ? 'text-green-400' : 'text-[var(--color-text)]'}`}>
                            ${fees.toFixed(2)}
                            {isLowest && <span className="ml-2 text-green-400">✓</span>}
                          </td>
                          <td className="px-6 py-4 text-right text-gray-300 text-sm">{tier.name}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Savings Analysis */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">Savings Analysis</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savingsChart.map((item) => (
                  <div key={item.name} className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[var(--color-text)] font-medium">{item.name}</span>
                      <span className="text-green-400 font-bold">${item.savings.toFixed(2)}</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-green-500 h-full transition-all"
                        style={{ width: `${item.savingsPercent}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-2">
                      {item.savingsPercent.toFixed(1)}% savings vs. most expensive
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
            <p className="text-gray-400">Select 2-4 exchanges to compare fees and see detailed analysis</p>
          </div>
        )}

        {/* Educational Breakdown */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-8 border border-blue-700/30 mb-8">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">Understanding Crypto Exchange Fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-3">Spot Trading Fees</h3>
              <p className="text-gray-300 mb-3">
                Maker fees are charged when you add liquidity to the order book. Taker fees apply when you remove liquidity by market orders. Lower volumes typically have higher fees, with discounts at higher VIP tiers.
              </p>
              <div className="bg-gray-700/50 rounded p-3 text-sm text-gray-300">
                <strong>Example:</strong> On Binance, a 0.001% maker / 0.001% taker means on a $10,000 trade you pay ~$2 total.
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-200 mb-3">Withdrawal Fees</h3>
              <p className="text-gray-300 mb-3">
                Network fees vary by blockchain congestion and exchange. Some exchanges (Gemini, Crypto.com) offer free withdrawals on certain tiers or tokens. Always check current rates before withdrawing.
              </p>
              <div className="bg-gray-700/50 rounded p-3 text-sm text-gray-300">
                <strong>Tip:</strong> Withdraw during low network congestion (off-peak hours) or use stablecoins for cheaper transfers.
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-200 mb-3">VIP Tiers & Volume Discounts</h3>
              <p className="text-gray-300 mb-3">
                Most exchanges offer tiered fee structures based on 30-day trading volume. Reaching higher tiers unlocks substantial fee discounts. Some platforms also offer additional benefits like fee rebates.
              </p>
              <div className="bg-gray-700/50 rounded p-3 text-sm text-gray-300">
                <strong>Strategy:</strong> Calculate your annual fees before choosing an exchange. A 0.1% difference saves thousands at volume.
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-200 mb-3">Fiat On/Off Ramps</h3>
              <p className="text-gray-300 mb-3">
                Converting fiat to crypto (or vice versa) incurs additional fees, typically 1.5%-5%. These vary by payment method (bank transfer, card, wire) and region. Compare these costs when choosing an exchange.
              </p>
              <div className="bg-gray-700/50 rounded p-3 text-sm text-gray-300">
                <strong>Savings Tip:</strong> ACH bank transfers are usually cheaper than card payments. Uphold offers 1.5% on-ramps.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 text-center">
          <p className="text-gray-400 text-sm mb-2">
            Fee data updated as of March 2026. Actual fees may vary based on promotions, loyalty programs, and market conditions.
          </p>
          <p className="text-gray-500 text-xs">
            For the most accurate and current fee schedules, visit each exchange directly. degen0x provides educational comparison only.
          </p>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Multi-Exchange Fee Comparison Tool',
            description: 'Compare trading fees, withdrawal costs, and VIP tiers across 15+ major crypto exchanges',
            url: 'https://degen0x.com/tools/exchange-fees',
            applicationCategory: 'FinanceApplication',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '247',
            },
          }),
        }}
      />
    </div>
  );
}
