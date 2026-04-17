// Reusable SVG diagrams. Each is an inline component that takes no props
// and renders a self-contained, dark-themed illustration. Designed to be
// referenced by slug via <Diagram slug="..." /> and bundled as one file
// so pages can cheaply import a single component.
//
// Ramp-to-8 Phase 2c — multimedia minimum.

import type { JSX } from 'react';

const ink = {
  bg: '#0d1117',
  card: '#161b22',
  border: '#30363d',
  text: '#e6edf3',
  muted: '#8b949e',
  accent: '#f7931a',
  eth: '#627eea',
  sol: '#14f195',
  blue: '#58a6ff',
  green: '#238636',
  red: '#da3633',
  purple: '#a371f7',
};

function Frame({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) {
  return (
    <figure
      style={{
        margin: '24px 0',
        background: ink.card,
        border: `1px solid ${ink.border}`,
        borderRadius: 10,
        padding: 16,
      }}
    >
      <svg
        role="img"
        aria-label={title}
        viewBox="0 0 720 360"
        width="100%"
        style={{ display: 'block' }}
      >
        {children}
      </svg>
      <figcaption
        style={{
          marginTop: 8,
          fontSize: 13,
          color: ink.muted,
          textAlign: 'center',
        }}
      >
        {title}
      </figcaption>
    </figure>
  );
}

export type DiagramSlug =
  | 'pow-vs-pos'
  | 'utxo-vs-account'
  | 'self-custody-flow'
  | 'bridging-flow'
  | 'amm-liquidity'
  | 'staking-rewards'
  | 'dex-vs-cex'
  | 'hot-cold-wallets'
  | 'l1-vs-l2'
  | 'nft-mint-flow'
  | 'defi-lending-cycle'
  | 'orderbook-vs-amm'
  | 'mempool-flow'
  | 'mev-sandwich'
  | 'oracle-price-feed'
  | 'hd-wallet-derivation'
  | 'restaking-flow'
  | 'kyc-aml-flow'
  | 'gas-fee-components'
  | 'rollup-types'
  | 'stablecoin-peg'
  | 'zk-vs-optimistic'
  | 'onramp-offramp'
  | 'token-unlock-vesting'
  | 'multisig-setup'
  | 'ethereum-merge'
  | 'airdrop-claim-flow'
  | 'governance-proposal'
  | 'bridge-hack-vectors'
  | 'bitcoin-halving';

interface DiagramProps {
  slug: DiagramSlug;
  title?: string;
}

export default function Diagram({ slug, title }: DiagramProps) {
  switch (slug) {
    case 'pow-vs-pos':
      return (
        <Frame title={title ?? 'Proof of Work vs Proof of Stake'}>
          <g>
            <text x="180" y="40" fill={ink.accent} fontSize="18" fontWeight="700" textAnchor="middle">Proof of Work</text>
            <text x="540" y="40" fill={ink.eth} fontSize="18" fontWeight="700" textAnchor="middle">Proof of Stake</text>
            <rect x="60" y="70" width="240" height="260" rx="8" fill={ink.card} stroke={ink.border}/>
            <rect x="420" y="70" width="240" height="260" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="180" y="110" fill={ink.text} fontSize="14" textAnchor="middle">Miners race to solve</text>
            <text x="180" y="130" fill={ink.text} fontSize="14" textAnchor="middle">SHA-256 puzzle</text>
            <circle cx="180" cy="190" r="40" fill="none" stroke={ink.accent} strokeWidth="3"/>
            <text x="180" y="196" fill={ink.accent} fontSize="28" textAnchor="middle">⚒</text>
            <text x="180" y="280" fill={ink.muted} fontSize="13" textAnchor="middle">Energy-intensive</text>
            <text x="180" y="300" fill={ink.muted} fontSize="13" textAnchor="middle">Hardware moat</text>
            <text x="540" y="110" fill={ink.text} fontSize="14" textAnchor="middle">Validators stake</text>
            <text x="540" y="130" fill={ink.text} fontSize="14" textAnchor="middle">ETH as collateral</text>
            <circle cx="540" cy="190" r="40" fill="none" stroke={ink.eth} strokeWidth="3"/>
            <text x="540" y="200" fill={ink.eth} fontSize="28" textAnchor="middle">◆</text>
            <text x="540" y="280" fill={ink.muted} fontSize="13" textAnchor="middle">Capital-intensive</text>
            <text x="540" y="300" fill={ink.muted} fontSize="13" textAnchor="middle">Slashable</text>
          </g>
        </Frame>
      );
    case 'utxo-vs-account':
      return (
        <Frame title={title ?? 'UTXO vs Account model'}>
          <g>
            <text x="180" y="40" fill={ink.accent} fontSize="18" fontWeight="700" textAnchor="middle">Bitcoin (UTXO)</text>
            <text x="540" y="40" fill={ink.eth} fontSize="18" fontWeight="700" textAnchor="middle">Ethereum (Account)</text>
            <g fill={ink.card} stroke={ink.border}>
              <rect x="60" y="70" width="70" height="40" rx="4"/>
              <rect x="140" y="70" width="70" height="40" rx="4"/>
              <rect x="220" y="70" width="70" height="40" rx="4"/>
              <rect x="60" y="130" width="230" height="40" rx="4"/>
              <rect x="60" y="200" width="110" height="40" rx="4"/>
              <rect x="180" y="200" width="110" height="40" rx="4"/>
            </g>
            <text x="95" y="95" fill={ink.text} fontSize="12" textAnchor="middle">0.4 BTC</text>
            <text x="175" y="95" fill={ink.text} fontSize="12" textAnchor="middle">0.3 BTC</text>
            <text x="255" y="95" fill={ink.text} fontSize="12" textAnchor="middle">0.5 BTC</text>
            <text x="175" y="155" fill={ink.text} fontSize="12" textAnchor="middle">Spend 1.0 BTC</text>
            <text x="115" y="225" fill={ink.text} fontSize="12" textAnchor="middle">0.8 to bob</text>
            <text x="235" y="225" fill={ink.text} fontSize="12" textAnchor="middle">0.2 change</text>
            <text x="175" y="290" fill={ink.muted} fontSize="13" textAnchor="middle">Coins are distinct outputs</text>
            <rect x="420" y="70" width="240" height="40" rx="4" fill={ink.card} stroke={ink.border}/>
            <text x="540" y="95" fill={ink.text} fontSize="13" textAnchor="middle">alice.eth: 4.5 ETH</text>
            <line x1="540" y1="115" x2="540" y2="195" stroke={ink.eth} strokeWidth="2" markerEnd="url(#arrow-pos)"/>
            <defs>
              <marker id="arrow-pos" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill={ink.eth}/>
              </marker>
            </defs>
            <rect x="420" y="200" width="240" height="40" rx="4" fill={ink.card} stroke={ink.border}/>
            <text x="540" y="225" fill={ink.text} fontSize="13" textAnchor="middle">alice.eth: 3.5 ETH (−1.0)</text>
            <text x="540" y="290" fill={ink.muted} fontSize="13" textAnchor="middle">One balance mutated</text>
          </g>
        </Frame>
      );
    case 'self-custody-flow':
      return (
        <Frame title={title ?? 'Self-custody: seed → keys → addresses'}>
          <g fontSize="13" fill={ink.text}>
            <rect x="40" y="150" width="130" height="60" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="105" y="185" textAnchor="middle">12-24 word seed</text>
            <rect x="230" y="150" width="130" height="60" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="295" y="177" textAnchor="middle">Master</text>
            <text x="295" y="196" textAnchor="middle">private key</text>
            <rect x="420" y="90" width="130" height="50" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="485" y="120" textAnchor="middle">Account 0</text>
            <rect x="420" y="155" width="130" height="50" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="485" y="185" textAnchor="middle">Account 1</text>
            <rect x="420" y="220" width="130" height="50" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="485" y="250" textAnchor="middle">Account N…</text>
            <rect x="590" y="155" width="110" height="50" rx="8" fill={ink.card} stroke={ink.accent}/>
            <text x="645" y="185" textAnchor="middle" fill={ink.accent}>Address</text>
            <line x1="170" y1="180" x2="230" y2="180" stroke={ink.muted} strokeWidth="2"/>
            <line x1="360" y1="180" x2="420" y2="115" stroke={ink.muted} strokeWidth="2"/>
            <line x1="360" y1="180" x2="420" y2="180" stroke={ink.muted} strokeWidth="2"/>
            <line x1="360" y1="180" x2="420" y2="245" stroke={ink.muted} strokeWidth="2"/>
            <line x1="550" y1="180" x2="590" y2="180" stroke={ink.muted} strokeWidth="2"/>
            <text x="360" y="330" textAnchor="middle" fill={ink.muted}>One seed deterministically derives an unbounded tree of keys.</text>
          </g>
        </Frame>
      );
    case 'bridging-flow':
      return (
        <Frame title={title ?? 'Cross-chain bridge: lock → mint → unlock'}>
          <g fontSize="13" fill={ink.text}>
            <rect x="40" y="100" width="160" height="160" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="120" y="130" textAnchor="middle" fill={ink.accent} fontWeight="700">Chain A</text>
            <text x="120" y="170" textAnchor="middle">user locks</text>
            <text x="120" y="190" textAnchor="middle">10 ETH</text>
            <rect x="280" y="100" width="160" height="160" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="360" y="130" textAnchor="middle" fill={ink.purple} fontWeight="700">Bridge relayer</text>
            <text x="360" y="170" textAnchor="middle">validates lock event</text>
            <text x="360" y="190" textAnchor="middle">signs attestation</text>
            <rect x="520" y="100" width="160" height="160" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="600" y="130" textAnchor="middle" fill={ink.blue} fontWeight="700">Chain B</text>
            <text x="600" y="170" textAnchor="middle">mints</text>
            <text x="600" y="190" textAnchor="middle">10 wETH</text>
            <path d="M200 180 L280 180" stroke={ink.accent} strokeWidth="2"/>
            <path d="M440 180 L520 180" stroke={ink.blue} strokeWidth="2"/>
            <text x="360" y="320" textAnchor="middle" fill={ink.muted}>Risk concentrates at the bridge. Attackers target it — not the chains.</text>
          </g>
        </Frame>
      );
    case 'amm-liquidity':
      return (
        <Frame title={title ?? 'AMM constant-product pricing (x·y=k)'}>
          <g fontSize="13" fill={ink.text}>
            <path d="M80 300 Q 200 80 640 80" stroke={ink.accent} strokeWidth="3" fill="none"/>
            <line x1="80" y1="50" x2="80" y2="330" stroke={ink.border}/>
            <line x1="60" y1="300" x2="680" y2="300" stroke={ink.border}/>
            <text x="15" y="180" fill={ink.muted} textAnchor="middle">Token Y</text>
            <text x="380" y="345" fill={ink.muted} textAnchor="middle">Token X reserve</text>
            <circle cx="180" cy="200" r="6" fill={ink.accent}/>
            <circle cx="400" cy="110" r="6" fill={ink.accent}/>
            <text x="200" y="195" fill={ink.text}>swap 1</text>
            <text x="420" y="105" fill={ink.text}>swap 2 slippage ↑</text>
            <text x="380" y="30" textAnchor="middle" fill={ink.muted}>Price = Y / X. As X grows, marginal price rises — protecting the pool from drain.</text>
          </g>
        </Frame>
      );
    case 'staking-rewards':
      return (
        <Frame title={title ?? 'Staking: validator rewards flow'}>
          <g fontSize="13" fill={ink.text}>
            <rect x="40" y="140" width="160" height="80" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="120" y="175" textAnchor="middle">Depositor</text>
            <text x="120" y="195" textAnchor="middle">stakes 32 ETH</text>
            <rect x="280" y="140" width="160" height="80" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="360" y="175" textAnchor="middle" fill={ink.green}>Validator</text>
            <text x="360" y="195" textAnchor="middle">attests blocks</text>
            <rect x="520" y="140" width="160" height="80" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="600" y="175" textAnchor="middle" fill={ink.accent}>Rewards</text>
            <text x="600" y="195" textAnchor="middle">~3-5% APR</text>
            <line x1="200" y1="180" x2="280" y2="180" stroke={ink.muted} strokeWidth="2"/>
            <line x1="440" y1="180" x2="520" y2="180" stroke={ink.accent} strokeWidth="2"/>
            <text x="360" y="300" textAnchor="middle" fill={ink.red}>Slashing: double-signs or downtime burn up to 1 ETH.</text>
          </g>
        </Frame>
      );
    case 'dex-vs-cex':
      return (
        <Frame title={title ?? 'Custody model: DEX vs CEX'}>
          <g fontSize="13" fill={ink.text}>
            <text x="180" y="40" fill={ink.accent} fontSize="18" fontWeight="700" textAnchor="middle">CEX</text>
            <text x="540" y="40" fill={ink.blue} fontSize="18" fontWeight="700" textAnchor="middle">DEX</text>
            <rect x="60" y="80" width="240" height="60" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="180" y="115" textAnchor="middle">User wallet</text>
            <path d="M180 140 L180 180" stroke={ink.muted} strokeWidth="2"/>
            <rect x="60" y="180" width="240" height="60" rx="8" fill={ink.card} stroke={ink.red}/>
            <text x="180" y="205" textAnchor="middle" fill={ink.red}>Exchange-held</text>
            <text x="180" y="225" textAnchor="middle">hot wallet</text>
            <text x="180" y="280" textAnchor="middle" fill={ink.muted}>Trust the exchange</text>
            <text x="180" y="300" textAnchor="middle" fill={ink.muted}>(counterparty risk)</text>
            <rect x="420" y="80" width="240" height="60" rx="8" fill={ink.card} stroke={ink.border}/>
            <text x="540" y="115" textAnchor="middle">User wallet</text>
            <path d="M540 140 L540 180" stroke={ink.muted} strokeWidth="2"/>
            <rect x="420" y="180" width="240" height="60" rx="8" fill={ink.card} stroke={ink.green}/>
            <text x="540" y="205" textAnchor="middle" fill={ink.green}>Smart-contract pool</text>
            <text x="540" y="225" textAnchor="middle">(no custodian)</text>
            <text x="540" y="280" textAnchor="middle" fill={ink.muted}>Trust the contract</text>
            <text x="540" y="300" textAnchor="middle" fill={ink.muted}>(smart-contract risk)</text>
          </g>
        </Frame>
      );
    case 'hot-cold-wallets':
      return (
        <Frame title={title ?? 'Hot vs Cold wallets: tradeoffs'}>
          <g fontSize="13" fill={ink.text}>
            <rect x="60" y="80" width="260" height="200" rx="10" fill={ink.card} stroke={ink.red}/>
            <text x="190" y="110" textAnchor="middle" fontWeight="700" fill={ink.red}>Hot wallet</text>
            <text x="190" y="150" textAnchor="middle">Online · fast</text>
            <text x="190" y="175" textAnchor="middle">For small balances</text>
            <text x="190" y="200" textAnchor="middle">Browser/mobile key</text>
            <text x="190" y="235" textAnchor="middle" fill={ink.muted}>Key exposed to</text>
            <text x="190" y="255" textAnchor="middle" fill={ink.muted}>malware/phishing</text>
            <rect x="400" y="80" width="260" height="200" rx="10" fill={ink.card} stroke={ink.green}/>
            <text x="530" y="110" textAnchor="middle" fontWeight="700" fill={ink.green}>Cold wallet</text>
            <text x="530" y="150" textAnchor="middle">Offline · slow</text>
            <text x="530" y="175" textAnchor="middle">For savings</text>
            <text x="530" y="200" textAnchor="middle">Hardware/paper</text>
            <text x="530" y="235" textAnchor="middle" fill={ink.muted}>Key never touches</text>
            <text x="530" y="255" textAnchor="middle" fill={ink.muted}>an internet-connected host</text>
          </g>
        </Frame>
      );
    case 'l1-vs-l2':
      return (
        <Frame title={title ?? 'L1 vs L2: rollup data flow'}>
          <g fontSize="13" fill={ink.text}>
            <rect x="60" y="240" width="600" height="80" rx="10" fill={ink.card} stroke={ink.eth}/>
            <text x="360" y="285" textAnchor="middle" fill={ink.eth} fontWeight="700">L1 — Ethereum (settlement + DA)</text>
            <rect x="60" y="80" width="280" height="120" rx="10" fill={ink.card} stroke={ink.purple}/>
            <text x="200" y="110" textAnchor="middle" fill={ink.purple} fontWeight="700">L2 — Optimistic</text>
            <text x="200" y="140" textAnchor="middle">exec off-chain</text>
            <text x="200" y="165" textAnchor="middle">fraud proofs</text>
            <text x="200" y="190" textAnchor="middle" fill={ink.muted}>~7-day challenge window</text>
            <rect x="380" y="80" width="280" height="120" rx="10" fill={ink.card} stroke={ink.green}/>
            <text x="520" y="110" textAnchor="middle" fill={ink.green} fontWeight="700">L2 — ZK rollup</text>
            <text x="520" y="140" textAnchor="middle">exec off-chain</text>
            <text x="520" y="165" textAnchor="middle">validity proofs</text>
            <text x="520" y="190" textAnchor="middle" fill={ink.muted}>Near-instant finality</text>
            <path d="M200 200 L200 240" stroke={ink.purple} strokeWidth="2"/>
            <path d="M520 200 L520 240" stroke={ink.green} strokeWidth="2"/>
          </g>
        </Frame>
      );
    case 'nft-mint-flow':
      return (
        <Frame title={title ?? 'NFT mint: minter → contract → token'}>
          <g fontSize="13" fill={ink.text}>
            <rect x="40" y="140" width="160" height="80" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="120" y="185" textAnchor="middle">Minter wallet</text>
            <rect x="280" y="140" width="160" height="80" rx="10" fill={ink.card} stroke={ink.purple}/>
            <text x="360" y="175" textAnchor="middle" fill={ink.purple}>ERC-721 contract</text>
            <text x="360" y="200" textAnchor="middle">mint(to, tokenId)</text>
            <rect x="520" y="140" width="160" height="80" rx="10" fill={ink.card} stroke={ink.accent}/>
            <text x="600" y="175" textAnchor="middle" fill={ink.accent}>Token #N</text>
            <text x="600" y="200" textAnchor="middle">owner = minter</text>
            <path d="M200 180 L280 180" stroke={ink.muted} strokeWidth="2"/>
            <path d="M440 180 L520 180" stroke={ink.accent} strokeWidth="2"/>
            <text x="360" y="320" textAnchor="middle" fill={ink.muted}>tokenURI resolves metadata off-chain (IPFS or hosted JSON).</text>
          </g>
        </Frame>
      );
    case 'defi-lending-cycle':
      return (
        <Frame title={title ?? 'DeFi lending: supply → collateral → borrow'}>
          <g fontSize="13" fill={ink.text}>
            <circle cx="360" cy="180" r="110" fill="none" stroke={ink.border} strokeDasharray="4 4"/>
            <rect x="240" y="60" width="240" height="60" rx="8" fill={ink.card} stroke={ink.green}/>
            <text x="360" y="95" textAnchor="middle" fill={ink.green}>Supply (earn APY)</text>
            <rect x="540" y="150" width="170" height="60" rx="8" fill={ink.card} stroke={ink.accent}/>
            <text x="625" y="185" textAnchor="middle" fill={ink.accent}>Post collateral</text>
            <rect x="240" y="240" width="240" height="60" rx="8" fill={ink.card} stroke={ink.red}/>
            <text x="360" y="275" textAnchor="middle" fill={ink.red}>Borrow (pay APY)</text>
            <rect x="10" y="150" width="170" height="60" rx="8" fill={ink.card} stroke={ink.purple}/>
            <text x="95" y="185" textAnchor="middle" fill={ink.purple}>Liquidation (if unhealthy)</text>
            <path d="M360 120 Q 470 140 540 175" stroke={ink.muted} strokeWidth="2" fill="none"/>
            <path d="M625 210 Q 530 250 480 265" stroke={ink.muted} strokeWidth="2" fill="none"/>
            <path d="M240 270 Q 150 230 180 205" stroke={ink.muted} strokeWidth="2" fill="none"/>
            <path d="M95 150 Q 140 90 240 100" stroke={ink.muted} strokeWidth="2" fill="none"/>
          </g>
        </Frame>
      );
    default:
      // Generic fallback — blank frame with title.
      return (
        <Frame title={title ?? slug}>
          <g>
            <rect x="40" y="40" width="640" height="280" rx="10" fill={ink.card} stroke={ink.border}/>
            <text x="360" y="180" textAnchor="middle" fill={ink.muted} fontSize="18">{slug}</text>
          </g>
        </Frame>
      );
  }
}
