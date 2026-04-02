'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface Validator {
  name: string;
  chain: string;
  apr: number;
  commission: number;
  minStake: string;
  lockPeriod: string;
  slashingRisk: 'Low' | 'Medium' | 'High';
  delegationSupport: boolean;
  mevRewards: boolean;
  uptimePercent: number;
}

interface StakingChain {
  name: string;
  ticker: string;
  mechanism: string;
  minStakeToValidate: string;
  minStakeToDelegate: string;
  avgAPR: number;
  lockPeriod: string;
  slashingConditions: string[];
  hardwareReqs: string;
  estimatedMonthlyCost: string;
}

const VALIDATORS: Validator[] = [
  { name: 'Lido', chain: 'Ethereum', apr: 3.4, commission: 10, minStake: '0.01 ETH', lockPeriod: 'Liquid (stETH)', slashingRisk: 'Low', delegationSupport: true, mevRewards: true, uptimePercent: 99.95 },
  { name: 'Rocket Pool', chain: 'Ethereum', apr: 3.6, commission: 14, minStake: '0.01 ETH', lockPeriod: 'Liquid (rETH)', slashingRisk: 'Low', delegationSupport: true, mevRewards: true, uptimePercent: 99.90 },
  { name: 'Coinbase Cloud', chain: 'Ethereum', apr: 3.1, commission: 25, minStake: '0.01 ETH', lockPeriod: 'Liquid (cbETH)', slashingRisk: 'Low', delegationSupport: true, mevRewards: false, uptimePercent: 99.99 },
  { name: 'Figment', chain: 'Ethereum', apr: 3.3, commission: 8, minStake: '32 ETH', lockPeriod: 'Variable', slashingRisk: 'Low', delegationSupport: false, mevRewards: true, uptimePercent: 99.97 },
  { name: 'Jito', chain: 'Solana', apr: 7.2, commission: 5, minStake: '0.01 SOL', lockPeriod: '~2 days', slashingRisk: 'Medium', delegationSupport: true, mevRewards: true, uptimePercent: 99.80 },
  { name: 'Marinade', chain: 'Solana', apr: 6.8, commission: 6, minStake: '0.01 SOL', lockPeriod: 'Liquid (mSOL)', slashingRisk: 'Low', delegationSupport: true, mevRewards: true, uptimePercent: 99.85 },
  { name: 'Cosmos Hub', chain: 'Cosmos', apr: 14.2, commission: 5, minStake: '0.01 ATOM', lockPeriod: '21 days', slashingRisk: 'Medium', delegationSupport: true, mevRewards: false, uptimePercent: 99.70 },
  { name: 'Polkadot Staking', chain: 'Polkadot', apr: 12.5, commission: 3, minStake: '250 DOT', lockPeriod: '28 days', slashingRisk: 'High', delegationSupport: true, mevRewards: false, uptimePercent: 99.60 },
  { name: 'Avalanche P-Chain', chain: 'Avalanche', apr: 8.1, commission: 2, minStake: '25 AVAX', lockPeriod: '14 days', slashingRisk: 'Low', delegationSupport: true, mevRewards: false, uptimePercent: 99.75 },
  { name: 'Cardano SundaeSwap', chain: 'Cardano', apr: 4.5, commission: 2, minStake: '10 ADA', lockPeriod: 'None (liquid)', slashingRisk: 'Low', delegationSupport: true, mevRewards: false, uptimePercent: 99.90 },
];

const CHAINS: StakingChain[] = [
  { name: 'Ethereum', ticker: 'ETH', mechanism: 'Proof of Stake (LMD-GHOST + Casper FFG)', minStakeToValidate: '32 ETH (~$96,000)', minStakeToDelegate: '0.01 ETH via LST', avgAPR: 3.4, lockPeriod: 'Withdrawals queue (hours-days)', slashingConditions: ['Double voting', 'Surround voting', 'Extended downtime'], hardwareReqs: '16GB RAM, 2TB SSD, 8-core CPU', estimatedMonthlyCost: '$100-300 (cloud)' },
  { name: 'Solana', ticker: 'SOL', mechanism: 'Proof of Stake + Proof of History', minStakeToValidate: '~1 SOL + vote cost (~$2/day)', minStakeToDelegate: '0.01 SOL', avgAPR: 6.8, lockPeriod: '~2 epochs (~4 days)', slashingConditions: ['Currently no slashing (planned)', 'Stake-weighted QoS'], hardwareReqs: '256GB RAM, 2TB NVMe, 24-core CPU', estimatedMonthlyCost: '$500-1,500 (bare metal)' },
  { name: 'Cosmos', ticker: 'ATOM', mechanism: 'Tendermint BFT', minStakeToValidate: 'Top 180 validators by stake', minStakeToDelegate: '0.01 ATOM', avgAPR: 14.2, lockPeriod: '21 days unbonding', slashingConditions: ['Double signing (5% slash)', 'Downtime &gt;95% missed blocks (0.01% slash)'], hardwareReqs: '8GB RAM, 500GB SSD, 4-core CPU', estimatedMonthlyCost: '$50-150 (cloud)' },
  { name: 'Polkadot', ticker: 'DOT', mechanism: 'Nominated Proof of Stake (NPoS)', minStakeToValidate: '~1.75M DOT (top 297)', minStakeToDelegate: '250 DOT minimum', avgAPR: 12.5, lockPeriod: '28 days unbonding', slashingConditions: ['Equivocation (severe slash)', 'Unresponsiveness (mild slash)'], hardwareReqs: '16GB RAM, 1TB SSD, 6-core CPU', estimatedMonthlyCost: '$150-400 (cloud)' },
  { name: 'Avalanche', ticker: 'AVAX', mechanism: 'Snowball Consensus', minStakeToValidate: '2,000 AVAX (~$60,000)', minStakeToDelegate: '25 AVAX', avgAPR: 8.1, lockPeriod: '14 days min lock', slashingConditions: ['No slashing (stake returned after staking period)'], hardwareReqs: '8GB RAM, 500GB SSD, 4-core CPU', estimatedMonthlyCost: '$50-150 (cloud)' },
  { name: 'Cardano', ticker: 'ADA', mechanism: 'Ouroboros Proof of Stake', minStakeToValidate: '500 ADA pledge + pool cost', minStakeToDelegate: '10 ADA', avgAPR: 4.5, lockPeriod: 'No lock (fully liquid)', slashingConditions: ['No slashing mechanism'], hardwareReqs: '16GB RAM, 150GB SSD, 4-core CPU', estimatedMonthlyCost: '$50-100 (cloud)' },
];

function riskBg(r: string) { return r === 'High' ? '#f8514920' : r === 'Medium' ? '#d2992220' : '#3fb95020'; }
function riskCol(r: string) { return r === 'High' ? '#f85149' : r === 'Medium' ? '#d29922' : '#3fb950'; }

export default function ValidatorStakingGuide() {
  const [tab, setTab] = useState<'compare' | 'chains' | 'guide'>('compare');
  const [sortKey, setSortKey] = useState<'apr' | 'commission' | 'uptimePercent'>('apr');
  const [expandedChain, setExpandedChain] = useState<number | null>(null);

  const sorted = [...VALIDATORS].sort((a, b) => sortKey === 'commission' ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]);

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117', color: '#e6edf3' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 16px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Learn', href: '/learn' }, { label: 'Validator Staking Guide' }]} />

        <div style={{ textAlign: 'center', margin: '32px 0 24px' }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🥩</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, background: 'linear-gradient(135deg, #3fb950, #58a6ff, #bc8cff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: 8 }}>
            Validator Staking Guide 2026
          </h1>
          <p style={{ color: '#8b949e', maxWidth: 620, margin: '0 auto', lineHeight: 1.6 }}>
            Everything you need to know about staking: compare validators, understand slashing risks, pick the right chain, and maximize your staking rewards.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 12 }}>
            <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: '#3fb95020', color: '#3fb950', fontWeight: 600 }}>10 Validators Compared</span>
            <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: '#58a6ff20', color: '#58a6ff', fontWeight: 600 }}>6 Chains Analyzed</span>
            <span style={{ fontSize: 11, padding: '3px 10px', borderRadius: 6, background: '#bc8cff20', color: '#bc8cff', fontWeight: 600 }}>Complete Beginner Guide</span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          {(['compare', 'chains', 'guide'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid ' + (tab === t ? '#58a6ff' : '#30363d'), background: tab === t ? '#58a6ff20' : '#161b22', color: tab === t ? '#58a6ff' : '#8b949e', cursor: 'pointer', fontWeight: 700, fontSize: 13 }}>
              {t === 'compare' ? '📊 Validator Comparison' : t === 'chains' ? '⛓️ Chain Profiles' : '📘 Staking Guide'}
            </button>
          ))}
        </div>

        {/* Compare Tab */}
        {tab === 'compare' && (
          <>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#8b949e', alignSelf: 'center' }}>Sort by:</span>
              {(['apr', 'commission', 'uptimePercent'] as const).map(k => (
                <button key={k} onClick={() => setSortKey(k)} style={{ padding: '4px 12px', borderRadius: 6, border: '1px solid ' + (sortKey === k ? '#58a6ff' : '#30363d'), background: sortKey === k ? '#58a6ff20' : 'transparent', color: sortKey === k ? '#58a6ff' : '#8b949e', cursor: 'pointer', fontSize: 12 }}>
                  {k === 'apr' ? 'APR ↓' : k === 'commission' ? 'Commission ↑' : 'Uptime ↓'}
                </button>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sorted.map((v, i) => (
                <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderLeft: `3px solid ${v.apr > 10 ? '#3fb950' : v.apr > 5 ? '#58a6ff' : '#d29922'}`, borderRadius: 10, padding: 16 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                    <div>
                      <span style={{ fontWeight: 700, fontSize: 15 }}>{v.name}</span>
                      <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, marginLeft: 8, background: '#58a6ff20', color: '#58a6ff' }}>{v.chain}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 10, color: '#8b949e' }}>APR</div>
                        <div style={{ fontWeight: 800, color: '#3fb950' }}>{v.apr}%</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 10, color: '#8b949e' }}>Fee</div>
                        <div style={{ fontWeight: 700, color: '#d29922' }}>{v.commission}%</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 10, color: '#8b949e' }}>Uptime</div>
                        <div style={{ fontWeight: 700, color: v.uptimePercent >= 99.9 ? '#3fb950' : '#58a6ff' }}>{v.uptimePercent}%</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#1c2330', color: '#8b949e' }}>Min: {v.minStake}</span>
                    <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#1c2330', color: '#8b949e' }}>Lock: {v.lockPeriod}</span>
                    <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: riskBg(v.slashingRisk), color: riskCol(v.slashingRisk) }}>Slash Risk: {v.slashingRisk}</span>
                    {v.delegationSupport && <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#3fb95020', color: '#3fb950' }}>Delegation ✓</span>}
                    {v.mevRewards && <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#bc8cff20', color: '#bc8cff' }}>MEV Rewards ✓</span>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Chains Tab */}
        {tab === 'chains' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {CHAINS.map((c, i) => (
              <div key={i} onClick={() => setExpandedChain(expandedChain === i ? null : i)} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 16, cursor: 'pointer', borderLeft: `3px solid ${c.avgAPR > 10 ? '#3fb950' : c.avgAPR > 5 ? '#58a6ff' : '#d29922'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                  <div>
                    <span style={{ fontWeight: 700, fontSize: 16 }}>{c.name}</span>
                    <span style={{ fontSize: 12, color: '#8b949e', marginLeft: 8 }}>{c.ticker}</span>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 18, color: '#3fb950' }}>{c.avgAPR}% APR</div>
                </div>
                <div style={{ fontSize: 12, color: '#8b949e', marginTop: 6 }}>{c.mechanism}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#1c2330', color: '#8b949e' }}>Lock: {c.lockPeriod}</span>
                  <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#1c2330', color: '#8b949e' }}>Delegate Min: {c.minStakeToDelegate}</span>
                  <span style={{ fontSize: 10, padding: '2px 7px', borderRadius: 4, background: '#1c2330', color: '#8b949e' }}>Server: {c.estimatedMonthlyCost}/mo</span>
                </div>
                {expandedChain === i && (
                  <div style={{ marginTop: 14, padding: 14, background: '#0d1117', borderRadius: 8, fontSize: 12 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 12 }}>
                      <div>
                        <div style={{ fontWeight: 700, color: '#58a6ff', marginBottom: 6 }}>Validator Requirements</div>
                        <div style={{ color: '#e6edf3', marginBottom: 4 }}>Min stake: {c.minStakeToValidate}</div>
                        <div style={{ color: '#e6edf3', marginBottom: 4 }}>Hardware: {c.hardwareReqs}</div>
                        <div style={{ color: '#e6edf3' }}>Monthly cost: {c.estimatedMonthlyCost}</div>
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#f85149', marginBottom: 6 }}>Slashing Conditions</div>
                        {c.slashingConditions.map((s, j) => (
                          <div key={j} style={{ color: '#e6edf3', marginBottom: 4 }}>⚠️ {s}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Guide Tab */}
        {tab === 'guide' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: 'What is Validator Staking?', content: 'Validator staking is the process of locking up cryptocurrency to participate in blockchain consensus. Validators propose and attest to new blocks, earning rewards for honest behavior. Staking secures the network and replaces energy-intensive mining in Proof of Stake blockchains. You can run your own validator node or delegate to an existing one.' },
              { title: 'Solo Staking vs Delegated Staking', content: 'Solo staking means running your own validator node — you need the full minimum stake (e.g., 32 ETH for Ethereum), dedicated hardware, and technical knowledge. Delegated staking lets you contribute any amount to an existing validator and share in rewards minus their commission. Liquid staking (Lido, Rocket Pool, Marinade) gives you a receipt token (stETH, rETH, mSOL) you can use in DeFi while staking.' },
              { title: 'Understanding Slashing Risks', content: 'Slashing is the penalty for validator misbehavior. Common slashing conditions include double-signing (proposing two different blocks at the same height), surround voting, and extended downtime. Ethereum slashes a minimum of 1/32 of staked ETH. Cosmos slashes 5% for double-signing. Cardano and Avalanche have no slashing at all. When delegating, your stake can be slashed if your chosen validator misbehaves.' },
              { title: 'Maximizing Staking Rewards', content: 'To maximize rewards: choose validators with high uptime (99.9%+) and low commission rates. Consider MEV-enabled validators (Flashbots, Jito) which earn extra revenue from transaction ordering. Compound rewards regularly — on Cosmos, you must manually claim and redelegate. Use liquid staking tokens in DeFi for additional yield (but be aware of smart contract risks). Diversify across multiple validators to reduce risk.' },
              { title: 'Tax Implications of Staking', content: 'In most jurisdictions, staking rewards are taxable income at the time of receipt, valued at fair market value. When you later sell staked tokens, you may owe capital gains tax on any price appreciation. Liquid staking tokens (stETH, mSOL) create complex tax situations — consult the degen0x tax tools and a qualified tax professional for your specific situation.' },
              { title: 'Getting Started: Step-by-Step', content: '1. Choose your chain and staking method (solo, delegated, or liquid). 2. Research validators — check uptime, commission, slashing history, and community reputation. 3. For liquid staking: connect your wallet to the protocol, deposit tokens, receive LST. 4. For delegation: use the native staking interface (e.g., Solana CLI, Keplr for Cosmos). 5. Monitor your validator\'s performance and rewards. 6. Consider using degen0x staking APY tool to track real-time yields across chains.' },
            ].map((section, i) => (
              <div key={i} style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 20 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: '#58a6ff' }}>{section.title}</h3>
                <p style={{ fontSize: 13, color: '#e6edf3', lineHeight: 1.8 }}>{section.content}</p>
              </div>
            ))}

            {/* FAQ */}
            <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 10, padding: 20 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#d29922' }}>Frequently Asked Questions</h3>
              {[
                { q: 'Can I lose money staking?', a: 'Yes — through slashing (validator misbehavior), price depreciation of the staked asset, or smart contract bugs in liquid staking protocols. However, slashing is rare for reputable validators.' },
                { q: 'What\'s the difference between APR and APY?', a: 'APR is simple interest without compounding. APY includes compound interest. A 5% APR with daily compounding equals ~5.13% APY. Most staking protocols quote APR.' },
                { q: 'How often do I receive rewards?', a: 'It varies by chain. Ethereum: ~every 6.4 minutes (per attestation). Solana: every epoch (~2 days). Cosmos: every block (~6 seconds, but must claim manually). Cardano: every epoch (~5 days).' },
                { q: 'Is liquid staking safe?', a: 'Liquid staking adds smart contract risk on top of normal staking risk. Protocols like Lido and Rocket Pool have been audited and battle-tested, but no smart contract is 100% risk-free. Diversify across protocols.' },
              ].map((faq, i) => (
                <details key={i} style={{ marginBottom: 8 }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: 13, color: '#e6edf3', padding: '8px 0' }}>{faq.q}</summary>
                  <p style={{ fontSize: 12, color: '#8b949e', lineHeight: 1.6, paddingLeft: 16, paddingBottom: 8 }}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 32, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 10, fontSize: 11, color: '#8b949e', lineHeight: 1.6 }}>
          <strong style={{ color: '#d29922' }}>⚠️ Disclaimer:</strong> Staking involves risk including slashing, smart contract vulnerabilities, and price volatility. APR figures are approximate and change frequently. This guide is for educational purposes only and does not constitute financial advice. Always do your own research.
        </div>
      </div>
    </div>
  );
}
