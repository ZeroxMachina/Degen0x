'use client';

import { useState, useMemo } from 'react';

interface LendingProtocol {
  name: string;
  apy: number;
  icon: string;
}

const MAJOR_PROTOCOLS: LendingProtocol[] = [
  { name: 'Aave V3 (Ethereum)', apy: 5.2, icon: '👻' },
  { name: 'Compound V3', apy: 5.9, icon: '🔷' },
  { name: 'MakerDAO', apy: 5.2, icon: '🎨' },
  { name: 'Morpho Blue', apy: 8.6, icon: '🔵' },
  { name: 'Spark Protocol', apy: 6.8, icon: '✨' },
  { name: 'Yearn Finance', apy: 7.4, icon: '🔮' },
  { name: 'Pendle Finance', apy: 11.2, icon: '🌱' },
  { name: 'JustLend', apy: 9.4, icon: '⚡' },
];

export default function LendingCalculator() {
  const [depositAmount, setDepositAmount] = useState(10000);
  const [timeframeMonths, setTimeframeMonths] = useState(12);
  const [compoundFrequency, setCompoundFrequency] = useState<'daily' | 'monthly'>('daily');
  const [selectedProtocols, setSelectedProtocols] = useState<string[]>([
    'Aave V3 (Ethereum)',
    'Morpho Blue',
  ]);

  const calculateEarnings = (principal: number, apy: number, months: number, compound: 'daily' | 'monthly') => {
    const rate = apy / 100;
    let final = principal;

    if (compound === 'daily') {
      const dailyRate = rate / 365;
      const days = (months * 365) / 12;
      final = principal * Math.pow(1 + dailyRate, days);
    } else {
      const monthlyRate = rate / 12;
      final = principal * Math.pow(1 + monthlyRate, months);
    }

    const earnings = final - principal;
    return { final, earnings };
  };

  const calculations = useMemo(() => {
    return selectedProtocols.map((name) => {
      const protocol = MAJOR_PROTOCOLS.find((p) => p.name === name);
      if (!protocol) return null;

      const { final, earnings } = calculateEarnings(
        depositAmount,
        protocol.apy,
        timeframeMonths,
        compoundFrequency
      );

      return {
        name,
        apy: protocol.apy,
        icon: protocol.icon,
        final,
        earnings,
        earningsPercent: (earnings / depositAmount) * 100,
      };
    }).filter(Boolean);
  }, [depositAmount, timeframeMonths, compoundFrequency, selectedProtocols]);

  const totalEarnings = calculations.reduce((sum, calc) => sum + (calc?.earnings || 0), 0);
  const avgApy = selectedProtocols.length > 0
    ? MAJOR_PROTOCOLS.filter((p) => selectedProtocols.includes(p.name))
        .reduce((sum, p) => sum + p.apy, 0) / selectedProtocols.length
    : 0;

  const timeOptions = [
    { label: '1 Month', value: 1 },
    { label: '3 Months', value: 3 },
    { label: '6 Months', value: 6 },
    { label: '1 Year', value: 12 },
    { label: '2 Years', value: 24 },
    { label: '5 Years', value: 60 },
  ];

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Deposit Amount */}
          <div>
            <label className="block text-sm font-semibold text-[#e6edf3] mb-3">
              Deposit Amount (USD)
            </label>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Math.max(0, Number(e.target.value)))}
              className="w-full bg-[#161b22] border border-[#30363d] rounded-lg px-4 py-2 text-[#e6edf3] focus:border-[#58a6ff] focus:outline-none"
              placeholder="Enter amount in USD"
            />
            <div className="mt-2 text-xs text-[#8b949e]">
              Amount to deposit for calculation
            </div>
          </div>

          {/* Time Period */}
          <div>
            <label className="block text-sm font-semibold text-[#e6edf3] mb-3">
              Time Period
            </label>
            <div className="flex gap-2 flex-wrap">
              {timeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTimeframeMonths(opt.value)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    timeframeMonths === opt.value
                      ? 'bg-[#58a6ff] text-[var(--color-text)]'
                      : 'bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="mt-2 text-xs text-[#8b949e]">
              {timeframeMonths} month{timeframeMonths !== 1 ? 's' : ''}
            </div>
          </div>

          {/* Compound Frequency */}
          <div>
            <label className="block text-sm font-semibold text-[#e6edf3] mb-3">
              Compounding
            </label>
            <div className="flex gap-2">
              {(['daily', 'monthly'] as const).map((freq) => (
                <button
                  key={freq}
                  onClick={() => setCompoundFrequency(freq)}
                  className={`flex-1 px-3 py-2 rounded text-xs font-medium transition-all capitalize ${
                    compoundFrequency === freq
                      ? 'bg-[#58a6ff] text-[var(--color-text)]'
                      : 'bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:border-[#58a6ff]'
                  }`}
                >
                  {freq}
                </button>
              ))}
            </div>
            <div className="mt-2 text-xs text-[#8b949e]">
              Interest compounds {compoundFrequency}
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Selection */}
      <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-[#e6edf3] mb-4">
          Compare Protocols
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {MAJOR_PROTOCOLS.map((protocol) => (
            <button
              key={protocol.name}
              onClick={() =>
                setSelectedProtocols((prev) =>
                  prev.includes(protocol.name)
                    ? prev.filter((p) => p !== protocol.name)
                    : [...prev, protocol.name]
                )
              }
              className={`p-3 rounded-lg border transition-all text-left ${
                selectedProtocols.includes(protocol.name)
                  ? 'bg-[#58a6ff] border-[#58a6ff] text-[var(--color-text)]'
                  : 'bg-[#161b22] border-[#30363d] text-[#e6edf3] hover:border-[#58a6ff]'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{protocol.icon}</span>
                <span className="text-xs font-semibold">{protocol.apy.toFixed(1)}% APY</span>
              </div>
              <div className="text-xs text-[#8b949e] truncate">{protocol.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Summary Stats */}
      {selectedProtocols.length > 0 && (
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              label: 'Initial Deposit',
              value: `$${depositAmount.toLocaleString('en-US', { maximumFractionDigits: 0 })}`,
              icon: '💰',
            },
            {
              label: 'Total Earnings',
              value: `$${totalEarnings.toLocaleString('en-US', { maximumFractionDigits: 2 })}`,
              icon: '📈',
              highlight: true,
            },
            {
              label: 'Average APY',
              value: `${avgApy.toFixed(2)}%`,
              icon: '📊',
            },
            {
              label: 'Time Period',
              value: `${timeframeMonths} month${timeframeMonths !== 1 ? 's' : ''}`,
              icon: '⏱️',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className={`rounded-lg p-4 border ${
                stat.highlight
                  ? 'bg-[#0d1117] border-[#3fb950]'
                  : 'bg-[#0d1117] border-[#30363d]'
              }`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-xs text-[#8b949e] mb-1">{stat.label}</div>
              <div
                className={`text-lg font-bold ${
                  stat.highlight ? 'text-[#3fb950]' : 'text-[#58a6ff]'
                }`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detailed Comparison Table */}
      {selectedProtocols.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-[#30363d]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#161b22] border-b border-[#30363d]">
                <th className="px-4 py-3 text-left text-[#8b949e] font-semibold">Protocol</th>
                <th className="px-4 py-3 text-right text-[#8b949e] font-semibold">APY</th>
                <th className="px-4 py-3 text-right text-[#8b949e] font-semibold">Final Balance</th>
                <th className="px-4 py-3 text-right text-[#8b949e] font-semibold">Total Earnings</th>
                <th className="px-4 py-3 text-right text-[#8b949e] font-semibold">% Gain</th>
              </tr>
            </thead>
            <tbody>
              {calculations.map((calc, i) => (
                <tr
                  key={i}
                  className="border-b border-[#30363d] hover:bg-[#161b22] transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{calc?.icon}</span>
                      <span className="text-[#e6edf3] font-medium">{calc?.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-[#58a6ff] font-semibold">{calc?.apy.toFixed(2)}%</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-[#e6edf3] font-medium">
                      ${(calc?.final || 0).toLocaleString('en-US', { maximumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-[#3fb950] font-semibold">
                      ${(calc?.earnings || 0).toLocaleString('en-US', { maximumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-[#3fb950] font-semibold">
                      {(calc?.earningsPercent || 0).toFixed(2)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Calculator Tips */}
      <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-4">
        <h4 className="text-sm font-semibold text-[#e6edf3] mb-3">Calculator Notes</h4>
        <ul className="space-y-2 text-xs text-[#8b949e]">
          <li>• APY rates shown are estimates and subject to market changes</li>
          <li>• Daily compounding typically yields slightly more than monthly</li>
          <li>• This calculation does not account for gas fees, platform fees, or taxes</li>
          <li>• Actual yields may vary based on protocol mechanics and market conditions</li>
          <li>• Past APY does not guarantee future returns</li>
        </ul>
      </div>

      {/* Empty State */}
      {selectedProtocols.length === 0 && (
        <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-8 text-center">
          <p className="text-[#8b949e]">
            Select one or more protocols above to see earnings projections
          </p>
        </div>
      )}
    </div>
  );
}
