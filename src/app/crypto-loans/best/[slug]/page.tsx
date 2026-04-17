// Auto-generated dynamic route for crypto-loans/best
export const revalidate = 3600;
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnPageLayout from "@/components/LearnPage";
import { pages } from "@/data/pages/crypto-loans-best";

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return { title: page.metadata.title, description: page.metadata.description };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <LearnPageLayout
      title={page.props.title}
      categoryName={page.props.categoryName}
      categorySlug={page.props.categorySlug}
      readTime={page.props.readTime}
      intro={page.props.intro}
      toc={page.toc}
      faqs={page.faqs}
      relatedArticles={page.relatedArticles}
    >
      <div dangerouslySetInnerHTML={{ __html: page.childrenHtml }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="crypto-loans"
      />    </LearnPageLayout>
  );
}
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/crypto-loans/best/bitcoin-loans" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitcoin Loans</a>
  <a href="/crypto-loans/best/defi" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Defi</a>
  <a href="/crypto-loans/best/flash-loans" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Flash Loans</a>
  <a href="/crypto-loans/best/institutional" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Institutional</a>
  <a href="/crypto-loans/best/low-interest" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Low Interest</a>
  <a href="/crypto-loans/best/margin-lending" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Margin Lending</a>
  <a href="/crypto-loans/best/nft-collateral" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Nft Collateral</a>
  <a href="/crypto-loans/best/no-kyc" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>No Kyc</a>
</nav>