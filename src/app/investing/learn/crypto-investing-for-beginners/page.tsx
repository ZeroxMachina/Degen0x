import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Investing for Beginners ${CURRENT_YEAR} - Start Here`,
  description: `New to crypto? Start here. A beginner-friendly guide to understanding cryptocurrency, blockchain technology, and how to make your first investment.`,
  alternates: { canonical: "/investing/learn/crypto-investing-for-beginners" },
};

const toc = [
  { id: "what-is-crypto", title: "What Is Cryptocurrency", level: 2 },
  { id: "why-invest", title: "Why People Invest in Crypto", level: 2 },
  { id: "key-concepts", title: "Key Concepts to Understand", level: 2 },
  { id: "first-steps", title: "Your First Steps", level: 2 },
  { id: "common-mistakes", title: "Common Beginner Mistakes", level: 2 },
];

const faqs = [
  { question: "Is cryptocurrency safe for beginners?", answer: "Cryptocurrency itself is safe from a technology standpoint, but investing carries risks including price volatility, scams, and security mistakes. Start with regulated exchanges, use strong security practices, only invest what you can afford to lose, and take time to learn before investing large amounts." },
  { question: "What is the best crypto for beginners to buy?", answer: "Bitcoin (BTC) and Ethereum (ETH) are the best starting points for beginners. They are the most established, most liquid, and lowest-risk crypto assets. Avoid chasing cheap or trending coins until you understand market dynamics." },
  { question: "Do I need to buy a whole Bitcoin?", answer: "No. Bitcoin is divisible to 8 decimal places (the smallest unit is called a satoshi). You can buy fractional Bitcoin for as little as $1 on most exchanges. The same applies to other cryptocurrencies." },
];

export default function CryptoInvestingForBeginnersPage() {
  return (
    <LearnPageLayout
      title="Crypto Investing for Beginners"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="10 min"
      intro="If you are completely new to cryptocurrency, this guide is for you. We break down everything from what crypto actually is to making your first purchase, using simple language without jargon. By the end, you will understand the basics and feel confident taking your first steps."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Risk Management", href: "/investing/learn/risk-management", category: "Investing" },
      ]}
    >
      <section id="what-is-crypto" className="mb-10">
        <h2>What Is Cryptocurrency?</h2>
        <p>
          Cryptocurrency is digital money that works without banks or governments. Instead of a
          central authority controlling the money supply and verifying transactions, crypto uses
          a technology called blockchain, which is essentially a shared digital ledger maintained
          by thousands of computers worldwide. When you send crypto to someone, the transaction
          is verified by this network rather than by a bank.
        </p>
        <p>
          Bitcoin, created in 2009, was the first cryptocurrency. Since then, thousands of
          cryptocurrencies have been created, each with different purposes. Ethereum enables
          smart contracts and decentralized applications. Solana focuses on speed and low costs.
          Chainlink provides data to other blockchains. Understanding what each crypto does
          helps you make informed investment decisions.
        </p>
      </section>

      <section id="why-invest" className="mb-10">
        <h2>Why People Invest in Crypto</h2>
        <p>
          People invest in crypto for several reasons: potential for high returns compared to
          traditional assets, portfolio diversification with an asset class that does not perfectly
          correlate with stocks or bonds, exposure to innovative technology that could reshape
          financial systems, and the ability to earn passive income through staking. Institutional
          investors including BlackRock and Fidelity now offer crypto products, lending legitimacy
          to the asset class.
        </p>
        <p>
          However, crypto also comes with significant risks including extreme price volatility,
          regulatory uncertainty, and the technical complexity of self-custody. Understanding
          both the potential and the risks is essential before investing.
        </p>
      </section>

      <section id="key-concepts" className="mb-10">
        <h2>Key Concepts to Understand</h2>
        <p>
          Before investing, learn these fundamentals: market capitalization (price times supply)
          indicates an asset's total value, trading volume shows how actively it is traded,
          blockchain is the underlying technology, wallets store your crypto (hot wallets are
          online, cold wallets are offline), and exchanges are where you buy and sell. Private
          keys give you control over your crypto, which is why the phrase "not your keys, not
          your coins" exists.
        </p>
      </section>

      <section id="first-steps" className="mb-10">
        <h2>Your First Steps</h2>
        <p>
          Sign up for a beginner-friendly exchange like Coinbase. Complete identity verification.
          Start by depositing a small amount you are comfortable losing completely. Buy a small
          amount of Bitcoin or Ethereum to experience the process. Learn about wallets, staking,
          and portfolio management. Set up recurring purchases for dollar-cost averaging. As your
          knowledge grows, explore other assets and strategies.
        </p>
      </section>

      <section id="common-mistakes" className="mb-10">
        <h2>Common Beginner Mistakes</h2>
        <p>
          Avoid these pitfalls: investing more than you can afford to lose, chasing pumps and
          buying at all-time highs, neglecting security (always enable 2FA), keeping all your
          crypto on one exchange, panic selling during market dips, falling for scam projects
          promising guaranteed returns, and not learning about taxes. Every trade is a taxable
          event in most countries, so keep records from the start.
        </p>
      </section>
    </LearnPageLayout>
  );
}
