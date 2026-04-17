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
  title: "Portfolio Allocator — Free Crypto Tool",
  description: "Build and optimize your crypto portfolio allocation with preset strategies and custom weighting",
  alternates: { canonical: "https://degen0x.com/tools/portfolio-allocator" },
  openGraph: {
    title: "Portfolio Allocator",
    description: "Build and optimize your crypto portfolio allocation with preset strategies and custom weighting",
    url: "https://degen0x.com/tools/portfolio-allocator",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/portfolio-allocator"
        name="Portfolio Allocator"
        description="Build and optimize your crypto portfolio allocation with preset strategies and custom weighting"
      />
            <ArticleSchema
        headline="Portfolio Allocator — Free Crypto Tool"
        description="Build and optimize your crypto portfolio allocation with preset strategies and custom weighting"
        url="https://degen0x.com/tools/portfolio-allocator"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/portfolio-allocator" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/portfolio-allocator" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/portfolio-allocator" />
    </>
  );
}
