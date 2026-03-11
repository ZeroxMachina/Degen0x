import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Composability: Money Legos Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what DeFi composability means, how money legos work, real examples of composable strategies, and why composability is DeFi's most powerful feature.",
};

export default function DefiComposabilityPage() {
  return (
    <LearnPageLayout
      title="DeFi Composability: Money Legos Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="DeFi composability is the ability of decentralized finance protocols to seamlessly interact with and build upon each other, like snapping together Lego blocks. Because DeFi protocols are open-source and operate on shared blockchains with permissionless access, any protocol can integrate with any other without needing permission. This creates an interconnected financial ecosystem where simple building blocks combine into complex strategies that would be impossible in traditional finance."
      toc={[
        { id: "what-is-composability", title: "What Is Composability?", level: 2 },
        { id: "money-legos", title: "Money Legos in Action", level: 2 },
        { id: "composable-strategies", title: "Composable DeFi Strategies", level: 2 },
        { id: "risks-and-limitations", title: "Risks and Limitations", level: 2 },
      ]}
      faqs={[
        {
          question: "What are money legos?",
          answer:
            "Money legos is a metaphor for DeFi protocols that can be combined like Lego blocks. Each protocol provides a simple financial function (lending, swapping, staking), but when combined, they create complex financial products. For example, staking ETH on Lido (lego 1), depositing stETH into Aave as collateral (lego 2), and borrowing stablecoins to farm yield (lego 3).",
        },
        {
          question: "Why is composability important?",
          answer:
            "Composability enables innovation without permission. Anyone can build new financial products by combining existing protocols. It creates network effects where each new protocol makes existing ones more valuable. And it enables capital efficiency by allowing the same assets to serve multiple functions simultaneously.",
        },
        {
          question: "Does composability work across different chains?",
          answer:
            "Composability is strongest within a single chain where all protocols share the same execution environment. Cross-chain composability is more limited, requiring bridges and message protocols. Layer 2 networks that share a common base layer can achieve some cross-chain composability through shared messaging, but it is not as seamless as single-chain composability.",
        },
      ]}
      relatedArticles={[
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" },
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn Crypto" },
        { title: "AMM Explained", href: "/learn/amm-explained", category: "Learn Crypto" },
        { title: "DeFi Yield Strategies", href: "/learn/defi-yield-strategies", category: "Learn Crypto" },
      ]}
    >
      <section id="what-is-composability">
        <h2>What Is Composability?</h2>
        <p>
          Composability in software means that components can be combined in various ways to create new functionality. In DeFi, composability is enabled by three properties of blockchain protocols: permissionless access (anyone can interact), open source code (anyone can integrate), and shared state (all protocols can read and write to the same blockchain). These properties mean that a lending protocol can accept LP tokens from a DEX as collateral, or a yield aggregator can automatically move funds between multiple strategies.
        </p>
        <p>
          Traditional finance lacks this composability because financial services are siloed, proprietary, and require bilateral agreements for integration. Opening a bank account, a brokerage account, and a lending relationship each requires separate applications, KYC processes, and legal agreements. In DeFi, all of these functions can be accessed in a single transaction, and any developer can combine them in new ways without asking permission from anyone.
        </p>
      </section>

      <section id="money-legos">
        <h2>Money Legos in Action</h2>
        <p>
          Consider a concrete example: Alice deposits ETH into Lido and receives stETH (liquid staking token earning staking rewards). She deposits stETH into Aave as collateral and borrows USDC. She uses the USDC to provide liquidity on Uniswap, earning trading fees. The Uniswap LP tokens can then be staked in a yield farm for additional rewards. Each step builds on the previous one, and Alice earns from staking, borrowing spread, trading fees, and farming rewards simultaneously.
        </p>
        <p>
          Flash loans are perhaps the most dramatic example of composability. A single transaction can borrow millions from Aave, use those funds to execute an arbitrage trade on Uniswap, repay the loan plus fees, and pocket the profit, all atomically. If any step fails, the entire transaction reverts. This would be impossible without composability, as no traditional financial system allows instant, uncollateralized borrowing within a single atomic operation.
        </p>
      </section>

      <section id="composable-strategies">
        <h2>Composable DeFi Strategies</h2>
        <p>
          Yield stacking combines multiple yield sources on the same capital. Deposit an asset to earn lending interest, use the receipt token as collateral for more borrowing, and deploy borrowed assets into additional yield opportunities. Yield aggregators like Yearn Finance automate these multi-step strategies, continuously optimizing for the highest risk-adjusted returns across composable protocols.
        </p>
        <p>
          Leveraged staking uses composability to amplify staking returns. Deposit stETH as collateral on Aave, borrow ETH, stake the borrowed ETH for more stETH, and repeat. This looping creates leveraged exposure to the staking yield spread. Pendle enables composability with yield by tokenizing future yield into tradeable assets, allowing users to buy discounted future yields or speculate on yield rate changes.
        </p>
      </section>

      <section id="risks-and-limitations">
        <h2>Risks and Limitations</h2>
        <p>
          Composability creates systemic risk through interdependencies. If a protocol at the bottom of a composable stack fails, every protocol building on top of it is affected. The Terraform Labs collapse demonstrated this: when UST lost its peg, it cascaded through every protocol that accepted UST as collateral or used it in yield strategies. This cascading failure risk increases with the depth and complexity of composable integrations.
        </p>
        <p>
          Smart contract risk is compounded in composable systems because you are exposed to vulnerabilities in every protocol in your stack. An exploit in one protocol can drain funds across all connected protocols. Oracle failures can trigger cascading liquidations. The complexity of multi-protocol interactions also makes it harder to audit and harder for users to understand the full risk profile of their positions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
