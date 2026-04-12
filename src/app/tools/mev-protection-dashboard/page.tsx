'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface MEVAttack {
  id: number;
  type: 'Sandwich' | 'Frontrun' | 'Backrun' | 'JIT Liquidity' | 'Liquidation';
  protocol: string;
  chain: string;
  extractedUSD: number;
  victimLossUSD: number;
  attackerProfit: number;
  txHash: string;
  blockNumber: number;
  timestamp: string;
  tokenPair: string;
  riskLevel: 'Critical' | 'High' | 'Medium' | 'Low';
}

interface ProtectionStrategy {
  name: string;
  type: string;
  description: string;
  protectionLevel: number;
  latencyImpact: string;
  costImpact: string;
  chains: string[];
  pros: string[];
  cons: string[];
}

const MOCK_ATTACKS: MEVAttack[] = [
  { id: 1, type: 'Sandwich', protocol: 'Uniswap V3', chain: 'Ethereum', extractedUSD: 42300, victimLossUSD: 38700, attackerProfit: 3600, txHash: '0x1a2b...3c4d', blockNumber: 19847321, timestamp: '2 min ago', tokenPair: 'WETH/USDC', riskLevel: 'Critical' },
  { id: 2, type: 'Frontrun', protocol: 'Curve', chain: 'Ethereum', extractedUSD: 18500, victimLossUSD: 15200, attackerProfit: 3300, txHash: '0x5e6f...7g8h', blockNumber: 19847318, timestamp: '5 min ago', tokenPair: 'stETH/ETH', riskLevel: 'High' },
  { id: 3, type: 'JIT Liquidity', protocol: 'Uniswap V3', chain: 'Ethereum', extractedUSD: 8900, victimLossUSD: 2100, attackerProfit: 6800, txHash: '0x9i0j...1k2l', blockNumber: 19847315, timestamp: '8 min ago', tokenPair: 'PEPE/WETH', riskLevel: 'Medium' },
  { id: 4, type: 'Sandwich', protocol: 'PancakeSwap', chain: 'BSC', extractedUSD: 31200, victimLossUSD: 27800, attackerProfit: 3400, txHash: '0x3m4n...5o6p', blockNumber: 38291045, timestamp: '12 min ago', tokenPair: 'CAKE/BNB', riskLevel: 'High' },
  { id: 5, type: 'Liquidation', protocol: 'Aave V3', chain: 'Ethereum', extractedUSD: 156000, victimLossUSD: 142000, attackerProfit: 14000, txHash: '0x7q8r...9s0t', blockNumber: 19847310, timestamp: '15 min ago', tokenPair: 'WBTC/USDT', riskLevel: 'Critical' },
  { id: 6, type: 'Backrun', protocol: 'SushiSwap', chain: 'Arbitrum', extractedUSD: 5400, victimLossUSD: 1200, attackerProfit: 4200, txHash: '0xab12...cd34', blockNumber: 192847102, timestamp: '18 min ago', tokenPair: 'ARB/USDC', riskLevel: 'Low' },
  { id: 7, type: 'Sandwich', protocol: 'TraderJoe', chain: 'Avalanche', extractedUSD: 12800, victimLossUSD: 11400, attackerProfit: 1400, txHash: '0xef56...gh78', blockNumber: 43291087, timestamp: '22 min ago', tokenPair: 'AVAX/USDC', riskLevel: 'High' },
  { id: 8, type: 'Frontrun', protocol: 'Uniswap V3', chain: 'Polygon', extractedUSD: 7600, victimLossUSD: 6100, attackerProfit: 1500, txHash: '0xij90...kl12', blockNumber: 54019283, timestamp: '25 min ago', tokenPair: 'MATIC/USDT', riskLevel: 'Medium' },
  { id: 9, type: 'JIT Liquidity', protocol: 'Uniswap V3', chain: 'Ethereum', extractedUSD: 22100, victimLossUSD: 4300, attackerProfit: 17800, txHash: '0xmn34...op56', blockNumber: 19847305, timestamp: '30 min ago', tokenPair: 'UNI/WETH', riskLevel: 'Medium' },
  { id: 10, type: 'Sandwich', protocol: 'Camelot', chain: 'Arbitrum', extractedUSD: 9700, victimLossUSD: 8400, attackerProfit: 1300, txHash: '0xqr78...st90', blockNumber: 192847090, timestamp: '35 min ago', tokenPair: 'MAGIC/ETH', riskLevel: 'Medium' },
  { id: 11, type: 'Liquidation', protocol: 'Compound V3', chain: 'Ethereum', extractedUSD: 89000, victimLossUSD: 78500, attackerProfit: 10500, txHash: '0xuv12...wx34', blockNumber: 19847298, timestamp: '40 min ago', tokenPair: 'ETH/USDC', riskLevel: 'Critical' },
  { id: 12, type: 'Sandwich', protocol: 'Velodrome', chain: 'Optimism', extractedUSD: 6200, victimLossUSD: 5500, attackerProfit: 700, txHash: '0xyz56...ab78', blockNumber: 115928374, timestamp: '45 min ago', tokenPair: 'OP/USDC', riskLevel: 'Low' },
];

const PROTECTION_STRATEGIES: ProtectionStrategy[] = [
  { name: 'Flashbots Protect', type: 'Private Mempool', description: 'Submit transactions directly to block builders, bypassing the public mempool entirely. Your pending tx is invisible to searchers.', protectionLevel: 95, latencyImpact: 'Minimal (+1-2 blocks)', costImpact: 'Free', chains: ['Ethereum'], pros: ['Free to use', 'Near-complete sandwich protection', 'No failed tx gas waste'], cons: ['Ethereum only', 'Slight latency increase', 'Builder centralization risk'] },
  { name: 'MEV Blocker (CoW Protocol)', type: 'Private Mempool', description: 'Sends transactions to multiple builders with backrun auction. Victims actually get rebates from backrun profits.', protectionLevel: 92, latencyImpact: 'Low (+1-3 blocks)', costImpact: 'Free (earn rebates)', chains: ['Ethereum'], pros: ['Earn MEV rebates', 'Multi-builder competition', 'Strong sandwich protection'], cons: ['Ethereum mainnet only', 'May have slightly slower inclusion'] },
  { name: 'High Slippage Avoidance', type: 'User Config', description: 'Set slippage tolerance to 0.5% or lower. High slippage (5-20%) is the #1 enabler of sandwich attacks.', protectionLevel: 70, latencyImpact: 'None', costImpact: 'May cause failed txs', chains: ['All'], pros: ['Works everywhere', 'No extra tools needed', 'Immediate'], cons: ['Trades may fail in volatile markets', 'Doesn\'t prevent frontrunning'] },
  { name: 'Limit Orders (CoW Swap)', type: 'DEX Feature', description: 'Use batch auctions and limit orders that execute at uniform clearing prices, eliminating frontrunning opportunities.', protectionLevel: 88, latencyImpact: 'Variable (batch timing)', costImpact: 'Free (gasless orders)', chains: ['Ethereum', 'Gnosis'], pros: ['Gasless orders', 'Batch auction pricing', 'MEV-resistant by design'], cons: ['Not instant execution', 'Limited chain support', 'Unfamiliar UX'] },
  { name: 'Private RPC (Alchemy/Infura)', type: 'Infrastructure', description: 'Use a private RPC endpoint that doesn\'t broadcast to the public mempool. Reduces exposure window.', protectionLevel: 60, latencyImpact: 'None', costImpact: 'Paid plans ($49-499/mo)', chains: ['Multi-chain'], pros: ['Multi-chain support', 'Additional features', 'Professional infrastructure'], cons: ['Monthly cost', 'Partial protection only', 'Still visible to some builders'] },
  { name: 'Transaction Splitting', type: 'User Strategy', description: 'Break large swaps into smaller chunks executed over time. Reduces profitability of sandwich attacks on any single trade.', protectionLevel: 55, latencyImpact: 'High (multiple txs)', costImpact: 'Higher gas costs', chains: ['All'], pros: ['Works on any chain', 'Reduces per-trade impact', 'Simple to implement'], cons: ['Higher total gas', 'Price may move between trades', 'Manual effort'] },
];

const CHAINS = ['All', 'Ethereum', 'BSC', 'Arbitrum', 'Polygon', 'Avalanche', 'Optimism'];
const ATTACK_TYPES = ['All', 'Sandwich', 'Frontrun', 'Backrun', 'JIT Liquidity', 'Liquidation'];

function formatUSD(n: number) { return '$' + n.toLocaleString(); }
function riskColor(level: string) {
  if (level === 'Critical') return '#f85149';
  if (level === 'High') return '#f0883e';
  if (level === 'Medium') return '#d29922';
  return '#3fb950';
}
function typeColor(type: string) {
  if (type === 'Sandwich') return '#f85149';
  if (type === 'Frontrun') return '#f0883e';
  if (type === 'Backrun') return '#58a6ff';
  if (type === 'JIT Liquidity') return '#bc8cff';
  return '#d29922';
}

export default function MEVProtectionDashboard() {
  const [chainFilter, setChainFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [activeTab, setActiveTab] = useState<'live' | 'protect' | 'simulate'>('live');
  const [expandedAttack, setExpandedAttack] = useState<number | null>(null);
  const [expandedStrategy, setExpandedStrategy] = useState<number | null>(null);
  const [simSlippage, setSimSlippage] = useState(1);
  const [simTradeSize, setSimTradeSize] = useState(10000);

  const filtered = useMemo(() => {
    return MOCK_ATTACKS.filter(a => {
      if (chainFilter !== 'All' && a.chain !== chainFilter) return false;
      if (typeFilter !== 'All' && a.type !== typeFilter) return false;
      return true;
    });
  }, [chainFilter, typeFilter]);

  const stats = useMemo(() => {
    const total = filtered.reduce((s, a) => s + a.extractedUSD, 0);
    const profit = filtered.reduce((s, a) => s + a.attackerProfit, 0);
    const sandwich = filtered.filter(a => a.type === 'Sandwich').length;
    const critical = filtered.filter(a => a.riskLevel === 'Critical').length;
    return { total, profit, sandwich, critical, count: filtered.length };
  }, [filtered]);

  const simMEVExposure = useMemo(() => {
    const exposure = simTradeSize * (simSlippage / 100) * 0.6;
    const sandwichProb = Math.min(95, simSlippage * 18 + (simTradeSize > 50000 ? 20 : simTradeSize > 10000 ? 10 : 0));
    const expectedLoss = exposure * (sandwichProb / 100);
    return { exposure, sandwichProb, expectedLoss };
  }, [simSlippage, simTradeSize]);

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', color: '#e6edf3' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 16px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'MEV Protection Dashboard' }]} />

        {/* Hero */}
        <div style={{ textAlign: 'center', margin: '32px 0 24px' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🛡️</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #f85149, #f0883e, #d29922)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>
            MEV Protection Dashboard
          </h1>
          <p style={{ color: '#8b949e', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Monitor MEV extraction in real-time. Visualize sandwich attacks, frontrunning, and JIT liquidity. Score your transaction&apos;s MEV exposure and discover protection strategies.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
            <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: '#f8514920', color: '#f85149', fontWeight: 600 }}>Real-Time Monitoring</span>
            <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: '#58a6ff20', color: '#58a6ff', fontWeight: 600 }}>6 Protection Strategies</span>
            <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: '#3fb95020', color: '#3fb950', fontWeight: 600 }}>TX Simulator</span>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 24 }}>
          {[
            { label: 'MEV Extracted (1hr)', value: formatUSD(stats.total), color: '#f85149' },
            { label: 'Attacker Profit', value: formatUSD(stats.profit), color: '#f0883e' },
            { label: 'Sandwich Attacks', value: stats.sandwich.toString(), color: '#d29922' },
            { label: 'Critical Events', value: stats.critical.toString(), color: '#bc8cff' },
            { label: 'Total Events', value: stats.count.toString(), color: '#58a6ff' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderLeft: `3px solid ${s.color}`, borderRadius: 10, padding: 16 }}>
              <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: s.color }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {(['live', 'protect', 'simulate'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid ' + (activeTab === tab ? '#58a6ff' : '#30363d'), background: activeTab === tab ? '#58a6ff20' : '#161b22', color: activeTab === tab ? '#58a6ff' : '#8b949e', cursor: 'pointer', fontWeight: 700, fontSize: 13, textTransform: 'capitalize' }}>
              {tab === 'live' ? '🔴 Live Feed' : tab === 'protect' ? '🛡️ Protection' : '🧪 Simulator'}
            </button>
          ))}
        </div>

        {/* Live Feed Tab */}
        {activeTab === 'live' && (
          <>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <select value={chainFilter} onChange={e => setChainFilter(e.target.value)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #30363d', background: '#161b22', color: '#e6edf3', fontSize: 12 }}>
                {CHAINS.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)} style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #30363d', background: '#161b22', color: '#e6edf3', fontSize: 12 }}>
                {ATTACK_TYPES.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {filtered.map(a => (
                <div key={a.id} onClick={() => setExpandedAttack(expandedAttack === a.id ? null : a.id)} style={{ background: '#161b22', border: '1px solid #30363d', borderLeft: `3px solid ${typeColor(a.type)}`, borderRadius: 10, padding: 14, cursor: 'pointer', transition: 'transform 0.15s', }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{a.type}</span>
                      <span style={{ color: '#8b949e', fontSize: 12, marginLeft: 8 }}>{a.protocol} · {a.chain}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#f85149' }}>{formatUSD(a.extractedUSD)}</span>
                      <span style={{ fontSize: 10, padding: '2px 8px', borderRadius: 4, background: riskColor(a.riskLevel) + '20', color: riskColor(a.riskLevel), fontWeight: 700 }}>{a.riskLevel}</span>
                      <span style={{ fontSize: 11, color: '#8b949e' }}>{a.timestamp}</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: '#8b949e', marginTop: 4 }}>{a.tokenPair} · Block #{a.blockNumber.toLocaleString()} · TX: {a.txHash}</div>
                  {expandedAttack === a.id && (
                    <div style={{ marginTop: 12, padding: 12, background: '#0d1117', borderRadius: 8, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, fontSize: 12 }}>
                      <div>
                        <div style={{ color: '#8b949e', fontSize: 10, marginBottom: 2 }}>Victim Loss</div>
                        <div style={{ fontWeight: 700, color: '#f85149' }}>{formatUSD(a.victimLossUSD)}</div>
                      </div>
                      <div>
                        <div style={{ color: '#8b949e', fontSize: 10, marginBottom: 2 }}>Attacker Profit</div>
                        <div style={{ fontWeight: 700, color: '#f0883e' }}>{formatUSD(a.attackerProfit)}</div>
                      </div>
                      <div>
                        <div style={{ color: '#8b949e', fontSize: 10, marginBottom: 2 }}>Gas Overhead</div>
                        <div style={{ fontWeight: 700, color: '#d29922' }}>{formatUSD(a.extractedUSD - a.victimLossUSD - a.attackerProfit)}</div>
                      </div>
                      <div style={{ gridColumn: '1 / -1', padding: 10, background: '#161b22', borderRadius: 6 }}>
                        <div style={{ fontSize: 10, color: '#8b949e', marginBottom: 4 }}>How This Attack Worked</div>
                        <div style={{ fontSize: 11, lineHeight: 1.6, color: '#e6edf3' }}>
                          {a.type === 'Sandwich' && `The attacker spotted a pending ${a.tokenPair} swap in the mempool. They front-ran the victim's trade with a buy, then back-ran it with a sell, profiting from the price impact the victim's trade created.`}
                          {a.type === 'Frontrun' && `The attacker detected a large ${a.tokenPair} swap and submitted a competing transaction with higher gas to execute before the victim, capturing the expected price movement.`}
                          {a.type === 'Backrun' && `The attacker waited for the victim's large ${a.tokenPair} swap to create an arbitrage opportunity, then immediately submitted a trade to capture the price discrepancy.`}
                          {a.type === 'JIT Liquidity' && `A searcher provided concentrated liquidity on ${a.tokenPair} just before the victim's swap, earned swap fees, then removed liquidity immediately after. The victim got slightly worse execution.`}
                          {a.type === 'Liquidation' && `The attacker monitored an under-collateralized ${a.tokenPair} position on ${a.protocol} and submitted the liquidation call to claim the liquidation bonus.`}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Protection Strategies Tab */}
        {activeTab === 'protect' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {PROTECTION_STRATEGIES.map((s, i) => (
              <div key={i} onClick={() => setExpandedStrategy(expandedStrategy === i ? null : i)} style={{ background: '#161b22', border: '1px solid #30363d', borderLeft: `3px solid ${s.protectionLevel >= 90 ? '#3fb950' : s.protectionLevel >= 70 ? '#58a6ff' : '#d29922'}`, borderRadius: 10, padding: 16, cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{s.name}</span>
                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, marginLeft: 8, background: '#58a6ff20', color: '#58a6ff' }}>{s.type}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 80, height: 6, background: '#21262d', borderRadius: 3 }}>
                      <div style={{ width: `${s.protectionLevel}%`, height: '100%', borderRadius: 3, background: s.protectionLevel >= 90 ? '#3fb950' : s.protectionLevel >= 70 ? '#58a6ff' : '#d29922' }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: s.protectionLevel >= 90 ? '#3fb950' : s.protectionLevel >= 70 ? '#58a6ff' : '#d29922' }}>{s.protectionLevel}%</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: '#8b949e', marginTop: 6, lineHeight: 1.5 }}>{s.description}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  {s.chains.map(c => (
                    <span key={c} style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#bc8cff20', color: '#bc8cff', fontWeight: 600 }}>{c}</span>
                  ))}
                  <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#3fb95020', color: '#3fb950', fontWeight: 600 }}>Cost: {s.costImpact}</span>
                  <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#d2992220', color: '#d29922', fontWeight: 600 }}>Latency: {s.latencyImpact}</span>
                </div>
                {expandedStrategy === i && (
                  <div style={{ marginTop: 12, padding: 12, background: '#0d1117', borderRadius: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, color: '#3fb950', marginBottom: 6 }}>Pros</div>
                      {s.pros.map((p, j) => <div key={j} style={{ color: '#e6edf3', marginBottom: 4 }}>✅ {p}</div>)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#f85149', marginBottom: 6 }}>Cons</div>
                      {s.cons.map((c, j) => <div key={j} style={{ color: '#e6edf3', marginBottom: 4 }}>⚠️ {c}</div>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Simulator Tab */}
        {activeTab === 'simulate' && (
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>🧪 Transaction MEV Exposure Simulator</h3>
            <p style={{ fontSize: 13, color: '#8b949e', marginBottom: 20, lineHeight: 1.6 }}>
              Estimate how exposed your swap is to MEV extraction. Adjust trade size and slippage tolerance to see your risk profile.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
              <div>
                <label style={{ fontSize: 12, color: '#8b949e', fontWeight: 600, display: 'block', marginBottom: 6 }}>Trade Size (USD)</label>
                <input type="range" min={1000} max={500000} step={1000} value={simTradeSize} onChange={e => setSimTradeSize(Number(e.target.value))} style={{ width: '100%' }} />
                <div style={{ fontSize: 18, fontWeight: 800, color: '#58a6ff', marginTop: 4 }}>{formatUSD(simTradeSize)}</div>
              </div>
              <div>
                <label style={{ fontSize: 12, color: '#8b949e', fontWeight: 600, display: 'block', marginBottom: 6 }}>Slippage Tolerance (%)</label>
                <input type="range" min={0.1} max={20} step={0.1} value={simSlippage} onChange={e => setSimSlippage(Number(e.target.value))} style={{ width: '100%' }} />
                <div style={{ fontSize: 18, fontWeight: 800, color: simSlippage > 3 ? '#f85149' : simSlippage > 1 ? '#d29922' : '#3fb950', marginTop: 4 }}>{simSlippage.toFixed(1)}%</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
              <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 10, padding: 16, borderLeft: '3px solid #f85149' }}>
                <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Max MEV Exposure</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#f85149' }}>{formatUSD(Math.round(simMEVExposure.exposure))}</div>
                <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>Maximum extractable value from your trade</div>
              </div>
              <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 10, padding: 16, borderLeft: '3px solid #d29922' }}>
                <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Sandwich Probability</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: simMEVExposure.sandwichProb > 50 ? '#f85149' : simMEVExposure.sandwichProb > 25 ? '#d29922' : '#3fb950' }}>{simMEVExposure.sandwichProb.toFixed(0)}%</div>
                <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>Likelihood of being sandwiched</div>
              </div>
              <div style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: 10, padding: 16, borderLeft: '3px solid #f0883e' }}>
                <div style={{ fontSize: 11, color: '#8b949e', fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 }}>Expected Loss</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#f0883e' }}>{formatUSD(Math.round(simMEVExposure.expectedLoss))}</div>
                <div style={{ fontSize: 11, color: '#8b949e', marginTop: 4 }}>Statistical expected loss per trade</div>
              </div>
            </div>
            <div style={{ marginTop: 20, padding: 16, background: '#0d1117', borderRadius: 8, border: '1px solid #30363d' }}>
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: simMEVExposure.sandwichProb > 50 ? '#f85149' : simMEVExposure.sandwichProb > 25 ? '#d29922' : '#3fb950' }}>
                {simMEVExposure.sandwichProb > 50 ? '🚨 High Risk' : simMEVExposure.sandwichProb > 25 ? '⚠️ Medium Risk' : '✅ Low Risk'} — Recommendations:
              </div>
              <div style={{ fontSize: 12, color: '#e6edf3', lineHeight: 1.7 }}>
                {simMEVExposure.sandwichProb > 50 ? (
                  <>Use Flashbots Protect or MEV Blocker. Your current slippage ({simSlippage}%) is dangerously high — reduce to 0.5% or use CoW Swap limit orders. Consider splitting into {Math.ceil(simTradeSize / 10000)} smaller trades.</>
                ) : simMEVExposure.sandwichProb > 25 ? (
                  <>Your trade has moderate MEV exposure. Enable Flashbots Protect in your wallet for free sandwich protection. Reducing slippage below 1% would significantly lower your risk.</>
                ) : (
                  <>Your trade parameters look good. Low slippage and moderate size make you an unattractive MEV target. Standard protection (like Flashbots) is still recommended as a best practice.</>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div style={{ marginTop: 32, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 10, fontSize: 11, color: '#8b949e', lineHeight: 1.6 }}>
          <strong style={{ color: '#d29922' }}>⚠️ Disclaimer:</strong> This dashboard uses simulated data for educational purposes. MEV extraction amounts, attack frequencies, and protection effectiveness ratings are approximations. Always verify protection strategies independently. Not financial advice.
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Mev Protection Dashboard",
              "url": "https://degen0x.com/tools/mev-protection-dashboard",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
