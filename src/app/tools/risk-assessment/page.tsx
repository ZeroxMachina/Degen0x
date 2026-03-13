'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

interface RiskResult {
  overallScore: number;
  grade: string;
  gradeColor: string;
  breakdown: { category: string; score: number; weight: number; factors: string[] }[];
  recommendations: string[];
  riskLevel: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
}

function calculateRisk(params: {
  allocation: number;
  leverage: number;
  diversification: number;
  timeHorizon: string;
  assetType: string;
  stopLoss: boolean;
  defiExposure: number;
  stablecoinRatio: number;
}): RiskResult {
  const breakdown: RiskResult['breakdown'] = [];

  // Position Size Risk
  const allocScore = params.allocation <= 5 ? 95 : params.allocation <= 15 ? 80 : params.allocation <= 30 ? 60 : params.allocation <= 50 ? 40 : 20;
  breakdown.push({
    category: 'Position Sizing',
    score: allocScore,
    weight: 25,
    factors: [
      `${params.allocation}% of portfolio in single position`,
      allocScore >= 80 ? 'Conservative allocation' : allocScore >= 50 ? 'Moderate risk' : 'Concentrated position risk',
    ],
  });

  // Leverage Risk
  const levScore = params.leverage <= 1 ? 100 : params.leverage <= 2 ? 75 : params.leverage <= 5 ? 50 : params.leverage <= 10 ? 25 : 10;
  breakdown.push({
    category: 'Leverage Exposure',
    score: levScore,
    weight: 25,
    factors: [
      `${params.leverage}x leverage`,
      params.leverage > 5 ? 'Extreme liquidation risk' : params.leverage > 2 ? 'Significant margin call risk' : 'Conservative leverage',
    ],
  });

  // Diversification
  const divScore = params.diversification >= 10 ? 95 : params.diversification >= 5 ? 80 : params.diversification >= 3 ? 60 : 30;
  breakdown.push({
    category: 'Diversification',
    score: divScore,
    weight: 20,
    factors: [
      `${params.diversification} assets in portfolio`,
      divScore >= 80 ? 'Well diversified' : divScore >= 50 ? 'Moderate diversification' : 'Concentrated portfolio',
    ],
  });

  // Time Horizon
  const timeScores: Record<string, number> = { 'long': 90, 'medium': 70, 'short': 50, 'day': 30 };
  const timeScore = timeScores[params.timeHorizon] || 50;
  breakdown.push({
    category: 'Time Horizon',
    score: timeScore,
    weight: 15,
    factors: [
      `${params.timeHorizon === 'long' ? 'Long-term (1yr+)' : params.timeHorizon === 'medium' ? 'Medium-term (3-12mo)' : params.timeHorizon === 'short' ? 'Short-term (1-90d)' : 'Day trading'} strategy`,
      params.stopLoss ? 'Stop-loss enabled' : 'No stop-loss protection',
    ],
  });

  // DeFi / Stablecoin mix
  const defiRisk = Math.max(0, 100 - params.defiExposure * 0.8);
  const stableBonus = params.stablecoinRatio * 0.5;
  const mixScore = Math.min(100, Math.round(defiRisk + stableBonus));
  breakdown.push({
    category: 'Protocol Risk',
    score: mixScore,
    weight: 15,
    factors: [
      `${params.defiExposure}% DeFi exposure`,
      `${params.stablecoinRatio}% stablecoin buffer`,
      params.defiExposure > 50 ? 'High smart contract risk' : 'Moderate protocol exposure',
    ],
  });

  const overallScore = Math.round(breakdown.reduce((sum, b) => sum + b.score * (b.weight / 100), 0));
  const grade = overallScore >= 90 ? 'A+' : overallScore >= 80 ? 'A' : overallScore >= 70 ? 'B' : overallScore >= 60 ? 'C' : overallScore >= 40 ? 'D' : 'F';
  const gradeColor = overallScore >= 80 ? '#22c55e' : overallScore >= 60 ? '#eab308' : '#ef4444';
  const riskLevel = overallScore >= 80 ? 'Very Low' : overallScore >= 65 ? 'Low' : overallScore >= 50 ? 'Medium' : overallScore >= 35 ? 'High' : 'Very High';

  const recommendations: string[] = [];
  if (params.allocation > 20) recommendations.push('Consider reducing your single-position allocation to under 20% of portfolio');
  if (params.leverage > 3) recommendations.push('High leverage increases liquidation risk exponentially. Consider reducing below 3x');
  if (params.diversification < 5) recommendations.push('Add more uncorrelated assets to improve diversification');
  if (!params.stopLoss) recommendations.push('Set stop-loss orders to limit downside on volatile positions');
  if (params.defiExposure > 50) recommendations.push('Spread DeFi exposure across multiple protocols to reduce smart contract risk');
  if (params.stablecoinRatio < 15) recommendations.push('Maintain at least 15% stablecoins as a safety buffer');
  if (recommendations.length === 0) recommendations.push('Your risk profile looks well-balanced. Continue monitoring your positions regularly.');

  return { overallScore, grade, gradeColor, breakdown, recommendations, riskLevel };
}

export default function RiskAssessment() {
  const [allocation, setAllocation] = useState(20);
  const [leverage, setLeverage] = useState(1);
  const [diversification, setDiversification] = useState(5);
  const [timeHorizon, setTimeHorizon] = useState('medium');
  const [assetType, setAssetType] = useState('mixed');
  const [stopLoss, setStopLoss] = useState(true);
  const [defiExposure, setDefiExposure] = useState(30);
  const [stablecoinRatio, setStablecoinRatio] = useState(20);
  const [result, setResult] = useState<RiskResult | null>(null);

  const assess = useCallback(() => {
    setResult(calculateRisk({ allocation, leverage, diversification, timeHorizon, assetType, stopLoss, defiExposure, stablecoinRatio }));
  }, [allocation, leverage, diversification, timeHorizon, assetType, stopLoss, defiExposure, stablecoinRatio]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      <style>{`
        .glass-card { background: rgba(22,27,34,0.8); backdrop-filter: blur(10px); border: 1px solid #30363d; border-radius: 12px; }
        input[type="range"] { -webkit-appearance: none; background: #1e293b; height: 6px; border-radius: 3px; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 18px; height: 18px; border-radius: 50%; background: #6366f1; cursor: pointer; }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-blue-400">Tools</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-300">Risk Assessment</span>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Portfolio Risk Assessment</span>
        </h1>
        <p className="text-gray-400 mb-8">Evaluate your crypto portfolio risk profile and get personalized recommendations</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Position Parameters</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2"><span>Single Position Size</span><span className="font-mono text-blue-400">{allocation}%</span></div>
                  <input type="range" min={1} max={100} value={allocation} onChange={e => setAllocation(+e.target.value)} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2"><span>Leverage</span><span className="font-mono text-blue-400">{leverage}x</span></div>
                  <input type="range" min={1} max={20} value={leverage} onChange={e => setLeverage(+e.target.value)} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2"><span>Number of Assets</span><span className="font-mono text-blue-400">{diversification}</span></div>
                  <input type="range" min={1} max={30} value={diversification} onChange={e => setDiversification(+e.target.value)} className="w-full" />
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Strategy</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Time Horizon</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[{ v: 'day', l: 'Day' }, { v: 'short', l: 'Short' }, { v: 'medium', l: 'Medium' }, { v: 'long', l: 'Long' }].map(t => (
                      <button key={t.v} onClick={() => setTimeHorizon(t.v)} className={`py-2 rounded-lg text-sm font-medium border transition ${timeHorizon === t.v ? 'bg-blue-600/20 border-blue-500 text-blue-400' : 'bg-[#161b22] border-[#30363d] text-gray-400'}`}>{t.l}</button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Stop-Loss Enabled</span>
                  <button onClick={() => setStopLoss(!stopLoss)} className={`w-12 h-6 rounded-full transition ${stopLoss ? 'bg-green-500' : 'bg-gray-600'} relative`}>
                    <span className={`block w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${stopLoss ? 'translate-x-6' : 'translate-x-0.5'}`} />
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Exposure</h3>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-sm mb-2"><span>DeFi Exposure</span><span className="font-mono text-blue-400">{defiExposure}%</span></div>
                  <input type="range" min={0} max={100} value={defiExposure} onChange={e => setDefiExposure(+e.target.value)} className="w-full" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2"><span>Stablecoin Buffer</span><span className="font-mono text-blue-400">{stablecoinRatio}%</span></div>
                  <input type="range" min={0} max={100} value={stablecoinRatio} onChange={e => setStablecoinRatio(+e.target.value)} className="w-full" />
                </div>
              </div>
            </div>

            <button onClick={assess} className="w-full py-3 rounded-xl font-bold text-lg bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition transform hover:scale-[1.02]">
              Assess My Risk
            </button>
          </div>

          {/* Results */}
          <div>
            {result ? (
              <div className="space-y-6">
                <div className="glass-card p-8 text-center">
                  <div className="text-8xl font-black mb-2" style={{ color: result.gradeColor }}>{result.grade}</div>
                  <div className="text-2xl font-bold mb-1">Risk Score: {result.overallScore}/100</div>
                  <div className="text-lg" style={{ color: result.gradeColor }}>{result.riskLevel} Risk</div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Risk Breakdown</h3>
                  <div className="space-y-4">
                    {result.breakdown.map(b => (
                      <div key={b.category}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{b.category}</span>
                          <span style={{ color: b.score >= 70 ? '#22c55e' : b.score >= 50 ? '#eab308' : '#ef4444' }}>{b.score}/100</span>
                        </div>
                        <div className="h-2 bg-[#1e293b] rounded-full overflow-hidden mb-2">
                          <div className="h-full rounded-full transition-all duration-700" style={{ width: `${b.score}%`, background: b.score >= 70 ? '#22c55e' : b.score >= 50 ? '#eab308' : '#ef4444' }} />
                        </div>
                        <div className="text-xs text-gray-500">{b.factors.join(' · ')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Recommendations</h3>
                  <div className="space-y-3">
                    {result.recommendations.map((r, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-[#1c2330]">
                        <span className="text-orange-400 mt-0.5">{'>'}</span>
                        <span className="text-sm text-gray-300">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-4 text-xs text-gray-500 text-center">
                  This tool is for educational purposes only. Not financial advice. Always DYOR and consult a financial advisor.
                </div>
              </div>
            ) : (
              <div className="glass-card p-12 text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2">Configure Your Portfolio</h3>
                <p className="text-gray-400">Adjust the parameters on the left and click &quot;Assess My Risk&quot; to get your personalized risk analysis.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
