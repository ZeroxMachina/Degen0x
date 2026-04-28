import type { Metadata } from "next";
import ClientPage from "./ClientPage";
import LastUpdated from "@/components/LastUpdated";
import ReadingTime from "@/components/ReadingTime";
import ArticleSchema from "@/components/ArticleSchema";
import AuthoritySources from "@/components/AuthoritySources";

import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: "Manifold: Creator-Owned NFT Contracts",
  description: "+90 XP · 8 min read · Updated March 2026 — manifold on degen0x.",
  alternates: { canonical: "https://degen0x.com/ecosystem/manifold" },
  openGraph: {
    title: "Manifold: Creator-Owned NFT Contracts",
    description: "+90 XP · 8 min read · Updated March 2026",
    url: "https://degen0x.com/ecosystem/manifold",
    type: "article",
  },
};

export const revalidate = 3600;

export default function Page() {
  return (
    <>
      <ArticleSchema
        headline="Manifold: Creator-Owned NFT Contracts"
        description="+90 XP · 8 min read · Updated March 2026"
        url="https://degen0x.com/ecosystem/manifold"
        datePublished="2024-06-01"
        dateModified="2026-04-17"
        section="Guides"
      />
      <AuthoritySources url="/ecosystem/manifold" />
      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2024-06-01"
        updatedDate="2026-04-17"
        section="ecosystem"
      />
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
        <LastUpdated pathKey="/ecosystem/manifold" />
        <ReadingTime />
      </div>
      <ClientPage />
    </>
  );
}
