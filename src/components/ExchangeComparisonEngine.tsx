'use client';

import React, { useState, useMemo } from 'react';
import StarRating from './StarRating';

interface Exchange {
  id: string;
  name: string;
  logo: string;
  makerFee: number;
  takerFee: number;
  depositMethods: string[];
  supportedCoins: number;
  securityRating: number;
  easeOfUseRating: number;
  mobileAppRating: number;
  regulationStatus: string;
  stakingAvailable: boolean;
  nftMarketplace: boolean;
  futuresTrading: boolean;
}

const exchanges: Exchange[] = [
  {
    id: 'coinbase',
    name: 'Coinbase',
    logo: '🪙',
    makerFee: 0.6,
    takerFee: 0.6,
    depositMethods: ['Bank Transfer', 'Credit Card', 'PayPal', 'Wire'],
    supportedCoins: 250,
    securityRating: 4.9,
    easeOfUseRating: 4.7,
    mobileAppRating: 4.6,
    regulationStatus: 'Regulated (US)',
    stakingAvailable: true,
    nftMarketplace: true,
    futuresTrading: false,
  },
  {
    id: 'binance',
    name: 'Binance',
    logo: '🔶',
    makerFee: 0.1,
    takerFee: 0.1,
    depositMethods: ['Bank Transfer', 'Credit Card', 'Crypto', 'P2P'],
    supportedCoins: 1200,
    securityRating: 4.6,
    easeOfUseRating: 3.8,
    mobileAppRating: 4.3,
    regulationStatus: 'Partial (Multiple)',
    stakingAvailable: true,
    nftMarketplace: true,
    futuresTrading: true,
  },
  {
    id: 'kraken',
    name: 'Kraken',
    logo: '🦑',
    makerFee: 0.16,
    takerFee: 0.26,
    depositMethods: ['Bank Transfer', 'Crypto', 'Wire'],
    supportedCoins: 180,
    securityRating: 4.8,
    easeOfUseRating: 4.2,
    mobileAppRating: 4.4,
    regulationStatus: 'Regulated (US/EU)',
    stakingAvailable: true,
    nftMarketplace: false,
    futuresTrading: true,
  },
  {
    id: 'gemini',
    name: 'Gemini',
    logo: '♊',
    makerFee: 0.5,
    takerFee: 0.5,
    depositMethods: ['Bank Transfer', 'Wire', 'Crypto'],
    supportedCoins: 90,
    securityRating: 4.9,
    easeOfUseRating: 4.4,
    mobileAppRating: 4.5,
    regulationStatus: 'Regulated (US)',
    stakingAvailable: true,
    nftMarketplace: true,
    futuresTrading: false,
  },
  {
    id: 'crypto-com',
    name: 'Crypto.com',
    logo: '🔵',
    makerFee: 0.4,
    takerFee: 0.4,
    depositMethods: ['Bank Transfer', 'Credit Card', 'Crypto'],
    supportedCoins: 250,
    securityRating: 4.4,
    easeOfUseRating: 4.3,
    mobileAppRating: 4.6,
    regulationStatus: 'Partial (Multiple)',
    stakingAvailable: true,
    nftMarketplace: true,
    futuresTrading: true,
  },
  {
    id: 'kucoin',
    name: 'KuCoin',
    logo: '🐋',
    makerFee: 0.1,
    takerFee: 0.1,
    depositMethods: ['Crypto', 'Bank Transfer', 'P2P'],
    supportedCoins: 700,
    securityRating: 4.3,
    easeOfUseRating: 3.9,
    mobileAppRating: 4.2,
    regulationStatus: 'Limited Regulation',
    stakingAvailable: true,
    nftMarketplace: true,
    futuresTrading: true,
  },
  {
    id: 'okx',
    name: 'OKX',
    logo: '⚫',
    makerFee: 0.08,
    takerFee: 0.1,
    depositMethods: ['Crypto', 'Bank Transfer', 'P2P'],
    supportedCoins: 500,
    securityRating: 4.5,
    easeOfUseRating: 3.7,
    mobileAppRating: 4.1,
    regulationStatus: 'Partial (Multiple)',
    stakingAvailable: true,
    nftMarketplace: true,
    futuresTrading: true,
  },
  {
    id: 'bybit',
    name: 'Bybit',
    logo: '⚡',
    makerFee: 0.1,
    takerFee: 0.1,
    depositMethods: ['Crypto', 'Bank Transfer'],
    supportedCoins: 300,
    securityRating: 4.4,
    easeOfUseRating: 4.0,
    mobileAppRating: 4.3,
    regulationStatus: 'Limited Regulation',
    stakingAvailable: true,
    nftMarketplace: false,
    futuresTrading: true,
  },
];

interface SelectedExchange {
  id: string;
  label: string;
}

export default function ExchangeComparisonEngine() {
  const [selected, setSelected] = useState<SelectedExchange[]>([
    { id: exchanges[0].id, label: 'Exchange 1' },
    { id: exchanges[1].id, label: 'Exchange 2' },
  ]);

  const selectedExchanges = useMemo(() => {
    return selected
      .map(sel => exchanges.find(ex => ex.id === sel.id))
      .filter((ex): ex is Exchange => ex !== undefined);
  }, [selected]);

  const handleExchangeChange = (index: number, newId: string) => {
    const newSelected = [...selected];
    newSelected[index] = { ...newSelected[index], id: newId };
    setSelected(newSelected);
  };

  const addExchange = () => {
    if (selected.length < 3) {
      setSelected([
        ...selected,
        { id: exchanges[2].id, label: `Exchange ${selected.length + 1}` },
      ]);
    }
  };

  const removeExchange = (index: number) => {
    if (selected.length > 2) {
      setSelected(selected.filter((_, i) => i !== index));
    }
  };

  const getWinner = (values: (number | boolean | string)[]): number | null => {
    if (values.every(v => typeof v === 'boolean')) {
      const trueCount = values.filter(v => v === true).length;
      if (trueCount === 0) return null;
      return values.findIndex(v => v === true);
    }

    const numValues = values.filter(v => typeof v === 'number') as number[];
    if (numValues.length === 0) return null;

    const maxVal = Math.max(...numValues);
    return values.findIndex(v => v === maxVal);
  };

  return (
    <div className="w-full space-y-8">
      {/* Selection Controls */}
      <div className="glass p-6 rounded-2xl">
        <h3 className="text-lg font-semibold text-[var(--color-text)] mb-6">
          Select Exchanges to Compare
        </h3>

        <div className="space-y-4">
          {selected.map((sel, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <label className="text-sm font-medium text-[var(--color-text-secondary)] w-24 flex-shrink-0">
                {sel.label}
              </label>
              <select
                value={sel.id}
                onChange={e => handleExchangeChange(idx, e.target.value)}
                className="flex-1 px-4 py-2 glass rounded-lg text-[var(--color-text)] border border-[var(--glass-border)] focus:outline-none focus:border-[var(--color-primary)]"
              >
                {exchanges.map(ex => (
                  <option key={ex.id} value={ex.id}>
                    {ex.logo} {ex.name}
                  </option>
                ))}
              </select>
              {selected.length > 2 && (
                <button
                  onClick={() => removeExchange(idx)}
                  className="px-4 py-2 text-red-500 hover:text-red-600 font-medium text-sm transition-colors"
                  title="Remove this exchange"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>

        {selected.length < 3 && (
          <button
            onClick={addExchange}
            className="mt-6 w-full px-4 py-2 glass rounded-lg text-[var(--color-primary)] border border-[var(--glass-border)] hover:border-[var(--color-primary)] font-medium transition-all"
          >
            + Add Exchange (Max 3)
          </button>
        )}
      </div>

      {/* Comparison Tables by Category */}
      <div className="space-y-6">
        {/* Trading Fees */}
        <div className="glass p-6 rounded-2xl overflow-hidden">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            💰 Trading Fees
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Maker Fee
                  </td>
                  {selectedExchanges.map((ex, idx) => (
                    <td
                      key={ex.id}
                      className={`px-4 py-3 text-center text-sm font-semibold relative ${
                        getWinner(selectedExchanges.map(e => e.makerFee)) === idx
                          ? 'text-[var(--color-success)]'
                          : 'text-[var(--color-text)]'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {ex.makerFee}%
                        {getWinner(selectedExchanges.map(e => e.makerFee)) === idx && (
                          <span className="text-xs bg-[var(--color-success)]/20 text-[var(--color-success)] px-2 py-1 rounded-full font-bold">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Taker Fee
                  </td>
                  {selectedExchanges.map((ex, idx) => (
                    <td
                      key={ex.id}
                      className={`px-4 py-3 text-center text-sm font-semibold relative ${
                        getWinner(selectedExchanges.map(e => e.takerFee)) === idx
                          ? 'text-[var(--color-success)]'
                          : 'text-[var(--color-text)]'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {ex.takerFee}%
                        {getWinner(selectedExchanges.map(e => e.takerFee)) === idx && (
                          <span className="text-xs bg-[var(--color-success)]/20 text-[var(--color-success)] px-2 py-1 rounded-full font-bold">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Trust */}
        <div className="glass p-6 rounded-2xl overflow-hidden">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            🔒 Security & Trust
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Security Rating
                  </td>
                  {selectedExchanges.map((ex, idx) => (
                    <td key={ex.id} className="px-4 py-3 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <StarRating rating={ex.securityRating} size="sm" />
                        {getWinner(selectedExchanges.map(e => e.securityRating)) === idx && (
                          <span className="text-xs bg-[var(--color-success)]/20 text-[var(--color-success)] px-2 py-1 rounded-full font-bold">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Regulation
                  </td>
                  {selectedExchanges.map(ex => (
                    <td key={ex.id} className="px-4 py-3 text-center text-xs text-[var(--color-text)]">
                      {ex.regulationStatus}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* User Experience */}
        <div className="glass p-6 rounded-2xl overflow-hidden">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            ⭐ User Experience
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Ease of Use
                  </td>
                  {selectedExchanges.map((ex, idx) => (
                    <td key={ex.id} className="px-4 py-3 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <StarRating rating={ex.easeOfUseRating} size="sm" />
                        {getWinner(selectedExchanges.map(e => e.easeOfUseRating)) === idx && (
                          <span className="text-xs bg-[var(--color-success)]/20 text-[var(--color-success)] px-2 py-1 rounded-full font-bold">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Mobile App
                  </td>
                  {selectedExchanges.map((ex, idx) => (
                    <td key={ex.id} className="px-4 py-3 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <StarRating rating={ex.mobileAppRating} size="sm" />
                        {getWinner(selectedExchanges.map(e => e.mobileAppRating)) === idx && (
                          <span className="text-xs bg-[var(--color-success)]/20 text-[var(--color-success)] px-2 py-1 rounded-full font-bold">
                            Best
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Supported Assets */}
        <div className="glass p-6 rounded-2xl overflow-hidden">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            📊 Supported Assets
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Supported Coins
                  </td>
                  {selectedExchanges.map((ex, idx) => (
                    <td
                      key={ex.id}
                      className={`px-4 py-3 text-center text-sm font-semibold ${
                        getWinner(selectedExchanges.map(e => e.supportedCoins)) === idx
                          ? 'text-[var(--color-primary)]'
                          : 'text-[var(--color-text)]'
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div>{ex.supportedCoins}</div>
                        {getWinner(selectedExchanges.map(e => e.supportedCoins)) === idx && (
                          <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-1 rounded-full font-bold">
                            Most
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Features */}
        <div className="glass p-6 rounded-2xl overflow-hidden">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            🎯 Features
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Staking
                  </td>
                  {selectedExchanges.map(ex => (
                    <td
                      key={ex.id}
                      className="px-4 py-3 text-center"
                    >
                      <span className={`text-2xl ${ex.stakingAvailable ? 'text-[var(--color-success)]' : 'text-[var(--color-text-secondary)]'}`}>
                        {ex.stakingAvailable ? '✓' : '✕'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[var(--glass-border)]">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    NFT Marketplace
                  </td>
                  {selectedExchanges.map(ex => (
                    <td
                      key={ex.id}
                      className="px-4 py-3 text-center"
                    >
                      <span className={`text-2xl ${ex.nftMarketplace ? 'text-[var(--color-success)]' : 'text-[var(--color-text-secondary)]'}`}>
                        {ex.nftMarketplace ? '✓' : '✕'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-[var(--color-text-secondary)]">
                    Futures Trading
                  </td>
                  {selectedExchanges.map(ex => (
                    <td
                      key={ex.id}
                      className="px-4 py-3 text-center"
                    >
                      <span className={`text-2xl ${ex.futuresTrading ? 'text-[var(--color-success)]' : 'text-[var(--color-text-secondary)]'}`}>
                        {ex.futuresTrading ? '✓' : '✕'}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Deposit Methods */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4 flex items-center gap-2">
            🏦 Deposit Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedExchanges.map(ex => (
              <div key={ex.id} className="glass-subtle p-4 rounded-xl">
                <h4 className="font-semibold text-[var(--color-text)] mb-3">
                  {ex.logo} {ex.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ex.depositMethods.map(method => (
                    <span
                      key={method}
                      className="inline-flex items-center glass-pill px-2.5 py-1 text-xs font-medium text-[var(--color-primary)]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
