import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Hard Fork Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn how cryptocurrency hard forks are taxed. Understand income recognition, cost basis allocation, and reporting requirements for forked tokens.",
  keywords: ["hard fork taxes", "crypto fork tax", "bitcoin fork taxes", "blockchain fork tax treatment"],
};

export default function HardForkTaxesPage() {
  return (
    <LearnPageLayout
      title="Hard Fork Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="7 min"
      intro="Hard forks occur when a blockchain splits into two separate chains, resulting in holders of the original token receiving an equivalent amount of the new forked token. The IRS has issued specific guidance on the tax treatment of hard forks, creating income recognition and cost basis considerations that affected crypto holders must understand. This guide covers the rules for both the receipt and subsequent sale of forked tokens."
      toc={[
        { id: "what-is-hard-fork", title: "What Is a Hard Fork for Tax Purposes", level: 2 },
        { id: "irs-guidance", title: "IRS Guidance on Hard Forks", level: 2 },
        { id: "cost-basis-allocation", title: "Cost Basis Allocation", level: 2 },
        { id: "reporting-forks", title: "Reporting Fork Income", level: 2 },
      ]}
      faqs={[
        { question: "Is receiving a hard fork token taxable?", answer: "According to IRS Revenue Ruling 2019-24, receiving cryptocurrency from a hard fork is taxable as ordinary income if you have dominion and control over the new tokens. The income is the fair market value of the new tokens at the time you can access and transfer them, not at the time of the fork itself." },
        { question: "What if I never claimed the forked tokens?", answer: "If you have not accessed or claimed forked tokens, you may argue you do not have dominion and control and therefore have not received taxable income. However, if the tokens are available in your wallet and you simply have not sold them, the IRS may consider you to have received them. Document your situation carefully." },
      ]}
      relatedArticles={[
        { title: "Airdrop Tax Guide", href: "/taxes/learn/airdrop-tax-guide", category: "Taxes" },
        { title: "Crypto Tax Guide", href: "/taxes/learn/crypto-tax-guide", category: "Taxes" },
      ]}
    >
      <section id="what-is-hard-fork">
        <h2>What Is a Hard Fork for Tax Purposes</h2>
        <p>A hard fork is a permanent divergence in a blockchain that creates two separate chains with shared history up to the fork point. From a tax perspective, the key question is whether the fork results in you receiving new cryptocurrency that constitutes income. Major historical examples include the Bitcoin Cash fork from Bitcoin in 2017, the Ethereum Classic fork from Ethereum in 2016, and numerous subsequent forks of various chains. In a hard fork, existing holders typically receive tokens on the new chain equal to their holdings on the original chain at the block height of the fork. The mechanics of actually accessing these tokens vary. Some exchanges automatically credited forked tokens to users, while self-custody users needed to take specific steps to claim tokens on the forked chain. The distinction between automatically receiving tokens and needing to claim them has important implications for when income is recognized. Not all chain splits create valuable forked tokens. Many forks have resulted in tokens with minimal or zero value, which affects the practical tax impact even if the technical tax treatment remains the same.</p>
      </section>
      <section id="irs-guidance">
        <h2>IRS Guidance on Hard Forks</h2>
        <p>The IRS addressed hard fork taxation in Revenue Ruling 2019-24. The ruling states that if a hard fork is followed by an airdrop, and you receive new cryptocurrency, you have ordinary income equal to the fair market value of the new tokens at the time you gain dominion and control over them. Dominion and control means the ability to transfer, sell, exchange, or otherwise dispose of the cryptocurrency. This is a critical distinction. If your exchange did not support the forked token and you could not access it, you may not have had dominion and control at the time of the fork. You would recognize income only when you actually gain access. For self-custody users who hold their own keys, dominion and control may be established when the forked chain becomes operational and the tokens can be transferred, even if the user has not taken any affirmative steps to claim them. The IRS guidance treats hard forks similarly to airdrops for tax purposes, which is controversial among some tax practitioners who argue that receiving tokens from a chain split is fundamentally different from receiving a voluntary distribution. Regardless of the debate, the IRS position is that forked tokens are income when received, and taxpayers should plan accordingly.</p>
      </section>
      <section id="cost-basis-allocation">
        <h2>Cost Basis Allocation</h2>
        <p>The cost basis of forked tokens is their fair market value at the time you gain dominion and control, which is the same amount reported as income. If you received 1 BCH from the Bitcoin Cash fork and BCH was worth $300 at the time you could access it, your income is $300 and your cost basis in the BCH is also $300. Any subsequent sale is measured against this basis. For the original tokens, the fork does not change your cost basis. Your Bitcoin cost basis remains what you originally paid, regardless of the fork. Some taxpayers have argued for allocating a portion of the original token's cost basis to the forked token, similar to how stock splits are handled. However, the IRS has not endorsed this approach, and the revenue ruling implies that the forked token's basis is the income amount recognized. If the forked token has no value at the time of the fork and never gains meaningful value, the practical income recognition may be zero or negligible. However, if the token later increases in value and you sell it, your entire proceeds would be gain since your cost basis would be the minimal value at receipt. Track the fair market value of forked tokens at the time of receipt carefully, as this establishes both your income and your cost basis.</p>
      </section>
      <section id="reporting-forks">
        <h2>Reporting Fork Income</h2>
        <p>Income from hard forks is reported as ordinary income on your tax return. Most taxpayers report it on Schedule 1, Line 8z as other income, with a description indicating it is cryptocurrency received from a hard fork. If your crypto activity constitutes a trade or business, it may be reported on Schedule C. The income amount is the fair market value of the forked tokens at the time you gained dominion and control. When you subsequently sell the forked tokens, report the sale on Form 8949 and Schedule D as a capital gain or loss, with the cost basis equal to the income previously recognized. Many crypto tax tools automatically handle hard fork recognition if they have data on the fork event and your holdings at the time. Verify that your tax software correctly identifies and categorizes fork events rather than misclassifying them as purchases with zero cost basis. For historical forks that you may not have reported in prior years, consider filing amended returns. The statute of limitations for amending returns is generally three years from the filing date. Working with a tax professional to address unreported fork income is advisable, especially for significant amounts. The IRS has indicated increased focus on crypto tax compliance, making accurate reporting of all crypto income increasingly important.</p>
      </section>
    </LearnPageLayout>
  );
}
