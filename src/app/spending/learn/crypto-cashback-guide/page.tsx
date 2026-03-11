import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Earning Crypto Cashback on Purchases (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how to earn Bitcoin and crypto cashback on everyday purchases. Compare crypto debit cards, browser extensions, and cashback apps for maximum rewards.",
};

export default function CryptoCashbackGuidePage() {
  return (
    <LearnPageLayout
      title="Earning Crypto Cashback on Purchases"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Earning cryptocurrency cashback on everyday purchases is one of the easiest ways to accumulate Bitcoin and other digital assets without actively buying them. From crypto debit cards offering 1-8% back to browser extensions that reward online shopping, there are numerous ways to earn crypto passively through your normal spending habits. This guide covers every method for maximizing your crypto cashback earnings."
      toc={[
        { id: "debit-card-cashback", title: "Crypto Debit Card Cashback", level: 2 },
        { id: "browser-extensions", title: "Browser Extension Rewards", level: 2 },
        { id: "cashback-apps", title: "Crypto Cashback Apps", level: 2 },
        { id: "stacking-rewards", title: "Stacking Multiple Rewards", level: 2 },
        { id: "tax-implications", title: "Tax Implications of Cashback", level: 2 },
      ]}
      faqs={[
        { question: "Is crypto cashback taxable?", answer: "In the US, crypto cashback from purchases is generally treated as a discount on the purchase rather than income, similar to traditional credit card rewards. However, sign-up bonuses and referral rewards may be taxable as ordinary income. Tax treatment varies by jurisdiction, so consult a tax professional for your specific situation." },
        { question: "Which crypto card has the highest cashback?", answer: "Crypto.com's Obsidian tier offers 5% cashback but requires a $400,000 CRO stake. For more accessible options, the Crypto.com Jade/Indigo tier offers 3% with a $4,000 stake. Fold Card offers up to 1.5% guaranteed Bitcoin back with the premium plan. The best card depends on your staking willingness and spending volume." },
        { question: "Can I earn crypto cashback without a crypto card?", answer: "Yes. Browser extensions like Lolli earn Bitcoin cashback at over 10,000 online stores without any card. Satsback serves European users. Gift card platforms like Fold and Bitrefill offer crypto rewards on purchases. These methods work alongside any payment method you already use." },
      ]}
      relatedArticles={[
        { title: "Best Crypto Card Rewards", href: "/crypto-cards/learn/best-crypto-card-rewards", category: "Crypto Cards" },
        { title: "Online Shopping with Crypto", href: "/spending/learn/crypto-shopping-guide", category: "Spending" },
        { title: "Buying Gift Cards with Crypto", href: "/spending/learn/crypto-gift-cards", category: "Spending" },
      ]}
    >
      <h2 id="debit-card-cashback">Crypto Debit Card Cashback</h2>
      <p>Crypto debit cards are the most consistent way to earn cashback in cryptocurrency. Crypto.com Visa cards offer 1-5% CRO cashback based on staking tier. The Coinbase Card earns up to 4% back in your choice of cryptocurrency. The Fold Card provides Bitcoin back on every purchase through its rewards system. Plutus Card offers up to 8% PLU token rewards with selectable merchant perks. The rewards are earned on every purchase where you use the card, making them the highest-volume cashback method for most users.</p>

      <h2 id="browser-extensions">Browser Extension Rewards</h2>
      <p>Browser extensions like Lolli automatically earn you Bitcoin when you shop at partner stores through your regular web browser. Lolli works with over 10,000 online retailers including major brands, offering 1-30% cashback depending on the store and current promotions. Satsback provides similar functionality for European users. These extensions run in the background and activate when you visit a partner store, crediting Bitcoin rewards to your account after your purchase is confirmed. The rewards come from the retailer's affiliate marketing budget, so there is no additional cost to you.</p>

      <h2 id="cashback-apps">Crypto Cashback Apps</h2>
      <p>Dedicated cashback apps extend earning opportunities beyond cards and browsers. Fold App offers Bitcoin rewards on gift card purchases and debit card spending. Pei is a cashback app that rewards purchases at linked cards in Bitcoin. StakingRewards tracks and compiles crypto earning opportunities. For receipt scanning, some apps reward you with crypto for submitting purchase receipts from any retailer. These apps can be used alongside card cashback and browser extensions to stack multiple reward streams on a single purchase.</p>

      <h2 id="stacking-rewards">Stacking Multiple Rewards</h2>
      <p>The most effective strategy combines multiple cashback sources on each purchase. Start with a crypto debit card for the base cashback rate. Add a browser extension like Lolli when shopping online for an additional layer. Use gift cards purchased through Fold or Bitrefill for stores where gift card cashback exceeds card cashback. Layer in retailer loyalty programs and seasonal promotions. A well-optimized stack can yield 5-10% total crypto rewards on online purchases. The key is matching each purchase to the combination of rewards that maximizes total return.</p>

      <h2 id="tax-implications">Tax Implications of Cashback</h2>
      <p>Crypto cashback earned through purchase rewards is generally treated similarly to traditional credit card rewards in most jurisdictions. In the US, cashback received as a discount on purchases is typically not taxable income. However, crypto received as sign-up bonuses, referral rewards, or interest payments is treated as ordinary income at the fair market value when received. Once you hold the crypto cashback, any subsequent appreciation is subject to capital gains tax when sold. Keep records of the fair market value at the time you receive each reward for accurate tax reporting.</p>
    </LearnPageLayout>
  );
}
