import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";
import RelatedContent from "@/components/RelatedContent";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "NFT Rarity Checker — Free Crypto Tool",
  description: "Check rarity scores and trait rankings for NFT collections",
  alternates: { canonical: "https://degen0x.com/tools/nft-rarity-checker" },
  openGraph: {
    title: "NFT Rarity Checker",
    description: "Check rarity scores and trait rankings for NFT collections",
    url: "https://degen0x.com/tools/nft-rarity-checker",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/nft-rarity-checker"
        name="NFT Rarity Checker"
        description="Check rarity scores and trait rankings for NFT collections"
      />
            <ArticleSchema
        headline="NFT Rarity Checker — Free Crypto Tool"
        description="Check rarity scores and trait rankings for NFT collections"
        url="https://degen0x.com/tools/nft-rarity-checker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/nft-rarity-checker" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/nft-rarity-checker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/nft-rarity-checker" />
    </>
  );
}
