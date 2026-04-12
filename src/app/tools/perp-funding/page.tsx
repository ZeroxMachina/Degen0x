'use client';

import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

type SortField = 'asset' | 'exchange' | 'fundingRate' | 'annualizedRate' | 'openInterest';
type SortOrder = 'asc' | 'desc';

interface FundingRateData {
  id: string;
  asset: string;
  exchange: string;
  fundingRate: number; // 8h funding rate
  nextFundingTime: string;
  openInterest: number; // in millions USD
  history: number[]; // last 7 funding rates
}

const FUNDING_RATES_DATA: FundingRateData[] = [
  // Binance
  {
    id: 'BTC-BINANCE',
    asset: 'BTC',
    exchange: 'Binance',
    fundingRate: 0.0089,
    nextFundingTime: '4h 32m',
    openInterest: 8420,
    history: [0.0078, 0.0082, 0.0085, 0.0089, 0.0087, 0.0091, 0.0089],
  },
  {
    id: 'ETH-BINANCE',
    asset: 'ETH',
    exchange: 'Binance',
    fundingRate: 0.0124,
    nextFundingTime: '4h 32m',
    openInterest: 3890,
    history: [0.0098, 0.0105, 0.0112, 0.0118, 0.0121, 0.0124, 0.0124],
  },
  {
    id: 'SOL-BINANCE',
    asset: 'SOL',
    exchange: 'Binance',
    fundingRate: 0.0156,
    nextFundingTime: '4h 32m',
    openInterest: 1240,
    history: [0.0134, 0.0142, 0.0148, 0.0151, 0.0155, 0.0158, 0.0156],
  },
  {
    id: 'DOGE-BINANCE',
    asset: 'DOGE',
    exchange: 'Binance',
    fundingRate: -0.0035,
    nextFundingTime: '4h 32m',
    openInterest: 680,
    history: [0.0012, 0.0008, -0.0005, -0.0018, -0.0028, -0.0032, -0.0035],
  },
  {
    id: 'AVAX-BINANCE',
    asset: 'AVAX',
    exchange: 'Binance',
    fundingRate: 0.0103,
    nextFundingTime: '4h 32m',
    openInterest: 520,
    history: [0.0078, 0.0087, 0.0092, 0.0098, 0.0101, 0.0103, 0.0103],
  },
  {
    id: 'ARB-BINANCE',
    asset: 'ARB',
    exchange: 'Binance',
    fundingRate: 0.0142,
    nextFundingTime: '4h 32m',
    openInterest: 890,
    history: [0.0098, 0.0108, 0.0118, 0.0128, 0.0135, 0.0140, 0.0142],
  },
  {
    id: 'OP-BINANCE',
    asset: 'OP',
    exchange: 'Binance',
    fundingRate: 0.0118,
    nextFundingTime: '4h 32m',
    openInterest: 450,
    history: [0.0089, 0.0098, 0.0105, 0.0112, 0.0115, 0.0118, 0.0118],
  },
  {
    id: 'LINK-BINANCE',
    asset: 'LINK',
    exchange: 'Binance',
    fundingRate: 0.0097,
    nextFundingTime: '4h 32m',
    openInterest: 670,
    history: [0.0078, 0.0084, 0.0089, 0.0093, 0.0095, 0.0097, 0.0097],
  },
  {
    id: 'MATIC-BINANCE',
    asset: 'MATIC',
    exchange: 'Binance',
    fundingRate: 0.0129,
    nextFundingTime: '4h 32m',
    openInterest: 520,
    history: [0.0098, 0.0108, 0.0115, 0.0122, 0.0126, 0.0129, 0.0129],
  },
  {
    id: 'WLD-BINANCE',
    asset: 'WLD',
    exchange: 'Binance',
    fundingRate: 0.0145,
    nextFundingTime: '4h 32m',
    openInterest: 280,
    history: [0.0115, 0.0125, 0.0132, 0.0138, 0.0142, 0.0145, 0.0145],
  },
  // Bybit
  {
    id: 'BTC-BYBIT',
    asset: 'BTC',
    exchange: 'Bybit',
    fundingRate: 0.0087,
    nextFundingTime: '2h 15m',
    openInterest: 7850,
    history: [0.0075, 0.0080, 0.0083, 0.0086, 0.0087, 0.0089, 0.0087],
  },
  {
    id: 'ETH-BYBIT',
    asset: 'ETH',
    exchange: 'Bybit',
    fundingRate: 0.0121,
    nextFundingTime: '2h 15m',
    openInterest: 3540,
    history: [0.0095, 0.0103, 0.0110, 0.0116, 0.0119, 0.0122, 0.0121],
  },
  {
    id: 'SOL-BYBIT',
    asset: 'SOL',
    exchange: 'Bybit',
    fundingRate: 0.0152,
    nextFundingTime: '2h 15m',
    openInterest: 1100,
    history: [0.0130, 0.0138, 0.0145, 0.0148, 0.0151, 0.0154, 0.0152],
  },
  {
    id: 'DOGE-BYBIT',
    asset: 'DOGE',
    exchange: 'Bybit',
    fundingRate: -0.0028,
    nextFundingTime: '2h 15m',
    openInterest: 620,
    history: [0.0018, 0.0012, 0.0002, -0.0012, -0.0022, -0.0026, -0.0028],
  },
  {
    id: 'AVAX-BYBIT',
    asset: 'AVAX',
    exchange: 'Bybit',
    fundingRate: 0.0100,
    nextFundingTime: '2h 15m',
    openInterest: 480,
    history: [0.0075, 0.0084, 0.0090, 0.0096, 0.0099, 0.0101, 0.0100],
  },
  {
    id: 'ARB-BYBIT',
    asset: 'ARB',
    exchange: 'Bybit',
    fundingRate: 0.0138,
    nextFundingTime: '2h 15m',
    openInterest: 820,
    history: [0.0095, 0.0105, 0.0115, 0.0125, 0.0132, 0.0137, 0.0138],
  },
  {
    id: 'OP-BYBIT',
    asset: 'OP',
    exchange: 'Bybit',
    fundingRate: 0.0114,
    nextFundingTime: '2h 15m',
    openInterest: 410,
    history: [0.0085, 0.0095, 0.0102, 0.0109, 0.0112, 0.0115, 0.0114],
  },
  {
    id: 'LINK-BYBIT',
    asset: 'LINK',
    exchange: 'Bybit',
    fundingRate: 0.0094,
    nextFundingTime: '2h 15m',
    openInterest: 620,
    history: [0.0075, 0.0081, 0.0087, 0.0090, 0.0093, 0.0095, 0.0094],
  },
  {
    id: 'MATIC-BYBIT',
    asset: 'MATIC',
    exchange: 'Bybit',
    fundingRate: 0.0126,
    nextFundingTime: '2h 15m',
    openInterest: 480,
    history: [0.0095, 0.0105, 0.0112, 0.0119, 0.0123, 0.0126, 0.0126],
  },
  {
    id: 'WLD-BYBIT',
    asset: 'WLD',
    exchange: 'Bybit',
    fundingRate: 0.0142,
    nextFundingTime: '2h 15m',
    openInterest: 260,
    history: [0.0112, 0.0122, 0.0129, 0.0135, 0.0139, 0.0142, 0.0142],
  },
  // OKX
  {
    id: 'BTC-OKX',
    asset: 'BTC',
    exchange: 'OKX',
    fundingRate: 0.0091,
    nextFundingTime: '3h 45m',
    openInterest: 6920,
    history: [0.0080, 0.0084, 0.0087, 0.0089, 0.0090, 0.0092, 0.0091],
  },
  {
    id: 'ETH-OKX',
    asset: 'ETH',
    exchange: 'OKX',
    fundingRate: 0.0125,
    nextFundingTime: '3h 45m',
    openInterest: 3200,
    history: [0.0100, 0.0108, 0.0115, 0.0120, 0.0123, 0.0125, 0.0125],
  },
  {
    id: 'SOL-OKX',
    asset: 'SOL',
    exchange: 'OKX',
    fundingRate: 0.0158,
    nextFundingTime: '3h 45m',
    openInterest: 980,
    history: [0.0136, 0.0144, 0.0150, 0.0154, 0.0157, 0.0160, 0.0158],
  },
  {
    id: 'DOGE-OKX',
    asset: 'DOGE',
    exchange: 'OKX',
    fundingRate: -0.0032,
    nextFundingTime: '3h 45m',
    openInterest: 540,
    history: [0.0015, 0.0010, -0.0002, -0.0015, -0.0025, -0.0030, -0.0032],
  },
  {
    id: 'AVAX-OKX',
    asset: 'AVAX',
    exchange: 'OKX',
    fundingRate: 0.0105,
    nextFundingTime: '3h 45m',
    openInterest: 420,
    history: [0.0080, 0.0089, 0.0095, 0.0101, 0.0104, 0.0106, 0.0105],
  },
  {
    id: 'ARB-OKX',
    asset: 'ARB',
    exchange: 'OKX',
    fundingRate: 0.0145,
    nextFundingTime: '3h 45m',
    openInterest: 750,
    history: [0.0100, 0.0110, 0.0120, 0.0130, 0.0138, 0.0143, 0.0145],
  },
  {
    id: 'OP-OKX',
    asset: 'OP',
    exchange: 'OKX',
    fundingRate: 0.0121,
    nextFundingTime: '3h 45m',
    openInterest: 390,
    history: [0.0091, 0.0101, 0.0108, 0.0115, 0.0119, 0.0121, 0.0121],
  },
  {
    id: 'LINK-OKX',
    asset: 'LINK',
    exchange: 'OKX',
    fundingRate: 0.0100,
    nextFundingTime: '3h 45m',
    openInterest: 580,
    history: [0.0080, 0.0087, 0.0092, 0.0096, 0.0098, 0.0100, 0.0100],
  },
  {
    id: 'MATIC-OKX',
    asset: 'MATIC',
    exchange: 'OKX',
    fundingRate: 0.0132,
    nextFundingTime: '3h 45m',
    openInterest: 450,
    history: [0.0101, 0.0111, 0.0119, 0.0125, 0.0129, 0.0132, 0.0132],
  },
  {
    id: 'WLD-OKX',
    asset: 'WLD',
    exchange: 'OKX',
    fundingRate: 0.0148,
    nextFundingTime: '3h 45m',
    openInterest: 240,
    history: [0.0118, 0.0128, 0.0135, 0.0141, 0.0145, 0.0148, 0.0148],
  },
];

function FundingRateSparkline({ history }: { history: number[] }) {
  const maxRate = Math.max(...history.map(Math.abs));
  const minRate = Math.min(...history);
  const range = maxRate - minRate || 0.001;

  return (
    <div className="flex items-end gap-0.5">
      {history.map((rate, idx) => {
        const normalized = (rate - minRate) / range;
        const height = Math.max(8, 32 * normalized);
        const isPositive = rate >= 0;
        const color = isPositive
          ? 'bg-emerald-500/70 hover:bg-emerald-500'
          : 'bg-red-500/70 hover:bg-red-500';

        return (
          <div
            key={idx}
            className={`w-1.5 rounded-sm transition-colors ${color}`}
            style={{ height: `${height}px` }}
            title={`${(rate * 100).toFixed(3)}%`}
          />
        );
      })}
    </div>
  );
}

function StatCard({
  label,
  value,
  subtext,
  color,
}: {
  label: string;
  value: string;
  subtext?: string;
  color?: 'green' | 'red' | 'blue';
}) {
  const bgClass =
    color === 'green'
      ? 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20'
      : color === 'red'
        ? 'bg-gradient-to-br from-red-500/10 to-red-600/5 border-red-500/20'
        : 'bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20';

  const textColorClass =
    color === 'green' ? 'text-emerald-400' : color === 'red' ? 'text-red-400' : 'text-blue-400';

  return (
    <div
      className={`rounded-lg border p-4 backdrop-blur-sm ${bgClass}`}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <p
        className="text-sm font-medium"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {label}
      </p>
      <p className={`mt-1 text-2xl font-bold ${textColorClass}`}>{value}</p>
      {subtext && (
        <p
          className="mt-1 text-xs"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}

export default function PerpFundingPage() {
  const [sortField, setSortField] = useState<SortField>('fundingRate');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [selectedAsset, setSelectedAsset] = useState<string>('');
  const [selectedExchange, setSelectedExchange] = useState<string>('');

  const assets = Array.from(new Set(FUNDING_RATES_DATA.map((d) => d.asset))).sort();
  const exchanges = Array.from(new Set(FUNDING_RATES_DATA.map((d) => d.exchange))).sort();

  const filteredData = useMemo(() => {
    let filtered = FUNDING_RATES_DATA.filter((item) => {
      if (selectedAsset && item.asset !== selectedAsset) return false;
      if (selectedExchange && item.exchange !== selectedExchange) return false;
      return true;
    });

    filtered.sort((a, b) => {
      let aVal: number | string = 0;
      let bVal: number | string = 0;

      switch (sortField) {
        case 'asset':
          aVal = a.asset;
          bVal = b.asset;
          break;
        case 'exchange':
          aVal = a.exchange;
          bVal = b.exchange;
          break;
        case 'fundingRate':
          aVal = a.fundingRate;
          bVal = b.fundingRate;
          break;
        case 'annualizedRate':
          aVal = a.fundingRate * 365 * 3;
          bVal = b.fundingRate * 365 * 3;
          break;
        case 'openInterest':
          aVal = a.openInterest;
          bVal = b.openInterest;
          break;
      }

      if (typeof aVal === 'string') {
        return sortOrder === 'asc' ? aVal.localeCompare(bVal as string) : (bVal as string).localeCompare(aVal);
      }

      return sortOrder === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
    });

    return filtered;
  }, [sortField, sortOrder, selectedAsset, selectedExchange]);

  const stats = useMemo(() => {
    const rates = FUNDING_RATES_DATA.map((d) => d.fundingRate);
    const avg = rates.reduce((a, b) => a + b, 0) / rates.length;
    const highest = Math.max(...rates);
    const lowest = Math.min(...rates);
    const totalOI = FUNDING_RATES_DATA.reduce((a, b) => a + b.openInterest, 0);

    return { avg, highest, lowest, totalOI };
  }, []);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null;
    return sortOrder === 'desc' ? (
      <ChevronDown className="inline-block h-4 w-4" />
    ) : (
      <ChevronUp className="inline-block h-4 w-4" />
    );
  };

  return (
    <div
      className="min-h-screen p-6 md:p-8"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="text-4xl font-bold tracking-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Perpetual Funding Rates
          </h1>
          <p
            className="mt-2 text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Real-time funding rates across major perpetual futures exchanges
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
          <StatCard
            label="Avg Funding Rate (8h)"
            value={`${(stats.avg * 100).toFixed(3)}%`}
            subtext={`${(stats.avg * 365 * 3 * 100).toFixed(1)}% APY`}
            color="blue"
          />
          <StatCard
            label="Highest Rate"
            value={`${(stats.highest * 100).toFixed(3)}%`}
            subtext={`${(stats.highest * 365 * 3 * 100).toFixed(1)}% APY`}
            color="green"
          />
          <StatCard
            label="Most Negative Rate"
            value={`${(stats.lowest * 100).toFixed(3)}%`}
            subtext={`${(stats.lowest * 365 * 3 * 100).toFixed(1)}% APY`}
            color="red"
          />
          <StatCard
            label="Total Open Interest"
            value={`$${(stats.totalOI / 1000).toFixed(1)}B`}
            subtext={`${filteredData.length} markets`}
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4">
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Filter by Asset
            </label>
            <select
              value={selectedAsset}
              onChange={(e) => setSelectedAsset(e.target.value)}
              className="mt-1 rounded-lg border px-3 py-2 text-sm"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <option value="">All Assets</option>
              {assets.map((asset) => (
                <option key={asset} value={asset}>
                  {asset}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Filter by Exchange
            </label>
            <select
              value={selectedExchange}
              onChange={(e) => setSelectedExchange(e.target.value)}
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
              }}
            >
              <option value="">All Exchanges</option>
              {exchanges.map((exchange) => (
                <option key={exchange} value={exchange}>
                  {exchange}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div
          className="overflow-x-auto rounded-lg border"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr
                style={{
                  borderBottomColor: 'var(--color-border)',
                  backgroundColor: 'rgba(var(--color-primary), 0.05)',
                }}
                className="border-b"
              >
                <th
                  className="cursor-pointer select-none px-4 py-3 text-left font-semibold transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => handleSort('asset')}
                >
                  Asset <SortIcon field="asset" />
                </th>
                <th
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => handleSort('exchange')}
                >
                  Exchange <SortIcon field="exchange" />
                </th>
                <th
                  className="cursor-pointer select-none px-4 py-3 text-right font-semibold transition-colors hover:opacity-70"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => handleSort('fundingRate')}
                >
                  Funding Rate (8h) <SortIcon field="fundingRate" />
                </th>
                <th
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => handleSort('annualizedRate')}
                >
                  APY <SortIcon field="annualizedRate" />
                </th>
                <th
                  className="px-4 py-3 text-center font-semibold"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Next Funding
                </th>
                <th
                  style={{ color: 'var(--color-text-secondary)' }}
                  onClick={() => handleSort('openInterest')}
                >
                  Open Interest <SortIcon field="openInterest" />
                </th>
                <th
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  History (7 periods)
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => {
                const isPositive = item.fundingRate >= 0;
                const rateColor = isPositive ? 'text-emerald-400' : 'text-red-400';
                const apyRate = item.fundingRate * 365 * 3;

                return (
                  <tr
                    key={item.id}
                    className="border-b transition-colors hover:bg-white/5"
                    style={{
                      borderBottomColor: 'var(--color-border)',
                    }}
                  >
                    <td
                      className="px-4 py-3 font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.asset}
                    </td>
                    <td
                      className="px-4 py-3"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.exchange}
                    </td>
                    <td className={`px-4 py-3 text-right font-mono ${rateColor}`}>
                      {isPositive ? '+' : ''}{(item.fundingRate * 100).toFixed(4)}%
                    </td>
                    <td className={`px-4 py-3 text-right font-mono ${rateColor}`}>
                      {isPositive ? '+' : ''}{(apyRate * 100).toFixed(2)}%
                    </td>
                    <td
                      className="px-4 py-3 text-center"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.nextFundingTime}
                    </td>
                    <td
                      className="px-4 py-3 text-right"
                      style={{ color: 'var(--color-text)' }}
                    >
                      ${item.openInterest}M
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center">
                        <FundingRateSparkline history={item.history} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Educational Section */}
        <div className="mt-12 space-y-8">
          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: 'var(--color-text)' }}
            >
              Understanding Funding Rates
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="rounded-lg border p-6"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3
                className="mb-3 text-lg font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                What Are Funding Rates?
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Funding rates are periodic payments exchanged between long and short traders on perpetual futures markets. When the 8-hour funding rate is positive, long traders pay shorts. When negative, shorts pay longs. This mechanism keeps perpetual prices close to spot prices.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Why They Matter
              </h3>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
              >
                High positive rates indicate bullish sentiment and can signal potential reversals. They represent real yield opportunities for traders taking counter-positions. Annualized rates compound the 8-hour rates over 365 days with 3 funding periods per day (8h cycles).
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Trading Opportunities
              </h3>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
              >
                High positive rates reward short sellers. Extreme rates often precede trend reversals. Compare rates across exchanges—arbitrage opportunities exist when rates diverge significantly. Use funding rates with technical analysis for better entries.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Risk Management
              </h3>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Never trade funding rates alone. High rates can persist during strong trends. Use stop losses and position sizing. Monitor margin ratios and liquidation prices. Funding rates are a signal, not a guarantee—always combine with fundamental and technical analysis.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div
          className="mt-12 rounded-lg border p-4 text-center text-sm"
          style={{
            backgroundColor: 'rgba(var(--color-primary), 0.05)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-secondary)',
          }}
        >
          Data updates every 8 hours. Funding rates are subject to change. Always verify on exchange before trading. Not financial advice.
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Perp Funding",
              "url": "https://degen0x.com/tools/perp-funding",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
