import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import RelatedContent from "@/components/RelatedContent";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import MethodologyBlock from "@/components/MethodologyBlock";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Crypto Wallet Comparisons",
  description: "Find the perfect wallet for your crypto needs. Compare features, security, pricing, and more.",
  alternates: { canonical: "https://degen0x.com/compare/wallets" },
  openGraph: {
    title: "Crypto Wallet Comparisons",
    description: "Find the perfect wallet for your crypto needs. Compare features, security, pricing, and more.",
    url: "https://degen0x.com/compare/wallets",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Crypto Wallet Comparisons"
        description="Find the perfect wallet for your crypto needs. Compare features, security, pricing, and more."
        url="https://degen0x.com/compare/wallets"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Compare"
      />
      <AuthoritySources url="/compare/wallets" />
      <AuthorAttribution
        author="degen0x Research"
        role="Editorial Team"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="compare"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/compare/wallets" />
        <ReadingTime />
      </div>
            <MethodologyBlock variant="compare" lastReviewed="2026-04-17" />
      <ClientPage />
      <RelatedContent pathname="/compare/wallets" />
    </>
  );
}
