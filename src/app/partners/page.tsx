import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/Partners",
  description: "Partner with degen0x to earn commissions, embed pro-grade tools on your channels, and give your audience the best crypto comparison platform — with yo",
  alternates: { canonical: "https://degen0x.com/partners" },
  openGraph: {
    title: "/Partners",
    description: "Partner with degen0x to earn commissions, embed pro-grade tools on your channels, and give your audience the best crypto comparison platform — with yo",
    url: "https://degen0x.com/partners",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/Partners"
        description="Partner with degen0x to earn commissions, embed pro-grade tools on your channels, and give your audience the best crypto comparison platform — with yo"
        url="https://degen0x.com/partners"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/partners" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="partners"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/partners" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
