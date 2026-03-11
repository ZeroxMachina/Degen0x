import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cashback vs Rewards: Which Crypto Card Type Is Better? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Compare crypto cashback cards with rewards cards. Understand flat-rate vs category-based, token rewards vs Bitcoin, and which model delivers better long-term value.",
};

export default function CashbackVsRewardsPage() {
  return (
    <LearnPageLayout
      title="Cashback vs Rewards: Which Crypto Card Type Is Better?"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="8 min"
      intro="Crypto cards offer two main reward models: flat-rate cashback in crypto and category-based rewards with variable rates. Some cards pay in their native token, others let you choose, and true credit cards use traditional reward structures with a crypto twist. Understanding these models helps you pick the card that delivers the most value for your specific spending patterns."
      toc={[
        { id: "flat-rate-cashback", title: "Flat-Rate Crypto Cashback", level: 2 },
        { id: "category-based", title: "Category-Based Rewards", level: 2 },
        { id: "token-vs-choice", title: "Native Token vs Choose-Your-Own", level: 2 },
        { id: "which-is-better", title: "Which Model Wins for You?", level: 2 },
      ]}
      faqs={[
        {
          question: "Is a flat 3% cashback better than 5% on dining and 1% on everything else?",
          answer:
            "It depends on your spending mix. If dining is less than 30% of your total spending, the flat 3% likely earns more overall. Calculate your expected earnings with each model using your actual monthly spending breakdown to determine which card is better for you.",
        },
        {
          question: "Are native token rewards worth more than Bitcoin rewards?",
          answer:
            "Native token rewards typically offer higher percentage rates but carry more risk due to lower liquidity and single-platform dependency. Bitcoin rewards are usually lower in percentage but reward you with a more established asset. The choice depends on your risk tolerance and whether you value quantity of rewards or quality of the reward asset.",
        },
        {
          question: "Can I earn stablecoin rewards instead of volatile crypto?",
          answer:
            "Some cards allow you to choose stablecoins like USDC or USDT as your reward currency. This gives you the certainty of a fixed dollar value for your rewards. Coinbase Card allows you to select USDC as your reward currency, though the cashback percentage may be lower than for other crypto options.",
        },
        {
          question: "Do higher cashback rates always mean more value?",
          answer:
            "No. A 5% cashback rate in a token that drops 60% is effectively 2% cashback. Meanwhile, a 2% rate in Bitcoin that appreciates 50% becomes effectively 3%. The nominal cashback percentage is just one factor; the long-term performance and stability of the reward currency matters equally.",
        },
      ]}
      relatedArticles={[
        {
          title: "Crypto Card Rewards Explained",
          href: "/crypto-cards/learn/crypto-card-rewards-explained",
          category: "Crypto Cards",
        },
        {
          title: "Best Strategies to Maximize Crypto Card Rewards",
          href: "/crypto-cards/learn/best-card-strategies",
          category: "Crypto Cards",
        },
        {
          title: "Staking for Card Tiers: Is It Worth It?",
          href: "/crypto-cards/learn/staking-for-card-tiers",
          category: "Crypto Cards",
        },
        {
          title: "How to Choose the Right Crypto Card",
          href: "/crypto-cards/learn/how-to-choose-crypto-card",
          category: "Crypto Cards",
        },
      ]}
    >
      <h2 id="flat-rate-cashback">Flat-Rate Crypto Cashback</h2>
      <p>
        Flat-rate cashback cards offer the same percentage back on every purchase regardless of
        category. Crypto.com offers up to 5% on all spending. The Bybit Card offers 2% standard
        on everything. This model is simple to understand and works well for users with diversified
        spending that does not concentrate in any particular category.
      </p>
      <p>
        The advantage of flat-rate cards is predictability. You know exactly how much you will earn
        on every transaction without needing to track which merchant falls into which category.
        This simplicity appeals to users who do not want to optimize their card usage for every
        purchase.
      </p>
      <p>
        The downside is that you leave money on the table in high-reward categories. If you spend
        $800 per month on dining and a category card offers 3% on restaurants versus your flat 2%,
        you are missing $8 per month in additional rewards. Over a year, these missed category
        bonuses can add up to meaningful amounts.
      </p>

      <h2 id="category-based">Category-Based Rewards</h2>
      <p>
        Category-based cards like the Gemini Credit Card offer different cashback rates for different
        spending types. Gemini pays 3% on dining, 2% on groceries, and 1% on everything else. This
        model rewards users who spend heavily in bonus categories but gives a lower rate for
        general purchases.
      </p>
      <p>
        The math often favors category cards for users with concentrated spending patterns. A user
        who spends $1,000 on dining, $600 on groceries, and $1,400 on everything else earns $30 +
        $12 + $14 = $56 per month from Gemini, versus $60 from a flat 2% card. But at a flat 3%,
        the flat card earns $90 versus Gemini&apos;s $56. The comparison is highly dependent on both
        the rates and the spending distribution.
      </p>
      <p>
        Category cards work best when you naturally spend a large portion of your budget in
        high-reward categories. If dining and groceries represent more than half your spending, a
        category card can significantly outperform a flat-rate alternative.
      </p>

      <h2 id="token-vs-choice">Native Token vs Choose-Your-Own</h2>
      <p>
        Cards that pay in their own native token (CRO, WXT, PLU) typically offer higher headline
        cashback rates because the provider controls the token supply. The trade-off is that you
        accumulate a single, often less-liquid token. If the platform struggles or the token loses
        market confidence, your accumulated rewards can lose value rapidly.
      </p>
      <p>
        Choose-your-own cards like Coinbase and Gemini let you pick from a range of cryptocurrencies.
        Selecting Bitcoin or Ethereum for your rewards means you are accumulating established assets
        with deep liquidity and broader market adoption. The reward rates may be lower (1% in BTC
        vs 5% in CRO), but the risk profile is substantially different.
      </p>
      <p>
        A pragmatic approach is to evaluate the risk-adjusted return. If you are considering earning
        5% in CRO vs 1% in BTC, ask whether CRO is likely to maintain at least 20% of its value
        relative to BTC over the period you plan to hold. If not, the 1% BTC reward is actually
        more valuable on a risk-adjusted basis.
      </p>

      <h2 id="which-is-better">Which Model Wins for You?</h2>
      <p>
        For simplicity-focused users who spend broadly across categories, a flat-rate cashback card
        is usually best. The Crypto.com Visa at higher tiers or the Bybit Card offer consistent
        returns without requiring category tracking.
      </p>
      <p>
        For users with concentrated spending in dining and groceries, a category-based card like the
        Gemini Credit Card can deliver higher total rewards. The additional complexity of tracking
        categories is offset by the 2% to 3% rates in high-spend areas.
      </p>
      <p>
        For risk-conscious users who want reliable reward value, choosing to earn in Bitcoin or
        Ethereum provides exposure to established assets with proven long-term performance. The lower
        headline rate is compensated by the quality and stability of the reward asset.
      </p>
      <p>
        For users willing to take on more risk for higher potential returns, native token rewards
        offer the highest cashback percentages. These cards work best when you believe in the
        platform&apos;s long-term success and plan to hold or use the reward tokens within that
        ecosystem.
      </p>
    </LearnPageLayout>
  );
}
