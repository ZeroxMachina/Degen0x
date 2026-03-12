import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Derivatives: Options, Futures & Swaps (${CURRENT_YEAR}) | degen0x`,
  description:
    "A complete guide to crypto derivatives including futures, options, swaps, and structured products. Learn how they work, their use cases for hedging and speculation, and associated risks.",
};

export default function CryptoDerivativesPage() {
  return (
    <LearnPageLayout
      title="Crypto Derivatives: Options, Futures & Swaps"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="10 min read"
      intro="Crypto derivatives are financial instruments whose value is derived from underlying cryptocurrency assets. They include futures, perpetual contracts, options, and swaps, enabling traders to hedge risk, speculate on price movements with leverage, and access exposure to assets without directly holding them. The crypto derivatives market has grown to dwarf the spot market, with daily volumes regularly exceeding hundreds of billions of dollars across centralized and decentralized platforms."
      toc={[
        { id: "what-are-derivatives", title: "what-are-derivatives", level: 2 },
        { id: "what-are-crypto-derivatives", title: "What Are Crypto Derivatives?", level: 2 },
        { id: "futures", title: "futures", level: 2 },
        { id: "futures-contracts", title: "Futures Contracts", level: 2 },
        { id: "options", title: "options", level: 2 },
        { id: "options-contracts", title: "Options Contracts", level: 2 },
        { id: "swaps-structured", title: "swaps-structured", level: 2 },
        { id: "swaps-and-structured-products", title: "Swaps and Structured Products", level: 2 },
        { id: "defi-derivatives", title: "defi-derivatives", level: 2 },
        { id: "derivatives-in-defi", title: "Derivatives in DeFi", level: 2 }
      ]}
      faqs={[
        {
          question: "Are crypto derivatives suitable for beginners?",
          answer:
            "Most crypto derivatives involve leverage and complex mechanics that can lead to rapid losses. Beginners should first develop a solid understanding of spot trading before exploring derivatives. Start with paper trading or very small positions, understand the risk of liquidation, and never risk capital you cannot afford to lose.",
        },
        {
          question: "How are crypto derivatives taxed?",
          answer:
            "Tax treatment varies by jurisdiction and is often complex. In many countries, derivative gains are taxed as capital gains or income. The frequent trading nature of derivatives can generate significant tax obligations. Consult a tax professional familiar with cryptocurrency taxation in your jurisdiction for specific guidance.",
        },
        {
          question: "What is open interest and why does it matter?",
          answer:
            "Open interest is the total number of outstanding derivative contracts that have not been settled. Rising open interest alongside rising prices suggests new money is entering the market (bullish). Rising open interest with falling prices can indicate new short positions being opened. A sudden decrease in open interest may signal that traders are closing positions, which can precede increased volatility.",
        },
      ]}
      relatedArticles={[
        { title: "Perpetual Futures Explained", href: "/learn/perpetual-futures", category: "Learn" },
        { title: "Risk Management in Crypto", href: "/learn/risk-management-crypto", category: "Learn" },
        { title: "Technical Analysis for Crypto", href: "/learn/technical-analysis-crypto", category: "Learn" },
        { title: "Crypto Market Indicators", href: "/learn/crypto-market-indicators", category: "Learn" },
      ]}
    >
      <section id="what-are-derivatives">
        <h2>What Are Crypto Derivatives?</h2>
        <p>
          Derivatives are financial contracts whose value is based on (derived from) an underlying asset. In crypto, the underlying asset is typically a cryptocurrency like Bitcoin or Ethereum. Rather than buying and holding the actual crypto, derivatives allow traders to gain exposure to price movements through contracts that can be settled in cash or the underlying asset. This enables hedging, leveraged speculation, and income generation strategies that would be impossible with spot trading alone.
        </p>
        <p>
          The crypto derivatives market serves multiple participants: traders speculating on price direction with leverage, miners and institutional holders hedging against price declines, market makers providing liquidity and earning spreads, and arbitrageurs who profit by correcting pricing inefficiencies between derivatives and spot markets. Each participant serves a different economic function, and their collective activity creates deep, liquid markets that contribute to price discovery for the broader crypto ecosystem.
        </p>
      </section>

      <section id="futures">
        <h2>Futures Contracts</h2>
        <p>
          Futures contracts are agreements to buy or sell a specific amount of cryptocurrency at a predetermined price on a future date. Quarterly Bitcoin futures on platforms like CME, Binance, and OKX settle every three months at the prevailing spot price. The price of a futures contract typically trades at a premium or discount to spot, reflecting the market's expectation of future price direction plus the cost of carry (interest rates and funding costs).
        </p>
        <p>
          Futures serve important economic functions beyond speculation. Bitcoin miners can sell futures to lock in a price for their future production, protecting against price declines. Fund managers can buy futures to gain Bitcoin exposure without managing custody. The basis trade (buying spot and selling futures at a premium) provides a yield-like return that has attracted institutional capital into the crypto market. Perpetual futures, the most popular variant in crypto, extend this concept by removing the expiration date and using funding rates to maintain price alignment with spot.
        </p>
      </section>

      <section id="options">
        <h2>Options Contracts</h2>
        <p>
          Options give the buyer the right, but not the obligation, to buy (call option) or sell (put option) a cryptocurrency at a specific price (the strike price) before a specific date (the expiration). The buyer pays a premium for this right, while the seller (writer) receives the premium and takes on the obligation. Options provide more nuanced exposure than futures — they allow traders to express views on volatility, construct positions with defined maximum loss, and generate income through premium collection.
        </p>
        <p>
          Call options become valuable when the underlying price rises above the strike price, while put options become valuable when the price falls below the strike. The premium paid for an option is influenced by factors including the current price relative to the strike, time until expiration, and implied volatility. Crypto options markets are growing rapidly, with platforms like Deribit dominating centralized trading and protocols like Lyra and Premia bringing options on-chain. Options strategies like covered calls, protective puts, and straddles allow traders to tailor their risk-reward profiles precisely.
        </p>
      </section>

      <section id="swaps-structured">
        <h2>Swaps and Structured Products</h2>
        <p>
          Interest rate swaps in crypto allow parties to exchange fixed and variable yield exposure. For example, a DeFi lender earning a variable rate might want to lock in a fixed rate for predictability. Variance swaps allow trading volatility directly without taking a directional position on price. Total return swaps provide exposure to an asset's return without holding it, used by institutional investors for regulatory or operational reasons.
        </p>
        <p>
          Structured products combine derivatives to create custom risk-return profiles. Shark fin products offer enhanced yield with price-dependent payoffs. Principal-protected notes guarantee return of capital with upside participation through embedded options. Dual investment products allow users to earn premium by agreeing to buy or sell crypto at predetermined prices. These products, increasingly available in both CeFi and DeFi, bring traditional financial engineering to the crypto market, making sophisticated strategies accessible to a broader audience.
        </p>
      </section>

      <section id="defi-derivatives">
        <h2>Derivatives in DeFi</h2>
        <p>
          DeFi is bringing derivatives trading on-chain with composable, transparent, and permissionless protocols. Decentralized perpetual exchanges like dYdX, Hyperliquid, and GMX process billions in daily volume. On-chain options protocols like Lyra and Dopex offer automated options vaults and structured products. Synthetic asset protocols create tokens that track the price of real-world assets, commodities, and indices.
        </p>
        <p>
          The advantages of DeFi derivatives include self-custody, transparency, global access, and composability with other DeFi protocols. For instance, an options position on a DeFi protocol could potentially be used as collateral for borrowing on a lending protocol — something impossible in traditional finance's siloed infrastructure. The challenges include lower liquidity compared to centralized venues, smart contract risk, oracle dependency, and the computational cost of complex financial calculations on-chain. As infrastructure improves and more institutional capital enters DeFi, on-chain derivatives are expected to capture an increasing share of the overall market.
        </p>
      </section>
    </LearnPageLayout>
  );
}
