import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Decentralized Science (DeSci) Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about DeSci: how blockchain is transforming scientific research through decentralized funding, open access publishing, tokenized IP, and community-governed research organizations.",
};

export default function DecentralizedSciencePage() {
  return (
    <LearnPageLayout
      title="Decentralized Science (DeSci) Explained"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Decentralized Science (DeSci) is a movement that applies blockchain technology and Web3 principles to address systemic problems in the scientific research ecosystem. Traditional science faces challenges including limited funding access, publication gatekeeping, lack of reproducibility incentives, and barriers to collaboration. DeSci leverages token economics, DAOs, NFTs, and smart contracts to create more open, equitable, and efficient models for funding research, sharing knowledge, and incentivizing scientific discovery."
      toc={[
        { id: "problems", title: "Problems in Traditional Science", level: 2 },
        { id: "how-desci-helps", title: "How DeSci Addresses These Problems", level: 2 },
        { id: "key-projects", title: "Key DeSci Projects", level: 2 },
        { id: "challenges-future", title: "Challenges and Future Potential", level: 2 },
      ]}
      faqs={[
        {
          question: "How does DeSci fund research differently?",
          answer:
            "DeSci uses DAOs, quadratic funding, token sales, and NFTs to fund research. Instead of relying solely on government grants and corporate sponsors (which often have biases and long timelines), DeSci enables community-driven funding where anyone can contribute to research they believe in. Some projects tokenize intellectual property, allowing funders to share in the upside if research leads to commercial applications.",
        },
        {
          question: "Is DeSci only for blockchain-related research?",
          answer:
            "No. DeSci applies blockchain tools to research in any field — drug discovery, longevity science, climate research, space exploration, and more. The blockchain component is the coordination and incentive layer, not the subject of research. Many DeSci projects focus specifically on biomedical research and drug development, where the gap between public interest and traditional funding is particularly large.",
        },
        {
          question: "Can DeSci replace traditional academic institutions?",
          answer:
            "DeSci is unlikely to replace universities and research institutions but can complement them. It fills gaps in the current system: funding early-stage or unconventional research that traditional grants do not support, providing open access to published work, and creating new incentive models for reproducibility and data sharing. The most likely outcome is a hybrid system where DeSci and traditional science coexist and interact.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
        { title: "What Is Web3?", href: "/learn/what-is-web3", category: "Learn" },
        { title: "DePIN Explained", href: "/learn/decentralized-physical-infrastructure", category: "Learn" },
        { title: "Tokenomics Explained", href: "/learn/tokenomics-explained", category: "Learn" },
      ]}
    >
      <section id="problems">
        <h2>Problems in Traditional Science</h2>
        <p>
          The traditional scientific research ecosystem suffers from several structural problems. Funding is concentrated among established researchers at elite institutions, while early-career scientists and unconventional research topics struggle to secure grants. The grant application process is time-consuming and highly competitive, with success rates often below 20%. This creates a conservative bias where researchers pursue safe, incremental work rather than groundbreaking but risky ideas.
        </p>
        <p>
          Academic publishing is controlled by a few large publishers who charge high subscription fees while authors and peer reviewers work for free. Research data and methodologies are often siloed behind paywalls, limiting reproducibility and collaboration. There are weak incentives for sharing data, replicating studies, or publishing negative results, contributing to a reproducibility crisis. These systemic issues waste resources, slow progress, and limit who can participate in and benefit from scientific advancement.
        </p>
      </section>

      <section id="how-desci-helps">
        <h2>How DeSci Addresses These Problems</h2>
        <p>
          DeSci uses DAOs to create community-governed research funding organizations where token holders vote on which research proposals to fund. This democratizes funding decisions and can direct resources toward research areas underserved by traditional funding. Quadratic funding mechanisms amplify small individual contributions, ensuring that projects with broad community support receive funding proportional to the number of supporters rather than the wealth of individual backers.
        </p>
        <p>
          Blockchain-based publishing platforms create permanent, open-access records of research that cannot be censored or paywalled. NFTs can represent intellectual property rights, allowing researchers to tokenize and sell fractional ownership of their discoveries, creating new revenue streams and aligning the interests of funders and researchers. Smart contracts can automate reproducibility incentives by rewarding researchers who replicate studies and share data. Token-gated access and reputation systems create new models for peer review that reward quality contributions.
        </p>
      </section>

      <section id="key-projects">
        <h2>Key DeSci Projects</h2>
        <p>
          VitaDAO is one of the most prominent DeSci organizations, focused on funding longevity research through a DAO that collectively governs IP assets and research funding decisions. Members purchase VITA tokens to participate in governance, and the DAO has funded numerous longevity research projects while building a portfolio of intellectual property. Molecule provides infrastructure for tokenizing research IP and connecting researchers with funders.
        </p>
        <p>
          ResearchHub creates an open discussion platform for scientific papers with token incentives for quality contributions. LabDAO provides decentralized access to laboratory tools and computational resources. PsyDAO funds psychedelic therapy research. BioDAO structures are emerging for specific disease areas, allowing patient communities and advocates to directly fund and govern research relevant to their conditions. The DeSci ecosystem is still young but growing rapidly, with increasing recognition from the broader scientific community.
        </p>
      </section>

      <section id="challenges-future">
        <h2>Challenges and Future Potential</h2>
        <p>
          DeSci faces significant challenges. Regulatory uncertainty around tokenized IP and securities law creates compliance hurdles. The scientific community is generally conservative and skeptical of crypto, requiring DeSci projects to prove genuine value rather than relying on blockchain hype. Token governance of research funding can be susceptible to the same popularity biases and short-term thinking that affect other DAO governance. Ensuring research quality without traditional peer review infrastructure is an unsolved challenge.
        </p>
        <p>
          Despite these challenges, DeSci's potential is substantial. By lowering barriers to research funding, creating open access to knowledge, and aligning economic incentives with scientific progress, DeSci could significantly accelerate the pace of discovery in critical areas like drug development, climate science, and longevity research. As the tools and governance models mature and more success stories emerge, DeSci is positioned to become a meaningful complement to the traditional scientific research ecosystem, particularly in areas where current funding models fall short.
        </p>
      </section>
    </LearnPageLayout>
  );
}
