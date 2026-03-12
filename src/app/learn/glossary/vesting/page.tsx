import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Vesting: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what vesting means in cryptocurrency. Understand token vesting schedules, cliff periods, and how vesting protects investors from insider sell-offs.",
  keywords: ["crypto vesting", "token vesting schedule", "vesting cliff", "token unlock"],
};

export default function VestingGlossaryPage() {
  return (
    <LearnPageLayout
      title="Vesting: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="Vesting in cryptocurrency is a process where tokens allocated to team members, investors, or other stakeholders are locked and released gradually over a predetermined schedule. Vesting aligns long-term incentives and prevents large holders from dumping their tokens immediately after a project launches."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        { question: "What is a vesting cliff?", answer: "A vesting cliff is an initial period during which no tokens are released at all. After the cliff ends, a large initial portion unlocks, followed by regular releases. For example, a 4-year vesting schedule with a 1-year cliff means zero tokens are available for the first year, then 25% unlocks at the one-year mark, with the remaining 75% released linearly over the following three years." },
        { question: "Can vesting schedules be changed after launch?", answer: "Vesting schedules enforced by smart contracts on the blockchain generally cannot be changed without governance approval or contract upgrades. This immutability is a key benefit, as it provides certainty to all stakeholders. However, some projects use upgradeable contracts or multisig-controlled vesting that could theoretically be modified." },
      ]}
      relatedArticles={[
        { title: "Tokenomics", href: "/learn/glossary/tokenomics", category: "Glossary" },
        { title: "Total Supply", href: "/learn/glossary/total-supply", category: "Glossary" },
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          Vesting in the cryptocurrency world is a mechanism that gradually releases tokens to their allocated recipients over a set period rather than distributing them all at once. Borrowed from traditional startup equity compensation, vesting ensures that team members, advisors, early investors, and other stakeholders remain committed to a project's long-term success by tying their token access to a timeline. Tokens that are subject to vesting are typically locked in a smart contract or vesting agreement and become available (or vest) according to a predetermined schedule. This schedule can be linear, where tokens unlock at a steady rate over time, or it can include milestones, cliffs, or custom release curves. The purpose of vesting is to prevent scenarios where large token holders sell all their tokens immediately after a token generation event, which would crash the price and undermine the project's credibility and community trust.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          A typical vesting schedule has several components. The total allocation defines the number of tokens subject to vesting. The vesting duration specifies the total time over which tokens will be released, commonly ranging from one to four years. The cliff period is an initial lock-up during which no tokens can be claimed. After the cliff, a lump sum of tokens becomes available, and the remaining tokens vest on a regular schedule such as monthly, quarterly, or continuously through a streaming mechanism. On-chain vesting is managed by smart contracts that hold the tokens and only release them when the claiming conditions are met. The beneficiary can claim their unlocked tokens at any time after they vest but cannot access locked tokens before their scheduled release. Some advanced vesting contracts support delegation, allowing locked tokens to be used for governance voting even before they are claimable, ensuring that vesting participants still have a voice in protocol decisions during the lock-up period.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          A common vesting example is a crypto startup that allocates 20% of its token supply to the founding team with a 4-year vesting schedule and a 1-year cliff. No team tokens are accessible for the first year, then 25% of the team allocation unlocks at the one-year mark, with the remaining 75% vesting monthly over the following three years. Venture capital investors in token projects typically receive tokens with 1 to 2-year vesting periods, shorter than team vesting to reflect their different role. Ecosystem incentive tokens might vest over longer periods to ensure sustained participation. Platforms like Sablier and Superfluid enable continuous token streaming, where tokens vest by the second rather than in discrete chunks. Token unlock tracking services like TokenUnlocks monitor upcoming vesting events across the crypto industry, as large unlocks can create significant sell pressure. Community members and investors closely watch these schedules to anticipate potential price impacts from newly unlocked tokens entering the market.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Vesting is one of the most critical mechanisms for protecting the interests of a broader token-holding community. Without vesting, there would be nothing preventing project insiders from selling their entire allocation immediately after launch, extracting maximum value while leaving retail investors holding a rapidly depreciating asset. A robust vesting schedule signals that the team and early investors are committed to the project's long-term success because their financial reward is tied to maintaining and growing the project over years, not months. For investors evaluating a crypto project, the vesting schedule is a key due diligence item. Short vesting periods, large cliff unlocks, or the absence of vesting altogether are significant red flags. Conversely, long vesting periods with gradual linear release indicate aligned incentives. Understanding vesting schedules also helps traders anticipate supply-side dynamics, as large token unlock events can create temporary price pressure. The maturation of vesting practices in crypto reflects the industry's growing sophistication in designing sustainable token economies.
        </p>
      </section>
    </LearnPageLayout>
  );
}
