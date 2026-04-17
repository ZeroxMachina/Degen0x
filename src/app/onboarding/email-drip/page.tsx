import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "/Onboarding/Email Drip",
  description: "Learn about email drip on degen0x — research, guides, and live data.",
  alternates: { canonical: "https://degen0x.com/onboarding/email-drip" },
  openGraph: {
    title: "/Onboarding/Email Drip",
    description: "Learn about email drip on degen0x — research, guides, and live data.",
    url: "https://degen0x.com/onboarding/email-drip",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="/Onboarding/Email Drip"
        description="Learn about email drip on degen0x — research, guides, and live data."
        url="https://degen0x.com/onboarding/email-drip"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/onboarding/email-drip" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="onboarding"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/onboarding/email-drip" />
        <ReadingTime />
      </div>
      <ClientPage />
      <RelatedContent pathname="/onboarding/email-drip" />
    </>
  );
}
