import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Bitcoin? Everything You Need to Know (${CURRENT_YEAR})`,
  description:
    "A comprehensive guide to Bitcoin: its origins, how it works, mining, halving cycles, use cases, and what makes it the most valuable cryptocurrency in the world.",
};

export default function WhatIsBitcoinPage() {
  return (
    <LearnPageLayout
      title="What Is Bitcoin? Everything You Need to Know"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="15 min"
      intro="Bitcoin (BTC) is the first and most valuable cryptocurrency, created in 2009 by the pseudonymous developer Satoshi Nakamoto. It introduced the concept of a peer-to-peer electronic cash system that operates without banks, governments, or any central authority. With a fixed supply of 21 million coins and a decentralized network secured by proof-of-work mining, Bitcoin has grown from a niche experiment into a globally recognized store of value and medium of exchange. This guide covers everything you need to know about how Bitcoin works and why it matters."
      toc={[
        { id: "origins", title: "The Origins of Bitcoin", level: 2 },
        { id: "how-bitcoin-works", title: "How Bitcoin Works", level: 2 },
        { id: "mining-and-supply", title: "Mining and Supply", level: 2 },
        { id: "store-of-value", title: "Bitcoin as a Store of Value", level: 2 },
        { id: "using-bitcoin", title: "Using Bitcoin", level: 2 },
        { id: "risks-criticisms", title: "Risks and Criticisms", level: 2 },
      ]}
      faqs={[
        {
          question: "Who created Bitcoin?",
          answer:
            "Bitcoin was created by an individual or group using the pseudonym Satoshi Nakamoto. The Bitcoin whitepaper was published in October 2008, and the network went live in January 2009. Satoshi disappeared from public communication in 2011 and their true identity remains unknown to this day.",
        },
        {
          question: "What gives Bitcoin its value?",
          answer:
            "Bitcoin derives its value from a combination of factors: a fixed and verifiable supply cap of 21 million coins (scarcity), a large and growing network of users and holders (network effects), robust security through proof-of-work mining, censorship resistance, and increasing institutional adoption. Like gold, Bitcoin's value is largely based on collective agreement about its utility and desirability.",
        },
        {
          question: "Can Bitcoin be shut down by a government?",
          answer:
            "It would be extremely difficult for any single government to shut down Bitcoin. The network consists of thousands of nodes spread across every continent. While governments can ban or regulate the use of Bitcoin within their borders, the protocol itself would continue running as long as nodes exist anywhere in the world.",
        },
        {
          question: "What is the Bitcoin halving?",
          answer:
            "The Bitcoin halving is a programmed event that occurs approximately every four years (every 210,000 blocks), reducing the block reward that miners receive by 50%. This mechanism controls the rate at which new bitcoins enter circulation. The most recent halving occurred in April 2024, reducing the reward from 6.25 to 3.125 BTC per block. Halvings will continue until the maximum supply of 21 million BTC is reached around the year 2140.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Cryptocurrency?", href: "/learn/what-is-cryptocurrency", category: "Learn Crypto" },
        { title: "What Is Blockchain?", href: "/learn/what-is-blockchain", category: "Learn Crypto" },
        { title: "Crypto vs Stocks", href: "/learn/crypto-vs-stocks", category: "Learn Crypto" },
        { title: "Complete Crypto Security Guide", href: "/learn/crypto-security-guide", category: "Learn Crypto" },
        { title: "Best Crypto Exchanges", href: "/exchanges/best", category: "Exchanges" },
      ]}
    >
      <h2 id="origins">The Origins of Bitcoin</h2>
      <p>
        Bitcoin emerged in the wake of the 2008 global financial crisis, a period that exposed deep vulnerabilities in the traditional banking system. In October 2008, an anonymous individual or group using the name Satoshi Nakamoto published a whitepaper titled &quot;Bitcoin: A Peer-to-Peer Electronic Cash System.&quot; The paper described a system for electronic transactions that did not rely on trust in financial institutions.
      </p>
      <p>
        On January 3, 2009, Satoshi mined the first Bitcoin block (known as the genesis block), which contained a message referencing a newspaper headline about bank bailouts. This timestamp served as both a proof of the network&apos;s birth date and a commentary on the financial system Bitcoin was designed to complement or replace.
      </p>
      <p>
        In the early years, Bitcoin had no market price and was used primarily by cryptography enthusiasts and cypherpunks. The first known commercial Bitcoin transaction occurred in May 2010, when a programmer paid 10,000 BTC for two pizzas. Bitcoin has since grown into a trillion-dollar asset class recognized by major financial institutions, governments, and millions of individuals worldwide.
      </p>

      <h2 id="how-bitcoin-works">How Bitcoin Works</h2>
      <p>
        Bitcoin operates on a peer-to-peer network where transactions are verified by nodes and recorded on a public blockchain. When you send Bitcoin to someone, you create a transaction that specifies the amount and recipient&apos;s address, sign it with your private key, and broadcast it to the network. Nodes verify that you have sufficient funds and that your digital signature is valid.
      </p>
      <p>
        Verified transactions enter a memory pool (mempool) where they wait to be included in a block. Miners select transactions from the mempool and compete to solve a computationally intensive puzzle (proof of work). The first miner to find a valid solution creates the next block, adds it to the chain, and receives newly minted bitcoin plus transaction fees as a reward. A new block is produced approximately every 10 minutes.
      </p>
      <p>
        Bitcoin&apos;s blockchain is transparent: every transaction ever made is publicly visible and independently verifiable. However, users are pseudonymous — identified by cryptographic addresses rather than real-world identities. This provides a level of privacy while maintaining full auditability of the monetary system.
      </p>

      <h2 id="mining-and-supply">Mining and Supply</h2>
      <p>
        Bitcoin mining serves two essential functions: processing transactions and introducing new coins into circulation. Miners use specialized hardware (ASICs) to perform trillions of hash computations per second, competing to find a valid block hash. The difficulty of this puzzle adjusts automatically every 2,016 blocks (roughly two weeks) to maintain the target of one new block every 10 minutes, regardless of how much mining power joins or leaves the network.
      </p>
      <p>
        Bitcoin&apos;s supply is capped at exactly 21 million coins, a limit hardcoded into the protocol. New bitcoin enters circulation through block rewards, which are halved approximately every four years in an event known as the halving. When Bitcoin launched, miners received 50 BTC per block. After the most recent halving in 2024, the reward stands at 3.125 BTC per block. This predictable, decreasing issuance schedule means that over 94% of all bitcoin that will ever exist has already been mined.
      </p>
      <p>
        The fixed supply is one of Bitcoin&apos;s most important properties. Unlike fiat currencies, which central banks can print in unlimited quantities, Bitcoin&apos;s monetary policy is transparent, predictable, and immutable. This scarcity is a key reason why proponents refer to Bitcoin as &quot;digital gold&quot; and view it as a hedge against monetary inflation.
      </p>

      <h2 id="store-of-value">Bitcoin as a Store of Value</h2>
      <p>
        Over its history, Bitcoin has evolved from a peer-to-peer payment system into what many consider a digital store of value. Its properties — fixed supply, decentralization, portability, divisibility, verifiability, and censorship resistance — parallel and in some ways exceed those of gold, the traditional store of value.
      </p>
      <p>
        Institutional adoption has accelerated this narrative. Publicly traded companies like MicroStrategy hold billions of dollars worth of Bitcoin on their balance sheets. The approval of spot Bitcoin ETFs in the United States in January 2024 opened the door for traditional investors to gain exposure through familiar brokerage accounts. Sovereign wealth funds and national governments have also begun accumulating Bitcoin reserves.
      </p>
      <p>
        While Bitcoin&apos;s price remains volatile in the short term, its long-term trajectory has trended upward since inception. Proponents argue that as adoption grows and supply issuance decreases, the price should appreciate over time. However, past performance is not a guarantee of future results, and investors should always consider their risk tolerance and time horizon.
      </p>

      <h2 id="using-bitcoin">Using Bitcoin</h2>
      <p>
        Bitcoin can be used for a wide range of purposes. As a payment method, it enables fast, borderless transfers without intermediaries. The Lightning Network, a Layer 2 protocol built on top of Bitcoin, allows near-instant, low-cost payments, making Bitcoin viable for everyday transactions like buying coffee or paying for online services.
      </p>
      <p>
        As a savings vehicle, many people dollar-cost average (DCA) into Bitcoin by buying a fixed amount at regular intervals, smoothing out price volatility over time. Bitcoin can also be used for remittances, sending money across borders at a fraction of the cost and time required by traditional services like Western Union.
      </p>
      <p>
        To get started, you can purchase Bitcoin on a regulated exchange, through a Bitcoin ATM, or via peer-to-peer marketplaces. Store your holdings in a self-custodial wallet for maximum security, or use a hardware wallet for long-term cold storage. Always back up your seed phrase and store it in a secure, offline location.
      </p>

      <h2 id="risks-criticisms">Risks and Criticisms</h2>
      <p>
        Price volatility is the most visible risk. Bitcoin&apos;s price has experienced drawdowns of 50% or more multiple times throughout its history. While it has always recovered and reached new highs, the timing and magnitude of these cycles are unpredictable. This volatility makes Bitcoin unsuitable as a short-term store of value for those who cannot tolerate significant fluctuations.
      </p>
      <p>
        Environmental concerns around Bitcoin mining are another frequent criticism. The proof-of-work consensus mechanism requires substantial energy expenditure. Proponents argue that mining increasingly uses renewable energy and that Bitcoin&apos;s energy use should be compared to the environmental cost of the traditional financial system, including its buildings, transport, and military defense of fiat currencies.
      </p>
      <p>
        Regulatory risk remains relevant. Governments worldwide are developing frameworks for crypto regulation, and changes in law could affect how Bitcoin is taxed, traded, or held. Scalability limitations mean that the base Bitcoin network processes only about seven transactions per second, though the Lightning Network and future upgrades aim to address this. Finally, the irreversibility of transactions means that user error (sending to the wrong address, losing private keys) can result in permanent loss of funds.
      </p>
    </LearnPageLayout>
  );
}
