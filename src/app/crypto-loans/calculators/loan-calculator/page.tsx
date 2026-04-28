import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Loan Calculator",
  description: "Calculate the total cost of a crypto-backed loan including interest charges over time.",
  alternates: { canonical: "https://degen0x.com/crypto-loans/calculators/loan-calculator" },
  openGraph: {
    title: "Crypto Loan Calculator",
    description: "Calculate the total cost of a crypto-backed loan including interest charges over time.",
    url: "https://degen0x.com/crypto-loans/calculators/loan-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Loan Calculator"
        description="Calculate the total cost of a crypto-backed loan including interest charges over time."
        url="https://degen0x.com/crypto-loans/calculators/loan-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/crypto-loans/calculators/loan-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="crypto-loans"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/crypto-loans/calculators/loan-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/crypto-loans/calculators/loan-calculator" />
    </>
  );
}
