import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Crypto Cho Vay & Borrowing: Hướng Dẫn Chi Tiết Tiếng Việt 2026 | Degen0x",
  description: "Mọi thứ bạn cần biết về Crypto Cho Vay & Borrowing. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng tiếng Việt.",
  openGraph: {
    type: "article",
    title: "Crypto Cho Vay & Borrowing: Hướng Dẫn Chi Tiết Tiếng Việt 2026",
    description: "Mọi thứ bạn cần biết về Crypto Cho Vay & Borrowing. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫ",
    url: "https://degen0x.com/vi/learn/crypto-lending-borrowing-defi-guide-2026",
    locale: "vi_VN",
    images: [{ url: "https://degen0x.com/og-default.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Crypto Cho Vay & Borrowing: Hướng Dẫn Chi Tiết Tiếng Việt 2026", description: "Mọi thứ bạn cần biết về Crypto Cho Vay & Borrowing. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫ" },
  alternates: {
    canonical: "/vi/learn/crypto-lending-borrowing-defi-guide-2026",
    languages: { "en": "/learn/crypto-lending-borrowing-defi-guide-2026", "tr": "/tr/learn/crypto-lending-borrowing-defi-guide-2026", "vi": "/vi/learn/crypto-lending-borrowing-defi-guide-2026", "pt-BR": "/pt-br/learn/crypto-lending-borrowing-defi-guide-2026", "x-default": "/learn/crypto-lending-borrowing-defi-guide-2026" },
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang Chủ", item: "https://degen0x.com/vi" },
    { "@type": "ListItem", position: 2, name: "Học", item: "https://degen0x.com/vi/learn" },
    { "@type": "ListItem", position: 3, name: "Crypto Cho Vay & Borrowing: Hướng Dẫn Chi Tiết Tiếng Việt 20" }
  ],
};

const articleSchema = generateArticleSchema({
  title: "Crypto Cho Vay & Borrowing: Hướng Dẫn Chi Tiết Tiếng Việt 2026",
  description: "Mọi thứ bạn cần biết về Crypto Cho Vay & Borrowing. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng tiếng Việt.",
  url: "https://degen0x.com/vi/learn/crypto-lending-borrowing-defi-guide-2026",
  publishedDate: "2026-04-21",
  modifiedDate: "2026-04-21",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  { "question": "Crypto Cho Vay & Borrowing là gì và hoạt động như thế nào?", "answer": "Crypto Cho Vay & Borrowing là hệ thống phi tập trung được xây dựng trên công nghệ blockchain. Thông qua hợp đồng thông minh, cho phép thực hiện giao dịch không cần trung gian và đóng vai trò quan trọng trong hệ sinh thái crypto. TVL DeFi vượt \$200 tỷ năm 2026. Aave v4, Uniswap v4 hooks và Pendle cung cấp sản phẩm tài chính thế hệ mới với DeFi tổ chức tăng trưởng mạnh." },
  { "question": "Rủi ro khi đầu tư Crypto Cho Vay & Borrowing là gì?", "answer": "Rủi ro chính: lỗ hổng hợp đồng thông minh, biến động thị trường (dao động 20%+ mỗi ngày là bình thường), bất ổn pháp lý và rủi ro thanh khoản. Nên đa dạng hóa danh mục và sử dụng stop-loss." },
  { "question": "Có gì thay đổi trong lĩnh vực Crypto Cho Vay & Borrowing năm 2026?", "answer": "Năm 2026: quy định MiCA của EU có hiệu lực, Bitcoin spot ETF phổ biến toàn cầu, Ethereum hoàn thành nâng cấp Pectra và DeFi tổ chức tăng trưởng mạnh. Crypto Cho Vay & Borrowing chịu ảnh hưởng trực tiếp từ các phát triển này." },
  { "question": "Sử dụng Crypto Cho Vay & Borrowing tại Việt Nam như thế nào?", "answer": "Tại Việt Nam: 1) hoàn thành xác minh danh tính (KYC) trên sàn giao dịch uy tín, 2) chuyển khoản ngân hàng hoặc P2P để mua crypto bằng VND, 3) Chọn sàn phù hợp từ Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Ghi chép tất cả giao dịch để báo cáo khi cần." }
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
              { label: "Crypto Cho Vay & Borrowing" }
          ]} />
          <article className="mt-8" lang="vi">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">🇻🇳 Tiếng Việt</span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">Trung Cấp</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Crypto Cho Vay & Borrowing: Hướng Dẫn Chi Tiết Tiếng Việt 2026</h1>
            <p className="text-lg text-[#8b949e] mb-10">Mọi thứ bạn cần biết về Crypto Cho Vay & Borrowing. Khái niệm cơ bản, cách hoạt động, rủi ro và cập nhật 2026 — hướng dẫn chi tiết bằng tiếng Việt.</p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Crypto Cho Vay & Borrowing Là Gì?</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Crypto Cho Vay & Borrowing là một trong những thành phần cốt lõi của hệ sinh thái crypto và blockchain. Công nghệ này cho phép người dùng thực hiện giao dịch minh bạch, không cần trung gian nhờ kiến trúc phi tập trung. Tính đến năm 2026, các chỉ số như TVL, số lượng người dùng và hoạt động phát triển trong lĩnh vực Crypto Cho Vay & Borrowing đã tăng trưởng đáng kể. TVL DeFi vượt \$200 tỷ năm 2026. Aave v4, Uniswap v4 hooks và Pendle cung cấp sản phẩm tài chính thế hệ mới với DeFi tổ chức tăng trưởng mạnh. LTV, ngưỡng thanh lý và mô hình lãi suất là tiêu chí so sánh chính cho vay crypto. Đánh giá rủi ro smart contract của Aave và Compound.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cơ Sở Kỹ Thuật và Nguyên Lý Hoạt Động</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Hệ thống Crypto Cho Vay & Borrowing được xây dựng trên các hàm hash mật mã, chữ ký số và cơ chế đồng thuận. Hợp đồng thông minh tự động thực thi giao dịch theo các quy tắc được mã hóa. Cấu trúc này loại bỏ nhu cầu về trung gian tài chính truyền thống, giảm chi phí giao dịch và tăng tốc độ.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Cập Nhật 2026 và Xu Hướng Thị Trường</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Năm 2026, những phát triển quan trọng nhất trong lĩnh vực Crypto Cho Vay & Borrowing: khung pháp lý rõ ràng hơn (đặc biệt quy định MiCA của EU và quyết định của SEC Mỹ), sự chấp nhận từ tổ chức tăng tốc và cải tiến công nghệ. Sau bản cập nhật Pectra của Ethereum và phê duyệt Bitcoin spot ETF, thị trường đã bước vào giai đoạn trưởng thành.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Sử Dụng Crypto Cho Vay & Borrowing tại Việt Nam</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Tại Việt Nam, để sử dụng Crypto Cho Vay & Borrowing bạn cần hoàn thành xác minh danh tính (KYC) trên sàn giao dịch uy tín. Bạn có thể mua crypto bằng VND thông qua chuyển khoản ngân hàng hoặc P2P để mua crypto bằng VND. Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam là những lựa chọn phổ biến. Ngân hàng Nhà nước Việt Nam chưa chính thức công nhận tiền điện tử nhưng không cấm giao dịch cá nhân. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Đánh Giá Rủi Ro và Bảo Mật</h2>
              <p className="text-[#c9d1d9] leading-relaxed">Các rủi ro cần lưu ý khi đầu tư Crypto Cho Vay & Borrowing: lỗ hổng hợp đồng thông minh (exploit và tấn công reentrancy), biến động thị trường (dao động giá 20%+ trong 24 giờ là bình thường), bất ổn pháp lý và rủi ro thanh khoản. Sử dụng lệnh stop-loss, đa dạng hóa danh mục và chỉ đầu tư số tiền bạn chấp nhận mất là những nguyên tắc cơ bản.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Câu Hỏi Thường Gặp</h2>
              <div className="space-y-4">
                {[
                  { question: "Crypto Cho Vay & Borrowing là gì và hoạt động như thế nào?", answer: "Crypto Cho Vay & Borrowing là hệ thống phi tập trung được xây dựng trên công nghệ blockchain. Thông qua hợp đồng thông minh, cho phép thực hiện giao dịch không cần trung gian và đóng vai trò quan trọng trong hệ sinh thái crypto. TVL DeFi vượt \$200 tỷ năm 2026. Aave v4, Uniswap v4 hooks và Pendle cung cấp sản phẩm tài chính thế hệ mới với DeFi tổ chức tăng trưởng mạnh." },
                  { question: "Rủi ro khi đầu tư Crypto Cho Vay & Borrowing là gì?", answer: "Rủi ro chính: lỗ hổng hợp đồng thông minh, biến động thị trường (dao động 20%+ mỗi ngày là bình thường), bất ổn pháp lý và rủi ro thanh khoản. Nên đa dạng hóa danh mục và sử dụng stop-loss." },
                  { question: "Có gì thay đổi trong lĩnh vực Crypto Cho Vay & Borrowing năm 2026?", answer: "Năm 2026: quy định MiCA của EU có hiệu lực, Bitcoin spot ETF phổ biến toàn cầu, Ethereum hoàn thành nâng cấp Pectra và DeFi tổ chức tăng trưởng mạnh. Crypto Cho Vay & Borrowing chịu ảnh hưởng trực tiếp từ các phát triển này." },
                  { question: "Sử dụng Crypto Cho Vay & Borrowing tại Việt Nam như thế nào?", answer: "Tại Việt Nam: 1) hoàn thành xác minh danh tính (KYC) trên sàn giao dịch uy tín, 2) chuyển khoản ngân hàng hoặc P2P để mua crypto bằng VND, 3) Chọn sàn phù hợp từ Remitano, VNDC và các sàn giao dịch phổ biến tại Việt Nam. Chính sách thuế crypto tại Việt Nam đang trong quá trình hoàn thiện — theo dõi quy định mới nhất từ Bộ Tài chính. Ghi chép tất cả giao dịch để báo cáo khi cần." }
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
