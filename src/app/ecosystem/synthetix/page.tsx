import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Synthetix: The Derivatives Liquidity Protocol",
  description: "Learn how Synthetix V3 revolutionized derivatives trading by pooling liquidity and enabling developers to build custom perpetual futures, options, and synthetic",
  alternates: { canonical: "https://degen0x.com/ecosystem/synthetix" },
  openGraph: {
    title: "Synthetix: The Derivatives Liquidity Protocol",
    description: "Learn how Synthetix V3 revolutionized derivatives trading by pooling liquidity and enabling developers to build custom perpetual futures, options, and synthetic",
    url: "https://degen0x.com/ecosystem/synthetix",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Synthetix: The Derivatives Liquidity Protocol"
        description="Learn how Synthetix V3 revolutionized derivatives trading by pooling liquidity and enabling developers to build custom perpetual futures, options, and synthetic"
        url="https://degen0x.com/ecosystem/synthetix"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/synthetix" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/synthetix" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
