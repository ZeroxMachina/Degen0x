'use client';

import { useState, useMemo, useEffect } from 'react';
// Inline SVG icons to avoid lucide-react dependency
const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

interface Term {
  id: string;
  term: string;
  definition: string;
  category: 'Trading' | 'DeFi' | 'Security' | 'Blockchain' | 'NFTs' | 'Mining' | 'Wallets' | 'Regulation';
  relatedTerms?: string[];
  example?: string;
}

// Comprehensive glossary terms
const GLOSSARY_TERMS: Term[] = [
  // A - Trading & General
  {
    id: 'airdrop',
    term: 'Airdrop',
    category: 'Trading',
    definition: 'The distribution of cryptocurrency tokens or coins to wallet addresses, often as a promotional activity or reward to community members.',
    example: 'Users who held a certain amount of governance tokens received an airdrop of new tokens in their wallets.',
    relatedTerms: ['Token', 'Wallet', 'Distribution']
  },
  {
    id: 'altcoin',
    term: 'Altcoin',
    category: 'Trading',
    definition: 'Any cryptocurrency other than Bitcoin. Altcoins are alternative coins created after Bitcoin that seek to improve upon or offer different functionality.',
    example: 'Ethereum, Litecoin, and Ripple are examples of altcoins.',
    relatedTerms: ['Bitcoin', 'Token', 'Cryptocurrency']
  },
  {
    id: 'arbitrage',
    term: 'Arbitrage',
    category: 'Trading',
    definition: 'The practice of simultaneously buying and selling the same asset on different markets to profit from price differences.',
    example: 'A trader bought Bitcoin on Exchange A at $43,000 and sold it on Exchange B at $43,500 for a $500 profit.',
    relatedTerms: ['Trading', 'Market', 'Exchange']
  },
  {
    id: 'ask-price',
    term: 'Ask Price',
    category: 'Trading',
    definition: 'The lowest price at which a seller is willing to sell a cryptocurrency or asset.',
    example: 'The ask price for Bitcoin is $43,500, meaning sellers are asking for that price.',
    relatedTerms: ['Bid Price', 'Spread', 'Order Book']
  },
  {
    id: 'atm',
    term: 'ATM (All-Time High)',
    category: 'Trading',
    definition: 'The highest price at which an asset has ever traded in its entire history.',
    example: 'Bitcoin reached an ATM of approximately $69,000 in November 2021.',
    relatedTerms: ['ATL', 'Price', 'Market Cap']
  },
  {
    id: 'atl',
    term: 'ATL (All-Time Low)',
    category: 'Trading',
    definition: 'The lowest price at which an asset has ever traded in its entire history.',
    example: 'Bitcoin\'s ATL was less than $0.01 during its first transactions.',
    relatedTerms: ['ATM', 'Price', 'Market Cap']
  },

  // B - Blockchain & Security
  {
    id: 'bagholder',
    term: 'Bagholder',
    category: 'Trading',
    definition: 'An investor who holds cryptocurrency that has significantly decreased in value and is unlikely to recover.',
    example: 'A bagholder bought an altcoin at its peak and watched it crash 95% in value.',
    relatedTerms: ['Pump and Dump', 'HODL', 'Loss']
  },
  {
    id: 'bear-market',
    term: 'Bear Market',
    category: 'Trading',
    definition: 'A market condition where prices are declining and investor sentiment is negative; typically defined as a 20% drop from recent highs.',
    example: 'During the bear market of 2022, many cryptocurrencies lost 50-90% of their value.',
    relatedTerms: ['Bull Market', 'Market Sentiment', 'Volatility']
  },
  {
    id: 'bid-price',
    term: 'Bid Price',
    category: 'Trading',
    definition: 'The highest price at which a buyer is willing to purchase a cryptocurrency or asset.',
    example: 'The bid price for Ethereum is $2,300, meaning buyers are offering that price.',
    relatedTerms: ['Ask Price', 'Spread', 'Order Book']
  },
  {
    id: 'block',
    term: 'Block',
    category: 'Blockchain',
    definition: 'A batch of transactions bundled together and added to the blockchain. Each block contains a cryptographic hash of the previous block.',
    example: 'A new Bitcoin block is added to the blockchain approximately every 10 minutes.',
    relatedTerms: ['Blockchain', 'Transaction', 'Hash']
  },
  {
    id: 'blockchain',
    term: 'Blockchain',
    category: 'Blockchain',
    definition: 'A distributed ledger technology that maintains a continuously growing list of records called blocks, secured by cryptography.',
    example: 'The Bitcoin blockchain is a public ledger where every transaction is permanently recorded and verifiable.',
    relatedTerms: ['Distributed Ledger', 'Smart Contract', 'Consensus']
  },
  {
    id: 'bnb',
    term: 'BNB',
    category: 'Trading',
    definition: 'The native cryptocurrency token of the Binance Smart Chain and Binance ecosystem, used for transaction fees and platform governance.',
    example: 'Users pay transaction fees in BNB on the Binance Smart Chain network.',
    relatedTerms: ['Binance', 'Token', 'Gas Fee']
  },
  {
    id: 'boring-ape-yacht-club',
    term: 'Boring Ape Yacht Club',
    category: 'NFTs',
    definition: 'A collection of 10,000 unique NFTs on the Ethereum blockchain that grants membership to an exclusive digital club.',
    example: 'BAYC NFTs serve as membership passes and have become status symbols in the crypto community.',
    relatedTerms: ['NFT', 'Collection', 'ERC-721']
  },
  {
    id: 'btc',
    term: 'BTC',
    category: 'Trading',
    definition: 'The ticker symbol for Bitcoin, the first and most widely recognized cryptocurrency.',
    example: 'BTC is trading at $43,500 on most major exchanges.',
    relatedTerms: ['Bitcoin', 'Ticker', 'Cryptocurrency']
  },
  {
    id: 'bull-market',
    term: 'Bull Market',
    category: 'Trading',
    definition: 'A market condition where prices are rising and investor sentiment is positive; typically defined as a 20% gain from recent lows.',
    example: 'The bull market of 2021 saw Bitcoin reach new all-time highs.',
    relatedTerms: ['Bear Market', 'Market Sentiment', 'Volatility']
  },
  {
    id: 'burn',
    term: 'Burn',
    category: 'Trading',
    definition: 'The permanent removal of cryptocurrency tokens from circulation, typically by sending them to an unspendable wallet address.',
    example: 'Ethereum implemented burning as part of its fee mechanism to reduce overall token supply.',
    relatedTerms: ['Supply', 'Deflationary', 'Token']
  },

  // C - DeFi & Cryptocurrency
  {
    id: 'cap',
    term: 'Cap (Market Cap)',
    category: 'Trading',
    definition: 'Market capitalization; calculated as current price multiplied by total circulating supply of a cryptocurrency.',
    example: 'Bitcoin\'s market cap of $1 trillion makes it the largest cryptocurrency by valuation.',
    relatedTerms: ['Price', 'Circulating Supply', 'Valuation']
  },
  {
    id: 'cex',
    term: 'CEX (Centralized Exchange)',
    category: 'Trading',
    definition: 'A cryptocurrency exchange operated by a single company or entity that acts as an intermediary between buyers and sellers.',
    example: 'Coinbase, Kraken, and Binance are major CEXs where users buy and sell cryptocurrencies.',
    relatedTerms: ['DEX', 'Exchange', 'Custody']
  },
  {
    id: 'chain',
    term: 'Chain',
    category: 'Blockchain',
    definition: 'Short for blockchain; a reference to a specific cryptocurrency network like Ethereum Chain or Polygon Chain.',
    example: 'Users often ask which chain a token exists on, such as the Ethereum chain or Solana chain.',
    relatedTerms: ['Blockchain', 'Network', 'Layer 1']
  },
  {
    id: 'chart',
    term: 'Chart',
    category: 'Trading',
    definition: 'A visual representation of cryptocurrency price and volume data over time, used for technical analysis.',
    example: 'Traders analyze price charts to identify support and resistance levels.',
    relatedTerms: ['Technical Analysis', 'Candlestick', 'Volume']
  },
  {
    id: 'circulating-supply',
    term: 'Circulating Supply',
    category: 'Trading',
    definition: 'The number of cryptocurrency coins or tokens that are currently available and in circulation in the market.',
    example: 'Bitcoin has a circulating supply of approximately 21 million coins, though not all have been mined yet.',
    relatedTerms: ['Total Supply', 'Max Supply', 'Supply']
  },
  {
    id: 'cold-wallet',
    term: 'Cold Wallet',
    category: 'Wallets',
    definition: 'A cryptocurrency wallet that is not connected to the internet, providing maximum security for long-term storage.',
    example: 'Hardware wallets like Ledger and Trezor are cold wallets that keep private keys offline.',
    relatedTerms: ['Hot Wallet', 'Hardware Wallet', 'Storage']
  },
  {
    id: 'consensus',
    term: 'Consensus',
    category: 'Blockchain',
    definition: 'The mechanism by which a blockchain network agrees on which transactions are valid and should be added to the ledger.',
    example: 'Bitcoin uses Proof of Work consensus, where miners must solve complex puzzles to validate transactions.',
    relatedTerms: ['Proof of Work', 'Proof of Stake', 'Validation']
  },
  {
    id: 'crypto',
    term: 'Crypto',
    category: 'Trading',
    definition: 'Short for cryptocurrency; a digital currency that uses cryptographic techniques for security and transaction verification.',
    example: 'Bitcoin and Ethereum are the most well-known cryptocurrencies.',
    relatedTerms: ['Cryptocurrency', 'Digital Currency', 'Blockchain']
  },
  {
    id: 'cryptocurrency',
    term: 'Cryptocurrency',
    category: 'Trading',
    definition: 'A digital or virtual currency secured by cryptography, operating on a decentralized network without a central authority.',
    example: 'Cryptocurrencies like Bitcoin enable peer-to-peer transactions without banks.',
    relatedTerms: ['Crypto', 'Digital Currency', 'Blockchain']
  },
  {
    id: 'cryptography',
    term: 'Cryptography',
    category: 'Security',
    definition: 'Mathematical techniques used to secure communication and ensure data integrity, forming the foundation of cryptocurrency.',
    example: 'Cryptography ensures only the owner of a private key can authorize transactions from that address.',
    relatedTerms: ['Private Key', 'Public Key', 'Hash']
  },

  // D - DeFi
  {
    id: 'dao',
    term: 'DAO (Decentralized Autonomous Organization)',
    category: 'DeFi',
    definition: 'An organization governed by smart contracts and democratic voting rather than a centralized management structure.',
    example: 'A DAO might allow token holders to vote on how the organization\'s treasury is deployed.',
    relatedTerms: ['Governance', 'Smart Contract', 'Token']
  },
  {
    id: 'dapp',
    term: 'DApp (Decentralized Application)',
    category: 'DeFi',
    definition: 'An application built on a blockchain network that operates autonomously and is not controlled by a single entity.',
    example: 'Uniswap is a DApp that enables decentralized token swaps on the Ethereum blockchain.',
    relatedTerms: ['Smart Contract', 'Blockchain', 'DeFi']
  },
  {
    id: 'defi',
    term: 'DeFi (Decentralized Finance)',
    category: 'DeFi',
    definition: 'A financial system built on blockchains that removes intermediaries like banks, allowing direct peer-to-peer transactions.',
    example: 'DeFi platforms like Aave enable users to lend and borrow cryptocurrencies without traditional financial institutions.',
    relatedTerms: ['Smart Contract', 'Blockchain', 'Decentralized']
  },
  {
    id: 'defi-2-0',
    term: 'DeFi 2.0',
    category: 'DeFi',
    definition: 'The next evolution of decentralized finance incorporating lessons from DeFi 1.0, focusing on sustainability and efficiency.',
    example: 'DeFi 2.0 protocols implement better tokenomics and incentive structures to ensure long-term viability.',
    relatedTerms: ['DeFi', 'Protocol', 'Tokenomics']
  },
  {
    id: 'diamond-hands',
    term: 'Diamond Hands',
    category: 'Trading',
    definition: 'An investor who holds their cryptocurrency positions through market volatility and refuses to sell despite price drops.',
    example: 'Holders with diamond hands maintained their positions during the 2022 bear market.',
    relatedTerms: ['HODL', 'Paper Hands', 'Conviction']
  },
  {
    id: 'dip',
    term: 'Dip',
    category: 'Trading',
    definition: 'A temporary decline in cryptocurrency price, often seen as a buying opportunity by investors.',
    example: 'Traders used the recent dip to buy Bitcoin at lower prices.',
    relatedTerms: ['Pullback', 'Crash', 'Bear Market']
  },
  {
    id: 'distributed-ledger',
    term: 'Distributed Ledger',
    category: 'Blockchain',
    definition: 'A database replicated and synchronized across multiple computers or nodes, with no single point of failure.',
    example: 'A blockchain is a type of distributed ledger where each node maintains a copy of all transactions.',
    relatedTerms: ['Blockchain', 'Node', 'Consensus']
  },
  {
    id: 'dlc',
    term: 'DLC (Discreet Log Contracts)',
    category: 'Blockchain',
    definition: 'A smart contract mechanism that can be implemented on Bitcoin, using oracles to determine contract outcomes.',
    example: 'DLCs enable conditional payments based on real-world data without requiring a sidechain.',
    relatedTerms: ['Smart Contract', 'Oracle', 'Bitcoin']
  },
  {
    id: 'doge',
    term: 'DOGE (Dogecoin)',
    category: 'Trading',
    definition: 'A cryptocurrency created as a joke in 2013 featuring the Shiba Inu dog meme, which became a legitimate digital currency.',
    example: 'Dogecoin gained mainstream attention and significant value despite its lighthearted origins.',
    relatedTerms: ['Altcoin', 'Meme Coin', 'Cryptocurrency']
  },
  {
    id: 'dox',
    term: 'Dox',
    category: 'Security',
    definition: 'The release of private identifying information about someone without their consent, considered malicious in crypto communities.',
    example: 'Doxxing is a serious threat to pseudonymous cryptocurrency users.',
    relatedTerms: ['Privacy', 'Security', 'Pseudonymous']
  },
  {
    id: 'dyor',
    term: 'DYOR (Do Your Own Research)',
    category: 'Trading',
    definition: 'A common phrase in crypto communities advising investors to research independently rather than following others blindly.',
    example: 'Before investing in any token, DYOR to understand the project, team, and fundamentals.',
    relatedTerms: ['Due Diligence', 'Investment', 'Analysis']
  },

  // E - Ethereum & Exchange
  {
    id: 'erc-20',
    term: 'ERC-20',
    category: 'Blockchain',
    definition: 'The technical standard for fungible tokens on the Ethereum blockchain, enabling interoperability between tokens.',
    example: 'Most tokens built on Ethereum, including USDC and USDT, follow the ERC-20 standard.',
    relatedTerms: ['Token', 'Ethereum', 'Smart Contract']
  },
  {
    id: 'erc-721',
    term: 'ERC-721',
    category: 'NFTs',
    definition: 'The technical standard for non-fungible tokens (NFTs) on the Ethereum blockchain, enabling unique digital assets.',
    example: 'NFT collections like CryptoPunks and Bored Ape Yacht Club use the ERC-721 standard.',
    relatedTerms: ['NFT', 'Token', 'Ethereum']
  },
  {
    id: 'erc-1155',
    term: 'ERC-1155',
    category: 'NFTs',
    definition: 'An Ethereum token standard supporting both fungible and non-fungible tokens in a single contract, enabling multiple token types.',
    example: 'Game developers use ERC-1155 to create collections containing both in-game items and unique assets.',
    relatedTerms: ['NFT', 'ERC-20', 'Ethereum']
  },
  {
    id: 'ethereum',
    term: 'Ethereum',
    category: 'Blockchain',
    definition: 'A blockchain platform that enables smart contracts and decentralized applications (DApps) through its Ethereum Virtual Machine.',
    example: 'Ethereum is the leading platform for DeFi and NFT projects, with thousands of tokens built on it.',
    relatedTerms: ['Smart Contract', 'DApp', 'Blockchain']
  },
  {
    id: 'eth',
    term: 'ETH',
    category: 'Trading',
    definition: 'The native cryptocurrency of the Ethereum network, used for paying transaction fees (gas) and staking.',
    example: 'Users need ETH in their wallet to interact with Ethereum smart contracts and pay gas fees.',
    relatedTerms: ['Ethereum', 'Gas', 'Token']
  },
  {
    id: 'exchange',
    term: 'Exchange',
    category: 'Trading',
    definition: 'A platform that facilitates the buying, selling, and trading of cryptocurrencies, usually supporting multiple trading pairs.',
    example: 'Major exchanges like Coinbase and Kraken provide interfaces for users to trade Bitcoin and altcoins.',
    relatedTerms: ['CEX', 'DEX', 'Trading Pair']
  },

  // F - Fee & Fork
  {
    id: 'faucet',
    term: 'Faucet',
    category: 'Trading',
    definition: 'A website or service that dispenses small amounts of cryptocurrency to users, typically for free or as rewards.',
    example: 'Bitcoin faucets were popular in the early days, dispensing satoshis to users.',
    relatedTerms: ['Airdrop', 'Reward', 'Distribution']
  },
  {
    id: 'fee',
    term: 'Fee',
    category: 'Trading',
    definition: 'A charge paid by users to process transactions on a blockchain or use exchange services.',
    example: 'Bitcoin transaction fees vary based on network congestion, ranging from a few dollars to higher amounts.',
    relatedTerms: ['Gas Fee', 'Transaction', 'Network']
  },
  {
    id: 'fiat',
    term: 'Fiat',
    category: 'Trading',
    definition: 'Government-issued currency like USD, EUR, or GBP that is not backed by a commodity but by government decree.',
    example: 'Users must convert fiat currency to cryptocurrency on exchanges to enter the crypto market.',
    relatedTerms: ['Currency', 'Stablecoin', 'Trading Pair']
  },
  {
    id: 'flash-loan',
    term: 'Flash Loan',
    category: 'DeFi',
    definition: 'An uncollateralized loan in DeFi that must be borrowed and repaid within a single transaction block.',
    example: 'Flash loans enable traders to perform arbitrage and liquidate positions without upfront capital.',
    relatedTerms: ['DeFi', 'Lending', 'Smart Contract']
  },
  {
    id: 'flippening',
    term: 'Flippening',
    category: 'Trading',
    definition: 'A hypothetical scenario where a cryptocurrency (usually Ethereum) overtakes Bitcoin in market capitalization.',
    example: 'The flippening is debated in crypto communities, but Bitcoin has maintained the #1 position.',
    relatedTerms: ['Market Cap', 'Bitcoin', 'Ethereum']
  },
  {
    id: 'fomo',
    term: 'FOMO (Fear of Missing Out)',
    category: 'Trading',
    definition: 'A psychological state driving investors to buy cryptocurrency due to fear of missing potential gains, often leading to poor decisions.',
    example: 'During bull markets, FOMO causes retail investors to buy at peaks, often resulting in losses.',
    relatedTerms: ['FUD', 'Investment Psychology', 'Market Sentiment']
  },
  {
    id: 'fork',
    term: 'Fork',
    category: 'Blockchain',
    definition: 'A change to the blockchain protocol rules, which can be soft (backward compatible) or hard (requiring all nodes to upgrade).',
    example: 'Ethereum\'s London fork introduced the burning mechanism for transaction fees.',
    relatedTerms: ['Protocol', 'Upgrade', 'Network']
  },
  {
    id: 'fud',
    term: 'FUD (Fear, Uncertainty, and Doubt)',
    category: 'Trading',
    definition: 'Negative information or rumors spread to create panic and drive down cryptocurrency prices, often with bad intentions.',
    example: 'FUD about regulatory crackdowns can cause panic selling and price drops.',
    relatedTerms: ['FOMO', 'Market Sentiment', 'News']
  },
  {
    id: 'fundamental-analysis',
    term: 'Fundamental Analysis',
    category: 'Trading',
    definition: 'Investment analysis focused on evaluating a cryptocurrency\'s intrinsic value through project fundamentals and metrics.',
    example: 'Fundamental analysis examines a project\'s technology, team, adoption, and economic model.',
    relatedTerms: ['Technical Analysis', 'Due Diligence', 'Valuation']
  },
  {
    id: 'fungible',
    term: 'Fungible',
    category: 'Trading',
    definition: 'An asset that is interchangeable with other identical assets; one Bitcoin is equivalent to any other Bitcoin.',
    example: 'Cryptocurrencies are fungible, meaning any Bitcoin has the same value and properties.',
    relatedTerms: ['Non-fungible', 'Interchangeable', 'Token']
  },
  {
    id: 'futures',
    term: 'Futures',
    category: 'Trading',
    definition: 'Derivative contracts that obligate buyers and sellers to trade an asset at a predetermined price on a future date.',
    example: 'Bitcoin futures allow traders to speculate on price movements without owning actual Bitcoin.',
    relatedTerms: ['Derivatives', 'Options', 'Leverage']
  },

  // G - Gas & Governance
  {
    id: 'gas',
    term: 'Gas',
    category: 'Blockchain',
    definition: 'A unit of computation used to measure the computational effort required to execute transactions on blockchain networks like Ethereum.',
    example: 'Complex smart contract interactions require more gas than simple token transfers.',
    relatedTerms: ['Gas Fee', 'Transaction', 'Smart Contract']
  },
  {
    id: 'gas-fee',
    term: 'Gas Fee',
    category: 'Blockchain',
    definition: 'The cost of performing a transaction or executing a smart contract on a blockchain, paid in the network\'s native currency.',
    example: 'During periods of high network congestion, Ethereum gas fees can exceed $100 per transaction.',
    relatedTerms: ['Gas', 'Transaction Fee', 'Network']
  },
  {
    id: 'gbtc',
    term: 'GBTC (Grayscale Bitcoin Trust)',
    category: 'Trading',
    definition: 'An investment fund that holds Bitcoin and allows investors to gain exposure through traditional stock accounts.',
    example: 'GBTC enables institutional investors to invest in Bitcoin without managing private keys or wallets.',
    relatedTerms: ['Bitcoin', 'Investment', 'ETF']
  },
  {
    id: 'genesis-block',
    term: 'Genesis Block',
    category: 'Blockchain',
    definition: 'The first block in a blockchain, serving as the foundation for all subsequent blocks.',
    example: 'Bitcoin\'s genesis block was mined on January 3, 2009, by Satoshi Nakamoto.',
    relatedTerms: ['Block', 'Blockchain', 'Mining']
  },
  {
    id: 'gm',
    term: 'GM (Good Morning)',
    category: 'Trading',
    definition: 'A casual greeting used in crypto communities, often paired with "GM wagmi" (Good Morning, we\'re all gonna make it).',
    example: '"GM to all the HODLers out there!" is a common crypto community greeting.',
    relatedTerms: ['GN', 'Wagmi', 'Community']
  },
  {
    id: 'gn',
    term: 'GN (Good Night)',
    category: 'Trading',
    definition: 'A farewell phrase used in crypto communities, often with humorous references to market activity while they sleep.',
    example: 'Crypto traders joke about missing market moves while saying GN.',
    relatedTerms: ['GM', 'Wagmi', 'Community']
  },
  {
    id: 'governance',
    term: 'Governance',
    category: 'DeFi',
    definition: 'The process of making decisions about a cryptocurrency project or protocol, often through voting by token holders.',
    example: 'Governance token holders vote on protocol upgrades and treasury spending for Uniswap.',
    relatedTerms: ['DAO', 'Token', 'Voting']
  },
  {
    id: 'gwei',
    term: 'Gwei',
    category: 'Blockchain',
    definition: 'A unit of Ethereum equal to 1 billion wei (10^9 wei), commonly used to denote gas prices.',
    example: 'Gas prices are typically quoted in Gwei, such as 20 Gwei per unit of gas.',
    relatedTerms: ['Wei', 'Gas', 'Ethereum']
  },

  // H - Hash & Hardware
  {
    id: 'halving',
    term: 'Halving',
    category: 'Mining',
    definition: 'A scheduled event where a cryptocurrency\'s mining reward is cut in half, reducing the rate of new coin creation.',
    example: 'Bitcoin halving events occur approximately every four years, with the next reducing block rewards further.',
    relatedTerms: ['Mining', 'Block Reward', 'Supply']
  },
  {
    id: 'hardware-wallet',
    term: 'Hardware Wallet',
    category: 'Wallets',
    definition: 'A physical device that securely stores cryptocurrency private keys offline, protecting them from digital theft.',
    example: 'Ledger Nano X and Trezor are popular hardware wallets used for secure long-term storage.',
    relatedTerms: ['Cold Wallet', 'Private Key', 'Storage']
  },
  {
    id: 'hash',
    term: 'Hash',
    category: 'Security',
    definition: 'A cryptographic function that converts data of any size into a fixed-size string of characters, used for data integrity verification.',
    example: 'SHA-256 hashing secures Bitcoin by creating unique identifiers for blocks.',
    relatedTerms: ['Cryptography', 'Block', 'Merkle Tree']
  },
  {
    id: 'hash-rate',
    term: 'Hash Rate',
    category: 'Mining',
    definition: 'The measure of computational power on a blockchain network, representing how many hashes per second miners can calculate.',
    example: 'Bitcoin\'s hash rate increased dramatically, indicating increased mining activity and network security.',
    relatedTerms: ['Mining', 'Proof of Work', 'Difficulty']
  },
  {
    id: 'hodl',
    term: 'HODL (Hold On for Dear Life)',
    category: 'Trading',
    definition: 'A long-term investing strategy where holders keep their cryptocurrency regardless of market volatility.',
    example: 'Many Bitcoin HODL holders from 2010 are now millionaires despite witnessing multiple bear markets.',
    relatedTerms: ['Diamond Hands', 'Long-term', 'Investment']
  },
  {
    id: 'hot-wallet',
    term: 'Hot Wallet',
    category: 'Wallets',
    definition: 'A cryptocurrency wallet connected to the internet, allowing convenient transactions but with higher security risks.',
    example: 'Mobile and web wallets are hot wallets suitable for frequent trading and daily transactions.',
    relatedTerms: ['Cold Wallet', 'Storage', 'Security']
  },

  // I - ICO & Inscription
  {
    id: 'ico',
    term: 'ICO (Initial Coin Offering)',
    category: 'Trading',
    definition: 'A fundraising method where new cryptocurrency projects offer tokens to investors in exchange for capital.',
    example: 'Ethereum conducted an ICO in 2014, raising 31,529 Bitcoin through the sale of ETH tokens.',
    relatedTerms: ['Token Sale', 'IDO', 'Funding']
  },
  {
    id: 'idempotent',
    term: 'Idempotent',
    category: 'Blockchain',
    definition: 'An operation that produces the same result when executed once or multiple times, important for transaction reliability.',
    example: 'Bitcoin transactions are idempotent, so submitting the same transaction twice doesn\'t create duplicate spending.',
    relatedTerms: ['Transaction', 'Reliability', 'Protocol']
  },
  {
    id: 'ido',
    term: 'IDO (Initial DEX Offering)',
    category: 'DeFi',
    definition: 'A decentralized fundraising method where new projects launch tokens on decentralized exchanges without intermediaries.',
    example: 'Many modern projects use IDOs through platforms like Uniswap instead of traditional ICOs.',
    relatedTerms: ['ICO', 'DEX', 'Token Sale']
  },
  {
    id: 'impermanent-loss',
    term: 'Impermanent Loss',
    category: 'DeFi',
    definition: 'A loss incurred by liquidity providers when deposited assets change in relative price while in a liquidity pool.',
    example: 'If ETH increases 2x while a liquidity provider deposits equal ETH and stables, they experience impermanent loss.',
    relatedTerms: ['Liquidity Pool', 'DeFi', 'AMM']
  },
  {
    id: 'inscription',
    term: 'Inscription',
    category: 'NFTs',
    definition: 'Data permanently written to the Bitcoin blockchain, enabling NFTs and digital artifacts directly on Bitcoin.',
    example: 'Bitcoin Ordinals allow inscribing images and data directly onto the blockchain as immutable records.',
    relatedTerms: ['Ordinals', 'Bitcoin', 'NFT']
  },
  {
    id: 'interest-rate',
    term: 'Interest Rate',
    category: 'DeFi',
    definition: 'The percentage return earned by lending cryptocurrency in DeFi protocols or the cost of borrowing.',
    example: 'DeFi lending protocols offer variable interest rates, currently ranging from 2% to 15% annually.',
    relatedTerms: ['DeFi', 'Lending', 'Yield']
  },

  // J - JPEG
  {
    id: 'jpeg',
    term: 'JPEG',
    category: 'NFTs',
    definition: 'A humorous term in crypto communities for NFTs, particularly jpegs stored on the blockchain.',
    example: 'Traders jokingly refer to expensive NFTs as "expensive JPEGs" to highlight their digital nature.',
    relatedTerms: ['NFT', 'Digital Asset', 'Art']
  },

  // K - KYC
  {
    id: 'kyc',
    term: 'KYC (Know Your Customer)',
    category: 'Regulation',
    definition: 'Regulatory processes that require exchanges and financial institutions to verify customer identity before transactions.',
    example: 'Most centralized exchanges require KYC verification including government ID and address confirmation.',
    relatedTerms: ['AML', 'Compliance', 'Regulation']
  },

  // L - Layer & Liquidity
  {
    id: 'l1',
    term: 'L1 (Layer 1)',
    category: 'Blockchain',
    definition: 'A base blockchain layer that processes transactions and maintains the full history, such as Bitcoin or Ethereum mainnet.',
    example: 'Bitcoin and Ethereum are Layer 1 blockchains that operate independently.',
    relatedTerms: ['Layer 2', 'Scaling', 'Blockchain']
  },
  {
    id: 'l2',
    term: 'L2 (Layer 2)',
    category: 'Blockchain',
    definition: 'A secondary blockchain layer that processes transactions off the main chain to enable scaling while using L1 for settlement.',
    example: 'Polygon and Arbitrum are Layer 2 solutions that enable faster and cheaper Ethereum transactions.',
    relatedTerms: ['L1', 'Scaling', 'Sidechain']
  },
  {
    id: 'ledger',
    term: 'Ledger',
    category: 'Blockchain',
    definition: 'A record-keeping system that tracks all transactions, with blockchain being a distributed, immutable ledger.',
    example: 'The blockchain serves as a public ledger where all Bitcoin transactions are permanently recorded.',
    relatedTerms: ['Blockchain', 'Distributed Ledger', 'Transaction']
  },
  {
    id: 'leverage',
    term: 'Leverage',
    category: 'Trading',
    definition: 'Using borrowed funds to amplify trading positions, increasing potential profits but also losses.',
    example: 'A trader using 5x leverage can control $5,000 worth of Bitcoin with only $1,000 capital.',
    relatedTerms: ['Margin Trading', 'Risk', 'Derivatives']
  },
  {
    id: 'liquidity',
    term: 'Liquidity',
    category: 'Trading',
    definition: 'The ability to quickly buy or sell an asset without significantly affecting its price, determined by market depth.',
    example: 'Bitcoin has excellent liquidity, meaning large trades can be executed without major price impacts.',
    relatedTerms: ['Spread', 'Volume', 'Market']
  },
  {
    id: 'liquidity-pool',
    term: 'Liquidity Pool',
    category: 'DeFi',
    definition: 'A smart contract containing reserves of two or more tokens, enabling decentralized trading through automated market makers.',
    example: 'Uniswap liquidity pools enable decentralized trading by allowing anyone to deposit token pairs and earn fees.',
    relatedTerms: ['AMM', 'DeFi', 'Trading']
  },
  {
    id: 'litecoin',
    term: 'Litecoin',
    category: 'Trading',
    definition: 'An altcoin created in 2011 using a different mining algorithm (Scrypt), designed to be faster than Bitcoin.',
    example: 'Litecoin confirms transactions approximately four times faster than Bitcoin.',
    relatedTerms: ['Bitcoin', 'Altcoin', 'Mining']
  },
  {
    id: 'long',
    term: 'Long',
    category: 'Trading',
    definition: 'Taking a bullish position by buying cryptocurrency, betting that the price will increase.',
    example: 'A trader going long on Bitcoin expects the price to rise in the near future.',
    relatedTerms: ['Short', 'Position', 'Trading']
  },

  // M - Mining & Market
  {
    id: 'margin-trading',
    term: 'Margin Trading',
    category: 'Trading',
    definition: 'Trading using borrowed funds from a broker or exchange, amplifying both gains and losses.',
    example: 'Margin trading with 10x leverage allows a trader to control 10x their account balance.',
    relatedTerms: ['Leverage', 'Risk', 'Liquidation']
  },
  {
    id: 'market-cap',
    term: 'Market Cap',
    category: 'Trading',
    definition: 'The total market value of a cryptocurrency, calculated as price multiplied by circulating supply.',
    example: 'Bitcoin\'s market cap of $1+ trillion makes it larger than most national economies.',
    relatedTerms: ['Price', 'Supply', 'Valuation']
  },
  {
    id: 'market-order',
    term: 'Market Order',
    category: 'Trading',
    definition: 'An order to buy or sell cryptocurrency immediately at the best available current market price.',
    example: 'A market buy order executes instantly at the current ask price.',
    relatedTerms: ['Limit Order', 'Order Book', 'Trading']
  },
  {
    id: 'mempool',
    term: 'Mempool',
    category: 'Blockchain',
    definition: 'A temporary storage area for pending transactions awaiting confirmation by miners or validators.',
    example: 'During high network congestion, the Bitcoin mempool fills with pending transactions.',
    relatedTerms: ['Transaction', 'Pending', 'Block']
  },
  {
    id: 'merkle-tree',
    term: 'Merkle Tree',
    category: 'Blockchain',
    definition: 'A cryptographic data structure that efficiently summarizes and verifies large amounts of data using hashes.',
    example: 'Bitcoin uses Merkle trees to efficiently store transaction data in blocks.',
    relatedTerms: ['Hash', 'Block', 'Cryptography']
  },
  {
    id: 'miner',
    term: 'Miner',
    category: 'Mining',
    definition: 'A participant in a Proof of Work blockchain who solves complex puzzles to validate transactions and earn rewards.',
    example: 'Bitcoin miners compete to solve cryptographic puzzles and add new blocks to the blockchain.',
    relatedTerms: ['Mining', 'Proof of Work', 'Block Reward']
  },
  {
    id: 'mining',
    term: 'Mining',
    category: 'Mining',
    definition: 'The process of solving complex mathematical puzzles to validate transactions on Proof of Work blockchains.',
    example: 'Bitcoin mining requires significant computational power and electricity consumption.',
    relatedTerms: ['Proof of Work', 'Miner', 'Hash Rate']
  },
  {
    id: 'mining-pool',
    term: 'Mining Pool',
    category: 'Mining',
    definition: 'A group of miners combining computational resources to increase chances of solving blocks and earning rewards.',
    example: 'Mining pools distribute block rewards among members based on contributed computational power.',
    relatedTerms: ['Mining', 'Miner', 'Shares']
  },
  {
    id: 'minting',
    term: 'Minting',
    category: 'Blockchain',
    definition: 'The process of creating new cryptocurrency coins or NFTs on a blockchain.',
    example: 'NFT creators mint their digital art as NFTs on the Ethereum blockchain.',
    relatedTerms: ['Creation', 'Supply', 'Token']
  },
  {
    id: 'mev',
    term: 'MEV (Maximal Extractable Value)',
    category: 'DeFi',
    definition: 'The maximum profit validators or miners can extract from transaction ordering in blocks, potentially at user expense.',
    example: 'MEV can cause slippage and unfavorable pricing for DeFi users trading on public mempools.',
    relatedTerms: ['Validator', 'Block', 'DeFi']
  },

  // N - Node & NFT
  {
    id: 'node',
    term: 'Node',
    category: 'Blockchain',
    definition: 'A computer participating in a blockchain network by storing the full ledger and validating transactions.',
    example: 'Running a full Bitcoin node requires significant disk space to store the entire blockchain.',
    relatedTerms: ['Network', 'Validator', 'Blockchain']
  },
  {
    id: 'nonce',
    term: 'Nonce',
    category: 'Security',
    definition: 'A number used only once, in cryptography and blockchain for preventing replay attacks and unique transaction identification.',
    example: 'Ethereum transactions include a nonce to ensure proper ordering and prevent duplicates.',
    relatedTerms: ['Transaction', 'Security', 'Hash']
  },
  {
    id: 'nft',
    term: 'NFT (Non-Fungible Token)',
    category: 'NFTs',
    definition: 'A unique, non-interchangeable digital asset representing ownership of something specific, stored on a blockchain.',
    example: 'Digital art, collectibles, and virtual real estate are commonly represented as NFTs.',
    relatedTerms: ['ERC-721', 'Token', 'Digital Asset']
  },
  {
    id: 'nft-floor-price',
    term: 'NFT Floor Price',
    category: 'NFTs',
    definition: 'The lowest price at which NFTs from a collection are currently being sold on the market.',
    example: 'The Bored Ape Yacht Club floor price fluctuates based on collection demand and market sentiment.',
    relatedTerms: ['NFT', 'Collection', 'Market']
  },

  // O - Oracle & Ordinals
  {
    id: 'oracle',
    term: 'Oracle',
    category: 'Blockchain',
    definition: 'A service that provides external data to smart contracts, enabling them to access real-world information.',
    example: 'Chainlink oracles provide price feeds allowing DeFi protocols to access current asset prices.',
    relatedTerms: ['Smart Contract', 'Data', 'DeFi']
  },
  {
    id: 'order-book',
    term: 'Order Book',
    category: 'Trading',
    definition: 'A list of buy and sell orders for a cryptocurrency on an exchange, showing prices and quantities.',
    example: 'Traders analyze the order book to identify support and resistance levels and market liquidity.',
    relatedTerms: ['Bid', 'Ask', 'Spread']
  },
  {
    id: 'ordinals',
    term: 'Ordinals',
    category: 'NFTs',
    definition: 'A protocol enabling NFTs and digital artifacts to be inscribed directly onto Bitcoin satoshis.',
    example: 'Bitcoin Ordinals allow immutable NFTs and digital content to exist natively on the Bitcoin blockchain.',
    relatedTerms: ['Bitcoin', 'NFT', 'Inscription']
  },

  // P - Paper & Pool
  {
    id: 'paper-hands',
    term: 'Paper Hands',
    category: 'Trading',
    definition: 'An investor who sells their cryptocurrency position at the first sign of losses or market decline.',
    example: 'Paper hands investors panic sold during the 2022 crash, missing the 2023 recovery.',
    relatedTerms: ['Diamond Hands', 'Selling', 'Panic']
  },
  {
    id: 'peer-to-peer',
    term: 'Peer-to-Peer',
    category: 'Blockchain',
    definition: 'A network architecture where computers (peers) communicate and transact directly without a central intermediary.',
    example: 'Bitcoin enables peer-to-peer electronic cash transfers without banks or payment processors.',
    relatedTerms: ['Decentralization', 'Network', 'Blockchain']
  },
  {
    id: 'polygon',
    term: 'Polygon',
    category: 'Blockchain',
    definition: 'A Layer 2 scaling solution for Ethereum that enables faster and cheaper transactions while maintaining security.',
    example: 'Polygon enables thousands of transactions per second, making it ideal for high-frequency trading.',
    relatedTerms: ['Layer 2', 'Ethereum', 'Scaling']
  },
  {
    id: 'ponzi',
    term: 'Ponzi Scheme',
    category: 'Regulation',
    definition: 'A fraudulent investment scheme that pays earlier investors with funds from newer investors rather than actual profits.',
    example: 'Many failed crypto projects were revealed to be Ponzi schemes promising unrealistic returns.',
    relatedTerms: ['Fraud', 'Scam', 'Investment']
  },
  {
    id: 'pow',
    term: 'PoW (Proof of Work)',
    category: 'Blockchain',
    definition: 'A consensus mechanism requiring miners to solve complex puzzles to validate transactions and earn rewards.',
    example: 'Bitcoin uses Proof of Work, making it one of the most secure but energy-intensive blockchains.',
    relatedTerms: ['Consensus', 'Mining', 'PoS']
  },
  {
    id: 'pos',
    term: 'PoS (Proof of Stake)',
    category: 'Blockchain',
    definition: 'A consensus mechanism where validators are chosen to create blocks based on the amount of cryptocurrency they hold and stake.',
    example: 'Ethereum transitioned from Proof of Work to Proof of Stake with the Merge, reducing energy consumption by 99.95%.',
    relatedTerms: ['Consensus', 'Staking', 'Validator']
  },
  {
    id: 'pump-and-dump',
    term: 'Pump and Dump',
    category: 'Trading',
    definition: 'A scheme where a group artificially inflates a cryptocurrency\'s price then sells their holdings before the price crashes.',
    example: 'Pump and dump schemes are illegal in traditional markets and against exchange terms of service in crypto.',
    relatedTerms: ['Fraud', 'Manipulation', 'Regulation']
  },

  // Q - Quantum
  {
    id: 'quantum-resistant',
    term: 'Quantum Resistant',
    category: 'Security',
    definition: 'Cryptographic algorithms designed to resist attacks from theoretical quantum computers.',
    example: 'Many crypto researchers are exploring quantum-resistant algorithms to future-proof blockchains.',
    relatedTerms: ['Cryptography', 'Security', 'Future']
  },

  // R - Regulation & Risk
  {
    id: 'ramp',
    term: 'Ramp',
    category: 'Trading',
    definition: 'Short for on-ramp or off-ramp; services that convert between fiat currency and cryptocurrencies.',
    example: 'Crypto ramps like Coinbase enable users to buy Bitcoin with their bank accounts.',
    relatedTerms: ['Exchange', 'Fiat', 'Liquidity']
  },
  {
    id: 'resistance',
    term: 'Resistance',
    category: 'Trading',
    definition: 'A price level where an asset historically struggles to move above, acting as a ceiling.',
    example: 'Bitcoin faced resistance at $50,000 before eventually breaking through to new highs.',
    relatedTerms: ['Support', 'Technical Analysis', 'Chart']
  },
  {
    id: 'rfc',
    term: 'RFC (Request for Comments)',
    category: 'Blockchain',
    definition: 'A document proposing new features or improvements to blockchain protocols and standards.',
    example: 'Bitcoin Improvement Proposals (BIPs) are RFCs for potential Bitcoin protocol enhancements.',
    relatedTerms: ['Proposal', 'Upgrade', 'Protocol']
  },
  {
    id: 'rng',
    term: 'RNG (Random Number Generation)',
    category: 'Security',
    definition: 'Cryptographic techniques for generating unpredictable random numbers, crucial for key generation.',
    example: 'RNG is essential for creating secure private keys in cryptocurrency wallets.',
    relatedTerms: ['Cryptography', 'Private Key', 'Security']
  },
  {
    id: 'rug-pull',
    term: 'Rug Pull',
    category: 'Regulation',
    definition: 'A scam where project developers abandon a project and steal investor funds, typically after a price pump.',
    example: 'Many DeFi projects ended in rug pulls, costing investors millions.',
    relatedTerms: ['Scam', 'Fraud', 'Risk']
  },
  {
    id: 'running-node',
    term: 'Running a Node',
    category: 'Blockchain',
    definition: 'Operating a computer that downloads and validates the entire blockchain, supporting network decentralization.',
    example: 'Running a Bitcoin full node requires about 600GB of storage and contributes to network resilience.',
    relatedTerms: ['Node', 'Network', 'Decentralization']
  },

  // S - Smart Contract & Staking
  {
    id: 'satoshi',
    term: 'Satoshi',
    category: 'Trading',
    definition: 'The smallest unit of Bitcoin, equal to 0.00000001 BTC, named after Bitcoin\'s creator.',
    example: 'Early Bitcoin faucets distributed satoshis freely; that satoshi is now worth thousands of dollars.',
    relatedTerms: ['Bitcoin', 'Unit', 'Denomination']
  },
  {
    id: 'satoshi-nakamoto',
    term: 'Satoshi Nakamoto',
    category: 'Blockchain',
    definition: 'The pseudonymous creator of Bitcoin who published the Bitcoin whitepaper in 2008.',
    example: 'Satoshi Nakamoto\'s true identity remains unknown despite numerous theories and claims.',
    relatedTerms: ['Bitcoin', 'Creator', 'Whitepaper']
  },
  {
    id: 'scalability',
    term: 'Scalability',
    category: 'Blockchain',
    definition: 'The ability of a blockchain to handle increasing transaction volumes without significantly reducing performance.',
    example: 'Bitcoin can process about 7 transactions per second, while some Layer 2 solutions handle thousands per second.',
    relatedTerms: ['Layer 2', 'TPS', 'Performance']
  },
  {
    id: 'scam',
    term: 'Scam',
    category: 'Regulation',
    definition: 'A fraudulent scheme designed to deceive users and steal their funds or cryptocurrency.',
    example: 'Phishing scams claiming to be from crypto exchanges are common in the cryptocurrency space.',
    relatedTerms: ['Security', 'Fraud', 'Risk']
  },
  {
    id: 'sec',
    term: 'SEC (Securities and Exchange Commission)',
    category: 'Regulation',
    definition: 'The U.S. federal agency that regulates securities markets and has authority over some cryptocurrency matters.',
    example: 'The SEC has taken action against fraudulent ICOs and cryptocurrency schemes.',
    relatedTerms: ['Regulation', 'Compliance', 'Securities']
  },
  {
    id: 'security',
    term: 'Security',
    category: 'Security',
    definition: 'Measures and practices protecting cryptocurrency assets from theft, fraud, and unauthorized access.',
    example: 'Security best practices include using hardware wallets and enabling two-factor authentication.',
    relatedTerms: ['Private Key', 'Password', 'Best Practices']
  },
  {
    id: 'seed-phrase',
    term: 'Seed Phrase',
    category: 'Wallets',
    definition: 'A set of words that serves as a backup to a cryptocurrency wallet, allowing recovery of all associated accounts.',
    example: 'A 12 or 24-word seed phrase must be stored securely as losing it means losing access to funds.',
    relatedTerms: ['Backup', 'Recovery', 'Wallet']
  },
  {
    id: 'sidechain',
    term: 'Sidechain',
    category: 'Blockchain',
    definition: 'A blockchain running parallel to a main blockchain, capable of exchanging assets with the main chain.',
    example: 'Liquid is a sidechain of Bitcoin enabling faster and more private transactions.',
    relatedTerms: ['Layer 2', 'Blockchain', 'Scaling']
  },
  {
    id: 'signature',
    term: 'Signature',
    category: 'Security',
    definition: 'A cryptographic proof of ownership and authorization, created using a private key to sign transactions.',
    example: 'Bitcoin transactions require a digital signature from the owner\'s private key to be valid.',
    relatedTerms: ['Private Key', 'Public Key', 'Cryptography']
  },
  {
    id: 'slippage',
    term: 'Slippage',
    category: 'Trading',
    definition: 'The difference between expected execution price and actual execution price in a trade.',
    example: 'Large trades may experience slippage due to order book depth and market impact.',
    relatedTerms: ['Liquidity', 'Trading', 'Price Impact']
  },
  {
    id: 'smart-contract',
    term: 'Smart Contract',
    category: 'DeFi',
    definition: 'A self-executing program on a blockchain that automatically executes terms when conditions are met.',
    example: 'Ethereum smart contracts enable decentralized applications like lending protocols and DEXs.',
    relatedTerms: ['DeFi', 'Ethereum', 'DApp']
  },
  {
    id: 'snapshot',
    term: 'Snapshot',
    category: 'DeFi',
    definition: 'A record of blockchain state at a specific block height, used for airdrops and voting.',
    example: 'Governance voting uses snapshots to prevent users from voting multiple times with borrowed tokens.',
    relatedTerms: ['Voting', 'DAO', 'Governance']
  },
  {
    id: 'sol',
    term: 'SOL',
    category: 'Trading',
    definition: 'The native cryptocurrency token of the Solana blockchain, used for transaction fees and staking.',
    example: 'SOL powers the Solana network, which handles thousands of transactions per second.',
    relatedTerms: ['Solana', 'Token', 'Blockchain']
  },
  {
    id: 'solana',
    term: 'Solana',
    category: 'Blockchain',
    definition: 'A high-performance blockchain that uses Proof of History to enable fast and low-cost transactions.',
    example: 'Solana can process 65,000+ transactions per second, making it one of the fastest blockchains.',
    relatedTerms: ['Blockchain', 'Layer 1', 'Performance']
  },
  {
    id: 'solidity',
    term: 'Solidity',
    category: 'DeFi',
    definition: 'A programming language used to write smart contracts on Ethereum and Ethereum-compatible blockchains.',
    example: 'Solidity developers build DeFi protocols, NFT contracts, and other blockchain applications.',
    relatedTerms: ['Smart Contract', 'Programming', 'Ethereum']
  },
  {
    id: 'sorare',
    term: 'Sorare',
    category: 'NFTs',
    definition: 'A blockchain-based fantasy football game where players are represented as NFTs.',
    example: 'Sorare enables users to collect NFT player cards and compete in fantasy football leagues.',
    relatedTerms: ['NFT', 'Gaming', 'Collection']
  },
  {
    id: 'spread',
    term: 'Spread',
    category: 'Trading',
    definition: 'The difference between the bid price (buy) and ask price (sell) for a cryptocurrency.',
    example: 'A spread of $100 between bid and ask prices represents the cost of immediate transaction execution.',
    relatedTerms: ['Bid', 'Ask', 'Liquidity']
  },
  {
    id: 'stablecoin',
    term: 'Stablecoin',
    category: 'Trading',
    definition: 'A cryptocurrency designed to maintain a stable value by being backed by reserves or an algorithm.',
    example: 'USDC and USDT are stablecoins pegged to the U.S. dollar, maintaining $1 value.',
    relatedTerms: ['Peg', 'Collateral', 'Currency']
  },
  {
    id: 'stake',
    term: 'Stake',
    category: 'Blockchain',
    definition: 'The cryptocurrency held as collateral by a validator in a Proof of Stake network.',
    example: 'Ethereum stakers lock up ETH to become validators and earn staking rewards.',
    relatedTerms: ['Staking', 'Validator', 'Reward']
  },
  {
    id: 'staking',
    term: 'Staking',
    category: 'DeFi',
    definition: 'The process of locking cryptocurrency in a network to earn rewards and secure the blockchain.',
    example: 'Ethereum staking rewards validators with new ETH for securing the network.',
    relatedTerms: ['PoS', 'Validator', 'Reward']
  },
  {
    id: 'supply',
    term: 'Supply',
    category: 'Trading',
    definition: 'The total amount of a cryptocurrency in existence, including circulating supply and locked/unmined tokens.',
    example: 'Bitcoin\'s maximum supply is capped at 21 million coins.',
    relatedTerms: ['Circulating Supply', 'Max Supply', 'Inflation']
  },
  {
    id: 'support',
    term: 'Support',
    category: 'Trading',
    definition: 'A price level where an asset historically bounces upward, acting as a floor.',
    example: 'Bitcoin found support at $40,000, repeatedly bouncing upward from that level.',
    relatedTerms: ['Resistance', 'Technical Analysis', 'Chart']
  },
  {
    id: 'swap',
    term: 'Swap',
    category: 'Trading',
    definition: 'The exchange of one cryptocurrency for another, either through centralized or decentralized exchanges.',
    example: 'Users swap Bitcoin for Ethereum on DEXs like Uniswap without KYC requirements.',
    relatedTerms: ['Trade', 'Exchange', 'DEX']
  },

  // T - Technical Analysis & Token
  {
    id: 'ta',
    term: 'TA (Technical Analysis)',
    category: 'Trading',
    definition: 'The analysis of cryptocurrency price and volume patterns to predict future price movements.',
    example: 'Technical analysts use support, resistance, and moving averages to identify trading opportunities.',
    relatedTerms: ['Chart', 'Support', 'Resistance']
  },
  {
    id: 'testnet',
    term: 'Testnet',
    category: 'Blockchain',
    definition: 'A test version of a blockchain network where developers test features without risking real funds.',
    example: 'Developers deploy smart contracts on Ethereum Goerli Testnet before mainnet launch.',
    relatedTerms: ['Mainnet', 'Development', 'Testing']
  },
  {
    id: 'tether',
    term: 'Tether',
    category: 'Trading',
    definition: 'A stablecoin (USDT) pegged to the U.S. dollar, one of the most widely used stablecoins.',
    example: 'USDT is used on most exchanges and DeFi protocols as a dollar proxy.',
    relatedTerms: ['Stablecoin', 'USD', 'Trading Pair']
  },
  {
    id: 'ticker',
    term: 'Ticker',
    category: 'Trading',
    definition: 'A unique symbol representing a cryptocurrency on exchanges, typically 3-4 letters.',
    example: 'BTC is the ticker for Bitcoin, ETH for Ethereum, and DOGE for Dogecoin.',
    relatedTerms: ['Symbol', 'Trading Pair', 'Exchange']
  },
  {
    id: 'token',
    term: 'Token',
    category: 'Trading',
    definition: 'A digital asset representing value or utility built on a blockchain, distinct from native cryptocurrencies.',
    example: 'Uniswap token (UNI) and Aave (AAVE) are governance tokens built on Ethereum.',
    relatedTerms: ['Cryptocurrency', 'Smart Contract', 'ERC-20']
  },
  {
    id: 'tokenomics',
    term: 'Tokenomics',
    category: 'Trading',
    definition: 'The economic design of a cryptocurrency or token, including supply, distribution, and incentive mechanisms.',
    example: 'Good tokenomics incentivize long-term holders and ensure sustainable project development.',
    relatedTerms: ['Supply', 'Distribution', 'Economics']
  },
  {
    id: 'total-value-locked',
    term: 'Total Value Locked (TVL)',
    category: 'DeFi',
    definition: 'The total amount of cryptocurrency deposited in a DeFi protocol, indicating user trust and protocol health.',
    example: 'Aave\'s TVL exceeded $10 billion at peak, showing significant user adoption.',
    relatedTerms: ['DeFi', 'Protocol', 'Deposits']
  },
  {
    id: 'tps',
    term: 'TPS (Transactions Per Second)',
    category: 'Blockchain',
    definition: 'A measure of blockchain throughput, representing how many transactions the network can process per second.',
    example: 'Bitcoin handles ~7 TPS while Visa processes ~65,000 TPS, highlighting scaling challenges.',
    relatedTerms: ['Scalability', 'Performance', 'Throughput']
  },
  {
    id: 'transaction',
    term: 'Transaction',
    category: 'Blockchain',
    definition: 'A record of cryptocurrency transfer between addresses, permanently recorded on the blockchain.',
    example: 'A Bitcoin transaction moves Bitcoin from one address to another and is verified by the network.',
    relatedTerms: ['Block', 'Confirmation', 'Fee']
  },
  {
    id: 'transaction-fee',
    term: 'Transaction Fee',
    category: 'Trading',
    definition: 'The cost paid to process a cryptocurrency transaction, varying based on network congestion.',
    example: 'Bitcoin transaction fees can range from $1 to $50+ depending on network demand.',
    relatedTerms: ['Gas Fee', 'Fee', 'Network']
  },
  {
    id: 'treasury',
    term: 'Treasury',
    category: 'DeFi',
    definition: 'A pool of funds controlled by a DAO or project, often managed through governance voting.',
    example: 'A DAO\'s treasury contains cryptocurrency that members vote on how to deploy.',
    relatedTerms: ['DAO', 'Governance', 'Funds']
  },
  {
    id: 'tvl',
    term: 'TVL',
    category: 'DeFi',
    definition: 'Total Value Locked - the total amount of cryptocurrency in a DeFi protocol.',
    example: 'A DeFi protocol\'s TVL indicates its security and user adoption.',
    relatedTerms: ['Total Value Locked', 'DeFi', 'Protocol']
  },

  // U - USDC & Unlisted
  {
    id: 'usdc',
    term: 'USDC',
    category: 'Trading',
    definition: 'A stablecoin fully backed by USD reserves, issued by Circle and widely used in DeFi.',
    example: 'USDC is preferred by institutional users due to its transparency and regulatory compliance.',
    relatedTerms: ['Stablecoin', 'USD', 'Token']
  },
  {
    id: 'usdt',
    term: 'USDT',
    category: 'Trading',
    definition: 'Tether, the most widely used stablecoin, pegged to the U.S. dollar.',
    example: 'USDT is available on most blockchains and is the dominant stablecoin by volume.',
    relatedTerms: ['Stablecoin', 'Tether', 'USD']
  },

  // V - Validator & Volatile
  {
    id: 'validator',
    term: 'Validator',
    category: 'Blockchain',
    definition: 'A participant in a Proof of Stake network who stakes cryptocurrency to validate transactions and earn rewards.',
    example: 'Ethereum validators must stake 32 ETH to become active validators.',
    relatedTerms: ['Staking', 'PoS', 'Network']
  },
  {
    id: 'vesting',
    term: 'Vesting',
    category: 'Trading',
    definition: 'A schedule that gradually releases locked tokens to recipients over time, preventing immediate large sales.',
    example: 'Project founders often have long vesting schedules preventing them from dumping tokens immediately.',
    relatedTerms: ['Lockup', 'Distribution', 'Supply']
  },
  {
    id: 'volatility',
    term: 'Volatility',
    category: 'Trading',
    definition: 'The degree of price fluctuation in a cryptocurrency, with high volatility indicating larger price swings.',
    example: 'Bitcoin\'s volatility is higher than traditional assets, making it riskier but potentially more rewarding.',
    relatedTerms: ['Risk', 'Price', 'Market']
  },
  {
    id: 'volume',
    term: 'Volume',
    category: 'Trading',
    definition: 'The total number of coins or tokens traded in a time period, indicating market activity and liquidity.',
    example: 'High trading volume indicates strong market interest and good liquidity for the asset.',
    relatedTerms: ['Liquidity', 'Trading', 'Activity']
  },

  // W - Wallet & Web3
  {
    id: 'wagmi',
    term: 'WAGMI',
    category: 'Trading',
    definition: 'We\'re All Gonna Make It; a supportive phrase in crypto communities expressing optimism about future success.',
    example: 'Crypto enthusiasts encourage each other with "WAGMI" during market downturns.',
    relatedTerms: ['GM', 'Community', 'Sentiment']
  },
  {
    id: 'whale',
    term: 'Whale',
    category: 'Trading',
    definition: 'An investor holding extremely large amounts of cryptocurrency, with enough to significantly impact markets.',
    example: 'Bitcoin whales with millions of dollars in holdings can move markets with large trades.',
    relatedTerms: ['Holder', 'Influence', 'Trading']
  },
  {
    id: 'wallet',
    term: 'Wallet',
    category: 'Wallets',
    definition: 'A digital tool for storing, sending, and receiving cryptocurrency, secured by public and private keys.',
    example: 'MetaMask is a popular cryptocurrency wallet enabling interaction with Ethereum and DeFi.',
    relatedTerms: ['Address', 'Private Key', 'Security']
  },
  {
    id: 'whitepaper',
    term: 'Whitepaper',
    category: 'Blockchain',
    definition: 'A detailed technical document describing a cryptocurrency or blockchain project\'s purpose and mechanisms.',
    example: 'Satoshi Nakamoto\'s Bitcoin whitepaper outlined the first practical implementation of blockchain technology.',
    relatedTerms: ['Documentation', 'Project', 'Technical']
  },
  {
    id: 'wrapped-token',
    term: 'Wrapped Token',
    category: 'Trading',
    definition: 'A token representing another cryptocurrency or asset, enabling cross-chain interoperability.',
    example: 'Wrapped Bitcoin (wBTC) represents Bitcoin on the Ethereum blockchain.',
    relatedTerms: ['Token', 'Cross-chain', 'Bridge']
  },
  {
    id: 'web3',
    term: 'Web3',
    category: 'DeFi',
    definition: 'The decentralized web built on blockchains, enabling user ownership and peer-to-peer interactions.',
    example: 'Web3 applications give users control of their data and assets without relying on centralized platforms.',
    relatedTerms: ['Blockchain', 'Decentralization', 'DeFi']
  },

  // X - X-Ray
  {
    id: 'xmr',
    term: 'XMR (Monero)',
    category: 'Trading',
    definition: 'A privacy-focused cryptocurrency emphasizing anonymity and untraceable transactions.',
    example: 'Monero uses ring signatures to hide transaction details, unlike Bitcoin\'s transparent ledger.',
    relatedTerms: ['Privacy', 'Cryptocurrency', 'Blockchain']
  },

  // Y - Yield
  {
    id: 'yield-farming',
    term: 'Yield Farming',
    category: 'DeFi',
    definition: 'A DeFi strategy where users deposit cryptocurrency in protocols to earn interest or additional token rewards.',
    example: 'Yield farming can generate 20-100%+ APY but carries smart contract and impermanent loss risks.',
    relatedTerms: ['DeFi', 'Rewards', 'APY']
  },

  // Z - Zero-Knowledge
  {
    id: 'zero-knowledge-proof',
    term: 'Zero-Knowledge Proof',
    category: 'Security',
    definition: 'A cryptographic method proving knowledge of something without revealing the information itself.',
    example: 'Zero-knowledge proofs enable private transactions while maintaining blockchain transparency.',
    relatedTerms: ['Cryptography', 'Privacy', 'Proof']
  },
  {
    id: 'zk-rollup',
    term: 'ZK Rollup',
    category: 'Blockchain',
    definition: 'A Layer 2 scaling solution using zero-knowledge proofs to bundle transactions and improve performance.',
    example: 'ZK-rollups like zkSync enable fast, low-cost Ethereum transactions with strong security.'
  },

  // Additional Terms (A-Z continuation)
  {
    id: 'anti-money-laundering',
    term: 'AML (Anti-Money Laundering)',
    category: 'Regulation',
    definition: 'Regulatory compliance protocols designed to prevent illegal activities and money laundering through cryptocurrency.'
  },
  {
    id: 'automated-market-maker',
    term: 'AMM (Automated Market Maker)',
    category: 'DeFi',
    definition: 'A decentralized exchange protocol using mathematical formulas and liquidity pools instead of traditional order books.',
    example: 'Uniswap v2 is an AMM allowing users to swap tokens directly from liquidity pools.',
    relatedTerms: ['DEX', 'Liquidity Pool', 'Swap']
  },
  {
    id: 'annual-percentage-rate',
    term: 'APR (Annual Percentage Rate)',
    category: 'DeFi',
    definition: 'The yearly interest rate without accounting for compounding, used to measure returns on staking and lending.',
    example: 'A DeFi protocol offering 15% APR provides annual returns before compounding.',
    relatedTerms: ['APY', 'Staking', 'Yield']
  },
  {
    id: 'annual-percentage-yield',
    term: 'APY (Annual Percentage Yield)',
    category: 'DeFi',
    definition: 'The yearly interest rate accounting for compounding, giving the true annual return on crypto assets.',
    example: 'APY shows the actual return when interest is reinvested periodically.',
    relatedTerms: ['APR', 'Compounding', 'Yield']
  },
  {
    id: 'bagholding',
    term: 'Bagholding',
    category: 'Trading',
    definition: 'Holding cryptocurrency investments after significant price declines with little prospect of recovery.'
  },
  {
    id: 'band-protocol',
    term: 'Band Protocol',
    category: 'DeFi',
    definition: 'A decentralized oracle solution providing real-world data to blockchain applications.'
  },
  {
    id: 'basis-point',
    term: 'Basis Point',
    category: 'Trading',
    definition: 'A unit equal to 1/100th of 1%, commonly used to measure small changes in interest rates and fees.',
    example: 'A 50 basis point fee equals 0.5%.'
  },
  {
    id: 'batch-auction',
    term: 'Batch Auction',
    category: 'Trading',
    definition: 'A trading mechanism where orders are collected and executed simultaneously at the same price.'
  },
  {
    id: 'bitcoin-cash',
    term: 'Bitcoin Cash',
    category: 'Trading',
    definition: 'A cryptocurrency created as a Bitcoin fork with larger block sizes to enable faster transactions.'
  },
  {
    id: 'bitcoin-lightning-network',
    term: 'Bitcoin Lightning Network',
    category: 'Blockchain',
    definition: 'A Layer 2 scaling solution enabling fast, low-cost Bitcoin transactions off-chain.',
    example: 'Lightning Network enables instant Bitcoin payments with minimal fees.'
  },
  {
    id: 'blast-off',
    term: 'Blast Off',
    category: 'Trading',
    definition: 'A sudden and significant price increase, often used for high-volatility movements.'
  },
  {
    id: 'block-explorer',
    term: 'Block Explorer',
    category: 'Blockchain',
    definition: 'A web tool enabling users to view blockchain transactions, addresses, and blocks in real-time.',
    example: 'Etherscan is a popular Ethereum block explorer.'
  },
  {
    id: 'block-header',
    term: 'Block Header',
    category: 'Blockchain',
    definition: 'A data structure containing block metadata like timestamp, previous block hash, and nonce.'
  },
  {
    id: 'block-height',
    term: 'Block Height',
    category: 'Blockchain',
    definition: 'The number of blocks in a blockchain from the genesis block to a specific block.'
  },
  {
    id: 'block-reward',
    term: 'Block Reward',
    category: 'Mining',
    definition: 'Cryptocurrency awarded to miners or validators for successfully creating a new block.',
    example: 'Bitcoin block rewards halve approximately every 4 years.'
  },
  {
    id: 'bond',
    term: 'Bond (Crypto)',
    category: 'DeFi',
    definition: 'A financial instrument representing debt, often used in DeFi protocols for fixed-income yields.'
  },
  {
    id: 'bounty',
    term: 'Bounty',
    category: 'Trading',
    definition: 'A reward offered for finding security vulnerabilities or completing specific tasks in crypto projects.'
  },
  {
    id: 'bridge-protocol',
    term: 'Bridge Protocol',
    category: 'Blockchain',
    definition: 'A mechanism enabling asset transfers between different blockchain networks.',
    example: 'Bridges allow moving Ethereum assets to other blockchains like Polygon.'
  },
  {
    id: 'broadcast',
    term: 'Broadcast',
    category: 'Blockchain',
    definition: 'The process of distributing a transaction across the blockchain network to nodes.'
  },
  {
    id: 'bull-trap',
    term: 'Bull Trap',
    category: 'Trading',
    definition: 'A false signal suggesting upward price movement, leading to losses when the trend reverses.',
    example: 'A brief rally followed by a sharp decline can represent a bull trap.'
  },
  {
    id: 'byte',
    term: 'Byte',
    category: 'Blockchain',
    definition: 'A unit of digital information consisting of 8 bits, fundamental to data storage in blockchains.'
  },
  {
    id: 'cardano',
    term: 'Cardano',
    category: 'Blockchain',
    definition: 'A Layer 1 blockchain platform using Ouroboros Proof of Stake consensus mechanism.'
  },
  {
    id: 'certificate-of-deposit',
    term: 'Certificate of Deposit (CD)',
    category: 'DeFi',
    definition: 'A DeFi product offering fixed returns for locking cryptocurrency for a specific period.'
  },
  {
    id: 'chainlink',
    term: 'Chainlink',
    category: 'DeFi',
    definition: 'A decentralized oracle network providing external data to smart contracts.',
    example: 'Chainlink price feeds are used by thousands of DeFi protocols.'
  },
  {
    id: 'chart-pattern',
    term: 'Chart Pattern',
    category: 'Trading',
    definition: 'Recurring shapes in price charts used for technical analysis and prediction.',
    example: 'Head and shoulders, double tops, and triangles are common chart patterns.'
  },
  {
    id: 'circulating-tokens',
    term: 'Circulating Tokens',
    category: 'Trading',
    definition: 'The number of cryptocurrency tokens actively in circulation and available to the public.'
  },
  {
    id: 'clawback',
    term: 'Clawback',
    category: 'Trading',
    definition: 'A reversal of issued tokens or funds, sometimes used in failed projects or airdrops.'
  },
  {
    id: 'clearinghouse',
    term: 'Clearinghouse',
    category: 'Trading',
    definition: 'A centralized entity settling trades and managing counterparty risk in traditional finance.'
  },
  {
    id: 'closing-price',
    term: 'Closing Price',
    category: 'Trading',
    definition: 'The final price of a cryptocurrency at the end of a trading period.'
  },
  {
    id: 'coinbase-commerce',
    term: 'Coinbase Commerce',
    category: 'Trading',
    definition: 'A service enabling merchants to accept cryptocurrency payments directly.'
  },
  {
    id: 'coins-burned',
    term: 'Coins Burned',
    category: 'Trading',
    definition: 'The total number of cryptocurrency units removed from circulation permanently.'
  },
  {
    id: 'collateral',
    term: 'Collateral',
    category: 'DeFi',
    definition: 'Assets held as security for a loan, forfeited if repayment terms are not met.',
    example: 'DeFi lending requires depositing collateral worth more than the borrowed amount.'
  },
  {
    id: 'collateralized-debt-position',
    term: 'Collateralized Debt Position (CDP)',
    category: 'DeFi',
    definition: 'A smart contract holding collateral and managing debt in DeFi lending protocols.'
  },
  {
    id: 'color-code',
    term: 'Color Code',
    category: 'Trading',
    definition: 'Using colors in charts to represent different data types or price movements.'
  },
  {
    id: 'commission',
    term: 'Commission',
    category: 'Trading',
    definition: 'A fee charged by exchanges or brokers for executing trades or transactions.'
  },
  {
    id: 'commodity-futures-trading-commission',
    term: 'CFTC (Commodity Futures Trading Commission)',
    category: 'Regulation',
    definition: 'A U.S. government agency regulating derivatives and cryptocurrency futures markets.'
  },
  {
    id: 'concentrated-liquidity',
    term: 'Concentrated Liquidity',
    category: 'DeFi',
    definition: 'A liquidity provision strategy deploying capital in specific price ranges for efficiency.',
    example: 'Uniswap v3 allows concentrated liquidity for capital optimization.'
  },
  {
    id: 'confirmation-time',
    term: 'Confirmation Time',
    category: 'Blockchain',
    definition: 'The time required for a transaction to be verified and added to the blockchain.'
  },
  {
    id: 'consensus-mechanism',
    term: 'Consensus Mechanism',
    category: 'Blockchain',
    definition: 'A protocol through which blockchain networks agree on the validity of transactions.',
    example: 'Proof of Work and Proof of Stake are primary consensus mechanisms.'
  },
  {
    id: 'consolidation',
    term: 'Consolidation',
    category: 'Trading',
    definition: 'A period where price moves within a narrow range between support and resistance.'
  },
  {
    id: 'custody',
    term: 'Custody',
    category: 'Wallets',
    definition: 'The safekeeping of cryptocurrency assets, either self-custody or through institutions.',
    example: 'Institutional custody services provide insurance and secure storage.'
  },
  {
    id: 'cyclical-token',
    term: 'Cyclical Token',
    category: 'Trading',
    definition: 'A token whose value fluctuates in cycles based on market sentiment and trends.'
  },
  {
    id: 'dead-coin',
    term: 'Dead Coin',
    category: 'Trading',
    definition: 'A cryptocurrency with no trading activity, developer support, or practical use.'
  },
  {
    id: 'decentralized-autonomous-organization',
    term: 'Decentralized Autonomous Organization',
    category: 'DeFi',
    definition: 'An organization governed by smart contracts and community voting without central authority.',
    example: 'MakerDAO is a DAO controlling the Dai stablecoin protocol.'
  },
  {
    id: 'decentralized-exchange',
    term: 'Decentralized Exchange (DEX)',
    category: 'Trading',
    definition: 'A cryptocurrency exchange operating without intermediaries using smart contracts.',
    example: 'Uniswap, SushiSwap, and Curve are popular decentralized exchanges.'
  },
  {
    id: 'decentralized-finance-protocol',
    term: 'Decentralized Finance Protocol',
    category: 'DeFi',
    definition: 'A set of smart contracts enabling financial services without traditional intermediaries.'
  },
  {
    id: 'decentralized-identifier',
    term: 'Decentralized Identifier (DID)',
    category: 'Security',
    definition: 'A self-sovereign identity mechanism controlled by individuals without centralized authority.'
  },
  {
    id: 'decryption',
    term: 'Decryption',
    category: 'Security',
    definition: 'The process of converting encrypted data back to readable plaintext using a decryption key.'
  },
  {
    id: 'deposit',
    term: 'Deposit',
    category: 'Trading',
    definition: 'Transferring cryptocurrency from a personal wallet to an exchange or DeFi protocol.'
  },
  {
    id: 'derivative',
    term: 'Derivative',
    category: 'Trading',
    definition: 'A financial contract whose value derives from an underlying cryptocurrency asset.',
    example: 'Futures, options, and perpetual swaps are cryptocurrency derivatives.'
  },
  {
    id: 'dev-fund',
    term: 'Dev Fund',
    category: 'Trading',
    definition: 'Cryptocurrency reserved for project development and team incentives.'
  },
  {
    id: 'difficulty-adjustment',
    term: 'Difficulty Adjustment',
    category: 'Mining',
    definition: 'Automatic adjustment of mining difficulty to maintain consistent block creation time.',
    example: 'Bitcoin adjusts mining difficulty every 2 weeks.'
  },
  {
    id: 'digital-asset',
    term: 'Digital Asset',
    category: 'Trading',
    definition: 'Any asset of value existing in digital form, including cryptocurrencies and NFTs.'
  },
  {
    id: 'digital-signature',
    term: 'Digital Signature',
    category: 'Security',
    definition: 'A cryptographic signature proving ownership and authorizing transactions without revealing private keys.'
  },
  {
    id: 'digital-wallet',
    term: 'Digital Wallet',
    category: 'Wallets',
    definition: 'A software application storing and managing cryptocurrency keys and enabling transactions.'
  },
  {
    id: 'dilution',
    term: 'Dilution',
    category: 'Trading',
    definition: 'A decrease in ownership percentage when new tokens are issued or minted.'
  },
  {
    id: 'dip-buying',
    term: 'Dip Buying',
    category: 'Trading',
    definition: 'A strategy of purchasing cryptocurrency during temporary price declines.'
  }
];

const CATEGORIES = [
  'Trading',
  'DeFi',
  'Security',
  'Blockchain',
  'NFTs',
  'Mining',
  'Wallets',
  'Regulation'
];

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function CryptoGlossaryClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedTerms, setExpandedTerms] = useState<Set<string>>(new Set());
  const [activeAlpha, setActiveAlpha] = useState('A');

  // Filter and sort terms
  const filteredTerms = useMemo(() => {
    let filtered = GLOSSARY_TERMS.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || term.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort by term name
    return filtered.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  // Group terms by first letter
  const groupedTerms = useMemo(() => {
    const groups: Record<string, Term[]> = {};

    ALPHABET.forEach((letter) => {
      groups[letter] = filteredTerms.filter(
        (term) => term.term.toUpperCase().startsWith(letter)
      );
    });

    return groups;
  }, [filteredTerms]);

  // Get active letters (those with terms)
  const activeLetters = useMemo(() => {
    return ALPHABET.filter((letter) => groupedTerms[letter].length > 0);
  }, [groupedTerms]);

  const toggleTermExpanded = (termId: string) => {
    const newExpanded = new Set(expandedTerms);
    if (newExpanded.has(termId)) {
      newExpanded.delete(termId);
    } else {
      newExpanded.add(termId);
    }
    setExpandedTerms(newExpanded);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setExpandedTerms(new Set());
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      {/* Header */}
      <div
        className="glass sticky top-0 z-40 border-b"
        style={{
          borderColor: 'var(--color-surface)',
          backgroundColor: 'rgba(var(--color-bg-rgb, 0 0 0), 0.7)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="mb-6">
            <h1
              className="text-4xl font-bold mb-2 gradient-text"
              style={{ color: 'var(--color-primary)' }}
            >
              Crypto Glossary
            </h1>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Your comprehensive guide to cryptocurrency terminology
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: 'var(--color-text-secondary)' }}>
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search crypto terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-lg glass border"
              style={{
                borderColor: 'var(--color-surface)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text)'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 hover:opacity-70 transition"
              >
                <span style={{ color: 'var(--color-text-secondary)' }}><XIcon /></span>
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="space-y-3">
            <p
              className="text-sm font-semibold"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Filter by Category
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`glass-pill px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === null
                    ? 'bg-opacity-100'
                    : 'bg-opacity-50 hover:bg-opacity-70'
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === null
                      ? 'var(--color-primary)'
                      : 'var(--color-surface)',
                  color:
                    selectedCategory === null
                      ? '#fff'
                      : 'var(--color-text)'
                }}
              >
                All ({GLOSSARY_TERMS.length})
              </button>

              {CATEGORIES.map((category) => {
                const count = GLOSSARY_TERMS.filter(
                  (t) => t.category === category
                ).length;
                return (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category
                      )
                    }
                    className={`glass-pill px-4 py-2 rounded-full text-sm font-medium transition ${
                      selectedCategory === category
                        ? 'bg-opacity-100'
                        : 'bg-opacity-50 hover:bg-opacity-70'
                    }`}
                    style={{
                      backgroundColor:
                        selectedCategory === category
                          ? 'var(--color-primary)'
                          : 'var(--color-surface)',
                      color:
                        selectedCategory === category
                          ? '#fff'
                          : 'var(--color-text)'
                    }}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filters Badge */}
          {(searchQuery || selectedCategory) && (
            <div className="mt-4 flex items-center gap-3">
              <p
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Results: {filteredTerms.length} of {GLOSSARY_TERMS.length} terms
              </p>
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Clear filters
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-16">
            <p
              className="text-lg font-semibold mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              No terms found
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div>
            {/* Alphabetical Navigation */}
            <div className="mb-12 overflow-x-auto -mx-4 px-4">
              <div className="flex gap-1">
                {ALPHABET.map((letter) => {
                  const isActive = groupedTerms[letter].length > 0;
                  return (
                    <button
                      key={letter}
                      onClick={() => setActiveAlpha(letter)}
                      className={`flex-shrink-0 w-9 h-9 rounded-lg font-semibold text-sm transition ${
                        isActive
                          ? 'hover:bg-opacity-80'
                          : 'opacity-30 cursor-not-allowed'
                      }`}
                      style={{
                        backgroundColor: isActive
                          ? 'var(--color-primary)'
                          : 'var(--color-surface)',
                        color: isActive ? '#fff' : 'var(--color-text-secondary)'
                      }}
                      disabled={!isActive}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Glossary Sections */}
            {activeLetters.map((letter) => (
              <div key={letter} className="mb-16">
                <h2
                  className="text-2xl font-bold mb-6 sticky top-24 z-30 py-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {letter}
                </h2>

                <div className="space-y-3">
                  {groupedTerms[letter].map((term) => (
                    <TermCard
                      key={term.id}
                      term={term}
                      isExpanded={expandedTerms.has(term.id)}
                      onToggle={() => toggleTermExpanded(term.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        className="border-t mt-16 py-8"
        style={{
          borderColor: 'var(--color-surface)',
          backgroundColor: 'var(--color-surface)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Understanding crypto terminology is the first step to becoming an informed trader.
            Keep learning!
          </p>
        </div>
      </div>
    </div>
  );
}

// Term Card Component
function TermCard({
  term,
  isExpanded,
  onToggle
}: {
  term: Term;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="glass rounded-lg border transition-all duration-300 overflow-hidden hover:border-opacity-80"
      style={{
        borderColor: 'var(--color-surface)',
        backgroundColor: isExpanded
          ? 'var(--color-surface)'
          : 'var(--color-surface)'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-start justify-between hover:bg-opacity-50 transition text-left"
        style={{
          backgroundColor: isExpanded
            ? 'var(--color-surface)'
            : 'transparent'
        }}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h3
              className="text-lg font-semibold"
              style={{ color: 'var(--color-text)' }}
            >
              {term.term}
            </h3>
            <span
              className="text-xs font-medium px-2 py-1 rounded-md"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: '#fff',
                opacity: 0.8
              }}
            >
              {term.category}
            </span>
          </div>
          {!isExpanded && (
            <p
              className="text-sm line-clamp-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {term.definition}
            </p>
          )}
        </div>
        <span
          className="flex-shrink-0 ml-3 transition-transform"
          style={{
            color: 'var(--color-primary)',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            display: 'inline-block'
          }}
        >
          <ChevronDownIcon />
        </span>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div
          className="px-6 pb-4 border-t"
          style={{ borderColor: 'var(--color-surface)' }}
        >
          <div className="space-y-4">
            {/* Definition */}
            <div>
              <p style={{ color: 'var(--color-text)' }} className="leading-relaxed">
                {term.definition}
              </p>
            </div>

            {/* Example */}
            {term.example && (
              <div>
                <p
                  className="text-xs font-semibold mb-1"
                  style={{ color: 'var(--color-primary)' }}
                >
                  EXAMPLE
                </p>
                <p
                  className="text-sm italic"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  "{term.example}"
                </p>
              </div>
            )}

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div>
                <p
                  className="text-xs font-semibold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  RELATED TERMS
                </p>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((relatedTerm) => (
                    <span
                      key={relatedTerm}
                      className="text-xs px-2 py-1 rounded-md glass-subtle"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {relatedTerm}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
