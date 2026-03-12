import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Licensing and IP Rights Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understanding what rights you actually receive when purchasing an NFT is crucial for collectors and commercial users...",
};

export default function NftLicensingRightsPage() {
  return (
    <LearnPageLayout
      title="NFT Licensing and IP Rights Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="Understanding what rights you actually receive when purchasing an NFT is crucial for collectors and commercial users. NFT licensing ranges from no commercial rights to full intellectual property transfer."
      toc={[
        { id: "section-1", title: "section-1", level: 2 },
        { id: "nft-ownership-vs-ip-rights", title: "NFT Ownership vs IP Rights", level: 2 },
        { id: "section-2", title: "section-2", level: 2 },
        { id: "common-license-types", title: "Common License Types", level: 2 },
        { id: "section-3", title: "section-3", level: 2 },
        { id: "commercial-use-rights", title: "Commercial Use Rights", level: 2 },
        { id: "section-4", title: "section-4", level: 2 },
        { id: "protecting-your-rights", title: "Protecting Your Rights", level: 2 }
      ]}
      faqs={[
        { question: "Do I own the copyright when I buy an NFT?", answer: "Usually not. Purchasing an NFT typically transfers ownership of the token but not the underlying intellectual property. The creator retains copyright unless explicitly transferred. The specific rights granted depend on the project's license terms." },
        { question: "Can I use my NFT for commercial purposes?", answer: "It depends on the project's license. Some projects like Bored Ape Yacht Club grant full commercial rights. Others restrict use to personal, non-commercial purposes. Always review the specific licensing terms of your NFT collection." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "How NFTs Work", href: "/nfts/learn/how-nfts-work", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>NFT Ownership vs IP Rights</h2>
        <p>A fundamental misconception in the NFT space is that purchasing an NFT means owning the intellectual property of the underlying artwork. In most cases, buying an NFT is more like buying a print of a painting than buying the painting's copyright. The token represents verifiable ownership of that specific digital instance, but the creator typically retains the copyright and can continue to license or reproduce the work.</p>
        <p>This distinction matters enormously for anyone planning to use NFT artwork commercially. Creating merchandise, using the image in advertising, or building a brand around an NFT's artwork requires specific commercial rights that may or may not be included with the token purchase. The license terms vary dramatically between projects, making it essential to review rights before commercial use.</p>
      </section>

      <section id="section-2">
        <h2>Common License Types</h2>
        <p>The NFT industry uses several common licensing frameworks. Personal use licenses restrict holders to displaying and sharing their NFTs for non-commercial purposes. Limited commercial licenses allow certain commercial uses up to revenue caps. Full commercial licenses, as pioneered by Yuga Labs with Bored Ape Yacht Club, grant holders complete commercial rights including merchandising, branding, and derivative works without restrictions.</p>
        <p>Creative Commons licenses adapted for NFTs provide standardized frameworks with varying levels of permission. Some projects use CC0 (public domain) licensing where all rights are waived and anyone can use the artwork. Others create custom licenses tailored to their specific community and business goals. The trend toward clearer, more permissive licensing reflects maturing industry understanding of IP rights in the Web3 context.</p>
      </section>

      <section id="section-3">
        <h2>Commercial Use Rights</h2>
        <p>Commercial use rights enable holders to monetize their NFT artwork through merchandise, branding, media, and derivative products. Projects with full commercial rights have seen holders launch restaurants, clothing brands, animated series, and beverage lines built around their NFT characters. This commercial utility adds significant value to NFTs beyond speculation and collecting.</p>
        <p>When evaluating commercial rights, consider revenue caps, geographic restrictions, medium restrictions, and transferability. Some licenses limit commercial revenue to specific amounts. Others restrict certain media types or require attribution. Understanding these nuances prevents costly legal issues. When rights transfer with the NFT on resale, the new owner inherits the licensing terms, creating continuity for commercial ventures.</p>
      </section>

      <section id="section-4">
        <h2>Protecting Your Rights</h2>
        <p>Protect your NFT licensing rights by maintaining clear records of purchase, downloading and preserving license agreements, and understanding the specific terms before engaging in commercial activities. Monitor for unauthorized use of your licensed artwork and be prepared to enforce your rights through the project's dispute resolution mechanisms or legal channels if necessary.</p>
        <p>For creators, establish clear licensing terms before minting and communicate them prominently. Include license references in metadata or link to detailed terms from your project website. Consider how licensing terms affect secondary market value and holder behavior. Projects that thoughtfully balance creator rights with holder permissions create the most sustainable and valuable licensing frameworks for all participants.</p>
      </section>
    </LearnPageLayout>
  );
}
