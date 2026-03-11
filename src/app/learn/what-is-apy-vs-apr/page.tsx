import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `APY vs APR: What's the Difference? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn the difference between APY and APR in crypto, how compounding affects yields, how to compare DeFi rates accurately, and avoid common yield calculation mistakes.",
  keywords: ["APY", "APR", "APY vs APR", "crypto yields", "DeFi yields", "compound interest", "staking rewards"],
};

export default function WhatIsApyVsAprPage() {
  return (
    <LearnPageLayout
      title="APY vs APR: What's the Difference?"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="APR (Annual Percentage Rate) and APY (Annual Percentage Yield) are two ways of expressing the return on your crypto investments, but they can produce very different numbers for the same underlying opportunity. Understanding the distinction is essential for accurately comparing DeFi yields, staking rewards, and lending rates — and avoiding the common trap of chasing headline numbers that do not reflect actual returns."
      toc={[
        { id: "apr-explained", title: "APR Explained", level: 2 },
        { id: "apy-explained", title: "APY Explained", level: 2 },
        { id: "key-difference", title: "The Key Difference", level: 2 },
        { id: "defi-context", title: "APY and APR in DeFi", level: 2 },
        { id: "comparing-yields", title: "How to Compare Yields", level: 2 },
      ]}
      faqs={[
        { question: "Which is higher, APY or APR?", answer: "APY is always equal to or higher than APR for the same opportunity because APY includes the effect of compounding. The more frequently rewards are compounded, the larger the gap between APY and APR. A 100% APR compounded daily equals approximately 171.5% APY." },
        { question: "Are DeFi yields guaranteed?", answer: "No. DeFi yields are variable and can change at any moment based on supply and demand, protocol parameters, and market conditions. The APY or APR displayed is typically based on current conditions and does not guarantee future returns. Yields can drop significantly as more capital enters a pool." },
        { question: "Why do DeFi yields seem so much higher than traditional finance?", answer: "DeFi yields can be higher due to several factors: risk premiums for smart contract and protocol risk, token emissions that subsidize yields, leverage amplification, and the efficiency of automated market making. However, higher yields always come with correspondingly higher risks." },
        { question: "How often should I compound my DeFi rewards?", answer: "The optimal compounding frequency depends on gas costs versus reward size. On Ethereum mainnet, frequent compounding may not be cost-effective for small positions due to gas fees. On Layer 2 networks with low fees, more frequent compounding is practical. Auto-compounding vaults handle this automatically." },
      ]}
      relatedArticles={[
        { title: "What Is Yield Farming?", href: "/learn/what-is-yield-farming", category: "Learn" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn" },
        { title: "How to Provide Liquidity", href: "/learn/how-to-provide-liquidity", category: "Learn" },
        { title: "What Is Impermanent Loss?", href: "/learn/what-is-impermanent-loss", category: "Learn" },
      ]}
    >
      <section id="apr-explained">
        <h2>APR Explained</h2>
        <p>
          Annual Percentage Rate (APR) is the simple annual rate of return without accounting for compounding. If a staking opportunity offers 10% APR and you stake $1,000, you would earn $100 over a full year, regardless of when or how often rewards are distributed. APR is a straightforward, linear measure — it simply tells you the yearly return as a percentage of your initial deposit.
        </p>
        <p>
          In the crypto context, APR is commonly used for lending rates, staking yields, and liquidity provision returns. When a lending protocol shows a 5% APR for depositing USDC, it means you will earn approximately $50 per year on a $1,000 deposit, calculated as simple interest. APR is useful because it is easy to understand and compare, but it underestimates actual returns if you reinvest earnings.
        </p>
      </section>

      <section id="apy-explained">
        <h2>APY Explained</h2>
        <p>
          Annual Percentage Yield (APY) accounts for the effect of compounding — earning returns on your returns. If you earn rewards daily and reinvest them, tomorrow's rewards are calculated on your original deposit plus yesterday's rewards. Over time, this compounding effect produces significantly more returns than simple interest. A 10% APR compounded daily results in an APY of approximately 10.52%.
        </p>
        <p>
          The impact of compounding becomes dramatic at higher rates. A 50% APR compounded daily produces an APY of about 64.8%. A 100% APR compounded daily yields approximately 171.5% APY. This is why many DeFi protocols advertise APY rather than APR — the numbers look much more impressive. Understanding this distinction prevents you from being misled by headline yield figures that assume constant compounding at current rates.
        </p>
      </section>

      <section id="key-difference">
        <h2>The Key Difference</h2>
        <p>
          The fundamental difference is that APR measures simple interest while APY measures compound interest. APR tells you the nominal rate of return — what percentage of your deposit you earn per year if you never reinvest. APY tells you the effective rate of return — what you actually earn if you reinvest rewards at the stated frequency. The gap between APR and APY grows larger with higher interest rates and more frequent compounding.
        </p>
        <p>
          When comparing opportunities, always ensure you are comparing like with like. An opportunity showing 50% APY may actually be less attractive than one showing 40% APR if the first requires active compounding while the second auto-compounds. Always ask: is this APR or APY? How frequently does it compound? Is compounding automatic or manual? Does the gas cost of manual compounding significantly reduce actual returns?
        </p>
      </section>

      <section id="defi-context">
        <h2>APY and APR in DeFi</h2>
        <p>
          DeFi protocols use APR and APY inconsistently, which creates confusion. Lending protocols like Aave typically display APY for deposit rates and APR for borrow rates. Liquidity mining programs often show APR for token rewards. Yield aggregators like Yearn show APY because they auto-compound. Staking dashboards may show either metric. Always check which metric a protocol is using and whether it includes all reward components (base yield, token incentives, and trading fees).
        </p>
        <p>
          A critical caveat is that both APR and APY in DeFi are instantaneous snapshots, not guaranteed annual rates. They are calculated based on current conditions — current utilization rates, current token prices, current liquidity levels — which can change minute by minute. A lending rate showing 10% APY might drop to 2% APY tomorrow if large deposits enter the pool. Treat displayed rates as indicative, not promised, and monitor your positions regularly.
        </p>
      </section>

      <section id="comparing-yields">
        <h2>How to Compare Yields</h2>
        <p>
          To accurately compare yield opportunities, normalize everything to the same metric. Convert APR to APY using the formula: APY = (1 + APR/n)^n - 1, where n is the number of compounding periods per year. Factor in all costs including gas fees for claiming and compounding, entry and exit fees, and the opportunity cost of locked capital during unbonding periods.
        </p>
        <p>
          Most importantly, adjust for risk. A 5% APY on a battle-tested, audited lending protocol with billions in TVL is fundamentally different from a 500% APY on a new, unaudited farm. The higher yield exists precisely because the market demands greater compensation for taking on more risk. Evaluate the sustainability of the yield source — is it coming from real economic activity (trading fees, borrowing demand) or from token emissions that may decrease over time?
        </p>
      </section>
    </LearnPageLayout>
  );
}
