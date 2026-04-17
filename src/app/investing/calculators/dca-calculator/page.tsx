import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "DCA Calculator",
  description: "Plan your dollar-cost averaging strategy. See how regular investments grow over time with this simplified DCA calculator.",
  alternates: { canonical: "https://degen0x.com/investing/calculators/dca-calculator" },
  openGraph: {
    title: "DCA Calculator",
    description: "Plan your dollar-cost averaging strategy. See how regular investments grow over time with this simplified DCA calculator.",
    url: "https://degen0x.com/investing/calculators/dca-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="DCA Calculator"
        description="Plan your dollar-cost averaging strategy. See how regular investments grow over time with this simplified DCA calculator."
        url="https://degen0x.com/investing/calculators/dca-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/investing/calculators/dca-calculator" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/calculators/dca-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/calculators/dca-calculator" />
    </>
  );
}
