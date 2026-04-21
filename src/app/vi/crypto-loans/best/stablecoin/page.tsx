import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Stablecoin Vay — So Sánh Nền Tảng Vay Crypto | Degen0x",
  description: "So sánh Stablecoin Vay: lãi suất, yêu cầu tài sản thế chấp, rủi ro thanh lý và độ tin cậy nền tảng.",
  openGraph: {
    type: "article",
    title: "Stablecoin Vay — So Sánh Nền Tảng Vay Crypto",
    description: "So sánh Stablecoin Vay: lãi suất, yêu cầu tài sản thế chấp, rủi ro thanh lý và độ tin cậy nền tảng.",
    url: "https://degen0x.com/vi/crypto-loans/best/stablecoin",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Stablecoin Vay — So Sánh Nền Tảng Vay Crypto", description: "So sánh Stablecoin Vay: lãi suất, yêu cầu tài sản thế chấp, rủi ro thanh lý và độ tin cậy nền tảng." },
  alternates: {
    canonical: "/vi/crypto-loans/best/stablecoin",
    languages: { "en": "/crypto-loans/best/stablecoin", "tr": "/tr/crypto-loans/best/stablecoin", "vi": "/vi/crypto-loans/best/stablecoin", "pt-BR": "/pt-br/crypto-loans/best/stablecoin", "x-default": "/crypto-loans/best/stablecoin" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Vay Crypto", item: "https://degen0x.com/vi/crypto-loans" },
    { "@type": "ListItem", position: 3, name: "Stablecoin Vay — So Sánh Nền Tảng Vay Crypto" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Stablecoin Vay — So Sánh Nền Tảng Vay Crypto",
  description: "So sánh Stablecoin Vay: lãi suất, yêu cầu tài sản thế chấp, rủi ro thanh lý và độ tin cậy nền tảng.",
  url: "https://degen0x.com/vi/crypto-loans/best/stablecoin",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Vay crypto có thế chấp hoạt động thế nào?", "answer": "Bạn nạp crypto làm tài sản thế chấp và nhận stablecoin hoặc fiat. LTV thường 50-75%. Khi giá trị thế chấp giảm, có nguy cơ margin call hoặc thanh lý." },
  { "question": "Rủi ro thanh lý là gì?", "answer": "Khi giá trị thế chấp dưới ngưỡng, vị thế tự động bị thanh lý. Bảo vệ: chọn LTV thấp, đa dạng thế chấp, đặt cảnh báo giá và chuẩn bị quỹ bổ sung." },
  { "question": "Flash loan là gì?", "answer": "Flash loan là khoản vay DeFi không cần thế chấp, vay và trả trong cùng block. Dùng cho arbitrage và tối ưu thanh khoản nhưng phức tạp và rủi ro." }
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
              { label: "Vay Crypto", href: "/vi/crypto-loans" },
              { label: "Stablecoin Vay" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Stablecoin Vay — So Sánh Nền Tảng Vay Crypto</h1>
            <p className="text-lg text-[#8b949e] mb-10">So sánh Stablecoin Vay: lãi suất, yêu cầu tài sản thế chấp, rủi ro thanh lý và độ tin cậy nền tảng.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Nền Tảng Vay Crypto</h2>
              <p className="text-[#c9d1d9] leading-relaxed">So sánh nền tảng vay Stablecoin Vay: lãi suất (APR/APY), tài sản thế chấp hỗ trợ, tỷ lệ thế chấp tối thiểu (LTV) và rủi ro thanh khoản.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Quản Lý Tài Sản Thế Chấp</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Rủi ro lớn nhất trong vay crypto có thế chấp là thanh lý khi giá trị tài sản giảm. Quản lý tỷ lệ thế chấp, cơ chế margin call và chiến lược bảo vệ. Vay crypto tại Việt Nam chủ yếu thông qua các nền tảng quốc tế như Aave và Compound.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Flash Loan và Giao Thức DeFi</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Giao thức cho vay phi tập trung (Aave, Compound, MakerDAO): flash loan, tùy chọn lãi suất biến đổi/cố định và cơ chế quản trị.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Vay crypto có thế chấp hoạt động thế nào?", answer: "Bạn nạp crypto làm tài sản thế chấp và nhận stablecoin hoặc fiat. LTV thường 50-75%. Khi giá trị thế chấp giảm, có nguy cơ margin call hoặc thanh lý." },
                  { question: "Rủi ro thanh lý là gì?", answer: "Khi giá trị thế chấp dưới ngưỡng, vị thế tự động bị thanh lý. Bảo vệ: chọn LTV thấp, đa dạng thế chấp, đặt cảnh báo giá và chuẩn bị quỹ bổ sung." },
                  { question: "Flash loan là gì?", answer: "Flash loan là khoản vay DeFi không cần thế chấp, vay và trả trong cùng block. Dùng cho arbitrage và tối ưu thanh khoản nhưng phức tạp và rủi ro." }
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
