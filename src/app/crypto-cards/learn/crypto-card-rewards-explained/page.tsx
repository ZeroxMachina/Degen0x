import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Rewards Explained: Cashback, Points & Tokens (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Understand how crypto card rewards work including cashback in tokens, category-based rewards, staking boosts, and how to maximize the value of your crypto card rewards.",
};

export default function CryptoCardRewardsExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Card Rewards Explained: Cashback, Points & Tokens"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="9 min"
      intro="Crypto cards offer rewards that look similar to traditional credit card cashback but work quite differently under the hood. Instead of dollars back, you earn tokens, Bitcoin, or other cryptocurrencies. The value of these rewards depends on the token you earn, when you sell, and how the reward program is structured. This guide explains every reward model so you can choose wisely."
      toc={[
        { id: "reward-types", title: "reward-types", level: 2 },
        { id: "types-of-crypto-card-rewards", title: "Types of Crypto Card Rewards", level: 2 },
        { id: "token-rewards", title: "token-rewards", level: 2 },
        { id: "native-token-rewards-cro-wxt-plu", title: "Native Token Rewards (CRO, WXT, PLU)", level: 2 },
        { id: "crypto-choice", title: "crypto-choice", level: 2 },
        { id: "choose-your-crypto-rewards", title: "Choose-Your-Crypto Rewards", level: 2 },
        { id: "staking-boosts", title: "staking-boosts", level: 2 },
        { id: "staking-boosts-and-tier-systems", title: "Staking Boosts and Tier Systems", level: 2 },
        { id: "maximizing-rewards", title: "maximizing-rewards", level: 2 },
        { id: "maximizing-your-reward-value", title: "Maximizing Your Reward Value", level: 2 }
      ]}
      faqs={[
        {
          question: "Are crypto card rewards taxable?",
          answer:
            "In most jurisdictions, crypto rewards earned from spending are treated as income and may be taxable at the time you receive them. The tax is typically based on the fair market value of the token at the moment of receipt. Consult a tax professional for guidance specific to your country.",
        },
        {
          question: "Should I immediately sell my reward tokens?",
          answer:
            "It depends on your outlook on the token. If the reward token is a platform-specific coin like CRO or WXT, holding it may unlock additional benefits like higher staking tiers. If you prefer certainty, converting rewards to stablecoins or Bitcoin shortly after receipt locks in their value.",
        },
        {
          question: "Which crypto card offers the highest rewards?",
          answer:
            "Binance Card and Plutus Card both advertise up to 8% cashback at their highest tiers. However, achieving these rates requires significant token holdings or paid subscriptions. For no-staking rewards, the Coinbase Card at up to 4% and the Bybit Card at 2% standard are strong options.",
        },
        {
          question: "Do crypto card rewards compound like staking?",
          answer:
            "Not automatically. Crypto card rewards are typically deposited into your wallet after each transaction. However, some platforms let you stake your earned rewards for additional yield, effectively creating a compounding effect if you reinvest your cashback into staking or earn products.",
        },
      ]}
      relatedArticles={[
        {
          title: "Cashback vs Rewards: Which Crypto Card Type Is Better?",
          href: "/crypto-cards/learn/cashback-vs-rewards",
          category: "Crypto Cards",
        },
        {
          title: "Staking for Card Tiers: Is It Worth It?",
          href: "/crypto-cards/learn/staking-for-card-tiers",
          category: "Crypto Cards",
        },
        {
          title: "Best Strategies to Maximize Crypto Card Rewards",
          href: "/crypto-cards/learn/best-card-strategies",
          category: "Crypto Cards",
        },
        {
          title: "Tax Implications of Crypto Cards",
          href: "/crypto-cards/learn/crypto-card-tax-implications",
          category: "Crypto Cards",
        },
      ]}
    >
      <h2 id="reward-types">Types of Crypto Card Rewards</h2>
      <p>
        Crypto card rewards fall into three main categories. The first is flat-rate cashback in a
        native platform token. Cards like Crypto.com (CRO), Wirex (WXT), and Plutus (PLU) pay
        rewards in their own tokens at a fixed percentage on all purchases. The second is
        choose-your-crypto rewards, where cards like Coinbase and Gemini let you pick which
        cryptocurrency you want to earn. The third is category-based rewards, where different
        spending categories earn different rates.
      </p>
      <p>
        Each model has trade-offs. Native token rewards often offer the highest headline rates but
        tie your reward value to a single token&apos;s price. Choose-your-crypto models provide
        flexibility but may offer lower rates for popular assets. Category-based rewards optimize
        for specific spending patterns but may underperform for general purchases.
      </p>

      <h2 id="token-rewards">Native Token Rewards (CRO, WXT, PLU)</h2>
      <p>
        Many crypto card providers pay rewards in their own native token. Crypto.com pays in CRO,
        Wirex pays in WXT, and Plutus pays in PLU. These tokens are integral to each platform&apos;s
        ecosystem and often unlock additional benefits when held or staked. The advertised cashback
        rates for native token rewards are typically higher than for general crypto rewards because
        the provider controls the token supply.
      </p>
      <p>
        The risk with native token rewards is concentration. If you earn all your cashback in CRO
        and CRO&apos;s price drops 50%, your effective reward rate is halved. This has happened
        historically with several platform tokens. To mitigate this risk, some users convert their
        reward tokens to Bitcoin, Ethereum, or stablecoins regularly.
      </p>
      <p>
        On the positive side, holding native tokens often qualifies you for higher reward tiers,
        creating a flywheel effect. The more you spend, the more tokens you earn, which can push
        you into higher tiers with even better rates. This only works well when the token maintains
        or grows in value.
      </p>

      <h2 id="crypto-choice">Choose-Your-Crypto Rewards</h2>
      <p>
        Cards like Coinbase and Gemini let you select which cryptocurrency you want to earn as
        rewards. Coinbase Card offers different rates depending on your chosen asset, with higher
        rates for less popular tokens and lower rates for BTC and ETH. Gemini Credit Card pays a
        fixed category rate regardless of which crypto you choose from its 60-plus supported assets.
      </p>
      <p>
        This model gives you diversification control. You can earn Bitcoin for long-term savings,
        Ethereum for DeFi participation, or stablecoins for a predictable return. The flexibility
        makes these cards appealing to users who do not want to accumulate a single platform token.
      </p>
      <p>
        The trade-off is typically lower headline rates compared to native token rewards. Where
        Crypto.com might offer 5% in CRO, Coinbase offers 1% in BTC or up to 4% in less
        established tokens. The effective value depends on which tokens you choose and how they
        perform over time.
      </p>

      <h2 id="staking-boosts">Staking Boosts and Tier Systems</h2>
      <p>
        Many crypto cards use staking or token-holding tiers to determine your reward rate. Crypto.com
        has five tiers ranging from $0 to $400,000 in CRO staking, with cashback rates from 1% to 5%.
        Binance Card ties its tiers to BNB holdings rather than staking, meaning your BNB is not
        locked but must remain in your account for the tier to apply.
      </p>
      <p>
        The staking boost model incentivizes platform loyalty and token holding but introduces
        significant risk. If you stake $40,000 in CRO for the Icy White card at 5% cashback and CRO
        drops 50%, you have lost $20,000 in staking value. The cashback from spending would need to be
        extremely high to offset that loss.
      </p>
      <p>
        Before committing to a staking tier, calculate the breakeven point. Consider how much you
        would need to spend monthly to generate enough cashback to justify the staked amount, and
        factor in the risk of token depreciation. For many users, the mid-tier options ($400 to $4,000
        staking) offer the best risk-adjusted return.
      </p>

      <h2 id="maximizing-rewards">Maximizing Your Reward Value</h2>
      <p>
        The first strategy for maximizing rewards is to match your card to your spending pattern. If
        you eat out frequently, the Gemini Credit Card at 3% on dining may outperform a flat 2% card.
        If you spend consistently across categories, a flat-rate card like Crypto.com simplifies the
        math.
      </p>
      <p>
        Second, consider the timing of reward conversion. If you earn rewards in a volatile token,
        setting price alerts or regular conversion schedules can help you lock in gains. Some users
        convert rewards weekly; others hold for potential appreciation. There is no universally correct
        approach, but having a strategy prevents emotional decision-making.
      </p>
      <p>
        Third, use card perks strategically. If your card offers Spotify or Netflix reimbursement,
        make sure you are using those subscriptions through the card to capture the full value. These
        perks can add $20 to $40 in monthly value on top of cashback, significantly boosting your
        total return from the card.
      </p>
    </LearnPageLayout>
  );
}
