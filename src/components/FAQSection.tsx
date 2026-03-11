import { FAQ } from "@/lib/types";

interface Props {
  faqs: FAQ[];
  title?: string;
}

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="glass p-6">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{faq.question}</h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
