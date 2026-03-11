import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is APY (Annual Percentage Yield)? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what APY means in crypto, how compounding works, the difference between APR and APY, and how to maximize your yield through compounding strategies.",
};

export default function ApyPage() {
  return (
    <LearnPageLayout title="What Is APY (Annual Percentage Yield)?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="APY (Annual Percentage Yield) is the annualized rate of return on an investment that accounts for the effect of compound interest. Unlike APR, which shows simple interest, APY includes the additional returns generated when earned interest is reinvested to earn more interest. In crypto, APY is commonly advertised by yield farms, auto-compounding vaults, and staking platforms to represent the total return including compounding effects."
      toc={[{ id: "definition", title: "What Is APY?", level: 2 }, { id: "compounding", title: "How Compounding Works", level: 2 }, { id: "apy-in-crypto", title: "APY in Crypto Products", level: 2 }, { id: "realistic-expectations", title: "Setting Realistic Expectations", level: 2 }]}
      faqs={[{ question: "Why do some protocols show astronomically high APY?", answer: "Extremely high APYs (1,000%+) are usually the result of two factors: high token emission rates that are unsustainable, and compounding math applied to short-term rates. A protocol offering 2% per week looks like 10,000%+ APY when annualized, but this rate rarely persists. Most extremely high APY rates decrease rapidly as more capital enters or token emissions reduce." },
        { question: "Is APY guaranteed?", answer: "No. DeFi APYs are variable and can change at any moment. They depend on market conditions, protocol usage, token prices, and emission schedules. A displayed APY represents the current rate extrapolated over a year. Actual returns may be higher or lower depending on how rates change throughout your holding period." }]}
      relatedArticles={[{ title: "APR", href: "/learn/glossary/apr", category: "Glossary" }, { title: "Yield", href: "/learn/glossary/yield", category: "Glossary" }, { title: "Farming", href: "/learn/glossary/farming", category: "Glossary" }, { title: "Vault", href: "/learn/glossary/vault", category: "Glossary" }]}
    >
      <h2 id="definition">What Is APY?</h2>
      <p>APY measures the total return on an investment over one year, including the effect of compounding. The formula is: APY = (1 + r/n)^n - 1, where r is the periodic interest rate and n is the number of compounding periods per year. Daily compounding produces higher APY than monthly compounding for the same base rate. Auto-compounding vaults like those from Yearn Finance automatically reinvest rewards, maximizing the compounding benefit without manual intervention.</p>

      <h2 id="compounding">How Compounding Works</h2>
      <p>Compounding means your earned rewards generate additional rewards. If you deposit $1,000 at 10% APR with daily compounding, after one day you earn about $0.27. The next day, you earn interest on $1,000.27, and so on. Over a year, this compounds to approximately $1,105.16 (10.52% APY) rather than $1,100 (10% APR). The more frequently compounding occurs and the higher the rate, the greater the difference between APR and APY becomes.</p>

      <h2 id="apy-in-crypto">APY in Crypto Products</h2>
      <p>Auto-compounding vaults advertise APY because they automatically reinvest rewards at regular intervals. Liquid staking protocols display APY for staked tokens that accumulate rewards continuously. Yield farms that require manual harvesting and restaking show APR since compounding depends on user action. When comparing yields, ensure you are comparing like with like: an auto-compounded 10% APY is equivalent to roughly 9.5% APR compounded daily.</p>

      <h2 id="realistic-expectations">Setting Realistic Expectations</h2>
      <p>Sustainable APYs in DeFi generally range from 2-15% for major assets and established protocols. Staking yields for major networks are 3-8% APY. Lending stablecoins typically earns 3-10% APY depending on market conditions. APYs above 20% usually involve significant risk, newer protocols, or high token emission subsidies. The golden rule is: if the yield seems too good to be true, investigate the source of the yield thoroughly before depositing significant capital.</p>
    </LearnPageLayout>
  );
}
