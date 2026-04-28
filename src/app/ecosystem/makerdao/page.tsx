import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "MakerDAO / Sky: The Decentralized Stablecoin Protocol",
  description: "Learn how MakerDAO created DAI, the world's most battle-tested decentralized stablecoin, and how the Sky upgrade is introducing a new era of yield-bearing stabi",
  alternates: { canonical: "https://degen0x.com/ecosystem/makerdao" },
  openGraph: {
    title: "MakerDAO / Sky: The Decentralized Stablecoin Protocol",
    description: "Learn how MakerDAO created DAI, the world's most battle-tested decentralized stablecoin, and how the Sky upgrade is introducing a new era of yield-bearing stabi",
    url: "https://degen0x.com/ecosystem/makerdao",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="MakerDAO / Sky: The Decentralized Stablecoin Protocol"
        description="Learn how MakerDAO created DAI, the world"
        url="https://degen0x.com/ecosystem/makerdao"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/makerdao" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/makerdao" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
