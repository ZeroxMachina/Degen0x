import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Dollar-Cost Averaging (DCA) Calculator",
  description: "See how dollar-cost averaging can grow your crypto portfolio over time. Enter your regular investment amount, choose a frequency and time period, and vi",
  alternates: { canonical: "https://degen0x.com/exchanges/tools/dca-calculator" },
  openGraph: {
    title: "Dollar-Cost Averaging (DCA) Calculator",
    description: "See how dollar-cost averaging can grow your crypto portfolio over time. Enter your regular investment amount, choose a frequency and time period, and vi",
    url: "https://degen0x.com/exchanges/tools/dca-calculator",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Dollar-Cost Averaging (DCA) Calculator"
        description="See how dollar-cost averaging can grow your crypto portfolio over time. Enter your regular investment amount, choose a frequency and time period, and vi"
        url="https://degen0x.com/exchanges/tools/dca-calculator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/exchanges/tools/dca-calculator" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="exchanges"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/exchanges/tools/dca-calculator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/exchanges/tools/dca-calculator" />
    </>
  );
}
