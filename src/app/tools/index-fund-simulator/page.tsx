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
  title: "Index Fund Simulator — Free Crypto Tool",
  description: "Simulate crypto index fund performance with custom weightings",
  alternates: { canonical: "https://degen0x.com/tools/index-fund-simulator" },
  openGraph: {
    title: "Index Fund Simulator",
    description: "Simulate crypto index fund performance with custom weightings",
    url: "https://degen0x.com/tools/index-fund-simulator",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/index-fund-simulator"
        name="Index Fund Simulator"
        description="Simulate crypto index fund performance with custom weightings"
      />
            <ArticleSchema
        headline="Index Fund Simulator — Free Crypto Tool"
        description="Simulate crypto index fund performance with custom weightings"
        url="https://degen0x.com/tools/index-fund-simulator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/index-fund-simulator" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/index-fund-simulator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/index-fund-simulator" />
    </>
  );
}
