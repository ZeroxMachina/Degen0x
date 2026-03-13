'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

interface Holding {
  id: string;
  name: string;
  symbol: string;
  purchaseDate: string;
  buyPrice: number;
  currentPrice: number;
  quantity: number;
  taxLot: string;
}

const SAMPLE_HOLDINGS: Holding[] = [
  { id: '1', name: 'Bitcoin', symbol: 'BTC', purchaseDate: '2025-01-15', buyPrice: 98000, currentPrice: 82000, quantity: 0.5, taxLot: 'FIFO' },
  { id: '2', name: 'Ethereum', symbol: 'ETH', purchaseDate: '2025-03-01', buyPrice: 3200, currentPrice: 2100, quantity: 8, taxLot: 'FIFO' },
  { id: '3', name: 'Solana', symbol: 'SOL', purchaseDate: '2025-06-10', buyPrice: 180, currentPrice: 145, quantity: 100, taxLot: 'FIFO' },
  { id: '4', name: 'Cardano', symbol: 'ADA', purchaseDate: '2025-08-20', buyPrice: 0.85, currentPrice: 0.72, quantity: 5000, taxLot: 'FIFO' },
  { id: '5', name: 'Chainlink', symbol: 'LINK', purchaseDate: '2024-11-05', buyPrice: 22, currentPrice: 18.5, quantity: 200, taxLot: 'FIFO' },
  { id: '6', name: 'Polkadot', symbol: 'DOT', purchaseDate: '2025-04-12', buyPrice: 9.5, currentPrice: 6.8, quantity: 500, taxLot: 'FIFO' },
];

let nextId = 7;

const TAX_BRACKETS = [
  { label: '0% (Under $47,025)', rate: 0 },
  { label: '15% ($47,025 – $518,900)', rate: 15 },
  { label: '20% (Over $518,900)', rate: 20 },
];

const SHORT_TERM_BRACKETS = [
  { label: '10% ($11,601 – $47,150)', rate: 10 },
  { label: '12% ($47,151 – $100,525)', rate: 12 },
  { label: '22% ($100,526 – $191,950)', rate: 22 },
  { label: '24% ($191,951 – $243,725)', rate: 24 },
  { label: '32% ($243,726 – $609,350)', rate: 32 },
  { label: '35% ($609,351 – $731,200)', rate: 35 },
  { label: '37% (Over $731,200)', rate: 37 },
];

export default function TaxLossHarvester() {
  const [holdings, setHoldings] = useState<Holding[]>(SAMPLE_HOLDINGS);
  const [capitalGainsBracket, setCapitalGainsBracket] = useState(15);
  const [shortTermRate, setShortTermRate] = useState(22);
  const [stateRate, setStateRate] = useState(5);
  const [washSaleWarning, setWashSaleWarning] = useState(true);

  const analysis = useMemo(() => {
    const now = new Date();
    return holdings.map((h) => {
      const costBasis = h.buyPrice * h.quantity;
      const currentValue = h.currentPrice * h.quantity;
      const gainLoss = currentValue - costBasis;
      const gainLossPct = costBasis > 0 ? ((gainLoss / costBasis) * 100) : 0;
      const purchaseDate = new Date(h.purchaseDate);
      const daysHeld = Math.floor((now.getTime() - purchaseDate.getTime()) / (1000 * 60 * 60 * 24));
      const isLongTerm = daysHeld >= 365;
      const effectiveRate = isLongTerm ? capitalGainsBracket + stateRate : shortTermRate + stateRate;
      const taxImpact = gainLoss < 0 ? Math.abs(gainLoss) * (effectiveRate / 100) : -(gainLoss * (effectiveRate / 100));
      return { ...h, costBasis, currentValue, gainLoss, gainLossPct, daysHeld, isLongTerm, effectiveRate, taxImpact };
    });
  }, [holdings, capitalGainsBracket, shortTermRate, stateRate]);

  const losers = useMemo(() => analysis.filter((a) => a.gainLoss < 0).sort((a, b) => a.gainLoss - b.gainLoss), [analysis]);
  const winners = useMemo(() => analysis.filter((a) => a.gainLoss > 0).sort((a, b) => b.gainLoss - a.gainLoss), [analysis]);

  const totalUnrealizedLoss = useMemo(() => losers.reduce((s, l) => s + l.gainLoss, 0), [losers]);
  const totalUnrealizedGain = useMemo(() => winners.reduce((s, w) => s + w.gainLoss, 0), [winners]);
  const totalTaxSavings = useMemo(() => losers.reduce((s, l) => s + l.taxImpact, 0), [losers]);
  const annualDeductionCap = 3000;
  const netGainLoss = totalUnrealizedGain + totalUnrealizedLoss;
  const effectiveDeduction = netGainLoss < 0 ? Math.min(Math.abs(netGainLoss), annualDeductionCap) : 0;

  const addHolding = () => {
    const id = String(nextId++);
    setHoldings((prev) => [...prev, { id, name: '', symbol: '', purchaseDate: '2025-01-01', buyPrice: 0, currentPrice: 0, quantity: 0, taxLot: 'FIFO' }]);
  };

  const removeHolding = (id: string) => setHoldings((prev) => prev.filter((h) => h.id !== id));

  const updateHolding = (id: string, field: keyof Holding, value: string | number) => {
    setHoldings((prev) => prev.map((h) => (h.id === id ? { ...h, [field]: value } : h)));
  };

  const fmt = (n: number) => {
    const abs = Math.abs(n);
    const sign = n < 0 ? '-' : '';
    if (abs >= 1000) return `${sign}$${(abs / 1000).toFixed(1)}K`;
    return `${sign}$${abs.toFixed(0)}`;
  };

  const fmtFull = (n: number) => `$${Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', color: '#e6edf3', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid #21262d' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#58a6ff', textDecoration: 'none' }}>Home</Link><span>/</span>
          <Link href="/tools" style={{ color: '#58a6ff', textDecoration: 'none' }}>Tools</Link><span>/</span>
          <span style={{ color: '#e6edf3' }}>Tax Loss Harvester</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 32 }}>🧾</span>
            <h1 style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Tax Loss Harvesting Analyzer
            </h1>
            <span style={{ background: '#3fb95020', color: '#3fb950', border: '1px solid #3fb95040', borderRadius: 6, padding: '3px 10px', fontSize: 12, fontWeight: 600 }}>Free Tool</span>
          </div>
          <p style={{ color: '#8b949e', fontSize: 16, maxWidth: 700, lineHeight: 1.6 }}>
            Identify tax-loss harvesting opportunities in your crypto portfolio. Calculate potential savings, track holding periods, and understand wash sale implications.
          </p>
        </div>

        {/* Tax Settings */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 24 }}>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>Long-Term Capital Gains Rate</div>
            <select value={capitalGainsBracket} onChange={(e) => setCapitalGainsBracket(Number(e.target.value))} style={{ width: '100%', padding: '8px 10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, color: '#e6edf3', fontSize: 13 }}>
              {TAX_BRACKETS.map((b) => <option key={b.rate} value={b.rate}>{b.label}</option>)}
            </select>
          </div>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>Short-Term / Ordinary Income Rate</div>
            <select value={shortTermRate} onChange={(e) => setShortTermRate(Number(e.target.value))} style={{ width: '100%', padding: '8px 10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, color: '#e6edf3', fontSize: 13 }}>
              {SHORT_TERM_BRACKETS.map((b) => <option key={b.rate} value={b.rate}>{b.label}</option>)}
            </select>
          </div>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>State Tax Rate (%)</div>
            <input type="number" min={0} max={15} step={0.1} value={stateRate} onChange={(e) => setStateRate(Number(e.target.value))} style={{ width: '100%', padding: '8px 10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: 6, color: '#e6edf3', fontSize: 13, outline: 'none' }} />
          </div>
        </div>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 24 }}>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Unrealized Losses</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#f85149', marginTop: 4 }}>{fmt(totalUnrealizedLoss)}</div>
            <div style={{ fontSize: 12, color: '#8b949e' }}>{losers.length} positions</div>
          </div>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Unrealized Gains</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#3fb950', marginTop: 4 }}>{fmt(totalUnrealizedGain)}</div>
            <div style={{ fontSize: 12, color: '#8b949e' }}>{winners.length} positions</div>
          </div>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Potential Tax Savings</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#10b981', marginTop: 4 }}>{fmt(totalTaxSavings)}</div>
            <div style={{ fontSize: 12, color: '#8b949e' }}>by harvesting all losses</div>
          </div>
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 600, textTransform: 'uppercase' }}>Annual Deduction (if net loss)</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#58a6ff', marginTop: 4 }}>{fmt(effectiveDeduction)}</div>
            <div style={{ fontSize: 12, color: '#8b949e' }}>Max $3K/yr against income</div>
          </div>
        </div>

        {/* Wash Sale Warning */}
        {washSaleWarning && (
          <div style={{ background: '#d2992215', border: '1px solid #d2992240', borderRadius: 10, padding: '14px 16px', marginBottom: 24, display: 'flex', alignItems: 'start', gap: 12 }}>
            <span style={{ fontSize: 20 }}>⚠️</span>
            <div>
              <div style={{ fontWeight: 700, color: '#d29922', fontSize: 14, marginBottom: 4 }}>Wash Sale Rule (IRS Notice 2014-21)</div>
              <div style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.6 }}>
                As of 2026, the IRS wash sale rule applies to crypto assets. You cannot claim a loss if you buy a substantially identical asset within 30 days before or after the sale. Plan your harvesting accordingly.
              </div>
            </div>
            <button onClick={() => setWashSaleWarning(false)} style={{ background: 'none', border: 'none', color: '#8b949e', cursor: 'pointer', fontSize: 16, padding: 4 }}>×</button>
          </div>
        )}

        {/* Holdings Table */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
          <div style={{ padding: '14px 16px', borderBottom: '1px solid #30363d', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 16 }}>📋</span>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Holdings Analysis</span>
            </div>
            <button onClick={addHolding} style={{ padding: '6px 14px', borderRadius: 6, border: '1px solid #30363d', background: '#161b22', color: '#58a6ff', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>+ Add Holding</button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  {['Asset', 'Qty', 'Buy Price', 'Current', 'Cost Basis', 'Value', 'Gain/Loss', '%', 'Days', 'Type', 'Tax Savings', ''].map((h, i) => (
                    <th key={i} style={{ padding: '10px 12px', textAlign: 'left', color: '#8b949e', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {analysis.map((a) => (
                  <tr key={a.id} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '10px 12px' }}>
                      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <input value={a.name} onChange={(e) => updateHolding(a.id, 'name', e.target.value)} style={{ width: 90, background: '#0d1117', border: '1px solid #30363d', borderRadius: 4, padding: '4px 6px', color: '#e6edf3', fontSize: 12, outline: 'none' }} />
                        <span style={{ fontSize: 11, color: '#8b949e' }}>
                          <input value={a.symbol} onChange={(e) => updateHolding(a.id, 'symbol', e.target.value.toUpperCase())} style={{ width: 45, background: '#0d1117', border: '1px solid #30363d', borderRadius: 4, padding: '4px 4px', color: '#8b949e', fontSize: 11, textAlign: 'center', outline: 'none' }} />
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '10px 8px' }}>
                      <input type="number" value={a.quantity || ''} onChange={(e) => updateHolding(a.id, 'quantity', Number(e.target.value))} style={{ width: 70, background: '#0d1117', border: '1px solid #30363d', borderRadius: 4, padding: '4px 6px', color: '#e6edf3', fontSize: 12, outline: 'none' }} />
                    </td>
                    <td style={{ padding: '10px 8px' }}>
                      <input type="number" value={a.buyPrice || ''} onChange={(e) => updateHolding(a.id, 'buyPrice', Number(e.target.value))} style={{ width: 80, background: '#0d1117', border: '1px solid #30363d', borderRadius: 4, padding: '4px 6px', color: '#e6edf3', fontSize: 12, outline: 'none' }} />
                    </td>
                    <td style={{ padding: '10px 8px' }}>
                      <input type="number" value={a.currentPrice || ''} onChange={(e) => updateHolding(a.id, 'currentPrice', Number(e.target.value))} style={{ width: 80, background: '#0d1117', border: '1px solid #30363d', borderRadius: 4, padding: '4px 6px', color: '#e6edf3', fontSize: 12, outline: 'none' }} />
                    </td>
                    <td style={{ padding: '10px 8px', fontWeight: 600, whiteSpace: 'nowrap' }}>{fmtFull(a.costBasis)}</td>
                    <td style={{ padding: '10px 8px', fontWeight: 600, whiteSpace: 'nowrap' }}>{fmtFull(a.currentValue)}</td>
                    <td style={{ padding: '10px 8px', fontWeight: 700, color: a.gainLoss >= 0 ? '#3fb950' : '#f85149', whiteSpace: 'nowrap' }}>
                      {a.gainLoss >= 0 ? '+' : '-'}{fmtFull(a.gainLoss)}
                    </td>
                    <td style={{ padding: '10px 8px', fontSize: 12, color: a.gainLossPct >= 0 ? '#3fb950' : '#f85149' }}>
                      {a.gainLossPct >= 0 ? '+' : ''}{a.gainLossPct.toFixed(1)}%
                    </td>
                    <td style={{ padding: '10px 8px', fontSize: 12, color: '#8b949e' }}>{a.daysHeld}d</td>
                    <td style={{ padding: '10px 8px' }}>
                      <span style={{ padding: '3px 8px', borderRadius: 4, fontSize: 11, fontWeight: 600, background: a.isLongTerm ? '#3fb95015' : '#58a6ff15', color: a.isLongTerm ? '#3fb950' : '#58a6ff', border: `1px solid ${a.isLongTerm ? '#3fb95030' : '#58a6ff30'}` }}>
                        {a.isLongTerm ? 'Long' : 'Short'}
                      </span>
                    </td>
                    <td style={{ padding: '10px 8px', fontWeight: 700, color: a.taxImpact > 0 ? '#10b981' : '#8b949e', whiteSpace: 'nowrap' }}>
                      {a.gainLoss < 0 ? `+${fmt(a.taxImpact)}` : '—'}
                    </td>
                    <td style={{ padding: '10px 8px' }}>
                      <button onClick={() => removeHolding(a.id)} style={{ width: 24, height: 24, borderRadius: 4, border: '1px solid #30363d', background: 'transparent', color: '#f85149', cursor: 'pointer', fontSize: 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Harvesting Recommendations */}
        {losers.length > 0 && (
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>🎯</span> Harvesting Recommendations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {losers.map((l, i) => (
                <div key={l.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: '#0d1117', borderRadius: 8, border: '1px solid #21262d' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#f8514920', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#f85149' }}>{i + 1}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>Sell {l.symbol}</div>
                      <div style={{ fontSize: 12, color: '#8b949e' }}>
                        {l.isLongTerm ? 'Long-term' : 'Short-term'} loss of {fmt(l.gainLoss)} ({l.gainLossPct.toFixed(1)}%)
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 700, color: '#10b981', fontSize: 16 }}>Save {fmt(l.taxImpact)}</div>
                    <div style={{ fontSize: 11, color: '#8b949e' }}>at {l.effectiveRate}% effective rate</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Educational Content */}
        <div style={{ maxWidth: 800, marginTop: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16 }}>Tax Loss Harvesting for Crypto</h2>
          <div style={{ color: '#8b949e', lineHeight: 1.8, fontSize: 15 }}>
            <p style={{ marginBottom: 16 }}>Tax-loss harvesting is the strategy of selling investments at a loss to offset capital gains taxes. For crypto investors, this can be especially powerful due to the market{"'"}s high volatility — positions that are underwater today may present significant tax savings.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: '#e6edf3' }}>How it works:</strong> When you sell a crypto asset at a loss, you can use that loss to offset capital gains from other assets. If your losses exceed your gains, you can deduct up to $3,000 per year against ordinary income, with remaining losses carried forward.</p>
            <p style={{ marginBottom: 16 }}><strong style={{ color: '#e6edf3' }}>2026 Update:</strong> Starting in 2025, the wash sale rule now applies to digital assets. You must wait at least 30 days before repurchasing the same or substantially identical crypto asset after a tax-loss sale.</p>
          </div>
          <div style={{ marginTop: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Related Tools</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              {[
                { href: '/tools/tax-calculator', icon: '🧮', title: 'Tax Calculator' },
                { href: '/tools/portfolio-rebalancer', icon: '⚖️', title: 'Portfolio Rebalancer' },
                { href: '/tools/pnl-calculator', icon: '📊', title: 'P&L Calculator' },
                { href: '/tools/portfolio-tracker', icon: '📈', title: 'Portfolio Tracker' },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 8, background: '#161b22', border: '1px solid #30363d', textDecoration: 'none', color: '#e6edf3', fontSize: 13, fontWeight: 500 }}>
                  <span>{tool.icon}</span><span>{tool.title}</span>
                </Link>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 24, padding: '12px 16px', background: '#1c2330', borderRadius: 8, fontSize: 12, color: '#8b949e', lineHeight: 1.6 }}>
            <strong style={{ color: '#d29922' }}>Disclaimer:</strong> This tool is for educational purposes only and does not constitute tax advice. Tax laws vary by jurisdiction and change frequently. Consult a qualified tax professional for your specific situation.
          </div>
        </div>
      </div>
    </div>
  );
}
