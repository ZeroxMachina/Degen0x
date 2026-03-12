import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Airdrops Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "NFT airdrops distribute free tokens to wallet holders based on various eligibility criteria...",
};

export default function NftAirdropsGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Airdrops Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="NFT airdrops distribute free tokens to wallet holders based on various eligibility criteria. Understanding how airdrops work and how to qualify is essential for maximizing NFT collecting benefits."
      toc={[
        { id: "section-1", title: "section-1", level: 2 },
        { id: "how-nft-airdrops-work", title: "How NFT Airdrops Work", level: 2 },
        { id: "section-2", title: "section-2", level: 2 },
        { id: "types-of-airdrops", title: "Types of Airdrops", level: 2 },
        { id: "section-3", title: "section-3", level: 2 },
        { id: "qualifying-for-airdrops", title: "Qualifying for Airdrops", level: 2 },
        { id: "section-4", title: "section-4", level: 2 },
        { id: "safety-and-best-practices", title: "Safety and Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "What is an NFT airdrop?", answer: "An NFT airdrop is a distribution of free tokens to wallet addresses that meet specific criteria, such as holding a particular NFT collection, participating in community activities, or being an early adopter of a platform." },
        { question: "Are NFT airdrops safe?", answer: "Legitimate airdrops from established projects are generally safe. However, scam airdrops are common. Never interact with unknown tokens sent to your wallet, never approve transactions from airdrop links, and verify airdrops through official project channels." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "NFT Staking Guide", href: "/nfts/learn/nft-staking-guide", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>How NFT Airdrops Work</h2>
        <p>NFT airdrops are free token distributions sent to eligible wallet addresses. Projects use airdrops to reward existing holders, distribute companion tokens, incentivize community participation, and generate marketing buzz. The mechanics vary from direct wallet drops where tokens appear automatically to claim-based systems where eligible holders must connect their wallet to a claim page and pay gas to receive their tokens.</p>
        <p>Airdrops have become a significant value driver in the NFT ecosystem. Holding blue-chip collections often qualifies wallets for multiple airdrops from the original project and partner projects. Some airdrops have been worth more than the original NFT purchase price, making airdrop potential an important factor in collection valuation and investment decisions for serious collectors.</p>
      </section>

      <section id="section-2">
        <h2>Types of Airdrops</h2>
        <p>Holder airdrops reward existing NFT holders with new tokens, companion NFTs, or fungible tokens. These are the most common type and incentivize holding rather than selling. Snapshot airdrops record wallet holdings at a specific block number, and only wallets holding eligible NFTs at that moment receive the distribution, creating urgency around snapshot dates.</p>
        <p>Activity-based airdrops reward participation in community events, governance voting, or platform usage. Retroactive airdrops surprise early adopters who used a platform before the airdrop was announced. Cross-project airdrops involve partnerships where holding one project's NFT qualifies you for another project's distribution, creating valuable connections between communities and expanding the potential value of each NFT holding.</p>
      </section>

      <section id="section-3">
        <h2>Qualifying for Airdrops</h2>
        <p>The primary qualification for most NFT airdrops is holding specific tokens at snapshot time. Monitor project announcements and community channels for snapshot dates. Be aware that listing NFTs for sale during snapshot windows may or may not disqualify you depending on the project's snapshot methodology and whether they track true holders versus wallets with listed items.</p>
        <p>Beyond holding, active community participation increases airdrop eligibility for activity-based distributions. Participate in governance votes, attend community events, contribute to discussions, and use project platforms. Maintaining a wallet history of genuine engagement rather than pure speculation positions you favorably for retroactive airdrops that reward authentic ecosystem participation.</p>
      </section>

      <section id="section-4">
        <h2>Safety and Best Practices</h2>
        <p>Airdrop scams are pervasive in the NFT space. Never interact with unknown tokens that appear in your wallet as they may contain malicious smart contract interactions. Never click claim links from unverified sources. Always verify airdrop announcements through official project channels, websites, and verified social media accounts before connecting your wallet to any claim interface.</p>
        <p>Use a dedicated wallet for claiming airdrops from less established projects to limit exposure if a claim site is malicious. Revoke unnecessary contract approvals after claiming. Report suspicious airdrops to community moderators. The tax treatment of airdropped tokens varies by jurisdiction and may create taxable income at the time of receipt, so track all airdrop values for accurate tax reporting.</p>
      </section>
    </LearnPageLayout>
  );
}
