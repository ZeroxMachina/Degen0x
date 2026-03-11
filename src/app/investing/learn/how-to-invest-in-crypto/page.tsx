import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Invest in Crypto ${CURRENT_YEAR} - Complete Beginner's Guide`,
  description: `Learn how to invest in cryptocurrency step by step. A complete guide covering exchanges, wallets, portfolio building, and risk management for ${CURRENT_YEAR}.`,
  alternates: { canonical: "/investing/learn/how-to-invest-in-crypto" },
};

const toc = [
  { id: "getting-started", title: "Getting Started", level: 2 },
  { id: "choosing-exchange", title: "Choosing an Exchange", level: 2 },
  { id: "first-purchase", title: "Making Your First Purchase", level: 2 },
  { id: "building-portfolio", title: "Building a Portfolio", level: 2 },
  { id: "security", title: "Securing Your Crypto", level: 2 },
];

const faqs = [
  { question: "How much money do I need to start investing in crypto?", answer: "You can start with as little as $1 on most exchanges. Many platforms allow fractional purchases, so you do not need to buy an entire Bitcoin. Starting with $50-$100 is common for beginners. Focus on learning and developing good habits before investing larger amounts." },
  { question: "Is crypto a good investment for beginners?", answer: "Crypto can be part of a diversified portfolio, but it is volatile. Beginners should start with established assets like Bitcoin and Ethereum, use dollar-cost averaging, and only invest money they can afford to lose. Education is the most important first step." },
  { question: "What is the safest way to invest in crypto?", answer: "The safest approaches include dollar-cost averaging into Bitcoin and Ethereum through regulated exchanges, using crypto ETFs for exposure without self-custody risk, and storing long-term holdings in hardware wallets. Never invest more than you can afford to lose." },
];

export default function HowToInvestPage() {
  return (
    <LearnPageLayout
      title="How to Invest in Cryptocurrency"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="12 min"
      intro="Investing in cryptocurrency has become more accessible than ever, but it still requires careful planning and education. This guide walks you through everything you need to know to start investing in crypto with confidence, from choosing your first exchange to building a diversified portfolio."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Crypto Investing for Beginners", href: "/investing/learn/crypto-investing-for-beginners", category: "Investing" },
        { title: "Portfolio Allocation Guide", href: "/investing/learn/portfolio-allocation", category: "Investing" },
        { title: "Dollar-Cost Averaging", href: "/investing/learn/dollar-cost-averaging", category: "Investing" },
      ]}
    >
      <section id="getting-started" className="mb-10">
        <h2>Getting Started with Crypto Investing</h2>
        <p>
          Before investing a single dollar, take time to understand what cryptocurrency is and
          why it matters. At its core, crypto is decentralized digital money that operates without
          banks or governments. Bitcoin proved that value can be transferred peer-to-peer over
          the internet, and Ethereum expanded on this by enabling programmable smart contracts.
        </p>
        <p>
          Set clear investment goals. Are you looking for long-term wealth building, passive income
          through staking, or exposure to emerging technology? Your goals will determine which
          assets to buy, how much to allocate, and what strategy to follow. Most importantly,
          only invest money you can afford to lose entirely. Crypto is volatile and even the
          best assets can drop significantly.
        </p>
      </section>

      <section id="choosing-exchange" className="mb-10">
        <h2>Choosing an Exchange</h2>
        <p>
          Your exchange is your gateway to crypto. For beginners in the US, Coinbase offers the
          simplest experience with strong regulatory compliance. Kraken provides competitive fees
          with excellent security. For global users, Binance has the widest asset selection and
          lowest fees. Look for exchanges with proof of reserves, insurance on custodial funds,
          and strong security track records.
        </p>
        <p>
          Complete identity verification (KYC) on your chosen exchange. This typically requires
          a government ID and may take minutes to a few days. Fund your account via bank transfer
          (lowest fees) or debit card (instant but higher fees). Once funded, you are ready to
          make your first purchase.
        </p>
      </section>

      <section id="first-purchase" className="mb-10">
        <h2>Making Your First Purchase</h2>
        <p>
          Start with Bitcoin (BTC) and Ethereum (ETH) as your first crypto investments. Bitcoin
          is the most established store of value with a 15+ year track record and institutional
          adoption. Ethereum is the leading smart contract platform powering DeFi and most of the
          crypto ecosystem. Together, they form the foundation of any well-constructed crypto
          portfolio.
        </p>
        <p>
          Use dollar-cost averaging (DCA) rather than investing everything at once. Set up
          recurring purchases of a fixed dollar amount weekly or monthly. This reduces the impact
          of volatility and removes the stress of trying to time the market. Most exchanges
          support automated recurring purchases.
        </p>
      </section>

      <section id="building-portfolio" className="mb-10">
        <h2>Building a Portfolio</h2>
        <p>
          A balanced crypto portfolio typically allocates 60-70% to Bitcoin and Ethereum as core
          holdings, 20-30% to established altcoins like Solana, Chainlink, and Arbitrum for growth
          exposure, and 5-10% to higher-risk opportunities if your risk tolerance allows. This
          tiered approach balances stability with growth potential.
        </p>
        <p>
          Rebalance your portfolio periodically (quarterly is a good cadence) to maintain your
          target allocation. If one asset grows significantly, consider taking some profits and
          redistributing to underweight positions. This disciplined approach prevents concentration
          risk and locks in gains over time.
        </p>
      </section>

      <section id="security" className="mb-10">
        <h2>Securing Your Crypto</h2>
        <p>
          Security is paramount in crypto. Enable two-factor authentication on all exchange
          accounts. Use a unique, strong password for each platform. For significant holdings,
          invest in a hardware wallet like Ledger or Trezor for self-custody. Never share your
          seed phrase with anyone, and store it offline in a secure location. Be vigilant against
          phishing scams that impersonate exchanges or support staff.
        </p>
      </section>
    </LearnPageLayout>
  );
}
