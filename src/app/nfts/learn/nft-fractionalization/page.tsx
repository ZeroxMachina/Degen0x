import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Fractional NFTs: Shared Ownership Explained (${CURRENT_YEAR}) | degen0x`,
  description: "Learn how fractional NFTs enable shared ownership of expensive digital assets. Understand fractionalization platforms, governance, and how to invest in fractional NFT shares.",
};

export default function NftFractionalizationPage() {
  return (
    <LearnPageLayout
      title="Fractional NFTs: Shared Ownership Explained"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="9 min"
      intro="Fractional NFTs allow multiple people to own shares of a single NFT, making expensive digital assets accessible to a broader audience. Instead of needing hundreds of ETH to buy a CryptoPunk, you can own a fraction for a few dollars. Fractionalization divides an NFT's ownership into fungible tokens that can be bought, sold, and traded on decentralized exchanges. This guide explains how fractionalization works, the major platforms, and the considerations for fractional NFT investors."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-nft-fractionalization-works", title: "How NFT Fractionalization Works", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "fractionalization-platforms", title: "Fractionalization Platforms", level: 2 },
        { id: "governance", title: "governance", level: 2 },
        { id: "governance-and-decision-making", title: "Governance and Decision Making", level: 2 },
        { id: "investing", title: "investing", level: 2 },
        { id: "investing-in-fractional-nfts", title: "Investing in Fractional NFTs", level: 2 },
        { id: "risks-considerations", title: "risks-considerations", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "Can I get the whole NFT if I buy all the fractions?", answer: "In most fractionalization protocols, buying all or a supermajority of fractions triggers a buyout mechanism. The specific threshold and process vary by platform. On Tessera (formerly Fractional.art), anyone can start a buyout by bidding on the whole NFT, and fraction holders vote on whether to accept. Successfully acquiring all fractions reconstitutes the original NFT." },
        { question: "Are fractional NFTs securities?", answer: "The regulatory status of fractional NFTs is uncertain and debated. The SEC has not issued definitive guidance, but fractional NFTs share characteristics with securities under the Howey Test if holders expect profits primarily from the efforts of others. Some platforms restrict access to US users due to regulatory concerns. Consult legal counsel if you are creating a fractionalization project." },
        { question: "What happens to the original NFT during fractionalization?", answer: "The original NFT is locked in a smart contract vault owned collectively by the fraction holders. It remains there until a buyout is triggered and completed, or until the fraction holders vote to reunify the NFT. The NFT cannot be moved, sold, or modified while it is fractionalized." },
      ]}
      relatedArticles={[
        { title: "NFT Lending and Borrowing", href: "/nfts/learn/nft-lending-borrowing", category: "NFTs" },
        { title: "NFT Investing Guide", href: "/nfts/learn/nft-investing-guide", category: "NFTs" },
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
      ]}
    >
      <h2 id="how-it-works">How NFT Fractionalization Works</h2>
      <p>Fractionalization involves locking an NFT in a smart contract vault and issuing a set number of fungible ERC-20 tokens that represent ownership shares. For example, a CryptoPunk worth 100 ETH could be fractionalized into 10,000 tokens, each worth approximately 0.01 ETH. These fraction tokens can be traded on decentralized exchanges like Uniswap, providing liquidity and price discovery. The NFT remains locked in the vault, governed by the collective decisions of fraction holders. Anyone holding fraction tokens has a proportional ownership stake in the underlying NFT.</p>

      <h2 id="platforms">Fractionalization Platforms</h2>
      <p>Tessera (formerly Fractional.art) was the pioneering fractionalization platform and remains well-known in the space. Unicly combines fractionalization with AMM pools for trading fraction tokens. PartyBid allows groups to pool funds to collectively purchase NFTs, which can then be fractionalized among participants. NFTX creates vault tokens representing index exposure to NFT collections rather than individual pieces. Szns enables seasonal NFT fund creation with fractionalized exposure. Each platform takes a different approach to governance, buyout mechanisms, and trading, so compare their models before choosing.</p>

      <h2 id="governance">Governance and Decision Making</h2>
      <p>Fraction holders collectively govern the locked NFT through on-chain voting. Key governance decisions include setting a reserve price for buyout offers, deciding whether to accept purchase offers, voting on whether to reunify the NFT, and managing any derivative rights associated with the NFT. Voting power is proportional to the number of fraction tokens held. Some platforms require a supermajority (typically 60-80%) to approve major decisions like accepting a buyout. This governance structure means minority holders can be outvoted, and large stakeholders have disproportionate influence.</p>

      <h2 id="investing">Investing in Fractional NFTs</h2>
      <p>Fractional NFTs provide affordable exposure to blue-chip collections. Instead of needing 100+ ETH for a CryptoPunk, you can buy fraction tokens for a few dollars. Fraction tokens trade on DEXs with price reflecting collective valuation. When evaluating fractional NFTs, consider the underlying NFT's quality and market position, the fraction token's liquidity, the governance structure, and the buyout mechanism. Track the implicit valuation (fraction price times total fractions) against the NFT floor price to identify potential over or undervaluation. Liquidity is crucial: illiquid fraction tokens may be difficult to sell at fair value.</p>

      <h2 id="risks-considerations">Risks and Considerations</h2>
      <p>Fractional NFT investing carries several unique risks. Liquidity risk means fraction tokens may have thin trading volume, making it difficult to buy or sell at fair prices. Governance risk means other fraction holders can make decisions you disagree with, including accepting a buyout at a price you consider too low. Regulatory risk is significant since fractional NFTs may be classified as securities in some jurisdictions. Smart contract risk exists since bugs in the vault contract could compromise the locked NFT. Valuation risk is complex since fraction prices may deviate significantly from the underlying NFT's fair value. Start with small positions and ensure you understand the specific platform's mechanisms before committing significant funds.</p>
    </LearnPageLayout>
  );
}
