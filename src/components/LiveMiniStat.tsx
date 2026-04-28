// LiveMiniStat — a compact, client-side live price card for inline use
// on /learn and pillar pages. Fetches from the shared /api/prices endpoint
// (60s ISR cache) so pages stay static-renderable while the chip hydrates live.
//
// Phase 2d of the ramp-to-8 plan. Satisfies the "freshness + multimedia"
// signal on content pages that mention a named token.

'use client';

import { useEffect, useState } from 'react';

const COIN_NAMES: Record<string, { symbol: string; name: string }> = {
  bitcoin: { symbol: 'BTC', name: 'Bitcoin' },
  ethereum: { symbol: 'ETH', name: 'Ethereum' },
  solana: { symbol: 'SOL', name: 'Solana' },
  'binance-coin': { symbol: 'BNB', name: 'BNB' },
  binancecoin: { symbol: 'BNB', name: 'BNB' },
  ripple: { symbol: 'XRP', name: 'XRP' },
  cardano: { symbol: 'ADA', name: 'Cardano' },
  'avalanche-2': { symbol: 'AVAX', name: 'Avalanche' },
  polkadot: { symbol: 'DOT', name: 'Polkadot' },
  chainlink: { symbol: 'LINK', name: 'Chainlink' },
  'matic-network': { symbol: 'MATIC', name: 'Polygon' },
  polygon: { symbol: 'MATIC', name: 'Polygon' },
  aptos: { symbol: 'APT', name: 'Aptos' },
  sui: { symbol: 'SUI', name: 'Sui' },
  near: { symbol: 'NEAR', name: 'NEAR' },
  cosmos: { symbol: 'ATOM', name: 'Cosmos' },
  arbitrum: { symbol: 'ARB', name: 'Arbitrum' },
  optimism: { symbol: 'OP', name: 'Optimism' },
  'the-open-network': { symbol: 'TON', name: 'TON' },
  dogecoin: { symbol: 'DOGE', name: 'Dogecoin' },
  shiba: { symbol: 'SHIB', name: 'Shiba Inu' },
  'shiba-inu': { symbol: 'SHIB', name: 'Shiba Inu' },
  pepe: { symbol: 'PEPE', name: 'PEPE' },
  aave: { symbol: 'AAVE', name: 'Aave' },
  uniswap: { symbol: 'UNI', name: 'Uniswap' },
  maker: { symbol: 'MKR', name: 'Maker' },
  lido: { symbol: 'LIDO', name: 'Lido' },
  'lido-dao': { symbol: 'LDO', name: 'Lido DAO' },
  render: { symbol: 'RNDR', name: 'Render' },
  'render-token': { symbol: 'RNDR', name: 'Render' },
  fetch: { symbol: 'FET', name: 'Fetch.ai' },
  'fetch-ai': { symbol: 'FET', name: 'Fetch.ai' },
  injective: { symbol: 'INJ', name: 'Injective' },
  'injective-protocol': { symbol: 'INJ', name: 'Injective' },
  worldcoin: { symbol: 'WLD', name: 'Worldcoin' },
  'worldcoin-wld': { symbol: 'WLD', name: 'Worldcoin' },
  'bittensor-tao': { symbol: 'TAO', name: 'Bittensor' },
  bittensor: { symbol: 'TAO', name: 'Bittensor' },
};

interface LiveMiniStatProps {
  /** CoinGecko id (e.g., "bitcoin", "ethereum", "solana"). */
  id: string;
  /** Optional label override. */
  label?: string;
}

interface PriceEntry {
  id: string;
  current_price: number;
  price_change_percentage_24h: number | null;
}

function fmtPrice(p: number): string {
  if (p >= 1000) return '$' + p.toLocaleString('en-US', { maximumFractionDigits: 0 });
  if (p >= 1) return '$' + p.toFixed(2);
  if (p >= 0.01) return '$' + p.toFixed(4);
  return '$' + p.toFixed(6);
}

export default function LiveMiniStat({ id, label }: LiveMiniStatProps) {
  const [entry, setEntry] = useState<PriceEntry | null>(null);
  const [err, setErr] = useState(false);
  const meta = COIN_NAMES[id];

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch('/api/prices', { next: { revalidate: 60 } } as RequestInit);
        if (!res.ok) throw new Error('bad response');
        const data: PriceEntry[] = await res.json();
        if (!Array.isArray(data)) throw new Error('bad shape');
        const match = data.find((p) => p.id === id);
        if (alive && match) setEntry(match);
        else if (alive) setErr(true);
      } catch {
        if (alive) setErr(true);
      }
    }
    load();
    const t = setInterval(load, 60_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, [id]);

  if (!meta) return null;

  const price = entry?.current_price;
  const change = entry?.price_change_percentage_24h ?? 0;
  const changeColor = change >= 0 ? '#3fb950' : '#f85149';
  const changeSign = change >= 0 ? '+' : '';

  return (
    <aside
      aria-label={`Live price for ${meta.name}`}
      style={{
        display: 'inline-flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 14,
        padding: '10px 16px',
        margin: '20px 0',
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 10,
        color: '#e6edf3',
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, sans-serif',
      }}
    >
      <span style={{ fontSize: 13, color: '#8b949e' }}>
        Live · {label ?? meta.name} ({meta.symbol})
      </span>
      <span style={{ fontSize: 20, fontWeight: 700 }}>
        {price != null ? fmtPrice(price) : err ? '—' : '…'}
      </span>
      {entry && (
        <span style={{ fontSize: 13, color: changeColor, fontWeight: 600 }}>
          {changeSign}
          {change.toFixed(2)}% 24h
        </span>
      )}
      <span style={{ fontSize: 11, color: '#6e7681' }}>
        Source: CoinGecko · 60s cache
      </span>
    </aside>
  );
}
