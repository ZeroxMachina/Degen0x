import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Purse.io — Hướng Dẫn Thanh Toán Bằng Crypto | Degen0x",
  description: "Purse.io: phương thức thanh toán bằng crypto, nền tảng hỗ trợ và hướng dẫn sử dụng crypto hàng ngày.",
  openGraph: {
    type: "article",
    title: "Purse.io — Hướng Dẫn Thanh Toán Bằng Crypto",
    description: "Purse.io: phương thức thanh toán bằng crypto, nền tảng hỗ trợ và hướng dẫn sử dụng crypto hàng ngày.",
    url: "https://degen0x.com/vi/spending/reviews/purse-io",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Purse.io — Hướng Dẫn Thanh Toán Bằng Crypto", description: "Purse.io: phương thức thanh toán bằng crypto, nền tảng hỗ trợ và hướng dẫn sử dụng crypto hàng ngày." },
  alternates: {
    canonical: "/vi/spending/reviews/purse-io",
    languages: { "en": "/spending/reviews/purse-io", "tr": "/tr/spending/reviews/purse-io", "vi": "/vi/spending/reviews/purse-io", "pt-BR": "/pt-br/spending/reviews/purse-io", "x-default": "/spending/reviews/purse-io" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Chi Tiêu", item: "https://degen0x.com/vi/spending" },
    { "@type": "ListItem", position: 3, name: "Purse.io — Hướng Dẫn Thanh Toán Bằng Crypto" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Purse.io — Hướng Dẫn Thanh Toán Bằng Crypto",
  description: "Purse.io: phương thức thanh toán bằng crypto, nền tảng hỗ trợ và hướng dẫn sử dụng crypto hàng ngày.",
  url: "https://degen0x.com/vi/spending/reviews/purse-io",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Có thể chi tiêu crypto cho những gì?", "answer": "Mua sắm online, đặt phòng du lịch, mua gift card, thanh toán thuê bao và thanh toán tại cửa hàng (qua thẻ crypto)." },
  { "question": "Lightning Network hoạt động thế nào?", "answer": "Lightning Network là giải pháp Layer 2 trên Bitcoin cho phép thanh toán tức thì với chi phí rất thấp. Lý tưởng cho chi tiêu nhỏ hàng ngày." },
  { "question": "Chi tiêu crypto có bị thuế không?", "answer": "Thanh toán bằng crypto về kỹ thuật là giao dịch bán và có thể bị đánh thuế. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Ghi chép chi tiêu để báo cáo." }
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
              { label: "Chi Tiêu", href: "/vi/spending" },
              { label: "Purse.io" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Purse.io — Hướng Dẫn Thanh Toán Bằng Crypto</h1>
            <p className="text-lg text-[#8b949e] mb-10">Purse.io: phương thức thanh toán bằng crypto, nền tảng hỗ trợ và hướng dẫn sử dụng crypto hàng ngày.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Phương Thức Thanh Toán Crypto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hướng dẫn thanh toán bằng crypto cho Purse.io: thanh toán Lightning Network, thẻ ghi nợ crypto, chuyển khoản P2P và tích hợp thương mại điện tử.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Nền Tảng và Cửa Hàng Hỗ Trợ</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các nền tảng chấp nhận thanh toán crypto: trang mua sắm trực tuyến, nền tảng đặt phòng du lịch, dịch vụ thẻ quà tặng và giải pháp cửa hàng vật lý.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">So Sánh Chi Phí và Tốc Độ</h2>
              <p className="text-[#c9d1d9] leading-relaxed">So sánh chi phí và tốc độ các phương thức thanh toán crypto: Bitcoin Lightning vs chuyển Stablecoin vs thanh toán thẻ crypto.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Có thể chi tiêu crypto cho những gì?", answer: "Mua sắm online, đặt phòng du lịch, mua gift card, thanh toán thuê bao và thanh toán tại cửa hàng (qua thẻ crypto)." },
                  { question: "Lightning Network hoạt động thế nào?", answer: "Lightning Network là giải pháp Layer 2 trên Bitcoin cho phép thanh toán tức thì với chi phí rất thấp. Lý tưởng cho chi tiêu nhỏ hàng ngày." },
                  { question: "Chi tiêu crypto có bị thuế không?", answer: "Thanh toán bằng crypto về kỹ thuật là giao dịch bán và có thể bị đánh thuế. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Ghi chép chi tiêu để báo cáo." }
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
