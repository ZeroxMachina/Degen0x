import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Ethereum? Smart Contracts & Beyond (${CURRENT_YEAR})`,
  description:
    "Understand Ethereum, the programmable blockchain powering smart contracts, DeFi, NFTs, and more. Learn about ETH, the Merge, staking, and the Ethereum ecosystem.",
};

export default function WhatIsEthereumPage() {
  return (
    <LearnPageLayout
      title="What Is Ethereum? Smart Contracts & Beyond"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="Ethereum is a decentralized, open-source blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (dApps). While Bitcoin was designed primarily as digital money, Ethereum was created as a programmable blockchain — a global computer that anyone can use to build trustless applications. Ether (ETH) is the native cryptocurrency of the Ethereum network, used to pay for transactions and computation. This guide explains how Ethereum works, what makes it unique, and why it powers much of the crypto ecosystem."
      toc={[
        { id: "what-is-ethereum", title: "Ethereum Overview", level: 2 },
        { id: "smart-contracts", title: "Smart Contracts Explained", level: 2 },
        { id: "the-merge", title: "The Merge and Proof of Stake", level: 2 },
        { id: "ecosystem", title: "The Ethereum Ecosystem", level: 2 },
        { id: "eth-the-asset", title: "ETH as an Investment", level: 2 },
        { id: "layer-2", title: "Layer 2 Scaling Solutions", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between Ethereum and Bitcoin?",
          answer:
            "Bitcoin was designed primarily as digital money and a store of value. Ethereum was designed as a programmable blockchain that supports smart contracts and decentralized applications. While Bitcoin's scripting language is intentionally limited, Ethereum's virtual machine (EVM) is Turing-complete, meaning developers can build virtually any application on it. Both have their own native cryptocurrencies (BTC and ETH), but they serve different purposes.",
        },
        {
          question: "What are gas fees on Ethereum?",
          answer:
            "Gas fees are the transaction costs paid to validators for processing transactions and executing smart contracts on Ethereum. Gas is measured in gwei (a small denomination of ETH) and varies based on network demand. During periods of high activity, gas fees can spike significantly. Layer 2 solutions like Arbitrum, Optimism, and Base offer the same functionality with gas fees that are typically 10-100x cheaper.",
        },
        {
          question: "Is Ethereum inflationary or deflationary?",
          answer:
            "Since the implementation of EIP-1559, a portion of ETH transaction fees is burned (permanently removed from circulation). When network activity is high enough that the amount burned exceeds the amount issued through staking rewards, ETH becomes deflationary — meaning the total supply decreases over time. Whether ETH is net inflationary or deflationary at any given time depends on network usage levels.",
        },
        {
          question: "Can I stake my Ethereum?",
          answer:
            "Yes. Since the Merge in September 2022, Ethereum uses proof of stake. You can stake ETH by running your own validator (requires 32 ETH), using a staking pool or liquid staking service (no minimum), or through centralized platforms. Staking rewards currently yield approximately 3-5% APR, paid in ETH.",
        },
      ]}
      relatedArticles={[
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" },
        { title: "What Are NFTs?", href: "/learn/what-are-nfts", category: "Learn Crypto" },
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn Crypto" },
        { title: "What Is Web3?", href: "/learn/what-is-web3", category: "Learn Crypto" },
        { title: "Best Crypto Wallets", href: "/wallets/best", category: "Wallets" },
      ]}
    >
      <h2 id="what-is-ethereum">Ethereum Overview</h2>
      <p>
        Ethereum was proposed in late 2013 by programmer Vitalik Buterin and went live on July 30, 2015. Buterin recognized that blockchain technology could do far more than just process financial transactions — it could serve as a platform for running arbitrary code in a decentralized, trustless environment. The result was Ethereum, often described as a world computer.
      </p>
      <p>
        At its core, Ethereum is a state machine. Every transaction on the network can change the global state — updating account balances, deploying new smart contracts, or triggering contract functions. The Ethereum Virtual Machine (EVM) executes this code deterministically, meaning every node on the network processes the same instructions and arrives at the same result. This shared computation is what makes decentralized applications possible.
      </p>
      <p>
        Ether (ETH) is the native currency that powers the network. It is used to pay transaction fees (called gas), compensate validators who secure the network, and serve as collateral in DeFi protocols. ETH is the second-largest cryptocurrency by market capitalization and is traded on virtually every crypto exchange worldwide.
      </p>

      <h2 id="smart-contracts">Smart Contracts Explained</h2>
      <p>
        Smart contracts are the defining innovation of Ethereum. A smart contract is a program that lives on the blockchain at a specific address and automatically executes when its conditions are met. Once deployed, a smart contract cannot be changed (it is immutable), and its code and state are publicly visible for anyone to audit.
      </p>
      <p>
        Developers write smart contracts primarily in Solidity (a language created specifically for Ethereum) or Vyper. These contracts can hold funds, define complex logic, interact with other contracts, and respond to external triggers. For example, a lending smart contract might accept ETH deposits, calculate interest rates algorithmically, issue loans against collateral, and automatically liquidate positions that become undercollateralized.
      </p>
      <p>
        The composability of smart contracts is one of Ethereum&apos;s most powerful features. Contracts can call other contracts, creating building blocks that developers combine in novel ways. This composability has led to the explosive growth of DeFi, where lending protocols, decentralized exchanges, and derivative platforms interact seamlessly to create a rich financial ecosystem — all without intermediaries.
      </p>

      <h2 id="the-merge">The Merge and Proof of Stake</h2>
      <p>
        In September 2022, Ethereum completed the Merge, transitioning its consensus mechanism from proof of work (PoW) to proof of stake (PoS). This was one of the most significant upgrades in blockchain history, reducing Ethereum&apos;s energy consumption by approximately 99.95% while maintaining the same level of security.
      </p>
      <p>
        Under proof of stake, validators deposit (stake) 32 ETH as collateral and are randomly selected to propose and attest to new blocks. Validators who act honestly earn rewards in the form of newly issued ETH and transaction priority fees. Validators who attempt to cheat or go offline risk having their staked ETH slashed (partially or fully confiscated). This economic incentive structure aligns validator behavior with network security.
      </p>
      <p>
        The Merge also introduced EIP-1559&apos;s burn mechanism in full force. A base fee for each transaction is burned, permanently removing ETH from circulation. When the network is busy enough, more ETH is burned than is issued through staking rewards, making ETH deflationary. This dynamic gives ETH a monetary property that neither Bitcoin nor fiat currencies possess: supply that can shrink as the network grows in usage.
      </p>

      <h2 id="ecosystem">The Ethereum Ecosystem</h2>
      <p>
        The Ethereum ecosystem is vast and encompasses thousands of projects across numerous categories. Decentralized finance (DeFi) protocols like Aave, Uniswap, and MakerDAO manage billions in assets, providing lending, trading, and stablecoin services without centralized intermediaries. NFT marketplaces like OpenSea and Blur facilitate the trading of digital collectibles, art, and gaming assets.
      </p>
      <p>
        Decentralized Autonomous Organizations (DAOs) use Ethereum to coordinate governance and treasury management for communities ranging from investment clubs to protocol governance bodies. Identity solutions like Ethereum Name Service (ENS) give users human-readable addresses (like yourname.eth) that work across the ecosystem.
      </p>
      <p>
        The developer community around Ethereum is the largest in all of crypto. Extensive tooling, documentation, and educational resources make it the most accessible platform for building decentralized applications. Major enterprise partners, including financial institutions and technology companies, are building on Ethereum, further validating its position as the foundational smart contract platform.
      </p>

      <h2 id="eth-the-asset">ETH as an Investment</h2>
      <p>
        ETH functions as both a utility token (needed to use the Ethereum network) and an investment asset. Its value is driven by demand for block space on Ethereum — as more people and applications use the network, more ETH is needed for gas fees, and more ETH is burned. This creates a fundamental link between network usage and the value of the asset.
      </p>
      <p>
        Staking provides a yield on ETH holdings, currently earning approximately 3-5% annually. Liquid staking protocols like Lido allow users to stake their ETH and receive a tradable receipt token (stETH), maintaining liquidity while earning rewards. This has made staking accessible to anyone, regardless of the 32 ETH minimum required for solo validation.
      </p>
      <p>
        Like all crypto assets, ETH is volatile and carries investment risk. However, its combination of utility, yield, and potential deflationary supply has made it a core holding for many crypto investors. Spot Ethereum ETFs have been approved in the United States, providing traditional investors with regulated exposure to the asset.
      </p>

      <h2 id="layer-2">Layer 2 Scaling Solutions</h2>
      <p>
        Layer 2 (L2) scaling solutions are separate blockchains that extend Ethereum by processing transactions off the main chain while inheriting its security guarantees. They address Ethereum&apos;s primary limitation: the base layer can process only about 15-30 transactions per second, which leads to high gas fees during periods of heavy demand.
      </p>
      <p>
        Optimistic rollups (Arbitrum, Optimism, Base) bundle hundreds of transactions together and post compressed data to Ethereum. They assume transactions are valid unless challenged within a dispute window. Zero-knowledge rollups (zkSync, StarkNet, Scroll) use cryptographic proofs to mathematically verify the validity of batched transactions, offering faster finality and potentially greater long-term scalability.
      </p>
      <p>
        For end users, Layer 2s feel almost identical to using Ethereum directly — the same wallets, tokens, and applications work — but transactions cost a fraction of a cent instead of several dollars. The Ethereum roadmap envisions a future where the base layer serves primarily as a secure data availability layer, with most user activity happening on Layer 2 networks that can collectively process thousands of transactions per second.
      </p>
    </LearnPageLayout>
  );
}
