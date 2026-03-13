'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen, ChevronDown, ChevronUp, Hash } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { SITE_NAME } from '@/lib/constants';

// TypeScript types
interface GlossaryTerm {
  id: string;
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  category: "DeFi" | "Trading" | "Security" | "Basics" | "L2" | "NFT" | "Staking" | "Advanced";
  relatedTerms?: string[];
}

interface ExpandedState {
  [key: string]: boolean;
}

// Comprehensive glossary terms (50+)
const glossaryTerms: GlossaryTerm[] = [
  {
    id: "account-abstraction",
    term: "Account Abstraction",
    shortDefinition: "Smart contract-based accounts that enable advanced features like social recovery and batch transactions.",
    fullDefinition: "Account abstraction decouples the authentication logic from transaction execution, allowing wallets to be programmable smart contracts. This enables features like sponsored transactions, multi-signature security, and recovery mechanisms without requiring traditional private keys.",
    category: "Advanced",
    relatedTerms: ["Smart Contract", "ERC-4337"],
  },
  {
    id: "airdrop",
    term: "Airdrop",
    shortDefinition: "Free distribution of tokens to wallet addresses, often used for marketing or rewarding early users.",
    fullDefinition: "Airdrops are the distribution of cryptocurrency tokens or coins to blockchain wallet addresses. Projects use airdrops to incentivize adoption, reward community members, or distribute new tokens. Users typically need to meet certain criteria like holding a specific asset or completing a task.",
    category: "Basics",
    relatedTerms: ["Token", "Wallet"],
  },
  {
    id: "amm",
    term: "Automated Market Maker (AMM)",
    shortDefinition: "A DEX mechanism using liquidity pools where prices are determined algorithmically rather than by order books.",
    fullDefinition: "AMMs are smart contracts that hold reserves of two tokens and allow traders to swap between them based on a mathematical formula (e.g., x*y=k). Instead of traditional order books, liquidity providers deposit equal values of two tokens and earn fees from trades.",
    category: "DeFi",
    relatedTerms: ["DEX", "Liquidity Pool", "Slippage"],
  },
  {
    id: "atl",
    term: "All-Time Low (ATL)",
    shortDefinition: "The lowest price a cryptocurrency has ever traded at.",
    fullDefinition: "ATL represents the minimum price point in an asset's entire trading history. Reaching new ATLs can indicate weak market sentiment, but contrarian investors may view it as a buying opportunity. Always consider the context and project fundamentals.",
    category: "Trading",
    relatedTerms: ["ATH", "Support Level", "Resistance"],
  },
  {
    id: "ath",
    term: "All-Time High (ATH)",
    shortDefinition: "The highest price a cryptocurrency has ever reached.",
    fullDefinition: "ATH is the peak price in an asset's complete trading history. When assets reach new ATHs, it often attracts media attention and FOMO from retail investors. Technical traders use ATH levels as resistance points for future price movements.",
    category: "Trading",
    relatedTerms: ["ATL", "Resistance Level", "FOMO"],
  },
  {
    id: "arbitrage",
    term: "Arbitrage",
    shortDefinition: "Profiting from price differences of the same asset across different markets or exchanges.",
    fullDefinition: "Arbitrageurs buy assets where they're cheaper and immediately sell them where they're more expensive. In crypto, arbitrage opportunities exist between different exchanges, trading pairs, or lending platforms. These trades help equalize prices across markets.",
    category: "Trading",
    relatedTerms: ["DEX", "Flash Loan", "MEV"],
  },
  {
    id: "bag-holder",
    term: "Bag Holder",
    shortDefinition: "An investor left holding a large amount of a cryptocurrency after a market crash or rug pull.",
    fullDefinition: "Bag holders are investors who bought near the top of a bull run and held through the decline. The term is often used for those who bought into pump-and-dump schemes or scams and lost significant value. It reflects the emotional and financial pain of being caught in downturns.",
    category: "Trading",
    relatedTerms: ["Rug Pull", "Exit Scam", "Diamond Hands"],
  },
  {
    id: "bear-market",
    term: "Bear Market",
    shortDefinition: "A prolonged period when cryptocurrency prices are falling and investor sentiment is negative.",
    fullDefinition: "Bear markets typically last months or years with sustained price declines of 20% or more. They test investor patience and resolve but often present long-term buying opportunities. Bitcoin has experienced multiple bear markets, with the longest lasting 2+ years.",
    category: "Trading",
    relatedTerms: ["Bull Market", "Market Sentiment", "Support Level"],
  },
  {
    id: "betamax",
    term: "BETA Version",
    shortDefinition: "A pre-release version of software or blockchain protocol being tested before full launch.",
    fullDefinition: "BETA versions allow developers to identify bugs and gather user feedback before mainnet launch. In crypto, participating in BETA testing can offer early access to features and sometimes airdrops or tokens. Always understand the risks of using beta software.",
    category: "Advanced",
    relatedTerms: ["Mainnet", "Testnet", "Smart Contract"],
  },
  {
    id: "blockchain",
    term: "Blockchain",
    shortDefinition: "A distributed, immutable ledger that records transactions across a network of computers.",
    fullDefinition: "Blockchains use cryptography and consensus mechanisms to create a permanent record of transactions. Each block contains a hash of the previous block, creating a chain that's extremely difficult to alter. Bitcoin's blockchain is the most secure, having never been successfully attacked.",
    category: "Basics",
    relatedTerms: ["Cryptocurrency", "Decentralized", "Hash"],
  },
  {
    id: "blockchain-address",
    term: "Blockchain Address",
    shortDefinition: "A unique identifier (public key) used to send and receive cryptocurrency.",
    fullDefinition: "Addresses are alphanumeric strings derived from public keys using cryptographic hashing. Bitcoin addresses start with 1 or 3, Ethereum addresses start with 0x. You can safely share addresses publicly, but never share your private key.",
    category: "Basics",
    relatedTerms: ["Public Key", "Private Key", "Wallet"],
  },
  {
    id: "block-height",
    term: "Block Height",
    shortDefinition: "The number of confirmed blocks preceding a particular block in the blockchain.",
    fullDefinition: "Block height starts at 0 (genesis block) and increments with each new block. It's used to identify the age of a transaction and determine blockchain progress. Bitcoin currently has a block height over 800,000.",
    category: "Basics",
    relatedTerms: ["Genesis Block", "Block", "Confirmation"],
  },
  {
    id: "block-reward",
    term: "Block Reward",
    shortDefinition: "The cryptocurrency newly created and awarded to miners/validators who process a new block.",
    fullDefinition: "Block rewards incentivize network participants to maintain the blockchain. Bitcoin's reward started at 50 BTC and halves every 210,000 blocks. This built-in inflation schedule is designed to reduce supply over time and eventually stop at 21 million BTC.",
    category: "Basics",
    relatedTerms: ["Mining", "Halving", "Validator"],
  },
  {
    id: "bridge",
    term: "Cross-Chain Bridge",
    shortDefinition: "A protocol enabling asset transfers between different blockchains.",
    fullDefinition: "Bridges lock assets on one chain and mint wrapped versions on another. They enable liquidity across ecosystems but introduce new security considerations. Notable bridges include Wormhole, Stargate, and native bridges like Polygon and Arbitrum.",
    category: "Advanced",
    relatedTerms: ["Wrapped Token", "Sidechain", "Layer 2"],
  },
  {
    id: "bull-market",
    term: "Bull Market",
    shortDefinition: "A sustained period when cryptocurrency prices rise and investor confidence is high.",
    fullDefinition: "Bull markets are characterized by 20%+ price increases over months or years. They attract new investors and generate media coverage. Historically, Bitcoin experiences bull markets following each halving event, though timing is unpredictable.",
    category: "Trading",
    relatedTerms: ["Bear Market", "ATH", "Market Cycle"],
  },
  {
    id: "burn",
    term: "Token Burn",
    shortDefinition: "Permanently removing cryptocurrency from circulation by sending it to an unspendable address.",
    fullDefinition: "Projects burn tokens to reduce supply and potentially increase scarcity. Ethereum burns transaction fees (EIP-1559), which removes ETH from circulation. Burning can signal project commitment to deflation and long-term value.",
    category: "Advanced",
    relatedTerms: ["Supply", "Deflationary", "Token"],
  },
  {
    id: "cold-wallet",
    term: "Cold Wallet",
    shortDefinition: "A cryptocurrency wallet not connected to the internet, used for long-term secure storage.",
    fullDefinition: "Cold wallets like hardware wallets and paper wallets provide maximum security because they're offline and less vulnerable to hacking. The tradeoff is convenience - moving funds requires physical interaction. Ideal for hodlers.",
    category: "Security",
    relatedTerms: ["Hardware Wallet", "Hot Wallet", "Private Key"],
  },
  {
    id: "confirmations",
    term: "Confirmations",
    shortDefinition: "The number of blocks added to the blockchain after a transaction is included in a block.",
    fullDefinition: "More confirmations = higher security and finality. Bitcoin typically requires 6 confirmations (~1 hour) for high-value transactions. Exchanges often wait for multiple confirmations before crediting deposits.",
    category: "Basics",
    relatedTerms: ["Block", "Block Height", "Finality"],
  },
  {
    id: "consensus-mechanism",
    term: "Consensus Mechanism",
    shortDefinition: "The protocol rules that allow network participants to agree on the current blockchain state.",
    fullDefinition: "Common mechanisms include Proof of Work (mining), Proof of Stake (staking), and Delegated Proof of Stake. These ensure agreement without a central authority. The choice affects security, energy use, and decentralization.",
    category: "Advanced",
    relatedTerms: ["Proof of Work", "Proof of Stake", "Mining"],
  },
  {
    id: "cryptographic-hash",
    term: "Cryptographic Hash",
    shortDefinition: "A mathematical function that converts input data into a fixed-size alphanumeric output.",
    fullDefinition: "Hash functions are deterministic - the same input always produces the same output. Even tiny input changes produce completely different hashes. Blockchains use hashing (SHA-256, Keccak-256) to link blocks and secure transactions.",
    category: "Advanced",
    relatedTerms: ["Blockchain", "Digital Signature", "Merkle Root"],
  },
  {
    id: "dapp",
    term: "Decentralized Application (DApp)",
    shortDefinition: "An application built on blockchain that runs on a decentralized network rather than centralized servers.",
    fullDefinition: "DApps interact with smart contracts instead of relying on company servers. Benefits include censorship resistance and data ownership. Examples include Uniswap (trading), Aave (lending), and OpenSea (NFTs).",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "Web3", "DEX"],
  },
  {
    id: "defi",
    term: "Decentralized Finance (DeFi)",
    shortDefinition: "Financial services built on blockchain without intermediaries like banks or brokers.",
    fullDefinition: "DeFi recreates traditional finance on-chain: lending, trading, derivatives, insurance. Users maintain full control of funds with private keys. DeFi is permissionless but carries smart contract and market risks.",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "Liquidity Pool", "Yield Farming"],
  },
  {
    id: "defi-protocol",
    term: "DeFi Protocol",
    shortDefinition: "A set of rules and smart contracts that enable specific financial services on blockchain.",
    fullDefinition: "Protocols like Aave (lending) and Curve (trading) define how assets flow and interact. They're governed by community through DAOs. Well-audited, battle-tested protocols are generally safer than new experimental ones.",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "DAO", "Governance Token"],
  },
  {
    id: "dex",
    term: "Decentralized Exchange (DEX)",
    shortDefinition: "A blockchain-based platform for trading cryptocurrencies without custodial intermediaries.",
    fullDefinition: "DEXs like Uniswap and Curve use AMM models where users trade against liquidity pools instead of order books. Users retain private key control. Lower fees and censorship resistance, but less liquidity and UX than centralized exchanges.",
    category: "DeFi",
    relatedTerms: ["AMM", "Liquidity Pool", "Token Swap"],
  },
  {
    id: "digital-signature",
    term: "Digital Signature",
    shortDefinition: "Cryptographic proof that a transaction was authorized by the private key owner.",
    fullDefinition: "Digital signatures use public-key cryptography to prove ownership without revealing the private key. Every blockchain transaction includes a signature proving the sender authorized the transfer. They're fundamental to blockchain security.",
    category: "Security",
    relatedTerms: ["Private Key", "Public Key", "Cryptocurrency"],
  },
  {
    id: "diversification",
    term: "Portfolio Diversification",
    shortDefinition: "Spreading investments across multiple assets to reduce overall portfolio risk.",
    fullDefinition: "Diversification across different cryptocurrencies, asset classes, and strategies reduces impact of any single failure. But in strong bull markets, high-beta coins outperform diversified portfolios. Balance risk tolerance with growth goals.",
    category: "Trading",
    relatedTerms: ["Risk Management", "Portfolio", "Altcoin"],
  },
  {
    id: "dyor",
    term: "Do Your Own Research (DYOR)",
    shortDefinition: "A reminder to independently verify claims rather than blindly following advice or hype.",
    fullDefinition: "DYOR is crypto culture's most important principle. Always read whitepapers, audit reports, and source code yourself. Don't rely solely on influencers, social media, or project claims. This protects you from scams and poor investment decisions.",
    category: "Basics",
    relatedTerms: ["FUD", "FOMO", "Whitepaper"],
  },
  {
    id: "ethereum",
    term: "Ethereum",
    shortDefinition: "A programmable blockchain enabling smart contracts and decentralized applications.",
    fullDefinition: "Launched in 2015, Ethereum moved beyond Bitcoin's payments focus to enable arbitrary computation. Smart contracts allow developers to build DeFi protocols, NFTs, and DAOs. Ethereum transitioned to Proof of Stake with The Merge in 2022.",
    category: "Basics",
    relatedTerms: ["Smart Contract", "EVM", "Layer 2"],
  },
  {
    id: "exchange",
    term: "Cryptocurrency Exchange",
    shortDefinition: "A platform for buying, selling, and trading cryptocurrencies.",
    fullDefinition: "Centralized exchanges (CEX) like Coinbase and Kraken hold user funds and facilitate trades. They offer liquidity and ease of use but custody risk. Decentralized exchanges avoid custodial risk but have lower liquidity and UX.",
    category: "Basics",
    relatedTerms: ["DEX", "CEX", "Trading Pair"],
  },
  {
    id: "fork",
    term: "Blockchain Fork",
    shortDefinition: "A change to a blockchain's protocol resulting in a new chain that diverges from the original.",
    fullDefinition: "Soft forks are backward-compatible; hard forks are not and create new separate blockchains. Bitcoin has had few hard forks, while Ethereum has had several. Forks can be contentious, like Bitcoin Cash splitting from Bitcoin.",
    category: "Advanced",
    relatedTerms: ["Upgrade", "Consensus", "Bitcoin Cash"],
  },
  {
    id: "fud",
    term: "Fear, Uncertainty, Doubt (FUD)",
    shortDefinition: "Negative claims or sensationalism designed to create panic and drive down prices.",
    fullDefinition: "FUD can be factual (legitimate concerns) or manufactured (false claims). Crypto markets are especially prone to FUD due to 24/7 trading and social media. Successful investors distinguish between legitimate risk and noise.",
    category: "Trading",
    relatedTerms: ["FOMO", "Market Sentiment", "DYOR"],
  },
  {
    id: "fomo",
    term: "Fear of Missing Out (FOMO)",
    shortDefinition: "The emotional pressure to buy an asset quickly, usually near market peaks, driven by fear of losses.",
    fullDefinition: "FOMO causes retail investors to buy high during bull runs after the move is already extended. It's the opposite of disciplined investing. Combat FOMO with rules-based strategies and DCA to average entry prices.",
    category: "Trading",
    relatedTerms: ["FUD", "Bag Holder", "Discipline"],
  },
  {
    id: "gas-fees",
    term: "Gas Fees",
    shortDefinition: "The transaction fee paid to miners/validators for processing transactions on a blockchain.",
    fullDefinition: "Gas fees vary based on network congestion. Ethereum's gas prices spike during high-volume periods. Layer 2 solutions dramatically reduce gas fees by batching transactions. Always consider gas costs when making trades or transfers.",
    category: "Basics",
    relatedTerms: ["Layer 2", "Scalability", "Transaction Fee"],
  },
  {
    id: "genesis-block",
    term: "Genesis Block",
    shortDefinition: "The very first block in a blockchain, serving as the foundation for all subsequent blocks.",
    fullDefinition: "Bitcoin's genesis block (block 0) was mined by Satoshi Nakamoto on January 3, 2009. It contains a message referencing a headline: 'The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.' Every blockchain has a unique genesis block.",
    category: "Basics",
    relatedTerms: ["Block", "Block Height", "Blockchain"],
  },
  {
    id: "governance-token",
    term: "Governance Token",
    shortDefinition: "A cryptocurrency that gives holders voting rights on protocol decisions and changes.",
    fullDefinition: "Governance tokens enable decentralized decision-making in DAOs and DeFi protocols. Holders vote on proposals like fee changes, contract upgrades, or treasury allocation. Examples: UNI (Uniswap), AAVE (Aave).",
    category: "DeFi",
    relatedTerms: ["DAO", "Voting", "Protocol"],
  },
  {
    id: "hardware-wallet",
    term: "Hardware Wallet",
    shortDefinition: "A physical device that securely stores private keys offline, protecting cryptocurrency from hacking.",
    fullDefinition: "Popular hardware wallets include Ledger and Trezor. They keep private keys isolated and require physical confirmation for transactions. Ideal for large holdings. Requires backing up seed phrases for account recovery.",
    category: "Security",
    relatedTerms: ["Private Key", "Cold Wallet", "Seed Phrase"],
  },
  {
    id: "hash-rate",
    term: "Hash Rate",
    shortDefinition: "The total computational power of a Proof of Work blockchain, measured in hashes per second.",
    fullDefinition: "Higher hash rate = greater network security (harder to attack). Bitcoin's hash rate is in exahashes/second (EH/s). Hash rate grows with miner participation and declines when unprofitable for miners.",
    category: "Advanced",
    relatedTerms: ["Proof of Work", "Mining", "Difficulty"],
  },
  {
    id: "impermanent-loss",
    term: "Impermanent Loss",
    shortDefinition: "The opportunity cost faced by liquidity providers when token prices diverge significantly.",
    fullDefinition: "When you provide liquidity to an AMM pool with tokens A and B, large price movements between them create losses vs. simply hodling. The loss is 'impermanent' because it reverses if prices return to their ratio. IL is highest for uncorrelated assets.",
    category: "DeFi",
    relatedTerms: ["Liquidity Provider", "AMM", "Yield Farming"],
  },
  {
    id: "json-rpc",
    term: "JSON-RPC",
    shortDefinition: "A protocol standard for communicating with blockchain nodes and accessing blockchain data.",
    fullDefinition: "JSON-RPC enables applications to query blockchain state, send transactions, and interact with smart contracts. Web3 libraries use JSON-RPC under the hood. Public RPC endpoints can get rate-limited; private endpoints are preferred for production.",
    category: "Advanced",
    relatedTerms: ["Web3", "API", "Node"],
  },
  {
    id: "layer-2",
    term: "Layer 2 Scaling Solution",
    shortDefinition: "A blockchain built on top of a main chain to increase transaction throughput and reduce fees.",
    fullDefinition: "Layer 2s like Arbitrum, Optimism, and Polygon process transactions off-chain and periodically post to the main chain. They inherit main chain security while improving scalability. Trade security for speed compared to main chain.",
    category: "Advanced",
    relatedTerms: ["Rollup", "Sidechain", "Scalability"],
  },
  {
    id: "limit-order",
    term: "Limit Order",
    shortDefinition: "An instruction to buy or sell an asset only at a specified price or better.",
    fullDefinition: "Limit orders provide price certainty but may not fill if the price never reaches your limit. Market orders execute immediately at current prices. Traders use limit orders to enter/exit at predetermined levels.",
    category: "Trading",
    relatedTerms: ["Market Order", "Stop Loss", "Trading Pair"],
  },
  {
    id: "liquidity-pool",
    term: "Liquidity Pool",
    shortDefinition: "A smart contract holding paired cryptocurrency tokens that enables decentralized trading.",
    fullDefinition: "Users deposit equal values of two tokens into pools and earn fees from trades. Pool ratios determine prices. Liquidity providers earn fees but face impermanent loss. AMM DEXs like Uniswap are built on liquidity pools.",
    category: "DeFi",
    relatedTerms: ["AMM", "Liquidity Provider", "Impermanent Loss"],
  },
  {
    id: "liquidity-provider",
    term: "Liquidity Provider (LP)",
    shortDefinition: "Users who deposit cryptocurrency pairs into liquidity pools and earn trading fees.",
    fullDefinition: "LPs receive LP tokens representing their pool share and earn a percentage of trading fees. In exchange, they risk impermanent loss if token prices diverge. Higher APY usually correlates with higher risk.",
    category: "DeFi",
    relatedTerms: ["Liquidity Pool", "AMM", "Yield Farming"],
  },
  {
    id: "mainnet",
    term: "Mainnet",
    shortDefinition: "The live, operational blockchain where real transactions occur and have economic value.",
    fullDefinition: "Mainnet refers to the production blockchain as opposed to test networks. Transactions on mainnet are permanent and require real cryptocurrency. Always verify you're on mainnet before sending funds.",
    category: "Basics",
    relatedTerms: ["Testnet", "Network", "Blockchain"],
  },
  {
    id: "market-cap",
    term: "Market Capitalization",
    shortDefinition: "The total market value of a cryptocurrency, calculated as price multiplied by circulating supply.",
    fullDefinition: "Market cap = price × circulating supply. It indicates project size and adoption relative to others. Bitcoin has the largest market cap (~$1T), Ethereum second (~$250B). Market cap can be misleading due to supply dynamics.",
    category: "Basics",
    relatedTerms: ["Supply", "Price", "Valuation"],
  },
  {
    id: "merkle-tree",
    term: "Merkle Tree",
    shortDefinition: "A cryptographic data structure that efficiently summarizes and verifies large amounts of data.",
    fullDefinition: "Merkle trees hash pairs of data recursively until producing a single root hash. Small changes cascade to change the root. Blockchains use Merkle trees to efficiently verify transactions without checking every one.",
    category: "Advanced",
    relatedTerms: ["Hash", "Blockchain", "Digital Signature"],
  },
  {
    id: "mev",
    term: "Maximal Extractable Value (MEV)",
    shortDefinition: "The value that can be extracted from transaction ordering or manipulation in a block.",
    fullDefinition: "Miners/validators can reorder transactions to profit from frontrunning or sandwich attacks. MEV extraction creates inefficiencies and unfair outcomes for regular users. Solutions like encrypted mempools aim to reduce MEV.",
    category: "Advanced",
    relatedTerms: ["Frontrunning", "Sandwich Attack", "Arbitrage"],
  },
  {
    id: "mining",
    term: "Cryptocurrency Mining",
    shortDefinition: "The process of validating transactions and creating new blocks in a Proof of Work blockchain.",
    fullDefinition: "Miners compete to solve cryptographic puzzles; the first to solve it adds the next block and earns rewards + fees. Mining secures the network but consumes significant electricity. Bitcoin mining difficulty adjusts to maintain ~10-minute blocks.",
    category: "Advanced",
    relatedTerms: ["Proof of Work", "Hash Rate", "Block Reward"],
  },
  {
    id: "multisig",
    term: "Multi-Signature (Multisig) Wallet",
    shortDefinition: "A wallet requiring multiple private keys to authorize transactions, enhancing security.",
    fullDefinition: "Common multisig setups require 2-of-3 or 3-of-5 signatures. Even if attackers obtain one key, they can't steal funds without additional keys. Multisig is standard for managing large crypto holdings and DAOs.",
    category: "Security",
    relatedTerms: ["Private Key", "Hardware Wallet", "Self-Custody"],
  },
  {
    id: "nft",
    term: "Non-Fungible Token (NFT)",
    shortDefinition: "A unique, indivisible token on blockchain representing ownership of a digital or physical asset.",
    fullDefinition: "Unlike cryptocurrencies, NFTs are unique and can't be 1:1 swapped. Used for digital art, collectibles, gaming items, and real-world asset representation. NFT trading volumes were $25B+ in 2022 but have cooled significantly.",
    category: "NFT",
    relatedTerms: ["ERC-721", "Smart Contract", "Blockchain"],
  },
  {
    id: "node",
    term: "Blockchain Node",
    shortDefinition: "A computer running blockchain software that validates transactions and maintains a copy of the ledger.",
    fullDefinition: "Full nodes store the complete blockchain history and validate all transactions independently. Light nodes store partial data. Running a node requires storage and bandwidth but enables decentralization and self-custody validation.",
    category: "Advanced",
    relatedTerms: ["Validator", "Blockchain", "Network"],
  },
  {
    id: "oracle",
    term: "Oracle",
    shortDefinition: "A service that feeds external real-world data onto the blockchain for smart contracts to use.",
    fullDefinition: "Smart contracts can't directly access off-chain data (price feeds, weather, sports scores). Oracles bridge this gap. Chainlink is the most widely used oracle network. Oracle failures have caused significant smart contract exploits.",
    category: "Advanced",
    relatedTerms: ["Smart Contract", "Chainlink", "Price Feed"],
  },
  {
    id: "private-key",
    term: "Private Key",
    shortDefinition: "A secret cryptographic key that proves cryptocurrency ownership and authorizes transactions.",
    fullDefinition: "Never share your private key - whoever has it can steal your funds. Private keys are typically 256-bit numbers displayed as hex strings. Wallets use private keys to digitally sign transactions, proving you authorized them.",
    category: "Security",
    relatedTerms: ["Public Key", "Self-Custody", "Cold Wallet"],
  },
  {
    id: "proof-of-stake",
    term: "Proof of Stake (PoS)",
    shortDefinition: "A consensus mechanism where validators secure the network by staking cryptocurrency as collateral.",
    fullDefinition: "Instead of mining, validators are chosen proportional to their stake. Ethereum switched to PoS (The Merge). PoS is more energy-efficient than Proof of Work but raises centralization concerns if few validators hold most stake.",
    category: "Advanced",
    relatedTerms: ["Proof of Work", "Staking", "Validator"],
  },
  {
    id: "proof-of-work",
    term: "Proof of Work (PoW)",
    shortDefinition: "A consensus mechanism where miners solve computational puzzles to validate transactions and create blocks.",
    fullDefinition: "Bitcoin and Ethereum (pre-Merge) use PoW. Miners compete to solve SHA-256 puzzles, requiring massive computational work. This secures the network but consumes ~140 TWh/year globally. PoW is immutable and highly secure.",
    category: "Advanced",
    relatedTerms: ["Mining", "Hash Rate", "Proof of Stake"],
  },
  {
    id: "protocol",
    term: "Blockchain Protocol",
    shortDefinition: "The set of rules and technical specifications that define how a blockchain operates.",
    fullDefinition: "Bitcoin, Ethereum, and Solana are different protocols with different rules, security models, and capabilities. Protocol upgrades are coordinated by consensus and can be controversial (Bitcoin forks, Ethereum hard forks).",
    category: "Advanced",
    relatedTerms: ["Blockchain", "Fork", "Consensus"],
  },
  {
    id: "rug-pull",
    term: "Rug Pull",
    shortDefinition: "A scam where project developers abruptly abandon the project and steal investor funds.",
    fullDefinition: "Rug pulls happen when teams remove liquidity from DEX pools and vanish with funds. They're especially common in low-cap altcoins and DeFi projects. Always check liquidity lock dates and audits to reduce rug pull risk.",
    category: "Security",
    relatedTerms: ["Scam", "Exit Scam", "Liquidity Lock"],
  },
  {
    id: "scalability",
    term: "Blockchain Scalability",
    shortDefinition: "A blockchain's ability to handle increasing numbers of transactions while maintaining performance.",
    fullDefinition: "Bitcoin handles ~7 TPS, Ethereum ~15 TPS, but Layer 2 solutions achieve 1000+ TPS. Scalability is a key challenge for blockchain adoption. Solutions include Layer 2s, sidechains, and protocol improvements.",
    category: "Advanced",
    relatedTerms: ["Layer 2", "Throughput", "TPS"],
  },
  {
    id: "seed-phrase",
    term: "Seed Phrase (Recovery Phrase)",
    shortDefinition: "A series of 12-24 words that can restore access to all wallet addresses and funds.",
    fullDefinition: "Seed phrases are derived from your private keys. Back them up securely (never digitally stored). If you lose your seed phrase, you lose wallet access permanently. Anyone with your seed phrase can steal your funds.",
    category: "Security",
    relatedTerms: ["Private Key", "Backup", "Self-Custody"],
  },
  {
    id: "self-custody",
    term: "Self-Custody",
    shortDefinition: "Directly controlling your cryptocurrency using your own private keys rather than trusting a custodian.",
    fullDefinition: "Self-custody provides maximum security and censorship resistance but requires responsibility. You must protect private keys and seed phrases. The tradeoff is convenience - custodians offer easier access but increase counterparty risk.",
    category: "Security",
    relatedTerms: ["Private Key", "Self-Sovereign", "Hardware Wallet"],
  },
  {
    id: "slippage",
    term: "Slippage",
    shortDefinition: "The difference between expected and actual transaction prices, especially in DEX trades.",
    fullDefinition: "Slippage occurs when market prices move between trade submission and execution. Large trades in thin liquidity pools experience high slippage. Slippage tolerance settings limit price movement before reverting transactions.",
    category: "Trading",
    relatedTerms: ["AMM", "Liquidity Pool", "DEX"],
  },
  {
    id: "smart-contract",
    term: "Smart Contract",
    shortDefinition: "Self-executing code on blockchain that automatically carries out terms when conditions are met.",
    fullDefinition: "Smart contracts enable DeFi, NFTs, and DAOs. They're immutable once deployed, so bugs can't be fixed. Audits are crucial before using new smart contracts. Successful audits don't guarantee safety.",
    category: "Advanced",
    relatedTerms: ["Blockchain", "Ethereum", "Solidity"],
  },
  {
    id: "staking",
    term: "Staking",
    shortDefinition: "Locking up cryptocurrency in a protocol to earn rewards and participate in network validation.",
    fullDefinition: "In Proof of Stake systems, stakers lock funds to validate blocks and earn APY. Staking reduces supply and incentivizes long-term holding. Risks include slashing (losing stake for misbehavior) and price volatility.",
    category: "Staking",
    relatedTerms: ["Proof of Stake", "Validator", "APY"],
  },
  {
    id: "stop-loss",
    term: "Stop Loss Order",
    shortDefinition: "An order to sell an asset if its price drops to a predetermined level to limit losses.",
    fullDefinition: "Stop losses protect against catastrophic losses but can trigger on temporary dips. On DEXs, stop losses are harder to implement than centralized exchanges. Disciplined traders use stop losses to manage risk.",
    category: "Trading",
    relatedTerms: ["Risk Management", "Limit Order", "Take Profit"],
  },
  {
    id: "supply",
    term: "Cryptocurrency Supply",
    shortDefinition: "The total amount of a cryptocurrency in existence, including circulating and non-circulating tokens.",
    fullDefinition: "Bitcoin has a fixed supply cap of 21 million. Circulating supply includes tokens in active use. Maximum supply is the total ever created. Supply dynamics affect scarcity and tokenomics.",
    category: "Basics",
    relatedTerms: ["Tokenomics", "Inflation", "Deflation"],
  },
  {
    id: "testnet",
    term: "Testnet",
    shortDefinition: "A practice blockchain network mirroring mainnet but using worthless test tokens for experimentation.",
    fullDefinition: "Testnets like Sepolia (Ethereum) and Goerli allow developers to test smart contracts before mainnet deployment. Test tokens are free from faucets. Always verify you're on mainnet before sending real funds.",
    category: "Advanced",
    relatedTerms: ["Mainnet", "Development", "Smart Contract"],
  },
  {
    id: "tokenomics",
    term: "Tokenomics",
    shortDefinition: "The economic design and incentive structure of a cryptocurrency token.",
    fullDefinition: "Tokenomics includes supply, distribution, mining/staking rewards, burn mechanisms, and governance. Good tokenomics align incentives and reduce dilution. Poor tokenomics can cause failure (infinite supply, heavy early dilution).",
    category: "Advanced",
    relatedTerms: ["Token", "Supply", "Valuation"],
  },
  {
    id: "tvl",
    term: "Total Value Locked (TVL)",
    shortDefinition: "The total value of cryptocurrency deposited in a DeFi protocol.",
    fullDefinition: "TVL is a key DeFi metric indicating protocol usage and liquidity. Higher TVL suggests user confidence but doesn't guarantee profitability or security. Whale withdrawals can trigger TVL crashes.",
    category: "DeFi",
    relatedTerms: ["DeFi", "Liquidity Pool", "Yield Farming"],
  },
  {
    id: "tx",
    term: "Transaction (TX)",
    shortDefinition: "A transfer of cryptocurrency from one address to another recorded on the blockchain.",
    fullDefinition: "Transactions are immutable once confirmed. They include sender, recipient, amount, and gas fees. Complex transactions (smart contract interactions) consume more gas. Blockchain explorers track all transactions.",
    category: "Basics",
    relatedTerms: ["Address", "Confirmation", "Gas Fees"],
  },
  {
    id: "volume",
    term: "Trading Volume",
    shortDefinition: "The total value of assets traded on an exchange or DEX during a given time period.",
    fullDefinition: "Higher volume indicates liquidity and reduced slippage. Volume spikes precede major price movements. Low-volume assets are risky - large trades cause extreme price impact.",
    category: "Trading",
    relatedTerms: ["Liquidity", "Market Cap", "DEX"],
  },
  {
    id: "wallet",
    term: "Cryptocurrency Wallet",
    shortDefinition: "A tool or service for storing, sending, and receiving cryptocurrencies.",
    fullDefinition: "Wallets can be software (MetaMask, Trust Wallet) or hardware (Ledger, Trezor). They store private keys and create transactions. Non-custodial wallets give you full control; custodial wallets are managed by third parties.",
    category: "Basics",
    relatedTerms: ["Private Key", "Hot Wallet", "Cold Wallet"],
  },
  {
    id: "web3",
    term: "Web3",
    shortDefinition: "The next iteration of the internet using blockchain and decentralization instead of centralized servers.",
    fullDefinition: "Web3 emphasizes user ownership of data and digital assets. Cryptocurrencies, NFTs, and DAOs are Web3 primitives. Web3 aims to replace platform monopolies with open protocols and user-controlled identities.",
    category: "Advanced",
    relatedTerms: ["Blockchain", "DApp", "Decentralization"],
  },
  {
    id: "whale",
    term: "Whale",
    shortDefinition: "A cryptocurrency holder or investor with such large positions that their trades significantly impact prices.",
    fullDefinition: "Whale movements are tracked by onchain analysts as indicators of market direction. Whale accumulation can precede bull runs; whale selling can trigger crashes. Whales can manipulate thin markets through large orders.",
    category: "Trading",
    relatedTerms: ["Market Manipulation", "Volume", "Holder"],
  },
  {
    id: "whitepaper",
    term: "Whitepaper",
    shortDefinition: "A technical document outlining a blockchain project's vision, technology, and economics.",
    fullDefinition: "Whitepapers provide detailed explanations of how protocols work, their innovation, and tokenomics. They're crucial for evaluating projects but often contain speculative claims. Reading whitepapers is essential due diligence before investing.",
    category: "Basics",
    relatedTerms: ["Protocol", "Token", "Governance"],
  },
  {
    id: "yield-farming",
    term: "Yield Farming",
    shortDefinition: "Earning rewards by providing liquidity or staking tokens in DeFi protocols.",
    fullDefinition: "Yield farmers deposit liquidity in DEXs or lend in protocols to earn fees and governance tokens. Yields can be high but involve risks like impermanent loss, smart contract bugs, and market volatility. Popular on Curve, Aave, and others.",
    category: "DeFi",
    relatedTerms: ["Liquidity Provider", "DeFi", "Staking"],
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function ClientContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const categories = Array.from(new Set(glossaryTerms.map((t) => t.category))).sort();

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Glossary', href: '/glossary' },
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">Crypto Glossary</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Your comprehensive guide to cryptocurrency and blockchain terminology. Learn essential concepts and industry jargon.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search glossary terms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                !selectedCategory
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex items-center gap-2 text-gray-400">
          <Hash className="w-5 h-5" />
          <span>
            Found <span className="font-semibold text-white">{filteredTerms.length}</span> of{' '}
            <span className="font-semibold text-white">{glossaryTerms.length}</span> terms
          </span>
        </div>

        {/* Glossary Terms */}
        <div className="space-y-3">
          {filteredTerms.map((term) => (
            <div
              key={term.id}
              className="bg-gray-800/50 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-colors"
            >
              <button
                onClick={() => toggleExpanded(term.id)}
                className="w-full text-left px-6 py-4 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{term.term}</h3>
                  <p className="text-gray-400 text-sm">{term.shortDefinition}</p>
                </div>
                <div className="flex items-center gap-3 ml-4 flex-shrink-0">
                  <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    {term.category}
                  </span>
                  {expanded[term.id] ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {/* Expanded Content */}
              {expanded[term.id] && (
                <div className="px-6 pb-4 border-t border-gray-700 pt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Full Definition</h4>
                    <p className="text-gray-400 leading-relaxed">{term.fullDefinition}</p>
                  </div>

                  {term.relatedTerms && term.relatedTerms.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-white mb-2">Related Terms</h4>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((relatedTerm) => (
                          <span
                            key={relatedTerm}
                            className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors cursor-pointer"
                          >
                            {relatedTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No terms match your search. Try different keywords or filters.</p>
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-400">
            This glossary is continuously updated with new terms and concepts. For more in-depth learning, explore our full documentation and guides.
          </p>
        </div>
      </div>
    </div>
  );
}
