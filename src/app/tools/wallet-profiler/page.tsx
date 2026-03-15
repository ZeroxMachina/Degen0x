'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  TrendingUp,
  TrendingDown,
  Zap,
  Shield,
  Coins,
  Calendar,
  Activity,
  Award,
  AlertCircle,
  Copy,
  CheckCircle2,
} from 'lucide-react';

// Types
interface Token {
  id: string;
  symbol: string;
  name: string;
  value: number;
  allocation: number;
  change24h: number;
  quantity: number;
}

interface DailyActivity {
  day: number;
  count: number;
}

interface RiskMetrics {
  concentrationRisk: number;
  memecoinExposure: number;
  stablecoinSafetyNet: number;
  defiScore: number;
  nftActivityLevel: number;
}

interface WalletProfile {
  address: string;
  degenScore: number;
  portfolioValue: number;
  totalTransactions: number;
  uniqueTokens: number;
  firstTxDate: Date;
  mostActiveChain: string;
  averageHoldTime: number;
  tokens: Token[];
  dailyActivity: DailyActivity[];
  riskMetrics: RiskMetrics;
  tradingPatterns: { type: string; percentage: number }[];
  badges: string[];
}

// Mock data generator
const generateMockProfile = (address: string): WalletProfile => {
  const degenScore = Math.floor(Math.random() * 100);
  const portfolioValue = Math.random() * 500000 + 10000;
  const totalTransactions = Math.floor(Math.random() * 5000 + 50);
  const uniqueTokens = Math.floor(Math.random() * 150 + 5);
  const firstTxDate = new Date(Date.now() - Math.random() * 126144000000); // 0-4 years ago
  const averageHoldTime = Math.floor(Math.random() * 180 + 5);

  // Generate tokens
  const tokenNames = [
    { symbol: 'ETH', name: 'Ethereum' },
    { symbol: 'BTC', name: 'Bitcoin' },
    { symbol: 'USDC', name: 'USD Coin' },
    { symbol: 'PEPE', name: 'Pepe' },
    { symbol: 'SHIB', name: 'Shiba Inu' },
    { symbol: 'DOGE', name: 'Dogecoin' },
    { symbol: 'APE', name: 'ApeCoin' },
    { symbol: 'ARB', name: 'Arbitrum' },
    { symbol: 'OP', name: 'Optimism' },
    { symbol: 'AAVE', name: 'Aave' },
    { symbol: 'UNI', name: 'Uniswap' },
    { symbol: 'LINK', name: 'Chainlink' },
    { symbol: 'FLOKI', name: 'Floki' },
    { symbol: 'BONK', name: 'Bonk' },
    { symbol: 'WIF', name: 'dogwifhat' },
  ];

  const tokens: Token[] = tokenNames.map((token, idx) => {
    const value = portfolioValue * (Math.random() * 0.3 + 0.01);
    return {
      id: `${idx}`,
      ...token,
      value,
      allocation: (value / portfolioValue) * 100,
      change24h: (Math.random() - 0.5) * 100,
      quantity: value / (Math.random() * 50000 + 100),
    };
  });

  // Daily activity
  const dailyActivity: DailyActivity[] = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    count: Math.floor(Math.random() * 30 + 1),
  }));

  // Risk metrics
  const riskMetrics: RiskMetrics = {
    concentrationRisk: Math.random() * 100,
    memecoinExposure: Math.random() * 100,
    stablecoinSafetyNet: Math.random() * 100,
    defiScore: Math.random() * 100,
    nftActivityLevel: Math.random() * 100,
  };

  // Trading patterns
  const tradingPatterns = [
    { type: 'Buy', percentage: Math.random() * 40 + 10 },
    { type: 'Sell', percentage: Math.random() * 40 + 10 },
    { type: 'Swap', percentage: Math.random() * 40 + 20 },
    { type: 'Bridge', percentage: Math.random() * 20 + 5 },
  ];
  const totalPatterns = tradingPatterns.reduce((sum, p) => sum + p.percentage, 0);
  tradingPatterns.forEach(p => (p.percentage = (p.percentage / totalPatterns) * 100));

  // Generate badges
  const badges = [];
  if (averageHoldTime > 90) badges.push('Diamond Hands');
  if (totalTransactions > 1000) badges.push('Gas Guzzler');
  if (uniqueTokens > 80) badges.push('Airdrop Farmer');
  if (riskMetrics.defiScore > 70) badges.push('DeFi Maxi');
  if (riskMetrics.memecoinExposure > 60) badges.push('Memecoin Degen');
  if (portfolioValue > 100000) badges.push('Whale');
  if (degenScore > 80) badges.push('Degen');
  if (totalTransactions > 500) badges.push('Active Trader');

  const chains = ['Ethereum', 'Arbitrum', 'Polygon', 'Optimism', 'Base'];
  const mostActiveChain = chains[Math.floor(Math.random() * chains.length)];

  return {
    address,
    degenScore,
    portfolioValue,
    totalTransactions,
    uniqueTokens,
    firstTxDate,
    mostActiveChain,
    averageHoldTime,
    tokens: tokens.sort((a, b) => b.value - a.value),
    dailyActivity,
    riskMetrics,
    tradingPatterns,
    badges: [...new Set(badges)],
  };
};

// Score badge renderer
const ScoreBadge = ({ score }: { score: number }) => {
  let label = '';
  let color = '';

  if (score < 20) {
    label = 'Paper Hands';
    color = 'text-red-500';
  } else if (score < 40) {
    label = 'Normie';
    color = 'text-yellow-500';
  } else if (score < 60) {
    label = 'Ape';
    color = 'text-blue-500';
  } else if (score < 80) {
    label = 'Degen';
    color = 'text-purple-500';
  } else {
    label = 'Mega Degen';
    color = 'text-pink-500';
  }

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(230, 237, 243, 0.1)"
            strokeWidth="6"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className={`${color} transition-all duration-700`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-[#e6edf3]">{score}</span>
          <span className="text-xs text-[#8b949e]">/ 100</span>
        </div>
      </div>
      <div className="text-center">
        <p className={`text-lg font-bold ${color}`}>{label}</p>
      </div>
    </div>
  );
};

// Main component
export default function WalletProfiler() {
  const [walletAddress, setWalletAddress] = useState('0x1234...5678');
  const [inputValue, setInputValue] = useState('');
  const [profile, setProfile] = useState<WalletProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const exampleAddresses = [
    '0xd8dA6BF26964aF9D7eEd9e03E53415D37AA96045',
    '0xCb2d20206D906069351C89a2CB7AA1f1F808BC12',
    '0x46705dfff24256421A05D056c29E81Bdc09723B89',
  ];

  const handleAnalyze = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    await new Promise(r => setTimeout(r, 800)); // Simulate API call
    const newProfile = generateMockProfile(inputValue);
    setProfile(newProfile);
    setWalletAddress(inputValue);
    setInputValue('');
    setLoading(false);
  };

  const handleExampleClick = (address: string) => {
    setInputValue(address);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const maxActivityCount = useMemo(() => {
    if (!profile) return 0;
    return Math.max(...profile.dailyActivity.map(d => d.count));
  }, [profile]);

  const getMetricColor = (value: number) => {
    if (value > 75) return 'text-green-500';
    if (value > 50) return 'text-yellow-500';
    if (value > 25) return 'text-orange-500';
    return 'text-red-500';
  };

  const getMetricBg = (value: number) => {
    if (value > 75) return 'bg-green-500/10';
    if (value > 50) return 'bg-yellow-500/10';
    if (value > 25) return 'bg-orange-500/10';
    return 'bg-red-500/10';
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-4 md:p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Wallet Profiler
          </h1>
          <p className="text-[#8b949e]">
            Analyze any crypto wallet and get a degen profile score
          </p>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-[#8b949e] w-5 h-5" />
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && handleAnalyze()}
                placeholder="Paste wallet address (0x...)"
                className="w-full pl-10 pr-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-[#e6edf3] placeholder-[#8b949e] focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition disabled:opacity-50"
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>

          {/* Example addresses */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-[#8b949e]">Examples:</span>
            {exampleAddresses.map(addr => (
              <button
                key={addr}
                onClick={() => handleExampleClick(addr)}
                className="px-3 py-1 text-xs bg-[#161b22] border border-[#30363d] rounded hover:border-purple-500 transition"
              >
                {addr.slice(0, 6)}...{addr.slice(-4)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Display */}
      {profile && (
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Wallet Address Bar */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#8b949e] mb-1">Wallet Address</p>
              <p className="font-mono text-sm">{walletAddress}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-2 hover:bg-[#30363d] rounded transition"
            >
              {copied ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5 text-[#8b949e]" />
              )}
            </button>
          </div>

          {/* Degen Score & Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Score */}
            <div className="lg:col-span-1 bg-[#161b22] border border-[#30363d] rounded-lg p-6 flex items-center justify-center">
              <ScoreBadge score={profile.degenScore} />
            </div>

            {/* Summary Cards */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  label: 'Portfolio Value',
                  value: `$${profile.portfolioValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
                  icon: Coins,
                },
                {
                  label: 'Total Transactions',
                  value: profile.totalTransactions.toLocaleString(),
                  icon: Activity,
                },
                {
                  label: 'Unique Tokens',
                  value: profile.uniqueTokens,
                  icon: TrendingUp,
                },
                {
                  label: 'Wallet Age',
                  value: `${Math.floor((Date.now() - profile.firstTxDate.getTime()) / (1000 * 60 * 60 * 24))} days`,
                  icon: Calendar,
                },
                {
                  label: 'Most Active Chain',
                  value: profile.mostActiveChain,
                  icon: Zap,
                },
                {
                  label: 'Avg Hold Time',
                  value: `${profile.averageHoldTime} days`,
                  icon: Shield,
                },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-purple-500 transition"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-purple-400" />
                      <p className="text-xs text-[#8b949e]">{stat.label}</p>
                    </div>
                    <p className="text-lg font-bold">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Token Holdings Table */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Coins className="w-5 h-5 text-purple-400" />
              Top Token Holdings
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d]">
                    <th className="text-left py-3 px-4 text-[#8b949e] font-semibold">
                      Token
                    </th>
                    <th className="text-right py-3 px-4 text-[#8b949e] font-semibold">
                      Allocation
                    </th>
                    <th className="text-right py-3 px-4 text-[#8b949e] font-semibold">
                      Value
                    </th>
                    <th className="text-right py-3 px-4 text-[#8b949e] font-semibold">
                      24h Change
                    </th>
                    <th className="text-right py-3 px-4 text-[#8b949e] font-semibold">
                      Holdings
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {profile.tokens.slice(0, 15).map((token, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#30363d] hover:bg-[#0d1117] transition"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
                          <div>
                            <p className="font-semibold">{token.symbol}</p>
                            <p className="text-xs text-[#8b949e]">{token.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4">
                        <div className="w-32 h-2 bg-[#30363d] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${token.allocation}%` }}
                          />
                        </div>
                        <p className="text-xs text-[#8b949e] mt-1">
                          {token.allocation.toFixed(1)}%
                        </p>
                      </td>
                      <td className="text-right py-3 px-4">
                        ${token.value.toLocaleString('en-US', {
                          maximumFractionDigits: 0,
                        })}
                      </td>
                      <td className="text-right py-3 px-4">
                        <div
                          className={`flex items-center justify-end gap-1 ${
                            token.change24h >= 0
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}
                        >
                          {token.change24h >= 0 ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {Math.abs(token.change24h).toFixed(1)}%
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 font-mono text-xs">
                        {token.quantity.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Transaction Activity (Last 30 Days)
            </h2>
            <div className="h-32 flex items-end gap-1">
              {profile.dailyActivity.map((day, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t hover:from-blue-400 hover:to-cyan-300 transition cursor-pointer group relative"
                    style={{
                      height: `${(day.count / maxActivityCount) * 100}%`,
                      minHeight: '4px',
                    }}
                  >
                    <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-[#0d1117] border border-[#30363d] rounded px-2 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                      Day {day.day}: {day.count} tx
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#8b949e] mt-4">
              Average daily transactions:{' '}
              {(profile.dailyActivity.reduce((sum, d) => sum + d.count, 0) / 30).toFixed(
                1,
              )}
            </p>
          </div>

          {/* Risk Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                label: 'Concentration Risk',
                value: profile.riskMetrics.concentrationRisk,
                description: 'Top token dominance',
              },
              {
                label: 'Memecoin Exposure',
                value: profile.riskMetrics.memecoinExposure,
                description: '% in memes',
              },
              {
                label: 'Stablecoin Safety',
                value: profile.riskMetrics.stablecoinSafetyNet,
                description: 'Risk buffer',
              },
              {
                label: 'DeFi Score',
                value: profile.riskMetrics.defiScore,
                description: 'Protocol activity',
              },
              {
                label: 'NFT Activity',
                value: profile.riskMetrics.nftActivityLevel,
                description: 'Collection level',
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                className={`bg-[#161b22] border border-[#30363d] rounded-lg p-4 ${getMetricBg(
                  metric.value,
                )}`}
              >
                <p className="text-xs text-[#8b949e] mb-2">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <span className={`text-2xl font-bold ${getMetricColor(metric.value)}`}>
                    {metric.value.toFixed(0)}
                  </span>
                  <span className="text-xs text-[#8b949e]">{metric.description}</span>
                </div>
                <div className="w-full h-1 bg-[#30363d] rounded-full mt-3 overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      metric.value > 75
                        ? 'bg-green-500'
                        : metric.value > 50
                          ? 'bg-yellow-500'
                          : metric.value > 25
                            ? 'bg-orange-500'
                            : 'bg-red-500'
                    }`}
                    style={{ width: `${metric.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Trading Patterns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Trading Activity Breakdown
              </h2>
              <div className="space-y-4">
                {profile.tradingPatterns.map((pattern, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-semibold">{pattern.type}</span>
                      <span className="text-sm text-[#8b949e]">
                        {pattern.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#30363d] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                        style={{ width: `${pattern.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges Section */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Wallet Achievements
              </h2>
              <div className="flex flex-wrap gap-3">
                {profile.badges.length > 0 ? (
                  profile.badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full flex items-center gap-2 hover:border-purple-400 transition"
                    >
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-semibold">{badge}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-[#8b949e] text-sm">No badges earned yet</p>
                )}
              </div>
            </div>
          </div>

          {/* Risk Warning */}
          {profile.riskMetrics.concentrationRisk > 60 && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-400">High Concentration Risk</p>
                <p className="text-sm text-[#8b949e] mt-1">
                  This wallet has heavy concentration in a single token. Consider diversifying
                  to reduce portfolio risk.
                </p>
              </div>
            </div>
          )}

          {profile.riskMetrics.memecoinExposure > 70 && (
            <div className="bg-orange-500/10 border border-orange-500/50 rounded-lg p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-orange-400">High Memecoin Exposure</p>
                <p className="text-sm text-[#8b949e] mt-1">
                  This wallet is heavily exposed to memecoin volatility. Maintain risk
                  management strategies.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {!profile && (
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-12 text-center">
            <Coins className="w-16 h-16 text-[#8b949e] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No Wallet Analyzed</h3>
            <p className="text-[#8b949e]">
              Paste a wallet address and click Analyze to get started. Try one of the example
              addresses above to see a full degen profile!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
