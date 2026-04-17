import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "NFT Profit Calculator",
  description: "Calculate your actual profit or loss from an NFT trade. This calculator accounts for marketplace fees, creator royalties, gas costs, and crypto price ch",
  alternates: { canonical: "https://degen0x.com/nfts/tools/profit-calculator" },
  openGraph: {
    title: "NFT Profit Calculator",
    description: "Calculate your actual profit or loss from an NFT trade. This calculator accounts for marketplace fees, creator royalties, gas costs, and crypto price ch",
    url: "https://degen0x.com/nfts/tools/profit-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="NFT Profit Calculator"
        description="Calculate your actual profit or loss from an NFT trade. This calculator accounts for marketplace fees, creator royalties, gas costs, and crypto price ch"
        url="https://degen0x.com/nfts/tools/profit-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/nfts/tools/profit-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="nfts"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/nfts/tools/profit-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/nfts/tools/profit-calculator" />
    </>
  );
}
