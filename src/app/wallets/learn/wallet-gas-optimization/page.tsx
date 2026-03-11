import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Save on Gas Fees (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn strategies to minimize gas fees in your crypto wallet. Tips for timing transactions, using L2s, gas tokens, and wallet settings to reduce costs.",
};

export default function WalletGasOptimizationPage() {
  return (
    <LearnPageLayout title="How to Save on Gas Fees" categoryName="Crypto Wallets" categorySlug="wallets" readTime="8 min read"
      intro="Gas fees are an unavoidable cost of using blockchains, but the amount you pay can vary dramatically based on timing, network choice, and wallet configuration. On Ethereum mainnet, a poorly timed transaction can cost 10 times more than the same transaction during off-peak hours. Layer 2 networks can reduce costs by 100x or more. This guide covers every practical strategy for minimizing gas costs, from wallet-level settings to architectural decisions about which networks to use."
      toc={[{ id: "understanding-gas", title: "Understanding Gas Costs", level: 2 }, { id: "timing-strategies", title: "Timing Strategies", level: 2 }, { id: "l2-migration", title: "Moving to Layer 2s", level: 2 }, { id: "wallet-settings", title: "Wallet Gas Settings", level: 2 }]}
      faqs={[{ question: "Why are gas fees so high on Ethereum?", answer: "Ethereum mainnet gas fees are determined by demand for block space. When many users want to transact simultaneously, they bid up the gas price. Complex DeFi transactions require more computational steps (gas units) than simple transfers. During peak usage, a single swap can cost $50-100+. This is why L2s exist: they batch transactions and settle them on Ethereum, spreading the mainnet cost across many users." },
        { question: "Are L2 gas fees always cheaper?", answer: "L2s are dramatically cheaper than Ethereum mainnet for individual transactions. A swap on Arbitrum or Base typically costs under $0.10 compared to $5-50 on mainnet. However, you must pay a bridge fee to move assets to the L2 initially. If you are making many transactions, the L2 savings quickly exceed the one-time bridge cost. For single transactions, mainnet may actually be more cost-effective since you avoid bridging." },
        { question: "Can I cancel a transaction to save gas?", answer: "You cannot cancel a submitted transaction, but you can replace it with a higher gas price transaction (speed up) or a zero-value transaction to the same nonce (effective cancellation). Both require paying gas. If a transaction is stuck due to low gas, you must either wait or pay more gas to replace it. To avoid this, use your wallet gas estimation carefully and add a small buffer above the suggested gas price." }]}
      relatedArticles={[{ title: "DeFi Wallet Setup", href: "/wallets/learn/defi-wallet-setup", category: "Wallets" }, { title: "What Is Gas?", href: "/learn/glossary/gas", category: "Glossary" }, { title: "Gas Limit", href: "/learn/glossary/gas-limit", category: "Glossary" }, { title: "Gas Price", href: "/learn/glossary/gas-price", category: "Glossary" }]}
    >
      <section id="understanding-gas">
        <h2>Understanding Gas Costs</h2>
        <p>Gas costs are determined by two factors: gas price (how much you pay per unit of computation) and gas used (how many computational steps your transaction requires). Simple ETH transfers use 21,000 gas units. ERC-20 token transfers use around 65,000. A Uniswap swap uses 150,000-300,000. Complex DeFi operations can use over 500,000 gas units. The total cost in ETH equals gas used multiplied by gas price, plus a priority fee (tip) to incentivize miners or validators.</p>
        <p>Since EIP-1559, Ethereum uses a base fee that adjusts dynamically based on network demand plus a priority fee you set. The base fee is burned, while the priority fee goes to validators. When blocks are more than 50% full, the base fee increases. When under 50% full, it decreases. This mechanism means gas prices fluctuate continuously based on real-time demand, creating predictable opportunities for cost savings by transacting during quieter periods.</p>
      </section>

      <section id="timing-strategies">
        <h2>Timing Strategies</h2>
        <p>Gas prices follow predictable daily and weekly patterns. Ethereum mainnet gas is typically lowest during weekends and early morning UTC hours (roughly 2-6 AM UTC Saturday and Sunday). These windows correspond to lower activity in North American and European time zones. Gas tracking tools like Etherscan Gas Tracker, GasNow, and Blocknative show real-time and historical gas prices, helping you identify optimal transaction windows.</p>
        <p>For non-urgent transactions, set a maximum gas price in your wallet and wait for the network to reach that level. MetaMask and Rabby allow custom gas settings where you can specify a maximum fee you are willing to pay. Some wallets and services offer gas price alerts that notify you when fees drop below a threshold. Batching multiple transactions during a single low-gas window can save significant amounts compared to executing them at random times throughout the week.</p>
      </section>

      <section id="l2-migration">
        <h2>Moving to Layer 2s</h2>
        <p>The single most effective gas optimization strategy is moving your DeFi activity to Layer 2 networks. Arbitrum, Optimism, and Base offer the same DeFi protocols (Uniswap, Aave, Curve) at a fraction of mainnet costs. A swap that costs $20 on mainnet typically costs under $0.10 on an L2. Most major DeFi protocols are deployed on multiple L2s, and liquidity has grown substantially, making L2s viable for all but the largest trades.</p>
        <p>To migrate, bridge your assets from mainnet to an L2 using the official bridge or a third-party bridge like Across, Stargate, or Hop Protocol. The initial bridge transaction costs mainnet gas (typically $5-15), but subsequent L2 transactions are extremely cheap. Many centralized exchanges now support direct withdrawals to L2s, bypassing mainnet entirely. If you are starting fresh, withdrawing directly from an exchange to an L2 is the most cost-effective onramp to DeFi.</p>
      </section>

      <section id="wallet-settings">
        <h2>Wallet Gas Settings</h2>
        <p>Learn to use your wallet&apos;s advanced gas settings. For time-sensitive transactions (minting, arbitrage), set a higher priority fee to ensure fast inclusion. For non-urgent transactions (approvals, staking), use the low or economy setting. MetaMask offers low, market, and aggressive presets plus a custom option. Rabby shows estimated confirmation times for different gas levels, helping you balance cost and speed.</p>
        <p>Additional wallet-level optimizations include using token approval limits (approve exact amounts instead of unlimited to save gas on future revocations), consolidating small token balances to reduce future transaction complexity, and using DEX aggregators that optimize transaction routing for gas efficiency. Some protocols offer gasless transactions through meta-transactions or relayer networks where the protocol pays the gas on your behalf, particularly common during promotional periods or on newer L2 deployments.</p>
      </section>
    </LearnPageLayout>
  );
}
