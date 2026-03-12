import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service - ${SITE_NAME}`,
  description: `${SITE_NAME} terms of service. Read our terms and conditions for using the website.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service", href: "/terms" }]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-6">Terms of Service</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: March 2026</p>

      <div className="prose-crypto">
        <p>
          Welcome to {SITE_NAME}. By accessing and using our website, you agree to be bound by these Terms of Service.
        </p>

        <h2>Use of Our Website</h2>
        <p>
          {SITE_NAME} provides cryptocurrency comparison information, reviews, guides, and tools for educational and informational purposes only. Our content does not constitute financial advice, investment advice, trading advice, or any other sort of advice.
        </p>

        <h2>Not Financial Advice</h2>
        <p>
          The information provided on {SITE_NAME} is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
        </p>
        <p>
          Cryptocurrency investments carry significant risk. You should always do your own research and consider seeking advice from a qualified financial advisor before making any investment decisions. Never invest more than you can afford to lose.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          {SITE_NAME} may earn compensation through affiliate links on our website. When you click on links to various products and services and make a purchase or sign up, we may earn a commission. This does not affect our editorial integrity or the accuracy of our reviews.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on {SITE_NAME}, including text, graphics, logos, and software, is the property of {SITE_NAME} and is protected by copyright and other intellectual property laws.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          {SITE_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or any content thereon.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms, please contact us at legal@degen0x.com.
        </p>
      </div>
    </div>
  );
}
