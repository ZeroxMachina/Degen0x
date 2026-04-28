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
  title: "Crypto Robo Advisor — Free Crypto Tool",
  description: "Get AI-powered portfolio allocation recommendations based on your risk profile",
  alternates: { canonical: "https://degen0x.com/tools/robo-advisor" },
  openGraph: {
    title: "Crypto Robo Advisor",
    description: "Get AI-powered portfolio allocation recommendations based on your risk profile",
    url: "https://degen0x.com/tools/robo-advisor",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/robo-advisor"
        name="Crypto Robo Advisor"
        description="Get AI-powered portfolio allocation recommendations based on your risk profile"
      />
            <ArticleSchema
        headline="Crypto Robo Advisor — Free Crypto Tool"
        description="Get AI-powered portfolio allocation recommendations based on your risk profile"
        url="https://degen0x.com/tools/robo-advisor"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/robo-advisor" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/robo-advisor" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/robo-advisor" />
    </>
  );
}
