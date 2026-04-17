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
  title: "Degen Score — Free Crypto Tool",
  description: "Calculate your degen score based on on-chain activity",
  alternates: { canonical: "https://degen0x.com/tools/degen-score" },
  openGraph: {
    title: "Degen Score",
    description: "Calculate your degen score based on on-chain activity",
    url: "https://degen0x.com/tools/degen-score",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/degen-score"
        name="Degen Score"
        description="Calculate your degen score based on on-chain activity"
      />
            <ArticleSchema
        headline="Degen Score — Free Crypto Tool"
        description="Calculate your degen score based on on-chain activity"
        url="https://degen0x.com/tools/degen-score"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/degen-score" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/degen-score" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/degen-score" />
    </>
  );
}
