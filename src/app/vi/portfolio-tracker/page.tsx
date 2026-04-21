import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Danh Mục — Đánh Giá Công Cụ Theo Dõi Danh Mục | Degen0x",
  description: "Hướng dẫn toàn diện về Danh Mục bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.",
  openGraph: {
    type: "article",
    title: "Danh Mục — Đánh Giá Công Cụ Theo Dõi Danh Mục",
    description: "Hướng dẫn toàn diện về Danh Mục bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưn",
    url: "https://degen0x.com/vi/portfolio-tracker",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Danh Mục — Đánh Giá Công Cụ Theo Dõi Danh Mục", description: "Hướng dẫn toàn diện về Danh Mục bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưn" },
  alternates: {
    canonical: "/vi/portfolio-tracker",
    languages: { "en": "/portfolio-tracker", "tr": "/tr/portfolio-tracker", "vi": "/vi/portfolio-tracker", "pt-BR": "/pt-br/portfolio-tracker", "x-default": "/portfolio-tracker" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Theo Dõi Danh Mục", item: "https://degen0x.com/vi/portfolio-tracker" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Danh Mục — Đánh Giá Công Cụ Theo Dõi Danh Mục",
  description: "Hướng dẫn toàn diện về Danh Mục bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.",
  url: "https://degen0x.com/vi/portfolio-tracker",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Công cụ theo dõi nào tốt nhất?", "answer": "Phụ thuộc nhu cầu: số sàn hỗ trợ, theo dõi DeFi, báo cáo thuế, ứng dụng mobile và giá. Hướng dẫn so sánh các công cụ hàng đầu." },
  { "question": "Công cụ theo dõi có an toàn không?", "answer": "Hầu hết dùng API key read-only (chỉ xem số dư, không giao dịch được). Kiểm tra quyền API, không cấp quyền rút tiền và bật 2FA." }
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
              { label: "Theo Dõi Danh Mục", href: "/vi/portfolio-tracker" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Danh Mục — Đánh Giá Công Cụ Theo Dõi Danh Mục</h1>
            <p className="text-lg text-[#8b949e] mb-10">Hướng dẫn toàn diện về Danh Mục bằng tiếng Việt. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đánh Giá Công Cụ Theo Dõi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Công cụ theo dõi danh mục Danh Mục: sàn hỗ trợ, tích hợp ví, theo dõi giá thời gian thực và báo cáo hiệu suất.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">So Sánh Tính Năng</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tính năng cần có trong công cụ theo dõi: đồng bộ nhiều sàn, theo dõi vị thế DeFi, báo cáo thuế, cảnh báo giá và phân tích lãi/lỗ.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Công cụ theo dõi nào tốt nhất?", answer: "Phụ thuộc nhu cầu: số sàn hỗ trợ, theo dõi DeFi, báo cáo thuế, ứng dụng mobile và giá. Hướng dẫn so sánh các công cụ hàng đầu." },
                  { question: "Công cụ theo dõi có an toàn không?", answer: "Hầu hết dùng API key read-only (chỉ xem số dư, không giao dịch được). Kiểm tra quyền API, không cấp quyền rút tiền và bật 2FA." }
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
