import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Royalties Explained: How Creator Royalties Work (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how NFT royalties work, which marketplaces enforce them, the creator royalty debate, and how royalty structures are evolving across the NFT ecosystem.",
};

export default function NftRoyaltiesExplainedPage() {
  return (
    <LearnPageLayout
      title="NFT Royalties Explained"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="NFT royalties are fees automatically paid to the original creator every time their NFT is resold on the secondary market. This mechanism was one of the most revolutionary promises of NFTs: artists earning ongoing income from their work as it appreciates in value. However, the reality of royalty enforcement has become one of the most debated topics in the NFT ecosystem."
      toc={[
        { id: "how-royalties-work", title: "How NFT Royalties Work", level: 2 },
        { id: "royalty-standards", title: "Royalty Standards and Implementation", level: 2 },
        { id: "enforcement-debate", title: "The Royalty Enforcement Debate", level: 2 },
        { id: "marketplace-policies", title: "Marketplace Royalty Policies", level: 2 },
        { id: "setting-royalties", title: "Setting Royalties as a Creator", level: 2 },
        { id: "future-of-royalties", title: "The Future of NFT Royalties", level: 2 },
      ]}
      faqs={[
        {
          question: "What is a typical NFT royalty percentage?",
          answer:
            "Most NFT creators set royalties between 5% and 10% of the secondary sale price. Art-focused projects sometimes set higher rates (10-15%), while PFP collections tend to settle around 5%. Some projects have reduced or eliminated royalties due to marketplace competition.",
        },
        {
          question: "Do all marketplaces enforce royalties?",
          answer:
            "No. Blur makes royalties optional for buyers, OpenSea has moved to optional enforcement, and many newer platforms skip royalties entirely. Only a few marketplaces like Rarible and Foundation maintain strong royalty enforcement. The trend has been toward optional or reduced royalties.",
        },
        {
          question: "Can royalties be changed after minting?",
          answer:
            "It depends on the smart contract. Some contracts allow the creator to adjust royalty percentages after deployment, while others lock the royalty rate permanently. Marketplace-level royalty settings can typically be adjusted by the creator through the platform dashboard.",
        },
        {
          question: "Do royalties apply on every marketplace?",
          answer:
            "Royalties set in the smart contract are technically only enforceable by marketplaces that choose to honor them. Private sales, peer-to-peer transfers, and platforms that ignore on-chain royalty data can bypass them. This is a fundamental limitation of the current royalty infrastructure.",
        },
        {
          question: "How do I earn royalties from my NFTs?",
          answer:
            "When you mint an NFT, set your desired royalty percentage through the marketplace or smart contract. When a secondary sale occurs on a royalty-honoring marketplace, the royalty amount is automatically deducted from the sale and sent to the creator wallet specified in the contract.",
        },
      ]}
      relatedArticles={[
        { title: "How to Create and Mint NFTs", href: "/nfts/learn/how-to-create-nfts", category: "NFTs" },
        { title: "NFT Marketplaces Explained", href: "/nfts/learn/nft-marketplaces-explained", category: "NFTs" },
        { title: "NFT Tax Guide", href: "/nfts/learn/nft-tax-guide", category: "NFTs" },
      ]}
    >
      <h2 id="how-royalties-work">How NFT Royalties Work</h2>
      <p>
        When an NFT is created, the creator can specify a royalty percentage that is recorded in the
        token&apos;s metadata or smart contract. When that NFT is resold on a marketplace that honors
        royalties, the specified percentage of the sale price is automatically routed to the creator&apos;s
        wallet. For example, if a creator sets a 7.5% royalty and their NFT resells for 10 ETH, they
        receive 0.75 ETH from that sale.
      </p>
      <p>
        This happens on every subsequent sale, not just the first resale. In theory, a creator could
        earn royalties indefinitely as their work changes hands over decades. This model represented a
        paradigm shift from traditional art markets, where artists typically only profit from the initial
        sale no matter how much their work appreciates over time.
      </p>

      <h2 id="royalty-standards">Royalty Standards and Implementation</h2>
      <p>
        The ERC-2981 standard on Ethereum provides a way for smart contracts to signal royalty information.
        However, this is an informational standard rather than an enforcement mechanism. Marketplaces must
        choose to read and honor the royalty data. On Solana, Metaplex has implemented token standards with
        built-in royalty mechanisms, and recent updates have added enforcement at the protocol level.
      </p>
      <p>
        Some projects implement royalties at the smart contract level using transfer hooks that require
        royalty payment before a transfer can complete. This approach is more enforceable but can create
        friction and incompatibility with some wallets and platforms. The trade-off between enforceability
        and composability remains a significant technical challenge across all blockchains.
      </p>

      <h2 id="enforcement-debate">The Royalty Enforcement Debate</h2>
      <p>
        The royalty enforcement debate has split the NFT community. Creators argue that royalties are
        essential for sustaining artistic careers and funding ongoing project development. Without
        royalties, many projects would lack resources to deliver on roadmap promises, and artists would
        lose a critical revenue stream that drew them to the NFT space.
      </p>
      <p>
        On the other side, traders argue that mandatory royalties reduce market efficiency and that
        sellers should not be forced to pay a tax on every transaction. When Blur launched with zero
        royalty enforcement and captured significant market share, it demonstrated that many traders
        preferred the lower-cost option. The result has been a race to the bottom on royalty enforcement
        across most major marketplaces.
      </p>

      <h2 id="marketplace-policies">Marketplace Royalty Policies</h2>
      <p>
        Policies vary significantly across marketplaces. Blur makes royalties optional, which has
        contributed to its dominance in Ethereum trading volume. OpenSea shifted to optional royalties
        after initially supporting full enforcement. Foundation and SuperRare continue to enforce creator
        royalties as part of their art-focused identity. Magic Eden enforces royalties on Solana but has
        more flexible policies on other chains.
      </p>
      <p>
        Rarible is one of the strongest royalty advocates, maintaining enforcement as a core principle.
        Zora takes a different approach with its protocol-level mint referral system that provides
        alternative creator compensation. The landscape continues to evolve, and creators should research
        each marketplace&apos;s current royalty policy before choosing where to list their work.
      </p>

      <h2 id="setting-royalties">Setting Royalties as a Creator</h2>
      <p>
        When setting your royalty percentage, consider the market norms for your NFT category, the
        expectations of potential buyers, and the ongoing costs of maintaining your project. Higher
        royalties provide more revenue per sale but may discourage trading and reduce overall volume. A
        rate between 5% and 7.5% is generally considered reasonable by most of the market.
      </p>
      <p>
        Ensure your royalty information is set both at the smart contract level and on each marketplace
        where your NFTs are listed. Some platforms have their own royalty configuration that overrides
        or supplements on-chain data. Test a sale with a secondary wallet to confirm royalties are flowing
        correctly to your creator wallet before promoting your collection.
      </p>

      <h2 id="future-of-royalties">The Future of NFT Royalties</h2>
      <p>
        The future of NFT royalties likely involves a combination of protocol-level enforcement,
        alternative compensation models, and market segmentation. Some communities will pay royalties
        willingly to support creators they value, while others will gravitate toward zero-royalty
        platforms. New models like mint referral fees, staking rewards for creators, and revenue-sharing
        mechanisms offer alternative paths to sustainable creator income.
      </p>
      <p>
        Protocol-level enforcement through transfer hooks is becoming more sophisticated, particularly
        on Solana. On Ethereum, solutions like Limit Break&apos;s Payment Processor allow creators to
        mandate royalties at the contract level. While the debate continues, the most resilient creators
        are diversifying their revenue streams rather than relying solely on secondary market royalties.
      </p>
    </LearnPageLayout>
  );
}
