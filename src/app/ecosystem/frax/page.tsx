import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Frax Finance",
  description: "The full-stack DeFi protocol: pioneered fractional stablecoins, liquid staking, and now operates its own L2.",
  alternates: { canonical: "https://degen0x.com/ecosystem/frax" },
  openGraph: {
    title: "Frax Finance",
    description: "The full-stack DeFi protocol: pioneered fractional stablecoins, liquid staking, and now operates its own L2.",
    url: "https://degen0x.com/ecosystem/frax",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Frax Finance"
        description="The full-stack DeFi protocol: pioneered fractional stablecoins, liquid staking, and now operates its own L2."
        url="https://degen0x.com/ecosystem/frax"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/frax" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/frax" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/ecosystem/frax" />
    </>
  );
}
