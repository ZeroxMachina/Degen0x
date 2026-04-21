import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "DeFi Tax Reporting — Hướng Dẫn Thuế Crypto và Công Cụ | Degen0x",
  description: "DeFi Tax Reporting: nghĩa vụ thuế crypto, chuẩn bị tờ khai và công cụ tối ưu thuế. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõ",
  openGraph: {
    type: "article",
    title: "DeFi Tax Reporting — Hướng Dẫn Thuế Crypto và Công Cụ",
    description: "DeFi Tax Reporting: nghĩa vụ thuế crypto, chuẩn bị tờ khai và công cụ tối ưu thuế. Chính sách thuế crypto tại Việt Nam đ",
    url: "https://degen0x.com/vi/taxes/defi-tax-reporting-guide",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "DeFi Tax Reporting — Hướng Dẫn Thuế Crypto và Công Cụ", description: "DeFi Tax Reporting: nghĩa vụ thuế crypto, chuẩn bị tờ khai và công cụ tối ưu thuế. Chính sách thuế crypto tại Việt Nam đ" },
  alternates: {
    canonical: "/vi/taxes/defi-tax-reporting-guide",
    languages: { "en": "/taxes/defi-tax-reporting-guide", "tr": "/tr/taxes/defi-tax-reporting-guide", "vi": "/vi/taxes/defi-tax-reporting-guide", "pt-BR": "/pt-br/taxes/defi-tax-reporting-guide", "x-default": "/taxes/defi-tax-reporting-guide" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Thuế", item: "https://degen0x.com/vi/taxes" },
    { "@type": "ListItem", position: 3, name: "DeFi Tax Reporting — Hướng Dẫn Thuế Crypto và Công Cụ" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "DeFi Tax Reporting — Hướng Dẫn Thuế Crypto và Công Cụ",
  description: "DeFi Tax Reporting: nghĩa vụ thuế crypto, chuẩn bị tờ khai và công cụ tối ưu thuế. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõ",
  url: "https://degen0x.com/vi/taxes/defi-tax-reporting-guide",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Tôi có phải khai thuế crypto không?", "answer": "Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Giao dịch chịu thuế: mua bán có lãi, staking, airdrop, mining và lợi nhuận DeFi." },
  { "question": "Phương pháp tính thuế nào phù hợp?", "answer": "FIFO, LIFO và phương pháp giá bình quân có kết quả thuế khác nhau. FIFO thường được ưu tiên cho giao dịch nhỏ lẻ; giá bình quân có lợi cho mua lớn một lần." },
  { "question": "Nên dùng phần mềm thuế crypto không?", "answer": "Nếu giao dịch trên nhiều sàn và DeFi, phần mềm thuế (Koinly, CoinTracker...) tự động hóa báo cáo rất tiện lợi. Theo dõi thủ công tăng rủi ro sai sót." }
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
              { label: "Thuế", href: "/vi/taxes" },
              { label: "DeFi Tax Reporting" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">DeFi Tax Reporting — Hướng Dẫn Thuế Crypto và Công Cụ</h1>
            <p className="text-lg text-[#8b949e] mb-10">DeFi Tax Reporting: nghĩa vụ thuế crypto, chuẩn bị tờ khai và công cụ tối ưu thuế. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Nghĩa Vụ Thuế Crypto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Nghĩa vụ thuế crypto trong phạm vi DeFi Tax Reporting: Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Các giao dịch chịu thuế: mua bán, thu nhập staking, airdrop, mining và lợi nhuận DeFi.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Phương Pháp Tính Thuế</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các phương pháp tính thuế crypto: FIFO (Vào Trước Ra Trước), LIFO (Vào Sau Ra Trước) và phương pháp giá bình quân. Ưu nhược điểm của mỗi phương pháp khác nhau tùy theo chiến lược đầu tư.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tối Ưu Thuế và Công Cụ</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tối ưu thuế hợp pháp: bù trừ lỗ (tax-loss harvesting), lợi thế nắm giữ dài hạn và chuẩn bị tờ khai cho Bộ Tài chính Việt Nam. Phần mềm thuế crypto tự động hóa báo cáo.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Tôi có phải khai thuế crypto không?", answer: "Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Giao dịch chịu thuế: mua bán có lãi, staking, airdrop, mining và lợi nhuận DeFi." },
                  { question: "Phương pháp tính thuế nào phù hợp?", answer: "FIFO, LIFO và phương pháp giá bình quân có kết quả thuế khác nhau. FIFO thường được ưu tiên cho giao dịch nhỏ lẻ; giá bình quân có lợi cho mua lớn một lần." },
                  { question: "Nên dùng phần mềm thuế crypto không?", answer: "Nếu giao dịch trên nhiều sàn và DeFi, phần mềm thuế (Koinly, CoinTracker...) tự động hóa báo cáo rất tiện lợi. Theo dõi thủ công tăng rủi ro sai sót." }
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
