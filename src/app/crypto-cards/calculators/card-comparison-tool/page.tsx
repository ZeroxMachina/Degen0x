import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Card Comparison Tool",
  description: "Select two or three crypto cards to compare side by side. See how they stack up across cashback rates, fees, card type, staking requirements, availabili",
  alternates: { canonical: "https://degen0x.com/crypto-cards/calculators/card-comparison-tool" },
  openGraph: {
    title: "Crypto Card Comparison Tool",
    description: "Select two or three crypto cards to compare side by side. See how they stack up across cashback rates, fees, card type, staking requirements, availabili",
    url: "https://degen0x.com/crypto-cards/calculators/card-comparison-tool",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Card Comparison Tool"
        description="Select two or three crypto cards to compare side by side. See how they stack up across cashback rates, fees, card type, staking requirements, availabili"
        url="https://degen0x.com/crypto-cards/calculators/card-comparison-tool"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/crypto-cards/calculators/card-comparison-tool" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="crypto-cards"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-cards/calculators/card-comparison-tool" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/crypto-cards/calculators/card-comparison-tool" />
    </>
  );
}
