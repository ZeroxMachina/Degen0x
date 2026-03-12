import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Card Limits Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand spending limits, ATM limits, and loading limits on crypto cards. Learn how card tiers affect limits and how to increase your transaction limits.",
  keywords: ["crypto card limits", "crypto card spending limit", "crypto card ATM limit", "crypto card loading limit"],
};

export default function CryptoCardLimitsPage() {
  return (
    <LearnPageLayout
      title="Crypto Card Limits Explained"
      categoryName="Crypto Cards"
      categorySlug="crypto-cards"
      readTime="7 min"
      intro="Every crypto card has limits on spending, ATM withdrawals, and card loading that can affect how you use the card in daily life. These limits vary significantly between platforms and card tiers, with premium tiers generally offering much higher limits. Understanding these limits before choosing a card helps ensure it meets your spending needs without inconvenient restrictions."
      toc={[
        { id: "types-of-limits", title: "types-of-limits", level: 2 },
        { id: "types-of-card-limits", title: "Types of Card Limits", level: 2 },
        { id: "tier-based-limits", title: "tier-based-limits", level: 2 },
        { id: "tier-based-limits", title: "Tier-Based Limits", level: 2 },
        { id: "increasing-limits", title: "increasing-limits", level: 2 },
        { id: "how-to-increase-limits", title: "How to Increase Limits", level: 2 },
        { id: "working-within-limits", title: "working-within-limits", level: 2 },
        { id: "working-within-limits", title: "Working Within Limits", level: 2 }
      ]}
      faqs={[
        { question: "What happens if I exceed my spending limit?", answer: "Transactions that exceed your daily or monthly spending limit will be declined. The card platform does not charge an over-limit fee in most cases. The limit typically resets at midnight UTC or at the beginning of the next monthly period, depending on the platform and limit type." },
        { question: "Can I increase my crypto card limits?", answer: "Yes, most platforms allow limit increases through upgrading to a higher card tier, completing additional KYC verification, or requesting a manual limit review for high-value users. Premium tiers typically have limits that are two to ten times higher than basic tiers." },
      ]}
      relatedArticles={[
        { title: "How Crypto Cards Work", href: "/crypto-cards/learn/how-crypto-cards-work", category: "Crypto Cards" },
        { title: "Crypto Card Fees Guide", href: "/crypto-cards/learn/crypto-card-fees-guide", category: "Crypto Cards" },
      ]}
    >
      <section id="types-of-limits">
        <h2>Types of Card Limits</h2>
        <p>Crypto cards impose several types of limits. Daily spending limits cap the total amount you can spend in a single day, typically ranging from $2,500 to $25,000 depending on the card and tier. Monthly spending limits restrict total monthly spending, generally from $25,000 to $100,000 or more for premium tiers. Single transaction limits cap individual purchases, with most cards allowing transactions up to $5,000 to $10,000. ATM daily withdrawal limits are usually $200 to $1,000 for basic tiers and $1,000 to $5,000 for premium tiers. Monthly ATM limits further restrict total cash access. Card loading limits determine how much fiat or crypto you can add to your card per day or month. Free ATM withdrawal limits specify how much you can withdraw before ATM fees apply, separate from the absolute withdrawal limit. Online transaction limits may differ from in-store limits on some platforms. Understanding each type of limit and how they interact helps you plan your card usage and avoid unexpected declines on important purchases.</p>
      </section>
      <section id="tier-based-limits">
        <h2>Tier-Based Limits</h2>
        <p>Card tiers dramatically affect available limits. On the Crypto.com platform, the base Midnight Blue tier has a daily spending limit significantly lower than the top-tier Obsidian card. The Crypto.com Jade Green tier, which requires $4,000 in CRO staking, roughly doubles the limits of the base tier. Higher tiers continue to increase limits progressively. Binance Card tiers based on BNB holding similarly scale limits with tier level. Coinbase Card limits are primarily based on KYC verification level rather than staking, with standard and enhanced verification tiers. For most everyday spending, even basic tier limits are sufficient. The situations where limits become problematic are large one-time purchases like electronics or travel bookings, business expenses, and frequent ATM usage. If you anticipate needing higher limits, factor this into your card tier decision alongside the cashback rates and perks. Some platforms publish their limits transparently, while others require contacting support or checking account settings. Verify the specific limits for your tier before relying on the card for large transactions.</p>
      </section>
      <section id="increasing-limits">
        <h2>How to Increase Limits</h2>
        <p>Several methods can increase your crypto card limits. Upgrading your card tier is the most common approach, with each tier providing progressively higher limits. This typically requires additional staking for staking-based cards or meeting other qualification criteria. Enhanced KYC verification can unlock higher limits on some platforms. Providing additional identity documentation, proof of income, or source of funds documentation allows the platform to increase your limits within regulatory guidelines. Some platforms offer temporary limit increases for specific needs, such as a large planned purchase. Contact customer support in advance of the transaction to request a one-time increase. Business accounts may have higher limits than personal accounts, with some platforms offering dedicated business card products with enterprise-level limits. Building a transaction history with the platform may also lead to automatic limit increases over time, as the platform gains confidence in your usage patterns. For users who consistently need limits beyond what their card platform offers, consider splitting large purchases across multiple payment methods or platforms.</p>
      </section>
      <section id="working-within-limits">
        <h2>Working Within Limits</h2>
        <p>Practical strategies help you work within card limits effectively. For large purchases, check whether the merchant accepts split payments across two transactions if the amount exceeds your single transaction limit. Pre-load your card with the exact amount needed for a planned large purchase to avoid loading limit issues on the day of purchase. For ATM withdrawals, plan ahead to stay within your free withdrawal limit and avoid fees. If you need more cash access, withdraw on consecutive days to use multiple daily limits rather than exceeding a single day's allowance. For international travel, consider increasing your limits before departure, as daily limit resets may happen at inconvenient times based on your home time zone. Keep a backup payment method for situations where card limits might be reached. Monitor your spending relative to limits through the card platform's app, which typically shows remaining daily and monthly allowances. Setting up transaction notifications helps you track limit usage in real time and avoid unexpected declines at checkout.</p>
      </section>
    </LearnPageLayout>
  );
}
