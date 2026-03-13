"use client";

export const dynamic = "force-dynamic";

import { useState, useMemo } from "react";
import { Metadata } from "next";
import { Search, BookOpen, ChevronDown, ChevronUp, Hash } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

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
    id: "arbitrage",
    term: "Arbitrage",
    shortDefinition: "Profiting from price differences of the same asset across different markets or exchanges.",
    fullDefinition: "Arbitrage exploits price discrepancies by buying an asset at a lower price in one market and selling it at a higher price in another. Flash loans have enabled sophisticated arbitrage strategies in DeFi, where traders execute complex multi-contract interactions atomically.",
    category: "Trading",
    relatedTerms: ["Flash Loan", "MEV", "DEX"],
  },
  {
    id: "bitcoin",
    term: "Bitcoin",
    shortDefinition: "The first and most well-known cryptocurrency, created in 2009 using a Proof-of-Work consensus mechanism.",
    fullDefinition: "Bitcoin is the pioneering blockchain-based digital currency that introduced the concept of decentralized, peer-to-peer electronic cash without a trusted intermediary. It uses Proof-of-Work consensus, has a fixed supply cap of 21 million BTC, and remains the most valuable cryptocurrency by market capitalization.",
    category: "Basics",
    relatedTerms: ["Blockchain", "Cryptocurrency", "Proof-of-Work"],
  },
  {
    id: "blockchain",
    term: "Blockchain",
    shortDefinition: "A distributed ledger of transactions maintained by multiple nodes, secured through cryptography and consensus mechanisms.",
    fullDefinition: "A blockchain is a decentralized database structured as a chain of blocks, each containing transaction data and a cryptographic reference to the previous block. Multiple nodes maintain identical copies, eliminating the need for a central authority while ensuring transparency and immutability.",
    category: "Basics",
    relatedTerms: ["Consensus", "Smart Contract", "Node"],
  },
  {
    id: "bridge",
    term: "Bridge",
    shortDefinition: "Protocol that enables transfer of assets between different blockchains or layer 2 solutions.",
    fullDefinition: "Blockchain bridges facilitate the movement of tokens and data between separate blockchains. They can be centralized (custodial) or decentralized (non-custodial), with varying trust assumptions and security models. Bridges are critical infrastructure for cross-chain liquidity and interoperability.",
    category: "L2",
    relatedTerms: ["Layer 2", "Interoperability", "Token"],
  },
  {
    id: "bull-market",
    term: "Bull Market",
    shortDefinition: "A prolonged period of rising prices and positive market sentiment.",
    fullDefinition: "A bull market is characterized by rising prices, increasing trading volume, and optimistic investor sentiment. In crypto, bull markets are often driven by adoption growth, regulatory clarity, or positive macroeconomic conditions. The opposite of a bear market.",
    category: "Trading",
    relatedTerms: ["Bear Market", "Volatility", "HODL"],
  },
  {
    id: "candlestick",
    term: "Candlestick",
    shortDefinition: "A chart format showing the open, close, high, and low prices for a specific time period.",
    fullDefinition: "Candlestick charts display price movements with 'bodies' showing opening and closing prices and 'wicks' showing the highest and lowest prices. Different candlestick patterns (hammers, dojis, engulfing) are used in technical analysis to predict price movements.",
    category: "Trading",
    relatedTerms: ["Technical Analysis", "Support & Resistance"],
  },
  {
    id: "cefi",
    term: "CeFi (Centralized Finance)",
    shortDefinition: "Traditional financial services offered through centralized companies like crypto exchanges and lending platforms.",
    fullDefinition: "CeFi encompasses centralized cryptocurrency platforms where users trust the platform with custody and operation of their funds. Examples include centralized exchanges (CEX), custody providers, and lending platforms. CeFi offers ease of use but requires counterparty risk.",
    category: "DeFi",
    relatedTerms: ["DeFi", "CEX", "Custody"],
  },
  {
    id: "cold-wallet",
    term: "Cold Wallet",
    shortDefinition: "A cryptocurrency wallet that is not connected to the internet, providing maximum security.",
    fullDefinition: "Cold wallets (hardware wallets or paper wallets) keep private keys offline, protecting them from hackers and malware. They are ideal for long-term storage of large amounts of crypto, though transactions require manual steps. Examples include Ledger and Trezor.",
    category: "Security",
    relatedTerms: ["Hot Wallet", "Private Key", "Hardware Wallet"],
  },
  {
    id: "consensus",
    term: "Consensus Mechanism",
    shortDefinition: "The process by which a blockchain network agrees on the current state of the ledger.",
    fullDefinition: "Consensus mechanisms ensure all nodes maintain an identical copy of the blockchain. Major types include Proof-of-Work (PoW), Proof-of-Stake (PoS), and hybrid models. They prevent double-spending and validate new transactions without requiring a trusted central authority.",
    category: "Basics",
    relatedTerms: ["Proof-of-Work", "Proof-of-Stake", "Mining"],
  },
  {
    id: "crypto-winter",
    term: "Crypto Winter",
    shortDefinition: "An extended period of bear market conditions with falling prices and reduced activity.",
    fullDefinition: "Crypto winter refers to prolonged bearish markets with declining prices, low trading volumes, and pessimistic sentiment. These periods, like 2018-2019 or 2022-2023, often follow speculative bubbles but can also present buying opportunities for long-term investors.",
    category: "Trading",
    relatedTerms: ["Bear Market", "Volatility"],
  },
  {
    id: "custody",
    term: "Custody",
    shortDefinition: "The safekeeping and management of cryptographic assets on behalf of users or institutions.",
    fullDefinition: "Custody services involve third parties holding and securing cryptocurrency assets. Custodians range from centralized exchanges to specialized institutional custody providers. Self-custody means you alone control your private keys, eliminating custodial counterparty risk.",
    category: "Security",
    relatedTerms: ["Cold Wallet", "Private Key", "Self-Custody"],
  },
  {
    id: "dao",
    term: "DAO (Decentralized Autonomous Organization)",
    shortDefinition: "An organization governed by smart contracts and token holders through decentralized voting.",
    fullDefinition: "DAOs use smart contracts to automate organizational decisions and governance. Token holders vote on proposals affecting the protocol's future. DAOs eliminate traditional hierarchies but introduce challenges around legal liability, security, and decision-making efficiency.",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "Governance Token", "Voting"],
  },
  {
    id: "defi",
    term: "DeFi (Decentralized Finance)",
    shortDefinition: "Financial services built on blockchains that operate without traditional intermediaries.",
    fullDefinition: "DeFi protocols provide financial services—lending, borrowing, trading, insurance—through smart contracts instead of banks or brokers. Users maintain self-custody while interacting with transparent, permissionless protocols. DeFi has grown to billions in total value locked.",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "Liquidity Pool", "Yield Farming"],
  },
  {
    id: "dex",
    term: "DEX (Decentralized Exchange)",
    shortDefinition: "A blockchain-based exchange enabling peer-to-peer token trading without intermediaries.",
    fullDefinition: "DEXs use smart contracts to facilitate token swaps directly from users' wallets. They operate through order books or AMMs, offer superior privacy compared to CEXs, and charge lower fees. Examples include Uniswap, SushiSwap, and Curve.",
    category: "DeFi",
    relatedTerms: ["AMM", "CEX", "Liquidity Pool"],
  },
  {
    id: "double-spending",
    term: "Double Spending",
    shortDefinition: "The risk of spending the same digital asset twice, prevented by blockchain consensus mechanisms.",
    fullDefinition: "Double spending occurs when a user attempts to transfer the same cryptocurrency twice. Blockchains prevent this through consensus mechanisms that create an immutable transaction order, making it computationally infeasible to reverse confirmed transactions.",
    category: "Basics",
    relatedTerms: ["Blockchain", "Consensus", "Transaction"],
  },
  {
    id: "erc-20",
    term: "ERC-20",
    shortDefinition: "The Ethereum standard for fungible tokens, defining the interface for token contracts.",
    fullDefinition: "ERC-20 is the technical standard for creating fungible tokens on Ethereum. It specifies functions like transfer, approve, and balance checking. The standard's simplicity enabled the 2017 ICO boom and remains the most widely adopted token standard.",
    category: "Basics",
    relatedTerms: ["Token", "Ethereum", "Smart Contract"],
  },
  {
    id: "erc-721",
    term: "ERC-721",
    shortDefinition: "The Ethereum standard for non-fungible tokens (NFTs), enabling unique digital assets.",
    fullDefinition: "ERC-721 defines the standard for non-fungible tokens on Ethereum, where each token has unique properties and cannot be directly replaced by another. This standard enabled the creation of collectibles, digital art, and gaming assets.",
    category: "NFT",
    relatedTerms: ["NFT", "Token", "Ethereum"],
  },
  {
    id: "ethereum",
    term: "Ethereum",
    shortDefinition: "The leading blockchain for smart contracts, enabling decentralized applications and protocols.",
    fullDefinition: "Ethereum is a programmable blockchain that enables smart contracts—self-executing code deployed on-chain. Originally using Proof-of-Work, it transitioned to Proof-of-Stake (The Merge, 2022). Ethereum's ecosystem hosts the majority of DeFi and NFT activity.",
    category: "Basics",
    relatedTerms: ["Smart Contract", "Proof-of-Stake", "Gas"],
  },
  {
    id: "flash-loan",
    term: "Flash Loan",
    shortDefinition: "Uncollateralized loans that must be repaid within the same blockchain transaction.",
    fullDefinition: "Flash loans enable borrowing large amounts without collateral, provided the loan is repaid atomically within the same transaction block. They've enabled advanced arbitrage and liquidation strategies but have also been exploited in reentrancy attacks.",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "Arbitrage", "MEV"],
  },
  {
    id: "fork",
    term: "Fork",
    shortDefinition: "A change to blockchain protocol rules that can be backward-compatible (soft fork) or require network upgrade (hard fork).",
    fullDefinition: "Forks modify protocol rules through code changes. Soft forks remain compatible with older node versions, while hard forks require all nodes to upgrade. Contentious hard forks can create separate blockchains (e.g., Bitcoin Cash from Bitcoin).",
    category: "Basics",
    relatedTerms: ["Consensus", "Protocol", "Node"],
  },
  {
    id: "gas",
    term: "Gas",
    shortDefinition: "The unit measuring computational work required to execute transactions on Ethereum.",
    fullDefinition: "Gas represents the cost of computation on Ethereum. Each operation (storage, arithmetic, etc.) consumes gas, paid in ETH. Total cost = gas used × gas price. High network congestion increases gas prices, making transactions expensive.",
    category: "Basics",
    relatedTerms: ["Ethereum", "Transaction Fee", "Network Congestion"],
  },
  {
    id: "gbtc",
    term: "GBTC",
    shortDefinition: "Grayscale Bitcoin Mini Trust, an investment product providing Bitcoin exposure without direct custody.",
    fullDefinition: "GBTC allows investors to gain Bitcoin exposure through a traditional brokerage account without managing private keys or cold storage. It trades like a stock and holds actual Bitcoin, though it often trades at a premium or discount to underlying Bitcoin value.",
    category: "Trading",
    relatedTerms: ["Bitcoin", "Spot ETF", "Custody"],
  },
  {
    id: "gwei",
    term: "Gwei",
    shortDefinition: "A unit of Ethereum equal to one billionth of an ETH, commonly used to express gas prices.",
    fullDefinition: "Gwei (gigawei) is a denomination of Ether: 1 ETH = 1 billion Gwei. When paying for transactions, gas prices are quoted in Gwei. Network congestion can push gas prices to 100+ Gwei during peak activity.",
    category: "Basics",
    relatedTerms: ["Gas", "Ethereum", "Wei"],
  },
  {
    id: "hardware-wallet",
    term: "Hardware Wallet",
    shortDefinition: "A physical device that securely stores private keys offline, protecting cryptocurrency from digital theft.",
    fullDefinition: "Hardware wallets like Ledger and Trezor are specialized computers that generate and store private keys in tamper-resistant environments. They remain offline, protecting keys from malware and hackers while allowing secure transaction signing.",
    category: "Security",
    relatedTerms: ["Cold Wallet", "Private Key", "Self-Custody"],
  },
  {
    id: "hodl",
    term: "HODL",
    shortDefinition: "A crypto investment strategy of holding assets long-term despite market volatility.",
    fullDefinition: "HODL (Hold On for Dear Life) is a meme-born philosophy endorsing long-term cryptocurrency holding rather than active trading. It reflects a belief in crypto's long-term potential and avoiding panic selling during bear markets. Originated from a 2013 forum post typo.",
    category: "Trading",
    relatedTerms: ["Bull Market", "Volatility", "Long-term Investment"],
  },
  {
    id: "hot-wallet",
    term: "Hot Wallet",
    shortDefinition: "An internet-connected cryptocurrency wallet optimized for frequent transactions and convenience.",
    fullDefinition: "Hot wallets are connected to the internet, enabling quick access and transactions but introducing security risks from malware and hacking. They're suitable for spending money but risky for storing large amounts. Examples include mobile and web wallets.",
    category: "Security",
    relatedTerms: ["Cold Wallet", "Private Key", "Self-Custody"],
  },
  {
    id: "ico",
    term: "ICO (Initial Coin Offering)",
    shortDefinition: "A fundraising method where projects sell new tokens to investors.",
    fullDefinition: "ICOs enabled projects to raise capital by selling newly created tokens to investors. The 2017 ICO boom generated billions in fundraising but also introduced scams and regulatory concerns. ICOs have largely been replaced by IEOs and other methods.",
    category: "Trading",
    relatedTerms: ["Token", "IDO", "Whitepaper"],
  },
  {
    id: "ido",
    term: "IDO (Initial DEX Offering)",
    shortDefinition: "A token launch where projects raise capital through decentralized exchanges.",
    fullDefinition: "IDOs allow projects to launch tokens directly on DEXs, providing instant liquidity and eliminating intermediaries. They enable fairer price discovery than ICOs but require careful due diligence as some are scams.",
    category: "Trading",
    relatedTerms: ["Token", "DEX", "Liquidity Pool"],
  },
  {
    id: "impermanent-loss",
    term: "Impermanent Loss",
    shortDefinition: "The loss that liquidity providers incur when deposited token prices diverge significantly.",
    fullDefinition: "Impermanent loss occurs when depositing equal-value tokens in an AMM and prices change. If one token appreciates significantly, LPs would have been better off holding separately. The loss is 'impermanent' because it reverses if prices return to the deposit ratio.",
    category: "DeFi",
    relatedTerms: ["Liquidity Provider", "AMM", "Slippage"],
  },
  {
    id: "kyc",
    term: "KYC (Know Your Customer)",
    shortDefinition: "Verification procedures that exchanges and platforms use to confirm user identity.",
    fullDefinition: "KYC requires users to verify their identity through documents and personal information. Exchanges use KYC to comply with anti-money laundering regulations. DeFi protocols generally avoid KYC to maintain user privacy, though exchanges and on/off ramps require it.",
    category: "Security",
    relatedTerms: ["AML", "Regulation", "Privacy"],
  },
  {
    id: "layer-2",
    term: "Layer 2",
    shortDefinition: "Scaling solutions that process transactions off the main blockchain, reducing costs and congestion.",
    fullDefinition: "Layer 2 solutions (Rollups, Sidechains, Payment Channels) execute transactions off-chain while periodically settling on Layer 1. They reduce fees and increase speed while inheriting security from the main chain. Popular examples include Arbitrum and Optimism on Ethereum.",
    category: "L2",
    relatedTerms: ["Rollup", "Sidechain", "Ethereum"],
  },
  {
    id: "leverage",
    term: "Leverage",
    shortDefinition: "Borrowing funds to amplify trading positions, increasing both potential gains and losses.",
    fullDefinition: "Leverage allows traders to control larger positions than their capital alone permits. A 10x leverage trader can lose their entire position with a 10% move against them. Leverage increases risk dramatically and is primarily used by experienced traders.",
    category: "Trading",
    relatedTerms: ["Margin Trading", "Liquidation", "Risk Management"],
  },
  {
    id: "liquidation",
    term: "Liquidation",
    shortDefinition: "Forced closure of leveraged positions when collateral falls below minimum requirements.",
    fullDefinition: "Liquidation occurs when a leveraged trader's position loses enough value that remaining collateral can't maintain the position. Automated smart contracts liquidate these positions to protect the protocol and other users from bad debt.",
    category: "Trading",
    relatedTerms: ["Leverage", "Margin Trading", "Collateral"],
  },
  {
    id: "liquidity-pool",
    term: "Liquidity Pool",
    shortDefinition: "A smart contract holding equal values of two tokens that enable trading through AMMs.",
    fullDefinition: "Liquidity pools are the core of AMM-based DEXs. Users deposit token pairs and earn fees from traders' swaps. Pool prices adjust automatically based on the pool's formula (e.g., x*y=k), creating slippage when executing large trades.",
    category: "DeFi",
    relatedTerms: ["AMM", "Liquidity Provider", "Impermanent Loss"],
  },
  {
    id: "liquidity-provider",
    term: "Liquidity Provider (LP)",
    shortDefinition: "Users who deposit tokens in liquidity pools and earn a portion of trading fees.",
    fullDefinition: "LPs provide capital to liquidity pools and receive LP tokens representing their ownership. They earn a percentage of every trade executed through the pool but face impermanent loss if token prices diverge. LPing is a primary DeFi yield strategy.",
    category: "DeFi",
    relatedTerms: ["Liquidity Pool", "Yield Farming", "Impermanent Loss"],
  },
  {
    id: "mev",
    term: "MEV (Maximal Extractable Value)",
    shortDefinition: "Profit extracted by reordering, inserting, or censoring transactions in blockchain blocks.",
    fullDefinition: "MEV occurs when nodes or validators profit by manipulating transaction order. Examples include front-running (executing before a pending transaction), sandwich attacks, and liquidations. High MEV creates unfairness and is a major concern in crypto.",
    category: "Advanced",
    relatedTerms: ["Front-Running", "Flash Loan", "Arbitrage"],
  },
  {
    id: "mining",
    term: "Mining",
    shortDefinition: "The process of validating transactions and creating new blocks by solving computational puzzles.",
    fullDefinition: "In Proof-of-Work blockchains, miners use computational power to solve cryptographic puzzles. The first to solve it earns block rewards and transaction fees. Mining secures the network but consumes significant electricity, especially for Bitcoin.",
    category: "Basics",
    relatedTerms: ["Proof-of-Work", "Validator", "Block Reward"],
  },
  {
    id: "multisig",
    term: "Multi-Signature (Multisig)",
    shortDefinition: "A wallet requiring multiple private key signatures to authorize transactions, improving security.",
    fullDefinition: "Multisig wallets require multiple private keys (e.g., 3 of 5) to approve transactions. This prevents single points of failure and is widely used by institutions, DAOs, and for securing high-value assets. Examples include Gnosis Safe.",
    category: "Security",
    relatedTerms: ["Private Key", "Wallet", "Self-Custody"],
  },
  {
    id: "nft",
    term: "NFT (Non-Fungible Token)",
    shortDefinition: "Unique digital assets representing ownership of specific items, art, or collectibles.",
    fullDefinition: "NFTs are blockchain-based tokens where each token is unique and not interchangeable (unlike fungible tokens). Built primarily on ERC-721 or ERC-1155, NFTs enable verifiable digital ownership of art, collectibles, gaming items, and more.",
    category: "NFT",
    relatedTerms: ["ERC-721", "Token", "Smart Contract"],
  },
  {
    id: "node",
    term: "Node",
    shortDefinition: "A computer maintaining a complete copy of the blockchain and validating transactions.",
    fullDefinition: "Nodes are network participants that download and validate the entire blockchain. Full nodes maintain the complete ledger and enforce consensus rules. Light nodes verify only relevant transactions. Running nodes supports network decentralization.",
    category: "Basics",
    relatedTerms: ["Blockchain", "Validator", "Consensus"],
  },
  {
    id: "oracle",
    term: "Oracle",
    shortDefinition: "An external data provider feeding real-world information into smart contracts.",
    fullDefinition: "Oracles bridge the gap between on-chain and off-chain data. Smart contracts need external data (price feeds, weather, sports results) to execute accurately. Oracles introduce a trust assumption and can be manipulated, creating security risks.",
    category: "DeFi",
    relatedTerms: ["Smart Contract", "Chainlink", "Data Feed"],
  },
  {
    id: "poa",
    term: "Proof-of-Authority (PoA)",
    shortDefinition: "A consensus mechanism where approved validators sign blocks, prioritizing speed over decentralization.",
    fullDefinition: "PoA relies on a set of approved validators to secure the network. It's faster and more energy-efficient than PoW or PoS but more centralized. PoA is used by some sidechains and testnets but lacks the security properties of fully decentralized mechanisms.",
    category: "Basics",
    relatedTerms: ["Consensus", "Validator", "Proof-of-Work"],
  },
  {
    id: "pos",
    term: "Proof-of-Stake (PoS)",
    shortDefinition: "A consensus mechanism where validators secure the network by staking their own tokens.",
    fullDefinition: "PoS selects validators to propose blocks based on their staked tokens. Validators earn rewards for honest participation but lose staked tokens if they misbehave. PoS is far more energy-efficient than PoW and is used by Ethereum 2.0, Solana, and others.",
    category: "Basics",
    relatedTerms: ["Validator", "Staking", "Consensus"],
  },
  {
    id: "pow",
    term: "Proof-of-Work (PoW)",
    shortDefinition: "A consensus mechanism where miners solve computational puzzles to validate transactions.",
    fullDefinition: "PoW secures networks through computational work. Miners compete to solve difficult puzzles, and the first successful miner adds the next block. PoW is secure but energy-intensive. Bitcoin and the original Ethereum used PoW.",
    category: "Basics",
    relatedTerms: ["Mining", "Consensus", "Hash"],
  },
  {
    id: "private-key",
    term: "Private Key",
    shortDefinition: "A secret cryptographic key that proves ownership of cryptocurrency and authorizes transactions.",
    fullDefinition: "Private keys are 256-bit numbers that generate public addresses and sign transactions. Anyone with a private key can spend associated funds, making their security critical. Private keys should never be shared or stored insecurely.",
    category: "Security",
    relatedTerms: ["Public Key", "Self-Custody", "Seed Phrase"],
  },
  {
    id: "public-key",
    term: "Public Key",
    shortDefinition: "A cryptographic key derived from a private key that creates a wallet address.",
    fullDefinition: "Public keys are mathematically derived from private keys and can be shared openly. They're used to generate wallet addresses where others can send funds. Public key cryptography enables non-interactive cryptocurrency transfers.",
    category: "Security",
    relatedTerms: ["Private Key", "Wallet Address", "Cryptography"],
  },
  {
    id: "restaking",
    term: "Restaking",
    shortDefinition: "Reusing staked tokens as collateral for additional protocols, multiplying risk and rewards.",
    fullDefinition: "Restaking (enabled by Ethereum liquid staking) allows staked tokens to secure multiple protocols simultaneously. Users earn rewards from multiple sources but face combined slashing risk if any protocol they validate for is compromised.",
    category: "Staking",
    relatedTerms: ["Staking", "Liquid Staking", "Validator"],
  },
  {
    id: "rollup",
    term: "Rollup",
    shortDefinition: "A Layer 2 solution that bundles hundreds of transactions off-chain, then posts compressed data on-chain.",
    fullDefinition: "Rollups execute transactions off-chain and periodically settle them on Layer 1. Optimistic rollups assume transactions are valid unless challenged, while zero-knowledge rollups use cryptographic proofs. Both reduce costs and congestion.",
    category: "L2",
    relatedTerms: ["Layer 2", "Optimism", "Arbitrum"],
  },
  {
    id: "seed-phrase",
    term: "Seed Phrase",
    shortDefinition: "A list of 12-24 words that can regenerate all cryptocurrency addresses and private keys in a wallet.",
    fullDefinition: "Seed phrases (mnemonic phrases) are human-readable representations of wallet backup information. If you lose access to a wallet, your seed phrase can restore all funds. Seed phrases must be stored securely, never digitally or online.",
    category: "Security",
    relatedTerms: ["Private Key", "Wallet", "Self-Custody"],
  },
  {
    id: "slippage",
    term: "Slippage",
    shortDefinition: "The difference between expected and actual transaction prices due to limited liquidity or price movement.",
    fullDefinition: "Slippage occurs when executing a trade changes the pool's price before the transaction completes. Larger trades cause more slippage. Traders set slippage tolerance limits to protect from excessive price movement.",
    category: "Trading",
    relatedTerms: ["Liquidity Pool", "AMM", "Price Impact"],
  },
  {
    id: "smart-contract",
    term: "Smart Contract",
    shortDefinition: "Self-executing code deployed on a blockchain that automatically enforces predefined conditions.",
    fullDefinition: "Smart contracts are programs stored on blockchains that execute automatically when conditions are met. They eliminate the need for intermediaries by encoding agreements in code. Smart contracts power DeFi, NFTs, and DAOs but can contain security vulnerabilities.",
    category: "Basics",
    relatedTerms: ["Blockchain", "Ethereum", "Solidity"],
  },
  {
    id: "stablecoin",
    term: "Stablecoin",
    shortDefinition: "A cryptocurrency designed to maintain a stable value, usually pegged to a fiat currency like USD.",
    fullDefinition: "Stablecoins minimize volatility by maintaining a fixed value (usually $1 USD). Types include fiat-backed (USDC, USDT), crypto-collateralized (DAI), and algorithmic models. Stablecoins enable DeFi but carry counterparty or technical risks.",
    category: "Basics",
    relatedTerms: ["Cryptocurrency", "DeFi", "Collateral"],
  },
  {
    id: "staking",
    term: "Staking",
    shortDefinition: "Locking cryptocurrency in a Proof-of-Stake protocol to earn rewards and validate transactions.",
    fullDefinition: "Staking involves depositing tokens in a PoS protocol to become a validator or earn staking rewards. Validators secure the network and earn rewards proportional to stake. Staking provides income but carries slashing risk if validators misbehave.",
    category: "Staking",
    relatedTerms: ["Proof-of-Stake", "Validator", "Reward"],
  },
  {
    id: "support-resistance",
    term: "Support & Resistance",
    shortDefinition: "Price levels where assets historically have difficulty moving below (support) or above (resistance).",
    fullDefinition: "Support is a price level where demand increases, preventing further decline. Resistance is where supply increases, preventing further appreciation. These levels, identified through technical analysis, guide trading decisions and risk management.",
    category: "Trading",
    relatedTerms: ["Technical Analysis", "Candlestick", "Trend"],
  },
  {
    id: "token",
    term: "Token",
    shortDefinition: "A digital asset representing value, ownership, or utility on a blockchain.",
    fullDefinition: "Tokens are blockchain-native assets created through smart contracts. They can represent currencies (stablecoins), equity (governance), utility, or collectibles (NFTs). Tokens enable permissionless creation of new assets and protocols.",
    category: "Basics",
    relatedTerms: ["Cryptocurrency", "Smart Contract", "ERC-20"],
  },
  {
    id: "total-value-locked",
    term: "Total Value Locked (TVL)",
    shortDefinition: "The total amount of cryptocurrency deposited in a DeFi protocol, used to measure protocol scale.",
    fullDefinition: "TVL measures the aggregate value of funds locked in DeFi protocols. It indicates user confidence and liquidity but doesn't account for double-counting (same assets counted in multiple protocols). TVL fluctuates with prices and user deposits.",
    category: "DeFi",
    relatedTerms: ["DeFi", "Liquidity", "Protocol"],
  },
  {
    id: "transaction",
    term: "Transaction",
    shortDefinition: "A transfer of cryptocurrency or smart contract interaction recorded on the blockchain.",
    fullDefinition: "Transactions are atomic operations that change blockchain state (transferring tokens, calling functions). Each transaction is signed with a private key, broadcast to the network, and permanently recorded. Transactions incur fees that incentivize network validation.",
    category: "Basics",
    relatedTerms: ["Blockchain", "Gas", "Private Key"],
  },
  {
    id: "validator",
    term: "Validator",
    shortDefinition: "A network participant who validates transactions and creates new blocks in Proof-of-Stake systems.",
    fullDefinition: "Validators run nodes and stake tokens to propose and validate new blocks in PoS networks. They earn rewards for honest participation but face slashing penalties for misbehavior. Validators secure the network and execute consensus rules.",
    category: "Basics",
    relatedTerms: ["Proof-of-Stake", "Node", "Staking"],
  },
  {
    id: "wallet",
    term: "Wallet",
    shortDefinition: "Software or hardware that stores private keys and enables cryptocurrency transactions.",
    fullDefinition: "Wallets generate and store private keys, create addresses, and sign transactions. Types include hot wallets (online, convenient), cold wallets (offline, secure), mobile wallets, and browser extensions. Self-custody wallets give users full control over funds.",
    category: "Security",
    relatedTerms: ["Private Key", "Self-Custody", "Hot Wallet"],
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

export const metadata: Metadata = {
  title: `Crypto Glossary - 50+ Essential Terms | ${SITE_NAME}`,
  description: "Comprehensive cryptocurrency glossary with 50+ terms from basic (Bitcoin, Blockchain) to advanced (MEV, Account Abstraction). Search, filter, and expand definitions.",
  keywords: [
    "crypto glossary",
    "cryptocurrency terms",
    "blockchain terminology",
    "DeFi glossary",
    "crypto definitions",
    "bitcoin glossary",
    "ethereum glossary",
  ],
  openGraph: {
    title: `Crypto Glossary - Essential Terms | ${SITE_NAME}`,
    description:
      "Learn cryptocurrency terminology with our comprehensive glossary. 50+ terms covering basics, DeFi, trading, and advanced topics.",
    type: "website",
  },
};

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTerms, setExpandedTerms] = useState<ExpandedState>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter and search logic
  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter((term) => {
      const matchesSearch =
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.shortDefinition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.fullDefinition.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = !selectedCategory || term.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Group terms alphabetically
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};

    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(term);
    });

    return groups;
  }, [filteredTerms]);

  // Get all available letters
  const availableLetters = Object.keys(groupedTerms).sort();
  const allCategories = Array.from(new Set(glossaryTerms.map((t) => t.category))).sort();

  // Toggle term expansion
  const toggleExpanded = (termId: string) => {
    setExpandedTerms((prev) => ({
      ...prev,
      [termId]: !prev[termId],
    }));
  };

  // Scroll to letter
  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get category color
  const getCategoryColor = (category: string): string => {
    const colors: { [key: string]: string } = {
      Basics: "bg-blue-900/30 text-blue-300 border border-blue-700",
      DeFi: "bg-purple-900/30 text-purple-300 border border-purple-700",
      Trading: "bg-green-900/30 text-green-300 border border-green-700",
      Security: "bg-red-900/30 text-red-300 border border-red-700",
      L2: "bg-amber-900/30 text-amber-300 border border-amber-700",
      NFT: "bg-pink-900/30 text-pink-300 border border-pink-700",
      Staking: "bg-indigo-900/30 text-indigo-300 border border-indigo-700",
      Advanced: "bg-cyan-900/30 text-cyan-300 border border-cyan-700",
    };
    return colors[category] || "bg-slate-700 text-slate-300";
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Glossary", href: "/glossary" },
          ]}
        />
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-4">
          <BookOpen className="h-8 w-8 text-indigo-400" />
          <h1 className="text-4xl sm:text-5xl font-bold text-[#e6edf3]">Crypto Glossary</h1>
        </div>
        <p className="text-lg text-[#8b949e] max-w-2xl">
          Your comprehensive guide to cryptocurrency terminology. From foundational concepts like blockchain and Bitcoin to advanced topics like MEV and restaking, understand the language of crypto.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-[#6e7681]" />
            <input
              type="text"
              placeholder="Search terms, definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#161b22] border border-[#30363d] rounded-lg text-[#e6edf3] placeholder-[#6e7681] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 pb-8 border-b border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#8b949e] mb-3 uppercase tracking-wide">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-indigo-600 text-white"
                  : "bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:border-[#6e7681]"
              }`}
            >
              All Categories
            </button>
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:border-[#6e7681]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Letter Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#161b22] rounded-lg border border-[#30363d] p-4">
              <h3 className="text-sm font-semibold text-[#e6edf3] mb-4 flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Jump to Letter
              </h3>
              <div className="grid grid-cols-4 lg:grid-cols-3 gap-2">
                {availableLetters.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => scrollToLetter(letter)}
                    className="h-8 w-8 rounded bg-[#0d1117] hover:bg-indigo-600 text-[#8b949e] hover:text-white text-sm font-semibold transition-colors"
                  >
                    {letter}
                  </button>
                ))}
              </div>
              <div className="mt-4 text-xs text-[#6e7681]">
                {filteredTerms.length} of {glossaryTerms.length} terms
              </div>
            </div>
          </div>

          {/* Terms List */}
          <div className="lg:col-span-3 space-y-8">
            {availableLetters.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#8b949e]">No terms found matching your search.</p>
              </div>
            ) : (
              availableLetters.map((letter) => (
                <div key={letter}>
                  <div
                    id={`letter-${letter}`}
                    className="flex items-center gap-4 mb-6 sticky top-0 bg-[#0d1117] py-2 z-10"
                  >
                    <div className="text-3xl font-bold text-indigo-400">{letter}</div>
                    <div className="flex-1 h-px bg-[#30363d]" />
                  </div>

                  <div className="space-y-4">
                    {groupedTerms[letter]!.map((term) => {
                      const isExpanded = expandedTerms[term.id] || false;

                      return (
                        <div
                          key={term.id}
                          className="bg-[#161b22] rounded-lg border border-[#30363d] hover:border-[#6e7681] transition-colors"
                        >
                          <button
                            onClick={() => toggleExpanded(term.id)}
                            className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-[#0d1117] transition-colors text-left"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="text-lg font-semibold text-[#e6edf3]">
                                  {term.term}
                                </h3>
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${getCategoryColor(term.category)}`}>
                                  {term.category}
                                </span>
                              </div>
                              <p className="text-[#8b949e] text-sm">{term.shortDefinition}</p>
                            </div>
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-1" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-[#6e7681] flex-shrink-0 mt-1" />
                            )}
                          </button>

                          {isExpanded && (
                            <div className="px-6 pb-4 border-t border-[#30363d] bg-[#0d1117]">
                              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                                {term.fullDefinition}
                              </p>
                              {term.relatedTerms && term.relatedTerms.length > 0 && (
                                <div>
                                  <p className="text-xs font-semibold text-[#8b949e] mb-2 uppercase tracking-wide">
                                    Related Terms:
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {term.relatedTerms.map((relatedTerm) => (
                                      <span
                                        key={relatedTerm}
                                        className="px-2 py-1 text-xs bg-[#161b22] text-[#8b949e] rounded border border-[#30363d]"
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
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://degen0x.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Glossary",
                  item: "https://degen0x.com/glossary",
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}
