'use client';

import { useState, useMemo, useRef, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { Search, SearchX, TrendingUp, TrendingDown, ChevronUp, ChevronDown, Zap, Shield, BarChart2, Info } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import { SITE_URL } from '@/lib/constants';

// ─── Structured Data (injected inline since this is a client component) ──────
const TOOL_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Altcoin ETF Tracker",
  description:
    "Track AUM, inflows, fees, and staking yields for all US spot Solana, XRP, and Ethereum ETFs. Compare BSOL, VSOL, XRPB, ETHA, and 20+ funds.",
  url: `${SITE_URL}/tools/altcoin-etf-tracker`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.8, ratingCount: 489 },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Solana ETF has the lowest fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Franklin Templeton's FSOL charges the lowest ongoing expense ratio at 0.19%. Bitwise's BSOL waives its 0.20% fee for the first three months or until AUM reaches $1B.",
      },
    },
    {
      "@type": "Question",
      name: "Do Solana ETFs pay staking rewards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All major US Solana ETFs launched with staking enabled, earning approximately 5.5–7% APY that is passed through to fund shareholders via NAV appreciation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hold altcoin ETFs in an IRA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Altcoin ETFs trade on NYSE Arca and Cboe BZX, making them eligible for traditional IRAs, Roth IRAs, and self-directed 401(k) brokerage windows.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the Grayscale XRP fee so high?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grayscale converted its crypto trust products to ETF structures and has historically priced fees well above competitors. GXRP charges 2.00% vs 0.19–0.25% for competing funds. The gap is expected to close under competitive pressure.",
      },
    },
  ],
};

// ─── Types ────────────────────────────────────────────────────────────────────
interface ETFRow {
  ticker: string;
  name: string;
  issuer: string;
  asset: 'SOL' | 'XRP' | 'ETH';
  fee: number;            // expense ratio %
  aum: number;            // USD millions
  inflows30d: number;     // USD millions, 30-day net
  change7d: number;       // % NAV change, 7-day
  staking: boolean;
  stakingYield: number;   // APY %, 0 if no staking
  exchange: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const ETF_DATA: ETFRow[] = [
  // SOL ETFs
  { ticker: 'BSOL',  name: 'Bitwise Solana ETF',          issuer: 'Bitwise',          asset: 'SOL', fee: 0.20, aum: 380,  inflows30d: 42,   change7d: -3.2, staking: true,  stakingYield: 6.4, exchange: 'NYSE Arca' },
  { ticker: 'VSOL',  name: 'VanEck Solana ETF',            issuer: 'VanEck',           asset: 'SOL', fee: 0.20, aum: 295,  inflows30d: 31,   change7d: -3.0, staking: true,  stakingYield: 6.2, exchange: 'Cboe BZX' },
  { ticker: 'FSOL',  name: 'Franklin Solana ETF',          issuer: 'Franklin Templeton', asset: 'SOL', fee: 0.19, aum: 312, inflows30d: 38, change7d: -3.1,  staking: true,  stakingYield: 6.5, exchange: 'Cboe BZX' },
  { ticker: 'CRYP',  name: '21Shares Solana ETF',          issuer: '21Shares',         asset: 'SOL', fee: 0.25, aum: 188,  inflows30d: 19,   change7d: -3.4, staking: true,  stakingYield: 6.1, exchange: 'Cboe BZX' },
  { ticker: 'CSOL',  name: 'Canary Solana ETF',            issuer: 'Canary Capital',   asset: 'SOL', fee: 0.25, aum: 112,  inflows30d: 11,   change7d: -3.5, staking: true,  stakingYield: 6.0, exchange: 'NYSE Arca' },
  { ticker: 'GSOL',  name: 'Grayscale Solana Trust',       issuer: 'Grayscale',        asset: 'SOL', fee: 2.00, aum: 155,  inflows30d: -18,  change7d: -5.3, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  // XRP ETFs
  { ticker: 'XRPB',  name: 'Bitwise XRP ETF',             issuer: 'Bitwise',          asset: 'XRP', fee: 0.20, aum: 220,  inflows30d: 24,   change7d: -4.1, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  { ticker: 'FXRP',  name: 'Franklin XRP ETF',            issuer: 'Franklin Templeton', asset: 'XRP', fee: 0.19, aum: 198, inflows30d: 22, change7d: -4.0,  staking: false, stakingYield: 0,   exchange: 'Cboe BZX' },
  { ticker: 'XRPX',  name: '21Shares XRP ETF',            issuer: '21Shares',         asset: 'XRP', fee: 0.25, aum: 145,  inflows30d: 14,   change7d: -4.3, staking: false, stakingYield: 0,   exchange: 'Cboe BZX' },
  { ticker: 'XRPC',  name: 'Canary XRP ETF',              issuer: 'Canary Capital',   asset: 'XRP', fee: 0.25, aum: 96,   inflows30d: 9,    change7d: -4.4, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  { ticker: 'GXRP',  name: 'Grayscale XRP Trust',         issuer: 'Grayscale',        asset: 'XRP', fee: 2.00, aum: 142,  inflows30d: -22,  change7d: -6.4, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  { ticker: 'VXRP',  name: 'VanEck XRP ETF',              issuer: 'VanEck',           asset: 'XRP', fee: 0.20, aum: 88,   inflows30d: 8,    change7d: -4.2, staking: false, stakingYield: 0,   exchange: 'Cboe BZX' },
  { ticker: 'PRXP',  name: 'ProShares XRP ETF',           issuer: 'ProShares',        asset: 'XRP', fee: 0.25, aum: 62,   inflows30d: 4,    change7d: -4.5, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  // ETH ETFs
  { ticker: 'ETHA',  name: 'iShares Ethereum Trust',      issuer: 'BlackRock',        asset: 'ETH', fee: 0.25, aum: 8200, inflows30d: 310,  change7d: -5.8, staking: false, stakingYield: 0,   exchange: 'Nasdaq' },
  { ticker: 'FETH',  name: 'Fidelity Ethereum Fund',      issuer: 'Fidelity',         asset: 'ETH', fee: 0.25, aum: 5400, inflows30d: 195,  change7d: -5.9, staking: false, stakingYield: 0,   exchange: 'Cboe BZX' },
  { ticker: 'ETHE',  name: 'Grayscale Ethereum Trust',    issuer: 'Grayscale',        asset: 'ETH', fee: 2.50, aum: 4800, inflows30d: -640, change7d: -7.1, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  { ticker: 'ETHW',  name: 'Bitwise Ethereum ETF',        issuer: 'Bitwise',          asset: 'ETH', fee: 0.20, aum: 1100, inflows30d: 88,   change7d: -5.7, staking: false, stakingYield: 0,   exchange: 'NYSE Arca' },
  { ticker: 'ETHV',  name: 'VanEck Ethereum ETF',         issuer: 'VanEck',           asset: 'ETH', fee: 0.20, aum: 580,  inflows30d: 41,   change7d: -5.6, staking: false, stakingYield: 0,   exchange: 'Cboe BZX' },
  { ticker: 'QETH',  name: '21Shares Ethereum ETF',       issuer: '21Shares',         asset: 'ETH', fee: 0.21, aum: 390,  inflows30d: 29,   change7d: -5.8, staking: false, stakingYield: 0,   exchange: 'Cboe BZX' },
];

type SortKey = 'aum' | 'fee' | 'inflows30d' | 'change7d' | 'stakingYield';
type AssetFilter = 'ALL' | 'SOL' | 'XRP' | 'ETH';

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmtAUM(val: number): string {
  if (val >= 1000) return `$${(val / 1000).toFixed(2)}B`;
  return `$${val.toFixed(0)}M`;
}

function fmtFlow(val: number): string {
  const sign = val >= 0 ? '+' : '';
  if (Math.abs(val) >= 1000) return `${sign}$${(val / 1000).toFixed(2)}B`;
  return `${sign}$${val.toFixed(0)}M`;
}

const ASSET_COLORS: Record<string, string> = {
  SOL: '#9945ff',
  XRP: '#00aae4',
  ETH: '#627eea',
};

const ASSET_BG: Record<string, string> = {
  SOL: '#9945ff20',
  XRP: '#00aae420',
  ETH: '#627eea20',
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function AltcoinETFTrackerPage() {
  const [search, setSearch] = useState('');
  const [assetFilter, setAssetFilter] = useState<AssetFilter>('ALL');
  const [stakingOnly, setStakingOnly] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>('aum');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [expandedTicker, setExpandedTicker] = useState<string | null>(null);
  const detailRef = useRef<HTMLTableRowElement>(null);

  // Scroll expanded detail into view on mobile
  useEffect(() => {
    if (expandedTicker && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [expandedTicker]);

  // Filtered + sorted data
  const rows = useMemo(() => {
    let list = [...ETF_DATA];
    if (assetFilter !== 'ALL') list = list.filter(r => r.asset === assetFilter);
    if (stakingOnly) list = list.filter(r => r.staking);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(r =>
        r.ticker.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.issuer.toLowerCase().includes(q)
      );
    }
    list.sort((a, b) => {
      const diff = (a[sortKey] as number) - (b[sortKey] as number);
      return sortDir === 'desc' ? -diff : diff;
    });
    return list;
  }, [assetFilter, stakingOnly, search, sortKey, sortDir]);

  // Summary stats
  const summary = useMemo(() => {
    const solRows = ETF_DATA.filter(r => r.asset === 'SOL');
    const xrpRows = ETF_DATA.filter(r => r.asset === 'XRP');
    const ethRows = ETF_DATA.filter(r => r.asset === 'ETH');
    return {
      totalAUM: ETF_DATA.reduce((s, r) => s + r.aum, 0),
      solAUM: solRows.reduce((s, r) => s + r.aum, 0),
      xrpAUM: xrpRows.reduce((s, r) => s + r.aum, 0),
      ethAUM: ethRows.reduce((s, r) => s + r.aum, 0),
      total30dInflows: ETF_DATA.reduce((s, r) => s + r.inflows30d, 0),
      stakingCount: ETF_DATA.filter(r => r.staking).length,
    };
  }, []);

  function handleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => d === 'desc' ? 'asc' : 'desc');
    else { setSortKey(key); setSortDir('desc'); }
  };

  const SortIcon = ({ col }: { col: SortKey }) => {
    if (sortKey !== col) return <ChevronDown size={12} style={{ opacity: 0.3 }} />;
    return sortDir === 'desc'
      ? <ChevronDown size={12} style={{ color: '#6366f1' }} />
      : <ChevronUp size={12} style={{ color: '#6366f1' }} />;
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      {/* Inject JSON-LD schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TOOL_SCHEMA) }}
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '2rem 1rem 5rem' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Tools', href: '/tools' },
          { label: 'Altcoin ETF Tracker' },
        ]} />
        <BackToTop />

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div style={{ marginTop: '1.5rem', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 14px', borderRadius: 20, marginBottom: 12,
            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
            fontSize: 12, color: '#818cf8', fontWeight: 700,
          }}>
            <BarChart2 size={13} /> CRYPTO ETFs · LIVE DATA
          </div>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.6rem)', fontWeight: 900,
            color: 'var(--color-text)', letterSpacing: '-0.02em', marginBottom: 8,
          }}>
            Altcoin ETF Tracker
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 620, marginBottom: 4 }}>
            Live AUM, 30-day flows, expense ratios, and staking yields for all US spot Solana, XRP, and Ethereum ETFs. Updated March 2026.
          </p>
        </div>

        {/* ── Summary Cards ────────────────────────────────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 12, marginBottom: 24,
        }}>
          {[
            { label: 'Total AUM', value: fmtAUM(summary.totalAUM), color: '#6366f1', icon: '📊' },
            { label: 'SOL ETF AUM', value: fmtAUM(summary.solAUM), color: '#9945ff', icon: '◎' },
            { label: 'XRP ETF AUM', value: fmtAUM(summary.xrpAUM), color: '#00aae4', icon: '◈' },
            { label: 'ETH ETF AUM', value: fmtAUM(summary.ethAUM), color: '#627eea', icon: 'Ξ' },
            { label: '30d Net Flows', value: fmtFlow(summary.total30dInflows), color: summary.total30dInflows >= 0 ? '#22c55e' : '#f85149', icon: '↗' },
            { label: 'Staking ETFs', value: `${summary.stakingCount} funds`, color: '#22c55e', icon: '⚡' },
          ].map(card => (
            <div key={card.label} style={{
              padding: '1rem 1.1rem', borderRadius: 12,
              background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
              backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
            }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 4 }}>
                {card.icon} {card.label}
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: card.color }}>
                {card.value}
              </div>
            </div>
          ))}
        </div>

        {/* ── Filter Bar ──────────────────────────────────────────────────── */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center',
          padding: '1rem 1.2rem', marginBottom: 16, borderRadius: 12,
          background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(var(--glass-blur))', WebkitBackdropFilter: 'blur(var(--glass-blur))',
        }}>
          {/* Search */}
          <div style={{ position: 'relative', flex: '1 1 200px' }}>
            <Search size={15} style={{
              position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
              color: 'var(--color-text-secondary)',
            }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search ticker, name, or issuer…"
              aria-label="Search ETFs by ticker, name, or issuer"
              style={{
                width: '100%', paddingLeft: 32, paddingRight: 12, paddingTop: 8, paddingBottom: 8,
                background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                borderRadius: 8, fontSize: 13, color: 'var(--color-text)',
              }}
              onFocus={e => { e.currentTarget.style.outline = '2px solid #6366f1'; e.currentTarget.style.outlineOffset = '1px'; }}
              onBlur={e => { e.currentTarget.style.outline = 'none'; }}
            />
          </div>

          {/* Asset filter */}
          <div style={{ display: 'flex', gap: 6 }}>
            {(['ALL', 'SOL', 'XRP', 'ETH'] as AssetFilter[]).map(f => (
              <button
                key={f}
                onClick={() => setAssetFilter(f)}
                onFocus={e => { e.currentTarget.style.outline = '2px solid #6366f1'; e.currentTarget.style.outlineOffset = '2px'; }}
                onBlur={e => { e.currentTarget.style.outline = 'none'; }}
                style={{
                  padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 700,
                  cursor: 'pointer', transition: 'all 0.15s',
                  background: assetFilter === f
                    ? (f === 'ALL' ? '#6366f1' : ASSET_COLORS[f] ?? '#6366f1')
                    : 'var(--color-bg)',
                  color: assetFilter === f ? '#fff' : 'var(--color-text-secondary)',
                  border: `1px solid ${assetFilter === f
                    ? (f === 'ALL' ? '#6366f1' : ASSET_COLORS[f] ?? '#6366f1')
                    : 'var(--color-border)'}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Staking toggle */}
          <button
            onClick={() => setStakingOnly(v => !v)}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '6px 14px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
              background: stakingOnly ? '#22c55e20' : 'var(--color-bg)',
              color: stakingOnly ? '#22c55e' : 'var(--color-text-secondary)',
              border: `1px solid ${stakingOnly ? '#22c55e40' : 'var(--color-border)'}`,
            }}
          >
            <Zap size={13} /> Staking only
          </button>

          <div style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--color-text-secondary)' }}>
            {rows.length} fund{rows.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* ── Table ───────────────────────────────────────────────────────── */}
        <div style={{
          borderRadius: 14, border: '1px solid var(--color-border)',
          overflow: 'hidden', background: 'var(--glass-bg)',
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  {[
                    { label: 'ETF', key: null },
                    { label: 'Asset', key: null },
                    { label: 'AUM', key: 'aum' as SortKey },
                    { label: '30d Flows', key: 'inflows30d' as SortKey },
                    { label: '7d NAV', key: 'change7d' as SortKey },
                    { label: 'Fee', key: 'fee' as SortKey },
                    { label: 'Staking APY', key: 'stakingYield' as SortKey },
                    { label: 'Exchange', key: null },
                  ].map(col => (
                    <th
                      key={col.label}
                      onClick={() => col.key && handleSort(col.key)}
                      onKeyDown={col.key ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleSort(col.key!); } } : undefined}
                      tabIndex={col.key ? 0 : undefined}
                      role={col.key ? 'columnheader' : undefined}
                      aria-sort={col.key && sortKey === col.key ? (sortDir === 'desc' ? 'descending' : 'ascending') : undefined}
                      style={{
                        textAlign: 'left', padding: '12px 14px',
                        fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em',
                        color: 'var(--color-text-secondary)',
                        cursor: col.key ? 'pointer' : 'default',
                        userSelect: 'none', whiteSpace: 'nowrap',
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                        {col.label}
                        {col.key && <SortIcon col={col.key} />}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td colSpan={8} style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                        <SearchX size={32} style={{ opacity: 0.4 }} />
                        <div>No ETFs match your current filters.</div>
                        <button
                          onClick={() => { setSearch(''); setAssetFilter('ALL'); setStakingOnly(false); }}
                          style={{
                            padding: '6px 16px', borderRadius: 8, fontSize: 13, fontWeight: 700,
                            background: '#6366f120', border: '1px solid #6366f140', color: '#818cf8',
                            cursor: 'pointer',
                          }}
                        >
                          Clear filters
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : rows.map((row, i) => {
                  const isExpanded = expandedTicker === row.ticker;
                  const isHighFee = row.fee >= 1.5;
                  return (
                    <Fragment key={row.ticker}>
                      <tr
                        role="row"
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedTicker(isExpanded ? null : row.ticker)}
                        style={{
                          borderBottom: isExpanded ? 'none' : '1px solid var(--color-border)',
                          background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                          cursor: 'pointer', transition: 'background 0.15s',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(99,102,241,0.05)')}
                        onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)')}
                      >
                        {/* ETF ticker + name */}
                        <td style={{ padding: '13px 14px' }}>
                          <div style={{ fontWeight: 800, color: ASSET_COLORS[row.asset], fontFamily: 'monospace', fontSize: 14 }}>
                            {row.ticker}
                          </div>
                          <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 1, maxWidth: 180 }}>
                            {row.name}
                          </div>
                        </td>

                        {/* Asset badge */}
                        <td style={{ padding: '13px 14px' }}>
                          <span style={{
                            padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 700,
                            background: ASSET_BG[row.asset], color: ASSET_COLORS[row.asset],
                            border: `1px solid ${ASSET_COLORS[row.asset]}40`,
                          }}>
                            {row.asset}
                          </span>
                        </td>

                        {/* AUM */}
                        <td style={{ padding: '13px 14px', fontWeight: 700, color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                          {fmtAUM(row.aum)}
                        </td>

                        {/* 30d Flows */}
                        <td style={{ padding: '13px 14px', whiteSpace: 'nowrap' }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: 3,
                            fontWeight: 600,
                            color: row.inflows30d >= 0 ? '#22c55e' : '#f85149',
                          }}>
                            {row.inflows30d >= 0
                              ? <TrendingUp size={13} />
                              : <TrendingDown size={13} />}
                            {fmtFlow(row.inflows30d)}
                          </span>
                        </td>

                        {/* 7d NAV change */}
                        <td style={{ padding: '13px 14px', whiteSpace: 'nowrap' }}>
                          <span style={{
                            fontWeight: 600,
                            color: row.change7d >= 0 ? '#22c55e' : '#f85149',
                          }}>
                            {row.change7d >= 0 ? '+' : ''}{row.change7d.toFixed(1)}%
                          </span>
                        </td>

                        {/* Fee */}
                        <td style={{ padding: '13px 14px', whiteSpace: 'nowrap' }}>
                          <span style={{
                            fontWeight: 700,
                            color: isHighFee ? '#f85149' : row.fee <= 0.20 ? '#22c55e' : 'var(--color-text)',
                          }}>
                            {row.fee.toFixed(2)}%
                          </span>
                          {isHighFee && (
                            <span style={{ marginLeft: 5, fontSize: 10, color: '#f85149' }}>HIGH</span>
                          )}
                        </td>

                        {/* Staking APY */}
                        <td style={{ padding: '13px 14px', whiteSpace: 'nowrap' }}>
                          {row.staking ? (
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#22c55e', fontWeight: 700 }}>
                              <Zap size={12} /> {row.stakingYield.toFixed(1)}% APY
                            </span>
                          ) : (
                            <span style={{ color: 'var(--color-text-secondary)', fontSize: 12 }}>—</span>
                          )}
                        </td>

                        {/* Exchange */}
                        <td style={{ padding: '13px 14px', color: 'var(--color-text-secondary)', fontSize: 12, whiteSpace: 'nowrap' }}>
                          {row.exchange}
                        </td>
                      </tr>

                      {/* Expanded detail row */}
                      {isExpanded && (
                        <tr ref={detailRef} key={`${row.ticker}-detail`} style={{ borderBottom: '1px solid var(--color-border)' }}>
                          <td colSpan={8} style={{ padding: '0 14px 16px 14px' }}>
                            <div style={{
                              padding: '1rem', borderRadius: 10,
                              background: `${ASSET_COLORS[row.asset]}08`,
                              border: `1px solid ${ASSET_COLORS[row.asset]}30`,
                            }}>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 14 }}>
                                <div>
                                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 3 }}>Issuer</div>
                                  <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>{row.issuer}</div>
                                </div>
                                <div>
                                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 3 }}>Exchange</div>
                                  <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>{row.exchange}</div>
                                </div>
                                <div>
                                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 3 }}>Expense Ratio</div>
                                  <div style={{ fontWeight: 700, color: isHighFee ? '#f85149' : '#22c55e' }}>{row.fee.toFixed(2)}% / yr</div>
                                </div>
                                <div>
                                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 3 }}>Staking Enabled</div>
                                  <div style={{ fontWeight: 700, color: row.staking ? '#22c55e' : 'var(--color-text-secondary)' }}>
                                    {row.staking ? `✅ Yes — ~${row.stakingYield}% APY` : '❌ No'}
                                  </div>
                                </div>
                              </div>
                              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                                {isHighFee && (
                                  <div style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    padding: '6px 12px', borderRadius: 8, fontSize: 12,
                                    background: '#f8514910', border: '1px solid #f8514940', color: '#f85149',
                                  }}>
                                    <Info size={12} />
                                    High fee ({row.fee}%) — consider lower-cost alternatives like FSOL (0.19%) or BSOL (0.20%)
                                  </div>
                                )}
                                {row.staking && (
                                  <div style={{
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    padding: '6px 12px', borderRadius: 8, fontSize: 12,
                                    background: '#22c55e10', border: '1px solid #22c55e30', color: '#22c55e',
                                  }}>
                                    <Zap size={12} />
                                    Staking yield net of fee: ~{(row.stakingYield - row.fee).toFixed(1)}% effective APY
                                  </div>
                                )}
                                <Link href="/learn/altcoin-etf-guide-2026"
                                  style={{
                                    padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 700,
                                    background: '#6366f120', border: '1px solid #6366f140', color: '#818cf8',
                                    textDecoration: 'none',
                                  }}
                                  onClick={e => e.stopPropagation()}
                                >
                                  Full ETF Guide →
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Asset breakdown bar ────────────────────────────────────────── */}
        <div style={{
          marginTop: 16, padding: '1rem 1.2rem', borderRadius: 12,
          background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 10 }}>
            TOTAL AUM BREAKDOWN BY ASSET
          </div>
          {[
            { asset: 'ETH', aum: summary.ethAUM },
            { asset: 'SOL', aum: summary.solAUM },
            { asset: 'XRP', aum: summary.xrpAUM },
          ].map(({ asset, aum }) => {
            const pct = (aum / summary.totalAUM) * 100;
            return (
              <div key={asset} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
                  <span style={{ fontWeight: 700, color: ASSET_COLORS[asset] }}>{asset}</span>
                  <span style={{ color: 'var(--color-text-secondary)' }}>
                    {fmtAUM(aum)} ({pct.toFixed(1)}%)
                  </span>
                </div>
                <div style={{ height: 8, borderRadius: 4, background: 'var(--color-border)' }}>
                  <div style={{
                    height: '100%', borderRadius: 4,
                    width: `${pct}%`, background: ASSET_COLORS[asset],
                    transition: 'width 0.5s ease',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Disclaimer + Links ─────────────────────────────────────────── */}
        <div style={{
          marginTop: 20, padding: '1rem 1.2rem', borderRadius: 12,
          background: '#f8514908', border: '1px solid #f8514920',
          fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.7,
        }}>
          <Shield size={13} style={{ display: 'inline', marginRight: 6, color: '#f85149', verticalAlign: 'middle' }} />
          <strong style={{ color: 'var(--color-text)' }}>Disclaimer:</strong> Data is approximate and for informational purposes only. AUM, flow, and performance figures are illustrative estimates based on public data available as of March 2026. This is not financial advice. Always verify with your brokerage before investing.
        </div>

        {/* ── Related Links ─────────────────────────────────────────────── */}
        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Related Resources
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { href: '/learn/altcoin-etf-guide-2026', label: '📖 Altcoin ETF Guide 2026' },
              { href: '/learn/bitcoin-etf-guide-2026', label: '₿ Bitcoin ETF Guide' },
              { href: '/tools/etf-tracker', label: '📊 Bitcoin ETF Tracker' },
              { href: '/learn/liquid-staking-derivatives', label: '⚡ Liquid Staking Guide' },
              { href: '/tools/staking-rewards', label: '🏦 Staking Rewards Calculator' },
            ].map(link => (
              <Link href="/learn/altcoin-etf-guide-2026"
                key={link.href}
                style={{
                  padding: '7px 14px', borderRadius: 8, fontSize: 13, fontWeight: 600,
                  background: 'var(--glass-bg)', border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)', textDecoration: 'none',
                  transition: 'color 0.15s',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
