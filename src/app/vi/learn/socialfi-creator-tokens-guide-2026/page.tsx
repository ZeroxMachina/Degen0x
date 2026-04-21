import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "SocialFi: Hướng Dẫn Chi Tiết Tiếng Việt 2026 | Degen0x",
  description: "Mọi thứ bạn cần biết về SocialFi. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng tiếng Việt.",
  openGraph: {
    type: "article",
    title: "SocialFi: Hướng Dẫn Chi Tiết Tiếng Việt 2026",
    description: "Mọi thứ bạn cần biết về SocialFi. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng ti",
    url: "https://degen0x.com/vi/learn/socialfi-creator-tokens-guide-2026",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "SocialFi: Hướng Dẫn Chi Tiết Tiếng Việt 2026", description: "Mọi thứ bạn cần biết về SocialFi. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng ti" },
  alternates: {
    canonical: "/vi/learn/socialfi-creator-tokens-guide-2026",
    languages: { "en": "/learn/socialfi-creator-tokens-guide-2026", "tr": "/tr/learn/socialfi-creator-tokens-guide-2026", "vi": "/vi/learn/socialfi-creator-tokens-guide-2026", "pt-BR": "/pt-br/learn/socialfi-creator-tokens-guide-2026", "x-default": "/learn/socialfi-creator-tokens-guide-2026" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Học", item: "https://degen0x.com/vi/learn" },
    { "@type": "ListItem", position: 3, name: "SocialFi: Hướng Dẫn Chi Tiết Tiếng Việt 2026" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "SocialFi: Hướng Dẫn Chi Tiết Tiếng Việt 2026",
  description: "Mọi thứ bạn cần biết về SocialFi. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng tiếng Việt.",
  url: "https://degen0x.com/vi/learn/socialfi-creator-tokens-guide-2026",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "SocialFi là gì và hoạt động như thế nào?", "answer": "SocialFi là thành phần quan trọng của hạ tầng Web3. Được xây dựng trên các giao thức phi tập trung, đảm bảo người dùng có toàn quyền kiểm soát tài sản của mình." },
  { "question": "Rủi ro khi đầu tư SocialFi là gì?", "answer": "Rủi ro cơ bản gồm lỗi công nghệ, hạn chế pháp lý, rủi ro đối tác (sụp đổ sàn như FTX) và thao túng market maker. Sử dụng cold wallet và nghiên cứu kỹ là biện pháp bảo vệ tốt nhất." },
  { "question": "Có gì thay đổi trong lĩnh vực SocialFi năm 2026?", "answer": "Cột mốc 2026: mở rộng thử nghiệm CBDC, giải pháp interoperability cross-chain trưởng thành, account abstraction phổ biến và zero-knowledge proof ứng dụng thực tiễn." },
  { "question": "Sử dụng SocialFi tại Việt Nam như thế nào?", "answer": "Tại Việt Nam: 1) hoàn thành xác minh danh tính (KYC) trên sàn giao dịch uy tín, 2) chuyển khoản ngân hàng hoặc P2P để mua crypto bằng VND, 3) Chọn sàn phù hợp từ Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Ghi chép tất cả giao dịch để báo cáo khi cần." }
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
              { label: "Học", href: "/vi/learn" },
              { label: "SocialFi" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">SocialFi: Hướng Dẫn Chi Tiết Tiếng Việt 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Mọi thứ bạn cần biết về SocialFi. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng tiếng Việt.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">SocialFi Là Gì?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Trong hệ sinh thái tiền điện tử, SocialFi có vị trí chiến lược quan trọng. Mô hình phát triển mã nguồn mở và cơ chế quản trị cộng đồng mang lại cấu trúc minh bạch. Các tích hợp trên Ethereum, Solana và các mạng lớn khác đang mở rộng phạm vi ứng dụng của SocialFi.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cơ Sở Kỹ Thuật và Nguyên Lý Hoạt Động</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Cơ sở hạ tầng SocialFi được xây dựng trên kiến trúc đa lớp: lớp cơ sở (Layer 1) đảm bảo đồng thuận và bảo mật, trong khi các lớp trên (Layer 2) tối ưu khả năng mở rộng và tốc độ. Phương pháp này tối ưu hóa cả bảo mật lẫn trải nghiệm người dùng.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cập Nhật 2026 và Xu Hướng Thị Trường</h2>
              <p className="text-[#c9d1d9] leading-relaxed">SocialFi trong năm 2026 đã có cấu trúc thị trường trưởng thành hơn so với các năm trước. Các nghiên cứu CBDC, danh mục mới như DePIN (Mạng Hạ Tầng Vật Lý Phi Tập Trung) và sự chấp nhận kiến trúc blockchain modular đang tái định hình hệ sinh thái.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sử Dụng SocialFi tại Việt Nam</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tại Việt Nam, để sử dụng SocialFi bạn cần hoàn thành xác minh danh tính (KYC) trên sàn giao dịch uy tín. Bạn có thể mua crypto bằng VND thông qua chuyển khoản ngân hàng hoặc P2P để mua crypto bằng VND. Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam là những lựa chọn phổ biến. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đánh Giá Rủi Ro và Bảo Mật</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hiểu rõ các rủi ro liên quan đến SocialFi là nền tảng của quyết định đầu tư sáng suốt. Rủi ro thị trường (biến động), rủi ro công nghệ (lỗi code), rủi ro đối tác (sàn phá sản — như trường hợp FTX) và rủi ro pháp lý (cấm hoặc hạn chế) cần được đánh giá. Sử dụng cold wallet và bảo quản khóa riêng tư an toàn là biện pháp bảo mật quan trọng nhất.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "SocialFi là gì và hoạt động như thế nào?", answer: "SocialFi là thành phần quan trọng của hạ tầng Web3. Được xây dựng trên các giao thức phi tập trung, đảm bảo người dùng có toàn quyền kiểm soát tài sản của mình." },
                  { question: "Rủi ro khi đầu tư SocialFi là gì?", answer: "Rủi ro cơ bản gồm lỗi công nghệ, hạn chế pháp lý, rủi ro đối tác (sụp đổ sàn như FTX) và thao túng market maker. Sử dụng cold wallet và nghiên cứu kỹ là biện pháp bảo vệ tốt nhất." },
                  { question: "Có gì thay đổi trong lĩnh vực SocialFi năm 2026?", answer: "Cột mốc 2026: mở rộng thử nghiệm CBDC, giải pháp interoperability cross-chain trưởng thành, account abstraction phổ biến và zero-knowledge proof ứng dụng thực tiễn." },
                  { question: "Sử dụng SocialFi tại Việt Nam như thế nào?", answer: "Tại Việt Nam: 1) hoàn thành xác minh danh tính (KYC) trên sàn giao dịch uy tín, 2) chuyển khoản ngân hàng hoặc P2P để mua crypto bằng VND, 3) Chọn sàn phù hợp từ Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Ghi chép tất cả giao dịch để báo cáo khi cần." }
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
