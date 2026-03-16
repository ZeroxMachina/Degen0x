import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `SALT Lending Review (${CURRENT_YEAR}) | degen0x`,
  description: "In-depth SALT Lending review covering loan terms, supported collateral, rates, security, and whether SALT is right for your crypto borrowing needs.",
};

export default function SaltLendingReviewPage() {
  return (
    <ReviewPage
      product={{
        name: "SALT Lending",
        slug: "salt-lending",
        rating: 3.8,
        description: "SALT Lending is a centralized crypto lending platform that allows users to borrow US dollars and stablecoins against Bitcoin, Ethereum, and other major cryptocurrencies. The platform focuses on straightforward, collateral-backed loans with competitive terms for US-based borrowers.",
        pros: [
          "No credit check required for borrowing",
          "Competitive rates starting from 5.95% APR",
          "Supports BTC, ETH, and major altcoins as collateral",
          "Available to US residents in most states",
        ],
        cons: [
          "Limited to US-based borrowers",
          "Fewer collateral options than competitors",
          "Requires KYC verification",
        ],
        bestFor: "US-based borrowers wanting straightforward crypto-backed loans",
        affiliateUrl: "#",
        category: "crypto-loans",
      }}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="SALT Lending has been operating since 2016, making it one of the oldest crypto lending platforms. The name stands for Secured Automated Lending Technology. SALT focuses on the US market and offers a regulated, compliant lending experience. Borrowers can access loans from $5,000 to over $100 million using cryptocurrency as collateral. The platform emphasizes regulatory compliance and operates under state lending licenses across the United States."
      sections={[
        { id: "loan-terms", title: "Loan Terms", content: "SALT offers loan terms from 1 to 60 months with APRs starting at 5.95%. Borrowers can choose between interest-only and principal-plus-interest payment structures. LTV ratios range from 30% to 70% depending on the collateral type and desired rate. Higher LTV means higher rates. The platform supports BTC, ETH, LTC, and DOGE as collateral assets." },
        { id: "borrowing-experience", title: "Borrowing Experience", content: "The application process involves account creation, KYC verification, collateral deposit, and loan approval. Loans are typically funded within 24 hours of collateral confirmation. The dashboard provides clear visibility into loan status, collateral value, and LTV ratios. SALT sends notifications when collateral values approach margin call levels." },
        { id: "security-and-custody", title: "Security and Custody", content: "SALT uses institutional-grade custody solutions for storing customer collateral. The platform maintains insurance coverage on custodied assets and follows SOC 2 compliance standards. Two-factor authentication is required for all accounts. SALT has not experienced any reported security breaches or loss of customer funds." },
      ]}
      fees={{
        "Interest Rate": "From 5.95% APR",
        "Origination Fee": "Varies by loan",
        "Early Repayment": "No prepayment penalty",
        "Withdrawal Fee": "Standard network fees",
      }}
      security={[
        "Institutional-grade custody for collateral",
        "Insurance coverage on custodied assets",
        "SOC 2 compliance",
        "Two-factor authentication required",
        "US state lending licenses",
      ]}
      features={[
        "Crypto-backed loans from $5K to $100M+",
        "BTC, ETH, LTC, DOGE collateral support",
        "Loan terms from 1 to 60 months",
        "Interest-only payment option",
        "Automated margin call notifications",
        "US regulatory compliance",
      ]}
      faqs={[
        { question: "Is SALT Lending available outside the US?", answer: "SALT primarily serves US-based borrowers. International availability is limited and varies by jurisdiction. Check their website for current geographic restrictions." },
        { question: "What happens if my collateral drops in value?", answer: "SALT monitors collateral values and sends margin call notifications when LTV rises above agreed thresholds. You can add more collateral or make partial repayments to reduce your LTV and avoid liquidation." },
      ]}
      relatedReviews={[
        { name: "Nexo", slug: "/crypto-loans/reviews/nexo" },
        { name: "YouHodler", slug: "/crypto-loans/reviews/youhodler" },
      ]}
      relatedGuides={[
        { title: "Best No-Credit-Check Loans", href: "/crypto-loans/best/no-credit-check" },
        { title: "Loan Risks Guide", href: "/crypto-loans/learn/loan-risks-guide" },
      ]}
    />
  );
}
