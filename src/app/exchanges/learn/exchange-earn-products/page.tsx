import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Exchange Earn Products Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about crypto exchange earn products. Savings, staking, lending, dual investment, and how to earn passive income on your crypto holdings.",
};

export default function ExchangeEarnProducts() {
  return (
    <LearnPageLayout
      title="Exchange Earn Products Explained"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="9 min read"
      intro="Major crypto exchanges offer a growing range of earn products that let you generate passive income on your holdings. From simple savings accounts to complex structured products, the options can be overwhelming. This guide explains each type of earn product, expected returns, and the risks associated with each to help you make informed decisions about where to put your idle crypto to work."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "earn-products-overview", title: "Earn Products Overview", level: 2 },
        { id: "savings", title: "savings", level: 2 },
        { id: "flexible-and-fixed-savings", title: "Flexible and Fixed Savings", level: 2 },
        { id: "staking", title: "staking", level: 2 },
        { id: "staking-products", title: "Staking Products", level: 2 },
        { id: "lending", title: "lending", level: 2 },
        { id: "crypto-lending", title: "Crypto Lending", level: 2 },
        { id: "structured", title: "structured", level: 2 },
        { id: "structured-products", title: "Structured Products", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "understanding-the-risks", title: "Understanding the Risks", level: 2 },
        { id: "choosing", title: "choosing", level: 2 },
        { id: "choosing-the-right-products", title: "Choosing the Right Products", level: 2 }
      ]}
      faqs={[
        { question: "Are exchange earn products safe?", answer: "They carry varying degrees of risk. Simple savings and staking are generally lower risk. Structured products like dual investment carry significant market risk. All carry custodial risk since the exchange holds your assets. Only use reputable exchanges." },
        { question: "What are the best yields available?", answer: "Stablecoins typically earn 3-10% APY. Major cryptos like BTC and ETH earn 1-5% through staking or savings. Higher yields exist but come with proportionally higher risk. Be skeptical of anything offering 20%+ without clear risk explanation." },
        { question: "Can I lose money with earn products?", answer: "Yes. Structured products can result in losses if the market moves against you. Even simple savings carry custodial risk. Lending products carry borrower default risk. The APY compensates for these risks." },
        { question: "Are earn product yields guaranteed?", answer: "Most yields are variable and can change based on market conditions, supply/demand, and exchange policies. Fixed savings lock in a rate for the term but the exchange could theoretically fail to pay. No crypto yield is truly guaranteed." },
      ]}
      relatedArticles={[
        { title: "Exchange Staking Guide", href: "/exchanges/learn/exchange-staking-guide", category: "Exchanges" },
        { title: "DCA Tools on Exchanges", href: "/exchanges/learn/dollar-cost-averaging-exchanges", category: "Exchanges" },
        { title: "Exchange Security Features", href: "/exchanges/learn/exchange-security-features", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Earn Products Overview</h2>
        <p>Exchange earn products fall into several categories: savings accounts that lend your crypto for interest, staking that earns protocol rewards, lending programs that connect borrowers and lenders, and structured products that offer enhanced yields with specific risk profiles.</p>
        <p>Every earn product generates yield by putting your assets to work in some way. Understanding where the yield comes from is crucial for evaluating risk. Staking yield comes from blockchain rewards. Savings yield comes from lending your assets. Structured product yield comes from options strategies. If you cannot identify the yield source, the risk is likely higher than advertised.</p>
        <p>Most exchanges consolidate their earn offerings under a single "Earn" section. Binance Earn, KuCoin Earn, OKX Earn, and similar platforms provide curated selections of yield products with varying risk levels and lock periods.</p>
      </section>

      <section id="savings">
        <h2>Flexible and Fixed Savings</h2>
        <p>Flexible savings let you deposit crypto and earn interest with the ability to withdraw at any time. Rates are variable and typically lower than fixed products. This is ideal for funds you want to keep liquid while earning some yield rather than sitting idle.</p>
        <p>Fixed savings lock your crypto for a set period (7, 14, 30, 60, or 90 days typically) at a predetermined rate. Higher rates compensate for reduced liquidity. Early withdrawal may forfeit earned interest or incur penalties depending on the platform.</p>
        <p>The yield from savings products comes from the exchange lending your deposited assets to margin traders and institutional borrowers. The exchange takes a portion of the interest charged to borrowers and passes the rest to depositors as your yield.</p>
      </section>

      <section id="staking">
        <h2>Staking Products</h2>
        <p>Exchange staking involves delegating proof-of-stake tokens to validators run by the exchange. Ethereum, Solana, Cardano, Polkadot, and many other networks support staking. Yields range from 3-15% depending on the asset and network conditions.</p>
        <p>Some exchanges offer enhanced staking promotions with boosted rates for limited periods or for new users. These promotional rates eventually revert to standard levels. Focus on sustainable long-term rates rather than temporary promotional APY.</p>
        <p>Liquid staking derivatives like stETH, cbETH, and BETH allow you to receive a tradeable token representing your staked position. This lets you maintain liquidity while earning staking rewards, though it introduces additional smart contract and pricing risks.</p>
      </section>

      <section id="lending">
        <h2>Crypto Lending</h2>
        <p>Lending products connect you directly with borrowers who pay interest on the crypto they borrow. Borrowers provide collateral exceeding their loan value. If a borrower's collateral drops below the maintenance threshold, their position is liquidated to repay lenders.</p>
        <p>Peer-to-peer lending on exchanges like KuCoin lets you set your own interest rates and terms. Automated lending pools on platforms like Binance match lenders and borrowers algorithmically. P2P lending offers more control while pooled lending provides convenience.</p>
        <p>Lending yields fluctuate based on borrowing demand. During volatile markets when traders want leverage, lending rates spike. During calm periods, rates decrease. USDT lending rates can range from 2% during quiet periods to 30%+ during market mania.</p>
      </section>

      <section id="structured">
        <h2>Structured Products</h2>
        <p>Dual investment products offer enhanced yields by combining a deposit with an options strategy. You commit to buying or selling an asset at a predetermined strike price on a settlement date. Regardless of the outcome, you earn a premium. However, if the market moves against you, the "settlement" effectively executes a trade at an unfavorable price.</p>
        <p>Range-bound products pay high yields as long as the underlying asset stays within a specified price range. If the asset moves outside the range, you may receive your principal in the depreciated asset. These products suit investors with specific price range convictions.</p>
        <p>Auto-invest and portfolio rebalancing products automatically distribute your deposits according to preset allocations. While simpler than manual rebalancing, they still carry the underlying market risk of the assets in the portfolio.</p>
      </section>

      <section id="risks">
        <h2>Understanding the Risks</h2>
        <p>Custodial risk applies to all exchange earn products. Your assets are held by the exchange, and if the platform faces insolvency, you may lose your deposits. The collapse of platforms like Celsius and FTX's earn-like products demonstrated this risk dramatically.</p>
        <p>Smart contract risk exists for products built on DeFi protocols. Bugs or exploits in the underlying smart contracts can result in loss of funds. Even products offered through centralized exchanges may use DeFi protocols behind the scenes.</p>
        <p>Market risk is inherent in all non-stablecoin earn products. If you earn 5% APY on ETH but ETH drops 30%, your overall portfolio value has declined significantly despite the yield. Earning yield does not protect against price depreciation of the underlying asset.</p>
      </section>

      <section id="choosing">
        <h2>Choosing the Right Products</h2>
        <p>Match products to your risk tolerance and time horizon. Flexible savings for assets you might need to sell quickly. Locked staking for long-term holdings you plan to keep for months. Avoid structured products unless you fully understand the risk mechanics.</p>
        <p>Diversify your earn allocations across different product types and exchanges. Concentrating all your crypto in a single earn product on one exchange creates excessive counterparty risk. Spread your earning across 2-3 platforms when possible.</p>
        <p>Always evaluate whether the yield justifies the additional risk. Keeping crypto in a hardware wallet earns zero yield but eliminates custodial risk. The yield from earn products must adequately compensate for the added risk of trusting a centralized platform with your assets.</p>
      </section>
    </LearnPageLayout>
  );
}
