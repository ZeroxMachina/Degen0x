import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";
import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "On-Chain Analytics — Free Crypto Tool",
  description: "Deep dive into blockchain data with on-chain metrics and analysis",
  alternates: { canonical: "https://degen0x.com/tools/onchain-analytics" },
  openGraph: {
    title: "On-Chain Analytics",
    description: "Deep dive into blockchain data with on-chain metrics and analysis",
    url: "https://degen0x.com/tools/onchain-analytics",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/onchain-analytics"
        name="On-Chain Analytics"
        description="Deep dive into blockchain data with on-chain metrics and analysis"
      />
            <ArticleSchema
        headline="On-Chain Analytics — Free Crypto Tool"
        description="Deep dive into blockchain data with on-chain metrics and analysis"
        url="https://degen0x.com/tools/onchain-analytics"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/onchain-analytics" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/onchain-analytics" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
