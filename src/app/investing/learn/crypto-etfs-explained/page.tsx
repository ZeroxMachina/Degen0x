import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto ETFs Explained ${CURRENT_YEAR} - Bitcoin & Ethereum ETFs Guide`,
  description: `Learn everything about crypto ETFs. How spot Bitcoin and Ethereum ETFs work, expense ratios, tax advantages, and how they compare to buying crypto directly.`,
  alternates: { canonical: "/investing/learn/crypto-etfs-explained" },
};

const toc = [
  { id: "what-are-etfs", title: "What Are Crypto ETFs", level: 2 },
  { id: "spot-vs-futures", title: "Spot vs Futures ETFs", level: 2 },
  { id: "tax-advantages", title: "Tax Advantages", level: 2 },
  { id: "drawbacks", title: "ETF Drawbacks", level: 2 },
];

const faqs = [
  { question: "Can I buy crypto ETFs in my IRA?", answer: "Yes. Spot Bitcoin and Ethereum ETFs are available in Traditional IRAs, Roth IRAs, and most retirement accounts through major brokerages. This provides a tax-advantaged way to gain crypto exposure that is not possible with direct crypto ownership." },
  { question: "What are the fees for crypto ETFs?", answer: "Most spot crypto ETFs charge expense ratios between 0.20% and 0.25% annually. This means for every $10,000 invested, you pay $20-25 per year. Grayscale's GBTC is an outlier at 1.50%. These fees are deducted from the fund's assets, so you never pay them directly." },
  { question: "Are crypto ETFs safer than buying crypto directly?", answer: "Crypto ETFs eliminate self-custody risk and exchange counterparty risk. However, the underlying crypto assets are just as volatile. ETFs also trade only during market hours, meaning you cannot react to weekend or overnight crypto market movements." },
];

export default function CryptoETFsExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto ETFs Explained"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Crypto ETFs have made it easier than ever for traditional investors to gain exposure to Bitcoin and Ethereum through familiar brokerage accounts. This guide explains how crypto ETFs work, their advantages and limitations, and how they compare to buying crypto directly."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Best Crypto ETFs", href: "/investing/best/crypto-etfs", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-are-etfs" className="mb-10">
        <h2>What Are Crypto ETFs?</h2>
        <p>
          Crypto ETFs are exchange-traded funds that track the price of cryptocurrencies. Spot
          crypto ETFs hold the actual cryptocurrency, meaning the fund buys and stores real
          Bitcoin or Ethereum on behalf of shareholders. When you buy shares of a Bitcoin ETF,
          you are gaining economic exposure to Bitcoin's price through a traditional, regulated
          investment vehicle that trades on stock exchanges.
        </p>
      </section>

      <section id="spot-vs-futures" className="mb-10">
        <h2>Spot vs Futures ETFs</h2>
        <p>
          Spot ETFs hold the actual cryptocurrency and closely track its price. Futures ETFs
          hold derivative contracts and can deviate from spot prices due to contango and rollover
          costs. Spot ETFs are generally superior for long-term investors because they track
          prices more accurately and do not suffer from futures roll costs. The approval of spot
          Bitcoin ETFs in January 2024 was a landmark moment that made futures-based alternatives
          largely obsolete for most investors.
        </p>
      </section>

      <section id="tax-advantages" className="mb-10">
        <h2>Tax Advantages</h2>
        <p>
          Crypto ETFs can be held in tax-advantaged accounts like Traditional and Roth IRAs.
          In a Roth IRA, gains on crypto ETFs grow tax-free. In a Traditional IRA, gains are
          tax-deferred. This is a significant advantage over holding crypto directly, where
          every sale triggers a taxable event. ETFs also simplify tax reporting since your
          brokerage handles 1099 forms.
        </p>
      </section>

      <section id="drawbacks" className="mb-10">
        <h2>ETF Drawbacks</h2>
        <p>
          ETFs charge annual expense ratios that reduce your returns. You cannot use ETF-held
          crypto for staking, DeFi, or any on-chain activity. Trading is limited to stock
          market hours. You do not actually own the cryptocurrency and cannot transfer it to
          a wallet. If earning staking yield, participating in governance, or using DeFi is
          important to you, direct ownership is better. Many investors use both approaches
          for different goals.
        </p>
      </section>
    </LearnPageLayout>
  );
}
