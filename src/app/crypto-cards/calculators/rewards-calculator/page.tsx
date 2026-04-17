import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Card Rewards Calculator",
  description: "Estimate how much you could earn in crypto rewards based on your monthly spending, cashback rate, and preferred cryptocurrency. Adjust the inputs below ",
  alternates: { canonical: "https://degen0x.com/crypto-cards/calculators/rewards-calculator" },
  openGraph: {
    title: "Crypto Card Rewards Calculator",
    description: "Estimate how much you could earn in crypto rewards based on your monthly spending, cashback rate, and preferred cryptocurrency. Adjust the inputs below ",
    url: "https://degen0x.com/crypto-cards/calculators/rewards-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Card Rewards Calculator"
        description="Estimate how much you could earn in crypto rewards based on your monthly spending, cashback rate, and preferred cryptocurrency. Adjust the inputs below "
        url="https://degen0x.com/crypto-cards/calculators/rewards-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/crypto-cards/calculators/rewards-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="crypto-cards"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-cards/calculators/rewards-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/crypto-cards/calculators/rewards-calculator" />
    </>
  );
}
