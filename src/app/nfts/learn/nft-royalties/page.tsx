import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Royalties: How Creator Royalties Work (${CURRENT_YEAR}) | degen0x`,
  description: "Understand how NFT royalties work, which platforms enforce them, the royalty debate, and how creators can maximize ongoing income from secondary sales.",
};

export default function NftRoyaltiesPage() {
  return (
    <LearnPageLayout
      title="NFT Royalties: How Creator Royalties Work"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="9 min"
      intro="NFT royalties enable creators to earn a percentage of every secondary sale of their work, creating ongoing passive income long after the initial mint. When a collector resells an NFT, the original creator automatically receives a royalty payment, typically 2.5-10% of the sale price. However, the enforcement of royalties has become one of the most debated topics in the NFT space. This guide explains how royalties work, the current enforcement landscape, and what creators need to know."
      toc={[
        { id: "how-royalties-work", title: "how-royalties-work", level: 2 },
        { id: "how-nft-royalties-work", title: "How NFT Royalties Work", level: 2 },
        { id: "enforcement-debate", title: "enforcement-debate", level: 2 },
        { id: "the-royalty-enforcement-debate", title: "The Royalty Enforcement Debate", level: 2 },
        { id: "platform-policies", title: "platform-policies", level: 2 },
        { id: "platform-royalty-policies", title: "Platform Royalty Policies", level: 2 },
        { id: "maximizing-royalties", title: "maximizing-royalties", level: 2 },
        { id: "maximizing-royalty-income", title: "Maximizing Royalty Income", level: 2 },
        { id: "future-royalties", title: "future-royalties", level: 2 },
        { id: "the-future-of-nft-royalties", title: "The Future of NFT Royalties", level: 2 }
      ]}
      faqs={[
        { question: "What is a typical NFT royalty percentage?", answer: "Most NFT collections set royalties between 2.5% and 10% of the secondary sale price. The most common rate is 5%. Higher royalties (7.5-10%) are common for art-focused collections where creators provide significant ongoing value. Lower royalties (2.5%) are sometimes used for large PFP collections where traders prefer lower friction." },
        { question: "Can buyers avoid paying royalties?", answer: "On platforms with optional royalties like Blur and LooksRare, buyers can choose not to pay creator royalties. Some platforms and smart contracts enforce royalties at the protocol level, making them unavoidable. The shift toward optional royalties has significantly reduced creator earnings on secondary sales." },
        { question: "Do royalties apply to all blockchains?", answer: "The technical implementation of royalties varies by blockchain. Ethereum uses the EIP-2981 standard for royalty information. Solana has its own royalty enforcement mechanisms. Each blockchain and marketplace handles royalties differently, and enforcement is not universal. Creators should understand the royalty landscape on their chosen blockchain." },
      ]}
      relatedArticles={[
        { title: "How to Create NFTs", href: "/nfts/learn/how-to-create-nfts", category: "NFTs" },
        { title: "NFT Photography Guide", href: "/nfts/learn/nft-photography", category: "NFTs" },
        { title: "Music NFTs", href: "/nfts/learn/nft-music", category: "NFTs" },
      ]}
    >
      <h2 id="how-royalties-work">How NFT Royalties Work</h2>
      <p>When a creator mints an NFT, they set a royalty percentage in the smart contract or marketplace settings. On platforms that enforce royalties, this percentage is automatically deducted from each secondary sale and sent to the creator's wallet. For example, if you set a 5% royalty and your NFT resells for 10 ETH, you automatically receive 0.5 ETH. This happens on every subsequent sale indefinitely. Royalties are specified using standards like EIP-2981 on Ethereum, which allows marketplaces to query the royalty information and pay accordingly. The automated nature eliminates the need for complex licensing agreements or manual tracking.</p>

      <h2 id="enforcement-debate">The Royalty Enforcement Debate</h2>
      <p>The royalty debate intensified when Blur launched with zero royalties as default, prioritizing trader preferences over creator earnings. This created a race to the bottom where marketplaces competed on lower fees and optional royalties to attract volume. Creators argued that royalties fund ongoing development, community building, and artistic creation. Traders argued that mandatory royalties reduce liquidity and increase transaction costs. The debate highlighted a fundamental tension between creator sustainability and trading efficiency. No consensus has been reached, and the landscape remains fractured.</p>

      <h2 id="platform-policies">Platform Royalty Policies</h2>
      <p>Foundation enforces full creator royalties (typically 10%) on all sales. SuperRare enforces royalties through its platform. OpenSea moved to optional royalties after initially enforcing them. Blur defaults to zero royalties but allows buyers to choose. Magic Eden enforces royalties on Solana through its royalty enforcement mechanism but makes them optional on Ethereum. LooksRare and X2Y2 have optional royalties. Zora respects creator-set royalties. The result is a fragmented landscape where creators may or may not receive royalties depending on which marketplace their NFTs are traded on.</p>

      <h2 id="maximizing-royalties">Maximizing Royalty Income</h2>
      <p>Creators can take several steps to maximize royalty income. Set royalties at a rate that balances income with trading friction, typically 5-7.5%. Use on-chain royalty enforcement mechanisms where available, such as Solana's royalty enforcement or ERC-721C token standard on Ethereum. Build collector relationships that encourage trading on royalty-respecting platforms. Create ongoing value through community, airdrops, and utility that incentivizes collectors to support royalties. Consider the tradeoff between higher royalty percentages and trading volume, as lower royalties may generate more total income through higher sales velocity.</p>

      <h2 id="future-royalties">The Future of NFT Royalties</h2>
      <p>New technical solutions are being developed to enforce royalties at the smart contract level rather than relying on marketplace compliance. The ERC-721C standard allows creators to restrict transfers to only marketplaces that honor royalties. Limit Break's Creator Token Standard embeds royalty enforcement directly into the token contract. Solana's programmable royalties provide blockchain-level enforcement. While these technical solutions add friction, they give creators reliable income streams regardless of marketplace policies. The long-term trajectory appears to favor a mix of enforceable and optional royalties depending on the use case and creator preference.</p>
    </LearnPageLayout>
  );
}
