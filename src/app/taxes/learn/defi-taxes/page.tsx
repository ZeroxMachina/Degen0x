import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Tax Guide ${CURRENT_YEAR} - How DeFi Is Taxed`,
  description: `Complete DeFi tax guide for ${CURRENT_YEAR}. Learn how swaps, liquidity pools, yield farming, lending, and borrowing are taxed and how to report them.`,
  alternates: { canonical: "/taxes/learn/defi-taxes" },
};

const toc = [
  { id: "defi-overview", title: "DeFi Tax Overview", level: 2 },
  { id: "swaps", title: "Token Swaps", level: 2 },
  { id: "liquidity-pools", title: "Liquidity Pools", level: 2 },
  { id: "yield-farming", title: "Yield Farming", level: 2 },
  { id: "lending-borrowing", title: "Lending & Borrowing", level: 2 },
];

const faqs = [
  { question: "Are DeFi swaps taxable?", answer: "Yes. Every token swap on a DEX (like Uniswap or SushiSwap) is a taxable event, just like a trade on a centralized exchange. You must calculate the capital gain or loss based on the fair market value of the tokens received minus the cost basis of the tokens given up, including gas fees." },
  { question: "How are liquidity pool taxes calculated?", answer: "Entering an LP is generally a taxable trade (swapping tokens for LP tokens). Earned fees and rewards are taxable income. Exiting the LP is another taxable event. Impermanent loss is factored into the exit calculation but is not separately deductible. The exact treatment can vary by protocol and jurisdiction." },
  { question: "What crypto tax software handles DeFi best?", answer: "CryptoTaxCalculator has the most comprehensive DeFi support, automatically detecting and classifying complex transactions across hundreds of protocols. Koinly also handles many common DeFi scenarios well. Both import directly from blockchain data rather than relying solely on exchange records." },
];

export default function DefiTaxesPage() {
  return (
    <LearnPageLayout
      title="DeFi Tax Guide"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="12 min"
      intro="DeFi creates some of the most complex tax situations in crypto. From token swaps and liquidity pools to yield farming and flash loans, each DeFi activity has specific tax implications. This guide breaks down how common DeFi transactions are taxed and how to stay compliant."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Staking Taxes", href: "/taxes/learn/staking-taxes", category: "Taxes" },
        { title: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
        { title: "CryptoTaxCalculator Review", href: "/taxes/reviews/cryptotaxcalculator", category: "Taxes" },
      ]}
    >
      <section id="defi-overview" className="mb-10">
        <h2>DeFi Tax Overview</h2>
        <p>
          DeFi transactions are taxable under the same property rules as other crypto activities.
          The challenge is that DeFi creates far more taxable events than simple exchange trading.
          A single yield farming strategy might generate dozens of taxable transactions across
          swaps, deposits, reward claims, and withdrawals, often across multiple protocols and chains.
        </p>
        <p>
          The IRS has not issued specific guidance for most DeFi activities, which means taxpayers
          must apply general property tax principles to novel situations. Using dedicated crypto
          tax software that supports DeFi is strongly recommended, as manual tracking of these
          transactions is nearly impossible for active DeFi users.
        </p>
      </section>

      <section id="swaps" className="mb-10">
        <h2>Token Swaps</h2>
        <p>
          Every swap on a decentralized exchange is a taxable disposition. When you swap ETH for
          USDC on Uniswap, you are disposing of ETH at its current fair market value. Your gain
          or loss is the value of USDC received minus your cost basis in the ETH, including gas
          fees paid for the transaction.
        </p>
        <p>
          Multi-hop swaps (where your trade routes through intermediate tokens) may create
          multiple taxable events depending on how the protocol executes the trade. Gas fees paid
          for swaps can generally be added to your cost basis or subtracted from proceeds. Track
          the exact timing and amounts for every swap, as on-chain data is your primary record.
        </p>
      </section>

      <section id="liquidity-pools" className="mb-10">
        <h2>Liquidity Pools</h2>
        <p>
          Providing liquidity to a pool typically involves depositing two tokens in exchange for
          LP tokens. This deposit may be treated as a taxable exchange. While in the pool, you
          earn trading fees proportional to your share. The tax treatment of fee accrual varies:
          some treat it as ongoing income, others as realized upon withdrawal.
        </p>
        <p>
          Withdrawing from a liquidity pool is a taxable event where you exchange your LP tokens
          for the underlying assets. Impermanent loss is reflected in the value of tokens received
          upon exit but is not separately deductible as a loss. The overall gain or loss accounts
          for your initial deposit value, fees earned, and final withdrawal value.
        </p>
      </section>

      <section id="yield-farming" className="mb-10">
        <h2>Yield Farming</h2>
        <p>
          Yield farming rewards are generally treated as ordinary income when received or when
          you gain dominion and control over them. If rewards auto-compound, each compounding
          event may be a taxable income event. The fair market value at the time of receipt
          determines the income amount and becomes your cost basis.
        </p>
        <p>
          Complex yield strategies involving multiple protocols create chains of taxable events.
          Depositing into a vault, receiving yield tokens, staking those tokens, and claiming
          rewards each may have tax implications. Keep detailed records of every interaction,
          including timestamps and token amounts, as these transactions may span multiple chains.
        </p>
      </section>

      <section id="lending-borrowing" className="mb-10">
        <h2>Lending and Borrowing</h2>
        <p>
          Depositing crypto into a lending protocol (like Aave or Compound) may or may not be
          a taxable event depending on whether you receive a different token in return. Interest
          earned from lending is taxable as ordinary income. Receiving interest-bearing tokens
          (like aTokens or cTokens) adds complexity to basis tracking.
        </p>
        <p>
          Borrowing itself is generally not a taxable event. However, if a borrowed position is
          liquidated, the liquidation is a taxable disposition. Interest paid on crypto loans is
          generally not deductible for personal use but may be deductible as an investment
          expense. Consult a tax professional for complex lending and borrowing strategies.
        </p>
      </section>
    </LearnPageLayout>
  );
}
