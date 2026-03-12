'use client';

import { useState, useMemo, useEffect } from 'react';

interface Holding {
  id: string;
  symbol: string;
  name: string;
  amount: number;
  entryPrice: number;
  currentPrice: number;
  allocation: number;
}

interface PerformanceMetrics {
  daily: number;
  weekly: number;
  monthly: number;
}

const INITIAL_HOLDINGS: Holding[] = [
  { id: '1', symbol: 'BTC', name: 'Bitcoin', amount: 0.5, entryPrice: 42000, currentPrice: 51250, allocation: 40 },
  { id: '2', symbol: 'ETH', name: 'Ethereum', amount: 8, entryPrice: 2200, currentPrice: 3185, allocation: 30 },
  { id: '3', symbol: 'SOL', name: 'Solana', amount: 150, entryPrice: 120, currentPrice: 165, allocation: 15 },
  { id: '4', symbol: 'AVAX', name: 'Avalanche', amount: 100, entryPrice: 65, currentPrice: 92, allocation: 10 },
  { id: '5', symbol: 'LINK', name: 'Chainlink', amount: 200, entryPrice: 18, currentPrice: 27.50, allocation: 5 },
];

export default function PerformanceDashboard() {
  const [holdings] = useState<Holding[]>(INITIAL_HOLDINGS);
  const [animateGauge, setAnimateGauge] = useState(false);

  useEffect(() => {
    setAnimateGauge(true);
  }, []);

  // Calculate portfolio metrics
  const portfolioMetrics = useMemo(() => {
    const totalValue = holdings.reduce((sum, h) => sum + h.amount * h.currentPrice, 0);
    const totalCost = holdings.reduce((sum, h) => sum + h.amount * h.entryPrice, 0);
    const totalGain = totalValue - totalCost;
    const gainPercent = ((totalGain / totalCost) * 100).toFixed(2);

    // Simulate daily/weekly/monthly changes
    const dailyGain = (totalGain * 0.02).toFixed(2);
    const weeklyGain = (totalGain * 0.08).toFixed(2);
    const monthlyGain = (totalGain * 0.25).toFixed(2);

    return {
      totalValue: totalValue.toFixed(2),
      totalCost: totalCost.toFixed(2),
      totalGain: totalGain.toFixed(2),
      gainPercent: parseFloat(gainPercent),
      dailyGain: parseFloat(dailyGain),
      weeklyGain: parseFloat(weeklyGain),
      monthlyGain: parseFloat(monthlyGain),
    };
  }, [holdings]);

  // Performance score calculation
  const performanceScore = useMemo(() => {
    const gainScore = Math.min((portfolioMetrics.gainPercent + 50) * 0.8, 50);
    const diversificationScore = 50 - Math.abs(50 - (holdings.reduce((sum, h) => sum + h.allocation, 0) / holdings.length));
    return Math.round(gainScore + diversificationScore);
  }, [portfolioMetrics, holdings]);

  // Risk assessment
  const riskAssessment = useMemo(() => {
    const allocation = holdings.map(h => h.allocation);
    const topHolding = Math.max(...allocation);
    const btcDominance = holdings.find(h => h.symbol === 'BTC')?.allocation || 0;

    let riskLevel = 'Moderate';
    if (topHolding > 50 || btcDominance < 30) riskLevel = 'High';
    if (topHolding <= 35 && btcDominance >= 35) riskLevel = 'Low';

    return {
      riskLevel,
      diversificationScore: Math.round(100 - Math.abs(holdings.length * 5 - topHolding * 3)),
      concentrationRatio: topHolding,
      btcDominance,
    };
  }, [holdings]);

  const handleExport = () => {
    const data = {
      timestamp: new Date().toISOString(),
      portfolio: {
        totalValue: portfolioMetrics.totalValue,
        totalCost: portfolioMetrics.totalCost,
        totalGain: portfolioMetrics.totalGain,
        gainPercent: portfolioMetrics.gainPercent,
      },
      holdings: holdings.map(h => ({
        symbol: h.symbol,
        amount: h.amount,
        currentPrice: h.currentPrice,
        allocation: h.allocation,
      })),
      performanceScore,
      riskAssessment,
    };

    const dataStr = JSON.stringify(data, null, 2);
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dataStr));
    element.setAttribute('download', `portfolio-report-${Date.now()}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const gainColor = portfolioMetrics.gainPercent >= 0 ? '#3fb950' : '#f85149';
  const riskColor = riskAssessment.riskLevel === 'Low' ? '#3fb950' : riskAssessment.riskLevel === 'Moderate' ? '#58a6ff' : '#f85149';

  return (
    <div style={{ '--bg': '#0d1117', '--surface': '#161b22', '--border': '#30363d', '--text': '#e6edf3', '--text2': '#8b949e', '--green': '#3fb950', '--blue': '#58a6ff', '--red': '#f85149' } as React.CSSProperties}>
      <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--blue), var(--green))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Portfolio Performance Dashboard
            </h1>
            <p style={{ color: 'var(--text2)', fontSize: '1.125rem' }}>
              Real-time analytics for your crypto holdings
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {/* Total Value Card */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', transition: 'all 0.3s ease', cursor: 'pointer' }} className="hover:border-blue-500 hover:shadow-lg" onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <p style={{ color: 'var(--text2)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portfolio Value</p>
              <p style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>${parseFloat(portfolioMetrics.totalValue).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p style={{ color: 'var(--text2)', fontSize: '0.875rem' }}>Invested: ${parseFloat(portfolioMetrics.totalCost).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            </div>

            {/* Total Gain Card */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', transition: 'all 0.3s ease', cursor: 'pointer' }} className="hover:border-green-500 hover:shadow-lg" onMouseEnter={(e) => { e.currentTarget.style.borderColor = gainColor; e.currentTarget.style.boxShadow = `0 0 20px ${gainColor}33`; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <p style={{ color: 'var(--text2)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total P&L</p>
              <p style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: gainColor }}>${parseFloat(portfolioMetrics.totalGain).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              <p style={{ color: gainColor, fontSize: '0.875rem', fontWeight: '600' }}>{portfolioMetrics.gainPercent >= 0 ? '+' : ''}{portfolioMetrics.gainPercent.toFixed(2)}%</p>
            </div>

            {/* Performance Score Card */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', transition: 'all 0.3s ease', cursor: 'pointer' }} className="hover:border-blue-500 hover:shadow-lg" onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--blue)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.2)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <p style={{ color: 'var(--text2)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Performance Score</p>
              <p style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--blue)' }}>{performanceScore}/100</p>
              <div style={{ backgroundColor: 'var(--bg)', borderRadius: '0.375rem', height: '0.375rem', overflow: 'hidden', marginTop: '0.75rem' }}>
                <div style={{ width: `${performanceScore}%`, height: '100%', backgroundColor: performanceScore >= 70 ? 'var(--green)' : performanceScore >= 50 ? 'var(--blue)' : 'var(--red)', transition: 'width 0.6s ease', boxShadow: `0 0 10px ${performanceScore >= 70 ? 'var(--green)' : performanceScore >= 50 ? 'var(--blue)' : 'var(--red)'}` }} />
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* Holdings Table */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', gridColumn: 'span 1' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text)' }}>Holdings</h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                      <th style={{ textAlign: 'left', padding: '0.75rem 0', color: 'var(--text2)', fontWeight: '600' }}>Asset</th>
                      <th style={{ textAlign: 'right', padding: '0.75rem 0', color: 'var(--text2)', fontWeight: '600' }}>Amount</th>
                      <th style={{ textAlign: 'right', padding: '0.75rem 0', color: 'var(--text2)', fontWeight: '600' }}>Price</th>
                      <th style={{ textAlign: 'right', padding: '0.75rem 0', color: 'var(--text2)', fontWeight: '600' }}>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((holding) => (
                      <tr key={holding.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background-color 0.2s ease' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(88, 166, 255, 0.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                        <td style={{ padding: '0.75rem 0', color: 'var(--text)', fontWeight: '600' }}>
                          <span style={{ display: 'block' }}>{holding.symbol}</span>
                          <span style={{ color: 'var(--text2)', fontSize: '0.75rem' }}>{holding.name}</span>
                        </td>
                        <td style={{ padding: '0.75rem 0', textAlign: 'right', color: 'var(--text)' }}>{holding.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })}</td>
                        <td style={{ padding: '0.75rem 0', textAlign: 'right', color: 'var(--blue)' }}>${holding.currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td style={{ padding: '0.75rem 0', textAlign: 'right', color: 'var(--text)', fontWeight: '600' }}>${(holding.amount * holding.currentPrice).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Portfolio Allocation Pie Chart */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gridColumn: 'span 1' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', color: 'var(--text)', width: '100%' }}>Portfolio Allocation</h2>
              <svg width="250" height="250" viewBox="0 0 250 250" style={{ marginBottom: '2rem' }}>
                {holdings.reduce((slices, holding, index) => {
                  const colors = ['#58a6ff', '#3fb950', '#f85149', '#d29922', '#a371f7'];
                  const angle = (holding.allocation / 100) * 360;
                  const startAngle = slices.reduce((sum, s) => sum + s.angle, 0);
                  const endAngle = startAngle + angle;

                  const startRad = (startAngle - 90) * (Math.PI / 180);
                  const endRad = (endAngle - 90) * (Math.PI / 180);

                  const x1 = 125 + 80 * Math.cos(startRad);
                  const y1 = 125 + 80 * Math.sin(startRad);
                  const x2 = 125 + 80 * Math.cos(endRad);
                  const y2 = 125 + 80 * Math.sin(endRad);

                  const largeArc = angle > 180 ? 1 : 0;

                  const path = `M 125 125 L ${x1} ${y1} A 80 80 0 ${largeArc} 1 ${x2} ${y2} Z`;

                  return [
                    ...slices,
                    {
                      angle,
                      element: (
                        <path
                          key={holding.id}
                          d={path}
                          fill={colors[index]}
                          stroke="var(--bg)"
                          strokeWidth="2"
                          style={{ transition: 'opacity 0.3s ease', cursor: 'pointer' }}
                          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                        />
                      ),
                    },
                  ];
                }, [] as any[])}
                {holdings.reduce((slices, holding, index) => {
                  const colors = ['#58a6ff', '#3fb950', '#f85149', '#d29922', '#a371f7'];
                  const angle = (holding.allocation / 100) * 360;
                  const startAngle = slices.reduce((sum, s) => sum + s.angle, 0);
                  return [
                    ...slices,
                    {
                      angle,
                      element: (
                        <g key={`label-${holding.id}`}>
                          {slices.map((s, i) => {
                            const midAngle = (startAngle + angle / 2 - 90) * (Math.PI / 180);
                            const labelRadius = 110;
                            const lx = 125 + labelRadius * Math.cos(midAngle);
                            const ly = 125 + labelRadius * Math.sin(midAngle);
                            return null;
                          })}
                        </g>
                      ),
                    },
                  ];
                }, [] as any[])}
              </svg>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', width: '100%' }}>
                {holdings.map((holding, index) => {
                  const colors = ['#58a6ff', '#3fb950', '#f85149', '#d29922', '#a371f7'];
                  return (
                    <div key={holding.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '12px', height: '12px', backgroundColor: colors[index], borderRadius: '2px' }} />
                      <div style={{ fontSize: '0.75rem' }}>
                        <p style={{ color: 'var(--text)', fontWeight: '600' }}>{holding.symbol}</p>
                        <p style={{ color: 'var(--text2)' }}>{holding.allocation}%</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Performance & Risk Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {/* P&L Performance */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text)' }}>P&L Performance</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                {[
                  { label: '24H', value: portfolioMetrics.dailyGain, percent: (portfolioMetrics.dailyGain / parseFloat(portfolioMetrics.totalCost) * 100).toFixed(2) },
                  { label: '7D', value: portfolioMetrics.weeklyGain, percent: (portfolioMetrics.weeklyGain / parseFloat(portfolioMetrics.totalCost) * 100).toFixed(2) },
                  { label: '30D', value: portfolioMetrics.monthlyGain, percent: (portfolioMetrics.monthlyGain / parseFloat(portfolioMetrics.totalCost) * 100).toFixed(2) },
                ].map((period) => (
                  <div key={period.label} style={{ backgroundColor: 'var(--bg)', borderRadius: '0.5rem', padding: '1rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                    <p style={{ color: 'var(--text2)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: '600' }}>{period.label}</p>
                    <p style={{ color: parseFloat(period.percent) >= 0 ? 'var(--green)' : 'var(--red)', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.25rem' }}>{parseFloat(period.percent) >= 0 ? '+' : ''}{period.percent}%</p>
                    <p style={{ color: 'var(--text2)', fontSize: '0.75rem' }}>${Math.abs(period.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Assessment */}
            <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text)' }}>Risk Assessment</h2>
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <p style={{ color: 'var(--text2)', fontSize: '0.875rem', fontWeight: '600' }}>Risk Level</p>
                    <span style={{ backgroundColor: riskColor, color: '#0d1117', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '700' }}>{riskAssessment.riskLevel}</span>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <p style={{ color: 'var(--text2)', fontSize: '0.875rem', fontWeight: '600' }}>Diversification Score</p>
                    <p style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: '700' }}>{riskAssessment.diversificationScore}/100</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg)', borderRadius: '0.375rem', height: '0.375rem', overflow: 'hidden' }}>
                    <div style={{ width: `${riskAssessment.diversificationScore}%`, height: '100%', backgroundColor: 'var(--blue)', transition: 'width 0.6s ease' }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <p style={{ color: 'var(--text2)', fontSize: '0.875rem', fontWeight: '600' }}>Top Holding</p>
                    <p style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: '700' }}>{riskAssessment.concentrationRatio}%</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg)', borderRadius: '0.375rem', height: '0.375rem', overflow: 'hidden' }}>
                    <div style={{ width: `${riskAssessment.concentrationRatio}%`, height: '100%', backgroundColor: riskAssessment.concentrationRatio > 50 ? 'var(--red)' : 'var(--green)', transition: 'width 0.6s ease' }} />
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <p style={{ color: 'var(--text2)', fontSize: '0.875rem', fontWeight: '600' }}>BTC Dominance</p>
                    <p style={{ color: 'var(--text)', fontSize: '0.875rem', fontWeight: '700' }}>{riskAssessment.btcDominance}%</p>
                  </div>
                  <div style={{ backgroundColor: 'var(--bg)', borderRadius: '0.375rem', height: '0.375rem', overflow: 'hidden' }}>
                    <div style={{ width: `${riskAssessment.btcDominance}%`, height: '100%', backgroundColor: 'var(--blue)', transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Gauge */}
          <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '2rem', marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem', color: 'var(--text)' }}>Overall Performance Gauge</h2>
            <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto', marginBottom: '2rem' }}>
              {/* Gauge background */}
              <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', top: 0, left: 0 }}>
                {/* Gauge arc background */}
                <path
                  d="M 30 170 A 100 100 0 0 1 170 170"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="10"
                />
                {/* Gauge arc fill */}
                <path
                  d="M 30 170 A 100 100 0 0 1 170 170"
                  fill="none"
                  stroke={performanceScore >= 70 ? 'var(--green)' : performanceScore >= 50 ? 'var(--blue)' : 'var(--red)'}
                  strokeWidth="10"
                  strokeDasharray={`${(performanceScore / 100) * (Math.PI * 100)} ${Math.PI * 100}`}
                  style={{ transition: 'stroke-dasharray 0.8s ease', filter: 'drop-shadow(0 0 10px currentColor)' }}
                  strokeLinecap="round"
                />
                {/* Center circle */}
                <circle cx="100" cy="100" r="70" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
              </svg>

              {/* Text in center */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', zIndex: 10 }}>
                <p style={{ fontSize: '3rem', fontWeight: '700', color: performanceScore >= 70 ? 'var(--green)' : performanceScore >= 50 ? 'var(--blue)' : 'var(--red)', margin: 0 }}>{performanceScore}</p>
                <p style={{ color: 'var(--text2)', fontSize: '0.875rem', margin: '0.5rem 0 0 0', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>Score</p>
              </div>
            </div>
            <p style={{ color: 'var(--text2)', fontSize: '0.875rem', marginBottom: '1rem' }}>
              {performanceScore >= 80 ? 'Excellent portfolio performance' : performanceScore >= 60 ? 'Good diversification and returns' : performanceScore >= 40 ? 'Moderate risk-reward balance' : 'Consider rebalancing your portfolio'}
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
            <button
              onClick={handleExport}
              style={{
                backgroundColor: 'var(--blue)',
                color: '#0d1117',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px rgba(88, 166, 255, 0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              📥 Export Portfolio Report
            </button>
            <button
              onClick={() => alert('Rebalancing feature coming soon!')}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--blue)',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid var(--blue)',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(88, 166, 255, 0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              ⚖️ Rebalance Portfolio
            </button>
          </div>

          {/* Footer note */}
          <div style={{ backgroundColor: 'rgba(88, 166, 255, 0.05)', border: '1px solid var(--border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center', color: 'var(--text2)', fontSize: '0.875rem' }}>
            <p style={{ margin: 0 }}>
              This is a simulated portfolio tracker with mock data. Prices update in real-time simulation. For production use, integrate with live market data APIs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
