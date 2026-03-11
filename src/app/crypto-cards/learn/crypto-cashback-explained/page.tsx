import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Cashback Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how crypto cashback rewards work. Understand reward structures, token types, staking requirements, and how to maximize your crypto card cashback.",
  keywords: ["crypto cashback explained", "how crypto cashback works", "bitcoin cashback rewards", "crypto card rewards guide"],
};

export default function CryptoCashbackExplainedPage() {
  return (
    <LearnPageLayout
      title="Crypto Cashback Explained"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="7 min"
      intro="Crypto cashback is one of the primary reasons people choose crypto cards over traditional payment cards. Instead of earning points or dollars back, crypto cards reward you with cryptocurrency on every purchase. But crypto cashback is more nuanced than traditional cashback. Reward rates may depend on staking requirements, the reward token may be volatile, and tax treatment differs from fiat cashback. This guide explains exactly how crypto cashback works and how to maximize its value."
      toc={[
        { id: "how-it-works", title: "How Crypto Cashback Works", level: 2 },
        { id: "reward-tokens", title: "Reward Token Types", level: 2 },
        { id: "staking-tiers", title: "Staking and Tier Systems", level: 2 },
        { id: "maximizing-value", title: "Maximizing Cashback Value", level: 2 },
      ]}
      faqs={[
        { question: "Is crypto cashback better than traditional cashback?", answer: "It can be. The base rates are often comparable (1-5%), but crypto cashback has upside potential if the reward token appreciates. A 2% cashback in Bitcoin earned when BTC was $20,000 would be worth much more if BTC rises to $100,000. However, it can also lose value if prices decline." },
        { question: "Is crypto cashback taxed differently than regular cashback?", answer: "In the US, cashback from spending is generally treated as a purchase discount and is not taxable when received, whether in crypto or fiat. However, when you sell or trade the crypto cashback, any gain from appreciation is subject to capital gains tax. Consult a tax professional for your specific situation." },
      ]}
      relatedArticles={[
        { title: "Best Cashback Crypto Cards", href: "/crypto-cards/best/cashback", category: "Crypto Cards" },
        { title: "Crypto Card Rewards Explained", href: "/crypto-cards/learn/crypto-card-rewards-explained", category: "Crypto Cards" },
      ]}
    >
      <section id="how-it-works">
        <h2>How Crypto Cashback Works</h2>
        <p>When you make a purchase with a crypto card, the card issuer earns an interchange fee from the merchant, typically 1% to 3% of the transaction amount. The card issuer shares a portion of this fee with you in the form of crypto rewards. The process is automatic: you spend, and crypto appears in your account. The reward is calculated as a percentage of your spending amount and converted to cryptocurrency at the current market rate. Most platforms credit rewards immediately or within a few hours of the transaction settling. The reward token is then held in your card platform account, where it may accrue further value if the token price increases. Some platforms allow immediate withdrawal of rewards to an external wallet, while others may impose holding periods or minimum withdrawal amounts. The economic model works because the interchange fee covers the cost of the reward, with the card platform retaining a margin.</p>
      </section>
      <section id="reward-tokens">
        <h2>Reward Token Types</h2>
        <p>Crypto cards offer rewards in different types of tokens, and the choice matters significantly for long-term value. Bitcoin cashback from cards like Fold and Shakepay provides rewards in the most established and liquid cryptocurrency. Bitcoin has a strong track record of appreciation over multi-year periods, making BTC cashback attractive for long-term holders. Multi-token choice cards like Coinbase Card let you select which cryptocurrency to earn as cashback from a list of options. This flexibility lets you choose tokens you believe will appreciate most. Platform tokens like CRO from Crypto.com or BNB from Binance earn you the card platform's native token. These tokens often provide additional utility within their ecosystems but carry platform-specific risk. Stablecoin cashback from some cards provides rewards in USDC or USDT, offering predictable value without volatility but no upside potential. Consider your risk tolerance and investment thesis when choosing your reward token. Bitcoin and Ethereum provide broad market exposure. Platform tokens provide concentrated exposure to a single company. Stablecoins provide certainty but no growth.</p>
      </section>
      <section id="staking-tiers">
        <h2>Staking and Tier Systems</h2>
        <p>Many crypto cards use staking-based tier systems where you lock up the platform's native token to access higher cashback rates. Crypto.com's system requires staking CRO for 180 days, with tiers ranging from zero stake for 1% cashback to $400,000 equivalent for 5% cashback. Binance requires BNB holding for its tier system with rates up to 8%. Wirex uses WXT staking for enhanced rewards. These tier systems create a trade-off: you earn higher cashback but take on concentration risk in the platform token. If the platform token declines in value, the additional cashback may not compensate for the loss on your staked tokens. Calculate the break-even point by comparing the additional cashback earned at the higher tier against the opportunity cost and risk of the staking requirement. For example, if staking $4,000 in CRO upgrades you from 1% to 3% cashback, you need $200,000 in annual spending to earn the additional $4,000 in rewards that justifies the stake. Some cards like Coinbase, Bitpay, and Shakepay offer competitive cashback without any staking requirement, making them attractive for users who want simplicity without token lockup risk.</p>
      </section>
      <section id="maximizing-value">
        <h2>Maximizing Cashback Value</h2>
        <p>Several strategies can maximize the value of your crypto cashback. Consolidate spending onto your crypto card to earn rewards on as much of your spending as possible, including bills, subscriptions, and everyday purchases. Choose a reward token you believe in long-term, as the appreciation potential is one of the unique advantages of crypto over fiat cashback. Hold your reward tokens rather than selling immediately, allowing potential appreciation to compound the value of your cashback. Stack multiple reward mechanisms by using a card that earns cashback while also earning yield on your card platform balance. Take advantage of promotional periods when cards offer boosted cashback rates on specific categories or merchants. Use your crypto card for large planned purchases to maximize the absolute reward amount. Pay attention to the conversion spread if you are spending crypto, as a high spread can negate your cashback entirely. The most effective approach combines a competitive base cashback rate with a low conversion spread, a reward token with appreciation potential, and no annual fees or staking requirements that erode the net benefit.</p>
      </section>
    </LearnPageLayout>
  );
}
