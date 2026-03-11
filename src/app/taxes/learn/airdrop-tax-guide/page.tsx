import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Airdrop Taxes: How Airdrops Are Taxed (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to airdrop taxes. Learn when airdrops are taxable income, how to determine fair market value, claiming vs receiving, and how different countries treat crypto airdrops.",
  keywords: ["airdrop taxes", "crypto airdrop tax", "are airdrops taxable", "airdrop income tax"],
};

export default function AirdropTaxGuidePage() {
  return (
    <LearnPageLayout
      title="Airdrop Taxes: How Airdrops Are Taxed"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="10 min read"
      intro="Crypto airdrops have become a major wealth creation event, with some airdrops worth thousands or even tens of thousands of dollars per recipient. But these free tokens come with tax obligations in most jurisdictions. Understanding when airdrops become taxable, how to value them, and the difference between claimed and unsolicited airdrops is crucial for anyone participating in the crypto ecosystem."
      toc={[
        { id: "taxable-event", title: "When Airdrops Become Taxable", level: 2 },
        { id: "valuation", title: "Determining Fair Market Value", level: 2 },
        { id: "claimed-vs-received", title: "Claimed vs Unsolicited Airdrops", level: 2 },
        { id: "retroactive", title: "Retroactive & Governance Airdrops", level: 2 },
        { id: "by-country", title: "Airdrop Tax Rules by Country", level: 2 },
        { id: "strategies", title: "Airdrop Tax Strategies", level: 2 },
      ]}
      faqs={[
        { question: "Are all airdrops taxable?", answer: "In most jurisdictions, yes. Airdrops are generally treated as ordinary income at fair market value when you receive or claim them. Some countries like the UK make a distinction between airdrops received for a service (taxable) and truly unsolicited airdrops (not immediately taxable)." },
        { question: "When is an airdrop taxed: when sent or when claimed?", answer: "For airdrops that require claiming, tax is generally triggered when you claim them because that is when you gain dominion and control. For airdrops sent directly to your wallet without action, tax is triggered when they appear in your wallet, though some argue it should be when you first become aware of them." },
        { question: "What if the airdrop has no value when received?", answer: "If a token has no established market value at the time of receipt (no liquidity, no trading pairs), the fair market value may be zero and therefore no income is recognized at receipt. Your cost basis would be zero, meaning the full amount would be a capital gain when eventually sold." },
        { question: "Can I claim a loss if airdrop tokens drop in value?", answer: "If you reported the airdrop as income at a higher value and later sell at a lower price, the difference is a capital loss. If the token becomes completely worthless, you may be able to claim a worthless asset deduction, but you need to establish the asset has no residual value." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Staking Rewards Taxes", href: "/taxes/learn/staking-rewards-taxes", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="taxable-event">When Airdrops Become Taxable</h2>
      <p>
        In the US, the IRS stated in Revenue Ruling 2019-24 that airdrops are taxable as ordinary income when the recipient gains dominion and control over the tokens. For airdrops that require claiming through a website or smart contract interaction, this is when you execute the claim transaction. For airdrops sent directly to your wallet, this is when the tokens arrive. The income amount equals the fair market value of the tokens at the time of receipt in USD. This applies regardless of whether you asked for the airdrop or knew it was coming. The recognition principle is consistent with how other forms of found property or windfall income are treated.
      </p>

      <h2 id="valuation">Determining Fair Market Value</h2>
      <p>
        Valuing airdrop tokens for tax purposes can be challenging, especially for new tokens with limited trading history. If the token is listed on exchanges at the time of receipt, use the market price from a reputable exchange. For tokens that become tradeable shortly after the airdrop, use the price when you first gain access. If there is no established market price, you may need to use alternative valuation methods such as OTC prices, DEX liquidity pool prices, or comparable token analysis. Some airdrops of valueless or spam tokens may legitimately have a zero fair market value at receipt. Document your valuation methodology in case of an audit.
      </p>

      <h2 id="claimed-vs-received">Claimed vs Unsolicited Airdrops</h2>
      <p>
        The distinction between airdrops you actively claim and those sent to your wallet unsolicited matters for tax timing. Claimed airdrops are taxable when you execute the claim transaction because that is when you exercise dominion and control. Unsolicited airdrops that appear in your wallet without any action on your part are technically taxable when received, but there is a reasonable argument that they are not taxable until you become aware of them and take action to accept them. Some tax professionals argue that unsolicited airdrop tokens are similar to unsolicited merchandise and should not be taxable until the recipient takes affirmative steps to accept them by selling, trading, or moving them.
      </p>

      <h2 id="retroactive">Retroactive &amp; Governance Airdrops</h2>
      <p>
        Major retroactive airdrops like those from Uniswap, Optimism, Arbitrum, and Jupiter have created significant one-time tax events for recipients. These airdrops typically reward past protocol users with governance tokens. The full value at the time of claiming constitutes taxable income. For large airdrops, this can mean a substantial tax bill even if you continue to hold the tokens. If the token price drops after you claim, you still owe tax on the higher value at claim time. Some recipients choose to sell a portion immediately to cover the estimated tax liability. Multi-round airdrops with vesting schedules may be taxable as each tranche vests or becomes claimable.
      </p>

      <h2 id="by-country">Airdrop Tax Rules by Country</h2>
      <p>
        Different countries treat airdrops differently. In the US, all airdrops are taxable as ordinary income per Revenue Ruling 2019-24. In the UK, HMRC distinguishes between airdrops received for providing a service (Income Tax) and airdrops received without doing anything (not immediately taxable but have zero cost basis for CGT). In Germany, airdrops are treated as income but may qualify for the 600 EUR Freigrenze if total short-term private sale gains are below the threshold. In Australia, the ATO generally treats airdrops as income, though the personal use asset exemption might apply in narrow cases. In Singapore, airdrops from investment activities are generally not taxable due to the absence of capital gains tax.
      </p>

      <h2 id="strategies">Airdrop Tax Strategies</h2>
      <p>
        Strategic planning can help manage airdrop tax obligations. If you expect a large airdrop, consider claiming in a tax year where your other income is lower to benefit from lower marginal rates. Selling a portion of the airdrop immediately to set aside funds for tax payments prevents being caught short if the token price declines. If the airdrop token drops significantly in value after claiming, you can sell it to realize a capital loss that partially offsets the income tax paid. Use tax-loss harvesting across your crypto portfolio to offset airdrop income where possible. Keep detailed records of every airdrop claim, including screenshots, transaction hashes, and the token price at the time of claiming.
      </p>
    </LearnPageLayout>
  );
}
