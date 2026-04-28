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
  title: "DeFi Position Manager — Free Crypto Tool",
  description: "Manage and track your decentralized finance positions across protocols",
  alternates: { canonical: "https://degen0x.com/tools/defi-position-manager" },
  openGraph: {
    title: "DeFi Position Manager",
    description: "Manage and track your decentralized finance positions across protocols",
    url: "https://degen0x.com/tools/defi-position-manager",
    type: "website",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/defi-position-manager"
        name="DeFi Position Manager"
        description="Manage and track your decentralized finance positions across protocols"
      />
            <ArticleSchema
        headline="DeFi Position Manager — Free Crypto Tool"
        description="Manage and track your decentralized finance positions across protocols"
        url="https://degen0x.com/tools/defi-position-manager"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Tools"
      />
      <AuthoritySources url="/tools/defi-position-manager" />
      <AuthorAttribution
        author="degen0x"
        role="Product"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="tools"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/tools/defi-position-manager" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/tools/defi-position-manager" />
    </>
  );
}
