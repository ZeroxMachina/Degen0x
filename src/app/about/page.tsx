import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About ${SITE_NAME} - Our Mission & Editorial Standards`,
  description: `Learn about ${SITE_NAME}, the leading crypto comparison platform. Our mission, editorial standards, and commitment to helping you navigate the crypto world.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-6">About {SITE_NAME}</h1>

      <div className="prose-crypto">
        <p>
          {SITE_NAME} is the most trusted crypto comparison and education platform. We help millions of people make smarter decisions about cryptocurrency exchanges, wallets, DeFi protocols, taxes, and more.
        </p>

        <h2 id="mission">Our Mission</h2>
        <p>
          The crypto industry is filled with complexity, jargon, and risk. Our mission is to cut through the noise and provide clear, unbiased, data-driven guidance that empowers anyone — from complete beginners to experienced traders — to navigate the crypto world with confidence.
        </p>
        <p>
          We believe that access to high-quality financial information should not be limited to industry insiders. Every person deserves transparent, honest guidance when making decisions about their digital assets.
        </p>

        <h2 id="editorial">Editorial Standards</h2>
        <p>
          Our editorial team independently researches and evaluates every product we feature. We follow strict editorial guidelines:
        </p>
        <ul>
          <li><strong>Independence:</strong> Our ratings and recommendations are never influenced by advertiser relationships. Our editorial team operates independently from our business team.</li>
          <li><strong>Transparency:</strong> We clearly disclose when we receive compensation from partners. Every page with affiliate links includes our advertiser disclosure.</li>
          <li><strong>Rigor:</strong> We use standardized rating methodologies with weighted criteria specific to each product category. Our methodologies are published and available for review.</li>
          <li><strong>Accuracy:</strong> We regularly update our content to reflect the latest fees, features, and market conditions. Every review includes a &ldquo;last updated&rdquo; date.</li>
          <li><strong>Expertise:</strong> Our content is written and reviewed by crypto industry professionals with real-world experience in trading, DeFi, blockchain development, and financial analysis.</li>
        </ul>

        <h2 id="how-we-make-money">How We Make Money</h2>
        <p>
          {SITE_NAME} is free to use. We earn revenue when you click on certain links or sign up for products through our site. This compensation helps us maintain the site and keep our content free.
        </p>
        <p>
          Importantly, our compensation never influences our editorial ratings or the order in which products appear in our reviews. We evaluate products based on their merits alone.
        </p>

        <h2 id="team">Our Team</h2>
        <p>
          Our team includes crypto traders, DeFi researchers, blockchain developers, financial analysts, and content creators who are passionate about making crypto accessible to everyone. Together, we bring decades of combined experience in both traditional finance and the crypto industry.
        </p>

        <h2 id="contact">Get in Touch</h2>
        <p>
          Have questions, feedback, or partnership inquiries? We would love to hear from you. Visit our <a href="/contact">contact page</a> to get in touch with our team.
        </p>
        <p>
          &copy; {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
