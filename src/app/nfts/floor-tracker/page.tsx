import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "NFT Floor Price Tracker — Nfts (nfts / floor-tracker)",
  description: "Track real-time floor prices across the top NFT collections. Monitor price changes, trading volume, and listing percentages across Ethereum and Sola",
  alternates: { canonical: "https://degen0x.com/nfts/floor-tracker" },
  openGraph: {
    title: "NFT Floor Price Tracker",
    description: "Track real-time floor prices across the top NFT collections. Monitor price changes, trading volume, and listing percentages across Ethereum and Sola",
    url: "https://degen0x.com/nfts/floor-tracker",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="NFT Floor Price Tracker"
        description="Track real-time floor prices across the top NFT collections. Monitor price changes, trading volume, and listing percentages across Ethereum and Sola"
        url="https://degen0x.com/nfts/floor-tracker"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/nfts/floor-tracker" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="nfts"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/nfts/floor-tracker" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/nfts/floor-tracker" />
    </>
  );
}
