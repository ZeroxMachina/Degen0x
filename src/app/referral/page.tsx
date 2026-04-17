import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Refer Friends. Earn XP.",
  description: "Share degen0x and earn 200 XP for every friend who joins. Help onboard the next billion crypto users.",
  alternates: { canonical: "https://degen0x.com/referral" },
  openGraph: {
    title: "Refer Friends. Earn XP.",
    description: "Share degen0x and earn 200 XP for every friend who joins. Help onboard the next billion crypto users.",
    url: "https://degen0x.com/referral",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Refer Friends. Earn XP."
        description="Share degen0x and earn 200 XP for every friend who joins. Help onboard the next billion crypto users."
        url="https://degen0x.com/referral"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/referral" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="referral"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/referral" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/referral" />
    </>
  );
}
