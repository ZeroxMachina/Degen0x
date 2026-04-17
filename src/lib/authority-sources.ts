// Curated AUTHORITY_SOURCES — outbound references we inject on pillar pages
// for E-E-A-T. Keyed on topic tag. Each entry is a Label + URL + one-sentence
// summary of why it's authoritative for that topic.
//
// Rule: every URL here is either (a) a primary source (SEC, FRB, official
// docs), (b) an established on-chain data vendor (CoinGecko, DefiLlama,
// Etherscan), or (c) a canonical whitepaper.
//
// Ramp-to-8 Phase 1c.

export interface AuthoritySource {
  label: string;
  url: string;
  note: string;
}

export const AUTHORITY_SOURCES: Record<string, readonly AuthoritySource[]> = {
  bitcoin: [
    {
      label: 'Bitcoin whitepaper (bitcoin.org)',
      url: 'https://bitcoin.org/bitcoin.pdf',
      note: 'Satoshi Nakamoto, 2008 — the canonical source on Bitcoin\'s design.',
    },
    {
      label: 'Bitcoin Core documentation',
      url: 'https://developer.bitcoin.org/',
      note: 'Protocol-level documentation maintained by Bitcoin Core developers.',
    },
    {
      label: 'CoinGecko — Bitcoin',
      url: 'https://www.coingecko.com/en/coins/bitcoin',
      note: 'Live supply, circulating units, and market cap, refreshed per block.',
    },
    {
      label: 'mempool.space',
      url: 'https://mempool.space/',
      note: 'Independent block explorer and fee estimator for the Bitcoin network.',
    },
  ],
  ethereum: [
    {
      label: 'Ethereum.org documentation',
      url: 'https://ethereum.org/en/developers/docs/',
      note: 'Official Ethereum developer documentation maintained by the EF.',
    },
    {
      label: 'Etherscan',
      url: 'https://etherscan.io/',
      note: 'The canonical Ethereum block explorer; verifies contract addresses and source code.',
    },
    {
      label: 'Ethereum Yellow Paper',
      url: 'https://ethereum.github.io/yellowpaper/paper.pdf',
      note: 'Gavin Wood\'s formal specification of the EVM.',
    },
    {
      label: 'DefiLlama — Ethereum',
      url: 'https://defillama.com/chain/Ethereum',
      note: 'Independent total-value-locked metrics across Ethereum DeFi protocols.',
    },
  ],
  solana: [
    {
      label: 'Solana documentation',
      url: 'https://solana.com/docs',
      note: 'Official docs from Solana Labs.',
    },
    {
      label: 'Solscan',
      url: 'https://solscan.io/',
      note: 'Solana block explorer — verifies token mints and program IDs.',
    },
    {
      label: 'DefiLlama — Solana',
      url: 'https://defillama.com/chain/Solana',
      note: 'Independent TVL data for Solana DeFi.',
    },
  ],
  defi: [
    {
      label: 'DefiLlama',
      url: 'https://defillama.com/',
      note: 'The industry-standard open-source aggregator for DeFi TVL and protocol metrics.',
    },
    {
      label: 'Dune Analytics',
      url: 'https://dune.com/',
      note: 'Community-curated SQL dashboards over on-chain data.',
    },
    {
      label: 'Rekt.news',
      url: 'https://rekt.news/',
      note: 'Forensic post-mortems on DeFi exploits; often the first independent analysis.',
    },
  ],
  staking: [
    {
      label: 'Ethereum.org — Staking',
      url: 'https://ethereum.org/en/staking/',
      note: 'Ethereum Foundation\'s official overview of staking mechanics and rewards.',
    },
    {
      label: 'Beacon Chain',
      url: 'https://beaconcha.in/',
      note: 'Consensus-layer explorer showing validator performance, APR, and slashing events.',
    },
    {
      label: 'Rated.network',
      url: 'https://www.rated.network/',
      note: 'Independent performance-attribution data for Ethereum validators.',
    },
  ],
  exchanges: [
    {
      label: 'CoinGecko — Exchanges',
      url: 'https://www.coingecko.com/en/exchanges',
      note: 'Ranked exchange volume and liquidity with exchange-trust scores.',
    },
    {
      label: 'CER.live Exchange Benchmark',
      url: 'https://cer.live/exchange-benchmark',
      note: 'Independent security and proof-of-reserves scoring for major exchanges.',
    },
    {
      label: 'SEC EDGAR',
      url: 'https://www.sec.gov/edgar/searchedgar/companysearch',
      note: 'Primary filings for US-listed exchange operators (e.g. Coinbase, Robinhood).',
    },
  ],
  wallets: [
    {
      label: 'Electrum documentation',
      url: 'https://electrum.readthedocs.io/',
      note: 'Canonical docs for one of the longest-running Bitcoin wallets — useful reference for self-custody concepts.',
    },
    {
      label: 'Ledger Academy — wallet security',
      url: 'https://www.ledger.com/academy',
      note: 'Primary educational source from a leading hardware wallet maker.',
    },
    {
      label: 'Bitcoin.org — how to secure your wallet',
      url: 'https://bitcoin.org/en/secure-your-wallet',
      note: 'Foundational self-custody guidance.',
    },
  ],
  regulation: [
    {
      label: 'SEC.gov — Crypto Assets',
      url: 'https://www.sec.gov/crypto-assets',
      note: 'US Securities and Exchange Commission\'s official crypto resource page.',
    },
    {
      label: 'FinCEN — Virtual Currency',
      url: 'https://www.fincen.gov/resources/statutes-and-regulations/guidance',
      note: 'US Financial Crimes Enforcement Network — AML guidance for virtual currency.',
    },
    {
      label: 'CFTC — Digital Assets',
      url: 'https://www.cftc.gov/digitalassets/index.htm',
      note: 'Commodity Futures Trading Commission — US derivatives and commodity oversight.',
    },
    {
      label: 'Internal Revenue Service — Digital Assets',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets',
      note: 'Authoritative US tax guidance for crypto transactions.',
    },
  ],
  markets: [
    {
      label: 'CoinGecko',
      url: 'https://www.coingecko.com/',
      note: 'Open and widely-cited source for crypto prices, market caps, and historical data.',
    },
    {
      label: 'Messari',
      url: 'https://messari.io/',
      note: 'Institutional research and on-chain data.',
    },
    {
      label: 'TradingView',
      url: 'https://www.tradingview.com/markets/cryptocurrencies/',
      note: 'Reference charting and technical data across crypto markets.',
    },
  ],
  'crypto-cards': [
    {
      label: 'Federal Reserve — Consumer Credit G.19',
      url: 'https://www.federalreserve.gov/releases/g19/',
      note: 'Authoritative data on US consumer credit — useful reference for card APR ranges.',
    },
    {
      label: 'Visa — Interchange Rates',
      url: 'https://usa.visa.com/support/small-business/regulations-fees.html',
      note: 'Primary source for interchange schedules that back card fee analysis.',
    },
    {
      label: 'CoinGecko',
      url: 'https://www.coingecko.com/',
      note: 'Live token prices used for crypto-card spending conversions.',
    },
  ],
  taxes: [
    {
      label: 'IRS — Digital Assets',
      url: 'https://www.irs.gov/businesses/small-businesses-self-employed/digital-assets',
      note: 'Primary US tax guidance on digital asset reporting.',
    },
    {
      label: 'IRS Notice 2014-21',
      url: 'https://www.irs.gov/pub/irs-drop/n-14-21.pdf',
      note: 'Foundational IRS guidance treating virtual currency as property.',
    },
    {
      label: 'HMRC — Cryptoassets Manual',
      url: 'https://www.gov.uk/hmrc-internal-manuals/cryptoassets-manual',
      note: 'UK tax treatment for individual and business crypto holdings.',
    },
  ],
  nfts: [
    {
      label: 'OpenSea',
      url: 'https://opensea.io/',
      note: 'Largest NFT marketplace; de-facto reference for collection floors and volume.',
    },
    {
      label: 'EIP-721 — NFT standard',
      url: 'https://eips.ethereum.org/EIPS/eip-721',
      note: 'The canonical ERC-721 non-fungible token specification.',
    },
    {
      label: 'DappRadar — NFTs',
      url: 'https://dappradar.com/nft',
      note: 'Independent NFT market data across marketplaces and chains.',
    },
  ],
  default: [
    {
      label: 'CoinGecko',
      url: 'https://www.coingecko.com/',
      note: 'Reference source for crypto price and market-cap data.',
    },
    {
      label: 'DefiLlama',
      url: 'https://defillama.com/',
      note: 'Reference source for protocol TVL and on-chain DeFi metrics.',
    },
    {
      label: 'Etherscan',
      url: 'https://etherscan.io/',
      note: 'Authoritative Ethereum block explorer for verifying contract and transaction data.',
    },
  ],
};

/**
 * Pick authority sources for a given URL, using simple substring matching
 * against the topic keys above. Returns the `default` set if nothing matches.
 */
export function pickAuthoritySources(
  url: string,
  max: number = 4,
): readonly AuthoritySource[] {
  const u = url.toLowerCase();
  const buckets: string[] = [];
  if (u.includes('bitcoin')) buckets.push('bitcoin');
  if (u.includes('ethereum') || u.includes('/eth')) buckets.push('ethereum');
  if (u.includes('solana')) buckets.push('solana');
  if (u.includes('stak')) buckets.push('staking');
  if (u.includes('/defi') || u.includes('-defi') || u.includes('lending') || u.includes('-dex-'))
    buckets.push('defi');
  if (u.includes('exchange')) buckets.push('exchanges');
  if (u.includes('wallet')) buckets.push('wallets');
  if (u.includes('card')) buckets.push('crypto-cards');
  if (u.includes('tax')) buckets.push('taxes');
  if (u.includes('nft')) buckets.push('nfts');
  if (u.includes('regul') || u.includes('sec-') || u.includes('compliance'))
    buckets.push('regulation');
  if (u.includes('price') || u.includes('market') || u.includes('trading'))
    buckets.push('markets');

  const seen = new Set<string>();
  const out: AuthoritySource[] = [];
  for (const b of buckets.length ? buckets : ['default']) {
    for (const src of AUTHORITY_SOURCES[b] || []) {
      if (seen.has(src.url)) continue;
      seen.add(src.url);
      out.push({ ...src });
      if (out.length >= max) return out;
    }
  }
  // Pad with defaults if under max
  for (const src of AUTHORITY_SOURCES.default) {
    if (out.length >= max) break;
    if (!seen.has(src.url)) out.push({ ...src });
  }
  return out.slice(0, max);
}
