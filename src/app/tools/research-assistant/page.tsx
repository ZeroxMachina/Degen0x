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
  title: "Research Assistant — Free Crypto Tool",
  description: "AI-powered cryptocurrency research and analysis tool",
  alternates: { canonical: "https://degen0x.com/tools/research-assistant" },
  openGraph: {
    title: "Research Assistant",
    description: "AI-powered cryptocurrency research and analysis tool",
    url: "https://degen0x.com/tools/research-assistant",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/research-assistant"
        name="Research Assistant"
        description="AI-powered cryptocurrency research and analysis tool"
      />
            <ArticleSchema
        headline="Research Assistant — Free Crypto Tool"
        description="AI-powered cryptocurrency research and analysis tool"
        url="https://degen0x.com/tools/research-assistant"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/research-assistant" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/research-assistant" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/research-assistant" />
    </>
  );
}
