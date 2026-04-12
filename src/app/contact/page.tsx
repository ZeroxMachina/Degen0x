import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us - ${SITE_NAME}`,
  description: `Get in touch with the ${SITE_NAME} team. Questions, feedback, partnership inquiries, and press requests.`,
  alternates: { canonical: "/contact" }};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="contact"
      />      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-6">Contact Us</h1>

      <div className="prose-crypto mb-12">
        <p>
          We would love to hear from you. Whether you have questions about our reviews, want to report an error, or are interested in partnering with us, our team is here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">General Inquiries</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Questions, feedback, or suggestions</p>
          <p className="text-sm text-[var(--color-primary)]">hello@degen0x.com</p>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Partnership & Advertising</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Business partnerships and advertising opportunities</p>
          <p className="text-sm text-[var(--color-primary)]">partners@degen0x.com</p>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Press & Media</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Press inquiries and media requests</p>
          <p className="text-sm text-[var(--color-primary)]">press@degen0x.com</p>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">Content Corrections</h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-3">Report errors or outdated information</p>
          <p className="text-sm text-[var(--color-primary)]">corrections@degen0x.com</p>
        </div>
      </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Contact", "description": "Crypto content on degen0x", "url": "https://degen0x.com/contact"}) }} />
          <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            All Learning Guides
          </Link>
          <Link href="/tools" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Crypto Tools
          </Link>
          <Link href="/compare" style={
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }>
            Compare Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
