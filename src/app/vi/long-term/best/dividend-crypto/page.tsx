import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Dividend & Yield Earning Crypto — Chiến Lược Crypto Dài Hạn | Degen0x",
  description: "Dividend & Yield Earning Crypto: chiến lược đầu tư crypto dài hạn, đa dạng hóa danh mục và phương pháp hodl.",
  openGraph: {
    type: "article",
    title: "Dividend & Yield Earning Crypto — Chiến Lược Crypto Dài Hạn",
    description: "Dividend & Yield Earning Crypto: chiến lược đầu tư crypto dài hạn, đa dạng hóa danh mục và phương pháp hodl.",
    url: "https://degen0x.com/vi/long-term/best/dividend-crypto",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Dividend & Yield Earning Crypto — Chiến Lược Crypto Dài Hạn", description: "Dividend & Yield Earning Crypto: chiến lược đầu tư crypto dài hạn, đa dạng hóa danh mục và phương pháp hodl." },
  alternates: {
    canonical: "/vi/long-term/best/dividend-crypto",
    languages: { "en": "/long-term/best/dividend-crypto", "tr": "/tr/long-term/best/dividend-crypto", "vi": "/vi/long-term/best/dividend-crypto", "pt-BR": "/pt-br/long-term/best/dividend-crypto", "x-default": "/long-term/best/dividend-crypto" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Dài Hạn", item: "https://degen0x.com/vi/long-term" },
    { "@type": "ListItem", position: 3, name: "Dividend & Yield Earning Crypto — Chiến Lược Crypto Dài Hạn" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Dividend & Yield Earning Crypto — Chiến Lược Crypto Dài Hạn",
  description: "Dividend & Yield Earning Crypto: chiến lược đầu tư crypto dài hạn, đa dạng hóa danh mục và phương pháp hodl.",
  url: "https://degen0x.com/vi/long-term/best/dividend-crypto",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Crypto có phù hợp đầu tư dài hạn không?", "answer": "Bitcoin và Ethereum lịch sử mang lại lợi nhuận dương trong chu kỳ 4 năm. Nhưng quá khứ không đảm bảo tương lai. Đầu tư dài hạn đòi hỏi kiên nhẫn và kỷ luật trước biến động." },
  { "question": "Nên tái cân bằng danh mục bao lâu một lần?", "answer": "Khuyến nghị mỗi quý hoặc khi chệch 5-10% so với mục tiêu. Tái cân bằng quá thường xuyên tăng chi phí giao dịch và thuế." },
  { "question": "Crypto có nên nằm trong kế hoạch hưu trí?", "answer": "Crypto có thể chiếm 5-15% danh mục hưu trí. Hồ sơ rủi ro cao-lợi nhuận cao; điều chỉnh tỷ trọng theo tuổi và khẩu vị rủi ro." }
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
              { label: "Dài Hạn", href: "/vi/long-term" },
              { label: "Dividend & Yield Earning Crypto" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Dividend & Yield Earning Crypto — Chiến Lược Crypto Dài Hạn</h1>
            <p className="text-lg text-[#8b949e] mb-10">Dividend & Yield Earning Crypto: chiến lược đầu tư crypto dài hạn, đa dạng hóa danh mục và phương pháp hodl.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Chiến Lược Đầu Tư Dài Hạn</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Chiến lược đầu tư crypto dài hạn cho Dividend & Yield Earning Crypto: phương pháp hodl, DCA (mua định kỳ), value investing và phân tích vĩ mô.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cấu Trúc Danh Mục</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Danh mục crypto dài hạn: 50-60% BTC/ETH (blue chip), 20-30% altcoin mid-cap, 10-20% dự án nhỏ tiềm năng cao và 5-10% stablecoin (quỹ cơ hội).</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Kế Hoạch Tiết Kiệm Dài Hạn</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tích hợp crypto vào kế hoạch tiết kiệm dài hạn: hiệu quả thuế, tái cân bằng định kỳ và điều chỉnh danh mục theo khẩu vị rủi ro. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Crypto có phù hợp đầu tư dài hạn không?", answer: "Bitcoin và Ethereum lịch sử mang lại lợi nhuận dương trong chu kỳ 4 năm. Nhưng quá khứ không đảm bảo tương lai. Đầu tư dài hạn đòi hỏi kiên nhẫn và kỷ luật trước biến động." },
                  { question: "Nên tái cân bằng danh mục bao lâu một lần?", answer: "Khuyến nghị mỗi quý hoặc khi chệch 5-10% so với mục tiêu. Tái cân bằng quá thường xuyên tăng chi phí giao dịch và thuế." },
                  { question: "Crypto có nên nằm trong kế hoạch hưu trí?", answer: "Crypto có thể chiếm 5-15% danh mục hưu trí. Hồ sơ rủi ro cao-lợi nhuận cao; điều chỉnh tỷ trọng theo tuổi và khẩu vị rủi ro." }
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
