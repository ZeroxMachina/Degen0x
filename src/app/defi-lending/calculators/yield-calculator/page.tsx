import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "DeFi Yield Calculator",
  description: "Calculate your expected returns from DeFi lending and yield farming. Enter your deposit amount, expected APR, and compounding frequency to see projected earning",
  alternates: { canonical: "https://degen0x.com/defi-lending/calculators/yield-calculator" },
  openGraph: {
    title: "DeFi Yield Calculator",
    description: "Calculate your expected returns from DeFi lending and yield farming. Enter your deposit amount, expected APR, and compounding frequency to see projected earning",
    url: "https://degen0x.com/defi-lending/calculators/yield-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="DeFi Yield Calculator"
        description="Calculate your expected returns from DeFi lending and yield farming. Enter your deposit amount, expected APR, and compounding frequency to see projected earning"
        url="https://degen0x.com/defi-lending/calculators/yield-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/defi-lending/calculators/yield-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="defi-lending"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/defi-lending/calculators/yield-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/defi-lending/calculators/yield-calculator" />
    </>
  );
}
