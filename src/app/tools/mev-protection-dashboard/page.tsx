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
  title: "MEV Protection Dashboard — Free Crypto Tool",
  description: "Monitor and protect your transactions from MEV extraction and sandwich attacks",
  alternates: { canonical: "https://degen0x.com/tools/mev-protection-dashboard" },
  openGraph: {
    title: "MEV Protection Dashboard",
    description: "Monitor and protect your transactions from MEV extraction and sandwich attacks",
    url: "https://degen0x.com/tools/mev-protection-dashboard",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/mev-protection-dashboard"
        name="MEV Protection Dashboard"
        description="Monitor and protect your transactions from MEV extraction and sandwich attacks"
      />
            <ArticleSchema
        headline="MEV Protection Dashboard — Free Crypto Tool"
        description="Monitor and protect your transactions from MEV extraction and sandwich attacks"
        url="https://degen0x.com/tools/mev-protection-dashboard"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/mev-protection-dashboard" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/mev-protection-dashboard" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/mev-protection-dashboard" />
    </>
  );
}
