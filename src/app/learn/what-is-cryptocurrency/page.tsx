import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Cryptocurrency? A Complete Guide (${CURRENT_YEAR})`,
  description:
    "Learn what cryptocurrency is, how it works, the different types of crypto, and why digital currencies are transforming finance. A comprehensive guide for beginners and beyond.",
};

export default function WhatIsCryptocurrencyPage() {
  return (
    <LearnPageLayout
      title="What Is Cryptocurrency? A Complete Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="14 min"
      intro="Cryptocurrency is a form of digital or virtual currency that uses cryptography for security and operates on decentralized networks, typically built on blockchain technology. Unlike traditional currencies issued by governments (fiat money), cryptocurrencies are not controlled by any single entity. This guide explains what cryptocurrency is, how it works, the major types, and how it fits into the broader financial landscape."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-cryptocurrency", title: "What Is Cryptocurrency?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-cryptocurrency-works", title: "How Cryptocurrency Works", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-cryptocurrency", title: "Types of Cryptocurrency", level: 2 },
        { id: "buying-and-storing", title: "buying-and-storing", level: 2 },
        { id: "buying-and-storing-crypto", title: "Buying and Storing Crypto", level: 2 },
        { id: "benefits-and-risks", title: "benefits-and-risks", level: 2 },
        { id: "benefits-and-risks", title: "Benefits and Risks", level: 2 },
        { id: "future", title: "future", level: 2 },
        { id: "the-future-of-cryptocurrency", title: "The Future of Cryptocurrency", level: 2 }
      ]}
      faqs={[
        {
          question: "Is cryptocurrency real money?",
          answer:
            "Cryptocurrency is a form of digital money that can be used to transfer value, make purchases, and store wealth. While it is not issued by a government, it has real economic value determined by supply and demand on open markets. Many businesses now accept cryptocurrency as payment, and some countries have adopted Bitcoin as legal tender.",
        },
        {
          question: "Is cryptocurrency safe to invest in?",
          answer:
            "Cryptocurrency markets are highly volatile and carry significant risk. Prices can swing dramatically in short periods. However, many investors include crypto as a small allocation in a diversified portfolio. The key is to only invest what you can afford to lose, use reputable exchanges and wallets, and take the time to understand what you are buying.",
        },
        {
          question: "How many cryptocurrencies exist?",
          answer:
            "There are thousands of cryptocurrencies in existence, though only a few hundred have significant market capitalization and active development. Bitcoin and Ethereum are the two largest by market cap. New tokens and coins are created regularly, but many fail or become inactive over time.",
        },
        {
          question: "Do I need to buy a whole Bitcoin?",
          answer:
            "No. Bitcoin and most other cryptocurrencies are divisible into very small units. You can buy a fraction of a Bitcoin — the smallest unit is called a satoshi, which is one hundred millionth of a Bitcoin. Most exchanges allow you to invest with as little as $1.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Blockchain Technology?", href: "/learn/what-is-blockchain", category: "Learn Crypto" },
        { title: "What Is Bitcoin?", href: "/learn/what-is-bitcoin", category: "Learn Crypto" },
        { title: "Crypto for Complete Beginners", href: "/learn/crypto-for-beginners", category: "Learn Crypto" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
        { title: "How to DYOR", href: "/learn/how-to-dyor", category: "Learn Crypto" },
      ]}
    >
      <h2 id="definition">What Is Cryptocurrency?</h2>
      <p>
        At its core, cryptocurrency is digital money designed to work over the internet. The word itself combines &quot;crypto&quot; (referring to cryptographic techniques that secure transactions) and &quot;currency&quot; (a medium of exchange). Unlike the dollars or euros in your bank account, cryptocurrencies are not issued or backed by any central authority such as a government or central bank.
      </p>
      <p>
        Instead, cryptocurrencies rely on decentralized networks of computers to verify and record transactions on a shared public ledger called a blockchain. This means no single entity has the power to manipulate the supply, freeze accounts, or reverse transactions. The rules governing how a cryptocurrency operates are defined by its underlying software protocol, which is open-source and transparent for anyone to inspect.
      </p>
      <p>
        Bitcoin, created in 2009 by the pseudonymous Satoshi Nakamoto, was the first cryptocurrency and remains the largest by market capitalization. Since then, thousands of alternative cryptocurrencies (often called altcoins) have been created, each with different features, use cases, and underlying technologies. Some focus on payments, others on programmable smart contracts, privacy, or specialized applications.
      </p>

      <h2 id="how-it-works">How Cryptocurrency Works</h2>
      <p>
        Cryptocurrency transactions work through a combination of public-key cryptography and distributed consensus mechanisms. Every user has a pair of cryptographic keys: a public key (which acts like an address that anyone can send funds to) and a private key (a secret code that proves ownership and authorizes spending). When you send cryptocurrency, you create a transaction signed with your private key, which the network can verify using your public key without ever revealing the private key itself.
      </p>
      <p>
        Once a transaction is broadcast to the network, it enters a pool of unconfirmed transactions. Validators (called miners in proof-of-work systems or stakers in proof-of-stake systems) group these transactions into blocks and add them to the blockchain. Each block is cryptographically linked to the previous one, creating an immutable chain of records. This structure makes it virtually impossible to alter past transactions without re-doing all subsequent computational work.
      </p>
      <p>
        The consensus mechanism is what allows thousands of independent computers to agree on the state of the ledger without trusting each other. Bitcoin uses proof of work, where miners expend computational energy to solve complex puzzles. Ethereum transitioned to proof of stake, where validators lock up ETH as collateral and are chosen to propose blocks based on their stake. Both approaches achieve the same goal: a secure, trustless agreement on which transactions are valid.
      </p>

      <h2 id="types">Types of Cryptocurrency</h2>
      <p>
        Cryptocurrencies can be broadly categorized into several groups. Payment coins like Bitcoin and Litecoin are designed primarily as digital money for transferring value. Platform tokens like Ethereum (ETH) and Solana (SOL) power programmable blockchains that support smart contracts and decentralized applications. These platforms enable developers to build everything from lending protocols to games on top of them.
      </p>
      <p>
        Stablecoins such as USDC, USDT, and DAI are pegged to the value of traditional assets (usually the US dollar) and serve as a bridge between crypto and fiat. They provide price stability that other cryptocurrencies lack, making them popular for trading, payments, and earning yield. Privacy coins like Monero and Zcash add enhanced privacy features that make transactions difficult to trace.
      </p>
      <p>
        Governance tokens grant holders voting rights in decentralized protocols and DAOs (Decentralized Autonomous Organizations). Utility tokens provide access to specific services or features within an ecosystem. Meme coins, such as Dogecoin and Shiba Inu, originated as jokes or community experiments but have grown into significant market-cap assets. Understanding these categories helps you evaluate projects based on their intended purpose and value proposition.
      </p>

      <h2 id="buying-and-storing">Buying and Storing Crypto</h2>
      <p>
        The most common way to acquire cryptocurrency is through a centralized exchange like Coinbase, Kraken, or Binance. These platforms let you deposit fiat currency via bank transfer or credit card, then buy crypto at current market prices. After purchasing, you can leave your crypto on the exchange (custodial storage) or transfer it to a personal wallet for self-custody.
      </p>
      <p>
        Wallets come in two main categories. Hot wallets are software applications (mobile apps, browser extensions, or desktop programs) that stay connected to the internet and are convenient for frequent transactions. Cold wallets are hardware devices (like Ledger or Trezor) that store your private keys offline, providing the highest level of security against remote hacking. For long-term holdings, a hardware wallet is widely recommended.
      </p>
      <p>
        The golden rule of crypto storage is: whoever holds the private keys controls the funds. If you leave your crypto on an exchange, you are trusting that company to safeguard your assets. History has shown that exchanges can be hacked, mismanaged, or become insolvent. Self-custody gives you full control, but it also means you are solely responsible for keeping your keys safe. Losing your private key or seed phrase means losing access to your funds permanently.
      </p>

      <h2 id="benefits-and-risks">Benefits and Risks</h2>
      <p>
        Cryptocurrency offers several compelling advantages. Borderless transfers allow you to send value to anyone in the world within minutes, regardless of banking hours or international boundaries. Permissionless access means anyone with an internet connection can participate — no bank account, credit check, or identity verification required for basic usage. Transparency ensures that all transactions are publicly auditable on the blockchain.
      </p>
      <p>
        Programmability (enabled by smart contracts) allows money to follow rules automatically, unlocking innovations like decentralized lending, automated market makers, and self-executing insurance policies. Scarcity (Bitcoin's fixed supply of 21 million, for example) provides a hedge against the inflationary tendencies of fiat currencies.
      </p>
      <p>
        However, the risks are equally significant. Price volatility can result in substantial losses in short periods. Regulatory uncertainty means rules can change suddenly, affecting the legality, taxation, or availability of certain assets. Irreversible transactions mean mistakes cannot be undone. Scams, hacks, and exploits remain prevalent in the ecosystem. And the learning curve for safely managing your own cryptographic keys is steep for newcomers.
      </p>

      <h2 id="future">The Future of Cryptocurrency</h2>
      <p>
        Cryptocurrency continues to mature as an asset class and technology. Institutional adoption is growing, with major financial firms offering crypto investment products, including spot Bitcoin ETFs approved in the United States. Central bank digital currencies (CBDCs) are being explored by governments worldwide, signaling that the technology behind crypto is being taken seriously even by traditional finance.
      </p>
      <p>
        Layer 2 scaling solutions, cross-chain interoperability, and improved user experiences are addressing many of the early criticisms around speed, cost, and usability. Real-world asset tokenization — putting stocks, bonds, real estate, and other assets on blockchains — represents a massive potential use case that could bridge traditional and decentralized finance.
      </p>
      <p>
        While no one can predict exactly how the landscape will evolve, the underlying innovation of programmable, permissionless, borderless digital value transfer has already proven transformative. Understanding the fundamentals now positions you to make informed decisions as this technology continues to develop.
      </p>
    </LearnPageLayout>
  );
}
