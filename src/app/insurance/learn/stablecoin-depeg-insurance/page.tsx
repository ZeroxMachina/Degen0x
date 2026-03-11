import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Stablecoin Depeg Insurance (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about stablecoin depeg insurance. Protect your holdings against stablecoin depegging events with DeFi insurance protocols.",
};

export default function StablecoinDepegInsurancePage() {
  return (
    <LearnPageLayout title="Stablecoin Depeg Insurance" categoryName="Crypto Insurance" categorySlug="insurance" readTime="8 min read"
      intro="Stablecoin depeg events, where a stablecoin loses its peg to its reference asset, have caused billions in losses. From UST's catastrophic collapse to USDC's brief depeg during the SVB crisis, these events demonstrate that stablecoins are not truly risk-free. Depeg insurance products have emerged to protect holders against these tail risks, offering automated payouts when stablecoins trade below defined thresholds."
      toc={[{ id: "depeg-history", title: "History of Stablecoin Depegs", level: 2 }, { id: "coverage-types", title: "Types of Depeg Coverage", level: 2 }, { id: "providers", title: "Depeg Insurance Providers", level: 2 }, { id: "evaluation", title: "Evaluating Depeg Insurance", level: 2 }]}
      faqs={[
        { question: "What causes stablecoin depegs?", answer: "Depegs can result from: insufficient reserves (algorithmic stablecoins like UST), reserve asset problems (USDC during SVB), massive sell pressure exceeding market maker capacity, smart contract exploits, regulatory actions, or loss of confidence. Different stablecoin types have different depeg risk profiles." },
        { question: "How does depeg insurance work?", answer: "Depeg insurance pays out when a stablecoin trades below a predefined threshold for a specified period. For example, a USDC depeg policy might trigger if USDC trades below $0.95 for more than 1 hour. Payouts can be parametric (automatic based on oracle data) or claims-based." },
        { question: "Which stablecoins are insurable?", answer: "Major stablecoins like USDC, USDT, DAI, and FRAX typically have coverage available through DeFi insurance protocols. Smaller or newer stablecoins may not have coverage options. Algorithmic stablecoins may be considered too risky or too expensive to insure." },
      ]}
      relatedArticles={[
        { title: "Parametric Insurance", href: "/insurance/learn/parametric-insurance", category: "Insurance" },
        { title: "Stablecoin Lending", href: "/crypto-loans/learn/stablecoin-lending", category: "Crypto Loans" },
        { title: "Insurance Cost Analysis", href: "/insurance/learn/insurance-cost-analysis", category: "Insurance" },
      ]}
    >
      <h2 id="depeg-history">History of Stablecoin Depegs</h2>
      <p>The most catastrophic stablecoin failure was UST (TerraUSD) in May 2022, which collapsed from $1 to near zero, destroying approximately $40 billion in value. UST&apos;s algorithmic design, which relied on arbitrage with the LUNA token, proved fatally flawed under sell pressure. USDC depegged briefly in March 2023 when it was revealed that $3.3 billion of Circle&apos;s reserves were held at Silicon Valley Bank, which had failed. USDC traded as low as $0.87 before recovering when the FDIC guaranteed deposits. DAI has experienced minor depegs during extreme market events due to its collateral structure. USDT has faced persistent questions about reserve backing but has maintained its peg through market crises. Each depeg event has different causes and characteristics, highlighting the importance of understanding the specific risks of each stablecoin you hold.</p>

      <h2 id="coverage-types">Types of Depeg Coverage</h2>
      <p>Parametric depeg coverage automatically pays out when the stablecoin price (as reported by an oracle) falls below a trigger threshold. The payout is predetermined and does not depend on proving individual loss. This is the fastest form of protection. Claims-based depeg coverage requires filing a claim and demonstrating loss from a depeg event. The claims process is slower but may cover a wider range of scenarios. Some products combine both approaches: automatic payout for severe depegs with claims-based coverage for less clear-cut situations. Coverage parameters to evaluate include the trigger price (how far the depeg must go to trigger payout), the observation period (how long the depeg must persist), the payout amount or formula, and the maximum coverage per policy and per pool.</p>

      <h2 id="providers">Depeg Insurance Providers</h2>
      <p>Risk Harbor offered one of the first automated depeg protection products with parametric payouts verified by on-chain oracle data. InsurAce provides stablecoin depeg coverage as part of its broader insurance offerings. Nexus Mutual has added depeg coverage to its product line. Y2K Finance on Arbitrum created markets specifically for hedging and speculating on depeg risk, using a vault-based model where users take opposing positions on whether a depeg will occur. Unslashed Finance offers coverage products that include depeg protection. The availability and pricing of depeg insurance varies with market conditions: after a major depeg event, premiums typically spike as risk awareness increases. During calm periods, premiums decrease as the perceived risk fades, even though the underlying risks may not have changed.</p>

      <h2 id="evaluation">Evaluating Depeg Insurance</h2>
      <p>When evaluating depeg insurance, consider the stablecoin&apos;s risk profile. USDC&apos;s risk is primarily reserve asset quality and Circle&apos;s financial health. USDT&apos;s risk centers on reserve transparency and Tether&apos;s operations. DAI&apos;s risk relates to its collateral composition and MakerDAO governance. Algorithmic stablecoins carry the highest depeg risk. Match the insurance cost against the probability and severity of depeg for each specific stablecoin. For large stablecoin positions, even low-probability depeg events justify insurance because the potential loss is significant. For diversified positions across multiple stablecoins, the marginal value of insurance for any single stablecoin is lower. Also consider that during a systemic crisis, multiple stablecoins might depeg simultaneously, and the insurance protocol itself might be affected. Coverage from multiple independent providers offers the best protection.</p>
    </LearnPageLayout>
  );
}
