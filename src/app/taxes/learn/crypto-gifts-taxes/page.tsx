import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Gift Taxes Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn the tax rules for giving and receiving cryptocurrency as gifts. Understand gift tax exclusions, cost basis rules, and reporting requirements.",
  keywords: ["crypto gift tax", "gifting cryptocurrency taxes", "bitcoin gift tax", "crypto gift reporting"],
};

export default function CryptoGiftsTaxesPage() {
  return (
    <LearnPageLayout
      title="Crypto Gift Taxes Explained"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="7 min"
      intro="Gifting cryptocurrency has become increasingly common, whether sending crypto to family members, friends, or as part of estate planning. The tax rules for crypto gifts mirror traditional gift tax rules but come with unique cost basis tracking challenges. Understanding these rules is essential for both the giver and recipient to avoid unexpected tax consequences."
      toc={[
        { id: "gift-tax-basics", title: "gift-tax-basics", level: 2 },
        { id: "gift-tax-basics-for-crypto", title: "Gift Tax Basics for Crypto", level: 2 },
        { id: "cost-basis-rules", title: "cost-basis-rules", level: 2 },
        { id: "cost-basis-rules-for-gifted-crypto", title: "Cost Basis Rules for Gifted Crypto", level: 2 },
        { id: "giving-strategies", title: "giving-strategies", level: 2 },
        { id: "tax-efficient-giving-strategies", title: "Tax-Efficient Giving Strategies", level: 2 },
        { id: "reporting-requirements", title: "reporting-requirements", level: 2 },
        { id: "reporting-requirements", title: "Reporting Requirements", level: 2 }
      ]}
      faqs={[
        { question: "Do I owe taxes when I gift crypto?", answer: "Giving crypto as a gift is not a taxable event for the giver in terms of income or capital gains tax. However, if the total value of gifts to any one recipient exceeds the annual gift tax exclusion ($18,000 in 2024), you must file a gift tax return (Form 709). You generally will not owe actual gift tax unless your lifetime gifts exceed the lifetime exemption." },
        { question: "What cost basis does the recipient get?", answer: "If the gifted crypto has appreciated, the recipient takes the giver's original cost basis (carryover basis). If the crypto has declined in value below the giver's cost basis, the recipient's basis for calculating losses is the fair market value at the time of the gift. This dual-basis rule can create a no-gain, no-loss zone." },
      ]}
      relatedArticles={[
        { title: "Crypto Inheritance Taxes", href: "/taxes/learn/crypto-inheritance-taxes", category: "Taxes" },
        { title: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
      ]}
    >
      <section id="gift-tax-basics">
        <h2>Gift Tax Basics for Crypto</h2>
        <p>The IRS treats cryptocurrency gifts the same as gifts of any other property. Giving crypto to another person is not a taxable event for either party at the time of the gift. The giver does not recognize capital gains or losses, and the recipient does not have income from receiving the gift. However, federal gift tax rules still apply. Each person can give up to the annual gift tax exclusion amount to any number of recipients without triggering gift tax reporting requirements. For 2024, this exclusion is $18,000 per recipient. Married couples can combine their exclusions, allowing up to $36,000 per recipient. If you give more than the annual exclusion to any single recipient in a calendar year, you must file IRS Form 709, the gift tax return. Filing the form does not necessarily mean you owe gift tax. Actual gift tax only applies after you have exceeded the lifetime gift tax exemption, which is over $13 million per individual. For most people, the gift tax return is simply an informational filing that tracks your use of the lifetime exemption. The value of the crypto gift is determined by its fair market value on the date of the transfer.</p>
      </section>
      <section id="cost-basis-rules">
        <h2>Cost Basis Rules for Gifted Crypto</h2>
        <p>The cost basis rules for gifted crypto are more complex than for purchased crypto. When the giver's cost basis is lower than the fair market value at the time of the gift, the recipient inherits the giver's original cost basis and holding period. This is called carryover basis. If the giver bought Bitcoin at $10,000 and gifts it when it is worth $50,000, the recipient's cost basis is $10,000 and the holding period includes the giver's holding time. When the giver's cost basis is higher than the fair market value at the time of the gift, a dual-basis rule applies. For determining gain, the recipient uses the giver's basis. For determining loss, the recipient uses the fair market value at the time of the gift. If the eventual sale price falls between these two amounts, there is no gain or loss. This dual-basis rule prevents tax losses from being transferred through gifting. Proper documentation is essential. The giver should provide the recipient with their original purchase date, cost basis, and a record of the gift transfer. Without this information, the recipient may have difficulty establishing cost basis and could face a default basis of zero, resulting in higher taxable gains.</p>
      </section>
      <section id="giving-strategies">
        <h2>Tax-Efficient Giving Strategies</h2>
        <p>Strategic crypto gifting can reduce overall family tax liability. Gifting appreciated crypto to family members in lower tax brackets allows the gain to be recognized at a lower tax rate when the recipient eventually sells. However, the kiddie tax rules may apply to unearned income of children under 19 or full-time students under 24, limiting this strategy for minor children. Annual gifting within the exclusion amount allows systematic transfer of crypto wealth without using any lifetime exemption. For larger transfers, gifting crypto to a trust can provide additional control and tax planning benefits. Donors with charitably inclined goals should consider donating appreciated crypto directly to charity instead of gifting to individuals, as the charitable donation route avoids capital gains entirely and provides a deduction. For estate planning purposes, note that inherited crypto receives a stepped-up basis to fair market value at the date of death, while gifted crypto carries over the original basis. This difference makes holding highly appreciated crypto until death potentially more tax-efficient than gifting during life, depending on the donor's overall estate plan and goals.</p>
      </section>
      <section id="reporting-requirements">
        <h2>Reporting Requirements</h2>
        <p>Gift tax reporting obligations fall primarily on the giver. If total gifts to any single recipient exceed the annual exclusion, file Form 709 by the tax filing deadline of the year the gift was made. The form requires a description of the gifted property, its value, the recipient's information, and whether any gift-splitting is elected between spouses. The recipient does not need to report receiving a crypto gift as income. However, the recipient must track the cost basis information for when they eventually sell or dispose of the gifted crypto. At that point, the sale is reported on Form 8949 and Schedule D using the carryover basis from the giver. Both parties should keep records of the transaction including the blockchain transaction hash, the fair market value at the time of transfer, and the original cost basis and acquisition date of the giver. Some crypto tax software can handle gift classifications, automatically carrying over basis when transactions are tagged as gifts. For complex gifting situations involving multiple assets, trusts, or amounts significantly exceeding the annual exclusion, working with a tax professional is recommended to ensure proper reporting and optimization of the lifetime exemption.</p>
      </section>
    </LearnPageLayout>
  );
}
