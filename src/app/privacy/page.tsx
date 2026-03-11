import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy - ${SITE_NAME}`,
  description: `${SITE_NAME} privacy policy. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy", href: "/privacy" }]} />

      <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: March 2026</p>

      <div className="prose-crypto">
        <p>
          At {SITE_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect information about you in a variety of ways including:</p>
        <ul>
          <li><strong>Usage Data:</strong> We automatically collect certain information when you visit our site, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of visits.</li>
          <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to track activity on our website and hold certain information to improve your experience.</li>
          <li><strong>Contact Information:</strong> If you contact us directly, we may receive additional information about you such as your name, email address, and the contents of your message.</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To provide, maintain, and improve our website</li>
          <li>To analyze usage patterns and improve user experience</li>
          <li>To respond to your comments, questions, and requests</li>
          <li>To send you technical notices and support messages</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          We may share your information with third-party service providers that perform services on our behalf, including analytics providers and advertising partners. When you click on affiliate links, you will be directed to third-party websites governed by their own privacy policies.
        </p>

        <h2>Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. Contact us to exercise these rights.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at privacy@cryptodegen.com.
        </p>
      </div>
    </div>
  );
}
