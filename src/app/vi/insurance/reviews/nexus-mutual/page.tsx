import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Nexus Mutual — Hướng Dẫn Bảo Hiểm DeFi 2026 | Degen0x",
  description: "Nexus Mutual: giao thức bảo hiểm DeFi, so sánh phạm vi bảo hiểm và đánh giá rủi ro hợp đồng thông minh.",
  openGraph: {
    type: "article",
    title: "Nexus Mutual — Hướng Dẫn Bảo Hiểm DeFi 2026",
    description: "Nexus Mutual: giao thức bảo hiểm DeFi, so sánh phạm vi bảo hiểm và đánh giá rủi ro hợp đồng thông minh.",
    url: "https://degen0x.com/vi/insurance/reviews/nexus-mutual",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Nexus Mutual — Hướng Dẫn Bảo Hiểm DeFi 2026", description: "Nexus Mutual: giao thức bảo hiểm DeFi, so sánh phạm vi bảo hiểm và đánh giá rủi ro hợp đồng thông minh." },
  alternates: {
    canonical: "/vi/insurance/reviews/nexus-mutual",
    languages: { "en": "/insurance/reviews/nexus-mutual", "tr": "/tr/insurance/reviews/nexus-mutual", "vi": "/vi/insurance/reviews/nexus-mutual", "pt-BR": "/pt-br/insurance/reviews/nexus-mutual", "x-default": "/insurance/reviews/nexus-mutual" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Bảo Hiểm", item: "https://degen0x.com/vi/insurance" },
    { "@type": "ListItem", position: 3, name: "Nexus Mutual — Hướng Dẫn Bảo Hiểm DeFi 2026" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Nexus Mutual — Hướng Dẫn Bảo Hiểm DeFi 2026",
  description: "Nexus Mutual: giao thức bảo hiểm DeFi, so sánh phạm vi bảo hiểm và đánh giá rủi ro hợp đồng thông minh.",
  url: "https://degen0x.com/vi/insurance/reviews/nexus-mutual",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Bảo hiểm DeFi để làm gì?", "answer": "Bảo hiểm DeFi bảo vệ chống hack hợp đồng thông minh, sự cố giao thức và de-peg stablecoin. Bạn trả phí bảo hiểm để mua bảo vệ cho rủi ro cụ thể." },
  { "question": "Có thể bảo hiểm những rủi ro nào?", "answer": "Loại bảo hiểm: exploit hợp đồng thông minh, lỗi oracle, hack bridge, de-peg stablecoin và đóng cửa giao thức. Mỗi loại có phí và điều kiện khác nhau." },
  { "question": "Phí bảo hiểm DeFi bao nhiêu?", "answer": "Phí thường 2-10%/năm, tùy thuộc số tiền bảo hiểm, thời hạn và điểm rủi ro giao thức. Giao thức TVL cao, nhiều audit thường có phí thấp hơn." }
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={combinedSchema} />
      <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb items={[
              { label: "Bảo Hiểm", href: "/vi/insurance" },
              { label: "Nexus Mutual" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Nexus Mutual — Hướng Dẫn Bảo Hiểm DeFi 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Nexus Mutual: giao thức bảo hiểm DeFi, so sánh phạm vi bảo hiểm và đánh giá rủi ro hợp đồng thông minh.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Bảo Hiểm DeFi Là Gì?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hướng dẫn bảo hiểm DeFi về Nexus Mutual: giao thức bảo hiểm phi tập trung bảo vệ chống lại exploit hợp đồng thông minh, hack và sự cố giao thức.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Loại Bảo Hiểm và So Sánh</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các loại bảo hiểm DeFi: rủi ro hợp đồng thông minh, rủi ro de-peg stablecoin, bảo vệ hack bridge và bảo hiểm đóng cửa giao thức.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tính Phí Bảo Hiểm</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các yếu tố ảnh hưởng phí bảo hiểm DeFi: số tiền bảo hiểm, thời hạn, điểm rủi ro giao thức và lịch sử claim. Phân tích chi phí-lợi ích để đưa ra quyết định đúng.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Bảo hiểm DeFi để làm gì?", answer: "Bảo hiểm DeFi bảo vệ chống hack hợp đồng thông minh, sự cố giao thức và de-peg stablecoin. Bạn trả phí bảo hiểm để mua bảo vệ cho rủi ro cụ thể." },
                  { question: "Có thể bảo hiểm những rủi ro nào?", answer: "Loại bảo hiểm: exploit hợp đồng thông minh, lỗi oracle, hack bridge, de-peg stablecoin và đóng cửa giao thức. Mỗi loại có phí và điều kiện khác nhau." },
                  { question: "Phí bảo hiểm DeFi bao nhiêu?", answer: "Phí thường 2-10%/năm, tùy thuộc số tiền bảo hiểm, thời hạn và điểm rủi ro giao thức. Giao thức TVL cao, nhiều audit thường có phí thấp hơn." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-[#161b22] border border-[#30363d] rounded-lg">
                    <summary className="cursor-pointer px-5 py-4 text-white font-medium list-none flex justify-between items-center min-h-[44px]">
                      {faq.question}
                      <span className="text-[#8b949e] ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="px-5 pb-4 text-[#c9d1d9] leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Nội Dung Liên Quan</h2>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li><a className="hover:underline" href="/vi/learn">Học</a></li>
                <li><a className="hover:underline" href="/vi/tools">Công Cụ</a></li>
                <li><a className="hover:underline" href="/vi/exchanges/best">Sàn Giao Dịch</a></li>
              </ul>
            </section>
            <div style={{ background: "#1a1625", border: "1px solid #2d2254", borderRadius: 8, padding: "16px 20px", marginTop: 40, marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: "#8b949e", lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "#a78bfa" }}>Tuyên bố miễn trừ:</strong> Hướng dẫn này chỉ mang tính chất tham khảo và không phải là lời khuyên tài chính. Tiền điện tử tiềm ẩn rủi ro đáng kể — hãy tự nghiên cứu trước khi đưa ra bất kỳ quyết định nào.
              </p>
            </div>
          </article>
          <BackToTop />
        </div>
      </main>
    </>
  );
}
