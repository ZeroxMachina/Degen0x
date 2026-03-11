import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is DeFi (Decentralized Finance)? Guide (${CURRENT_YEAR})`,
  description:
    "Learn about DeFi — decentralized finance built on blockchain. Understand lending, DEXs, yield farming, stablecoins, risks, and how to get started with DeFi protocols.",
};

export default function WhatIsDefiPage() {
  return (
    <LearnPageLayout
      title="What Is DeFi (Decentralized Finance)?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="13 min"
      intro="Decentralized Finance, commonly known as DeFi, refers to a broad category of financial applications built on blockchain networks that operate without traditional intermediaries like banks, brokerages, or insurance companies. Instead, DeFi uses smart contracts to automate financial services such as lending, borrowing, trading, and insurance. By removing middlemen, DeFi aims to create a more open, transparent, and accessible financial system available to anyone with an internet connection."
      toc={[
        { id: "what-is-defi", title: "Understanding DeFi", level: 2 },
        { id: "core-protocols", title: "Core DeFi Protocol Types", level: 2 },
        { id: "yield-farming", title: "Yield Farming and Liquidity Mining", level: 2 },
        { id: "risks", title: "DeFi Risks", level: 2 },
        { id: "getting-started", title: "How to Get Started with DeFi", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between DeFi and traditional finance?",
          answer:
            "Traditional finance (TradFi) relies on centralized institutions like banks, brokerages, and regulators to facilitate and oversee financial transactions. DeFi replaces these intermediaries with smart contracts — self-executing code on a blockchain. DeFi is permissionless (anyone can participate), transparent (all code and transactions are public), composable (protocols can interact with each other), and operates 24/7 without holidays or business hours.",
        },
        {
          question: "Do I need a lot of money to use DeFi?",
          answer:
            "No. There is no minimum deposit for most DeFi protocols. However, transaction fees (gas costs) vary by network. On Ethereum mainnet, gas fees can make small transactions uneconomical. Layer 2 networks like Arbitrum, Optimism, and Base offer the same DeFi protocols with gas fees as low as a fraction of a cent, making DeFi accessible to everyone.",
        },
        {
          question: "What is Total Value Locked (TVL)?",
          answer:
            "TVL (Total Value Locked) measures the total amount of crypto assets deposited in a DeFi protocol. It is a commonly used metric to gauge the size and health of a protocol. Higher TVL generally indicates greater trust and adoption, though it should not be the sole factor in evaluating a protocol's safety or quality.",
        },
        {
          question: "Can I lose money in DeFi?",
          answer:
            "Yes. DeFi carries multiple risks including smart contract bugs, market volatility, impermanent loss from liquidity provision, liquidation risk for borrowers, and potential rug pulls or exploits. Only invest what you can afford to lose, use audited protocols with established track records, and diversify your positions across multiple platforms.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn Crypto" },
        { title: "What Are Stablecoins?", href: "/learn/what-are-stablecoins", category: "Learn Crypto" },
        { title: "Best DeFi Lending Protocols", href: "/defi-lending/best", category: "DeFi Lending" },
        { title: "What Is DeFi Lending?", href: "/defi-lending/learn/what-is-defi-lending", category: "DeFi Lending" },
        { title: "Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn Crypto" },
      ]}
    >
      <h2 id="what-is-defi">Understanding DeFi</h2>
      <p>
        DeFi recreates traditional financial services — lending, borrowing, trading, insurance, asset management — using open-source smart contracts deployed on public blockchains. Instead of trusting a bank to hold your deposits and set interest rates, a DeFi lending protocol uses algorithmic formulas to determine rates based on supply and demand, with all logic transparently encoded in auditable smart contract code.
      </p>
      <p>
        The key principles that distinguish DeFi from traditional finance are permissionlessness (no gatekeeper decides who can participate), non-custodial design (users maintain control of their own assets through their wallets), composability (protocols can interact and build on each other like building blocks), and transparency (all transactions and code are publicly verifiable on the blockchain).
      </p>
      <p>
        DeFi primarily lives on Ethereum and its Layer 2 networks, though it has expanded to other chains like Solana, Avalanche, and BNB Chain. The total value locked across DeFi protocols has grown from zero in 2019 to tens of billions of dollars, demonstrating rapid adoption despite the technology&apos;s relative youth.
      </p>

      <h2 id="core-protocols">Core DeFi Protocol Types</h2>
      <p>
        Decentralized exchanges (DEXs) like Uniswap, SushiSwap, and Curve allow users to trade cryptocurrencies directly from their wallets without a centralized intermediary. Most DEXs use an automated market maker (AMM) model, where liquidity providers deposit token pairs into pools and traders swap against these pools. Prices are determined algorithmically based on the ratio of tokens in the pool.
      </p>
      <p>
        Lending and borrowing protocols like Aave, Compound, and Spark enable users to deposit crypto assets to earn interest or borrow against their holdings. These protocols use over-collateralization — borrowers must deposit more collateral than they borrow — to manage risk. Interest rates adjust dynamically based on utilization, creating efficient money markets without bankers.
      </p>
      <p>
        Stablecoin protocols like MakerDAO create decentralized stablecoins (like DAI) that maintain a dollar peg through collateralization and algorithmic mechanisms. Derivative protocols allow trading of futures, options, and synthetic assets. Insurance protocols like Nexus Mutual provide smart contract cover against hacks and exploits. Each category addresses a specific financial need, collectively building a comprehensive parallel financial system.
      </p>

      <h2 id="yield-farming">Yield Farming and Liquidity Mining</h2>
      <p>
        Yield farming is the practice of moving crypto assets between different DeFi protocols to maximize returns. At its simplest, yield farming might involve depositing stablecoins into a lending protocol to earn interest. More complex strategies involve providing liquidity to DEXs, staking LP (liquidity provider) tokens in reward programs, and leveraging multiple protocols simultaneously.
      </p>
      <p>
        Liquidity mining is a specific form of yield farming where protocols distribute their native governance tokens to users who provide liquidity. This mechanism was popularized by Compound in 2020 and sparked the &quot;DeFi Summer&quot; boom. By rewarding early users with governance tokens, protocols bootstrap liquidity and distribute ownership to their community rather than venture capitalists.
      </p>
      <p>
        While yield farming can generate attractive returns, it comes with significant complexity and risk. Impermanent loss occurs when the price ratio of tokens in a liquidity pool changes, potentially resulting in less value than simply holding the tokens. Smart contract risk means that a bug or exploit in any protocol in your strategy could result in total loss of funds. Gas costs, transaction complexity, and the need for constant monitoring make yield farming more suitable for experienced users.
      </p>

      <h2 id="risks">DeFi Risks</h2>
      <p>
        Smart contract risk is the most fundamental DeFi risk. Despite audits and formal verification, bugs can exist in code that manages millions or billions in assets. History has shown that even well-known protocols can be exploited. The irreversibility of blockchain transactions means that once funds are stolen, recovery is extremely difficult.
      </p>
      <p>
        Oracle manipulation is another significant risk. DeFi protocols rely on price oracles (data feeds) to determine asset values for lending, liquidation, and trading. If an oracle is manipulated or provides incorrect data, it can trigger cascading liquidations or enable attackers to drain protocol funds. Leading protocols mitigate this by using decentralized oracle networks like Chainlink.
      </p>
      <p>
        Governance attacks occur when malicious actors acquire enough governance tokens to pass proposals that benefit themselves at the expense of other users. Economic exploits — flash loan attacks, sandwich attacks, and MEV (maximal extractable value) extraction — represent sophisticated attacks where attackers manipulate transaction ordering to profit. Regulatory risk also looms, as governments worldwide are developing frameworks that may restrict DeFi access or impose compliance requirements.
      </p>

      <h2 id="getting-started">How to Get Started with DeFi</h2>
      <p>
        To begin using DeFi, you need a Web3 wallet like MetaMask, Rabby, or Coinbase Wallet. Fund your wallet with ETH (or the native token of your chosen network) to pay for transaction fees, plus whatever assets you intend to use in DeFi protocols. For beginners, starting on a Layer 2 network like Base or Arbitrum is recommended because gas fees are minimal.
      </p>
      <p>
        Start with well-established protocols that have been audited multiple times and have operated without major incidents for years. Aave and Compound for lending, Uniswap for trading, and Lido for liquid staking are common entry points. Begin with small amounts to learn how transactions work, understand approval mechanisms, and get comfortable with the user interface before committing larger sums.
      </p>
      <p>
        Education is your best defense against risk. Learn to read a protocol&apos;s documentation, check audit reports, verify smart contract addresses against official sources, and never interact with unverified links. Use DeFi analytics tools like DeFiLlama to research protocol TVL, user counts, and historical performance. And always remember the golden rule: never invest more than you can afford to lose entirely.
      </p>
    </LearnPageLayout>
  );
}
