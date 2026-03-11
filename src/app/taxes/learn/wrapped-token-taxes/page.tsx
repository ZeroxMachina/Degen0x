import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Wrapped Token Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn the tax implications of wrapping and unwrapping cryptocurrency tokens. Understand cost basis, taxable events, and reporting for WETH, WBTC, and other wrapped tokens.",
  keywords: ["wrapped token taxes", "WETH taxes", "WBTC tax treatment", "wrapping crypto taxes"],
};

export default function WrappedTokenTaxesPage() {
  return (
    <LearnPageLayout
      title="Wrapped Token Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="7 min"
      intro="Wrapped tokens like WETH, WBTC, and various liquid staking derivatives are ubiquitous in DeFi but create tax questions about whether wrapping and unwrapping constitutes a taxable event. The answer depends on the specific wrapping mechanism and how closely the wrapped token tracks the underlying asset. This guide explains the tax treatment of common wrapped token scenarios."
      toc={[
        { id: "wrapping-basics", title: "Wrapped Tokens Tax Basics", level: 2 },
        { id: "weth-wbtc", title: "WETH, WBTC, and 1:1 Wraps", level: 2 },
        { id: "liquid-staking", title: "Liquid Staking Derivatives", level: 2 },
        { id: "reporting-wrapped", title: "Reporting Wrapped Token Transactions", level: 2 },
      ]}
      faqs={[
        { question: "Is wrapping ETH to WETH taxable?", answer: "Most tax professionals consider wrapping ETH to WETH a non-taxable event because WETH is a direct 1:1 representation of ETH on the same chain and can be unwrapped at any time without any economic change. Your cost basis and holding period carry over. However, the IRS has not issued specific guidance on this point." },
        { question: "Is converting BTC to WBTC taxable?", answer: "This is more debatable than ETH to WETH. Converting BTC to WBTC involves a cross-chain process where BTC is locked and WBTC is minted on Ethereum by a custodian. Some argue this is a taxable exchange because you are receiving a different asset on a different chain. Others argue it is a non-taxable wrapping since WBTC is economically equivalent to BTC." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Bridge Transaction Taxes", href: "/taxes/learn/bridge-transaction-taxes", category: "Taxes" },
      ]}
    >
      <section id="wrapping-basics">
        <h2>Wrapped Tokens Tax Basics</h2>
        <p>Wrapped tokens are crypto assets that represent another underlying asset, usually on a different blockchain or in a different format suitable for specific protocols. The core tax question is whether converting between an asset and its wrapped version constitutes a taxable exchange or a non-taxable conversion. The IRS has not issued specific guidance on wrapped tokens, leaving taxpayers to apply general principles. The key factors in determining tax treatment include whether the wrapped token is on the same or different blockchain, whether a third-party custodian is involved, whether the wrapping changes the economic characteristics of the asset, and whether the conversion can be reversed at any time at a 1:1 ratio. Same-chain wrapping with no custodian, like ETH to WETH, is most likely non-taxable. Cross-chain wrapping through custodians, like BTC to WBTC, presents a stronger argument for taxable treatment. Wrapping that changes economic characteristics, like depositing ETH to receive stETH which earns staking rewards, adds another layer of complexity. Whatever position you take, apply it consistently and document your reasoning.</p>
      </section>
      <section id="weth-wbtc">
        <h2>WETH, WBTC, and 1:1 Wraps</h2>
        <p>WETH is the most common wrapped token and represents ETH in an ERC-20 compatible format on the same Ethereum blockchain. Wrapping ETH to WETH is done through the WETH smart contract and can be reversed at any time at a 1:1 ratio. Most tax professionals and crypto tax software treat this as a non-taxable event because there is no change in economic substance, no change in blockchain, no counterparty risk, and the conversion is immediately reversible. Your cost basis and holding period transfer from ETH to WETH and back. WBTC involves a more complex process. Bitcoin is sent to a custodian who mints WBTC on Ethereum. This introduces custodian risk, cross-chain movement, and reliance on a third party. Arguments for taxable treatment note that you are receiving a fundamentally different asset on a different blockchain. Arguments for non-taxable treatment emphasize that WBTC is economically equivalent to BTC and is designed to be redeemable 1:1. Other 1:1 wrapped tokens like renBTC, wrapped AVAX, and similar assets each have their own wrapping mechanisms that may support different tax conclusions. Evaluate each wrapped token individually based on the specific mechanics of the wrapping process rather than applying a blanket rule to all wrapped tokens.</p>
      </section>
      <section id="liquid-staking">
        <h2>Liquid Staking Derivatives</h2>
        <p>Liquid staking tokens like stETH, rETH, cbETH, and similar derivatives add complexity because they combine wrapping with yield generation. When you stake ETH through Lido and receive stETH, you are both wrapping your ETH into a new token and entering a staking arrangement that earns rewards. The staking reward component makes this more likely to be a taxable exchange compared to simple wrapping. For rebasing tokens like stETH, your balance increases daily to reflect staking rewards. Each rebase may constitute taxable income at the fair market value of the additional tokens received. For non-rebasing tokens like rETH and cbETH, the token value increases relative to ETH rather than the quantity increasing. This may defer income recognition until you unwrap back to ETH, when the difference between what you deposited and what you received is income. The distinction between rebasing and non-rebasing liquid staking tokens has significant tax implications. Rebasing tokens create frequent income events that require tracking. Non-rebasing tokens may allow deferral of income until withdrawal. However, the IRS could argue that either type generates income as rewards accrue regardless of the token mechanics. The Jarrett case, where a taxpayer argued that staking rewards are not income until sold, was not resolved on the merits and does not provide clear precedent.</p>
      </section>
      <section id="reporting-wrapped">
        <h2>Reporting Wrapped Token Transactions</h2>
        <p>How you report wrapped token transactions depends on whether you treat wrapping as taxable or non-taxable. If non-taxable, you do not report the wrapping or unwrapping events on Form 8949, but you must maintain records showing the cost basis carryover from the original to the wrapped token. When you eventually sell the wrapped token or the unwrapped token, report the sale using your original cost basis and acquisition date. If taxable, report the wrapping as a sale of the original asset and purchase of the wrapped asset on Form 8949. Your gain or loss is the difference between the fair market value at wrapping time and your original cost basis. The wrapped token's new cost basis is its fair market value at the time of wrapping. For liquid staking derivatives with rebasing mechanics, income from rebases should be reported as ordinary income on Schedule 1 or Schedule C. Track each rebase event with the date, number of additional tokens received, and fair market value. Most crypto tax software handles common wrapped tokens and liquid staking derivatives but may require configuration to match your chosen tax treatment. Verify that your software correctly categorizes wrapping events and staking reward income. For uncommon or new wrapped tokens, manual categorization may be necessary.</p>
      </section>
    </LearnPageLayout>
  );
}
