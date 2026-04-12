'use client';

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  related?: string[];
}

const GLOSSARY: GlossaryTerm[] = [
  { term: "51% Attack", definition: "When a single entity controls more than 50% of a blockchain's mining or staking power, potentially enabling double-spending or transaction censorship.", category: "Security", related: ["Proof of Work", "Consensus"] },
  { term: "Account Abstraction", definition: "A concept (ERC-4337) that turns user wallets into smart contracts, enabling features like social recovery, gas sponsorship, and batched transactions.", category: "Ethereum", related: ["Smart Contract", "Gas"] },
  { term: "Airdrop", definition: "Free distribution of tokens to wallet addresses, often used as a marketing strategy or to reward early adopters and community members.", category: "Tokens" },
  { term: "AMM", definition: "Automated Market Maker — an algorithm that prices assets in decentralized liquidity pools using mathematical formulas (e.g., x*y=k) instead of order books.", category: "DeFi", related: ["Liquidity Pool", "DEX"] },
  { term: "APY", definition: "Annual Percentage Yield — the annualized rate of return on an investment, accounting for compound interest. Common metric in DeFi and staking.", category: "DeFi", related: ["Staking", "Yield Farming"] },
  { term: "Beacon Chain", definition: "The Proof of Stake coordination layer of Ethereum, launched December 2020. Manages validators and was merged with the execution layer in September 2022.", category: "Ethereum" },
  { term: "Block", definition: "A batch of transactions confirmed and recorded on a blockchain. Each block references the previous block, forming a chain.", category: "Blockchain" },
  { term: "Block Explorer", definition: "A tool to browse blockchain data — view transactions, wallet balances, smart contracts, and block details. Examples: Etherscan, Solscan.", category: "Tools" },
  { term: "Bridge", definition: "A protocol that enables the transfer of assets and data between different blockchains by locking assets on one chain and minting equivalents on another.", category: "Infrastructure", related: ["Layer 2", "Cross-chain"] },
  { term: "Burn", definition: "Permanently removing tokens from circulation by sending them to an inaccessible address. Used to reduce supply and potentially increase value.", category: "Tokens" },
  { term: "CEX", definition: "Centralized Exchange — a crypto trading platform operated by a company that acts as an intermediary. Examples: Coinbase, Binance, Kraken.", category: "Trading", related: ["DEX"] },
  { term: "Cold Wallet", definition: "A cryptocurrency wallet not connected to the internet, providing maximum security. Hardware wallets like Ledger and Trezor are common examples.", category: "Wallets", related: ["Hot Wallet", "Seed Phrase"] },
  { term: "Consensus", definition: "The mechanism by which a blockchain network agrees on the current state of the ledger. Examples include Proof of Work and Proof of Stake.", category: "Blockchain", related: ["Proof of Work", "Proof of Stake"] },
  { term: "Cross-chain", definition: "Technology enabling interoperability between different blockchains, allowing assets and data to move between networks.", category: "Infrastructure" },
  { term: "DAO", definition: "Decentralized Autonomous Organization — a community-governed entity where decisions are made through token holder voting and executed via smart contracts.", category: "Governance" },
  { term: "DApp", definition: "Decentralized Application — an application built on blockchain that operates without centralized control, using smart contracts for backend logic.", category: "Blockchain" },
  { term: "DeFi", definition: "Decentralized Finance — financial services (lending, borrowing, trading, insurance) built on blockchain without traditional intermediaries like banks.", category: "DeFi" },
  { term: "DEX", definition: "Decentralized Exchange — a peer-to-peer trading platform via smart contracts without a central authority. Examples: Uniswap, Curve, Jupiter.", category: "DeFi", related: ["AMM", "CEX"] },
  { term: "Diamond Hands", definition: "Crypto slang for holding a position despite significant losses or volatility. The opposite of Paper Hands.", category: "Culture" },
  { term: "EIP", definition: "Ethereum Improvement Proposal — a design document describing new features, processes, or standards for Ethereum.", category: "Ethereum" },
  { term: "ERC-20", definition: "The standard interface for fungible tokens on Ethereum. Defines functions like transfer, balance, and approval.", category: "Ethereum", related: ["ERC-721"] },
  { term: "ERC-721", definition: "The standard interface for non-fungible tokens (NFTs) on Ethereum. Each token has a unique ID representing distinct digital assets.", category: "Ethereum", related: ["NFT", "ERC-20"] },
  { term: "Flash Loan", definition: "An uncollateralized loan that must be borrowed and repaid within a single blockchain transaction. Used for arbitrage and collateral swaps.", category: "DeFi" },
  { term: "Fork", definition: "A change to a blockchain protocol. A hard fork creates a new chain (like BTC to BCH), while a soft fork is backward-compatible.", category: "Blockchain" },
  { term: "Gas", definition: "The unit measuring computational effort on Ethereum. Gas fees are paid in ETH to validators. Fees fluctuate with network demand.", category: "Ethereum", related: ["Gwei"] },
  { term: "Governance Token", definition: "A token that grants holders voting rights on protocol decisions, such as fee structures, upgrades, and treasury allocation.", category: "Governance", related: ["DAO"] },
  { term: "Gwei", definition: "A denomination of ETH used for gas prices. 1 Gwei = 0.000000001 ETH (1 billionth of an ETH).", category: "Ethereum", related: ["Gas"] },
  { term: "Halving", definition: "An event (approximately every 4 years) that cuts Bitcoin block reward in half, reducing the rate of new BTC creation.", category: "Bitcoin" },
  { term: "Hash Rate", definition: "The total computational power used to mine and process transactions on a Proof of Work blockchain.", category: "Mining" },
  { term: "HODL", definition: "Crypto slang originating from a misspelling of hold. It means to hold your crypto assets long-term regardless of market volatility.", category: "Culture" },
  { term: "Hot Wallet", definition: "A cryptocurrency wallet connected to the internet for convenient access. Browser extensions and mobile apps are hot wallets.", category: "Wallets", related: ["Cold Wallet"] },
  { term: "Impermanent Loss", definition: "The unrealized loss experienced by liquidity providers when the price ratio of pooled tokens changes vs simply holding them.", category: "DeFi", related: ["AMM", "Liquidity Pool"] },
  { term: "KYC", definition: "Know Your Customer — identity verification required by regulated exchanges. Typically involves submitting ID documents and proof of address.", category: "Regulation" },
  { term: "Layer 1", definition: "The base blockchain network (e.g., Ethereum, Solana, Bitcoin). Processes and finalizes transactions on its own consensus mechanism.", category: "Infrastructure", related: ["Layer 2"] },
  { term: "Layer 2", definition: "A scaling solution built on top of Layer 1 that processes transactions off-chain while inheriting the security of the base layer.", category: "Infrastructure", related: ["Layer 1", "Rollup"] },
  { term: "Liquidity Pool", definition: "A collection of tokens locked in a smart contract used to facilitate decentralized trading, lending, and other DeFi functions.", category: "DeFi", related: ["AMM", "Impermanent Loss"] },
  { term: "MEV", definition: "Maximal Extractable Value — profit that validators or searchers can make by reordering, inserting, or censoring transactions within a block.", category: "Ethereum" },
  { term: "Minting", definition: "The process of creating new tokens or NFTs on a blockchain by recording them in a smart contract.", category: "Tokens" },
  { term: "NFT", definition: "Non-Fungible Token — a unique digital asset on blockchain representing ownership of items like art, music, collectibles, or in-game items.", category: "NFTs", related: ["ERC-721"] },
  { term: "Node", definition: "A computer that maintains a copy of the blockchain and participates in validating and relaying transactions across the network.", category: "Infrastructure" },
  { term: "Oracle", definition: "A service providing real-world data to smart contracts. Chainlink is the most widely used oracle network.", category: "Infrastructure" },
  { term: "Private Key", definition: "A secret cryptographic key that proves ownership of a wallet and allows signing transactions. Must be kept secret.", category: "Security", related: ["Seed Phrase"] },
  { term: "Proof of Stake", definition: "A consensus mechanism where validators stake tokens as collateral to secure the network and earn rewards.", category: "Blockchain", related: ["Staking", "Proof of Work"] },
  { term: "Proof of Work", definition: "A consensus mechanism where miners solve complex mathematical puzzles to validate transactions and create new blocks.", category: "Blockchain", related: ["Mining", "Proof of Stake"] },
  { term: "Rollup", definition: "A Layer 2 scaling solution that bundles many transactions off-chain and posts compressed data to the base layer.", category: "Scaling", related: ["Layer 2"] },
  { term: "Rug Pull", definition: "A scam where developers create a token, inflate its price, then drain the liquidity pool — leaving investors with worthless tokens.", category: "Security" },
  { term: "Seed Phrase", definition: "A 12 or 24-word recovery phrase that can restore a cryptocurrency wallet. Represents the master key to all assets in the wallet.", category: "Security", related: ["Private Key", "Cold Wallet"] },
  { term: "Slashing", definition: "A penalty in Proof of Stake systems that destroys a portion of a validator staked tokens for malicious behavior or downtime.", category: "Staking", related: ["Proof of Stake"] },
  { term: "Slippage", definition: "The difference between a trade expected price and the actual execution price. Common in DEX trading for large orders.", category: "Trading" },
  { term: "Smart Contract", definition: "Self-executing code deployed on a blockchain that automatically enforces the terms of an agreement when conditions are met.", category: "Blockchain" },
  { term: "Stablecoin", definition: "A cryptocurrency designed to maintain a stable value by being pegged to an asset like USD. Examples: USDC, USDT, DAI.", category: "Tokens" },
  { term: "Staking", definition: "Locking cryptocurrency in a Proof of Stake network to help validate transactions and secure the network, earning rewards in return.", category: "Staking", related: ["Proof of Stake", "APY"] },
  { term: "TVL", definition: "Total Value Locked — the total value of crypto assets deposited in a DeFi protocol. A key metric for measuring protocol adoption.", category: "DeFi" },
  { term: "Validator", definition: "A node operator in a Proof of Stake network that proposes and attests to new blocks. Validators stake tokens as collateral.", category: "Staking" },
  { term: "WAGMI", definition: "We Are Going to Make It — a popular rallying cry in the crypto community expressing optimism and shared belief in future success.", category: "Culture" },
  { term: "Whale", definition: "An individual or entity holding a very large amount of cryptocurrency, capable of influencing market prices with their trades.", category: "Trading" },
  { term: "Wrapped Token", definition: "A token pegged 1:1 to another token from a different blockchain. Example: WBTC is BTC represented as an ERC-20 token on Ethereum.", category: "Tokens", related: ["Bridge"] },
  { term: "Yield Farming", definition: "Deploying crypto across DeFi protocols to maximize returns through trading fees, governance token rewards, and interest.", category: "DeFi", related: ["APY", "Liquidity Pool"] },
  { term: "Zero Knowledge Proof", definition: "A cryptographic method that proves a statement is true without revealing the underlying data. Used in ZK-rollups for scalable transactions.", category: "Cryptography", related: ["Rollup"] },
];

const CATEGORIES = Array.from(new Set(GLOSSARY.map(g => g.category))).sort();
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("").filter(c => /[A-Z0-9]/.test(c));

export default function GlossaryPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return GLOSSARY.filter(item => {
      const matchesSearch = !search || item.term.toLowerCase().includes(search.toLowerCase()) || item.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const grouped = useMemo(() => {
    const map: Record<string, GlossaryTerm[]> = {};
    for (const item of filtered) {
      const letter = /[A-Z]/.test(item.term[0].toUpperCase()) ? item.term[0].toUpperCase() : "#";
      if (!map[letter]) map[letter] = [];
      map[letter].push(item);
    }
    return map;
  }, [filtered]);

  return (
    <>
      <Breadcrumb items={[
        { label: "Home", href: "/" },
        { label: "Learn", href: "/learn" },
        { label: "Glossary" },
      ]} />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Crypto Glossary</h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {GLOSSARY.length} essential crypto terms explained in plain English. From blockchain basics to advanced DeFi concepts.
          </p>
        </div>

        <div className="glass p-4 rounded-2xl mb-6">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-3 rounded-xl bg-[var(--glass-bg)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] text-lg"
            placeholder="Search terms..."
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${!selectedCategory ? "bg-[var(--color-accent)] text-[var(--color-text)]" : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"}`}
          >
            All ({GLOSSARY.length})
          </button>
          {CATEGORIES.map(cat => {
            const count = GLOSSARY.filter(g => g.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedCategory === cat ? "bg-[var(--color-accent)] text-[var(--color-text)]" : "glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"}`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-1 mb-8 justify-center">
          {LETTERS.filter(l => /[A-Z]/.test(l)).map(letter => (
            <a
              key={letter}
              className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold transition-all ${grouped[letter] ? "glass text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text)] cursor-pointer" : "text-[var(--color-text-secondary)]/30 cursor-default"}`}
            >
              {letter}
            </a>
          ))}
        </div>

        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Showing {filtered.length} of {GLOSSARY.length} terms</p>

        <div className="space-y-8">
          {Object.keys(grouped).sort().map(letter => (
            <div key={letter} id={`letter-${letter}`}>
              <div className="sticky top-16 z-10 py-2 mb-3">
                <span className="text-2xl font-bold text-[var(--color-accent)]">{letter}</span>
              </div>
              <div className="space-y-3">
                {grouped[letter].map(item => (
                  <div key={item.term} className="glass p-5 rounded-xl">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold text-[var(--color-text)]">{item.term}</h3>
                      <span className="text-xs px-2 py-1 rounded-full glass text-[var(--color-text-secondary)] flex-shrink-0">{item.category}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.definition}</p>
                    {item.related && item.related.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        <span className="text-xs text-[var(--color-text-secondary)]">Related:</span>
                        {item.related.map(r => (
                          <button key={r} onClick={() => setSearch(r)} className="text-xs text-[var(--color-accent)] hover:underline">{r}</button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">&#x1F50D;</div>
            <p className="text-[var(--color-text-secondary)]">No terms found. Try a different search.</p>
          </div>
        )}
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Glossary",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/glossary"
            })
          }}
        />
      </div>
    </>
  );
}
