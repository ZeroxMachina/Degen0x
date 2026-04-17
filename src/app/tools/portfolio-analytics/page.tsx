import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Portfolio Analytics — Free Crypto Tool",
  description: "Advanced analytics and risk metrics for your crypto portfolio",
  alternates: { canonical: "https://degen0x.com/tools/portfolio-analytics" },
  openGraph: {
    title: "Portfolio Analytics",
    description: "Advanced analytics and risk metrics for your crypto portfolio",
    url: "https://degen0x.com/tools/portfolio-analytics",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/portfolio-analytics"
        name="Portfolio Analytics"
        description="Advanced analytics and risk metrics for your crypto portfolio"
      />
            <ArticleSchema
        headline="Portfolio Analytics — Free Crypto Tool"
        description="Advanced analytics and risk metrics for your crypto portfolio"
        url="https://degen0x.com/tools/portfolio-analytics"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/portfolio-analytics" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/portfolio-analytics" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
