import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy Stellar (XLM) - Step-by-Step Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn how to buy Stellar (XLM) in ${CURRENT_YEAR}. Complete guide covering the best exchanges, wallets, and strategies for purchasing XLM.`,
};

export default function HowToBuyStellarPage() {
  return (
    <LearnPageLayout
      title="How to Buy Stellar (XLM)"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Stellar is a blockchain network designed for fast and affordable cross-border payments and asset tokenization. Co-founded by Jed McCaleb in 2014, Stellar has partnered with major financial institutions and governments to modernize payment infrastructure. This guide walks you through buying XLM step by step."
      toc={[
        { id: "what-is-stellar", title: "what-is-stellar", level: 2 },
        { id: "what-is-stellar", title: "What Is Stellar?", level: 2 },
        { id: "where-to-buy", title: "where-to-buy", level: 2 },
        { id: "where-to-buy-stellar", title: "Where to Buy Stellar", level: 2 },
        { id: "step-by-step", title: "step-by-step", level: 2 },
        { id: "step-by-step-purchase-guide", title: "Step-by-Step Purchase Guide", level: 2 },
        { id: "storage", title: "storage", level: 2 },
        { id: "storing-your-xlm", title: "Storing Your XLM", level: 2 }
      ]}
      faqs={[
        { question: "What makes Stellar different from other cryptocurrencies?", answer: "Stellar focuses specifically on cross-border payments and financial inclusion. It uses the Stellar Consensus Protocol (SCP) instead of proof-of-work or proof-of-stake, enabling transactions that settle in 3-5 seconds with fees under one cent. Stellar has partnerships with IBM, MoneyGram, and several central banks exploring digital currencies." },
        { question: "Does Stellar have a maximum supply?", answer: "Stellar initially had an inflationary model but moved to a fixed supply of approximately 50 billion XLM after a community vote in 2019. The Stellar Development Foundation holds a portion of the supply for ecosystem development and grants." },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "Risk Management Guide", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <h2 id="what-is-stellar">What Is Stellar?</h2>
      <p>
        Stellar (XLM) is an open-source payment network that connects banks, payment systems, and
        people. It enables fast, low-cost cross-border transactions and supports the issuance of
        tokenized assets. The network can process thousands of transactions per second with
        settlement in 3-5 seconds and fees of a fraction of a cent. Stellar has been adopted by
        financial institutions worldwide for remittances and cross-border payment corridors.
      </p>

      <h2 id="where-to-buy">Where to Buy Stellar</h2>
      <p>
        XLM is widely available on major exchanges including Coinbase, Kraken, Binance, and
        Gemini. Coinbase offers the simplest experience for US buyers with instant purchases
        available via debit card. Kraken provides competitive fees and advanced trading features.
        Stellar is also available on apps like Cash App and Robinhood for users who prefer
        simplified trading interfaces.
      </p>

      <h2 id="step-by-step">Step-by-Step Purchase Guide</h2>
      <p>
        Sign up on your chosen exchange and complete the required identity verification. Add a
        payment method such as a bank account or debit card. Search for XLM or Stellar on the
        platform and enter the amount you want to purchase. Review the transaction details
        including fees and confirm your order. Consider setting up recurring purchases to
        dollar-cost average into your XLM position over time.
      </p>

      <h2 id="storage">Storing Your XLM</h2>
      <p>
        Stellar wallets require a minimum balance of 1 XLM to activate an account on the network.
        For secure storage, Ledger hardware wallets support XLM natively. Software wallet options
        include StellarX, Lobstr, and Solar Wallet. The Stellar network also supports multiple
        assets, so your XLM wallet can hold other tokens issued on the Stellar network. Always
        record and safely store your recovery phrase.
      </p>
    </LearnPageLayout>
  );
}
