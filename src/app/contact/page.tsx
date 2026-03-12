import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us - ${SITE_NAME}`,
  description: `Get in touch with the ${SITE_NAME} team. Questions, feedback, partnership inquiries, and press requests.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />

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
    </div>
  );
}
