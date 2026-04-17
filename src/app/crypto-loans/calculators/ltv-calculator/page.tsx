import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "LTV Calculator",
  description: "Calculate your current Loan-to-Value ratio and see how much buffer you have before liquidation.",
  alternates: { canonical: "https://degen0x.com/crypto-loans/calculators/ltv-calculator" },
  openGraph: {
    title: "LTV Calculator",
    description: "Calculate your current Loan-to-Value ratio and see how much buffer you have before liquidation.",
    url: "https://degen0x.com/crypto-loans/calculators/ltv-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="LTV Calculator"
        description="Calculate your current Loan-to-Value ratio and see how much buffer you have before liquidation."
        url="https://degen0x.com/crypto-loans/calculators/ltv-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/crypto-loans/calculators/ltv-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="crypto-loans"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-loans/calculators/ltv-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/crypto-loans/calculators/ltv-calculator" />
    </>
  );
}
