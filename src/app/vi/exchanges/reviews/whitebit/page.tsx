import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "WhiteBIT: Đánh Giá Phí, Bảo Mật và Trải Nghiệm Người Dùng | Degen0x",
  description: "Đánh giá sàn WhiteBIT: phí giao dịch, bảo mật, tiền được hỗ trợ và tùy chọn nạp/rút VND. So sánh chi tiết cho nhà đầu tư Việt Nam.",
  openGraph: {
    type: "article",
    title: "WhiteBIT: Đánh Giá Phí, Bảo Mật và Trải Nghiệm Người Dùng",
    description: "Đánh giá sàn WhiteBIT: phí giao dịch, bảo mật, tiền được hỗ trợ và tùy chọn nạp/rút VND. So sánh chi tiết cho nhà đầu tư",
    url: "https://degen0x.com/vi/exchanges/reviews/whitebit",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "WhiteBIT: Đánh Giá Phí, Bảo Mật và Trải Nghiệm Người Dùng", description: "Đánh giá sàn WhiteBIT: phí giao dịch, bảo mật, tiền được hỗ trợ và tùy chọn nạp/rút VND. So sánh chi tiết cho nhà đầu tư" },
  alternates: {
    canonical: "/vi/exchanges/reviews/whitebit",
    languages: { "en": "/exchanges/reviews/whitebit", "tr": "/tr/exchanges/reviews/whitebit", "vi": "/vi/exchanges/reviews/whitebit", "pt-BR": "/pt-br/exchanges/reviews/whitebit", "x-default": "/exchanges/reviews/whitebit" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Sàn Giao Dịch", item: "https://degen0x.com/vi/exchanges" },
    { "@type": "ListItem", position: 3, name: "WhiteBIT: Đánh Giá Phí, Bảo Mật và Trải Nghiệm Người Dùng" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "WhiteBIT: Đánh Giá Phí, Bảo Mật và Trải Nghiệm Người Dùng",
  description: "Đánh giá sàn WhiteBIT: phí giao dịch, bảo mật, tiền được hỗ trợ và tùy chọn nạp/rút VND. So sánh chi tiết cho nhà đầu tư Việt Nam.",
  url: "https://degen0x.com/vi/exchanges/reviews/whitebit",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Phí giao dịch trên WhiteBIT như thế nào?", "answer": "Phí spot trên WhiteBIT chia thành maker và taker. Giảm phí theo cấp VIP dựa trên khối lượng giao dịch. Kiểm tra phí nạp/rút VND có thêm hoa hồng không. So sánh phí chi tiết trong hướng dẫn này." },
  { "question": "WhiteBIT có an toàn không?", "answer": "Đánh giá bảo mật sàn: tỷ lệ cold wallet, yêu cầu 2FA, whitelist IP, quy trình xác nhận rút tiền và quỹ bảo hiểm. Hạ tầng bảo mật và lịch sử sự cố của WhiteBIT được phân tích chi tiết." },
  { "question": "Tôi có thể sử dụng WhiteBIT từ Việt Nam không?", "answer": "Khả năng truy cập WhiteBIT từ Việt Nam, yêu cầu KYC, tùy chọn nạp VND (chuyển khoản ngân hàng, P2P) và tình trạng pháp lý. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân." },
  { "question": "So sánh WhiteBIT với Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam?", "answer": "Khác biệt giữa sàn quốc tế và sàn nội địa: cấu trúc phí, số lượng coin, thanh khoản, cặp VND và chất lượng hỗ trợ. Ưu nhược điểm được so sánh chi tiết." }
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
              { label: "Sàn Giao Dịch", href: "/vi/exchanges" },
              { label: "WhiteBIT" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">WhiteBIT: Đánh Giá Phí, Bảo Mật và Trải Nghiệm Người Dùng</h1>
            <p className="text-lg text-[#8b949e] mb-10">Đánh giá sàn WhiteBIT: phí giao dịch, bảo mật, tiền được hỗ trợ và tùy chọn nạp/rút VND. So sánh chi tiết cho nhà đầu tư Việt Nam.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đánh Giá Tổng Quan</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Bài đánh giá toàn diện về sàn WhiteBIT: dịch vụ, cấu trúc phí, biện pháp bảo mật và trải nghiệm người dùng. So sánh với Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam và thông tin dành riêng cho nhà đầu tư Việt Nam.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Phí Giao Dịch và Cấu Trúc Chi Phí</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Cấu trúc phí ảnh hưởng trực tiếp đến lợi nhuận đầu tư. Phí giao dịch spot (maker/taker) của WhiteBIT, phí futures, chi phí nạp/rút và giảm giá VIP được phân tích chi tiết. So sánh phí đặc biệt cho người dùng giao dịch bằng VND.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Bảo Mật và Tuân Thủ Quy Định</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Bảo mật sàn giao dịch là yếu tố then chốt để bảo vệ tài sản crypto. Hệ thống bảo mật đa lớp của WhiteBIT: tỷ lệ cold wallet, xác thực hai yếu tố (2FA), whitelist IP, quy trình xác nhận rút tiền và quỹ bảo hiểm. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Tài Sản và Tính Năng Hỗ Trợ</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các crypto có thể giao dịch trên WhiteBIT, tiền tệ fiat hỗ trợ, tùy chọn futures, dịch vụ staking và tính năng bổ sung (launchpad, chương trình earn, dịch vụ thẻ). Thông tin cập nhật về khả năng truy cập từ Việt Nam và cặp giao dịch VND.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Trải Nghiệm Người Dùng và Ứng Dụng Di Động</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Giao diện người dùng, các loại lệnh, công cụ biểu đồ, hiệu suất ứng dụng di động và chất lượng hỗ trợ khách hàng. Đánh giá mức độ thân thiện cho cả người mới bắt đầu và trader có kinh nghiệm.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Phí giao dịch trên WhiteBIT như thế nào?", answer: "Phí spot trên WhiteBIT chia thành maker và taker. Giảm phí theo cấp VIP dựa trên khối lượng giao dịch. Kiểm tra phí nạp/rút VND có thêm hoa hồng không. So sánh phí chi tiết trong hướng dẫn này." },
                  { question: "WhiteBIT có an toàn không?", answer: "Đánh giá bảo mật sàn: tỷ lệ cold wallet, yêu cầu 2FA, whitelist IP, quy trình xác nhận rút tiền và quỹ bảo hiểm. Hạ tầng bảo mật và lịch sử sự cố của WhiteBIT được phân tích chi tiết." },
                  { question: "Tôi có thể sử dụng WhiteBIT từ Việt Nam không?", answer: "Khả năng truy cập WhiteBIT từ Việt Nam, yêu cầu KYC, tùy chọn nạp VND (chuyển khoản ngân hàng, P2P) và tình trạng pháp lý. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân." },
                  { question: "So sánh WhiteBIT với Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam?", answer: "Khác biệt giữa sàn quốc tế và sàn nội địa: cấu trúc phí, số lượng coin, thanh khoản, cặp VND và chất lượng hỗ trợ. Ưu nhược điểm được so sánh chi tiết." }
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
