import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Automated Market Makers (AMMs) Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn how Automated Market Makers work, the constant product formula, concentrated liquidity, different AMM designs, and how they power decentralized trading across DeFi.",
};

export default function AmmExplainedPage() {
  return (
    <LearnPageLayout
      title="Automated Market Makers (AMMs) Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Automated Market Makers (AMMs) are the pricing engines that power most decentralized exchanges. Instead of using an order book to match buyers and sellers like traditional exchanges, AMMs use mathematical formulas and liquidity pools to determine token prices automatically. This innovation, pioneered by protocols like Uniswap and Bancor, made it possible to create always-available liquidity for any token pair without requiring professional market makers, fundamentally transforming how digital assets are traded."
      toc={[
        { id: "how-amms-work", title: "How AMMs Work", level: 2 },
        { id: "constant-product", title: "The Constant Product Formula", level: 2 },
        { id: "amm-designs", title: "Different AMM Designs", level: 2 },
        { id: "concentrated-liquidity", title: "Concentrated Liquidity", level: 2 },
        { id: "risks-limitations", title: "Risks and Limitations", level: 2 },
      ]}
      faqs={[
        {
          question: "Who sets the initial price on an AMM?",
          answer:
            "The person who creates the liquidity pool sets the initial price by choosing the ratio of the two tokens they deposit. For example, depositing 1 ETH and 3,000 USDC creates an initial price of $3,000 per ETH. After creation, arbitrageurs ensure the price stays aligned with the broader market by trading whenever the AMM price diverges from the market price.",
        },
        {
          question: "What is slippage in an AMM?",
          answer:
            "Slippage is the difference between the expected price and the actual price you receive for a trade. In AMMs, larger trades relative to the pool size cause more price impact and thus higher slippage. Setting a slippage tolerance tells the smart contract the maximum price deviation you will accept. If slippage exceeds your tolerance, the transaction reverts.",
        },
        {
          question: "Can AMMs replace traditional exchanges?",
          answer:
            "AMMs and traditional order book exchanges serve different needs. AMMs excel at providing accessible, permissionless liquidity for the long tail of tokens. Order books are better for assets with deep liquidity where professional traders need precise order placement. Many platforms are exploring hybrid models that combine the strengths of both approaches.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/what-is-a-dex", category: "Learn" },
        { title: "Impermanent Loss Explained", href: "/learn/impermanent-loss", category: "Learn" },
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn" },
        { title: "MEV Explained", href: "/learn/mev-explained", category: "Learn" },
      ]}
    >
      <section id="how-amms-work">
        <h2>How AMMs Work</h2>
        <p>
          An AMM operates through a smart contract that holds reserves of two or more tokens in a liquidity pool. When a trader wants to swap Token A for Token B, they send Token A to the pool and receive Token B in return. The exchange rate is not determined by an order book or a centralized price feed — instead, it is calculated by a mathematical formula based on the current token reserves in the pool.
        </p>
        <p>
          The beauty of this system is that it works without counterparties. There does not need to be another trader on the other side of your trade — the liquidity pool itself serves as your trading partner. Anyone can provide liquidity to a pool by depositing tokens, and anyone can trade against it. This permissionless, always-on liquidity is what makes AMMs revolutionary: they enable trading for any token pair, including newly launched tokens that would never be listed on a centralized exchange.
        </p>
      </section>

      <section id="constant-product">
        <h2>The Constant Product Formula</h2>
        <p>
          The most widely used AMM formula is the constant product equation: x * y = k, where x and y are the quantities of the two tokens in the pool, and k is a constant. When a trader swaps tokens, the quantities of x and y change, but k must remain the same (excluding fees). This means that as one token is removed from the pool, the remaining quantity of the other token must increase to keep the product constant, which naturally increases the price of the depleting token.
        </p>
        <p>
          For example, if a pool contains 10 ETH and 30,000 USDC, then k = 300,000. The implied price is 3,000 USDC per ETH. If a trader buys 1 ETH, the pool must still satisfy the equation: (10 - 1) * (30,000 + amount_in) = 300,000. Solving for amount_in gives approximately 3,333 USDC, meaning the effective price for that 1 ETH was 3,333 USDC — higher than the 3,000 spot price. This price impact increases with trade size, naturally protecting the pool from being drained by any single trade.
        </p>
      </section>

      <section id="amm-designs">
        <h2>Different AMM Designs</h2>
        <p>
          While the constant product formula works well for general-purpose trading, specialized AMM designs have been developed for specific use cases. Curve Finance pioneered the StableSwap invariant, optimized for trading between tokens of similar value (like USDC/USDT or stETH/ETH). This formula provides much lower slippage for pegged asset swaps by concentrating liquidity around the 1:1 price, making it dramatically more capital-efficient for this specific use case.
        </p>
        <p>
          Balancer introduced weighted pools that allow for unequal token ratios (for example, 80/20 instead of 50/50), giving pool creators more flexibility in managing exposure. Some protocols use virtual AMM designs for derivatives trading, where no real assets are deposited but the pricing curve simulates a liquidity pool. Maverick Protocol introduced dynamic, directional liquidity that automatically shifts based on price movements. Each design innovation aims to improve capital efficiency, reduce slippage, or better serve specific trading scenarios.
        </p>
      </section>

      <section id="concentrated-liquidity">
        <h2>Concentrated Liquidity</h2>
        <p>
          Concentrated liquidity, introduced by Uniswap V3, allows liquidity providers to allocate their capital within specific price ranges rather than across the entire price curve from zero to infinity. If the current price of ETH is $3,000, a provider might concentrate their liquidity between $2,500 and $3,500, earning significantly higher fees within that range since their capital is used more efficiently. When the price is within their chosen range, their position earns fees. When the price moves outside the range, their position stops earning.
        </p>
        <p>
          This innovation dramatically improved capital efficiency — concentrated positions can be hundreds of times more efficient than the traditional full-range approach. However, it also increased complexity and impermanent loss risk for liquidity providers, since concentrated positions are more sensitive to price movements. Active management of concentrated liquidity positions has spawned an entire sub-industry of automated liquidity management protocols that dynamically adjust ranges to optimize returns and minimize losses.
        </p>
      </section>

      <section id="risks-limitations">
        <h2>Risks and Limitations</h2>
        <p>
          Impermanent loss is the primary risk for AMM liquidity providers. When the price ratio of pooled tokens changes, the pool automatically rebalances through arbitrage trades, leaving the LP with more of the depreciating token and less of the appreciating one. For volatile token pairs, impermanent loss can exceed the fees earned, resulting in a net loss compared to simply holding the tokens.
        </p>
        <p>
          AMMs are also susceptible to MEV (Maximal Extractable Value) attacks, particularly sandwich attacks where a bot places a trade before and after a user's trade to profit from the price impact. Smart contract risk is ever-present — a bug in the AMM's code could result in loss of all pooled funds. Oracle manipulation, where the AMM's price is used as a price feed by other protocols, can cascade into exploits across the DeFi ecosystem. Understanding these risks is essential for anyone providing liquidity to or trading on AMM-based platforms.
        </p>
      </section>
    </LearnPageLayout>
  );
}
