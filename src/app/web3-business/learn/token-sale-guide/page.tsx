import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Token Sale Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Launching a token sale is one of the most significant events for a crypto project...",
};

export default function TokenSaleGuidePage() {
  return (
    <LearnPageLayout
      title="Token Sale Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Launching a token sale is one of the most significant events for a crypto project. This guide covers tokenomics design, legal structuring, marketing, and distribution mechanics."
      toc={[
        { id: "section-1", title: "section-1", level: 2 },
        { id: "token-sale-planning", title: "Token Sale Planning", level: 2 },
        { id: "section-2", title: "section-2", level: 2 },
        { id: "tokenomics-design", title: "Tokenomics Design", level: 2 },
        { id: "section-3", title: "section-3", level: 2 },
        { id: "legal-and-compliance", title: "Legal and Compliance", level: 2 },
        { id: "section-4", title: "section-4", level: 2 },
        { id: "execution-and-distribution", title: "Execution and Distribution", level: 2 }
      ]}
      faqs={[
        { question: "What is a token sale?", answer: "A token sale is the structured distribution of a new cryptocurrency token to buyers, typically to raise funds for project development and to distribute tokens to an initial holder community. Sales can be public or private with various mechanisms." },
        { question: "Do I need legal counsel for a token sale?", answer: "Absolutely. Token sales involve complex securities law considerations that vary by jurisdiction. Experienced legal counsel is essential for structuring the sale, drafting documentation, and ensuring regulatory compliance to avoid legal exposure." },
      ]}
      relatedArticles={[
        { title: "ICO vs IDO vs IEO", href: "/web3-business/learn/ico-vs-ido-vs-ieo", category: "Web3 Business" },
        { title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide", category: "Web3 Business" },
        { title: "Web3 Legal Considerations", href: "/web3-business/learn/web3-legal-considerations", category: "Web3 Business" },
      ]}
    >
      <section id="section-1">
        <h2>Token Sale Planning</h2>
        <p>Planning a token sale begins months before the actual distribution event. Key decisions include total token supply, allocation percentages for different stakeholder groups, pricing strategy, sale structure, and timeline. Each decision has cascading effects on tokenomics, community perception, and long-term token health. Thorough planning prevents costly mistakes that are difficult to reverse once tokens are distributed.</p>
        <p>Develop a comprehensive token sale plan that includes market analysis, competitive positioning, target raise amount, use of funds, and post-sale execution roadmap. Align the sale structure with your project's long-term vision and community values. Projects that raise thoughtfully and communicate transparently about token economics build stronger foundations than those focused solely on maximizing the raise amount.</p>
      </section>

      <section id="section-2">
        <h2>Tokenomics Design</h2>
        <p>Tokenomics encompasses supply mechanics, distribution, utility, and incentive structures. Define the total supply, inflation or deflation mechanics, and any burning or minting rules. Allocate tokens across categories including team, investors, community, ecosystem development, and treasury with appropriate vesting schedules for each group. Well-designed tokenomics align incentives between all stakeholder groups.</p>
        <p>Vesting schedules prevent immediate selling pressure from large holders. Standard practices include cliff periods of six to twelve months followed by linear vesting over two to four years for team and investor allocations. Community allocations may have shorter or no vesting. The balance between locked and circulating supply at launch significantly affects initial price dynamics and trading behavior.</p>
      </section>

      <section id="section-3">
        <h2>Legal and Compliance</h2>
        <p>Legal structuring is the most critical and complex aspect of token sales. Determine whether your token may be classified as a security under applicable laws. Structure the sale to comply with securities regulations in your jurisdiction and in jurisdictions where you accept participants. Common legal instruments include SAFTs for accredited investors and token purchase agreements for public sales with appropriate disclaimers and restrictions.</p>
        <p>KYC and AML requirements apply to most token sales. Implement robust identity verification for participants. Restrict participation from sanctioned jurisdictions. Maintain detailed records of all sale participants and transactions. Engage experienced securities attorneys and compliance specialists to guide the process. The regulatory landscape for token sales continues to evolve, making current legal counsel essential.</p>
      </section>

      <section id="section-4">
        <h2>Execution and Distribution</h2>
        <p>Execute the sale through established platforms or custom smart contracts with thorough testing and auditing. Communicate clearly about participation mechanics, pricing, and timelines. Provide support for participants throughout the process. Monitor the sale in real-time to address any technical issues promptly. Post-sale, distribute tokens according to the published schedule with transparent communication at each milestone.</p>
        <p>After the sale, focus on delivering on the roadmap commitments that justified the raise. Maintain regular communication with token holders about development progress, treasury management, and ecosystem growth. The sale event generates initial capital and community, but long-term success requires sustained execution and transparent stewardship of both the project and the community's trust and investment.</p>
      </section>
    </LearnPageLayout>
  );
}
