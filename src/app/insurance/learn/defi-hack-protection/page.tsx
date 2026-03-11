import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Hack Protection Guide (${CURRENT_YEAR}) - Smart Contract Insurance | ${SITE_NAME}`,
  description: `Protect yourself from DeFi hacks in ${CURRENT_YEAR}. Smart contract insurance, protocol cover, risk assessment strategies, and the best DeFi insurance providers.`,
  alternates: { canonical: "/insurance/learn/defi-hack-protection" },
};

const toc = [
  { id: "defi-risks", title: "Understanding DeFi Hack Risks", level: 2 },
  { id: "smart-contract-cover", title: "Smart Contract Insurance", level: 2 },
  { id: "providers", title: "Top DeFi Insurance Providers", level: 2 },
  { id: "risk-assessment", title: "Assessing Protocol Risk Yourself", level: 2 },
  { id: "protection-strategy", title: "Building a Protection Strategy", level: 2 },
];

const faqs = [
  { question: "What is DeFi insurance?", answer: "DeFi insurance is coverage purchased through decentralized protocols that pays out if a specific smart contract is exploited. You buy a policy (called cover) for a specific protocol and duration. If that protocol suffers a qualifying hack or exploit during your coverage period, you can file a claim for reimbursement. Popular providers include Nexus Mutual, InsurAce, and Neptune Mutual." },
  { question: "How much does DeFi insurance cost?", answer: "DeFi insurance premiums typically range from 2% to 15% of the covered amount annually, depending on the protocol being covered and the perceived risk. Well-established protocols like Aave may have lower premiums while newer or more complex protocols cost more to insure. Premiums are determined by supply and demand in the cover market." },
  { question: "Does DeFi insurance cover all types of losses?", answer: "No. DeFi insurance typically covers smart contract exploits, hacks, and oracle manipulation attacks. It generally does not cover market losses, impermanent loss, governance attacks where the community votes to take a harmful action, rug pulls by anonymous teams, or losses from user error (sending to wrong address, falling for phishing). Read the specific policy terms carefully." },
  { question: "How do DeFi insurance claims work?", answer: "After a qualifying event, you submit a claim through the insurance protocol. Claims are typically assessed by token holders or designated claim assessors who vote on validity. If approved, you receive a payout in the cover token or stablecoin equivalent. The process usually takes 1-4 weeks. Some protocols use parametric triggers where payouts are automatic based on predefined conditions." },
  { question: "Is DeFi insurance worth the cost?", answer: "For large DeFi positions (over $10,000), insurance is generally worth considering. The cost of 2-10% annually is small compared to a potential 100% loss from an exploit. For smaller positions, the cost-benefit may not justify the premium. Consider insuring your largest positions on newer or more complex protocols while accepting the risk on established blue-chip protocols." },
];

const relatedArticles = [
  { title: "Crypto Custody Insurance", href: "/insurance/learn/crypto-custody-insurance", category: "Insurance" },
  { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
  { title: "DeFi Wallet Guide", href: "/wallets/learn/defi-wallet-guide", category: "Wallets" },
];

export default function DefiHackProtectionPage() {
  return (
    <LearnPageLayout
      title="DeFi Hack Protection: Insurance and Risk Management"
      categoryName="Crypto Insurance"
      categorySlug="insurance"
      readTime="9 min"
      intro="DeFi protocols have lost billions of dollars to smart contract exploits, oracle manipulation, and other attack vectors. While the security of top protocols has improved significantly, the risk of loss from hacks remains real. DeFi insurance and proactive risk management practices can protect your capital from catastrophic losses. This guide covers how to assess risk, purchase coverage, and build a comprehensive protection strategy."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="defi-risks">Understanding DeFi Hack Risks</h2>
      <p>
        DeFi hacks come in several forms. Smart contract vulnerabilities are bugs in protocol
        code that attackers exploit to drain funds. Oracle manipulation attacks trick protocols
        into using incorrect price data, enabling attackers to borrow more than their collateral
        is worth. Flash loan attacks combine borrowed capital with contract vulnerabilities to
        extract value in a single transaction. Bridge exploits target the cross-chain infrastructure
        that transfers assets between blockchains.
      </p>
      <p>
        The financial impact of DeFi hacks is substantial. Major exploits have resulted in losses
        of hundreds of millions of dollars in a single incident. Even well-audited protocols have
        been exploited, as audits can only check for known vulnerability patterns. The risk cannot
        be eliminated entirely, which is why insurance and diversification are essential components
        of a responsible DeFi strategy, not optional add-ons.
      </p>

      <h2 id="smart-contract-cover">Smart Contract Insurance</h2>
      <p>
        Smart contract insurance (often called smart contract cover) pays out when a covered
        protocol suffers a qualifying exploit. You purchase cover for a specific protocol, a
        specific amount, and a specific duration. If an exploit occurs during your coverage
        period that meets the policy criteria, you file a claim and receive compensation. This
        works similarly to traditional insurance but operates through decentralized protocols.
      </p>
      <p>
        Coverage terms matter significantly. Some policies only cover direct smart contract
        bugs, while others include oracle manipulation, governance attacks, and economic exploits.
        Some policies require a minimum loss threshold before claims can be filed. Payout caps
        may limit your reimbursement to a percentage of the total loss. Read the specific cover
        terms of any policy before purchasing to ensure it covers the risks you are most concerned about.
      </p>

      <h2 id="providers">Top DeFi Insurance Providers</h2>
      <p>
        Nexus Mutual is the largest DeFi insurance provider, offering smart contract cover for
        numerous protocols. Members purchase NXM tokens to participate in the mutual and buy
        cover. Claims are assessed by community members who stake NXM. InsurAce provides
        multi-chain coverage with portfolio-based pricing that can reduce costs when covering
        multiple protocols. Neptune Mutual uses a parametric model where payouts are triggered
        automatically based on predefined incident criteria.
      </p>
      <p>
        When choosing a provider, consider the claims track record (have they paid claims
        successfully?), the coverage breadth (do they cover the protocols you use?), the assessment
        process (how are claims decided?), and the financial capacity of the insurance pool to
        pay large claims. A provider with a larger capital pool is more likely to honor claims
        from a major exploit. Diversifying your insurance across multiple providers can reduce
        the risk of any single insurer being unable to pay.
      </p>

      <h2 id="risk-assessment">Assessing Protocol Risk Yourself</h2>
      <p>
        Before depositing into any DeFi protocol, assess its risk profile. Check how many audits
        the protocol has had and by which firms (Trail of Bits, OpenZeppelin, and Certora are
        well-regarded). Review the protocol&apos;s track record: how long has it operated and how much
        TVL has it managed without incident? Examine the team: are they publicly known and
        accountable? Check the bug bounty program: larger bounties attract more security researchers.
      </p>
      <p>
        Tools like DeFi Safety, DeFiLlama risk scores, and L2Beat (for Layer-2 protocols) provide
        standardized risk assessments. Look at the protocol&apos;s upgrade mechanisms: can the team
        upgrade contracts unilaterally, or are there timelocks and governance requirements?
        Protocols with immutable or timelock-protected contracts are generally safer. Consider
        the complexity of the protocol: simpler protocols have fewer attack surfaces than complex
        multi-contract systems.
      </p>

      <h2 id="protection-strategy">Building a Protection Strategy</h2>
      <p>
        Layer your protection across multiple approaches. First, diversify across protocols rather
        than concentrating all funds in a single smart contract. Second, purchase insurance for
        your largest positions, especially in newer or more complex protocols. Third, use protocols
        with strong security track records for your core holdings. Fourth, maintain a portion of
        your portfolio in self-custody outside of any DeFi protocol.
      </p>
      <p>
        Set risk budgets for your DeFi activity. Decide the maximum percentage of your portfolio
        you are willing to have in DeFi at any time, and the maximum per protocol. Insure positions
        above a certain threshold. Regularly review and revoke unnecessary token approvals. Stay
        informed about security incidents in protocols you use. Having a clear incident response
        plan (knowing how to quickly withdraw funds if a protocol shows signs of compromise) is
        as important as insurance. Speed matters during exploit events, and preparation ensures
        you can act quickly when needed.
      </p>
    </LearnPageLayout>
  );
}
