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
  title: "Correlation Matrix — Free Crypto Tool",
  description: "Visualize price correlations between cryptocurrencies",
  alternates: { canonical: "https://degen0x.com/tools/correlation-matrix" },
  openGraph: {
    title: "Correlation Matrix",
    description: "Visualize price correlations between cryptocurrencies",
    url: "https://degen0x.com/tools/correlation-matrix",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/correlation-matrix"
        name="Correlation Matrix"
        description="Visualize price correlations between cryptocurrencies"
      />
            <ArticleSchema
        headline="Correlation Matrix — Free Crypto Tool"
        description="Visualize price correlations between cryptocurrencies"
        url="https://degen0x.com/tools/correlation-matrix"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/correlation-matrix" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/correlation-matrix" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/correlation-matrix" />
    </>
  );
}
