import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Social Metrics — Free Crypto Tool",
  description: "Track crypto social media sentiment and engagement metrics",
  alternates: { canonical: "https://degen0x.com/tools/social-metrics" },
  openGraph: {
    title: "Social Metrics",
    description: "Track crypto social media sentiment and engagement metrics",
    url: "https://degen0x.com/tools/social-metrics",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/social-metrics"
        name="Social Metrics"
        description="Track crypto social media sentiment and engagement metrics"
      />
            <ArticleSchema
        headline="Social Metrics — Free Crypto Tool"
        description="Track crypto social media sentiment and engagement metrics"
        url="https://degen0x.com/tools/social-metrics"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/social-metrics" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/social-metrics" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
