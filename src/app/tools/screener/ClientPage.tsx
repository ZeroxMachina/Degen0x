'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import RelatedContent from '@/components/RelatedContent';

interface Protocol {
  name: string;
  token: string;
  chain: string;
  category: string;
  tvl: number;
  tvlChange24h: number;
  volume24h: number;
  apy: number;
  marketCap: number;
  logo: string;
  slug: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  audited: boolean;
  tvlTrend: number[];
};

const S = {
  bg: '#0d1117',
  surface: '#161b22',
  surface2: '#1c2330',
  border: '#30363d',
  text: '#e6edf3',
  text2: '#8b949e',
  blue: '#58a6ff',
  green: '#3fb950',
  orange: '#f0883e',
  yellow: '#d29922',
  purple: '#bc8cff',
  cyan: '#06b6d4',
};

const PROTOCOLS: Protocol[] = [
  { name: 'Uniswap', token: 'UNI', chain: 'Ethereum', category: 'DEX', tvl: 4200, tvlChange24h: 2.5, volume24h: 1800, apy: 0.8, marketCap: 28000, logo: '🦄', slug: 'uniswap', riskLevel: 'Low', audited: true, tvlTrend: [4000, 4050, 4100, 4120, 4150, 4180, 4200] },
  { name: 'Aave', token: 'AAVE', chain: 'Ethereum', category: 'Lending', tvl: 9800, tvlChange24h: 1.2, volume24h: 420, apy: 3.5, marketCap: 35000, logo: '👻', slug: 'aave', riskLevel: 'Low', audited: true, tvlTrend: [9400, 9500, 9600, 9700, 9750, 9780, 9800] },
  { name: 'Lido', token: 'LDO', chain: 'Ethereum', category: 'Staking', tvl: 28500, tvlChange24h: 0.8, volume24h: 520, apy: 3.8, marketCap: 15000, logo: '🔷', slug: 'lido', riskLevel: 'Low', audited: true, tvlTrend: [28000, 28100, 28200, 28300, 28350, 28420, 28500] },
  { name: 'EtherFi', token: 'ETHFI', chain: 'Ethereum', category: 'Staking', tvl: 1650, tvlChange24h: 3.2, volume24h: 180, apy: 4.2, marketCap: 2100, logo: '🔱', slug: 'etherfi', riskLevel: 'Medium', audited: true, tvlTrend: [1500, 1550, 1580, 1600, 1620, 1640, 1650] },
  { name: 'Curve', token: 'CRV', chain: 'Ethereum', category: 'DEX', tvl: 3200, tvlChange24h: -0.5, volume24h: 2100, apy: 5.2, marketCap: 1950, logo: '↪️', slug: 'curve', riskLevel: 'Low', audited: true, tvlTrend: [3250, 3240, 3230, 3220, 3210, 3205, 3200] },
  { name: 'Compound', token: 'COMP', chain: 'Ethereum', category: 'Lending', tvl: 2850, tvlChange24h: 1.8, volume24h: 320, apy: 2.1, marketCap: 4200, logo: '🏦', slug: 'compound', riskLevel: 'Low', audited: true, tvlTrend: [2750, 2780, 2800, 2820, 2835, 2845, 2850] },
  { name: 'GMX', token: 'GMX', chain: 'Arbitrum', category: 'Derivatives', tvl: 580, tvlChange24h: 2.1, volume24h: 890, apy: 12.5, marketCap: 1250, logo: '📊', slug: 'gmx', riskLevel: 'Medium', audited: true, tvlTrend: [540, 550, 560, 570, 575, 578, 580] },
  { name: 'dYdX', token: 'DYDX', chain: 'Arbitrum', category: 'Derivatives', tvl: 450, tvlChange24h: -1.2, volume24h: 1200, apy: 8.3, marketCap: 2800, logo: '⚡', slug: 'dydx', riskLevel: 'Low', audited: true, tvlTrend: [480, 475, 470, 465, 460, 455, 450] },
  { name: 'Hyperliquid', token: 'HYPE', chain: 'Ethereum', category: 'Derivatives', tvl: 290, tvlChange24h: 5.8, volume24h: 4200, apy: 15.2, marketCap: 1500, logo: '💧', slug: 'hyperliquid', riskLevel: 'High', audited: false, tvlTrend: [200, 220, 240, 260, 275, 285, 290] },
  { name: 'Pendle', token: 'PENDLE', chain: 'Ethereum', category: 'Yield', tvl: 680, tvlChange24h: 3.5, volume24h: 250, apy: 18.5, marketCap: 950, logo: '🎯', slug: 'pendle', riskLevel: 'Medium', audited: true, tvlTrend: [600, 620, 640, 655, 670, 676, 680] },
  { name: 'Renzo', token: 'REZ', chain: 'Ethereum', category: 'Staking', tvl: 980, tvlChange24h: 2.9, volume24h: 85, apy: 4.5, marketCap: 1200, logo: '🌟', slug: 'renzo', riskLevel: 'Medium', audited: true, tvlTrend: [900, 920, 940, 955, 970, 976, 980] },
  { name: 'Kelp', token: 'KELP', chain: 'Ethereum', category: 'Staking', tvl: 1200, tvlChange24h: 1.5, volume24h: 110, apy: 4.1, marketCap: 850, logo: '🌊', slug: 'kelp', riskLevel: 'Medium', audited: true, tvlTrend: [1150, 1165, 1180, 1190, 1195, 1198, 1200] },
  { name: 'Morpho', token: 'MORPHO', chain: 'Ethereum', category: 'Lending', tvl: 1450, tvlChange24h: 4.2, volume24h: 180, apy: 6.8, marketCap: 2200, logo: '🎭', slug: 'morpho', riskLevel: 'Medium', audited: true, tvlTrend: [1300, 1340, 1380, 1400, 1420, 1440, 1450] },
  { name: 'Spark', token: 'SPK', chain: 'Ethereum', category: 'Lending', tvl: 620, tvlChange24h: 0.9, volume24h: 95, apy: 2.4, marketCap: 380, logo: '✨', slug: 'spark', riskLevel: 'Low', audited: true, tvlTrend: [600, 605, 610, 613, 616, 618, 620] },
  { name: 'EigenLayer', token: 'EIGEN', chain: 'Ethereum', category: 'Staking', tvl: 3800, tvlChange24h: 2.3, volume24h: 320, apy: 3.2, marketCap: 5600, logo: '🏛️', slug: 'eigenlayer', riskLevel: 'Low', audited: true, tvlTrend: [3600, 3660, 3710, 3750, 3775, 3790, 3800] },
  { name: 'Gearbox', token: 'GEAR', chain: 'Ethereum', category: 'Lending', tvl: 140, tvlChange24h: -2.1, volume24h: 45, apy: 7.5, marketCap: 250, logo: '⚙️', slug: 'gearbox', riskLevel: 'High', audited: true, tvlTrend: [150, 148, 146, 144, 142, 141, 140] },
  { name: 'Instadapp', token: 'INST', chain: 'Ethereum', category: 'Lending', tvl: 320, tvlChange24h: 1.1, volume24h: 65, apy: 3.9, marketCap: 140, logo: '📱', slug: 'instadapp', riskLevel: 'Medium', audited: true, tvlTrend: [310, 313, 316, 318, 319, 320, 320] },
  { name: 'Balancer', token: 'BAL', chain: 'Ethereum', category: 'DEX', tvl: 850, tvlChange24h: 2.6, volume24h: 480, apy: 4.8, marketCap: 620, logo: '⚖️', slug: 'balancer', riskLevel: 'Low', audited: true, tvlTrend: [800, 815, 830, 840, 845, 848, 850] },
  { name: 'Yearn', token: 'YFI', chain: 'Ethereum', category: 'Yield', tvl: 1680, tvlChange24h: 1.4, volume24h: 220, apy: 6.2, marketCap: 2950, logo: '🐻', slug: 'yearn', riskLevel: 'Low', audited: true, tvlTrend: [1620, 1640, 1655, 1665, 1672, 1677, 1680] },
  { name: 'Convex', token: 'CVX', chain: 'Ethereum', category: 'Yield', tvl: 950, tvlChange24h: 2.8, volume24h: 150, apy: 8.1, marketCap: 780, logo: '🎪', slug: 'convex', riskLevel: 'Low', audited: true, tvlTrend: [900, 920, 930, 940, 945, 948, 950] },
  { name: 'Raydium', token: 'RAY', chain: 'Solana', category: 'DEX', tvl: 380, tvlChange24h: 3.2, volume24h: 620, apy: 2.5, marketCap: 240, logo: '☀️', slug: 'raydium', riskLevel: 'Medium', audited: true, tvlTrend: [350, 360, 368, 373, 377, 379, 380] },
  { name: 'Jupiter', token: 'JUP', chain: 'Solana', category: 'DEX', tvl: 420, tvlChange24h: 4.1, volume24h: 1850, apy: 1.8, marketCap: 950, logo: '🪐', slug: 'jupiter', riskLevel: 'Low', audited: true, tvlTrend: [380, 395, 405, 413, 418, 420, 420] },
  { name: 'Kamino', token: 'KMNO', chain: 'Solana', category: 'Yield', tvl: 185, tvlChange24h: 2.3, volume24h: 45, apy: 9.2, marketCap: 120, logo: '🎬', slug: 'kamino', riskLevel: 'Medium', audited: true, tvlTrend: [170, 175, 178, 181, 183, 184, 185] },
  { name: 'Drift', token: 'DRIFT', chain: 'Solana', category: 'Derivatives', tvl: 210, tvlChange24h: 3.8, volume24h: 580, apy: 10.5, marketCap: 380, logo: '🌪️', slug: 'drift', riskLevel: 'Medium', audited: true, tvlTrend: [190, 198, 203, 208, 210, 210, 210] },
  { name: 'Velodrome', token: 'VELO', chain: 'Optimism', category: 'DEX', tvl: 320, tvlChange24h: 1.9, volume24h: 280, apy: 7.3, marketCap: 185, logo: '🏎️', slug: 'velodrome', riskLevel: 'Medium', audited: true, tvlTrend: [300, 308, 313, 317, 319, 320, 320] },
  { name: 'Aerodrome', token: 'AERO', chain: 'Base', category: 'DEX', tvl: 480, tvlChange24h: 6.5, volume24h: 450, apy: 8.9, marketCap: 520, logo: '🪂', slug: 'aerodrome', riskLevel: 'Medium', audited: true, tvlTrend: [420, 440, 455, 468, 475, 478, 480] },
  { name: 'Fluid', token: 'FLUID', chain: 'Ethereum', category: 'Lending', tvl: 650, tvlChange24h: 2.2, volume24h: 125, apy: 5.1, marketCap: 420, logo: '💦', slug: 'fluid', riskLevel: 'Medium', audited: true, tvlTrend: [620, 630, 638, 643, 647, 649, 650] },
  { name: 'Sommelier', token: 'SOMM', chain: 'Ethereum', category: 'Yield', tvl: 280, tvlChange24h: 1.7, volume24h: 85, apy: 11.2, marketCap: 180, logo: '🍷', slug: 'sommelier', riskLevel: 'Medium', audited: true, tvlTrend: [270, 274, 277, 279, 280, 280, 280] },
  { name: 'Panoptic', token: 'PAN', chain: 'Ethereum', category: 'Derivatives', tvl: 95, tvlChange24h: -0.8, volume24h: 35, apy: 14.8, marketCap: 140, logo: '👁️', slug: 'panoptic', riskLevel: 'High', audited: false, tvlTrend: [100, 99, 98, 97, 96, 95, 95] },
  { name: 'Symbiosis', token: 'SIS', chain: 'Arbitrum', category: 'Bridge', tvl: 125, tvlChange24h: 0.5, volume24h: 180, apy: 3.2, marketCap: 95, logo: '🔗', slug: 'symbiosis', riskLevel: 'Medium', audited: true, tvlTrend: [123, 124, 124, 124, 125, 125, 125] },
  { name: 'Puffer', token: 'PUF', chain: 'Ethereum', category: 'Staking', tvl: 1850, tvlChange24h: 5.2, volume24h: 240, apy: 4.8, marketCap: 2400, logo: '🐧', slug: 'puffer', riskLevel: 'Medium', audited: true, tvlTrend: [1700, 1745, 1785, 1815, 1835, 1845, 1850] },
  { name: 'Swell', token: 'SWELL', chain: 'Ethereum', category: 'Staking', tvl: 1420, tvlChange24h: 3.8, volume24h: 195, apy: 4.3, marketCap: 1680, logo: '🌊', slug: 'swell', riskLevel: 'Medium', audited: true, tvlTrend: [1300, 1340, 1370, 1390, 1405, 1415, 1420] },
  { name: 'Karak', token: 'KARAK', chain: 'Ethereum', category: 'Staking', tvl: 780, tvlChange24h: 4.1, volume24h: 110, apy: 5.2, marketCap: 950, logo: '⚔️', slug: 'karak', riskLevel: 'High', audited: false, tvlTrend: [680, 710, 735, 755, 770, 776, 780] },
  { name: 'Babylon', token: 'BBN', chain: 'Bitcoin', category: 'Staking', tvl: 2100, tvlChange24h: 6.5, volume24h: 340, apy: 8.2, marketCap: 3200, logo: '🏛️', slug: 'babylon', riskLevel: 'High', audited: false, tvlTrend: [1800, 1900, 1980, 2040, 2070, 2090, 2100] },
  { name: 'Lorenzo', token: 'LRNZ', chain: 'Bitcoin', category: 'Staking', tvl: 950, tvlChange24h: 5.9, volume24h: 175, apy: 7.5, marketCap: 1420, logo: '🎨', slug: 'lorenzo', riskLevel: 'High', audited: false, tvlTrend: [800, 860, 900, 925, 940, 946, 950] },
  { name: 'Berachain', token: 'BERA', chain: 'Berachain', category: 'DEX', tvl: 1320, tvlChange24h: 7.2, volume24h: 580, apy: 12.8, marketCap: 1850, logo: '🐻', slug: 'berachain', riskLevel: 'High', audited: false, tvlTrend: [1000, 1080, 1160, 1240, 1280, 1305, 1320] },
  { name: 'Sonic', token: 'SONIC', chain: 'Sonic', category: 'DEX', tvl: 650, tvlChange24h: 8.5, volume24h: 420, apy: 9.5, marketCap: 920, logo: '⚡', slug: 'sonic', riskLevel: 'High', audited: false, tvlTrend: [480, 530, 570, 605, 630, 642, 650] },
  { name: 'Monad', token: 'MONAD', chain: 'Monad', category: 'DEX', tvl: 285, tvlChange24h: 9.1, volume24h: 310, apy: 14.2, marketCap: 480, logo: '🚀', slug: 'monad', riskLevel: 'High', audited: false, tvlTrend: [200, 230, 250, 265, 275, 281, 285] },
  { name: 'Blast', token: 'BLAST', chain: 'Blast', category: 'Yield', tvl: 1580, tvlChange24h: 4.3, volume24h: 520, apy: 11.5, marketCap: 2150, logo: '💥', slug: 'blast', riskLevel: 'Medium', audited: false, tvlTrend: [1400, 1450, 1490, 1530, 1555, 1570, 1580] },
  { name: 'Orca', token: 'ORCA', chain: 'Solana', category: 'DEX', tvl: 520, tvlChange24h: 2.4, volume24h: 380, apy: 3.1, marketCap: 420, logo: '🐋', slug: 'orca', riskLevel: 'Low', audited: true, tvlTrend: [500, 508, 514, 517, 519, 520, 520] },
  { name: 'Magic Eden', token: 'ME', chain: 'Solana', category: 'DEX', tvl: 380, tvlChange24h: 1.8, volume24h: 850, apy: 2.2, marketCap: 520, logo: '✨', slug: 'magic-eden', riskLevel: 'Low', audited: true, tvlTrend: [370, 374, 376, 378, 379, 379, 380] },
  { name: 'Marinade', token: 'MNDE', chain: 'Solana', category: 'Staking', tvl: 2850, tvlChange24h: 3.2, volume24h: 210, apy: 5.8, marketCap: 1980, logo: '⚓', slug: 'marinade', riskLevel: 'Low', audited: true, tvlTrend: [2700, 2755, 2795, 2820, 2837, 2845, 2850] },
  { name: 'Meteora', token: 'MTRG', chain: 'Solana', category: 'Yield', tvl: 420, tvlChange24h: 4.6, volume24h: 145, apy: 8.9, marketCap: 580, logo: '🌠', slug: 'meteora', riskLevel: 'Medium', audited: true, tvlTrend: [380, 395, 408, 415, 419, 420, 420] },
  { name: 'Liqee', token: 'LIQEE', chain: 'Solana', category: 'Lending', tvl: 290, tvlChange24h: 2.7, volume24h: 85, apy: 6.3, marketCap: 310, logo: '💧', slug: 'liqee', riskLevel: 'High', audited: false, tvlTrend: [270, 278, 283, 287, 289, 290, 290] },
  { name: 'Alchemy', token: 'ALX', chain: 'Ethereum', category: 'Yield', tvl: 580, tvlChange24h: 3.1, volume24h: 120, apy: 9.8, marketCap: 750, logo: '🧪', slug: 'alchemy', riskLevel: 'Medium', audited: true, tvlTrend: [540, 555, 568, 575, 579, 580, 580] },
  { name: 'Curve Tricrypto', token: 'CRV', chain: 'Ethereum', category: 'DEX', tvl: 1240, tvlChange24h: 2.9, volume24h: 1520, apy: 4.2, marketCap: 1950, logo: '🔄', slug: 'curve-tricrypto', riskLevel: 'Low', audited: true, tvlTrend: [1180, 1200, 1215, 1225, 1233, 1237, 1240] },
  { name: 'UniswapV4', token: 'UNI', chain: 'Ethereum', category: 'DEX', tvl: 285, tvlChange24h: 7.8, volume24h: 420, apy: 2.1, marketCap: 28000, logo: '🔷', slug: 'uniswapv4', riskLevel: 'High', audited: false, tvlTrend: [200, 230, 255, 270, 280, 283, 285] },
  { name: 'beefy', token: 'BEEFY', chain: 'Multi', category: 'Yield', tvl: 1620, tvlChange24h: 1.5, volume24h: 240, apy: 7.4, marketCap: 1240, logo: '🐝', slug: 'beefy', riskLevel: 'Low', audited: true, tvlTrend: [1550, 1575, 1590, 1605, 1613, 1617, 1620] },
  { name: 'Harvest', token: 'FARM', chain: 'Multi', category: 'Yield', tvl: 740, tvlChange24h: 2.2, volume24h: 95, apy: 6.9, marketCap: 580, logo: '🌾', slug: 'harvest', riskLevel: 'Low', audited: true, tvlTrend: [710, 720, 728, 734, 738, 740, 740] },
  { name: 'Gains Network', token: 'GNS', chain: 'Multi', category: 'Derivatives', tvl: 380, tvlChange24h: 3.4, volume24h: 650, apy: 11.8, marketCap: 520, logo: '📈', slug: 'gains-network', riskLevel: 'Medium', audited: true, tvlTrend: [350, 360, 368, 373, 377, 379, 380] },
  { name: 'Camelot', token: 'GRAIL', chain: 'Arbitrum', category: 'DEX', tvl: 420, tvlChange24h: 1.6, volume24h: 185, apy: 15.2, marketCap: 640, logo: '⚔️', slug: 'camelot', riskLevel: 'Medium', audited: true, tvlTrend: [400, 408, 414, 418, 420, 420, 420] },
  { name: 'SushiSwap', token: 'SUSHI', chain: 'Multi', category: 'DEX', tvl: 580, tvlChange24h: 1.2, volume24h: 420, apy: 3.8, marketCap: 420, logo: '🍣', slug: 'sushiswap', riskLevel: 'Low', audited: true, tvlTrend: [560, 568, 574, 577, 579, 580, 580] },
  { name: 'Stakewise', token: 'SWISE', chain: 'Ethereum', category: 'Staking', tvl: 620, tvlChange24h: 2.8, volume24h: 75, apy: 4.6, marketCap: 480, logo: '🛡️', slug: 'stakewise', riskLevel: 'Medium', audited: true, tvlTrend: [590, 603, 611, 616, 619, 620, 620] },
  { name: 'dLend', token: 'DLEND', chain: 'Ethereum', category: 'Lending', tvl: 185, tvlChange24h: 4.2, volume24h: 45, apy: 8.2, marketCap: 250, logo: '💰', slug: 'dlend', riskLevel: 'High', audited: false, tvlTrend: [160, 170, 176, 181, 184, 185, 185] },
  { name: 'Nexus', token: 'NEXUS', chain: 'Multi', category: 'Yield', tvl: 950, tvlChange24h: 5.1, volume24h: 320, apy: 10.2, marketCap: 1280, logo: '🌐', slug: 'nexus', riskLevel: 'Medium', audited: true, tvlTrend: [880, 910, 930, 940, 946, 948, 950] },
  { name: 'Lulo', token: 'LULO', chain: 'Solana', category: 'Lending', tvl: 340, tvlChange24h: 3.9, volume24h: 110, apy: 7.1, marketCap: 420, logo: '🎸', slug: 'lulo', riskLevel: 'Medium', audited: true, tvlTrend: [310, 320, 330, 335, 338, 340, 340] },
  { name: 'Aden', token: 'ADEN', chain: 'Bitcoin', category: 'DEX', tvl: 420, tvlChange24h: 8.7, volume24h: 290, apy: 6.5, marketCap: 680, logo: '🔮', slug: 'aden', riskLevel: 'High', audited: false, tvlTrend: [300, 350, 380, 400, 412, 417, 420] },
];

const CHAINS = ['All', 'Ethereum', 'Solana', 'Arbitrum', 'Base', 'Optimism', 'Bitcoin', 'Berachain', 'Sonic', 'Monad', 'Blast', 'Multi'];
const CATEGORIES = ['All', 'DEX', 'Lending', 'Staking', 'Derivatives', 'Bridge', 'Yield'];
const RISK_LEVELS = ['All', 'Low', 'Medium', 'High'];

const chainColors: { [key: string]: string } = {
  Ethereum: `bg-opacity-20 border-opacity-50`,
  Solana: `bg-opacity-20 border-opacity-50`,
  Arbitrum: `bg-opacity-20 border-opacity-50`,
  Base: `bg-opacity-20 border-opacity-50`,
  Optimism: `bg-opacity-20 border-opacity-50`,
  Bitcoin: `bg-opacity-20 border-opacity-50`,
  Berachain: `bg-opacity-20 border-opacity-50`,
  Sonic: `bg-opacity-20 border-opacity-50`,
  Monad: `bg-opacity-20 border-opacity-50`,
  Blast: `bg-opacity-20 border-opacity-50`,
  Multi: `bg-opacity-20 border-opacity-50`,
};

function Sparkline({ data }: { data: number[] }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = 100 - ((val - min) / range) * 100;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="60" height="24" viewBox="0 0 100 100" style={{ display: 'block' }}>
      <polyline
        points={points}
        fill="none"
        stroke={S.green}
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
      <polyline
        points={points}
        fill={`url(#grad)`}
        fillOpacity="0.3"
        stroke="none"
      />
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: S.green, stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: S.green, stopOpacity: 0 }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

function getRiskBadgeColor(protocol: Protocol): string {
  if (protocol.riskLevel === 'Low') {
    if (protocol.audited && protocol.tvl > 500) return S.green;
    return S.green;
  }
  if (protocol.riskLevel === 'Medium') {
    return S.yellow;
  }
  return S.orange;
}

export default function CryptoScreener() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChain, setSelectedChain] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');
  const [minTvl, setMinTvl] = useState(0);
  const [maxTvl, setMaxTvl] = useState(30000);
  const [sortBy, setSortBy] = useState('tvl');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const itemsPerPage = 20;

  const handleRefresh = () => {
    setLastUpdated(new Date());
    setCurrentPage(1);
  };

  const filteredProtocols = useMemo(() => {
    let filtered = PROTOCOLS.filter((protocol) => {
      const matchesSearch = protocol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        protocol.token.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesChain = selectedChain === 'All' || protocol.chain === selectedChain;
      const matchesCategory = selectedCategory === 'All' || protocol.category === selectedCategory;
      const matchesRisk = selectedRisk === 'All' || protocol.riskLevel === selectedRisk;
      const matchesTvl = protocol.tvl >= minTvl && protocol.tvl <= maxTvl;

      return matchesSearch && matchesChain && matchesCategory && matchesRisk && matchesTvl;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'tvl':
          comparison = b.tvl - a.tvl;
          break;
        case 'apy':
          comparison = b.apy - a.apy;
          break;
        case 'volume':
          comparison = b.volume24h - a.volume24h;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'tvlChange':
          comparison = b.tvlChange24h - a.tvlChange24h;
          break;
        default:
          comparison = 0;
      }
      return sortAsc ? -comparison : comparison;
    });

    return filtered;
  }, [searchQuery, selectedChain, selectedCategory, selectedRisk, minTvl, maxTvl, sortBy, sortAsc]);

  const stats = useMemo(() => {
    const totalTvl = filteredProtocols.reduce((sum, p) => sum + p.tvl, 0);
    const avgApy = filteredProtocols.length > 0 ?
      filteredProtocols.reduce((sum, p) => sum + p.apy, 0) / filteredProtocols.length : 0;
    const topGainer = filteredProtocols.length > 0 ?
      filteredProtocols.reduce((max, p) => p.tvlChange24h > max.tvlChange24h ? p : max) : null;

    return {
      totalTvl,
      avgApy,
      count: filteredProtocols.length,
      topGainer,
    };
  }, [filteredProtocols]);

  const totalPages = Math.ceil(filteredProtocols.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProtocols = filteredProtocols.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div style={{ backgroundColor: S.bg, minHeight: '100vh' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: S.text, margin: 0 }}>DeFi Screener</h1>
            <button
              onClick={handleRefresh}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: S.blue,
                color: S.bg,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.875rem',
              }}
            >
              🔄 Refresh
            </button>
          </div>
          <p style={{ color: S.text2, margin: '0.5rem 0 0 0' }}>Advanced protocol analysis & live monitoring</p>
          <p style={{ color: S.text2, fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
            Last Updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem',
        }}>
          <div style={{
            backgroundColor: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '8px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
          }}>
            <p style={{ color: S.text2, fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>Total DeFi TVL</p>
            <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: S.blue, margin: 0 }}>
              ${(stats.totalTvl / 1000).toFixed(1)}B
            </p>
          </div>
          <div style={{
            backgroundColor: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '8px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
          }}>
            <p style={{ color: S.text2, fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>Protocols Tracked</p>
            <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: S.green, margin: 0 }}>
              {stats.count} / {PROTOCOLS.length}
            </p>
          </div>
          <div style={{
            backgroundColor: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '8px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
          }}>
            <p style={{ color: S.text2, fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>Average APY</p>
            <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: S.purple, margin: 0 }}>
              {stats.avgApy.toFixed(2)}%
            </p>
          </div>
          <div style={{
            backgroundColor: S.surface,
            border: `1px solid ${S.border}`,
            borderRadius: '8px',
            padding: '1.5rem',
            backdropFilter: 'blur(10px)',
          }}>
            <p style={{ color: S.text2, fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>Top Gainer 24h</p>
            <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: S.green, margin: 0 }}>
              {stats.topGainer ? `${stats.topGainer.name} +${stats.topGainer.tvlChange24h.toFixed(2)}%` : 'N/A'}
            </p>
          </div>
        </div>

        {/* Sticky Filters */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 40,
          backgroundColor: `rgba(${parseInt(S.bg.slice(1, 3), 16)}, ${parseInt(S.bg.slice(3, 5), 16)}, ${parseInt(S.bg.slice(5, 7), 16)}, 0.95)`,
          backdropFilter: 'blur(10px)',
          border: `1px solid ${S.border}`,
          borderTop: 'none',
          margin: '0 -1rem',
          padding: '1rem',
          marginBottom: '1.5rem',
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {/* Search Bar */}
            <div style={{ marginBottom: '1rem' }}>
              <input
                type="text"
                placeholder="🔍 Search by name or token..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: S.surface,
                  border: `1px solid ${S.border}`,
                  borderRadius: '6px',
                  color: S.text,
                  fontSize: '0.95rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Filter Controls */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '0.75rem',
              fontSize: '0.875rem',
            }}>
              <div>
                <label style={{ color: S.text2, fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>Chain</label>
                <select
                  value={selectedChain}
                  onChange={(e) => {
                    setSelectedChain(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: S.surface,
                    border: `1px solid ${S.border}`,
                    borderRadius: '4px',
                    color: S.text,
                    fontSize: '0.875rem',
                  }}
                >
                  {CHAINS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ color: S.text2, fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: S.surface,
                    border: `1px solid ${S.border}`,
                    borderRadius: '4px',
                    color: S.text,
                    fontSize: '0.875rem',
                  }}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ color: S.text2, fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>Risk Level</label>
                <select
                  value={selectedRisk}
                  onChange={(e) => {
                    setSelectedRisk(e.target.value);
                    setCurrentPage(1);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: S.surface,
                    border: `1px solid ${S.border}`,
                    borderRadius: '4px',
                    color: S.text,
                    fontSize: '0.875rem',
                  }}
                >
                  {RISK_LEVELS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ color: S.text2, fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>
                  TVL: ${minTvl}M - ${maxTvl}M
                </label>
                <input
                  type="range"
                  min="0"
                  max="30000"
                  step="100"
                  value={minTvl}
                  onChange={(e) => {
                    setMinTvl(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>

              <div>
                <label style={{ color: S.text2, fontSize: '0.75rem', display: 'block', marginBottom: '0.4rem' }}>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: S.surface,
                    border: `1px solid ${S.border}`,
                    borderRadius: '4px',
                    color: S.text,
                    fontSize: '0.875rem',
                  }}
                >
                  <option value="tvl">TVL</option>
                  <option value="apy">APY</option>
                  <option value="volume">Volume</option>
                  <option value="name">Name</option>
                  <option value="tvlChange">24h Change</option>
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <button
                  onClick={() => setSortAsc(!sortAsc)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    backgroundColor: sortAsc ? S.cyan : S.surface,
                    border: `1px solid ${S.border}`,
                    borderRadius: '4px',
                    color: sortAsc ? S.bg : S.text,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    fontWeight: '600',
                  }}
                >
                  {sortAsc ? '↑ ASC' : '↓ DESC'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div style={{
          border: `1px solid ${S.border}`,
          borderRadius: '8px',
          backgroundColor: `rgba(22, 27, 34, 0.3)`,
          backdropFilter: 'blur(10px)',
          overflow: 'hidden',
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.875rem',
            }}>
              <thead style={{
                backgroundColor: `rgba(22, 27, 34, 0.8)`,
                borderBottom: `1px solid ${S.border}`,
              }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', color: S.text2, fontWeight: '600', width: '40px' }}>#</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: S.text2, fontWeight: '600' }}>Protocol</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: S.text2, fontWeight: '600' }}>Chain</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: S.text2, fontWeight: '600' }}>Category</th>
                  <th style={{ padding: '1rem', textAlign: 'left', color: S.text2, fontWeight: '600' }}>Risk</th>
                  <th style={{ padding: '1rem', textAlign: 'right', color: S.text2, fontWeight: '600' }}>TVL</th>
                  <th style={{ padding: '1rem', textAlign: 'right', color: S.text2, fontWeight: '600' }}>24h Δ</th>
                  <th style={{ padding: '1rem', textAlign: 'right', color: S.text2, fontWeight: '600' }}>Volume</th>
                  <th style={{ padding: '1rem', textAlign: 'right', color: S.text2, fontWeight: '600' }}>APY</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: S.text2, fontWeight: '600' }}>7d Trend</th>
                  <th style={{ padding: '1rem', textAlign: 'center', color: S.text2, fontWeight: '600' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProtocols.map((protocol, idx) => (
                  <tr
                    key={protocol.slug}
                    style={{
                      borderBottom: `1px solid ${S.border}`,
                      backgroundColor: 'transparent',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLTableRowElement).style.backgroundColor = `rgba(88, 166, 255, 0.05)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLTableRowElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <td style={{ padding: '1rem', color: S.text2, fontWeight: '500' }}>
                      {startIdx + idx + 1}
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem' }}>{protocol.logo}</span>
                        <div>
                          <p style={{ color: S.text, fontWeight: '600', margin: 0 }}>{protocol.name}</p>
                          <p style={{ color: S.text2, fontSize: '0.75rem', margin: '0.25rem 0 0 0' }}>{protocol.token}</p>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', color: S.text2 }}>
                      <span style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: S.surface,
                        border: `1px solid ${S.border}`,
                      }}>
                        {protocol.chain}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: S.text2 }}>
                      <span style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: S.surface,
                        border: `1px solid ${S.border}`,
                      }}>
                        {protocol.category}
                      </span>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: getRiskBadgeColor(protocol),
                        color: S.bg,
                      }}>
                        {protocol.riskLevel}
                        {protocol.audited && ' ✓'}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right', color: S.text, fontWeight: '500' }}>
                      ${protocol.tvl >= 1000 ? `${(protocol.tvl / 1000).toFixed(2)}B` : `${protocol.tvl}M`}
                    </td>
                    <td style={{
                      padding: '1rem',
                      textAlign: 'right',
                      color: protocol.tvlChange24h >= 0 ? S.green : S.orange,
                      fontWeight: '600',
                    }}>
                      {protocol.tvlChange24h >= 0 ? '+' : ''}{protocol.tvlChange24h.toFixed(2)}%
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right', color: S.text2 }}>
                      ${protocol.volume24h}M
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <span style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        backgroundColor: `rgba(63, 185, 80, 0.2)`,
                        color: S.green,
                      }}>
                        {protocol.apy.toFixed(2)}%
                      </span>
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <Sparkline data={protocol.tvlTrend} />
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>
                      <Link href={`/ecosystem/${protocol.slug}`}
                        style={{
                          display: 'inline-block',
                          padding: '0.5rem 1rem',
                          backgroundColor: S.blue,
                          color: S.bg,
                          textDecoration: 'none',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = '0.8';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                        }}
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProtocols.length === 0 && (
            <div style={{ padding: '3rem', textAlign: 'center' }}>
              <p style={{ color: S.text2, fontSize: '1.125rem', margin: 0 }}>
                No protocols match your filters
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: currentPage === 1 ? S.border : S.surface,
                color: currentPage === 1 ? S.text2 : S.text,
                border: `1px solid ${S.border}`,
                borderRadius: '4px',
                cursor: currentPage === 1 ? 'default' : 'pointer',
                fontWeight: '600',
              }}
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                style={{
                  padding: '0.5rem 0.75rem',
                  backgroundColor: page === currentPage ? S.blue : S.surface,
                  color: page === currentPage ? S.bg : S.text,
                  border: `1px solid ${S.border}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  minWidth: '2.5rem',
                }}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: currentPage === totalPages ? S.border : S.surface,
                color: currentPage === totalPages ? S.text2 : S.text,
                border: `1px solid ${S.border}`,
                borderRadius: '4px',
                cursor: currentPage === totalPages ? 'default' : 'pointer',
                fontWeight: '600',
              }}
            >
              Next →
            </button>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: `rgba(22, 27, 34, 0.3)`,
          border: `1px solid ${S.border}`,
          borderRadius: '8px',
        }}>
          <p style={{ color: S.text2, fontSize: '0.75rem', margin: 0 }}>
            🔴 Live data simulation • {PROTOCOLS.length} protocols tracked • Premium DeFi analytics
          </p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Screener",
              "url": "https://degen0x.com/tools/screener",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/screener" />
      </div>
  );
}
