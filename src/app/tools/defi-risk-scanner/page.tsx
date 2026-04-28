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
  title: "Defi Risk Scanner — Free Crypto Tool",
  description: "Defi Risk Scanner — free crypto tool from degen0x.",
  alternates: { canonical: "https://degen0x.com/tools/defi-risk-scanner" },
  openGraph: {
    title: "Defi Risk Scanner",
    description: "Defi Risk Scanner — free crypto tool from degen0x.",
    url: "https://degen0x.com/tools/defi-risk-scanner",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/defi-risk-scanner"
        name="Defi Risk Scanner"
        description="Defi Risk Scanner — free crypto tool from degen0x."
      />
            <ArticleSchema
        headline="Defi Risk Scanner — Free Crypto Tool"
        description="Defi Risk Scanner — free crypto tool from degen0x."
        url="https://degen0x.com/tools/defi-risk-scanner"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/defi-risk-scanner" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/defi-risk-scanner" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/defi-risk-scanner" />
    </>
  );
}
