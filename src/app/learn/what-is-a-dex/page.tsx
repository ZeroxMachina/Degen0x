import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a DEX (Decentralized Exchange)? (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how decentralized exchanges work, the difference between DEXs and centralized exchanges, AMM models, order book DEXs, liquidity pools, and how to trade on a DEX safely.",
};

export default function WhatIsADexPage() {
  return (
    <LearnPageLayout
      title="What Is a DEX (Decentralized Exchange)?"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="A Decentralized Exchange (DEX) is a peer-to-peer marketplace that allows users to trade cryptocurrencies directly from their wallets without entrusting funds to a centralized intermediary. Unlike centralized exchanges like Coinbase or Binance, DEXs operate through smart contracts on a blockchain, giving users full custody of their assets throughout the trading process. DEXs have grown to handle billions of dollars in daily trading volume and represent a cornerstone of the DeFi ecosystem."
      toc={[
        { id: "how-dexs-work", title: "how-dexs-work", level: 2 },
        { id: "how-dexs-work", title: "How DEXs Work", level: 2 },
        { id: "amm-vs-orderbook", title: "amm-vs-orderbook", level: 2 },
        { id: "amm-vs-order-book-dexs", title: "AMM vs Order Book DEXs", level: 2 },
        { id: "liquidity-pools", title: "liquidity-pools", level: 2 },
        { id: "liquidity-pools-and-providers", title: "Liquidity Pools and Providers", level: 2 },
        { id: "dex-vs-cex", title: "dex-vs-cex", level: 2 },
        { id: "dex-vs-cex-key-differences", title: "DEX vs CEX: Key Differences", level: 2 },
        { id: "using-dex-safely", title: "using-dex-safely", level: 2 },
        { id: "using-a-dex-safely", title: "Using a DEX Safely", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need to create an account to use a DEX?",
          answer:
            "No. DEXs are permissionless — you simply connect your Web3 wallet (like MetaMask or Rabby) and start trading. There is no registration, email verification, or KYC process. Your wallet address serves as your identity on the platform.",
        },
        {
          question: "Are DEXs cheaper than centralized exchanges?",
          answer:
            "It depends on the network. On Layer 2s, DEX trades can cost less than a cent in gas fees plus a small swap fee (typically 0.3%). On Ethereum mainnet, gas costs can make DEX trades expensive. Centralized exchanges charge trading fees (0.1-0.5%) but no gas fees. For large trades, CEXs may offer better pricing due to deeper liquidity.",
        },
        {
          question: "Can I trade any token on a DEX?",
          answer:
            "DEXs support any token that conforms to the blockchain's token standard (like ERC-20 on Ethereum). This means new tokens are available on DEXs long before they are listed on centralized exchanges. However, this also means scam tokens can be traded on DEXs, so always verify the token's contract address before trading.",
        },
      ]}
      relatedArticles={[
        { title: "AMMs Explained", href: "/learn/amm-explained", category: "Learn" },
        { title: "Impermanent Loss Explained", href: "/learn/impermanent-loss", category: "Learn" },
        { title: "What Are Gas Fees?", href: "/learn/what-are-gas-fees", category: "Learn" },
        { title: "MEV Explained", href: "/learn/mev-explained", category: "Learn" },
      ]}
    >
      <section id="how-dexs-work">
        <h2>How DEXs Work</h2>
        <p>
          DEXs replace the centralized order matching and custody functions of traditional exchanges with smart contracts. When you trade on a DEX, your tokens never leave your wallet until the moment of the swap, and even then they move directly between your wallet and the smart contract's liquidity pool in a single atomic transaction. If any part of the trade fails, the entire transaction reverts and your original tokens are returned.
        </p>
        <p>
          The most common DEX model uses automated market makers (AMMs), where prices are determined algorithmically based on the ratio of tokens in a liquidity pool rather than by matching buy and sell orders. When you swap Token A for Token B, you deposit Token A into the pool and withdraw Token B. The pool's pricing formula automatically adjusts the exchange rate based on the new token ratios after your trade, ensuring that larger trades have more price impact while keeping the pool balanced.
        </p>
      </section>

      <section id="amm-vs-orderbook">
        <h2>AMM vs Order Book DEXs</h2>
        <p>
          AMM-based DEXs like Uniswap, SushiSwap, and Curve are the dominant model on blockchains like Ethereum and its Layer 2s. They are simple to use, always provide liquidity (no need to wait for a counterparty), and anyone can become a liquidity provider by depositing tokens into a pool. The trade-off is that AMMs can suffer from higher slippage on large orders and are susceptible to impermanent loss for liquidity providers.
        </p>
        <p>
          Order book DEXs like dYdX, Hyperliquid, and Jupiter maintain a traditional order book where traders place limit and market orders that are matched against each other. These exchanges offer features more familiar to traditional traders — limit orders, stop-losses, and advanced order types. Order book DEXs are particularly common on high-throughput blockchains like Solana where the fast finality and low fees can support the intensive order matching process that order books require.
        </p>
      </section>

      <section id="liquidity-pools">
        <h2>Liquidity Pools and Providers</h2>
        <p>
          Liquidity pools are smart contracts that hold reserves of two or more tokens and enable trading by serving as the counterparty for every swap. Liquidity providers (LPs) deposit equal values of two tokens into a pool and receive LP tokens representing their share. In return for providing liquidity, LPs earn a portion of the trading fees generated by the pool — typically 0.3% of each trade, distributed proportionally among all LPs.
        </p>
        <p>
          The risk for liquidity providers is impermanent loss, which occurs when the price ratio of the pooled tokens changes from the ratio at the time of deposit. If one token appreciates significantly relative to the other, the LP would have been better off simply holding both tokens rather than providing liquidity. Whether the trading fees earned offset the impermanent loss depends on the trading volume and the magnitude of price movements. Concentrated liquidity models, pioneered by Uniswap V3, allow LPs to allocate their capital within specific price ranges, earning higher fees when the price trades within their range but taking on greater impermanent loss risk.
        </p>
      </section>

      <section id="dex-vs-cex">
        <h2>DEX vs CEX: Key Differences</h2>
        <p>
          The fundamental difference is custody: on a DEX, you retain control of your assets at all times through your own wallet, while a CEX holds your funds in its custody, creating counterparty risk. The collapse of FTX in 2022 demonstrated the dangers of centralized custody, as users lost billions in assets held on the exchange. DEXs eliminate this risk entirely — your funds are only at risk if the smart contract itself has a vulnerability.
        </p>
        <p>
          CEXs generally offer more features (fiat on-ramps, advanced order types, margin trading, customer support), deeper liquidity for major pairs, and lower fees for high-volume traders. DEXs offer permissionless access, broader token selection (any token can be listed), privacy (no KYC required), and censorship resistance. Many active traders use both: CEXs for major trading pairs and fiat conversion, and DEXs for accessing new tokens, DeFi protocols, and maintaining self-custody of their assets.
        </p>
      </section>

      <section id="using-dex-safely">
        <h2>Using a DEX Safely</h2>
        <p>
          Always verify the smart contract address of any token you trade on a DEX, as scammers frequently create fake tokens with the same name and ticker as legitimate projects. Use the official project website or a trusted aggregator like CoinGecko to find the correct contract address. Set appropriate slippage tolerance — too low and your trade may fail during volatile markets, too high and you become vulnerable to sandwich attacks that extract value from your trade.
        </p>
        <p>
          Use DEX aggregators like 1inch or Paraswap, which route your trade through multiple liquidity sources to find the best price and lowest slippage. Revoke unnecessary token approvals regularly using tools like Revoke.cash, as unlimited token approvals granted to smart contracts can be exploited if the contract is compromised. Start with small amounts when interacting with a new DEX or token to verify everything works as expected before committing larger sums.
        </p>
      </section>
    </LearnPageLayout>
  );
}
