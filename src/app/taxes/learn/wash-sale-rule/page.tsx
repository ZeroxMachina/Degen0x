import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Wash Sale Rule ${CURRENT_YEAR} - Does It Apply to Crypto?`,
  description: `Learn about the wash sale rule and cryptocurrency for ${CURRENT_YEAR}. Current IRS rules, proposed legislation, and how to take advantage of the current exemption.`,
  alternates: { canonical: "/taxes/learn/wash-sale-rule" },
};

const toc = [
  { id: "what-is-wash-sale", title: "What Is the Wash Sale Rule?", level: 2 },
  { id: "crypto-exemption", title: "Crypto's Current Exemption", level: 2 },
  { id: "proposed-changes", title: "Proposed Legislation", level: 2 },
  { id: "taking-advantage", title: "Using the Exemption", level: 2 },
  { id: "future-planning", title: "Planning for Changes", level: 2 },
];

const faqs = [
  { question: "Does the wash sale rule apply to crypto?", answer: "Currently, no. The IRS wash sale rule (Section 1091) applies to stocks and securities. Since the IRS classifies crypto as property (not a security), the wash sale rule does not apply. You can sell crypto at a loss and immediately repurchase it, claiming the tax loss. However, proposed legislation may change this." },
  { question: "What is the 30-day wash sale window?", answer: "For stocks, the wash sale rule disallows a loss deduction if you purchase a substantially identical security within 30 days before or after the sale at a loss (creating a 61-day window). The disallowed loss is added to the cost basis of the replacement security. This rule currently does not apply to crypto." },
  { question: "When might the wash sale rule apply to crypto?", answer: "The Build Back Better Act and other proposed legislation have included provisions to extend the wash sale rule to digital assets. While no law has been enacted yet, it is widely expected that crypto will eventually be subject to wash sale rules. Monitor legislative developments and plan accordingly." },
];

export default function WashSaleRulePage() {
  return (
    <LearnPageLayout
      title="Crypto and the Wash Sale Rule"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="8 min"
      intro="The wash sale rule is one of the most discussed tax topics in crypto because cryptocurrency is currently exempt from it. This creates a significant tax planning advantage that stock investors do not have. Understanding the current rules and proposed changes helps you make the most of this opportunity while it lasts."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Tax-Loss Harvesting", href: "/taxes/learn/tax-loss-harvesting", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "Complete Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
      ]}
    >
      <section id="what-is-wash-sale" className="mb-10">
        <h2>What Is the Wash Sale Rule?</h2>
        <p>
          The wash sale rule (IRC Section 1091) prevents investors from claiming a tax loss on
          an asset if they purchase a substantially identical asset within 30 days before or
          after the sale. The rule exists to prevent investors from selling at a loss purely for
          tax benefits while maintaining their economic position.
        </p>
        <p>
          For stocks, if you sell shares at a $5,000 loss and buy the same stock back within 30
          days, the $5,000 loss is disallowed. Instead, the loss is added to the cost basis of
          the repurchased shares, deferring the benefit until you eventually sell without
          triggering another wash sale. This effectively prevents the immediate tax benefit of
          the loss.
        </p>
      </section>

      <section id="crypto-exemption" className="mb-10">
        <h2>Crypto's Current Exemption</h2>
        <p>
          The wash sale rule applies to "stock or securities." The IRS classifies cryptocurrency
          as property, not as stock or securities. Therefore, under current law, the wash sale
          rule does not apply to crypto transactions. You can sell Bitcoin at a loss and
          immediately buy it back, claiming the full tax loss without any disallowance.
        </p>
        <p>
          This is a major advantage over stock investors. A crypto investor can sell during a
          market dip, realize the loss for tax purposes, immediately repurchase the same token,
          and continue holding their position. The only cost is transaction fees. Stock investors
          must wait 31 days or buy a different (not substantially identical) investment.
        </p>
      </section>

      <section id="proposed-changes" className="mb-10">
        <h2>Proposed Legislation</h2>
        <p>
          Multiple legislative proposals have included provisions to extend the wash sale rule
          to digital assets. The Build Back Better Act, the Inflation Reduction Act negotiations,
          and various standalone bills have addressed this. While none have been enacted as of
          this writing, the direction of legislation strongly suggests crypto will eventually
          be subject to wash sale rules.
        </p>
        <p>
          When enacted, the crypto wash sale rule would likely mirror the stock version: if you
          sell crypto at a loss and repurchase the same or substantially identical crypto within
          30 days, the loss would be disallowed. The definition of "substantially identical" for
          crypto could be complex, particularly for wrapped tokens, staking derivatives, and
          tokens with similar functions.
        </p>
      </section>

      <section id="taking-advantage" className="mb-10">
        <h2>Using the Current Exemption</h2>
        <p>
          While crypto remains exempt from the wash sale rule, take advantage through aggressive
          tax-loss harvesting. Whenever a crypto position is below your cost basis, consider
          selling and immediately repurchasing to realize the loss. This is especially valuable
          during market corrections when many positions may be underwater.
        </p>
        <p>
          Automate this process using crypto tax software that identifies harvesting
          opportunities. Some investors implement a systematic approach, harvesting losses
          whenever a position drops by more than a set percentage (like 10%). The key benefit
          is reducing your current tax bill while maintaining the exact same portfolio
          composition, with no 30-day gap in exposure.
        </p>
      </section>

      <section id="future-planning" className="mb-10">
        <h2>Planning for Potential Changes</h2>
        <p>
          Plan proactively for the likely extension of wash sale rules to crypto. Harvest
          available losses now while the exemption exists. If wash sale rules are enacted, you
          will still be able to tax-loss harvest, but you will need to wait 31 days before
          repurchasing or buy a different asset during the waiting period.
        </p>
        <p>
          Familiarize yourself with strategies stock investors use to work around wash sale rules,
          such as buying a correlated but not substantially identical asset. For example, selling
          ETH at a loss and buying SOL to maintain smart contract platform exposure (though the
          definition of substantially identical for crypto is unclear). Stay informed on
          legislative developments so you can adjust your strategy promptly.
        </p>
      </section>
    </LearnPageLayout>
  );
}
