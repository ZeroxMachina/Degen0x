import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Inheritance Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn the tax rules for inherited cryptocurrency. Understand stepped-up basis, estate tax implications, and how to handle crypto in estate planning.",
  keywords: ["crypto inheritance tax", "inherited cryptocurrency", "crypto estate tax", "bitcoin inheritance"],
};

export default function CryptoInheritanceTaxesPage() {
  return (
    <LearnPageLayout
      title="Crypto Inheritance Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="8 min"
      intro="Inheriting cryptocurrency raises unique tax and practical considerations. From the significant tax advantage of stepped-up basis to the challenge of accessing wallets and private keys, crypto inheritance requires careful planning. This guide covers the tax rules for inherited crypto, estate planning strategies, and practical steps for both those planning their estate and those who have inherited digital assets."
      toc={[
        { id: "stepped-up-basis", title: "Stepped-Up Basis Explained", level: 2 },
        { id: "estate-tax", title: "Estate Tax Considerations", level: 2 },
        { id: "planning-strategies", title: "Estate Planning Strategies", level: 2 },
        { id: "practical-access", title: "Practical Access Challenges", level: 2 },
      ]}
      faqs={[
        { question: "What is stepped-up basis for inherited crypto?", answer: "When you inherit crypto, your cost basis is 'stepped up' to the fair market value on the date of the decedent's death. This means all unrealized gains accumulated during the decedent's lifetime are eliminated for income tax purposes. If someone bought Bitcoin at $1,000 and it was worth $60,000 at their death, your basis is $60,000." },
        { question: "Do I owe taxes when I inherit crypto?", answer: "Inheriting crypto is not an income tax event. You do not owe income tax or capital gains tax when you receive the inheritance. You only owe taxes when you sell the inherited crypto, and your gain or loss is calculated from the stepped-up basis at the date of death. The estate may owe estate tax if the total estate exceeds the federal exemption." },
      ]}
      relatedArticles={[
        { title: "Crypto Gift Taxes", href: "/taxes/learn/crypto-gifts-taxes", category: "Taxes" },
        { title: "Capital Gains Guide", href: "/taxes/learn/capital-gains", category: "Taxes" },
      ]}
    >
      <section id="stepped-up-basis">
        <h2>Stepped-Up Basis Explained</h2>
        <p>The stepped-up basis rule is the most significant tax benefit of inherited assets, including cryptocurrency. When someone dies, the cost basis of their assets is adjusted to the fair market value on the date of death. For crypto that has appreciated substantially, this can eliminate enormous amounts of unrealized capital gains. Consider someone who accumulated Bitcoin over years with an average cost basis of $5,000. If Bitcoin is worth $60,000 at their death, the heir receives a stepped-up basis of $60,000. If the heir sells immediately, there is virtually no taxable gain. This contrasts sharply with gifted crypto, where the recipient inherits the original cost basis and would owe capital gains tax on the full $55,000 appreciation. The stepped-up basis applies to all crypto assets in the estate, including tokens, NFTs, and DeFi positions. The valuation date is typically the date of death, though the estate executor may elect an alternate valuation date six months after death if the estate qualifies and the election would reduce estate tax. Properly documenting the fair market value of all crypto holdings on the date of death is essential for establishing the stepped-up basis.</p>
      </section>
      <section id="estate-tax">
        <h2>Estate Tax Considerations</h2>
        <p>While inherited crypto receives favorable income tax treatment through stepped-up basis, the value of crypto holdings is included in the decedent's taxable estate for federal estate tax purposes. The federal estate tax exemption is over $13 million per individual in 2024, meaning most estates will not owe federal estate tax. However, this exemption is scheduled to decrease significantly after 2025. Some states impose their own estate or inheritance taxes with much lower exemption thresholds. Valuing crypto for estate tax purposes requires determining fair market value on the date of death for all holdings across all wallets and exchanges. This includes not just major tokens but also DeFi positions, staking rewards, liquidity pool tokens, NFTs, and any other digital assets. The executor is responsible for identifying and valuing all crypto assets, which can be challenging if the decedent did not maintain clear records of their holdings. For large crypto estates, the estate may need to sell crypto to pay estate taxes, which requires the executor to have access to the wallets and accounts. Proper estate planning can address both the valuation and access challenges well in advance.</p>
      </section>
      <section id="planning-strategies">
        <h2>Estate Planning Strategies</h2>
        <p>Effective crypto estate planning addresses both tax optimization and practical access. For tax planning, the stepped-up basis benefit makes holding appreciated crypto until death potentially more tax-efficient than selling or gifting during life. This is the opposite of the general advice to sell losing assets before death, since losses disappear at death while gains are eliminated through step-up. Trusts can be used for crypto estate planning, with revocable living trusts providing probate avoidance while maintaining the stepped-up basis benefit. Irrevocable trusts may remove crypto from the taxable estate but involve giving up control. Multi-signature wallets can serve as a form of estate planning by distributing key access among trusted parties. Crypto-specific estate planning services have emerged to help holders create comprehensive plans that address both the financial and technical aspects. A complete crypto estate plan should include an inventory of all holdings and accounts, access instructions for wallets and exchanges, designated beneficiaries, and guidance on whether heirs should hold or sell. Review and update the plan regularly as holdings change and as estate tax laws evolve.</p>
      </section>
      <section id="practical-access">
        <h2>Practical Access Challenges</h2>
        <p>The biggest practical challenge with crypto inheritance is accessing the decedent's holdings. Unlike traditional financial accounts that have institutional recovery processes, self-custodied crypto requires private keys or seed phrases. If these are lost, the crypto may be permanently inaccessible regardless of legal ownership. Exchange-held crypto is generally easier to access through the probate process, as exchanges have procedures for transferring accounts to verified estate representatives. The executor typically needs to provide a death certificate, letters testamentary, and identity verification. Self-custodied crypto requires the executor to have access to seed phrases, hardware wallets, and any associated PINs or passwords. Storing this information securely while ensuring it is accessible in the event of death is the core challenge. Options include secure physical storage of seed phrases, using a trusted attorney or fiduciary, encrypted digital storage with access instructions in a will, and specialized crypto inheritance services that provide dead man switch functionality. Never store private keys or seed phrases in a standard will, as wills become public documents during probate. Use a separate, secure mechanism for key access and reference it in the will or estate plan.</p>
      </section>
    </LearnPageLayout>
  );
}
