import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Smart Contracts Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how NFT smart contracts work, the differences between ERC-721 and ERC-1155, how to read contract code, and what to look for in NFT contract security.",
};

export default function NftSmartContractsPage() {
  return (
    <LearnPageLayout title="NFT Smart Contracts Explained" categoryName="NFTs" categorySlug="nfts" readTime="10 min read"
      intro="Every NFT is created and managed by a smart contract deployed on a blockchain. Understanding how these contracts work gives you a significant advantage as a collector, trader, or creator. Smart contracts define the rules for minting, transferring, and managing NFTs, including royalty enforcement, access control, and metadata handling. This guide demystifies NFT smart contracts, explaining the major standards, key functions, and what to look for when evaluating a project's contract."
      toc={[
        { id: "nft-standards", title: "nft-standards", level: 2 },
        { id: "nft-token-standards", title: "NFT Token Standards", level: 2 },
        { id: "key-functions", title: "key-functions", level: 2 },
        { id: "key-contract-functions", title: "Key Contract Functions", level: 2 },
        { id: "reading-contracts", title: "reading-contracts", level: 2 },
        { id: "reading-nft-contracts", title: "Reading NFT Contracts", level: 2 },
        { id: "contract-security", title: "contract-security", level: 2 },
        { id: "contract-security", title: "Contract Security", level: 2 }
      ]}
      faqs={[{ question: "What is the difference between ERC-721 and ERC-1155?", answer: "ERC-721 creates unique, one-of-a-kind tokens where each has a distinct token ID and owner. It is the standard for unique collectibles and art. ERC-1155 supports both unique tokens and fungible batches within the same contract, allowing one contract to manage multiple types of items. ERC-1155 is more gas-efficient for bulk operations and is popular in gaming where you need both unique and identical items." },
        { question: "Can a smart contract be changed after deployment?", answer: "Standard smart contracts are immutable once deployed. However, upgradeable proxy patterns allow the contract logic to be changed while maintaining the same address and token data. This flexibility is useful for bug fixes but introduces risk if the upgrade authority is centralized. Check whether an NFT contract uses upgradeable proxies and who controls the upgrade mechanism. Fully immutable contracts are safer but cannot be updated." },
        { question: "What are creator royalties technically?", answer: "On-chain royalties use standards like EIP-2981, which adds a royaltyInfo function to the contract. When marketplaces check this function, it returns the royalty recipient and percentage. However, marketplaces are not technically required to honor this. Some marketplaces (like Blur) make royalties optional. Newer approaches like operator filtering (used by OpenSea) attempt to enforce royalties at the contract level by blocking marketplaces that do not honor them." }]}
      relatedArticles={[{ title: "NFT Minting Guide", href: "/nfts/learn/nft-minting-guide", category: "NFTs" }, { title: "NFT Storage", href: "/nfts/learn/nft-storage", category: "NFTs" }, { title: "How to Create NFTs", href: "/nfts/learn/how-to-create-nfts", category: "NFTs" }, { title: "NFT Utility", href: "/nfts/learn/nft-utility", category: "NFTs" }]}
    >
      <section id="nft-standards">
        <h2>NFT Token Standards</h2>
        <p>ERC-721 is the original and most widely used NFT standard on Ethereum. Each token has a unique ID and a single owner. The standard defines core functions for transferring tokens, checking ownership, and approving other addresses to manage tokens on your behalf. ERC-721A, an optimized variant created by Azuki, significantly reduces gas costs for batch minting by modifying how ownership data is stored, making it the preferred choice for large PFP collections.</p>
        <p>ERC-1155 (the multi-token standard) allows a single contract to manage both fungible and non-fungible tokens. A gaming project might use one ERC-1155 contract for unique character NFTs, stackable item NFTs, and fungible in-game currency. On Solana, the Metaplex Token Metadata standard serves a similar role to ERC-721, while compressed NFTs (cNFTs) use Merkle trees to reduce storage costs dramatically, enabling millions of NFTs to be minted for fractions of a cent each.</p>
      </section>

      <section id="key-functions">
        <h2>Key Contract Functions</h2>
        <p>The mint function creates new tokens and is the most scrutinized function in any NFT contract. It typically includes parameters for quantity, price validation, and access control (allowlist checks). The transferFrom function moves tokens between addresses. The approve and setApprovalForAll functions grant other addresses permission to transfer your tokens, which is how marketplaces operate. The tokenURI function returns the metadata location for each token, which is where the image and attributes are defined.</p>
        <p>Owner-only functions control contract administration. The withdraw function allows the project team to collect minting revenue. The setBaseURI function updates the metadata location, which is how unrevealed collections transition to revealed art. Some contracts include pause functionality to stop minting or transfers in emergencies. Understanding these functions and who has permission to call them reveals the power dynamics within a project and potential centralization risks.</p>
      </section>

      <section id="reading-contracts">
        <h2>Reading NFT Contracts</h2>
        <p>Verified contracts on Etherscan display their full source code, allowing anyone to review the logic. Even without deep Solidity knowledge, you can identify key aspects. Look for the mint price and supply limit in the mint function. Check who controls administrative functions (owner, multi-sig, or DAO). Identify if the contract is upgradeable by looking for proxy patterns. Review the tokenURI function to understand where metadata is stored (IPFS, Arweave, or a centralized server).</p>
        <p>Red flags in contracts include: unverified source code (the team has not published the code for review), owner-controlled functions that can modify critical parameters (changing mint price, total supply, or metadata after launch), hidden mint functions that allow the team to mint tokens for free, and withdraw functions with no time locks or multi-sig requirements. Reputable projects verify their contracts, renounce unnecessary admin permissions, and use multi-sig wallets for any remaining administrative capabilities.</p>
      </section>

      <section id="contract-security">
        <h2>Contract Security</h2>
        <p>Smart contract security is paramount because deployed contracts cannot be patched like traditional software. Reputable projects undergo professional security audits from firms like OpenZeppelin, Trail of Bits, or Certik before launch. Audit reports are typically published and identify vulnerabilities found and resolved. While an audit does not guarantee perfect security, it significantly reduces the risk of critical bugs. Unaudited contracts carry substantially higher risk.</p>
        <p>Common vulnerabilities in NFT contracts include reentrancy attacks (where a malicious contract re-enters the mint function to mint more than allowed), integer overflow or underflow (miscalculations that can bypass price or supply limits), and front-running vulnerabilities (where miners or bots can see and exploit pending transactions). Using battle-tested libraries like OpenZeppelin&apos;s contracts as a base significantly reduces these risks. As a collector, prefer projects that use standard, audited contract patterns and have transparent security practices.</p>
      </section>
    </LearnPageLayout>
  );
}
