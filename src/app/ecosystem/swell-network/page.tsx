import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Swell Network",
  description: "Liquid staking and restaking on Ethereum through swETH and rswETH.",
  alternates: { canonical: "https://degen0x.com/ecosystem/swell-network" },
  openGraph: {
    title: "Swell Network",
    description: "Liquid staking and restaking on Ethereum through swETH and rswETH.",
    url: "https://degen0x.com/ecosystem/swell-network",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Swell Network"
        description="Liquid staking and restaking on Ethereum through swETH and rswETH."
        url="https://degen0x.com/ecosystem/swell-network"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/swell-network" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/swell-network" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/ecosystem/swell-network" />
    </>
  );
}
