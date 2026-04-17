import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/Investing/Best/Staking",
  description: "Compare 15+ cryptocurrency staking platforms across centralized exchanges, liquid staking protocols, and innovative restaking services. Find the best platform f",
  alternates: { canonical: "https://degen0x.com/investing/best/staking" },
  openGraph: {
    title: "/Investing/Best/Staking",
    description: "Compare 15+ cryptocurrency staking platforms across centralized exchanges, liquid staking protocols, and innovative restaking services. Find the best platform f",
    url: "https://degen0x.com/investing/best/staking",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/Investing/Best/Staking"
        description="Compare 15+ cryptocurrency staking platforms across centralized exchanges, liquid staking protocols, and innovative restaking services. Find the best platform f"
        url="https://degen0x.com/investing/best/staking"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/investing/best/staking" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="investing"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/investing/best/staking" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/investing/best/staking" />
    </>
  );
}
