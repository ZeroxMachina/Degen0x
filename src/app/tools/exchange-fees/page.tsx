import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";
import RelatedContent from "@/components/RelatedContent";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Exchange Fee Comparison — Free Crypto Tool",
  description: "Compare trading fees across all major cryptocurrency exchanges",
  alternates: { canonical: "https://degen0x.com/tools/exchange-fees" },
  openGraph: {
    title: "Exchange Fee Comparison",
    description: "Compare trading fees across all major cryptocurrency exchanges",
    url: "https://degen0x.com/tools/exchange-fees",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/exchange-fees"
        name="Exchange Fee Comparison"
        description="Compare trading fees across all major cryptocurrency exchanges"
      />
            <ArticleSchema
        headline="Exchange Fee Comparison — Free Crypto Tool"
        description="Compare trading fees across all major cryptocurrency exchanges"
        url="https://degen0x.com/tools/exchange-fees"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/exchange-fees" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/exchange-fees" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/exchange-fees" />
    </>
  );
}
