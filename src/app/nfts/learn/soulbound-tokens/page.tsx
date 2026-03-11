import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Soulbound Tokens (SBTs) Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Soulbound Tokens, non-transferable NFTs for identity, credentials, and reputation. Understand how SBTs work, their use cases, and implications for Web3 identity.",
};

export default function SoulboundTokensPage() {
  return (
    <LearnPageLayout
      title="Soulbound Tokens (SBTs) Explained"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="9 min"
      intro="Soulbound Tokens (SBTs) are non-transferable NFTs that represent identity, credentials, affiliations, and reputation on the blockchain. Unlike traditional NFTs that can be bought, sold, and traded, SBTs are permanently bound to the wallet that receives them. Proposed by Ethereum co-founder Vitalik Buterin, SBTs aim to bring trust, identity, and social relationships to Web3, enabling a 'Decentralized Society' where individuals have verifiable digital identities."
      toc={[
        { id: "what-are-sbts", title: "What Are Soulbound Tokens", level: 2 },
        { id: "how-they-work", title: "How SBTs Work", level: 2 },
        { id: "use-cases", title: "Use Cases for SBTs", level: 2 },
        { id: "challenges", title: "Challenges and Concerns", level: 2 },
        { id: "current-implementations", title: "Current Implementations", level: 2 },
      ]}
      faqs={[
        { question: "Can Soulbound Tokens be removed or revoked?", answer: "Some SBT implementations allow the issuer to revoke the token, similar to how a university could revoke a degree. Others are permanently bound with no revocation mechanism. The specific design depends on the use case and implementation. Most proposals include a mechanism for the holder to hide or burn their SBTs if desired." },
        { question: "Are SBTs the same as verifiable credentials?", answer: "SBTs and verifiable credentials (VCs) address similar needs but differ technically. VCs are typically stored off-chain and selectively disclosed, offering more privacy. SBTs are on-chain and publicly visible by default. Some hybrid approaches combine both, using VCs for sensitive data and SBTs for public attestations." },
        { question: "Can SBTs replace KYC?", answer: "SBTs could streamline KYC by allowing a verified identity attestation to be used across multiple platforms without repeating the verification process. However, privacy concerns, regulatory requirements, and the permanent nature of on-chain data make full KYC replacement complex. SBTs may complement rather than replace traditional KYC." },
      ]}
      relatedArticles={[
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
        { title: "Dynamic NFTs", href: "/nfts/learn/dynamic-nfts", category: "NFTs" },
        { title: "NFT Domain Names", href: "/nfts/learn/nft-domain-names", category: "NFTs" },
      ]}
    >
      <h2 id="what-are-sbts">What Are Soulbound Tokens</h2>
      <p>The concept of Soulbound Tokens was introduced by Vitalik Buterin in a 2022 paper co-authored with E. Glen Weyl and Puja Ohlhaver. The term borrows from World of Warcraft where soulbound items cannot be traded between players. SBTs are non-transferable tokens that represent commitments, credentials, and affiliations of an individual or entity. They form the building blocks of a verifiable on-chain identity system. Examples include educational degrees, professional certifications, membership attestations, proof of attendance, credit scores, and medical records.</p>

      <h2 id="how-they-work">How SBTs Work</h2>
      <p>SBTs are minted to a specific wallet address and the smart contract prevents any transfer to another address. An issuing entity, such as a university, employer, or DAO, creates the SBT and sends it to the recipient's wallet. The token contains metadata describing the credential or attestation. Because the token is on-chain, any smart contract or application can verify its existence and validity. SBTs can be implemented using modified ERC-721 or ERC-1155 standards with the transfer function disabled, or through purpose-built standards like ERC-5192 (Minimal Soulbound NFTs).</p>

      <h2 id="use-cases">Use Cases for SBTs</h2>
      <p>Educational credentials are a natural fit: universities could issue SBT diplomas that employers can verify instantly. Professional certifications, conference attendance, and course completion can all be represented as SBTs. In DeFi, SBTs could enable under-collateralized lending by establishing on-chain reputation and credit history. DAO governance could use SBTs to weight voting based on contribution history rather than token holdings. Employment history, skills attestations, and peer endorsements could form a verifiable professional profile. Social recovery mechanisms for wallets could use SBTs to identify trusted contacts who can help restore access.</p>

      <h2 id="challenges">Challenges and Concerns</h2>
      <p>Privacy is the primary concern with SBTs. On-chain data is publicly visible, meaning anyone could see all credentials and affiliations associated with a wallet. This could enable discrimination or profiling. Solutions include selective disclosure through zero-knowledge proofs, allowing SBT holders to prove they possess a credential without revealing it publicly. The permanence of blockchain data raises concerns about the right to be forgotten. Wallet loss or compromise could result in losing your entire identity, though social recovery mechanisms address this partially. The lack of standardization means different SBT implementations may not be interoperable.</p>

      <h2 id="current-implementations">Current Implementations</h2>
      <p>Several projects are implementing SBTs today. Binance launched BAB (Binance Account Bound) tokens for verified users. Galxe and Layer3 issue non-transferable achievement tokens for on-chain activity. Proof of Humanity uses SBT-like attestations for identity verification. Gitcoin Passport uses attestations to establish unique personhood for quadratic funding. World ID by Worldcoin creates proof-of-personhood tokens. While still early, these implementations demonstrate the practical utility of non-transferable tokens for identity, reputation, and access control in Web3 applications.</p>
    </LearnPageLayout>
  );
}
