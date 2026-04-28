import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "NFT Rarity Checker",
  description: "Calculate the rarity score of any NFT based on its traits. Enter the collection size and each trait&apos;s occurrence count to get a statistical rarity ",
  alternates: { canonical: "https://degen0x.com/nfts/tools/rarity-checker" },
  openGraph: {
    title: "NFT Rarity Checker",
    description: "Calculate the rarity score of any NFT based on its traits. Enter the collection size and each trait&apos;s occurrence count to get a statistical rarity ",
    url: "https://degen0x.com/nfts/tools/rarity-checker",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="NFT Rarity Checker"
        description="Calculate the rarity score of any NFT based on its traits. Enter the collection size and each trait&apos;s occurrence count to get a statistical rarity "
        url="https://degen0x.com/nfts/tools/rarity-checker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/nfts/tools/rarity-checker" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="nfts"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/nfts/tools/rarity-checker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/nfts/tools/rarity-checker" />
    </>
  );
}
