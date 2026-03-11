import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Oracle Risk in DeFi Lending (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Understanding oracle risk in DeFi lending protocols. Learn how price oracles work, common attack vectors, and how protocols mitigate oracle manipulation.",
};

export default function OracleRiskLendingPage() {
  return (
    <LearnPageLayout title="Oracle Risk in DeFi Lending" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="Oracles are the critical infrastructure that connects DeFi lending protocols to real-world price data. Lending protocols rely on accurate, timely price feeds to determine collateral values, trigger liquidations, and calculate borrowing limits. Oracle failures or manipulation have been responsible for some of the largest DeFi exploits, making oracle risk one of the most important factors in evaluating lending protocol safety."
      toc={[{ id: "how-oracles-work", title: "How Lending Oracles Work", level: 2 }, { id: "attack-vectors", title: "Oracle Attack Vectors", level: 2 }, { id: "mitigation", title: "How Protocols Mitigate Risk", level: 2 }, { id: "evaluating-risk", title: "Evaluating Oracle Risk", level: 2 }]}
      faqs={[
        { question: "What oracle do most lending protocols use?", answer: "Chainlink is the most widely used oracle for DeFi lending, providing decentralized price feeds for hundreds of assets across multiple chains. Other oracles include Pyth Network (popular on Solana), Uniswap TWAP oracles, and Chronicle (used by MakerDAO). Some protocols use multiple oracle sources." },
        { question: "How can oracles be manipulated?", answer: "On-chain oracles using DEX spot prices can be manipulated through large trades or flash loans that temporarily move prices. Centralized oracle nodes can be compromised. Price feed delays during extreme volatility can cause stale data. Low-liquidity assets are particularly vulnerable to price manipulation." },
        { question: "What happens when an oracle fails?", answer: "An oracle failure can cause incorrect liquidations (if prices are reported too low) or prevent necessary liquidations (if prices are reported too high). In extreme cases, attackers can exploit oracle failures to borrow more than their collateral is worth, creating bad debt in the lending pool." },
      ]}
      relatedArticles={[
        { title: "Lending Pool Mechanics", href: "/defi-lending/learn/lending-pool-mechanics", category: "DeFi Lending" },
        { title: "Lending Risk Management", href: "/defi-lending/learn/lending-risk-management", category: "DeFi Lending" },
        { title: "Flash Loan Guide", href: "/crypto-loans/learn/flash-loan-guide", category: "Crypto Loans" },
      ]}
    >
      <h2 id="how-oracles-work">How Lending Oracles Work</h2>
      <p>Lending protocols need to know the current price of every supported asset to calculate collateral values and health factors. Chainlink price feeds aggregate data from multiple off-chain exchanges and data providers, with a decentralized network of nodes reaching consensus on the price. These feeds update when the price moves beyond a deviation threshold (typically 0.5-1%) or after a heartbeat period (typically 1 hour). The protocol reads the latest price from the Chainlink contract whenever it needs to evaluate a position. Some protocols use on-chain TWAP (Time-Weighted Average Price) oracles that calculate the average price over a period from DEX trading data. TWAPs are more resistant to flash loan manipulation but slower to react to genuine rapid price movements. Hybrid approaches use Chainlink as the primary oracle with TWAP as a secondary check or fallback.</p>

      <h2 id="attack-vectors">Oracle Attack Vectors</h2>
      <p>Flash loan-based oracle attacks have been the most common and devastating. An attacker borrows a large amount through a flash loan, uses it to manipulate a DEX price, exploits a protocol that reads that manipulated price (to borrow more than their collateral is worth), and repays the flash loan. This was the attack pattern behind numerous multi-million dollar exploits. Price feed staleness during extreme volatility can also be exploited: if an oracle reports a stale (old) price while the actual market price has crashed, borrowers can have positions that should be liquidated but are not. Compromised oracle nodes can report incorrect prices. Multi-oracle circuits with sanity checks help prevent this but add complexity. Low-liquidity assets are particularly vulnerable because smaller capital can move their price significantly, and oracle feeds for illiquid assets may have fewer data sources and slower updates.</p>

      <h2 id="mitigation">How Protocols Mitigate Risk</h2>
      <p>Decentralized oracle networks like Chainlink with multiple independent nodes and data sources are more resistant to manipulation than single-source oracles. Deviation-based updates ensure prices stay current during volatile periods. Heartbeat mechanisms provide guaranteed minimum update frequency. Lending protocols add additional protections: Aave implements supply and borrow caps that limit maximum exposure per asset, reducing the potential damage from oracle exploitation. Isolation mode quarantines new assets so their risk does not affect the broader protocol. Price sanity checks compare the oracle price against historical data or secondary sources, rejecting suspicious values. Circuit breakers can pause markets if extreme price movements are detected. Governance risk analysis from firms like Gauntlet and Chaos Labs evaluates oracle reliability as part of asset onboarding and parameter recommendations.</p>

      <h2 id="evaluating-risk">Evaluating Oracle Risk</h2>
      <p>When assessing oracle risk for a lending protocol, consider: which oracle provider is used and what is their track record? How many data sources feed the oracle for each asset? What is the update frequency and deviation threshold? Does the protocol have fallback oracles or circuit breakers? For each asset you use as collateral, evaluate the liquidity of the asset on the exchanges the oracle samples from. Low-liquidity assets with concentrated trading volume are higher risk. Check whether the protocol has been the target of oracle attacks historically. Newer assets and smaller-cap tokens carry the highest oracle risk because they have less liquid markets and fewer oracle data sources. Stick to assets with deep Chainlink price feed support for the safest lending experience. The cost of oracle risk is rarely priced into lending rates, making it an important factor to evaluate independently.</p>
    </LearnPageLayout>
  );
}
