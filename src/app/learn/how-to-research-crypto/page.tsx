import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Research Crypto Projects (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Comprehensive guide to researching cryptocurrency projects including fundamental analysis, team evaluation, tokenomics, on-chain analysis, and red flags.",
  keywords: ["DYOR crypto", "crypto research", "how to research crypto", "crypto due diligence", "token analysis", "crypto fundamental analysis"],
};

export default function HowToResearchCryptoPage() {
  return (
    <LearnPageLayout title="How to Research Crypto Projects" categoryName="Crypto Education" categorySlug="learn" readTime="9 min" intro="Thorough research (DYOR — Do Your Own Research) is the most important skill for cryptocurrency investors. With thousands of projects claiming revolutionary potential, the ability to critically evaluate projects separates informed investors from those who lose money chasing hype. This guide provides a systematic framework for evaluating any crypto project."
      toc={[
        { id: "framework", title: "framework", level: 2 },
        { id: "research-framework", title: "Research Framework", level: 2 },
        { id: "team", title: "team", level: 2 },
        { id: "team-background", title: "Team & Background", level: 2 },
        { id: "technology", title: "technology", level: 2 },
        { id: "technology-assessment", title: "Technology Assessment", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "tokenomics-analysis", title: "Tokenomics Analysis", level: 2 },
        { id: "on-chain", title: "on-chain", level: 2 },
        { id: "on-chain-analysis", title: "On-Chain Analysis", level: 2 },
        { id: "red-flags", title: "red-flags", level: 2 },
        { id: "red-flags", title: "Red Flags", level: 2 }
      ]}
      faqs={[
        { question: "How long should I research before investing?", answer: "Spend at least several hours researching any project before investing significant funds. Read the whitepaper, review team backgrounds, analyze tokenomics, check on-chain metrics, and read community discussions. For larger investments, days or weeks of research is appropriate. Never invest based solely on social media recommendations." },
        { question: "What is the most important research factor?", answer: "There is no single most important factor — good research is holistic. However, team quality and track record are among the strongest predictors of project success. A strong team with a mediocre idea can pivot, but a weak team with a great idea often fails to execute." },
        { question: "Where do I find reliable crypto research?", answer: "Primary sources include project documentation, GitHub repositories, and governance forums. Secondary sources include research firms (Messari, Delphi Digital), blockchain analytics (DeFi Llama, Nansen), and established crypto media. Be skeptical of paid promotions and influencer recommendations." },
      ]}
      relatedArticles={[
        { title: "How to Spot Rug Pulls", href: "/learn/how-to-spot-rug-pulls", category: "Learn" },
        { title: "What Is Tokenomics?", href: "/learn/what-is-tokenomics", category: "Learn" },
        { title: "How to Evaluate an ICO", href: "/learn/how-to-evaluate-ico", category: "Learn" },
        { title: "How to Read a Blockchain Explorer", href: "/learn/how-to-read-blockchain-explorer", category: "Learn" },
      ]}
    >
      <section id="framework"><h2>Research Framework</h2><p>A systematic research approach covers: the problem being solved (is it real and significant?), the solution (is it technically feasible and differentiated?), the team (do they have the expertise and track record to execute?), the tokenomics (do they align incentives for long-term value?), the market (what is the competitive landscape?), and the traction (is there real adoption or just speculation?).</p><p>Start with the project's official documentation — whitepaper, documentation site, and blog posts. Then verify claims independently through on-chain data, GitHub activity, and community discussion. Compare with competitors to understand positioning. Read critical perspectives, not just promotional material. A project that cannot withstand critical analysis is not a strong investment candidate.</p></section>
      <section id="team"><h2>Team & Background</h2><p>Research team members' backgrounds: prior work experience, relevant expertise, previous projects (successful and failed), and reputation in the industry. Verify LinkedIn profiles, conference presentations, and published work. Anonymous teams are not automatically suspicious (Bitcoin's creator is anonymous), but they do reduce accountability. Assess whether the team's experience matches the project's technical ambitions.</p><p>Check for advisors and investors — notable backers provide a signal (though not a guarantee) of quality. Review the project's GitHub for contributor activity, code quality, and development velocity. A project with frequent commits from multiple contributors is more likely to sustain development than one with minimal activity. Look for transparency in team communication and willingness to engage with critical questions.</p></section>
      <section id="technology"><h2>Technology Assessment</h2><p>Evaluate whether the technology works: is there a functioning product or just a whitepaper? Is the code open-source and auditable? Has it been audited by reputable firms? How does it compare technically to competitors? Does the architecture make reasonable trade-offs for its intended use case? Technical innovation is valuable, but so is proven, battle-tested approaches.</p><p>Assess the development roadmap: is it realistic given the team's resources? Has the team delivered on past milestones? Are they transparent about challenges and delays? Over-promising and under-delivering is a common pattern in failed projects. Look for evidence of real engineering progress rather than just marketing material and theoretical proposals.</p></section>
      <section id="tokenomics"><h2>Tokenomics Analysis</h2><p>Analyze the token's economics: total supply, circulating supply, emission schedule, distribution across team/investors/community, vesting schedules for insider tokens, and token utility within the protocol. Heavy insider allocations (more than 30-40% to team and early investors) with short vesting periods are concerning. Look for alignment between token value and protocol success.</p><p>Understand the token's role: is it essential for the protocol's function (governance, staking, fee payment), or is it primarily speculative? Protocols where the token captures value from protocol activity (fee sharing, buybacks) have clearer value propositions than tokens with unclear utility. Review upcoming token unlocks that could create significant sell pressure.</p></section>
      <section id="on-chain"><h2>On-Chain Analysis</h2><p>Use on-chain analytics to verify claims: DeFi Llama for TVL and protocol metrics, Dune Analytics for custom queries, token explorers for holder distribution, and DEX analytics for trading volume. Compare metrics across competitors. Growing TVL, user counts, and transaction volumes indicate genuine adoption. Declining metrics despite marketing pushes may indicate problems.</p><p>Analyze token holder distribution: concentrated ownership is risky. Check liquidity depth on exchanges — thin liquidity means high slippage and potential for price manipulation. Review smart contract interaction patterns to distinguish genuine usage from wash trading or bot activity. On-chain data provides objective evidence that supplements subjective assessments of the project's quality.</p></section>
      <section id="red-flags"><h2>Red Flags</h2><p>Avoid projects that exhibit: guaranteed return promises, aggressive marketing with minimal product, anonymous teams handling significant funds without adequate trustless mechanisms, copied code without attribution, fake partnerships or inflated claims, heavily concentrated token ownership, unlocked team tokens with no vesting, and communities that suppress criticism or questioning.</p><p>Additional warning signs include: no audits for protocols handling user funds, rapid pivoting from one narrative to another (chasing trends), inability to clearly explain the value proposition, excessive focus on token price rather than product development, and social media presence dominated by paid promoters. Trust your critical thinking — if something seems too good to be true or if legitimate questions are deflected, consider it a warning sign.</p></section>
    </LearnPageLayout>
  );
}
