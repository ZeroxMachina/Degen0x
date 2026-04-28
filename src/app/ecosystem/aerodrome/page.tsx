import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Aerodrome: Base Chain's Liquidity Hub",
  description: "ve(3,3) DEX powering Base ecosystem · +130 XP · 9 min read · Updated March 2026",
  alternates: { canonical: "https://degen0x.com/ecosystem/aerodrome" },
  openGraph: {
    title: "Aerodrome: Base Chain's Liquidity Hub",
    description: "ve(3,3) DEX powering Base ecosystem · +130 XP · 9 min read · Updated March 2026",
    url: "https://degen0x.com/ecosystem/aerodrome",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Aerodrome: Base Chain"
        description="ve(3,3) DEX powering Base ecosystem · +130 XP · 9 min read · Updated March 2026"
        url="https://degen0x.com/ecosystem/aerodrome"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/aerodrome" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/aerodrome" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
