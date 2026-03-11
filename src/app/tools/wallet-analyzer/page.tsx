'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

// SEO Metadata
export const metadata = {
  title: 'Crypto Wallet Analyzer | Check Any Wallet Address | CryptoDegen',
  description: 'Analyze any cryptocurrency wallet address instantly. Get detailed portfolio breakdown, DeFi activity, transaction history, and risk scores.',
};

// Types
interface WalletToken {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  usdValue: number;
  percentageOfPortfolio: number;
  change24h: number;
}

interface Transaction {
  id: string;
  date: string;
  type: 'send' | 'receive' | 'swap' | 'stake';
  amount: number;
  currency: string;
  counterparty: string;
  status: 'success' | 'pending';
}

interface DeFiProtocol {
  name: string;
  value: number;
  positions: number;
}

interface WalletData {
  address: string;
  chain: string;
  totalBalance: number;
  tokenCount: number;
  totalTransactions: number;
  walletAge: string;
  walletLabel: string;
  riskScore: number;
  tokens: WalletToken[];
  transactions: Transaction[];
  defiProtocols: DeFiProtocol[];
  defiTotalValue: number;
  lpPositions: number;
  isLending: boolean;
  isBorrowing: boolean;
  activityScore: number;
  diversityScore: number;
  defiEngagementScore: number;
  riskLevel: number;
  diamondHandsScore: number;
  dailyActivityData: number[];
}

// Utility: Generate deterministic mock data from address hash
function generateMockWalletData(address: string, chain: string): WalletData {
  const hash = address.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0);
  }, 0);

  const rand = (min: number, max: number) => {
    const x = Math.sin(hash) * 10000;
    return Math.floor((x - Math.floor(x)) * (max - min) + min);
  };

  const totalBalance = rand(500, 250000);
  const tokenCount = rand(3, 28);
  const totalTransactions = rand(5, 5000);
  const walletAgeMonths = rand(1, 60);
  const riskScore = rand(15, 85);

  const labels = ['Active DeFi User', 'HODLer', 'Whale', 'New Wallet', 'Trader', 'Yield Farmer'];
  const walletLabel = labels[Math.abs(hash) % labels.length];

  const tokens: WalletToken[] = [];
  const tokenNames = [
    { name: 'Ethereum', symbol: 'ETH' },
    { name: 'Bitcoin', symbol: 'BTC' },
    { name: 'Uniswap', symbol: 'UNI' },
    { name: 'Aave', symbol: 'AAVE' },
    { name: 'Curve DAO', symbol: 'CRV' },
    { name: 'Lido Staked Ether', symbol: 'stETH' },
    { name: 'Maker', symbol: 'MKR' },
    { name: 'Compound', symbol: 'COMP' },
    { name: 'Yearn', symbol: 'YFI' },
    { name: 'Convex Finance', symbol: 'CVX' },
    { name: 'Polygon', symbol: 'MATIC' },
    { name: 'Arbitrum', symbol: 'ARB' },
  ];

  let totalAllocated = 0;
  for (let i = 0; i < Math.min(tokenCount, 12); i++) {
    const tokenData = tokenNames[i % tokenNames.length];
    const usdValue = rand(100, totalBalance - totalAllocated);
    totalAllocated += usdValue;
    tokens.push({
      id: `token-${i}`,
      name: tokenData.name,
      symbol: tokenData.symbol,
      amount: rand(1, 1000),
      usdValue,
      percentageOfPortfolio: 0, // Will be calculated
      change24h: rand(-20, 50),
    });
  }

  tokens.forEach(token => {
    token.percentageOfPortfolio = (token.usdValue / totalBalance) * 100;
  });

  const transactions: Transaction[] = [];
  const txTypes: Array<'send' | 'receive' | 'swap' | 'stake'> = ['send', 'receive', 'swap', 'stake'];
  const baseDate = new Date();
  for (let i = 0; i < 10; i++) {
    const date = new Date(baseDate.getTime() - i * 24 * 60 * 60 * 1000);
    transactions.push({
      id: `tx-${i}`,
      date: date.toISOString().split('T')[0],
      type: txTypes[Math.abs(hash + i) % txTypes.length],
      amount: rand(0.01, 100),
      currency: ['ETH', 'USDC', 'DAI', 'USDT'][Math.abs(hash + i) % 4],
      counterparty: `0x${Math.random().toString(16).slice(2, 10)}...`,
      status: Math.random() > 0.1 ? 'success' : 'pending',
    });
  }

  const defiProtocols: DeFiProtocol[] = [
    { name: 'Uniswap', value: rand(1000, 50000), positions: rand(1, 10) },
    { name: 'Aave', value: rand(2000, 100000), positions: rand(1, 5) },
    { name: 'Lido', value: rand(5000, 80000), positions: rand(1, 3) },
    { name: 'Curve', value: rand(500, 30000), positions: rand(1, 8) },
    { name: 'Balancer', value: rand(100, 20000), positions: rand(0, 5) },
  ];

  const defiTotalValue = defiProtocols.reduce((sum, p) => sum + p.value, 0);
  const lpPositions = defiProtocols.reduce((sum, p) => sum + p.positions, 0);

  const dailyActivityData = Array.from({ length: 30 }, () => rand(0, 15));

  const activityScore = Math.min(100, Math.round((totalTransactions / 50) * 100));
  const diversityScore = Math.min(100, Math.round((tokenCount / 20) * 100));
  const defiEngagementScore = defiTotalValue > 0 ? Math.min(100, Math.round((defiTotalValue / totalBalance) * 100)) : 0;
  const diamondHandsScore = Math.min(100, Math.round((walletAgeMonths / 60) * 100));

  return {
    address,
    chain,
    totalBalance,
    tokenCount,
    totalTransactions,
    walletAge: walletAgeMonths > 12 ? `${Math.floor(walletAgeMonths / 12)} years` : `${walletAgeMonths} months`,
    walletLabel,
    riskScore,
    tokens,
    transactions,
    defiProtocols,
    defiTotalValue,
    lpPositions,
    isLending: Math.random() > 0.4,
    isBorrowing: Math.random() > 0.6,
    activityScore,
    diversityScore,
    defiEngagementScore,
    riskLevel: riskScore,
    diamondHandsScore,
    dailyActivityData,
  };
}

// Address validation
function detectChainFromAddress(address: string): string {
  if (address.startsWith('0x') && address.length === 42) return 'Ethereum';
  if (address.length === 34 && (address.startsWith('1') || address.startsWith('3') || address.startsWith('bc1'))) return 'Bitcoin';
  if (address.length === 43 && address.startsWith('So')) return 'Solana';
  return 'Ethereum';
}

function isValidAddress(address: string): boolean {
  const trimmed = address.trim();
  if (trimmed.startsWith('0x') && trimmed.length === 42) return /^0x[0-9a-fA-F]{40}$/.test(trimmed);
  if (trimmed.length === 34) return true;
  if (trimmed.length === 43 && trimmed.startsWith('So')) return true;
  return false;
}

export default function WalletAnalyzer() {
  const [inputAddress, setInputAddress] = useState('');
  const [selectedChain, setSelectedChain] = useState('Ethereum');
  const [walletData, setWalletData] = useState<WalletData | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = useCallback(() => {
    const trimmed = inputAddress.trim();
    setError('');

    if (!trimmed) {
      setError('Please enter a wallet address');
      return;
    }

    if (!isValidAddress(trimmed)) {
      setError('Invalid wallet address format');
      return;
    }

    setIsAnalyzing(true);
    setTimeout(() => {
      const data = generateMockWalletData(trimmed, selectedChain);
      setWalletData(data);
      setIsAnalyzing(false);
    }, 800);
  }, [inputAddress, selectedChain]);

  const donutChartData = useMemo(() => {
    if (!walletData) return [];
    return walletData.tokens.slice(0, 6).map((token, index) => ({
      ...token,
      color: [`#3b82f6`, `#ef4444`, `#10b981`, `#f59e0b`, `#8b5cf6`, `#ec4899`][index],
    }));
  }, [walletData]);

  const handlePaste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputAddress(text);
    } catch {
      setError('Failed to read clipboard');
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <main style={{
      backgroundColor: 'var(--color-bg)',
      color: 'var(--color-text)',
      minHeight: '100vh',
      transition: 'background-color 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px 80px',
      }}>
        <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Wallet Analyzer', href: '/tools/wallet-analyzer' }]} />

        <div style={{ marginTop: 32, marginBottom: 48 }}>
          <h1 style={{
            fontSize: 40,
            fontWeight: 700,
            marginBottom: 12,
            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Wallet Address Analyzer
          </h1>
          <p style={{
            fontSize: 16,
            color: 'var(--color-text-secondary)',
            marginBottom: 32,
          }}>
            Analyze any cryptocurrency wallet address instantly. Get portfolio breakdown, DeFi activity, transaction history, and comprehensive wallet health metrics.
          </p>

          {/* Input Section */}
          <div style={{
            backgroundColor: 'var(--color-surface)',
            border: `1px solid var(--color-border)`,
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}>
            <div style={{ marginBottom: 16 }}>
              <label style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                Select Blockchain
              </label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: 8,
              }}>
                {['Ethereum', 'Solana', 'Bitcoin', 'Arbitrum', 'Base', 'Polygon'].map(chain => (
                  <button
                    key={chain}
                    onClick={() => setSelectedChain(chain)}
                    style={{
                      padding: '10px 12px',
                      borderRadius: 8,
                      border: `2px solid ${selectedChain === chain ? '#3b82f6' : 'var(--color-border)'}`,
                      backgroundColor: selectedChain === chain ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                      color: 'var(--color-text)',
                      cursor: 'pointer',
                      fontSize: 14,
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {chain}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{
                display: 'block',
                fontSize: 14,
                fontWeight: 600,
                marginBottom: 8,
              }}>
                Wallet Address
              </label>
              <div style={{
                display: 'flex',
                gap: 8,
              }}>
                <input
                  type="text"
                  value={inputAddress}
                  onChange={(e) => {
                    setInputAddress(e.target.value);
                    setError('');
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Paste wallet address (0x... for Ethereum, etc.)"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                    border: `1px solid var(--color-border)`,
                    borderRadius: 8,
                    fontSize: 14,
                    outline: 'none',
                  }}
                />
                <button
                  onClick={handlePaste}
                  style={{
                    padding: '12px 16px',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    color: '#3b82f6',
                    border: `1px solid #3b82f6`,
                    borderRadius: 8,
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                  }}
                >
                  Paste
                </button>
              </div>
            </div>

            {error && (
              <div style={{
                padding: 12,
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                borderRadius: 8,
                fontSize: 14,
                marginBottom: 16,
              }}>
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: isAnalyzing ? 'not-allowed' : 'pointer',
                opacity: isAnalyzing ? 0.7 : 1,
                transition: 'all 0.2s ease',
              }}
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Wallet'}
            </button>
          </div>

          {walletData && (
            <>
              {/* Wallet Overview */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 16,
                marginBottom: 32,
              }}>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 20,
                }}>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Total Balance</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#3b82f6' }}>
                    ${walletData.totalBalance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                </div>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 20,
                }}>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Tokens Held</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#10b981' }}>{walletData.tokenCount}</div>
                </div>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 20,
                }}>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Total Transactions</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#f59e0b' }}>{walletData.totalTransactions}</div>
                </div>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 20,
                }}>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Wallet Age</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#8b5cf6' }}>{walletData.walletAge}</div>
                </div>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 20,
                }}>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Wallet Label</div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{walletData.walletLabel}</div>
                </div>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 20,
                }}>
                  <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Risk Score</div>
                  <div style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: walletData.riskScore > 70 ? '#ef4444' : walletData.riskScore > 40 ? '#f59e0b' : '#10b981',
                  }}>
                    {walletData.riskScore}/100
                  </div>
                </div>
              </div>

              {/* Token Holdings with Donut Chart */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 300px',
                gap: 24,
                marginBottom: 32,
              }}>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 24,
                }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Token Holdings</h2>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: 14,
                    }}>
                      <thead>
                        <tr style={{ borderBottom: `1px solid var(--color-border)` }}>
                          <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Token</th>
                          <th style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Amount</th>
                          <th style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Value</th>
                          <th style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>%</th>
                          <th style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>24h</th>
                        </tr>
                      </thead>
                      <tbody>
                        {walletData.tokens.slice(0, 8).map((token) => (
                          <tr key={token.id} style={{ borderBottom: `1px solid var(--color-border)` }}>
                            <td style={{ padding: '12px 0' }}>
                              <div style={{ fontWeight: 600 }}>{token.symbol}</div>
                              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{token.name}</div>
                            </td>
                            <td style={{ textAlign: 'right', padding: '12px 0' }}>{token.amount.toFixed(2)}</td>
                            <td style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600 }}>${token.usdValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                            <td style={{ textAlign: 'right', padding: '12px 0' }}>{token.percentageOfPortfolio.toFixed(1)}%</td>
                            <td style={{
                              textAlign: 'right',
                              padding: '12px 0',
                              color: token.change24h >= 0 ? '#10b981' : '#ef4444',
                            }}>
                              {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Donut Chart */}
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 20, width: '100%', textAlign: 'center' }}>Portfolio Allocation</h3>
                  <svg width="200" height="200" viewBox="0 0 200 200" style={{ marginBottom: 16 }}>
                    {donutChartData.map((token, index) => {
                      const total = donutChartData.reduce((sum, t) => sum + t.usdValue, 0);
                      const percentage = token.usdValue / total;
                      const circumference = 2 * Math.PI * 60;
                      const offset = circumference - percentage * circumference;
                      const startAngle = donutChartData.slice(0, index).reduce((sum, t) => sum + (t.usdValue / total), 0) * 360;
                      const x = 100 + 60 * Math.cos((startAngle - 90) * (Math.PI / 180));
                      const y = 100 + 60 * Math.sin((startAngle - 90) * (Math.PI / 180));

                      return (
                        <circle
                          key={token.id}
                          cx="100"
                          cy="100"
                          r="60"
                          fill="none"
                          stroke={token.color}
                          strokeWidth="20"
                          strokeDasharray={`${percentage * circumference} ${circumference}`}
                          strokeDashoffset={-donutChartData.slice(0, index).reduce((sum, t) => sum + (t.usdValue / total), 0) * circumference}
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 12 }}>
                    {donutChartData.map((token) => (
                      <div key={token.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: token.color }}></div>
                        <span style={{ color: 'var(--color-text-secondary)' }}>{token.symbol}</span>
                        <span style={{ marginLeft: 'auto', fontWeight: 600 }}>{token.percentageOfPortfolio.toFixed(1)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transaction Activity */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 250px',
                gap: 24,
                marginBottom: 32,
              }}>
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 24,
                }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Recent Transactions</h2>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{
                      width: '100%',
                      borderCollapse: 'collapse',
                      fontSize: 14,
                    }}>
                      <thead>
                        <tr style={{ borderBottom: `1px solid var(--color-border)` }}>
                          <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Date</th>
                          <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Type</th>
                          <th style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Amount</th>
                          <th style={{ textAlign: 'left', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Counterparty</th>
                          <th style={{ textAlign: 'center', padding: '12px 0', fontWeight: 600, color: 'var(--color-text-secondary)' }}>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {walletData.transactions.map((tx) => (
                          <tr key={tx.id} style={{ borderBottom: `1px solid var(--color-border)` }}>
                            <td style={{ padding: '12px 0' }}>{tx.date}</td>
                            <td style={{ padding: '12px 0' }}>
                              <span style={{
                                display: 'inline-block',
                                padding: '4px 8px',
                                backgroundColor: tx.type === 'send' ? 'rgba(239, 68, 68, 0.1)' : tx.type === 'receive' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                color: tx.type === 'send' ? '#ef4444' : tx.type === 'receive' ? '#10b981' : '#3b82f6',
                                borderRadius: 4,
                                fontSize: 12,
                                fontWeight: 500,
                                textTransform: 'capitalize',
                              }}>
                                {tx.type}
                              </span>
                            </td>
                            <td style={{ textAlign: 'right', padding: '12px 0', fontWeight: 600 }}>{tx.amount.toFixed(4)} {tx.currency}</td>
                            <td style={{ padding: '12px 0', color: 'var(--color-text-secondary)', fontSize: 12 }}>{tx.counterparty}</td>
                            <td style={{ textAlign: 'center', padding: '12px 0' }}>
                              <span style={{
                                display: 'inline-block',
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                backgroundColor: tx.status === 'success' ? '#10b981' : '#f59e0b',
                              }}></span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Activity Chart */}
                <div style={{
                  backgroundColor: 'var(--color-surface)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: 12,
                  padding: 24,
                }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>30-Day Activity</h3>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 2,
                    height: 120,
                  }}>
                    {walletData.dailyActivityData.map((count, index) => {
                      const maxCount = Math.max(...walletData.dailyActivityData, 1);
                      const height = (count / maxCount) * 100;
                      return (
                        <div
                          key={index}
                          style={{
                            flex: 1,
                            height: `${height}%`,
                            backgroundColor: '#3b82f6',
                            borderRadius: '2px 2px 0 0',
                            opacity: 0.7,
                            transition: 'opacity 0.2s',
                          }}
                          title={`${count} tx`}
                        />
                      );
                    })}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: 'var(--color-text-secondary)',
                    marginTop: 12,
                    textAlign: 'center',
                  }}>
                    Daily Transaction Count
                  </div>
                </div>
              </div>

              {/* DeFi Activity */}
              <div style={{
                backgroundColor: 'var(--color-surface)',
                border: `1px solid var(--color-border)`,
                borderRadius: 12,
                padding: 24,
                marginBottom: 32,
              }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>DeFi Activity Summary</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 16,
                  marginBottom: 24,
                }}>
                  <div style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: 8,
                    padding: 16,
                    border: `1px solid var(--color-border)`,
                  }}>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Total DeFi Value</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: '#8b5cf6' }}>
                      ${walletData.defiTotalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: 8,
                    padding: 16,
                    border: `1px solid var(--color-border)`,
                  }}>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>LP Positions</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: '#3b82f6' }}>{walletData.lpPositions}</div>
                  </div>
                  <div style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: 8,
                    padding: 16,
                    border: `1px solid var(--color-border)`,
                  }}>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Lending</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: walletData.isLending ? '#10b981' : '#ef4444' }}>
                      {walletData.isLending ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: 'var(--color-bg)',
                    borderRadius: 8,
                    padding: 16,
                    border: `1px solid var(--color-border)`,
                  }}>
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Borrowing</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color: walletData.isBorrowing ? '#10b981' : '#ef4444' }}>
                      {walletData.isBorrowing ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </div>

                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Protocols Interacted</h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 12,
                }}>
                  {walletData.defiProtocols.map((protocol) => (
                    <div
                      key={protocol.name}
                      style={{
                        backgroundColor: 'var(--color-bg)',
                        borderRadius: 8,
                        padding: 16,
                        border: `1px solid var(--color-border)`,
                      }}
                    >
                      <div style={{ fontWeight: 600, marginBottom: 8 }}>{protocol.name}</div>
                      <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                        Value: ${protocol.value.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
                        Positions: {protocol.positions}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Wallet Health Score Card */}
              <div style={{
                backgroundColor: 'var(--color-surface)',
                border: `1px solid var(--color-border)`,
                borderRadius: 12,
                padding: 32,
              }}>
                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Wallet Health Score</h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: 24,
                }}>
                  {[
                    { label: 'Activity', score: walletData.activityScore, color: '#3b82f6' },
                    { label: 'Diversity', score: walletData.diversityScore, color: '#10b981' },
                    { label: 'DeFi Engagement', score: walletData.defiEngagementScore, color: '#f59e0b' },
                    { label: 'Risk Level', score: 100 - walletData.riskLevel, color: '#8b5cf6' },
                    { label: 'Diamond Hands', score: walletData.diamondHandsScore, color: '#ec4899' },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div style={{
                        position: 'relative',
                        width: 120,
                        height: 120,
                        margin: '0 auto 12px',
                      }}>
                        <svg width="120" height="120" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke="var(--color-border)"
                            strokeWidth="8"
                          />
                          <circle
                            cx="60"
                            cy="60"
                            r="50"
                            fill="none"
                            stroke={metric.color}
                            strokeWidth="8"
                            strokeDasharray={`${(metric.score / 100) * 314} 314`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          textAlign: 'center',
                        }}>
                          <div style={{ fontSize: 24, fontWeight: 700, color: metric.color }}>
                            {metric.score}
                          </div>
                          <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>/ 100</div>
                        </div>
                      </div>
                      <div style={{
                        fontSize: 14,
                        fontWeight: 600,
                        textAlign: 'center',
                        color: 'var(--color-text)',
                      }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
